"use client";

import {
  Component,
  type ErrorInfo,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { v2Runtime, V2_STATIC_MODE_EVENT } from "@/lib/portfolio/v2-runtime";
import { reportV2EntryFailure } from "@/lib/portfolio/v2-entry-readiness";

const DynamicUniverse = dynamic(
  () =>
    import("./v2-persistent-universe").then((module) => module.V2PersistentUniverse),
  {
    ssr: false,
    loading: () => null,
  },
);

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2", { powerPreference: "high-performance" }) ||
        canvas.getContext("webgl", { powerPreference: "high-performance" }),
    );
  } catch {
    return false;
  }
}

function V2StaticUniverse({ showEarth = false }: { showEarth?: boolean }) {
  return (
    <div className="v2-static-universe fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="v2-static-stars absolute inset-0" />
      {showEarth ? <div className="v2-static-earth absolute" /> : null}
    </div>
  );
}

class UniverseErrorBoundary extends Component<
  { children: ReactNode; onFailure: () => void },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("V2 WebGL experience unavailable; using static fallback.", {
      message: error.message,
      componentStack: info.componentStack,
    });
    this.props.onFailure();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function V2DebugPanel() {
  const [visible] = useState(
    () =>
      process.env.NODE_ENV !== "production" &&
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).has("v2debug"),
  );
  const [snapshot, setSnapshot] = useState(v2Runtime.debug);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    const timer = window.setInterval(() => {
      setSnapshot({ ...v2Runtime.debug });
    }, 250);
    return () => window.clearInterval(timer);
  }, []);

  if (!visible) return null;
  return (
    <>
      <div className="v2-debug-safe-zone pointer-events-none fixed inset-y-0 left-[6%] z-[90] w-[42%]" />
      <aside className="fixed bottom-4 left-4 z-[91] w-72 rounded-lg border border-cyan-400/30 bg-slate-950/90 p-3 font-mono text-[11px] leading-5 text-slate-200 shadow-2xl">
        <strong className="text-cyan-300">V2 DEBUG · DEVELOPMENT</strong>
        <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3">
          <dt>Scene</dt><dd>{snapshot.activeDestination}</dd>
          <dt>Progress</dt><dd>{snapshot.progress.toFixed(3)}</dd>
          <dt>Camera</dt><dd>{snapshot.cameraPosition.map((value) => value.toFixed(1)).join(", ")}</dd>
          <dt>Target</dt><dd>{snapshot.cameraTarget.map((value) => value.toFixed(1)).join(", ")}</dd>
          <dt>Earth</dt><dd>{snapshot.earthRotation.map((value) => value.toFixed(2)).join(", ")}</dd>
          <dt>Draws</dt><dd>{snapshot.drawCalls}</dd>
          <dt>Triangles</dt><dd>{snapshot.triangles.toLocaleString()}</dd>
          <dt>Textures</dt><dd>{snapshot.textures}</dd>
          <dt>DPR</dt><dd>{snapshot.dpr.toFixed(2)}</dd>
          <dt>FPS</dt><dd>{snapshot.fps}</dd>
          <dt>Quality</dt><dd>{snapshot.qualityTier}</dd>
        </dl>
      </aside>
    </>
  );
}

export function V2UniverseShell() {
  const [webglAvailable, setWebglAvailable] = useState(false);
  const [staticMode, setStaticMode] = useState(true);
  const [enhance, setEnhance] = useState(false);
  const [showEarthPoster, setShowEarthPoster] = useState(false);
  const [sceneKey, setSceneKey] = useState(0);
  const contextRetries = useRef(0);
  const pathname = usePathname();
  const isUniverseRoute = pathname === "/v2";

  /* Rebuild the renderer a couple of times before conceding to static
     artwork, so a single lost context does not permanently flatten the page. */
  const retryOrFallBack = useCallback(() => {
    if (contextRetries.current < 2) {
      contextRetries.current += 1;
      window.setTimeout(() => setSceneKey((key) => key + 1), 400);
      return;
    }
    reportV2EntryFailure("webgl");
    setStaticMode(true);
    setEnhance(false);
  }, []);

  useEffect(() => {
    sessionStorage.removeItem("v2-static-mode");
    const available = supportsWebGL();
    let enhancementTimer: number | undefined;
    if (!available) {
      console.warn("V2 WebGL unavailable; static cosmic artwork enabled.");
      reportV2EntryFailure("webgl");
    }
    const frame = window.requestAnimationFrame(() => {
      setWebglAvailable(available);
      setStaticMode(!available);
      if (available) {
        enhancementTimer = window.setTimeout(() => setEnhance(true), 220);
      }
    });

    const activate = () => {
      if (available) setEnhance(true);
    };
    const handleScroll = () => {
      if (window.scrollY > 16) activate();
    };
    window.addEventListener("pointerdown", activate, { passive: true, once: true });
    window.addEventListener("touchstart", activate, { passive: true, once: true });
    window.addEventListener("keydown", activate, { once: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const listener = (event: Event) => {
      const detail = (
        event as CustomEvent<{ staticMode: boolean; reason?: string }>
      ).detail;
      const next = Boolean(detail?.staticMode);
      /* A lost context is usually recoverable (a second context existed, the
         tab was backgrounded, the GPU reset). Rebuild the renderer before
         giving up, so one hiccup does not cost the visitor the whole scene. */
      if (next && detail?.reason === "context") {
        retryOrFallBack();
        return;
      }
      setStaticMode(next);
      if (next) setEnhance(false);
    };
    window.addEventListener(V2_STATIC_MODE_EVENT, listener);
    return () => {
      window.cancelAnimationFrame(frame);
      if (enhancementTimer !== undefined) window.clearTimeout(enhancementTimer);
      window.removeEventListener("pointerdown", activate);
      window.removeEventListener("touchstart", activate);
      window.removeEventListener("keydown", activate);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(V2_STATIC_MODE_EVENT, listener);
    };
  }, [retryOrFallBack]);

  /* The hero node is replaced on every client-side route change, so the
     observer has to be rebuilt per route or it keeps watching a detached
     element and the Earth poster never comes back. */
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowEarthPoster(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(hero);
    return () => {
      observer.disconnect();
      setShowEarthPoster(false);
    };
  }, [pathname]);

  /* Returning to /v2 must restore the scene. Static mode is a fallback for a
     real failure, not a one-way switch that survives navigation. Only fires
     after an actual departure, so the first paint keeps its deferred start. */
  const leftUniverseRoute = useRef(false);
  useEffect(() => {
    if (!isUniverseRoute) {
      leftUniverseRoute.current = true;
      return;
    }
    if (!leftUniverseRoute.current || !webglAvailable) return;
    contextRetries.current = 0;
    setStaticMode(false);
    setEnhance(true);
  }, [isUniverseRoute, webglAvailable]);

  return (
    <>
      <V2StaticUniverse showEarth={showEarthPoster} />
      {!staticMode && enhance && isUniverseRoute ? (
        /* The boundary is keyed too. Without this it latches `failed` on the
           first throw and keeps rendering null, so re-keying only the child
           could never bring the scene back. */
        <UniverseErrorBoundary key={sceneKey} onFailure={retryOrFallBack}>
          <DynamicUniverse />
        </UniverseErrorBoundary>
      ) : null}
      <V2DebugPanel />
    </>
  );
}

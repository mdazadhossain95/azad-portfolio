"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  getV2EntryReadiness,
  markV2EntryReady,
  V2_ENTRY_FAILURE_EVENT,
  V2_ENTRY_READINESS_EVENT,
} from "@/lib/portfolio/v2-entry-readiness";
import { V2_STATIC_MODE_EVENT } from "@/lib/portfolio/v2-runtime";

const ENTRY_SEEN_KEY = "v2-cosmic-entry-seen";
const MAX_WAIT_MS = 10_000;
const LIGHTWEIGHT_OFFER_MS = 4_500;
const DEBUG_ENTRY_DURATION_MS = 30_000;

function setBackgroundInert(inert: boolean) {
  const backgroundContent = document.querySelectorAll<HTMLElement>(
    'body > a[href="#main-content"], .v2-theme > header, .v2-theme > main, .v2-theme > footer, .v2-theme > aside',
  );
  backgroundContent.forEach((element) => {
    if (inert) element.setAttribute("inert", "");
    else element.removeAttribute("inert");
  });
}

export function V2CosmicEntry() {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [target, setTarget] = useState(() => getV2EntryReadiness().progress);
  const [readyKeys, setReadyKeys] = useState<string[]>(
    () => getV2EntryReadiness().ready,
  );
  const [returning, setReturning] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [lightweightOffered, setLightweightOffered] = useState(false);
  const [fallback, setFallback] = useState(false);
  const frameRef = useRef<number | null>(null);
  const debugStartRef = useRef(0);
  /* This component returns null once it is done but stays mounted in the V2
     layout, so nothing here cleans itself up. Every pending timer has to be
     cancelled explicitly, or the failsafe below fires minutes later and tears
     down a scene the visitor is already using. */
  const failsafeTimers = useRef<number[]>([]);
  const finishedRef = useRef(false);

  const finish = useCallback((mode: "enhanced" | "returning" | "skip" | "lightweight") => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    failsafeTimers.current.forEach((id) => window.clearTimeout(id));
    failsafeTimers.current = [];
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (mode === "lightweight") {
      window.dispatchEvent(
        new CustomEvent(V2_STATIC_MODE_EVENT, {
          detail: { staticMode: true },
        }),
      );
    }
    sessionStorage.setItem(ENTRY_SEEN_KEY, "true");
    setLeaving(true);
    const hashTarget =
      window.location.hash.length > 1
        ? document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
        : null;
    const destination = hashTarget ?? document.getElementById("hero");
    window.setTimeout(() => {
      destination?.scrollIntoView({ behavior: "auto", block: "start" });
      setBackgroundInert(false);
      setMounted(false);
    }, 320);
  }, []);

  useEffect(() => {
    markV2EntryReady("html");
    setBackgroundInert(true);
    const isDebug = new URLSearchParams(window.location.search).has("v2debug");
    debugStartRef.current = performance.now();

    const visualFrame = window.requestAnimationFrame(() => {
      setDebugMode(isDebug);
      setReturning(isDebug ? false : sessionStorage.getItem(ENTRY_SEEN_KEY) === "true");
      markV2EntryReady("visual");
      const snapshot = getV2EntryReadiness();
      setTarget(snapshot.progress);
      setReadyKeys(snapshot.ready);
      if (snapshot.failure) {
        setFallback(true);
        setLightweightOffered(true);
      }
    });

    document.fonts.ready
      .then(() => markV2EntryReady("fonts"))
      .catch(() => markV2EntryReady("fonts"));

    const poster = new Image();
    poster.src = "/textures/planets/earth-day-poster.webp";
    poster
      .decode()
      .then(() => markV2EntryReady("earthPoster"))
      .catch(() => markV2EntryReady("earthPoster"));

    const readinessListener = (event: Event) => {
      const detail = (
        event as CustomEvent<{ progress: number; ready: string[] }>
      ).detail;
      setTarget(detail.progress);
      setReadyKeys(detail.ready);
    };
    const failureListener = () => {
      setFallback(true);
      setLightweightOffered(true);
    };
    window.addEventListener(V2_ENTRY_READINESS_EVENT, readinessListener);
    window.addEventListener(V2_ENTRY_FAILURE_EVENT, failureListener);

    const offerTimer = isDebug
      ? undefined
      : window.setTimeout(
          () => setLightweightOffered(true),
          LIGHTWEIGHT_OFFER_MS,
        );
    const timeout = isDebug
      ? undefined
      : window.setTimeout(() => {
          setFallback(true);
          setLightweightOffered(true);
        }, MAX_WAIT_MS);
    const forcedExit = isDebug
      ? undefined
      : window.setTimeout(
          () => finish("lightweight"),
          MAX_WAIT_MS + 5_000,
        );

    failsafeTimers.current = [offerTimer, timeout, forcedExit].filter(
      (id): id is number => id !== undefined,
    );

    return () => {
      window.cancelAnimationFrame(visualFrame);
      window.removeEventListener(V2_ENTRY_READINESS_EVENT, readinessListener);
      window.removeEventListener(V2_ENTRY_FAILURE_EVENT, failureListener);
      if (offerTimer !== undefined) window.clearTimeout(offerTimer);
      if (timeout !== undefined) window.clearTimeout(timeout);
      if (forcedExit !== undefined) window.clearTimeout(forcedExit);
      setBackgroundInert(false);
    };
  }, [finish]);

  const effectiveTarget = useMemo(() => {
    if (!returning) return target;
    const returningWeights: Record<string, number> = {
      html: 25,
      visual: 25,
      fonts: 15,
      earthPoster: 35,
    };
    return readyKeys.reduce(
      (total, key) => total + (returningWeights[key] ?? 0),
      0,
    );
  }, [readyKeys, returning, target]);

  useEffect(() => {
    if (!mounted) return;
    const tick = () => {
      setProgress((current) => {
        const debugCeiling = debugMode
          ? Math.min(
              100,
              ((performance.now() - debugStartRef.current) /
                DEBUG_ENTRY_DURATION_MS) *
                100,
            )
          : 100;
        const animationTarget = Math.min(effectiveTarget, debugCeiling);
        if (debugMode) return animationTarget;
        const distance = animationTarget - current;
        if (distance <= 0.15) return animationTarget;
        return current + Math.max(returning ? 1 : 0.35, distance * (returning ? 0.25 : 0.075));
      });
      frameRef.current = window.requestAnimationFrame(tick);
    };
    frameRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [debugMode, effectiveTarget, mounted, returning]);

  useEffect(() => {
    if (effectiveTarget < 100 || progress < 99.5 || leaving) return;
    const timer = window.setTimeout(
      () => finish(returning ? "returning" : "enhanced"),
      returning ? 100 : 260,
    );
    return () => window.clearTimeout(timer);
  }, [effectiveTarget, finish, leaving, progress, returning]);

  if (!mounted) return null;

  const roundedProgress = Math.min(100, Math.round(progress));
  const style = {
    "--v2-entry-progress": `${roundedProgress}`,
  } as CSSProperties;

  return (
    <div
      className={`v2-entry ${leaving ? "is-leaving" : ""}`}
      style={style}
      role="status"
      aria-live="polite"
      aria-busy={!leaving}
    >
      <div className="v2-entry-inner">
        <p className="v2-entry-label">
          {debugMode ? "Loading (debug)" : returning ? "Welcome back" : "Loading"}
        </p>

        <div
          className="v2-entry-bar"
          role="progressbar"
          aria-label="Loading the page"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={roundedProgress}
          aria-valuetext={`${roundedProgress}% loaded`}
        >
          <span className="v2-entry-bar-fill" />
        </div>

        <p className="v2-entry-value">
          {fallback ? "Switching to the lighter version" : `${roundedProgress}%`}
        </p>

        {lightweightOffered ? (
          <div className="v2-entry-actions">
            <button type="button" onClick={() => finish("skip")}>
              Skip
            </button>
            <button type="button" onClick={() => finish("lightweight")}>
              Use lighter version
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

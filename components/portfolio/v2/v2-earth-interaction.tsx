"use client";

import { useEffect, useRef, useState } from "react";
import { v2Runtime, V2_STATIC_MODE_EVENT } from "@/lib/portfolio/v2-runtime";
import { useReducedMotion } from "./v2-scene-hooks";

const ROTATION_PER_PIXEL = 0.0052;
const TILT_PER_PIXEL = 0.0036;

export function V2EarthInteraction() {
  const reducedMotion = useReducedMotion();
  const pointer = useRef<{ id: number; x: number; y: number } | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [staticMode, setStaticMode] = useState(false);
  const [heroActive, setHeroActive] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const active = entry.isIntersecting && entry.intersectionRatio >= 0.32;
        setHeroActive(active);
        v2Runtime.earth.interactionEnabled = active && !staticMode && !reducedMotion;
      },
      { threshold: [0, 0.32, 0.6] },
    );
    observer.observe(hero);
    return () => {
      observer.disconnect();
    };
  }, [reducedMotion, staticMode]);

  useEffect(() => {
    const listener = (event: Event) => {
      const enabled = Boolean((event as CustomEvent<{ staticMode: boolean }>).detail?.staticMode);
      setStaticMode(enabled);
    };
    window.addEventListener(V2_STATIC_MODE_EVENT, listener);
    return () => window.removeEventListener(V2_STATIC_MODE_EVENT, listener);
  }, []);

  const finish = (element?: HTMLElement, pointerId?: number) => {
    if (element && pointerId !== undefined && element.hasPointerCapture(pointerId)) {
      element.releasePointerCapture(pointerId);
    }
    pointer.current = null;
    v2Runtime.earth.dragging = false;
    v2Runtime.earth.lastInteraction = performance.now();
  };

  return (
    <>
      <button
        type="button"
        aria-label="Interactive Earth. Drag to rotate, or use the arrow keys."
        aria-describedby="v2-earth-instruction"
        className={`v2-earth-hit-area absolute inset-y-[9%] right-0 z-[18] hidden w-[52%] cursor-grab touch-pan-y select-none rounded-l-full md:block ${
          staticMode || reducedMotion || !heroActive ? "pointer-events-none opacity-0" : ""
        }`}
        onPointerDown={(event) => {
          if (!v2Runtime.earth.interactionEnabled) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
          v2Runtime.earth.dragging = true;
          v2Runtime.earth.velocityX = 0;
          v2Runtime.earth.velocityY = 0;
          event.currentTarget.style.cursor = "grabbing";
        }}
        onPointerMove={(event) => {
          const active = pointer.current;
          if (!active || active.id !== event.pointerId) return;
          const dx = event.clientX - active.x;
          const dy = event.clientY - active.y;
          active.x = event.clientX;
          active.y = event.clientY;

          v2Runtime.earth.targetY += dx * ROTATION_PER_PIXEL;
          v2Runtime.earth.targetX += dy * TILT_PER_PIXEL;
          v2Runtime.earth.velocityY = dx * ROTATION_PER_PIXEL * 0.14;
          v2Runtime.earth.velocityX = dy * TILT_PER_PIXEL * 0.14;
          v2Runtime.earth.lastInteraction = performance.now();
          setHasInteracted(true);
        }}
        onPointerUp={(event) => {
          event.currentTarget.style.cursor = "grab";
          finish(event.currentTarget, event.pointerId);
        }}
        onPointerCancel={(event) => {
          event.currentTarget.style.cursor = "grab";
          finish(event.currentTarget, event.pointerId);
        }}
        onKeyDown={(event) => {
          const step = event.shiftKey ? 0.24 : 0.12;
          if (event.key === "ArrowLeft") v2Runtime.earth.targetY -= step;
          else if (event.key === "ArrowRight") v2Runtime.earth.targetY += step;
          else if (event.key === "ArrowUp") v2Runtime.earth.targetX -= step;
          else if (event.key === "ArrowDown") v2Runtime.earth.targetX += step;
          else return;
          event.preventDefault();
          v2Runtime.earth.lastInteraction = performance.now();
          setHasInteracted(true);
        }}
        onWheel={(event) => {
          if (!v2Runtime.earth.interactionEnabled || reducedMotion) return;
          const direction = Math.sign(event.deltaY);
          v2Runtime.earth.targetY += direction * Math.min(0.18, Math.abs(event.deltaY) * 0.0012);
          v2Runtime.earth.velocityY = direction * 0.0025;
          v2Runtime.earth.lastInteraction = performance.now();
          setHasInteracted(true);
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 md:bottom-10">
        <div className="v2-container flex items-end justify-end">
          {!staticMode && !reducedMotion && heroActive && (
            <p
              id="v2-earth-instruction"
              className={`v2-earth-instruction hidden items-center gap-2 rounded-full border px-4 py-2 font-mono text-[12px] text-[var(--muted)] md:flex ${
                hasInteracted ? "opacity-0" : ""
              }`}
              style={{ borderColor: "var(--v2-panel-edge)", background: "var(--bg-deep)" }}
            >
              <span aria-hidden="true">↔</span>
              Scroll travels · drag rotates Earth
            </p>
          )}
        </div>
      </div>
    </>
  );
}

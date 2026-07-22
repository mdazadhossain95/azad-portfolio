"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const frameRef = useRef<number | null>(null);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const updatePosition = () => {
      if (!pendingRef.current) return;

      const { x, y } = pendingRef.current;
      document.documentElement.style.setProperty("--pointer-x", `${x}px`);
      document.documentElement.style.setProperty("--pointer-y", `${y}px`);
      pendingRef.current = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pendingRef.current = { x: event.clientX, y: event.clientY };

      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(() => {
          updatePosition();
          frameRef.current = null;
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return <div aria-hidden="true" className="cursor-glow" />;
}

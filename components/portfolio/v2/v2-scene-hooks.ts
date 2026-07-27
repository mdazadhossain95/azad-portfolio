"use client";

import { useEffect, useState } from "react";

/** True when the visitor has requested reduced motion. SSR-safe (defaults false). */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/**
 * True when celestial motion should pause: reduced motion requested OR the
 * document is hidden (background tab). The canvas loop still ticks, but every
 * rotating body skips its `useFrame` work, so a hidden tab stops burning GPU on
 * animation and a reduced-motion visitor gets a fully static composition.
 */
export function useScenePaused(): boolean {
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const update = () => setHidden(document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  return reduced || hidden;
}

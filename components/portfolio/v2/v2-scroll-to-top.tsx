"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 480;

export function V2ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(mq.matches);
    const updateVisibility = () => setVisible(window.scrollY > SHOW_AFTER_PX);

    updateMotion();
    updateVisibility();
    mq.addEventListener("change", updateMotion);
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      mq.removeEventListener("change", updateMotion);
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: reducedMotion ? "auto" : "smooth",
        });
      }}
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--v2-panel-edge)] bg-[var(--bg-deep)] text-[var(--text)] shadow-lg transition hover:bg-[var(--surface-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-earth-atmosphere)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-deep)]"
    >
      <span aria-hidden="true" className="text-lg leading-none">
        ↑
      </span>
    </button>
  );
}

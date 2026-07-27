"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const STATIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];

/**
 * The trajectory readout: a fixed hairline down the left page margin with one
 * node per station and a craft that travels it as the visitor scrolls.
 *
 * It reports position - it never takes control of scrolling. It is decorative
 * (`aria-hidden`) and duplicates the header navigation, so it is never the only
 * route to a section. Shown at >=1280 where the page margin has room for it.
 */
export function V2Rail() {
  const pathname = usePathname();
  const [active, setActive] = useState(0);
  /* Stations only exist on the homepage; on the archives the rail would be
     reporting positions that are not there. */
  const isHome = pathname === "/v2";

  useEffect(() => {
    if (!isHome) return;

    /* Written on the root, not on this node: the journey path and any section
       accent read the same value without duplicating the scroll listener. */
    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--v2-progress", String(Math.min(1, Math.max(0, progress))));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.style.removeProperty("--v2-progress");
    };
  }, [isHome]);

  useEffect(() => {
    if (!isHome || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = STATIONS.findIndex((station) => station.id === visible.target.id);
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    STATIONS.forEach((station) => {
      const el = document.getElementById(station.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-44 left-6 top-44 z-30 hidden w-6 2xl:block"
    >
      {/* hairline */}
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2" style={{ backgroundColor: "var(--v2-rail)" }} />

      {/* travelled portion */}
      <div
        className="absolute left-1/2 top-0 w-px -translate-x-1/2 origin-top"
        style={{
          height: "100%",
          backgroundColor: "var(--v2-rail-live)",
          transform: "translateX(-50%) scaleY(var(--v2-progress))",
          opacity: 0.55,
        }}
      />

      {/* stations */}
      {STATIONS.map((station, index) => (
        <div
          key={station.id}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ top: `${((index + 0.5) / STATIONS.length) * 100}%` }}
        >
          <span
            className="block h-[9px] w-[9px] rounded-full border-2 transition-colors duration-300"
            style={{
              borderColor: index <= active ? "var(--v2-rail-live)" : "var(--v2-station)",
              backgroundColor: index === active ? "var(--v2-rail-live)" : "var(--bg-deep)",
              boxShadow:
                index === active
                  ? "0 0 0 3px color-mix(in srgb, var(--v2-rail-live) 22%, transparent)"
                  : "none",
            }}
          />
        </div>
      ))}

      {/* craft */}
      <div
        className="absolute left-1/2 top-0 h-[7px] w-[7px] rounded-full"
        style={{
          backgroundColor: "var(--v2-rail-live)",
          boxShadow: "0 0 10px 2px color-mix(in srgb, var(--v2-rail-live) 55%, transparent)",
          top: "calc(var(--v2-progress) * 100%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* current station name */}
      <p
        className="v2-micro absolute left-full origin-left whitespace-nowrap text-[var(--muted)]"
        style={{
          top: `${((active + 0.5) / STATIONS.length) * 100}%`,
          transform: "translateY(-50%) translateX(12px)",
        }}
      >
        {STATIONS[active].label}
      </p>
    </div>
  );
}

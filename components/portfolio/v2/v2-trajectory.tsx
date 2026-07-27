"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/content/experience";

/**
 * The career route: four waypoints on one curve travelling toward Mars.
 *
 * Chronological, oldest first - the same four roles as the list below it, from
 * `content/experience.ts`, in reverse file order. Selection is a real tab
 * pattern (arrow keys, Home/End, roving tabindex); scroll position only moves
 * the selection until the visitor picks a waypoint themselves, after which the
 * page stops overriding them.
 *
 * Below `lg` this component is not rendered at all - `V2ExperienceTimeline`
 * shows the plain chronological list instead, so nothing here is the only
 * route to the content.
 */

/* Waypoint coordinates as percentages of the canvas, and the cubic segment
   that reaches each one. The path is drawn in a 0–100 viewBox with
   `preserveAspectRatio="none"`, so these are the same numbers the nodes are
   positioned with and the curve always passes through them. */
const WAYPOINTS = [
  { x: 10, y: 85, d: "M 10 85" },
  { x: 35, y: 65, d: "C 20 78, 25 70, 35 65" },
  { x: 60, y: 45, d: "C 45 60, 50 50, 60 45" },
  { x: 80, y: 20, d: "C 70 40, 75 30, 80 20" },
];

const FULL_PATH = WAYPOINTS.map((w) => w.d).join(" ");

const ROLES = [...experience].reverse();

export function V2Trajectory() {
  const [active, setActive] = useState(ROLES.length - 1);
  const [picked, setPicked] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  /* Until the visitor selects a waypoint, the route advances with the scroll -
     the section reads as travelled rather than as a static diagram. */
  useEffect(() => {
    if (picked) return;
    const node = sectionRef.current;
    if (!node) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const span = rect.height + window.innerHeight;
      const travelled = (window.innerHeight - rect.top) / span;
      const index = Math.round(
        Math.min(1, Math.max(0, (travelled - 0.18) / 0.5)) * (ROLES.length - 1)
      );
      setActive(index);
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
    };
  }, [picked]);

  const select = (index: number) => {
    setPicked(true);
    setActive(index);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = ROLES.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = Math.min(last, active + 1);
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = Math.max(0, active - 1);
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  const travelled = WAYPOINTS.slice(0, active + 1)
    .map((w) => w.d)
    .join(" ");
  const role = ROLES[active];

  return (
    <div ref={sectionRef} className="grid grid-cols-12 gap-8 items-center min-h-[560px]">
      {/* ---------- the readout ---------- */}
      <div className="col-span-5 relative z-10">
        <div
          role="tabpanel"
          id="v2-waypoint-panel"
          aria-labelledby={`v2-waypoint-${role.id}`}
          tabIndex={-1}
          className="v2-panel v2-panel-active w-full p-7"
        >
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="v2-micro text-[var(--v2-earth-atmosphere)]">{role.period}</span>
            <span className="v2-micro text-[var(--muted)]">{role.location}</span>
          </div>

          <h3 className="v2-h3 mt-3 font-semibold text-[var(--text)]">{role.role}</h3>

          <a
            href={role.url}
            target="_blank"
            rel="noreferrer"
            className="v2-body mt-1.5 inline-flex items-center gap-1.5 text-[var(--v2-earth-atmosphere)] underline-offset-4 transition hover:underline"
          >
            {role.company}
            <span aria-hidden="true">↗</span>
          </a>

          <ul className="mt-6 space-y-3">
            {role.bullets.slice(0, 3).map((bullet) => (
              <li key={bullet} className="v2-body flex gap-3 text-[var(--muted)]">
                <span
                  aria-hidden="true"
                  className="mt-[11px] h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--v2-system)" }}
                />
                {bullet}
              </li>
            ))}
          </ul>

          {role.tech?.length ? (
            <div className="mt-7 flex flex-wrap gap-2">
              {role.tech.map((tech) => (
                <span key={tech} className="soft-chip text-[var(--muted)]">
                  {tech}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* ---------- the route ---------- */}
      <div className="col-span-7 relative h-[560px] w-full">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d={FULL_PATH}
            stroke="var(--v2-orbit-line-strong)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="v2-route-live"
            d={travelled}
            stroke="var(--accent)"
            strokeWidth="1.75"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div
          role="tablist"
          aria-label="Career waypoints"
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
          className="absolute inset-0"
        >
          {ROLES.map((entry, index) => {
            const point = WAYPOINTS[index];
            const isActive = index === active;
            /* Alternate label sides to avoid collisions in the denser space */
            const flip = index % 2 === 1;

            return (
              <button
                key={entry.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`v2-waypoint-${entry.id}`}
                aria-selected={isActive}
                aria-controls="v2-waypoint-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(index)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg p-2 text-center"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <span className="relative flex h-[44px] w-[44px] items-center justify-center">
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="v2-anim-pulse absolute h-[40px] w-[40px] rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle, color-mix(in srgb, var(--accent) 45%, transparent) 0%, transparent 68%)",
                      }}
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="relative block rounded-full border-2 transition-all duration-300"
                    style={{
                      width: isActive ? 20 : 10,
                      height: isActive ? 20 : 10,
                      borderColor: index <= active ? "var(--accent)" : "var(--v2-station)",
                      backgroundColor: isActive ? "var(--accent)" : "var(--bg-deep)",
                    }}
                  />
                </span>

                <span
                  className={`absolute top-1/2 -translate-y-1/2 w-[180px] ${flip ? "right-[36px] text-right" : "left-[36px] text-left"}`}
                >
                  <span
                    className="v2-micro block transition-colors"
                    style={{ color: isActive ? "var(--v2-earth-atmosphere)" : "var(--muted)" }}
                  >
                    {entry.period}
                  </span>
                  <span
                    className="v2-body-s mt-1 block font-medium transition-colors"
                    style={{ color: isActive ? "var(--text)" : "var(--muted)" }}
                  >
                    {entry.company}
                  </span>
                  <span
                    className="v2-micro mt-0.5 block transition-colors"
                    style={{ color: isActive ? "var(--v2-earth-atmosphere)" : "var(--muted)" }}
                  >
                    {entry.role}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

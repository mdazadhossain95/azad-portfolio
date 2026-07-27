"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/v2";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const firstMobileLink = useRef<HTMLAnchorElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  /* Track the section in view so the nav says where the visitor is. */
  useEffect(() => {
    if (!isHome || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    const nodes = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (node): node is HTMLElement => Boolean(node)
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = mobileNav.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    firstMobileLink.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const href = (id: string) => (isHome ? `#${id}` : `/v2#${id}`);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        borderColor: "var(--v2-panel-edge)",
        backgroundColor: "color-mix(in srgb, var(--bg-deep) 96%, transparent)",
      }}
    >
      <div className="flex h-[72px] w-full items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
        <Link
          href="/v2"
          className="group flex min-w-0 flex-1 items-center gap-2.5 overflow-hidden font-mono text-sm tracking-[0.08em] text-[var(--text)] sm:text-base"
        >
          <span aria-hidden="true" className="relative flex h-6 w-6 items-center justify-center">
            <span
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: "color-mix(in srgb, var(--v2-earth-atmosphere) 45%, transparent)" }}
            />
            <span
              className="v2-anim-twinkle h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--v2-earth-atmosphere)" }}
            />
          </span>
          <span className="min-w-0 truncate">
            AZAD <span className="text-[var(--muted)]">{"// ORBIT"}</span>
          </span>
        </Link>

        <div className="hidden items-center justify-end gap-4 xl:flex">
          <nav className="flex items-center gap-1 2xl:gap-2" aria-label="Primary">
            {SECTIONS.map((section) => {
              const isActive = isHome && active === section.id;
              return (
                <a
                  key={section.id}
                  href={href(section.id)}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative flex h-[72px] items-center gap-1.5 px-2 text-sm transition"
                  style={{ color: isActive ? "var(--text)" : "var(--muted)" }}
                >
                  <span className="transition group-hover:text-[var(--text)]">
                    {section.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2 bottom-0 h-[2px] origin-left transition-transform duration-200"
                    style={{
                      backgroundColor: "var(--v2-earth-atmosphere)",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </a>
              );
            })}
          </nav>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex !min-h-10 items-center px-4 !text-sm font-medium"
          >
            Resume ↗
          </a>
        </div>

        <button
          ref={menuButton}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="v2-mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border text-[var(--text)] transition hover:bg-[var(--surface-raised)] xl:hidden"
          style={{ borderColor: "var(--v2-panel-edge)" }}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          ref={mobileNav}
          id="v2-mobile-nav"
          className="border-t px-5 py-4 xl:hidden"
          style={{ borderColor: "var(--v2-panel-edge)", backgroundColor: "var(--bg-deep)" }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {SECTIONS.map((section, index) => (
              <a
                key={section.id}
                ref={index === 0 ? firstMobileLink : undefined}
                href={href(section.id)}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-base text-[var(--muted)] transition hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
              >
                {section.label}
              </a>
            ))}

            <span className="my-2 h-px" style={{ backgroundColor: "var(--v2-panel-edge)" }} />

            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-[var(--muted)] transition hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
              >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

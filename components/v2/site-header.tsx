"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/content/profile";

const navigation = [
  { href: "#modules", label: "Modules" },
  { href: "#systems", label: "Systems" },
  { href: "#workflow", label: "Workflow" },
  { href: "#matrix", label: "Matrix" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{ borderColor: "var(--line)", backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/v2" className="flex items-center gap-2 font-mono text-sm tracking-[0.08em] text-[var(--text)]">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--v2-verified)" }}
          />
          AZAD <span className="text-[var(--muted)]">{"// SYSTEMS"}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-1.5 text-xs font-medium">
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border text-[var(--text)] transition hover:bg-[var(--surface-raised)] md:hidden"
          style={{ borderColor: "var(--line)" }}
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
        <div className="border-t px-5 py-4 md:hidden" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg)" }}>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-[var(--muted)] transition hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-[var(--muted)] transition hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
            >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

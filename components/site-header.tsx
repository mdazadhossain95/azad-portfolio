"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] backdrop-blur-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 90%, transparent)' }}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="text-sm font-semibold tracking-[0.14em] text-[var(--text)] uppercase">
          AZAD
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1lzpW1MCBbpNHdJvapKe9J0iKja_XNyoU/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary px-4 py-1.5 text-xs font-medium"
          >
            View resume
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--text)] transition hover:bg-[var(--card)] md:hidden"
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
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-[var(--muted)] transition hover:bg-[var(--card)] hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1lzpW1MCBbpNHdJvapKe9J0iKja_XNyoU/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm text-[var(--muted)] transition hover:bg-[var(--card)] hover:text-[var(--text)]"
            >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

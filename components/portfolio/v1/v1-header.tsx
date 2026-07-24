"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/content/profile";

export function V1Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Work", url: "#work" },
    { name: "Contact", url: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-[var(--bg-deep)]/90 shadow-sm backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="text-xl font-bold text-[var(--accent)]">
          <Link href="/v1">A.</Link>
        </div>
        
        <div className="hidden items-center space-x-8 md:flex">
          <ol className="flex space-x-6 text-sm font-mono text-[var(--text-secondary)]">
            {navLinks.map((link, i) => (
              <li key={i} className="hover:text-[var(--accent)] transition-colors">
                <Link href={link.url}>
                  <span className="text-[var(--accent)]">0{i + 1}. </span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ol>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-[var(--accent)] px-4 py-2 text-sm font-mono text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--accent)] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-[var(--bg)] px-6 py-12 md:hidden h-[100dvh]">
          <nav className="flex flex-col items-center justify-center space-y-8 text-center h-full pb-32">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.url}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-mono hover:text-[var(--accent)] transition-colors text-[var(--text)]"
              >
                <span className="block text-sm text-[var(--accent)] mb-1">0{i + 1}.</span>
                {link.name}
              </Link>
            ))}
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded border border-[var(--accent)] px-8 py-3 font-mono text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

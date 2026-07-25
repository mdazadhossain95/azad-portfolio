"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";

const navigation = [
  { href: "/#about", label: "About", number: "01" },
  { href: "/#experience", label: "Experience", number: "02" },
  { href: "/#work", label: "Work", number: "03" },
  { href: "/#expertise", label: "Expertise", number: "04" },
  { href: "/#contact", label: "Contact", number: "05" },
];

function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const diff = current - lastScrollY.current;

      if (Math.abs(diff) < 8) return;

      setDirection(diff > 0 ? "down" : "up");
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

function useFocusTrap(open: boolean, onClose: () => void) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const container = containerRef.current;
    if (!container) return;

    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return { containerRef, triggerRef };
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollDirection = useScrollDirection();
  const pathname = usePathname();
  const activeSection = useActiveSection(["about", "experience", "work", "expertise", "contact"]);
  const { containerRef, triggerRef } = useFocusTrap(open, () => setOpen(false));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const hidden = scrollDirection === "down" && scrolled && !open;

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (pathname === "/") {
        return activeSection === sectionId;
      }
      return false;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const sectionId = href.replace("/#", "");
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // Update URL hash without jumping
        window.history.pushState(null, "", `#${sectionId}`);
      }
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled ? "border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <Link href="/" className="text-base font-mono tracking-tight group flex items-center gap-1.5">
            <span className="text-[#64748B] transition-colors group-hover:text-[var(--accent)]">{"//"}</span>
            <span className="text-[var(--text)] font-semibold tracking-wide text-lg">azadhossain</span>
            <span className="text-[var(--accent)] font-semibold text-lg -ml-1.5">.dev</span>
            <span className="text-[#64748B] transition-colors group-hover:text-[var(--accent)]">()</span>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group flex items-center gap-1.5 px-3 py-2 text-sm transition ${
                    isActive(item.href) ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  <span className="mono text-xs text-[var(--success)]">{item.number}.</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary ml-2 px-4 py-2 text-xs font-medium"
              >
                Resume
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                ref={triggerRef}
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--text)] transition hover:bg-[var(--surface-raised)] md:hidden"
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
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-[var(--bg-deep)]/80 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={containerRef}
            className="fixed right-0 top-0 z-50 h-full w-[min(80vw,320px)] border-l border-[var(--line)] bg-[var(--bg)] p-6 pt-20 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                    isActive(item.href)
                      ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
                  }`}
                >
                  <span className="mono text-xs text-[var(--accent)]">{item.number}.</span>
                  <span className="text-base">{item.label}</span>
                </Link>
              ))}
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 btn-secondary justify-center py-3 text-sm font-medium"
              >
                Resume ↗
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

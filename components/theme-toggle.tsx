"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme") as Theme | null;
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Get theme after mount to avoid hydration mismatch
    const currentTheme = getPreferredTheme();
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.dataset.theme = theme;
      window.localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--line)] px-4 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--card)]"
      aria-label={isMounted ? `Switch to ${theme === "light" ? "dark" : "light"} mode` : "Toggle color mode"}
      title={isMounted ? `Current: ${theme === "light" ? "Light mode" : "Dark mode"}` : undefined}
    >
      {isMounted ? (theme === "light" ? "☀️ Light" : "🌙 Dark") : "⚙️ Theme"}
    </button>
  );
}

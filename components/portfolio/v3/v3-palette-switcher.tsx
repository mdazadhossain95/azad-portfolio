"use client";

import { useEffect, useMemo, useState } from "react";

type PaletteId =
  | "paper"
  | "coral"
  | "navy"
  | "olive";

const PALETTES: Array<{ id: PaletteId; label: string; swatch: string; note: string }> = [
  { id: "paper", label: "Paper cream", swatch: "#D29A2E", note: "Paper" },
  { id: "coral", label: "Coral note", swatch: "#E05B4C", note: "Coral" },
  { id: "navy", label: "Dark blue note", swatch: "#35527B", note: "Dark blue" },
  { id: "olive", label: "Olive note", swatch: "#7E8C3E", note: "Olive" },
];

const STORAGE_KEY = "v3-palette";

function applyPalette(palette: PaletteId) {
  document.documentElement.setAttribute("data-v3-palette", palette);
  window.localStorage.setItem(STORAGE_KEY, palette);
}

export function V3PaletteSwitcher() {
  const [open, setOpen] = useState(false);
  const [palette, setPalette] = useState<PaletteId>("paper");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(STORAGE_KEY) as PaletteId | null;
      if (saved && PALETTES.some((item) => item.id === saved)) {
        setPalette(saved);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      applyPalette(palette);
    }
  }, [palette, mounted]);

  const activePalette = useMemo(() => PALETTES.find((item) => item.id === palette) ?? PALETTES[0], [palette]);

  const selectPalette = (next: PaletteId) => {
    if (typeof window !== "undefined") {
      applyPalette(next);
    }
    setPalette(next);
  };

  return (
    <>
      <div className="fixed right-4 top-1/2 z-40 -translate-y-1/2 md:right-6">
        <div className="hidden w-16 rounded-2xl border border-[var(--line)] bg-[var(--surface)]/95 p-2 shadow-[0_12px_28px_rgba(53,50,44,0.12)] backdrop-blur-xl md:block">
          <p className="w-full pb-2 text-center text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
            Note color
          </p>
          <div className="flex flex-col items-center gap-2">
            {PALETTES.map((item) => {
              const active = item.id === palette;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={item.label}
                  aria-pressed={active}
                  onClick={() => selectPalette(item.id)}
                  className={`group flex h-10 w-10 items-center justify-center rounded-full border transition ${
                    active
                      ? "border-[var(--v3-ink)] bg-[var(--surface-raised)] shadow-[0_3px_0_var(--line)]"
                      : "border-[var(--line)] bg-[var(--surface)] hover:-translate-y-0.5 hover:bg-[var(--surface-raised)]"
                  }`}
                >
                    <span
                    className="h-5 w-5 rounded-full border border-[var(--line)] shadow-[0_1px_0_rgba(0,0,0,0.08)]"
                    style={{ backgroundColor: item.swatch }}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 text-xs font-medium text-[var(--text)] shadow-[0_10px_24px_rgba(53,50,44,0.12)]"
          aria-expanded={open}
          aria-label="Change note color"
        >
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: activePalette.swatch }} aria-hidden="true" />
          Color
        </button>

        {open ? (
          <div className="absolute bottom-14 right-0 w-36 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-2 shadow-[0_12px_28px_rgba(53,50,44,0.14)]">
          <div className="flex max-h-[42vh] flex-col gap-2 overflow-y-auto pr-1">
            {PALETTES.map((item) => {
                const active = item.id === palette;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={item.label}
                    aria-pressed={active}
                    onClick={() => {
                      selectPalette(item.id);
                      setOpen(false);
                    }}
                    className={`flex min-h-11 flex-row items-center justify-start gap-2 rounded-xl border px-3 text-xs transition ${
                      active
                        ? "border-[var(--v3-ink)] bg-[var(--surface-raised)]"
                        : "border-[var(--line)] bg-[var(--surface)]"
                    }`}
                  >
                    <span className="h-4 w-4 shrink-0 rounded-full border border-[var(--line)]" style={{ backgroundColor: item.swatch }} aria-hidden="true" />
                    <span className="text-[9px] uppercase tracking-[0.12em] text-[var(--muted)]">{item.note}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

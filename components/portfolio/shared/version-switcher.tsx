import Link from "next/link";
import { getVersionLabel, versions, PortfolioVersion } from "@/lib/portfolio/versions";

export function VersionSwitcher({ current }: { current: PortfolioVersion }) {
  if (current === "v1") {
    // V1 (Classic/Minimal): Adapt the switcher into a clean, understated bottom footer or subtle inline badge
    return (
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--bg)]/90 px-5 py-2.5 text-xs shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-3">
          {versions.map((v) => (
            <Link
              key={v.id}
              href={v.path}
              className={`transition-colors hover:text-[var(--accent)] ${
                current === v.id
                  ? "font-bold text-[var(--text)] underline decoration-[var(--accent)] decoration-2 underline-offset-4"
                  : "text-[var(--muted)]"
              }`}
              title={v.description}
            >
              {getVersionLabel(v, current)}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (current === "v2") {
    // V2 (Cosmic Gravity): Style the switcher with a space-themed, clean structural alignment 
    // that blends smoothly into the cosmic background layout without causing side boundary cuts.
    return (
      <div className="fixed bottom-6 left-6 z-30 flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-raised)]/80 px-3 py-2 text-xs font-mono shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md">
        <span className="text-[var(--muted)] opacity-70">UI_VER//</span>
        {versions.map((v) => (
          <Link
            key={v.id}
            href={v.path}
            className={`flex h-6 w-6 items-center justify-center rounded-sm transition-all ${
              current === v.id
                ? "bg-[var(--accent)] font-bold text-[var(--bg-deep)] shadow-[0_0_10px_var(--accent)]"
                : "text-[var(--muted)] hover:bg-[var(--border-strong)] hover:text-[var(--text)]"
            }`}
            title={v.description}
          >
            {v.id.replace("v", "")}
          </Link>
        ))}
      </div>
    );
  }

  if (current === "v3") {
    // V3 (Notebook): Integrate the switcher cleanly into the notebook’s paper/journal boundaries or footers, 
    // ensuring it doesn't conflict with the interactive side color picker widget.
    return (
      <div className="fixed bottom-20 right-6 z-30 flex -rotate-2 items-center gap-3 border-b-2 border-dashed border-[var(--line)] bg-[var(--card)] px-4 py-2 font-[family-name:var(--font-caveat)] text-xl shadow-[2px_4px_8px_rgba(0,0,0,0.05)] md:bottom-6">
        <span className="text-[var(--muted)]">Version:</span>
        <div className="flex gap-3">
          {versions.map((v) => (
            <Link
              key={v.id}
              href={v.path}
              className={`transition-colors hover:text-[var(--accent-strong)] ${
                current === v.id
                  ? "font-bold text-[var(--accent)]"
                  : "text-[var(--muted)]"
              }`}
              title={v.description}
            >
              {v.id.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // V4 (Product): Maintain the current clean floating bottom-right badge container.
  return (
    <div className="fixed bottom-20 right-6 z-30 flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)]/96 p-1.5 shadow-[0_10px_30px_rgba(53,50,44,0.12)] backdrop-blur-xl xl:right-24">
      {versions.map((v) => (
        <Link
          key={v.id}
          href={v.path}
          className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
            current === v.id
              ? "bg-[var(--text)] text-[var(--bg)] shadow-sm"
              : "text-[var(--text-muted)] hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
          }`}
          title={v.description}
          aria-current={current === v.id ? "page" : undefined}
        >
          {getVersionLabel(v, current)}
        </Link>
      ))}
    </div>
  );
}

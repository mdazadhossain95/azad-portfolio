import Link from "next/link";
import { versions, PortfolioVersion } from "@/lib/portfolio/versions";

export function VersionSwitcher({ current }: { current: PortfolioVersion }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--bg)] p-1.5 shadow-lg backdrop-blur-xl">
      {versions.map((v) => (
        <Link
          key={v.id}
          href={v.path}
          className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
            current === v.id
              ? "bg-[var(--text)] text-[var(--bg)] shadow-sm"
              : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-raised)]"
          }`}
          title={v.description}
          aria-current={current === v.id ? "page" : undefined}
        >
          {v.name}
        </Link>
      ))}
    </div>
  );
}

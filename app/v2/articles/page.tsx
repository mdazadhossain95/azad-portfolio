import Link from "next/link";
import { V2ArticleArchive } from "@/components/portfolio/v2/v2-article-archive";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "All Articles",
  "Orbit's article archive, with notes on Flutter, backend choices, performance, and release work from real builds.",
  "/v2/articles",
  true
);

export default function V2ArticlesPage() {
  return (
    <div className="v2-container relative py-12 md:py-16">
      <Link
        href="/v2#transmissions"
        className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
        style={{ borderColor: "var(--v2-panel-edge)" }}
      >
        <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        Back to transmissions
      </Link>

      <header className="mt-12 max-w-2xl">
        <p className="v2-label text-[var(--v2-earth-atmosphere)]">All articles</p>
        <h1 className="v2-h2 mt-4 font-semibold text-[var(--text)]">
          Notes from real production builds
        </h1>
        <p className="v2-body-l mt-5 max-w-[640px] text-[var(--muted)]">
          Architecture decisions, performance work, backend choices, and release
          process, written from projects that actually shipped.
        </p>
      </header>

      <div className="mt-16">
        <V2ArticleArchive />
      </div>
    </div>
  );
}

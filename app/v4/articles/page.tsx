import Link from "next/link";
import { LiveArticles } from "@/components/live-articles";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "Articles",
  "Flutter architecture, performance, and delivery notes by Azad.",
  "/v4/articles"
);

export default function V4ArticlesPage() {
  return (
    <div className="container-main pt-8 pb-24">
      <Link
        href="/v4"
        className="group mb-12 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Back to Home
      </Link>
      <h1 className="sr-only">Practical Flutter Notes</h1>

      <LiveArticles />
    </div>
  );
}

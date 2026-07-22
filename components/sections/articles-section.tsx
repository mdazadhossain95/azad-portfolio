import Link from "next/link";
import { LiveArticles } from "@/components/live-articles";

export function ArticlesSection() {
  return (
    <section id="articles" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            Articles
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Practical Flutter notes
          </h2>
        </div>
        <Link href="/articles" className="text-sm font-medium text-[var(--accent)] hover:underline">
          View all articles →
        </Link>
      </div>
      <LiveArticles />
    </section>
  );
}

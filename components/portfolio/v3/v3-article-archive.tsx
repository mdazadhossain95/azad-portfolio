import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import type { ArticleMeta } from "@/lib/mdx";

export function V3ArticleArchive({ articles }: { articles: ArticleMeta[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-18">
      <div className="mb-8">
        <Link href="/v3" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors">
          ← Back to notebook
        </Link>
      </div>
      <SectionTitle
        eyebrow="Article archive"
        title="Field notes"
        description="Short technical notes, kept as simple references for the work behind the pages."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className="surface-card v3-anim-enter flex flex-col gap-4 p-5 md:p-6"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-handwriting text-2xl" style={{ color: "var(--v3-gold)" }}>
                {article.title}
              </p>
              <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                {article.readingTime}
              </span>
            </div>
            <p className="text-sm leading-7 text-[var(--muted)]">{article.preview}</p>
            <div className="flex items-center justify-between gap-3 border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <time className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]" dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <a 
                href={article.mediumUrl || "#"} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary px-4 py-2 text-xs font-medium"
              >
                Read on Medium ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

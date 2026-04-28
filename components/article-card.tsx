import Link from "next/link";
import { Article } from "@/lib/types";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 transition hover:border-[var(--accent)]">
      <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <h3 className="mt-3 flex-1 text-xl font-semibold tracking-tight text-[var(--text)]">{article.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{article.preview}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href={`/articles/${article.slug}`} className="text-sm text-[var(--accent)]">
          Read more →
        </Link>
        {article.mediumUrl && (
          <a
            href={article.mediumUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--text)]"
          >
            View on Medium ↗
          </a>
        )}
      </div>
    </article>
  );
}

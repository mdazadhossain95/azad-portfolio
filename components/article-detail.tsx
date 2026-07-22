import Link from "next/link";
import { Article } from "@/lib/types";

type ArticleDetailProps = {
  article: Article;
};

export function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8 md:py-24">
      <Link href="/articles" className="text-sm text-[var(--accent)]">
        Back to articles
      </Link>
      <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">{article.title}</h1>
      <article className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
        <p>{article.content}</p>
      </article>
    </section>
  );
}

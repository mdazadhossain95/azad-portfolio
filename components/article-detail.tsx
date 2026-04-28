"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { defaultArticles } from "@/lib/default-content";
import { findBySlug } from "@/lib/firestore-client";
import { Article } from "@/lib/types";

type ArticleDetailProps = {
  slug: string;
};

export function ArticleDetail({ slug }: ArticleDetailProps) {
  const [article, setArticle] = useState<Article | null>(
    defaultArticles.find((item) => item.slug === slug) ?? null,
  );

  useEffect(() => {
    let mounted = true;

    findBySlug<Article>("articles", slug)
      .then((item) => {
        if (mounted && item) {
          setArticle(item);
        }
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (!article) {
    return (
      <section className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8">
        <p className="text-[var(--muted)]">Article not found.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8">
      <Link href="/articles" className="text-sm text-[var(--accent)]">
        Back to articles
      </Link>
      <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)]">{article.title}</h1>
      <article className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
        <p>{article.content}</p>
      </article>
    </section>
  );
}

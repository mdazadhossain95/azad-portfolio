"use client";

import { Article } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const pathname = usePathname();
  const versionPrefix = pathname?.match(/^\/(v[1-4])/)?.[1] || "";
  const baseUrl = versionPrefix ? `/${versionPrefix}/articles` : "/articles";

  return (
    <article className="surface-card surface-card-hover flex flex-col p-6 md:p-7">
      <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <h3 className="mt-3 flex-1 text-xl font-semibold tracking-tight text-[var(--text)] md:text-[1.35rem]">{article.title}</h3>
      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{article.preview}</p>
      <div className="mt-4">
        <a
          href={article.mediumUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
        >
          View on Medium ↗
        </a>
      </div>
    </article>
  );
}

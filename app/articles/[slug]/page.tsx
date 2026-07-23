import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

type ArticleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ArticleDetailPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article) return {};

  return {
    title: `${article.meta.title} | Article | Azad Portfolio`,
    description: article.meta.preview,
  };
}

export default async function ArticleDetailPage(props: ArticleDetailPageProps) {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8 md:py-24">
      <Link href="/articles" className="text-sm text-[var(--accent)] hover:underline mb-8 inline-block">
        ← Back to all articles
      </Link>
      <header className="mb-12 space-y-4">
        <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
          {new Date(article.meta.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
          {article.meta.title}
        </h1>
      </header>

      <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
        <MDXRemote source={article.content} />
      </div>
    </section>
  );
}

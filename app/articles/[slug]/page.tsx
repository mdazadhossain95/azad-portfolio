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
    alternates: {
      canonical: `https://azadhossain.dev/articles/${slug}`,
    },
  };
}

function ArticleJsonLd({ article, slug }: { article: NonNullable<Awaited<ReturnType<typeof getArticleBySlug>>>; slug: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.meta.title,
    description: article.meta.preview,
    datePublished: article.meta.publishedAt,
    url: `https://azadhossain.dev/articles/${slug}`,
    author: {
      "@type": "Person",
      name: "Md Azad Hossain Tutul",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function ArticleDetailPage(props: ArticleDetailPageProps) {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8 md:py-24">
      <ArticleJsonLd article={article} slug={slug} />
      <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--muted)]">
        <Link href="/" className="text-[var(--accent)] hover:underline">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/articles" className="text-[var(--accent)] hover:underline">
          Articles
        </Link>
      </nav>
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

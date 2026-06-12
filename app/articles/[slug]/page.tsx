import type { Metadata } from "next";
import { ArticleDetail } from "@/components/article-detail";
import { defaultArticles } from "@/lib/default-content";

type ArticleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ArticleDetailPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = defaultArticles.find((a) => a.slug === slug);
  return {
    title: `${article?.title ?? slug.replaceAll("-", " ")} | Article | Azad Portfolio`,
  };
}

export default async function ArticleDetailPage(props: ArticleDetailPageProps) {
  const { slug } = await props.params;
  return <ArticleDetail slug={slug} />;
}

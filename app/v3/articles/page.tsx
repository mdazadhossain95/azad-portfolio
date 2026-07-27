import { V3ArticleArchive } from "@/components/portfolio/v3/v3-article-archive";
import { getSharedMetadata } from "@/lib/portfolio/metadata";
import { getAllArticles } from "@/lib/mdx";

export const metadata = getSharedMetadata(
  "V3 Articles",
  "A light notebook archive of technical articles and field notes.",
  "/v3/articles",
  true
);

export default async function V3ArticlesPage() {
  const articles = await getAllArticles();
  return <V3ArticleArchive articles={articles} />;
}

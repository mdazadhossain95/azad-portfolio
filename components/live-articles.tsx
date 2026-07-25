import { ArticleCard } from "@/components/article-card";
import { getAllArticles } from "@/lib/mdx";

export async function LiveArticles() {
  const articles = await getAllArticles();

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {articles.map((article) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <ArticleCard key={article.id} article={article as any} />
      ))}
    </div>
  );
}

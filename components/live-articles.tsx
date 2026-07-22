import { ArticleCard } from "@/components/article-card";
import { defaultArticles } from "@/lib/default-content";

export function LiveArticles() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {defaultArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import { defaultArticles } from "@/lib/default-content";
import { watchCollection } from "@/lib/firestore-client";
import { Article } from "@/lib/types";

export function LiveArticles() {
  const [articles, setArticles] = useState<Article[]>(defaultArticles);

  useEffect(() => {
    const unsubscribe = watchCollection<Article>("articles", (items) => {
      if (items.length > 0) {
        setArticles(items);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

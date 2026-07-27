import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "articles");

export type ArticleMeta = {
  id: string;
  title: string;
  slug: string;
  preview: string;
  publishedAt: string;
  mediumUrl?: string;
  readingTime: string;
};

export async function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(contentDir, `${realSlug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      ...data,
      slug: realSlug,
      readingTime: `${Math.max(
        1,
        Math.ceil(content.trim().split(/\s+/).filter(Boolean).length / 200),
      )} min read`,
    } as ArticleMeta,
    content,
  };
}

export async function getAllArticles() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  const articles = [];

  for (const file of files) {
    if (file.endsWith(".mdx")) {
      const article = await getArticleBySlug(file);
      if (article) {
        articles.push(article.meta);
      }
    }
  }

  // Sort by date descending
  return articles.sort((a, b) => (new Date(a.publishedAt) < new Date(b.publishedAt) ? 1 : -1));
}

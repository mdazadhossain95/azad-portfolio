import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { defaultTravels } from "@/lib/default-content";
import { getAllArticles } from "@/lib/mdx";

const SITE_URL = "https://azadhossain.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/articles`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/resume`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/travel`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: article.publishedAt,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const travelRoutes: MetadataRoute.Sitemap = defaultTravels.map((post) => ({
    url: `${SITE_URL}/travel/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.4,
    lastModified: post.publishedAt,
  }));

  // /v4 is intentionally excluded — its canonical tag points at "/".
  // /v1, /v2, /v3 are intentionally excluded — they are noindex.
  return [...staticRoutes, ...projectRoutes, ...articleRoutes, ...serviceRoutes, ...travelRoutes];
}

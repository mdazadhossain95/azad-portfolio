import { getAllArticles } from "@/lib/mdx";
import { V2SectionField } from "./v2-cosmic";

export async function V2ArticleArchive() {
  const articles = (await getAllArticles()).filter((article) => article.mediumUrl);

  if (articles.length === 0) {
    return (
      <p className="v2-panel p-8 text-base text-[var(--muted)]">
        No articles published yet.
      </p>
    );
  }

  return (
    <section className="relative isolate overflow-hidden py-4">
      <V2SectionField tone="blue" intensity="subtle" />

      <ol className="relative z-10 space-y-4">
        {articles.map((article, index) => (
          <li key={article.id ?? article.slug}>
            <article className="v2-panel v2-panel-hover group relative flex flex-col gap-4 p-6 md:flex-row md:items-center md:gap-8">
              <div className="flex items-center gap-4 md:w-40 md:shrink-0 md:flex-col md:items-start md:gap-2">
                <span className="v2-label text-[var(--v2-star-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <time className="font-mono text-[12px] text-[var(--muted)]" dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="v2-h4 font-semibold text-[var(--text)]">
                  <a
                    href={article.mediumUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition after:absolute after:inset-0 after:content-[''] hover:text-[var(--v2-earth-atmosphere)] focus-visible:text-[var(--v2-earth-atmosphere)]"
                  >
                    {article.title}
                  </a>
                </h2>
                <p className="v2-body mt-2 text-[var(--muted)]">{article.preview}</p>
              </div>

              <div className="flex items-center gap-4 md:shrink-0">
                <span className="v2-label flex items-center gap-2 text-[var(--v2-earth-atmosphere)]">
                  Medium
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

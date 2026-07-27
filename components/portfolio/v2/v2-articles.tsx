import Link from "next/link";
import { getAllArticles } from "@/lib/mdx";
import { V2Reveal } from "./v2-reveal";
import { V2SectionField } from "./v2-cosmic";
import { V2CelestialBand } from "./v2-celestial-band";

/** Topic is derived from the article's own title - no invented taxonomy. */
function topicFor(title: string) {
  const haystack = title.toLowerCase();
  if (haystack.includes("firebase") || haystack.includes("supabase")) return "Backend";
  if (haystack.includes("performance")) return "Performance";
  if (haystack.includes("release") || haystack.includes("build")) return "Delivery";
  if (haystack.includes("vpn")) return "Native";
  return "Flutter";
}

export async function V2Articles({ limit = 3 }: { limit?: number }) {
  const articles = (await getAllArticles()).filter((article) => article.mediumUrl);
  if (articles.length === 0) return null;

  const featured = articles.slice(0, limit);

  return (
    <section id="transmissions" className="relative isolate overflow-hidden py-24 md:py-40">
      <V2SectionField tone="blue" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Deep space environment rendered globally by V2PersistentUniverse */}
      </div>

      <div className="v2-container relative z-10">
        <V2Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="v2-label text-[var(--v2-earth-atmosphere)]">04 / Articles</p>
            <h2 className="v2-h2 mt-4 max-w-[640px] font-semibold text-[var(--text)]">
              Recent notes
            </h2>
            <p className="v2-body-l mt-5 max-w-[640px] text-[var(--muted)]">
              Short notes from real builds, usually around Flutter, backend choices,
              performance, and the release process after something goes live.
            </p>
          </div>
          <Link href="/v2/articles" className="btn-secondary shrink-0 px-6 py-3 text-sm font-medium">
            See the article archive →
          </Link>
        </V2Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((article, index) => (
            <V2Reveal
              as="article"
              key={article.id ?? article.slug}
              delay={index * 60}
              className="v2-panel v2-panel-hover group relative flex min-h-[300px] flex-col p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="v2-label text-[var(--v2-star-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="soft-chip text-[var(--muted)]">{topicFor(article.title)}</span>
              </div>

              {/* article waveform - visual identity without a stock illustration */}
              <svg
                aria-hidden="true"
                viewBox="0 0 352 40"
                className="mt-6 h-10 w-full"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d={`M0 20 Q 29 ${6 + index * 3}, 59 20 T 117 20 T 176 ${14 - index} T 235 20 T 293 20 T 352 20`}
                  stroke="var(--v2-earth-atmosphere)"
                  strokeWidth="1.5"
                  opacity="0.55"
                />
                <path
                  d="M0 30 Q 44 26, 88 30 T 176 30 T 264 30 T 352 30"
                  stroke="var(--v2-star-dim)"
                  strokeWidth="1"
                  opacity="0.25"
                />
              </svg>

              <h3 className="v2-h4 mt-6 font-semibold text-[var(--text)]">
                <a
                  href={article.mediumUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition after:absolute after:inset-0 after:content-[''] hover:text-[var(--v2-earth-atmosphere)] focus-visible:text-[var(--v2-earth-atmosphere)]"
                >
                  {article.title}
                </a>
              </h3>

              <p className="v2-body mt-3 flex-1 text-[var(--muted)]">{article.preview}</p>

              <div
                className="mt-6 flex items-center justify-between border-t pt-4"
                style={{ borderColor: "var(--v2-panel-edge)" }}
              >
                <span className="flex flex-wrap items-center gap-3">
                  <time className="v2-label text-[var(--muted)]" dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="v2-label text-[var(--muted)]">
                    {article.readingTime}
                  </span>
                </span>
                <span className="v2-label flex items-center gap-2 text-[var(--v2-earth-atmosphere)]">
                  Medium
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </div>
            </V2Reveal>
          ))}
        </div>
      </div>
      <V2CelestialBand />
    </section>
  );
}

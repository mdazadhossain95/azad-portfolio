import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import { V2Gallery } from "./v2-gallery";
import { statusLabel } from "./v2-project-card";

/**
 * A featured project, presented as a full-width card.
 *
 * Media alternates sides down the page (592 / 496 at the 1440 reference), and
 * the whole slab is one click target: the title carries a stretched link, so
 * there is a single action per card rather than a column of identical
 * buttons. Store links sit above that layer as quiet secondary text.
 */
export function V2ProjectDossier({
  project,
  index,
  priority = false,
}: {
  project: CaseStudy;
  index: number;
  priority?: boolean;
}) {
  const isLive = project.status === "live";

  const images = project.gallery?.length
    ? project.gallery
    : [{ src: project.coverImage, alt: `${project.shortTitle ?? project.title} screenshot` }];

  const externalLinks = [
    { label: "Play Store", href: project.links.playStore },
    { label: "App Store", href: project.links.appStore },
    { label: "Website", href: project.links.website ?? project.links.live },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="v2-panel v2-panel-hover group relative flex flex-col overflow-hidden">
      <div
        className="relative h-[260px] shrink-0 border-b md:h-[300px]"
        style={{ borderColor: "var(--v2-panel-edge)" }}
      >
        <V2Gallery
          images={images}
          alt={`${project.shortTitle ?? project.title} product screenshot`}
          platforms={project.platforms.join(" · ")}
          sizes="(min-width: 1024px) 592px, 100vw"
          priority={priority}
        />
      </div>

      <div className="flex flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="v2-label text-[var(--v2-star-dim)]">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="v2-micro inline-flex h-[22px] items-center gap-1.5 rounded-md px-2"
            style={{
              color: isLive ? "var(--v2-verified)" : "var(--muted)",
              border: `1px solid ${
                isLive ? "color-mix(in srgb, var(--v2-verified) 45%, transparent)" : "var(--line)"
              }`,
            }}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: isLive ? "var(--v2-verified)" : "var(--muted)" }}
            />
            {statusLabel[project.status] ?? project.status}
          </span>
        </div>

        <h3 className="v2-h3 mt-4 font-semibold text-[var(--text)]">
          <Link
            href={`/v2/projects/${project.slug}`}
            className="transition after:absolute after:inset-0 after:content-[''] hover:text-[var(--v2-earth-atmosphere)] focus-visible:text-[var(--v2-earth-atmosphere)]"
          >
            {project.shortTitle ?? project.title}
          </Link>
        </h3>

        <p className="v2-body-s mt-2 text-[var(--muted)]">
          {project.role}
          {project.company ? ` · ${project.company}` : ""}
        </p>

        <p className="v2-body mt-4 line-clamp-3 max-w-[440px] text-[var(--muted)]">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="soft-chip text-[var(--muted)]">
              {tech}
            </span>
          ))}
        </div>

        <div
          className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-5"
          style={{ borderColor: "var(--v2-panel-edge)" }}
        >
          <span className="v2-label flex items-center gap-2 text-[var(--v2-earth-atmosphere)]">
            View project
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>

          {externalLinks.length > 0 && (
            <span className="relative z-10 flex flex-wrap gap-3">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="v2-body-s inline-flex min-h-11 items-center text-[var(--muted)] underline-offset-4 transition hover:text-[var(--text)] hover:underline md:min-h-6"
                >
                  {link.label} ↗
                </a>
              ))}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { CaseStudy } from "@/lib/types";
import { V2Gallery } from "./v2-gallery";

export const statusLabel: Record<string, string> = {
  live: "Live",
  private: "Private / client",
  archived: "Archived",
  concept: "Concept",
};

/**
 * The compact card: one case study in a single archive grid cell.
 *
 * The wide treatment lives in `V2ProjectDossier` - a category's lead project is
 * promoted to that when it makes the remaining cards fill their rows. Both share
 * the same media behaviour (`V2Gallery`) and the same single-action rule: the
 * title carries a stretched link over the whole card, so the archive never turns
 * into a grid of identical buttons.
 */
export function V2ProjectCard({
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
    <article className="v2-panel v2-panel-hover group relative flex h-full flex-col overflow-hidden">
      <div
        className="relative aspect-[16/10] border-b"
        style={{ borderColor: "var(--v2-panel-edge)" }}
      >
        <V2Gallery
          images={images}
          alt={`${project.shortTitle ?? project.title} product screenshot`}
          platforms={project.platforms.join(" · ")}
          sizes="(min-width: 1024px) 352px, (min-width: 640px) 46vw, 100vw"
          priority={priority}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
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

        <h3 className="v2-h4 mt-4 font-semibold text-[var(--text)]">
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

        <p className="v2-body mt-3 line-clamp-3 flex-1 text-[var(--muted)]">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="soft-chip text-[var(--muted)]">
              {tech}
            </span>
          ))}
        </div>

        <div
          className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4"
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

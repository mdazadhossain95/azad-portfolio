import Image from "next/image";
import Link from "next/link";
import { getPrimaryProjectLink } from "@/lib/project-taxonomy";
import { CaseStudy } from "@/lib/types";

type ProjectCardProps = {
  project: CaseStudy;
  priority?: boolean;
};

const statusLabel: Record<string, string> = {
  live: "Live",
  private: "Private / Client",
  archived: "Archived",
  concept: "Concept",
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const primaryLink = getPrimaryProjectLink(project);

  return (
    <article className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.05]"
          priority={priority}
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(180deg, transparent 45%, color-mix(in srgb, var(--text) 20%, transparent) 100%)" }}
        />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-[color:var(--text)/0.9] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--bg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View details
        </span>
        <span className="absolute left-3 top-3 rounded-full border border-[var(--line)] bg-[var(--bg)]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)] backdrop-blur-sm">
          {statusLabel[project.status] ?? project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--text)]">{project.title}</h3>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
            {project.role} · {project.company}
          </p>
          <p className="text-sm leading-6 text-[var(--text-muted)]">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((item) => (
              <span key={item} className="soft-chip text-xs text-[var(--text-muted)]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/projects/${project.slug}`} className="btn-primary px-4 py-2 text-sm font-medium">
            View Details
          </Link>
          {primaryLink ? (
            <a href={primaryLink} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-sm font-medium">
              {project.links.playStore ? "Play Store" : project.links.appStore ? "App Store" : project.links.website ? "Website" : "Live Link"} ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

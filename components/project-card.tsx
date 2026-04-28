import Image from "next/image";
import Link from "next/link";
import { getPrimaryProjectLink } from "@/lib/project-taxonomy";
import { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryLink = getPrimaryProjectLink(project);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--card)] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--text)]">{project.title}</h3>
          {project.role ? <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{project.role}</p> : null}
          <p className="text-sm leading-6 text-[var(--muted)]">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((item) => (
              <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/projects/${project.slug}`} className="rounded-full bg-[var(--text)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:opacity-90">
            View Details
          </Link>
          {primaryLink ? (
            <a href={primaryLink} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--bg)]">
              Play Store / External Link
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

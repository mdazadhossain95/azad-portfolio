import Link from "next/link";
import { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-[var(--line)] bg-[var(--card)] p-4 transition hover:-translate-y-1 hover:border-[var(--accent)]">
      <div
        className="h-52 w-full rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,0.35)), url(${project.images[0] ?? ""})`,
        }}
      />
      <div className="mt-4 space-y-3">
        <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
        <p className="text-sm leading-6 text-[var(--muted)]">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {item}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex text-sm font-medium text-[var(--accent)]"
        >
          View case study
        </Link>
      </div>
    </article>
  );
}

import Link from "next/link";
import { projects } from "@/content/projects";
import { SectionTitle } from "@/components/section-title";

export function V3ProjectArchive() {
  const items = projects.slice().sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-18">
      <div className="mb-8">
        <Link href="/v3" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors">
          ← Back to notebook
        </Link>
      </div>
      <SectionTitle
        eyebrow="Project archive"
        title="All the notebooks"
        description="A fuller index of shipped work, kept in the same light paper language."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((project, index) => (
          <article key={project.id} className="surface-card v3-anim-enter p-5 md:p-6" style={{ animationDelay: `${index * 60}ms` }}>
            <div className="flex items-center justify-between gap-3">
              <p className="font-handwriting text-2xl" style={{ color: "var(--v3-gold)" }}>
                {project.shortTitle ?? project.title}
              </p>
              <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                {project.category}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="soft-chip text-[var(--text)]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/v3/projects/${project.slug}`} className="btn-primary px-5 py-2.5 text-xs font-medium">
                View case study
              </Link>
              {project.links?.website ? (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary px-5 py-2.5 text-xs font-medium"
                >
                  Website ↗
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

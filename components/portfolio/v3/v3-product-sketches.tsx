import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/portfolio/v3/v3-section-title";
import { projects } from "@/content/projects";

export function V3ProductSketches() {
  const sketches = projects
    .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999))
    .slice(0, 4);

  return (
    <section id="sketches" className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Product sketches"
        title="Shipped screens, taped in"
        description="Real product screenshots from released apps, with a short note on the decision behind each."
        action={
          <Link href="/v3/projects" className="btn-secondary px-5 py-2.5 text-xs font-medium">
            All projects ↗
          </Link>
        }
      />

      <div className="grid gap-6 md:grid-cols-2">
        {sketches.map((project, index) => (
          <article
            key={project.id}
            className={`surface-card v3-anim-enter p-3 pb-4 shadow-[0_12px_28px_rgba(53,50,44,0.12)] ${
              index % 2 === 0 ? "lg:rotate-[-0.8deg]" : "lg:rotate-[0.8deg]"
            }`}
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <Link
              href={`/v3/projects/${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--bg)] p-2">
                {/* Tape strip */}
                <div className="absolute -top-3 left-1/2 z-10 h-8 w-24 -translate-x-1/2 -rotate-2 bg-[rgba(255,255,255,0.4)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] backdrop-blur-sm mix-blend-overlay"></div>
                <div className="relative h-full w-full overflow-hidden rounded-sm border border-[var(--line)]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="font-handwriting text-xl" style={{ color: "var(--v3-gold)" }}>
                  {project.shortTitle ?? project.title}
                </p>
                <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  Sketch {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </Link>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="soft-chip text-[var(--text)]">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">
              {project.technicalDecisions[0]?.explanation ?? project.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

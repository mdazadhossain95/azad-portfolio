import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/types";

type FeaturedCaseStudyProps = {
  project: CaseStudy;
  index: number;
};

export function FeaturedCaseStudy({ project, index }: FeaturedCaseStudyProps) {
  const isEven = index % 2 === 0;

  return (
    <article className="group grid gap-8 md:grid-cols-12 md:items-center">
      <div
        className={`md:col-span-7 lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-secondary)] shadow-sm transition duration-500 group-hover:shadow-md ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        <Link href={`/projects/${project.slug}`} className="block h-full w-full">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority={index === 0}
          />
        </Link>
      </div>

      <div
        className={`md:col-span-5 lg:col-span-6 flex flex-col space-y-5 ${
          isEven ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="space-y-2">
          <p className="mono text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            {project.category}
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
            <Link href={`/projects/${project.slug}`} className="hover:text-[var(--accent)] transition-colors">
              {project.title}
            </Link>
          </h3>
        </div>

        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 text-sm leading-relaxed text-[var(--text-secondary)] shadow-sm sm:p-6 md:-mx-4 md:bg-[var(--surface)]/80 md:backdrop-blur-md">
          <p>{project.summary}</p>
          
          <div className="mt-4 border-t border-[var(--line)] pt-4">
            <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">My Role</p>
            <p className="text-sm font-medium text-[var(--text)]">{project.role}</p>
            {project.contributions.length > 0 && (
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {project.contributions[0]}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="soft-chip text-xs font-medium text-[var(--text)]">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <Link href={`/projects/${project.slug}`} className="btn-primary px-5 py-2.5 text-sm font-medium">
            View Case Study
          </Link>
          {project.links.playStore && (
            <a href={project.links.playStore} target="_blank" rel="noreferrer" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]">
              Play Store ↗
            </a>
          )}
          {project.links.appStore && !project.links.playStore && (
            <a href={project.links.appStore} target="_blank" rel="noreferrer" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]">
              App Store ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

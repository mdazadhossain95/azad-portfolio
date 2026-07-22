import Link from "next/link";
import { FeaturedCaseStudy } from "@/components/featured-case-study";
import { defaultProjects } from "@/lib/default-content";

export function FeaturedWorkSection() {
  const featuredProjects = defaultProjects
    .filter((project) => project.featured)
    .sort((a, b) => a.priority - b.priority);

  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            03. Featured Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl lg:text-5xl">
            Production case studies
          </h2>
        </div>
        <Link href="/projects" className="text-sm font-medium text-[var(--accent)] hover:underline md:pb-2">
          View all projects →
        </Link>
      </div>
      
      <div className="space-y-24 md:space-y-32">
        {featuredProjects.map((project, index) => (
          <FeaturedCaseStudy key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

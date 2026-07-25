import Link from "next/link";
import { FeaturedCaseStudy } from "@/components/featured-case-study";
import { projects } from "@/content/projects";

export function FeaturedWorkSection() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3);

  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <h2 className="flex items-center gap-4 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl lg:text-5xl">
            <span className="mono text-lg font-normal text-[var(--text-muted)]">03.</span>
            Some Things I&apos;ve Built
          </h2>
          <p className="max-w-2xl text-base text-[var(--text-muted)] md:text-lg">
            A selection of production mobile applications, FinTech platforms, and AI integrations I have engineered for global clients.
          </p>
        </div>
        <Link href="/v4/projects" className="group flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--text)] transition-colors md:pb-2">
          View full archive
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
      
      <div className="flex flex-col gap-12 md:gap-16">
        {featuredProjects.map((project, index) => (
          <FeaturedCaseStudy key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

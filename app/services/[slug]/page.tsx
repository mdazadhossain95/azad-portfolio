import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/content/services";
import { defaultProjects } from "@/lib/default-content";
import { ProjectCard } from "@/components/project-card";
import { profile } from "@/content/profile";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ServicePageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.id === slug);

  return {
    title: `${service?.title ?? slug.replaceAll("-", " ")} | Services | Azad Portfolio`,
    description: service?.description,
  };
}

export default async function ServicePage(props: ServicePageProps) {
  const { slug } = await props.params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const relatedCaseStudy = defaultProjects.find(
    (p) => p.slug === service.caseStudySlug
  );

  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-24 md:px-8 md:py-32">
      <Link href="/#services" className="text-sm font-medium text-[var(--accent)] hover:underline mb-8 inline-block">
        ← Back to all services
      </Link>
      
      <div className="space-y-6">
        <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          Service Details
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl lg:text-6xl">
          {service.title}
        </h1>
        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          {service.description}
        </p>
      </div>

      <div className="mt-16 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)] mb-6">
            Related Experience
          </h2>
          {relatedCaseStudy ? (
            <div className="max-w-md">
              <ProjectCard project={relatedCaseStudy} />
            </div>
          ) : (
            <p className="text-[var(--text-muted)]">Case study coming soon.</p>
          )}
        </div>

        <div className="surface-card p-8 md:p-10 text-center rounded-2xl">
          <h2 className="text-2xl font-semibold text-[var(--text)]">
            Ready to discuss your project?
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            If you need help with {service.title.toLowerCase()}, I&apos;m available for new opportunities. Let&apos;s build something great together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={profile.links.upwork}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-6 py-3 text-sm font-medium"
            >
              Hire me on Upwork ↗
            </a>
            <Link
              href="/#contact"
              className="btn-secondary px-6 py-3 text-sm font-medium"
            >
              Contact via Email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { profile } from "@/content/profile";
import { CaseStudy } from "@/lib/types";
import { ImageGalleryModal } from "./image-gallery-modal";

type ProjectDetailsProps = {
  project: CaseStudy;
};

const statusBadge: Record<string, string> = {
  live: "Live product",
  private: "Private / client project",
  archived: "Archived",
  concept: "Concept",
};

function CaseStudySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">{title}</h2>
      <div className="text-base leading-8 text-[var(--text-muted)]">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-[var(--text-muted)]">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetailsPage({ project }: ProjectDetailsProps) {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const searchParams = useSearchParams();
  const returnVersion = searchParams?.get("v");

  const hasManyImages = project.gallery.length > 1;
  const prevSlide = () => {
    if (!hasManyImages) return;
    setActiveSlide((i) => (i - 1 + project.gallery.length) % project.gallery.length);
  };
  const nextSlide = () => {
    if (!hasManyImages) return;
    setActiveSlide((i) => (i + 1) % project.gallery.length);
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      {returnVersion ? (
        <Link href={`/${returnVersion}`} className="text-sm text-[var(--accent)] hover:underline">
          ← Return to {returnVersion.toUpperCase()}
        </Link>
      ) : (
        <Link href="/projects" className="text-sm text-[var(--accent)] hover:underline">
          ← Back to projects
        </Link>
      )}

      {/* Hero */}
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
              {project.category} · {statusBadge[project.status]}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </div>

          <p className="text-lg leading-8 text-[var(--text-secondary)]">{project.summary}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Role</p>
              <p className="mt-1 text-sm font-medium text-[var(--text)]">{project.role}</p>
            </div>
            {project.timeframe ? (
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Timeframe</p>
                <p className="mt-1 text-sm font-medium text-[var(--text)]">{project.timeframe}</p>
              </div>
            ) : null}
            {project.company ? (
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Company</p>
                <p className="mt-1 text-sm font-medium text-[var(--text)]">{project.company}</p>
              </div>
            ) : null}
            {project.teamContext ? (
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Team</p>
                <p className="mt-1 text-sm font-medium text-[var(--text)]">{project.teamContext}</p>
              </div>
            ) : null}
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Platforms</p>
              <p className="mt-1 text-sm font-medium text-[var(--text)]">{project.platforms.join(" · ")}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.playStore ? (
              <a href={project.links.playStore} target="_blank" rel="noreferrer" className="btn-primary px-5 py-2.5 text-sm">
                Play Store
              </a>
            ) : null}
            {project.links.appStore ? (
              <a href={project.links.appStore} target="_blank" rel="noreferrer" className="btn-secondary px-5 py-2.5 text-sm">
                App Store
              </a>
            ) : null}
            {project.links.website ? (
              <a href={project.links.website} target="_blank" rel="noreferrer" className="btn-secondary px-5 py-2.5 text-sm">
                Website
              </a>
            ) : null}
            {project.links.github ? (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-secondary px-5 py-2.5 text-sm">
                GitHub
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative">
          <div className="surface-card relative aspect-[4/3] w-full overflow-hidden">
            <button
              type="button"
              onClick={() => setGalleryIndex(activeSlide)}
              className="relative block h-full w-full"
            >
              <Image
                src={project.gallery[activeSlide]?.src ?? project.coverImage}
                alt={project.gallery[activeSlide]?.alt ?? project.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </button>

            {hasManyImages ? (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white transition hover:bg-black/70"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white transition hover:bg-black/70"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            ) : null}
          </div>

          {hasManyImages ? (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {project.gallery.map((image, index) => (
                <button
                  type="button"
                  key={`${project.slug}-thumb-${index}`}
                  onClick={() => setActiveSlide(index)}
                  className={`surface-card relative aspect-[4/3] overflow-hidden border-2 transition ${
                    index === activeSlide ? "border-[var(--accent)]" : "border-transparent"
                  }`}
                >
                  <Image src={image.src} alt={image.alt} fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* Case study body */}
      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
        <div className="space-y-12">
          <CaseStudySection title="Product Context">
            <p>{project.productContext}</p>
            {project.businessProblem ? <p className="mt-4">{project.businessProblem}</p> : null}
          </CaseStudySection>

          <CaseStudySection title="My Role">
            <p>
              <span className="font-medium text-[var(--text)]">{project.role}</span>
              {project.company ? ` at ${project.company}` : ""}
              {project.timeframe ? `, ${project.timeframe}.` : "."}
            </p>
            {project.teamContext ? <p className="mt-4">{project.teamContext}</p> : null}
            {project.ownershipNote ? <p className="mt-4">{project.ownershipNote}</p> : null}
            {project.confidentialityNote ? <p className="mt-4 text-sm italic">{project.confidentialityNote}</p> : null}
          </CaseStudySection>

          {project.challenges.length > 0 ? (
            <CaseStudySection title="The Challenge">
              <BulletList items={project.challenges} />
            </CaseStudySection>
          ) : null}

          {project.constraints && project.constraints.length > 0 ? (
            <CaseStudySection title="Constraints">
              <BulletList items={project.constraints} />
            </CaseStudySection>
          ) : null}

          {project.approach.length > 0 ? (
            <CaseStudySection title="My Approach">
              <BulletList items={project.approach} />
            </CaseStudySection>
          ) : null}

          {project.contributions.length > 0 ? (
            <CaseStudySection title="What I Built">
              <BulletList items={project.contributions} />
            </CaseStudySection>
          ) : null}

          {project.technicalDecisions.length > 0 ? (
            <CaseStudySection title="Technical Decisions">
              <div className="space-y-5">
                {project.technicalDecisions.map((decision) => (
                  <div key={decision.title} className="surface-card p-5">
                    <h3 className="text-base font-semibold text-[var(--text)]">{decision.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{decision.explanation}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>
          ) : null}

          {project.edgeCases && project.edgeCases.length > 0 ? (
            <CaseStudySection title="Edge Cases">
              <BulletList items={project.edgeCases} />
            </CaseStudySection>
          ) : null}

          {project.testingAndRelease && project.testingAndRelease.length > 0 ? (
            <CaseStudySection title="Testing & Release">
              <BulletList items={project.testingAndRelease} />
            </CaseStudySection>
          ) : null}

          {project.results.length > 0 ? (
            <CaseStudySection title="Results & Proof">
              <div className="space-y-4">
                {project.results
                  .filter((r) => r.evidence !== "unverified")
                  .map((result) => (
                    <div key={result.statement} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--success)]" />
                      <div>
                        <p className="text-[var(--text)]">{result.statement}</p>
                        <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">
                          Evidence: {result.evidence}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CaseStudySection>
          ) : null}

          {project.lessons && project.lessons.length > 0 ? (
            <CaseStudySection title="Reflection">
              <BulletList items={project.lessons} />
            </CaseStudySection>
          ) : null}

          <CaseStudySection title="Need help with a similar project?">
            <p>
              I work with teams to build, improve, and release Flutter apps. If you have a production Flutter app or a new product idea, let’s discuss it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.links.upwork}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-6 py-3 text-sm font-medium"
              >
                Discuss Your Project on Upwork
              </a>
              <Link href="/projects" className="btn-secondary px-6 py-3 text-sm font-medium">
                View More Work
              </Link>
            </div>
          </CaseStudySection>
        </div>

        <aside className="space-y-6">
          <div className="surface-card p-6">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Technologies</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((item) => (
                <span key={item} className="soft-chip text-xs text-[var(--text)]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {project.integrations && project.integrations.length > 0 ? (
            <div className="surface-card p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Integrations</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.integrations.map((item) => (
                  <span key={item} className="soft-chip text-xs text-[var(--text)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {project.relatedProjects && project.relatedProjects.length > 0 ? (
            <div className="surface-card p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Related Work</p>
              <div className="mt-4 flex flex-col gap-3">
                {project.relatedProjects.map((rp) => (
                  <Link key={rp.slug} href={`/projects/${rp.slug}`} className="text-sm font-medium text-[var(--accent)] hover:underline">
                    {rp.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </div>

      {galleryIndex !== null ? (
        <ImageGalleryModal
          images={project.gallery.map((g) => g.src)}
          initialIndex={galleryIndex}
          title={project.title}
          onClose={() => setGalleryIndex(null)}
        />
      ) : null}
    </section>
  );
}

export const ProjectDetails = ProjectDetailsPage;

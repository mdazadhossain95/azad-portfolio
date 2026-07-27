import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import { profile } from "@/content/profile";
import { V2Gallery } from "./v2-gallery";
import { V2SectionField } from "./v2-cosmic";
import { statusLabel } from "./v2-project-card";

function DetailSection({
  title,
  coordinate,
  children,
}: {
  title: string;
  coordinate: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t pt-8 md:pt-10" style={{ borderColor: "var(--v2-panel-edge)" }}>
      <p className="v2-label text-[var(--v2-earth-atmosphere)]">{coordinate}</p>
      <h2 className="v2-h3 mt-3 font-semibold text-[var(--text)]">{title}</h2>
      <div className="v2-body mt-5 space-y-4 text-[var(--muted)]">{children}</div>
    </section>
  );
}

function MissionList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full"
            style={{
              backgroundColor: "var(--v2-earth-atmosphere)",
              boxShadow: "0 0 10px color-mix(in srgb, var(--v2-earth-atmosphere) 55%, transparent)",
            }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Fact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="v2-label text-[var(--v2-star-dim)]">{label}</dt>
      <dd className="v2-body-s mt-1.5 font-medium text-[var(--text)]">{value}</dd>
    </div>
  );
}

export function V2ProjectDetail({ project }: { project: CaseStudy }) {
  const images = project.gallery.length
    ? project.gallery
    : [{ src: project.coverImage, alt: `${project.shortTitle ?? project.title} screenshot` }];
  const verifiedResults = project.results.filter((result) => result.evidence !== "unverified");
  const externalLinks = [
    { label: "Play Store", href: project.links.playStore },
    { label: "App Store", href: project.links.appStore },
    { label: "Website", href: project.links.website ?? project.links.live },
    { label: "GitHub", href: project.links.github },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="relative isolate overflow-hidden pb-24 pt-10 md:pb-32 md:pt-14">
      <V2SectionField tone="violet" intensity="subtle" />

      <div className="v2-container relative z-10">
        <nav aria-label="Project navigation" className="flex flex-wrap items-center gap-3">
          <Link
            href="/v2/projects"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm text-[var(--muted)] transition hover:text-[var(--text)] focus-visible:text-[var(--text)]"
            style={{ borderColor: "var(--v2-panel-edge)" }}
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Project archive
          </Link>
          <Link
            href="/v2#projects"
            className="inline-flex min-h-11 items-center px-2 text-sm text-[var(--v2-earth-atmosphere)] underline-offset-4 hover:underline focus-visible:underline"
          >
            Return to Jupiter
          </Link>
        </nav>

        <header className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-end">
          <div>
            <p className="v2-label text-[var(--v2-earth-atmosphere)]">
              PROJECT DOSSIER · {project.category}
            </p>
            <h1 className="v2-h1 mt-4 max-w-[860px] font-semibold text-[var(--text)]">
              {project.title}
            </h1>
            <p className="v2-body-l mt-6 max-w-[760px] text-[var(--muted)]">{project.summary}</p>
          </div>

          <dl
            className="grid grid-cols-2 gap-x-5 gap-y-6 border-l pl-6"
            style={{ borderColor: "var(--v2-panel-edge)" }}
          >
            <Fact label="Status" value={statusLabel[project.status] ?? project.status} />
            <Fact label="Role" value={project.role} />
            {project.timeframe ? <Fact label="Period" value={project.timeframe} /> : null}
            <Fact label="Platforms" value={project.platforms.join(" · ")} />
          </dl>
        </header>

        <section
          aria-label={`${project.title} gallery`}
          className="v2-panel mt-12 h-[300px] overflow-hidden sm:h-[430px] lg:h-[620px]"
        >
          <V2Gallery
            images={images}
            alt={`${project.shortTitle ?? project.title} project evidence`}
            platforms={project.platforms.join(" · ")}
            sizes="(min-width: 1440px) 1308px, (min-width: 768px) 92vw, 100vw"
            priority
          />
        </section>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div className="space-y-12 md:space-y-16">
            <DetailSection title="Product context" coordinate="01 / ORIGIN">
              <p>{project.productContext}</p>
              {project.businessProblem ? <p>{project.businessProblem}</p> : null}
            </DetailSection>

            <DetailSection title="Role and ownership" coordinate="02 / CREW">
              <p>
                <strong className="font-semibold text-[var(--text)]">{project.role}</strong>
                {project.company ? ` at ${project.company}` : ""}
                {project.timeframe ? `, ${project.timeframe}.` : "."}
              </p>
              {project.teamContext ? <p>{project.teamContext}</p> : null}
              <p>{project.ownershipNote}</p>
              {project.confidentialityNote ? (
                <p className="text-sm italic text-[var(--v2-star-dim)]">{project.confidentialityNote}</p>
              ) : null}
            </DetailSection>

            {project.challenges.length ? (
              <DetailSection title="The challenge" coordinate="03 / GRAVITY">
                <MissionList items={project.challenges} />
              </DetailSection>
            ) : null}

            {project.approach.length ? (
              <DetailSection title="Engineering approach" coordinate="04 / TRAJECTORY">
                <MissionList items={project.approach} />
              </DetailSection>
            ) : null}

            {project.contributions.length ? (
              <DetailSection title="What I built" coordinate="05 / SYSTEMS">
                <MissionList items={project.contributions} />
              </DetailSection>
            ) : null}

            {project.technicalDecisions.length ? (
              <DetailSection title="Technical decisions" coordinate="06 / NAVIGATION">
                <div className="grid gap-4">
                  {project.technicalDecisions.map((decision) => (
                    <div
                      key={decision.title}
                      className="border-l py-1 pl-5"
                      style={{ borderColor: "var(--v2-earth-atmosphere)" }}
                    >
                      <h3 className="v2-h4 font-semibold text-[var(--text)]">{decision.title}</h3>
                      <p className="mt-2">{decision.explanation}</p>
                    </div>
                  ))}
                </div>
              </DetailSection>
            ) : null}

            {project.constraints?.length ? (
              <DetailSection title="Constraints" coordinate="07 / LIMITS">
                <MissionList items={project.constraints} />
              </DetailSection>
            ) : null}

            {project.edgeCases?.length ? (
              <DetailSection title="Edge cases" coordinate="08 / ANOMALIES">
                <MissionList items={project.edgeCases} />
              </DetailSection>
            ) : null}

            {project.testingAndRelease?.length ? (
              <DetailSection title="Testing and release" coordinate="09 / FLIGHT CHECK">
                <MissionList items={project.testingAndRelease} />
              </DetailSection>
            ) : null}

            {verifiedResults.length ? (
              <DetailSection title="Results and proof" coordinate="10 / SIGNAL">
                <div className="space-y-4">
                  {verifiedResults.map((result) => (
                    <div key={result.statement} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-[var(--v2-verified)]"
                      />
                      <div>
                        <p className="text-[var(--text)]">{result.statement}</p>
                        <p className="v2-label mt-1 text-[var(--v2-star-dim)]">
                          Evidence · {result.evidence}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </DetailSection>
            ) : null}

            {project.lessons?.length ? (
              <DetailSection title="Reflection" coordinate="11 / RETURN">
                <MissionList items={project.lessons} />
              </DetailSection>
            ) : null}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="v2-panel p-6">
              <p className="v2-label text-[var(--v2-earth-atmosphere)]">System manifest</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="soft-chip text-[var(--muted)]">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {project.integrations?.length ? (
              <div className="v2-panel p-6">
                <p className="v2-label text-[var(--v2-star-dim)]">Integrations</p>
                <ul className="v2-body-s mt-4 space-y-2 text-[var(--muted)]">
                  {project.integrations.map((integration) => (
                    <li key={integration}>{integration}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {externalLinks.length ? (
              <div className="v2-panel p-6">
                <p className="v2-label text-[var(--v2-star-dim)]">Verified destinations</p>
                <div className="mt-4 flex flex-col gap-2">
                  {externalLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-between text-sm text-[var(--text)] underline-offset-4 hover:text-[var(--v2-earth-atmosphere)] hover:underline focus-visible:text-[var(--v2-earth-atmosphere)]"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            {project.relatedProjects?.length ? (
              <div className="v2-panel p-6">
                <p className="v2-label text-[var(--v2-star-dim)]">Related missions</p>
                <div className="mt-4 flex flex-col gap-2">
                  {project.relatedProjects.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/v2/projects/${related.slug}`}
                      className="inline-flex min-h-11 items-center text-sm text-[var(--text)] hover:text-[var(--v2-earth-atmosphere)] focus-visible:text-[var(--v2-earth-atmosphere)]"
                    >
                      {related.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <a
              href={profile.links.upwork}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex min-h-12 w-full items-center justify-center px-5 text-sm font-semibold"
            >
              Discuss a similar project
            </a>
          </aside>
        </div>
      </div>
    </article>
  );
}

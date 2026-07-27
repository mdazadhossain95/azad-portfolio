import Link from "next/link";
import { projects } from "@/content/projects";
import { V2ProjectDossier } from "./v2-project-dossier";
import { V2ProjectCard } from "./v2-project-card";
import { V2Reveal } from "./v2-reveal";
import { V2SectionField } from "./v2-cosmic";
import { V2CelestialBand } from "./v2-celestial-band";

export function V2Projects() {
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.priority - b.priority);

  return (
    <section id="projects" className="relative isolate overflow-hidden py-24 md:py-40">
      <V2SectionField tone="violet" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* The 3D Jupiter environment is rendered globally by V2PersistentUniverse */}
      </div>

      <div className="v2-container relative z-10">
        <V2Reveal className="flex flex-col gap-6 lg:ml-[52%]">
          <div>
            <p className="v2-label text-[var(--v2-earth-atmosphere)]">03 / Projects</p>
            <h2 className="v2-h2 mt-4 max-w-[640px] font-semibold text-[var(--text)]">
              Selected work
            </h2>
            <p className="v2-body-l mt-5 max-w-[640px] text-[var(--muted)]">
              FinTech, AI, e-commerce, and utility apps that had to ship for real
              users, not just look tidy in a grid.
            </p>
          </div>
          <Link href="/v2/projects" className="btn-secondary shrink-0 px-6 py-3 text-sm font-medium">
            See the full archive →
          </Link>
        </V2Reveal>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {featured.length > 0 && (
              <V2Reveal key={featured[0].id}>
                <V2ProjectDossier project={featured[0]} index={0} />
              </V2Reveal>
            )}
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            {featured.slice(1, 3).map((project, index) => (
              <V2Reveal key={project.id} className="flex-1 flex flex-col">
                <V2ProjectCard project={project} index={index + 1} priority={false} />
              </V2Reveal>
            ))}
          </div>
        </div>
      </div>
      <V2CelestialBand />
    </section>
  );
}

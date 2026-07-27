import { projects } from "@/content/projects";
import { categoryOrder, type ProjectCategory } from "@/lib/project-taxonomy";
import { V2ProjectCard } from "./v2-project-card";
import { V2ProjectDossier } from "./v2-project-dossier";
import { V2Reveal } from "./v2-reveal";
import { V2SectionField } from "./v2-cosmic";

/* Each domain gets its own body and coordinate, so the archive still reads as
   part of the same universe as the homepage. */
const DOMAIN_SCENE: Record<
  ProjectCategory,
  { coordinate: string; planet: "earth" | "mars" | "jupiter" | "saturn"; tone: "blue" | "violet" | "rust" | "warm" }
> = {
  "FinTech & Payments": { coordinate: "FINTECH", planet: "earth", tone: "blue" },
  "AI & Smart Apps": { coordinate: "AI", planet: "saturn", tone: "violet" },
  "Social / Utility Apps": { coordinate: "UTILITY", planet: "mars", tone: "rust" },
  "E-commerce & Lifestyle": { coordinate: "COMMERCE", planet: "jupiter", tone: "warm" },
};

export function V2ProjectArchive() {
  const sorted = [...projects].sort(
    (a, b) => a.priority - b.priority || a.title.localeCompare(b.title)
  );

  let projectIndex = 0;

  return (
    <div className="space-y-20">
      {categoryOrder.map((category, groupIndex) => {
        const group = sorted.filter((project) => project.category === category);
        if (group.length === 0) return null;

        const scene = DOMAIN_SCENE[category];
        /* Pick the split that divides evenly: promote a lead card to a wide
           feature when that is what makes the remaining cards fill their rows.
           No category is ever left with one card stranded beside empty space. */
        const count = group.length;
        const leadIsFeature = count === 1 || count % 3 === 1 || (count % 3 === 2 && count % 2 === 1);
        const remaining = count - (leadIsFeature ? 1 : 0);
        const gridCols = remaining % 3 === 0 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";

        return (
          <section key={category} className="relative isolate overflow-hidden py-4">
            <V2SectionField tone={scene.tone} intensity="subtle" />

            <div className="relative z-10">
              <V2Reveal
                className="flex flex-wrap items-baseline justify-between gap-3 pb-4"
                as="div"
              >
                <h2 className="v2-h3 font-semibold text-[var(--text)]">{category}</h2>
                <p className="v2-label text-[var(--v2-star-dim)]">
                  {scene.coordinate} · {group.length} {group.length === 1 ? "project" : "projects"}
                </p>
              </V2Reveal>
              <div className="h-px w-full" style={{ backgroundColor: "var(--v2-panel-edge)" }} />

              <div className="mt-8 space-y-6">
                {/* The lead becomes a full dossier - same treatment as the
                    homepage, gallery included - whenever that split makes the
                    remaining cards fill their rows. */}
                {leadIsFeature && (
                  <V2Reveal>
                    <V2ProjectDossier
                      project={group[0]}
                      index={projectIndex++}
                      priority={groupIndex === 0}
                    />
                  </V2Reveal>
                )}

                <div className={`grid gap-6 ${gridCols}`}>
                  {group.slice(leadIsFeature ? 1 : 0).map((project, index) => (
                    <V2Reveal key={project.id} delay={(index % 3) * 60}>
                      <V2ProjectCard
                        project={project}
                        index={projectIndex++}
                        priority={groupIndex === 0 && index < 2}
                      />
                    </V2Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

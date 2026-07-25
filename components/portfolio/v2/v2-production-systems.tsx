import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/content/projects";

const statusLabel: Record<string, string> = {
  live: "Live",
  private: "Private / client",
  archived: "Archived",
  concept: "Concept",
};

export function V2ProductionSystems() {
  const systems = projects
    .filter((project) => project.category === "FinTech & Payments")
    .sort((a, b) => a.priority - b.priority);

  return (
    <section id="systems" className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="Production systems"
        title="Financial products shipped to real users"
        description="Structured records for every FinTech and payments system delivered — banking, KYC, and business accounts."
        action={
          <Link href="/projects" className="btn-secondary px-5 py-2.5 text-xs font-medium">
            All systems ↗
          </Link>
        }
      />

      <div className="space-y-4">
        {systems.map((system) => {
          const isLive = system.status === "live";
          return (
            <article key={system.id} className="surface-card p-5 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.08em]"
                      style={{
                        color: isLive ? "var(--v2-verified)" : "var(--muted)",
                        border: `1px solid ${isLive ? "var(--v2-verified)" : "var(--line)"}`,
                      }}
                    >
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isLive ? "var(--v2-verified)" : "var(--muted)" }} />
                      {statusLabel[system.status] ?? system.status}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                      {system.platforms.join(" · ")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{system.title}</h3>
                  <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">{system.summary}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {system.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="soft-chip text-[var(--muted)]">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap gap-2 md:flex-col md:items-end">
                  <Link href={`/projects/${system.slug}`} className="btn-secondary px-4 py-2 text-xs font-medium">
                    View system record
                  </Link>
                  {system.links.playStore && (
                    <a href={system.links.playStore} target="_blank" rel="noreferrer" className="text-xs text-[var(--muted)] transition hover:text-[var(--text)]">
                      Play Store ↗
                    </a>
                  )}
                  {system.links.appStore && (
                    <a href={system.links.appStore} target="_blank" rel="noreferrer" className="text-xs text-[var(--muted)] transition hover:text-[var(--text)]">
                      App Store ↗
                    </a>
                  )}
                  {system.links.website && (
                    <a href={system.links.website} target="_blank" rel="noreferrer" className="text-xs text-[var(--muted)] transition hover:text-[var(--text)]">
                      Website ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

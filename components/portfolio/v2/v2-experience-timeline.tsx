import { SectionTitle } from "@/components/section-title";
import { experience } from "@/content/experience";

export function V2ExperienceTimeline() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="Experience timeline"
        title="Where these systems were built"
        description="Production history across freelance delivery and in-house FinTech engineering."
      />

      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="surface-card p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <a href={exp.url || "#"} target="_blank" rel="noreferrer" className="font-semibold text-[var(--text)] transition hover:text-[var(--accent)]">
                {exp.company}
              </a>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">{exp.period}</span>
            </div>
            <p className="mt-1 text-sm text-[var(--muted)]">{exp.role} · {exp.location}</p>
            <ul className="mt-3 space-y-1.5">
              {exp.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-6 text-[var(--muted)]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--v2-system)" }} />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

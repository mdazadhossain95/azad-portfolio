import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 space-y-4">
        <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          02. Experience
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          Production mobile delivery across teams
        </h2>
      </div>

      <div className="relative space-y-0">
        <div className="absolute left-[7px] top-2 h-full w-px bg-[var(--line)] md:left-[11px]" />
        {experience.map((exp) => (
          <div key={exp.id} className="relative flex gap-6 pb-12">
            <div className="relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-semibold text-[var(--text)]">{exp.company}</p>
                <span className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                {exp.role} · {exp.location}
              </p>
              <ul className="space-y-1.5 pt-1">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm leading-6 text-[var(--text-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

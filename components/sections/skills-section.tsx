import { skills } from "@/content/skills";

export function SkillsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 space-y-4">
        <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          Technical Strengths
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          Capabilities, not a wall of logos
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="surface-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="soft-chip text-xs text-[var(--text)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

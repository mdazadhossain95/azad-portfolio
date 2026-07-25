import { SectionTitle } from "@/components/section-title";
import { skills } from "@/content/skills";

export function V2TechnicalMatrix() {
  return (
    <section id="matrix" className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="Technical matrix"
        title="Full delivery stack"
        description="Every category used to design, build, and ship the systems above."
      />

      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-wrap items-start gap-2 border-b pb-4 last:border-none" style={{ borderColor: "var(--line)" }}>
            <span className="min-w-[9rem] shrink-0 pt-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="soft-chip text-[var(--text)]">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

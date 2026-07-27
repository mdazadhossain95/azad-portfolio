import { SectionTitle } from "@/components/portfolio/v3/v3-section-title";
import { skills } from "@/content/skills";

export function V3TechnicalToolkit() {
  return (
    <section id="toolkit" className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Technical toolkit"
        title="What's in the kit"
        description="Grouped the way I actually reach for them, not by resume category."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => (
          <article key={group.category} className="surface-card v3-anim-enter space-y-4 p-5" style={{ animationDelay: `${index * 70}ms` }}>
            <div className="space-y-1">
              <p className="font-handwriting text-xl" style={{ color: "var(--v3-gold)" }}>
                {group.category}
              </p>
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                Current tools
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="soft-chip text-[var(--text)]">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

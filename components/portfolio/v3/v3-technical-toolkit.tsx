import { SectionTitle } from "@/components/section-title";
import { skills } from "@/content/skills";

export function V3TechnicalToolkit() {
  return (
    <section id="toolkit" className="mx-auto w-full max-w-5xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Technical toolkit"
        title="What's in the kit"
        description="Grouped the way I actually reach for them, not by resume category."
      />
      <div className="space-y-5">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-wrap items-start gap-3 border-b pb-4 last:border-none" style={{ borderColor: "var(--line)" }}>
            <span className="font-handwriting min-w-[10rem] shrink-0 text-xl" style={{ color: "var(--v3-gold)" }}>
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

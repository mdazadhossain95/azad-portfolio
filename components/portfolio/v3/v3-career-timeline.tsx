import { SectionTitle } from "@/components/section-title";
import { experience } from "@/content/experience";

export function V3CareerTimeline() {
  return (
    <section id="timeline" className="mx-auto w-full max-w-5xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Career timeline"
        title="Dated entries"
        description="Each entry is a real role, not a highlight reel."
      />
      <div className="relative space-y-0 border-l pl-6" style={{ borderColor: "var(--line)" }}>
        {experience.map((exp) => (
          <div key={exp.id} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full"
              style={{ backgroundColor: "var(--v3-gold)" }}
            />
            <p className="font-handwriting text-xl" style={{ color: "var(--v3-gold)" }}>
              {exp.period}
            </p>
            <a href={exp.url || "#"} target="_blank" rel="noreferrer" className="mt-1 block text-lg font-semibold text-[var(--text)] hover:underline">
              {exp.company}
            </a>
            <p className="text-sm text-[var(--muted)]">{exp.role} · {exp.location}</p>
            <ul className="mt-3 space-y-1.5">
              {exp.bullets.map((bullet) => (
                <li key={bullet} className="text-sm leading-6 text-[var(--muted)]">— {bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

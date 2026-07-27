import { SectionTitle } from "@/components/portfolio/v3/v3-section-title";

const steps = [
  { label: "Listen first", detail: "Understand the real constraint before proposing a solution. Most scope problems are actually communication problems." },
  { label: "Sketch the states", detail: "Map every async/edge state (loading, error, empty, success) before writing a single widget." },
  { label: "Build in small releases", detail: "Ship testable slices instead of one large reveal, which makes problems easier to catch early." },
  { label: "Stay in the details after launch", detail: "Watch crash reports and store reviews; a shipped app is a maintained app." },
];

export function V3WorkProcess() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Work process"
        title="How I actually work"
        description="Four habits that show up on every project, FinTech or otherwise."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {steps.map((step, index) => {
          const sketchyRadii = [
            "255px 15px 225px 15px/15px 225px 15px 255px",
            "15px 225px 15px 255px/255px 15px 225px 15px",
            "225px 15px 255px 15px/15px 255px 15px 225px",
            "15px 255px 15px 225px/225px 15px 255px 15px",
          ];
          
          return (
            <article 
              key={step.label} 
              className="surface-card v3-anim-enter space-y-4 p-6 transition-transform hover:-translate-y-1" 
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-raised)]">
                  <p className="font-handwriting text-2xl" style={{ color: "var(--v3-gold)" }}>
                    {index + 1}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  step {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="font-handwriting text-2xl text-[var(--text)]">{step.label}</p>
              <p className="text-sm leading-7 text-[var(--muted)] font-medium">{step.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

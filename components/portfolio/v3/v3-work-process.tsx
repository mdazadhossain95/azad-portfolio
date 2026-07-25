import { SectionTitle } from "@/components/section-title";

const steps = [
  { label: "Listen first", detail: "Understand the real constraint before proposing a solution — most scope problems are actually communication problems." },
  { label: "Sketch the states", detail: "Map every async/edge state (loading, error, empty, success) before writing a single widget." },
  { label: "Build in small releases", detail: "Ship testable slices instead of one large reveal — easier to catch problems early." },
  { label: "Stay in the details after launch", detail: "Watch crash reports and store reviews; a shipped app is a maintained app." },
];

export function V3WorkProcess() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Work process"
        title="How I actually work"
        description="Four habits that show up on every project, FinTech or otherwise."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {steps.map((step, index) => (
          <div key={step.label} className="surface-card p-5">
            <p className="font-handwriting text-2xl" style={{ color: "var(--v3-gold)" }}>
              {index + 1}.
            </p>
            <p className="mt-1 text-base font-semibold text-[var(--text)]">{step.label}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

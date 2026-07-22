const steps = [
  { number: "01", title: "Understand", description: "Review the product, requirements, codebase, architecture, and current risks." },
  { number: "02", title: "Map", description: "Map user flows, APIs, dependencies, release setup, and failure states before changing code." },
  { number: "03", title: "Plan", description: "Break work into small, testable deliverables with clear acceptance criteria." },
  { number: "04", title: "Build", description: "Implement changes carefully while respecting existing architecture and users." },
  { number: "05", title: "Verify", description: "Test critical paths, error states, Android/iOS differences, and release builds." },
  { number: "06", title: "Communicate", description: "Share progress, decisions, blockers, and risks before they become rework." },
  { number: "07", title: "Release", description: "Support deployment, monitor production behavior, and improve from real feedback." },
];

export function ProcessSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 space-y-4">
        <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          Process
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          How I work
        </h2>
      </div>

      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {index < steps.length - 1 && (
              <div
                className="absolute left-8 top-10 hidden h-px w-full bg-[var(--line)] lg:block"
                style={{ width: "calc(100% - 2rem)" }}
              />
            )}
            <div className="space-y-3">
              <span className="mono flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-sm font-medium text-[var(--accent)]">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-[var(--text)]">{step.title}</h3>
              <p className="text-sm leading-6 text-[var(--text-muted)]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { SectionTitle } from "@/components/section-title";

const steps = [
  {
    label: "Discovery",
    detail: "Map product flows, regulatory constraints, and API contracts with the team before writing UI code.",
  },
  {
    label: "Architecture",
    detail: "Define state models for every async flow (transfers, KYC status, balances) using BLoC/Clean Architecture.",
  },
  {
    label: "Build & integrate",
    detail: "Implement screens against real REST APIs, biometric auth, and secure token storage.",
  },
  {
    label: "Harden & test",
    detail: "Cover pending/failed/completed states, platform differences, and edge cases on real devices.",
  },
  {
    label: "Release & monitor",
    detail: "Ship through Play Store / App Store channels and monitor stability with Crashlytics.",
  },
];

export function V2ArchitectureWorkflow() {
  return (
    <section id="workflow" className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="Architecture workflow"
        title="How a financial system moves from spec to release"
        description="The same delivery workflow used across every production FinTech system above."
      />

      <ol className="relative space-y-0 pl-0">
        <div aria-hidden="true" className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px" style={{ backgroundColor: "var(--line)" }} />
        {steps.map((step, index) => (
          <li key={step.label} className="relative flex gap-5 pb-8 last:pb-0">
            <span
              aria-hidden="true"
              className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs"
              style={{ border: "1px solid var(--v2-system)", color: "var(--v2-system)", backgroundColor: "var(--bg)" }}
            >
              {index + 1}
            </span>
            <div className="pt-1">
              <p className="text-sm font-semibold text-[var(--text)]">{step.label}</p>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--muted)]">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

import { profile } from "@/content/profile";

export function V2Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--v2-verified)" }} />
        Production systems: live
      </div>

      <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl">
        Flutter engineering for regulated FinTech and payment systems.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
        {profile.name} builds and ships production banking, KYC, and payment
        applications — IBAN onboarding, SEPA transfers, biometric
        authorization, and compliance-ready flows across Android and iOS.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={profile.links.upworkConsultation} target="_blank" rel="noreferrer" className="btn-primary px-6 py-3 text-sm font-medium">
          Start a build
        </a>
        <a href="#systems" className="btn-secondary px-6 py-3 text-sm font-medium">
          Review production systems
        </a>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4" style={{ borderColor: "var(--line)" }}>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted)]">Experience</dt>
          <dd className="mt-1 text-2xl font-semibold text-[var(--text)]">{profile.proof.experienceYears}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted)]">Upwork JSS</dt>
          <dd className="mt-1 text-2xl font-semibold text-[var(--text)]">{profile.proof.upworkJss}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted)]">Domain</dt>
          <dd className="mt-1 text-2xl font-semibold text-[var(--text)]">FinTech</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted)]">Platforms</dt>
          <dd className="mt-1 text-2xl font-semibold text-[var(--text)]">iOS · Android</dd>
        </div>
      </dl>
    </section>
  );
}

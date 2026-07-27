import { SectionTitle } from "@/components/section-title";
import { profile } from "@/content/profile";

export function V3About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl space-y-6 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="About this page"
        title="Why a notebook"
        description="Case studies show the result. This page is the margin notes, the part usually left out."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card v3-anim-enter space-y-4 p-6 md:p-8">
          <p className="text-base leading-8 text-[var(--muted)]">
            {profile.name} works as a {profile.title.toLowerCase()} based in {profile.location},
            focused on production Flutter apps across FinTech, AI, and utility products. Most
            of that work happens inside client teams, so the visible result is a Play Store or
            App Store listing, not the reasoning that got it there.
          </p>
          <p className="text-base leading-8 text-[var(--muted)]">
            This version of the portfolio keeps that reasoning visible: what the constraint
            actually was, what got tried, and what shipped. Nothing here is a metric that
            cannot be traced back to a real project.
          </p>
        </div>

        <aside className="surface-card v3-anim-enter space-y-4 p-6 md:p-8" style={{ animationDelay: "120ms" }}>
          <p className="font-handwriting text-2xl" style={{ color: "var(--v3-gold)" }}>
            margin note
          </p>
          <div className="space-y-3 text-sm leading-7 text-[var(--muted)]">
            <p>The notebook keeps the work human.</p>
            <p>Short notes explain the decisions that matter.</p>
            <p>Real content stays readable on mobile, tablet, and desktop.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="soft-chip text-[var(--text)]">{profile.proof.experienceYears}</span>
            <span className="soft-chip text-[var(--text)]">{profile.proof.upworkJss}</span>
            <span className="soft-chip text-[var(--text)]">{profile.status}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

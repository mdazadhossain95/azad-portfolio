import { SectionTitle } from "@/components/section-title";
import { profile } from "@/content/profile";

export function V3About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl space-y-6 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="About this page"
        title="Why a notebook"
        description="Case studies show the result. This page is the margin notes — the part usually left out."
      />
      <div className="max-w-2xl space-y-4 text-base leading-8 text-[var(--muted)]">
        <p>
          {profile.name} works as a {profile.title.toLowerCase()} based in {profile.location},
          focused on production Flutter apps across FinTech, AI, and utility products. Most of
          that work happens inside client teams, so the visible result is a Play Store or App
          Store listing — not the reasoning that got it there.
        </p>
        <p>
          This version of the portfolio keeps that reasoning: what the constraint actually was,
          what got tried, and what shipped. Nothing here is a metric that can&apos;t be traced
          back to a real project.
        </p>
      </div>
    </section>
  );
}

import { SectionTitle } from "@/components/portfolio/v3/v3-section-title";
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

        <aside 
          className="relative v3-anim-enter space-y-4 p-6 md:p-8 bg-[#FDF8B4] text-[#2D2E28] shadow-sm border border-[var(--border-strong)]" 
          style={{ animationDelay: "120ms" }}
        >
          {/* Red Push Pin */}
          <div aria-hidden="true" className="absolute -top-3 left-1/2 z-20 h-5 w-5 -translate-x-1/2">
            <div className="absolute left-[6px] top-[10px] h-2.5 w-2.5 rounded-full bg-black/20 blur-[1px]" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#c0392b] border border-[#a12d22] shadow-sm">
              <div className="absolute top-[2px] left-[3px] h-1 w-1 rounded-full bg-white/70 blur-[0.5px]" />
            </div>
          </div>
          
          <p className="font-handwriting text-2xl text-[var(--v3-burgundy)]">
            Margin note...
          </p>
          <div className="space-y-3 font-handwriting text-xl leading-relaxed text-[#2D2E28]/90">
            <p>The notebook keeps the work human.</p>
            <p>Short notes explain the decisions that matter.</p>
            <p>Real content stays readable on mobile, tablet, and desktop.</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="rounded-sm border border-[rgba(0,0,0,0.1)] bg-[rgba(0,0,0,0.04)] px-2 py-1 font-handwriting text-lg text-[#2D2E28]/90">{profile.proof.experienceYears}</span>
            <span className="rounded-sm border border-[rgba(0,0,0,0.1)] bg-[rgba(0,0,0,0.04)] px-2 py-1 font-handwriting text-lg text-[#2D2E28]/90">{profile.proof.upworkJss}</span>
            <span className="rounded-sm border border-[rgba(0,0,0,0.1)] bg-[rgba(0,0,0,0.04)] px-2 py-1 font-handwriting text-lg text-[#2D2E28]/90">{profile.status}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

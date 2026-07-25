import { SectionTitle } from "@/components/section-title";
import { LiveReviews } from "@/components/live-reviews";

export function V3ClientNotes() {
  return (
    <section id="notes" className="mx-auto w-full max-w-5xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Client notes"
        title="What it was like to work together"
        description="Verified feedback from real delivery, kept in the notebook as-is."
      />
      <LiveReviews />
    </section>
  );
}

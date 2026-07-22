import { LiveReviews } from "@/components/live-reviews";

export function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 space-y-4">
        <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          Testimonials
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          Client feedback from verified delivery
        </h2>
      </div>
      <LiveReviews />
    </section>
  );
}

import { SectionTitle } from "@/components/section-title";
import { profile } from "@/content/profile";
import { defaultReviews } from "@/lib/default-content";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm leading-none ${i < rating ? "text-[#A87318]" : "text-[var(--line)]"}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function V3ClientNotes() {
  const reviews = defaultReviews.slice(0, 3);

  return (
    <section id="notes" className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Client notes"
        title="What it was like to work together"
        description="Verified feedback from real delivery, kept in the notebook as-is."
        action={
          <a
            href={profile.links.upwork}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary px-5 py-2.5 text-xs font-medium"
          >
            View all reviews ↗
          </a>
        }
      />
      {reviews.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article key={review.id} className="surface-card v3-anim-enter flex flex-col gap-5 p-6" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="flex flex-wrap items-center gap-3">
                <Stars rating={review.rating} />
                <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  {review.company === "Upwork" ? "Verified review" : "Client note"}
                </span>
              </div>
              <p className="flex-1 text-base leading-8 text-[var(--text)]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="space-y-1">
                <p className="text-base font-semibold text-[var(--text)]">{review.name}</p>
                <p className="text-sm text-[var(--muted)]">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <article className="surface-card p-6">
          <p className="text-sm leading-7 text-[var(--muted)]">
            No review text is available from a public source right now.
          </p>
        </article>
      )}
    </section>
  );
}

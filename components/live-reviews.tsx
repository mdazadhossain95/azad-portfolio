"use client";

import { useEffect, useState } from "react";
import { defaultReviews } from "@/lib/default-content";
import { watchCollection } from "@/lib/firestore-client";
import { Review } from "@/lib/types";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-yellow-400" : "text-[var(--line)]"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.289-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export function LiveReviews() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);

  useEffect(() => {
    const unsubscribe = watchCollection<Review>("reviews", (items) => {
      if (items.length > 0) {
        setReviews(items);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <article key={review.id} className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6">
            <Stars rating={review.rating} />
            <p className="flex-1 text-sm leading-7 text-[var(--text)]">&quot;{review.text}&quot;</p>
            <div>
              <p className="text-sm font-semibold text-[var(--text)]">{review.name}</p>
              <p className="text-xs text-[var(--muted)]">{review.role}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="text-center text-xs text-[var(--muted)]">
        <a
          href="https://www.upwork.com/freelancers/~01082f851b8bed7bd1"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-[var(--text)]"
        >
          View all reviews on Upwork ↗
        </a>
      </p>
    </div>
  );
}

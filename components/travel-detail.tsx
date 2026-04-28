"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { defaultTravels } from "@/lib/default-content";
import { findBySlug } from "@/lib/firestore-client";
import { TravelPost } from "@/lib/types";

type TravelDetailProps = {
  slug: string;
};

export function TravelDetail({ slug }: TravelDetailProps) {
  const [post, setPost] = useState<TravelPost | null>(
    defaultTravels.find((item) => item.slug === slug) ?? null,
  );

  useEffect(() => {
    let mounted = true;

    findBySlug<TravelPost>("travels", slug)
      .then((item) => {
        if (mounted && item) {
          setPost(item);
        }
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (!post) {
    return (
      <section className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8">
        <p className="text-[var(--muted)]">Travel post not found.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8">
      <Link href="/travel" className="text-sm text-[var(--accent)]">
        Back to travel
      </Link>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)]">{post.title}</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">{post.location ?? "Remote"}</p>
      <div
        className="mt-6 h-72 rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${post.images[0] ?? ""})` }}
      />
      <article className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
        <p>{post.content}</p>
      </article>
    </section>
  );
}

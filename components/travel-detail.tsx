import Link from "next/link";
import { TravelPost } from "@/lib/types";

type TravelDetailProps = {
  post: TravelPost;
};

export function TravelDetail({ post }: TravelDetailProps) {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8 md:py-24">
      <Link href="/travel" className="text-sm text-[var(--accent)]">
        Back to travel
      </Link>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">{post.title}</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">{post.location ?? "Remote"}</p>
      <div
        className="surface-card mt-6 aspect-[4/3] bg-cover bg-center"
        style={{ backgroundImage: `url(${post.images[0] ?? ""})` }}
      />
      <article className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
        <p>{post.content}</p>
      </article>
    </section>
  );
}

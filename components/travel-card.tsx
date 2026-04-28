import Link from "next/link";
import { TravelPost } from "@/lib/types";

type TravelCardProps = {
  post: TravelPost;
};

export function TravelCard({ post }: TravelCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--card)]">
      <div
        className="h-44 w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,0.45)), url(${post.images[0] ?? ""})`,
        }}
      />
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-[var(--text)]">{post.title}</h3>
        <p className="text-sm text-[var(--muted)]">{post.summary}</p>
        <Link href={`/travel/${post.slug}`} className="text-sm text-[var(--accent)]">
          Open post
        </Link>
      </div>
    </article>
  );
}

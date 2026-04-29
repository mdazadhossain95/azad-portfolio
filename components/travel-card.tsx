import Link from "next/link";
import { TravelPost } from "@/lib/types";

type TravelCardProps = {
  post: TravelPost;
};

export function TravelCard({ post }: TravelCardProps) {
  return (
    <article className="surface-card surface-card-hover group overflow-hidden">
      <div
        className="relative aspect-[4/3] w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,0.45)), url(${post.images[0] ?? ""})`,
        }}
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: "color-mix(in srgb, var(--text) 8%, transparent)" }}
        />
      </div>
      <div className="space-y-3 p-5 md:p-6">
        <h3 className="text-xl font-semibold text-[var(--text)]">{post.title}</h3>
        <p className="text-sm leading-7 text-[var(--muted)]">{post.summary}</p>
        <Link href={`/travel/${post.slug}`} className="text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4">
          Open post
        </Link>
      </div>
    </article>
  );
}

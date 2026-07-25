import { LiveArticles } from "@/components/live-articles";
import { SectionTitle } from "@/components/section-title";
import Link from "next/link";

export const metadata = {
  title: "Articles | Azad Portfolio",
  description: "Flutter architecture, performance, and delivery notes by Azad.",
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <Link
        href="/v1"
        className="group mb-12 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Back to Home
      </Link>

      <section
        className="space-y-10 rounded-2xl border px-5 py-20 md:px-8 md:py-24"
        style={{
          borderColor: "color-mix(in srgb, var(--line) 92%, var(--accent) 8%)",
          backgroundColor: "color-mix(in srgb, var(--card) 74%, var(--bg))",
        }}
      >
        <SectionTitle
          level="h1"
          eyebrow="Articles"
          title="Practical notes from real Flutter projects"
          description="Architecture decisions, performance wins, backend choices, and release checklists."
        />
        <LiveArticles />
      </section>
    </div>
  );
}

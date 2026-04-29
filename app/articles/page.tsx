import { LiveArticles } from "@/components/live-articles";
import { SectionTitle } from "@/components/section-title";

export const metadata = {
  title: "Articles | Azad Portfolio",
  description: "Flutter architecture, performance, and delivery notes by Azad.",
};

export default function ArticlesPage() {
  return (
    <section
      className="mx-auto w-full max-w-6xl space-y-10 rounded-2xl border px-5 py-20 md:px-8 md:py-24"
      style={{
        borderColor: "color-mix(in srgb, var(--line) 92%, var(--accent) 8%)",
        backgroundColor: "color-mix(in srgb, var(--card) 74%, var(--bg))",
      }}
    >
      <SectionTitle
        eyebrow="Articles"
        title="Practical notes from real Flutter projects"
        description="Architecture decisions, performance wins, backend choices, and release checklists."
      />
      <LiveArticles />
    </section>
  );
}

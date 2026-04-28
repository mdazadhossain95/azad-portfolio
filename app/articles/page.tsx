import { LiveArticles } from "@/components/live-articles";
import { SectionTitle } from "@/components/section-title";

export const metadata = {
  title: "Articles | Azad Portfolio",
  description: "Flutter architecture, performance, and delivery notes by Azad.",
};

export default function ArticlesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Articles"
        title="Practical notes from real Flutter projects"
        description="Architecture decisions, performance wins, backend choices, and release checklists."
      />
      <LiveArticles />
    </section>
  );
}

import { LiveProjects } from "@/components/live-projects";
import { SectionTitle } from "@/components/section-title";

export const metadata = {
  title: "Projects | Azad Portfolio",
  description: "Structured real project portfolio grouped by domain with production-ready project cards, detail pages, and verified screenshots.",
};

export default function ProjectsPage() {
  return (
    <section
      className="mx-auto w-full max-w-6xl space-y-10 rounded-2xl border px-5 py-20 md:px-8 md:py-24"
      style={{
        borderColor: "color-mix(in srgb, var(--line) 92%, var(--accent) 8%)",
        backgroundColor: "color-mix(in srgb, var(--card) 74%, var(--bg))",
      }}
    >
      <SectionTitle
        eyebrow="Projects"
        title="Real shipped apps organized for client decisions"
        description="Grouped by FinTech & Payments, AI & Smart Apps, Social / Utility Apps, and E-commerce & Lifestyle. Built only from verified project data and real screenshots."
      />
      <LiveProjects />
    </section>
  );
}

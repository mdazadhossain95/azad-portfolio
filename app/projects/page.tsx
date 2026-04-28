import { LiveProjects } from "@/components/live-projects";
import { SectionTitle } from "@/components/section-title";

export const metadata = {
  title: "Projects | Azad Portfolio",
  description: "Structured real project portfolio grouped by domain with production-ready project cards, detail pages, and verified screenshots.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Projects"
        title="Real shipped apps organized for client decisions"
        description="Grouped by FinTech & Payments, AI & Smart Apps, Social / Utility Apps, and E-commerce & Lifestyle. Built only from verified project data and real screenshots."
      />
      <LiveProjects />
    </section>
  );
}

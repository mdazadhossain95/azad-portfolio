import { LiveProjects } from "@/components/live-projects";
import { SectionTitle } from "@/components/section-title";
import Link from "next/link";

export const metadata = {
  title: "Projects | Azad Portfolio",
  description: "Structured real project portfolio grouped by domain with production-ready project cards, detail pages, and verified screenshots.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <Link 
        href="/v1"
        className="group mb-12 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Back to Home
      </Link>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="Projects"
          title="Real shipped apps organized for client decisions"
          description="Grouped by FinTech & Payments, AI & Smart Apps, Social / Utility Apps, and E-commerce & Lifestyle. Built only from verified project data and real screenshots."
        />
        <LiveProjects />
      </section>
    </div>
  );
}

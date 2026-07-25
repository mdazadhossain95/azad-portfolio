import { LiveProjects } from "@/components/live-projects";
import { SectionTitle } from "@/components/section-title";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Projects | Azad Portfolio",
  description: "Structured real project portfolio grouped by domain with production-ready project cards, detail pages, and verified screenshots.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-24">
      
      {/* Explicit Back Button */}
      <Link 
        href="/"
        className="group mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-all hover:border-[var(--accent)]/50 hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-hover:text-[var(--accent)]" />
        Back to Home
      </Link>

      <section className="w-full space-y-10 py-12 md:py-16">
        <SectionTitle
          level="h1"
          eyebrow="Archive"
          title="Real shipped apps organized for client decisions"
          description="Grouped by FinTech & Payments, AI & Smart Apps, Social / Utility Apps, and E-commerce & Lifestyle. Built only from verified project data and real screenshots."
        />
        <LiveProjects />
      </section>
    </div>
  );
}

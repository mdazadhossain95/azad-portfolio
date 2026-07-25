import Link from "next/link";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { ProjectGrid } from "@/components/project-grid";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { ContactSection } from "@/components/sections/contact-section";
import { projects } from "@/content/projects";

export function V4Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <FeaturedWorkSection />
      <ExpertiseSection />
      <section className="py-24 container-main">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold">Other Notable Projects</h2>
          <Link href="/v4/projects" className="group flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--text)] transition-colors md:pb-1">
            See all projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <ProjectGrid projects={projects.filter(p => !p.featured).sort((a, b) => a.priority - b.priority).slice(0, 4)} />
      </section>
      <TestimonialsSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}

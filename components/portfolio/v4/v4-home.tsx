import { HeroSection } from "@/components/sections/hero-section";
import { TrustStrip } from "@/components/sections/trust-strip";
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
        <h2 className="text-3xl font-bold mb-12">Other Notable Projects</h2>
        <ProjectGrid projects={projects.filter(p => !p.featured).sort((a, b) => a.priority - b.priority).slice(0, 4)} />
      </section>
      <TestimonialsSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}

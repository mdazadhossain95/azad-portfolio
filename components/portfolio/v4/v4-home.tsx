import { HeroSection } from "@/components/sections/hero-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectGrid } from "@/components/project-grid";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { ContactSection } from "@/components/sections/contact-section";
import { projects } from "@/content/projects";

export function V4Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FeaturedWorkSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProcessSection />
      <SkillsSection />
      <section className="py-24 container-main">
        <h2 className="text-3xl font-bold mb-12">Other Notable Projects</h2>
        <ProjectGrid projects={projects.filter(p => !p.featured).slice(0, 4)} />
      </section>
      <TestimonialsSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}

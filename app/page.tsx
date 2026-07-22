import { AboutSection } from "@/components/sections/about-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustStrip } from "@/components/sections/trust-strip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FeaturedWorkSection />
      <ServicesSection />
      <ExperienceSection />
      <ProcessSection />
      <AboutSection />
      <SkillsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}

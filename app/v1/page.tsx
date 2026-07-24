import { VersionSwitcher } from "@/components/portfolio/shared/version-switcher";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

import { V1Header } from "@/components/portfolio/v1/v1-header";
import { V1Hero } from "@/components/portfolio/v1/v1-hero";
import { V1About } from "@/components/portfolio/v1/v1-about";
import { V1Experience } from "@/components/portfolio/v1/v1-experience";
import { V1FeaturedWork } from "@/components/portfolio/v1/v1-featured-work";
import { V1OtherProjects } from "@/components/portfolio/v1/v1-other-projects";
import { V1Contact } from "@/components/portfolio/v1/v1-contact";
import { V1Footer } from "@/components/portfolio/v1/v1-footer";
import { V1SocialRails } from "@/components/portfolio/v1/v1-social-rails";

export const metadata = getSharedMetadata(
  "Corporate FinTech Engineer",
  "Senior Flutter Engineer specializing in enterprise FinTech applications.",
  "/v1",
  true // noindex
);

export default function V1Page() {
  return (
    <div className="bg-[var(--bg)] min-h-screen font-sans text-[var(--text)] selection:bg-[var(--accent-soft)] selection:text-[var(--accent)]">
      <V1Header />
      <V1SocialRails />
      
      <main className="container-main mx-auto fill-height px-0 sm:px-6 md:px-12 lg:px-24">
        <V1Hero />
        <V1About />
        <V1Experience />
        <V1FeaturedWork />
        <V1OtherProjects />
        <V1Contact />
      </main>
      
      <V1Footer />
      <VersionSwitcher current="v1" />
    </div>
  );
}

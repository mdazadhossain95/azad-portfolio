import { V3CoverHero } from "@/components/portfolio/v3/v3-cover-hero";
import { V3About } from "@/components/portfolio/v3/v3-about";
import { V3CareerTimeline } from "@/components/portfolio/v3/v3-career-timeline";
import { V3ProductSketches } from "@/components/portfolio/v3/v3-product-sketches";
import { V3TechnicalToolkit } from "@/components/portfolio/v3/v3-technical-toolkit";
import { V3WorkProcess } from "@/components/portfolio/v3/v3-work-process";
import { V3ClientNotes } from "@/components/portfolio/v3/v3-client-notes";
import { V3Contact } from "@/components/portfolio/v3/v3-contact";
import { VersionSwitcher } from "@/components/portfolio/shared/version-switcher";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "Engineering Notebook",
  "An engineering notebook of shipped Flutter products — process, decisions, and client notes.",
  "/v3",
  true
);

export default function V3Page() {
  return (
    <>
      <V3CoverHero />
      <V3About />
      <V3CareerTimeline />
      <V3ProductSketches />
      <V3TechnicalToolkit />
      <V3WorkProcess />
      <V3ClientNotes />
      <V3Contact />
      <VersionSwitcher current="v3" />
    </>
  );
}

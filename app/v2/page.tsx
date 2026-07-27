import { V2Hero } from "@/components/portfolio/v2/v2-hero";
import { V2About } from "@/components/portfolio/v2/v2-about";
import { V2ExperienceTimeline } from "@/components/portfolio/v2/v2-experience-timeline";
import { V2Projects } from "@/components/portfolio/v2/v2-projects";
import { V2Articles } from "@/components/portfolio/v2/v2-articles";
import { V2Capabilities } from "@/components/portfolio/v2/v2-capabilities";
import { V2Contact } from "@/components/portfolio/v2/v2-contact";
import { getSharedMetadata } from "@/lib/portfolio/metadata";


export const metadata = getSharedMetadata(
  "Cosmic Gravity",
  "Orbit is the V2 view of Azad's work: Flutter, React, Node.js, FinTech, AI, and the product cleanup that keeps launches steady.",
  "/",
  true
);

export default function V2Page() {
  return (
    <>
      <V2Hero />
      <V2About />
      <V2ExperienceTimeline />
      <V2Projects />
      <V2Articles />
      <V2Capabilities />
      <V2Contact />

    </>
  );
}

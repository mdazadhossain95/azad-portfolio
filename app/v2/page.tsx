import { V2Hero } from "@/components/portfolio/v2/v2-hero";
import { V2CapabilityModules } from "@/components/portfolio/v2/v2-capability-modules";
import { V2ProductionSystems } from "@/components/portfolio/v2/v2-production-systems";
import { V2ArchitectureWorkflow } from "@/components/portfolio/v2/v2-architecture-workflow";
import { V2ExperienceTimeline } from "@/components/portfolio/v2/v2-experience-timeline";
import { V2TechnicalMatrix } from "@/components/portfolio/v2/v2-technical-matrix";
import { V2Contact } from "@/components/portfolio/v2/v2-contact";
import { VersionSwitcher } from "@/components/portfolio/shared/version-switcher";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "FinTech Systems Lab",
  "Production FinTech, payments, and systems engineering — banking apps, KYC, and secure API integrations shipped to real users.",
  "/v2",
  true
);

export default function V2Page() {
  return (
    <>
      <V2Hero />
      <V2CapabilityModules />
      <V2ProductionSystems />
      <V2ArchitectureWorkflow />
      <V2ExperienceTimeline />
      <V2TechnicalMatrix />
      <V2Contact />
      <VersionSwitcher current="v2" />
    </>
  );
}

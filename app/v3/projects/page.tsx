import { V3ProjectArchive } from "@/components/portfolio/v3/v3-project-archive";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "V3 Projects",
  "A light notebook archive of shipped projects and product notes.",
  "/v3/projects",
  true
);

export default function V3ProjectsPage() {
  return <V3ProjectArchive />;
}

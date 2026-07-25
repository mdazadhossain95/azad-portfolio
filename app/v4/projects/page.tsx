import Link from "next/link";
import { LiveProjects } from "@/components/live-projects";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "All Projects",
  "Every production mobile application, FinTech platform, and AI integration Azad has shipped, grouped by domain.",
  "/v4/projects"
);

export default function V4ProjectsPage() {
  return (
    <div className="container-main pt-8 pb-24">
      <Link
        href="/v4"
        className="group mb-12 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Back to Home
      </Link>
      <h1 className="sr-only">All Projects</h1>

      <LiveProjects />
    </div>
  );
}

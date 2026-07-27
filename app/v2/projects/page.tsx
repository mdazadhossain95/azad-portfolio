import Link from "next/link";
import { projects } from "@/content/projects";
import { V2ProjectArchive } from "@/components/portfolio/v2/v2-project-archive";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "All Projects",
  "Orbit's project archive, grouped by domain, with the mobile, web, FinTech, and AI builds that shipped in public.",
  "/v2/projects",
  true
);

export default function V2ProjectsPage() {
  return (
    <div className="v2-container relative py-12 md:py-16">
      <Link
        href="/v2#projects"
        className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
        style={{ borderColor: "var(--v2-panel-edge)" }}
      >
        <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        Back to project missions
      </Link>

      <header className="mt-12 max-w-2xl">
        <p className="v2-label text-[var(--v2-earth-atmosphere)]">All projects</p>
        <h1 className="v2-h2 mt-4 font-semibold text-[var(--text)]">
          Every project, in full
        </h1>
        <p className="v2-body-l mt-5 max-w-[640px] text-[var(--muted)]">
          {projects.length} projects grouped by domain. Each one solved a real
          problem for real users, built from verified project data and actual
          product screenshots.
        </p>
      </header>

      <div className="mt-16">
        <V2ProjectArchive />
      </div>
    </div>
  );
}

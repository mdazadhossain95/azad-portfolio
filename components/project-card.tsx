import Image from "next/image";
import Link from "next/link";
import { getPrimaryProjectLink } from "@/lib/project-taxonomy";
import { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

const TOP_FEATURED_SLUGS = new Set(["codegopay-individual", "codegopay-business"]);
const KEY_RESULTS: Record<string, string> = {
  "codegopay-individual": "Handled 10K+ users with secure real-time transactions.",
  "codegopay-business": "Integrated 5+ core banking and payment operations.",
  "fibervpn": "Delivered low-latency VPN experience across global regions.",
  "nxfund": "Built multi-campaign fundraising flows for faster donations.",
  "nxmart": "Reduced checkout friction with streamlined commerce flow.",
  "nexopay": "Unified wallet, transfer, and crypto actions in one app.",
  "studygenie-ai": "Improved study speed with AI chat and quiz automation.",
  "runava": "Enabled live activity tracking and event booking flow.",
  "nexgro": "Structured investment discovery with clear return insights.",
  "ummah-charity": "Combined community feed with donation-ready user journeys.",
  "kream-suger": "Improved real-time chat reliability across active rooms.",
  "nexflix": "Optimized media browsing and playback handoff flows.",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryLink = getPrimaryProjectLink(project);
  const integrations = project.techStack.length;
  const fallbackResult = `Integrated ${integrations}+ production services.`;
  const keyResult = KEY_RESULTS[project.slug] ?? fallbackResult;
  const isTopFeatured = TOP_FEATURED_SLUGS.has(project.slug);

  return (
    <article className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(180deg, transparent 45%, color-mix(in srgb, var(--text) 20%, transparent) 100%)" }}
        />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-[color:var(--text)/0.9] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--bg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View details
        </span>
        {isTopFeatured ? (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--text)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--bg)]">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--text)]">{project.title}</h3>
          {project.role ? <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{project.role}</p> : null}
          <p className="text-sm leading-6 text-[var(--muted)]">{project.description}</p>
          <p className="rounded-xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-xs leading-6 text-[var(--text)]">
            <span className="font-semibold">Key Result:</span> {keyResult}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((item) => (
              <span key={item} className="soft-chip text-xs text-[var(--muted)]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/projects/${project.slug}`} className="btn-primary px-4 py-2 text-sm font-medium">
            View Details
          </Link>
          {primaryLink ? (
            <a href={primaryLink} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-sm font-medium">
              Play Store / External Link
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

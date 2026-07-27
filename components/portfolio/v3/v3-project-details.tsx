"use client";

import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/types";

export function V3ProjectDetails({ project }: { project: CaseStudy }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-18">
      <div className="mb-8">
        <Link href="/v3/projects" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)]">
          ← Back to notebook index
        </Link>
      </div>

      <article className="surface-card v3-anim-enter p-6 md:p-10 shadow-[0_12px_28px_rgba(53,50,44,0.12)]">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-handwriting text-3xl" style={{ color: "var(--v3-gold)" }}>
            {project.title}
          </p>
          <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] border border-[var(--line)] px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="mt-5 text-base leading-8 text-[var(--muted)] max-w-3xl">
          {project.summary}
        </p>
        
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-t border-[var(--line)] pt-8">
          <div>
            <p className="font-handwriting text-xl" style={{ color: "var(--v3-gold)" }}>Role</p>
            <p className="text-sm text-[var(--text)] mt-1">{project.role}</p>
          </div>
          {project.timeframe && (
            <div>
              <p className="font-handwriting text-xl" style={{ color: "var(--v3-gold)" }}>Timeframe</p>
              <p className="text-sm text-[var(--text)] mt-1">{project.timeframe}</p>
            </div>
          )}
          {project.company && (
            <div>
              <p className="font-handwriting text-xl" style={{ color: "var(--v3-gold)" }}>Client</p>
              <p className="text-sm text-[var(--text)] mt-1">{project.company}</p>
            </div>
          )}
          <div>
            <p className="font-handwriting text-xl" style={{ color: "var(--v3-gold)" }}>Platforms</p>
            <p className="text-sm text-[var(--text)] mt-1">{project.platforms.join(" · ")}</p>
          </div>
        </div>

        <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--bg)]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 100vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-12 space-y-12">
          {project.productContext && (
            <div>
              <h2 className="font-handwriting text-2xl" style={{ color: "var(--v3-gold)" }}>Context</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.productContext}</p>
            </div>
          )}
          
          {project.technicalDecisions.length > 0 && (
            <div>
              <h2 className="font-handwriting text-2xl mb-6" style={{ color: "var(--v3-gold)" }}>Key decisions</h2>
              <div className="grid gap-5 md:grid-cols-2">
                {project.technicalDecisions.map((decision) => (
                  <div key={decision.title} className="rounded-sm border border-[var(--line)] p-5">
                    <p className="font-semibold text-[var(--text)]">{decision.title}</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{decision.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.results.length > 0 && (
            <div>
              <h2 className="font-handwriting text-2xl mb-6" style={{ color: "var(--v3-gold)" }}>Results</h2>
              <ul className="space-y-3">
                {project.results.map((res) => (
                  <li key={res.statement} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
                    <span style={{ color: "var(--v3-gold)" }}>—</span>
                    <span>{res.statement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="border-t border-[var(--line)] pt-8">
             <h2 className="font-handwriting text-2xl mb-4" style={{ color: "var(--v3-gold)" }}>Tech stack</h2>
             <div className="flex flex-wrap gap-2">
               {project.technologies.map((tech) => (
                 <span key={tech} className="soft-chip text-[var(--text)]">
                   {tech}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </article>
    </section>
  );
}

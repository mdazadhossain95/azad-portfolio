import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";

export const metadata: Metadata = {
  title: "Resume | Azad Portfolio",
  description: "Senior Flutter Developer resume detailing experience in FinTech, AI, and production mobile applications.",
};

export default function ResumePage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-xl font-medium text-[var(--accent)]">
            {profile.title}
          </p>
          <p className="mt-4 text-base text-[var(--text-secondary)]">
            {profile.location} · {profile.email}
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="/azad-hossain-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      <div className="space-y-16">
        {/* Experience */}
        <section>
          <h2 className="mb-6 border-b border-[var(--line)] pb-2 text-2xl font-semibold text-[var(--text)]">
            Experience
          </h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.id}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h3 className="text-xl font-medium text-[var(--text)]">{job.role}</h3>
                  <span className="text-sm font-medium text-[var(--accent)]">{job.period}</span>
                </div>
                <div className="mt-1 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <span className="text-lg text-[var(--text-secondary)]">{job.company}</span>
                  <span className="text-sm text-[var(--text-muted)]">{job.location}</span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--text-muted)] marker:text-[var(--accent)]">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="pl-2 leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="mb-6 border-b border-[var(--line)] pb-2 text-2xl font-semibold text-[var(--text)]">
            Skills & Technologies
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((category) => (
              <div key={category.category}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="soft-chip text-sm text-[var(--text-secondary)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="mx-auto w-full max-w-4xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--text)] md:text-3xl flex items-center gap-3">
          <span className="mono text-lg font-normal text-[var(--accent)]">02.</span>
          Where I’ve Worked
        </h2>
        <div className="h-px flex-1 bg-[var(--line)] max-w-[300px]" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10 min-h-[350px]">
        {/* Tabs Navigation */}
        <div className="relative flex overflow-x-auto md:flex-col md:overflow-visible border-b border-[var(--line)] md:border-b-0 md:border-l md:w-40 shrink-0 hide-scrollbar">
          {experience.map((exp, idx) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(idx)}
              className={`flex h-12 w-[140px] md:w-full items-center justify-center md:justify-start px-4 md:px-5 text-sm font-mono whitespace-nowrap transition-all duration-300 shrink-0 ${
                activeTab === idx
                  ? "text-[var(--accent)] bg-[var(--accent)]/5"
                  : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hover)]"
              }`}
            >
              {exp.company}
            </button>
          ))}

          {/* Animated Tab Indicator (Desktop) */}
          <div
            className="hidden md:block absolute left-[-1px] top-0 h-12 w-0.5 bg-[var(--accent)] transition-transform duration-300 ease-out"
            style={{ transform: `translateY(${activeTab * 48}px)` }}
          />
          {/* Animated Tab Indicator (Mobile) */}
          <div
            className="md:hidden absolute bottom-[-1px] left-0 h-0.5 w-[140px] bg-[var(--accent)] transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${activeTab * 140}px)` }}
          />
        </div>

        {/* Tab Content */}
        <div className="relative w-full">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className={`transition-all duration-500 ease-out ${
                activeTab === idx
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <h3 className="text-[22px] font-semibold text-[var(--text)] leading-tight">
                {exp.role}{" "}
                <span className="text-[var(--accent)]">
                  @{" "}
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline transition-all relative inline-block group"
                    >
                      {exp.company}
                      <svg className="w-4 h-4 opacity-0 absolute -right-5 top-1 group-hover:opacity-100 group-hover:-right-6 transition-all text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    exp.company
                  )}
                </span>
              </h3>
              <p className="mt-2 text-sm font-mono text-[var(--text-muted)] mb-6">
                {exp.period}
              </p>
              
              <ul className="space-y-4">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex gap-4 text-[var(--text-secondary)] leading-relaxed text-[15px]">
                    <span className="mt-1.5 shrink-0 text-[var(--accent)] text-xs">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {exp.tech?.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-mono text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/20 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Shipped Projects */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-8 border-t border-[var(--line)] pt-6">
                  <p className="text-sm font-medium text-[var(--text)] mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Key Products Shipped
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {exp.projects.map((project, pIdx) => (
                      <a 
                        key={pIdx}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-transparent px-3 py-1.5 text-xs text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {project.name}
                        <svg className="w-3 h-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

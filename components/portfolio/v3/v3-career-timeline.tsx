"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/section-title";
import { experience } from "@/content/experience";

export function V3CareerTimeline() {
  const [activeId, setActiveId] = useState(experience[0].id);

  const activeExp = experience.find((exp) => exp.id === activeId) || experience[0];

  return (
    <section id="timeline" className="mx-auto w-full max-w-6xl space-y-12 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Career Timeline"
        title="Dated entries"
        description="Flip through the notes. Each entry is a real role, not a highlight reel."
      />
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-8">
        
        {/* Index Tabs (Sticky Notes) */}
        <div className="flex flex-wrap lg:flex-col gap-6 pb-6 lg:pb-0 lg:w-[260px] shrink-0 pt-4">
          {experience.map((exp, idx) => {
            const isActive = exp.id === activeId;
            // Alternate slight rotations for the sticky notes
            const rotation = idx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[1deg]";
            
            return (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`relative flex flex-col items-start p-5 text-left transition-all whitespace-nowrap min-w-[220px] lg:min-w-0 rounded-sm border ${rotation} ${
                  isActive 
                    ? "border-[#2a2a2a] bg-[#fcf8e3] shadow-[4px_6px_0_rgba(44,42,40,0.15)] z-10 scale-105" 
                    : "border-[var(--line)] bg-[var(--surface)] hover:bg-[#fdfaf0] hover:scale-105 shadow-sm opacity-80 hover:opacity-100"
                }`}
              >
                {/* Board Pin (Only on active or hovering, or all of them. Let's put a pin on all of them) */}
                <div aria-hidden="true" className="absolute -top-3 left-1/2 z-20 h-5 w-5 -translate-x-1/2">
                  <div className="absolute left-[6px] top-[10px] h-2 w-2 rounded-full bg-black/30 blur-[1px]" />
                  <div className={`absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full border shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.2)] ${
                    isActive ? "bg-gradient-to-br from-[#ff6b6b] to-[#c0392b] border-[#a12d22]" : "bg-gradient-to-br from-gray-300 to-gray-500 border-gray-600"
                  }`}>
                    <div className="absolute top-[2px] left-[3px] h-1 w-1 rounded-full bg-white/70 blur-[0.5px]" />
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className={`font-handwriting text-xl font-bold ${isActive ? "text-[#2a2a2a]" : "text-[var(--muted)]"}`}>
                    {exp.company}
                  </span>
                </div>
                <span className={`mt-1 text-xs ${isActive ? "text-[#2a2a2a]/80" : "text-[var(--muted)]"}`}>
                  {exp.period}
                </span>
              </button>
            );
          })}
        </div>

        {/* Spec Sheet Container */}
        <div className="surface-card flex-1 p-6 md:p-8 lg:p-10 min-h-[550px] mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-dashed border-[var(--line)] pb-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full border border-[var(--v3-gold)] bg-[var(--v3-gold)]" />
              <span className="font-handwriting text-lg text-[var(--v3-gold)] font-bold">
                spec-sheet / {activeExp.company.toLowerCase().replace(/\s+/g, '-')}
              </span>
            </div>
            <span className="font-handwriting text-sm text-[var(--muted)]">
              rev. {new Date().getFullYear()}
            </span>
          </div>

          {/* This key trick re-mounts the div, triggering the enter animation on tab switch! */}
          <div key={activeId} className="space-y-6 v3-anim-enter">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3">
              <h3 className="text-3xl text-[var(--text)] font-semibold leading-tight">
                {activeExp.role}
              </h3>
              <p className="font-handwriting text-xl text-[var(--v3-gold)] whitespace-nowrap">
                {activeExp.period}
              </p>
            </div>
            
            <p className="font-handwriting text-xl text-[var(--text)] opacity-90 mt-[-0.5rem]">
              @ {activeExp.company}
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">
                Scope of work
              </p>
              <ul className="space-y-3">
                {activeExp.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-[var(--line)] bg-[var(--surface)]">
                      {/* Checkmark SVG */}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--v3-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm leading-6 text-[var(--text)]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">
                Materials
              </p>
              <div className="flex flex-wrap gap-2">
                {activeExp.tech.map((item) => (
                  <span key={item} className="soft-chip text-[var(--text)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {activeExp.projects?.length ? (
              <div className="space-y-3 pt-2 pb-1">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">
                  Attachments
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeExp.projects.map((project) => (
                    <a
                      key={project.url}
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[11px] text-[var(--muted)] transition hover:text-[var(--text)] hover:border-[var(--v3-gold)]"
                    >
                      {project.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

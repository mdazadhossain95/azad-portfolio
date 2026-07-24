"use client";

import { useState } from "react";
import { experience } from "@/content/experience";

export function V1Experience() {
  const [activeTabId, setActiveTabId] = useState(experience[0].id);

  const activeExp = experience.find((e) => e.id === activeTabId) || experience[0];

  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="flex items-center mb-10">
        <h2 className="flex-none text-2xl font-bold text-[var(--text)]">
          <span className="font-mono text-xl font-normal text-[var(--accent)] mr-2">02.</span>
          Where I&apos;ve Worked
        </h2>
        <div className="ml-6 h-[1px] flex-grow bg-[var(--border-strong)] max-w-[300px]"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tabs */}
        <div className="flex overflow-x-auto md:flex-col md:overflow-visible border-b md:border-b-0 md:border-l border-[var(--border-strong)] relative no-scrollbar">
          {experience.map((job) => (
            <button
              key={job.id}
              onClick={() => setActiveTabId(job.id)}
              className={`px-5 py-3 text-sm font-mono whitespace-nowrap text-left transition-colors hover:bg-[var(--surface-hover)] focus:bg-[var(--surface-hover)] outline-none ${
                activeTabId === job.id
                  ? "text-[var(--accent)] bg-[var(--surface-raised)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text)]"
              }`}
              role="tab"
              aria-selected={activeTabId === job.id}
              aria-controls={`panel-${job.id}`}
              id={`tab-${job.id}`}
            >
              {job.company}
            </button>
          ))}
          {/* Active indicator (simple implementation) */}
          <div 
            className="absolute bottom-0 md:bottom-auto md:left-0 h-[2px] md:h-[48px] w-full md:w-[2px] bg-[var(--accent)] transition-all duration-300 ease-in-out"
            style={{
              transform: `translateY(${experience.findIndex(e => e.id === activeTabId) * 48}px)`, // Assuming 48px height per tab on desktop
            }}
          />
        </div>

        {/* Panel */}
        <div 
          className="md:pl-6 pt-2 w-full min-h-[350px]"
          id={`panel-${activeExp.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeExp.id}`}
        >
          <h3 className="text-xl font-medium text-[var(--text)]">
            {activeExp.role} <span className="text-[var(--accent)]">@ <a href={activeExp.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{activeExp.company}</a></span>
          </h3>
          <p className="font-mono text-sm text-[var(--text-secondary)] mt-1 mb-6">
            {activeExp.period}
          </p>
          
          <ul className="space-y-4">
            {activeExp.bullets.map((bullet, i) => (
              <li key={i} className="flex relative pl-6 text-[var(--text-muted)] text-[15px] leading-relaxed">
                <span className="absolute left-0 top-1 text-[var(--accent)] text-xs">▹</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

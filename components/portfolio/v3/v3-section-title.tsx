import React from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
  level?: "h1" | "h2";
};

export function SectionTitle({ eyebrow, title, description, action, level = "h2" }: SectionTitleProps) {
  const Heading = level;

  return (
    <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 v3-anim-enter mb-4">
      {/* Red vertical margin line for the notebook aesthetic */}
      <div className="absolute -left-5 top-0 bottom-0 w-px bg-[var(--v3-burgundy)]/20 hidden md:block"></div>
      
      <div className="space-y-4 md:space-y-6">
        <p className="font-handwriting text-3xl text-[var(--v3-burgundy)] -rotate-2 origin-left">
          {eyebrow}
        </p>
        <Heading className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
          <span className="relative inline-block">
            <span className="relative z-10">{title}</span>
            {/* Highlighter slash effect */}
            <span className="absolute bottom-2 left-[-2%] z-0 h-4 w-[104%] -rotate-1 bg-[var(--v3-gold)]/40 mix-blend-multiply"></span>
          </span>
        </Heading>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)] font-medium">
          {description}
        </p>
      </div>
      {action && (
        <div className="shrink-0 pb-2">
          {action}
        </div>
      )}
    </div>
  );
}

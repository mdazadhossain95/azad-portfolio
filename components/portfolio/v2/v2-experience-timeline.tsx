import { experience } from "@/content/experience";
import { V2Reveal } from "./v2-reveal";
import { V2Trajectory } from "./v2-trajectory";
import { V2SectionField } from "./v2-cosmic";
import { V2CelestialBand } from "./v2-celestial-band";

export function V2ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="v2-section relative isolate overflow-hidden lg:min-h-[1000px]"
    >
      <V2SectionField tone="rust" />

      {/* Mars Ø460 crossing the right edge - the destination the route climbs
          toward. The warm colour stays on the planet and its haze; the section
          itself keeps the same navy as the rest of the journey. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* The 3D Mars environment is rendered globally by V2PersistentUniverse */}
      </div>

      <div className="v2-container relative z-10">
        <V2Reveal>
          <p className="v2-label text-[var(--v2-earth-atmosphere)]">02 / Experience</p>
          <h2 className="v2-h2 mt-3 max-w-[660px] font-semibold text-[var(--text)]">
            The path so far
          </h2>
          <p className="v2-body-l mt-[18px] max-w-[620px] text-[var(--muted)]">
            Freelance delivery, live banking and payment apps, AI automation, and
            the earlier Flutter and Django work that shaped the stack.
          </p>
        </V2Reveal>

        {/* Desktop: the route. Everything below `lg` reads the plain list. */}
        <V2Reveal className="mt-14 hidden lg:block">
          <V2Trajectory />
        </V2Reveal>

        {/* Chronological fallback - always in the DOM below `lg`, and the only
            experience markup that exists when JavaScript never runs. */}
        <ol className="relative mt-12 lg:hidden">
          <div
            aria-hidden="true"
            className="absolute left-[9px] top-4 h-[calc(100%-4rem)] w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--v2-earth-atmosphere) 0%, var(--v2-orbit-line-strong) 35%, var(--v2-orbit-line) 80%, transparent 100%)",
            }}
          />

          {experience.map((exp, index) => (
            <V2Reveal
              as="li"
              key={exp.id}
              className="relative flex gap-6 pb-10 last:pb-0"
              delay={index * 60}
            >
              <span aria-hidden="true" className="relative z-10 mt-[26px] shrink-0">
                <span
                  className="relative block h-[19px] w-[19px] rounded-full border-2"
                  style={{
                    borderColor: "var(--v2-earth-atmosphere)",
                    backgroundColor: "var(--bg-deep)",
                  }}
                />
              </span>

              <div className="v2-panel v2-panel-hover w-full p-6 md:p-7">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noreferrer"
                    className="v2-h4 font-semibold text-[var(--text)] transition hover:text-[var(--v2-earth-atmosphere)]"
                  >
                    {exp.company}
                  </a>
                  <span className="v2-micro text-[var(--muted)]">{exp.period}</span>
                </div>

                <p className="v2-body mt-2 text-[var(--v2-earth-atmosphere)]">
                  {exp.role}
                  <span className="text-[var(--muted)]"> · {exp.location}</span>
                </p>

                <ul className="mt-5 space-y-2.5">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="v2-body flex gap-3 text-[var(--muted)]">
                      <span
                        aria-hidden="true"
                        className="mt-[11px] h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--v2-system)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {exp.tech?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="soft-chip text-[var(--muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </V2Reveal>
          ))}
        </ol>
      </div>
      <V2CelestialBand />
    </section>
  );
}

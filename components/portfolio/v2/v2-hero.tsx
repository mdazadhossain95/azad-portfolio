import { profile } from "@/content/profile";
import { V2EarthInteraction } from "./v2-earth-interaction";

export function V2Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100dvh] overflow-hidden pb-28 pt-14 md:pb-32 md:pt-20 lg:min-h-[900px] lg:pb-36"
    >
      {/* ---------- celestial scene ----------
          Earth Ø880 centred near (1160, 400) at the 1440 reference: it crosses
          the right edge, so it reads as a planet being orbited rather than as
          an illustration placed on the page. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* The 3D celestial scene is rendered globally by V2PersistentUniverse */}
      </div>

      <V2EarthInteraction />

      {/* ---------- content ---------- */}
      <div className="v2-container pointer-events-none relative z-20">
        <div className="grid lg:grid-cols-12">
          <div className="pointer-events-auto lg:col-span-6 lg:pt-[76px]">
            <p className="v2-label flex items-center gap-2.5 text-[var(--v2-earth-atmosphere)]">
              <span
                aria-hidden="true"
                className="v2-anim-twinkle h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--v2-earth-atmosphere)" }}
              />
              Orbit base · {profile.location}
            </p>

            <h1 className="v2-display mt-7 max-w-[620px] font-semibold text-[var(--text)]">
              Full-stack work,{" "}
              <span className="text-[var(--v2-earth-atmosphere)]">kept steady</span> when it
              reaches production.
            </h1>

            <p className="v2-body-l mt-7 max-w-[600px] text-[var(--muted)]">
              {profile.name} builds Flutter, React, and Node.js products for SaaS,
              FinTech, and AI teams. The Orbit version keeps the story simple,
              real app work, clean handoffs, and fewer surprises after launch.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={profile.links.upworkConsultation}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex min-w-[168px] items-center px-8 font-medium"
              >
                Start a build
              </a>
              <a
                href="#projects"
                className="btn-secondary inline-flex min-w-[168px] items-center px-8 font-medium"
              >
                See the work
              </a>
            </div>

            {/* status panel - availability and approved proof, attached to the scene */}
            <div className="v2-panel mt-20 max-w-[620px] p-7 sm:mt-14">
              <div
                className="flex flex-wrap items-center justify-between gap-3 border-b pb-5"
                style={{ borderColor: "var(--v2-panel-edge)" }}
              >
                <p className="v2-label text-[var(--v2-star-dim)]">Quick facts</p>
                <span className="v2-body-s flex items-center gap-2 text-[var(--v2-verified)]">
                  <span
                    aria-hidden="true"
                    className="v2-anim-twinkle h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--v2-verified)" }}
                  />
                  {profile.availability ? "Open to new work" : "Fully booked"}
                </span>
              </div>

              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Full-Stack Experience", value: "5+ Years" },
                  { label: "Job Success Score", value: profile.proof.upworkJss },
                  { label: "Client Experience", value: "Global" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--v2-panel-edge)] bg-[var(--surface-raised)]/80 px-4 py-4"
                  >
                    <dt className="v2-micro text-[var(--muted)]">{stat.label}</dt>
                    <dd className="mt-2 text-[28px] font-semibold leading-none text-[var(--text)]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { profile } from "@/content/profile";
import { services } from "@/content/services";
import { V2Reveal } from "./v2-reveal";
import { V2SectionField } from "./v2-cosmic";
import { V2CelestialBand } from "./v2-celestial-band";

export function V2About() {
  return (
    <section
      id="about"
      className="v2-section relative isolate overflow-hidden lg:min-h-[820px]"
    >
      <V2SectionField tone="blue" />

      {/* The Moon is the frame, not a thumbnail: Ø440 cropped past the left
          edge, with the arc that brought the visitor here passing behind it. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* The 3D Moon is rendered globally by V2PersistentUniverse */}
      </div>

      <div className="v2-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-x-8">
          {/* 3D scene handles the moon presentation */}

          {/* copy - cols 6–12, clear of the cropped Moon by 80px */}
          <V2Reveal className="lg:col-span-7 lg:col-start-6" delay={80}>
            <p className="v2-label text-[var(--v2-earth-atmosphere)]">01 / About</p>
            <h2 className="v2-h2 mt-4 max-w-[620px] font-semibold text-[var(--text)]">
              What the Orbit version is trying to show
            </h2>

            <div className="mt-6 max-w-[640px] space-y-5">
              <p className="v2-body-l text-[var(--muted)]">
                I build production software that has to behave after launch. Most of
                the work lives in Flutter, React, and Node.js, and the product usually
                needs the same thing in every phase: a clear structure, a clean handoff,
                and a release path that does not fall apart later.
              </p>
              <p className="v2-body-l text-[var(--muted)]">
                The Orbit view keeps the story tied to what I actually do, mobile
                apps, web surfaces, backend APIs, payment flows, and AI features when
                they make the product better.
              </p>
            </div>

            <p className="v2-body mt-8 max-w-[640px] text-[var(--muted)]">
              The work usually lands in six lanes: {services.map((service) => service.title).join(", ")}.
            </p>

            <ul className="mt-10 grid max-w-[640px] gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {profile.coreStack.map((item) => (
                <li key={item} className="v2-body flex items-center gap-3 text-[var(--muted)]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--v2-earth-atmosphere)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </V2Reveal>
        </div>
      </div>
      <V2CelestialBand />
    </section>
  );
}

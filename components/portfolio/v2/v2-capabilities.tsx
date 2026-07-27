import { skills } from "@/content/skills";
import { services } from "@/content/services";
import { V2Reveal } from "./v2-reveal";
import { V2CelestialBand } from "./v2-celestial-band";

export function V2Capabilities() {
  return (
    <section id="capabilities" className="relative isolate overflow-hidden py-24 md:py-40">
      <div className="v2-container relative z-10">
        <V2Reveal className="lg:ml-[52%]">
          <p className="v2-label text-[var(--v2-earth-atmosphere)]">05 / Capabilities</p>
          <h2 className="v2-h2 mt-4 max-w-[640px] font-semibold text-[var(--text)]">
            What this stack is actually used for
          </h2>
          <p className="v2-body-l mt-5 max-w-[640px] text-[var(--muted)]">
            Mobile apps, web frontends, backend APIs, payment flows, AI features,
            and the release work that keeps the whole thing shippable.
          </p>
        </V2Reveal>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:ml-[52%]">
          {skills.map((group, index) => {
            const isAi = group.category === "AI & Integrations";
            const accent = isAi ? "var(--v2-ai)" : "var(--v2-earth-atmosphere)";

            return (
              <V2Reveal
                key={group.category}
                delay={(index % 3) * 60}
                className="v2-panel v2-panel-hover relative flex flex-col overflow-hidden p-6"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="v2-anim-twinkle h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: accent, animationDelay: `${index * 0.6}s` }}
                    />
                    <p className="v2-label" style={{ color: accent }}>
                      Cluster {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <h3 className="v2-h4 mt-3 font-semibold text-[var(--text)]">{group.category}</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="soft-chip text-[var(--muted)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </V2Reveal>
            );
          })}
        </div>

        <div className="mt-16 lg:ml-[52%]">
          <V2Reveal>
            <p className="v2-label text-[var(--v2-earth-atmosphere)]">Orbit tracks</p>
            <h3 className="v2-h3 mt-3 font-semibold text-[var(--text)]">
              The work people usually ask for
            </h3>
            <p className="v2-body mt-4 max-w-[640px] text-[var(--muted)]">
              These are the six lanes that show up again and again. The language is
              plain on purpose, because the work itself is already specific enough.
            </p>
          </V2Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => {
              const trackCopy: Record<string, string> = {
                "production-flutter":
                  "Flutter apps for Android and iOS that need a clean structure, API work, and a release path that behaves.",
                "full-stack-web":
                  "React frontends with the Node.js and database work behind them, kept simple enough to maintain.",
                "existing-app-improvement":
                  "Bug fixes, refactors, and feature catch-up on code that is already in the wild.",
                "fintech-payments":
                  "Wallets, onboarding, KYC, subscriptions, and payment flows that need to stay clear under pressure.",
                "ai-features":
                  "Assistants, search, and generation features that help the product instead of getting in its way.",
                "saas-healthtech":
                  "Subscription products and sensitive-data apps that need to stay fast, readable, and secure.",
              };

              return (
                <V2Reveal
                  key={service.id}
                  delay={index * 50}
                  className="v2-panel v2-panel-hover flex flex-col p-5"
                >
                  <p className="v2-label text-[var(--v2-star-dim)]">{String(index + 1).padStart(2, "0")}</p>
                  <h4 className="v2-h4 mt-3 font-semibold text-[var(--text)]">{service.title}</h4>
                  <p className="v2-body-s mt-3 text-[var(--muted)]">
                    {trackCopy[service.id] ?? service.description}
                  </p>
                </V2Reveal>
              );
            })}
          </div>
        </div>
      </div>
      <V2CelestialBand />
    </section>
  );
}

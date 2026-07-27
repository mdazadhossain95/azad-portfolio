import {
  Smartphone,
  Monitor,
  Server,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { expertise } from "@/content/expertise";

const ICONS: Record<string, LucideIcon> = {
  mobile: Smartphone,
  web: Monitor,
  backend: Server,
  delivery: Rocket,
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-16 max-w-3xl">
        <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          04. Expertise
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl lg:text-5xl">
          How I Help Product Teams
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
          I work across mobile, web, and backend systems to turn product ideas into reliable, production-ready software. From application architecture and responsive interfaces to APIs, integrations, deployment, and long-term maintenance, I help teams move from concept to launch without losing technical quality.
        </p>
      </div>

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* Capabilities Matrix (Left Side - 7 cols) */}
        <div className="lg:col-span-7">
          <div className="grid gap-6 sm:grid-cols-2">
            {expertise.map((item) => {
              const Icon = ICONS[item.id];
              return (
                <div
                  key={item.id}
                  className="group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[11px] text-[var(--text-secondary)]">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded bg-[var(--bg-deep)] px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Timeline (Right Side - 5 cols) */}
        <div className="lg:col-span-5">
          <h3 className="mb-8 text-xl font-semibold text-[var(--text)]">Product Delivery Timeline</h3>
          <div className="relative space-y-10 before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--accent)] before:via-[var(--line)] before:to-transparent">
            
            {/* Step 01 */}
            <div className="group relative flex items-start gap-6">
              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg-deep)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                <span className="mono text-xs font-semibold">01</span>
              </div>
              <div className="pt-1">
                <h4 className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">Discover & Define</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">
                  Clarify the product goals, users, current system, priorities, risks, and delivery expectations.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="group relative flex items-start gap-6">
              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-deep)] text-[var(--text-muted)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                <span className="mono text-xs font-semibold">02</span>
              </div>
              <div className="pt-1">
                <h4 className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">Architect & Plan</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">
                  Select a practical architecture, define integrations and data flow, and break the work into clear delivery stages.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="group relative flex items-start gap-6">
              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-deep)] text-[var(--text-muted)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                <span className="mono text-xs font-semibold">03</span>
              </div>
              <div className="pt-1">
                <h4 className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">Build & Integrate</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">
                  Build in focused iterations, connect the required systems, and maintain clear progress throughout development.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="group relative flex items-start gap-6">
              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-deep)] text-[var(--text-muted)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                <span className="mono text-xs font-semibold">04</span>
              </div>
              <div className="pt-1">
                <h4 className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">Validate, Launch & Improve</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">
                  Validate the product, prepare production releases, support deployment, and continue improving the system after launch.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

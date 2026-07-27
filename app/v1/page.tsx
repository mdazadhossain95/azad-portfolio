import Image from "next/image";
import Link from "next/link";
import { LiveProjects } from "@/components/live-projects";
import { LiveReviews } from "@/components/live-reviews";
import { LiveArticles } from "@/components/live-articles";
import { SectionTitle } from "@/components/section-title";
import { VersionSwitcher } from "@/components/portfolio/shared/version-switcher";
import { getSharedMetadata } from "@/lib/portfolio/metadata";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";
import { expertise } from "@/content/expertise";

export const metadata = getSharedMetadata(
  "Original Portfolio",
  "The original portfolio layout from the main branch.",
  "/v1",
  true
);

export default function V1Page() {
  return (
    <>
      <section
        className="relative mx-auto w-full max-w-6xl overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pb-24 md:pt-28"
        style={{
          background: "linear-gradient(180deg, color-mix(in srgb, var(--bg) 98%, white) 0%, color-mix(in srgb, var(--bg) 95%, black) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-4 h-[26rem] w-[26rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 68%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, color-mix(in srgb, var(--line) 55%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div className="space-y-8">

            {/* Availability badge */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
                Open to new projects
              </p>
            </div>

            {/* Name + title */}
            <div className="space-y-3">
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--text)] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
                {profile.name.replace(" Tutul", "")}<br />Tutul
              </h1>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                {profile.positioning}
              </p>
              <p className="mt-1 text-sm font-medium text-[color:color-mix(in_srgb,var(--text)_84%,var(--muted)_16%)]">
                {profile.title}
              </p>
            </div>

            {/* Value proposition */}
            <p className="max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg md:leading-relaxed">
              {profile.meta.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={profile.links.upworkConsultation}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-6 py-3 text-sm font-medium"
              >
                Hire me
              </a>
              <Link
                href="/v1/projects"
                className="btn-secondary px-6 py-3 text-sm font-medium"
              >
                See work
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">FinTech • AI • SaaS</span>
              <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">{profile.proof.experienceYears} Years</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{profile.proof.upworkJss} Upwork success</span>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 gap-6 border-t pt-7 sm:grid-cols-4"
              style={{ borderColor: "color-mix(in srgb, var(--line) 80%, var(--text) 20%)" }}
            >
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">{profile.proof.experienceYears}</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">Years of Flutter</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">{profile.proof.appsDelivered}</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">Apps delivered</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">{profile.proof.upworkJss}</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">Upwork job success</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">{profile.proof.happyClients}</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">Happy clients</p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Fast product launches",
                  description: "Release mobile MVPs with clear scope, polished UX, and reliable production delivery.",
                },
                {
                  title: "FinTech focus",
                  description: "Wallets, transfers, payments, and regulatory-ready flows for modern finance apps.",
                },
                {
                  title: "AI integration",
                  description: "ChatGPT, recommendation, and automation features that make apps smarter.",
                },
              ].map((item) => (
                <div key={item.title} className="surface-card rounded-3xl border p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
          <div className="relative mx-auto lg:mx-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[2rem] blur-2xl"
              style={{
                background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 72%)",
              }}
            />
            <div
              className="relative h-72 w-56 overflow-hidden rounded-3xl border bg-[var(--card)] shadow-2xl md:h-80 md:w-64"
              style={{ borderColor: "color-mix(in srgb, var(--line) 78%, var(--accent) 22%)" }}
            >
              <Image
                src="/profile-photo.png"
                alt="Md Azad Hossain Tutul"
                fill
                sizes="(min-width: 1024px) 256px, 224px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 border-t border-[var(--line)] px-5 py-24 md:px-8 md:py-28">
        <SectionTitle
          eyebrow="Featured Work"
          title="Top projects with real product impact"
          description="Most conversion-ready case studies first: released products, production integrations, and measurable delivery scope."
          action={
            <Link href="/v1/projects" className="btn-secondary px-5 py-2.5 text-xs font-medium">
              View All Projects ↗
            </Link>
          }
        />
        <LiveProjects featuredOnly />
      </section>

      <section
        className="mx-auto w-full max-w-6xl space-y-8 rounded-2xl border px-5 py-24 md:px-8 md:py-28"
        style={{
          borderColor: "color-mix(in srgb, var(--line) 90%, var(--accent) 10%)",
          backgroundColor: "color-mix(in srgb, var(--card) 70%, var(--bg))",
        }}
      >
        <SectionTitle
          eyebrow="Skills"
          title="Core delivery stack"
          description="Important stack first: Flutter engineering, backend integration, payments, and release pipeline."
        />
        <div className="space-y-4">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-wrap items-start gap-2">
              <span className="min-w-[9rem] shrink-0 pt-1 text-xs text-[var(--muted)] md:min-w-40">{group.category}</span>
              {group.items.map((s) => (
                <span key={s} className="soft-chip text-xs text-[var(--text)]">
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-24 md:px-8 md:py-28">
        <SectionTitle
          eyebrow="Expertise"
          title="How I help product teams"
          description="Four areas that cover a build end to end, from interface to production release."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {expertise.map((item) => (
            <div key={item.id} className="surface-card rounded-3xl border p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-24 md:px-8 md:py-28">
        <SectionTitle
          eyebrow="Process"
          title="How project moves from idea to launch"
          description="Clear delivery framework to reduce risk and ship faster with predictable milestones."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="surface-card p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">01 · Idea</p>
            <p className="mt-2 text-sm font-medium text-[var(--text)]">Product scope and technical planning</p>
            <p className="mt-2 text-xs leading-6 text-[var(--muted)]">Define user flows, feature priorities, and architecture before coding starts.</p>
          </div>

          <div className="surface-card p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">02 · Design</p>
            <p className="mt-2 text-sm font-medium text-[var(--text)]">UX-first interface and user flow validation</p>
            <p className="mt-2 text-xs leading-6 text-[var(--muted)]">Shape clear wireframes and interaction patterns before feature implementation.</p>
          </div>

          <div className="surface-card p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">03 · Development</p>
            <p className="mt-2 text-sm font-medium text-[var(--text)]">Scalable Flutter build with integrations</p>
            <p className="mt-2 text-xs leading-6 text-[var(--muted)]">Implement clean codebase, APIs, payments, and testing checkpoints sprint by sprint.</p>
          </div>

          <div className="surface-card p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">04 · Launch</p>
            <p className="mt-2 text-sm font-medium text-[var(--text)]">Store release and growth iteration</p>
            <p className="mt-2 text-xs leading-6 text-[var(--muted)]">Publish on Play Store/App Store, monitor quality, and optimize from live user feedback.</p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-6xl space-y-8 rounded-2xl border px-5 py-24 md:px-8 md:py-28"
        style={{
          borderColor: "color-mix(in srgb, var(--line) 92%, var(--accent) 8%)",
          backgroundColor: "color-mix(in srgb, var(--card) 72%, var(--bg))",
        }}
      >
        <SectionTitle
          eyebrow="Experience"
          title="Experience delivering production mobile products"
          description="Achievement-focused timeline across fintech, freelance delivery, and engineering leadership."
        />
        <div className="relative space-y-0">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-[var(--line)] md:left-[11px]" />
          {experience.map((exp) => (
            <div key={exp.id} className="relative flex gap-6 pb-10">
              {/* dot */}
              <div className="relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a href={exp.url || "#"} target="_blank" rel="noreferrer" className="font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                    {exp.company}
                  </a>
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-xs text-[var(--muted)]">{exp.period}</span>
                </div>
                <p className="text-sm text-[var(--muted)]">{exp.role} · {exp.location}</p>
                <ul className="space-y-1.5 pt-1 pb-3">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-6 text-[var(--muted)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      {b}
                    </li>
                  ))}
                </ul>
                
                {exp.projects && exp.projects.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.projects.map((proj) => (
                      <a 
                        key={proj.name}
                        href={proj.url}
                        target="_blank"
                        rel="noreferrer"
                        className="soft-chip text-[11px] hover:border-[var(--accent)] transition-colors"
                      >
                        {proj.name.replace(" ↗", "").replace("↗", "")} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-24 md:px-8 md:py-28">
        <SectionTitle
          eyebrow="Testimonials"
          title="Client feedback from verified delivery"
          description="Public-source review proof and long-term trust from shipped projects."
        />
        <LiveReviews />
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-24 md:px-8 md:py-28">
        <SectionTitle
          eyebrow="Articles"
          title="Practical notes from real Flutter projects"
          description="Architecture decisions, performance wins, backend choices, and release checklists."
          action={
            <Link href="/v1/articles" className="btn-secondary px-5 py-2.5 text-xs font-medium">
              View All Articles ↗
            </Link>
          }
        />
        <LiveArticles />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="surface-card p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Ready to start</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">Have an idea or project? Let&apos;s turn it into a high-quality mobile app.</h2>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={profile.links.upworkConsultation}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-6 py-3 text-sm font-medium"
            >
              Start on Upwork
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-secondary px-6 py-3 text-sm font-medium"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
      <VersionSwitcher current="v1" />
    </>
  );
}

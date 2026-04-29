import Image from "next/image";
import Link from "next/link";
import { ContactBlock } from "@/components/contact-block";
import { LiveProjects } from "@/components/live-projects";
import { LiveReviews } from "@/components/live-reviews";
import { SectionTitle } from "@/components/section-title";

export default function HomePage() {
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
                Md Azad<br />Hossain Tutul
              </h1>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                I build scalable, production-ready mobile apps for startups and businesses.
              </p>
              <p className="mt-1 text-sm font-medium text-[color:color-mix(in_srgb,var(--text)_84%,var(--muted)_16%)]">
                Flutter-first • Full-stack • AI integrations
              </p>
            </div>

            {/* Value proposition */}
            <p className="max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg md:leading-relaxed">
              I ship Android and iOS apps from planning to release. 5+ years in Flutter, 200+ apps delivered, focused on fintech, AI products, e-commerce, and healthcare.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="https://www.upwork.com/freelancers/~01082f851b8bed7bd1?s=996364627857502209"
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-6 py-3 text-sm font-medium"
              >
                Hire me on Upwork
              </a>
              <Link
                href="/projects"
                className="btn-secondary px-6 py-3 text-sm font-medium"
              >
                See my work
              </Link>
              <a
                href="https://drive.google.com/file/d/1lzpW1MCBbpNHdJvapKe9J0iKja_XNyoU/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[var(--muted)] underline underline-offset-4 transition hover:text-[var(--text)]"
              >
                View Resume
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 gap-6 border-t pt-7 sm:grid-cols-4"
              style={{ borderColor: "color-mix(in srgb, var(--line) 80%, var(--text) 20%)" }}
            >
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">5+</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">Years of Flutter</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">200+</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">Apps delivered</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">100%</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">Upwork job success</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">15+</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">Happy clients</p>
              </div>
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
                src="/azad.jpeg"
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
          {[
            { label: "Mobile", skills: ["Flutter", "Dart", "Android · iOS"] },
            { label: "Frontend / Web", skills: ["React.js", "Next.js", "TypeScript"] },
            { label: "Backend", skills: ["Node.js", "Firebase", "REST API"] },
            { label: "AI / Integrations", skills: ["ChatGPT API", "AI-powered features"] },
            { label: "Database", skills: ["MySQL", "MongoDB"] },
            { label: "Payments", skills: ["Stripe", "PayPal", "Apple Pay · Google Pay"] },
            { label: "Architecture", skills: ["Clean Architecture", "BLoC"] },
            { label: "DevOps / Release", skills: ["GitHub", "Fastlane", "App Store Connect"] },
            { label: "Design", skills: ["Figma"] },
          ].map((group) => (
            <div key={group.label} className="flex flex-wrap items-start gap-2">
              <span className="w-20 shrink-0 pt-1 text-xs text-[var(--muted)] md:w-28">{group.label}</span>
              {group.skills.map((s) => (
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
          {[
            {
              company: "Codego",
              role: "Mobile Application Developer",
              period: "Mar 2024 – Present",
              location: "Remote · Milan, Italy",
              bullets: [
                "Shipped CodegoPay Individual and Business to both Play Store and App Store.",
                "Implemented fintech flows: IBAN onboarding, SEPA transfers, and biometric auth.",
                "Maintained stable release quality through QA, performance tuning, and production fixes.",
              ],
            },
            {
              company: "Upwork",
              role: "Mobile Application Developer (Freelance)",
              period: "Feb 2024 – Present",
              location: "Remote",
              bullets: [
                "Delivered client apps end-to-end from requirement gathering to production release.",
                "Maintained 100% Job Success Score on Upwork with strong client retention.",
                "Integrated APIs, payments, and admin-ready flows across fintech and utility projects.",
              ],
            },
            {
              company: "AppDevs",
              role: "Senior Software Engineer",
              period: "Feb 2022 – Oct 2023",
              location: "Dhaka, Bangladesh",
              bullets: [
                "Led cross-functional team building Flutter apps across fintech, e-commerce, and AI sectors.",
                "Mentored engineers on architecture, code quality, and scalable delivery practices.",
                "Recognized as Employee of Month in both 2022 and 2023.",
              ],
            },
            {
              company: "Divine IT Limited",
              role: "Software Engineer Intern",
              period: "Oct 2021 – Dec 2021",
              location: "Dhaka, Bangladesh",
              bullets: [
                "Built Flutter feature modules and supported production release tasks.",
                "Gained practical experience across planning, coding, testing, and deployment.",
              ],
            },
          ].map((exp) => (
            <div key={exp.company} className="relative flex gap-6 pb-10">
              {/* dot */}
              <div className="relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="font-semibold text-[var(--text)]">{exp.company}</p>
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-xs text-[var(--muted)]">{exp.period}</span>
                </div>
                <p className="text-sm text-[var(--muted)]">{exp.role} · {exp.location}</p>
                <ul className="space-y-1.5 pt-1">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-6 text-[var(--muted)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      {b}
                    </li>
                  ))}
                </ul>
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

      <section className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="surface-card p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Ready to start</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">Have an idea or project? Let&apos;s turn it into a high-quality mobile app.</h2>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://www.upwork.com/freelancers/~01082f851b8bed7bd1?s=996364627857502209"
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-6 py-3 text-sm font-medium"
            >
              Start on Upwork
            </a>
            <a
              href="mailto:mdazadhossain95@gmail.com"
              className="btn-secondary px-6 py-3 text-sm font-medium"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
        <ContactBlock />
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ContactBlock } from "@/components/contact-block";
import { LiveProjects } from "@/components/live-projects";
import { LiveReviews } from "@/components/live-reviews";
import { SectionTitle } from "@/components/section-title";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-[var(--line)] px-3 py-1 text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
              Flutter Developer · Senior Software Engineer
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[var(--text)] md:text-7xl">
              Md Azad<br />Hossain Tutul
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
              Building secure, scalable Android and iOS apps for fintech, healthcare, ecommerce, and AI-first products. 5+ years · 200+ apps shipped.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90">
                View projects
              </Link>
              <a href="https://play.google.com/store/apps/developer?id=Codego+Limited" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--card)]">
                Google Play
              </a>
              <a href="https://apps.apple.com/ie/developer/codego-ltd/id1591241137" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--card)]">
                App Store
              </a>
              <a href="https://drive.google.com/file/d/1lzpW1MCBbpNHdJvapKe9J0iKja_XNyoU/view?usp=sharing" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--card)]">
                View resume
              </a>
              <Link href="/contact" className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--card)]">
                Contact
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-5 pt-2">
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">5+</p>
                <p className="text-xs text-[var(--muted)]">Years</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">200+</p>
                <p className="text-xs text-[var(--muted)]">Apps shipped</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">100%</p>
                <p className="text-xs text-[var(--muted)]">Upwork JSS</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">300+</p>
                <p className="text-xs text-[var(--muted)]">Cases resolved</p>
              </div>
            </div>
            <div className="inline-flex rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-xs text-[var(--text)]">
              100% Job Success on Upwork with 5-star client feedback
            </div>
          </div>
          <div className="mx-auto lg:mx-0">
            <div className="relative h-72 w-56 overflow-hidden rounded-3xl border border-[var(--line)] shadow-xl md:h-80 md:w-64">
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

      <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8">
        <SectionTitle
          eyebrow="Featured Work"
          title="Mobile apps built for users, scale, and speed"
          description="From MVP to production, each app focuses on clean architecture, performance, and release reliability."
        />
        <LiveProjects featuredOnly />
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Cross-platform stack for mobile, web, backend, and payments"
          description="Mobile first, but not mobile only. Work spans Flutter, React stack, Laravel backends, and payment integrations used in production apps."
        />
        <div className="space-y-5">
          {[
            { label: "Mobile", skills: ["Flutter", "Dart", "React Native", "Android", "iOS", "Kotlin", "Swift"] },
            { label: "Web", skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Dashboard UI"] },
            { label: "Backend & Data", skills: ["Firebase", "Supabase", "Node.js", "Laravel PHP", "REST API", "GraphQL", "PostgreSQL", "MySQL"] },
            { label: "State & Arch", skills: ["BLoC", "Riverpod", "Provider", "GetX", "Clean Architecture", "MVVM"] },
            { label: "DevOps & Tooling", skills: ["Git", "GitHub Actions", "Fastlane", "Play Console", "App Store Connect", "Figma"] },
            { label: "Payments", skills: ["Stripe", "Flutterwave", "Razorpay", "bKash", "Apple Pay", "Google Pay"] },
            { label: "Integrations", skills: ["Agora", "Google Maps", "WireGuard VPN", "FCM Push", "OneSignal"] },
          ].map((group) => (
            <div key={group.label} className="flex flex-wrap items-center gap-2">
              <span className="w-28 shrink-0 text-xs text-[var(--muted)]">{group.label}</span>
              {group.skills.map((s) => (
                <span key={s} className="rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--text)]">
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8">
        <SectionTitle
          eyebrow="AI"
          title="Flutter Agent Skills"
          description="Reusable AI skill system for Flutter workflows, from project bootstrap to codebase analysis and optimization."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Install</p>
            <p className="mt-2 text-sm font-medium text-[var(--text)]">npx skills add mdazadhossain95/flutter-agent-skills</p>
            <p className="mt-2 text-xs leading-6 text-[var(--muted)]">Add full Flutter skill pack into AI editor workflow.</p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Update</p>
            <p className="mt-2 text-sm font-medium text-[var(--text)]">npx skills update mdazadhossain95/flutter-agent-skills</p>
            <p className="mt-2 text-xs leading-6 text-[var(--muted)]">Keep skill instructions fresh and aligned with latest changes.</p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Coverage</p>
            <p className="mt-2 text-sm font-medium text-[var(--text)]">Official + Extended Skills</p>
            <p className="mt-2 text-xs leading-6 text-[var(--muted)]">Includes Flutter official skills plus custom skills like project bootstrap, explain codebase, optimize codebase.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
          <p className="text-sm leading-7 text-[var(--muted)]">
            Repository built and maintained by Md Azad Hossain Tutul. Focus: practical AI workflows for real Flutter delivery, architecture guidance, and modernization speed.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://github.com/mdazadhossain95/flutter-agent-skills"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
            >
              View GitHub Repo
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've worked"
          description="From internship to full-time at a European fintech — building mobile apps across multiple domains."
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
                "Develop Android and iOS apps using Flutter, integrating REST APIs and third-party services.",
                "Ensure app stability and performance through rigorous testing and debugging.",
                "Shipped CodegoPay Individual and Business to Play Store and App Store.",
              ],
            },
            {
              company: "Upwork",
              role: "Mobile Application Developer (Freelance)",
              period: "Feb 2024 – Present",
              location: "Remote",
              bullets: [
                "Build Flutter-based apps for international clients.",
                "Gather requirements, design UI, and deliver tested builds directly with clients.",
                "100% Job Success Score.",
              ],
            },
            {
              company: "AppDevs",
              role: "Senior Software Engineer",
              period: "Feb 2022 – Oct 2023",
              location: "Dhaka, Bangladesh",
              bullets: [
                "Led diverse teams building Flutter mobile solutions for fintech, e-commerce, and AI domains.",
                "Drove innovation and mentored team members on clean architecture and best practices.",
                "Employee of the Month — 2022 and 2023.",
              ],
            },
            {
              company: "Divine IT Limited",
              role: "Software Engineer Intern",
              period: "Oct 2021 – Dec 2021",
              location: "Dhaka, Bangladesh",
              bullets: [
                "Developed mobile apps using Flutter and collaborated with teams on production tasks.",
                "Gained hands-on experience with the full mobile development lifecycle.",
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

      <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8">
        <SectionTitle
          eyebrow="About"
          title="Engineering mindset + verified public work"
          description="Public reviews stay hidden until sourced from real platforms. Live apps, shipped case studies, and public profiles carry proof first."
        />
        <LiveReviews />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Hire Me</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Need Flutter app shipped fast and clean?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            I build production-ready Android and iOS apps for fintech, AI, e-commerce, and utility products. Available for full-time remote role and freelance contracts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:mdazadhossain95@gmail.com" className="rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-90">
              Hire via Email
            </a>
            <a href="https://www.upwork.com/freelancers/~01082f851b8bed7bd1" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--bg)]">
              Hire on Upwork
            </a>
            <Link href="/contact" className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--bg)]">
              Contact Form
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <ContactBlock />
      </section>
    </>
  );
}

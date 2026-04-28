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
              <a href="/resume.pdf" download className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--card)]">
                Download résumé
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
          </div>
          <div className="mx-auto lg:mx-0">
            <div className="relative h-72 w-56 overflow-hidden rounded-3xl border border-[var(--line)] shadow-xl md:h-80 md:w-64">
              <Image
                src="/azad.jpeg"
                alt="Md Azad Hossain Tutul"
                fill
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
          title="Flutter-centered stack with strong backend integration"
          description="Every tool chosen for reliability in production — not just prototyping."
        />
        <div className="space-y-5">
          {[
            { label: "Mobile", skills: ["Flutter", "Dart", "Android", "iOS", "Kotlin", "Swift"] },
            { label: "Backend & Data", skills: ["Firebase", "Supabase", "Node.js", "REST API", "GraphQL", "PostgreSQL"] },
            { label: "State & Arch", skills: ["BLoC", "Riverpod", "Provider", "GetX", "Clean Architecture", "MVVM"] },
            { label: "DevOps & Tooling", skills: ["Git", "GitHub Actions", "Fastlane", "Play Console", "App Store Connect", "Figma"] },
            { label: "Integrations", skills: ["Stripe", "Agora", "Google Maps", "WireGuard VPN", "FCM Push", "OneSignal"] },
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
          eyebrow="About"
          title="Engineering mindset + product delivery discipline"
          description="I focus on app architecture, maintainable code, and clear communication with founders and product teams."
        />
        <LiveReviews />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <ContactBlock />
      </section>
    </>
  );
}

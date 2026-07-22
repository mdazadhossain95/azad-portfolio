import Link from "next/link";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col justify-center px-5 pb-20 pt-8 md:px-8 md:pb-24 md:pt-12"
    >
      <div className="max-w-3xl space-y-8">
        <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          Hi, my name is
        </p>

        <div className="space-y-4">
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--text)] sm:text-6xl md:text-7xl lg:text-[5rem]">
            Md Azad Hossain Tutul.
          </h1>
          <p className="text-2xl font-medium text-[var(--text-secondary)] md:text-3xl">
            I build and improve production Flutter apps.
          </p>
        </div>

        <p className="max-w-xl text-base leading-8 text-[var(--text-muted)] md:text-lg md:leading-relaxed">
          {profile.title} with hands-on experience in FinTech, payments, AI-powered products, API integrations, and reliable Android and iOS releases.
        </p>

        <div className="flex flex-wrap items-center gap-3.5">
          <Link href="/projects" className="btn-primary px-7 py-3.5 text-sm font-medium">
            View Case Studies
          </Link>
          <a
            href={profile.links.upwork}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary px-7 py-3.5 text-sm font-medium"
          >
            Hire Me on Upwork
          </a>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          Available for freelance, contract, and long-term remote Flutter work.
        </p>
      </div>
    </section>
  );
}

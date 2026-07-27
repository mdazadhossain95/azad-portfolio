import { SectionTitle } from "@/components/section-title";
import { profile } from "@/content/profile";

export function V3Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Contact"
        title="Start the next entry"
        description="Email or Upwork. I read both within 24 hours."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card v3-anim-enter space-y-6 p-6 md:p-8">
          <p className="font-handwriting text-2xl" style={{ color: "var(--v3-gold)" }}>
            closing note
          </p>
          <div className="space-y-4">
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
              Have a mobile app idea or an existing product that needs work? Reach out. I keep
              the next step simple: write the problem, share the context, and I will reply with
              the cleanest way to move it forward.
            </p>
            <p className="text-sm leading-7 text-[var(--muted)]">
              {profile.title} · {profile.location} · {profile.status}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary px-6 py-3 text-sm font-medium"
            >
              Email me
            </a>
            <a
              href={profile.links.upworkConsultation}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary px-6 py-3 text-sm font-medium"
            >
              Book on Upwork
            </a>
          </div>
        </div>

        <aside className="surface-card v3-anim-enter space-y-4 p-6 md:p-8" style={{ animationDelay: "120ms" }}>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            Quick links
          </p>
          <div className="grid gap-2">
            {[
              { label: "LinkedIn", href: profile.links.linkedin },
              { label: "GitHub", href: profile.links.github },
              { label: "Medium", href: profile.links.medium },
              { label: "Resume", href: profile.links.resume },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-11 items-center justify-between rounded-md border border-[var(--line)] px-4 text-sm text-[var(--muted)] transition hover:bg-[var(--surface-raised)] hover:text-[var(--text)]"
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

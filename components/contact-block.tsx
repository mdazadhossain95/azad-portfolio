import { profile } from "@/content/profile";

export function ContactBlock() {
  const settings = profile.links;

  return (
    <section className="surface-card space-y-6 p-8">

      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-[var(--text)] to-[var(--accent)] bg-clip-text text-transparent">Let&apos;s work together</h3>
        <p className="text-sm leading-6 text-[var(--muted)] max-w-lg">
          Have a mobile app idea or an existing product that needs work? Reach out — I respond within 24 hours.
        </p>
      </div>

      {/* Primary CTAs */}
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="btn-primary gap-2 px-6 py-3 text-sm font-medium"
        >
          <span>✉</span> Email me
        </a>
        <a
          href={settings.upwork}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary gap-2 px-6 py-3 text-sm font-medium"
        >
          Hire me ↗
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--line)]" />

      {/* Social links */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-[var(--muted)]">Find me on</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href={settings.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href={settings.github} target="_blank" rel="noreferrer">GitHub</a>
          {settings.medium && (
            <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href={settings.medium} target="_blank" rel="noreferrer">Medium</a>
          )}
          {settings.stackoverflow && (
            <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href={settings.stackoverflow} target="_blank" rel="noreferrer">Stack Overflow</a>
          )}
          <a className="soft-chip text-[var(--muted)] transition hover:text-[var(--text)]" href={settings.resume} target="_blank" rel="noreferrer">View Resume</a>
        </div>
      </div>

    </section>
  );
}

import { profile } from "@/content/profile";
import { Mail, ArrowRight } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            05. What’s next?
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-5xl lg:text-6xl">
            Let’s build something reliable.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
            I’m available for Flutter development, existing-app improvement, FinTech and payment features, production fixes, and long-term maintenance.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Work with me */}
          <div className="surface-card group flex flex-col items-start gap-4 p-8 transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-raised)] hover:shadow-2xl hover:shadow-[var(--accent)]/5">
            <h3 className="text-2xl font-bold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">Want to work with me?</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Book a 1-on-1 project consultation on Upwork. We can discuss your architecture, timeline, and budget. It’s just $5 to get started.
            </p>
            <a
              href={profile.links.upworkConsultation}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-4 flex items-center gap-2 px-6 py-3.5 text-sm font-medium transition-transform hover:scale-105"
            >
              Book Consultation ($5)
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Talk with me */}
          <div className="surface-card group flex flex-col items-start gap-4 p-8 transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-raised)] hover:shadow-2xl hover:shadow-[var(--accent)]/5">
            <h3 className="text-2xl font-bold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">Just want to talk?</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              If you have a quick question or want to connect, my inbox is always open. Knock me on LinkedIn or send a direct email.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary flex items-center gap-2 px-6 py-3.5 text-sm font-medium transition-transform hover:scale-105"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="btn-secondary flex items-center gap-2 px-6 py-3.5 text-sm font-medium transition-transform hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { profile } from "@/content/profile";
import Image from "next/image";

export function V3CoverHero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_360px] lg:items-start lg:justify-between">
        <div className="surface-card v3-anim-enter space-y-6 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-handwriting text-2xl" style={{ color: "var(--v3-gold)" }}>
              Notebook entry no. 1
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            Available for freelance work
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            An engineer&apos;s notebook of shipped Flutter products.
          </h1>

          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {profile.name.replace(" Tutul", "")} · {profile.title.toLowerCase()}. This page
            records how the work actually moved: the constraints, the decisions, and the
            relationships behind the finished app.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#sketches" className="btn-primary w-full sm:w-auto px-6 py-3 text-sm font-medium">
              Read the sketches
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto px-6 py-3 text-sm font-medium">
              Get in touch
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { label: "Years shipping", value: profile.proof.experienceYears },
              { label: "Job success", value: profile.proof.upworkJss },
              { label: "Certifications", value: "16+" },
            ].map((item) => (
              <div key={item.label} className="rounded-md border border-[var(--line)] bg-[var(--bg)] p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--text)]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[360px] space-y-10 lg:justify-self-start pt-6">
          <div className="relative mx-auto w-full max-w-[340px] rotate-[3deg] lg:mx-0">
            {/* Board Pin */}
            <div
              aria-hidden="true"
              className="absolute -top-4 left-1/2 z-20 h-6 w-6 -translate-x-1/2"
            >
              {/* Pin Cast Shadow */}
              <div className="absolute left-[8px] top-[14px] h-3 w-3 rounded-full bg-black/30 blur-[2px]" />
              {/* Pin Head */}
              <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#c0392b] border border-[#a12d22] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.3)]">
                {/* Pin Highlight */}
                <div className="absolute top-[3px] left-[4px] h-1.5 w-1.5 rounded-full bg-white/70 blur-[0.5px]" />
              </div>
            </div>

            {/* Sticky note */}
            <div
              className="v3-anim-settle relative w-full rounded-md border border-[var(--line)] bg-[#fcf8e3] p-3 pb-5 shadow-md transition-transform duration-500 hover:rotate-1 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#fff] rounded-sm">
                <Image
                  src="/profile-photo.png"
                  alt="Md Azad Hossain Tutul"
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <p className="font-handwriting mt-4 text-center text-xl text-[#2a2a2a] opacity-90">
                still shipping
              </p>
            </div>
          </div>

          <div className="v3-anim-enter relative mx-auto w-full max-w-[340px] rotate-[-2deg] rounded-sm border border-[var(--line)] bg-[#fdfbf7] p-6 shadow-sm" style={{ animationDelay: "120ms" }}>
            {/* Tape at top */}
            <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-1deg] bg-white/60 shadow-sm backdrop-blur-sm border border-black/5" />
            
            <div className="relative z-10 space-y-4">
              <p className="font-handwriting text-3xl" style={{ color: "var(--v3-gold)" }}>
                quick note
              </p>
              <p className="text-sm leading-7 text-[var(--muted)]">
                Clean handoffs, stable releases, and clear communication are the habit.
                The notebook keeps those parts visible.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="soft-chip bg-white border border-[var(--line)] text-[var(--text)]">{profile.location}</span>
                <span className="soft-chip bg-white border border-[var(--line)] text-[var(--text)]">{profile.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

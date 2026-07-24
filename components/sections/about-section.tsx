import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
        {/* Text Content (60-65% width equivalent) */}
        <div className="space-y-6 lg:col-span-7">
          <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            01. About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Product Engineer | Mobile, Web & Backend
          </h2>
          <div className="space-y-4 text-base leading-8 text-[var(--text-muted)]">
            <p>
              I build <span className="bg-[var(--accent)]/10 text-[var(--accent)] px-1.5 py-0.5 rounded font-medium">stable, production-ready</span> mobile applications. For the past five years, I’ve engineered scalable iOS and Android apps for <span className="bg-[var(--text)]/10 text-[var(--text)] px-1.5 py-0.5 rounded font-medium">FinTech and AI</span> companies using Flutter, React, and Node.js. My work goes beyond UI. I handle the <span className="bg-[var(--accent)]/10 text-[var(--accent)] px-1.5 py-0.5 rounded font-medium">entire app lifecycle</span> from clean architecture and secure APIs, to testing and App Store deployment, ensuring reliable products that users love.
            </p>
            <p className="pt-2">
              Here are the core technologies I work with regularly:
            </p>
            
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm mono text-[var(--text-muted)]">
              <li className="flex items-center gap-2"><span className="text-[var(--accent)] text-xs">▹</span> Flutter & Dart</li>
              <li className="flex items-center gap-2"><span className="text-[var(--accent)] text-xs">▹</span> React, Next.js & TS</li>
              <li className="flex items-center gap-2"><span className="text-[var(--accent)] text-xs">▹</span> Node.js & PHP/Laravel</li>
              <li className="flex items-center gap-2"><span className="text-[var(--accent)] text-xs">▹</span> PostgreSQL & Firebase</li>
              <li className="flex items-center gap-2"><span className="text-[var(--accent)] text-xs">▹</span> Clean Architecture</li>
              <li className="flex items-center gap-2"><span className="text-[var(--accent)] text-xs">▹</span> CI/CD & Deployment</li>
              <li className="flex items-center gap-2"><span className="text-[var(--accent)] text-xs">▹</span> Payment Systems</li>
              <li className="flex items-center gap-2"><span className="text-[var(--accent)] text-xs">▹</span> AI & LLM Integrations</li>
            </ul>

            <div className="mt-8 pt-4">
              <a
                href="/resume"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
              >
                View Full Resume
                <span className="text-[var(--accent)]">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Portrait Image (30-35% width equivalent) */}
        <div className="relative mx-auto mt-10 w-full max-w-[300px] lg:col-span-4 lg:col-start-9 lg:mx-0 lg:mt-0">
          <div className="group relative z-10">
            {/* Tech Blue Offset Frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border-2 border-[#2563EB] transition-all duration-500 ease-out lg:group-hover:translate-x-5 lg:group-hover:translate-y-5" />
            
            {/* Image Wrapper */}
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#0B1F3A] transition-transform duration-500 ease-out lg:group-hover:-translate-x-1 lg:group-hover:-translate-y-1">
              {/* Midnight Navy Tint Overlay (Fades on hover) */}
              <div className="absolute inset-0 z-10 bg-[#071B3A]/30 mix-blend-multiply transition-opacity duration-500 ease-out lg:group-hover:opacity-0" />
              
              <Image
                src="/profile-photo.png"
                alt="Md Azad Hossain Tutul"
                fill
                sizes="(min-width: 1024px) 300px, 100vw"
                className="object-cover object-top grayscale-[20%] transition-all duration-500 ease-out lg:grayscale lg:group-hover:scale-[1.03] lg:group-hover:grayscale-0"
                priority
              />
            </div>

            {/* Developer Personalization Badge */}
            <div className="absolute -bottom-4 -left-6 z-20 flex items-center gap-2 rounded-md border border-[#102A4C] bg-[#061326] px-3 py-2 text-xs font-mono text-[var(--text-muted)] shadow-xl transition-transform duration-500 ease-out lg:group-hover:-translate-x-2 lg:group-hover:-translate-y-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              azad.dart
            </div>
          </div>
        </div>
      </div>

      {/* Premium Trust Metrics Footer */}
      <div className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-[var(--line)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col gap-2 md:gap-3 border-l-2 border-[var(--accent)] pl-5">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text)]">5+ Years</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">Flutter Experience</span>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 border-l-2 border-[var(--line)] pl-5 transition-colors hover:border-[var(--accent)]/50">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text)]">Multiple</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">Production Apps</span>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 border-l-2 border-[var(--line)] pl-5 transition-colors hover:border-[var(--accent)]/50">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text)]">Android + iOS</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">Store Delivery</span>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 border-l-2 border-[var(--line)] pl-5 transition-colors hover:border-[var(--accent)]/50">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text)]">International</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">Remote Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

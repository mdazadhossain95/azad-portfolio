import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="mono text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            01. About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Senior Flutter Developer with production focus
          </h2>
          <div className="space-y-4 text-base leading-8 text-[var(--text-muted)]">
            <p>
              I’m a Senior Flutter Developer with more than five years of experience building and maintaining Android and iOS applications. My strongest experience is in FinTech, payments, API-heavy products, Firebase, subscriptions, and production releases.
            </p>
            <p>
              I have worked inside both agency and product teams, led Flutter developers, and supported live applications where stability, clear communication, and careful releases matter. Today, I work independently with clients and teams that need reliable Flutter delivery.
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              Outside work, I enjoy running, sports, travel, and community activities.
            </p>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-[2rem] blur-2xl"
            style={{
              background: "radial-gradient(circle, rgba(66, 200, 245, 0.14), transparent 72%)",
            }}
          />
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
            <Image
              src="/profile-photo.png"
              alt="Md Azad Hossain Tutul"
              fill
              sizes="(min-width: 1024px) 384px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

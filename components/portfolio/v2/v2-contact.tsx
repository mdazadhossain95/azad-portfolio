import Image from "next/image";
import { profile } from "@/content/profile";
import { V2Reveal } from "./v2-reveal";

const CHANNELS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Upwork", value: "Hire through Upwork", href: profile.links.upwork },
  { label: "LinkedIn", value: "azadhossain-tutul", href: profile.links.linkedin },
  { label: "GitHub", value: "mdazadhossain95", href: profile.links.github },
  { label: "Medium", value: "Engineering write-ups", href: profile.links.medium },
  { label: "Resume", value: "View resume", href: profile.links.resume },
];

export function V2Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden pb-64 pt-24 md:pb-80 md:pt-40">

      {/* sunrise horizon - the journey's destination glow, behind the panels.
          The 3D Sun (V2SolarHorizon) renders behind this from V2PersistentUniverse. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-80 overflow-hidden">
        <div className="v2-solar-scatter absolute inset-x-0 bottom-0 h-full" />
        <div className="v2-contact-sun absolute bottom-[5.75rem] left-1/2 z-[1] h-10 w-10 -translate-x-1/2">
          <Image
            src="/textures/sun.webp"
            alt=""
            width={40}
            height={40}
            loading="lazy"
            className="v2-contact-sun-core h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="v2-contact-horizon absolute inset-x-[-12%] -bottom-28 h-56" />
        <div className="v2-contact-horizon-rim absolute inset-x-[8%] bottom-[6.6rem] h-px" />
      </div>

      <div className="v2-container relative z-10">
        <V2Reveal className="max-w-[640px]">
          <p className="v2-label flex items-center gap-2.5 text-[var(--v2-sun-glow)]">
            <span
              aria-hidden="true"
              className="v2-anim-twinkle h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--v2-sun-glow)" }}
            />
            06 / Contact
          </p>
          <h2 className="v2-h2 mt-4 font-semibold text-[var(--text)]">Get in touch</h2>
          <p className="v2-body-l mt-5 text-[var(--muted)]">
            {profile.availability
              ? "Open to new work. Use email or Upwork if you want to talk through a Flutter app, a backend, a payment flow, or a cleanup on an app that already exists."
              : "Not taking new work right now, but the contact channels still stay open."}
          </p>
        </V2Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <V2Reveal className="v2-panel flex flex-col justify-between p-6 md:p-8 lg:col-span-5">
            <div>
              <p className="v2-label text-[var(--v2-star-dim)]">Start here</p>
              <p className="v2-h4 mt-4 font-semibold text-[var(--text)]">
                Have a product that needs to hold up in production?
              </p>
              <p className="v2-body mt-3 text-[var(--muted)]">
                Send the context: platform, stage, and what is missing or breaking.
                I’ll tell you what fits, what does not, and where the scope needs to stay
                realistic.
              </p>

              <p className="v2-body mt-6 text-[var(--muted)]">
                Core work usually sits around {profile.coreStack.slice(0, 4).join(", ")}.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary inline-flex w-[200px] items-center px-7 text-base font-medium"
              >
                Open email draft
              </a>
              <a
                href={profile.links.upworkConsultation}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex w-[200px] items-center px-7 text-base font-medium"
              >
                Book on Upwork ↗
              </a>
            </div>
          </V2Reveal>

          <V2Reveal className="v2-panel p-6 md:p-8 lg:col-span-7" delay={80}>
            <div
              className="flex flex-wrap items-center justify-between gap-3 border-b pb-4"
              style={{ borderColor: "var(--v2-panel-edge)" }}
            >
              <p className="v2-label text-[var(--v2-star-dim)]">Reach me</p>
              <p className="v2-body-s flex items-center gap-2 text-[var(--muted)]">
                <span
                  aria-hidden="true"
                  className="v2-anim-twinkle h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--v2-verified)" }}
                />
                {profile.location} · {profile.status}
              </p>
            </div>

            <ul className="divide-y" style={{ borderColor: "var(--v2-panel-edge)" }}>
              {CHANNELS.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={channel.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="group flex min-h-[56px] flex-wrap items-center justify-between gap-3 rounded-md px-1 transition hover:bg-[var(--surface-raised)]"
                  >
                    <span className="v2-label text-[var(--muted)]">{channel.label}</span>
                    <span className="v2-body flex items-center gap-2 text-[var(--text)]">
                      {channel.value}
                      <span
                        aria-hidden="true"
                        className="text-[var(--v2-earth-atmosphere)] transition-transform group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </V2Reveal>
        </div>
      </div>

      {/* The final Sun is deliberately DOM-positioned so it cannot enter the footer. */}
    </section>
  );
}

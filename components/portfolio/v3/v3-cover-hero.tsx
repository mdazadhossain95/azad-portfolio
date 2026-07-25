import Image from "next/image";
import { profile } from "@/content/profile";

export function V3CoverHero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
      <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
        <div className="mx-auto md:mx-0">
          <div
            aria-hidden="true"
            className="w-56 rotate-[-3deg] bg-[var(--card)] p-3 pb-10 shadow-[0_10px_24px_rgba(0,0,0,0.15)] md:w-64"
            style={{ border: "1px solid var(--line)" }}
          >
            <div className="relative h-56 w-full overflow-hidden md:h-64">
              <Image
                src="/profile-photo.png"
                alt="Md Azad Hossain Tutul"
                fill
                sizes="256px"
                className="object-cover object-top"
              />
            </div>
            <p className="font-handwriting mt-3 text-center text-xl" style={{ color: "var(--v3-gold)" }}>
              still shipping — {new Date().getFullYear()}
            </p>
          </div>
        </div>

        <div>
          <p className="font-handwriting text-2xl" style={{ color: "var(--v3-gold)" }}>
            Notebook entry no. 1
          </p>
          <h1 className="mt-2 text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl">
            An engineer&apos;s notebook of shipped Flutter products.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
            {profile.name.replace(" Tutul", "")} — {profile.title.toLowerCase()}. This page walks
            through how projects actually got built: the decisions, the
            constraints, and the client relationships behind them.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#sketches" className="btn-primary px-6 py-3 text-sm font-medium">
              Read the sketches
            </a>
            <a href="#contact" className="btn-secondary px-6 py-3 text-sm font-medium">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

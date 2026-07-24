import { profile } from "@/content/profile";

export function V1Hero() {
  return (
    <section className="flex min-h-[100dvh] flex-col justify-center px-6 md:px-24 max-w-5xl mx-auto pt-20">
      <div className="space-y-5">
        <h1 className="font-mono text-[var(--accent)] mb-4">Hi, my name is</h1>
        <h2 className="text-5xl font-bold tracking-tight text-[var(--text)] md:text-7xl">
          {profile.name}.
        </h2>
        <h3 className="text-4xl font-bold tracking-tight text-[var(--text-secondary)] md:text-6xl mt-2">
          {profile.positioning}.
        </h3>
        <p className="max-w-xl text-lg text-[var(--text-muted)] mt-6 leading-relaxed">
          I&apos;m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products across mobile and web platforms.
        </p>
        <div className="pt-8">
          <a
            href="#work"
            className="inline-block rounded border border-[var(--accent)] bg-transparent px-7 py-4 font-mono text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
          >
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
}

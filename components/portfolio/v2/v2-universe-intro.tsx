import { V2IntroActions } from "./v2-intro-actions";

export function V2UniverseIntro() {
  return (
    <section
      id="universe-intro"
      aria-labelledby="universe-intro-title"
      className="relative isolate flex min-h-[78dvh] items-end overflow-hidden pb-24 pt-28 md:min-h-[92dvh] md:items-center md:pb-16"
    >
      <div className="v2-container relative z-20">
        <div className="max-w-[620px]">
          <p className="v2-label text-[var(--v2-ai)]">Portfolio universe</p>
          <h2
            id="universe-intro-title"
            className="v2-lcp-heading v2-h2 mt-4 font-semibold text-[var(--text)]"
          >
            From the Milky Way to production systems.
          </h2>
          <p className="v2-lcp-heading v2-body-l mt-5 max-w-[560px] text-[var(--muted)]">
            A short passage through the galaxy leads to an engineering portfolio
            built around real shipped work.
          </p>
          <V2IntroActions />
        </div>
      </div>
      <p className="v2-label absolute bottom-8 right-6 z-20 hidden text-[var(--muted)] md:block">
        Scroll toward the Solar System ↓
      </p>
    </section>
  );
}

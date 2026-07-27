/**
 * V2 per-section haze.
 *
 * Every section carries a `V2SectionField` so no part of the page is ever flat
 * black - the empty space is part of the composition, not a gap. This is the
 * only CSS/SVG celestial layer that remains now that the 3D universe is rendered
 * by `v2-persistent-universe.tsx`; the planet bodies themselves live in WebGL.
 *
 * Decorative: `aria-hidden`, `pointer-events-none`, and the parallax field is
 * animated only when the visitor has not requested reduced motion (handled by
 * the `.v2-anim-parallax-near` class in `app/globals.css`).
 */
export function V2SectionField({
  className = "",
  tone = "blue",
  intensity = "normal",
}: {
  className?: string;
  tone?: "blue" | "violet" | "warm" | "rust";
  intensity?: "subtle" | "normal" | "strong";
}) {
  const hazeByTone: Record<string, string> = {
    blue:
      "radial-gradient(ellipse 60% 55% at 12% 30%, var(--v2-nebula-blue) 0%, transparent 70%)," +
      "radial-gradient(ellipse 45% 40% at 88% 70%, var(--v2-nebula-cyan) 0%, transparent 72%)",
    violet:
      "radial-gradient(ellipse 55% 50% at 85% 25%, var(--v2-nebula-violet) 0%, transparent 70%)," +
      "radial-gradient(ellipse 50% 45% at 10% 75%, var(--v2-nebula-blue) 0%, transparent 72%)",
    warm:
      "radial-gradient(ellipse 55% 50% at 50% 92%, color-mix(in srgb, var(--v2-sun-glow) 16%, transparent) 0%, transparent 70%)," +
      "radial-gradient(ellipse 45% 40% at 15% 20%, var(--v2-nebula-blue) 0%, transparent 72%)",
    rust:
      "radial-gradient(ellipse 50% 45% at 80% 20%, rgba(127, 29, 29, 0.28) 0%, transparent 70%)," +
      "radial-gradient(ellipse 55% 50% at 8% 68%, var(--v2-nebula-blue) 0%, transparent 72%)",
  };

  const opacity = intensity === "subtle" ? 0.5 : intensity === "strong" ? 1 : 0.75;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0" style={{ background: hazeByTone[tone], opacity }} />
      <div
        className="v2-anim-parallax-near absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(1.4px 1.4px at 18% 22%, var(--v2-star) 0%, transparent 100%)," +
            "radial-gradient(1px 1px at 62% 48%, var(--v2-star-dim) 0%, transparent 100%)," +
            "radial-gradient(1.2px 1.2px at 84% 18%, var(--v2-star) 0%, transparent 100%)," +
            "radial-gradient(1px 1px at 34% 78%, var(--v2-star-dim) 0%, transparent 100%)," +
            "radial-gradient(1.4px 1.4px at 74% 86%, var(--v2-star) 0%, transparent 100%)",
          backgroundSize: "280px 280px",
          opacity: 0.45,
        }}
      />
    </div>
  );
}

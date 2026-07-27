/**
 * Reserved space for the celestial body beneath `lg`.
 *
 * On desktop each section keeps its body in a side column, but below `lg` the
 * grids collapse to one column and the copy fills the width. Without a
 * reserved band the 3D body renders behind the paragraphs. This holds the
 * room the camera drops the body into; it draws nothing itself.
 */
export function V2CelestialBand({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none h-[clamp(240px,58vw,340px)] w-full md:h-[clamp(300px,42vw,400px)] lg:hidden ${className}`}
    />
  );
}

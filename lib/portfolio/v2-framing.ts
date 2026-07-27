/**
 * Shared framing maths for the V2 celestial scene.
 *
 * Camera states are authored against a 1440x900 desktop frame and three.js
 * `fov` is vertical, so a narrow viewport silently loses horizontal field: a
 * 390x844 phone sees roughly a third of the width a desktop does, and bodies
 * placed off to the side fall outside the frustum entirely.
 *
 * Both the camera rig and the body transforms have to agree on how a viewport
 * is reframed, so the maths lives here rather than in either of them.
 */

export const V2_REFERENCE_ASPECT = 1.6;
export const V2_MAX_VERTICAL_FOV = 78;

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
const toDegrees = (radians: number) => (radians * 180) / Math.PI;

/**
 * The vertical fov that preserves the authored horizontal field at `aspect`,
 * capped so the lens never reads as a fisheye. Whatever the cap leaves
 * unresolved is recovered by dollying the camera back (see `v2DollyFactor`).
 */
export function v2ResponsiveFov(authoredFov: number, aspect: number): number {
  if (!Number.isFinite(aspect) || aspect >= V2_REFERENCE_ASPECT) {
    return authoredFov;
  }
  const halfWidth = Math.tan(toRadians(authoredFov) / 2) * V2_REFERENCE_ASPECT;
  const wantedHalf = Math.atan(halfWidth / aspect);
  return Math.min(toDegrees(wantedHalf * 2), V2_MAX_VERTICAL_FOV);
}

/** How much further back the camera must sit once the fov cap is applied. */
export function v2DollyFactor(authoredFov: number, aspect: number): number {
  if (!Number.isFinite(aspect) || aspect >= V2_REFERENCE_ASPECT) return 1;
  const halfWidth = Math.tan(toRadians(authoredFov) / 2) * V2_REFERENCE_ASPECT;
  const wantedHalf = Math.atan(halfWidth / aspect);
  const cappedHalf = toRadians(v2ResponsiveFov(authoredFov, aspect)) / 2;
  return Math.tan(wantedHalf) / Math.tan(cappedHalf);
}

/** Half the world-space height visible at `distance` for the given framing. */
export function v2VisibleHalfHeight(
  authoredFov: number,
  aspect: number,
  distance: number,
): number {
  const fov = v2ResponsiveFov(authoredFov, aspect);
  const dolly = v2DollyFactor(authoredFov, aspect);
  return Math.tan(toRadians(fov) / 2) * distance * dolly;
}

/**
 * Fraction of the frame height to drop a body by, so it clears the copy.
 *
 * Below `lg` the section grids collapse to a single column and the text fills
 * the width, so a body left at its authored height renders behind the
 * paragraphs. These match the reserved bands in the section markup.
 */
export function v2BodyDropFraction(viewportWidth: number): number {
  if (viewportWidth < 768) return 0.62;
  if (viewportWidth <= 1024) return 0.54;
  return 0;
}

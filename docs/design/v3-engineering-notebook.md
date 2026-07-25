# V3 — Engineering Notebook — Design Brief

## 1. Audience
People who want to see personality and process behind the work — smaller studios, direct clients, and collaborators deciding whether Azad is someone they'd enjoy working with, not just what he's shipped.

## 2. Primary action
Read the career story and product sketches, then reach out via the contact page.

## 3. Version and route
V3, served at `/v3`, `noindex, follow`.

## 4. Tone (three adjectives)
Warm. Handwritten. Considered.

## 5. Signature
A page that behaves like an open engineering notebook: paper background, a polaroid-framed portrait, dated career entries, and project "sketches" (real screenshots in a taped/framed presentation) with short handwritten annotations pointing at specific decisions.

## 6. Dominant composition
Single-column notebook page, generous margins, left "spine" rule line on desktop. No card-grid dashboard feel — content reads top to bottom like notebook pages.

## 7. Typography pairing and reason
Sora for all body copy and headings (stays readable, meets 16px+ mobile body requirement). One additional handwriting face (Caveat) used ONLY for short annotation labels (margin notes, tab captions, a "next" arrow caption) — never for paragraphs, per version rule. Two functional families total in body content (Sora + Space Mono for the notebook page-number/date stamps), plus the narrow decorative handwriting layer.

## 8. Color roles
- Background: warm paper (`#F6F1E4` light paper tone), dark mode uses a deep warm charcoal paper (`#1B1712`) rather than site navy, since "warm paper" is the signature even at night.
- Body text: charcoal (`#2B2F35`).
- Structural ink: navy ink (`#1E3A5F`) for headings and rules.
- Accent/annotations: sketch gold (`#D4A62A`) for handwriting labels and underlines.
- Rare emphasis: premium burgundy (`#7F1D1D`) for at most one highlight per page (e.g., a single "favorite problem" callout).

## 9. Density and spacing character
Generous vertical rhythm between "pages" (sections), tighter spacing within an entry. Margin annotations sit outside the main text column on desktop, stack inline on mobile.

## 10. Motion character
Minimal: a slight settle-in on section entry at most, transform/opacity only. No continuous animation, no parallax layers, no page-flip gimmick.

## 11. Image/media direction
Real profile photo (`/profile-photo.png`) in a polaroid frame (a rotated frame is decorative, not text, so it stays within the "no rotated essential text" rule). Project sketches reuse existing verified cover images from `content/projects.ts` — no fabricated screens.

## 12. What this version must not resemble
V1's precise numbered-dev layout, V2's systems console, V4's mobile product hero, a children's scrapbook (no doodle overload, no full-paragraph handwriting, no low-contrast pastel-on-pastel text).

## 13. Technical/accessibility constraints
- Own nested layout (`app/v3/layout.tsx`) + `.v3-theme` token scope, mirroring `.v1-theme`/`.v2-theme`, supporting both light (default "paper") and dark ("night notebook") modes for AA contrast either way.
- Global chrome disabled for `/v3` in `LayoutWrapper`.
- Decorative rotation/tape/annotation elements marked `aria-hidden`; all essential content stays horizontal and in normal reading order in the DOM.
- Handwriting font loaded only in `app/v3/layout.tsx` (not global), keeping it version-scoped.
- Reduce/hide decorative tape and rotation on narrow viewports if it risks overflow; verified no horizontal scroll at 320–1920px.
- Real data only: `content/experience.ts`, `content/projects.ts`, `content/skills.ts`, `content/profile.ts`.

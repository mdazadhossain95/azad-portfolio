# V2 — Cosmic Gravity — Design Brief

Supersedes the retired "FinTech Systems Lab" direction (see git history for
`v2-fintech-systems-lab.md`). V2's identity is now a fully immersive
space/gravity/Earth concept, replacing the systems-dashboard framing.

## 1. Audience

Anyone evaluating Azad's technical range and creative/frontend craft —
positioned to feel distinct from V1 (classic/recruiter), V3 (personality),
and V4 (canonical/conversion) by leading with visual ambition.

## 2. Primary action

Start a build (Upwork consultation) or read a full case study
(`/projects/[slug]`).

## 3. Version and route

V2, served at `/v2` (+ `/v2/projects`, `/v2/articles`), `noindex, follow`.

## 4. Tone (three adjectives)

Immersive. Elegant. Premium.

## 5. Signature

A single continuous space journey with one body owning each section:

```
Earth limb   → Hero          (orbit waypoints link onward)
Moon         → About
Mars         → Experience    (trajectory spine)
Jupiter      → Missions
Satellite    → Transmissions (articles)
Saturn       → Capabilities  (constellation clusters)
Beacon + Earth horizon → Contact (destination reached)
```

The hero Earth is large enough to leave the viewport, lit from off-screen
upper right so the visible limb is the night side — city lights and a
bright atmospheric rim. Orbit waypoints sit on the arcs leaving the planet
and double as real navigation into the sections below. One fixed ambient
starfield (nebula + three star depths + vignette) runs the whole page;
foreground bodies are placed per-section so they appear as the visitor
scrolls — no scroll-jacking, no locked camera.

## 6. Dominant composition

Full-bleed sections (celestial layers span the viewport) with a
`max-w-6xl` left-aligned reading column inside. Every section carries a
`V2SectionField` haze so no region of the page is ever flat black. Content
sits in `v2-panel` instrument surfaces that read as part of the scene.

## 7. Typography pairing and reason

Sora (headings/body) + Space Mono (eyebrows, mission labels, status pills)
— unchanged from the rest of the site. No new display font; Space Mono
already carries the "signal/mission" feeling needed here.

## 8. Color roles

All cosmic tokens map to the existing approved brand palette
(`_shared/references/brand-system.md`) — no new arbitrary hex values:

- Earth atmosphere / accent glow: Flutter Cyan (`--v2-earth-atmosphere`)
- Earth landmass: FinTech Green (`--v2-earth-land`)
- Earth ocean/body: Navy 600/700 (`--v2-earth-ocean` / `--v2-earth-deep`)
- Moon: neutral Slate Gray / Graphite (`--v2-moon-surface` / `--v2-moon-shadow`)
- Mars accent (sparing, Projects only): Premium Burgundy (`--v2-mars`)
- Jupiter accent (sparing, Projects only): Sketch Gold (`--v2-sun-glow`,
  doubles as the Contact section's warm signal glow)
- Stars/particles: Soft White / Muted Lavender (`--v2-star`, `--v2-star-dim`,
  `--v2-particle`)
- Primary actions/links: Tech Blue (unchanged from prior V2 direction)
- AI-specific tags: AI Purple (unchanged, still scoped to AI content only)

## 9. Density and spacing character

Generous vertical rhythm between sections (py-20/28) so each celestial
object has room to read before the next section begins — the opposite of
the old dense systems-record spacing.

## 10. Motion character

Slow and continuous, never sudden: 90s planet rotation, 22-46s particle
drift, 5s star twinkle, 22s orbit-dot travel. All wrapped in
`@media (prefers-reduced-motion: no-preference)` — fully static composition
when reduced motion is requested. No scroll-jacking; native scroll only.

## 11. Image/media direction

No new imagery/photos. All celestial bodies are CSS/SVG (gradients, box-
shadow glow, SVG ellipse orbit paths) — no three.js/WebGL, keeps bundle
light and mobile performance solid. Project cards keep using real, verified
screenshots from `content/projects.ts` as before.

## 12. What this version must not resemble

Cartoon/childish space clip-art, sci-fi game UI, literal NASA-mission-
control cosplay, gaming HUD elements, or V4's mobile-product hero. Also
avoid the previous V2 identity's dashboard/terminal framing entirely.

## 13. Technical/accessibility constraints

- Own `.v2-theme` token scope in `app/globals.css`, same pattern as
  `.v1-theme`/`.v3-theme`.
- `V2Starfield` mounted once in `app/v2/layout.tsx` as a `position: fixed`,
  `aria-hidden`, `pointer-events-none` layer — never intercepts input,
  never affects layout/scroll.
- Per-section celestial decoration is `absolute` within a `relative`
  section wrapper (not `fixed`) — sized to real content height, no
  hardcoded viewport-height math, no scroll-jacking.
- All data sourced from `content/` (profile, experience, skills, projects)
  — no invented metrics; `profile.proof.appsDelivered` /
  `profile.proof.happyClients` are verified numbers, not placeholders.
- Keyboard-operable nav, mobile drawer with focus handling, 44px touch
  targets, AA contrast maintained against the deep-space background.
- Motion fully disabled under `prefers-reduced-motion: reduce`.
- `/v2/projects` and `/v2/articles` are new archive routes (matching the
  V1/V4 pattern of a version-styled archive linking to the shared canonical
  `/projects/[slug]` and `/articles/[slug]` detail pages — no per-version
  duplicate detail-page routes, keeping one rendering path per project).
- The archive uses V2-only components (`V2MissionArchive`,
  `V2TransmissionArchive`) rather than the shared `ProjectGrid`/`ProjectCard`,
  so V2's presentation can differ without touching V1/V3/V4.
- Card layout adapts to how many projects a category actually holds: a lead
  card is promoted to a wide `feature` variant whenever that makes the
  remaining cards fill their rows, so no category ends with one card
  stranded beside empty space.
- Mission cards have one action: the title carries a stretched link over
  the whole card. Store links are quiet secondary text, not repeated
  primary buttons.
- Media wells draw a gradient + platform label *behind* the screenshot, so
  a slow or missing image never renders as an empty rectangle.
- Body copy runs at 16–17px (`.v2-body`, `text-base`) and mono labels at
  12px (`.v2-label`) — one step larger than the other versions, because the
  deep-space background costs legibility.
- Header nav drops mission numbers below `xl` and archive links below `xl`;
  at 1024px the full set does not fit the container.

## 14. Hero proof panel rhythm

The hero "Quick facts" block should read like a small orbital instrument
cluster, not a flat dashboard:

- one featured proof card for experience, with a subtle atmospheric glow
- two satellite cards for job success score and client experience
- availability stays as a compact status chip in the header row
- avoid four equal metric boxes, heavy borders, or stock SaaS stat-card styling

# V2 — Immersive 3D Universe — Design Brief

Supersedes the "No WebGL" non-negotiable in `v2-cosmic-gravity.md`,
`v2-orbital-sweep.md`, and `v2-orbital-journey.md`. Those briefs' design
thinking — composition, type scale, color roles, motion character,
responsive behaviour, reduced-motion rules — is preserved here; only the
medium changes from CSS/SVG to a lean React Three Fiber scene. The guardrails
in `_shared/references/version-directions.md` stand: no WebGL **bloat**, no
mission-control cosplay, no scroll-jacking, the canonical journey
`Hero → About → Experience → Projects → Capabilities → Contact`, AA contrast.

## 1. Audience

Hiring managers and collaborators evaluating Azad's technical depth and
creative-frontend range — positioned to feel distinct from V1 (classic),
V3 (notebook), and V4 (canonical/conversion) by leading with visual ambition
that still reads as a credible engineering portfolio.

## 2. Primary action

Start a build (Upwork consultation) or read a full case study
(`/projects/[slug]`).

## 3. Version and route

V2, served at `/v2` (+ `/v2/projects`, `/v2/articles`), `noindex, follow`.

## 4. Tone (three adjectives)

Immersive. Elegant. Premium.

## 5. Signature

One continuous 3D space journey. A persistent starfield and a single virtual
sun light the whole page; the camera flies Earth → Moon → Mars → Jupiter →
Neptune → Saturn → Sun **in sync with the real scroll position of each
section** — calibrated to measured section offsets, not hardcoded fractions.
DOM content scrolls in a still reading column over the scene; the celestial
layer is always behind, never in front. No scroll-jacking — native scroll
drives a passive camera, never the other way around.

## 6. Dominant composition

A full-bleed R3F `<Canvas>` (`position: fixed`, `aria-hidden`,
`pointer-events-none`) sits behind a `max-w` left-aligned reading column.
Every section carries a `V2SectionField` haze so no region of the page is ever
flat black; content sits in `v2-panel` surfaces that read as part of the
scene. Per-section celestial bodies are placed in 3D space to frame their
section as the visitor arrives — appearing as the camera reaches them, not
all visible at once.

## 7. Typography pairing and reason

Sora (headings/body) + Space Mono (eyebrows, labels, status pills) —
unchanged from the rest of the site. No new display font. Type scale per
`v2-orbital-journey.md`: `v2-display` 66–78, `v2-h2` 48, `v2-h3` 30,
`v2-h4` 20, body 17, labels 13. Nothing below 12px; nothing below 14px for
prose; mobile body never below 16px.

## 8. Color roles

All tokens map to the existing approved brand palette
(`_shared/references/brand-system.md`) — no new arbitrary hex values:

- Earth atmosphere / accent glow: Flutter Cyan (`--v2-earth-atmosphere`)
- Earth landmass: FinTech Green (`--v2-earth-land`)
- Earth ocean/body: Navy 600/700 (`--v2-earth-ocean` / `--v2-earth-deep`)
- Moon: neutral Slate Gray / Graphite (`--v2-moon-surface` / `--v2-moon-shadow`)
- Mars accent (sparing): Premium Burgundy (`--v2-mars`)
- Jupiter / Sun glow (sparing): Sketch Gold (`--v2-sun-glow`)
- Stars/particles: Soft White / Muted Lavender (`--v2-star`, `--v2-star-dim`,
  `--v2-particle`)
- Primary actions/links: Tech Blue
- AI-specific tags: AI Purple (scoped to AI content only)

## 9. Density and spacing character

Generous vertical rhythm (`py-20/28`) so each celestial body has room to read
before the next section begins.

## 10. Motion character

Slow and continuous, never sudden: planet rotation and particle drift driven
by `useFrame`, camera position interpolated from scroll progress via a passive
`requestAnimationFrame` scroll handler. **Fully static under
`prefers-reduced-motion: reduce`** (camera fixed, no rotation, no drift) and
on mobile ≤1024px (static camera; the scene is decorative there). All
animation pauses when `document.hidden`. No scroll-jacking; native scroll
only.

## 11. Image/media direction

Celestial bodies use the 2K planet textures already in `public/textures/`
(Earth daymap, Moon, Mars, Jupiter, Saturn + ring, Neptune, Sun). Project
cards keep using real, verified screenshots from `content/projects.ts`. No
invented imagery.

## 12. What this version must not resemble

Cartoon/childish space clip-art, sci-fi game UI, literal NASA mission-control
cosplay, gaming HUD elements, Matrix/terminal effects, fake live data, or
V4's mobile-product hero. Section copy uses real names (About, Experience,
Projects, Articles, Capabilities, Contact) — the space metaphor lives in the
3D scene and planet labels, not in mission/transmission/signal jargon.

## 13. Technical/accessibility constraints

- One shared content source (`content/`) — no invented metrics, testimonials,
  or employers; `profile.proof.*` numbers are verified.
- The R3F `<Canvas>` wrapper is `aria-hidden`, `pointer-events-none`, and
  `position: fixed` — never intercepts input, never affects layout/scroll.
- Camera scroll binding uses measured section offsets (runtime), so it never
  desyncs from content; passive listener only.
- Staged texture loading via `SceneManager` (Earth first, then Moon/Mars, then
  Jupiter/Neptune, then Saturn/Sun) — no `<Preload all>`.
- Planet rotation and camera animation are gated by `prefers-reduced-motion`
  and `document.hidden` — reduced-motion yields **zero** animated elements.
- Keyboard-operable nav, mobile drawer with focus handling, 44px touch
  targets, AA contrast maintained against the deep-space background (panels
  exist so text never lands directly on a lit planet).
- `/v2/projects` and `/v2/articles` use V2-only archive components; detail
  routes stay canonical (`/projects/[slug]`, `/articles/[slug]`).
- V1, V3, V4 files untouched; shared components extended, never rewritten.

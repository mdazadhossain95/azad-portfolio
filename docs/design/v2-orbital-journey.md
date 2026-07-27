# V2 — Orbital Journey (scale-up pass)

Supersedes the layout numbers in `v2-cosmic-gravity.md` and `v2-orbital-sweep.md`.
Content is unchanged: everything renders from `content/profile.ts`,
`content/experience.ts`, `content/projects.ts`, `content/skills.ts` and the MDX
article source. This pass changes scale, composition, motion and continuity only.

## 0. Audit of the shipped build

| # | Problem | Cause in code |
|---|---|---|
| 1 | Page reads narrow and small | `.v2-container` capped the content column at 1120; `--v2-display` capped at 66px; `v2-h2` at 52px |
| 2 | Planets decorative | Every body was 78–280px and absolutely placed *behind* content, never framing it |
| 3 | Planets flat | One shared radial gradient per body, no crater/band relief, glow-only lighting |
| 4 | Sections disconnected | Each section drew its own private `V2OrbitArc`; no shared spine |
| 5 | Experience = card list | `v2-experience-timeline.tsx` rendered 4 stacked full-width `v2-panel`s |
| 6 | Projects unbalanced | 3 equal `V2MissionDossier` slabs, alternating sides, `aspect-[16/10]` media |
| 7 | Articles/capabilities small | 300px and auto-height cards inside the narrow container |
| 8 | Contact flat | Beacon behind a normal 2-panel grid |
| 9 | Nav/meta text small | Nav 14px in a 64px bar, `v2-micro` 11px used on chips |
| 10 | Dead space | `py-40` gaps with only a nebula wash |

## 1. Global system

```text
Reference viewport   1440
Content container    1180  (max-width 1308 = 1180 + 2×64)
Wide container       1320  (max-width 1448)
Page padding         20 / 32 / 56 / 64   (mobile / md / lg / xl)
Grid                 12 col, 24 gap
Nav height           72
Readable paragraph   560–660
```

Type (desktop end of each clamp):

```text
v2-display  78    v2-h2  48    v2-h3  30    v2-h4  20
v2-body-l   18    v2-body 17   v2-body-s 15
v2-label    13    v2-micro 12  chip 12 / 30px tall
button      48 (primary/secondary), 40 (nav resume)
```

Nothing below 12px anywhere; nothing below 14px for prose.

Section rhythm: `padding-block: 120–150px`, no content-to-content gap above 160px.

Card surface (`.v2-panel`):

```css
background: rgba(11, 31, 58, 0.72);
border: 1px solid rgba(169, 184, 255, 0.14);
box-shadow: 0 18px 50px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(12px);
/* hover: translateY(-3px), border #2563EB @45%, 240ms */
```

Only the *active* item (experience waypoint, featured mission) gets a lit border.

## 2. The one journey path

`V2JourneyPath` is mounted once in `app/v2/layout.tsx`, fixed behind content,
`pointer-events-none`, `aria-hidden`. It is a single SVG path in a `0 0 100 1000`
viewBox stretched over the document, sweeping:

```text
Earth (top right) → Moon (left) → Mars (right) → Jupiter (left)
→ Deep space (centre) → Saturn (right) → Beacon (centre bottom)
```

Two strokes on the same geometry, `pathLength="1"`:

```text
base      stroke rgba(169,184,255,.18)  width 1
travelled stroke url(#journey-gradient) width 1.5
          stroke-dasharray: 1
          stroke-dashoffset: calc(1 - var(--v2-progress))
```

`--v2-progress` (0–1 scroll fraction) moves from the rail component onto
`documentElement`, so path, rail and section accents all read the same value.
Gradient stops: `#38BDF8 → #2563EB → #8B5CF6 → #D4A62A`, so the light warms as
the journey approaches the sun. Under `prefers-reduced-motion` the travelled
stroke is drawn at full length with no scroll binding.

## 3. Section-by-section

### 01 Hero — Earth orbit

```text
min-height 900 (lg)          grid 12
copy  cols 1–6, max 620      earth cols 6–12
Earth Ø 880, centre (1160, 400) at 1440 → 60% visible, crosses the right edge
annotations: 3 max — current location, next destination, arrival vector
```

Earth keeps its cloud layer, night lights and terminator, gains a sharper
atmospheric rim and an equator-aligned specular. Sun direction fixed at
**upper-right, 15° above the horizon** — every other body in the page obeys it.

### 02 About — Moon identity

```text
min-height 820               grid 12
moon  cols 1–4, Ø 440, cropped ~28% past the left edge
copy  cols 6–12, heading 600, body 620, stack list 2 col / 14 gap
gap between moon and copy: 80
```

Moon gains a 5-layer crater field, a mare wash, a hard lit limb on the
upper-right and a soft earthshine on the dark side.

### 03 Experience — Mars trajectory

```text
min-height 1000
trajectory: full container width, 560 tall, curved SVG toward Mars
4 waypoints (from content/experience.ts, chronological, oldest → newest)
active node Ø 18 + 40 glow; inactive Ø 9
panel 520 wide, 28 padding, docked below the curve
Mars Ø 460, centre (1330, 520) → ~45% visible past the right edge
```

Activation: click/keyboard on a waypoint, plus scroll-position default. The path
between the first waypoint and the active one is drawn in `#2563EB`; the rest is
the dim rail. Mars shifts 12px deeper when the active index changes.

Below `lg`, and under reduced motion, the same data renders as an ordinary
ordered list of role entries — no curve, no interaction required.

### 04 Projects — Jupiter missions

```text
grid 12, gap 24
featured  cols 1–7   height 540, media 320, padding 28
support   cols 8–12  height 248 each, gap 24, padding 22
Jupiter Ø 640, centre (-150, 560) → ~38% visible past the left edge
```

Media frame is standardised: fixed height, `object-cover`, a navy inner frame
and a consistent 0 bleed, so a bright screenshot never dominates a dark one.
Titles 22px, description clamped to 3 lines, max 5 tags, one "View all
projects" link. Each card is one link — the moons are decoration, never the
only affordance.

### 05 Transmissions — deep space

```text
min-height 800, 3 columns, gap 24, card 360 tall, padding 24
card: transmission no. · topic · date · reading time · title 21 · excerpt 15
      · signal trace · read action
Neptune Ø 380 at (1290, 240), soft — a distant body, deliberately low detail
```

Reading time is computed from the article's own body text (200 wpm), not
authored. Violet environment (`#8B5CF6` at low alpha) separates it from the
blue project section.

### 06 Capabilities — Saturn systems

```text
3 columns, gap 24, card min-height 170, padding 24, last card spans 3
label 12 · heading 20 · chips 12 / 30 tall
Saturn Ø 720 incl. rings, centre (1300, 430) → ~35% visible
connector lines drawn in the card's top-right quadrant only, never behind text
```

### 07 Contact — solar destination

```text
min-height 900, padding-top 140, padding-bottom 180
grid: left CTA cols 1–6, right channels cols 7–12, gap 32
panel min-height 360, padding 32
one primary button (email); Upwork demoted to an outline link
sunrise horizon + beacon behind the panels, capped at 40% opacity under content
```

## 4. Responsive

| | Tablet (768–1023) | Mobile (<768) |
|---|---|---|
| Padding | 32 | 20 |
| Display | 56 | 44 |
| H2 | 40 | 34 |
| Planets | −30% scale | one body per section, static |
| Experience | vertical list | vertical list |
| Projects | featured + 2 col | stacked |
| Articles | 2 col | stacked |
| Capabilities | 2 col | stacked |
| Section padding | 96 | 80 |

No horizontal overflow at any width; all planet layers live inside
`overflow-hidden` sections.

## 5. Reduced motion / no-JS

- Journey path draws statically at full length.
- No planet rotation, no cloud drift, no parallax, no twinkle.
- Reveals resolve to their final state.
- Experience renders the full list with every role expanded.
- Every route stays a real `<a>`/`<Link>`; nothing depends on canvas or JS.

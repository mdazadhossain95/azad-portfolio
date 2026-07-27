# V2 — Orbital Sweep — Design Specification

Supersedes the composition notes in `v2-cosmic-gravity.md`. The version
identity (immersive space / gravity / Earth) is unchanged; this document
replaces the layout, motion, and interaction model with a specified one.

Reference viewport: **1440 × 900**. Content column **1120**. Wide content
**1280**. Page padding **64**. All numbers below are CSS pixels at that
viewport unless a breakpoint is named.

---

## Part 1 — Direction exploration

Three directions were developed. All three use the same content tree
(`content/profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`,
`content/articles/*.mdx`). None introduce new claims, metrics, or copy
beyond interface labels.

### Direction A — Orbital Descent

Scroll is altitude. The visitor starts at high orbit and descends until
touchdown at contact.

| Question | Answer |
|---|---|
| Entry | Earth fills the upper viewport, seen from far orbit |
| Earth | Fixed backdrop that scales and translates with scroll progress |
| Travel | Continuous descent; a left rail reads altitude and section ticks |
| Planets ↔ sections | Bodies pass the viewport as altitude bands are crossed |
| Projects | Orbital platforms — wide slabs, alternating sides |
| Articles | Transmission log, monospace list |
| Experience | Descent markers, one per role, oldest highest |
| Capabilities | Constellation panel at low orbit |
| Contact | Atmosphere entry → ground lights → horizon |
| Desktop / mobile | Rail collapses to a 3px progress bar; Earth becomes a top arc |
| Professionalism | Reading column never moves; only the backdrop responds |
| Not-a-decorated-website | The page has a physical position that changes |

Risk: scroll-linked scaling of a large element is the most expensive thing
on the page and the easiest to make feel gimmicky. "Altitude" readouts are
invented numbers — legible as a metaphor, but the brief is strict about
invented data.

### Direction B — Orbital Sweep (selected)

One trajectory is drawn through the entire page. Every section is a
station docked to that trajectory. A craft marker travels the trajectory
in sync with scroll position.

| Question | Answer |
|---|---|
| Entry | Earth limb enters from the right, large enough to leave the viewport; the trajectory launches off it and runs down the page |
| Earth | Hero anchor, lit from off-screen upper-right so the visible limb is night side — city lights, terminator, bright atmospheric rim |
| Travel | A fixed left rail (the trajectory readout) with six station nodes; the craft dot moves as the visitor scrolls. No scroll-jacking — the rail reports position, it never takes control |
| Planets ↔ sections | One body per station: Moon/About, Mars/Experience, Jupiter/Missions, satellite/Transmissions, Saturn/Capabilities, beacon/Contact |
| Projects | Mission dossiers: full-width slabs, alternating image side, with the project's own `gallery` images cross-fading |
| Articles | Signal buoys docked to the trajectory — three cards with a signal trace drawn from each article's position |
| Experience | Trajectory segments; each role is a station node on the spine with its panel to the right |
| Capabilities | Star chart — one constellation per skill cluster, node count derived from the number of tools in it |
| Contact | The trajectory terminates: beacon on the horizon, Earth curve closing the loop the hero opened |
| Desktop / mobile | Rail → header progress bar; the trajectory spine moves to the left edge; slabs stack image-over-text |
| Professionalism | Content lives in flat instrument panels with real type hierarchy; the celestial layer is always behind, never in front |
| Not-a-decorated-website | The trajectory is one continuous object across the whole document — sections are positions on it, not stacked blocks |

### Direction C — Observation Deck

The visitor is on a station. Content sits in glass panels docked to a
window frame; Earth rotates outside the window; bodies drift past.

| Question | Answer |
|---|---|
| Entry | Window frame resolves, Earth outside |
| Earth | Rotating body seen through a fixed aperture |
| Travel | The window's view changes per section; content panels slide in |
| Planets ↔ sections | Each section brings a different body into the aperture |
| Projects | Exhibits mounted along the deck |
| Articles | Log terminal |
| Experience | Service record panel |
| Capabilities | Systems board |
| Contact | Comms station |
| Desktop / mobile | Aperture becomes a top viewport strip |
| Professionalism | Strong frame discipline, everything aligned to the deck structure |
| Not-a-decorated-website | The chrome itself is the environment |

Risk: this is the direction the version brief explicitly forbids — glass
panels over a live window drift toward gaming HUD and mission-control
cosplay, and translucent panels over a moving backdrop cost contrast on
exactly the text that has to stay readable.

### Selection: Direction B — Orbital Sweep

Reasons, in order of weight:

1. **It makes the journey structural, not decorative.** The single
   complaint about the current V2 is that it reads as sections with
   planets next to them. A trajectory that exists at document scale, with
   sections docked to it, fixes that at the composition level rather than
   by adding more space art.
2. **It survives long content.** This portfolio has 13 projects, 4 roles,
   7 skill clusters, and 5 articles, and the archive pages are long. A
   descent metaphor (A) breaks down over a 5000px archive; a trajectory
   with stations extends indefinitely.
3. **It costs almost nothing to run.** One SVG spine, one scroll-linked
   custom property, transform/opacity only. Direction A's scaling Earth is
   the opposite.
4. **It keeps the reading column still.** The left column never moves,
   which is what lets the page stay credible to a hiring manager while the
   right side carries the ambition.
5. **It uses assets that already exist.** Mission dossiers consume
   `project.gallery` — 32 real screenshots currently unused by V2.

---

## Part 2 — Pixel specification

### 2.1 Grid

```
Viewport               1440
Page padding           64      (each side)
Content column         1120    (x = 160 → 1280)
Wide content           1280    (x = 80 → 1360)
Columns                12 × 64
Gutter                 32
Column origin          col n starts at 160 + (n − 1) × 96
```

12 × 64 + 11 × 32 = 1120 exactly. No fractional columns.

Spacing scale (8px base): `4 8 12 16 24 32 48 64 96 128 160 240`.

Section rhythm: `padding-block: 160`. Hero and contact are exceptions
(below).

### 2.2 Type scale

Sora for everything except labels; Space Mono for labels. Two families
total, unchanged from the rest of the site.

| Role | Size / line-height / tracking | Use |
|---|---|---|
| Display | 66 / 1.06 / −0.02em | Hero H1 only |
| H2 | 52 / 1.10 / −0.015em | Section titles |
| H3 | 28 / 1.25 / −0.01em | Dossier titles |
| H4 | 21 / 1.30 | Card titles |
| Body L | 18 / 1.75 | Section intros, bio |
| Body | 17 / 1.75 | Card copy, bullets |
| Body S | 15 / 1.60 | Meta lines |
| Label | Mono 12 / 1.4 / 0.14em, uppercase | Eyebrows, station IDs |
| Micro | Mono 11 / 1.3 / 0.16em, uppercase | Status pills, coordinates |

Mobile: Display 40, H2 32, H3 24, Body stays 17 (never below 16).

### 2.3 Color roles

All existing `--v2-*` tokens stand. Additions:

```
--v2-rail            rgba(169,184,255,0.20)   trajectory hairline
--v2-rail-live       #38BDF8                  travelled portion + craft
--v2-station         rgba(169,184,255,0.45)   unreached station node
```

### 2.4 Persistent chrome

**Header** — sticky, height 72, `backdrop-filter: blur(20px)`, background
`color-mix(in srgb, var(--bg-deep) 82%, transparent)`, bottom border 1px
`--v2-panel-edge`.

```
x=160   logo mark 24×24 + wordmark, mono 16, tracking 0.10em
center  6 nav items, gap 4, padding 10/12, size 14
        station number: mono 11, cyan when active (≥1280 only)
        active underline: 2px, inset 12, cyan, transform-origin left
x=1280  archive links (≥1280) + Resume button, height 36
bottom  scroll progress: 2px cyan line, width = document progress
```

**Trajectory rail** — fixed, left edge, `≥1280` only.

```
x            64 (page padding line)
y            top 176 → bottom 176
width        24  (hit area), hairline 1px centred
hairline     --v2-rail; travelled portion --v2-rail-live
stations     6 nodes, 9px ring, 2px border
             unreached --v2-station · current cyan filled, 3px halo
craft        7px cyan dot, travels the hairline with scroll progress
label        current station name, mono 11, rotated −90°, x=40
```

The rail is `aria-hidden` decoration and duplicates the header nav; it
never becomes the only route to a section.

### 2.5 Hero

Height: `min-height: 828` (900 − header). Padding: top 96, bottom 120.

```
Earth limb     Ø1240, centre (1560, 300) — enters from the right,
               ~44% of the disc visible
Atmosphere     1px rim, cyan 55%; inset glow 40px −4px cyan 75%
Terminator     radial from (74%, 26%): clear → 0.82 alpha at 74%
City lights    64px tile, gold, masked to the night side only
Moon           Ø124, centre (84, 232), lit from the right
Jupiter        Ø78,  centre (1340, 194)
Mars           Ø96,  centre (76, 760)
Orbit arcs     1400×900 at (1094, 138); 900×520 at (1296, 314)
Satellite      92 wide at (662, 588)

Eyebrow        x=160  y=168   label, cyan, 6px twinkling dot
H1             x=160  y=200   Display, 3 lines, max-width 832 (cols 1–9)
Body           x=160  y=470   Body L, max-width 544 (cols 1–6)
CTAs           x=160  y=576   height 52; primary 190 wide, gap 16
Mission panel  x=160  y=676   544 × 156, padding 24, radius 14
               row 1: "MISSION STATUS" label + availability pill
               row 2: 4 stats, 17 label / 24 value
Waypoints      x=940–1280, 5 chips 208 × 64, y = 180 / 300 / 420 / 540 / 660
               docked to the arcs; real links; ≥1280 only
```

### 2.6 About — Moon

`padding-block: 160`. Nebula field tone: blue.

```
Moon      Ø360, centre (364, section centre) — cols 1–4
Text      x=640 → 1280 (cols 6–12), width 640
          label "01 / IDENTITY" → H2 → 2 bio paragraphs, Body L
Stack     2-col list, 8 items, row height 32, 6px cyan dot, gap 24
```

### 2.7 Experience — trajectory segment

```
Spine     x=160, 1px, gradient cyan → rail → transparent
Nodes     19px ring at x=160, aligned to each panel's top + 26
Panels    x=224 → 1280 (1056 wide), padding 32, radius 14, gap 48
          line 1: station number (mono 12) · company (21) · period (12)
          line 2: role, cyan 17 · location, muted
          bullets: Body 17, 1.75, 4px cyan dot at 11px offset
          tech chips: mono 12, height 26, padding 0 10, radius 6
Mars      Ø220, centre (1400, section top + 180) — bleeds off the right
```

### 2.8 Missions — dossiers

Section head: label / H2 / Body L in cols 1–7; "All 13 missions" button
right-aligned to x=1280, baseline-aligned with the H2's last line.

Three featured dossiers, full 1120 wide, height 420, gap 48, alternating:

```
odd   media x=160  → 752 (592 wide) · copy x=784 → 1280 (496)
even  copy  x=160  → 656 (496)      · media x=688 → 1280 (592)

Media    aspect 592×420, radius 14, 1px edge
         gallery images cross-fade, 3.5s hold, 700ms fade
         behind the image: gradient + platform label, so a slow or
         missing asset never renders as an empty rectangle
         dot indicators, 6px, bottom-right, 16 inset
Copy     station ID + status pill (mono 11, height 22)
         H3 title, link, stretched over the whole dossier
         role · company, Body S
         summary, Body 17, max-width 440
         6 tech chips
         footer row: "Open transmission →" + store links (Body S)
Jupiter  Ø260, centre (60, section top + 220) — bleeds off the left
```

Archive gateway strip below: 1120 × 160, radius 14, orbit arcs at the
right, "13 missions across four domains" H4 + Body + arrow link.

### 2.9 Transmissions — articles

```
Cards     3 × 352, gap 32, height 300, padding 24
          station ID (mono 12) + topic chip, right-aligned
          signal trace: 352 × 40 SVG, amplitude varies per index
          H4 title (stretched link), Body 17 preview
          footer: date (mono 12) + "Read →"
Satellite 110 wide at (1290, section top + 120)
Moon      Ø120 at (−56, section centre), 0.5 opacity
```

Section head matches Missions; "All articles" button right-aligned.

### 2.10 Capabilities — star chart

```
Saturn    Ø200 + ring (ring 420 wide, −16° tilt), centre (1400, top+180)
Panels    3 columns × 352, gap 32, padding 24, radius 14
          constellation: polyline through n nodes where n = tool count,
          0.4 stroke, 40% opacity, clipped to the panel
          "CLUSTER 0n" label (cyan; AI Purple for the AI cluster only)
          H4 category, then tool chips
Last row  the trailing panel spans the leftover columns, so no card is
          ever stranded beside empty space
```

### 2.11 Contact — destination

`padding-top: 160; padding-bottom: 320` (the horizon needs the room).

```
Head      label "06 / DESTINATION REACHED" (gold) → H2 → Body L, cols 1–7
Panels    left  x=160 → 608 (448): pitch + 3-item list + 2 CTAs
          right x=640 → 1280 (640): 6 contact rows, 56 tall, divided 1px
Beacon    Ø160, centre (720, section bottom − 260)
          core Ø60 gold, two expanding rings, 5s, 1.6s offset
Horizon   ellipse 2200 × 620, centre x=720, top edge at bottom − 120
          1px gold-tinted top edge, upward glow 90px
```

### 2.12 Archives

`/v2/projects` and `/v2/articles` keep the same header, rail, starfield,
and type scale. Per domain: heading + sector coordinate on one baseline,
then a grid whose split is chosen so rows always fill — a lead card is
promoted to the wide dossier variant whenever that makes the remaining
cards divide evenly.

### 2.13 Motion

| Element | Spec |
|---|---|
| Craft on rail | `translateY` driven by `--v2-progress`, updated in a `requestAnimationFrame` scroll handler, passive listener |
| Section reveal | opacity 0→1, `translateY(16px)`→0, 600ms `cubic-bezier(.22,1,.36,1)`, IntersectionObserver, once, 60ms stagger |
| Planet rotation | 240s linear; clouds 300s reverse |
| Star twinkle | 5s ease-in-out, offset per star |
| Parallax fields | 110s / 180s linear |
| Gallery | 3.5s hold, 700ms cross-fade; pauses on hover, on focus-within, and when `document.hidden` |
| Panel hover | `translateY(-3px)`, cyan border 45%, 200ms |
| Beacon | 5s ease-out, two rings, 1.6s offset |

Under `prefers-reduced-motion: reduce`: every animation above is removed,
the gallery holds its first frame, reveals resolve immediately, and the
craft snaps rather than eases. Verified target: **zero** animated
elements.

### 2.14 Breakpoints

| Width | Behaviour |
|---|---|
| 1920 | Content stays 1120, centred; celestial layer widens |
| 1440 | Reference |
| 1280 | Rail, waypoints, station numbers, archive links all appear at this width and above |
| 1024 | Rail hidden; nav loses numbers and archive links; dossiers keep two columns; Earth Ø900 |
| 768 | Dossiers stack (media 16/10 above copy); capabilities 2-col; Earth arcs from the top-right |
| 390 | Single column, padding 20; Display 40; header progress bar replaces the rail; decorative bodies reduced to Earth arc + one accent |
| 320 | Same as 390 with 16 padding; no horizontal scroll |

### 2.14b Deviations found during implementation

Two numbers in the first draft of this spec did not survive the real type:

- **Display 76 → 66.** At 76px, "survive the vacuum." measures ~720px and
  cannot hold one line in any headline column that also leaves the
  waypoints their space.
- **Headline column 640 → 832 (cols 1–9).** Even at 66px the headline needs
  832 to land on three lines. The body paragraph stays at 544, so the
  reading measure is unaffected — only the headline is wider.

The container also carries the 64px page padding inside its `max-width`
(1248, not 1120), which is what makes the inner column measure exactly 1120
at the reference viewport. Measured: 1120.

### 2.15 Non-negotiables

- One content source. No invented metrics, testimonials, or product names.
- Celestial layers are `aria-hidden` and `pointer-events-none`, always.
- Body copy never below 16px on any breakpoint.
- Interactive targets ≥44px on touch widths.
- Contrast ≥4.5:1 for body text against whatever sits behind it — panels
  exist so text never lands directly on a lit planet.
- No WebGL, no scroll-jacking, no blocking loader.
- V1, V3, and V4 files are not touched; shared components used by other
  versions are extended, never rewritten in place.

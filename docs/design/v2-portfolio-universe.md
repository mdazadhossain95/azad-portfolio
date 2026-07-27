# V2 Portfolio Universe — Creative Direction and Journey

## Decision context

Audience: engineering leaders, recruiters and clients evaluating both production
engineering credibility and creative-frontend range. Primary action: start a
conversation; secondary actions: inspect selected work and articles. Route:
`/v2`. Tone: cinematic, precise, credible.

## Direction A — Galactic Descent (selected)

- **Narrative:** begin outside the Milky Way, descend through one spiral arm,
  discover the Solar System, then visit one portfolio destination at a time.
- **Opening:** a dimensional four-arm point-cloud galaxy with a restrained warm
  core, distant stars and a visible route toward Earth.
- **Camera:** forward curved travel; every destination has approach, stationary
  reading and departure states. Native vertical scroll is the only authority.
- **Earth:** large draggable orbital limb on the right, semantic Hero on left.
- **Mapping:** Moon/About, Mars/Experience, Jupiter/Projects,
  Neptune/Articles, Saturn/Capabilities, solar horizon/Contact.
- **Projects:** one landscape feature plus two compact supporting missions.
- **Articles:** equal-height transmission panels with restrained waveforms.
- **Experience:** one readable panel controlled by visible chronological nodes.
- **Capabilities:** semantic system modules framed by Saturn’s rings.
- **Ending:** one small solar source below a dark horizon.
- **Desktop:** full fly-through and local planet motion.
- **Tablet:** shorter destination changes, reduced scale and particles.
- **Mobile:** normal scrolling, parked destination compositions, stacked HTML.
- **Cost:** medium-high GPU; controlled through staged textures, points and DPR.
- **Accessibility risk:** motion and canvas failure; mitigated with semantic HTML,
  reduced motion, skip control and static artwork.
- **Feasibility:** high with the existing R3F/GSAP foundation.
- **Originality:** the portfolio is discovered by physically descending through
  scale, rather than placing isolated planets behind ordinary sections.

## Direction B — Orbital Archive

- **Narrative:** the visitor stays inside a single Solar System and opens
  orbital records around one central Sun.
- **Opening:** an abstract system diagram rather than a galaxy.
- **Camera:** restrained lateral orbital arcs with little forward motion.
- **Earth:** central, inspectable globe; destinations orbit around it.
- **Sections:** content appears as anchored orbital records.
- **Projects/articles:** satellite clusters and radio records.
- **Experience/capabilities:** concentric timelines and system rings.
- **Ending:** return to the central Sun.
- **Responsive:** excellent because the system can flatten into a vertical map.
- **Cost/risk:** lower GPU cost and motion risk, but weaker sense of scale and
  more likely to resemble a polished dashboard.
- **Fit:** technically credible, less memorable than Direction A.

## Direction C — Signals Beyond Earth

- **Narrative:** Earth sends a communication pulse into deep space; each
  destination is discovered when the pulse reaches it.
- **Opening:** Earth-first, no Milky Way overview.
- **Camera:** mostly stationary; signal waves trigger environmental changes.
- **Projects/articles:** strongest presentation through mission signals and
  transmissions.
- **Experience/capabilities:** timelines and networks respond to the pulse.
- **Ending:** the pulse reaches a solar beacon and returns.
- **Responsive:** strongest mobile behavior and lowest motion risk.
- **Cost:** medium; shader-heavy but fewer large camera moves.
- **Risk:** repeated signal animation can become decorative and articles can
  dominate the identity.
- **Fit:** elegant, but does not satisfy the desired universe-scale arrival.

## Evaluation

| Criterion | Galactic Descent | Orbital Archive | Signals Beyond Earth |
|---|---:|---:|---:|
| Visual impact | 5 | 3 | 4 |
| Professional credibility | 4 | 5 | 4 |
| Readability | 4 | 5 | 4 |
| Mobile usability | 4 | 5 | 5 |
| Performance | 3 | 5 | 4 |
| Accessibility | 4 | 5 | 4 |
| Maintainability | 4 | 5 | 4 |
| Repository compatibility | 5 | 4 | 4 |

Galactic Descent is selected because it creates the strongest difference from
V1, V3 and V4 while retaining stable semantic reading states.

## Camera and safe-zone contract

The single ScrollTrigger controller measures real section bounds. Each scene
interpolates `approach → reading → departure`; reading states hold the camera.
Desktop alternates protected zones:

- left content: HTML 6–48%, 3D 52–110%;
- right content: 3D -10–48%, HTML 52–94%.

The journey line fades to zero during every reading state. Tablet and mobile
use each destination’s reading camera without travel interpolation. Mobile
planets are reduced and shifted below the primary copy.

## Responsive skeleton

```text
DESKTOP
[identity]                         [navigation + resume]
[semantic copy 6–48%]              [dominant 3D body 52–110%]
[stable content panel]             [travel only between sections]

TABLET
[identity]                                      [menu]
[full-width semantic copy]
[compact proof/content]
                                  [cropped destination below]

MOBILE
[identity]                                      [menu]
[semantic copy and actions]
[reserved celestial beat]
[stacked content]
```

## Technical constraints

One persistent canvas, no scroll locking, GSAP ScrollTrigger as the sole
camera-progress authority, `useFrame` only for local motion, staged loading,
semantic HTML, keyboard controls, static fallback, reduced motion, and no V4
changes. External work is used only as study unless explicitly listed in
`ATTRIBUTION.md`.
# Search indexing strategy

V4 at `/` remains the single indexable canonical portfolio. V2 is a
content-equivalent alternate presentation, so it intentionally uses
`noindex, follow` and points its canonical URL to `/`. Shared project and
article detail routes remain canonical at their unversioned URLs. This avoids
four competing indexed copies while allowing search engines to follow every
real project and article link exposed by V2.

## Earth and journey refinement brief

- Audience: recruiters and clients evaluating frontend and product-engineering depth.
- Primary action: continue into the work without learning game controls.
- Tone: cinematic, credible, tactile.
- Signature: a recognizable Earth that responds to drag and wheel input while
  ordinary vertical scrolling visibly carries the camera between destinations.
- Composition: readable HTML remains in its protected column; Earth retains the
  opposite visual field with a thinner, light-aware atmosphere.
- Motion: ScrollTrigger authors only journey progress. R3F applies damped camera
  position, target rotation, and FOV per frame. Reduced motion jumps directly.
- Interaction: dragging rotates Earth; a wheel gesture over Earth adds restrained
  globe rotation but never cancels or hijacks normal page scrolling.
- Location marker: a small city-level beacon is anchored near Chattogram on the
  Earth surface. It rotates and occludes with the globe, uses the existing
  verified profile location, and remains supplementary to the semantic Hero
  location label. It must never imply an exact home or live GPS position.
- Constraints: no new dependency, no V4 edits, no scroll locking, no essential
  information in WebGL, and no increase to the initial performance payload.

## V2 entry chapter — creative-direction decision

### Brief

- **Audience:** recruiters, engineering leaders and clients arriving at `/v2`.
- **Job:** acknowledge real critical-asset loading while establishing the
  universe narrative, then hand off cleanly to the existing interactive Earth.
- **Message:** `WELCOME TO MY UNIVERSE` / `Please hold on while the gateway opens.`
- **Constraints:** V2 only; no copied artwork; no audio; no scroll trap; no fake
  completion; no later planet assets in the critical path; Hero HTML remains in
  the document; the verified Earth location pin remains untouched.

### Concept 1 — Cosmic Gateway

- A quiet Milky Way sits behind a central event horizon; its accretion disk
  becomes a literal doorway. Statuses move from navigation initialization to
  Earth orbit. A scanning orbital arc reflects readiness, followed by one short
  final push into the center.
- Returning visitors see only gateway activation; mobile removes lensing;
  reduced motion uses a crossfade. CSS/SVG compositing keeps cost low-medium.
- **Strength:** clearest portal story. **Weakness:** the galaxy can feel like
  scenery rather than part of the transformation.

### Concept 2 — Universe Aligning

- Scattered stars resolve into a galactic coordinate map whose paths converge
  on one anomaly. Real readiness resolves nodes and the final coordinate becomes
  Earth’s atmosphere. The view remains calm.
- It is excellent on mobile and reduced motion and has the lowest GPU cost.
- **Strength:** elegant, accessible and maintainable. **Weakness:** it risks
  resembling a product-data visualization rather than a cinematic opening.

### Concept 3 — Gravity Journey

- The viewer travels through a star tunnel while a distant black hole grows and
  bends the field. A trajectory marker progresses from deep space through the
  event horizon to Earth orbit.
- It needs dense canvas particles and a separate reduced-motion treatment.
- **Strength:** strongest travel sensation. **Weakness:** highest LCP, mobile
  FPS and vestibular-comfort risk.

### Weighted evaluation

Weights: visual impact 16%, Earth transition 14%, performance 13%,
professional credibility 12%, V2 connection 12%, smoothness 10%,
accessibility/motion comfort 10%, mobile 6%, feasibility 4%, maintainability 3%.

| Criterion | Gateway | Aligning | Gravity |
|---|---:|---:|---:|
| Visual impact | 8.6 | 8.0 | 9.2 |
| Earth transition | 9.0 | 8.2 | 9.1 |
| Performance | 8.4 | 9.3 | 6.4 |
| Professional credibility | 8.5 | 9.0 | 7.8 |
| V2 connection | 8.7 | 9.1 | 8.5 |
| Smoothness | 8.5 | 9.0 | 7.0 |
| Accessibility / comfort | 8.0 | 9.2 | 5.8 |
| Mobile | 8.1 | 9.1 | 6.0 |
| Feasibility | 9.1 | 9.0 | 6.8 |
| Maintainability | 8.8 | 9.1 | 6.2 |
| **Weighted score** | **8.55** | **8.76** | **7.72** |

Concept 2 clears 8.5, but makes the required black-hole climax secondary. A
fourth concept better satisfies the complete brief.

### Concept 4 — Event Horizon: Signal to Orbit (selected)

- **Narrative:** a dim asymmetric Milky Way wakes behind navigational dust. One
  blue coordinate pulse reveals an anomaly. A restrained white-blue-violet
  accretion disk forms in layers, draws nearby starlight inward, then becomes
  Earth’s atmospheric limb.
- **Copy/statuses:** `WELCOME TO MY UNIVERSE`; `Please hold on while the gateway
  opens.`; awaken star field → map Milky Way → align coordinates → gateway
  detected → open gateway → approach horizon → Earth orbit ready.
- **Composition:** text remains in the left safe zone; the galaxy is a broad
  oblique band; the black hole occupies the right/central visual zone. No path
  crosses the copy.
- **Progress:** real weighted readiness drives one incomplete navigation arc,
  one node and a numeric value. It is an instrument, not a spinner.
- **Movement/sound:** local star drift, slow disk rotation and one brief final
  portal expansion; no shake, flash, prolonged darkness or audio.
- **Handoff:** the expanding event horizon masks a same-position Earth poster;
  the live Earth becomes interactive beneath it without a duplicate globe.
- **Visits/modes:** first visit exposes every real phase; a session return
  starts with the formed gateway. Skip uses the poster while assets continue.
  Lightweight mode selects the existing static universe. Mobile uses fewer
  stars; reduced motion uses a static gateway and crossfade.
- **Architecture:** server-rendered page plus a client overlay; CSS/SVG visual;
  a small readiness store receives WebGL/Earth signals; no second WebGL context,
  effect composer, dependency or copied asset.
- **Cost/risk:** low-medium compositing cost. Excessive bloom and loader
  dominance are prevented by scoped opacity, timeout and immediate skip.
- **Weighted score:** **9.08/10**.

### Entry wireframes

```text
DESKTOP
+---------------------------------------------------------------+
| WELCOME TO MY UNIVERSE                 [asymmetric galaxy]     |
| Please hold on...                   (( accretion disk ))       |
| GATEWAY DETECTED       64%               [event horizon]       |
| [skip] [lightweight]                  orbital progress arc     |
+---------------------------------------------------------------+

MOBILE
+-------------------------------+
| WELCOME TO MY UNIVERSE        |
| Please hold on...             |
|       (( black hole ))        |
|          64%                  |
| GATEWAY DETECTED              |
| [skip] [lightweight]          |
+-------------------------------+
```

The overlay is never the information architecture. Header, Hero and section
HTML remain mounted beneath it. It replaces the former standalone intro section
so the page does not play two introductions or create a late Hero LCP. At
completion it is removed from the DOM and Earth is already the first section.

### Visitor spacecraft refinement

The entry uses one small, unbranded space pod as a narrative cursor: it
represents the visitor, not Azad or a fictional mission. It enters after the
star field, follows a restrained diagonal path toward the event horizon, and
disappears before the Earth handoff. It is inline SVG rather than a model, has
no interaction or semantic meaning, adds no request, and remains static in
reduced-motion mode. The design must read as a compact technical vehicle—not an
airplane, cartoon rocket, mascot or game HUD.

```text
Desktop: welcome copy | pod -----> layered event horizon
Mobile:  welcome copy
                 pod --> gateway
```

## V2 entry redesign — Autonomous Orbital Survey

This decision supersedes the black-hole gateway and visitor spacecraft above.
Both have been removed from the implemented entry.

### Research synthesis

- NASA/JPL Ranger demonstrates that a browser 3D experience can combine a
  scientific scene with a restrained HTML information layer and adapt from
  workstation to mobile hardware.
- Deep Space Network Now uses antenna, spacecraft and signal relationships to
  explain communication without turning the interface into a game.
- JPL robotics frames autonomous instruments as remote explorers. The useful
  principle is an instrument discovering a destination—not copying NASA
  missions, logos, telemetry, assets or interface styling.

No external code, shader, model, brand asset or artwork is reused.

### Three directions

1. **Autonomous Orbital Survey:** a robotic optical instrument calibrates,
   resolves the site’s Earth → Moon → Mars → Jupiter → Saturn route, acquires
   Earth and opens into the live Hero.
2. **Deep-Space Relay Handshake:** a quiet antenna array receives signals from
   the destinations until Earth confirms the session. Strong communication
   story, but too close to a telemetry dashboard and weakly connected to the
   visual act of entering the Hero.
3. **Mechanical Planetarium Assembly:** robotic arms assemble a miniature
   orrery before the Earth grows into the Hero. Memorable, but it adds many
   moving parts, implies false planetary scale and costs more on mobile.

| Criterion | Orbital survey | Relay handshake | Planetarium |
|---|---:|---:|---:|
| V2 narrative fit | 9.5 | 8.3 | 8.7 |
| Professional credibility | 9.2 | 8.8 | 8.1 |
| Originality | 9.0 | 8.2 | 8.9 |
| Earth handoff | 9.4 | 7.7 | 9.0 |
| Mobile / reduced motion | 9.0 | 9.1 | 6.8 |
| Performance | 9.1 | 9.3 | 6.7 |
| Accessibility | 9.2 | 8.8 | 7.4 |
| Maintainability | 9.2 | 8.7 | 6.9 |
| **Average** | **9.2** | **8.6** | **7.8** |

### Selected design brief

- **Audience:** recruiters, clients and engineers.
- **Job:** acknowledge critical readiness, establish the destinations and reveal
  the interactive Earth without becoming a second portfolio experience.
- **Story:** optics online → deep-space calibration → portfolio universe map →
  orbital route → Earth acquisition → aperture opens.
- **Signature:** a large segmented robotic aperture with two calibration rings,
  one optical scan and a curved map of the actual V2 destinations.
- **Copy:** `WELCOME TO MY UNIVERSE` and `Calibrating the observatory for your
  journey.`
- **Composition:** copy in the left safe zone; observatory on the right; route
  passes behind the instrument and never through copy.
- **Motion:** slow counter-rotating instrument rings, one scan beam and aperture
  blades that open only during Earth acquisition.
- **Handoff:** the Earth poster resolves inside the lens; the lens expands and
  the overlay crossfades to the same-position live Hero.
- **Controls:** immediate keyboard-accessible Skip Cosmic Entry; Lightweight
  Mode appears only after failure/slow readiness.
- **Semantics:** meaningful phase changes use a polite live region; real
  readiness remains available through a visually hidden progressbar. No visible
  percentage, spinner or progress bar.
- **First visit:** all phases are available but never artificially delay a fast
  load. `/v2?v2debug` preserves the 30-second inspection pacing.
- **Returning visit:** shortened already-calibrated acquisition.
- **Mobile:** smaller aperture, reduced route labels and no additional visual
  system.
- **Reduced motion:** static rings and scan; simple Earth crossfade.
- **Performance:** HTML/CSS/inline SVG only, one poster already used by the
  Hero, no new dependency, request, WebGL context or post-processing pass.
- **Constraints:** V2 only, shared content unchanged, no NASA branding, no fake
  telemetry, no fictional mission, no V4 changes.

```text
DESKTOP
+---------------------------------------------------------------+
| WELCOME TO MY UNIVERSE         Moon----Mars----Jupiter         |
| Calibrating the observatory       \       [OPTICAL ARRAY]      |
| OPTICAL ARRAY ONLINE               Earth [aperture + lens]     |
| [Skip cosmic entry]                          Saturn            |
+---------------------------------------------------------------+

MOBILE
+-------------------------------+
| WELCOME TO MY UNIVERSE        |
| Calibrating the observatory   |
| OPTICAL ARRAY ONLINE          |
|       [robotic aperture]      |
|       Earth ----- Mars        |
| [Skip cosmic entry]           |
+-------------------------------+
```

### Premium readiness rail refinement

The entry now exposes real readiness visually. Three low-cost treatments were
compared:

1. **Calibration rail (selected):** current phase and percentage share one row;
   a thin optical rail fills beneath them; a quiet `remaining` label provides
   honest expectation without inventing a time estimate.
2. **Aperture perimeter:** readiness illuminates ticks around the instrument.
   Visually integrated, but difficult to read and too close to a spinner.
3. **Vertical instrument index:** phases stack beside the observatory. Clear,
   but adds mission-control density and consumes mobile height.

| Criterion | Calibration rail | Perimeter | Vertical index |
|---|---:|---:|---:|
| Five-second clarity | 9.7 | 7.4 | 8.5 |
| V2 distinctiveness | 9.0 | 8.8 | 7.8 |
| Mobile viability | 9.3 | 7.8 | 6.9 |
| Accessibility | 9.6 | 7.2 | 8.7 |
| Performance | 9.8 | 8.9 | 9.4 |
| AI/game-HUD risk | 9.1 | 7.5 | 6.8 |

Design contract:

- **Audience/action:** visitors waiting to enter V2; understand readiness and
  optionally skip the entry.
- **Route:** `/v2` only.
- **Tone:** precise, calm, cinematic.
- **Signature:** robotic aperture plus a single luminous calibration rail.
- **Composition:** status left, numeric percentage right, rail below, remaining
  value as secondary metadata.
- **Typography:** existing Space Grotesk / Inter / JetBrains Mono hierarchy.
- **Color:** Tech Blue fill, white acquired endpoint, muted lavender instrument
  ticks, navy track.
- **Density:** one compact readout; no stack of fake telemetry.
- **Motion:** transform-based fill and restrained endpoint glow.
- **Media:** existing optimized Earth poster only.
- **Must not resemble:** a download bar, countdown timer, game HUD or NASA UI.
- **Constraints:** real readiness only; no fabricated seconds; visible
  `role="progressbar"` semantics; reduced motion keeps instant state changes.

## V2 archive return and project-detail routing

### Navigation contract

- `All projects` opens `/v2/projects`; its return action targets
  `/v2#projects`, not the top of the homepage.
- `All articles` opens `/v2/articles`; its return action targets
  `/v2#transmissions`, the semantic id used by the Articles section.
- The V2 entry respects a valid section hash instead of forcing `#hero`.
- V2 project cards open `/v2/projects/[slug]`.
- The canonical project URL remains `/projects/[slug]`; V2 is an alternate
  presentation of the same centralized `CaseStudy`.
- Medium-backed articles continue to open their verified Medium URL directly.

### Project-detail directions

1. **Mission dossier (selected):** wide visual evidence first, project identity
   and verified facts in a compact side manifest, then a readable single-column
   technical narrative with a sticky system index on desktop.
2. **Orbital timeline:** every case-study section becomes a waypoint around a
   vertical journey line. Strong V2 metaphor, but long text becomes fragmented
   and mobile navigation grows noisy.
3. **Telemetry deck:** dense two-column modules with persistent project
   metadata. Efficient, but resembles mission-control cosplay and reduces
   editorial readability.

| Criterion | Mission dossier | Orbital timeline | Telemetry deck |
|---|---:|---:|---:|
| Five-second clarity | 9.4 | 8.1 | 8.3 |
| Recruiter/client fit | 9.5 | 8.0 | 8.2 |
| V2 distinctiveness | 9.0 | 9.3 | 7.7 |
| Mobile viability | 9.2 | 7.6 | 6.9 |
| Content scalability | 9.4 | 7.8 | 8.7 |
| Accessibility | 9.5 | 7.9 | 7.6 |
| Performance | 9.4 | 8.5 | 8.8 |

### Selected brief

- **Audience:** recruiters, technical leaders and prospective clients.
- **Primary action:** understand a project’s role, constraints, decisions and
  verified outcome; secondary action returns to the V2 project archive.
- **Route:** `/v2/projects/[slug]`.
- **Tone:** cinematic, editorial, precise.
- **Signature:** a project “mission dossier” with large evidence media and one
  quiet orbital line tying the narrative together.
- **Composition:** back/archive controls → split Hero → evidence gallery →
  editorial case-study column + technical manifest.
- **Typography:** existing V2 display/body/mono roles.
- **Color:** navy surfaces, Tech Blue navigation, verified green only for live
  status/evidence.
- **Density:** spacious Hero, readable narrative, compact manifest.
- **Motion:** existing restrained reveal and gallery transitions only.
- **Media:** verified project gallery and cover assets from shared data.
- **Must not resemble:** V4’s canonical product case-study page, a dashboard,
  a game HUD or a duplicate archive card.
- **Constraints:** semantic sections, keyboard gallery controls, 44px actions,
  no duplicated facts, canonical metadata remains the shared project URL, no
  full cinematic homepage journey required for comprehension.

```text
DESKTOP
[← Project archive]                       [PROJECT / STATUS]
[Project title + summary       ] [Role / period / platforms]
[Verified project gallery --------------------------------]
[Case-study narrative          ] [Technology manifest      ]
[Context → Challenge → Build   ] [Integrations / links      ]

MOBILE
[← Project archive]
[Title / status / summary]
[Gallery]
[Role / period / platforms]
[Narrative sections]
[Technology manifest]
```

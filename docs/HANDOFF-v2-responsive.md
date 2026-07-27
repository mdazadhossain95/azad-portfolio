# Handoff: V2 responsive celestial framing

Branch: `portfolio-redesign-v2`. All work is **uncommitted** in the working tree.
State at handoff: `eslint` clean, `tsc --noEmit` clean, `next build` succeeds.

**Read `AGENTS.md` first.** The portfolio UI skill protocol is mandatory, not
optional. Also note: **never use em dashes anywhere in this repo** (user
requirement, all 63 existing ones were removed). Use commas, colons,
parentheses or separate sentences.

---

## The problem being solved

V2's 3D bodies were missing or misplaced on tablet and mobile.

Root cause: every camera state in `lib/portfolio/v2-scene-config.ts` is authored
against a 1440x900 desktop frame, and three.js `fov` is **vertical**. A narrow
viewport therefore loses horizontal field:

| Viewport | Aspect | Horizontal FOV | Result |
|---|---|---|---|
| 1440x900 | 1.60 | ~65 deg | body in frame |
| 768x1024 | 0.75 | ~33 deg | body clipped |
| 390x844  | 0.46 | ~21 deg | body absent |

Bodies sit laterally (Moon `x=-4.6`, Mars `x=+5.15`), so a narrow frustum loses
them completely. A second, independent defect: below `lg` the section grids
collapse to one column and the copy fills the width, so any body still in frame
renders **behind the paragraphs**.

Approach chosen by the user:
1. Aspect-aware camera (hold the authored horizontal field). **Done.**
2. On mobile, body sits in its **own band below the copy**. **Partly done.**

---

## What is already done

### 1. `lib/portfolio/v2-framing.ts` (new, complete)
Shared framing maths so the camera rig and the body transforms cannot disagree:
- `v2ResponsiveFov(authoredFov, aspect)` widens the lens, capped at 78 deg.
- `v2DollyFactor(authoredFov, aspect)` recovers what the cap could not.
- `v2VisibleHalfHeight(fov, aspect, distance)` world height visible at a distance.
- `v2BodyDropFraction(viewportWidth)` how far to drop a body: `0.62` under 768,
  `0.54` to 1024, `0` above.

### 2. `components/portfolio/v2/v2-camera-rig.tsx` (complete)
- `frameForAspect()` applies the shared maths to each authored camera state.
- All downstream reads use `framed.*`, not `authored.*`.
- Simplified-mode breakpoint moved `max-width: 767px` -> **`max-width: 1024px`**,
  so it matches the tablet cut-off in `useDestinationTransform`. Previously
  768-1024 ran the cinematic desktop camera against static tablet offsets.

### 3. `components/portfolio/v2/celestial/v2-celestial-bodies.tsx` (complete)
`useDestinationTransform` now subtracts a per-scene `drop` from world Y, derived
from that scene's own reading distance. A single shared world offset would drop
the Moon and Jupiter by very different amounts on screen; this keeps them
consistent.

### 4. `lib/portfolio/v2-scene-config.ts` (complete)
`scaleMultiplier` raised because the corrected framing was double-counting the
old shrink: `STATIC_TABLET` 0.72 -> **0.95**, `STATIC_MOBILE` 0.52 -> **0.85**.

### 5. `components/portfolio/v2/v2-celestial-band.tsx` (new) + wiring
Reserved spacer, `lg:hidden`, height `clamp(240px,58vw,340px)` and
`md:clamp(300px,42vw,400px)`. Inserted before `</section>` in all five celestial
sections: `v2-about`, `v2-experience-timeline`, `v2-projects`,
`v2-capabilities`, `v2-articles`.

---

## What is left to do

### A. Verify and tune the band placement (main remaining task)
The band and the drop fraction were wired but **never visually verified** at any
breakpoint. This is the immediate next step.

1. `npm run build && npx next start -p 3100` (verify against the production
   build, **not** `next dev`, which has a hydration quirk on back-navigation
   that leaves the loader stuck at 0%).
2. Run `/private/tmp/.../scratchpad/viewports.py` or an equivalent: capture
   `#hero #about #experience #projects #capabilities #contact` at 390, 430, 768,
   820, 1024, 1280.
3. Check each body sits **inside its band, fully clear of the copy**, and is not
   cut off at the viewport edge.
4. Tune `v2BodyDropFraction` values and the band heights together. They are
   coupled: change one, recheck the other.

Likely still wrong and worth checking first:
- `#hero` has its own reserved gap (`mt-80 ... sm:mt-14` on the status panel in
  `v2-hero.tsx`) and did **not** get a `V2CelestialBand`. Earth was last seen
  shoved into the bottom-right corner at 768 and 1024. Needs its own treatment.
- `#contact` uses `v2-contact-horizon` (`inset-x-[-12%]`) and has no band.
- Saturn has a ring mesh; confirm the ring is not clipped by the drop.

### B. Re-run the full regression set
These all passed before the responsive work and must still pass:
- Scroll the whole page: canvas must survive every stop.
- 60s idle: canvas alive (guards the loader-timer bug, see below).
- Project detail -> back, articles -> back: canvas and Earth poster restored.
- Reduced motion, and mobile at 390.

### C. Not started, previously agreed as out of scope
- **V2 copy audit.** User asked to review all V2 copy but then chose "hero only".
  The broader audit was never done. Planet names are still used as section
  labels in the rail, kickers and elsewhere, which was a deliberate decision to
  keep.
- Accessibility re-check after the responsive changes. The last pass was clean
  (1 h1, no missing alt, no unnamed links or buttons), but the first Tab stop is
  a `BUTTON` with no visible text; confirm it is the intended skip target.

---

## Traps that already cost time

1. **The loader owns timers that outlive it.** `V2CosmicEntry` lives in
   `app/v2/layout.tsx` and finishes with `setMounted(false)` returning `null`.
   It never actually unmounts, so effect cleanup never runs. Its 15s failsafe
   used to fire on every visit and tear the 3D scene down, which read as "3D
   disappears when I scroll". Any timer or rAF there must be cancelled
   explicitly in `finish()`. Do not reintroduce this.
2. **Diagnosing context loss:** if the canvas leaves the DOM *before* three logs
   "Context Lost", an unmount caused the loss, not a GPU failure. That single
   ordering check is what identified the bug above.
3. **`webglcontextlost` fires on normal unmount.** The handler defers a task and
   checks `gl.domElement.isConnected` to tell teardown from a real failure.
4. **`UniverseErrorBoundary` latches.** It must be keyed (`key={sceneKey}`)
   alongside the child, or re-keying the child alone can never recover it.
5. **Static mode must stay recoverable.** It is a fallback, not a one-way switch.
6. Texture memory was cut ~110MB -> ~41MB by halving eight textures to 1024x512
   and disabling shadow maps. Earth clouds and day map stay full resolution.
   Originals are not in the repo; re-export from the `2k_*.jpg` sources if needed.

---

## Verify before calling it done

```bash
npm run lint && npx tsc --noEmit && npm test && npm run build
```

Then the browser QA in section A above. V2 is `noindex, follow`, which is
correct and intentional; do not change it.

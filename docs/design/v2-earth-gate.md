# V2 Earth Gate — Orbital Limb

## Design brief

1. **Audience:** Hiring managers, clients and engineers evaluating Azad’s
   production engineering and creative-frontend range.
2. **Primary action:** Start a build; secondary action is viewing projects.
3. **Route:** `/v2`, `noindex, follow`.
4. **Tone:** Cinematic, credible, controlled.
5. **Signature:** A recognisable, draggable Earth occupying the right visual
   field while professional content remains completely stable on the left.
6. **Composition:** 6–48% content-safe zone; 52–110% 3D visual zone.
7. **Type:** Sora for content and Space Mono for short technical labels.
8. **Color:** Navy space, white content, cyan atmosphere/interaction, green
   only for verified availability, amber only in Earth lights.
9. **Density:** One headline, one paragraph, two actions and one proof panel.
10. **Motion:** Native scroll; restrained Earth drag/damping; no camera response
    to pointer movement.
11. **Media:** Layered licensed Earth textures rendered on original geometry.
12. **Must not resemble:** A gaming HUD, mission-control dashboard, neon globe,
    flat planet illustration or centered SaaS hero.
13. **Constraints:** Semantic HTML, optional 3D, reduced motion, WebGL fallback,
    keyboard rotation, 44px controls and no overlap at supported viewports.

## Low-cost compositions

### A — Orbital Limb — selected

```text
┌──────────────────────────────────────────────────────────────────┐
│ navigation                                                       │
│                                                                  │
│  location label                ┌──── destination annotation ───┐  │
│  LARGE ENGINEERING             │                 .-''''-.       │
│  HEADLINE                      │              .-'  EARTH  '-.   │
│  supporting copy               │             /                \  │
│  [primary] [secondary]         │             \                /  │
│  proof/status panel            │              '-.__________.-'   │
└──────────────────────────────────────────────────────────────────┘
```

Strongest five-second clarity, safe semantic content, direct drag target and
best mobile simplification. It also establishes the right-side departure
vector used by the wider journey.

### B — Terminator Crossing

Earth’s day/night boundary crosses diagonally behind a centered headline.
Distinctive, but fails the strict safe-zone rule and creates variable contrast.

### C — Near-Earth Relay

Earth sits lower-right with a satellite and project-style telemetry above it.
Technically expressive, but introduces HUD clutter and weakens Earth as the
single memorable object.

## Camera and interaction contract

- Approach: Earth enters from farther orbit.
- Reading: camera is stationary; only Earth/cloud local rotation continues.
- Departure: ScrollTrigger advances the camera along one authored curve.
- Drag rotates the Earth group only, with ±24° vertical clamp.
- Pointer capture prevents interrupted drag; damping continues on release.
- Idle rotation resumes after 1.5 seconds.
- Tablet/mobile and reduced-motion configurations park the camera.

## Earth acceptance gate

Do not begin the Moon destination until screenshots prove recognisable
continents/ocean, readable day and night sides, cloud separation, atmosphere,
safe-zone compliance, drag/damping, reduced motion and WebGL fallback.


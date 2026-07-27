# V2 Cosmic Gravity — Attribution

This file records external assets and implementation references actually used
by the V2 experience. A reference being studied does not mean its code or
assets were copied.

## Solar System Scope textures

- **Creator:** Solar System Scope / INOVE
- **Source:** <https://www.solarsystemscope.com/textures/>
- **Licence:** Creative Commons Attribution 4.0 International (CC BY 4.0)
- **Files used:** 2K Earth day, night, cloud, normal and specular maps; 2K Moon,
  Mars, Jupiter, Neptune, Saturn, Saturn-ring and Sun maps.
- **Modifications:** The supplied Earth normal and specular TIFF files were
  converted to quality-78 JPEG for browser delivery. Other maps retain their
  supplied JPG/PNG format and resolution.
- **How used:** Applied to original Three.js sphere/ring geometry and original
  V2 materials/shaders. No Solar System Scope application code is used.
- **Required credit:** “Planet textures courtesy of Solar System Scope,
  licensed under CC BY 4.0.”

## Open-source runtime libraries

- **React Three Fiber** — pmndrs, MIT,
  <https://github.com/pmndrs/react-three-fiber>. Used as the React renderer for
  Three.js.
- **Drei** — pmndrs, MIT, <https://github.com/pmndrs/drei>. `Stars`, `Line` and
  texture-loading helpers are used.
- **Three.js** — Three.js authors, MIT, <https://github.com/mrdoob/three.js>.
  Used for the renderer, geometry, materials, shaders and math.
- **GSAP / ScrollTrigger** — GreenSock, subject to the GSAP standard licence,
  <https://gsap.com/licensing/>. Used to map native document scroll to the V2
  camera journey progress.

## Study references — no source code or assets reused

- **Galaxy Portfolio** — Vladyslav Shtatskyi / techinz,
  <https://github.com/techinz/galaxy-portfolio>. Its custom licence limits use
  to personal, non-commercial contexts unless permission is granted. V2 only
  studied its scene-management and precompilation concepts.
- **R3F Solar System** — jjteoh-thewebdev, MIT,
  <https://github.com/jjteoh-thewebdev/r3f-solar-system>. Studied for general
  component organisation and texture-based planet rendering.
- **Codrops Camera Fly-through** — Andrew Prifer / Codrops, MIT,
  <https://github.com/AndrewPrifer/CodropsCameraFlyThroughTutorial>. Studied for
  the principle of one scroll-controlled camera timeline.
- **NASA Eyes** — NASA, <https://science.nasa.gov/eyes/>. Studied for spatial
  composition and stable inspection states. No NASA model, media or interface
  asset is present in this repository.


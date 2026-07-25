# Accessibility, SEO & Performance Report

Cross-version pass over `/`, `/v1`, `/v2`, `/v3`, `/v4`, `/projects`, `/articles`,
`/services`, `/contact`, `/resume`, `/travel`, and their sub-routes.

## Accessibility (target WCAG 2.2 AA)

Verified with Playwright across 320/375/768/1024/1440/1920 widths plus manual
contrast calculation for new V2/V3 tokens.

Bugs found and fixed this pass:
- **Duplicate `<main>` landmark** on `/v1`, `/v2`, `/v3`. `LayoutWrapper` wrapped
  children in a `<main>` and the version's own nested layout wrapped a second
  `<main>` around the same content. Fixed: `LayoutWrapper` now renders a bare
  fragment for versions with their own layout (`components/layout-wrapper.tsx`).
- **Missing `<h1>`** on `/projects`, `/articles`, `/services`, `/contact`,
  `/travel`, `/v1/projects`, `/v1/articles`, `/v1/contact` — each used
  `SectionTitle`, which only ever rendered an `<h2>`. Added a `level` prop
  (`components/section-title.tsx`) and set `level="h1"` on the primary heading
  of each of those pages.
- **Dead skip-link target** on `/v1`, `/v2`, `/v3` — the sitewide "Skip to
  content" link points at `#main-content`, which didn't exist inside those
  versions' nested `<main>`. Added the id to all three nested layouts.
- **Touch targets under 44px** — the global header hamburger, the V1 header
  hamburger, and the theme toggle button were 40×40px. Bumped to 44×44px in
  `components/site-header.tsx`, `components/v1/site-header-original.tsx`, and
  `components/theme-toggle.tsx`. V2/V3 headers were already built at 44×44px.

Confirmed passing (no changes needed):
- Exactly one `h1` and one `main` per route after fixes (14 routes checked).
- No horizontal overflow at any of the six required widths, any route.
- No browser console errors on any route.
- Reduced motion: `.cursor-glow` computes to `display: none` under
  `prefers-reduced-motion: reduce`; global CSS collapses all transitions to
  `0.01ms`. V2/V3 have no continuous animation to begin with.
- Mobile menus (V1–V4) open/close, trap or reasonably scope focus, and close
  on Escape where implemented; keyboard Tab order reaches primary nav and CTAs.
- Images all have `alt` text (0 missing across every route checked); real
  project/profile photos only, no fabricated screens.
- V3 light-mode "sketch gold" token was originally `#8A6114`... contrast
  computed by hand: the initial `#B8860B` only reached ~2.9:1 against the
  paper background (fails 4.5:1 for normal text). Darkened to `#8A6114`
  (~4.9:1) before shipping V3 — see `docs/design/v3-engineering-notebook.md`.

Not independently re-verified this pass (already covered when built):
V1/V4 heading order inside their own hero/section flow, form label wiring on
`/contact` (`ContactBlock` has no text inputs — it's links only, so no
label/error-state surface exists to audit).

## SEO

- `/` — canonical self (`https://azadhossain.dev/`), indexable.
- `/v4` — canonical now points at `/` (`app/v4/page.tsx`) instead of itself,
  so it no longer competes with `/` as a duplicate. Still resolves and is
  followable for direct visitors/links.
- `/v1`, `/v2`, `/v3` — `noindex, follow`, canonical self. Confirmed via
  rendered `<meta name="robots">` and `<link rel="canonical">`.
- Replaced the static, incomplete `public/sitemap.xml` (5 URLs, no project/
  article/service detail pages) with a dynamic `app/sitemap.ts` that lists
  32 URLs: all static conversion routes plus every real project, article,
  service, and travel-post detail page. `/v1`–`/v3` and `/v4` are
  intentionally excluded (noindex / duplicate-of-`/` respectively).
- Added per-page canonical tags to `/projects/[slug]` and `/articles/[slug]`.
- Added `BlogPosting` JSON-LD to article detail pages and `CreativeWork`
  JSON-LD to project detail pages (root layout already had `Person` JSON-LD
  sitewide).
- Confirmed real 404s: invalid `/projects/[slug]` and `/articles/[slug]`
  return HTTP 404 via `notFound()`, rendering the shared `not-found.tsx`.
- No placeholder content is indexable: all noindexed routes are the
  in-progress version shells only where applicable; all indexed content
  (projects, articles, services) is real content from `content/`.

## Performance

- No blocking splash: `SplashScreen` only renders on the V4 home
  (`isV4Home`), not on any other route, and is not a hard gate.
- Route code splitting is automatic (Next.js App Router, one bundle per
  route); V1/V2/V3/V4 don't import each other's components.
- Images use `next/image` with `fill` + explicit `sizes` throughout (no
  layout-shift-prone unsized images introduced this pass).
- Client JS stays scoped to interactive leaves (mobile menu state, theme
  toggle, cursor glow) — new V2/V3 headers/footers follow the same pattern
  as V1's.
- Effects: `CursorGlow`/`SocialRails`/`SplashScreen` are excluded entirely
  from `/v1`, `/v2`, `/v3` via `LayoutWrapper`; V2/V3 ship no continuous
  animation by design (see their design briefs).
- Not measured with field/lab tooling in this pass (no Lighthouse/CrUX run) —
  LCP/INP/CLS targets are inferred from architecture (static generation,
  sized images, minimal client JS) rather than measured numbers. Flag this as
  a limitation; a real Lighthouse pass is recommended before final sign-off.

## Remaining limitations / follow-ups for Prompt 11 (Final QA)

- No Lighthouse/PageSpeed run performed — recommend running one against a
  deployed preview before merge.
- `ContactBlock` has no form inputs (mailto/Upwork links only), so there are
  no field-level error/label states to test — confirm this is the intended
  truthful behavior (no fake "message sent" state) rather than a missing form.
- axe-core or similar automated contrast/ARIA scanner was not run (no new
  dependency added, per repo convention); contrast issues were checked by hand
  for new V2/V3 tokens and spot-checked structurally (headings/landmarks/
  targets) via Playwright instead.

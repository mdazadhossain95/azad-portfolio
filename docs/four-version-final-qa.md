# Four-Version Portfolio — Final QA

Automated with Playwright (headless Chromium) against a local dev server,
plus `npm run lint|typecheck|test|build`. No staging/production deploy was
touched.

## Automated routes

| Route | Status |
|---|---|
| `/` | 200 |
| `/v1` | 200 |
| `/v2` | 200 |
| `/v3` | 200 |
| `/v4` | 200 |
| `/projects` | 200 |
| `/projects/codegopay-individual` (valid project) | 200 |
| `/projects/this-slug-does-not-exist` (invalid project) | **404** (correct) |
| `/articles` | 200 |
| `/articles/flutter-performance-hacks` (valid article) | 200 |
| `/contact` | 200 |
| `/resume` | 200 |
| `/services`, `/services/[slug]` | 200 |
| `/v1/projects`, `/v1/articles`, `/v1/contact` | 200 |
| `/v4/projects`, `/v4/articles` | 200 |
| **admin-login smoke test** | **N/A — no admin surface exists.** The admin CMS and Firebase backend were removed in an earlier commit (`80da1f1`, "remove admin CMS, Firebase, and project image lightbox"). There is no `/admin` route, login form, or Firebase config in this branch. Confirmed via `git log` and a repo-wide search for `admin`/`login` routes (none found). |

## Interactions

- **Version switcher**: present and links to all four versions from every version (`v1`↔`v2`↔`v3`↔`v4`). Verified programmatically on all four.
- **Desktop nav / keyboard-only navigation**: Tab order on `/`, `/v1`, `/v2`, `/v3`, `/v4` reaches the skip link first, then real in-page navigation (confirmed via 5-tab sample per route — no dead-air focus stops).
- **Mobile menu + focus**: on all four versions, the hamburger button now correctly toggles `aria-expanded`, opens the drawer, and closes on <kbd>Escape</kbd>. Two real bugs were found and fixed this pass:
  - V1's toggle button had no `aria-expanded` at all (`components/v1/site-header-original.tsx`).
  - V2 and V3's mobile menus had no Escape-to-close handler (`components/v2/site-header.tsx`, `components/v3/site-header.tsx`).
  V4 already had a full focus trap + Escape handling; V1/V2/V3 now close on Escape too (V1/V2/V3 don't focus-trap the drawer — a lighter-weight menu without a modal focus trap — but Escape-to-close and correct ARIA state are in place).
- **Active section**: V4's header highlights the in-view section via `IntersectionObserver` (pre-existing, unaffected this pass).
- **Tabs**: no tabbed UI ships in the current build (an unused, dead `components/portfolio/v1/v1-experience.tsx` contains a tab pattern but is never imported anywhere — see Prompt 12 cleanup note below). N/A for this QA pass.
- **Dialogs/galleries**: none ship currently — the project image lightbox was removed in `80da1f1`. N/A.
- **Project links**: independent Play Store / App Store / website links confirmed distinct per project in `content/projects.ts` (spot-checked; automated in `__tests__/case-studies.test.tsx`).
- **Contact**: `/contact` uses real `mailto:mdazadhossain95@gmail.com` and Upwork links, no `<form>` element — i.e., no fake "message sent" state, because there's no simulated form to begin with.
- **Reduced motion**: `prefers-reduced-motion: reduce` collapses all CSS transitions site-wide (`getComputedStyle(body).transitionDuration` → `1e-05s`) on `/v1`–`/v4`; `CursorGlow` disables itself entirely.
- **404**: unmatched routes return HTTP 404 and render the shared not-found page with a working link back home.

## Visual widths

320 / 375 / 768 / 1024 / 1440 / 1920 checked on `/`, `/v1`, `/v2`, `/v3`, `/v4`,
`/projects`, `/articles`, `/contact` — **zero horizontal overflow** at any
width on any of these routes.

## Content QA

- No placeholder email — every mailto/contact reference resolves to the one
  real address, `content/profile.ts`.
- No fake testimonial — `defaultReviews` has one entry, anonymized as
  "Verified Upwork Client" (no invented name), tagged with its real source.
- No broken résumé — fixed this pass (see Prompt 9/10 commits): `/resume`,
  `content/profile.ts`, and `lib/default-content.ts` all now point at the
  real Google Drive résumé instead of a nonexistent local PDF.
- No hidden store links — Play Store / App Store links render as visible,
  independent links on each project card and detail page.
- No placeholder article — all 5 published articles are real MDX content
  with real Medium URLs; the canonical `/articles` and duplicate `/v1/articles`
  listing now read from the same MDX source (deduplicated this pass, see
  Prompt 9 commit).
- No copied reference wording — V1/V2/V3 were built from general layout
  principles per their design briefs (`docs/design/`), not copied text/source
  from any reference site.
- **Two items flagged, not resolved** (require the site owner's confirmation,
  not something an agent should silently change) — added to
  `docs/content-confirmation-checklist.md`:
  - `content/experience.ts`'s Codego role end date (`Jun 2026`) has now
    passed (today is 2026-07-25) while `profile.status` says "Independent /
    Freelance" — confirm whether the role has ended and the record is final.
  - V1's hero stats show "200+ Apps delivered" and "15+ Happy clients" —
    neither number exists in `content/profile.ts`'s `proof` object. Needs a
    real source or should be replaced with a verified figure.
- Old employment/date consistency was otherwise spot-checked against
  `content/experience.ts` and `content/projects.ts` — no other stale/
  contradictory dates found.

## Security QA

- **No credentials in the repo**: `.env*` is gitignored (`!.env.example`
  excepted), no `.env` files are tracked, and a repo-wide search for
  `api[_-]?key|secret|password|firebase.*config` in `.ts`/`.tsx` files
  returned nothing.
- **No placeholder admin authorization**: N/A — there is no admin surface in
  this branch (removed in `80da1f1`).
- **Admin route/rules documented**: N/A for the same reason;
  `docs/firebase-admin-claims.md` (from an earlier audit phase) should be
  re-read and marked stale/historical in Prompt 12, since Firebase itself is
  gone.
- **Contact validation**: N/A in the sense that there is no form to validate
  — contact is link-based (mailto/Upwork), which is itself the "no fake
  submit state" requirement satisfied by construction.
- **Upload restrictions**: N/A — no upload feature exists post-CMS-removal.

## CI

- Added `.github/workflows/ci.yml`: runs `npm ci` → `npm run lint` →
  `npm run typecheck` → `npm run test` → `npm run build` on push/PR to `main`.
- Added missing `typecheck` (`tsc --noEmit`) and `test` (`vitest run`) scripts
  to `package.json` — both existed as tooling (`vitest.config.ts`,
  `@testing-library/react`, an existing test file) but had no npm script
  wired up, so CI/agents were silently unable to run them.
- Playwright was **not** added as an npm dependency/E2E suite — all
  interaction/route/viewport verification in this report was done with the
  repo's `webapp-testing` skill (Python Playwright, not a project
  dependency), to avoid adding a new dependency without a stated need. If a
  standing E2E suite is wanted, that's a deliberate follow-up decision, not
  a silent gap.

## Command results (this pass)

```
npm run lint       → 0 errors, 3 pre-existing warnings (unrelated files)
npm run typecheck   → no errors
npm run test        → 5/5 passed
npm run build        → succeeds, 20 routes generated
```

## Remaining blockers before merge

1. Two content-confirmation items above (stale-looking employment end date,
   unsourced hero stats) — owner sign-off needed, not an agent decision.
2. No Lighthouse/CrUX performance measurement taken (architecture-based
   inference only — see `docs/accessibility-seo-performance-report.md`).
3. ~~Dead code: `components/portfolio/v1/*.tsx` (9 files)~~ — removed in
   Prompt 12, along with unused default `create-next-app` placeholder SVGs
   in `public/` and an unused `Link` import in `app/resume/page.tsx`.
4. ~~`docs/firebase-admin-claims.md` referenced a removed system~~ — updated
   in Prompt 12 to clearly mark it historical.
5. **`npm audit` reports 12 high-severity advisories** (from a clean
   `npm ci`), the largest being in `next@16.2.4` itself (DoS, cache
   poisoning, SSRF, and XSS advisories fixed in `next@16.2.11`) and in
   transitive `brace-expansion`/`postcss`/`sharp`. `npm audit fix --force`
   would bump `next` to `16.2.11` and `eslint` to `10.8.0` — both outside
   the versions currently pinned in `package.json`. **Not applied in this
   pass**: `AGENTS.md` explicitly warns this repository's Next.js has
   deprecation/behavior differences from stock Next.js ("This is NOT the
   Next.js you know"), so bumping the pinned version is a decision for the
   owner, not something to change silently during a QA/docs pass.

Nothing in this phase was merged or deployed.

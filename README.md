# Azad Portfolio

A four-version portfolio for Md Azad Hossain Tutul — Full-Stack App Developer
(Flutter, FinTech, AI). One shared content tree, four independent visual
presentations, so the same verified facts can be shown to different
audiences without duplicating data.

## Purpose

- **`/` (and `/v4`) — Mobile Product Engineer.** The canonical, indexed,
  client-facing presentation. This is what gets linked externally.
- **`/v1` — Classic Developer.** Recruiter-friendly technical layout:
  numbered nav, precise typography, experience timeline.
- **`/v2` — FinTech Systems Lab.** Credible "systems record" presentation
  for FinTech/payments-focused engagements: capability modules, production
  systems, architecture workflow, technical matrix.
- **`/v3` — Engineering Notebook.** Warm, personal, process-first
  presentation: career timeline, product sketches, work process, client
  notes.

`/v1`–`/v3` are `noindex, follow` — they exist for direct links (proposals,
targeted outreach) but never compete with `/` in search results.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- TypeScript
- Vitest + Testing Library (unit/component tests)
- Vercel hosting

## Architecture

- **Content is the source of truth, not the CMS** — there is no CMS or
  database. Everything lives in `content/*.ts` (profile, experience,
  projects, services, skills) and `content/articles/*.mdx` (articles).
  All four versions and all shared routes read from these same files, so a
  fact only needs to be correct in one place.
- **Shared vs. version-specific**: `components/` holds shared, reusable
  pieces (`section-title`, `contact-block`, `project-card`, `article-card`,
  `live-*` data components). `components/v1/`, `components/v2/`,
  `components/v3/` hold each version's own header/footer.
  `components/portfolio/v{1,2,3,4}/` holds each version's own page
  sections. `components/portfolio/shared/` holds the version switcher and
  shared layout primitives.
- **Per-version theming**: each version scopes its own CSS custom
  properties (`.v1-theme`, `.v2-theme`, `.v3-theme` in `app/globals.css`)
  rather than forking Tailwind config, so brand tokens stay centralized
  while each version can look distinct.
- **Nested layouts**: `/v1`, `/v2`, `/v3` each have their own
  `app/v{n}/layout.tsx` supplying their own header/main/footer.
  `components/layout-wrapper.tsx` detects these routes and skips the
  global V4 chrome (header, footer, cursor glow, splash) so nothing is
  double-rendered.
- **Shared case studies**: `/projects` and `/projects/[slug]` are the one
  canonical project system used by every version — no version has its own
  copy of project routes.
- **Shared articles**: `/articles` and `/articles/[slug]` render MDX files
  from `content/articles/`; `LiveArticles` (used by the homepage sections
  and `/v1/articles`) reads from the same MDX source, not a separate copy.

## Routes

| Route | Purpose |
|---|---|
| `/`, `/v4` | Canonical mobile-product presentation |
| `/v1` | Classic developer presentation |
| `/v2` | FinTech systems lab presentation |
| `/v3` | Engineering notebook presentation |
| `/projects`, `/projects/[slug]` | Canonical case studies |
| `/articles`, `/articles/[slug]` | Canonical articles (MDX) |
| `/services`, `/services/[slug]` | Service offerings |
| `/contact` | Contact (mailto + Upwork, no form) |
| `/resume` | Resume view (links to the real supplied résumé) |
| `/travel` , `/travel/[slug]` | Personal travel notes |
| `/sitemap.xml` | Dynamically generated (`app/sitemap.ts`) |

## Content updates

Edit the relevant file in `content/` — no build step or CMS login required:

- `content/profile.ts` — name, contact links, positioning, verified stats.
- `content/experience.ts` — employment history.
- `content/projects.ts` — case studies (see `lib/types.ts#CaseStudy` for the
  full shape: role, challenges, technical decisions, results with an
  `evidence` level, links, gallery).
- `content/services.ts`, `content/skills.ts` — services and skill matrix.
- `content/articles/*.mdx` — articles (frontmatter: `id`, `title`, `preview`,
  `publishedAt`, optional `mediumUrl`).

Only add a `result` with `evidence: "public"` if there's a real `sourceUrl`
behind it — see `lib/portfolio/validation.ts`.

## Accessibility & SEO

- WCAG 2.2 AA target: semantic landmarks, one `h1` per route, working
  skip-link, 44px touch targets, visible focus rings, reduced-motion support
  site-wide. See `docs/accessibility-seo-performance-report.md` for the full
  audit and what was fixed.
- `/` is canonical; `/v4` sets its canonical tag to `/` (same content, avoids
  duplicate-content SEO issues) but still resolves directly; `/v1`–`/v3` are
  `noindex, follow`.
- `app/sitemap.ts` generates `/sitemap.xml` dynamically from real content
  (projects, articles, services, travel posts) — it is not a hand-maintained
  static file.
- Structured data: `Person` JSON-LD site-wide (`app/layout.tsx`),
  `CreativeWork` JSON-LD on project pages, `BlogPosting` JSON-LD on article
  pages.

## Admin / Firebase (historical)

This project previously had a Firebase-backed admin CMS. It was fully
removed (commit `80da1f1`) — there is no `/admin` route, no Firebase
config, and no database in this branch. See `docs/firebase-admin-claims.md`
for the historical record.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:3000
npm run lint      # eslint
npm run typecheck # tsc --noEmit
npm run test      # vitest run
npm run build     # production build
```

CI (`.github/workflows/ci.yml`) runs all of the above (`ci` → `install` →
`lint` → `typecheck` → `test` → `build`) on every push/PR to `main`.

## Environment

No environment variables are required to run this project — content is
static and there is no external backend. `.env*` is gitignored; if you add
one later (e.g. for an API integration), keep secrets out of the repo and
add a `.env.example` with placeholder keys only.

## Deploy (Vercel)

1. Push to GitHub.
2. Import the project in Vercel.
3. Deploy — no environment variables needed for the current feature set.

## Further reading

- `docs/portfolio-maintenance-guide.md` — how to add a project/article, keep
  the four versions in sync, and what to check before publishing new claims.
- `docs/four-version-agent-contract.md` — the shared rules every version
  must follow (shared content, `noindex` for v1–v3, no invented facts, etc).
- `docs/accessibility-seo-performance-report.md`,
  `docs/four-version-final-qa.md` — audit trail for the accessibility/SEO/
  performance and final QA passes.
- `docs/content-confirmation-checklist.md` — content facts still pending the
  site owner's confirmation.

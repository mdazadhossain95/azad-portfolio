# Portfolio Maintenance Guide

Practical guide for keeping the four-version portfolio (`/`, `/v1`, `/v2`,
`/v3`, `/v4`) accurate and in sync. For the one-time architecture overview,
see `README.md`; for the rules every version must follow, see
`docs/four-version-agent-contract.md`.

## Adding a new project

1. Add an entry to `content/projects.ts` matching `CaseStudy` in
   `lib/types.ts`. Required: `slug`, `title`, `category`, `status`,
   `summary`, `role`, `ownershipNote`, `platforms`, `responsibilities`,
   `challenges`, `approach`, `contributions`, `technicalDecisions`,
   `results`, `technologies`, `coverImage`, `gallery`, `links`.
2. Every `result` needs an `evidence` level (`public` / `client-approved` /
   `private` / `unverified`). Only use `public` if there's a real
   `sourceUrl` — see `lib/portfolio/validation.ts` and
   `__tests__/case-studies.test.tsx` (which asserts unverified claims never
   render).
3. That's it — `/projects`, `/projects/[slug]`, and every version's
   "featured work" / "production systems" / "product sketches" sections all
   read from this one array. No per-version duplication needed.
4. If the project should appear in a version-specific filtered section
   (e.g. V2's "Production Systems" filters `category === "FinTech &
   Payments"`), make sure `category` matches what that section filters on.

## Adding a new article

1. Add an `.mdx` file under `content/articles/` with frontmatter: `id`,
   title`, `preview`, `publishedAt`, optional `mediumUrl`.
2. `getAllArticles()` / `getArticleBySlug()` in `lib/mdx.ts` are the only
   source of truth — `/articles`, `/articles/[slug]`, `/v1/articles`, and
   the homepage's `LiveArticles` component all read from here. Don't
   reintroduce a second hand-maintained article array (there used to be
   one in `lib/default-content.ts`; it was removed because it drifted from
   the MDX content — see the Prompt 9 commit).
3. The new article automatically appears in `app/sitemap.ts`.

## Updating profile facts (name, stats, links)

Everything in `content/profile.ts` — change it once, it propagates
everywhere (hero sections, footers, contact links, JSON-LD, metadata).

Before adding a new stat/number to any hero or stats row, make sure it's
backed by something in `profile.proof` (or a real, traceable number) rather
than typed directly into a component — see the flagged "200+ Apps
delivered" / "15+ Happy clients" item in
`docs/content-confirmation-checklist.md` for what happens when a number
isn't traceable to a source.

## Keeping the four versions in sync

- Shared facts (profile, experience, projects, services, skills) must never
  be forked per version. If a version needs a different subset or framing,
  filter/reshape in that version's own component — don't copy the data.
- Each version may have its own header/footer/theme
  (`components/v{1,2,3}/`, `.v{1,2,3}-theme` in `app/globals.css`), but
  should not fork shared components like `SectionTitle` or `ContactBlock` —
  extend them with props (see `SectionTitle`'s `level` prop, added so pages
  without a hero could still render a real `<h1>`).
- `lib/portfolio/versions.ts` is the registry the version switcher renders
  from — keep its `name`/`description` accurate when a version's concept
  changes (this drifted before: v2/v3 said "AI & Startups" / "DevTools" long
  after they became "FinTech Systems Lab" / "Engineering Notebook").

## Before publishing any new public claim

- No invented metrics, testimonials, employers, or screenshots — ever.
- New testimonials require the owner's approval before going in
  `lib/default-content.ts`'s `defaultReviews`.
- New "public" evidence-level results need a real `sourceUrl`.
- Run the full check suite before committing:
  ```bash
  npm run lint && npm run typecheck && npm run test && npm run build
  ```
- For any non-trivial visual change, follow the skill protocol in
  `AGENTS.md`/`CLAUDE.md` (`portfolio-ui-router` → design direction → design
  system → build → accessibility/interaction/AI-slop/polish review →
  browser QA) rather than editing components ad hoc.

## Known follow-ups (not yet resolved)

See `docs/content-confirmation-checklist.md` for open content questions and
`docs/four-version-final-qa.md` for the full remaining-blockers list
(no Lighthouse run performed yet; recommend one before a production launch).

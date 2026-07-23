# Azad Portfolio — Complete AI Agent Prompt Sequence

## How to use this file

This document contains the complete prompt sequence for building and reviewing the four-version portfolio.

**Give your coding agent only one prompt at a time.**

Required order:

1. Prompt 00 — Install and verify UI skills
2. Prompt 01 — Audit the current branch
3. Prompt 02 — Harden the existing redesign
4. Prompt 03 — Build the shared four-version foundation
5. Prompt 04 — Finish V4 first
6. Prompt 05 — Build shared case studies
7. Prompt 06 — Build V1
8. Prompt 07 — Build V2
9. Prompt 08 — Build V3
10. Prompt 09 — Complete content and conversion routes
11. Prompt 10 — Accessibility, SEO and performance
12. Prompt 11 — Final QA and CI
13. Prompt 12 — Final documentation and draft pull request

After every prompt:

1. Review the Git diff.
2. Run the application.
3. Review the agent’s audit and command results.
4. Confirm the requested phase is complete.
5. Confirm a commit hash was returned.
6. Confirm nothing was merged or deployed.
7. Only then send the next prompt.

---

# Prompt 00 — Install and verify UI skills

```text
Work on the current portfolio feature branch. Do not redesign a page in this task.

Your assignment is to install, inspect and verify the project-local UI design
skill system before further portfolio implementation.

1. Read AGENTS.md, CLAUDE.md, README.md, package.json and the current Git diff.

2. Inspect the current branch and working tree. Preserve all existing and
   uncommitted work.

3. Before changing anything, report:
   - Current branch name
   - Uncommitted files
   - Commits ahead of main
   - Whether portfolio-redesign-v2 work is present
   - Any risk of overwriting existing work

4. Create a safe checkpoint commit or backup branch when needed.

5. Add the approved project-local UI skill package under:

   tools/azad-portfolio-ui-skills/

6. Run its project installation script to copy the skills into:

   .claude/skills/
   .agents/skills/

7. Confirm that these files exist:

   .claude/skills/portfolio-ui-router/SKILL.md
   .agents/skills/portfolio-ui-router/SKILL.md

8. Confirm that the following project-specific skills are installed for both
   Claude Code and Codex:

   - portfolio-ui-router
   - portfolio-design-direction
   - portfolio-design-system
   - portfolio-wireframe
   - portfolio-frontend-build
   - portfolio-accessibility-review
   - portfolio-interaction-review
   - portfolio-ai-slop-review
   - portfolio-polish-gate
   - portfolio-browser-qa

9. Add the supplied project skill protocol to AGENTS.md and CLAUDE.md.

   Do not duplicate the instructions if they already exist.

10. Install only reviewed official project-local skills for:

    - Anthropic frontend design
    - Anthropic webapp testing
    - Vercel web design guidelines
    - Vercel React best practices
    - Vercel Next.js best practices

11. Prefer copied project-local skill files rather than mutable global
    installations or unpinned remote links.

12. Record the following information for every installed external skill:

    - Skill name
    - Source repository
    - Source URL
    - Installed path
    - Upstream commit SHA when available
    - Trust level
    - License when available
    - Included scripts
    - Network-access instructions
    - Hooks or executable behavior
    - Conflicts with this portfolio project
    - Project-specific overrides

13. Inspect every installed SKILL.md and every bundled executable script before
    using it.

14. Do not execute unreviewed third-party scripts.

15. Do not install the complete Trystan design-system prompt globally.

    Use the adapted project-local workflow because the original system contains
    assumptions designed for HTML artifact workflows and may conflict with this
    Next.js four-version architecture.

16. Treat Aura as a design research and pattern catalogue.

    Do not automatically install or execute arbitrary Aura community skills.

    Before adapting an Aura pattern, document:

    - Source
    - Purpose
    - License if available
    - Useful principles
    - Conflicting rules
    - Security or execution risks

17. The portfolio UI workflow must be:

    Task
    → portfolio-ui-router
    → design direction
    → design system
    → wireframe when layout changes
    → frontend implementation
    → accessibility review
    → interaction-state review
    → AI-slop review
    → polish gate
    → real-browser QA
    → lint, typecheck, tests and build
    → stop for human review

18. Create:

    docs/agent-skills-installation-audit.md

19. The audit must include:

    - Skills installed
    - Exact installation paths
    - Source repositories
    - Commit SHAs
    - Trust classification
    - Script review
    - Network-access review
    - Conflicting instructions
    - Project overrides
    - Skill activation method
    - Update procedure
    - Uninstall procedure
    - Security concerns
    - Remaining limitations

20. Test skill activation using planning and review tasks only.

    Do not edit production UI during these activation tests.

    Test these requests:

    A. Review the current V4 hero against the portfolio design direction.

    Expected skills:
    - portfolio-ui-router
    - portfolio-design-direction
    - portfolio-ai-slop-review

    B. Audit the version switcher for keyboard and mobile usability.

    Expected skills:
    - portfolio-ui-router
    - portfolio-accessibility-review
    - portfolio-interaction-review
    - portfolio-browser-qa

    C. Review the current Next.js portfolio component for rendering, client
       boundaries and bundle risks.

    Expected skills:
    - portfolio-ui-router
    - portfolio-frontend-build
    - React best-practices skill
    - Next.js best-practices skill

    D. Plan browser QA for V1 at 320px and 1440px.

    Expected skills:
    - portfolio-ui-router
    - portfolio-browser-qa

21. Record whether each activation test selected the expected skills.

22. Do not start V1, V2, V3 or V4 implementation in this task.

23. Do not redesign the homepage.

24. Do not modify portfolio content, project claims, colors or visual layouts
    except where a minimal non-production change is strictly necessary to verify
    skill installation.

25. Run the existing repository checks:

    npm ci
    npm run lint
    npm run typecheck
    npm run test
    npm run build

26. If a script does not exist, do not hide the problem.

    Report the missing script and recommend the smallest appropriate correction.
    Do not add unrelated testing dependencies in this phase.

27. Acceptance criteria:

    - Project-local skills are installed for Claude Code and Codex.
    - The portfolio UI router exists in both skill directories.
    - AGENTS.md and CLAUDE.md require the skill workflow.
    - External skills have documented provenance.
    - Third-party scripts and network behavior have been reviewed.
    - Conflicting external instructions have project-specific overrides.
    - Skill activation tests have been completed.
    - No production portfolio UI has been redesigned.
    - Existing work has been preserved.
    - Lint, typecheck, tests and build pass, or exact failures are documented.
    - Nothing has been merged or deployed.

28. Commit the completed work with:

    chore: install portfolio ui agent skills

29. Stop after this commit.

30. Return:

    1. Current and working branch names
    2. Existing-work protection steps
    3. Complete installed-skill list
    4. Installation paths
    5. Sources and commit SHAs
    6. Security and conflict findings
    7. Activation test results
    8. Lint, typecheck, test and build results
    9. Exact files changed
    10. Remaining blockers
    11. Commit hash
    12. Explicit confirmation that nothing was merged or deployed
```
---

# Prompt 01 — Audit the current branch

```text
Read the installed portfolio UI router and repository instructions.

Your assignment is to audit the current repository and redesign branch before
adding or changing portfolio versions.

Do not redesign pages in this task.
Do not remove Firebase/admin functionality.
Do not rewrite the repository.

1. Inspect:
   - current branch
   - diff against main
   - app/
   - components/
   - content/
   - lib/
   - public/
   - Firebase config/rules
   - tests/workflows
   - package scripts
2. Run:
   npm ci
   npm run lint
   npm run typecheck
   npm run build
   existing tests
3. Create docs/four-version-baseline-audit.md.
4. Document:
   - current routes
   - existing V4/redesign work
   - reusable components
   - content sources
   - Firebase collections/admin features
   - duplicate sources
   - missing/broken assets
   - résumé status
   - security-rule problems
   - SEO/sitemap
   - accessibility
   - responsive behavior
   - splash/nav/contact issues
   - unsupported claims
   - build/test failures
   - files to preserve
5. Create docs/four-version-agent-contract.md with:
   - shared content
   - independent presentations
   - V4 at /
   - V1–V3 noindex
   - no copied source
   - no invented facts
   - preserve admin
   - browser QA
   - build gates
   - stop after each phase

Commit:
docs: audit four-version portfolio baseline

Stop and report exact findings and commit hash.
```

---

# Prompt 02 — Harden the existing redesign

```text
Read the baseline audit and agent contract.

Your assignment is to correct the existing redesign branch before expanding it.

Do not build V1, V2 or V3.
Do not replace the V4 design with a new unrelated design.
Preserve existing useful work.

Fix or document:

1. Lint, type and production-build failures.
2. Article source/type inconsistencies.
3. Missing résumé asset or broken route.
4. Placeholder Firebase admin authorization.
5. Content-source conflicts.
6. Public/admin content disconnection.
7. Long or repeated splash screen.
8. Active-section navigation.
9. Experience-tab accessibility if present.
10. Independent App Store/Play Store links.
11. “users” versus “downloads” wording.
12. Contact `mailto` truthfulness.
13. Static/incomplete sitemap.
14. Unsupported public claims.
15. Inconsistent dates, email and product names.

Create:
- docs/redesign-hardening-report.md
- docs/content-architecture.md
- docs/content-confirmation-checklist.md
- docs/firebase-admin-claims.md

Do not deploy Firebase rules.
Do not generate a fake résumé.
Do not delete disconnected admin features without approval.

Run:
npm run lint
npm run typecheck
npm run test
npm run build

Commit:
fix: harden portfolio redesign foundation

Stop and report:
- fixes
- remaining blockers
- facts requiring confirmation
- commands/results
- commit hash
```

---

# Prompt 03 — Build shared four-version foundation

```text
Read the audit, contract, design system and content architecture.

Your assignment is to create the shared four-version foundation.

Do not complete final V1/V2/V3 visuals.
Do not duplicate content.

Create or normalize:

app/v1/page.tsx
app/v2/page.tsx
app/v3/page.tsx
app/v4/page.tsx

components/portfolio/shared/
components/portfolio/v1/
components/portfolio/v2/
components/portfolio/v3/
components/portfolio/v4/

content/portfolio/
lib/portfolio/
styles/portfolio/

Build:

1. Typed version registry.
2. Accessible version switcher.
3. One shared content system.
4. Claim/evidence validation.
5. Shared brand tokens.
6. Shared section/layout primitives.
7. Shared metadata helper.
8. V1–V3 noindex.
9. V4 canonical to /.
10. / and /v4 using the same V4 shell.
11. Safe placeholder shells for unfinished versions.
12. docs/version-implementation-status.md.

Preserve existing routes and admin.

Run:
npm run lint
npm run typecheck
npm run test
npm run build

Commit:
feat: add shared four-version portfolio foundation

Stop and report route map, architecture, build results and commit hash.
```

---

# Prompt 04 — Finish V4 first

```text
Load:
- portfolio-design-direction
- portfolio-design-system
- portfolio-frontend-build
- portfolio-accessibility-review
- portfolio-interaction-review
- portfolio-ai-slop-review
- portfolio-polish-gate
- portfolio-browser-qa

Your assignment is to finish V4 — Mobile Product Engineer at / and /v4.

Preserve existing approved V4 work and improve it rather than restarting.

Required sections:

1. Header
2. Hero
3. Trust proof
4. Featured mobile case studies
5. About
6. Experience
7. Services
8. Working process
9. Technical strengths
10. Other projects
11. Testimonials or How I work with teams
12. Articles
13. Contact
14. Footer
15. Shared version switcher

Requirements:

- Real approved mobile screenshots.
- Strong case-study-first composition.
- Midnight Navy brand.
- Tech Blue CTA with white text.
- Flutter Cyan pointer spotlight.
- Green only for verified FinTech/status.
- Purple only for AI.
- No long splash screen.
- No fake screens or metrics.
- Independent store links.
- Truthful contact behavior.
- Active-section header.
- Accessible mobile menu.
- Pointer spotlight only on desktop pointer devices, disabled for touch and
  reduced motion, paused when hidden.
- / and /v4 use the same implementation.
- / remains canonical.

Verify in browser at:
320, 375, 768, 1024, 1440, 1920 widths.

Run all design review skills, then:
npm run lint
npm run typecheck
npm run test
npm run build

Commit:
feat: complete mobile product portfolio v4

Stop and report:
- design decisions
- screenshots/viewports checked
- accessibility/performance findings
- claims/assets pending approval
- command results
- commit hash
```

---

# Prompt 05 — Build shared case studies

```text
Your assignment is to build one canonical shared project/case-study system used
by every version.

Do not create version-specific project routes.
Do not invent results or product screens.

Build:

1. Typed canonical project model.
2. /projects and /projects/[slug].
3. Product hero.
4. Overview.
5. Role/collaboration.
6. Problem.
7. Constraints.
8. Contribution.
9. Technical decisions.
10. Screens/product flow.
11. Edge cases.
12. Testing/release.
13. Approved outcomes.
14. Technologies/platforms.
15. Independent public links.
16. Related service/project.
17. Contact CTA.
18. Confidential-project handling.
19. Optional return-to-version context without duplicate canonical URLs.
20. docs/case-study-content-approval.md.

Media rules:
- real approved media
- alt text
- dimensions
- responsive sizes
- no private data
- no autoplay sound
- no fabricated screens

Create tests for:
- valid project
- invalid project 404
- hidden unapproved claim
- independent store links
- media accessibility

Run lint, typecheck, tests and build.

Commit:
feat: add shared portfolio case studies

Stop and report publication-ready projects, pending approvals and commit hash.
```

---

# Prompt 06 — Build V1

```text
Load all required portfolio design/build/review skills.

Build /v1 — Classic Developer.

Design:
- Deep navy
- Flutter cyan
- Precise technical typography
- Numbered navigation
- Text-first hero
- Optional lightweight code editor
- Accessible company tabs
- Alternating featured work
- Other-project grid
- Desktop social rails
- Restrained motion
- No cursor spotlight

Sections:
Header, Hero, About, Experience, Featured Work, Other Projects, Skills,
Contact, Footer, Version Switcher.

Do not copy Brittany Chiang’s source, text, logo or exact branded layout.
Use only general principles such as hierarchy, spacing, numbered navigation and
alternating project composition.

Verify:
- active section
- mobile menu
- tab keyboard behavior
- independent project links
- reduced motion
- 320px mobile layout
- no unverified claims

Run browser QA and all repository checks.

Commit:
feat: build classic developer portfolio v1

Stop and report evidence and commit hash.
```

---

# Prompt 07 — Build V2

```text
Load all required portfolio design/build/review skills.

Build /v2 — FinTech Systems Lab.

Design:
- Near-black/navy
- FinTech green for verified status
- Cyan for system/API
- Purple only for AI
- Credible system map
- Structured production-project records
- Professional technical matrix
- Contact console using normal accessible controls

Sections:
Systems Header, Profile Hero, Capability Modules, Production Systems,
Architecture Workflow, Experience Timeline, Technical Matrix, Contact,
Footer, Version Switcher.

Do not use:
- hacker/military language
- Matrix rain
- fake live transaction data
- crypto hype
- fake alerts
- excessive particles

Provide a text alternative for diagrams.
Disable/reduce effects on mobile and reduced motion.
Verify performance and browser console.

Run all checks.

Commit:
feat: build fintech systems portfolio v2

Stop and report evidence and commit hash.
```

---

# Prompt 08 — Build V3

```text
Load all required portfolio design/build/review skills.

Build /v3 — Engineering Notebook.

Design:
- Warm paper
- Charcoal text
- Navy ink
- Sketch gold
- Rare burgundy
- Polaroid portrait
- Restrained hand-drawn annotations
- Real product screenshots
- Human engineering-process presentation

Sections:
Notebook Navigation, Cover/Hero, About, Career Timeline, Product Sketches,
Technical Toolkit, Work Process, Client Notes, Contact, Footer, Version
Switcher.

Rules:
- Handwriting only for short labels.
- Body text remains highly readable.
- No childish doodle overload.
- No rotated essential text.
- No low contrast.
- No fabricated screenshots.
- Remove/reduce decoration on mobile.
- Prevent horizontal overflow.

Run browser QA, accessibility review and all repository checks.

Commit:
feat: build engineering notebook portfolio v3

Stop and report evidence and commit hash.
```

---

# Prompt 09 — Complete content and conversion routes

```text
Your assignment is to finish shared conversion content.

Build or complete:

1. /resume using a real supplied PDF.
2. /contact with truthful behavior.
3. /services and selected /services/[slug] routes when useful.
4. Published article source and article routes.
5. Upwork/client CTA links.
6. Social/contact consistency.
7. Approved testimonials or replace with How I work with teams.
8. Metadata and structured data for these routes.
9. Proposal-specific landing links where they create real value.

Do not:
- generate a fake résumé
- show a fake message-sent state
- publish placeholder articles
- publish unapproved testimonials
- repeat service copy without purpose

Run tests and build.

Commit:
feat: complete portfolio conversion content

Stop and report remaining content approvals and commit hash.
```

---

# Prompt 10 — Accessibility, SEO and performance

```text
Perform a complete cross-version accessibility, SEO and performance pass.

Accessibility target:
WCAG 2.2 AA.

Audit/fix:
- landmarks
- headings
- skip links
- keyboard
- focus
- mobile menus
- tabs
- dialogs
- forms
- errors/status
- images
- contrast
- touch targets
- reduced motion
- 200% zoom/reflow
- horizontal overflow

SEO:
- / canonical
- /v4 canonical to /
- /v1–v3 noindex, follow
- route metadata
- Open Graph/Twitter
- dynamic sitemap
- robots
- article/project structured data
- correct 404
- no placeholder indexing

Performance:
- LCP <= 2.5s target
- INP <= 200ms target
- CLS <= 0.1 target
- no blocking splash
- route code splitting
- optimized images/fonts
- minimal client JS
- effects paused/disabled appropriately

Create:
docs/accessibility-seo-performance-report.md

Verify all target viewports and browser console.

Run all checks.

Commit:
fix: improve portfolio accessibility seo and performance

Stop and report measurements, limitations and commit hash.
```

---

# Prompt 11 — Final QA and CI

```text
Create and execute complete automated and visual QA.

Automated routes:
/
/v1
/v2
/v3
/v4
/projects
one valid project
one invalid project
/articles
one valid article
/contact
/resume
admin-login smoke test

Interactions:
- version switcher
- desktop nav
- mobile menu focus
- active section
- tabs
- project links
- contact
- reduced motion
- keyboard-only navigation
- dialogs/galleries
- 404

Visual widths:
320, 375, 768, 1024, 1440, 1920.

Content QA:
- no old employment date
- no placeholder email
- no fake testimonial
- no unsupported metrics
- no broken résumé
- no hidden store link
- no placeholder article
- no copied reference wording

Security QA:
- no credentials
- no placeholder admin authorization
- admin route/rules documented
- contact validation
- upload restrictions

Create/update CI:
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
Playwright where supported

Create:
docs/four-version-final-qa.md

Commit:
test: complete four-version portfolio qa

Stop and report all pass/fail results and commit hash.
```

---

# Prompt 12 — Final documentation and draft pull request

```text
Prepare the completed system for human review.

1. Read all audit, content, accessibility and QA reports.
2. Confirm V1, V2, V3 and V4 are complete.
3. Confirm / renders V4.
4. Confirm shared case studies work.
5. Confirm no unapproved claim is public.
6. Update README.md with:
   - purpose
   - stack
   - routes
   - four versions
   - architecture
   - commands
   - environment
   - Firebase/admin
   - content updates
   - accessibility
   - SEO/canonical
   - deployment
7. Create docs/portfolio-maintenance-guide.md.
8. Run from a clean state:
   npm ci
   npm run lint
   npm run typecheck
   npm run test
   npm run build
9. Remove debug files, dead code, unused dependencies and placeholders.
10. Do not remove required audit/migration documentation.

Commit:
chore: finalize four-version portfolio

Push the feature branch.
Open a draft pull request into main when GitHub CLI is authenticated.

PR title:
Four-version professional portfolio system

PR description:
- summary
- V1
- V2
- V3
- V4
- shared architecture
- routes
- content approvals
- accessibility
- SEO
- performance
- tests
- security/deployment notes
- screenshots/preview
- rollback plan

Do not merge.
Do not deploy.
Do not mark ready when build/CI/content/security blockers remain.

Stop and return:
- final route map
- command results
- remaining approvals
- PR link
- final commit
- explicit confirmation that nothing was merged/deployed
```

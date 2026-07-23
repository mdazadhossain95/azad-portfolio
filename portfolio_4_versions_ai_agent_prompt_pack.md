# Four-Version Portfolio — AI Agent Prompt Pack

## Purpose

This document is a sequential implementation plan for building four complete visual versions of one portfolio inside a single Next.js repository.

The AI coding agent must receive **one prompt at a time**. Do not paste every prompt together.

The required order is:

1. Prompt 00 — Repository contract and audit
2. Prompt 01 — Generate the empty four-version scaffold
3. Prompt 02 — Build the shared content, brand, routing and version system
4. Prompt 03 — Build Version 1
5. Prompt 04 — Build Version 2
6. Prompt 05 — Build Version 3
7. Prompt 06 — Build Version 4
8. Prompt 07 — Build shared project and case-study pages
9. Prompt 08 — Complete accessibility, SEO and performance
10. Prompt 09 — Complete testing and cross-version QA
11. Prompt 10 — Final integration, documentation and pull request

After every prompt, review the work, run the project, and approve the result before giving the next prompt.

---

# Final Version Definitions

| Route | Version name | Main direction |
|---|---|---|
| `/v1` | Classic Developer | Minimal dark engineering portfolio inspired by strong developer portfolios |
| `/v2` | FinTech Systems Lab | Professional command-centre interface for FinTech, payments and secure systems |
| `/v3` | Engineering Notebook | Warm paper, hand-drawn, personal and creative presentation |
| `/v4` | Mobile Product Engineer | Premium product portfolio and primary client-conversion experience |
| `/` | Latest version | Must render the same experience as V4 |

All versions must use the same verified content, project records, contact links, résumé, employment history and case-study data. Only the presentation layer may change.

---

# Global Rules for Every Prompt

The agent must obey these rules throughout the project:

- Read `AGENTS.md`, `CLAUDE.md`, `README.md`, `package.json` and relevant project files before editing.
- Inspect the current branch and current Git diff before making changes.
- Do not rewrite the repository from scratch.
- Preserve working Firebase/admin functionality unless a task explicitly changes it.
- Do not copy source code, wording, illustrations or assets from another portfolio.
- Design inspiration may be studied, but implementation must be original.
- Do not invent metrics, testimonials, employers, project ownership, user counts or technical responsibilities.
- Use a shared typed content source.
- Do not duplicate professional information across four version folders.
- Do not add a new dependency when the existing stack can solve the problem cleanly.
- Prefer server components. Add client components only where interaction requires them.
- Respect `prefers-reduced-motion`.
- Every interactive control must support keyboard use and visible focus.
- Keep the website responsive from 320px to large desktop screens.
- Run lint, type checking and production build after every phase.
- Do not proceed to another phase automatically.
- Stop after completing the current prompt and report the results.
- Never merge into `main` automatically.
- Never deploy Firebase rules or production services automatically.
- Keep commits focused and use the commit message specified in each prompt.

---

# Prompt 00 — Repository Contract and Current-State Audit

Copy only the prompt below into the AI coding agent.

```text
You are working inside an existing Next.js portfolio repository.

Your assignment is to create a verified implementation baseline before building
the four visual versions.

Do not redesign any page in this phase.
Do not create V1, V2, V3 or V4 yet.
Do not remove Firebase or the admin dashboard.
Do not rewrite the application.

STEP 1 — Read and inspect

Read:

- AGENTS.md
- CLAUDE.md
- README.md
- package.json
- tsconfig.json
- next.config.*
- eslint configuration
- app/
- components/
- content/ if it exists
- lib/
- public/
- Firebase configuration
- firestore.rules
- storage.rules
- existing tests and workflows
- the current Git branch and diff against main

If this repository uses a Next.js version with local documentation installed,
read the relevant documentation before changing framework behaviour.

STEP 2 — Create a working branch

Create and switch to:

feature/four-portfolio-versions

If the branch already exists, continue safely without deleting work.

STEP 3 — Run baseline checks

Run:

npm ci
npm run lint
npx tsc --noEmit
npm run build

Run existing tests if present.

Do not hide errors. Record the exact result of every command.

STEP 4 — Create the audit

Create:

docs/four-version-baseline-audit.md

Document:

1. Current routes
2. Current page and layout structure
3. Existing homepage sections
4. Existing project and article systems
5. Existing Firebase collections and admin features
6. Current public content sources
7. Duplicate sources of truth
8. Existing brand tokens and theme system
9. Existing cursor, animation and navigation behaviour
10. Existing SEO, sitemap and metadata
11. Accessibility support and gaps
12. Responsive support and gaps
13. Missing assets and broken links
14. Security-rule issues
15. Build, lint, type-check and test results
16. Features already completed
17. Features partially completed
18. Features not implemented
19. Files that must be preserved
20. Risks before adding four versions

STEP 5 — Create the implementation contract

Create:

docs/four-version-agent-contract.md

Include these non-negotiable rules:

- One shared source of content
- Four independent presentation layers
- V4 is canonical and is rendered at /
- V1–V3 remain publicly accessible but use noindex
- No invented claims
- No copied design source code
- Existing admin functionality must be preserved or explicitly documented
- Every phase must pass lint, type-check and build
- Every phase stops for review
- Accessibility and reduced-motion support are required
- Mobile layouts are not simplified afterthoughts

Do not make visual or architectural implementation changes yet.

Acceptance criteria:

- Baseline commands were executed
- Both documentation files exist
- No portfolio UI was redesigned
- No current feature was removed
- All blockers are clearly reported

Commit with:

docs: audit four-version portfolio baseline

Stop after the commit.

Return:

1. Branch name
2. Audit summary
3. Build/lint/type-check/test results
4. Existing features that can be reused
5. Blocking problems
6. Exact files created or changed
7. Git commit hash
```

---

# Prompt 01 — Generate the Empty Four-Version Scaffold

This phase creates compiling placeholder files only. It must not build the final designs.

```text
Read docs/four-version-agent-contract.md and
docs/four-version-baseline-audit.md before editing.

Your assignment is to generate the empty, compiling architecture for four
portfolio versions.

Do not design the versions yet.
Do not add real animations yet.
Do not duplicate portfolio content.
Do not replace the current homepage until the scaffold compiles.

STEP 1 — Create the target structure

Use the repository's existing conventions. Unless the audit identifies a better
compatible structure, create:

app/
  v1/
    page.tsx
  v2/
    page.tsx
  v3/
    page.tsx
  v4/
    page.tsx

components/
  portfolio/
    shared/
      portfolio-version-layout.tsx
      version-switcher.tsx
      skip-link.tsx
      section-shell.tsx
      social-links.tsx
      contact-actions.tsx
      motion-preferences.tsx
    v1/
      v1-home.tsx
    v2/
      v2-home.tsx
    v3/
      v3-home.tsx
    v4/
      v4-home.tsx

content/
  portfolio/
    profile.ts
    navigation.ts
    experience.ts
    projects.ts
    services.ts
    skills.ts
    testimonials.ts
    articles.ts
    social-links.ts
    claims.ts
    brand.ts

lib/
  portfolio/
    versions.ts
    metadata.ts
    content-validation.ts

styles/
  portfolio/
    shared.css
    v1.css
    v2.css
    v3.css
    v4.css

docs/
  version-implementation-status.md

Adapt paths if the repository already has equivalent directories. Do not create
parallel duplicate systems.

STEP 2 — Use safe compiling placeholders

Every page and component must compile.

Each version page should render a minimal semantic placeholder containing:

- Version name
- One-sentence description
- Link back to /
- Shared version switcher

Do not leave invalid empty .tsx files.

Do not add final copy, project cards, complex sections or visual effects.

STEP 3 — Create a typed version registry

Create a registry with:

- id: v1 | v2 | v3 | v4
- name
- shortName
- route
- description
- isLatest
- canonicalRoute
- themeAttribute
- noindex

Rules:

- V4 isLatest = true
- V4 canonicalRoute = /
- V1–V3 noindex = true
- V4 noindex = false

STEP 4 — Create the version switcher shell

Implement a simple accessible switcher that:

- Lists V1, V2, V3 and V4
- Uses real links
- Indicates the current page with aria-current="page"
- Has a visible keyboard focus state
- Works without JavaScript
- Does not yet use final fixed-position styling
- Does not automatically redirect users

STEP 5 — Protect the current application

Do not remove existing routes.
Do not remove existing project/article/admin functionality.
Do not move content yet unless necessary for compilation.

STEP 6 — Status document

Update:

docs/version-implementation-status.md

Use a table with:

- Shared foundation
- V1
- V2
- V3
- V4
- Case studies
- SEO
- Accessibility
- Performance
- Testing

Set each visual version to "Scaffold only."

STEP 7 — Validate

Run:

npm run lint
npx tsc --noEmit
npm run build

Acceptance criteria:

- /v1, /v2, /v3 and /v4 compile
- Each route displays a safe placeholder
- Shared version registry exists
- Shared version switcher works by keyboard
- Existing routes still compile
- No design version has been implemented
- No duplicated professional content was introduced

Commit with:

feat: scaffold four portfolio versions

Stop after the commit.

Return:

1. Route list
2. File tree created
3. Validation results
4. Existing functionality preserved
5. Git commit hash
```

---

# Prompt 02 — Shared Content, Brand, Metadata and Version System

```text
Read:

- docs/four-version-agent-contract.md
- docs/four-version-baseline-audit.md
- docs/version-implementation-status.md

Your assignment is to complete the shared foundation used by all four portfolio
versions.

Do not implement the final V1–V4 visual designs yet.

STEP 1 — Establish one source of truth

Create or normalize typed shared content for:

- Professional profile
- Navigation
- Employment experience
- Services
- Skills
- Projects
- Case-study metadata
- Testimonials
- Articles
- Contact and social links
- Résumé link
- Public claims and evidence status

Do not duplicate these records inside version components.

If the project already uses Firestore or another content source, create a clear
adapter rather than silently mixing sources.

Document the decision in:

docs/portfolio-content-architecture.md

STEP 2 — Add claim verification

Use a type similar to:

type EvidenceLevel =
  | "verified"
  | "approved"
  | "private"
  | "unverified";

type PublicClaim = {
  id: string;
  statement: string;
  evidenceLevel: EvidenceLevel;
  evidenceUrl?: string;
  internalNote?: string;
  showPublicly: boolean;
};

Rules:

- Unverified claims must not render publicly.
- Private evidence may be described carefully without exposing confidential data.
- Do not invent numerical outcomes.
- Do not convert downloads into active users.
- Do not claim sole ownership when the work was collaborative.
- Add a validation helper that warns during development when public content
  references an unapproved claim.

STEP 3 — Add the shared brand system

Use the following brand tokens.

Core navy:
- --navy-950: #040D1A
- --navy-900: #061326
- --navy-800: #0B1F3A
- --navy-700: #102A4C
- --navy-600: #1E3A5F
- --navy-500: #243B63

Primary:
- --tech-blue: #2563EB
- --flutter-cyan: #38BDF8

Contextual:
- --fintech-green: #10B981
- --ai-purple: #8B5CF6
- --muted-lavender: #A9B8FF
- --premium-burgundy: #7F1D1D
- --sketch-gold: #D4A62A

Neutral:
- --soft-white: #F8FAFC
- --cool-gray: #CBD5E1
- --slate-gray: #64748B
- --dark-text: #111827
- --white: #FFFFFF
- --dark-charcoal: #2B2F35
- --graphite-gray: #30343A

Supporting:
- --surface-raised: #122B49
- --border-navy: #274567

Do not force every colour into every version.
Define semantic tokens such as:

- --page-background
- --surface
- --surface-raised
- --text-primary
- --text-secondary
- --text-muted
- --accent-primary
- --accent-secondary
- --border-color
- --focus-ring

Each version will map semantic tokens differently.

STEP 4 — Complete shared layout behaviour

The shared portfolio layout must include:

- Skip link
- Main landmark
- Version switcher
- Shared metadata handling
- Optional desktop social rails
- Shared contact actions
- Reduced-motion awareness
- Route-aware current-version detection

The switcher should become fixed at the bottom-right on desktop and compact on
mobile, but it must not obstruct content.

Desktop concept:

Version   V1   V2   V3   V4 · Latest

Mobile concept:

V1  V2  V3  V4

Requirements:

- aria-label
- aria-current
- visible focus
- touch targets at least 44px
- safe-area support
- no overlap with cookie banners, chat widgets or mobile navigation
- no automatic redirect based on localStorage

You may save the last selected version only for visual preference, not forced
navigation.

STEP 5 — Metadata and indexing rules

- / must be canonical.
- /v4 must point canonical metadata to /.
- /v1, /v2 and /v3 must use noindex, follow.
- Each route still requires a meaningful title and description.
- Shared project and article pages must not be duplicated per version.

STEP 6 — Make / render the V4 shell

Change / so it renders the same V4 shell component used by /v4.

Do not implement the final V4 design yet.
The V4 placeholder may remain until Prompt 06.

STEP 7 — Shared responsive primitives

Create reusable primitives for:

- Section width and gutters
- Section heading
- Buttons and links
- Focus ring
- Screen-reader-only text
- Visually hidden captions
- Motion-reduced state
- Responsive typography tokens

STEP 8 — Validate

Run:

npm run lint
npx tsc --noEmit
npm run build

Update docs/version-implementation-status.md.

Acceptance criteria:

- One shared typed content system exists
- No version duplicates professional data
- Brand variables are centralized
- V4 is rendered at /
- Metadata and noindex rules are correct
- Version switcher is accessible and responsive
- Public claims have evidence status
- Existing routes remain functional

Commit with:

feat: add shared portfolio content and brand system

Stop after the commit.

Return:

1. Content architecture summary
2. Brand token summary
3. Metadata/indexing behaviour
4. Validation results
5. Questions requiring human confirmation
6. Git commit hash
```

---

# Prompt 03 — Build Version 1: Classic Developer

## Version objective

V1 should be a restrained, technical, recruiter-friendly portfolio. It may take inspiration from the structure and spacing of strong developer portfolios such as Brittany Chiang V4, but it must not copy source code, exact layout measurements, wording, logo, colours or assets.

```text
Read the shared contract and content architecture before editing.

Your assignment is to fully implement:

/v1 — Classic Developer

Do not modify the completed structure of V2, V3 or V4.
Do not duplicate shared content.
Do not copy another portfolio's source code or exact design.

DESIGN DIRECTION

Create a minimal dark developer portfolio with:

- Deep navy background
- Flutter cyan as the main accent
- Tech Blue for primary actions
- Spacious typography
- Numbered navigation
- Strong keyboard accessibility
- A technical but calm presentation
- Limited animation
- Clear professional hierarchy

V1 semantic palette:

- Background: #061326
- Main surface: #0B1F3A
- Raised surface: #122B49
- Primary text: #F8FAFC
- Secondary text: #CBD5E1
- Muted text: #64748B
- Primary action: #2563EB
- Technical accent: #38BDF8
- Border: #274567

REQUIRED PAGE STRUCTURE

1. Header
2. Hero
3. About
4. Experience
5. Featured work
6. Other projects
7. Skills
8. Contact
9. Footer
10. Shared version switcher

HEADER

- Numbered navigation labels
- Transparent initially
- Becomes blurred/solid after scrolling
- Hides when scrolling down
- Returns when scrolling up
- Desktop résumé button
- Accessible mobile menu
- Active-section tracking with IntersectionObserver
- One active section at a time

HERO

Use a clean text-first layout.

Required hierarchy:

- Small introductory line
- Large name
- Large professional value statement
- Short supporting paragraph
- Primary case-study action
- Secondary résumé/contact action

Add a lightweight original code-editor visual or architecture snippet on large
screens. It must:

- Use real generic Flutter/Dart-style code
- Avoid fake terminal claims
- Be hidden or simplified on small screens
- Be decorative and aria-hidden unless meaningful
- Avoid heavy syntax-highlighting dependencies

ABOUT

- Two-column desktop layout
- Professional photo or restrained portrait frame if an approved asset exists
- Short professional narrative
- Compact list of primary technologies
- No long autobiography
- No unsupported metrics

EXPERIENCE

Implement accessible company tabs:

- Vertical tabs on desktop
- Horizontal scroll on mobile
- role=tablist, role=tab, role=tabpanel
- Arrow keys, Home and End
- One employer visible at a time
- Dates, role, contribution bullets and technologies
- Clear collaborative ownership wording

FEATURED WORK

Use alternating project layouts:

- Project image/mobile mockup on one side
- Content panel on the other
- Alternate direction
- Project type label
- Project title
- Concise summary
- Role/contribution
- Technology list
- Verified result only when approved
- Store, website and case-study links shown independently

OTHER PROJECTS

- Compact grid
- Optional Show More control
- No hover-only essential information
- Clear focus states

SOCIAL RAILS

On large desktop only:

- Social links fixed on the left
- Email or contact link fixed on the right
- Hide when they would crowd the layout
- Do not show on small screens

MOTION

Use subtle motion only:

- Staggered hero reveal
- Section fade/translate
- Link underline
- Card elevation
- Respect reduced motion
- No cursor-following glow in V1
- No continuous decorative animation

MOBILE

- Navigation must be usable at 320px
- No fixed side rails
- Project layouts stack naturally
- Tabs are horizontally scrollable
- Buttons use full or suitable width
- Version switcher must not cover CTAs

ACCEPTANCE CRITERIA

- /v1 is visually complete
- Shared content is used
- Header behaviour works
- Active-section logic works
- Experience tabs are keyboard accessible
- Project store links are independent
- No unverified claim renders
- Mobile layout works from 320px
- Reduced-motion mode is usable
- Lighthouse accessibility has no critical issue
- lint, type-check and build pass

Add tests for:

- V1 route
- Mobile menu
- Experience tabs
- Version switcher
- At least one featured project link

Update docs/version-implementation-status.md.

Commit with:

feat: build classic developer portfolio v1

Stop after the commit.

Return:

1. V1 feature summary
2. Components created
3. Accessibility behaviour
4. Responsive behaviour
5. Test/build results
6. Screens or claims requiring approval
7. Git commit hash
```

---

# Prompt 04 — Build Version 2: FinTech Systems Lab

## Version objective

V2 should feel like a professional financial systems command centre—not a gaming interface, fake hacker terminal or crypto hype page.

```text
Read the shared contract and content architecture before editing.

Your assignment is to fully implement:

/v2 — FinTech Systems Lab

Do not alter the completed V1 design except shared bug fixes.
Do not implement V3 or V4.
Do not duplicate content.

DESIGN DIRECTION

Create a professional dark systems interface focused on:

- FinTech
- Banking workflows
- Payments
- Secure authentication
- Mobile architecture
- API-driven systems
- Production monitoring concepts

The experience may feel futuristic, but it must remain credible for business
clients and engineering managers.

V2 semantic palette:

- Background: #020812 or #040D1A
- Main navy: #061326
- Surface: #0B1F3A
- Raised surface: #102A4C
- FinTech accent: #10B981
- Systems accent: #38BDF8
- AI accent: #8B5CF6
- Primary text: #F8FAFC
- Supporting text: #CBD5E1
- Border: rgba from #274567

Do not use every accent simultaneously.
Green should represent FinTech/status.
Purple should represent AI.
Cyan should represent systems/API/technical information.

REQUIRED PAGE STRUCTURE

1. Systems header
2. Profile status hero
3. Capability modules
4. Production systems/projects
5. Architecture and workflow
6. Experience timeline
7. Technical matrix
8. Contact console
9. Footer
10. Shared version switcher

HEADER

Use clear professional labels such as:

- Profile
- Capabilities
- Systems
- Architecture
- Experience
- Contact

Do not use aggressive military or hacking language.

HERO

Create an original command-centre layout containing:

- Small system-status label
- Name
- Professional role
- Short business-focused description
- Verified status indicators
- Primary case-study CTA
- Contact CTA
- A visual systems panel on desktop

Possible visual modules:

- Mobile client
- Authentication layer
- API gateway
- Transaction service
- Notification service
- Analytics/crash monitoring

These are conceptual architecture labels. Do not falsely claim ownership of
infrastructure not supported by approved content.

CAPABILITY MODULES

Create modules for:

- FinTech and payment flows
- Secure onboarding and authentication
- Firebase and API integration
- Existing-app rescue
- Release and production support
- AI-powered features

Each module should show:

- Business purpose
- Technical capability
- Example approved experience
- Relevant technologies

PRODUCTION SYSTEMS

Present featured projects as system records.

Each record may include:

- System name
- Domain
- Platform
- Role
- Approved capabilities
- Technology
- Public links
- Case-study link
- Evidence status

Use cards, dashboards or structured rows.
Do not make them look like fake live banking data.

ARCHITECTURE VISUAL

Create an original responsive architecture diagram using semantic HTML and CSS
or lightweight SVG.

Requirements:

- Mobile client to service-layer flow
- Labels remain readable
- Accessible text alternative
- No excessive canvas dependency
- No false implication that this exact architecture belongs to every project

BACKGROUND EFFECTS

Optional:

- Very subtle grid
- Low-density particles
- Slow connection lines
- Soft green/cyan glows

Rules:

- No high CPU usage
- Disable for reduced motion
- Pause when tab is not visible if JavaScript animation is used
- Keep contrast and reading comfort
- Do not use Matrix rain
- Do not create fake security alerts
- Do not autoplay sound

EXPERIENCE

Use a vertical systems timeline or structured mission-log presentation.
Keep wording professional and truthful.

TECHNICAL MATRIX

Group skills by:

- Mobile engineering
- State and architecture
- Backend/API integration
- FinTech flows
- Cloud and Firebase
- AI integration
- Release and maintenance

Do not create a wall of badges.

CONTACT CONSOLE

Create a professional enquiry interface.

It may visually resemble a console, but inputs must use normal accessible form
controls and clear labels.

Do not claim a message was sent if the implementation only opens mailto.

MOBILE

- Convert complex dashboard layout into stacked modules
- Remove nonessential particles
- Preserve hierarchy and readability
- Avoid horizontal overflow
- Keep primary CTA above the fold where practical

ACCEPTANCE CRITERIA

- /v2 is visually complete and original
- It feels FinTech-focused, not game-like
- Background effects are optional and performant
- Reduced-motion mode removes continuous animation
- All capability claims come from approved content
- Architecture visual has a text alternative
- Contact controls are accessible
- Mobile layout is usable at 320px
- lint, type-check and build pass

Add tests for:

- V2 route
- Capability navigation
- Architecture alternative text
- Reduced-motion behaviour where practical
- Contact action semantics
- Version switcher

Update docs/version-implementation-status.md.

Commit with:

feat: build fintech systems portfolio v2

Stop after the commit.

Return:

1. V2 design summary
2. Performance strategy
3. Accessibility strategy
4. Approved versus hidden claims
5. Test/build results
6. Git commit hash
```

---

# Prompt 05 — Build Version 3: Engineering Notebook

## Version objective

V3 should be creative, warm and memorable while remaining readable and professional. It must not look childish or sacrifice accessibility for handwritten styling.

```text
Read the shared contract and content architecture before editing.

Your assignment is to fully implement:

/v3 — Engineering Notebook

Do not modify completed V1 or V2 designs except shared bug fixes.
Do not implement V4.
Do not duplicate content.

DESIGN DIRECTION

Create a warm engineering notebook and product-sketch portfolio.

The design language should include:

- Warm paper background
- Dark charcoal text
- Hand-drawn borders
- Sketch arrows and annotations
- Polaroid-style portrait frame
- Notebook labels and figure numbers
- Slightly irregular but controlled layout
- Professional information architecture

V3 semantic palette:

- Paper background: #F4EEDF
- Paper surface: #FFFDF7
- Main text: #2B2F35
- Supporting text: #64748B or a suitable warm gray
- Ink/navy accent: #0B1F3A
- Sketch gold: #D4A62A
- Premium burgundy: #7F1D1D
- Technical blue: #2563EB
- Border/ink: #30343A

Use gold for highlights and annotations.
Use burgundy rarely.
Use navy to connect V3 to the shared brand.

TYPOGRAPHY

Use:

- A highly readable sans-serif or serif for body text
- A handwritten font only for labels, annotations or short headings
- A monospace font for technical notes

Do not use handwriting for long paragraphs.
Self-host or use the repository's existing font strategy responsibly.
Prevent layout shift.

REQUIRED PAGE STRUCTURE

1. Notebook navigation
2. Cover/hero page
3. About the engineer
4. Career timeline
5. Selected product sketches
6. Technical toolkit
7. Working notes/process
8. Client notes/testimonials
9. Contact page section
10. Footer
11. Shared version switcher

HERO

Create:

- Small notebook label such as "mobile product notebook"
- Name
- Professional role
- Short value statement
- Primary work CTA
- Contact/résumé CTA
- Approved portrait inside a polaroid-style frame
- Original sketch decorations

Decorations may include:

- Arrow
- Underline
- Flutter widget-tree note
- Architecture note
- Small phone outline
- Figure number

Decorative items must be aria-hidden.

ABOUT

Use a notebook spread or pinned-note composition.
Keep text concise and readable.

CAREER TIMELINE

Create a hand-drawn vertical timeline:

- Employer
- Role
- Date
- Contribution
- Technologies

Do not rotate body text.
Do not use tiny notes for essential content.

SELECTED PRODUCT SKETCHES

Present projects as annotated notebook case-study previews.

Each project should include:

- Problem
- Role
- Key contribution
- Technical decision
- Approved outcome
- Platform links
- Case-study link

Possible presentation:

- Phone screenshot taped to paper
- Callout arrows
- Small architecture note
- Numbered figure
- Technology stamps

Use real approved screenshots where available.
Do not fabricate app screens.

TECHNICAL TOOLKIT

Use an illustrated toolbox or grouped note cards.
Keep semantic headings and text beneath any decorative visual.

WORKING NOTES

Present the work process as notebook steps:

1. Understand
2. Audit
3. Plan
4. Build
5. Test
6. Release
7. Support

Use plain wording and avoid exaggerated claims.

TEXTURE AND EFFECTS

Create paper texture using lightweight CSS gradients or a very small optimized
asset.

Do not:

- Load a large background image
- Add continuous animation
- Make every border irregular
- Reduce contrast
- Rotate form fields
- Hide content inside hover states

MOTION

Use subtle interactions:

- Draw-in underline
- Small paper lift
- Polaroid tilt on hover
- Section annotation reveal

All must be disabled or simplified for reduced motion.

CONTACT

Use a notebook-style form or clear contact card.
Labels must remain normal and readable.
Buttons must look creative but behave conventionally.

MOBILE

- Convert notebook spreads into one-column pages
- Keep annotations from overlapping content
- Reduce decorative arrows
- Keep portrait and CTA readable
- Prevent rotated elements from causing overflow
- Ensure the version switcher remains visible but unobtrusive

ACCEPTANCE CRITERIA

- /v3 is visually complete and original
- Body text remains highly readable
- Decorative handwriting is not used for long copy
- Contrast meets WCAG AA for essential text
- No fake screenshots are created
- Project facts come from shared content
- Mobile has no overlap or horizontal scroll
- Reduced-motion mode is complete
- lint, type-check and build pass

Add tests for:

- V3 route
- Navigation
- Contact action
- Project links
- Version switcher
- No obvious horizontal overflow at target widths

Update docs/version-implementation-status.md.

Commit with:

feat: build engineering notebook portfolio v3

Stop after the commit.

Return:

1. V3 visual summary
2. Typography and texture choices
3. Accessibility decisions
4. Responsive decisions
5. Test/build results
6. Assets requiring approval
7. Git commit hash
```

---

# Prompt 06 — Build Version 4: Mobile Product Engineer · Latest

## Version objective

V4 is the canonical portfolio and must be the strongest client-conversion experience. It should combine premium dark product design, mobile-app presentation, subtle pointer lighting, professional case studies and clear hiring actions.

```text
Read the shared contract and content architecture before editing.

Your assignment is to fully implement:

/v4 — Mobile Product Engineer · Latest

The same V4 component must render at /.

Do not redesign V1, V2 or V3 except shared bug fixes.
Do not duplicate content.
Do not create unsupported claims.

DESIGN DIRECTION

Create a premium dark mobile-product portfolio with:

- Midnight navy identity
- Strong mobile app visuals
- Real case-study emphasis
- Subtle cursor-following cyan spotlight
- Product-focused typography
- Clear trust indicators
- Strong contact and hiring actions
- Controlled animation
- High performance

V4 semantic palette:

- Deep background: #040D1A or #061326
- Main surface: #0B1F3A
- Secondary surface: #102A4C
- Raised surface: #122B49
- Primary text: #F8FAFC
- Secondary text: #CBD5E1
- Muted text: #64748B
- Primary CTA: #2563EB with #FFFFFF text
- Cursor glow: #38BDF8
- FinTech context: #10B981
- AI context: #8B5CF6
- Border: #274567

REQUIRED PAGE STRUCTURE

1. Premium header
2. Hero
3. Trust proof
4. Featured mobile case studies
5. About
6. Experience
7. Services
8. Working process
9. Technical strengths
10. Additional projects
11. Testimonials
12. Articles
13. Contact
14. Footer
15. Shared version switcher

HEADER

- Clean navigation
- Active-section tracking
- Hide on scroll down, reveal on scroll up
- Blurred surface after scrolling
- Case studies CTA or résumé action
- Accessible mobile menu
- Focus management
- No visual crowding

HERO

Use a split product layout.

Content side:

- Name
- Strong mobile-product headline
- Concise positioning statement
- Primary "View case studies" action
- Secondary contact or Upwork action
- Availability/status only if approved and current

Visual side:

- Approved real app screenshots
- High-quality phone mockup composition
- Product labels
- Subtle lighting
- No fake interfaces
- No unsupported app-store badges

TRUST PROOF

Create a compact trust bar using only approved facts.

Possible categories:

- Years of experience
- Production mobile apps
- Android and iOS release experience
- FinTech experience
- Upwork status
- Team leadership

Do not display unverified numbers.
When a fact is not approved, omit the card instead of inventing a replacement.

FEATURED MOBILE CASE STUDIES

Use 3–5 strongest verified projects.

Each preview must include:

- Product/domain
- Role and collaboration context
- Problem
- Key contribution
- Technical decisions
- Approved result
- Platforms
- Technology
- Public store/website links
- Full case-study action

Use alternating layouts with large app visuals.
Show Play Store and App Store links independently.

ABOUT

Explain:

- Product-engineering focus
- Experience joining existing codebases
- Production maintenance mindset
- Collaboration style
- Release ownership
- Approach to reliability

Keep it concise.

EXPERIENCE

Use accessible tabs or a polished timeline.
Do not repeat every detail already used in project sections.

SERVICES

Create clear service cards for:

- Production Flutter development
- Existing Flutter app improvement
- FinTech and payment integration
- Firebase and REST API integration
- App Store and Google Play release
- AI-powered mobile features

Each card must explain:

- Client problem
- Deliverable
- Suitable project stage
- Related case study or contact action

WORKING PROCESS

Use a clear process:

1. Discovery
2. Codebase/product audit
3. Scope and architecture
4. Incremental implementation
5. Testing and release
6. Post-launch support

Avoid generic filler.

TECHNICAL STRENGTHS

Group capabilities by outcome rather than showing a badge wall.

Examples:

- Mobile architecture
- State management
- APIs and Firebase
- FinTech workflows
- Release engineering
- AI integration
- Debugging and maintenance

TESTIMONIALS

Show only real approved testimonials.
If none are approved, replace the section with "How I work with teams" rather
than fabricated quotes.

ARTICLES

Show real published article summaries from the single article source.
Do not link to placeholder articles.

CONTACT

Create a conversion-focused section with:

- Clear project invitation
- Email
- Upwork or professional platform link
- Optional contact form
- Expected response wording only if current and approved

If the form uses mailto, say "Open email draft."
Do not show "Message sent" without a server-confirmed submission.

CURSOR SPOTLIGHT

Implement a fixed radial-gradient spotlight.

Requirements:

- Desktop pointer devices only
- CSS variables for x/y position
- requestAnimationFrame updates
- pointer-events: none
- opacity approximately 0.08–0.12
- radius approximately 550–700px
- #38BDF8 glow
- no layout shift
- no hydration mismatch
- disabled on touch devices
- disabled for prefers-reduced-motion
- stopped or inactive when document is hidden
- content remains above the effect

MOTION

Use:

- Small hero stagger
- Section reveals
- Mockup depth
- Button and link feedback
- Card image transitions

Do not use:

- Long splash screens
- Page-blocking loaders
- Excessive parallax
- Autoplay audio
- Heavy 3D
- Motion that delays content

MOBILE

- Product visuals stack after primary copy
- CTA remains visible
- Case-study text precedes or follows visuals consistently
- No fixed side rails
- Cursor glow disabled
- Navigation and switcher do not overlap
- Forms and buttons use comfortable touch targets

CANONICAL ROUTING

- / renders V4
- /v4 renders the same V4 component
- / is canonical
- /v4 canonical points to /
- Avoid duplicated state or content

ACCEPTANCE CRITERIA

- / and /v4 render the same completed V4 experience
- V4 is the strongest, most polished version
- Real mobile products are visually central
- Cursor spotlight meets all performance and accessibility rules
- No long blocking splash exists
- Contact semantics are truthful
- Project links are independent
- Testimonials are real or the section is replaced
- Mobile works from 320px
- lint, type-check and build pass

Add tests for:

- / and /v4
- Header scroll behaviour
- Active-section navigation
- Mobile menu focus
- Cursor spotlight disabled for reduced motion
- Contact action
- Featured project links
- Version switcher
- Canonical metadata

Update docs/version-implementation-status.md.

Commit with:

feat: build mobile product portfolio v4

Stop after the commit.

Return:

1. V4 design summary
2. Shared / and /v4 architecture
3. Cursor implementation summary
4. Conversion strategy
5. Accessibility and performance summary
6. Test/build results
7. Claims/assets requiring approval
8. Git commit hash
```

---

# Prompt 07 — Shared Projects and Full Case Studies

```text
Read the shared contract, content architecture and completed V1–V4
implementations.

Your assignment is to build one shared project and case-study system used by all
four visual versions.

Do not create separate project-detail pages for each version.
Do not duplicate case-study content.
Do not invent results or responsibilities.

STEP 1 — Create a canonical project model

The model should support:

- slug
- title
- shortTitle
- domain
- summary
- productContext
- role
- collaborationContext
- responsibilities
- problem
- constraints
- approach
- architectureDecisions
- implementationHighlights
- edgeCases
- testingAndRelease
- approvedResults
- technologies
- platforms
- screenshots
- video
- store links
- website link
- confidentiality note
- evidence records
- related service
- featured priority
- publication status

Every result must point to an approved claim.

STEP 2 — Build one canonical route

Use the repository's existing project route when possible, such as:

/projects/[slug]

The page must include:

1. Hero
2. Product overview
3. Role and collaboration
4. Problem
5. Constraints
6. Contribution
7. Architecture/technical decisions
8. Screens and product flow
9. Edge cases
10. Testing/release
11. Approved outcomes
12. Technology
13. Public links
14. Related project/service
15. Contact CTA

STEP 3 — Support version-aware entry without duplicate pages

When a visitor arrives from V1, V2, V3 or V4, the case-study page may retain a
small visual context or "Return to Vx" link.

Do not duplicate the page content or create separate canonical URLs.

Possible query or session context may be used, but canonical must remain the
single project URL.

STEP 4 — Media handling

- Use approved real screenshots
- Add descriptive alt text
- Use responsive Next.js image handling
- Define dimensions to prevent CLS
- Support optional captions
- Support an optional short muted video
- Never autoplay video with sound
- Provide poster and controls
- Do not invent app screens

STEP 5 — Confidential work

For confidential projects:

- State the limitation clearly
- Explain public contribution at a safe level
- Do not reveal private APIs, credentials, client data or proprietary diagrams
- Provide a private-discussion CTA only when appropriate

STEP 6 — Validation checklist

Create:

docs/case-study-content-approval.md

For every project list:

- Approved title
- Approved role
- Approved responsibilities
- Approved screenshots
- Approved links
- Approved metrics
- Pending statements
- Confidentiality restrictions
- Publication readiness

STEP 7 — Tests

Add tests for:

- Project route generation
- Missing project 404
- Store links
- Screenshot accessibility
- Hidden unapproved claims
- Return-to-version link

Run lint, type-check, tests and build.

Acceptance criteria:

- One shared project system exists
- Four versions link to it
- No duplicate case-study routes
- No unapproved metric renders
- Media is responsive and accessible
- Missing projects return 404
- Build passes

Commit with:

feat: add shared portfolio case studies

Stop after the commit.

Return:

1. Project model summary
2. Route summary
3. Content approval gaps
4. Tests/build results
5. Git commit hash
```

---

# Prompt 08 — Accessibility, SEO and Performance Completion

```text
Your assignment is to perform a full cross-version accessibility, SEO and
performance pass.

Do not change the established visual identity unless required to fix a measurable
problem.

ACCESSIBILITY

Audit V1, V2, V3, V4 and shared routes for:

- Semantic landmarks
- Heading order
- Skip links
- Keyboard navigation
- Visible focus
- Mobile menu focus trap and focus return
- Tab semantics
- Form labels
- Error messages
- Link purpose
- Image alt text
- Decorative aria-hidden usage
- Dialog focus management
- Colour contrast
- Touch target size
- Reduced motion
- Screen-reader announcements
- Horizontal overflow
- Zoom to 200%

Target WCAG 2.2 AA.

SEO

Implement or verify:

- / canonical
- /v4 canonical to /
- /v1–/v3 noindex, follow
- Unique route titles and descriptions
- Open Graph
- Twitter metadata
- Person/ProfessionalService structured data where truthful
- Project structured data where suitable
- Article structured data
- Dynamic app/sitemap.ts
- robots configuration
- Correct 404 behaviour
- No placeholder content indexed
- No duplicated canonical project/article pages

PERFORMANCE

Measure and improve:

- LCP
- INP
- CLS
- JavaScript size
- Image sizing
- Font loading
- Animation cost
- Firebase/client fetching
- Hydration behaviour
- Third-party scripts
- Route loading

Targets:

- LCP <= 2.5 seconds on a representative mobile test
- INP <= 200ms
- CLS <= 0.1

Rules:

- Remove page-blocking splash screens
- Lazy-load noncritical media
- Do not lazy-load the LCP hero image
- Prefer CSS effects over large JavaScript libraries
- Pause animation when hidden
- Disable heavy effects on mobile/reduced motion
- Avoid loading every version's component code on one route
- Ensure route-level code splitting
- Do not preload assets for versions the user has not opened

CREATE DOCUMENTATION

Create:

docs/accessibility-seo-performance-report.md

Include:

- Issues found
- Files changed
- Before/after measurements
- Remaining limitations
- Manual checks required

TEST VIEWPORTS

- 320x568
- 375x812
- 768x1024
- 1024x768
- 1440x900
- 1920x1080

Run:

npm run lint
npm run typecheck
npm run test
npm run build

Run accessibility and Lighthouse tooling available in the repository.

Acceptance criteria:

- No critical accessibility issues
- No accidental indexing of V1–V3
- Dynamic sitemap includes canonical public content
- No route loads all four version bundles
- No blocking splash
- Core Web Vitals targets are met or remaining blockers are documented
- Build passes

Commit with:

fix: improve portfolio accessibility seo and performance

Stop after the commit.

Return:

1. Accessibility summary
2. SEO/indexing summary
3. Performance measurements
4. Remaining limitations
5. Validation results
6. Git commit hash
```

---

# Prompt 09 — Complete Testing and Cross-Version QA

```text
Your assignment is to create and run a comprehensive test and visual QA plan for
the complete four-version portfolio.

Do not redesign pages in this phase unless a test exposes a real defect.

AUTOMATED TESTING

Use the repository's existing tools. If no suitable tools exist, add the minimum
maintainable setup for:

- Unit/component tests
- Playwright end-to-end tests
- Accessibility checks
- Build validation

Required route tests:

- /
- /v1
- /v2
- /v3
- /v4
- /projects
- One valid project page
- One invalid project page
- /articles
- One valid article page
- /contact
- /resume if implemented
- Admin login smoke test without exposing credentials

Required interaction tests:

- Version switcher from every version
- Desktop navigation
- Mobile menu
- Focus trap and focus return
- Active section
- Experience tabs
- Project external links
- Contact form/action
- Reduced motion
- Keyboard-only navigation
- 404 route
- Theme-specific effects do not block interaction

VISUAL QA

Check every version at:

- 320px
- 375px
- 768px
- 1024px
- 1440px
- 1920px

Check:

- No horizontal scroll
- No text clipping
- No overlapping decorations
- Version switcher does not cover content
- Navigation does not cover anchors
- Buttons remain readable
- Mobile mockups fit
- V2 effects remain performant
- V3 annotations remain legible
- V4 cursor glow is absent on touch/reduced-motion
- Footer and contact sections remain accessible

CONTENT QA

Verify:

- No "Present" employment date when the role ended
- No unsupported user/download conversions
- No placeholder email
- No fake testimonials
- No broken résumé link
- No hidden store link when both stores exist
- No duplicated project facts
- No placeholder article
- No copied reference-site wording

LINK QA

Check:

- Internal routes
- Anchor links
- Store links
- Website links
- GitHub
- LinkedIn
- Upwork
- Email
- Résumé
- Article links
- Project links

SECURITY QA

Check:

- No credentials in repository
- No private Firebase secrets exposed beyond normal public client config
- No placeholder admin authorization
- Rules documented
- Contact endpoint validation
- File-upload restrictions
- Admin route protection
- Dependency audit findings documented

CI

Create or update GitHub Actions to run:

- npm ci
- npm run lint
- npm run typecheck
- npm run test
- npm run build
- Playwright tests where supported

CREATE REPORT

Create:

docs/four-version-final-qa.md

Include:

- Test matrix
- Pass/fail results
- Defects fixed
- Deferred defects
- Content approval gaps
- Security notes
- Deployment blockers

Acceptance criteria:

- All critical tests pass
- All four versions load independently
- Version switching works
- No critical mobile defect
- No broken primary CTA
- No public unsupported claim
- CI is configured
- Build passes

Commit with:

test: complete four-version portfolio qa

Stop after the commit.

Return:

1. Automated test summary
2. Visual QA summary
3. Content QA summary
4. Security summary
5. Remaining blockers
6. Git commit hash
```

---

# Prompt 10 — Final Integration, Documentation and Pull Request

```text
Your assignment is to prepare the completed four-version portfolio for human
review and a pull request.

Do not merge automatically.
Do not deploy automatically.
Do not change public content without approval.

STEP 1 — Final status review

Read:

- docs/four-version-baseline-audit.md
- docs/four-version-agent-contract.md
- docs/version-implementation-status.md
- docs/portfolio-content-architecture.md
- docs/case-study-content-approval.md
- docs/accessibility-seo-performance-report.md
- docs/four-version-final-qa.md

Confirm that:

- V1 is complete
- V2 is complete
- V3 is complete
- V4 is complete
- / renders V4
- Shared case studies work
- Tests pass
- SEO rules are correct
- Accessibility blockers are resolved
- No unapproved claim is public

STEP 2 — Update project documentation

Update README.md with:

- Project purpose
- Technology stack
- Route map
- Four-version overview
- Shared content architecture
- Development commands
- Testing commands
- Environment variables
- Firebase/admin notes
- Accessibility notes
- SEO/canonical behaviour
- Deployment instructions
- Content update process

Create:

docs/portfolio-maintenance-guide.md

Explain:

- How to update profile data once
- How to add a project
- How to approve a claim
- How to add screenshots
- How to add an article
- How to update the résumé
- How to change version labels
- How to change brand tokens
- How to test all versions
- How to preserve canonical SEO

STEP 3 — Final command run

Run from a clean state:

git status
npm ci
npm run lint
npm run typecheck
npm run test
npm run build

Run Playwright and Lighthouse/accessibility checks configured by the repository.

STEP 4 — Clean repository

Remove:

- Temporary screenshots not required by the project
- Debug logs
- Dead components
- Unused imports
- Old duplicated content
- Placeholder text
- Commented-out experiments
- Unused dependencies

Do not remove migration documentation or approved audit reports.

STEP 5 — Final commit

Commit with:

chore: finalize four-version portfolio

STEP 6 — Push and create draft pull request

Push:

feature/four-portfolio-versions

If GitHub CLI is authenticated, open a draft pull request into main.

PR title:

Four-version professional portfolio system

PR description must include:

1. Summary
2. V1 overview
3. V2 overview
4. V3 overview
5. V4 overview
6. Shared architecture
7. Routes
8. Accessibility work
9. SEO and canonical rules
10. Performance work
11. Test results
12. Screenshots or preview links
13. Content requiring approval
14. Security/deployment notes
15. Rollback notes

Do not mark the pull request ready for review if:

- Any required build fails
- A broken résumé link remains
- A placeholder admin rule remains
- A public claim is unapproved
- A version has a critical mobile defect
- CI fails

Stop after creating the draft pull request.

Return:

1. Final route map
2. Final feature summary
3. Command results
4. Remaining approval items
5. Pull request link
6. Final commit hash
7. Explicit statement that nothing was merged or deployed
```

---

# Review Gate After Every Prompt

Before sending the next prompt, check:

- Did the agent stop at the requested phase?
- Did it run lint, type checking and build?
- Did it provide a commit hash?
- Did it preserve existing features?
- Did it avoid invented claims?
- Did it update the status document?
- Did it introduce unnecessary dependencies?
- Does the affected route work on mobile?
- Are keyboard and reduced-motion behaviours included?
- Is the code reusable rather than duplicated?

Do not continue when the answer to any critical item is no.

---

# Final Expected Route Map

```text
/
  Canonical V4 experience

/v1
  Classic Developer

/v2
  FinTech Systems Lab

/v3
  Engineering Notebook

/v4
  Same V4 experience as /

/projects
/projects/[slug]

/articles
/articles/[slug]

/services
/services/[slug]        optional if already part of the architecture

/contact
/resume

/admin
/admin/login

/travel                  preserve only when intentionally part of the product
/travel/[slug]
```

---

# Final Expected Architecture

```text
app/
  page.tsx
  v1/page.tsx
  v2/page.tsx
  v3/page.tsx
  v4/page.tsx
  projects/
  articles/
  contact/
  resume/
  admin/

components/
  portfolio/
    shared/
    v1/
    v2/
    v3/
    v4/

content/
  portfolio/
    profile.ts
    navigation.ts
    experience.ts
    projects.ts
    services.ts
    skills.ts
    testimonials.ts
    articles.ts
    social-links.ts
    claims.ts
    brand.ts

lib/
  portfolio/
    versions.ts
    metadata.ts
    content-validation.ts

styles/
  portfolio/
    shared.css
    v1.css
    v2.css
    v3.css
    v4.css

docs/
  four-version-baseline-audit.md
  four-version-agent-contract.md
  version-implementation-status.md
  portfolio-content-architecture.md
  case-study-content-approval.md
  accessibility-seo-performance-report.md
  four-version-final-qa.md
  portfolio-maintenance-guide.md
```

---

# Definition of Done

The project is complete only when:

- Four visually distinct versions exist.
- All versions use one shared content source.
- V4 is rendered at `/`.
- The fixed version switcher works on desktop and mobile.
- V1–V3 are noindex.
- V4 is canonical.
- Shared project pages are used by all versions.
- No unsupported claim is public.
- No fake testimonial is public.
- No broken résumé or contact action exists.
- Firebase/admin functionality is preserved or deliberately migrated.
- Every version is keyboard accessible.
- Every version supports reduced motion.
- Every version works at 320px.
- Route-level code splitting prevents loading all versions together.
- Lint, type checking, tests and production build pass.
- CI passes.
- Documentation explains how to maintain the system.
- A draft pull request is created.
- Nothing is merged or deployed without human approval.

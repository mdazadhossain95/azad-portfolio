# Azad Portfolio — Final Build Blueprint

**Repository:** `https://github.com/mdazadhossain95/azad-portfolio`  
**Current technology:** Next.js 16 App Router, React, TypeScript, Tailwind CSS 4, Firebase Authentication, Firestore, Firebase Storage and Vercel.  
**Primary goal:** Build one maintainable portfolio platform with four visually distinct experiences, one verified content source, shared case studies and a strong Upwork/client-conversion path.

---

# 1. Final product vision

The finished website should communicate:

> A senior Flutter engineer who can build, improve, stabilize and release production mobile products, with strongest evidence in FinTech, payments, API-connected applications, Firebase, app maintenance and store releases.

The website must not behave like a generic résumé template. It should demonstrate:

- Product thinking
- Production engineering maturity
- Visual design awareness
- Reliable frontend implementation
- Mobile-app presentation
- FinTech specialization
- Existing-codebase maintenance ability
- Clear communication and client conversion
- Accessibility and performance discipline

The four-version feature is not a gimmick. It should prove that one content and engineering system can support multiple coherent visual identities.

---

# 2. Current codebase baseline

The existing repository already contains useful infrastructure:

- Next.js App Router
- Homepage
- Projects and dynamic project routes
- Articles and dynamic article routes
- Travel routes
- Contact route
- Admin login and dashboard
- Firebase project/article/review/travel/settings collections
- Image uploads
- Featured-project management
- Basic responsive design
- Basic SEO files
- Existing redesign work on `portfolio-redesign-v2`
- Cursor/modern UI experimentation in the redesign branch
- Typed/local content work in the redesign branch

The project should therefore be **refactored and extended**, not discarded.

## Existing work to preserve

- Admin authentication
- Project CRUD
- Article CRUD until the content architecture decision is final
- Review CRUD
- Travel CRUD
- Settings/social links
- Firebase Storage uploads
- Dynamic project routes
- Dynamic article routes
- Existing approved images
- Existing SEO metadata that remains valid
- Existing build configuration

## Existing risks to resolve

- Placeholder Firebase admin authorization
- Multiple content sources
- Public pages potentially disconnected from admin content
- Static and incomplete sitemap
- Broken or missing résumé asset
- Unsupported or unclear public claims
- Inconsistent employment dates and product names
- Inconsistent contact information
- Generic theme colors in older code
- Long or blocking splash-screen behavior
- Missing automated test/CI coverage
- Possible article-type/content mismatch
- Project result text hardcoded inside presentation components
- Incomplete active-section navigation
- Incomplete accessibility verification

---

# 3. Final route map

```text
/
  Canonical V4 portfolio

/v1
  Classic Developer

/v2
  FinTech Systems Lab

/v3
  Engineering Notebook

/v4
  Same V4 implementation as /

/projects
/projects/[slug]

/articles
/articles/[slug]

/services
/services/[slug]       optional but recommended

/contact
/resume

/admin
/admin/login

/travel
/travel/[slug]          preserve if intentionally public

/api/contact            only if implementing a real server-side form
```

## Indexing rules

- `/` is canonical.
- `/v4` points its canonical metadata to `/`.
- `/v1`, `/v2` and `/v3` use `noindex, follow`.
- Project and article pages have one canonical URL each.
- Do not create `/v1/projects/...`, `/v2/projects/...` and similar duplicate routes.
- Version-aware return links may use query parameters or session state without changing canonical URLs.

---

# 4. Final architecture

Use one shared content and domain layer with four independent presentation layers.

```text
app/
├── page.tsx
├── v1/page.tsx
├── v2/page.tsx
├── v3/page.tsx
├── v4/page.tsx
├── projects/
├── articles/
├── services/
├── contact/
├── resume/
└── admin/

components/
└── portfolio/
    ├── shared/
    │   ├── version-switcher.tsx
    │   ├── portfolio-shell.tsx
    │   ├── section-shell.tsx
    │   ├── project-link-group.tsx
    │   ├── contact-actions.tsx
    │   ├── social-links.tsx
    │   ├── claim.tsx
    │   ├── media-frame.tsx
    │   ├── skip-link.tsx
    │   └── motion-preferences.tsx
    ├── v1/
    ├── v2/
    ├── v3/
    └── v4/

content/
└── portfolio/
    ├── profile.ts
    ├── navigation.ts
    ├── experience.ts
    ├── projects.ts
    ├── services.ts
    ├── skills.ts
    ├── testimonials.ts
    ├── articles.ts
    ├── social-links.ts
    ├── claims.ts
    └── brand.ts

lib/
└── portfolio/
    ├── versions.ts
    ├── metadata.ts
    ├── content-validation.ts
    ├── project-query.ts
    └── article-query.ts

styles/
└── portfolio/
    ├── shared.css
    ├── v1.css
    ├── v2.css
    ├── v3.css
    └── v4.css

docs/
├── design/
├── content-architecture.md
├── content-approval.md
├── accessibility-report.md
├── performance-report.md
├── qa-report.md
└── maintenance-guide.md
```

## Server/client boundary

Prefer Server Components for:

- Page shells
- Static content
- Project and article rendering
- Metadata
- Structured data
- Section markup

Use small Client Components only for:

- Version switcher enhancement
- Mobile navigation
- Experience tabs
- Active-section tracking
- Pointer spotlight
- Galleries/dialogs
- Contact-form interaction
- Motion that cannot be expressed safely with CSS

Do not import all four versions into one large client component. Each route must code-split naturally.

---

# 5. Shared content strategy

## Recommended source-of-truth split

### Typed local content

Use typed local content for stable professional information:

- Profile
- Employment history
- Services
- Skills
- Curated project/case-study records
- Public claims and evidence
- Version labels
- Navigation
- Brand configuration

This improves:

- Build reliability
- SEO
- Type safety
- Reviewability
- Git history
- Prevention of accidental public claims

### MDX

Use MDX for:

- Technical articles
- Long-form case-study narrative when appropriate

### Firebase

Keep Firebase for dynamic/personal/admin-managed information where it creates real value:

- Reviews/testimonials after approval
- Travel content
- Contact/settings if needed
- Draft content workflow
- Image uploads
- Admin authentication

Do not silently combine Firestore and local fallback content. Create an explicit adapter and documented priority.

## Claim-evidence model

```ts
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
```

Rules:

- `unverified` claims never render publicly.
- `private` evidence may support careful wording but must not expose confidential information.
- Store downloads are not active users.
- Collaborative work must not be represented as sole ownership.
- Results require evidence or direct approval.
- Unsupported claims should be omitted, not replaced with invented numbers.

---

# 6. Shared brand foundation

## Core colors

```css
:root {
  --navy-950: #040d1a;
  --navy-900: #061326;
  --navy-800: #0b1f3a;
  --navy-700: #102a4c;
  --navy-600: #1e3a5f;
  --navy-500: #243b63;

  --surface-raised: #122b49;
  --border-navy: #274567;

  --tech-blue: #2563eb;
  --flutter-cyan: #38bdf8;
  --fintech-green: #10b981;
  --ai-purple: #8b5cf6;
  --muted-lavender: #a9b8ff;
  --premium-burgundy: #7f1d1d;
  --sketch-gold: #d4a62a;

  --soft-white: #f8fafc;
  --cool-gray: #cbd5e1;
  --slate-gray: #64748b;
  --dark-text: #111827;
  --dark-charcoal: #2b2f35;
  --graphite-gray: #30343a;
  --white: #ffffff;
}
```

## Color roles

- Tech Blue: primary actions
- Flutter Cyan: technical highlights and V4 spotlight
- FinTech Green: verified FinTech/status context
- AI Purple: AI-related content
- Muted Lavender: supporting AI details
- Burgundy: rare premium/editorial details
- Sketch Gold: V3 annotation/highlight
- Navy: dominant brand identity

Do not use all accents in one section.

---

# 7. Shared UI system

Create a documented system for:

## Typography

- Display
- H1
- H2
- H3
- Body large
- Body
- Small
- Label
- Monospace annotation

Use no more than two primary font families per version. Handwriting is limited to short V3 annotations.

## Spacing

Use a predictable scale such as:

```text
4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128
```

## Radius

Use a deliberate scale:

```text
0, 4, 8, 12, 16, 24, pill
```

Do not apply the same large radius to every component.

## Motion

Define:

- fast feedback: 120–180ms
- standard transition: 180–260ms
- large reveal: 300–500ms
- easing tokens
- reduced-motion alternatives

Use transform and opacity where practical.

## Interactive states

Every applicable component needs:

- Default
- Hover
- Pressed
- Focus-visible
- Current/selected
- Disabled
- Loading
- Success
- Error

Essential information cannot be hover-only.

---

# 8. Shared version switcher

Desktop:

```text
Version   V1   V2   V3   V4 · Latest
```

Mobile:

```text
V1  V2  V3  V4
```

Requirements:

- Fixed bottom-right on desktop
- Compact and safe-area-aware on mobile
- Real links that work without JavaScript
- `aria-current="page"`
- 44px touch targets
- Visible focus
- Does not cover forms, CTAs or navigation
- Does not force automatic redirection
- May remember preference without overriding the canonical first visit
- Displays version names on hover/focus where space allows

---

# 9. Version specifications

## V1 — Classic Developer

### Audience

- Recruiters
- Engineering managers
- Technical teams
- Long-term development contracts

### Signature

Precise numbered navigation, strong typography, accessible experience tabs and alternating project layouts.

### Sections

1. Header
2. Hero
3. About
4. Experience tabs
5. Featured work
6. Other projects
7. Skills
8. Contact
9. Footer

### Visual rules

- Deep navy
- Flutter cyan
- Text-first hero
- Optional lightweight code-editor visual
- Fixed desktop social rails
- Restrained animation
- No pointer spotlight
- No cyber styling
- No excessive cards

### Inspiration rule

Use principles such as hierarchy, spacing, numbered navigation and alternating projects. Do not copy Brittany Chiang’s source code, wording, logo, exact dimensions or branded composition.

---

## V2 — FinTech Systems Lab

### Audience

- FinTech companies
- Banking and payment products
- Secure API-connected platforms
- Technical founders

### Signature

A credible systems map showing mobile client, authentication, APIs, payments, notifications and monitoring.

### Sections

1. Systems header
2. Profile-status hero
3. Capability modules
4. Production systems/projects
5. Architecture workflow
6. Experience timeline
7. Technical matrix
8. Contact console
9. Footer

### Visual rules

- Near-black and navy
- FinTech green for verified status
- Cyan for systems/API
- Purple only for AI
- Subtle grid/connections
- No Matrix rain
- No fake financial data
- No hacker or military language
- No crypto hype
- Effects disabled or reduced on mobile/reduced-motion

---

## V3 — Engineering Notebook

### Audience

- Creative founders
- Personal-brand visitors
- Startup teams
- People interested in process and personality

### Signature

Warm engineering notebook with a polaroid portrait, product sketches and restrained annotations.

### Sections

1. Notebook navigation
2. Cover/hero
3. About
4. Career timeline
5. Product sketches
6. Technical toolkit
7. Work process
8. Client notes
9. Contact
10. Footer

### Visual rules

- Warm paper
- Charcoal text
- Navy ink
- Sketch gold
- Burgundy rarely
- Handwriting only for short labels
- Real screenshots only
- No childish doodles
- No rotated essential content
- No low-contrast paper effect
- Mobile removes overlapping decoration

---

## V4 — Mobile Product Engineer

### Audience

- Upwork clients
- Founders
- FinTech startups
- Mobile product teams
- Long-term remote clients

### Signature

Premium mobile app case studies with real phone screenshots and a subtle cyan pointer spotlight.

### Sections

1. Header
2. Hero
3. Trust proof
4. Featured mobile case studies
5. About
6. Experience
7. Services
8. Process
9. Technical strengths
10. Other projects
11. Testimonials or team-working section
12. Articles
13. Contact
14. Footer

### Visual rules

- Canonical at `/`
- Strong real product visuals
- Midnight Navy
- Tech Blue CTA
- Flutter Cyan spotlight
- Green only for verified FinTech/status
- Purple only for AI
- No long splash screen
- No fake device screens
- No unsupported trust metrics
- No excessive parallax or heavy 3D

### Pointer spotlight

- Desktop pointer devices only
- `requestAnimationFrame`
- CSS x/y variables
- `pointer-events: none`
- Radius around 550–700px
- Opacity around 0.08–0.12
- `#38BDF8`
- Disabled for touch and reduced motion
- Paused when document is hidden
- Never replaces the cursor
- Never blocks interaction

---

# 10. Shared project and case-study system

Each project should support:

```ts
type PortfolioProject = {
  slug: string;
  title: string;
  shortTitle?: string;
  domain: string;
  summary: string;
  productContext: string;
  role: string;
  collaborationContext?: string;
  responsibilities: string[];
  problem: string;
  constraints: string[];
  approach: string[];
  architectureDecisions: string[];
  implementationHighlights: string[];
  edgeCases?: string[];
  testingAndRelease?: string[];
  approvedResults: string[];
  technologies: string[];
  platforms: string[];
  screenshots: MediaAsset[];
  video?: MediaAsset;
  links: {
    website?: string;
    playStore?: string;
    appStore?: string;
    repository?: string;
  };
  confidentialityNote?: string;
  evidenceClaimIds: string[];
  relatedServiceSlug?: string;
  featuredPriority?: number;
  published: boolean;
};
```

## Case-study page structure

1. Product hero
2. Overview
3. Role and collaboration
4. Problem
5. Constraints
6. Contribution
7. Technical decisions
8. Product flow/screens
9. Edge cases
10. Testing and release
11. Approved outcomes
12. Technology
13. Public links
14. Related service/project
15. Contact CTA

## Media rules

- Real approved screenshots
- Descriptive alt text
- Empty alt for decoration
- Known dimensions
- Optimized format
- Responsive `sizes`
- Captions where context is useful
- Muted video with controls and poster
- No autoplay audio
- No fabricated app UI

---

# 11. Contact system

## Preferred implementation

Create a real server-side contact endpoint only when it can be secured properly.

Required protections:

- Schema validation
- Honeypot
- Rate limiting
- Server-side email provider
- Clear success/error state
- Privacy-conscious logging
- No secrets in client code

## Fallback

When using `mailto:`:

- Button label: **Open email draft**
- Do not show **Message sent**
- Pre-fill a useful subject/body
- Keep visible direct email and Upwork link

---

# 12. Firebase and security

## Required correction

Do not use a placeholder admin email in Firestore or Storage rules.

Prefer a custom claim:

```text
request.auth != null &&
request.auth.token.admin == true
```

## Security tasks

- Document how the claim is assigned
- Verify admin routes
- Verify Firestore writes
- Verify Storage upload restrictions
- Restrict file size/type/path
- Keep public read access only where intentionally required
- Never deploy rules automatically from an AI-agent task
- Review environment-variable use
- Do not treat client-side allowlists as real security

---

# 13. SEO

Implement:

- Metadata per route
- Canonical rules
- `noindex` for V1–V3
- Open Graph
- Twitter metadata
- Dynamic `app/sitemap.ts`
- Robots configuration
- Person/ProfessionalService structured data only when truthful
- Article structured data
- Project structured data where suitable
- Correct 404 behavior
- No placeholder pages in sitemap
- No duplicate version-specific project pages

---

# 14. Accessibility target

Target WCAG 2.2 AA.

Audit:

- Semantic landmarks
- Skip links
- Heading order
- Keyboard navigation
- Focus visibility
- Mobile-menu trap and focus return
- Tabs
- Dialogs
- Forms
- Error messages
- Image alternatives
- Contrast
- Touch targets
- Reduced motion
- Reflow at 200% zoom
- Horizontal overflow
- Color-independent meaning

Do not claim full compliance without verification.

---

# 15. Performance targets

Target:

- LCP ≤ 2.5 seconds
- INP ≤ 200ms
- CLS ≤ 0.1

Rules:

- No blocking splash screen
- Do not lazy-load the LCP image
- Lazy-load lower-page media
- Define image dimensions
- Optimize fonts
- Minimize Client Components
- Prevent loading all four version bundles
- Use CSS before JavaScript for simple effects
- Pause nonessential animation when hidden
- Disable heavy effects on touch/reduced-motion
- Avoid unnecessary third-party scripts
- Use server/static rendering for public content where practical

---

# 16. Project-local AI skill system

Install and use:

## Official/reviewed skills

- Anthropic frontend design
- Anthropic webapp testing
- Vercel React best practices
- Vercel Next.js best practices
- Vercel web-interface review

## Project-specific skills

- `portfolio-ui-router`
- `portfolio-design-direction`
- `portfolio-design-system`
- `portfolio-wireframe`
- `portfolio-frontend-build`
- `portfolio-accessibility-review`
- `portfolio-interaction-review`
- `portfolio-ai-slop-review`
- `portfolio-polish-gate`
- `portfolio-browser-qa`

## Required workflow

```text
Task
→ router
→ design direction
→ design system
→ wireframe
→ implementation
→ accessibility
→ interaction states
→ AI-slop review
→ polish
→ browser QA
→ lint/typecheck/tests/build
→ stop for review
```

Do not install arbitrary third-party skills without reviewing:

- Source
- Commit SHA
- License
- Scripts
- Network access
- Conflicting instructions
- Update behavior

---

# 17. Implementation phases

## Phase 0 — Protect and install skills

Build:

- Safe feature branch
- Project-local skills in `.claude/skills` and `.agents/skills`
- `AGENTS.md` and `CLAUDE.md` protocol
- Skill provenance audit

Exit gate:

- No UI changed
- Skills are reviewable and pinned/documented
- Build state recorded

---

## Phase 1 — Audit and harden current branch

Build/fix:

- Complete repository audit
- Build/lint/type-check status
- Content-source map
- Firebase security plan
- Broken link and asset report
- Résumé check
- Date/email/product-name inconsistencies
- Unsupported claim list
- Splash/nav/contact/sitemap issues
- Existing V4 work preservation plan

Exit gate:

- No known critical uncertainty is hidden
- Current work is backed up
- Agent knows what to preserve

---

## Phase 2 — Shared foundation

Build:

- Version registry
- Version routes
- Version switcher
- Shared typed content
- Claim validation
- Brand tokens
- Shared primitives
- Canonical/noindex metadata
- `/` and `/v4` shared shell

Exit gate:

- Four routes compile
- No duplicated profile/project data
- V4 canonical behavior works

---

## Phase 3 — Complete V4 first

Reason:

- Existing redesign work already points toward V4
- V4 is the public default
- It produces the fastest client value
- Other versions can reuse its approved content and case studies

Build:

- Premium header
- Hero
- Trust proof
- Real mobile visuals
- Featured projects
- About
- Experience
- Services
- Process
- Technical strengths
- Testimonials/team-working section
- Articles
- Contact
- Pointer spotlight
- Responsive and reduced-motion behavior

Exit gate:

- `/` and `/v4` match
- No unverified claim
- Mobile and keyboard behavior verified
- No blocking splash

---

## Phase 4 — Shared case studies

Build:

- Canonical project model
- Project detail route
- Media handling
- Evidence-linked results
- Confidentiality handling
- Return-to-version context
- Content approval document

Exit gate:

- Strongest 3–5 projects are publication-ready
- Store links work independently
- Missing project returns 404

---

## Phase 5 — V1

Build the recruiter/engineering version.

Exit gate:

- Numbered nav
- Experience tabs
- Alternating work
- Restrained motion
- No V4-only spotlight

---

## Phase 6 — V2

Build the professional FinTech systems version.

Exit gate:

- Credible architecture map
- No hacker/game UI
- Effects are performant
- Technical claims are approved

---

## Phase 7 — V3

Build the creative notebook version.

Exit gate:

- High readability
- Restrained handwriting
- No overlap/overflow
- Real media only

---

## Phase 8 — Content and conversion

Build/finalize:

- Résumé route/file
- Service pages
- Project-specific proposal links
- Articles
- Contact system
- Approved testimonials
- Upwork CTA
- Social links
- Structured data

Exit gate:

- All primary CTAs work
- No placeholder content
- Contact semantics are truthful

---

## Phase 9 — Accessibility, SEO and performance

Complete audits and fixes.

Exit gate:

- No critical accessibility issue
- Correct canonical/indexing behavior
- Dynamic sitemap
- Performance targets met or blockers documented

---

## Phase 10 — Automated and visual QA

Test:

- All routes
- Version switching
- Mobile menu
- Tabs
- Galleries
- Contact
- Links
- Reduced motion
- 404
- Security configuration
- Console/network
- Responsive screenshots

Viewports:

```text
320×568
375×812
768×1024
1024×768
1440×900
1920×1080
```

Exit gate:

- CI passes
- No critical mobile defect
- No broken primary CTA
- No horizontal overflow

---

## Phase 11 — Documentation and draft PR

Build:

- Updated README
- Maintenance guide
- Content update guide
- Skill update guide
- QA report
- Security notes
- Draft pull request

Do not merge or deploy automatically.

---

# 18. Agent behavior rules

Every coding-agent prompt must say:

1. Read repository instructions.
2. Inspect the current diff.
3. Work only on the requested phase.
4. Preserve existing functionality.
5. Do not invent facts.
6. Use shared content.
7. Run browser QA for UI work.
8. Run lint, type checking, tests and build.
9. Commit with the specified message.
10. Stop and report evidence.

The agent must report:

- Files changed
- Commands run
- Results
- Screens/viewports verified
- Claims needing approval
- Remaining blockers
- Commit hash
- Confirmation that nothing was merged/deployed

---

# 19. Git strategy

Recommended:

```text
main
└── portfolio-redesign-v2
    └── feature/four-portfolio-versions
```

Before branching, the agent must inspect the actual repository and avoid discarding uncommitted work.

Suggested phase commits:

```text
chore: install portfolio ui agent skills
docs: audit four-version portfolio baseline
feat: add shared portfolio foundation
feat: complete mobile product portfolio v4
feat: add shared portfolio case studies
feat: build classic developer portfolio v1
feat: build fintech systems portfolio v2
feat: build engineering notebook portfolio v3
fix: improve portfolio accessibility seo and performance
test: complete four-version portfolio qa
chore: finalize four-version portfolio
```

---

# 20. Definition of done

The project is complete only when:

- Four visually distinct versions exist.
- All versions use one shared verified content source.
- `/` renders V4.
- `/v4` uses the same implementation.
- V1–V3 are `noindex, follow`.
- The version switcher works without JavaScript and is accessible.
- Shared project and article pages are canonical.
- Strong case studies explain role, problem, decisions and approved outcomes.
- No unsupported metric or fake testimonial is public.
- No broken résumé/contact/store link exists.
- Firebase/admin functionality is preserved or deliberately migrated.
- Security rules do not use placeholder authorization.
- Every version works at 320px.
- Every version supports keyboard use and reduced motion.
- All primary interactions have complete states.
- Route-level code splitting prevents loading all versions together.
- Lighthouse/Core Web Vitals targets are met or limitations are documented.
- Lint, type checking, automated tests and production build pass.
- CI passes.
- Maintenance documentation exists.
- A draft pull request is open.
- Nothing is merged or deployed without human approval.

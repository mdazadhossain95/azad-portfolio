# Azad Portfolio — Complete Final Master Document

This single-file edition combines the final build blueprint, design/UI rules, execution prompts and content approval checklist.

---

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


---

# Azad Portfolio — Final Design and UI Rules

This document is the visual and interaction contract for all four versions.

---

# 1. Universal design principles

Every version must be:

- Recognizable within five seconds
- Visually intentional
- Original in implementation
- Built around real professional evidence
- Accessible by keyboard
- Responsive at 320px
- Fast enough for real client use
- Consistent within itself
- Distinct from the other three versions
- Connected to the same Azad Hossain brand

The versions must not differ only by color. They need different:

- Composition
- Typography character
- Navigation behavior
- Project presentation
- Visual rhythm
- Media treatment
- Interaction language

---

# 2. Brand palette

## Navy family

| Token | Color | Role |
|---|---:|---|
| Navy 950 | `#040D1A` | Deep background |
| Navy 900 | `#061326` | Primary dark page |
| Midnight Navy | `#0B1F3A` | Main brand surface |
| Navy 700 | `#102A4C` | Secondary surface |
| Navy 600 | `#1E3A5F` | Supporting surface |
| Navy 500 | `#243B63` | Lighter navy detail |
| Raised Surface | `#122B49` | Cards/panels |
| Border Navy | `#274567` | Borders and dividers |

## Primary/contextual accents

| Token | Color | Role |
|---|---:|---|
| Tech Blue | `#2563EB` | Primary CTA |
| Flutter Cyan | `#38BDF8` | Technical highlight and glow |
| FinTech Green | `#10B981` | Verified FinTech/status |
| AI Purple | `#8B5CF6` | AI content |
| Muted Lavender | `#A9B8FF` | Supporting AI detail |
| Premium Burgundy | `#7F1D1D` | Rare premium/editorial detail |
| Sketch Gold | `#D4A62A` | V3 annotation |

## Neutral colors

| Token | Color | Role |
|---|---:|---|
| Soft White | `#F8FAFC` | Main dark-theme text |
| Cool Gray | `#CBD5E1` | Supporting text |
| Slate Gray | `#64748B` | Muted text |
| Dark Text | `#111827` | Light-theme body text |
| Dark Charcoal | `#2B2F35` | V3 main text |
| Graphite Gray | `#30343A` | V3 line/ink |
| White | `#FFFFFF` | CTA text |

## Color discipline

- Use navy for approximately 60–75% of V1, V2 and V4.
- Use neutrals for approximately 15–30%.
- Use accents for approximately 5–10%.
- Give each section one main accent.
- Never use green, blue, cyan, purple, burgundy and gold together without semantic reason.
- Burgundy must not be a primary CTA.
- Pure black should be rare.
- Gradients require a purpose such as lighting, depth or product emphasis.

---

# 3. Typography

## Shared principles

- Clear size contrast between levels
- Mobile body text at least 16px
- Comfortable line height
- Long paragraphs limited to readable measure
- Font loading must not cause large layout shift
- No more than two main families per version
- Monospace is for technical labels, not every paragraph
- Handwriting is only for V3 annotations and short headings

## Suggested character by version

### V1

- Modern sans-serif
- Restrained monospace accent
- Precise, technical, clean

### V2

- Geometric/technical sans-serif
- Monospace for system labels and data categories
- Never use illegible sci-fi display text

### V3

- Readable serif or humanist sans-serif for body
- Handwriting for small labels
- Monospace for technical notes

### V4

- Premium modern sans-serif
- Strong display hierarchy
- Compact monospace for metadata

---

# 4. Layout and spacing

## Containers

- Maximum content width around 1160–1240px
- Wider media compositions may exceed the text column
- Mobile gutters: 16–24px
- Tablet gutters: 32–48px
- Desktop gutters: 64px where appropriate

## Section rhythm

- Use larger gaps around major narrative transitions
- Use smaller gaps inside related component groups
- Avoid identical spacing between every section
- Keep anchor offsets compatible with the sticky header

## Responsive rules

Test:

```text
320
375
768
1024
1440
1920
```

Do not:

- Depend on hover
- Allow horizontal scroll
- Let decoration overlap essential content
- Use fixed side rails on small screens
- Keep desktop-only visual complexity when it harms mobile clarity

---

# 5. Components

## Buttons

### Primary

- Tech Blue background
- White text
- Strong focus ring
- Clear pressed state
- No generic glowing gradient

### Secondary

- Transparent or surface background
- Border
- Cyan/brand text
- Visible hover/focus
- Adequate contrast

### Text link

- Clear underline or directional affordance
- Not color-only
- External links indicated appropriately

## Cards

Use cards only when grouping truly benefits comprehension.

Avoid:

- Three identical cards because a template expects them
- Glassmorphism everywhere
- Huge identical radii
- Random colored left borders
- Essential content hidden on hover

## Navigation

Must support:

- Keyboard
- Current state
- Mobile focus trap
- Focus return
- Escape to close
- Scroll offset
- Reduced motion
- No layout jump

## Tabs

Must support:

- `tablist`
- `tab`
- `tabpanel`
- Arrow keys
- Home/End
- Visible focus
- One selected tab
- Horizontal scrolling on mobile where needed

## Forms

Must include:

- Visible labels
- Correct input type
- Autocomplete
- Validation
- Field-linked errors
- Loading state
- Server-confirmed success
- No fake success for `mailto:`

---

# 6. Motion

## Allowed

- Hero stagger
- Section reveal
- Link underline
- Button feedback
- Image depth/transition
- V3 underline drawing
- V4 pointer spotlight
- Very subtle V2 system connection motion

## Not allowed

- Blocking splash screens
- Autoplay sound
- Excessive parallax
- Motion that delays reading
- Continuous animation on every section
- Heavy 3D
- Matrix rain
- Fake terminal typing that prevents immediate content access

## Reduced motion

When `prefers-reduced-motion: reduce`:

- Remove continuous movement
- Remove pointer spotlight
- Remove large spatial transitions
- Keep state changes immediate
- Preserve meaning without animation

---

# 7. Version-specific UI contract

## V1 — Classic Developer

### Remembered for

- Numbered navigation
- Precise hero
- Accessible experience tabs
- Alternating featured work
- Restrained social rails

### Do

- Use large name/value hierarchy
- Keep copy concise
- Use subtle fade/reveal
- Show technical competence through real content

### Do not

- Use cyber effects
- Use V4 cursor spotlight
- Copy another developer’s source
- Turn every section into cards

---

## V2 — FinTech Systems Lab

### Remembered for

- Credible system map
- Structured project records
- FinTech status language
- Controlled data/system visual style

### Do

- Use green for verified financial/status context
- Use cyan for APIs and architecture
- Present security and transactions carefully
- Provide accessible text alternatives for diagrams

### Do not

- Use hacker language
- Invent live transaction data
- Use fake security alerts
- Use crypto-hype language
- Overload the page with particles

---

## V3 — Engineering Notebook

### Remembered for

- Warm paper
- Polaroid portrait
- Product sketch annotations
- Human engineering process

### Do

- Keep body copy conventional and readable
- Use annotations as support
- Use real screenshots
- Reduce decorations on mobile

### Do not

- Use handwriting for paragraphs
- Rotate essential text
- Create childish doodle overload
- Use low-contrast paper colors
- Fabricate sketches of products as if they are screenshots

---

## V4 — Mobile Product Engineer

### Remembered for

- Real mobile products
- Premium dark product composition
- Strong case-study previews
- Subtle pointer light
- Clear hiring actions

### Do

- Put mobile screenshots at the visual center
- Use verified trust facts
- Show store links independently
- Keep pointer effect subtle and optional
- Prioritize Upwork/client conversion

### Do not

- Use a 2.5-second splash
- Fabricate phone screens
- Claim users when evidence is downloads
- Add excessive floating gradients
- Hide contact actions below too much content

---

# 8. Anti-generic design review

Before declaring a page complete, remove or justify:

- Generic centered hero with vague copy
- Repeated equal card rows
- Purple gradient with no AI context
- Decorative emoji
- Default component-library appearance
- Random pill badges
- Same radius everywhere
- Weak “modern” stock illustrations
- Filler metrics
- Fake testimonial portraits
- Vague words such as “seamless,” “revolutionary,” “elevate,” “unleash”
- Sections that repeat the same claim
- Four versions that only change palette

---

# 9. Browser QA

For every version:

1. Render the actual page.
2. Capture desktop and mobile screenshots.
3. Check the browser console.
4. Test keyboard navigation.
5. Test touch-size and mobile menu.
6. Test reduced motion.
7. Test external links.
8. Test contact behavior.
9. Test no horizontal overflow.
10. Verify the version switcher does not cover content.

Source-code review alone is not sufficient.


---

# Azad Portfolio — Final AI Agent Execution Prompts

## How to use this file

Give the coding agent **one prompt at a time**.

Do not paste the entire document into one task.

After every prompt:

1. Review the diff.
2. Run the application.
3. Check the report and commit hash.
4. Confirm the phase is complete.
5. Only then give the next prompt.

---

# Prompt 00 — Install and verify UI skills

```text
Work on the current portfolio feature branch. Do not redesign a page in this task.

Your assignment is to install, inspect and verify the project-local UI design
skill system before further portfolio implementation.

1. Read AGENTS.md, CLAUDE.md, README.md, package.json and the current Git diff.
2. Inspect the current branch. Preserve uncommitted work.
3. Create a safe checkpoint commit or backup branch when needed.
4. Add the approved project-local UI skill pack under:
   tools/azad-portfolio-ui-skills/
5. Run its project installation script to copy skills into:
   .claude/skills/
   .agents/skills/
6. Confirm the portfolio UI router and specialist skills exist in both paths.
7. Add the supplied skill protocol to AGENTS.md and CLAUDE.md without duplication.
8. Install only reviewed official skills for:
   - frontend design
   - browser/webapp testing
   - React best practices
   - Next.js best practices
   - web-interface review
9. Use project-local copied files. Record source repository and commit SHA.
10. Inspect every SKILL.md and script before use.
11. Do not install the complete Trystan system prompt as a global instruction.
    Use the adapted project-local workflow.
12. Treat Aura as a research catalogue. Do not automatically execute arbitrary
    community skill scripts.
13. Create docs/agent-skills-installation-audit.md containing:
    - skill
    - source
    - commit
    - installation path
    - scripts/network access
    - conflicts
    - project overrides
    - update/uninstall process
14. Test skill routing with planning/review tasks only. Do not edit production UI.
15. Run:
    npm run lint
    npm run typecheck
    npm run build

Commit:
chore: install portfolio ui agent skills

Stop and report:
- installed skills
- provenance
- security/conflict findings
- commands/results
- changed files
- commit hash
- confirmation that nothing was merged/deployed
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


---

# Azad Portfolio — Content Approval Checklist

Use this file before publishing claims or case studies.

---

# 1. Identity and contact

- [ ] Final public name
- [ ] Final professional title
- [ ] Primary public email
- [ ] LinkedIn URL
- [ ] GitHub URL
- [ ] Upwork URL
- [ ] Portfolio canonical URL
- [ ] Public résumé filename and route
- [ ] WhatsApp visibility decision
- [ ] Current availability wording
- [ ] Current hourly-rate wording, if shown

---

# 2. Employment

## Codego

- [ ] Exact start month
- [ ] Exact end month: June 2026
- [ ] Public company wording approved
- [ ] Product names approved
- [ ] Features personally built versus contributed to
- [ ] KYC wording approved
- [ ] SEPA wording approved
- [ ] IBAN/multi-IBAN wording approved
- [ ] Biometric wording approved
- [ ] Firebase responsibility approved
- [ ] Store-release responsibility approved
- [ ] Confidentiality restrictions documented

## AppDevs

- [ ] Exact dates
- [ ] Role progression approved
- [ ] Team size/leadership claim approved
- [ ] Employee of the Month evidence approved
- [ ] AdBot contribution approved
- [ ] Public client/product names approved
- [ ] “200+ apps” wording either evidenced, carefully qualified or removed

## Divine IT

- [ ] Exact dates
- [ ] Flutter contribution approved
- [ ] Django/backend contribution approved
- [ ] Technologies accurately described

---

# 3. Current profile claims

For every claim mark:

```text
verified / approved / private / unverified
```

- [ ] 5+ years experience
- [ ] 100% Upwork Job Success
- [ ] Rising Talent
- [ ] Total Upwork jobs
- [ ] Total earnings
- [ ] Response time
- [ ] More than 30 hours/week
- [ ] Team of seven
- [ ] Two Employee of the Month awards
- [ ] 10K+ Google Play downloads
- [ ] Any active-user claim
- [ ] 200+ apps
- [ ] 300+ cases
- [ ] 15+ clients
- [ ] PCI-compliance wording
- [ ] Telehealth latency claim
- [ ] 40% AI search-time claim
- [ ] On-device ML claim
- [ ] RAG pipeline claim
- [ ] Healthcare specialization
- [ ] Claude certification wording

Unverified claims must not render.

---

# 4. Project approval template

Repeat this section for every project.

## Project

- Title:
- Slug:
- Company/client:
- Public or confidential:
- Published:

### Role

- [ ] Exact role approved
- [ ] Team/collaboration context approved
- [ ] Personal responsibilities approved
- [ ] Architecture decisions approved
- [ ] Store-release responsibility approved

### Content

- [ ] Product overview approved
- [ ] Problem approved
- [ ] Constraints approved
- [ ] Technical approach approved
- [ ] Edge cases approved
- [ ] Testing/release approved
- [ ] Result wording approved

### Evidence

- [ ] Website
- [ ] Google Play
- [ ] Apple App Store
- [ ] Analytics
- [ ] Client statement
- [ ] Company statement
- [ ] Screenshot
- [ ] Video
- [ ] Private evidence

### Media

- [ ] Screenshots are real
- [ ] Screenshots may be published
- [ ] No private data appears
- [ ] Alt text prepared
- [ ] Device mockup use approved
- [ ] Video use approved

### Result

- Claim:
- Evidence level:
- Evidence location:
- Public wording:
- Internal note:

---

# 5. Priority projects

## Recommended first case studies

1. CodegoPay Individual
2. CodegoPay Business or another clearly verified Codego product
3. FiberVPN
4. AdBot or StudyGenie
5. One strong AppDevs marketplace/business app

For each:

- [ ] Final title
- [ ] Product naming consistency
- [ ] Personal contribution
- [ ] Public links
- [ ] Screenshots
- [ ] Approved result
- [ ] Confidentiality note

---

# 6. Testimonials

- [ ] Testimonial is real
- [ ] Person/client approved public display
- [ ] Quote wording is exact or approved
- [ ] Company/title approved
- [ ] Photo/logo permission approved
- [ ] Source documented

If no testimonial is approved, use a **How I work with teams** section instead.

---

# 7. Articles

- [ ] Article exists
- [ ] Article is complete
- [ ] Slug works
- [ ] Date is accurate
- [ ] Summary is accurate
- [ ] Cover image is approved
- [ ] No placeholder article is displayed
- [ ] Canonical metadata exists

---

# 8. Publication gate

Before merge:

- [ ] No `admin@example.com`
- [ ] No broken résumé link
- [ ] No old Codego “Present”
- [ ] No duplicate email
- [ ] No unsupported metric
- [ ] No fake testimonial
- [ ] No fake screenshot
- [ ] Both store links show when available
- [ ] Contact behavior is truthful
- [ ] Sitemap includes published routes
- [ ] V1–V3 are noindex
- [ ] V4 is canonical

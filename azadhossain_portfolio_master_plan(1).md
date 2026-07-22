# `azadhossain.dev` — Professional Portfolio Master Plan

> **Version:** 2.0  
> **Purpose:** A complete UI, content, conversion, technical, and implementation plan based on the current portfolio codebase and the latest professional context provided by Md Azad Hossain Tutul.

---

# 1. North-Star Goal

Transform `azadhossain.dev` from a general project showcase into a focused, premium case-study website that helps:

- Upwork clients trust Azad before opening a conversation
- Recruiters understand his seniority within seconds
- Startup founders see how he can help their product
- Engineering managers verify production Flutter experience
- Visitors reach the right hiring action without confusion

The website must communicate one primary idea:

> **Md Azad Hossain Tutul is a Senior Flutter Developer with hands-on production experience in FinTech, payments, AI-powered mobile products, existing-app improvement, and Android/iOS releases.**

The website should not try to give equal importance to every technology and industry. Flutter is the primary identity. FinTech and production delivery are the strongest differentiators. AI, Firebase, backend integration, subscriptions, and full-stack delivery are supporting capabilities.

---

# 2. Final Professional Positioning

## Recommended public title

> **Senior Flutter Developer | FinTech, Payments & AI Mobile Apps**

## Recommended hero headline

> **I build and improve production Flutter apps.**

## Recommended supporting statement

> I help product teams build secure Android and iOS applications, improve existing Flutter codebases, integrate APIs and payments, and deliver stable store releases.

## Current professional status

Use:

> **Independent Senior Flutter Developer available for freelance, contract, and long-term remote work.**

Do not use:

> Currently working at Codego

The current source material indicates the Codego role ended in June 2026. Present Codego as highly valuable previous production experience.

## Supporting strengths

- Production European FinTech experience
- IBAN, SEPA, KYC, biometric authentication, and transaction flows
- Firebase, REST APIs, notifications, analytics, and Crashlytics
- Existing Flutter app rescue, maintenance, and feature development
- App Store and Google Play deployment
- Team leadership and mentoring experience
- AI features using OpenAI, ChatGPT, Gemini, and related workflows
- Subscription, VPN, utility, marketplace, and MVP experience

---

# 3. Facts and Claims Policy

A professional portfolio becomes weaker when it uses impressive claims that are unclear or difficult to verify. Every public claim must fall into one of these categories:

1. **Verified:** supported by public links, store listings, contracts, certificates, or documented employment
2. **Explainable:** accurate but needs careful wording and context
3. **Private evidence:** cannot be shown publicly, but can be discussed at a high level
4. **Remove until verified:** not safe to publish as a factual result

## Recommended claims

| Claim | Recommended use |
|---|---|
| 5+ years of experience | Keep |
| 100% Upwork Job Success | Keep, but update when status changes |
| Rising Talent | Keep temporarily, update automatically or review monthly |
| Android and iOS production releases | Keep |
| Previous Codego FinTech experience | Keep |
| Led a team of seven Flutter developers | Keep when accurate |
| Employee of the Month in 2022 and 2023 | Keep |
| 200+ apps delivered | Replace with more precise wording |
| 15+ happy clients | Use only after verification |
| 10K+ users | Use only with a verifiable product source or approved proof |
| 300+ cases | Remove |
| 40% faster search | Remove unless measured and documented |
| PCI-compliant architecture | Avoid unless direct responsibility and compliance evidence exist |
| Healthcare specialization | Do not lead with it until strong named case studies exist |
| Claude Certified | Avoid as a main professional title; list relevant certificates normally |

## Recommended replacement for “200+ apps”

Choose one accurate version:

> Contributed to 200+ client project deliveries at AppDevs

or:

> Worked across a large portfolio of Flutter client products at AppDevs

or:

> Delivered and maintained mobile products across FinTech, AI, commerce, and utility domains

Do not publish a number merely because it looks impressive.

---

# 4. Current Codebase Audit

## Current technology

The uploaded codebase uses:

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Firebase Authentication
- Firestore
- Firebase Storage
- Next Image
- TypeScript
- Vercel-oriented deployment

## Strong foundations already present

- Reusable header, footer, cards, project details, articles, and reviews
- Dynamic project and article routes
- Basic metadata and JSON-LD
- Dark/light theme support
- Reduced-motion CSS handling
- Responsive Tailwind layouts
- Admin CMS for projects, articles, reviews, travels, and settings
- Custom 404 page
- Next Image usage
- A project taxonomy and featured-project system

These foundations should be refactored rather than discarded.

## Critical issues in the current codebase

### 4.1 Positioning and content are inconsistent

The current hero includes:

- Flutter-first
- Full-stack
- AI integrations
- FinTech
- AI
- E-commerce
- Healthcare
- 200+ apps
- 15+ clients

This creates too many competing messages. The first screen should communicate one identity and one value proposition.

### 4.2 Current employment dates are outdated

`app/page.tsx` currently displays Codego as `Mar 2024 – Present`. Update it to the accurate end date and present the current status as independent freelance/contract work.

### 4.3 Unverified results are hardcoded

`components/project-card.tsx` contains marketing results such as:

- “Handled 10K+ users”
- “Delivered low-latency VPN experience”
- “Improved study speed”
- “Reduced checkout friction”

These results are generated from a hardcoded map rather than documented project evidence. Remove all unsupported result text.

### 4.4 Project ownership is unclear

The project catalog uses phrases such as:

> Built from Codego public product data and official website assets

This makes visitors uncertain whether Azad built the product, contributed to it, or only created a portfolio case study.

Every case study must state:

- The company or client context
- Azad’s exact role
- Whether he worked alone or in a team
- The features he personally handled
- What remains confidential

### 4.5 The homepage is visually dense

The current hero contains:

- Availability badge
- Large name
- Two title lines
- Paragraph
- Two buttons
- Three niche chips
- Four statistics
- Three benefit cards
- Portrait

This is too much before the visitor reaches the work. Reduce the hero to a clear message, two actions, and a small availability note.

### 4.6 Featured work uses generic cards

The current `LiveProjects` section uses a three-column card grid. This is useful for an archive, but weak for flagship case studies.

Featured projects need large alternating editorial layouts with phone mockups, role clarity, and proof.

### 4.7 Public pages depend on client-side Firestore subscriptions

`LiveProjects`, `LiveArticles`, and `LiveReviews` use real-time Firestore listeners in client components. This can cause:

- Extra JavaScript
- Content shifts after hydration
- Slower interaction readiness
- SEO inconsistency
- Public pages depending on Firebase availability
- Unnecessary real-time reads and costs

Public portfolio content should be server-rendered or statically generated.

### 4.8 Global loading text is visible

`app/loading.tsx` displays a spinner and “Loading...”. This can feel generic and may be visible during navigation or captured by crawlers. Use route-specific skeletons only when genuinely needed, or remove the global loading UI.

### 4.9 Asset reliability problem

The supplied ZIP does not contain a `public` directory, while the code references:

- `/azad.jpeg`
- `/preview.png`
- `/project-assets/...`

The final repository must include all local assets or explicitly document where they are generated. Otherwise builds and previews may break.

### 4.10 Remote project images are fragile

Some flagship screenshots are loaded from third-party company or Cloudinary URLs. These can change, disappear, block optimization, or create privacy and branding issues.

Use locally stored, optimized, approved portfolio assets whenever possible.

### 4.11 Header interaction is basic

The existing header is sticky but does not:

- Hide on scroll down
- Reappear on scroll up
- Show active sections
- Use numbered navigation
- Trap mobile-menu focus
- Close with Escape
- Lock body scrolling
- Close when clicking outside

### 4.12 Resume link is duplicated and stale

The header and contact block depend on a Google Drive URL, and the mobile menu hardcodes it separately. Host the résumé on the same domain and keep one source of truth.

### 4.13 Footer links are inconsistent

The footer LinkedIn URL differs from the current LinkedIn profile URL. All profile URLs must come from one central configuration file.

### 4.14 Contact page has no actual form

The current contact page provides links only. Add a short, validated contact form while keeping Upwork as the strongest hiring action.

### 4.15 Project data model is too shallow

The existing model supports description, details, images, stack, features, and links. It does not support a professional case study.

Add fields for:

- Product context
- Role
- Team
- Timeframe
- Responsibilities
- Challenge
- Process
- Contributions
- Technical decisions
- Results
- Evidence level
- Testimonial
- Confidentiality note
- Platform links

### 4.16 The site defaults to light mode

The visual references preferred by Azad are dark, calm, and premium. The site should default to a dark system-aware theme while retaining a polished light mode.

---

# 5. Brand and UI Direction

## Design concept

> **A premium dark mobile-engineering portfolio with strong editorial hierarchy, subtle motion, real app visuals, and conversion-focused proof.**

## Inspiration to borrow

### From Brittany Chiang V4

- Clear hero hierarchy
- Numbered navigation
- Large section spacing
- Alternating flagship projects
- Experience tabs
- Restrained accent usage
- Fixed social links on desktop
- Smooth staged reveals
- Navigation that responds to scroll direction

### From Brittany Chiang’s current portfolio

- Cursor-following radial spotlight
- Minimal visual noise
- Strong readability
- Content-first layout
- Subtle interaction instead of heavy decoration

### What must remain uniquely Azad

- Flutter cyan visual identity
- Mobile device mockups
- FinTech workflows
- Android and iOS store evidence
- Existing-codebase and production-maintenance positioning
- Upwork conversion paths
- Personal case-study writing
- Real engineering process

---

# 6. Visual Design System

## 6.1 Core palette

Use a deep navy system rather than pure black.

```css
:root {
  --bg: #07111f;
  --bg-deep: #040b14;
  --surface: #0d1b2a;
  --surface-raised: #12243a;
  --surface-hover: #162b45;

  --text-primary: #e7f0fb;
  --text-secondary: #94a8c1;
  --text-muted: #657991;

  --accent: #42c8f5;
  --accent-strong: #19b8ee;
  --accent-soft: rgba(66, 200, 245, 0.12);

  --success: #5fd69b;
  --warning: #f4c46b;
  --danger: #f07d86;

  --border: rgba(148, 168, 193, 0.16);
  --border-strong: rgba(148, 168, 193, 0.28);
}
```

## 6.2 Color rules

Use cyan only for:

- Primary actions
- Section numbers
- Active navigation
- Important links
- Focus indicators
- Small technical labels
- Cursor glow

Do not use a different accent color for every project.

## 6.3 Typography

Recommended:

- **Primary:** Geist or Inter
- **Alternative:** Manrope
- **Monospace:** Geist Mono or JetBrains Mono

Use monospace only for:

- Section numbers
- Metadata
- Small technical labels
- Code-like details

Suggested scale:

```css
--hero-name: clamp(3.4rem, 8vw, 6.8rem);
--hero-title: clamp(2.2rem, 5.4vw, 4.8rem);
--section-title: clamp(2rem, 4vw, 3.3rem);
--card-title: clamp(1.25rem, 2vw, 1.6rem);
--body-large: 1.125rem;
--body: 1rem;
--small: 0.875rem;
--micro: 0.75rem;
```

## 6.4 Layout system

- Maximum content width: `1200px`
- Reading width: `680px–760px`
- Desktop page padding: `48px–64px`
- Tablet page padding: `32px`
- Mobile page padding: `20px–24px`
- Major section spacing: `128px–160px`
- Mobile section spacing: `80px–104px`

Use an eight-point spacing system:

```text
8, 16, 24, 32, 48, 64, 96, 128, 160
```

## 6.5 Card rules

Cards should be used only where grouping is useful.

- Radius: `12px–16px`
- Border: subtle one-pixel border
- Shadow: restrained and soft
- Hover movement: maximum `4px`
- Avoid applying glass effects to every section
- Do not place every homepage section inside a bordered container

## 6.6 Button rules

### Primary button

- Filled cyan
- Dark navy text
- Height: `48px–52px`
- Radius: `8px–10px`
- Strong focus outline

### Secondary button

- Transparent background
- Cyan or muted border
- Light text

### Text action

- Arrow or underline animation
- Used for secondary links

Use no more than three button styles across the whole website.

---

# 7. Final Homepage Information Architecture

Recommended order:

1. Header
2. Hero
3. Trust proof
4. Featured case studies
5. Services
6. Experience
7. Working process
8. About
9. Technical strengths
10. Additional projects
11. Testimonials
12. Articles and open source
13. Contact
14. Footer

This creates a professional decision path:

> Identity → Proof → Relevant Work → Services → Experience → Working Style → Personality → Technical Depth → Social Proof → Contact

---

# 8. Header and Navigation Plan

## Desktop navigation

```text
AZAD

01. About
02. Experience
03. Work
04. Articles
05. Contact

Resume
```

## Behavior

- Transparent at the top
- Blurred navy background after scrolling
- Hides when scrolling down
- Returns when scrolling up
- Shows active section
- Resume button is visually secondary
- Logo returns to homepage
- Keyboard-accessible focus states

## Mobile drawer

Must:

- Slide from the right
- Lock body scroll
- Trap keyboard focus
- Close on Escape
- Close on outside click
- Close after navigation
- Restore focus to menu button
- Use large touch targets

## Codebase changes

Refactor `components/site-header.tsx`:

- Add scroll-direction hook
- Add active-section state or route state
- Add focus trap
- Read links from central profile config
- Remove duplicated resume URL
- Use `/resume` instead of Google Drive

---

# 9. Hero Section Master Plan

## Recommended hero copy

```text
Hi, my name is

Md Azad Hossain Tutul.

I build and improve production Flutter apps.

Senior Flutter developer with hands-on experience in FinTech,
payments, AI-powered products, API integrations, and reliable
Android and iOS releases.
```

Supporting line:

> I can build a new product, join an existing codebase, solve production issues, and deliver improvements in small, tested releases.

Primary action:

> View Case Studies

Secondary action:

> Hire Me on Upwork

Availability note:

> Available for freelance, contract, and long-term remote Flutter work.

## Hero visual

Preferred approach:

- Keep the hero text dominant
- Use a subtle composition of two mobile app screens on the right
- Move the personal portrait to the About section
- Use the cursor spotlight across the desktop hero and page background

This makes the website immediately look like a mobile engineer’s portfolio.

## What to remove from the current hero

- 200+ app chip
- 15+ client statistic
- Four competing industries
- Three benefit cards
- Repeated descriptions of the same value
- Large portrait as the dominant visual
- Multiple “full-stack” labels

## Hero proof row

Do not put a large statistics grid inside the hero. Add one small proof row below the hero instead.

---

# 10. Cursor Spotlight Specification

Create a fixed, non-interactive radial gradient that follows the pointer.

Recommended values:

- Radius: `600px–700px`
- Cyan opacity: `0.08–0.12`
- Desktop only
- Use `pointermove`
- Update with `requestAnimationFrame`
- Use CSS custom properties rather than replacing the whole background string
- Disable for touch devices and reduced-motion users

Example concept:

```css
.cursor-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(
    650px at var(--pointer-x) var(--pointer-y),
    rgba(66, 200, 245, 0.11),
    transparent 78%
  );
}
```

Keep all real content above it with controlled stacking contexts.

---

# 11. Trust-Proof Strip

Place immediately after the hero.

Recommended proof items:

```text
5+ Years in Flutter
100% Upwork Job Success
Production FinTech Experience
Android & iOS Store Releases
```

Optional supporting labels:

- Previous Codego mobile developer
- Employee of the Month, AppDevs
- Rising Talent

## Design

- One horizontal row on desktop
- Two-by-two layout on mobile
- No oversized cards
- Muted dividers
- Simple icons or text
- No animation beyond a soft reveal

## Data freshness

Badges such as Rising Talent and Job Success can change. Store them in one profile data file and add a monthly review reminder in project documentation.

---

# 12. Featured Case Studies

This is the most important section after the hero.

## Recommended flagship case studies

Use only projects that can be presented honestly and supported with real assets.

Suggested priority:

1. **European FinTech Apps at Codego**
2. **FiberVPN**
3. **AdBot or StudyGenie AI**
4. **Existing Flutter App Improvement / App Rescue Case Study**

If approved and clearly differentiated, CodegoPay Individual and Business can remain separate. Otherwise, create one stronger umbrella case study showing your work across multiple European banking products.

## Featured layout

Use a 12-column alternating grid:

- Project 1: visuals left, content right
- Project 2: content left, visuals right
- Project 3: visuals left, content right
- Project 4: content left, visuals right

## Each preview should show

- Category label
- Product name
- One-sentence business purpose
- Exact role
- Two or three contributions
- One verified outcome or proof
- Three or four technologies
- Case-study link
- App Store, Play Store, or website link where available

## Example preview copy

```text
Featured FinTech Case Study

European Banking Apps at Codego

Mobile banking products supporting account onboarding,
IBAN operations, transfers, verification, and secure access.

My role:
Flutter development, REST API integration, KYC and biometric
flows, Firebase notifications, production fixes, and store releases.

Flutter · BLoC · REST APIs · Firebase

View Case Study    View Live Apps
```

## Visual treatment

- Use real approved screenshots
- Place screens in clean phone frames
- Show two or three screens per project
- Add short captions where useful
- Avoid generic landscape screenshots for mobile products
- Do not use unsupported or random company marketing assets

---

# 13. Professional Case-Study Template

The current project detail page is a gallery plus description. Replace it with a structured case study.

## Section 1: Project hero

Show:

- Product name
- Category
- Role
- Timeframe
- Team context
- Platforms
- Status: live, private, archived, or concept
- Large device composition
- Store or website links

## Section 2: Product context

Explain:

- What the product does
- Who it serves
- The business problem
- What was already present when Azad joined

## Section 3: My role

State clearly:

- Job title
- Team size
- Personal responsibilities
- Ownership boundaries
- Confidentiality limits

## Section 4: The challenge

Use two to four real challenges:

- Existing architecture
- Complex API states
- Session expiry
- KYC or document verification
- Payment and transfer failures
- Secure authentication
- Background lifecycle behavior
- Push notification routing
- Platform differences
- Store-release problems

## Section 5: My approach

Use:

```text
Understand → Map → Plan → Build → Verify → Release → Monitor
```

## Section 6: What I built

List specific modules and workflows.

Good:

> Implemented biometric authorization, transfer-state handling, notification routing, and production API error states.

Weak:

> Worked on the app.

## Section 7: Technical decisions

Explain only meaningful decisions:

- Why BLoC or Riverpod was appropriate
- How API states were organized
- How secure data was handled
- How platform behavior was separated
- How release risk was reduced

## Section 8: Results and proof

Use only documented results:

- Released on both stores
- Integrated a named workflow
- Resolved a release blocker
- Improved stability through Crashlytics fixes
- Delivered a feature used in production
- Supported multiple production versions

Every result should have an evidence level:

```ts
result: {
  statement: string;
  evidence: "public" | "client-approved" | "private" | "unverified";
}
```

Do not display `unverified` results publicly.

## Section 9: Gallery

- Six to ten screenshots
- Captions explaining the feature
- Optional 30–60 second video
- Optional architecture diagram
- Store links

## Section 10: Reflection

Include a short section:

> What this project taught me

This demonstrates senior judgment and growth.

## Section 11: Related service CTA

Example:

> Need help improving a production Flutter app?

Primary action:

> Discuss Your Project on Upwork

---

# 14. Project Data Model Upgrade

Replace the shallow `Project` type with a richer case-study model.

```ts
export type EvidenceLevel =
  | "public"
  | "client-approved"
  | "private"
  | "unverified";

export type ProjectResult = {
  statement: string;
  evidence: EvidenceLevel;
  sourceUrl?: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  status: "live" | "private" | "archived" | "concept";
  featured: boolean;
  priority: number;

  summary: string;
  productContext: string;
  businessProblem?: string;

  role: string;
  timeframe?: string;
  company?: string;
  teamContext?: string;
  ownershipNote: string;
  confidentialityNote?: string;

  platforms: string[];
  responsibilities: string[];
  challenges: string[];
  approach: string[];
  contributions: string[];
  technicalDecisions: Array<{
    title: string;
    explanation: string;
  }>;
  results: ProjectResult[];
  lessons?: string[];

  technologies: string[];
  integrations?: string[];

  coverImage: string;
  gallery: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  video?: {
    poster: string;
    src: string;
  };

  links: {
    playStore?: string;
    appStore?: string;
    website?: string;
    github?: string;
  };
};
```

---

# 15. Services Section

Show services before the detailed experience section because Upwork clients need to quickly match their problem to your offer.

## Service 1: Production Flutter Development

> Build Android and iOS applications with maintainable architecture, API integration, polished UI, and release-ready delivery.

## Service 2: Existing App Improvement

> Continue an existing Flutter project, fix bugs, complete features, improve architecture, and reduce production risk.

## Service 3: FinTech and Payment Features

> Implement wallet screens, transaction flows, secure authentication, subscriptions, payment states, KYC, and backend-connected financial workflows.

## Service 4: Release and Maintenance

> Resolve build issues, prepare TestFlight and Play releases, configure Firebase, monitor crashes, and support ongoing updates.

## Service 5: AI-Powered Mobile Features

> Add assistants, content generation, intelligent search, AI study flows, usage controls, and secure backend-supported AI integration.

## Design

Use a two-column editorial grid, not five identical boxed cards.

Each service should link to:

- A relevant case study
- A focused service page
- The Upwork profile

---

# 16. Experience Section

Use tabbed experience inspired by the preferred reference.

## Suggested tabs

```text
Codego
AppDevs
Upwork
Divine IT
```

## Codego

Present as previous experience ending in June 2026.

Focus on:

- European banking and payment apps
- Flutter and API integration
- KYC and biometric authentication
- IBAN and SEPA-related workflows
- Firebase and notifications
- Android and iOS releases
- Production fixes and team collaboration

## AppDevs

Focus on:

- Progression to Senior Software Engineer
- Leadership of seven Flutter developers
- Cross-domain project delivery
- AdBot and AI integration
- Firebase, REST APIs, Supabase, ads, and release work
- Employee of the Month recognition

## Upwork

Focus on:

- 100% Job Success
- Existing app improvement
- Client communication
- Small verified delivery examples
- Current freelance availability

Do not overstate Upwork scale based on five jobs and $200+ earnings. The strongest proof still comes from company experience.

## Divine IT

Keep concise:

- Flutter frontend
- Python Django backend foundation
- API-connected business workflows

## Interaction

- Vertical tabs on desktop
- Horizontal scrollable tabs on mobile
- Animated active indicator
- Keyboard arrow support
- Correct `role="tablist"`, `role="tab"`, and `role="tabpanel"`

---

# 17. Working Process Section

Replace the current generic Idea → Design → Development → Launch process.

Use a process that matches both new products and existing codebases.

## 01. Understand

> Review the product, requirements, codebase, architecture, and current risks.

## 02. Map

> Map user flows, APIs, dependencies, release setup, and failure states before changing code.

## 03. Plan

> Break work into small, testable deliverables with clear acceptance criteria.

## 04. Build

> Implement changes carefully while respecting existing architecture and users.

## 05. Verify

> Test critical paths, error states, Android/iOS differences, and release builds.

## 06. Communicate

> Share progress, decisions, blockers, and risks before they become rework.

## 07. Release

> Support deployment, monitor production behavior, and improve from real feedback.

## Design

- Horizontal connected timeline on desktop
- Vertical timeline on mobile
- One short paragraph per step
- No large cards unless needed

---

# 18. About Section

Move the professional portrait here.

## Recommended copy direction

> I’m a Senior Flutter Developer with more than five years of experience building and maintaining Android and iOS applications. My strongest experience is in FinTech, payments, API-heavy products, Firebase, subscriptions, and production releases.

> I have worked inside both agency and product teams, led Flutter developers, and supported live applications where stability, clear communication, and careful releases matter. Today, I work independently with clients and teams that need reliable Flutter delivery.

## Visual

- Text on the left
- Professional portrait on the right
- Subtle cyan overlay or offset border
- No circular profile image
- Use a clean rectangular editorial crop

## Personal detail

Add one short human line only, such as:

> Outside work, I enjoy running, sports, travel, and community activities.

Do not place a full travel blog in the main professional navigation unless travel writing is a real content goal.

---

# 19. Technical Strengths Section

Organize by capability, not a wall of logos.

## Mobile engineering

- Flutter
- Dart
- Android
- iOS
- Responsive and adaptive UI

## Architecture and state

- Clean Architecture
- BLoC and Cubit
- Riverpod
- Provider
- GetX when required by an existing codebase

## Backend and data

- REST APIs
- Firebase
- Supabase
- PostgreSQL
- Laravel-connected apps
- Node.js and Django integration

## Product integrations

- Payments
- Subscriptions and in-app purchases
- KYC and identity workflows
- Biometric authentication
- Push notifications
- Deep links
- WebSockets and real-time systems

## Delivery and quality

- Git and GitHub
- CI/CD
- Codemagic and Fastlane
- Crashlytics
- TestFlight
- App Store Connect
- Google Play Console

## Rules

- Do not show every tool ever used
- Highlight the strongest eight to twelve skills
- Keep supporting skills visually quieter
- Link major capabilities to a relevant case study

---

# 20. Additional Projects

Use a compact grid for non-featured work.

Recommended categories:

- FinTech and payments
- AI and smart apps
- Subscription and utility apps
- Marketplace and commerce
- Open source and experiments

Each card should contain:

- Title
- One-line product purpose
- Exact role
- Three technologies
- Status badge
- Details link

Do not show invented “key results.”

Add filters only if there are enough verified projects. Otherwise, simple grouped sections are easier to scan.

---

# 21. Testimonials

## Current reality

The provided context shows one verified Upwork review and pending testimonial requests. Therefore:

- Show the verified review
- Do not create fake names or generalized quotes
- Add future testimonials only after permission
- Link to Upwork for source verification

## Design

- One primary testimonial in a large editorial block
- Supporting testimonials underneath when available
- No auto-playing carousel
- Source label and project type
- Avoid excessive star badges

## Future collection plan

Request testimonials that mention:

- Communication
- Reliability
- Understanding existing code
- Problem solving
- Production quality
- Timely delivery
- Store release support

---

# 22. Articles and Open Source

## Homepage

Show three strong items only.

Recommended article themes:

- Secure token and session handling in Flutter
- Handling API errors in production apps
- Biometric authentication in FinTech apps
- Flutter app lifecycle and background behavior
- App Store and Play Store release preparation
- Improving an existing Flutter codebase safely
- Firebase versus Supabase for real product decisions

## Publishing strategy

Host the full article on `azadhossain.dev` and optionally cross-post to Medium.

Current article content is only a paragraph. Upgrade the article system to support:

- MDX
- Headings
- Code blocks
- Images
- Tables
- Callouts
- Reading time
- Related case studies
- SEO metadata

## Open-source strategy

Feature only repositories that have:

- Clear README
- Screenshots
- Setup instructions
- Architecture explanation
- Tests or quality checks
- Active relevance to the professional positioning

Do not use GitHub activity charts as primary proof. Production case studies are more valuable.

---

# 23. Contact and Conversion Strategy

## Primary hiring path

For Upwork clients:

> **Discuss Your Project on Upwork**

## Secondary path

> Send an Email

## Contact section copy

```text
What’s next?

Let’s build something reliable.

I’m available for Flutter development, existing-app improvement,
FinTech and payment features, production fixes, and long-term maintenance.
```

## Contact form

Fields:

- Name
- Email
- Company or product
- New app or existing app
- Project summary
- Expected start date

Optional:

- Preferred engagement: hourly, fixed scope, or long-term

Do not require a budget field.

## WhatsApp

Do not make a personal phone number the main public action.

If used:

- Use a dedicated business number
- Put it on the contact page only
- Protect against spam
- Keep Upwork communication rules in mind for pre-contract conversations

## Conversion tracking

Track only privacy-conscious events:

- Case-study view
- Upwork button click
- Resume click
- Contact form submitted
- Store-link click

Use Vercel Analytics or a lightweight privacy-friendly alternative.

---

# 24. Upwork-Specific Landing Pages

Create focused routes that can be linked from proposals.

```text
/services/flutter-fintech
/services/flutter-app-rescue
/services/flutter-firebase-api
/services/flutter-ai
/services/flutter-deployment
```

Each page should contain:

1. Problem-focused headline
2. Relevant proof
3. Two matching case studies
4. Service scope
5. Working process
6. One testimonial
7. Frequently asked questions
8. Upwork call to action

## Example: App Rescue

Headline:

> Need a senior Flutter developer to stabilize and continue an existing app?

Proof:

- Production maintenance experience
- API and Firebase debugging
- State-management experience
- Build and release troubleshooting

CTA:

> Discuss the Existing App on Upwork

These landing pages should be excluded from the main navigation unless they become important organic SEO pages.

---

# 25. Footer Plan

## Desktop fixed side elements

Left:

- GitHub
- LinkedIn
- Upwork

Right:

- Professional email

Use vertical lines as a subtle reference to the preferred portfolio style, but create original spacing and icon treatment.

## Footer content

```text
Md Azad Hossain Tutul
Senior Flutter Developer
FinTech · Payments · AI Mobile Products

Designed and built with Next.js and TypeScript
© 2026 Md Azad Hossain Tutul
```

## Fixes

- Use the correct LinkedIn URL
- Centralize all profile links
- Remove repeated generic industry claims
- Keep footer visually lighter than the main content

---

# 26. Motion and Interaction System

Motion should support attention, not compete with content.

## Hero sequence

1. Introduction
2. Name
3. Headline
4. Description
5. Actions
6. Availability

- Delay: `80–120ms` between elements
- Duration: `450–600ms`
- Movement: `12–20px`

## Section reveals

- Opacity: `0 → 1`
- Translate Y: `16px → 0`
- Duration: `450ms`
- Trigger once

## Project interactions

- Phone image moves `4–6px`
- Link arrow moves slightly
- Overlay opacity changes
- No large image zoom

## Navigation

- Hide/reveal: `220–280ms`
- Backdrop blur after scroll

## Tab content

- Fade and `8px` horizontal shift
- Animate active indicator only

## Reduced motion

When `prefers-reduced-motion: reduce`:

- Disable cursor glow movement
- Remove staggered reveals
- Remove smooth scrolling
- Keep immediate state changes

---

# 27. Responsive Design Rules

## Mobile-first hero

- Headline maximum five lines
- App visual below text or removed
- One primary button and one secondary text action
- No cursor glow
- No crowded statistics

## Featured projects

- Images above content
- Two device screens maximum
- No overlapping text panels
- Large store buttons

## Experience

- Horizontal tabs
- Scroll indicators
- No vertical rotated text

## Navigation

- Full-height accessible drawer
- 44px minimum touch targets

## Cards

- One column
- No important hover-only content
- Comfortable 16px body text

## Fixed social rails

- Desktop only
- Move social links into footer on mobile

---

# 28. Public Content Architecture

## Recommended approach

Use static or server-rendered content for public pages.

### Best option for this portfolio

- Store case studies in typed TypeScript or MDX files
- Build pages statically
- Use Firebase admin CMS only if regular non-code updates are genuinely required
- Avoid real-time listeners on public pages

## Option A: MDX-based content

```text
content/
  projects/
    codego-fintech.mdx
    fibervpn.mdx
    adbot.mdx
    flutter-app-rescue.mdx
  articles/
  testimonials/
```

Advantages:

- Version controlled
- Fast
- SEO-friendly
- Easy rich case studies
- No runtime database dependency

## Option B: Keep Firebase CMS

If Firebase must remain:

- Fetch content server-side
- Cache with revalidation
- Use a Firebase Admin SDK in server-only code
- Keep client listeners only in admin dashboard
- Add draft/published status
- Add content validation
- Add image alt text and evidence fields

## Do not

- Subscribe to every collection in the browser
- Merge partial Firestore data with local data at runtime
- Depend on Firebase to show the homepage

---

# 29. Recommended Project Structure

```text
app/
  page.tsx
  about/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  articles/page.tsx
  articles/[slug]/page.tsx
  services/[slug]/page.tsx
  contact/page.tsx
  resume/page.tsx
  sitemap.ts
  robots.ts
  opengraph-image.tsx

components/
  layout/
    site-header.tsx
    site-footer.tsx
    mobile-menu.tsx
    social-rails.tsx
  sections/
    hero-section.tsx
    trust-strip.tsx
    featured-case-studies.tsx
    services-section.tsx
    experience-tabs.tsx
    process-section.tsx
    about-section.tsx
    skills-section.tsx
    testimonials-section.tsx
    articles-section.tsx
    contact-section.tsx
  case-study/
    case-study-hero.tsx
    case-study-section.tsx
    results-list.tsx
    project-gallery.tsx
    related-projects.tsx
  ui/
    button.tsx
    section-heading.tsx
    chip.tsx
    icon-link.tsx
    cursor-glow.tsx
    reveal.tsx

content/
  profile.ts
  experience.ts
  services.ts
  projects/
  articles/
  testimonials.ts

lib/
  metadata.ts
  content.ts
  analytics.ts
  validation.ts
```

---

# 30. File-by-File Refactor Plan

## `app/layout.tsx`

Change:

- Update title and description
- Remove unsupported “200+ apps delivered” claim
- Add dark theme initialization before hydration
- Improve Person JSON-LD
- Add `ProfessionalService` or `ProfilePage` structured data where appropriate
- Add skip-to-content link
- Add cursor-glow component

Recommended title:

> Md Azad Hossain Tutul | Senior Flutter Developer

Recommended description:

> Senior Flutter Developer specializing in production FinTech, payment, AI-powered, and API-driven Android and iOS applications.

## `app/globals.css`

Change:

- Replace current light-first tokens with the new navy/cyan system
- Add focus-visible rules
- Add selection styles
- Add cursor-glow variables
- Add content width utilities
- Add better reduced-motion handling
- Add print styles for résumé

## `app/page.tsx`

Change:

- Split into server-rendered section components
- Remove repeated chips and stats
- Move portrait to About
- Add trust strip
- Add alternating featured case studies
- Reorder sections
- Remove generic hero cards
- Replace process
- Correct dates and current role

## `components/site-header.tsx`

Change:

- Add numbered nav
- Add scroll direction
- Add active-section behavior
- Add accessible mobile menu
- Use central profile links
- Link résumé internally

## `components/site-footer.tsx`

Change:

- Correct LinkedIn URL
- Pull links from one config
- Simplify content
- Add desktop social rails as separate component

## `components/project-card.tsx`

Change:

- Remove hardcoded `KEY_RESULTS`
- Add status and role
- Show only verified data
- Create two variants: `featured` and `compact`
- Reduce image zoom

## `components/project-details.tsx`

Change:

- Convert from client gallery page to a server-rendered case-study page
- Keep gallery controls as a small client island
- Add role, context, challenge, contribution, decisions, results, and related CTA

## `lib/projects-catalog.ts`

Change:

- Audit every project title, role, link, screenshot, and claim
- Remove “built from public product data” language
- Add ownership and confidentiality notes
- Store approved local assets
- Remove or hide projects that cannot be explained credibly

## `lib/default-content.ts`

Change:

- Remove unsupported numbers in article copy
- Remove travel from the professional core unless intentionally retained
- Update email and résumé source
- Keep testimonials source-aware

## `components/live-projects.tsx`

Change:

- Remove client Firestore listener from public rendering
- Replace with server-loaded projects

## `components/live-articles.tsx`

Change:

- Render articles server-side
- Support MDX content

## `components/live-reviews.tsx`

Change:

- Render verified testimonials from static/server content
- Keep source link

## `components/contact-block.tsx`

Change:

- Add form
- Add validation
- Add success and error states
- Keep Upwork as primary action
- Remove old email duplication

## `app/loading.tsx`

Change:

- Remove global “Loading...” display
- Use route-level skeletons only where needed

## `next.config.ts`

Change:

- Reduce dependency on remote image domains
- Add security headers
- Add image formats such as AVIF and WebP
- Consider redirects from old routes

---

# 31. Content Source of Truth

Create one central file:

```ts
export const profile = {
  name: "Md Azad Hossain Tutul",
  shortName: "Azad",
  title: "Senior Flutter Developer",
  positioning: "FinTech, Payments & AI Mobile Apps",
  status: "Independent / Freelance",
  location: "Chattogram, Bangladesh",
  availability: true,
  links: {
    portfolio: "https://azadhossain.dev",
    github: "https://github.com/mdazadhossain95",
    linkedin: "https://www.linkedin.com/in/azadhossain-tutul/",
    upwork: "...",
    email: "...",
    resume: "/azad-hossain-resume.pdf",
  },
  proof: {
    experienceYears: "5+",
    upworkJss: "100%",
    upworkBadge: "Rising Talent",
  },
};
```

All components must read from this file. Do not hardcode the same link, date, or title in several components.

---

# 32. Resume Plan

Host:

```text
/resume
/azad-hossain-resume.pdf
```

The HTML résumé page should include:

- Professional summary
- Experience
- Selected projects
- Skills
- Education
- Certifications
- Achievements
- Contact links

Do not put personal references, full phone numbers, or unnecessary social activities in the website résumé unless required for a specific application.

Add a print stylesheet so recruiters can save a clean PDF from the HTML page.

---

# 33. SEO Plan

## Required pages

- `/`
- `/about`
- `/projects`
- `/projects/[slug]`
- `/articles`
- `/articles/[slug]`
- `/services/[slug]`
- `/contact`
- `/resume`

## Every page needs

- Unique title
- Unique description
- Canonical URL
- Open Graph image
- Twitter card
- Correct heading hierarchy
- Structured data where useful
- Internal links

## Project title example

> European FinTech Flutter Case Study | Md Azad Hossain Tutul

## Project description example

> A Flutter FinTech case study covering secure onboarding, API integration, biometric authentication, transfer workflows, Firebase notifications, and production releases.

## Add

- `app/sitemap.ts`
- `app/robots.ts`
- Dynamic Open Graph images
- Breadcrumb structured data for case studies
- Article structured data for writing

---

# 34. Performance Plan

Target at the 75th percentile:

- LCP: `≤ 2.5s`
- INP: `≤ 200ms`
- CLS: `≤ 0.1`

## Actions

- Render homepage content on the server
- Remove public Firestore listeners
- Use local AVIF/WebP assets
- Set image dimensions
- Preload only one hero visual
- Lazy-load lower media
- Use poster images for videos
- Avoid autoplay videos
- Use CSS for simple motion
- Keep client components small
- Use font subsetting
- Avoid large icon libraries in every client component
- Add bundle analysis before launch

## Image budget

- Hero visual: under `180KB`
- Featured project composition: under `250KB` each
- Thumbnails: under `80KB`
- Portrait: under `120KB`

---

# 35. Accessibility Plan

Target WCAG 2.2 AA.

Required:

- Skip-to-content link
- Visible focus states
- Keyboard-accessible navigation
- Accessible mobile drawer
- Accessible experience tabs
- Correct heading order
- Descriptive alt text
- Form labels and errors
- No information available only through color
- 44px minimum touch targets
- Reduced-motion support
- Sufficient contrast
- No essential hover-only content
- Meaningful link text

Test with:

- Keyboard only
- VoiceOver or NVDA
- 200% zoom
- Reduced motion
- Dark and light mode

---

# 36. Security and Privacy Plan

Because the current project uses Firebase:

- Verify Firestore and Storage rules
- Do not rely only on client-side admin allowlists
- Keep admin emails and secrets server-side where possible
- Add rate limiting and spam protection to contact form
- Do not expose private company material
- Remove sensitive API data from screenshots
- Blur account numbers, balances, names, addresses, IDs, and personal details
- Obtain permission for company logos and screenshots
- Use a privacy notice for analytics and contact submissions

---

# 37. Content and Asset Audit Checklist

For every flagship project, collect:

- Approved project name
- Accurate role
- Team context
- Start and end date
- Platforms
- Product purpose
- Exact responsibilities
- Three real challenges
- Five personal contributions
- Two technical decisions
- Verified outcomes
- Six to ten screenshots
- One cover composition
- Store links
- Website link
- Testimonial if allowed
- Confidentiality note
- Permission status

## Screenshot rules

- Remove sensitive data
- Use consistent phone frames
- Use original resolution
- Add captions
- Avoid low-quality screenshots
- Avoid unrelated marketing images

---

# 38. Implementation Roadmap

## Phase 0: Truth and asset audit

- Confirm professional name
- Confirm active email
- Confirm Codego dates
- Clarify CodegoPay, CoxiPay, and other product names
- Verify 200+ claim wording
- Verify user numbers
- Verify store links
- Confirm screenshot permissions
- Choose four flagship case studies

## Phase 1: Content model

- Create central profile config
- Create new case-study type
- Write three complete case studies
- Rewrite hero, services, process, experience, and About copy
- Prepare testimonials

## Phase 2: Design system

- Implement dark-first color tokens
- Choose final typography
- Build buttons, headings, chips, rails, and layout primitives
- Create desktop and mobile design mockups

## Phase 3: Architecture refactor

- Remove real-time client listeners from public pages
- Move content to server/static source
- Split homepage into sections
- Add MDX or typed content
- Centralize settings

## Phase 4: Homepage redesign

- Header
- Hero
- Cursor glow
- Trust strip
- Featured projects
- Services
- Experience tabs
- Process
- About
- Skills
- Testimonials
- Articles
- Contact
- Footer

## Phase 5: Case studies

- European FinTech / Codego
- FiberVPN
- AdBot or StudyGenie
- Existing app improvement

## Phase 6: Supporting pages

- Projects archive
- Article system
- Service landing pages
- Contact form
- Resume page
- Custom social images

## Phase 7: Quality

- Performance audit
- Accessibility audit
- SEO audit
- Mobile testing
- Browser testing
- Link testing
- Form testing
- Security review
- Content proof review

## Phase 8: External alignment

Update the same positioning across:

- Upwork
- LinkedIn
- GitHub
- Résumé
- Portfolio
- Email signature

---

# 39. Recommended Build Order

Do not begin with animation.

Use this order:

1. Verify facts
2. Choose case studies
3. Rewrite content
4. Upgrade data model
5. Refactor public rendering
6. Implement design tokens
7. Build homepage structure
8. Build case studies
9. Add responsive behavior
10. Add motion
11. Optimize performance
12. Test accessibility
13. Launch and measure

---

# 40. Priority Matrix

## Must do before redesign launch

- Correct employment dates
- Remove unsupported results
- Remove or clarify 200+ claim
- Centralize links and contact data
- Add real case studies
- Replace generic featured grid
- Fix missing assets
- Host résumé locally
- Correct LinkedIn and email links
- Decouple public pages from live Firestore
- Improve mobile menu accessibility

## High impact after core launch

- Service landing pages
- Contact form
- MDX articles
- Dynamic Open Graph images
- Analytics events
- Fixed social rails
- Cursor spotlight

## Nice to have

- Case-study video
- Architecture diagrams
- Light mode
- Advanced project filters
- Newsletter

## Avoid

- Long logo loader
- Repeating typing animation
- Particle background
- Custom cursor replacement
- Heavy 3D scenes
- Auto-playing testimonial carousel
- Dozens of badges
- Huge certification section on the homepage
- Generic stock imagery

---

# 41. Definition of Done

The redesign is complete only when:

- The visitor understands the profession within five seconds
- Flutter is the clear primary identity
- Codego is presented as previous experience with accurate dates
- The primary call to action is visible without scrolling
- At least three detailed case studies exist
- Every company project states the exact role and ownership boundary
- Every result is verified or omitted
- The site uses real mobile product visuals
- The public pages render without client-side Firestore dependency
- The résumé is hosted on the same domain
- All profile links are correct and centralized
- The contact path is obvious
- The mobile menu is accessible
- Reduced-motion mode works
- Core Web Vitals are strong
- Every major page has unique metadata
- The site works on mobile, tablet, and desktop
- Upwork proposals can link to a highly relevant case study or service page
- The design feels inspired by the references without looking copied

---

# 42. Final Design Formula

> **Brittany Chiang V4’s hierarchy and spacing + the modern cursor spotlight + Flutter cyan branding + real mobile case studies + honest production evidence + Upwork-focused conversion.**

The final website should feel:

- Professional
- Calm
- Technical
- Trustworthy
- Premium
- Mobile-focused
- Easy to scan
- Easy to verify
- Easy to hire from

The strongest portfolio message is not:

> I know many technologies.

It is:

> **I can take responsibility for a real Flutter product, understand its risks, build the right features, communicate clearly, and help deliver a stable Android and iOS release.**

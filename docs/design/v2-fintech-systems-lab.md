# V2 — FinTech Systems Lab — Design Brief

## 1. Audience
FinTech founders, banking/payments product teams, and technical hiring managers evaluating a Flutter engineer for regulated, production-grade financial products.

## 2. Primary action
Start a scoped conversation about a FinTech/payments build (Upwork consultation link) or review a specific production system in depth (`/projects/[slug]`).

## 3. Version and route
V2, served at `/v2`, `noindex, follow`, canonical self-referential (not indexed, per four-version contract).

## 4. Tone (three adjectives)
Credible. Precise. Unshowy.

## 5. Signature
A "systems map" reading order: capability modules → production systems (real shipped FinTech apps) → architecture workflow → technical matrix. The page reads like a system status console for a real practice, not a marketing hero.

## 6. Dominant composition
Left-aligned, document-like vertical rhythm (not centered-hero-plus-cards). Sections behave like structured records: label + status pill + content, echoing operations dashboards without simulating one.

## 7. Typography pairing and reason
Sora (existing site sans) for headings/body, Space Mono (existing site mono, `--font-space-mono`) for module IDs, status pills, and technical labels — reinforces "systems record" feel without introducing a new font family (stays within the two-family limit).

## 8. Color roles
- Primary actions / links / focus ring: Tech Blue (`#2563EB` light / brighter blue in dark).
- Verified/live status pills: FinTech Green (`--success`, `#10B981`) — only on real shipped/verified project status.
- System/API/technical labels (module IDs, workflow step markers): Flutter Cyan accent.
- AI content: AI Purple (`--ai-purple`) — applied only to the one AI & Integrations module tag, nowhere else.
- Background: near-black navy (`#050B14`-range), raised surfaces one step lighter, matching brand navy family.

## 9. Density and spacing character
Dense but calm: generous section padding, tight internal record spacing (label/value pairs), monospace numeric IDs for scannability. No decorative whitespace beyond what a technical record needs.

## 10. Motion character
Restrained. Opacity/transform-only hover states on records and links. No particles, no scan-line animation, no counters ticking up. Respect `prefers-reduced-motion`.

## 11. Image/media direction
No new imagery. Production Systems section reuses existing verified project cover images (`content/projects.ts`) with real alt text; no fabricated dashboards or screens.

## 12. What this version must not resemble
Hacker/terminal cosplay (no green-on-black Matrix rain, no fake CLI prompts), crypto-hype landing pages, gaming UI, V1's numbered-nav classic-developer layout, V4's mobile-product hero, or any literal copy of reference-site source/wording.

## 13. Technical/accessibility constraints
- Own nested layout (`app/v2/layout.tsx`) + `.v2-theme` token scope, same pattern as `.v1-theme`.
- Global chrome (`SiteHeader`/`SiteFooter`/`CursorGlow`/`SocialRails`/splash) disabled for `/v2` in `LayoutWrapper`, replaced by V2-specific header/footer — no pointer-spotlight cursor glow on this version.
- All data sourced from `content/` (profile, experience, skills, projects) — no invented metrics, no fake alerts/tickers.
- Diagram-like Architecture Workflow section ships a visible text list (not just a graphic), satisfying "text alternative for diagrams."
- Keyboard-operable nav, mobile drawer with focus handling, 44px touch targets, AA contrast in the single (dark) theme shipped for this version.
- Effects reduced/disabled on mobile and under reduced motion (none are motion-heavy by design).

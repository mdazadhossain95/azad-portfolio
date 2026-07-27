# V3 — Engineering Notebook — Draft Plan

## Context and goal

V3 should use the verified content already established in the portfolio, but present it in a light-only notebook style. The goal is to make the page feel personal, process-driven, and human while staying clean, readable, and implementation-friendly.

This draft is written so another agent can continue the work even if the current chat limit is reached.

## Source plan

V3 should be built from the verified content already present across the portfolio versions:

- V1 for the classic, recruiter-friendly structure and concise technical credibility
- V2 for story flow, pacing, and a stronger sense of sequence
- V4 for the full verified project inventory, client-facing proof, and work history details

V3 should not copy those versions visually. It should extract the facts, then rewrite them into a notebook presentation.

## Design intent

- V3 must feel like an open engineering notebook.
- V3 must stay light-only.
- V3 must use real content from the existing portfolio data and verified v4 references.
- V3 must not resemble V2 cosmic UI, V1 classic recruiter layout, or V4 product/dashboard styling.
- V3 must present the data in a human, notebook-like order instead of a resume dump.
- V3 must keep the UI clean enough for recruiters, clients, and mobile reading.

## Total V3 plan

### 1. Keep the notebook identity stable

V3 should continue as a light-only engineering notebook, but the presentation should feel more polished, warmer, and more tactile.

The page should read like:

- handwritten notes
- paper cards
- clipped or pinned media
- calm section pacing
- real project evidence

### 2. Make the interaction system more physical

The buttons, cards, version controls, and note labels should feel like paper objects.

Use:

- subtle hard shadows
- small lift on hover
- gentle active press states
- selective scratch / draw-in animation
- no heavy blur or glow

Scratch animation should be selective:

- use it on one signature heading or annotation only
- do not underline every label
- do not repeat the effect under all section titles
- keep the effect short and quiet

### 3. Add a right-middle color switcher

Create a small fixed control on the right-middle side of the viewport that changes the V3 notebook look.

It should control:

- paper tint
- accent / note color
- border tone
- handwritten highlight color

The switcher must:

- stay compact
- not cover core content
- work on keyboard and touch
- use clear focus-visible states
- be hidden or simplified on very small screens if needed

Recommended behavior:

- fixed at the right-middle edge on desktop
- collapses into a bottom sheet, drawer, or small floating button on mobile
- changes only CSS variables, not the page structure
- persists the selected theme in localStorage

### 4. Keep the palette controlled

Use a small set of palette variants only.

Suggested modes:

- paper cream with mustard accent
- slightly warmer sepia paper
- softer neutral paper with darker ink
- optional muted olive or burgundy accent mode

Each palette must preserve contrast and readability.

### 5. Improve the archive and proof sections

V3 should show more of the real work already in the portfolio.

That means:

- the full AppDevs project list from v4, not a truncated sample
- a fuller notebook-style project archive
- a real article archive
- a visible Upwork portfolio section with correct label text
- better evidence density without clutter
- no invented metrics or filler cards

### 6. Keep the footer and version control clean

The version switcher should live in the footer only.

The footer must:

- show copyright clearly
- show archive links
- show the version controls without overlap
- stay readable on mobile and desktop

### 7. Verify on real screens

Every change must be checked on:

- 320px mobile
- 375px mobile
- tablet widths
- desktop widths

The page must remain:

- responsive
- keyboard accessible
- readable at 200% zoom
- free of horizontal overflow
- free of overlapping footer/version UI

## Required content extraction

Before changing V3 presentation, extract and normalize the verified information from:

- `content/profile.ts`
- `content/experience.ts`
- `content/projects.ts`
- `content/skills.ts`
- `content/articles/*`

Then map the data into notebook sections:

- cover / hero
- brief author note
- experience entries
- product sketches
- project archive
- article archive
- contact

The extraction should preserve:

- role titles
- companies
- locations
- dates
- verified project names
- verified URLs
- supported technologies
- short proof statements

The extraction should avoid:

- unsupported awards
- unverifiable numbers
- filler copy
- duplicate project summaries
- text repeated in multiple sections without purpose

## Content source

Use the verified portfolio content already available in the project:

- `content/profile.ts`
- `content/experience.ts`
- `content/projects.ts`
- `content/skills.ts`

Use V4 only as a content reference source if needed. Do not invent new claims, metrics, testimonials, or companies.

## Visual direction

- Base surface: warm paper
- Text: dark ink on light background
- Accent: one restrained annotation color
- Texture: subtle paper/tape/polaroid feel
- Motion: minimal, soft, and purposeful

### Animation direction

V3 should feel alive in a paper-like way, not like a flashy portfolio.

Use:

- soft page-entry motion with short fades and small upward movement
- slight stagger on notebook cards and notes
- tiny hover lift on cards, shadows, and labels
- one signature settle-in for the hero photo or pinned note
- calm section pacing instead of dramatic reveal effects

Do not use:

- large parallax
- spinning elements
- strong neon glows
- busy continuous animation
- interaction that depends on hover only

### Color direction

Explore a warmer handcrafted palette than the current neutral notebook look.

Preferred roles:

- paper base: cream / parchment
- text: graphite or ink
- borders: soft brown-gray
- primary accent: muted mustard / ochre
- secondary accent: sepia or faded brown
- optional tiny highlight: restrained burgundy or olive

Avoid:

- bright yellow
- heavy blue dominance
- gradient-heavy surfaces
- hard black blocks
- neon or glow effects

### Color switcher plan

The new color switcher should be a small utility, not a major UI element.

It should:

- sit on the right-middle side on desktop
- use 3–5 small swatches or labeled dots
- change the note color, accent color, and paper tint via CSS variables
- keep the notebook readable in every theme
- remember the last selection
- have accessible labels for each option

Keep only the strongest four visible choices for V3:

- paper
- coral
- olive
- dark blue

These should read as notebook note colors, not a full theme marketplace.

It should not:

- take over the page
- hide content
- require hover to understand
- introduce low-contrast combinations
- create a dark theme for V3

Implementation suggestion:

- define a small set of V3 palette presets
- store the active preset in localStorage
- apply the selected preset by toggling a `data-v3-palette` attribute or root class
- keep the current page structure unchanged

Borrow only these ideas from scrapbook-style references:

- paper layers
- taped notes
- slight rotation on non-essential media
- offset shadow for printed-paper feel

Do not overuse:

- stickers
- doodles
- collage clutter
- playful overload
- low-contrast decoration

## Page structure

### 1. Hero / cover page

The hero should read like a notebook cover.

Must include:

- one short intro
- one clear title
- one primary CTA
- one secondary CTA
- one polaroid-style portrait or clipped note card
- one or two short handwritten margin notes only

### 2. About

This section should explain why the notebook exists.

Should include:

- a concise explanation of the page concept
- a short summary of what kind of work is done
- a human, direct tone

### 3. Experience

This section should read like dated notebook entries, not a dashboard timeline.

Should include:

- chronological entries
- short description of the work
- clear project or role context
- spacing that feels like notes on a page

### 4. Projects

Projects should be presented as sketch-like cards or note pages.

Should include:

- real screenshots
- short annotations
- direct project facts
- clear links to full case studies

The AppDevs entry must include the full verified release list:

- Handiman
- Escroc
- Xremit Pro
- GameShop
- StripCard
- AdChange P2P
- CrypInvest
- SuperVPN
- eFunding
- TikTokShop
- AdBot Pro
- AdFund
- AdBot AI
- Xremit
- XTrading
- SMMHub
- OneRadio
- Walletium
- xPay
- CrypInvest UI Kit

Do not show only three items.
If space is limited, split the list across the timeline entry and the project archive.

### 5. Contact

The closing section should feel like the last page of the notebook.

Should include:

- a short closing line
- contact links
- one primary next step

## Typography rules

- Main text must remain readable and mostly straight, not handwritten.
- Handwriting is allowed only for short notes, captions, labels, and small decorative lines.
- No handwriting for body paragraphs.
- Keep hierarchy simple and strong.

## Responsive rules

### Mobile

- Single-column layout
- No overcrowded side annotations
- No essential text hidden in decorative areas
- Touch targets must remain comfortable

### Tablet

- Use two columns only when it improves readability
- Avoid dense side-by-side clutter
- Keep notebook structure clear

### Desktop

- Allow margin notes, notebook spine cues, and layered media
- Keep all essential reading content in a clear left-to-right order
- Do not let decoration compete with the text

### Required viewport checks

The implementation must be checked at:

- 320 × 568
- 375 × 812
- 768 × 1024
- 1024 × 768
- 1440 × 900
- 1920 × 1080

## Interaction rules

- Navigation must be keyboard accessible.
- Focus-visible states must be obvious.
- Touch targets must be usable on mobile and tablet.
- Motion must stay subtle.
- Avoid any interaction that depends only on hover.

## Accessibility requirements

- Must maintain WCAG 2.2 AA contrast.
- Must preserve logical heading order.
- Must keep semantic HTML first.
- Must avoid hidden focus indicators.
- Must not create horizontal overflow.
- Must be usable with keyboard only.

## Implementation plan

1. Reuse verified content only.
2. Normalize V1, V2, and V4 data into a single V3 notebook narrative.
3. Rebuild the hero as a notebook cover.
4. Simplify the page into a clean notebook flow.
5. Keep only the selected four note colors visible.
6. Add responsive rules for mobile, tablet, and desktop.
7. Surface the full verified AppDevs list.
8. Keep articles and project archives accessible from V3.
9. Test keyboard, focus, overflow, and browser render.
10. Run lint, build, and visual QA.

## Anti-patterns

Do not:

- add dark mode to V3
- add scrapbook clutter
- copy V2 cosmic layers
- copy V4 dashboard/product framing
- use fake metrics
- use too many handwritten elements
- use low-contrast pastel-on-pastel styling
- create layout that breaks on tablet

## QA checklist

- [ ] Hero reads clearly on mobile
- [ ] Notebook feel is visible without clutter
- [ ] No horizontal scrolling at required widths
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Touch targets are usable
- [ ] Real content only
- [ ] Contrast stays AA compliant
- [ ] Lint passes
- [ ] Build passes
- [ ] Browser screenshots checked

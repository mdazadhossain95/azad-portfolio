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

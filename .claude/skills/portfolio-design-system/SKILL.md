---
name: portfolio-design-system
description: Create or maintain Azad portfolio design tokens, component contracts, responsive scales, typography, color roles, and state documentation. Use when editing brand colors, CSS variables, Tailwind tokens, buttons, cards, navigation, forms, typography, spacing, radii, shadows, or shared components.
---

# Portfolio Design System

Read `../_shared/references/brand-system.md`.

## Build semantic tokens

Define and reuse:

- background, surface, raised surface
- primary, secondary, and muted text
- primary and secondary actions
- contextual FinTech and AI accents
- border and focus colors
- spacing scale
- type scale
- radius scale
- shadow/elevation scale
- motion duration and easing scale
- breakpoints and container widths

Do not place arbitrary colors or spacing values in feature components when a semantic token can express the intent.

## Component contracts

For every reusable component, document:

- purpose
- variants
- sizes
- content limits
- default state
- hover
- pressed
- focus-visible
- disabled
- loading
- responsive behavior
- accessibility requirements
- allowed version-specific styling hooks

## Four-version architecture

Keep data and semantics shared. Permit presentation differences through:

- semantic theme variables
- version-scoped component wrappers
- version-specific composition
- version-specific decorative layers

Do not create four copies of profile, project, employment, or contact data.

## Validation

Check contrast and component states before marking tokens stable.
Update `docs/design-system.md` when the token or component contract changes.

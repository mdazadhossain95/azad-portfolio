---
name: portfolio-accessibility-review
description: Audit and fix Azad portfolio accessibility. Use after substantive UI changes and whenever reviewing semantics, contrast, keyboard navigation, focus, forms, mobile menus, tabs, dialogs, images, reduced motion, or WCAG compliance.
---

# Portfolio Accessibility Review

Read `../_shared/references/quality-gate.md`.

## Audit

Check:

- landmarks and skip link
- heading hierarchy
- semantic buttons and links
- keyboard reachability and operation
- focus visibility and logical order
- menu/dialog focus trap and return
- tabs and roving keyboard behavior
- form labels, autocomplete, errors, and status messages
- image alt text
- decorative `aria-hidden`
- contrast
- touch targets
- color-independent meaning
- reduced motion
- zoom and reflow
- mobile overflow

## Fix priority

1. Blocking keyboard or screen-reader defects
2. Missing labels and invalid semantics
3. Contrast and focus failures
4. Motion and reflow failures
5. Lower-severity clarity improvements

Prefer native HTML. Add ARIA only when native semantics cannot express the interaction.

Record remaining manual checks and do not claim WCAG compliance without verification.

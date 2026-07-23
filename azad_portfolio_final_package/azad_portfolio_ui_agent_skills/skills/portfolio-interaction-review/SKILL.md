---
name: portfolio-interaction-review
description: Review and complete all interaction states and motion for the Azad portfolio. Use after adding buttons, links, menus, tabs, cards, forms, loaders, animations, cursor spotlight, scroll behavior, or asynchronous actions.
---

# Portfolio Interaction Review

## State matrix

Verify every applicable element has:

- default
- hover on pointer devices
- pressed
- focus-visible
- current/selected
- disabled
- loading
- success
- error

Do not make hover the only way to reveal essential information.

## Motion rules

- Use transform and opacity where practical.
- Keep feedback immediate and transitions generally within 150–300ms.
- Make animations interruptible.
- Respect reduced motion.
- Disable pointer-only effects on touch.
- Pause nonessential continuous effects when hidden.
- Avoid blocking splash screens.
- Keep the V4 pointer spotlight decorative, noninteractive, and below content.

## Form truthfulness

A mailto action must say it opens an email draft.
A success message must require a server-confirmed success response.

---
name: portfolio-frontend-build
description: Implement production-grade Azad portfolio UI in Next.js and React using the shared content and design systems. Use when building pages, sections, routes, components, responsive layouts, animations, project displays, or version-switching behavior.
---

# Portfolio Frontend Build

Read repository instructions, package versions, design brief, and design system before editing.

## Architecture rules

- Prefer Server Components.
- Isolate interactive behavior into small Client Component leaves.
- Do not import every portfolio version into one client bundle.
- Reuse shared typed content.
- Keep `/` and `/v4` on the same V4 implementation.
- Keep shared project/article routes canonical.
- Use CSS Grid for structured page composition.
- Use `min-height: 100dvh` for full-height sections where appropriate.
- Define media dimensions to avoid layout shift.
- Avoid new dependencies unless justified.

## Implementation sequence

1. Build semantic structure.
2. Add responsive composition.
3. Apply tokens and typography.
4. Add real approved media.
5. Add interaction states.
6. Add restrained motion.
7. Verify reduced motion.
8. Verify keyboard use.
9. Run browser QA.
10. Run repository checks.

## Content rules

- Render only approved claims.
- Show store links independently.
- Do not create fake testimonials or app screens.
- Preserve collaborative wording.
- Use concrete copy and clear CTA labels.

Stop after the requested scope. Do not silently redesign unrelated versions.

---
name: portfolio-polish-gate
description: Run the final visual quality gate for an Azad portfolio page or version. Use after implementation is functionally complete and before declaring the UI finished, opening a pull request, or merging.
---

# Portfolio Polish Gate

Read `../_shared/references/quality-gate.md`.

Run these procedures in order:

1. Accessibility review
2. AI-slop review
3. Interaction-state review
4. Hierarchy and rhythm review
5. Responsive composition review
6. Content integrity review
7. Performance review
8. Browser QA

## Hierarchy and rhythm

Check:

- one unmistakable primary action
- clear first, second, and third reading order
- type sizes with real contrast
- deliberate density
- spacing from a scale
- repeated patterns with controlled strategic breaks
- no random one-off margins, shadows, radii, or colors

## Finish standard

Fix issues rather than only listing them when the fix is safe and within scope.
Report:

- issues found and fixed
- issues requiring approval
- checks that could not be performed
- exact commands and viewport verification completed

Do not say “production-ready” unless the repository checks and browser checks pass.

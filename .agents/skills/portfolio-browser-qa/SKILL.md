---
name: portfolio-browser-qa
description: Render and verify the Azad portfolio in a real browser. Use after frontend changes, before visual approval, and whenever checking responsive design, interactions, screenshots, console errors, navigation, forms, animations, or layout regressions.
compatibility: Requires a runnable local web application and Playwright or equivalent browser tooling.
---

# Portfolio Browser QA

## Start with reconnaissance

1. Start the application using the repository command.
2. Wait for the page to render and network activity to settle appropriately.
3. Capture the DOM, console, and screenshots.
4. Identify selectors from the rendered page.
5. Exercise interactions.

## Required viewport set

- 320x568
- 375x812
- 768x1024
- 1024x768
- 1440x900
- 1920x1080

## Required checks

- no horizontal overflow
- no clipped text
- no overlapping decoration
- version switcher does not cover content
- anchors are not hidden behind the header
- keyboard navigation
- mobile menu focus
- tabs
- primary CTA
- external project links
- form behavior
- reduced motion
- touch/pointer effect differences
- browser console and failed requests
- screenshot comparison for obvious regression

## Evidence

Save concise screenshots and test output under an ignored QA directory unless the repository intentionally tracks approved references.

Report verified facts and limitations. Do not infer visual success from a passing build.

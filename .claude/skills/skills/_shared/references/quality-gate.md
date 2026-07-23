# UI Quality Gate

A UI change is not complete until all applicable checks pass.

## Purpose and hierarchy

- Identify the primary audience and primary action.
- Make the first viewport understandable within five seconds.
- Remove repeated copy and decorative filler.
- Ensure each section advances the narrative.

## Design system

- Use semantic tokens rather than arbitrary hex values.
- Use a defined type scale, spacing scale, radius scale, and motion scale.
- Reuse components and document variants/states.
- Keep each version internally consistent and clearly distinct from the others.

## Typography

- Use no more than two main font families per version.
- Use display/handwriting faces only for short text.
- Keep mobile body text at least 16px.
- Use comfortable line length and `text-wrap: pretty` where appropriate.
- Prevent layout shift from font loading.

## Interaction states

Every interactive element needs:
- default
- hover where a pointer exists
- pressed/active
- focus-visible
- disabled where applicable
- loading where asynchronous
- success/error feedback where applicable

## Accessibility

- Semantic HTML before ARIA.
- Logical heading structure.
- Keyboard-operable navigation, tabs, dialogs, menus, and forms.
- Visible focus rings.
- 44px minimum touch targets.
- Reduced-motion support.
- Meaningful alt text; empty alt for decoration.
- Form labels, field-linked errors, and autocomplete attributes.
- No color-only meaning.

## Responsive design

- Test 320, 375, 768, 1024, 1440, and 1920 widths.
- No horizontal scrolling.
- No essential hover-only interaction.
- No overlapping version switcher, nav, or CTA.
- Use CSS Grid for structured layouts; avoid brittle percentage math.
- Use `min-height: 100dvh` rather than `height: 100vh` for full-height mobile sections.

## Motion and performance

- Prefer transform and opacity.
- Keep motion purposeful and interruptible.
- Avoid page-blocking loaders.
- Disable continuous effects for reduced motion and touch where appropriate.
- Pause nonessential animation when the document is hidden.
- Do not load all four version bundles on one route.
- Define image dimensions and protect LCP/CLS.

## Content integrity

- Do not invent testimonials, numbers, outcomes, screenshots, employers, or ownership.
- Do not present downloads as active users.
- State collaborative contribution clearly.
- Hide claims that are not verified or explicitly approved.

## Browser verification

- Render the real application.
- Inspect desktop and mobile screenshots.
- Exercise keyboard navigation.
- Check browser console.
- Verify links and form behavior.
- Report what was verified and what could not be verified.

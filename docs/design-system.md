# Portfolio Design System Notes

## V2 Cosmic Gravity

- **Container:** 1180px reading width within a 1308px padded shell.
- **Safe zones:** left-content 6–48% / visual 52–110%; right-content 52–94% /
  visual -10–48%.
- **Type:** display 44–78px, section heading 34–48px, body 16–18px, supporting
  text 15px, technical labels 12–13px.
- **Controls:** minimum 44px target; primary/secondary buttons minimum 48px.
- **Surfaces:** 14px radius, navy 72–82% opacity, 12px blur, one subtle border.
- **Motion:** 240ms interaction response; camera motion is authored by GSAP;
  local damping is interruptible; reduced motion removes continuous movement.
- **Focus:** 2px cyan focus-visible outline with at least 2px offset.
- **Earth interaction:** full right visual-zone drag surface on desktop/tablet;
  keyboard arrows supported; no drag surface below 768px.
- **Fallback:** semantic content never depends on canvas; the static cosmic
  layer replaces WebGL on failure or visitor request, and the page now starts
  directly on the real V2 content without a blocking intro overlay.
- **Paired V2 CTAs:** shared 48px minimum height; Hero pairs use a 168px minimum
  width and Contact pairs use a 200px width so adjacent actions have equal visual
  dimensions while still wrapping safely.
- **External resource wording:** Drive-hosted resumes use `View resume`, never
  `Download PDF`. Article cards have one destination; when `mediumUrl` exists,
  the title/card opens Medium and no competing `Read` action is shown.
- **Version-aware project routes:** V2 cards use `/v2/projects/[slug]` and the
  V2 mission-dossier presentation while preserving `/projects/[slug]` as the
  canonical URL and centralized `CaseStudy` data. V2 archive return actions
  target the originating homepage section (`#projects` or `#transmissions`).
- **3D availability:** capable devices always start V2 in enhanced 3D mode.
  There is no visitor-facing `Skip 3D journey` toggle and no persisted static
  preference. Static artwork remains an automatic WebGL/failure fallback only.
- **Section rhythm:** the hero opens directly on Earth, then the journey moves
  through Moon, Mars, Jupiter, Saturn and the solar contact horizon without a
  page-blocking prelude.

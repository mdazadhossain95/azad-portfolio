# Version Implementation Status

- **V4 (Mobile Product Engineer)**: Base implemented. Canonical at `/` and accessible at `/v4`. Uses shared `V4Home` component.
- **V1 (Classic Developer)**: Complete at `/v1`. Own nested layout (`.v1-theme`), header/footer, hero, featured work, skills, expertise, process, experience, testimonials, articles, contact CTA. Marked with `noindex`.
- **V2 (Cosmic Gravity)**: Complete at `/v2`. Own nested layout (`.v2-theme`), cosmic header/footer, hero, about, experience timeline, projects, articles, capabilities, and contact. Marked with `noindex`. Design brief: `docs/design/v2-cosmic-gravity.md`.
- **V3 (Engineering Notebook)**: Complete at `/v3`. Own nested layout (`.v3-theme`, warm paper light / warm charcoal dark, both AA-checked), route-scoped Caveat handwriting font for short labels only, cover hero with polaroid portrait, about, career timeline, product sketches (real project screenshots), technical toolkit, work process, client notes, contact. Marked with `noindex`. Design brief: `docs/design/v3-engineering-notebook.md`.

## Shared Architecture
- `VersionSwitcher` component is globally available and accessible.
- Shared content system connects to all shells without duplication.
- Global metadata helper manages SEO rules and canonical tags.
- Brand tokens centralized in `styles/portfolio/brand.css`.

# Version Implementation Status

- **V4 (Mobile Product Engineer)**: Base implemented. Canonical at `/` and accessible at `/v4`. Uses shared `V4Home` component.
- **V1 (Classic Developer)**: Complete at `/v1`. Own nested layout (`.v1-theme`), header/footer, hero, featured work, skills, expertise, process, experience, testimonials, articles, contact CTA. Marked with `noindex`.
- **V2 (FinTech Systems Lab)**: Complete at `/v2`. Own nested layout (`.v2-theme`, dark-only), systems header/footer, hero, capability modules, production systems (real FinTech projects), architecture workflow, experience timeline, technical matrix, contact. Marked with `noindex`. Design brief: `docs/design/v2-fintech-systems-lab.md`.
- **V3 (Engineering Notebook)**: Placeholder shell implemented at `/v3`. Marked with `noindex`.

## Shared Architecture
- `VersionSwitcher` component is globally available and accessible.
- Shared content system connects to all shells without duplication.
- Global metadata helper manages SEO rules and canonical tags.
- Brand tokens centralized in `styles/portfolio/brand.css`.

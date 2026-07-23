# Version Implementation Status

- **V4 (Mobile Product Engineer)**: Base implemented. Canonical at `/` and accessible at `/v4`. Uses shared `V4Home` component.
- **V1 (Corporate FinTech)**: Placeholder shell implemented at `/v1`. Marked with `noindex`.
- **V2 (AI & Startups)**: Placeholder shell implemented at `/v2`. Marked with `noindex`.
- **V3 (DevTools Maker)**: Placeholder shell implemented at `/v3`. Marked with `noindex`.

## Shared Architecture
- `VersionSwitcher` component is globally available and accessible.
- Shared content system connects to all shells without duplication.
- Global metadata helper manages SEO rules and canonical tags.
- Brand tokens centralized in `styles/portfolio/brand.css`.

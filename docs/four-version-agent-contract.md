# Four-Version Agent Contract

1. **Shared Content**: The portfolio must use exactly one source of truth (`content/profile.ts` and related files). Do not duplicate content.
2. **Independent Presentations**: The single content tree will drive four independent frontend experiences.
3. **V4 at `/`**: V4 is the canonical site located at the root `/`.
4. **V1–V3 Noindex**: Versions 1, 2, and 3 will route to `/v1`, `/v2`, and `/v3`, and must explicitly use `noindex, follow` metadata to prevent SEO cannibalization.
5. **No Copied Source**: Do not copy external source code, layouts, or verbatim copy.
6. **No Invented Facts**: All statistics, results, and features must be true.
7. **Preserve Admin**: Do not remove the Firebase architecture.
8. **Browser QA**: Visual UI MUST be tested in real responsive viewports.
9. **Build Gates**: All phases must strictly pass linting, typechecking, and production builds before completion.
10. **Stop after each Phase**: Work proceeds phase-by-phase upon human approval. Nothing is merged automatically.

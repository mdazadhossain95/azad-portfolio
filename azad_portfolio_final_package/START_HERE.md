# Azad Portfolio — Final Implementation Package

## Start here

This package is the final execution system for rebuilding `azadhossain.dev` as one portfolio platform with four visual versions.

### Final versions

| Route | Version | Purpose |
|---|---|---|
| `/` and `/v4` | **V4 — Mobile Product Engineer** | Main client-conversion portfolio and canonical site |
| `/v1` | **V1 — Classic Developer** | Recruiters and engineering teams |
| `/v2` | **V2 — FinTech Systems Lab** | FinTech, banking, payments and secure-system clients |
| `/v3` | **V3 — Engineering Notebook** | Creative founders and personal branding |

### Read these files in order

1. [`AZAD_PORTFOLIO_FINAL_BUILD_BLUEPRINT.md`](./AZAD_PORTFOLIO_FINAL_BUILD_BLUEPRINT.md)  
   What to build, why it should exist, architecture, design system, content rules, phases and definition of done.

2. [`AZAD_PORTFOLIO_DESIGN_AND_UI_RULES.md`](./AZAD_PORTFOLIO_DESIGN_AND_UI_RULES.md)  
   Exact visual direction, color system, typography, components, motion, responsive rules and anti-patterns.

3. [`AZAD_PORTFOLIO_AI_AGENT_EXECUTION_PROMPTS.md`](./AZAD_PORTFOLIO_AI_AGENT_EXECUTION_PROMPTS.md)  
   Copy-ready prompts for the coding agent. Give the agent **one prompt at a time** and review the result before continuing.

4. [`AZAD_PORTFOLIO_CONTENT_APPROVAL_CHECKLIST.md`](./AZAD_PORTFOLIO_CONTENT_APPROVAL_CHECKLIST.md)  
   Facts, claims, links, screenshots and content that must be verified before publication.

## Correct execution order

The repository already contains a V4-style redesign branch, so the efficient order is:

1. Install and verify project-local UI skills.
2. Audit the active branch and protect existing work.
3. Correct security, content, build and architecture issues.
4. Complete the shared content and design foundation.
5. Finish and harden V4 first.
6. Build shared project/case-study pages.
7. Build V1.
8. Build V2.
9. Build V3.
10. Complete accessibility, performance, SEO and browser QA.
11. Open a draft pull request.
12. Merge and deploy only after human approval.

## Non-negotiable rules

- Do not create four separate codebases.
- Do not duplicate profile, project or experience data.
- Do not invent metrics, testimonials, screenshots or responsibilities.
- Do not copy another portfolio’s source code, writing, logo or branded assets.
- Preserve the Firebase/admin system until a documented migration is approved.
- V4 is canonical at `/`.
- V1–V3 use `noindex, follow`.
- Every phase must pass lint, type checking and production build.
- Every phase stops for review.
- Nothing is merged or deployed automatically.

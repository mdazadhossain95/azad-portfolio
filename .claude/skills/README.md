# Azad Portfolio UI Agent Skills

This is a project-local, original skill pack for building and reviewing the four-version Azad portfolio.

It is informed by:

- Anthropic's frontend-design approach: purposeful aesthetic direction and avoidance of generic AI UI.
- The Trystan-SA design-system workflow: discovery, design-system extraction, variations, accessibility, hierarchy, interaction states, and a final polish pass.
- Aura community patterns: tokenized design systems, mobile-first thinking, and micro-detail refinement.
- Vercel's React/Next.js and web-interface guidance.
- The Agent Skills open format and progressive-disclosure model.

The external sources are research references. Their text is not copied into this pack.

## Why this pack is project-specific

Installing every external skill unchanged creates conflicting rules. Examples:

- Some skills ban all custom cursors, while V4 requires a pointer-following spotlight that is not a replacement cursor.
- Some require three variations for every task, while the portfolio already has four approved directions.
- Some assume a single HTML artifact, while this project is a production Next.js repository.
- Some prescribe fonts or layouts universally, which conflicts with an established brand and four distinct versions.

This pack keeps the useful principles and resolves them against the repository's architecture and approved brand.

## Project installation

Run:

```bash
bash scripts/install-project-skills.sh
```

The script copies the skill pack into both:

- `.claude/skills/` for Claude Code
- `.agents/skills/` for Codex and compatible agents

Commit the installed skills with the repository so every agent uses the same pinned rules.

## Recommended official skills

Install trusted official skills separately and project-locally:

```bash
npx skills add anthropics/skills   --skill frontend-design   --skill webapp-testing   -a claude-code -a codex --copy -y

npx skills add vercel-labs/agent-skills   --skill web-design-guidelines   --skill vercel-react-best-practices   -a claude-code -a codex --copy -y

npx skills add vercel-labs/next-skills   --skill next-best-practices   -a claude-code -a codex --copy -y
```

Inspect all installed files and scripts before committing or executing them.

## Source-pinning rule

Do not let a review skill fetch mutable instructions from an unpinned `main` branch during every run.

Prefer:

1. project-local copied skills
2. recorded upstream repository and commit SHA
3. manually reviewed scripts
4. explicit update pull requests

## Agent workflow

For every substantive UI task:

1. Load `portfolio-ui-router`.
2. Read the matching version brief and brand references.
3. Establish or confirm the design direction.
4. Wireframe before high-fidelity code when composition is changing.
5. Implement with the shared design/content architecture.
6. Run accessibility, interaction, AI-slop, and polish reviews.
7. Verify in a real browser.
8. Run lint, typecheck, tests, and build.
9. Stop and provide evidence.

## Files to add to repository instructions

Append the supplied snippets to `CLAUDE.md` and `AGENTS.md`, adjusting paths only when the repository structure differs.

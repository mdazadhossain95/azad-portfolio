# Prompt 00A — Install and Verify the UI Design Skill System

Copy this prompt into the coding agent before continuing the four-version build.

```text
Work on the current portfolio feature branch. Do not redesign a page in this task.

Your assignment is to install, inspect, and verify the project-local UI design
skill system before any further V1/V2/V3/V4 implementation.

1. Read AGENTS.md, CLAUDE.md, README.md, package.json, and the current Git diff.
2. Do not execute unreviewed third-party scripts.
3. Create a checkpoint commit or confirm the working tree is safe.
4. Add the supplied `azad_portfolio_ui_agent_skills` pack to the repository
   under `tools/azad-portfolio-ui-skills/`.
5. Run:

   bash tools/azad-portfolio-ui-skills/scripts/install-project-skills.sh "$PWD"

6. Confirm these paths exist:

   .claude/skills/portfolio-ui-router/SKILL.md
   .agents/skills/portfolio-ui-router/SKILL.md

7. Append the supplied Claude snippet to CLAUDE.md and the supplied agent
   snippet to AGENTS.md. Do not duplicate an existing section.

8. Install these official project-local skills using copied files rather than
   mutable global links:

   npx skills add anthropics/skills      --skill frontend-design      --skill webapp-testing      -a claude-code -a codex --copy -y

   npx skills add vercel-labs/agent-skills      --skill web-design-guidelines      --skill vercel-react-best-practices      -a claude-code -a codex --copy -y

   npx skills add vercel-labs/next-skills      --skill next-best-practices      -a claude-code -a codex --copy -y

9. If a command reports a different skill identifier, list available skills,
   use the exact discovered name, and document the correction.

10. Inspect every installed SKILL.md and all bundled scripts before use.
    Record:
    - source repository
    - installed skill name
    - upstream commit SHA when available
    - files containing executable scripts
    - network-fetching instructions
    - rules that conflict with this project

11. Do not install the full Trystan system prompt as a global instruction.
    Use the project-local adapted procedures instead. The original system is
    calibrated for HTML design artifacts and contains rules that conflict with
    this Next.js four-version architecture.

12. Do not automatically install arbitrary Aura community skills. Treat Aura as
    a research catalogue. Record useful principles, provenance, license if
    available, and conflicts before adapting anything.

13. Create:

    docs/agent-skills-installation-audit.md

    Include:
    - skills installed
    - exact paths
    - source and commit
    - trust level: official / reviewed third-party / project-local
    - script and network-access review
    - conflicts and project overrides
    - activation test results
    - update procedure
    - uninstall procedure

14. Verify activation using substantive test prompts without editing production
    UI:

    - "Review the current V4 hero against the portfolio design direction."
    - "Audit the version switcher for keyboard and mobile usability."
    - "Review the current Next.js component for rendering and bundle risks."
    - "Plan browser QA for V1 at 320px and 1440px."

    Confirm the expected skill names are selected or explicitly load them.

15. Run:

    npm run lint
    npm run typecheck
    npm run build

16. Do not start V1, V2, V3, or V4 implementation in this task.

Acceptance criteria:

- Project-local skills are installed for Claude Code and Codex.
- Repository instructions force the router and review workflow.
- Third-party scripts and network instructions are audited.
- External sources are pinned or documented.
- No production UI is redesigned.
- Existing build checks pass or failures are reported exactly.

Commit with:

chore: install portfolio ui agent skills

Stop after the commit.

Return:
1. Installed skills
2. Paths
3. Provenance and commit SHAs
4. Security/conflict findings
5. Activation test results
6. Build results
7. Commit hash
```

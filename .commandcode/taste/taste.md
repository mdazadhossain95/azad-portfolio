# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# git
- Create a new git branch before starting refactoring or redesign work. Confidence: 0.70

# Design & UX
- Prefers the portfolio default theme to be dark, not light. Confidence: 0.90
- Wants landing/homepages to be single-page experiences; only Projects and Articles get separate archive/detail pages. Confidence: 0.90
- Landing sections should include a "View all" / "See all" action link that routes to the version-specific archive page. Confidence: 0.85
- Archive/list pages should use a back button to return home rather than a large visible title like "All Projects". Confidence: 0.85

# Information architecture
- Portfolio has multiple versioned UIs (v1, v2, v3, v4) that share the same underlying data but each have a distinct design concept (e.g., v1 clean/default, v2 space/gravity, v3 engineering notebook, v4 comprehensive). Confidence: 0.90
- Project/article routes should be version-scoped (e.g., `/v4/projects`, `/v1/articles`) so each version is self-contained. Confidence: 0.85

# Data & content
- Wants one centralized source of truth for all portfolio data (projects, articles, experience, profile) used by every version; do not duplicate or hardcode data per version. Confidence: 0.95
- Does not want an external CMS/admin panel (e.g., Firebase/Firestore); content should live in static source files. Confidence: 0.85
- Wants project detail pages to be unique per project with rich, profession-aligned context written by the agent rather than asking him for copy. Confidence: 0.85

# Workflow & communication
- Prefers the agent to work autonomously, make decisions, and report completion instead of asking clarifying questions ("don't ask me", "think more", "let me know when finish"). Confidence: 0.90
- Likes to run the project on localhost and inspect it visually after changes before considering a task done. Confidence: 0.80
- Uses competitor/reference sites (e.g., riturajratan.com) to communicate desired design direction. Confidence: 0.70


export const services = [
  {
    id: "production-flutter",
    title: "Production Flutter Development",
    description:
      "Build Android and iOS applications with maintainable architecture, API integration, polished UI, and release-ready delivery.",
    caseStudySlug: "codegopay-individual",
  },
  {
    id: "existing-app-improvement",
    title: "Existing App Improvement",
    description:
      "Continue an existing Flutter project, fix bugs, complete features, improve architecture, and reduce production risk.",
    caseStudySlug: "fibervpn",
  },
  {
    id: "fintech-payments",
    title: "FinTech and Payment Features",
    description:
      "Implement wallet screens, transaction flows, secure authentication, subscriptions, payment states, KYC, and backend-connected financial workflows.",
    caseStudySlug: "codegopay-individual",
  },
  {
    id: "release-maintenance",
    title: "Release and Maintenance",
    description:
      "Resolve build issues, prepare TestFlight and Play releases, configure Firebase, monitor crashes, and support ongoing updates.",
    caseStudySlug: "fibervpn",
  },
  {
    id: "ai-features",
    title: "AI-Powered Mobile Features",
    description:
      "Add assistants, content generation, intelligent search, AI study flows, usage controls, and secure backend-supported AI integration.",
    caseStudySlug: "studygenie-ai",
  },
];

export type Service = (typeof services)[number];

export const expertise = [
  {
    id: "mobile",
    title: "Mobile & Cross-Platform",
    description:
      "Building maintainable Android and iOS applications with Flutter, native integrations, and production-focused architecture.",
    tags: ["Flutter", "Dart", "React Native", "Native iOS/Android"],
  },
  {
    id: "web",
    title: "Web Frontend Engineering",
    description:
      "Creating responsive web products, dashboards, and API-driven interfaces using modern JavaScript frameworks.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend, APIs & Data",
    description:
      "Developing secure APIs, authentication, data flows, and backend services to power cross-platform applications.",
    tags: ["Node.js", "PHP / Laravel", "Firebase", "Supabase", "SQL / NoSQL"],
  },
  {
    id: "delivery",
    title: "Integrations & Delivery",
    description:
      "Connecting wallets, AI, and SaaS platforms, then supporting testing, store deployment, and production maintenance.",
    tags: ["Payments & FinTech", "AI & LLMs", "CI/CD", "App Store & Play Store"],
  },
];

export type Expertise = (typeof expertise)[number];

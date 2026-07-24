export const skills = [
  {
    category: "Mobile & Hybrid Apps",
    items: ["Flutter", "Dart", "React Native", "Android", "iOS", "Adaptive UI"],
  },
  {
    category: "Architecture & State",
    items: ["Clean Architecture", "BLoC", "Cubit", "Riverpod", "Provider", "Redux"],
  },
  {
    category: "Full-Stack & Web",
    items: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MERN Stack", "GraphQL", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["REST APIs", "Firebase", "Supabase", "PostgreSQL", "MongoDB", "Django"],
  },
  {
    category: "FinTech & Web3",
    items: ["FinTech", "Payment Gateways", "DeFi", "Web3", "Blockchain", "Cryptography", "KYC"],
  },
  {
    category: "AI & Integrations",
    items: ["AI Mobile App Development", "Claude Certified", "ChatGPT", "Gemini", "Biometric Auth", "Push Notifications"],
  },
  {
    category: "Delivery & Quality",
    items: ["CI/CD", "Codemagic", "Crashlytics", "TestFlight", "App Store Connect", "Play Console"],
  },
];

export type SkillCategory = (typeof skills)[number];

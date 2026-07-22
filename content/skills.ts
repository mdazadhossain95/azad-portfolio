export const skills = [
  {
    category: "Mobile Engineering",
    items: ["Flutter", "Dart", "Android", "iOS", "Adaptive UI"],
  },
  {
    category: "Architecture & State",
    items: ["Clean Architecture", "BLoC", "Cubit", "Riverpod", "Provider"],
  },
  {
    category: "Backend & Data",
    items: ["REST APIs", "Firebase", "Supabase", "PostgreSQL", "Django"],
  },
  {
    category: "Product Integrations",
    items: ["Payments", "Subscriptions", "KYC", "Biometric Auth", "Push Notifications", "Deep Links"],
  },
  {
    category: "Delivery & Quality",
    items: ["Git", "CI/CD", "Codemagic", "Fastlane", "Crashlytics", "TestFlight", "App Store Connect", "Play Console"],
  },
];

export type SkillCategory = (typeof skills)[number];

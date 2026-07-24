export const services = [
  {
    id: "production-flutter",
    title: "Production Flutter Development",
    description:
      "Build Android and iOS applications with maintainable architecture, API integration (Firebase, Supabase, Custom REST/GraphQL), polished UI, and release-ready delivery.",
    caseStudySlug: "codegopay-individual",
    packages: [
      { name: "Custom Mobile App Development", url: "https://www.upwork.com/services/product/development-it-custom-mobile-app-development-for-android-ios-and-startups-2076587035798234116" },
      { name: "Flutter + Firebase/Supabase App", url: "https://www.upwork.com/services/product/development-it-mobile-app-using-flutter-with-firebase-1757390558801907712" }
    ]
  },
  {
    id: "full-stack-web",
    title: "Full-Stack Web & Backend",
    description:
      "Develop complete web platforms and robust backend architectures using React, React Native, Node.js, and modern databases.",
    caseStudySlug: "studygenie-ai",
    packages: []
  },
  {
    id: "existing-app-improvement",
    title: "Existing App Improvement",
    description:
      "Continue an existing Flutter project, fix bugs, complete features, improve architecture, and reduce production risk.",
    caseStudySlug: "fibervpn",
    packages: [
      { name: "Code Refactoring & Optimization", url: "https://www.upwork.com/services/product/development-it-clean-code-refactoring-and-ai-assisted-app-optimization-2076581595160994820" },
      { name: "Bug & Crash Fixes", url: "https://www.upwork.com/services/product/development-it-mobile-app-bug-fixes-crash-fixes-and-performance-improvements-2076572934522560329" }
    ]
  },
  {
    id: "fintech-payments",
    title: "FinTech and Payment Features",
    description:
      "Implement wallet screens, transaction flows, secure authentication, subscriptions, payment states, KYC, and backend-connected financial workflows.",
    caseStudySlug: "codegopay-individual",
    packages: [
      { name: "Web3 DeFi Wallet", url: "https://www.upwork.com/services/product/development-it-a-web3-wallet-app-with-defi-and-staking-features-2075884284667256649" },
      { name: "Digital Banking & KYC", url: "https://www.upwork.com/services/product/development-it-a-digital-banking-app-with-kyc-and-secure-transactions-2075651975212433650" },
      { name: "Cross-Border Money Transfer", url: "https://www.upwork.com/services/product/development-it-a-cross-border-money-transfer-app-with-multi-currency-support-2075854091809980658" },
      { name: "Stablecoin Payments", url: "https://www.upwork.com/services/product/development-it-a-stablecoin-payment-app-with-web3-transaction-features-2075874808957905024" }
    ]
  },
  {
    id: "ai-features",
    title: "AI-Powered Mobile Features",
    description:
      "Add assistants, content generation, intelligent search, AI study flows, usage controls, and secure backend-supported AI integration.",
    caseStudySlug: "studygenie-ai",
    packages: [
      { name: "AI FinTech Chatbot", url: "https://www.upwork.com/services/product/development-it-an-ai-chatbot-for-your-fintech-or-banking-application-2075891632015747864" },
      { name: "AI Personal Finance", url: "https://www.upwork.com/services/product/development-it-an-ai-powered-personal-finance-app-with-smart-insights-2075886494612479817" },
      { name: "RAG Document Chatbot", url: "https://www.upwork.com/services/product/development-it-an-ai-document-chatbot-with-rag-and-intelligent-search-2076539221165232117" },
      { name: "AI App via Lovable/Bolt", url: "https://www.upwork.com/services/product/development-it-get-ai-app-development-with-lovable-bolt-new-replit-claude-code-2076606534685056841" }
    ]
  },
  {
    id: "saas-healthtech",
    title: "SaaS & HealthTech Solutions",
    description:
      "Develop scalable Software-as-a-Service platforms and secure HealthTech applications, focusing on data privacy, subscription architectures, patient dashboards, and cross-platform responsive experiences.",
    caseStudySlug: "codegokyc",
    packages: []
  },
];

export type Service = (typeof services)[number];

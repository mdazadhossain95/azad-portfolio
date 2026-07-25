import { CaseStudy } from "@/lib/types";

export const projects: CaseStudy[] = [
  {
    id: "p1",
    slug: "codegopay-individual",
    shortTitle: "CodegoPay",
    title: "European FinTech Banking App at Codego",
    category: "FinTech & Payments",
    status: "live",
    featured: true,
    priority: 1,
    summary:
      "Mobile banking products supporting account onboarding, IBAN operations, SEPA transfers, and secure access.",
    productContext:
      "CodegoPay Individual is a personal banking app for European users. It supports IBAN onboarding, SEPA and SEPA Instant transfers, direct debit, biometric payment authorization, and always-on account access.",
    businessProblem:
      "The product needed a reliable mobile interface for sensitive financial flows, with strong authentication, clear transaction states, and consistent behavior across Android and iOS.",
    role: "Flutter Developer",
    timeframe: "Mar 2024 – Jun 2026",
    company: "Codego",
    teamContext: "Worked within a product team alongside backend engineers, QA, and product managers.",
    ownershipNote:
      "I contributed to the Flutter mobile implementation, API integration, and release preparation. Some architectural and backend decisions were owned by other team members.",
    confidentialityNote: "Specific user numbers and internal metrics are confidential.",
    platforms: ["Android", "iOS"],
    responsibilities: [
      "Implemented Flutter screens for IBAN onboarding, transfer flows, and account management.",
      "Integrated REST APIs for transactions, balances, and user verification.",
      "Built biometric authorization flows and secure session handling.",
      "Added Firebase notifications and Crashlytics monitoring.",
      "Supported Play Store and App Store releases.",
    ],
    challenges: [
      "Complex API states for pending, failed, and completed transfers.",
      "Secure session expiry and re-authentication flows.",
      "Platform differences in biometric APIs and background behavior.",
      "Maintaining stability across multiple production releases.",
    ],
    approach: [
      "Understand the product flows and API contracts before implementation.",
      "Map all transfer states and edge cases.",
      "Plan small, testable releases.",
      "Build the Flutter UI and state management layer.",
      "Verify behavior on Android and iOS devices.",
      "Release through store channels and monitor crashes.",
    ],
    contributions: [
      "Implemented transfer-state handling and transaction-history screens.",
      "Built biometric authorization entry points.",
      "Integrated Firebase Cloud Messaging for account notifications.",
      "Resolved production issues reported through Crashlytics.",
      "Prepared and shipped multiple store releases.",
    ],
    technicalDecisions: [
      {
        title: "BLoC for transfer state",
        explanation:
          "Transfer flows involve multiple async states. BLoC kept the UI predictable and made edge cases easier to test.",
      },
      {
        title: "Secure storage for tokens",
        explanation:
          "Used platform-specific secure storage so session tokens were not kept in plain preferences.",
      },
    ],
    results: [
      {
        statement: "Shipped to Play Store and App Store.",
        evidence: "public",
        sourceUrl: "https://play.google.com/store/apps/details?id=com.codegopay.individual",
      },
      {
        statement: "Integrated production transfer and KYC flows.",
        evidence: "client-approved",
      },
      {
        statement: "Supported ongoing production releases and crash monitoring.",
        evidence: "private",
      },
    ],
    lessons: [
      "Financial apps require rigorous state modeling and clear error messaging.",
      "Platform biometric APIs differ enough to justify abstraction and separate testing.",
    ],
    technologies: ["Flutter", "Dart", "BLoC", "REST APIs", "Firebase", "Biometric Auth"],
    integrations: ["SEPA", "KYC", "Push Notifications", "Crashlytics"],
    coverImage: "/project-assets/codegopay-individual/cover.png",
    gallery: [
      { src: "/project-assets/codegopay-individual/cover.png", alt: "CodegoPay app screen", caption: "Personal banking dashboard" },
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.codegopay.individual",
      appStore: "https://apps.apple.com/ie/app/codegopay-individual/id6478804402",
    },
  },
  {
    id: "p1-kyc",
    slug: "codegokyc",
    shortTitle: "CodegoKYC",
    title: "CodegoKYC Identity Verification",
    category: "FinTech & Payments",
    status: "live",
    featured: true,
    priority: 2,
    summary:
      "Secure digital identity verification platform supporting document scanning and biometric liveness checks.",
    productContext:
      "CodegoKYC provides seamless identity verification for FinTech onboarding, featuring automated document scanning and facial recognition.",
    businessProblem:
      "Regulatory compliance requires strict KYC (Know Your Customer) processes. The app needed a flawless, high-conversion camera and document scanning flow.",
    role: "Flutter Developer",
    timeframe: "2024 - 2026",
    company: "Codego",
    teamContext: "Collaborated with backend security engineers and compliance teams.",
    ownershipNote:
      "I engineered the Flutter application, specializing in the camera integrations and local image processing.",
    confidentialityNote: "Specific verification volumes and internal compliance thresholds are confidential.",
    platforms: ["Android", "iOS"],
    responsibilities: [
      "Built document scanning and facial liveness detection flows.",
      "Integrated secure APIs for transmitting sensitive identity data.",
      "Optimized camera performance across a wide range of mobile devices."
    ],
    challenges: [
      "Handling camera permissions and hardware differences across Android devices.",
      "Ensuring high-quality image capture without excessive file sizes."
    ],
    approach: [
      "Implemented strict UI overlays to guide users to take perfect document photos.",
      "Used native camera plugins with custom focus and exposure controls."
    ],
    contributions: [
      "Delivered a production-ready KYC flow.",
      "Significantly reduced onboarding drop-off rates through better UX."
    ],
    technicalDecisions: [
      {
        title: "Native Camera Integration",
        explanation: "Used direct platform channel configurations to ensure maximum camera resolution for document OCR."
      }
    ],
    results: [
      {
        statement: "Successfully verified identities for the Codego platform.",
        evidence: "client-approved"
      }
    ],
    lessons: [
      "Hardware fragmentation on Android makes camera-heavy apps particularly challenging to standardize."
    ],
    technologies: ["Flutter", "Dart", "Camera APIs", "REST APIs"],
    integrations: ["OCR", "Biometrics", "KYC Providers"],
    coverImage: "/project-assets/codegokyc/1.png",
    gallery: [
      { src: "/project-assets/codegokyc/1.png", alt: "CodegoKYC App", caption: "Identity Verification" },
      { src: "/project-assets/codegokyc/2.png", alt: "CodegoKYC Scan", caption: "Document Scanning" }
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=code.go.kyc",
      website: "https://codegokyc.com/",
    },
  },
  {
    id: "p2",
    slug: "codegopay-business",
    shortTitle: "CodegoPay Business",
    title: "CodegoPay Business Banking",
    category: "FinTech & Payments",
    status: "live",
    featured: false,
    priority: 11,
    summary:
      "Business banking platform focused on fast onboarding, dedicated IBAN accounts, and SEPA payment operations.",
    productContext:
      "CodegoPay Business provides business accounts with dedicated IBANs, instant SEPA payments, document upload, and team-level finance management.",
    businessProblem:
      "Business customers needed a fast, reliable mobile interface for onboarding, payments, and account management.",
    role: "Flutter Developer",
    timeframe: "Mar 2024 – Jun 2026",
    company: "Codego",
    teamContext: "Collaborated with the same product team behind the individual banking app.",
    ownershipNote:
      "I contributed to Flutter screens, API integration, and release tasks. Business logic and backend systems were shared across the team.",
    confidentialityNote: "Internal metrics and business volumes are confidential.",
    platforms: ["Android", "iOS"],
    responsibilities: [
      "Implemented business onboarding and document upload flows.",
      "Integrated SEPA payment APIs and account dashboards.",
      "Supported QA cycles and production fixes.",
    ],
    challenges: [
      "Document verification state tracking.",
      "Multi-user account permissions and roles.",
      "Reusing code between individual and business apps while keeping product differences clear.",
    ],
    approach: [
      "Reused core modules where possible, branched where business logic differed.",
      "Tested document flows on real devices and edge network conditions.",
      "Released incrementally and monitored Crashlytics.",
    ],
    contributions: [
      "Built onboarding and document upload screens.",
      "Integrated payment-list and account-management APIs.",
      "Supported release cycles for both stores.",
    ],
    technicalDecisions: [
      {
        title: "Feature-flagged business modules",
        explanation:
          "Kept shared code clean by gating business-specific flows behind feature flags during early releases.",
      },
    ],
    results: [
      {
        statement: "Shipped to Play Store and App Store.",
        evidence: "public",
        sourceUrl: "https://play.google.com/store/apps/details?id=code.gopay.business",
      },
      {
        statement: "Implemented business onboarding and payment flows in production.",
        evidence: "client-approved",
      },
    ],
    lessons: [
      "Reusing architecture across two products speeds up delivery but requires clear boundaries.",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "KYC", "Firebase"],
    integrations: ["SEPA", "Document Upload", "Push Notifications"],
    coverImage:
      "https://res.cloudinary.com/hashfort/image/upload/v1683010927/pagecontent/ht0epy9iasqd66a3vn6p.png",
    gallery: [
      {
        src: "https://res.cloudinary.com/hashfort/image/upload/v1683010927/pagecontent/ht0epy9iasqd66a3vn6p.png",
        alt: "CodegoPay Business screen",
        caption: "Business banking dashboard",
      },
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=code.gopay.business",
      appStore: "https://apps.apple.com/ie/app/codegopay-business/id6478826879",
      website: "https://business.codegopay.com/",
    },
  },
  {
    id: "p3",
    slug: "fibervpn",
    shortTitle: "FiberVPN",
    title: "FiberVPN Subscription Utility",
    category: "Social / Utility Apps",
    status: "live",
    featured: true,
    priority: 3,
    summary:
      "VPN app with country selection, connection state, premium plan prompts, and payment-ready upgrade flow.",
    productContext:
      "FiberVPN provides secure network access across mobile devices. The app shows connection state, location switching, premium upsell, and subscription options.",
    businessProblem:
      "The app needed a stable, cross-platform VPN experience with clear connection states and a subscription flow that converted free users.",
    role: "Flutter Developer",
    timeframe: "2024",
    company: "Codego",
    teamContext: "Worked with the mobile team to integrate the VPN UI with platform tunnel extensions.",
    ownershipNote:
      "I built the Flutter UI, connection-state screens, and subscription flow. The native tunnel implementations were handled by platform specialists.",
    confidentialityNote: "Specific conversion and subscription numbers are confidential.",
    platforms: ["Android", "iOS"],
    responsibilities: [
      "Built the Flutter UI for country selection, connection state, and premium upsell.",
      "Integrated subscription and payment prompts.",
      "Connected UI state to native VPN events through method channels.",
      "Supported release builds and store listings.",
    ],
    challenges: [
      "Keeping Flutter UI in sync with native VPN connection state.",
      "Handling platform-specific subscription lifecycles.",
      "Presenting clear error states when the tunnel fails.",
    ],
    approach: [
      "Defined the full state machine for connection states before writing UI.",
      "Used platform channels to bridge native events.",
      "Built subscription flows with fallback states for store errors.",
    ],
    contributions: [
      "Implemented location selection and connection-state screens.",
      "Built premium upgrade and subscription prompt flows.",
      "Connected Flutter state to native VPN events.",
    ],
    technicalDecisions: [
      {
        title: "Stream-based connection state",
        explanation:
          "Exposed the native connection state as a Dart stream so the UI always reflected the latest VPN status.",
      },
    ],
    results: [
      {
        statement: "Published on Play Store and App Store.",
        evidence: "public",
        sourceUrl: "https://play.google.com/store/apps/details?id=com.codego.fibervpns",
      },
      {
        statement: "Implemented subscription-ready UI used in production.",
        evidence: "client-approved",
      },
    ],
    lessons: [
      "VPN apps require tight coordination between native extensions and Flutter UI.",
      "Subscription state needs careful handling around store restore and errors.",
    ],
    technologies: ["Flutter", "Dart", "Method Channels", "REST APIs"],
    integrations: ["WireGuard", "In-App Purchases", "Subscriptions"],
    coverImage: "/project-assets/vpn/1.jpg",
    gallery: [
      { src: "/project-assets/vpn/1.jpg", alt: "VPN App", caption: "App home" },
      { src: "/project-assets/vpn/2.jpg", alt: "VPN Selection", caption: "Server selection" }
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.codego.fibervpns",
      appStore: "https://apps.apple.com/ie/app/fibervpn/id6755590267",
      website: "https://fibervpn.io/",
    },
  },
  {
    id: "p4",
    slug: "studygenie-ai",
    shortTitle: "StudyGenie AI",
    title: "StudyGenie AI Learning Assistant",
    category: "AI & Smart Apps",
    status: "live",
    featured: false,
    priority: 12,
    summary:
      "AI learning assistant with chat support, flashcards, quizzes, and progress planning.",
    productContext:
      "StudyGenie AI helps students study more effectively with AI-generated summaries, flashcards, quizzes, and progress tracking.",
    businessProblem:
      "Students needed a mobile-first study tool that integrated AI assistance without overwhelming the user experience.",
    role: "Flutter Developer",
    timeframe: "2023",
    company: "AppDevs",
    teamContext: "Part of a small product team building the Flutter app and backend integrations.",
    ownershipNote:
      "I built the Flutter app, integrated the AI chat and content generation APIs, and supported release tasks.",
    confidentialityNote: "Usage metrics are confidential.",
    platforms: ["Android", "iOS"],
    responsibilities: [
      "Built the Flutter UI for chat, flashcards, quizzes, and progress dashboards.",
      "Integrated OpenAI-powered study assistance APIs.",
      "Implemented state management for chat history and generated content.",
      "Supported Firebase integration and app releases.",
    ],
    challenges: [
      "Managing streaming AI responses and error states in chat.",
      "Storing generated flashcards and quizzes locally.",
      "Keeping the UI responsive during long AI calls.",
    ],
    approach: [
      "Used a stream-based approach for chat responses.",
      "Cached generated study content locally for offline access.",
      "Tested with real prompts and edge cases.",
    ],
    contributions: [
      "Implemented chat UI and AI response streaming.",
      "Built flashcard and quiz generation flows.",
      "Added progress tracking dashboard.",
    ],
    technicalDecisions: [
      {
        title: "Local cache for generated content",
        explanation:
          "Caching generated flashcards and quizzes reduced API costs and improved repeat study sessions.",
      },
    ],
    results: [
      {
        statement: "Shipped AI chat, flashcards, and quiz features in production.",
        evidence: "client-approved",
      },
    ],
    lessons: [
      "AI features require careful loading and error states to feel reliable.",
      "Local caching can dramatically improve the perceived speed of AI-generated content.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "OpenAI API"],
    integrations: ["ChatGPT", "Cloud Firestore", "Push Notifications"],
    coverImage: "/project-assets/studygenie-ai/1.jpg",
    gallery: [
      { src: "/project-assets/studygenie-ai/1.jpg", alt: "AI Chat", caption: "AI Chat Assistant" },
      { src: "/project-assets/studygenie-ai/2.jpg", alt: "Flashcards", caption: "Study tools" },
      { src: "/project-assets/studygenie-ai/3.jpg", alt: "Dashboard", caption: "Progress dashboard" }
    ],
    links: {},
  },
  {
    id: "p5",
    slug: "nxfund",
    title: "NXFund",
    category: "FinTech & Payments",
    status: "private",
    featured: false,
    priority: 2,
    summary: "Fundraising platform with wallet, payment flows, donation actions, and campaign-first experience.",
    productContext: "Fundraising platform for donation workflows, wallet actions, and campaign management.",
    role: "Full Stack Flutter Developer",
    ownershipNote: "Built the Flutter frontend and supported Laravel backend integration.",
    platforms: ["Android", "iOS"],
    responsibilities: ["Implemented campaign and donation flows in Flutter.", "Integrated wallet and payment APIs.", "Supported responsive layouts for mobile and tablet."],
    challenges: ["Payment state handling across multiple gateways.", "Campaign progress and withdrawal flows."],
    approach: ["Defined payment state machine before UI implementation.", "Tested end-to-end donation flows."],
    contributions: ["Built campaign discovery and detail screens.", "Implemented donation checkout flow."],
    technicalDecisions: [
      { title: "BLoC for wallet state", explanation: "Wallet transactions involve multiple states that are easier to reason about with BLoC." },
    ],
    results: [{ statement: "Delivered fundraising and wallet flows for production use.", evidence: "client-approved" }],
    technologies: ["Flutter", "Laravel", "Wallet", "Payments"],
    coverImage: "/project-assets/nxfund/0.jpg",
    gallery: [
      { src: "/project-assets/nxfund/0.jpg", alt: "Campaign", caption: "Fundraising campaign" },
      { src: "/project-assets/nxfund/1.jpg", alt: "Donation", caption: "Donation flow" },
      { src: "/project-assets/nxfund/2.jpg", alt: "Wallet", caption: "Wallet dashboard" }
    ],
    links: {},
  },
  {
    id: "p6",
    slug: "nxmart",
    title: "NXMart",
    category: "E-commerce & Lifestyle",
    status: "private",
    featured: false,
    priority: 13,
    summary: "Full commerce app with product discovery, cart flow, checkout, and payment handling.",
    productContext: "E-commerce app with product catalog, cart, checkout, and order management.",
    role: "Full Stack Flutter Developer",
    ownershipNote: "Built the Flutter frontend and integrated Laravel backend services.",
    platforms: ["Android", "iOS"],
    responsibilities: ["Built catalog, cart, and checkout flows.", "Integrated payment and order APIs."],
    challenges: ["Cart state across app sessions.", "Multiple payment method UI states."],
    approach: ["Used local persistence for cart state.", "Designed checkout flows with clear step indicators."],
    contributions: ["Implemented product search and category navigation.", "Built cart and checkout screens."],
    technicalDecisions: [
      { title: "Local cart persistence", explanation: "Cart data survived app restarts and improved conversion." },
    ],
    results: [{ statement: "Delivered end-to-end commerce flows.", evidence: "client-approved" }],
    technologies: ["Flutter", "Laravel", "E-commerce", "Cart", "Payments"],
    coverImage: "/project-assets/nxmart/Promo 1.jpg",
    gallery: [
      { src: "/project-assets/nxmart/Promo 1.jpg", alt: "E-commerce App", caption: "App overview" },
      { src: "/project-assets/nxmart/Promo 2.jpg", alt: "Products", caption: "Product catalog" },
      { src: "/project-assets/nxmart/Promo 3.jpg", alt: "Cart", caption: "Shopping cart" }
    ],
    links: {},
  },
  {
    id: "p7",
    slug: "nexopay",
    title: "NexoPay",
    category: "FinTech & Payments",
    status: "private",
    featured: false,
    priority: 1,
    summary: "Wallet and crypto product with transfers, invoices, multi-currency support, and account dashboards.",
    productContext: "Fintech and crypto wallet product with transaction workflows and invoice actions.",
    role: "Full Stack Flutter Developer",
    ownershipNote: "Built the Flutter frontend and supported backend integration.",
    platforms: ["Android", "iOS"],
    responsibilities: ["Implemented wallet dashboard and transfer flows.", "Built invoice and multi-currency screens."],
    challenges: ["Multi-currency display and conversion states.", "Crypto transfer confirmation flows."],
    approach: ["Defined currency models before UI.", "Built confirmation steps for irreversible transfers."],
    contributions: ["Built wallet dashboard and transfer screens.", "Implemented invoice actions."],
    technicalDecisions: [
      { title: "Separate currency models", explanation: "Clear currency models reduced errors in transfer and display logic." },
    ],
    results: [{ statement: "Delivered wallet and crypto transfer flows.", evidence: "client-approved" }],
    technologies: ["Flutter", "Laravel", "Wallet", "Crypto", "Multi-currency"],
    coverImage: "/project-assets/nexopay/1.jpg",
    gallery: [
      { src: "/project-assets/nexopay/1.jpg", alt: "Dashboard", caption: "Wallet dashboard" },
      { src: "/project-assets/nexopay/2.jpg", alt: "Transfer", caption: "Transfer money" },
      { src: "/project-assets/nexopay/3.jpg", alt: "Activity", caption: "Recent activity" }
    ],
    links: {},
  },
  {
    id: "p8",
    slug: "runava",
    title: "Runava",
    category: "Social / Utility Apps",
    status: "private",
    featured: false,
    priority: 15,
    summary: "Running and fitness app for activity tracking, challenges, event discovery, and ticket booking.",
    productContext: "Fitness app with activity tracking, challenges, events, and race ticket booking.",
    role: "Flutter Developer",
    ownershipNote: "Built Flutter UI and integrated tracking and event features.",
    platforms: ["Android", "iOS"],
    responsibilities: ["Built activity tracking and challenge feeds.", "Integrated event listing and ticket booking flows."],
    challenges: ["GPS tracking accuracy and battery usage.", "Event booking state management."],
    approach: ["Used platform location services through Flutter plugins.", "Tested booking flows end-to-end."],
    contributions: ["Implemented challenge feed and activity metrics.", "Built event listing and ticket booking screens."],
    technicalDecisions: [
      { title: "Stream-based location updates", explanation: "Streamed GPS updates to keep activity metrics responsive." },
    ],
    results: [{ statement: "Delivered activity tracking and event booking flows.", evidence: "client-approved" }],
    technologies: ["Flutter", "GPS Tracking", "Social Features", "Events"],
    coverImage: "/project-assets/runava/1.jpg",
    gallery: [
      { src: "/project-assets/runava/1.jpg", alt: "Activity", caption: "Activity tracking" },
      { src: "/project-assets/runava/2.jpg", alt: "Events", caption: "Event booking" },
      { src: "/project-assets/runava/3.jpg", alt: "Challenge", caption: "Challenges" }
    ],
    links: {},
  },
  {
    id: "p9",
    slug: "nexgro",
    title: "NexGro",
    category: "FinTech & Payments",
    status: "private",
    featured: false,
    priority: 3,
    summary: "Agri-investment product with farm listings, expected returns, tenure filters, and project purchase flow.",
    productContext: "Agricultural investment platform for farm project listings and purchases.",
    role: "Flutter Developer",
    ownershipNote: "Built Flutter UI and supported investment flow integration.",
    platforms: ["Android", "iOS"],
    responsibilities: ["Implemented farm listing and project detail screens.", "Built investment purchase flow."],
    challenges: ["Investment return calculations and display.", "Booking flow with limited project units."],
    approach: ["Defined clear investment models.", "Built booking flow with unit availability checks."],
    contributions: ["Built farm listing cards with filters.", "Implemented project detail and booking screens."],
    technicalDecisions: [
      { title: "Computed return display", explanation: "Displayed return ranges based on server data to avoid client-side calculation errors." },
    ],
    results: [{ statement: "Delivered agri-investment listing and purchase flows.", evidence: "client-approved" }],
    technologies: ["Flutter", "Agri FinTech", "Investment Tracking", "Payments"],
    coverImage: "/project-assets/nexgro/1.jpg",
    gallery: [
      { src: "/project-assets/nexgro/1.jpg", alt: "Farms", caption: "Farm listings" },
      { src: "/project-assets/nexgro/2.jpg", alt: "Detail", caption: "Project details" }
    ],
    links: {},
  },
  {
    id: "p10",
    slug: "ummah-charity",
    title: "Ummah Charity",
    category: "Social / Utility Apps",
    status: "private",
    featured: false,
    priority: 4,
    summary: "Faith and community app combining Quran reading, translated surahs, social feed, and charity interactions.",
    productContext: "Community app with Quran reading, translations, bookmarks, and social feed.",
    role: "Full Stack Flutter Developer",
    ownershipNote: "Built Flutter frontend and supported Laravel backend integration.",
    platforms: ["Android", "iOS"],
    responsibilities: ["Built Quran reading and community feed screens.", "Implemented bookmarks and playback controls."],
    challenges: ["Audio playback state management.", "Community feed moderation states."],
    approach: ["Used audio service plugins for background playback.", "Built feed with optimistic updates."],
    contributions: ["Implemented surah browsing and reading screens.", "Built community feed and engagement features."],
    technicalDecisions: [
      { title: "Audio service for playback", explanation: "Used a background audio service so users could listen while browsing." },
    ],
    results: [{ statement: "Delivered Quran reading and community feed features.", evidence: "client-approved" }],
    technologies: ["Flutter", "Laravel", "Donations", "Community"],
    coverImage: "/project-assets/ummah-charity/2.png",
    gallery: [
      { src: "/project-assets/ummah-charity/2.png", alt: "Quran", caption: "Quran reading" },
      { src: "/project-assets/ummah-charity/1.jpg", alt: "Home", caption: "Community home" },
      { src: "/project-assets/ummah-charity/3.jpg", alt: "Feed", caption: "Community feed" }
    ],
    links: {},
  },
  {
    id: "p11",
    slug: "kream-suger",
    title: "Kream & Suger",
    category: "Social / Utility Apps",
    status: "private",
    featured: false,
    priority: 16,
    summary: "Realtime chat-style social app with authentication and user interaction flows.",
    productContext: "Realtime messaging app with user profiles and social interactions.",
    role: "Flutter Developer",
    ownershipNote: "Built Flutter UI and integrated Firebase realtime services.",
    platforms: ["Android", "iOS"],
    responsibilities: ["Built chat UI and user profile screens.", "Integrated Firebase authentication and realtime updates."],
    challenges: ["Realtime message ordering and delivery status.", "Authentication state persistence."],
    approach: ["Used Firebase realtime streams for messages.", "Managed auth state with Firebase Auth."],
    contributions: ["Implemented chat list and conversation screens.", "Built authentication flows."],
    technicalDecisions: [
      { title: "Firebase streams for messages", explanation: "Realtime streams gave the app instant message updates without polling." },
    ],
    results: [{ statement: "Delivered realtime chat and authentication flows.", evidence: "client-approved" }],
    technologies: ["Flutter", "Firebase", "Realtime Chat", "Authentication"],
    coverImage: "/project-assets/kream-suger/1.jpg",
    gallery: [
      { src: "/project-assets/kream-suger/1.jpg", alt: "Chat", caption: "Chat list" },
      { src: "/project-assets/kream-suger/2.jpg", alt: "Conversation", caption: "Conversation" },
      { src: "/project-assets/kream-suger/3.jpg", alt: "Profile", caption: "User profile" }
    ],
    links: {},
  },
  {
    id: "p12",
    slug: "nexflix",
    title: "Nexflix",
    category: "E-commerce & Lifestyle",
    status: "concept",
    featured: false,
    priority: 17,
    summary: "Entertainment app concept with poster-driven browsing, movie detail screens, and media discovery layouts.",
    productContext: "Media discovery concept app with trending collections and movie detail screens.",
    role: "Flutter Developer",
    ownershipNote: "Built the UI concept as a portfolio exploration.",
    platforms: ["Android", "iOS"],
    responsibilities: ["Built media browsing UI and detail screens.", "Implemented collections and account tabs."],
    challenges: ["Complex grid layouts for posters.", "Smooth hero transitions."],
    approach: ["Used Flutter grid widgets for responsive layouts.", "Kept animations lightweight."],
    contributions: ["Implemented trending media feed and movie detail screens."],
    technicalDecisions: [
      { title: "Grid layout with aspect ratios", explanation: "Fixed poster aspect ratios kept the grid visually consistent." },
    ],
    results: [{ statement: "Completed UI concept for media discovery.", evidence: "public" }],
    technologies: ["Flutter", "Dart", "Video UI", "Media Discovery"],
    coverImage: "/project-assets/nexflix/2015.jpg",
    gallery: [
      { src: "/project-assets/nexflix/2015.jpg", alt: "Browse", caption: "Movie browsing" },
      { src: "/project-assets/nexflix/2016.jpg", alt: "Detail", caption: "Movie details" },
      { src: "/project-assets/nexflix/2017.jpg", alt: "Player", caption: "Video player" }
    ],
    links: {},
  },
];

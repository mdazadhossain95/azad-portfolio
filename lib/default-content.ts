import { Article, Project, Review, Settings, TravelPost } from "@/lib/types";

export const defaultProjects: Project[] = [
  {
    id: "p1",
    title: "Fintech Wallet App",
    slug: "fintech-wallet-app",
    description:
      "Secure Flutter wallet with KYC onboarding, transaction history, push alerts, and smart analytics.",
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop"],
    techStack: ["Flutter", "Firebase", "Node.js", "Stripe"],
    links: {
      playStore: "https://play.google.com/store",
      appStore: "https://apps.apple.com",
    },
    featured: true,
  },
  {
    id: "p2",
    title: "Healthcare Appointment App",
    slug: "healthcare-appointment-app",
    description:
      "Telehealth app with real-time booking, reminders, chat, and video consultation.",
    images: ["https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"],
    techStack: ["Flutter", "Firebase", "Agora", "Firestore"],
    links: {
      playStore: "https://play.google.com/store",
    },
    featured: true,
  },
  {
    id: "p3",
    title: "Logistics Driver Tracker",
    slug: "logistics-driver-tracker",
    description:
      "Fleet visibility app with live map tracking, route updates, and offline sync.",
    images: ["https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"],
    techStack: ["Flutter", "Supabase", "Maps API"],
    links: {
      live: "https://github.com/mdazadhossain95",
    },
    featured: false,
  },
];

export const defaultArticles: Article[] = [
  {
    id: "a1",
    title: "Firebase vs Supabase for Flutter Apps",
    slug: "firebase-vs-supabase-for-flutter-apps",
    preview: "A practical, SEO-friendly guide comparing two top backends for Flutter in 2025 — ecosystem depth vs SQL-first control.",
    content:
      "Choosing backend depends on team speed, realtime needs, and pricing profile. Firebase wins on ecosystem and realtime out-of-the-box. Supabase wins on SQL-first control, open-source flexibility, and no vendor lock-in. For most Flutter startups shipping fast, Firebase still edges it.",
    publishedAt: "2025-10-20",
    mediumUrl: "https://medium.com/@mdazadhossain95/firebase-vs-supabase-for-flutter-apps-which-one-should-you-choose-a-practical-seo-friendly-guide",
  },
  {
    id: "a2",
    title: "Building Scalable Apps with Flutter: My Process from Idea to Deployment",
    slug: "building-scalable-apps-with-flutter",
    preview: "A behind-the-scenes playbook for founders — based on real projects shipped end to end.",
    content:
      "Scalable Flutter apps start with architecture decisions: BLoC vs Riverpod, layered feature folders, CI/CD on day one. I walk through my real process — from wireframe review to Play Store release — based on 200+ apps shipped.",
    publishedAt: "2025-10-16",
    mediumUrl: "https://medium.com/@mdazadhossain95/building-scalable-apps-with-flutter-my-process-from-idea-to-deployment",
  },
  {
    id: "a3",
    title: "6 Flutter Performance Hacks Every Developer Should Know",
    slug: "flutter-performance-hacks",
    preview: "Flutter makes beautiful apps fast, but performance is often overlooked. Users don't tolerate lag.",
    content:
      "Profile first. Then: reduce widget rebuilds with const constructors, lazy-load heavy lists with ListView.builder, optimize image decode sizes, defer non-critical init, cache aggressively with flutter_cache_manager, and avoid setState on large subtrees.",
    publishedAt: "2025-08-24",
    mediumUrl: "https://medium.com/@mdazadhossain95/6-flutter-performance-hacks-every-developer-should-know",
  },
  {
    id: "a4",
    title: "Flutter + WireGuard VPN: One Codebase, Android and iOS",
    slug: "flutter-wireguard-vpn",
    preview: "A complete guide to start, stop, and monitor a WireGuard tunnel from Flutter across both platforms.",
    content:
      "Android uses wg-quick under the hood via a Kotlin method channel. iOS requires a Packet Tunnel Provider extension — a separate target in Xcode that handles tunnel lifecycle. One Dart API, two platform implementations.",
    publishedAt: "2025-08-23",
    mediumUrl: "https://medium.com/@mdazadhossain95/flutter-wireguard-vpn-one-codebase-android-and-ios",
  },
  {
    id: "a5",
    title: "Build and Release an Android App (Flutter)",
    slug: "build-and-release-android-flutter",
    preview: "The definitive guide to signing, building, and releasing your Flutter app to the Play Store.",
    content:
      "From debug to production: configure keystore, set up build.gradle signing configs, run flutter build appbundle --release, upload to Play Console. Include obfuscation flags and deobfuscation file upload for crash reporting.",
    publishedAt: "2023-10-07",
    mediumUrl: "https://medium.com/@mdazadhossain95/build-and-release-an-android-app-flutter",
  },
];

export const defaultReviews: Review[] = [
  {
    id: "r1",
    name: "Product Manager",
    role: "Fintech Client",
    text: "Azad delivered stable release fast, with excellent communication and clean architecture.",
    rating: 5,
  },
  {
    id: "r2",
    name: "Startup Founder",
    role: "Healthtech",
    text: "Strong Flutter expertise, proactive problem-solving, and reliable support post launch.",
    rating: 5,
  },
];

export const defaultTravels: TravelPost[] = [
  {
    id: "t1",
    title: "Remote Work Notes from Cox's Bazar",
    slug: "remote-work-notes-coxs-bazar",
    summary: "Balancing shipping sprints with ocean mornings.",
    content:
      "Travel improves creativity. I batch deep work in mornings, leave afternoons for async reviews and architecture planning.",
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"],
    location: "Cox's Bazar, Bangladesh",
    publishedAt: "2026-03-01",
  },
];

export const defaultSettings: Settings = {
  id: "main",
  email: "mdazadhossain95@gmail.com",
  linkedin: "https://www.linkedin.com/in/azadhossain-tutul/",
  github: "https://github.com/mdazadhossain95",
  upwork: "https://www.upwork.com/freelancers/~01082f851b8bed7bd1",
  x: "https://twitter.com/mdazadhossain95",
  stackoverflow: "https://stackoverflow.com/users/14659281/azad-hossain",
  instagram: "https://www.instagram.com/azad.officialll",
  medium: "https://medium.com/@mdazadhossain95",
};

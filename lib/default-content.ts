import { portfolioProjects } from "@/lib/projects-catalog";
import { Article, Review, Settings, TravelPost } from "@/lib/types";

export const defaultProjects = portfolioProjects;

export const defaultArticles: Article[] = [
  {
    id: "a1",
    title: "Firebase vs Supabase for Flutter Apps",
    slug: "firebase-vs-supabase-for-flutter-apps",
    preview: "A practical, SEO-friendly guide comparing two top backends for Flutter in 2025 — ecosystem depth vs SQL-first control.",
    content:
      "Choosing backend depends on team speed, realtime needs, and pricing profile. Firebase wins on ecosystem and realtime out-of-the-box. Supabase wins on SQL-first control, open-source flexibility, and no vendor lock-in. For most Flutter startups shipping fast, Firebase still edges it.",
    publishedAt: "2025-10-20",
    mediumUrl: "https://medium.com/@mdazadhossain95/firebase-vs-supabase-for-flutter-apps-which-one-should-you-choose-0cf9dd897123",
  },
  {
    id: "a2",
    title: "Building Scalable Apps with Flutter: My Process from Idea to Deployment",
    slug: "building-scalable-apps-with-flutter",
    preview: "A behind-the-scenes playbook for founders — based on real projects shipped end to end.",
    content:
      "Scalable Flutter apps start with architecture decisions: BLoC vs Riverpod, layered feature folders, CI/CD on day one. I walk through my real process — from wireframe review to Play Store release — based on 200+ apps shipped.",
    publishedAt: "2025-10-16",
    mediumUrl: "https://medium.com/@mdazadhossain95/building-scalable-apps-with-flutter-my-process-from-idea-to-deployment-ef7cbb31a50e",
  },
  {
    id: "a3",
    title: "6 Flutter Performance Hacks Every Developer Should Know",
    slug: "flutter-performance-hacks",
    preview: "Flutter makes beautiful apps fast, but performance is often overlooked. Users don't tolerate lag.",
    content:
      "Profile first. Then: reduce widget rebuilds with const constructors, lazy-load heavy lists with ListView.builder, optimize image decode sizes, defer non-critical init, cache aggressively with flutter_cache_manager, and avoid setState on large subtrees.",
    publishedAt: "2025-08-24",
    mediumUrl: "https://medium.com/@mdazadhossain95/6-flutter-performance-hacks-every-developer-should-know-cd0f8d211bce",
  },
  {
    id: "a4",
    title: "Flutter + WireGuard VPN: One Codebase, Android and iOS",
    slug: "flutter-wireguard-vpn",
    preview: "A complete guide to start, stop, and monitor a WireGuard tunnel from Flutter across both platforms.",
    content:
      "Android uses wg-quick under the hood via a Kotlin method channel. iOS requires a Packet Tunnel Provider extension — a separate target in Xcode that handles tunnel lifecycle. One Dart API, two platform implementations.",
    publishedAt: "2025-08-23",
    mediumUrl: "https://medium.com/@mdazadhossain95/flutter-wireguard-vpn-one-codebase-android-and-ios-dedb9d4286ec",
  },
  {
    id: "a5",
    title: "Build and Release an Android App (Flutter)",
    slug: "build-and-release-android-flutter",
    preview: "The definitive guide to signing, building, and releasing your Flutter app to the Play Store.",
    content:
      "From debug to production: configure keystore, set up build.gradle signing configs, run flutter build appbundle --release, upload to Play Console. Include obfuscation flags and deobfuscation file upload for crash reporting.",
    publishedAt: "2023-10-07",
    mediumUrl: "https://medium.com/@mdazadhossain95/build-and-release-an-android-app-flutter-27a97974315c",
  },
];

export const defaultReviews: Review[] = [
  {
    id: "r1",
    name: "Verified Upwork Client",
    role: "Flutter SMS Forwarder App",
    text: "I had a fantastic experience with this developer. They delivered a high-quality Flutter app that perfectly met all requirements, including a successful remote setup and live testing on my device. Their expertise and communication were excellent, and I highly recommend Azad.",
    rating: 5,
    company: "Upwork",
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

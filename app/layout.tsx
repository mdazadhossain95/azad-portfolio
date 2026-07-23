import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import { CursorGlow } from "@/components/cursor-glow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialRails } from "@/components/social-rails";
import { SplashScreen } from "@/components/splash-screen";
import { profile } from "@/content/profile";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const mono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const SITE_URL = profile.links.portfolio;
const PREVIEW_IMAGE = `${SITE_URL}/preview.png`;
const TITLE = profile.meta.title;
const DESCRIPTION = profile.meta.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${profile.shortName}`,
  },
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: profile.name,
    type: "website",
    images: [
      {
        url: PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [PREVIEW_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    jobTitle: profile.title,
    description: DESCRIPTION,
    sameAs: [
      profile.links.linkedin,
      profile.links.github,
      profile.links.upwork,
      profile.links.medium,
    ].filter(Boolean),
    knowsAbout: [
      "Flutter",
      "Dart",
      "Mobile App Development",
      "FinTech",
      "AI Integration",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${sora.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SplashScreen />
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--bg-deep)]"
        >
          Skip to content
        </a>
        <CursorGlow />
        <SocialRails />
        <SiteHeader />
        <main id="main-content" className="relative z-10 flex-1 pt-20">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

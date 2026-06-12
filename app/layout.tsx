import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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

const SITE_URL = "https://azadhossain.dev";
const PREVIEW_IMAGE = `${SITE_URL}/preview.png`;
const TITLE = "Md Azad Hossain | Flutter & AI Mobile App Developer";
const DESCRIPTION =
  "Senior Flutter Developer with 5+ years experience building fintech, AI-powered, and scalable mobile apps. 200+ apps delivered with 100% client satisfaction.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | Md Azad Hossain`,
  },
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Md Azad Hossain",
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
    name: "Md Azad Hossain Tutul",
    url: SITE_URL,
    jobTitle: "Senior Flutter Developer",
    description: DESCRIPTION,
    sameAs: [
      "https://www.linkedin.com/in/azadhossain-tutul/",
      "https://github.com/mdazadhossain95",
      "https://www.upwork.com/freelancers/~01082f851b8bed7bd1",
      "https://medium.com/@mdazadhossain95",
    ],
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
      data-theme="light"
      className={`${sora.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <JsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

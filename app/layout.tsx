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

export const metadata: Metadata = {
  metadataBase: new URL("https://azad-portfolio.vercel.app"),
  title: {
    default: "Azad Portfolio | Flutter Developer",
    template: "%s | Azad Portfolio",
  },
  description:
    "Modern Flutter portfolio by Md Azad Hossain Tutul. Showcasing mobile apps, articles, and delivery-focused case studies.",
  openGraph: {
    title: "Azad Portfolio | Flutter Developer",
    description:
      "Flutter developer portfolio with app projects, writings, travel notes, and client-ready contact channels.",
    type: "website",
  },
};

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
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

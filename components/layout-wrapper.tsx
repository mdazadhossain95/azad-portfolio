"use client";

import { usePathname } from "next/navigation";
import { CursorGlow } from "@/components/cursor-glow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialRails } from "@/components/social-rails";
import { SplashScreen } from "@/components/splash-screen";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // We disable global V4 components on the /v1 route
  const isV1 = pathname?.startsWith("/v1");

  if (isV1) {
    return <main className="relative z-10 flex-1">{children}</main>;
  }

  return (
    <>
      <SplashScreen />
      <CursorGlow />
      <SocialRails />
      <SiteHeader />
      <main id="main-content" className="relative z-10 flex-1 pt-20">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

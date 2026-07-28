"use client";

import { usePathname } from "next/navigation";
import { CursorGlow } from "@/components/cursor-glow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialRails } from "@/components/social-rails";
import { SplashScreen } from "@/components/splash-screen";
export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Versions with their own nested layout/header/footer disable the global V4 chrome
  const hasOwnLayout =
    pathname?.startsWith("/v1") || pathname?.startsWith("/v2") || pathname?.startsWith("/v3");
  // Boot-sequence splash is a V4 homepage intro only, not a global gate
  const isV4Home = pathname === "/" || pathname === "/v4";

  if (hasOwnLayout) {
    // The version-specific nested layout (app/v1|v2|v3/layout.tsx) supplies its
    // own <main> landmark, header, and footer - don't add a second <main> here.
    return <>{children}</>;
  }

  return (
    <>
      {isV4Home && <SplashScreen />}
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

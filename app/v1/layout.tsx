import { SiteHeader } from "@/components/v1/site-header-original";
import { SiteFooter } from "@/components/v1/site-footer-original";
import { DisableRootScroll } from "@/components/disable-root-scroll";

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v1-theme flex h-[100dvh] flex-col overflow-y-auto overflow-x-hidden v1-scroll-container relative">
      <DisableRootScroll />
      <SiteHeader />
      <main id="main-content" className="shrink-0 pb-20">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

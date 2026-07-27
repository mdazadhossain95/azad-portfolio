import { SiteHeader } from "@/components/v2/site-header";
import { SiteFooter } from "@/components/v2/site-footer";
import { V2UniverseShell } from "@/components/portfolio/v2/v2-universe-shell";
import { V2Rail } from "@/components/portfolio/v2/v2-rail";
import { V2ScrollToTop } from "@/components/portfolio/v2/v2-scroll-to-top";

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v2-theme relative flex min-h-screen flex-col overflow-x-clip">
      <link
        rel="preload"
        as="image"
        href="/textures/planets/earth-day-poster.webp"
        fetchPriority="high"
      />
      <V2UniverseShell />
      <SiteHeader />
      <V2Rail />
      <main id="main-content" className="relative flex-1">{children}</main>
      <SiteFooter />
      <V2ScrollToTop />
    </div>
  );
}

import { Caveat } from "next/font/google";
import { SiteHeader } from "@/components/v3/site-header";
import { SiteFooter } from "@/components/v3/site-footer";
import { V3PaletteSwitcher } from "@/components/portfolio/v3/v3-palette-switcher";
import { V3RootStyle } from "@/components/portfolio/v3/v3-root-style";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`v3-theme relative flex h-[100dvh] flex-col overflow-y-auto overflow-x-hidden v3-scroll-container ${caveat.variable}`}>
      <V3RootStyle />
      <SiteHeader />
      <main id="main-content" className="shrink-0 overflow-x-hidden pb-28">{children}</main>
      <V3PaletteSwitcher />
      <SiteFooter />
    </div>
  );
}

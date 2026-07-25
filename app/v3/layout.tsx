import { Caveat } from "next/font/google";
import { SiteHeader } from "@/components/v3/site-header";
import { SiteFooter } from "@/components/v3/site-footer";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`v3-theme relative flex min-h-screen flex-col ${caveat.variable}`}>
      <SiteHeader />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <SiteFooter />
    </div>
  );
}

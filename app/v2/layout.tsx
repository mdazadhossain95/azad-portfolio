import { SiteHeader } from "@/components/v2/site-header";
import { SiteFooter } from "@/components/v2/site-footer";

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v2-theme relative flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

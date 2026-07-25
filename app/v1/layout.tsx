import { SiteHeader } from "@/components/v1/site-header-original";
import { SiteFooter } from "@/components/v1/site-footer-original";

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v1-theme min-h-screen flex flex-col relative">
      <SiteHeader />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

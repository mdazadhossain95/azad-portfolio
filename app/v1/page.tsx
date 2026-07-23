import { VersionSwitcher } from "@/components/portfolio/shared/version-switcher";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "Corporate FinTech Engineer",
  "Senior Flutter Engineer specializing in enterprise FinTech applications.",
  "/v1",
  true // noindex
);

export default function V1Page() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text)]">V1: Corporate FinTech</h1>
        <p className="text-lg text-[var(--text-muted)] max-w-lg mx-auto">
          A minimalist, highly trusted design optimized for enterprise banks and financial institutions.
        </p>
        <div className="inline-block rounded-full bg-[var(--surface-raised)] px-4 py-1 text-sm font-medium text-[var(--accent)] mt-8">
          Status: Shell / Under Construction
        </div>
      </div>
      <VersionSwitcher current="v1" />
    </main>
  );
}

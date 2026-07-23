import { VersionSwitcher } from "@/components/portfolio/shared/version-switcher";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "DevTools & Open Source",
  "CLI tools, SDKs, and open source development.",
  "/v3",
  true // noindex
);

export default function V3Page() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text)]">V3: DevTools Maker</h1>
        <p className="text-lg text-[var(--text-muted)] max-w-lg mx-auto">
          A terminal-inspired, highly technical layout designed to appeal to open-source maintainers and developer tool companies.
        </p>
        <div className="inline-block rounded-full bg-[var(--surface-raised)] px-4 py-1 text-sm font-medium text-[var(--accent)] mt-8">
          Status: Shell / Under Construction
        </div>
      </div>
      <VersionSwitcher current="v3" />
    </main>
  );
}

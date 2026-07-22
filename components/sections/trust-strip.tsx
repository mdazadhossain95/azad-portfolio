import { profile } from "@/content/profile";

const items = [
  { label: `${profile.proof.experienceYears} Years in Flutter` },
  { label: `${profile.proof.upworkJss} Upwork Job Success` },
  { label: "Production FinTech Experience" },
  { label: "Android & iOS Store Releases" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)]/50">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center px-5 py-5 text-center md:py-6"
          >
            <p className="text-sm font-medium text-[var(--text-secondary)]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

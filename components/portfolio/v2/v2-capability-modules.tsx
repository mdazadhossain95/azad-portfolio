import { SectionTitle } from "@/components/section-title";
import { skills } from "@/content/skills";

const RELEVANT_CATEGORIES = [
  "Architecture & State",
  "FinTech & Web3",
  "Backend & Databases",
  "AI & Integrations",
  "Delivery & Quality",
];

export function V2CapabilityModules() {
  const modules = skills.filter((group) => RELEVANT_CATEGORIES.includes(group.category));

  return (
    <section id="modules" className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="Capability modules"
        title="What each module covers"
        description="The building blocks behind every production system below: architecture, backend, delivery, and — where relevant — AI."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((group, index) => {
          const isAi = group.category === "AI & Integrations";
          return (
            <div key={group.category} className="surface-card p-5">
              <p
                className="font-mono text-xs uppercase tracking-[0.12em]"
                style={{ color: isAi ? "var(--v2-ai)" : "var(--v2-system)" }}
              >
                Module {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-base font-semibold text-[var(--text)]">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="soft-chip text-[var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { skills } from "@/content/skills";
import { Smartphone, Layers, Globe, Server, Wallet, Sparkles, Rocket } from "lucide-react";

const getIconForCategory = (category: string) => {
  switch (category) {
    case "Mobile & Hybrid Apps": return <Smartphone className="h-6 w-6" />;
    case "Architecture & State": return <Layers className="h-6 w-6" />;
    case "Full-Stack & Web": return <Globe className="h-6 w-6" />;
    case "Backend & Databases": return <Server className="h-6 w-6" />;
    case "FinTech & Web3": return <Wallet className="h-6 w-6" />;
    case "AI & Integrations": return <Sparkles className="h-6 w-6" />;
    case "Delivery & Quality": return <Rocket className="h-6 w-6" />;
    default: return <Layers className="h-6 w-6" />;
  }
};

export function SkillsSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/5 blur-[120px]" />

      <div className="relative z-10 mb-16 md:mb-24 md:flex md:items-end md:justify-between">
        <div className="max-w-2xl space-y-5">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Technical Strengths
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl lg:text-6xl">
            Capabilities. <br/> Not just logos.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            I focus on foundational engineering principles and deep domain expertise rather than chasing the latest syntax. Here is the technical foundation I bring to every product.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {skills.map((group, index) => (
          <div 
            key={group.category} 
            className={`group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-raised)] hover:shadow-2xl hover:shadow-[var(--accent)]/10
              ${index === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}
            `}
          >
            {/* Hover Accent Glow inside card */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)]/10 opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />
            
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--bg-deep)] text-[var(--text-muted)] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/10 group-hover:text-[var(--accent)]">
              {getIconForCategory(group.category)}
            </div>
            
            <h3 className="mb-4 text-xl font-bold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
              {group.category}
            </h3>
            
            <p className="font-mono text-[13px] leading-relaxed text-[var(--text-secondary)] transition-colors duration-500 group-hover:text-[var(--text)]">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

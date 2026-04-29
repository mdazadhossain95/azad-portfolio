import { LiveTravels } from "@/components/live-travels";
import { SectionTitle } from "@/components/section-title";

export const metadata = {
  title: "Travel | Azad Portfolio",
  description: "Personal travel stories and remote work notes.",
};

export default function TravelPage() {
  return (
    <section
      className="mx-auto w-full max-w-6xl space-y-10 rounded-2xl border px-5 py-20 md:px-8 md:py-24"
      style={{
        borderColor: "color-mix(in srgb, var(--line) 92%, var(--accent) 8%)",
        backgroundColor: "color-mix(in srgb, var(--card) 74%, var(--bg))",
      }}
    >
      <SectionTitle
        eyebrow="Travel"
        title="Places, people, and remote work stories"
        description="Light personal section with travel snapshots and short reflections."
      />
      <LiveTravels />
    </section>
  );
}

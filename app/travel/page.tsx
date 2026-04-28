import { LiveTravels } from "@/components/live-travels";
import { SectionTitle } from "@/components/section-title";

export const metadata = {
  title: "Travel | Azad Portfolio",
  description: "Personal travel stories and remote work notes.",
};

export default function TravelPage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Travel"
        title="Places, people, and remote work stories"
        description="Light personal section with travel snapshots and short reflections."
      />
      <LiveTravels />
    </section>
  );
}

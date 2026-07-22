import { TravelCard } from "@/components/travel-card";
import { defaultTravels } from "@/lib/default-content";

export function LiveTravels() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {defaultTravels.map((post) => (
        <TravelCard key={post.id} post={post} />
      ))}
    </div>
  );
}

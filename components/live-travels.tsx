"use client";

import { useEffect, useState } from "react";
import { TravelCard } from "@/components/travel-card";
import { defaultTravels } from "@/lib/default-content";
import { watchCollection } from "@/lib/firestore-client";
import { TravelPost } from "@/lib/types";

export function LiveTravels() {
  const [posts, setPosts] = useState<TravelPost[]>(defaultTravels);

  useEffect(() => {
    const unsubscribe = watchCollection<TravelPost>("travels", (items) => {
      if (items.length > 0) {
        setPosts(items);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <TravelCard key={post.id} post={post} />
      ))}
    </div>
  );
}

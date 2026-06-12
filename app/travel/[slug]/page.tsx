import type { Metadata } from "next";
import { TravelDetail } from "@/components/travel-detail";
import { defaultTravels } from "@/lib/default-content";

type TravelDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: TravelDetailPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = defaultTravels.find((t) => t.slug === slug);
  return {
    title: `${post?.title ?? slug.replaceAll("-", " ")} | Travel | Azad Portfolio`,
  };
}

export default async function TravelDetailPage(props: TravelDetailPageProps) {
  const { slug } = await props.params;
  return <TravelDetail slug={slug} />;
}

import type { Metadata } from "next";
import { TravelDetail } from "@/components/travel-detail";

type TravelDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: TravelDetailPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  return {
    title: `${slug.replaceAll("-", " ")} | Travel | Azad Portfolio`,
  };
}

export default async function TravelDetailPage(props: TravelDetailPageProps) {
  const { slug } = await props.params;
  return <TravelDetail slug={slug} />;
}

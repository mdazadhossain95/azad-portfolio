import { Metadata } from "next";
import { profile } from "@/content/profile";

export function getSharedMetadata(
  title: string,
  description: string,
  path: string,
  noIndex = false
): Metadata {
  return {
    title: `${title} | ${profile.name}`,
    description,
    alternates: {
      canonical: `https://azadhossain.dev${path}`,
    },
    robots: {
      index: !noIndex,
      follow: true,
    },
  };
}

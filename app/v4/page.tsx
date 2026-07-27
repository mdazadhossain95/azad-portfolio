import type { Metadata } from "next";
import { V4Home } from "@/components/portfolio/v4/v4-home";
import { VersionSwitcher } from "@/components/portfolio/shared/version-switcher";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata: Metadata = {
  ...getSharedMetadata(
    "Mobile Product Engineer",
    "Senior Flutter Engineer specializing in native-feeling applications.",
    "/v4"
  ),
  // /v4 renders the same content as the canonical "/" - point search engines there
  // instead of noindexing this route, since it should still resolve for direct visitors.
  alternates: {
    canonical: "https://azadhossain.dev/",
  },
};

export default function V4Page() {
  return (
    <>
      <V4Home />
      <VersionSwitcher current="v4" />
    </>
  );
}

import { V4Home } from "@/components/portfolio/v4/v4-home";
import { VersionSwitcher } from "@/components/portfolio/shared/version-switcher";
import { getSharedMetadata } from "@/lib/portfolio/metadata";

export const metadata = getSharedMetadata(
  "Mobile Product Engineer",
  "Senior Flutter Engineer specializing in native-feeling applications.",
  "/v4"
);

export default function V4Page() {
  return (
    <>
      <V4Home />
      <VersionSwitcher current="v4" />
    </>
  );
}

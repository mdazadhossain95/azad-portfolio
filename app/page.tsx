import { V4Home } from "@/components/portfolio/v4/v4-home";
import { VersionSwitcher } from "@/components/portfolio/shared/version-switcher";

export default function HomePage() {
  return (
    <>
      <V4Home />
      <VersionSwitcher current="v4" />
    </>
  );
}

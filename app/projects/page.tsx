import { LiveProjects } from "@/components/live-projects";
import { SectionTitle } from "@/components/section-title";

export const metadata = {
  title: "Projects | Azad Portfolio",
  description: "Flutter mobile app case studies by Md Azad Hossain Tutul.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Projects"
        title="Selected Android and iOS app builds"
        description="Product-focused Flutter projects with screenshots, outcomes, and platform links."
      />
      <LiveProjects />
    </section>
  );
}

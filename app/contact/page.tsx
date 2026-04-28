import { ContactBlock } from "@/components/contact-block";
import { SectionTitle } from "@/components/section-title";

export const metadata = {
  title: "Contact | Azad Portfolio",
  description: "Contact Md Azad Hossain Tutul for Flutter app projects.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-4xl space-y-8 px-5 py-16 md:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="Need Flutter app partner for production delivery"
        description="Share product brief, timeline, and platform goals. I will get back with scope and execution path."
      />
      <ContactBlock />
    </section>
  );
}

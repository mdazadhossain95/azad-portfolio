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
        eyebrow="Get in touch"
        title="Ready to build something great?"
        description="Whether it's a new app from scratch or scaling an existing product — let's talk. I'm available for freelance projects, long-term contracts, and consulting."
      />
      <ContactBlock />
    </section>
  );
}

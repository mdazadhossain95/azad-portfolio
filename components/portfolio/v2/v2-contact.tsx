import { ContactBlock } from "@/components/contact-block";
import { SectionTitle } from "@/components/section-title";

export function V2Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl space-y-8 px-5 py-16 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="Contact"
        title="Scope a FinTech or payments build"
        description="Email or Upwork — both reach the same inbox, checked within 24 hours."
      />
      <ContactBlock />
    </section>
  );
}

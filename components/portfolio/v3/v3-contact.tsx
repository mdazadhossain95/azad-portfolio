import { ContactBlock } from "@/components/contact-block";
import { SectionTitle } from "@/components/section-title";

export function V3Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl space-y-8 px-5 py-14 md:px-8 md:py-18">
      <SectionTitle
        eyebrow="Contact"
        title="Start the next entry"
        description="Email or Upwork — I read both within 24 hours."
      />
      <ContactBlock />
    </section>
  );
}

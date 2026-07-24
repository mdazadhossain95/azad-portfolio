import { profile } from "@/content/profile";

export function V1Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 md:py-32 text-center">
      <h2 className="font-mono text-base text-[var(--accent)] mb-4">04. What&apos;s Next?</h2>
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">Get In Touch</h2>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-12">
        Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      
      <a
        href={`mailto:${profile.email}`}
        className="inline-block rounded border border-[var(--accent)] bg-transparent px-8 py-4 font-mono text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
      >
        Say Hello
      </a>
    </section>
  );
}

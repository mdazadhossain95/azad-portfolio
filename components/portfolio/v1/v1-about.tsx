import { profile } from "@/content/profile";
import { skills } from "@/content/skills";

export function V1About() {
  // Flatten a few skills for the list
  const recentSkills = skills.slice(0, 3).flatMap(s => s.items).slice(0, 6);

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <div className="flex items-center mb-10">
        <h2 className="flex-none text-2xl font-bold text-[var(--text)]">
          <span className="font-mono text-xl font-normal text-[var(--accent)] mr-2">01.</span>
          About Me
        </h2>
        <div className="ml-6 h-[1px] flex-grow bg-[var(--border-strong)] max-w-[300px]"></div>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4 text-[var(--text-muted)] text-lg leading-relaxed">
          <p>
            Hello! My name is {profile.shortName} and I enjoy creating things that live on the internet. My interest in software engineering started back in university, and since then I have developed into a full-stack {profile.title.split('|')[0].trim()} with a passion for robust mobile applications and scalable backends.
          </p>
          <p>
            Fast-forward to today, and I&apos;ve had the privilege of working at a startup, a huge corporation, and as an independent freelancer. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p>
            I also recently completed several major FinTech projects focusing on secure and performant architectures.
          </p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm text-[var(--text-secondary)]">
            {recentSkills.map((skill, i) => (
              <li key={i} className="flex items-center before:content-['▹'] before:text-[var(--accent)] before:mr-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 relative group w-3/4 md:w-full mx-auto max-w-[300px]">
          <div className="relative z-10 rounded overflow-hidden mix-blend-multiply filter grayscale hover:filter-none hover:mix-blend-normal transition-all duration-300 outline outline-2 outline-offset-2 outline-transparent hover:outline-[var(--accent)] bg-[var(--accent)]">
            <img 
              src="/profile-photo.png" // using global profile photo
              alt={profile.name} 
              className="w-full h-auto rounded object-cover aspect-square block transition-all"
              style={{ filter: "brightness(0.9)" }}
            />
          </div>
          <div className="absolute inset-0 z-0 rounded border-2 border-[var(--accent)] translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
}

import { projects } from "@/content/projects";

export function V1FeaturedWork() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="flex items-center mb-10">
        <h2 className="flex-none text-2xl font-bold text-[var(--text)]">
          <span className="font-mono text-xl font-normal text-[var(--accent)] mr-2">03.</span>
          Some Things I&apos;ve Built
        </h2>
        <div className="ml-6 h-[1px] flex-grow bg-[var(--border-strong)] max-w-[300px]"></div>
      </div>

      <div className="space-y-24 md:space-y-32">
        {featuredProjects.map((project, i) => {
          const isOdd = i % 2 !== 0;

          return (
            <div key={project.id} className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-4">
              {/* Image Layer */}
              <div
                className={`relative col-span-1 md:col-span-7 h-full w-full rounded shadow-lg transition-transform duration-300 group hover:z-10 ${
                  isOdd ? "md:col-start-6 md:col-end-13" : "md:col-start-1 md:col-end-8"
                }`}
              >
                <div className="absolute inset-0 z-10 mix-blend-multiply filter grayscale opacity-80 bg-[var(--accent)] transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal group-hover:opacity-100 rounded md:bg-transparent md:mix-blend-normal md:filter-none">
                </div>
                <div className="relative block w-full h-full md:aspect-video rounded overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--accent)] mix-blend-multiply filter grayscale transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal z-10 hidden md:block opacity-50 hover:opacity-0" />
                  <img
                    src={project.coverImage || project.gallery?.[0]?.src}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-all duration-300 filter grayscale md:grayscale-0"
                    style={{ minHeight: "300px" }}
                  />
                </div>
              </div>

              {/* Content Layer */}
              <div
                className={`relative z-20 col-span-1 p-6 md:p-0 md:col-span-6 flex flex-col justify-center ${
                  isOdd ? "md:col-start-1 md:col-end-7 md:text-left" : "md:col-start-7 md:col-end-13 md:text-right"
                } -mt-48 md:mt-0 bg-[var(--bg-deep)]/90 md:bg-transparent`}
              >
                <p className="font-mono text-sm text-[var(--accent)] mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-[var(--text)] mb-6 hover:text-[var(--accent)] transition-colors">
                  <a href={project.links?.playStore || project.links?.appStore || project.links?.website || "#"} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <div className="bg-[var(--surface-raised)] p-6 rounded shadow-xl text-[var(--text-muted)] text-[15px] leading-relaxed mb-6 backdrop-blur-sm">
                  {project.summary}
                </div>

                <ul className={`flex flex-wrap font-mono text-xs text-[var(--text-secondary)] gap-x-4 gap-y-2 mb-6 ${isOdd ? "justify-start" : "md:justify-end"}`}>
                  {project.technologies?.slice(0, 5).map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-4 ${isOdd ? "justify-start" : "md:justify-end"}`}>
                  {project.links?.playStore && (
                    <a href={project.links.playStore} target="_blank" rel="noopener noreferrer" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors" aria-label="Play Store">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </a>
                  )}
                  {project.links?.website && (
                    <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors" aria-label="External Link">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

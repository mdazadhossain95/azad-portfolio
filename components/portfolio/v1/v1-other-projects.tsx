import { projects } from "@/content/projects";

export function V1OtherProjects() {
  const otherProjects = projects.filter((p) => !p.featured).slice(0, 6);

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-2xl font-bold text-[var(--text)] mb-2 text-center">
          Other Noteworthy Projects
        </h2>
        <a href="#" className="font-mono text-sm text-[var(--accent)] hover:underline inline-block">
          view the archive
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded bg-[var(--surface-raised)] p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-[var(--accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                  {project.links?.website && (
                    <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mb-2 text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                <a href={project.links?.website || "#"} target="_blank" rel="noopener noreferrer" className="static before:absolute before:inset-0">
                  {project.title}
                </a>
              </h3>
              
              <div className="text-[var(--text-muted)] text-[15px] leading-relaxed line-clamp-4">
                <p>{project.summary}</p>
              </div>
            </div>

            <footer>
              <ul className="flex flex-wrap font-mono text-xs text-[var(--text-secondary)] gap-x-4 gap-y-2">
                {project.technologies?.slice(0, 3).map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
}

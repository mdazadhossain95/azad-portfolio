"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Smartphone, Apple } from "lucide-react";
import { CaseStudy } from "@/lib/types";

type FeaturedCaseStudyProps = {
  project: CaseStudy;
  index: number;
};

export function FeaturedCaseStudy({ project, index }: FeaturedCaseStudyProps) {
  const isImageRight = index % 2 === 0;
  const hasGallery = project.gallery && project.gallery.length > 1;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!hasGallery) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, [hasGallery, project.gallery?.length]);

  return (
    <article className="relative grid items-center grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-y-0 mb-16 md:mb-24 last:mb-0">
      
      {/* Content Side */}
      <div 
        className={`relative z-20 flex flex-col justify-center row-start-2 md:row-start-1
          ${isImageRight ? 'md:col-[1/8] lg:col-[1/7]' : 'md:col-[6/-1] lg:col-[7/-1] md:items-end md:text-right'}
        `}
      >
        <p className="mb-2 font-mono text-sm tracking-wide text-[var(--accent)]">
          Featured Project
        </p>
        <h3 className="mb-6 text-3xl font-bold tracking-tight text-[var(--text)] md:text-4xl">
          <Link href={`/projects/${project.slug}`} className="hover:text-[var(--accent)] transition-colors">
            {project.title}
          </Link>
        </h3>
        
        {/* Elevated Description Panel */}
        <div className="relative z-20 w-full rounded-2xl bg-[var(--surface-raised)] p-6 shadow-2xl border border-[var(--line)] text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
          <p>{project.summary}</p>
          
          <div className={`mt-6 border-t border-[var(--line)] pt-4 ${isImageRight ? 'text-left' : 'md:text-right'}`}>
             <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-1">My Contribution</p>
             <p className="text-sm text-[var(--text)] font-medium">{project.role}</p>
             {project.contributions.length > 0 && (
               <p className="text-sm text-[var(--text-secondary)] mt-1">{project.contributions[0]}</p>
             )}
          </div>
        </div>

        {/* Tech Stack List */}
        <ul className={`mt-6 flex flex-wrap gap-2 ${isImageRight ? 'justify-start' : 'md:justify-end'} relative z-20`}>
          {project.technologies.slice(0, 6).map((tech) => (
            <li key={tech} className="rounded-md border border-[var(--line)] bg-[var(--surface-hover)] px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-[var(--text-muted)] shadow-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] whitespace-nowrap">
              {tech}
            </li>
          ))}
        </ul>

        {/* Action Links */}
        <div className={`mt-8 flex flex-wrap items-center gap-6 ${isImageRight ? 'justify-start' : 'md:justify-end'}`}>
           <Link href={`/projects/${project.slug}`} className="group flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)]/10 px-4 py-2 font-mono text-xs font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--bg-deep)]">
             <span>Case Study</span>
             <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
           </Link>
           
           {project.links.playStore && (
             <a href={project.links.playStore} target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-mono text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]" title="View on Play Store">
                <Smartphone className="h-4 w-4" />
                <span>Play Store</span>
             </a>
           )}
           {project.links.appStore && !project.links.playStore && (
             <a href={project.links.appStore} target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-mono text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]" title="View on App Store">
                <Apple className="h-4 w-4" />
                <span>App Store</span>
             </a>
           )}
           {project.links.website && (
             <a href={project.links.website} target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-mono text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]" title="View Live Website">
                <ExternalLink className="h-4 w-4" />
                <span>Live Site</span>
             </a>
           )}
        </div>
      </div>

      {/* Image Side with Auto-Fading Slideshow */}
      <div 
        className={`relative z-10 row-start-1 h-[300px] sm:h-[400px] md:h-[450px] w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[#0A1628] shadow-2xl transition-all duration-500 hover:border-[var(--accent)]/30
          ${isImageRight ? 'md:col-[6/-1]' : 'md:col-[1/8]'}
        `}
      >
        <Link href={`/projects/${project.slug}`} className="block h-full w-full group">
          <div className="relative h-full w-full">
            {/* Subtle overlay that fades out on hover to highlight the image */}
            <div className="absolute inset-0 z-20 bg-slate-900/30 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
            
            {hasGallery ? (
              project.gallery.map((img, i) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt || project.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className={`absolute inset-0 z-10 object-cover object-center transition-all duration-1000 ease-in-out ${
                    i === currentImageIndex 
                      ? 'opacity-100 scale-105 group-hover:scale-110' 
                      : 'opacity-0 scale-100'
                  }`}
                  priority={index === 0 && i === 0}
                />
              ))
            ) : (
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="absolute inset-0 z-10 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority={index === 0}
              />
            )}
            
            {/* Slideshow Indicators */}
            {hasGallery && (
              <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {project.gallery.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === currentImageIndex ? 'w-4 bg-[var(--accent)]' : 'w-1.5 bg-white/50'
                    }`} 
                  />
                ))}
              </div>
            )}
          </div>
        </Link>
      </div>

    </article>
  );
}

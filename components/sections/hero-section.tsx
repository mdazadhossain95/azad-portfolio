import Link from "next/link";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[90vh] w-full max-w-7xl flex-col justify-center px-5 pb-32 pt-8 md:px-12 lg:px-16 md:pt-12"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-[55%] space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-[var(--success)]/10 px-3 py-1.5 rounded-full mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]"></span>
            </span>
            <span className="text-[10px] tracking-widest text-[var(--success)] font-mono uppercase">Available for work</span>
          </div>

          <p className="mono text-sm font-medium tracking-[0.14em] text-[var(--accent)]">
            Hello, my name is
          </p>

          <div className="space-y-2">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[var(--text)] sm:text-6xl md:text-7xl">
              Md Azad Hossain Tutul.
            </h1>
            <p className="mt-3 text-2xl font-medium text-[var(--text-muted)] sm:text-3xl md:text-4xl leading-snug">
              I craft secure applications for global businesses.
            </p>
          </div>

          <p className="max-w-xl text-base leading-8 text-[var(--text-muted)] md:text-lg md:leading-relaxed">
            I&apos;m a Full-Stack App Developer focusing on scalable, production-ready software. I build secure iOS, Android, and web products from the backend architecture to the frontend interface.
          </p>

          <div className="flex flex-col items-start gap-4 pt-4">
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/#work" 
                className="btn-primary px-7 py-3.5 text-sm font-medium transition-transform hover:scale-105"
              >
                Explore Client Work
              </Link>
              <a 
                href={profile.links.upwork}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary px-7 py-3.5 text-sm font-medium transition-transform hover:scale-105"
              >
                Discuss Your Project
              </a>
            </div>
            <p className="text-sm font-mono text-[var(--text-secondary)] mt-2 opacity-80">
              5+ years building production Flutter applications for Android and iOS.
            </p>
          </div>
        </div>

        {/* Right Side: Code Editor Window */}
        <div className="w-full lg:w-[45%] mt-8 lg:mt-0">
          <div className="rounded-xl overflow-hidden bg-[#111116] border border-[#2a2a35] shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(100,255,218,0.2)] hover:border-[var(--accent)]/40 cursor-default">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#181820] border-b border-[#2a2a35]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-xs text-[var(--text-muted)] mono">developer.dart</div>
              <div className="w-12"></div> {/* Spacer for centering */}
            </div>
            
            {/* Code Content */}
            <div className="p-6 text-sm mono leading-relaxed overflow-x-auto">
              <pre>
                <code className="text-[#a6accd]">
                  <span className="text-[#89ddff]">class</span> <span className="text-[#ffcb6b]">Developer</span> {`{`}<br/>
                  &nbsp;&nbsp;<span className="text-[#89ddff]">final</span> <span className="text-[#ffcb6b]">String</span> name;<br/>
                  &nbsp;&nbsp;<span className="text-[#89ddff]">final</span> <span className="text-[#ffcb6b]">String</span> role;<br/>
                  &nbsp;&nbsp;<span className="text-[#89ddff]">final</span> <span className="text-[#ffcb6b]">List</span>&lt;<span className="text-[#ffcb6b]">String</span>&gt; skills;<br/><br/>

                  &nbsp;&nbsp;<span className="text-[#89ddff]">const</span> <span className="text-[#82aaff]">Developer</span>({`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#89ddff]">required</span> <span className="text-[#89ddff]">this</span>.name,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#89ddff]">required</span> <span className="text-[#89ddff]">this</span>.role,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#89ddff]">required</span> <span className="text-[#89ddff]">this</span>.skills,<br/>
                  &nbsp;&nbsp;{`}`});<br/>
                  {`}`}<br/><br/>

                  <span className="text-[#89ddff]">void</span> <span className="text-[#82aaff]">main</span>() {`{`}<br/>
                  &nbsp;&nbsp;<span className="text-[#89ddff]">const</span> azad = <span className="text-[#ffcb6b]">Developer</span>(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-[#c3e88d]">'Md Azad Hossain Tutul'</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;role: <span className="text-[#c3e88d]">'Full-Stack App Developer'</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;skills: [<span className="text-[#c3e88d]">'Flutter'</span>, <span className="text-[#c3e88d]">'React'</span>, <span className="text-[#c3e88d]">'Node.js'</span>],<br/>
                  &nbsp;&nbsp;);<br/>
                  {`}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator Only */}
      <div className="absolute bottom-8 left-0 w-full flex items-center justify-center">
        <div className="hidden md:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-[var(--text-muted)] tracking-widest mono uppercase">
            Scroll to explore
          </span>
          <svg className="w-4 h-4 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [lines, setLines] = useState<{ text: string; delay?: number; style?: string }[]>([]);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    
    if (hasSeenSplash) {
      setTimeout(() => setVisible(false), 0);
      return;
    }

    document.body.style.overflow = "hidden";
    
    const sequence = [
      { text: "$ flutter clean", delay: 100 },
      { text: "Cleaning workspace...", delay: 500, style: "text-[var(--text-muted)]" },
      { text: "$ flutter pub get", delay: 1000 },
      { text: "Resolving dependencies...", delay: 1400, style: "text-[var(--text-muted)]" },
      { text: "Got dependencies!", delay: 2000, style: "text-[var(--success)]" },
      { text: "$ flutter build apk --release", delay: 2500 },
      { text: "Compiling lib/main.dart for Android...", delay: 3000, style: "text-[var(--text-muted)]" },
      { text: "Running Gradle task 'assembleRelease'...", delay: 3500, style: "text-[var(--text-muted)]" },
      { text: "Built build/app/outputs/flutter-apk/app-release.apk (18.2MB).", delay: 4200, style: "text-[var(--success)]" },
      { text: "Launching azadhossain.dev...", delay: 4600, style: "text-[var(--accent)]" },
    ];

    const timeouts = sequence.map((item) => 
      setTimeout(() => {
        setLines(prev => [...prev, item]);
      }, item.delay)
    );

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("hasSeenSplash", "true");
    }, 5500);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-deep)] px-4 transition-opacity duration-300"
      style={{
        animation: "fadeOut 0.3s ease-out 5.2s forwards"
      }}
    >
      <div className="w-full max-w-lg rounded-xl overflow-hidden bg-[#111116] border border-[#2a2a35] shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#181820] border-b border-[#2a2a35]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-xs text-[var(--text-muted)] mono">~ tutul@dev: flutter build ~</div>
          <div className="w-12"></div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 text-sm mono leading-relaxed flex flex-col gap-1 min-h-[240px]">
          {lines.map((line, i) => (
            <div key={i} className={`flex items-center ${line.style || "text-[var(--text)]"}`}>
              {line.text.startsWith("$") ? (
                <>
                  <span className="text-[var(--accent)] mr-2 font-bold">➜</span>
                  <span className="text-[var(--text)] font-semibold">{line.text.substring(2)}</span>
                </>
              ) : (
                <span>{line.text}</span>
              )}
            </div>
          ))}
          <div className="flex items-center text-[var(--text)] mt-1">
            <span className="animate-pulse inline-block w-2 h-5 bg-[var(--text)]"></span>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; visibility: hidden; }
        }
      `}} />
    </div>
  );
}

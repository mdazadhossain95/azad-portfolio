"use client";

import { useEffect, useState } from "react";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if we've already shown the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    
    if (hasSeenSplash) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    // Prevent scrolling while splash screen is active
    document.body.style.overflow = "hidden";
    
    // Hide splash screen after 0.5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("hasSeenSplash", "true");
    }, 500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-deep)]"
      style={{
        animation: "fadeOut 0.3s ease-out 0.4s forwards"
      }}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="var(--accent)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="path-anim"
            // Hexagon path similar to Brittany's design
            d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 Z"
          />
        </svg>
        <span
          className="mono text-4xl font-semibold text-[var(--accent)]"
          style={{
            animation: "fadeIn 0.3s ease-out 0.1s both"
          }}
        >
          A
        </span>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes drawPath {
          0% { stroke-dasharray: 0, 1000; opacity: 0; }
          10% { opacity: 1; }
          100% { stroke-dasharray: 400, 1000; opacity: 1; }
        }
        .path-anim {
          animation: drawPath 0.4s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; visibility: hidden; }
        }
      `}} />
    </div>
  );
}

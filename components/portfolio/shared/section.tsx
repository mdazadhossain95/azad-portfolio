import React from "react";

export function SharedSection({ 
  children, 
  id, 
  className = "" 
}: { 
  children: React.ReactNode; 
  id?: string; 
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {children}
      </div>
    </section>
  );
}

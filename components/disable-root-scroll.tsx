"use client";

import { useEffect } from "react";

export function DisableRootScroll() {
  useEffect(() => {
    document.body.classList.add("hide-root-scroll");
    return () => {
      document.body.classList.remove("hide-root-scroll");
    };
  }, []);
  
  return null;
}

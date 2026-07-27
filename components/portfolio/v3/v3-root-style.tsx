"use client";

import { useEffect } from "react";

export function V3RootStyle() {
  useEffect(() => {
    document.documentElement.classList.add("v3-active");
    document.body.classList.add("hide-root-scroll");
    return () => {
      document.documentElement.classList.remove("v3-active");
      document.body.classList.remove("hide-root-scroll");
    };
  }, []);
  
  return null;
}

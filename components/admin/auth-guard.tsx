"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase-client";
import { isAdminEmail } from "@/lib/firebase";

type AuthGuardProps = {
  children: React.ReactNode;
};

export function AuthGuard({ children }: AuthGuardProps) {
  const [status, setStatus] = useState<"loading" | "allowed" | "blocked">(
    auth ? "loading" : "blocked",
  );
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && isAdminEmail(user.email)) {
        setStatus("allowed");
        return;
      }

      setStatus("blocked");
      router.replace("/admin/login");
    });

    return unsubscribe;
  }, [router]);

  if (status !== "allowed") {
    return (
      <section className="mx-auto w-full max-w-4xl px-5 py-20 md:px-8">
        <p className="text-sm text-[var(--muted)]">Checking admin access...</p>
      </section>
    );
  }

  return <>{children}</>;
}

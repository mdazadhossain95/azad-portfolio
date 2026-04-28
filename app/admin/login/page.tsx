"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase-client";
import { isAdminEmail } from "@/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!auth) {
      setError("Firebase Auth not configured.");
      return;
    }

    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (!isAdminEmail(result.user.email)) {
        setError("Access denied: email not in NEXT_PUBLIC_ADMIN_EMAILS");
        return;
      }
      router.replace("/admin");
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-md px-5 py-20 md:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Admin Login</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Use Firebase Auth account. Restrict emails via NEXT_PUBLIC_ADMIN_EMAILS.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          type="email"
          className="w-full rounded-xl border border-[var(--line)] bg-transparent px-3 py-2 text-sm"
          required
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          className="w-full rounded-xl border border-[var(--line)] bg-transparent px-3 py-2 text-sm"
          required
        />
        {error ? <p className="text-sm text-rose-500">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[var(--text)] px-5 py-2 text-sm font-medium text-[var(--bg)] disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </section>
  );
}

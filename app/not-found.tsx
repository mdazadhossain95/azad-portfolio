import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 py-32 text-center md:px-8">
      <h1 className="text-6xl font-semibold tracking-tight text-[var(--text)] md:text-8xl">
        404
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)]">
        Page not found. The link may be broken or the page may have been moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary px-6 py-3 text-sm font-medium">
          Back to home
        </Link>
        <Link href="/projects" className="btn-secondary px-6 py-3 text-sm font-medium">
          View projects
        </Link>
      </div>
    </section>
  );
}

export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-32 md:px-8">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--line)] border-t-[var(--accent)]" />
        <p className="text-sm text-[var(--muted)]">Loading...</p>
      </div>
    </div>
  );
}

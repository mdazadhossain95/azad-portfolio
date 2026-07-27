export default function V1Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--line)] border-t-[var(--accent)]" />
      <p className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
        Loading...
      </p>
    </div>
  );
}

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
};

export function SectionTitle({ eyebrow, title, description, action }: SectionTitleProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="space-y-4 md:space-y-5">
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
          {eyebrow}
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">{description}</p>
      </div>
      {action && (
        <div className="shrink-0 pb-1">
          {action}
        </div>
      )}
    </div>
  );
}

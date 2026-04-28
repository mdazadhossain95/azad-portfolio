type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">{description}</p>
    </div>
  );
}

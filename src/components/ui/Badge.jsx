const VARIANTS = {
  neutral: 'bg-surface-container text-secondary',
  solid: 'bg-secondary text-on-secondary',
  muted: 'bg-surface-container text-on-surface',
};

/** Status chip. `pill` renders the fully-rounded verified-state tag. */
export default function Badge({ children, variant = 'neutral', pill = false, className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-2 py-0.5 font-label-sm text-label-sm font-semibold whitespace-nowrap',
        pill ? 'rounded-full' : 'rounded',
        VARIANTS[variant] ?? VARIANTS.neutral,
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}

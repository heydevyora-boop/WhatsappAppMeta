import Card from './Card';

/**
 * Numbered legal clause panel shared by the Privacy Policy and Terms pages.
 * `highlight` tints the index badge for clauses that carry Meta-specific weight.
 */
export default function ClauseSection({ id, index, title, children, highlight = false }) {
  return (
    <Card as="section" id={id} className="p-space-md flex flex-col gap-space-sm scroll-mt-24">
      <div className="flex items-center gap-space-xs">
        <span
          className={[
            'w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold flex-shrink-0 tnum',
            highlight
              ? 'bg-secondary-container text-on-secondary-container'
              : 'bg-surface-container text-on-surface',
          ].join(' ')}
        >
          {index}
        </span>
        <h2 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md text-on-surface">
          {title}
        </h2>
      </div>
      {children}
    </Card>
  );
}

import Icon from './Icon';

/** Eyebrow + headline + supporting copy block used to open every section. */
export default function SectionHeading({ icon, eyebrow, title, description, className = '' }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {(icon || eyebrow) && (
        <div className="flex items-center gap-2">
          {icon && <Icon name={icon} className="text-secondary text-[20px]" />}
          {eyebrow && (
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="font-body-sm text-body-sm md:font-body-md md:text-body-md text-on-surface-variant max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}

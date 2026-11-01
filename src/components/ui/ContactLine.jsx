import Icon from './Icon';

/**
 * Icon + value contact row. Renders a link when `href` is set,
 * plain text otherwise (used in footers where the value is informational).
 */
export default function ContactLine({ icon, href, children, align = 'center', className = '' }) {
  const alignment = align === 'start' ? 'items-start' : 'items-center';
  const iconClass = `text-[16px] text-outline flex-shrink-0 ${align === 'start' ? 'mt-0.5' : ''}`;

  return (
    <p className={`flex ${alignment} gap-2 ${className}`}>
      <Icon name={icon} className={iconClass} />
      {href ? (
        <a className="hover:underline break-words" href={href}>
          {children}
        </a>
      ) : (
        <span className="break-words">{children}</span>
      )}
    </p>
  );
}

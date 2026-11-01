import { Link } from 'react-router-dom';
import Icon from './Icon';

const VARIANTS = {
  // Affirmative / compliance milestone action.
  primary:
    'bg-secondary text-on-secondary shadow-sm hover:opacity-95 active:scale-[0.99]',
  // Utility surface action.
  secondary:
    'bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low',
  // Execution / submit action.
  dark: 'bg-primary text-on-primary hover:bg-surface-container-highest hover:text-on-surface',
  ghost: 'bg-transparent text-on-surface-variant hover:text-on-surface',
};

const SIZES = {
  md: 'px-5 py-3 font-label-lg text-label-lg',
  sm: 'px-2.5 py-1 font-label-sm text-label-sm',
};

/**
 * Polymorphic button. Renders a react-router `Link` when `to` is provided,
 * an anchor when `href` is provided, and a `<button>` otherwise.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  iconClassName = '',
  to,
  href,
  className = '',
  fullWidth = false,
  ...rest
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-lg transition-all',
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <Icon name={icon} className={`text-[18px] ${iconClassName}`} />
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <Icon name={icon} className={`text-[18px] ${iconClassName}`} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

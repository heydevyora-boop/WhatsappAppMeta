/**
 * Layer-1 container: white surface, soft radius, ambient shadow.
 * `elevated` switches to the Layer-2 shadow used by key dossier panels.
 */
export default function Card({ children, className = '', elevated = false, as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`bg-surface-container-lowest rounded-xl ${elevated ? 'shadow-md' : 'shadow-sm'} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Tinted header strip that sits flush inside a `Card` with `p-space-md`. */
export function CardHeader({ children, className = '' }) {
  return (
    <div
      className={`-mx-space-md -mt-space-md px-space-md py-3 bg-surface-container-low rounded-t-xl flex items-center justify-between gap-2 ${className}`}
    >
      {children}
    </div>
  );
}

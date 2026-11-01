/**
 * Material Symbols icon wrapper.
 * `filled` toggles the FILL axis used by the design for solid status glyphs.
 */
export default function Icon({ name, className = '', filled = false, style, ...rest }) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1", ...style } : style}
      {...rest}
    >
      {name}
    </span>
  );
}

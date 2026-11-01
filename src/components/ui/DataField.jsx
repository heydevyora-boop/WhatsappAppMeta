/** Label-over-value pair used throughout the registry record. */
export default function DataField({ label, children, className = '' }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="font-label-sm text-label-sm text-outline">{label}</span>
      {children}
    </div>
  );
}

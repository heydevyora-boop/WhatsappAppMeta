import Card from './Card';
import Icon from './Icon';

/** Compact fact tile (label, value, caption). */
export default function StatCard({ icon, label, value, caption, valueClassName = '' }) {
  return (
    <Card className="p-3 h-full flex flex-col gap-1">
      <div className="flex items-center gap-1.5 text-secondary">
        <Icon name={icon} className="text-[18px]" />
        <span className="font-label-sm text-label-sm font-semibold">{label}</span>
      </div>
      <span
        className={`font-headline-sm text-headline-sm text-on-surface tnum break-all ${valueClassName}`}
      >
        {value}
      </span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">{caption}</span>
    </Card>
  );
}

import Card from './Card';
import Icon from './Icon';

/** Infrastructure snapshot tile (uptime, certification, …). */
export default function StatCard({ icon, label, value, caption }) {
  return (
    <Card className="p-3 h-full flex flex-col gap-1">
      <div className="flex items-center gap-1.5 text-secondary">
        <Icon name={icon} className="text-[18px]" />
        <span className="font-label-sm text-label-sm font-semibold">{label}</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-on-surface tnum">{value}</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">{caption}</span>
    </Card>
  );
}

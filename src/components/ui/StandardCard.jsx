import Card from './Card';
import Icon from './Icon';

/** Enterprise service standard row with a trailing confirmation check. */
export default function StandardCard({ icon, title, description }) {
  return (
    <Card className="p-3 h-full flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary flex-shrink-0">
          <Icon name={icon} className="text-[18px]" />
        </div>
        <div className="min-w-0">
          <p className="font-label-md text-label-md text-on-surface">{title}</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
        </div>
      </div>
      <Icon name="check_circle" className="text-secondary text-[18px] flex-shrink-0" />
    </Card>
  );
}

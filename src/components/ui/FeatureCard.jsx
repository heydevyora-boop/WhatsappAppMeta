import Card from './Card';
import Icon from './Icon';

/** Icon + title + body narrative card (Business Scope, Client Services, …). */
export default function FeatureCard({ icon, title, description }) {
  return (
    <Card className="p-4 h-full flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon name={icon} className="text-secondary text-[18px]" />
      </div>
      <div className="flex flex-col min-w-0">
        <h3 className="font-label-lg text-label-lg text-on-surface">{title}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{description}</p>
      </div>
    </Card>
  );
}

import { platformUsage } from '@/data/company';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';

/** Scope statement for our intended WhatsApp Business Platform use. */
export default function ComplianceChecklist() {
  return (
    <section className="container-page pb-space-lg">
      <Card className="p-4 flex flex-col gap-space-sm">
        <div className="flex items-center justify-between gap-2">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Our WhatsApp Business Platform Usage
          </span>
          <Icon name="chat" className="text-secondary text-[18px] flex-shrink-0" />
        </div>
        <ul className="space-y-2 font-label-sm text-label-sm text-on-surface-variant">
          {platformUsage.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Icon name="check" className="text-secondary text-[14px] mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

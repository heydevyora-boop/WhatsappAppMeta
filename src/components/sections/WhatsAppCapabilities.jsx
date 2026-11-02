import { capabilities } from '@/data/whatsapp';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';

/** Capability cards describing intended WhatsApp Business Platform usage. */
export default function WhatsAppCapabilities() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-sm">
      {capabilities.map((item) => (
        <Card key={item.id} id={item.id} className="p-space-md flex flex-col gap-space-sm h-full scroll-mt-24">
          <div className="flex items-start gap-3">
            <span
              className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <Icon name={item.icon} className="text-secondary text-[18px]" />
            </span>
            <div className="flex flex-col min-w-0">
              <h3 className="font-label-lg text-label-lg text-on-surface">{item.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {item.description}
              </p>
            </div>
          </div>

          <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
            {item.points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <Icon name="check" className="text-secondary text-[14px] mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {item.note && (
            <p className="p-2.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant flex items-start gap-2">
              <Icon name="info" className="text-[16px] text-outline flex-shrink-0 mt-0.5" />
              <span>{item.note}</span>
            </p>
          )}
        </Card>
      ))}
    </div>
  );
}

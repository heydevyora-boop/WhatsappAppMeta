import { company, gst } from '@/config/site';
import Card, { CardHeader } from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';

/** Registered business address and genuine contact details. */
export default function ContactTouchpoints() {
  return (
    <Card className="p-space-md flex flex-col gap-space-sm">
      <CardHeader className="py-2.5">
        <div className="flex items-center gap-2">
          <Icon name="storefront" className="text-[18px] text-secondary" />
          <span className="font-label-md text-label-md text-on-surface">
            Registered Business Details
          </span>
        </div>
      </CardHeader>

      <address className="not-italic flex flex-col gap-2 font-body-sm text-body-sm">
        <div className="flex items-start gap-2">
          <Icon name="location_on" className="text-outline text-[18px] mt-0.5 flex-shrink-0" />
          <span className="flex flex-col text-on-surface">
            <span className="font-medium">{company.tradeName}</span>
            {company.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="phone" className="text-outline text-[18px] flex-shrink-0" />
          <a
            className="text-secondary font-label-md text-label-md hover:underline tnum"
            href={`tel:${company.phoneHref}`}
          >
            {company.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="mail" className="text-outline text-[18px] flex-shrink-0" />
          <a
            className="text-secondary font-label-md text-label-md hover:underline break-all"
            href={`mailto:${company.email}`}
          >
            {company.email}
          </a>
        </div>
        <div className="flex items-start gap-2">
          <Icon name="receipt_long" className="text-outline text-[18px] mt-0.5 flex-shrink-0" />
          <span className="flex flex-col text-on-surface">
            <span className="font-label-sm text-label-sm text-on-surface-variant">GSTIN</span>
            <span className="tnum">{gst.gstin}</span>
          </span>
        </div>
      </address>
    </Card>
  );
}

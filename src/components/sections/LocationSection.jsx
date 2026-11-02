import { company, media } from '@/config/site';
import Icon from '@/components/ui/Icon';

/** Registered office map preview used for physical identity confirmation. */
export default function LocationSection() {
  return (
    <section className="container-page py-space-md lg:py-space-lg flex flex-col gap-space-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Icon name="pin_drop" className="text-outline text-[18px] flex-shrink-0" />
          <span className="font-label-md text-label-md text-on-surface truncate">
            Principal Place of Business
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
          {company.city}
        </span>
      </div>

      <div
        role="img"
        aria-label={`Illustrative map of Bhopal marking the Govindpura industrial area, where ${company.tradeName} is registered`}
        className="w-full h-40 md:h-56 lg:h-72 bg-cover bg-center rounded-xl shadow-sm relative overflow-hidden"
        style={{ backgroundImage: `url('${media.officeMap}')` }}
      >
        <div className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded shadow-sm text-on-surface font-label-sm text-label-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
          <span>{company.locality}</span>
        </div>
      </div>
    </section>
  );
}

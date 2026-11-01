import { company, media } from '@/config/site';
import Icon from '@/components/ui/Icon';

/** Full-bleed operations-centre photograph with a verified location caption. */
export default function EditorialImage() {
  return (
    <section className="container-page pb-space-lg">
      <div className="relative w-full h-44 md:h-64 lg:h-80 rounded-xl overflow-hidden shadow-sm">
        <img
          src={media.operationsCenter}
          alt="Devyora enterprise communications operations centre with secure WhatsApp API delivery dashboards."
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-4">
          <div className="flex items-center gap-2 text-on-primary">
            <Icon name="domain_verification" className="text-[18px] text-secondary-container" />
            <span className="font-label-sm text-label-sm">
              Headquarters Operations • {company.city}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

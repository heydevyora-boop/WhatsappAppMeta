import { registry } from '@/config/site';
import Icon from '@/components/ui/Icon';

/** Thin verification strip pinned directly beneath the header. */
export default function TrustBanner() {
  return (
    <section className="bg-surface-container-low">
      <div className="container-page py-space-sm flex items-center justify-between gap-space-xs">
        <div className="flex items-center gap-1.5 min-w-0">
          <Icon name="verified" filled className="text-secondary text-[16px] flex-shrink-0" />
          <span className="font-label-sm text-label-sm text-on-surface truncate">
            Official Meta Partner Verification Intake
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full whitespace-nowrap tnum">
          ID: {registry.intakeId}
        </span>
      </div>
    </section>
  );
}

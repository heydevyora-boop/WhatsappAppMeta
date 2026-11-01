import { company, registry } from '@/config/site';
import Card, { CardHeader } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import DataField from '@/components/ui/DataField';
import Icon from '@/components/ui/Icon';

/** Highlighted official credential card — the core artefact for reviewers. */
export default function RegistryRecord() {
  return (
    <Card elevated className="p-space-md flex flex-col gap-space-md">
      <CardHeader>
        <div className="flex items-center gap-2 min-w-0">
          <Icon name="verified_user" className="text-secondary text-[18px] flex-shrink-0" />
          <span className="font-label-md text-label-md text-on-surface">
            Verified State Registry Record
          </span>
        </div>
        <Badge variant="solid">{registry.standing}</Badge>
      </CardHeader>

      <div className="grid grid-cols-1 gap-space-sm">
        <DataField label="Official Legal Business Name">
          <span className="font-label-lg text-label-lg text-on-surface font-semibold">
            {company.legalName}
          </span>
        </DataField>

        <DataField label="Federal Tax ID / State Registration">
          <div className="flex flex-wrap items-center gap-2 mt-0.5">
            <span className="font-label-md text-label-md text-on-surface bg-surface-container px-2 py-1 rounded tnum">
              {registry.taxId}
            </span>
            <span className="font-label-md text-label-md text-on-surface bg-surface-container px-2 py-1 rounded tnum">
              {registry.entityId}
            </span>
          </div>
        </DataField>

        <DataField label="Registered Corporate Headquarters">
          <div className="flex items-start gap-1.5 mt-0.5">
            <Icon name="apartment" className="text-outline text-[16px] mt-0.5 flex-shrink-0" />
            <span className="font-body-sm text-body-sm text-on-surface">{company.address}</span>
          </div>
        </DataField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
          <DataField label="Direct Corporate Phone">
            <a
              className="font-label-md text-label-md text-secondary flex items-center gap-1 mt-0.5 hover:underline tnum"
              href={`tel:${company.phoneHref}`}
            >
              <Icon name="call" className="text-[16px]" />
              <span>{company.phone}</span>
            </a>
          </DataField>
          <DataField label="Verified Business Domain Email">
            <a
              className="font-label-md text-label-md text-secondary flex items-center gap-1 mt-0.5 hover:underline break-all"
              href={`mailto:${company.email}`}
            >
              <Icon name="mail" className="text-[16px] flex-shrink-0" />
              <span>{company.email}</span>
            </a>
          </DataField>
        </div>

        <DataField label="Corporate Operating Hours" className="pt-1">
          <span className="font-body-sm text-body-sm text-on-surface">{company.hours}</span>
        </DataField>
      </div>

      {/* Compliance verification seal */}
      <div className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Icon name="fact_check" className="text-secondary text-[20px] flex-shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-label-sm font-semibold text-on-surface truncate">
              {company.legalName}
            </span>
            <span className="font-label-sm text-label-sm text-outline truncate">
              {registry.registrar}
            </span>
          </div>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap tnum">
          Validated {registry.validatedYear}
        </span>
      </div>
    </Card>
  );
}

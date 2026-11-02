import { company, gst } from '@/config/site';
import Card, { CardHeader } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import DataField from '@/components/ui/DataField';
import Icon from '@/components/ui/Icon';

/**
 * Business information card.
 * Every value is transcribed from the GST Registration Certificate
 * (Form GST REG-06) for GSTIN 23AEVPG0463J1ZE.
 */
export default function RegistryRecord() {
  return (
    <Card elevated className="p-space-md flex flex-col gap-space-md">
      <CardHeader>
        <div className="flex items-center gap-2 min-w-0">
          <Icon name="description" className="text-secondary text-[18px] flex-shrink-0" />
          <span className="font-label-md text-label-md text-on-surface">
            GST Registration Details
          </span>
        </div>
        <Badge variant="solid">{gst.registrationType} Taxpayer</Badge>
      </CardHeader>

      <div className="grid grid-cols-1 gap-space-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          <DataField label="Trade Name">
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              {company.tradeName}
            </span>
          </DataField>
          <DataField label="Legal Name">
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              {company.legalName}
            </span>
          </DataField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          <DataField label="Constitution of Business">
            <span className="font-body-sm text-body-sm text-on-surface">
              {company.constitution}
            </span>
          </DataField>
          <DataField label="Proprietor">
            <span className="font-body-sm text-body-sm text-on-surface">{company.proprietor}</span>
          </DataField>
        </div>

        <DataField label="GST Identification Number (GSTIN)">
          <div className="flex flex-wrap items-center gap-2 mt-0.5">
            <span className="font-label-md text-label-md text-on-surface bg-surface-container px-2 py-1 rounded tnum">
              {gst.gstin}
            </span>
            <span className="font-label-md text-label-md text-on-surface bg-surface-container px-2 py-1 rounded">
              Type: {gst.registrationType}
            </span>
          </div>
        </DataField>

        <DataField label="Principal Place of Business">
          <div className="flex items-start gap-1.5 mt-0.5">
            <Icon name="apartment" className="text-outline text-[16px] mt-0.5 flex-shrink-0" />
            <span className="font-body-sm text-body-sm text-on-surface">{company.address}</span>
          </div>
        </DataField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          <DataField label="Date of Liability">
            <span className="font-body-sm text-body-sm text-on-surface tnum">
              {gst.dateOfLiability}
            </span>
          </DataField>
          <DataField label="Registration Valid From">
            <span className="font-body-sm text-body-sm text-on-surface tnum">{gst.validFrom}</span>
          </DataField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
          <DataField label="Business Phone">
            <a
              className="font-label-md text-label-md text-secondary flex items-center gap-1 mt-0.5 hover:underline tnum"
              href={`tel:${company.phoneHref}`}
            >
              <Icon name="call" className="text-[16px]" />
              <span>{company.phone}</span>
            </a>
          </DataField>
          <DataField label="Business Email">
            <a
              className="font-label-md text-label-md text-secondary flex items-center gap-1 mt-0.5 hover:underline break-all"
              href={`mailto:${company.email}`}
            >
              <Icon name="mail" className="text-[16px] flex-shrink-0" />
              <span>{company.email}</span>
            </a>
          </DataField>
        </div>
      </div>

      {/* Certificate provenance */}
      <div className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Icon name="assured_workload" className="text-secondary text-[20px] flex-shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-label-sm font-semibold text-on-surface">
              Government of India — {gst.form}
            </span>
            <span className="font-label-sm text-label-sm text-outline">
              {gst.approvingAuthority} • Jurisdiction {gst.jurisdictionalOffice}
            </span>
          </div>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap tnum">
          Issued {gst.certificateIssued}
        </span>
      </div>
    </Card>
  );
}

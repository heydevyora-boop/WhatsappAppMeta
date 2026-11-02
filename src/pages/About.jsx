import { company, gst } from '@/config/site';
import { businessOverview, messagingPractices, registrationFacts } from '@/data/company';
import TrustBanner from '@/components/layout/TrustBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import StandardCard from '@/components/ui/StandardCard';
import StatCard from '@/components/ui/StatCard';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import DataField from '@/components/ui/DataField';
import RegistryRecord from '@/components/sections/RegistryRecord';
import LocationSection from '@/components/sections/LocationSection';
import ComplianceChecklist from '@/components/sections/ComplianceChecklist';
import usePageTitle from '@/hooks/usePageTitle';

/** Business information summary, as recorded on the GST certificate. */
const BUSINESS_INFORMATION = [
  { label: 'Trade Name', value: company.tradeName },
  { label: 'Legal Name', value: company.legalName },
  { label: 'Business Constitution', value: company.constitution },
  { label: 'GST Registration Number', value: gst.gstin, tnum: true },
  { label: 'Type of Registration', value: gst.registrationType },
  { label: 'Registered Since', value: gst.validFrom, tnum: true },
];

export default function About() {
  usePageTitle(`About ${company.tradeName} — Business & GST Registration Details`);

  return (
    <>
      <TrustBanner />

      {/* Page introduction */}
      <section className="container-page pt-space-lg pb-space-md flex flex-col gap-space-md">
        <div className="inline-flex items-center gap-2 self-start bg-surface-container-low px-3 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
          <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-tight">
            {company.tagline}
          </span>
        </div>

        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
            About {company.tradeName}
          </span>
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface tracking-tight">
            A Proprietorship Business in Bhopal, Madhya Pradesh
          </h1>
        </div>

        <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant max-w-3xl">
          {company.tradeName} is a proprietorship business owned by {company.legalName}, registered
          under the Goods and Services Tax Act, 2017 and operating from the Govindpura industrial
          area of Bhopal, Madhya Pradesh, India.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
          {registrationFacts.map((fact) => (
            <StatCard key={fact.label} {...fact} />
          ))}
        </div>
      </section>

      {/* Business Information */}
      <section className="bg-surface-container-low">
        <div className="container-page py-space-lg lg:py-space-xl flex flex-col gap-space-lg">
          <SectionHeading
            icon="badge"
            eyebrow="Business Information"
            title="Business &amp; Registration Details"
            description="The details below are transcribed from our GST Registration Certificate (Form GST REG-06)."
          />

          <Card className="p-space-md flex flex-col gap-space-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {BUSINESS_INFORMATION.map((item) => (
                <DataField key={item.label} label={item.label}>
                  <span
                    className={`font-body-md text-body-md text-on-surface font-medium ${
                      item.tnum ? 'tnum' : ''
                    }`}
                  >
                    {item.value}
                  </span>
                </DataField>
              ))}
            </div>

            <div className="pt-space-xs border-t border-outline-variant">
              <DataField label="Registered Business Address" className="pt-space-sm">
                <span className="font-body-md text-body-md text-on-surface">{company.address}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Business location: Bhopal, {company.state}, {company.country}
                </span>
              </DataField>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-sm">
            {businessOverview.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>

          <RegistryRecord />

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-outline uppercase tracking-wider">
              How We Plan to Message Customers
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-sm">
              {messagingPractices.map((item) => (
                <StandardCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
      <ComplianceChecklist />

      {/* Closing call to action */}
      <section className="container-page pb-space-lg">
        <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col items-center text-center gap-space-sm">
          <div className="flex flex-col gap-1">
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              Have a question about our business?
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Call or email us using the details on our contact page.
            </span>
          </div>
          <Button to="/contact" icon="arrow_forward" iconPosition="right" className="mt-1">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}

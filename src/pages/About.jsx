import { company } from '@/config/site';
import { corporateNarrative, serviceStandards, infrastructureStats } from '@/data/company';
import TrustBanner from '@/components/layout/TrustBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import StandardCard from '@/components/ui/StandardCard';
import StatCard from '@/components/ui/StatCard';
import Button from '@/components/ui/Button';
import EditorialImage from '@/components/sections/EditorialImage';
import RegistryRecord from '@/components/sections/RegistryRecord';
import LocationSection from '@/components/sections/LocationSection';
import ComplianceChecklist from '@/components/sections/ComplianceChecklist';
import usePageTitle from '@/hooks/usePageTitle';

export default function About() {
  usePageTitle(`About ${company.name} — Corporate Profile & Verified Credentials`);

  return (
    <>
      <TrustBanner />

      {/* Page introduction */}
      <section className="container-page pt-space-lg pb-space-md flex flex-col gap-space-md">
        <div className="inline-flex items-center gap-2 self-start bg-surface-container-low px-3 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
          <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-tight">
            Corporate Profile • Verified Business Entity
          </span>
        </div>

        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
            About {company.name}
          </span>
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface tracking-tight">
            Built for Verified, Compliant Enterprise Communication
          </h1>
        </div>

        <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant max-w-3xl">
          {company.name} is a registered communications provider delivering authenticated
          transactional and support messaging channels for global organizations. Every integration
          we operate is built on documented compliance, auditable infrastructure and verified
          business identity.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
          {infrastructureStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <EditorialImage />

      {/* Who we are */}
      <section className="bg-surface-container-low">
        <div className="container-page py-space-lg lg:py-space-xl flex flex-col gap-space-lg">
          <SectionHeading
            icon="badge"
            eyebrow="Corporate Audit Dossier"
            title="Company Overview & Official Credentials"
            description="Strict compliance documentation provided for verified partner onboarding, transparency benchmarks, and operational validation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-sm">
            {corporateNarrative.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>

          <RegistryRecord />

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-outline uppercase tracking-wider">
              Enterprise Service Standards
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-sm">
              {serviceStandards.map((item) => (
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
              Need our verification dossier for a partner review?
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Our compliance desk responds to documentation requests within one business day.
            </span>
          </div>
          <Button to="/contact" icon="arrow_forward" iconPosition="right" className="mt-1">
            Contact Enterprise Team
          </Button>
        </div>
      </section>
    </>
  );
}

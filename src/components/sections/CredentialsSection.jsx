import { corporateNarrative, serviceStandards } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import StandardCard from '@/components/ui/StandardCard';
import RegistryRecord from './RegistryRecord';

/** Company overview, official credentials and enterprise service standards. */
export default function CredentialsSection() {
  return (
    <section id="credentials" className="bg-surface-container-low scroll-mt-20">
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
  );
}

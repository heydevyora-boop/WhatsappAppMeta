import { businessOverview, messagingPractices } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import StandardCard from '@/components/ui/StandardCard';
import RegistryRecord from './RegistryRecord';

/** Business information, GST registration details and messaging practices. */
export default function CredentialsSection() {
  return (
    <section id="credentials" className="bg-surface-container-low scroll-mt-20">
      <div className="container-page py-space-lg lg:py-space-xl flex flex-col gap-space-lg">
        <SectionHeading
          icon="badge"
          eyebrow="Business Information"
          title="About Our Business & Registration"
          description="Registration details below are transcribed from our GST Registration Certificate (Form GST REG-06)."
        />

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
  );
}

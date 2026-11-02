import { company } from '@/config/site';
import TrustBanner from '@/components/layout/TrustBanner';
import Hero from '@/components/sections/Hero';
import CredentialsSection from '@/components/sections/CredentialsSection';
import LocationSection from '@/components/sections/LocationSection';
import ContactSection from '@/components/sections/ContactSection';
import ComplianceChecklist from '@/components/sections/ComplianceChecklist';
import usePageTitle from '@/hooks/usePageTitle';

export default function Home() {
  usePageTitle(`${company.tradeName} — GST Registered Business in Bhopal, Madhya Pradesh`);

  return (
    <>
      <TrustBanner />
      <Hero />
      <CredentialsSection />
      <LocationSection />
      <ContactSection />
      <ComplianceChecklist />
    </>
  );
}

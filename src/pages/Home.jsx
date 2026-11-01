import TrustBanner from '@/components/layout/TrustBanner';
import Hero from '@/components/sections/Hero';
import EditorialImage from '@/components/sections/EditorialImage';
import CredentialsSection from '@/components/sections/CredentialsSection';
import LocationSection from '@/components/sections/LocationSection';
import ContactSection from '@/components/sections/ContactSection';
import ComplianceChecklist from '@/components/sections/ComplianceChecklist';
import usePageTitle from '@/hooks/usePageTitle';

export default function Home() {
  usePageTitle('Devyora — Official Enterprise Communication & Smart Messaging Infrastructure');

  return (
    <>
      <TrustBanner />
      <Hero />
      <EditorialImage />
      <CredentialsSection />
      <LocationSection />
      <ContactSection />
      <ComplianceChecklist />
    </>
  );
}

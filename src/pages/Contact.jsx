import { company } from '@/config/site';
import TrustBanner from '@/components/layout/TrustBanner';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import ContactSection from '@/components/sections/ContactSection';
import LocationSection from '@/components/sections/LocationSection';
import usePageTitle from '@/hooks/usePageTitle';

const CHANNELS = [
  {
    icon: 'mark_email_read',
    label: 'Verified Business Email',
    value: company.email,
    href: `mailto:${company.email}`,
    action: 'Dispatch',
  },
  {
    icon: 'support_agent',
    label: 'Corporate Telephone',
    value: company.phone,
    href: `tel:${company.phoneHref}`,
    action: 'Dial',
  },
];

export default function Contact() {
  usePageTitle(`Contact ${company.name} — Enterprise & Compliance Desk`);

  return (
    <>
      <TrustBanner />

      {/* Page introduction */}
      <section className="container-page pt-space-lg pb-space-md flex flex-col gap-space-md">
        <div className="inline-flex items-center gap-2 self-start bg-surface-container-low px-3 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
          <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-tight">
            Compliance Desk • Response within 1 business day
          </span>
        </div>

        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
            Inquiries &amp; Review Correspondence
          </span>
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface tracking-tight">
            Get in Touch with Our Team
          </h1>
        </div>

        <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant max-w-3xl">
          Reach out for business verification support, enterprise provisioning, or technical audits.
          Every inquiry is routed directly to our corporate compliance desk.
        </p>

        {/* Quick-dial channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
          {CHANNELS.map((channel) => (
            <Card key={channel.label} className="p-space-sm flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Icon name={channel.icon} className="text-[18px] text-outline flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {channel.label}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
                    {channel.value}
                  </span>
                </div>
              </div>
              <a
                className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-medium whitespace-nowrap hover:bg-surface-container-highest hover:text-on-surface transition-colors"
                href={channel.href}
              >
                {channel.action}
              </a>
            </Card>
          ))}
        </div>
      </section>

      <ContactSection showHeading={false} />
      <LocationSection />
    </>
  );
}

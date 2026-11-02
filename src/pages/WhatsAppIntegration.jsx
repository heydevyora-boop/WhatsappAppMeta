import { company } from '@/config/site';
import { complianceCommitments } from '@/data/whatsapp';
import TrustBanner from '@/components/layout/TrustBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import WhatsAppCapabilities from '@/components/sections/WhatsAppCapabilities';
import IntegrationWorkflow from '@/components/sections/IntegrationWorkflow';
import usePageTitle from '@/hooks/usePageTitle';

export default function WhatsAppIntegration() {
  usePageTitle(`WhatsApp Business Platform Integration — ${company.tradeName}`);

  return (
    <>
      <TrustBanner />

      {/* Page introduction */}
      <section className="container-page pt-space-lg pb-space-md flex flex-col gap-space-md">
        <div className="inline-flex items-center gap-2 self-start bg-surface-container-low px-3 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
          <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-tight">
            Planned Integration • Intended Business Usage
          </span>
        </div>

        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
            {company.tradeName}
          </span>
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface tracking-tight">
            WhatsApp Business Platform Integration
          </h1>
        </div>

        <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant max-w-3xl">
          Official WhatsApp communication infrastructure for customer enquiries, lead management and
          business automation.
        </p>

        {/* Status disclosure */}
        <Card className="p-space-md flex items-start gap-space-sm border border-outline-variant">
          <Icon name="pending_actions" className="text-secondary text-[22px] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-label-lg text-label-lg text-on-surface">
              This Integration Is Planned, Not Yet Live
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {company.tradeName} has not completed onboarding to the WhatsApp Business Platform.
              This page describes how we intend to use it for our own business operations. Meta is
              the official provider of the WhatsApp Business Platform. Nothing on this page means
              that Meta has approved, verified, endorsed or partnered with {company.tradeName}.
            </p>
          </div>
        </Card>
      </section>

      {/* Intended capabilities */}
      <section className="bg-surface-container-low">
        <div className="container-page py-space-lg lg:py-space-xl flex flex-col gap-space-lg">
          <SectionHeading
            icon="chat"
            eyebrow="Intended Business Usage"
            title="What We Plan to Build"
            description="We are building our own private WhatsApp CRM dashboard for Aayushi Creations, for our own business operations only. We do not offer WhatsApp API services or subscriptions to other businesses."
          />
          <WhatsAppCapabilities />
        </div>
      </section>

      {/* Workflow diagram */}
      <section className="container-page py-space-lg lg:py-space-xl flex flex-col gap-space-lg">
        <SectionHeading
          icon="account_tree"
          eyebrow="Integration Workflow"
          title="How an Enquiry Would Flow"
          description="The intended path a customer enquiry takes, from the advertisement through Meta's platform to our internal dashboard."
        />
        <IntegrationWorkflow />
      </section>

      {/* Compliance commitments */}
      <section className="bg-surface-container-low">
        <div className="container-page py-space-lg lg:py-space-xl flex flex-col gap-space-lg">
          <SectionHeading
            icon="policy"
            eyebrow="Policies & Limits"
            title="How We Will Stay Within the Rules"
            description="The conditions we will operate under when using the WhatsApp Business Platform."
          />
          <Card className="p-space-md">
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              {complianceCommitments.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Icon name="check_circle" className="text-secondary text-[18px] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl">
            How we handle the customer information involved is described in our{' '}
            <Button to="/privacy-policy" variant="ghost" size="sm" className="px-0 underline">
              Privacy Policy
            </Button>
            .
          </p>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="container-page py-space-lg">
        <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col items-center text-center gap-space-sm">
          <div className="flex flex-col gap-1">
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              Questions about how we use WhatsApp?
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

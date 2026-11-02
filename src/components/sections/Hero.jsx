import { company } from '@/config/site';
import { registrationFacts } from '@/data/company';
import Button from '@/components/ui/Button';
import StatCard from '@/components/ui/StatCard';

export default function Hero() {
  return (
    <section className="container-page pt-space-lg pb-space-xl flex flex-col gap-space-md lg:gap-space-lg">
      {/* Business status pill */}
      <div className="inline-flex items-center gap-2 self-start bg-surface-container-low px-3 py-1.5 rounded-full shadow-sm">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
        <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-tight">
          {company.tagline}
        </span>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-gutter lg:items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              {company.tradeName}
            </span>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface tracking-tight">
              Customer Enquiries &amp; Business Communication on WhatsApp
            </h1>
          </div>

          <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant max-w-2xl">
            Aayushi Creations is a GST-registered proprietorship business based in the Govindpura
            industrial area of Bhopal, Madhya Pradesh. We plan to use Meta’s official WhatsApp
            Business Platform on our own business numbers to receive customer enquiries, manage
            leads and handle our customer conversations.
          </p>

          <p className="inline-flex items-center gap-1.5 self-start px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-outline" aria-hidden="true" />
            <span>WhatsApp integration: Planned Integration – Not Yet Live</span>
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs">
            <Button to="/contact" icon="arrow_forward" iconPosition="right">
              Contact Us
            </Button>
            <Button
              href="#credentials"
              variant="secondary"
              icon="description"
              iconClassName="text-outline"
            >
              View Business Details
            </Button>
          </div>
        </div>

        {/* Registration facts */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-space-sm pt-space-md lg:pt-0">
          {registrationFacts.map((fact) => (
            <StatCard key={fact.label} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
}

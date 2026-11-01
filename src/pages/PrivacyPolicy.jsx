import { company, legal } from '@/config/site';
import {
  dataCollected,
  processingBases,
  metaStandards,
  securityControls,
  dataRights,
  jumpLinks,
} from '@/data/privacy';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import ClauseSection from '@/components/ui/ClauseSection';
import usePageTitle from '@/hooks/usePageTitle';

export default function PrivacyPolicy() {
  usePageTitle(`Privacy Policy — ${company.name}`);

  return (
    <>
      {/* Status & compliance banner */}
      <div className="bg-surface-container-low">
        <div className="container-doc py-space-sm flex items-center justify-between gap-space-xs">
          <div className="flex items-center gap-space-xs min-w-0">
            <Icon name="gavel" filled className="text-secondary text-[18px] flex-shrink-0" />
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">
              Official Legal Disclosure
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
            <span className="font-label-sm text-label-sm text-secondary font-semibold whitespace-nowrap">
              Meta Compliance Verified
            </span>
          </div>
        </div>
      </div>

      <div className="container-doc py-space-md lg:py-space-lg flex flex-col gap-space-md">
        {/* Document header */}
        <Card className="p-space-md flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-on-surface-variant">
            <Icon name="schedule" className="text-[16px]" />
            <span className="font-label-sm text-label-sm tnum">
              Last Updated: {legal.lastUpdated}
            </span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-surface font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            This document outlines the standard operational privacy measures, data intake
            governance, and processing safeguards governing all corporate activities and technology
            integrations conducted by {company.name}.
          </p>
        </Card>

        {/* Legal entity identification */}
        <Card className="p-space-md flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs pb-space-xs">
            <Icon name="domain_verification" filled className="text-secondary text-[20px]" />
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              Legal Entity Identification
            </span>
          </div>
          <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Corporate Legal Name
              </span>
              <span className="font-semibold text-on-surface">
                {company.legalName} (“we”, “our”, or “us”)
              </span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Registered Office
              </span>
              <span className="text-on-surface">{company.address}</span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Commercial Registry / Jurisdiction
              </span>
              <span className="text-on-surface">Entity Registration active &amp; in good standing</span>
            </div>
          </div>
        </Card>

        {/* Jump navigation */}
        <nav
          aria-label="Jump to section"
          className="bg-surface-container-low p-space-sm rounded-xl flex items-center gap-space-xs overflow-x-auto"
        >
          <div className="flex items-center gap-2 min-w-max">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Jump to:</span>
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm hover:bg-surface-container whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Clause 1 */}
        <ClauseSection id="section-1" index="1" title="Information We Collect">
          <p className="font-body-md text-body-md text-on-surface-variant">
            {company.name} gathers only data necessary for legal identity confirmation, professional
            enterprise inquiries, and seamless communication platform delivery:
          </p>
          <div className="space-y-2">
            {dataCollected.map((item) => (
              <div
                key={item.title}
                className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm"
              >
                <Icon name={item.icon} className="text-secondary text-[20px] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    {item.title}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ClauseSection>

        {/* Clause 2 */}
        <ClauseSection id="section-2" index="2" title="How We Use Information">
          <p className="font-body-md text-body-md text-on-surface-variant">
            We utilize collected data in direct correspondence with lawful bases under standard
            institutional data compliance statutes:
          </p>
          <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
            {processingBases.map((item) => (
              <li key={item.title} className="flex items-start gap-2">
                <Icon name="check_circle" className="text-secondary text-[18px] mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-on-surface font-semibold">{item.title}</strong>{' '}
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </ClauseSection>

        {/* Clause 3 */}
        <ClauseSection
          id="section-3"
          index="3"
          title="Third-Party Disclosures & Meta/WhatsApp Integration"
          highlight
        >
          <div className="bg-surface-container-high p-space-sm rounded-lg flex items-center gap-space-sm">
            <Icon name="verified" className="text-secondary text-[24px] flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Absolute Non-Sale Declaration
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                We do not sell, rent, monetize, or trade any personal or enterprise data to data
                brokers, ad networks, or unvetted third parties under any circumstances.
              </span>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our enterprise infrastructure integrates strictly with certified cloud vendors and the{' '}
            <strong>Meta Business Platform (including WhatsApp Business Platform / Cloud API)</strong>
            . All processing complies strictly with the following operational standards:
          </p>
          <div className="space-y-2">
            {metaStandards.map((item) => (
              <div
                key={item.title}
                className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1"
              >
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  {item.title}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ClauseSection>

        {/* Clause 4 */}
        <ClauseSection id="section-4" index="4" title="Data Security & Storage Controls">
          <p className="font-body-md text-body-md text-on-surface-variant">
            {company.name} deploys multi-tiered physical, administrative, and technological safety
            measures to preserve the confidentiality and integrity of all retained records:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
            {securityControls.map((item) => (
              <div
                key={item.title}
                className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1"
              >
                <Icon name={item.icon} className="text-secondary text-[20px]" />
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  {item.title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Data retention is restricted to the active lifecycle of your commercial engagement,
            supplemented only by periods mandated by statutory audit obligations.
          </p>
        </ClauseSection>

        {/* Clause 5 */}
        <ClauseSection id="section-5" index="5" title="Your Rights & Data Requests">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Subject to applicable legal jurisdictions (including CCPA / CPRA and international
            frameworks), individuals maintain unequivocal rights regarding their personal data:
          </p>
          <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
            {dataRights.map((item) => (
              <div
                key={item.title}
                className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between gap-2"
              >
                <span className="font-semibold text-on-surface">{item.title}</span>
                <span className="text-secondary font-label-sm text-label-sm font-semibold whitespace-nowrap">
                  {item.action}
                </span>
              </div>
            ))}
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            To exercise any of these privileges, submit an authenticated request to our Data
            Protection Officer as detailed below. Requests are verified and fulfilled within 30
            calendar days at no charge.
          </p>
        </ClauseSection>

        {/* Clause 6 */}
        <ClauseSection id="section-6" index="6" title="Data Protection Officer & Inquiries">
          <p className="font-body-md text-body-md text-on-surface-variant">
            For inquiries regarding this policy, data processing practices, or compliance
            escalation, you may reach our designated Data Protection Officer via verified channels:
          </p>
          <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs font-body-sm text-body-sm">
            <a
              className="flex items-center gap-space-xs text-on-surface hover:text-secondary py-1"
              href={`mailto:${company.email}`}
            >
              <Icon name="alternate_email" className="text-secondary text-[20px] flex-shrink-0" />
              <span className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Direct DPO Email
                </span>
                <span className="font-semibold underline break-all">{company.email}</span>
              </span>
            </a>
            <div className="flex items-start gap-space-xs text-on-surface py-1">
              <Icon name="apartment" className="text-secondary text-[20px] mt-0.5 flex-shrink-0" />
              <span className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Postal Inquiries
                </span>
                <span>Attn: Data Protection Officer / Legal Department</span>
                <span>{company.legalName}</span>
                <span>{company.address}</span>
              </span>
            </div>
          </div>
        </ClauseSection>

        {/* Return action & verification footnote */}
        <Card className="p-space-md flex flex-col items-center text-center gap-space-sm">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
            <Icon name="verified" className="text-[24px]" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              Official Business Compliance Record
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Published by {company.name} for review and verification compliance.
            </span>
          </div>
          <Button to="/" variant="dark" icon="arrow_back" fullWidth className="h-10 mt-2">
            Return to Homepage
          </Button>
        </Card>
      </div>
    </>
  );
}

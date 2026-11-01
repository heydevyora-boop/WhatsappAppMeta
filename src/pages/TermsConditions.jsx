import { useState } from 'react';
import { company, legal, registry } from '@/config/site';
import { serviceCatalogue, prohibitedActivities } from '@/data/terms';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import ClauseSection from '@/components/ui/ClauseSection';
import usePageTitle from '@/hooks/usePageTitle';

const REFERENCE_SUMMARY = `${company.legalName} — Terms and Conditions (Effective ${legal.effectiveDate}). Address: ${company.address}. Contact: ${company.email}`;

export default function TermsConditions() {
  usePageTitle(`Terms & Conditions — ${company.name}`);
  const [copyLabel, setCopyLabel] = useState('Copy Reference');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(REFERENCE_SUMMARY);
      setCopyLabel('Copied!');
      setTimeout(() => setCopyLabel('Copy Reference'), 2000);
    } catch {
      setCopyLabel('Failed');
      setTimeout(() => setCopyLabel('Copy Reference'), 2000);
    }
  };

  return (
    <div className="container-doc py-space-md lg:py-space-lg flex flex-col gap-space-md">
      {/* Document header */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between gap-space-xs">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-secondary">
            <Icon name="verified" filled className="text-[15px]" />
            <span className="font-label-sm text-label-sm font-semibold tracking-wide uppercase">
              Official Regulatory Record
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap tnum">
            {registry.termsVersion}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-surface font-bold tracking-tight">
            Terms and Conditions of Service
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
            <Icon name="calendar_today" className="text-[16px] text-outline" />
            <span className="tnum">
              Effective Date:{' '}
              <strong className="text-on-surface font-medium">{legal.effectiveDate}</strong>
            </span>
          </p>
        </div>

        {/* Party identification */}
        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1.5">
          <div className="flex items-center gap-1 text-on-surface font-label-md text-label-md">
            <Icon name="assured_workload" className="text-[18px] text-secondary" />
            <span>Party Identification &amp; Corporate Entity</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            This binding agreement is entered between the user entity ("Customer", "You") and{' '}
            <strong className="text-on-surface font-medium">{company.legalName}</strong>, a legally
            registered entity organized under the applicable statutory regulations.
          </p>
          <div className="flex items-start gap-1.5 pt-1 text-on-surface-variant font-label-sm text-label-sm">
            <Icon name="pin_drop" className="text-[16px] text-outline flex-shrink-0" />
            <span>Principal Headquarters: {company.address}</span>
          </div>
        </div>
      </div>

      {/* Compliance status bar */}
      <div className="bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Icon name="policy" className="text-secondary text-[20px] flex-shrink-0" />
          <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
            Compliance Status: Meta Verified
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors whitespace-nowrap"
        >
          <Icon name="content_copy" className="text-[14px]" />
          <span>{copyLabel}</span>
        </button>
      </div>

      <div className="flex flex-col gap-space-sm">
        {/* Clause 1 */}
        <ClauseSection index="1" title="Acceptance of Terms">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            By accessing, integrating, establishing technical connections with, or utilizing any
            services provided by {company.name}, your commercial entity unconditionally accedes to
            these Terms and Conditions. These terms form an irrevocable, legally binding contract
            governing your enterprise’s utilization of our communications infrastructure, data
            transmission channels, and related digital tooling.
          </p>
          <div className="mt-1 p-2.5 rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-start gap-2">
            <Icon name="check_circle" className="text-[18px] text-secondary flex-shrink-0 mt-0.5" />
            <span>
              Explicit authorization is hereby confirmed by any user provisioning credentials or
              generating live API production tokens under registered enterprise accounts.
            </span>
          </div>
        </ClauseSection>

        {/* Clause 2 */}
        <ClauseSection index="2" title="Description of Services">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {company.name} engineers and delivers high-availability enterprise communications
            technologies. Our solutions encompass:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
            {serviceCatalogue.map((item) => (
              <div
                key={item.title}
                className="p-2.5 rounded bg-surface-container-low flex items-start gap-2"
              >
                <Icon name={item.icon} className="text-[18px] text-outline mt-0.5 flex-shrink-0" />
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

        {/* Clause 3 */}
        <ClauseSection index="3" title="User Responsibilities & Acceptable Use Policy">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {company.name} maintains an uncompromising, zero-tolerance posture regarding
            non-consensual communications, unlawful spam, consumer deception, and platform abuse.
          </p>
          <div className="flex flex-col gap-2 pt-1">
            <div className="p-2.5 rounded bg-surface-container-low flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
                <Icon name="verified_user" className="text-[16px] text-secondary" />
                <span>Meta &amp; WhatsApp Business Policy Adherence</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Customers must stringently obey the Meta Commercial Terms, WhatsApp Business
                Solution Policies, and relevant developer principles. Transmitting messages via{' '}
                {company.name} infrastructure without explicit, demonstrable prior opt-in consent is
                strictly forbidden.
              </p>
            </div>

            <div className="p-2.5 rounded bg-surface-container-low flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
                <Icon name="gavel" className="text-[16px] text-error" />
                <span>Prohibited Activities</span>
              </div>
              <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 pl-1">
                {prohibitedActivities.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <Icon name="cancel" className="text-[15px] text-error flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ClauseSection>

        {/* Clause 4 */}
        <ClauseSection index="4" title="Intellectual Property Rights">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            All proprietary software, API specifications, platform documentation, user interface
            designs, and algorithms proprietary to {company.name} remain the exclusive intellectual
            property of {company.name} and its licensors.
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Customer retains full ownership of its raw transmitted message content and enterprise
            business databases. Customer grants {company.name} a worldwide, non-exclusive,
            royalty-free license solely to route, format, cache, and transmit such customer payload
            data as needed to execute service delivery.
          </p>
        </ClauseSection>

        {/* Clause 5 */}
        <ClauseSection index="5" title="Limitation of Liability and Warranties">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Services are supplied on an "AS IS" and "AS AVAILABLE" operational basis. To the fullest
            extent legally permissible under relevant jurisdiction:
          </p>
          <div className="p-2.5 rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm space-y-1.5">
            <p>
              <strong className="text-on-surface font-medium">Disclaimer of Warranties:</strong>{' '}
              {company.name} explicitly disclaims all representations, explicit or statutory,
              including warranties of merchantability, uptime suitability for critical life-safety
              endpoints, and non-infringement.
            </p>
            <p>
              <strong className="text-on-surface font-medium">Liability Ceiling:</strong> Under no
              conditions shall {company.name} be held liable for incidental, special, punitive, or
              consequential operational damages, including data forfeiture or loss of business
              profitability. Total aggregate liability for any claims under these terms is strictly
              capped at the cumulative fees paid by the Customer in the three (3) calendar months
              preceding the alleged incident.
            </p>
          </div>
        </ClauseSection>

        {/* Clause 6 */}
        <ClauseSection index="6" title="Governing Law & Jurisdiction">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            These Terms and Conditions shall be governed by, construed, and enforced pursuant to the
            applicable domestic substantive laws of the jurisdiction in which {company.name} is
            registered, without giving effect to conflict of laws doctrines.
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Any formal legal action or judicial proceeding arising under or pertaining to this
            agreement shall be brought exclusively in the competent courts of that jurisdiction.
            Each party expressly submits to the exclusive personal jurisdiction of such tribunals.
          </p>
        </ClauseSection>

        {/* Clause 7 */}
        <ClauseSection index="7" title="Contact & Official Legal Notices">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Legal inquiries, formal statutory notifications, and compliance audit submissions must
            be transmitted directly to our designated compliance counsel via the registered channels
            below:
          </p>
          <div className="grid grid-cols-1 gap-2 pt-1">
            <div className="p-2.5 rounded bg-surface-container-low flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Icon name="mark_email_read" className="text-[18px] text-outline flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Legal Operations Email
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
                    {company.email}
                  </span>
                </div>
              </div>
              <a
                className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-medium whitespace-nowrap hover:bg-surface-container-highest hover:text-on-surface transition-colors"
                href={`mailto:${company.email}`}
              >
                Dispatch
              </a>
            </div>

            <div className="p-2.5 rounded bg-surface-container-low flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Icon name="support_agent" className="text-[18px] text-outline flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Corporate Telephone
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium truncate tnum">
                    {company.phone}
                  </span>
                </div>
              </div>
              <a
                className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-medium shadow-sm whitespace-nowrap hover:bg-surface-container transition-colors"
                href={`tel:${company.phoneHref}`}
              >
                Dial
              </a>
            </div>

            <div className="p-2.5 rounded bg-surface-container-low flex items-start gap-2">
              <Icon name="location_city" className="text-[18px] text-outline mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Official Mail Delivery
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  {company.legalName} — Legal Dept.
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {company.address}
                </span>
              </div>
            </div>
          </div>
        </ClauseSection>
      </div>

      {/* Verification footnote */}
      <div className="p-space-md rounded-xl bg-surface-container flex flex-col items-center text-center gap-2">
        <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
          <Icon name="done_all" filled className="text-[18px]" />
        </div>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Institutional Verification Record
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Authenticated and published for regulatory compliance &amp; Meta Partner validation.
          </span>
        </div>
      </div>
    </div>
  );
}

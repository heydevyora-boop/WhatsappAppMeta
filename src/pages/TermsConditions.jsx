import { company, gst, legal } from '@/config/site';
import { whatsappUsage, scopeExclusions, acceptableUse } from '@/data/terms';
import Icon from '@/components/ui/Icon';
import ClauseSection from '@/components/ui/ClauseSection';
import usePageTitle from '@/hooks/usePageTitle';

export default function TermsConditions() {
  usePageTitle(`Terms & Conditions — ${company.tradeName}`);

  return (
    <div className="container-doc py-space-md lg:py-space-lg flex flex-col gap-space-md">
      {/* Document header */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between gap-space-xs">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-secondary">
            <Icon name="gavel" filled className="text-[15px]" />
            <span className="font-label-sm text-label-sm font-semibold tracking-wide uppercase">
              Terms of Use
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap tnum">
            {legal.termsVersion}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-surface font-bold tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
            <Icon name="calendar_today" className="text-[16px] text-outline" />
            <span>
              Effective Date:{' '}
              <strong className="text-on-surface font-medium">{legal.effectiveDate}</strong>
            </span>
          </p>
        </div>

        {/* Business identification */}
        <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1.5">
          <div className="flex items-center gap-1 text-on-surface font-label-md text-label-md">
            <Icon name="storefront" className="text-[18px] text-secondary" />
            <span>Who These Terms Are With</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            These terms are between you and{' '}
            <strong className="text-on-surface font-medium">{company.tradeName}</strong>, a{' '}
            {company.constitution.toLowerCase()} business owned by {company.legalName} and
            registered under the Goods and Services Tax Act, 2017 (GSTIN{' '}
            <span className="tnum">{gst.gstin}</span>).
          </p>
          <div className="flex items-start gap-1.5 pt-1 text-on-surface-variant font-label-sm text-label-sm">
            <Icon name="pin_drop" className="text-[16px] text-outline flex-shrink-0" />
            <span>Principal Place of Business: {company.address}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm">
        {/* Clause 1 */}
        <ClauseSection index="1" title="Acceptance of These Terms">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            By using this website, or by contacting {company.tradeName} through this website, by
            email, by phone or on WhatsApp, you accept these terms. If you do not agree with them,
            please do not use the website or contact us through these channels.
          </p>
        </ClauseSection>

        {/* Clause 2 */}
        <ClauseSection index="2" title="What This Website Is">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This website provides information about {company.tradeName} and gives customers a way to
            get in touch with us. It is not a software product, a platform or a service that other
            businesses can sign up for.
          </p>
          <div className="flex flex-col gap-2 pt-1">
            <div className="p-2.5 rounded bg-surface-container-low flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
                <Icon name="info" className="text-[16px] text-secondary" />
                <span>To Be Clear</span>
              </div>
              <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 pl-1">
                {scopeExclusions.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <Icon name="remove" className="text-[15px] text-outline flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ClauseSection>

        {/* Clause 3 */}
        <ClauseSection index="3" title="WhatsApp &amp; Business Communication">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {company.tradeName} uses Meta’s WhatsApp Business Platform (Cloud API) for its own
            internal customer communication — receiving enquiries, managing customer leads, holding
            conversations with customers and sending approved message templates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
            {whatsappUsage.map((item) => (
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
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            WhatsApp is operated by Meta. Your use of WhatsApp is also governed by Meta’s and
            WhatsApp’s own terms and policies, which are separate from these terms. Nothing on this
            website should be read as a statement that Meta has approved, verified, endorsed or
            partnered with {company.tradeName}.
          </p>
        </ClauseSection>

        {/* Clause 4 */}
        <ClauseSection index="4" title="Acceptable Use">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            When you use this website or contact us, please keep to the following:
          </p>
          <div className="p-2.5 rounded bg-surface-container-low">
            <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 pl-1">
              {acceptableUse.map((item) => (
                <li key={item} className="flex items-start gap-1.5">
                  <Icon name="cancel" className="text-[15px] text-error flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ClauseSection>

        {/* Clause 5 */}
        <ClauseSection index="5" title="Content & Intellectual Property">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            The text, images and design on this website belong to {company.tradeName} unless stated
            otherwise. Please do not copy or reuse them for commercial purposes without our written
            permission.
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Any information you send us in an enquiry remains yours. You give us permission to use
            it only so far as we need to in order to respond to you and serve you as a customer, as
            described in our Privacy Policy.
          </p>
        </ClauseSection>

        {/* Clause 6 */}
        <ClauseSection index="6" title="Accuracy & Liability">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We try to keep the information on this website correct and up to date, but we do not
            guarantee that it is complete or free of errors, or that the website will always be
            available without interruption.
          </p>
          <div className="p-2.5 rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
            <p>
              To the extent permitted by applicable law, {company.tradeName} is not liable for any
              indirect or consequential loss arising from your use of this website. Nothing in these
              terms limits any liability that cannot be limited under applicable law.
            </p>
          </div>
        </ClauseSection>

        {/* Clause 7 */}
        <ClauseSection index="7" title="Governing Law">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            These terms are governed by the laws of India. Any dispute arising out of them will be
            subject to the jurisdiction of the courts at Bhopal, {company.state}.
          </p>
        </ClauseSection>

        {/* Clause 8 */}
        <ClauseSection index="8" title="Contact Us">
          <p className="font-body-md text-body-md text-on-surface-variant">
            If you have a question about these terms, please contact us:
          </p>
          <div className="grid grid-cols-1 gap-2 pt-1">
            <div className="p-2.5 rounded bg-surface-container-low flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Icon name="mark_email_read" className="text-[18px] text-outline flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Business Email
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
                Email
              </a>
            </div>

            <div className="p-2.5 rounded bg-surface-container-low flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Icon name="call" className="text-[18px] text-outline flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Business Phone
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
                Call
              </a>
            </div>

            <div className="p-2.5 rounded bg-surface-container-low flex items-start gap-2">
              <Icon name="location_city" className="text-[18px] text-outline mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Registered Business Address
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  {company.tradeName}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {company.address}
                </span>
              </div>
            </div>
          </div>
        </ClauseSection>
      </div>

      {/* Footnote */}
      <div className="p-space-md rounded-xl bg-surface-container flex flex-col items-center text-center gap-2">
        <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
          <Icon name="description" filled className="text-[18px]" />
        </div>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Changes to These Terms
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            We may update these terms from time to time. The effective date above shows when they
            were last changed.
          </span>
        </div>
      </div>
    </div>
  );
}

import { company, gst, legal } from '@/config/site';
import {
  dataCollectedToday,
  dataPlannedViaCloudApi,
  processingPurposes,
  thirdParties,
  optOutMethods,
  dataRights,
  jumpLinks,
} from '@/data/privacy';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import ClauseSection from '@/components/ui/ClauseSection';
import usePageTitle from '@/hooks/usePageTitle';

export default function PrivacyPolicy() {
  usePageTitle(`Privacy Policy — ${company.tradeName}`);

  return (
    <>
      {/* Document banner */}
      <div className="bg-surface-container-low">
        <div className="container-doc py-space-sm flex items-center justify-between gap-space-xs">
          <div className="flex items-center gap-space-xs min-w-0">
            <Icon name="gavel" filled className="text-secondary text-[18px] flex-shrink-0" />
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">
              Privacy Policy
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
            <span className="font-label-sm text-label-sm text-secondary font-semibold whitespace-nowrap tnum">
              GSTIN: {gst.gstin}
            </span>
          </div>
        </div>
      </div>

      <div className="container-doc py-space-md lg:py-space-lg flex flex-col gap-space-md">
        {/* Document header */}
        <Card className="p-space-md flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-on-surface-variant">
            <Icon name="schedule" className="text-[16px]" />
            <span className="font-label-sm text-label-sm">
              Last Updated: {legal.lastUpdated}
            </span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-surface font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            This policy explains what information {company.tradeName} collects from customers and
            visitors, why we collect it, how we store and share it, and the choices you have. It
            covers enquiries made through this website, by phone, by email and over WhatsApp.
          </p>
        </Card>

        {/* Who we are */}
        <Card className="p-space-md flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs pb-space-xs">
            <Icon name="storefront" className="text-secondary text-[20px]" />
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              Who We Are
            </span>
          </div>
          <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Business Name
              </span>
              <span className="font-semibold text-on-surface">
                {company.tradeName} (“we”, “our”, or “us”)
              </span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Legal Name &amp; Constitution
              </span>
              <span className="text-on-surface">
                {company.legalName} — {company.constitution}
              </span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Principal Place of Business
              </span>
              <span className="text-on-surface">{company.address}</span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">GSTIN</span>
              <span className="text-on-surface tnum">{gst.gstin}</span>
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
        <ClauseSection id="section-1" index="1" title="Information We Collect Today">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Through the channels we use today — phone, email and this website — we collect only
            what we need in order to answer your enquiry and serve you as a customer:
          </p>
          <div className="space-y-2">
            {dataCollectedToday.map((item) => (
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
        <ClauseSection id="section-2" index="2" title="Why We Collect It">
          <p className="font-body-md text-body-md text-on-surface-variant">
            We use the information you give us for the following purposes, and nothing else:
          </p>
          <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
            {processingPurposes.map((item) => (
              <li key={item.title} className="flex items-start gap-2">
                <Icon name="check_circle" className="text-secondary text-[18px] mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-on-surface font-semibold">{item.title}</strong>{' '}
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
          <div className="p-space-sm rounded-lg bg-surface-container-high flex items-start gap-space-sm">
            <Icon name="block" className="text-secondary text-[20px] flex-shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                We Do Not Sell Your Information
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                We do not sell, rent or trade your personal information, and we do not share it with
                advertisers or data brokers.
              </span>
            </div>
          </div>
        </ClauseSection>

        {/* Clause 3 */}
        <ClauseSection
          id="section-3"
          index="3"
          title="Planned: WhatsApp Business Platform (Cloud API)"
          highlight
        >
          <p className="inline-flex items-center gap-1.5 self-start px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-outline" aria-hidden="true" />
            <span>Planned Integration – Not Yet Live</span>
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We plan to use Meta’s official WhatsApp Business Platform (Cloud API) on our own
            business numbers. That integration is <strong>not live</strong>, and none of the
            information described in this clause is being collected through the Cloud API today.
            This clause is published in advance so that you know what would change.
          </p>
          <div className="space-y-2">
            {dataPlannedViaCloudApi.map((item) => (
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
          <div className="p-space-sm rounded-lg bg-surface-container-high flex items-start gap-space-sm">
            <Icon name="update" className="text-secondary text-[20px] flex-shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                We Will Update This Page First
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                If the integration goes live, we will update this policy and change the date shown
                at the top before we begin collecting this information.
              </span>
            </div>
          </div>
        </ClauseSection>

        {/* Clause 4 */}
        <ClauseSection id="section-4" index="4" title="Who We Share Information With">
          <p className="font-body-md text-body-md text-on-surface-variant">
            We share information only with the service providers we need in order to operate, and
            only for that purpose:
          </p>
          <div className="space-y-2">
            {thirdParties.map((item) => (
              <div
                key={item.title}
                className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1"
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    {item.title}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded whitespace-nowrap">
                    {item.status}
                  </span>
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ClauseSection>

        {/* Clause 5 */}
        <ClauseSection id="section-5" index="5" title="Storage, Retention & Deletion">
          <div className="space-y-2">
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
              <Icon name="folder_managed" className="text-secondary text-[20px]" />
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                How we store it
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Enquiries and customer records are kept in the business systems we use to manage
                customer communication. We limit access to the people in our business who need it
                for their work.
              </span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
              <Icon name="history" className="text-secondary text-[20px]" />
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                How long we keep it
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                We keep your information while we are dealing with your enquiry and for as long as
                you remain our customer. Some records must be kept longer because Indian tax and
                business law requires it. Where that does not apply, we delete information once we
                no longer need it.
              </span>
            </div>
          </div>

          <div className="p-space-sm rounded-lg bg-surface-container-high flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              How to ask us to delete your information
            </span>
            <ol className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5 list-none">
              <li className="flex items-start gap-2">
                <span className="font-label-sm text-label-sm text-outline tnum mt-0.5">1.</span>
                <span>
                  Email us at{' '}
                  <a className="text-secondary underline break-all" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>{' '}
                  or call us on{' '}
                  <a className="text-secondary underline tnum" href={`tel:${company.phoneHref}`}>
                    {company.phone}
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-label-sm text-label-sm text-outline tnum mt-0.5">2.</span>
                <span>
                  Tell us what you would like deleted — for example your contact details, or your
                  enquiry history.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-label-sm text-label-sm text-outline tnum mt-0.5">3.</span>
                <span>
                  We may ask you to confirm your identity first, so that we do not act on someone
                  else’s instruction about your information.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-label-sm text-label-sm text-outline tnum mt-0.5">4.</span>
                <span>
                  We will delete what we can and tell you if anything has to be kept because the law
                  requires it.
                </span>
              </li>
            </ol>
          </div>
        </ClauseSection>

        {/* Clause 6 */}
        <ClauseSection id="section-6" index="6" title="Your Choices & Rights">
          <p className="font-body-md text-body-md text-on-surface-variant">
            In relation to the information we hold about you, you can:
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

          <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              Asking us to stop messaging you
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Replying STOP is not the only way. You can ask us to stop in any of these ways, and we
              will respect any reasonable request however it reaches us:
            </p>
            <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1">
              {optOutMethods.map((method) => (
                <li key={method} className="flex items-start gap-2">
                  <Icon name="check" className="text-secondary text-[14px] mt-1 flex-shrink-0" />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </ClauseSection>

        {/* Clause 7 */}
        <ClauseSection id="section-7" index="7" title="How to Contact Us About Privacy">
          <p className="font-body-md text-body-md text-on-surface-variant">
            If you have a question about this policy or about the information we hold, please get in
            touch:
          </p>
          <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs font-body-sm text-body-sm">
            <a
              className="flex items-center gap-space-xs text-on-surface hover:text-secondary py-1"
              href={`mailto:${company.email}`}
            >
              <Icon name="alternate_email" className="text-secondary text-[20px] flex-shrink-0" />
              <span className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Privacy Enquiries
                </span>
                <span className="font-semibold underline break-all">{company.email}</span>
              </span>
            </a>
            <a
              className="flex items-center gap-space-xs text-on-surface hover:text-secondary py-1"
              href={`tel:${company.phoneHref}`}
            >
              <Icon name="call" className="text-secondary text-[20px] flex-shrink-0" />
              <span className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Phone</span>
                <span className="font-semibold tnum">{company.phone}</span>
              </span>
            </a>
            <div className="flex items-start gap-space-xs text-on-surface py-1">
              <Icon name="apartment" className="text-secondary text-[20px] mt-0.5 flex-shrink-0" />
              <span className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">By Post</span>
                <span>{company.tradeName}</span>
                {company.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </div>
          </div>
        </ClauseSection>

        {/* Footnote */}
        <Card className="p-space-md flex flex-col items-center text-center gap-space-sm">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
            <Icon name="shield" className="text-[24px]" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              Changes to This Policy
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              If we change how we handle your information, we will update this page and change the
              date shown at the top.
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

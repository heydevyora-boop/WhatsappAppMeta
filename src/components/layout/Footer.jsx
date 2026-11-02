import { Link } from 'react-router-dom';
import { company, gst, legalLinks } from '@/config/site';
import Icon from '@/components/ui/Icon';
import ContactLine from '@/components/ui/ContactLine';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-lg pb-20 md:pb-0">
      <div className="container-page py-space-lg lg:py-space-xl flex flex-col gap-space-md">
        <div className="md:flex md:items-start md:justify-between md:gap-space-xl">
          <div className="flex flex-col gap-space-md md:max-w-md">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Icon name="storefront" className="text-secondary text-[20px]" />
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {company.tradeName}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-semibold whitespace-nowrap">
                GST Registered
              </span>
            </div>

            {/* Statutory business identification */}
            <div className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
              <p>A {company.constitution} Business</p>
              <p>
                Legal Name:{' '}
                <span className="text-on-surface font-medium">{company.legalName}</span>
              </p>
              <p>
                GSTIN: <span className="text-on-surface font-medium tnum">{gst.gstin}</span>
              </p>
            </div>

            <address className="not-italic space-y-1 font-body-sm text-body-sm text-on-surface-variant">
              <ContactLine icon="location_on" align="start">
                {company.address}
              </ContactLine>
              <ContactLine icon="call" href={`tel:${company.phoneHref}`}>
                {company.phone}
              </ContactLine>
              <ContactLine icon="mail" href={`mailto:${company.email}`}>
                {company.email}
              </ContactLine>
            </address>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-space-md pt-space-md md:pt-0 font-label-md text-label-md"
          >
            {legalLinks.map((link, index) => (
              <span key={link.path} className="flex items-center gap-space-md">
                <Link className="text-on-surface-variant hover:text-on-surface" to={link.path}>
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-outline-variant" aria-hidden="true">
                    •
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>

        <p className="font-label-sm text-label-sm text-outline">
          © {new Date().getFullYear()} {company.tradeName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

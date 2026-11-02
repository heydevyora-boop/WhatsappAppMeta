import { useState } from 'react';
import { Link } from 'react-router-dom';
import { company } from '@/config/site';
import Card from '@/components/ui/Card';
import FormField from '@/components/ui/FormField';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

/**
 * Demonstration enquiry form — FRONTEND ONLY.
 *
 * There is no backend, no API endpoint and no email delivery behind this form.
 * Nothing typed here is transmitted or stored anywhere; the values stay in
 * component state in the visitor's own browser until the page is closed.
 * The UI must therefore never suggest that a message has been sent.
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [showNotice, setShowNotice] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setShowNotice(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowNotice(true);
  };

  return (
    <Card elevated className="p-space-md flex flex-col gap-space-md">
      {/* Up-front disclosure, before any field is filled in */}
      <div className="p-space-sm rounded-lg bg-surface-container-high flex items-start gap-space-sm">
        <Icon name="info" className="text-secondary text-[20px] flex-shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Demonstration form — not connected
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            This form is part of the website design and is not connected to a mailbox or any
            service. Nothing you type here is sent to us or saved. To reach us, please email{' '}
            <a className="text-secondary underline break-all" href={`mailto:${company.email}`}>
              {company.email}
            </a>{' '}
            or call{' '}
            <a className="text-secondary underline tnum" href={`tel:${company.phoneHref}`}>
              {company.phone}
            </a>
            .
          </p>
        </div>
      </div>

      <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
          <FormField
            id="fullName"
            label="Full Name"
            placeholder="Your full name"
            autoComplete="name"
            value={values.fullName}
            onChange={handleChange}
          />
          <FormField
            id="email"
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="+91 00000 00000"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
        />

        <FormField
          id="message"
          label="Your Enquiry"
          as="textarea"
          rows={4}
          placeholder="Tell us about your enquiry..."
          value={values.message}
          onChange={handleChange}
        />

        <Button type="submit" icon="visibility" variant="secondary" className="mt-2" fullWidth>
          Preview (Demo — Does Not Send)
        </Button>

        <div className="flex items-start gap-2 pt-1 text-on-surface-variant">
          <Icon name="shield" className="text-secondary text-[16px] mt-0.5 flex-shrink-0" />
          <p className="font-label-sm text-label-sm">
            Because nothing is submitted, no information from this form is collected. How we handle
            information you send us by email or phone is described in our{' '}
            <Link className="underline hover:text-on-surface" to="/privacy-policy">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </form>

      {showNotice && (
        <div
          role="status"
          aria-live="polite"
          className="p-3 bg-surface-container rounded-lg flex items-start gap-2"
        >
          <Icon name="info" className="text-secondary text-[20px] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              Nothing was sent
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              This demonstration form has no backend, so your message was not delivered. Please
              email {company.email} or call {company.phone} to reach us.
            </span>
          </div>
        </div>
      )}
    </Card>
  );
}

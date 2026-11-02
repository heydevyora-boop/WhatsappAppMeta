import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@/components/ui/Card';
import FormField from '@/components/ui/FormField';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

const EMPTY_FORM = {
  fullName: '',
  workEmail: '',
  phoneNum: '',
  messageText: '',
};

/**
 * Verification intake form. UI only — no backend is wired up; submitting
 * clears the fields and surfaces the confirmation panel.
 * Point `handleSubmit` at your endpoint when a backend becomes available.
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setValues(EMPTY_FORM);
  };

  return (
    <Card elevated className="p-space-md flex flex-col gap-space-md">
      <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit} noValidate={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
          <FormField
            id="fullName"
            label="Full Name"
            placeholder="Your full name"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={handleChange}
          />
          <FormField
            id="workEmail"
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            value={values.workEmail}
            onChange={handleChange}
          />
        </div>

        <FormField
          id="phoneNum"
          label="Phone Number"
          type="tel"
          placeholder="+91 00000 00000"
          autoComplete="tel"
          required
          value={values.phoneNum}
          onChange={handleChange}
        />

        <FormField
          id="messageText"
          label="Your Enquiry"
          as="textarea"
          rows={4}
          placeholder="Tell us about your enquiry..."
          required
          value={values.messageText}
          onChange={handleChange}
        />

        <Button type="submit" icon="send" className="mt-2" fullWidth>
          Send Enquiry
        </Button>

        <div className="flex items-start gap-2 pt-1 text-on-surface-variant">
          <Icon name="security" className="text-secondary text-[16px] mt-0.5 flex-shrink-0" />
          <p className="font-label-sm text-label-sm">
            The details you send are used only to respond to your enquiry. See our{' '}
            <Link className="underline hover:text-on-surface" to="/privacy-policy">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </form>

      {submitted && (
        <div
          role="status"
          aria-live="polite"
          className="p-3 bg-surface-container rounded-lg flex items-center gap-2"
        >
          <Icon name="check_circle" className="text-secondary text-[20px] flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              Message Dispatched Successfully
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Thank you for getting in touch. We will respond to your enquiry.
            </span>
          </div>
        </div>
      )}
    </Card>
  );
}

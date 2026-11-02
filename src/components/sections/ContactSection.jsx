import SectionHeading from '@/components/ui/SectionHeading';
import ContactTouchpoints from './ContactTouchpoints';
import ContactForm from './ContactForm';

/** Inquiries & review correspondence block, shared by Home and Contact. */
export default function ContactSection({ showHeading = true }) {
  return (
    <section id="contact" className="container-page py-space-lg lg:py-space-xl flex flex-col gap-space-lg scroll-mt-20">
      {showHeading && (
        <SectionHeading
          icon="support_agent"
          eyebrow="Get in Touch"
          title="Contact Aayushi Creations"
          description="Send us an enquiry and we will get back to you at the contact details you provide."
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-gutter lg:items-start">
        <div className="lg:col-span-5">
          <ContactTouchpoints />
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

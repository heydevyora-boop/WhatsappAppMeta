/**
 * Privacy Policy content.
 * Describes what the business actually does with customer information.
 * No certification or compliance-standard claims.
 */

/** Categories of information collected (Clause 1). */
export const dataCollected = [
  {
    icon: 'contact_mail',
    title: 'Contact Information',
    description:
      'Your name, phone number (including your WhatsApp number) and email address, when you share them with us through an enquiry, a WhatsApp message or in the course of doing business with us.',
  },
  {
    icon: 'chat',
    title: 'WhatsApp Messages & Communication Data',
    description:
      'The content of the WhatsApp messages you exchange with us, along with message timestamps and delivery status, so that we can read, answer and keep track of your conversation.',
  },
  {
    icon: 'inventory_2',
    title: 'Enquiry & Order Details',
    description:
      'What you ask us about, the products or services you are interested in, and any notes we record while handling your enquiry or order.',
  },
  {
    icon: 'devices',
    title: 'Basic Technical Information',
    description:
      'Standard information your browser sends when you visit this website, such as your IP address and browser type, used to keep the site working and secure.',
  },
];

/** Why the information is collected (Clause 2). */
export const processingPurposes = [
  {
    title: 'Answering Your Enquiry:',
    description: 'Replying to the questions you send us by WhatsApp, email, phone or this website.',
  },
  {
    title: 'Managing Customer Leads:',
    description:
      'Recording and following up on enquiries so that we do not lose track of a customer request.',
  },
  {
    title: 'Customer Communication & Service:',
    description:
      'Sending order updates, appointment or delivery information, and answering support questions.',
  },
  {
    title: 'Business Records:',
    description:
      'Keeping the records we are required to keep as a GST-registered business in India.',
  },
];

/** Third parties involved in processing (Clause 4). */
export const thirdParties = [
  {
    title: 'Meta — WhatsApp Business Platform',
    description:
      'We use the WhatsApp Business Platform (Cloud API) to send and receive messages on our own business numbers. Messages you send us pass through Meta’s systems and are handled under Meta’s and WhatsApp’s own terms and privacy policies.',
  },
  {
    title: 'Website & IT Service Providers',
    description:
      'Providers who host this website and the software we use to manage enquiries. They may process information only to provide that service to us.',
  },
  {
    title: 'When the Law Requires It',
    description:
      'We may disclose information where we are required to do so by applicable Indian law, or by a competent court or government authority.',
  },
];

/** Rights available to customers (Clause 6). */
export const dataRights = [
  { title: 'Ask what we hold', action: 'Request a copy' },
  { title: 'Correct your details', action: 'Fix inaccuracies' },
  { title: 'Ask us to delete', action: 'Erase records' },
  { title: 'Stop receiving messages', action: 'Reply STOP' },
];

/** Jump-navigation shortcuts. */
export const jumpLinks = [
  { href: '#section-1', label: '1. What We Collect' },
  { href: '#section-3', label: '3. WhatsApp' },
  { href: '#section-5', label: '5. Retention' },
  { href: '#section-7', label: '7. Contact Us' },
];

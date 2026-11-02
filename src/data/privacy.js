/**
 * Privacy Policy content.
 *
 * Two things must stay true here:
 *  1. Information collected TODAY is kept separate from information that would
 *     only be collected once the WhatsApp Cloud API integration goes live.
 *  2. No invented retention periods, response deadlines or security guarantees.
 */

/** Information collected today, through existing channels (Clause 1). */
export const dataCollectedToday = [
  {
    icon: 'contact_mail',
    title: 'Contact Information',
    description:
      'Your name, phone number and email address, when you share them with us by phone, by email, or in the course of doing business with us.',
  },
  {
    icon: 'inventory_2',
    title: 'Enquiry Details',
    description:
      'What you ask us about, the products or services you are interested in, and any notes we record while handling your enquiry or order.',
  },
  {
    icon: 'devices',
    title: 'Basic Website Information',
    description:
      'Standard information your browser sends when you visit this website, such as your IP address and browser type.',
  },
];

/**
 * Information that would be collected only once the WhatsApp Business Platform
 * integration is live (Clause 3). None of this is collected today.
 */
export const dataPlannedViaCloudApi = [
  {
    icon: 'chat',
    title: 'WhatsApp Message Content',
    description:
      'The messages you exchange with our business WhatsApp number, so that we can read and answer them.',
  },
  {
    icon: 'schedule',
    title: 'Message Timestamps & Status',
    description:
      'When a message was sent, and whether it was delivered or read, so that we know whether you received our reply.',
  },
  {
    icon: 'ads_click',
    title: 'Advertisement Referral Information',
    description:
      'Where the platform provides it, which of our advertisements a conversation started from.',
  },
];

/** Why the information is collected (Clause 2). */
export const processingPurposes = [
  {
    title: 'Answering Your Enquiry:',
    description: 'Replying to the questions you send us by phone, email or this website.',
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
    title: 'Website & IT Service Providers',
    status: 'Current',
    description:
      'Providers who host this website and the software we use to manage enquiries. They process information only to provide that service to us.',
  },
  {
    title: 'Meta — WhatsApp Business Platform',
    status: 'Planned',
    description:
      'If and when our WhatsApp Business Platform integration goes live, messages you send to our business WhatsApp number would pass through Meta’s systems and would also be handled under Meta’s and WhatsApp’s own terms and privacy policies.',
  },
  {
    title: 'When the Law Requires It',
    status: 'Current',
    description:
      'We may disclose information where we are required to do so by applicable Indian law, or by a competent court or government authority.',
  },
];

/** Ways to ask us to stop messaging (Clause 6). */
export const optOutMethods = [
  'Reply STOP to a WhatsApp message from us.',
  'Tell us by phone on our business number.',
  'Email us and ask to be removed.',
  'Tell any member of our team in the course of a conversation.',
];

/** Rights available to customers (Clause 6). */
export const dataRights = [
  { title: 'Ask what we hold', action: 'Request a copy' },
  { title: 'Correct your details', action: 'Fix inaccuracies' },
  { title: 'Ask us to delete', action: 'Request deletion' },
  { title: 'Stop receiving messages', action: 'Ask us to stop' },
];

/** Jump-navigation shortcuts. */
export const jumpLinks = [
  { href: '#section-1', label: '1. What We Collect' },
  { href: '#section-3', label: '3. Planned WhatsApp' },
  { href: '#section-5', label: '5. Deletion' },
  { href: '#section-7', label: '7. Contact Us' },
];

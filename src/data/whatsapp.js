/**
 * WhatsApp Business Platform integration content.
 *
 * This describes INTENDED usage. The integration is not live and has not been
 * approved. Nothing here may state or imply that Meta has approved, verified,
 * endorsed or partnered with Aayushi Creations, and nothing may promise
 * unlimited or bulk messaging.
 */

/** Capability groups shown as cards. */
export const capabilities = [
  {
    id: 'cloud-api',
    icon: 'cloud_sync',
    title: 'Official WhatsApp Cloud API Integration',
    description:
      'We intend to connect our own eligible WhatsApp Business phone numbers using Meta’s official WhatsApp Business Platform (Cloud API). Meta is the official provider of the WhatsApp Business Platform.',
    points: [
      'Only WhatsApp numbers owned by Aayushi Creations would be connected.',
      'Onboarding through Meta’s official Cloud API rather than a third-party reseller.',
      'We are building our own private dashboard instead of using a third-party platform.',
    ],
  },
  {
    id: 'ads-leads',
    icon: 'ads_click',
    title: 'Meta Ads Lead Management',
    description:
      'Customer enquiries that begin from our own Click-to-WhatsApp advertisements on Facebook and Instagram would arrive in our internal dashboard alongside every other enquiry.',
    points: [
      'Enquiries started from our own Click-to-WhatsApp advertisements.',
      'Where the platform provides it, the advertisement referral information attached to the message.',
      'Each enquiry recorded as a lead and followed up by our team.',
    ],
  },
  {
    id: 'inbox',
    icon: 'inbox',
    title: 'Centralized WhatsApp Inbox',
    description:
      'Incoming and outgoing WhatsApp conversations would be handled from a single company dashboard, so that no customer message is missed.',
    points: [
      'Receive customer messages as they arrive.',
      'View the full conversation history for a customer.',
      'Reply to customers directly from the dashboard.',
      'Manage multiple company-owned WhatsApp numbers in one place.',
      'Organise and assign customer conversations within our team.',
    ],
  },
  {
    id: 'campaigns',
    icon: 'campaign',
    title: 'WhatsApp Marketing Campaigns',
    description:
      'We intend to use official WhatsApp messaging for marketing and customer communication, within the rules Meta sets for the platform.',
    points: [
      'Message templates submitted to Meta for approval before they are used.',
      'Campaigns sent only to eligible contacts who have opted in.',
      'Audience segmentation based on our own customer records.',
      'Campaign scheduling for a chosen date and time.',
      'Message delivery and status tracking for what we send.',
    ],
    note: 'We do not send unlimited or bulk unsolicited messages. Campaigns are subject to Meta’s messaging policies, template approval, per-number messaging limits and the conversation pricing Meta applies.',
  },
  {
    id: 'automation',
    icon: 'smart_toy',
    title: 'Automated Messaging & Chatbot',
    description:
      'Routine replies would be automated so that customers get an immediate response, with a person always available to take over.',
    points: [
      'An automated welcome message when a customer first writes to us.',
      'Answers to frequently asked questions.',
      'Automated responses to common enquiries.',
      'Basic lead qualification questions.',
      'Follow-up reminders on enquiries that are still open.',
      'Handover to a human member of our team at any point in the conversation.',
    ],
  },
  {
    id: 'data',
    icon: 'database',
    title: 'Customer Data Management',
    description:
      'Customer contact details, conversations, enquiry records and message statuses would be stored in our own internal CRM database.',
    points: [
      'Access limited to the people in our business who need it for their work.',
      'Held on systems we control, protected by account-level access controls.',
      'Kept only as long as we need it for the customer relationship and for statutory records.',
      'Deleted on request, as set out in our Privacy Policy.',
    ],
  },
];

/** Integration workflow, top to bottom. */
export const workflowSteps = [
  {
    icon: 'ads_click',
    title: 'Facebook / Instagram Ads',
    description: 'A customer taps a Click-to-WhatsApp advertisement we have run.',
  },
  {
    icon: 'chat',
    title: 'Customer WhatsApp Enquiry',
    description: 'The customer sends a message to our business WhatsApp number.',
  },
  {
    icon: 'cloud',
    title: 'Meta Official WhatsApp Cloud API',
    description: 'The message is delivered through Meta’s WhatsApp Business Platform.',
  },
  {
    icon: 'webhook',
    title: 'Company Backend / Webhook',
    description: 'Our backend receives the message event from the platform webhook.',
  },
  {
    icon: 'database',
    title: 'Internal CRM Database',
    description: 'The contact, conversation and enquiry record are stored in our own database.',
  },
  {
    icon: 'dashboard',
    title: 'Aayushi Creations WhatsApp Dashboard',
    description: 'Our team sees the enquiry in the centralized company inbox.',
  },
  {
    icon: 'forum',
    title: 'Customer Communication, Campaigns & Automation',
    description: 'We reply, follow up, and send approved templates to opted-in customers.',
  },
];

/** Commitments governing how the platform would be used. */
export const complianceCommitments = [
  'Meta is the official provider of the WhatsApp Business Platform. Aayushi Creations is not a Meta Partner, and makes no claim of Meta approval, verification or endorsement.',
  'We message only people who have contacted us or who have opted in to hear from us.',
  'Marketing templates are submitted to Meta for approval before they are used.',
  'Anyone can reply STOP at any time, and we stop messaging them.',
  'Messaging volume is subject to the limits Meta applies per number. We make no claim of unlimited messaging.',
  'Conversation pricing set by Meta applies to the messages we send.',
  'The platform would be used for our own business operations only. We do not provide WhatsApp API services, onboarding or subscription plans to other businesses.',
];

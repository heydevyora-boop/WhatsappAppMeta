/**
 * Business content.
 *
 * Every statement here must be verifiable from the GST Registration
 * Certificate or from how the business actually operates. Do not add
 * certifications, uptime figures, SLAs or partner claims.
 */

/** Registration facts shown as tiles in the hero. */
export const registrationFacts = [
  {
    icon: 'receipt_long',
    label: 'GST Registered',
    value: '23AEVPG0463J1ZE',
    // 15-character identifier: step down from the headline size so it fits the tile.
    valueClassName: 'font-label-lg text-label-lg',
    caption: 'Regular taxpayer, Madhya Pradesh',
  },
  {
    icon: 'storefront',
    label: 'Proprietorship',
    value: 'Since 2018',
    caption: 'Registered 26/07/2018',
  },
];

/** What the business is and how it uses WhatsApp. */
export const businessOverview = [
  {
    icon: 'domain',
    title: 'Business & Legal Standing',
    description:
      'Aayushi Creations is a proprietorship business owned by Ashok Kumar Gupta, registered under the Goods and Services Tax Act, 2017 and operating from the Govindpura industrial area of Bhopal, Madhya Pradesh.',
  },
  {
    icon: 'chat',
    title: 'Planned Use of WhatsApp',
    description:
      'We plan to use Meta’s official WhatsApp Business Platform on our own business numbers only — to receive customer enquiries, manage leads, hold customer conversations and send message templates once approved. This integration is not yet live.',
  },
  {
    icon: 'lock',
    title: 'Customer Information',
    description:
      'Customer contact details and conversation history are used solely to answer enquiries and support our own customers. We do not sell customer data or share it for advertising.',
  },
];

/** Operating principles for our WhatsApp messaging. */
export const messagingPractices = [
  {
    icon: 'how_to_reg',
    title: 'Opt-In Messaging Only',
    description:
      'We would message only people who have contacted us or agreed to hear from us.',
  },
  {
    icon: 'do_not_disturb_on',
    title: 'Opt-Out Honoured',
    description:
      'Reply STOP, or tell us by phone or email. We respect any reasonable request to stop messaging.',
  },
  {
    icon: 'badge',
    title: 'Name Will Match Registration',
    description:
      'Any WhatsApp display name we apply for will match our GST trade name, Aayushi Creations. No display name has been approved yet.',
  },
];

/** Scope statement for our intended WhatsApp Business Platform use. */
export const platformUsage = [
  'We would use the WhatsApp Business Platform only on our own business numbers.',
  'We do not provide WhatsApp API services, onboarding or messaging to other businesses.',
  'Message templates would be submitted to Meta for approval before any use.',
];

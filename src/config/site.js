import officeMap from '@/assets/bhopal-map.svg';

/**
 * Single source of truth for every business detail rendered across the site.
 *
 * All registration values below are transcribed from the GST Registration
 * Certificate for GSTIN 23AEVPG0463J1ZE. Do not add registration numbers,
 * certifications or performance figures here that are not evidenced by an
 * official document.
 */
export const company = {
  /** Trade name as recorded on the GST certificate. */
  name: 'Aayushi Creations',
  /** Trade name in the exact casing used on the certificate. */
  tradeName: 'AAYUSHI CREATIONS',
  /** Legal name of the proprietor, as recorded on the GST certificate. */
  legalName: 'Ashok Kumar Gupta',
  constitution: 'Proprietorship',
  proprietor: 'Ashok Kumar Gupta',
  tagline: 'A Proprietorship Business • Bhopal, Madhya Pradesh',

  // Contact details supplied by the business owner.
  email: 'info@devyora.com',
  phone: '+91 7747002279',
  // Used for `tel:` links — digits only, no spaces.
  phoneHref: '+917747002279',

  /** Principal place of business, as recorded on the GST certificate. */
  address: 'Plot No 16/1, Industrial Area, Govindpura, Bhopal, Madhya Pradesh, 462023',
  addressLines: [
    'Plot No 16/1, Industrial Area',
    'Govindpura, Bhopal',
    'Madhya Pradesh, 462023',
    'India',
  ],
  locality: 'Industrial Area, Govindpura',
  city: 'Bhopal, Madhya Pradesh',
  state: 'Madhya Pradesh',
  country: 'India',
  pincode: '462023',

  foundedYear: 2018,
};

/**
 * GST registration details, transcribed from the GST Registration Certificate.
 * These are the only registration identifiers this business holds on record.
 */
export const gst = {
  gstin: '23AEVPG0463J1ZE',
  registrationType: 'Regular',
  dateOfLiability: '26/07/2018',
  validFrom: '26/07/2018',
  validTo: 'Not Applicable',
  certificateIssued: '29/06/2021',
  form: 'Form GST REG-06',
  approvingAuthority: 'Centre Goods and Services Tax Act, 2017',
  jurisdictionalOffice: 'Bhopal -5',
  additionalPlacesOfBusiness: 0,
};

/** Document dates for the legal pages. */
export const legal = {
  lastUpdated: '2 November 2026',
  effectiveDate: '2 November 2026',
  termsVersion: 'Version 1.0',
};

/**
 * Site imagery.
 * `officeMap` is a self-hosted stylised vector map of Bhopal marking the
 * Govindpura industrial area. It is an illustration, not a surveyed map.
 */
export const media = {
  officeMap,
};

/** Primary navigation — drives both the desktop navbar and the mobile tab bar. */
export const navLinks = [
  { label: 'Home', path: '/', icon: 'business' },
  { label: 'About', path: '/about', icon: 'info' },
  { label: 'WhatsApp', path: '/whatsapp-integration', icon: 'chat' },
  { label: 'Contact', path: '/contact', icon: 'support_agent' },
];

/** Secondary legal navigation rendered in the footer. */
export const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-and-conditions' },
  { label: 'Contact', path: '/contact' },
];

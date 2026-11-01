/**
 * Single source of truth for every company detail rendered across the site.
 * Update values here and they propagate to all pages, sections and metadata.
 */
export const company = {
  name: 'Devyora',
  legalName: 'Devyora',
  tagline: 'Verified Business Entity • WhatsApp & Enterprise Messaging',
  email: 'info@devyora.com',
  phone: '+91 7747002279',
  // Used for `tel:` links — digits only, no spaces.
  phoneHref: '+917747002279',
  address: 'Bhopal, Madhya Pradesh, India',
  city: 'Bhopal, Madhya Pradesh',
  suite: 'Registered Office',
  hours: 'Monday – Friday, 9:00 AM – 6:00 PM IST',
  foundedYear: 2025,
};

/** Verification / registry identifiers shown in the corporate dossier. */
export const registry = {
  intakeId: 'META-VER-89421',
  taxId: 'EIN: XX-XXXX789',
  entityId: 'Entity ID #C4129845',
  standing: 'Active & Good Standing',
  registrar: 'Secretary of State Domestic LLC',
  validatedYear: '2024',
  termsVersion: 'Version 4.2',
};

/** Shared document dates for the legal pages. */
export const legal = {
  lastUpdated: 'January 15, 2025',
  effectiveDate: 'January 15, 2025',
};

import officeMap from '@/assets/bhopal-map.svg';

/**
 * Site imagery.
 * `officeMap` is a self-hosted vector map of Bhopal. `operationsCenter` is
 * still the CDN URL exported with the Stitch design — swap it for a local
 * asset in `src/assets/` before going live, as that URL is not permanent.
 */
export const media = {
  officeMap,
  operationsCenter:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD7HR4_r63T9G62HTc6K37Uce1JHe-WBjl9G6IInB7SSD5yLhcvJnpga-L1hjfHW3q1hgpc7_Qv9fjiJybmqZl2mzuvqQ4o8Dr_g6QgfaeBpA7M69VPJ3DCznCrm_YnSVrEhJ9H8dvZZyU3c7SQ006yMANh0zuUr1R7W3xbbo_Btb70QoZ7_NVvHbJAvqMb8x7rk50oFVvbWOQJYW59Xz76YFB_SAsxVepay-15ug8',
};

/** Primary navigation — drives both the desktop navbar and the mobile tab bar. */
export const navLinks = [
  { label: 'Home', path: '/', icon: 'business' },
  { label: 'About', path: '/about', icon: 'info' },
  { label: 'Contact', path: '/contact', icon: 'support_agent' },
];

/** Secondary legal navigation rendered in the footer. */
export const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-and-conditions' },
  { label: 'Contact', path: '/contact' },
];

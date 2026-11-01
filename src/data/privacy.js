/** Categories of data collected (Clause 1). */
export const dataCollected = [
  {
    icon: 'contact_mail',
    title: 'Contact & Identification Data',
    description:
      'Full legal name, business email address, direct phone line, corporate job title, and affiliated entity registry details.',
  },
  {
    icon: 'query_stats',
    title: 'Inquiry & Support Telemetry',
    description:
      'Messages submitted through verified portal channels, customer service intake tickets, and diagnostic transaction timestamps.',
  },
  {
    icon: 'devices',
    title: 'System & Network Information',
    description:
      'IP addresses, browser client headers, device operating system parameters, and authenticated session logs required to prevent unauthorized access.',
  },
];

/** Lawful bases for processing (Clause 2). */
export const processingBases = [
  {
    title: 'Provision of Service:',
    description:
      'Facilitating verified business communications, enterprise integration endpoints, and service requests.',
  },
  {
    title: 'Customer Technical Support:',
    description:
      'Responding proactively to authorized account requests, resolving platform inquiries, and diagnosing API transmission errors.',
  },
  {
    title: 'Regulatory Compliance:',
    description:
      'Adhering to relevant statutory requirements, auditing standards, anti-fraud rules, and contractual terms.',
  },
];

/** Meta / WhatsApp processing standards (Clause 3). */
export const metaStandards = [
  {
    title: 'Adherence to Meta Platform Terms',
    description:
      'Data exchanged via Meta-facilitated interfaces is processed solely in accordance with Meta Commercial Terms, Meta Developer Policies, and WhatsApp Business Terms of Service.',
  },
  {
    title: 'Sub-processor Disclosures',
    description:
      'Disclosures are limited exclusively to SOC-2 and ISO 27001 accredited cloud hosting providers acting strictly as contracted processors under formal Data Processing Addenda (DPA).',
  },
];

/** Security controls (Clause 4). */
export const securityControls = [
  {
    icon: 'lock',
    title: 'Encryption',
    description: 'TLS 1.3 in-transit and AES-256 for all stationary databases.',
  },
  {
    icon: 'badge',
    title: 'Access Rights',
    description: 'Role-based access limitation (RBAC) with mandated hardware MFA.',
  },
];

/** Data subject rights (Clause 5). */
export const dataRights = [
  { title: 'Right of Access', action: 'Request copy' },
  { title: 'Right of Rectification', action: 'Correct inaccuracies' },
  { title: 'Right to Deletion', action: 'Erase records' },
  { title: 'Right to Restrict or Object', action: 'Halt processing' },
];

/** Jump-navigation shortcuts. */
export const jumpLinks = [
  { href: '#section-1', label: '1. Data Collected' },
  { href: '#section-3', label: '3. Meta/WhatsApp' },
  { href: '#section-5', label: '5. User Rights' },
  { href: '#section-6', label: '6. DPO Contact' },
];

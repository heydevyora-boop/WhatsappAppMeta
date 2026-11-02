# Aayushi Creations — Business Website

React website for **AAYUSHI CREATIONS**, a GST-registered proprietorship business based in
Govindpura, Bhopal, Madhya Pradesh, India.

The site presents the business, its GST registration details and its contact information, and
states how the business uses the WhatsApp Business Platform for its own customer communication.

## Content rules

This site is used as supporting material for business verification. Everything on it must be
true and evidenced:

- **Registration details** come from the GST Registration Certificate (Form GST REG-06,
  GSTIN 23AEVPG0463J1ZE) and live in `src/config/site.js`.
- **Do not add** registration numbers, certifications (ISO, SOC 2, GDPR), uptime figures, SLAs,
  or any claim that Meta has approved, verified or partnered with the business, unless the
  business actually holds that evidence.
- The business **plans** to use the WhatsApp Business Platform internally, on its own numbers
  only. The integration is **not live**. Write about it in the future tense, keep the
  "Planned Integration – Not Yet Live" status visible, and never imply that API access, a phone
  number, a display name, a template or any Meta permission has already been approved.
- The business does not provide WhatsApp API services to other businesses, and the site must
  not say it does.
- **This repository is frontend only.** There is no backend, database or API integration. The
  enquiry form in `src/components/sections/ContactForm.jsx` is a demonstration: it submits
  nothing, stores nothing, and its UI must keep saying so.
- Do not state retention periods, response deadlines or security guarantees that the business
  has not actually committed to.

## Tech stack

| Concern    | Choice                    |
| ---------- | ------------------------- |
| Framework  | React 18                  |
| Build tool | Vite 5                    |
| Styling    | Tailwind CSS 3            |
| Routing    | React Router DOM 6        |
| Icons      | Material Symbols Outlined |
| Typeface   | Inter                     |

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
npm run build
```

```bash
npm run preview
```

## Pages

| Route                    | Page                                | In main nav |
| ------------------------ | ----------------------------------- | ----------- |
| `/`                      | Home                                | Yes         |
| `/about`                 | About                               | Yes         |
| `/whatsapp-integration`  | WhatsApp Business Platform (planned) | Yes        |
| `/contact`               | Contact                             | Yes         |
| `/privacy-policy`        | Privacy Policy                      | Footer      |
| `/terms-and-conditions`  | Terms & Conditions                  | Footer      |
| `*`                      | 404 — Not Found                     | —           |

Routes are declared in `src/App.jsx`; the navigation entries that point at them
live in `navLinks` / `legalLinks` in `src/config/site.js`.

## Folder structure

```
src/
├── assets/                  Logo and the stylised Bhopal map
├── components/
│   ├── layout/              Navbar, Footer, BottomNav, TrustBanner, ScrollToTop
│   ├── sections/            Composable page sections
│   └── ui/                  Design-system primitives
├── config/
│   └── site.js              Business details and GST registration data
├── data/                    Page content (company, privacy, terms)
├── hooks/
│   └── usePageTitle.js      Keeps document.title in sync with the route
├── layouts/
│   └── MainLayout.jsx       Shared chrome around every route
├── pages/                   One component per route
├── App.jsx                  Route definitions
├── main.jsx                 Application entry point
└── index.css                Tailwind layers + base/component styles
```

## Design system

Design tokens — colours, typography scale, spacing, radii and elevation — live in
`tailwind.config.js`. Use the semantic utilities rather than raw values:

- **Colour:** `bg-surface`, `bg-surface-container-lowest`, `text-on-surface`,
  `text-on-surface-variant`, `text-secondary`, `text-outline`, …
- **Typography:** pair the family and size utilities, e.g.
  `font-headline-lg text-headline-lg`, `font-body-md text-body-md`. Headline roles ship mobile
  variants (`*-mobile`) that scale up at the `md` breakpoint.
- **Spacing:** `space-xs` → `space-xl`, plus `gutter` / `margin` and their mobile variants.
- **Containers:** `.container-page` (1280px grid) and `.container-doc` (840px legal column).

## Responsive behaviour

| Breakpoint            | Behaviour                                                                   |
| --------------------- | --------------------------------------------------------------------------- |
| Mobile (`< 768px`)    | Single column, `1rem` margins, fixed bottom tab bar, mobile headline sizes   |
| Tablet (`768–1023px`) | `1.5rem` gutters, navigation moves into the header, two-column card grids    |
| Desktop (`≥ 1024px`)  | `2rem` margins, 1280px container, three-column grids, desktop headline sizes |

## Outstanding items for the owner

These are gaps that need your confirmation. Nothing has been invented to fill them.

1. **Business activities / products** — the site does not describe what Aayushi Creations makes
   or sells, because that is not on the GST certificate and was never supplied. A products or
   services section should be added once you provide accurate wording.
2. **Website domain** — the business email is `info@devyora.com` while the GST trade name is
   AAYUSHI CREATIONS. The site makes no claim about how the two relate, because the relationship
   has not been confirmed. Verification reviewers generally expect the domain, the business name
   and the WhatsApp display name to line up.
3. **Business hours** — not stated anywhere, as they were not supplied.
4. **Photographs** — no images of the premises or products are used.
5. **Contact form** — currently a demonstration with no backend. It needs a form handler or an
   email service before it can accept real enquiries.
6. **The map** (`src/assets/bhopal-map.svg`) is a stylised illustration marking the Govindpura
   area, not a surveyed map.
7. **Legal review** — the Privacy Policy and Terms describe current practice in plain language.
   Have them checked by a professional before relying on them.

## License

© Aayushi Creations. All rights reserved.

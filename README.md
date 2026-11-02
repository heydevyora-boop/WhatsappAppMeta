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
- The business uses the WhatsApp Business Platform **internally, on its own numbers only**. It
  does not provide WhatsApp API services to other businesses, and the site must not say it does.

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

| Route                   | Page               |
| ----------------------- | ------------------ |
| `/`                     | Home               |
| `/about`                | About              |
| `/contact`              | Contact            |
| `/privacy-policy`       | Privacy Policy     |
| `/terms-and-conditions` | Terms & Conditions |
| `*`                     | 404 — Not Found    |

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

1. **Website domain** — the business email is `info@devyora.com`, but the GST trade name is
   AAYUSHI CREATIONS. Verification reviewers generally expect the website domain, the business
   name and the WhatsApp display name to line up.
2. **What the business sells** — the site does not describe the products or services, because
   that is not on the GST certificate. Supply the real description to add a products section.
3. **Business hours** — not stated anywhere on the site, as they were not supplied.
4. **Photographs** — no images of the premises or products are used. Real photographs would
   strengthen the site.
5. **The map** (`src/assets/bhopal-map.svg`) is a stylised illustration marking the Govindpura
   area, not a surveyed map. Replace it with a real map export if precision matters.
6. **Legal review** — the Privacy Policy and Terms describe current practice in plain language.
   Have them checked by a professional before relying on them.

## License

© Aayushi Creations. All rights reserved.

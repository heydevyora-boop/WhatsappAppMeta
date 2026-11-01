# Devyora — Corporate Website

Production-ready React implementation of the **Devyora** corporate website and Meta Business
Verification disclosure portal, converted 1:1 from the Stitch design export
(`Corporate Verification Suite`).

## Tech stack

| Concern          | Choice                        |
| ---------------- | ----------------------------- |
| Framework        | React 18                      |
| Build tool       | Vite 5                        |
| Styling          | Tailwind CSS 3                |
| Routing          | React Router DOM 6            |
| Icons            | Material Symbols Outlined     |
| Typeface         | Inter                         |

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Other scripts

```bash
npm run build
```

```bash
npm run preview
```

## Pages

| Route                    | Page                 |
| ------------------------ | -------------------- |
| `/`                      | Home                 |
| `/about`                 | About                |
| `/contact`               | Contact              |
| `/privacy-policy`        | Privacy Policy       |
| `/terms-and-conditions`  | Terms & Conditions   |
| `*`                      | 404 — Not Found      |

## Folder structure

```
src/
├── assets/                  Static brand assets (logo)
├── components/
│   ├── layout/              Navbar, Footer, BottomNav, TrustBanner, ScrollToTop
│   ├── sections/            Composable page sections (Hero, Credentials, Contact, …)
│   └── ui/                  Design-system primitives (Button, Card, Badge, Icon, …)
├── config/
│   └── site.js              Company details, registry data, media URLs, navigation
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

All design tokens — colours, typography scale, spacing, radii and elevation — are ported verbatim
from the Stitch export into `tailwind.config.js`. Use the semantic utilities rather than raw
values so the UI stays consistent:

- **Colour:** `bg-surface`, `bg-surface-container-lowest`, `text-on-surface`,
  `text-on-surface-variant`, `text-secondary`, `text-outline`, …
- **Typography:** pair the family and size utilities, e.g.
  `font-headline-lg text-headline-lg`, `font-body-md text-body-md`, `font-label-sm text-label-sm`.
  Headline roles ship mobile variants (`*-mobile`) that scale up at the `md` breakpoint.
- **Spacing:** `space-xs` → `space-xl`, plus `gutter` / `gutter-mobile` / `margin` / `margin-mobile`.
- **Containers:** `.container-page` (1280px grid) and `.container-doc` (840px legal reading column).

## Responsive behaviour

The Stitch source is a mobile shell; the conversion extends it to the breakpoints defined in
`DESIGN.md` without altering the visual language:

| Breakpoint             | Behaviour                                                                 |
| ---------------------- | ------------------------------------------------------------------------- |
| Mobile (`< 768px`)     | Single column, `1rem` margins, fixed bottom tab bar, mobile headline sizes |
| Tablet (`768–1023px`)  | `1.5rem` gutters, navigation moves into the header, two-column card grids  |
| Desktop (`≥ 1024px`)   | `2rem` margins, 1280px container, three-column grids, desktop headline sizes |

## Configuration

Every company-specific value lives in **`src/config/site.js`** — name, email, phone, address,
operating hours, registry identifiers and navigation. Change it there and it updates everywhere.

### Before going live

1. **Imagery** — `media.operationsCenter` and `media.officeMap` point at the CDN URLs emitted by
   Stitch, and the map still shows the design's placeholder location rather than Bhopal. Replace
   both with your own images in `src/assets/` and import them in `src/config/site.js`, so the site
   has no external image dependency and the map matches the registered address.
2. **Registry identifiers** — `registry.taxId`, `registry.entityId` and `registry.intakeId` carry
   the placeholder values from the design. Replace them with your real filings.
3. **Contact form** — `src/components/sections/ContactForm.jsx` is UI-only. Wire `handleSubmit`
   to your endpoint when a backend is available.
4. **Governing law** — the Terms page is written jurisdiction-neutral. Have counsel confirm the
   governing-law and jurisdiction clauses before publishing.

## License

© 2025 Devyora. All rights reserved.

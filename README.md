# TR Software Systems Group website

A fresh React + TypeScript + Vite application using Tailwind CSS v4.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
src/
  components/
    SectionHeading.tsx
    SiteLayout.tsx
  data/
    company.ts
  pages/
    About.tsx
    Contact.tsx
    Home.tsx
    ServicePage.tsx
  App.tsx
  index.css
  main.tsx
```

## Styling
`src/index.css` uses the supplied dark-and-gold palette, Inter and Playfair Display typography, and Tailwind CSS v4's `@theme` configuration. The design uses editorial typography, fine rules, measured spacing and restrained interaction rather than generic gradients, glass panels or decorative effects.

## Before launch
- Confirm the public contact email and telephone number.
- Confirm which capabilities are currently available. The site marks Managed Application Services and Application Development as available, Data & Analytics as a developing capability, and Business Automation / Software Products as future expansion.
- Add a working server-side contact endpoint if you want enquiries stored or submitted without opening the visitor's email application.
- Add privacy notice and POPIA-aligned handling details before collecting personal information.
- Add real project case studies only when work is complete and approved for publication.

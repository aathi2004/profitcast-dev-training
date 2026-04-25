# The Detailing Mafia — Vijayawada

A premium, mobile-responsive landing page for a car detailing business, built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Sections

1. **Sticky Navigation** — frosted on scroll, mobile menu, primary CTA
2. **Hero** — bold headline, gold gradient typography, dual CTA, stat strip, illustrated car visual
3. **Services** — 4 pricing cards (PPF, Ceramic Coating, Interior Detailing, Engine Cleaning)
4. **Why Choose Us** — 6 trust signals + repeat-client stat block
5. **Testimonials** — 3 reviews with star ratings + Google rating proof
6. **Lead Capture Form** — Name, Phone, Vehicle Type, Service (with client-side validation + success state)
7. **Footer** — full Vijayawada address, phone, email, hours, social links

## Run locally

```bash
cd day-05
npm install
npm run dev
```

Visit http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Stack

- Next.js 14.2 (App Router, JS)
- React 18
- Tailwind CSS 3.4
- Custom design tokens: gold + carbon palette, Playfair Display + Inter

## File map

```
day-05/
├── app/
│   ├── globals.css     # Tailwind + design tokens + utility classes
│   ├── layout.js       # Root layout, fonts, metadata
│   └── page.js         # Composition of all sections
├── components/
│   ├── Navigation.js   # Sticky header (client component)
│   ├── Hero.js
│   ├── Services.js
│   ├── WhyChooseUs.js
│   ├── Testimonials.js
│   ├── LeadForm.js     # Validated form (client component)
│   └── Footer.js
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

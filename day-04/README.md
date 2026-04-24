# Day 04 — Profitcast Services

Single-page digital marketing agency site built with **React 19 + Vite 8 + Tailwind CSS v3**.

## Features

- Hero, services grid, case-study results, testimonials, FAQ, contact modal
- Real-time service search (useState + useEffect + localStorage)
- Click-to-expand service cards with deliverables + engagement timeline
- Contact modal with form state, Escape-to-close, body-scroll lock
- Scroll-triggered fade-in animations via a custom `useInView` hook
- Smooth anchor scrolling, mobile hamburger nav, mobile-first responsive layout
- `tel:` and `mailto:` CTAs wired to the dialer / mail client
- Navy + champagne gold palette (consulting feel)

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Deploy to Vercel

The repo already contains `vercel.json` with build config pinned. Two paths:

### Option A — Vercel Dashboard (recommended)

1. Go to [vercel.com/new](https://vercel.com/new) and import `aathi2004/profitcast-dev-training`.
2. In the project settings, set **Root Directory** to `day-04`.
3. Framework preset auto-detects as **Vite**. Click **Deploy**.

Vercel will rebuild on every push to `main` going forward.

### Option B — Vercel CLI

```bash
cd day-04
npx vercel              # first time: prompts for login + project link
npx vercel --prod       # deploy to production
```

## Stack

- React 19 + Vite 8
- Tailwind CSS 3 (mobile-first)
- PostCSS + Autoprefixer
- No CSS framework runtime — pure Tailwind utility classes

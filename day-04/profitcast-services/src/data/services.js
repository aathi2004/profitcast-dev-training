import {
  MetaIcon,
  GoogleAdsIcon,
  LocalSeoIcon,
  VideoIcon,
  WebDevIcon,
} from "../components/icons.jsx";

export const services = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    tagline: "Facebook & Instagram performance",
    description:
      "Full-funnel paid social built around creative velocity. We launch, test, and scale campaigns that turn feed attention into pipeline — without burning budget on clicks that don't convert.",
    longDescription:
      "Our Meta engagement treats creative as the real variable — we ship 8–12 new ad concepts per month across statics, UGC, and motion, then let data decide what scales. Every account gets a conversions API + server-side pixel rebuild, a clean CBO structure, and retargeting logic tied to CRM stages.",
    icon: MetaIcon,
    accent: "bg-sky-500/40",
    accentText: "text-sky-300",
    metric: "ROAS focused",
    channels: ["Facebook", "Instagram", "Reels", "Audience Network"],
    deliverables: [
      "Account architecture & CBO structure",
      "Weekly creative testing rotations",
      "Conversions API & pixel hardening",
      "Retargeting & lookalike strategy",
    ],
    timeline: [
      { phase: "Weeks 1–2", title: "Audit + tracking rebuild", detail: "Pixel, CAPI, and account structure audit. We fix attribution before we spend a dollar." },
      { phase: "Weeks 3–4", title: "Creative sprint + launch", detail: "Ship first batch of 8 ads across 3 angles; launch prospecting + retargeting campaigns." },
      { phase: "Ongoing", title: "Test, kill, scale", detail: "Weekly creative swaps, monthly offer tests, quarterly full-funnel review." },
    ],
    startingAt: "$3.5k / mo",
    featured: true,
  },
  {
    id: "google-ads",
    title: "Google Ads",
    tagline: "Search, PMax & YouTube",
    description:
      "Intent-driven campaigns that capture buyers at the exact moment they're searching. Clean keyword architecture, airtight conversion tracking, and weekly bid optimization.",
    longDescription:
      "We rebuild Google accounts from the keyword up — no legacy bloat, no duplicate campaigns fighting each other. PMax runs with tight asset groups and exclusion lists so it doesn't cannibalize brand, and every conversion is verified server-side before optimization kicks in.",
    icon: GoogleAdsIcon,
    accent: "bg-amber-400/40",
    accentText: "text-amber-300",
    metric: "Intent driven",
    channels: ["Search", "Performance Max", "YouTube", "Display"],
    deliverables: [
      "Keyword & SKAG / theme mapping",
      "GA4 & server-side conversion tracking",
      "Landing page speed + CRO audit",
      "Monthly profit-per-click reporting",
    ],
    timeline: [
      { phase: "Weeks 1–2", title: "Account teardown", detail: "Audit keyword waste, negative lists, match types, and Quality Score trends." },
      { phase: "Weeks 3–4", title: "Rebuild + relaunch", detail: "Ship new campaign architecture with profit-per-click bid strategy." },
      { phase: "Ongoing", title: "Compound optimization", detail: "Weekly search-term mining, landing page A/B tests, and PMax asset refreshes." },
    ],
    startingAt: "$3.5k / mo",
  },
  {
    id: "local-seo",
    title: "Local SEO",
    tagline: "Map pack & organic visibility",
    description:
      "Dominate the 3-pack and the first page of local search. We ship a system — not a checklist — built around Google Business Profile, citation velocity, and review automation.",
    longDescription:
      "Local rankings are won with consistency, not tricks. We optimize your GBP weekly, build NAP-consistent citations across 80+ directories, and install review-request automation that compounds your social proof. For multi-location clients, we build dedicated city and service pages that rank independently.",
    icon: LocalSeoIcon,
    accent: "bg-emerald-400/40",
    accentText: "text-emerald-300",
    metric: "Map pack ready",
    channels: ["GBP", "Citations", "Reviews", "Local content"],
    deliverables: [
      "Google Business Profile optimization",
      "NAP citation cleanup + building",
      "Review request automation",
      "Location & service landing pages",
    ],
    timeline: [
      { phase: "Weeks 1–2", title: "GBP + citation audit", detail: "Fix inconsistencies, claim missing profiles, and map competitor backlinks." },
      { phase: "Weeks 3–6", title: "Content + automation", detail: "Ship location pages, plug in review automation, and build directory citations." },
      { phase: "Ongoing", title: "Authority building", detail: "Monthly local backlinks, GBP posts, and rank tracking across target keywords." },
    ],
    startingAt: "$1.8k / mo",
  },
  {
    id: "video-marketing",
    title: "Video Marketing",
    tagline: "Short-form & YouTube strategy",
    description:
      "Hook-first creative that stops the scroll and drives qualified traffic. We handle strategy, scripting, and edit — you show up on camera (or don't, we have UGC partners).",
    longDescription:
      "Our video process starts with hooks, not cameras. Every month we research trending formats, write 12–20 hook variants, then script and shoot the winners. We deliver platform-native cuts (Reels, TikTok, Shorts) plus captions, thumbnails, and a weekly performance dashboard.",
    icon: VideoIcon,
    accent: "bg-rose-500/40",
    accentText: "text-rose-300",
    metric: "Scroll-stopping",
    channels: ["Reels", "TikTok", "YouTube Shorts", "Long-form"],
    deliverables: [
      "Monthly content calendar & hooks",
      "Scripting & shot list prep",
      "Edit, captions & thumbnail design",
      "Performance-based iteration",
    ],
    timeline: [
      { phase: "Week 1", title: "Voice + format discovery", detail: "Lock on creator POV, hook archetypes, and content pillars." },
      { phase: "Weeks 2–4", title: "First shoot + launch", detail: "Shoot 12 videos, edit in native aspect ratios, launch across channels." },
      { phase: "Ongoing", title: "Learn + iterate", detail: "Weekly performance review; double down on winning formats, kill the rest." },
    ],
    startingAt: "$2.5k / mo",
  },
  {
    id: "web-development",
    title: "Web Development",
    tagline: "Landing pages & marketing sites",
    description:
      "High-converting sites built on modern stacks. Fast, accessible, instrumented end-to-end — so every visit is measurable and every page carries its weight.",
    longDescription:
      "We build on Next.js, Astro, or Webflow — whatever fits your team. Every site ships with Core Web Vitals ≥ 90, a design system, and analytics instrumentation (GA4, heatmaps, session replay) wired in from day one. Optional CRO retainer after launch keeps conversion trending up.",
    icon: WebDevIcon,
    accent: "bg-violet-500/40",
    accentText: "text-violet-300",
    metric: "Built to convert",
    channels: ["Next.js", "Astro", "Webflow", "Shopify"],
    deliverables: [
      "Strategy, wireframes & copy direction",
      "Design system + Tailwind / CMS build",
      "Core Web Vitals ≥ 90 guarantee",
      "Analytics, heatmaps & A/B tooling",
    ],
    timeline: [
      { phase: "Weeks 1–2", title: "Strategy + wireframes", detail: "Stakeholder interviews, IA, wireframes, and copy direction." },
      { phase: "Weeks 3–6", title: "Design + build", detail: "Design system, page build, CMS wiring, QA across devices." },
      { phase: "Week 7", title: "Launch + handoff", detail: "Deploy, instrument analytics, and train your team on updates." },
    ],
    startingAt: "$8k / project",
  },
];

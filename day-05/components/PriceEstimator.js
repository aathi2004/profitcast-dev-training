"use client";

import { useMemo, useState } from "react";

const CAR_SIZES = [
  { id: "hatch", label: "Hatchback", example: "Swift, i20, Baleno", multiplier: 1 },
  { id: "sedan", label: "Sedan", example: "City, Verna, Ciaz", multiplier: 1.15 },
  { id: "suv", label: "SUV / MUV", example: "Creta, XUV700, Innova", multiplier: 1.35 },
  { id: "luxury", label: "Luxury", example: "BMW, Audi, Mercedes", multiplier: 1.6 },
];

const SERVICES = [
  {
    id: "ppf",
    label: "Paint Protection Film",
    plain: "An invisible armor for your paint",
    base: 65000,
    duration: "3 – 4 days",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
      </svg>
    ),
  },
  {
    id: "ceramic",
    label: "Ceramic Coating",
    plain: "Long-lasting glossy shield",
    base: 19999,
    duration: "1 – 2 days",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a7 7 0 0 0-7 7c0 5 7 11 7 11s7-6 7-11a7 7 0 0 0-7-7Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    id: "interior",
    label: "Interior Detailing",
    plain: "Deep clean inside-out",
    base: 4999,
    duration: "1 day",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18v-7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7M3 18h18M7 11V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3" />
      </svg>
    ),
  },
  {
    id: "engine",
    label: "Engine Cleaning",
    plain: "Steam-clean under the hood",
    base: 2499,
    duration: "Half day",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 11h2l1-3h8l1 3h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1Z" />
      </svg>
    ),
  },
];

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export default function PriceEstimator() {
  const [size, setSize] = useState("sedan");
  const [service, setService] = useState("ceramic");

  const { low, high, picked } = useMemo(() => {
    const car = CAR_SIZES.find((c) => c.id === size);
    const svc = SERVICES.find((s) => s.id === service);
    const base = svc.base * car.multiplier;
    return {
      low: Math.round(base / 1000) * 1000,
      high: Math.round((base * 1.18) / 1000) * 1000,
      picked: { car, svc },
    };
  }, [size, service]);

  const whatsappMsg = encodeURIComponent(
    `Hi! I'd like a quote for ${picked.svc.label} on my ${picked.car.label} (${picked.car.example.split(",")[0].trim()}).`
  );

  return (
    <section id="estimate" className="relative py-20 md:py-28 bg-carbon-light/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-px w-full">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Quick price check</span>
          <h2 className="mt-4 section-heading">
            Just curious about cost? <span className="text-gold">Two taps.</span>
          </h2>
          <p className="mt-4 text-white/70">
            No need to call yet. Pick your car, pick a service, see the price.
            Easy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
                Step 1 · What kind of car?
              </p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {CAR_SIZES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSize(c.id)}
                    aria-pressed={size === c.id}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      size === c.id
                        ? "border-gold bg-gold/10 shadow-lg shadow-gold/10"
                        : "border-white/10 bg-white/5 hover:border-gold/40"
                    }`}
                  >
                    <CarIcon active={size === c.id} variant={c.id} />
                    <p className="mt-3 text-sm font-bold text-white">{c.label}</p>
                    <p className="mt-0.5 text-[11px] text-white/55 leading-tight">
                      {c.example}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
                Step 2 · What do you want done?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setService(s.id)}
                    aria-pressed={service === s.id}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                      service === s.id
                        ? "border-gold bg-gold/10 shadow-lg shadow-gold/10"
                        : "border-white/10 bg-white/5 hover:border-gold/40"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 flex-none place-items-center rounded-lg ${
                        service === s.id
                          ? "bg-gradient-to-br from-gold to-gold-dark text-carbon"
                          : "bg-white/5 text-gold border border-white/10"
                      }`}
                    >
                      {s.icon}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">{s.label}</span>
                      <span className="mt-0.5 block text-xs text-white/60">{s.plain}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 rounded-3xl border border-gold/30 bg-gradient-to-b from-carbon-light to-carbon p-5 sm:p-6 shadow-2xl shadow-gold/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Your estimate
              </p>
              <p className="mt-2 font-display text-base font-bold text-white">
                {picked.svc.label} for a {picked.car.label.toLowerCase()}
              </p>

              <div className="mt-6 rounded-2xl bg-black/40 p-5 text-center">
                <p className="text-xs text-white/60">Around this much</p>
                <p className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-gold leading-none">
                  {formatINR(low)} – {formatINR(high)}
                </p>
                <p className="mt-3 text-xs text-white/55">
                  Exact price after a free 15-min look at your car.
                  <br />
                  Pickup, drop, GST &amp; warranty all included.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-gold flex-none">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                    </svg>
                  </span>
                  Takes about <span className="font-semibold ml-1">{picked.svc.duration}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-gold flex-none">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                    </svg>
                  </span>
                  We pick up &amp; drop, free
                </li>
                <li className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-gold flex-none">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                    </svg>
                  </span>
                  Pay after — no advance
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M20.5 3.5A10.4 10.4 0 0 0 12 .5C6.2.5 1.5 5.2 1.5 11c0 1.8.5 3.6 1.4 5.2L1 23l6.9-1.8a10.4 10.4 0 0 0 4.1.9c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.1-5.4-3-7.4Z" />
                  </svg>
                  Send this on WhatsApp
                </a>
                <a href="#contact" className="btn-outline w-full text-sm py-3">
                  Or fill a quick form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarIcon({ active, variant }) {
  const colorClass = active ? "text-gold" : "text-white/70";
  const stroke = "currentColor";

  if (variant === "hatch") {
    return (
      <svg viewBox="0 0 64 32" fill="none" stroke={stroke} strokeWidth="1.5" className={`h-9 w-16 ${colorClass}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 24 8 14l8-4h28l10 6 6 2v6Z" />
        <circle cx="18" cy="24" r="4" />
        <circle cx="46" cy="24" r="4" />
      </svg>
    );
  }
  if (variant === "sedan") {
    return (
      <svg viewBox="0 0 64 32" fill="none" stroke={stroke} strokeWidth="1.5" className={`h-9 w-16 ${colorClass}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 24 7 16l8-6h22l8 4 16 4v6Z" />
        <circle cx="17" cy="24" r="4" />
        <circle cx="47" cy="24" r="4" />
      </svg>
    );
  }
  if (variant === "suv") {
    return (
      <svg viewBox="0 0 64 32" fill="none" stroke={stroke} strokeWidth="1.5" className={`h-9 w-16 ${colorClass}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 24 5 14l6-6h36l6 4 10 2v10Z" />
        <circle cx="17" cy="24" r="4.5" />
        <circle cx="47" cy="24" r="4.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 32" fill="none" stroke={stroke} strokeWidth="1.5" className={`h-9 w-16 ${colorClass}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 23 6 14l10-5h26l10 5 10 3v6Z" />
      <circle cx="16" cy="24" r="4" />
      <circle cx="48" cy="24" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 14h22" />
    </svg>
  );
}

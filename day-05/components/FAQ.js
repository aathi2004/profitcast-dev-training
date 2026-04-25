"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Will detailing damage my car's paint?",
    a: "No — exactly the opposite. Our products and process are designed to protect and preserve your paint. Every technician is certified and uses only manufacturer-approved tools. We've detailed everything from a Maruti Alto to a Lamborghini without a single paint complaint in 8 years.",
  },
  {
    q: "How long will my car be with you?",
    a: "Engine cleaning takes half a day. Interior detailing is usually 1 day. Ceramic coating needs 1–2 days for proper curing. Paint Protection Film is the longest at 3–4 days. We give you a clear timeline upfront and send WhatsApp updates daily.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We don't deliver a car you're not happy with. If anything is below your expectations, we'll redo it free of charge. Every job comes with a written warranty card you can use to claim service for years to come.",
  },
  {
    q: "Do I need to pay an advance?",
    a: "No advance is required. You only pay after you inspect the car and are satisfied. We accept cash, UPI (PhonePe / GPay / Paytm), all credit/debit cards, and even offer no-cost EMI on packages above ₹15,000.",
  },
  {
    q: "Do you really offer free pickup and drop?",
    a: "Yes — anywhere within Vijayawada city limits, completely free. We use an enclosed flatbed (not open towing) so your car is safe from dust, rain, and road debris during transport. Just tell us where to come.",
  },
  {
    q: "What's the difference between PPF and Ceramic Coating?",
    a: "Think of PPF as a thick, transparent armor — it physically takes hits from stones, scratches, and bumps. Ceramic coating is a thin glass-like shield that gives extreme gloss and protects against UV, water spots, and minor swirls. Many customers do both — PPF on high-impact areas (bonnet, bumper) and ceramic on the rest.",
  },
  {
    q: "How long does ceramic coating actually last?",
    a: "Our ceramic coatings are rated for 5 years, and most cars maintain that hydrophobic 'water bead' effect well past 4 years with normal washing. We provide a written warranty and a free annual inspection to top it up if needed.",
  },
  {
    q: "Do you work on luxury and exotic cars?",
    a: "Absolutely. We're trusted by owners of BMW, Audi, Mercedes-Benz, Porsche, Range Rover, and even a few Ferraris and Lamborghinis in the region. Our climate-controlled studio and certified technicians are equipped to handle vehicles of any value.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center">
          <span className="eyebrow">You ask, we answer</span>
          <h2 className="mt-4 section-heading">
            Worried? <span className="text-gold">Don't be.</span>
          </h2>
          <p className="mt-4 text-white/70">
            First-timers ask us these all the time. Tap any question — answers
            are short and in normal words. No tech-speak.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-gold/40 bg-gradient-to-b from-gold/5 to-transparent"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 text-left min-h-[44px]"
                >
                  <span className="font-display text-[15px] sm:text-base lg:text-lg font-semibold text-white">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-9 w-9 flex-none place-items-center rounded-full border transition-all ${
                      isOpen
                        ? "border-gold bg-gold text-carbon rotate-180"
                        : "border-white/15 bg-white/5 text-gold"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-[15px] text-white/75 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 p-5 text-center">
          <p className="text-sm text-white/85">
            Got a different question? Just ask — we usually reply in 30 mins.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi!%20I%20have%20a%20small%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.5 3.5A10.4 10.4 0 0 0 12 .5C6.2.5 1.5 5.2 1.5 11c0 1.8.5 3.6 1.4 5.2L1 23l6.9-1.8a10.4 10.4 0 0 0 4.1.9c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.1-5.4-3-7.4Z" />
              </svg>
              WhatsApp us
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-gold/10 transition-colors"
            >
              Call 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

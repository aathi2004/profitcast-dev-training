const STEPS = [
  {
    num: "1",
    title: "Just say hi",
    description:
      "WhatsApp us, give us a call, or fill the small form below. Tell us what bugs you about your car — we'll suggest what makes sense, in plain words.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.4-4 8-9 8a9.6 9.6 0 0 1-3.5-.6L3 21l1.6-4A7.5 7.5 0 0 1 3 12c0-4.4 4-8 9-8s9 3.6 9 8Z" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "We come to you",
    description:
      "Anywhere in Vijayawada, totally free. We pick up your car in a covered carrier so it stays safe from dust and rain. You don't lift a finger.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 0 1 2-2h9v10H3Zm11-6h4l3 3v3h-7" />
        <circle cx="7.5" cy="17.5" r="2" />
        <circle cx="17" cy="17.5" r="2" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Sit back, we work",
    description:
      "Our team gets to it in our clean studio. You'll get WhatsApp photos every step of the way, so you always know what's happening.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 4 21 11l-9 9-7-7 9-9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m14 11 5 5M9 4l3 3" />
      </svg>
    ),
  },
  {
    num: "4",
    title: "Drive away smiling",
    description:
      "We drop your car back at your doorstep looking sparkly clean. Pay how you like — cash, UPI, card, or EMI. That's it!",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4v16" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-px w-full">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 section-heading">
            Easy. Honest. <span className="text-gold">Done in 4 steps.</span>
          </h2>
          <p className="mt-4 text-white/70">
            No fancy words. No long forms. We make it as easy as ordering food.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.num} className="relative">
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] right-0 h-px bg-gradient-to-r from-gold/40 to-transparent z-0" />
              )}
              <div className="relative card h-full">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-dark text-carbon shadow-lg shadow-gold/30">
                    {step.icon}
                  </div>
                  <span className="font-display text-5xl font-extrabold text-white/10">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 text-sm text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            We're open today · 9 AM to 8 PM
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
            Cash · UPI · Card · EMI — all good
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
            Telugu · Hindi · English — we'll chat in any
          </span>
        </div>
      </div>
    </section>
  );
}

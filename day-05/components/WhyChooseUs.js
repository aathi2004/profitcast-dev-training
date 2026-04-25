const REASONS = [
  {
    title: "Real people who care",
    description:
      "Our team has been doing this for years and genuinely loves cars. From a Maruti Alto to a Range Rover — same care, same attention.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13.5 6 22l6-3 6 3-2-8.5" />
      </svg>
    ),
  },
  {
    title: "A clean, quiet studio",
    description:
      "We work indoors, away from dust and rain. Your car gets the kind of careful attention it just won't get on the roadside.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Only the real stuff",
    description:
      "We use original imported products — no cheap copies. You'll see the QR codes and bills yourself. We've nothing to hide.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m12 2 8.5 4.5v9L12 20l-8.5-4.5v-9L12 2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5 3.5 7M12 11.5 20.5 7M12 11.5V20" />
      </svg>
    ),
  },
  {
    title: "Warranty on paper",
    description:
      "Up to 10 years on PPF, 5 years on ceramic. If anything ever goes wrong, just bring the bill. We'll sort it out — promise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "What we say, you pay",
    description:
      "Quote first, work after. We won't sneak extras into your bill or push services you don't need. Family-friendly pricing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.5c-.5-1-1.5-1.5-3-1.5-2 0-3 1-3 2 0 3 6 1.5 6 4.5 0 1.2-1 2-3 2-1.5 0-2.5-.5-3-1.5M12 6v2m0 8v2" />
      </svg>
    ),
  },
  {
    title: "We come to your house",
    description:
      "Anywhere in Vijayawada — Benz Circle, Auto Nagar, Patamata. Free pickup &amp; drop in a covered carrier. Just message us a time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V8a2 2 0 0 1 2-2h9v10H3Zm11-6h4l3 3v3h-7" />
        <circle cx="7.5" cy="17.5" r="2" />
        <circle cx="17" cy="17.5" r="2" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 md:py-28 bg-carbon-light/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-px w-full">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Why people choose us</span>
            <h2 className="mt-4 section-heading">
              We treat your car like <span className="text-gold">it's ours.</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-md">
              You've got plenty of options in Vijayawada. Here's why most of
              our customers come back — and bring their friends.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { v: "5,000+", l: "Happy Cars" },
                { v: "98%", l: "Repeat Clients" },
                { v: "4.9★", l: "Google" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/10 bg-white/5 px-2 sm:px-3 py-3 sm:py-4 text-center"
                >
                  <div className="font-display text-xl sm:text-2xl font-bold gold-text">{s.v}</div>
                  <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-4 sm:gap-5 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <div
                key={reason.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-carbon-light/60 to-carbon/40 p-5 transition-all duration-300 hover:border-gold/40 hover:bg-carbon-light/60"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/20 transition-all group-hover:bg-gold group-hover:text-carbon group-hover:shadow-lg group-hover:shadow-gold/30">
                  {reason.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{reason.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

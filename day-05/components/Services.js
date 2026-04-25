const SERVICES = [
  {
    name: "Paint Protection Film",
    tag: "Best for Long Drives",
    price: "₹65,000",
    unit: "onwards",
    description:
      "An invisible film that takes the hits — stones, scratches, bird drops — so your paint stays brand new. Like a phone screen guard, but for your whole car.",
    features: [
      "10-year warranty paperwork",
      "Heals small scratches by itself",
      "Water just slides off",
      "Crystal clear — looks invisible",
    ],
    accent: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Ceramic Coating",
    tag: "Most Loved",
    price: "₹19,999",
    unit: "onwards",
    description:
      "A glossy shield that makes your car shine like new and keeps water + dust off for years. Washing becomes 10x easier — you'll see the difference the first rain.",
    features: [
      "Lasts 5 years easy",
      "Water beads up &amp; rolls off",
      "Sun damage? Not anymore",
      "That deep, mirror-like shine",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a7 7 0 0 0-7 7c0 5 7 11 7 11s7-6 7-11a7 7 0 0 0-7-7Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    name: "Interior Cleaning",
    tag: "Like New Again",
    price: "₹4,999",
    unit: "onwards",
    description:
      "Deep cleaning of seats, mats, dashboard, AC vents — even the smell. Great for family cars, post-trip messes, or before reselling. Your car will feel brand new inside.",
    features: [
      "Seats &amp; mats steam-cleaned",
      "Leather conditioned softly",
      "That funky smell? Gone",
      "Safe for kids &amp; pets",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18v-7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M7 11V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3" />
      </svg>
    ),
  },
  {
    name: "Engine Cleaning",
    tag: "Quick Refresh",
    price: "₹2,499",
    unit: "onwards",
    description:
      "We safely steam-clean your engine bay without touching anything electrical. Great before service visits or just to feel proud popping the bonnet.",
    features: [
      "Steam — no risky water",
      "Electricals fully protected",
      "Hoses &amp; plastics polished",
      "Shows up spotless",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 11h2l1-3h8l1 3h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1Z" />
        <circle cx="8" cy="14" r="1.2" />
        <circle cx="16" cy="14" r="1.2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-px w-full">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 section-heading">
            Pick what your car needs. <span className="text-gold">We'll handle the rest.</span>
          </h2>
          <p className="mt-4 text-white/70">
            Honest prices. No hidden fees. Tap any card to chat with us about
            it — we'll explain everything in normal words.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.name}
              className={`card relative flex flex-col ${
                service.accent ? "ring-1 ring-gold/40 shadow-2xl shadow-gold/10" : ""
              }`}
            >
              {service.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-carbon">
                  Top Pick
                </span>
              )}

              <div
                className={`grid h-12 w-12 place-items-center rounded-xl ${
                  service.accent
                    ? "bg-gradient-to-br from-gold to-gold-dark text-carbon"
                    : "bg-white/5 text-gold border border-white/10"
                }`}
              >
                {service.icon}
              </div>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-gold">
                {service.tag}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold leading-snug">
                {service.name}
              </h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold gold-text">
                  {service.price}
                </span>
                <span className="text-xs text-white/50">{service.unit}</span>
              </div>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="mt-0.5 h-4 w-4 flex-none text-gold"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  service.accent
                    ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-carbon hover:shadow-lg hover:shadow-gold/30"
                    : "border border-white/15 bg-white/5 text-white hover:bg-gold/10 hover:border-gold/40"
                }`}
              >
                Ask about this
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

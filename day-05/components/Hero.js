const STATS = [
  { value: "5,000+", label: "Happy Cars" },
  { value: "8 Yrs", label: "In Vijayawada" },
  { value: "4.9★", label: "On Google" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-28">
      <div className="absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/[0.06] blur-3xl" aria-hidden="true" />

      <div className="container-px relative w-full">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/90">
              <span aria-hidden="true">👋</span>
              Hi from Vijayawada
            </span>

            <h1 className="mt-5 font-display text-[2rem] leading-[1.1] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight text-white">
              Let's make your car{" "}
              <span className="text-gold">look brand new</span> again.
            </h1>

            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-[15px] sm:text-base lg:text-lg text-white/70 leading-relaxed">
              We're a small team in Vijayawada that loves cars. Whether it's a
              quick interior wash or a full ceramic coating — just say hi and
              we'll take care of everything. No jargon, no pressure, no
              surprises.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20a%20quote%20for%20my%20car"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5 min-h-[44px]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.5 3.5A10.4 10.4 0 0 0 12 .5C6.2.5 1.5 5.2 1.5 11c0 1.8.5 3.6 1.4 5.2L1 23l6.9-1.8a10.4 10.4 0 0 0 4.1.9c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.1-5.4-3-7.4Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a href="tel:+919876543210" className="btn-outline w-full sm:w-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
                </svg>
                Or just call us
              </a>
            </div>

            <p className="mt-4 text-xs text-white/50 text-center lg:text-left">
              Free pickup &amp; drop · No advance payment · We reply in 30 mins
            </p>

            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-2 sm:px-4 py-3 text-center"
                >
                  <div className="font-display text-xl sm:text-2xl font-bold gold-text">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px]">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/15 via-gold/5 to-transparent blur-2xl" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-carbon-light via-carbon to-black shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.25),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.12),transparent_60%)]" />

                <svg
                  viewBox="0 0 400 500"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2C2C2C" />
                      <stop offset="35%" stopColor="#141414" />
                      <stop offset="100%" stopColor="#040404" />
                    </linearGradient>
                    <linearGradient id="bodyShine" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
                      <stop offset="55%" stopColor="#F4CF6B" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="glassGrad" x1="0.2" y1="0" x2="0.7" y2="1">
                      <stop offset="0%" stopColor="#4A4A55" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#0A0A0A" />
                      <stop offset="100%" stopColor="#1F1F25" />
                    </linearGradient>
                    <radialGradient id="wheelGrad" cx="0.5" cy="0.5" r="0.6">
                      <stop offset="0%" stopColor="#3a3a3a" />
                      <stop offset="55%" stopColor="#181818" />
                      <stop offset="100%" stopColor="#000000" />
                    </radialGradient>
                    <radialGradient id="headlight" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="30%" stopColor="#FFF4C6" />
                      <stop offset="70%" stopColor="#F4CF6B" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="goldStripe" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#A6841C" stopOpacity="0" />
                      <stop offset="40%" stopColor="#F4CF6B" />
                      <stop offset="60%" stopColor="#F4CF6B" />
                      <stop offset="100%" stopColor="#A6841C" stopOpacity="0" />
                    </linearGradient>
                    <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="6" />
                    </filter>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" />
                    </filter>
                  </defs>

                  {/* Ambient floor glow + grounded shadow */}
                  <ellipse cx="200" cy="432" rx="180" ry="22" fill="#D4AF37" opacity="0.18" filter="url(#softBlur)" />
                  <ellipse cx="200" cy="426" rx="160" ry="10" fill="#000000" opacity="0.85" filter="url(#softBlur)" />
                  <line x1="40" y1="426" x2="360" y2="426" stroke="url(#goldStripe)" strokeWidth="0.6" opacity="0.7" />

                  {/* Lower rocker panel */}
                  <path
                    d="M55 365 L72 382 L150 382 L165 365 L235 365 L250 382 L328 382 L345 365 Z"
                    fill="#080808"
                    stroke="url(#goldStripe)"
                    strokeWidth="0.7"
                    strokeOpacity="0.85"
                  />

                  {/* Main body shell */}
                  <path
                    d="M55 365 Q50 320 75 290 L120 265 Q155 245 200 240 Q245 245 280 265 L325 290 Q350 320 345 365 Q330 372 280 372 L255 372 Q230 372 200 372 Q170 372 145 372 L120 372 Q70 372 55 365 Z"
                    fill="url(#bodyGrad)"
                  />

                  {/* Glossy top sheen */}
                  <path
                    d="M75 285 Q200 245 325 285"
                    stroke="url(#bodyShine)"
                    strokeWidth="42"
                    fill="none"
                    opacity="0.5"
                  />

                  {/* Greenhouse / glass canopy */}
                  <path
                    d="M125 270 Q160 240 200 235 Q240 240 275 270 L260 295 L140 295 Z"
                    fill="url(#glassGrad)"
                  />

                  {/* Glass top highlight */}
                  <path d="M135 262 Q200 232 265 262" stroke="#F4CF6B" strokeOpacity="0.55" strokeWidth="1.3" fill="none" />

                  {/* Subtle window reflections */}
                  <path d="M150 270 L165 287 L196 287 L196 252 Z" fill="#FFFFFF" opacity="0.06" />
                  <path d="M204 252 L204 287 L235 287 L250 270 Z" fill="#FFFFFF" opacity="0.06" />

                  {/* B-pillar */}
                  <path d="M197 240 L197 295 L201 295 L201 240 Z" fill="#0A0A0A" />

                  {/* Body character lines */}
                  <path d="M58 320 L342 320" stroke="url(#goldStripe)" strokeWidth="1" opacity="0.85" />
                  <path d="M70 350 L330 350" stroke="#F4CF6B" strokeOpacity="0.18" strokeWidth="0.8" />

                  {/* Door cut + handles */}
                  <line x1="200" y1="296" x2="200" y2="365" stroke="#000000" strokeWidth="0.8" opacity="0.7" />
                  <rect x="170" y="318" width="14" height="3" rx="1.5" fill="#222222" />
                  <rect x="216" y="318" width="14" height="3" rx="1.5" fill="#222222" />

                  {/* Front headlight + LED DRL */}
                  <ellipse cx="338" cy="312" rx="18" ry="8" fill="url(#headlight)" filter="url(#glow)" />
                  <ellipse cx="338" cy="312" rx="9" ry="3.5" fill="#FFFEF0" />
                  <path d="M316 304 L350 307" stroke="#F4CF6B" strokeWidth="2" strokeLinecap="round" />
                  {/* Light beam */}
                  <path d="M350 312 L398 295 L398 330 L350 318 Z" fill="#F4CF6B" opacity="0.09" />

                  {/* Tail light */}
                  <ellipse cx="60" cy="312" rx="11" ry="4.5" fill="#D4AF37" opacity="0.75" />
                  <path d="M46 308 L76 309" stroke="#F4CF6B" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />

                  {/* Grille hints */}
                  <path d="M322 345 L352 350" stroke="#222222" strokeWidth="2" />
                  <path d="M322 353 L352 358" stroke="#222222" strokeWidth="2" />

                  {/* Wheels — gold-spoke alloys */}
                  <g>
                    <circle cx="125" cy="375" r="34" fill="#000000" />
                    <circle cx="125" cy="375" r="30" fill="url(#wheelGrad)" />
                    <circle cx="125" cy="375" r="24" fill="none" stroke="#D4AF37" strokeOpacity="0.55" strokeWidth="0.6" />
                    <g stroke="#D4AF37" strokeOpacity="0.9" strokeWidth="2.2" strokeLinecap="round">
                      <line x1="125" y1="353" x2="125" y2="397" />
                      <line x1="103" y1="375" x2="147" y2="375" />
                      <line x1="109" y1="359" x2="141" y2="391" />
                      <line x1="141" y1="359" x2="109" y2="391" />
                    </g>
                    <circle cx="125" cy="375" r="6" fill="#D4AF37" />
                    <circle cx="125" cy="375" r="2.5" fill="#0A0A0A" />

                    <circle cx="280" cy="375" r="34" fill="#000000" />
                    <circle cx="280" cy="375" r="30" fill="url(#wheelGrad)" />
                    <circle cx="280" cy="375" r="24" fill="none" stroke="#D4AF37" strokeOpacity="0.55" strokeWidth="0.6" />
                    <g stroke="#D4AF37" strokeOpacity="0.9" strokeWidth="2.2" strokeLinecap="round">
                      <line x1="280" y1="353" x2="280" y2="397" />
                      <line x1="258" y1="375" x2="302" y2="375" />
                      <line x1="264" y1="359" x2="296" y2="391" />
                      <line x1="296" y1="359" x2="264" y2="391" />
                    </g>
                    <circle cx="280" cy="375" r="6" fill="#D4AF37" />
                    <circle cx="280" cy="375" r="2.5" fill="#0A0A0A" />
                  </g>

                  {/* Wheel arches */}
                  <path d="M88 375 Q125 332 162 375" stroke="#000000" strokeWidth="3" fill="none" opacity="0.65" />
                  <path d="M243 375 Q280 332 317 375" stroke="#000000" strokeWidth="3" fill="none" opacity="0.65" />

                  {/* Roof gleam */}
                  <ellipse cx="200" cy="237" rx="38" ry="2" fill="#F4CF6B" opacity="0.75" filter="url(#glow)" />

                  {/* Subtle gold sparkles */}
                  <g fill="#F4CF6B">
                    <circle cx="350" cy="180" r="1.5" opacity="0.5" />
                    <circle cx="80" cy="220" r="1.3" opacity="0.4" />
                    <circle cx="370" cy="250" r="1.2" opacity="0.4" />
                  </g>
                </svg>

                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-black/55 backdrop-blur px-3.5 py-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-[0.15em] text-gold/90">
                        This week's pick
                      </p>
                      <p className="font-display text-[13px] font-semibold truncate">
                        Ceramic + PPF Combo
                      </p>
                    </div>
                    <p className="font-display text-base font-bold text-gold whitespace-nowrap">
                      from ₹49,999
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-8 hidden xl:block rotate-[-5deg] rounded-lg border border-gold/25 bg-carbon-light/85 backdrop-blur px-3 py-2 shadow-lg">
                <p className="text-[9px] uppercase tracking-[0.15em] text-gold/90">
                  10-Year Warranty
                </p>
                <p className="text-xs font-semibold">XPEL Certified</p>
              </div>

              <div className="absolute -right-4 bottom-20 hidden xl:block rotate-[4deg] rounded-lg border border-gold/25 bg-carbon-light/85 backdrop-blur px-3 py-2 shadow-lg">
                <p className="text-[9px] uppercase tracking-[0.15em] text-gold/90">
                  9H Hardness
                </p>
                <p className="text-xs font-semibold">Ceramic Pro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

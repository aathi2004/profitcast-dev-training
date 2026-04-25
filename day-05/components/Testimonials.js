const TESTIMONIALS = [
  {
    name: "Rohit Varma",
    role: "Owner, Audi Q5",
    location: "Benz Circle, Vijayawada",
    initial: "R",
    rating: 5,
    quote:
      "Got XPEL PPF + Ceramic done on my Q5. The finish is unreal — the paint looks deeper than when it left the showroom. The team explained every step and even sent updates with photos.",
  },
  {
    name: "Sneha Reddy",
    role: "Owner, Hyundai Creta",
    location: "Auto Nagar, Vijayawada",
    initial: "S",
    rating: 5,
    quote:
      "My car's interior smelled awful after a long road trip. After their deep interior detailing, it feels brand new. Spotless seats, fresh smell, no chemical residue. Worth every rupee.",
  },
  {
    name: "Karthik Naidu",
    role: "Owner, Mahindra XUV700",
    location: "Patamata, Vijayawada",
    initial: "K",
    rating: 5,
    quote:
      "Best detailing studio in Vijayawada — hands down. They're obsessed with the details. Pickup-drop was on time, and the ceramic coating is still beading water 8 months later. Highly recommended.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2 14.6 8.6 22 9.3l-5.5 4.8 1.7 7.2L12 17.8 5.8 21.3l1.7-7.2L2 9.3l7.4-.7L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-px w-full">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Real customers, real cars</span>
          <h2 className="mt-4 section-heading">
            Folks across Vijayawada <span className="text-gold">love us.</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Stars count={5} />
            <span className="text-sm text-white/70">
              <span className="font-bold text-white">4.9 / 5</span> · 500+ reviews on Google
            </span>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="card relative flex flex-col"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute right-5 top-5 h-8 w-8 text-gold/20"
              >
                <path d="M7 7h4v4H7v3a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2h2V7H7Zm9 0h4v4h-4v3a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2h2V7h-4Z" />
              </svg>

              <Stars count={t.rating} />

              <blockquote className="mt-4 text-white/80 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-dark font-display text-lg font-bold text-carbon">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/60">
                    {t.role} · {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

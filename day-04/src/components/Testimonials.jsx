import Reveal from "./Reveal.jsx";

const quotes = [
  {
    quote:
      "Profitcast is the first agency we've worked with that actually understood our unit economics. They rebuilt our funnel in 30 days and we haven't looked back.",
    name: "Priya Shankar",
    role: "Head of Growth, Vaultiq",
  },
  {
    quote:
      "They ship like an in-house team. Weekly creative, transparent reporting, and genuinely strategic thinking — which is rare at this price point.",
    name: "Marcus Delane",
    role: "Founder, Hearthstone Interiors",
  },
  {
    quote:
      "Our site was fast, beautiful, and already driving bookings the week we launched. The ads layered on top just made everything compound.",
    name: "Amélie Rousseau",
    role: "CMO, Linéa Studio",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-white/5 bg-ink-950/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400 sm:text-xs">
              What clients say
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Words from the people we've shipped for.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 120} className="h-full">
              <figure
                className="flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] sm:p-6"
              >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-brand-500"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7 7h4v4H7c0 2 1 3 3 4v2c-4-1-6-3-6-7V7Zm9 0h4v4h-4c0 2 1 3 3 4v2c-4-1-6-3-6-7V7Z" />
              </svg>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-white/5 pt-4">
                <p className="font-display text-sm font-semibold text-white">
                  {q.name}
                </p>
                <p className="text-xs text-slate-500">{q.role}</p>
              </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

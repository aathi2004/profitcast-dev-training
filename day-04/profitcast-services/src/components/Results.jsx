import Reveal from "./Reveal.jsx";

const cases = [
  {
    client: "Hearthstone Interiors",
    industry: "Home services · US",
    headline: "6.2x ROAS in 90 days",
    detail:
      "Rebuilt Meta + Google account structure and shipped a new landing experience. Cut CPL by 58% while tripling booked consultations.",
    stats: [
      ["6.2x", "Blended ROAS"],
      ["-58%", "Cost per lead"],
      ["3.1x", "Booked calls"],
    ],
  },
  {
    client: "Vaultiq",
    industry: "B2B SaaS · Series A",
    headline: "$1.4M pipeline from paid",
    detail:
      "Built a performance engine across Search + LinkedIn with server-side tracking. Attributed $1.4M in qualified pipeline in two quarters.",
    stats: [
      ["$1.4M", "Pipeline attributed"],
      ["27%", "SQL conversion"],
      ["14d", "Avg. sales cycle ↓"],
    ],
  },
  {
    client: "Linéa Studio",
    industry: "DTC beauty · EU",
    headline: "4x organic traffic",
    detail:
      "Site migration to Next.js, CWV fixes, and a local SEO push across 12 cities. Organic non-brand clicks up 4x year over year.",
    stats: [
      ["4x", "Organic traffic"],
      ["98", "Performance score"],
      ["12", "Cities ranked #1"],
    ],
  },
];

export default function Results() {
  return (
    <section id="results" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400 sm:text-xs">
                Recent wins
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Numbers from the last two quarters.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-slate-400">
              Every engagement is tied to a revenue outcome. Results below are blended
              across paid, organic, and conversion-rate work.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 100} className="h-full">
              <article
                className="flex h-full flex-col rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-glow hover:shadow-brand-500/10 sm:p-6"
              >
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  {c.industry}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">
                  {c.client}
                </p>
              </div>

              <p className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">
                {c.headline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.detail}</p>

              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/5 pt-4">
                {c.stats.map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-lg font-semibold text-white">
                      {value}
                    </dt>
                    <dd className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

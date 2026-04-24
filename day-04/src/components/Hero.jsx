import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fade"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 md:pb-24 md:pt-28">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Now booking Q2 growth retainers
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl font-display text-[34px] font-semibold leading-[1.05] text-white sm:mt-6 sm:text-5xl md:text-6xl">
            We Grow Your Business{" "}
            <span className="whitespace-nowrap">
              Online —{" "}
              <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-accent-400 bg-clip-text text-transparent">
                Guaranteed
              </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 max-w-2xl font-display text-xl font-medium leading-snug text-slate-200 sm:mt-5 sm:text-2xl md:text-3xl">
            Marketing that behaves like a{" "}
            <span className="text-brand-400">conversation</span>, not a{" "}
            <span className="text-slate-400 line-through decoration-slate-600">commercial</span>.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:mt-6 sm:text-base md:text-lg">
            Profitcast is a small, senior team running paid media, SEO, video, and web for
            service businesses that want predictable pipeline — not vanity metrics.
            Every engagement is tied to a revenue outcome, shipped in 30 days, and
            measured every week.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#services"
              className="group/cta rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-5 py-3 text-center text-sm font-medium text-ink-950 shadow-glow transition duration-300 hover:brightness-110 hover:shadow-[0_0_50px_-8px_rgba(212,165,116,0.7)] sm:py-2.5"
            >
              <span className="inline-flex items-center gap-2">
                Explore services
                <span className="transition duration-300 group-hover/cta:translate-x-1">→</span>
              </span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/10 sm:py-2.5"
            >
              Talk to us →
            </a>
          </div>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 md:grid-cols-4">
          {[
            ["4.1x", "Avg. blended ROAS"],
            ["72%", "Retention at 12 mo"],
            ["18d", "Avg. time to first win"],
            ["$40M+", "Client revenue influenced"],
          ].map(([value, label], i) => (
            <Reveal key={label} delay={320 + i * 80}>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] sm:p-4">
                <dt className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {value}
                </dt>
                <dd className="mt-1 text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                  {label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

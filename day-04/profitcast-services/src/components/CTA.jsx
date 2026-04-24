import Reveal from "./Reveal.jsx";

export default function CTA() {
  return (
    <section className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/30 via-ink-900 to-accent-500/20 p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
          />

          <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-300 sm:text-xs">
                Let's build your growth engine
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Ready to turn marketing into measurable revenue?
              </h2>
              <p className="mt-4 max-w-lg text-sm text-slate-300 sm:text-base">
                Book a 30-minute strategy call. We'll audit your funnel live, tell you
                what we'd change, and you'll leave with a plan — whether you hire us or not.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="tel:+919962851851"
                className="group/call inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-ink-950 transition hover:bg-slate-200 hover:shadow-lg hover:shadow-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition duration-300 group-hover/call:rotate-12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h1.8a1 1 0 0 1 .97.76l.9 3.6a1 1 0 0 1-.3 1L7.5 9.8a12 12 0 0 0 6.7 6.7l1.4-1.4a1 1 0 0 1 1-.3l3.6.9a1 1 0 0 1 .76.97V18.5A2.5 2.5 0 0 1 18.5 21h-1C9.5 21 3 14.5 3 6.5v-1Z" />
                </svg>
                Call +91 99628 51851
              </a>
              <a
                href="mailto:hello@profitcast.com"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Email hello@profitcast.com
              </a>
              <p className="text-xs text-slate-400 md:text-right">
                Average reply time under 4 hours, Mon–Fri.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal.jsx";

const faqs = [
  {
    q: "How quickly can we get started?",
    a: "Kickoff typically happens within 5 business days of signing. We use the first two weeks for audit, tracking setup, and creative planning — most clients see the first campaigns live by day 18.",
  },
  {
    q: "Do you work on retainer or project?",
    a: "Paid media, SEO, and video are monthly retainers (3-month minimum). Web development is scoped as a fixed project with optional ongoing CRO + maintenance after launch.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We're channel-agnostic but outcome-specific. Our strongest results are in B2B SaaS, local service businesses, DTC, and premium home services — anywhere a qualified lead or order is worth more than $200.",
  },
  {
    q: "Who actually runs our account?",
    a: "A senior strategist owns your account end-to-end — not a junior buyer. You'll have direct Slack access to the same person running your campaigns, plus a weekly written update.",
  },
  {
    q: "Can we see real reporting?",
    a: "Yes. You get a live Looker Studio dashboard pulling from ads, GA4, and your CRM — plus a monthly executive summary that ties spend to pipeline and revenue.",
  },
];

export default function FAQ() {
  return (
    <section className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400 sm:text-xs">
              Questions, answered
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Before you book the call.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10 divide-y divide-white/5 rounded-2xl border border-white/5 bg-white/[0.02]">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group px-5 py-4 sm:px-6 sm:py-5"
              open={i === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="font-display text-base font-medium text-white sm:text-lg">
                  {f.q}
                </span>
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition group-open:rotate-45">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

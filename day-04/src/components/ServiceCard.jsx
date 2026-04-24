export default function ServiceCard({
  title,
  tagline,
  description,
  longDescription,
  icon: Icon,
  accent,
  accentText,
  channels,
  deliverables,
  timeline,
  startingAt,
  featured,
  isExpanded,
  onToggleExpand,
  onRequest,
}) {
  // NOTE: This card doesn't own its expanded state — the parent (ServicesSection)
  // owns it via useState and passes `isExpanded` + `onToggleExpand` as props.
  // Lifting state up means only ONE card can be open at a time, which keeps the
  // grid from becoming jagged when several are open.

  // When a nested button (Inquire / Request) is clicked, we don't want the click
  // to bubble up to the <article> and toggle expand. stopPropagation handles that.
  const stop = (e) => e.stopPropagation();

  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onClick={onToggleExpand}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggleExpand();
        }
      }}
      className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-5 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow hover:shadow-brand-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:p-6 ${
        isExpanded ? "border-white/20 shadow-glow" : "border-white/5"
      }`}
    >
      {/* Top hairline that fades in on hover — subtle premium touch. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className={`absolute -right-16 -top-16 h-52 w-52 rounded-full blur-3xl opacity-40 transition duration-500 group-hover:opacity-80 group-hover:scale-110 ${accent}`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-ink-900/80 text-white transition duration-500 ease-out group-hover:-rotate-3 group-hover:scale-110 group-hover:border-white/25 group-hover:bg-ink-800">
            <Icon className="h-6 w-6 transition duration-500 group-hover:rotate-6 group-hover:scale-110" />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-white sm:text-xl">
              {title}
            </h3>
            <p className={`text-[11px] uppercase tracking-[0.16em] ${accentText}`}>
              {tagline}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {featured && !isExpanded && (
            <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
              Flagship
            </span>
          )}
          <span
            aria-hidden
            className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition ${
              isExpanded ? "rotate-45" : ""
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </div>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      <div className="relative mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          What's included
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {deliverables.map((item) => (
            <li key={item} className="flex gap-2.5">
              <svg
                viewBox="0 0 20 20"
                className={`mt-[3px] h-4 w-4 flex-none ${accentText}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4 10 3.5 3.5L16 6" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {channels.map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-400 transition group-hover:border-white/20 group-hover:text-slate-200"
          >
            {c}
          </span>
        ))}
      </div>

      {/* Expanded section — only rendered when isExpanded is true. */}
      {isExpanded && (
        <div className="relative mt-6 space-y-5 border-t border-white/5 pt-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              How we approach it
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {longDescription}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Engagement timeline
            </p>
            <ol className="mt-3 grid gap-3 sm:grid-cols-3">
              {timeline.map((t) => (
                <li
                  key={t.phase}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
                >
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${accentText}`}>
                    {t.phase}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-white">
                    {t.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {t.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      <div className="relative mt-6 flex items-end justify-between gap-3 border-t border-white/5 pt-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Starting at
          </p>
          <p className="font-display text-base font-semibold text-white">
            {startingAt}
          </p>
        </div>
        <button
          type="button"
          onClick={(e) => {
            stop(e);
            onRequest();
          }}
          className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-slate-200 hover:shadow-lg hover:shadow-white/10"
        >
          Request this service
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
}

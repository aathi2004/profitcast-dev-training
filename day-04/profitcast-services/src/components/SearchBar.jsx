import { useEffect, useRef } from "react";

export default function SearchBar({ query, onQueryChange, resultCount, totalCount }) {
  // useRef gives us a persistent reference to a DOM node that survives re-renders.
  // We attach it to the <input> below so we can imperatively focus it.
  const inputRef = useRef(null);

  // useEffect runs code AFTER the component renders to the screen. It's where we
  // put "side effects" — things that touch the outside world (DOM, timers, network).
  // The empty array [] means "run this once when the component first mounts, and never again".
  // Here we auto-focus the search input so the user can start typing immediately.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const hasQuery = query.trim().length > 0;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-md">
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m20 20-3.5-3.5" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search services, channels, deliverables…"
          className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2.5 pl-11 pr-10 text-sm text-white placeholder:text-slate-500 transition focus:border-white/25 focus:bg-white/[0.06] focus:outline-none"
        />
        {hasQuery && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        )}
      </div>

      <p className="text-xs text-slate-400">
        Showing{" "}
        <span className="font-semibold text-white">{resultCount}</span>
        {" "}of{" "}
        <span className="font-semibold text-white">{totalCount}</span>{" "}
        {totalCount === 1 ? "service" : "services"}
      </p>
    </div>
  );
}

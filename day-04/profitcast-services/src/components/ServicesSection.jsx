import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import ServiceCard from "./ServiceCard.jsx";
import Reveal from "./Reveal.jsx";
import { services } from "../data/services.js";

export default function ServicesSection({ onRequestService }) {
  // useState creates a piece of state that React remembers between renders.
  // Calling setQuery(...) tells React "this value changed — re-render the component".
  // We initialize it by reading the last search from localStorage (if any) so the
  // user's search is restored when they refresh the page.
  const [query, setQuery] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("profitcast:lastSearch") || "";
  });

  // Another useState — this one remembers which card is currently expanded.
  // `null` means no card is expanded. We store the service's id when one is open.
  const [expandedId, setExpandedId] = useState(null);

  // useEffect runs AFTER render and is perfect for "sync this value with the outside world".
  // Here we persist the search term to localStorage every time `query` changes —
  // the dependency array `[query]` tells React "only re-run this effect when query changes".
  useEffect(() => {
    localStorage.setItem("profitcast:lastSearch", query);
  }, [query]);

  const q = query.trim().toLowerCase();
  const filtered =
    q === ""
      ? services
      : services.filter((s) =>
          [s.title, s.tagline, s.description, ...s.channels, ...s.deliverables]
            .join(" ")
            .toLowerCase()
            .includes(q)
        );

  const handleToggleExpand = (id) => {
    // Click the same card again to collapse; click a different one to switch.
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400 sm:text-xs">
              What we do
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Five services. One growth stack.
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:mt-4 sm:text-base">
              Run one channel or the whole system — every engagement is scoped around
              a revenue outcome, not a deliverable checklist. Click any card to expand.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 md:inline-flex"
          >
            Request a proposal
          </a>
        </div>

        <SearchBar
          query={query}
          onQueryChange={setQuery}
          resultCount={filtered.length}
          totalCount={services.length}
        />

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center">
            <p className="font-display text-lg font-semibold text-white">
              No services match "{query}"
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Try a broader term like "ads", "seo", or "video" — or clear the search.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service, i) => (
              <Reveal
                key={service.id}
                delay={i * 80}
                className={`h-full ${
                  expandedId === service.id || (service.featured && expandedId === null)
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <ServiceCard
                  {...service}
                  isExpanded={expandedId === service.id}
                  onToggleExpand={() => handleToggleExpand(service.id)}
                  onRequest={() => onRequestService(service)}
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";

export default function Header() {
  // useState for the mobile menu drawer. Closed by default.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect: close the menu automatically when the viewport grows past the
  // mobile breakpoint, otherwise it could get stuck open on rotate/resize.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#results", label: "Results" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-ink-950/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 shadow-glow">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 17l6-6 4 4 6-8" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 7h6v6" />
            </svg>
          </span>
          <div className="leading-tight">
            <p className="font-display text-base font-semibold text-white sm:text-lg">Profitcast</p>
            <p className="hidden text-[11px] uppercase tracking-[0.2em] text-slate-400 sm:block">
              Growth Studio
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919962851851"
            aria-label="Call +91 99628 51851"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink-950 transition hover:bg-slate-200 sm:px-4 sm:py-2 sm:text-sm"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h1.8a1 1 0 0 1 .97.76l.9 3.6a1 1 0 0 1-.3 1L7.5 9.8a12 12 0 0 0 6.7 6.7l1.4-1.4a1 1 0 0 1 1-.3l3.6.9a1 1 0 0 1 .76.97V18.5A2.5 2.5 0 0 1 18.5 21h-1C9.5 21 3 14.5 3 6.5v-1Z" />
            </svg>
            <span className="sm:hidden">Call us</span>
            <span className="hidden sm:inline">Book a strategy call</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/25 hover:text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <div
        className={`overflow-hidden border-b border-white/5 transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-4 pt-1 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

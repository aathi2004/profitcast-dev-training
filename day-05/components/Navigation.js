"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#estimate", label: "Get Estimate" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-carbon/85 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="container-px flex h-16 w-full items-center justify-between md:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-gold to-gold-dark text-carbon font-display font-black text-lg shadow-lg shadow-gold/30">
            M
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-white group-hover:text-gold transition-colors">
            The Detailing <span className="gold-text">Mafia</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
            Get a Free Quote
          </a>
        </div>

        <a
          href="tel:+919876543210"
          aria-label="Call us"
          className="md:hidden inline-flex h-10 items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-3 text-xs font-bold text-carbon shadow-lg shadow-gold/30"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
          </svg>
          Call
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-white/10 bg-carbon/95 backdrop-blur transition-[max-height] duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="container-px flex w-full flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 text-sm"
          >
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}

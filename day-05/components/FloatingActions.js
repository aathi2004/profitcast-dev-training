"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-3 sm:right-4 bottom-[6.5rem] md:bottom-6 z-40 flex flex-col gap-3 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20car%20detailing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7">
          <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4Z" />
          <path d="M20.5 3.5A10.4 10.4 0 0 0 12 .5C6.2.5 1.5 5.2 1.5 11c0 1.8.5 3.6 1.4 5.2L1 23l6.9-1.8a10.4 10.4 0 0 0 4.1.9c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.1-5.4-3-7.4ZM12 20a8.5 8.5 0 0 1-4.4-1.2l-.3-.2-4 1 1.1-3.9-.2-.4A8.5 8.5 0 1 1 12 20Z" />
        </svg>
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-carbon-light px-3 py-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-white/10">
          Chat on WhatsApp
        </span>
      </a>

      <a
        href="tel:+919876543210"
        aria-label="Call us"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-carbon shadow-2xl shadow-gold/40 transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
        </svg>
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-carbon-light px-3 py-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-white/10">
          Call us now
        </span>
      </a>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed left-3 sm:left-4 bottom-[6.5rem] md:bottom-6 z-40 grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/15 bg-carbon/80 backdrop-blur text-gold shadow-xl transition-all duration-300 hover:border-gold hover:bg-gold/10 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}

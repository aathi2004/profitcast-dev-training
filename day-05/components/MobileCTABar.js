"use client";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-gold/20 bg-carbon/95 backdrop-blur-lg shadow-2xl shadow-black/60 pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center gap-1 rounded-xl py-2.5 text-white active:bg-white/5 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-gold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
          </svg>
          <span className="text-[11px] font-semibold">Call</span>
        </a>

        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20car%20detailing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#25D366]/15 py-2.5 text-white active:bg-[#25D366]/25 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]">
            <path d="M20.5 3.5A10.4 10.4 0 0 0 12 .5C6.2.5 1.5 5.2 1.5 11c0 1.8.5 3.6 1.4 5.2L1 23l6.9-1.8a10.4 10.4 0 0 0 4.1.9c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.1-5.4-3-7.4ZM12 20a8.5 8.5 0 0 1-4.4-1.2l-.3-.2-4 1 1.1-3.9-.2-.4A8.5 8.5 0 1 1 12 20Zm5.5-3.6c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4Z" />
          </svg>
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>

        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light py-2.5 text-carbon shadow-lg shadow-gold/30 active:scale-95 transition-transform"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 11H6a2 2 0 0 0-2 2v7h16v-7a2 2 0 0 0-2-2h-3M9 11V7a3 3 0 0 1 6 0v4M9 11h6" />
          </svg>
          <span className="text-[11px] font-bold">Get Quote</span>
        </a>
      </div>
    </div>
  );
}

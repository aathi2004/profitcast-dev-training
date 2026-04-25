const SERVICES = [
  "Paint Protection Film",
  "Ceramic Coating",
  "Interior Detailing",
  "Engine Cleaning",
];

const QUICK_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#estimate", label: "Get Estimate" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Get a Quote" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <rect x="2.5" y="6" width="19" height="12" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m10 9.5 5 2.5-5 2.5v-5Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A9 9 0 0 1 21 12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9c.5-1 1-1 2-1 .5 1 .5 1.5 1 2.5L11.5 12c.5 1 1.5 2 2.5 2.5l1.5-.5c1 .5 1.5.5 2.5 1 0 1 0 1.5-1 2-2 .5-5-1-7-3s-3.5-5-3-7Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-carbon">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-px w-full py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-gold to-gold-dark text-carbon font-display font-black text-lg shadow-lg shadow-gold/20">
                M
              </span>
              <span className="font-display text-lg font-bold tracking-wide text-white">
                The Detailing <span className="gold-text">Mafia</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              A small Vijayawada team that loves making cars look brand new.
              Drop by, message, or call — we'll always pick up.
            </p>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              Visit Us
            </h4>
            <address className="mt-4 not-italic text-sm text-white/70 leading-relaxed">
              The Detailing Mafia Studio<br />
              D.No. 40-1-52, M.G. Road<br />
              Beside Benz Circle Flyover<br />
              Vijayawada, Andhra Pradesh 520010
            </address>

            <div className="mt-5 space-y-2 text-sm">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
                </svg>
                +91 98765 43210
              </a>
              <a
                href="mailto:hello@thedetailingmafia.in"
                className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 text-gold">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                </svg>
                hello@thedetailingmafia.in
              </a>
              <p className="flex items-center gap-2 text-white/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 text-gold">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                </svg>
                Mon – Sat · 9 AM – 8 PM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {year} The Detailing Mafia · Made with care in Vijayawada
          </p>
          <div className="flex gap-5 text-xs text-white/50">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#faq" className="hover:text-gold transition-colors">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

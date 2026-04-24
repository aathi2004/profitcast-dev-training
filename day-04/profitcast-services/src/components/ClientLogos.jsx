import Reveal from "./Reveal.jsx";

const logos = [
  { name: "Blackline", style: "font-display tracking-tight" },
  { name: "VAULTIQ", style: "font-semibold tracking-[0.22em]" },
  { name: "Hearthstone", style: "italic font-light tracking-wide" },
  { name: "Linéa", style: "font-display font-semibold" },
  { name: "NORTHBEAM", style: "font-semibold tracking-[0.28em] text-xs" },
  { name: "Glasshouse", style: "font-light tracking-wider" },
];

export default function ClientLogos() {
  return (
    <div className="mt-16 border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Trusted by operators at
        </p>
        <div className="mt-5 grid grid-cols-2 items-center gap-x-6 gap-y-5 text-slate-400 sm:grid-cols-3 md:grid-cols-6">
          {logos.map(({ name, style }, i) => (
            <Reveal key={name} delay={i * 60}>
              <div
                className={`text-center text-sm transition duration-300 hover:scale-105 hover:text-white sm:text-base ${style}`}
              >
                {name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

const base = "stroke-current";
const props = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function MetaIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...props}>
      <path d="M3 15c1.8-7 5.2-9 7.2-5.4C12 12.4 13.6 15 15.5 15c2.3 0 3.5-2 3.5-4.2 0-2.4-1.5-3.8-3.3-3.8-2.4 0-4.4 2.6-6.2 6.4C7.7 17 6.3 19 4.6 19 3.2 19 2 17.8 2 16c0-.4.1-.8.2-1.2" />
    </svg>
  );
}

export function GoogleAdsIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...props}>
      <path d="M10 3.5 3.8 14a3 3 0 0 0 2.6 4.5h.6" />
      <path d="m14 3.5 6.2 10.5a3 3 0 0 1-2.6 4.5H10a3 3 0 0 1-2.6-4.5L12 6" />
      <circle cx="9" cy="17" r="2.2" />
    </svg>
  );
}

export function LocalSeoIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...props}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M4 21h16" />
    </svg>
  );
}

export function VideoIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...props}>
      <rect x="3" y="6" width="13" height="12" rx="2.5" />
      <path d="m16 10 5-2.5v9L16 14" />
      <path d="M7.5 12h3M9 10.5v3" />
    </svg>
  );
}

export function WebDevIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18" />
      <path d="m9 12-2 2 2 2M15 12l2 2-2 2" />
    </svg>
  );
}

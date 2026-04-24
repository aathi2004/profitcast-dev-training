import { useInView } from "../hooks/useInView.js";

// Wraps any children and fades + slides them in the first time they scroll
// into view. Pass a `delay` (in ms) to stagger siblings — e.g. map an array
// of cards with delay={index * 80}.
//
// The element starts at opacity-0 and slightly translated; when useInView
// flips `inView` to true, Tailwind's transition animates it to its resting
// position over 700ms.
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  duration = 700,
  from = "bottom",
  className = "",
  ...rest
}) {
  const [ref, inView] = useInView();

  const offset = {
    bottom: "translate-y-6",
    left: "-translate-x-6",
    right: "translate-x-6",
    none: "",
  }[from];

  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        transitionDuration: `${duration}ms`,
      }}
      className={`transition ease-out will-change-transform ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${offset}`
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

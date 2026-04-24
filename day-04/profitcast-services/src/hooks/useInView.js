import { useEffect, useRef, useState } from "react";

// Custom hook: tells you whether a DOM element is currently on screen.
// Uses IntersectionObserver under the hood so we aren't listening to scroll
// events on every pixel of movement — the browser only notifies us when the
// element crosses the threshold, which is much cheaper.
//
// Returns a [ref, inView] tuple:
//   - attach `ref` to the element you want to watch
//   - `inView` flips to true the first time it enters view
export function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
} = {}) {
  // useRef holds a mutable value that persists across renders.
  // Unlike useState, updating a ref does NOT cause a re-render.
  // We use it here to keep a stable reference to the DOM element.
  const ref = useRef(null);

  // useState for whether the element is visible yet. When this flips to true,
  // the component using the hook re-renders with the "visible" styles applied.
  const [inView, setInView] = useState(false);

  // useEffect runs after render. We set up the observer here because we need
  // the DOM element (ref.current) to exist, which only happens after render.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // If we only want to reveal once, stop watching after the first hit.
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    // Cleanup: disconnect the observer when the component unmounts.
    // Without this we'd leak observers on every mount/unmount cycle.
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}

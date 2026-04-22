(function () {
  // Entry point: wire up every interactive feature once the DOM is queryable.
  function init() {
    // Kick off each feature independently — if one is missing its target
    // element the corresponding function will bail out safely on its own.
    initThemeToggle();
    initVisitCounter();
    initContactForm();
    initSmoothScroll();
  }

  // ---------- 1) Dark / Light mode toggle ----------
  function initThemeToggle() {
    // Grab the toggle button placed in the navbar and the <body> element,
    // which is where we flip a "light-mode" class to switch CSS variables.
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
    if (!toggleBtn) return;

    // Compact icon glyphs — sun is shown in dark mode (click → go light),
    // moon is shown in light mode (click → go dark). Keeps the button small.
    const ICON_SUN = "☀";  // ☀ — U+2600
    const ICON_MOON = "☾"; // ☾ — U+263E

    // Read any saved preference from localStorage so the user's last choice
    // persists across reloads and future visits.
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      // Apply light mode immediately and show the moon (next action = go dark).
      body.classList.add("light-mode");
      toggleBtn.textContent = ICON_MOON;
    } else {
      // Default (no saved value or "dark") stays dark and shows the sun.
      toggleBtn.textContent = ICON_SUN;
    }

    // Click handler — flips the class, swaps the icon, and saves the choice.
    toggleBtn.addEventListener("click", () => {
      // Toggle the class on <body>. The CSS rules for body.light-mode will
      // override the :root custom properties and recolor the UI instantly.
      body.classList.toggle("light-mode");
      const isLight = body.classList.contains("light-mode");
      // Icon always shows the *target* theme — what a click will switch to.
      toggleBtn.textContent = isLight ? ICON_MOON : ICON_SUN;
      // Persist the new preference so the next visit restores it.
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  // ---------- 2) Visit counter (localStorage) ----------
  function initVisitCounter() {
    // Locate the <strong> element in the hero that displays the visit count.
    const countEl = document.getElementById("visit-count");
    if (!countEl) return;

    // Read the previous count. localStorage only stores strings, so we parse
    // it as an integer. `|| 0` covers the first visit (nothing stored yet) and
    // any corrupted/non-numeric value.
    const previous = parseInt(localStorage.getItem("visitCount"), 10) || 0;
    // This page load counts as one more visit — increment and store it back.
    const current = previous + 1;
    localStorage.setItem("visitCount", String(current));
    // Render the updated count into the DOM for the user to see.
    countEl.textContent = current;
  }

  // ---------- 3) Contact form ----------
  function initContactForm() {
    // Pick up the form element; exit quietly if the page doesn't have one.
    const form = document.getElementById("contact-form");
    if (!form) return;

    // Intercept the submit event so the browser doesn't reload the page.
    form.addEventListener("submit", (event) => {
      // Stop the default form submission — we're handling everything in JS.
      event.preventDefault();
      // FormData is the simplest way to read all the inputs by name at once.
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      // Minimal validation so an empty form doesn't silently appear to succeed.
      if (!name || !email || !message) {
        alert("Please fill out every field before sending.");
        return;
      }

      // In a real deployment this would POST to a server / email service.
      // For this demo we confirm receipt with an alert, as requested.
      alert(
        "Thanks, " +
          name +
          "! Your message has been received. I'll reply to " +
          email +
          " within 24 hours."
      );

      // Clear the fields so the user gets visual confirmation the form reset.
      form.reset();
    });
  }

  // ---------- 4) Smooth scroll + section reveal animations ----------
  function initSmoothScroll() {
    // Select every anchor whose href starts with "#" — these are the in-page
    // navigation links we want to animate (navbar links, hero CTAs, etc.).
    const anchors = document.querySelectorAll('a[href^="#"]');
    // Account for the sticky navbar's height so the target heading isn't
    // hidden behind it after the scroll finishes. Fall back to 80px if the
    // navbar element can't be found for any reason.
    const navbar = document.querySelector(".navbar");
    const navOffset = navbar ? navbar.offsetHeight + 12 : 80;

    anchors.forEach((link) => {
      // Attach a click handler to each anchor so we can animate the scroll
      // ourselves instead of letting the browser jump instantly.
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        // Ignore bare "#" links — they have no target section to scroll to.
        if (!targetId || targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;
        // Prevent the native jump-to-anchor so our smooth scroll takes over.
        event.preventDefault();
        // Compute the absolute Y position of the target, offset by the navbar
        // height so the heading lands below the sticky bar, not underneath it.
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - navOffset;
        // `behavior: "smooth"` lets the browser handle the easing curve.
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });

    // Also animate sections fading/sliding in as they enter the viewport.
    const sections = document.querySelectorAll("section");

    // If IntersectionObserver is missing (very old browsers), just show every
    // section immediately so content is never hidden from the user.
    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("section-visible"));
      return;
    }

    // The observer callback runs whenever a watched section crosses the
    // visibility threshold (12% of it visible in the viewport).
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When a section becomes visible, swap classes to trigger the CSS
          // transition and stop observing it — the reveal only needs to run
          // once per session, not every time the section scrolls in and out.
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Start every section in its hidden state and hand it to the observer.
    sections.forEach((section) => {
      section.classList.add("section-hidden");
      observer.observe(section);
    });
  }

  // Defer initialization until the DOM is ready. If the script is loaded
  // with `defer` the document is already parsed, so we handle both cases.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

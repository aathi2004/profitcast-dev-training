import { useEffect, useState } from "react";

export default function ContactModal({ service, onClose }) {
  // useState holds the form field values. Every keystroke calls setForm(...) which
  // re-renders the modal with the new values — that's what makes the inputs "controlled".
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  // Another useState tracks whether the form was submitted, so we can swap the
  // form out for a "thanks, we'll be in touch" confirmation view.
  const [submitted, setSubmitted] = useState(false);

  // useEffect #1 — listen for the Escape key so the user can close the modal
  // with the keyboard. We add the listener on mount and return a cleanup
  // function so React removes it when the modal unmounts (otherwise we'd
  // leak listeners every time the modal opens and closes).
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // useEffect #2 — lock the page behind the modal so it doesn't scroll while
  // the modal is open. We remember the original overflow style and restore it
  // when the modal unmounts, so we don't accidentally break scrolling elsewhere.
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // We merge the new value into the existing form object instead of replacing it,
    // so the other fields keep their values.
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app we'd POST to an API here. For now we just flip the submitted flag.
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Backdrop — clicking it closes the modal. */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900 shadow-2xl sm:rounded-3xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand-500/30 blur-3xl"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        {submitted ? (
          <div className="relative p-6 text-center sm:p-10">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
              </svg>
            </div>
            <h3
              id="contact-modal-title"
              className="mt-5 font-display text-2xl font-semibold text-white"
            >
              Request received
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-sm text-slate-400">
              Thanks, {form.name || "there"}. A senior strategist will reply about{" "}
              <span className={`font-semibold ${service?.accentText ?? "text-white"}`}>
                {service?.title}
              </span>{" "}
              within 4 business hours.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400">
              Request a service
            </p>
            <h3
              id="contact-modal-title"
              className="mt-2 font-display text-2xl font-semibold text-white"
            >
              {service?.title}
            </h3>
            <p className="mt-1.5 text-sm text-slate-400">
              Tell us about your business. We'll reply within 4 business hours.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-medium text-slate-300">
                Your name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-white/25 focus:bg-white/[0.06] focus:outline-none"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="text-xs font-medium text-slate-300">
                Work email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-white/25 focus:bg-white/[0.06] focus:outline-none"
                  placeholder="jane@company.com"
                />
              </label>
              <label className="text-xs font-medium text-slate-300">
                Company
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-white/25 focus:bg-white/[0.06] focus:outline-none"
                  placeholder="Acme Inc."
                />
              </label>
              <label className="text-xs font-medium text-slate-300">
                Monthly budget
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white focus:border-white/25 focus:bg-white/[0.06] focus:outline-none"
                >
                  <option value="">Select a range</option>
                  <option value="<5k">Under $5k</option>
                  <option value="5-15k">$5k – $15k</option>
                  <option value="15-50k">$15k – $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block text-xs font-medium text-slate-300">
              What are you trying to solve?
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-white/25 focus:bg-white/[0.06] focus:outline-none"
                placeholder={`Tell us about your goals for ${service?.title ?? "this service"}…`}
              />
            </label>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-slate-500">
                By submitting, you agree to receive a one-time reply from our team.
              </p>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Send request →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

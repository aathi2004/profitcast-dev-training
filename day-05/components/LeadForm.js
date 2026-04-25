"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Paint Protection Film",
  "Ceramic Coating",
  "Interior Detailing",
  "Engine Cleaning",
  "Not sure — recommend a package",
];

const VEHICLE_OPTIONS = [
  "Hatchback",
  "Sedan",
  "SUV / MUV",
  "Luxury / Premium",
  "Sports / Exotic",
];

const TRUST_BADGES = [
  "We'll call back in 30 mins (we mean it)",
  "Free pickup & drop in Vijayawada",
  "No advance, no pressure to book",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicleType: "",
    service: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").slice(-10))) {
      next.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!form.vehicleType) next.vehicleType = "Select your vehicle type";
    if (!form.service) next.service = "Select a service";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Wire to backend / CRM here. For now, surface success in-page.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-radial-gold opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-px relative w-full">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow">Drop us a line</span>
            <h2 className="mt-4 section-heading">
              Tell us about your car. <span className="text-gold">We'll call you back.</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-md">
              Just a few quick things. We'll ring you in 30 minutes with an
              honest quote. No pressure, no marketing calls — promise.
            </p>

            <ul className="mt-8 space-y-3">
              {TRUST_BADGES.map((badge) => (
                <li key={badge} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gold/15 text-gold">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                    </svg>
                  </span>
                  {badge}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-widest text-gold">Rather just call?</p>
              <a
                href="tel:+919876543210"
                className="mt-1 block font-display text-2xl font-bold text-white hover:text-gold transition-colors"
              >
                +91 98765 43210
              </a>
              <p className="mt-1 text-sm text-white/60">Mon to Sat · 9 AM – 8 PM</p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-gold/40 via-gold/10 to-transparent blur" />
              <div className="relative rounded-3xl border border-white/10 bg-carbon-light/80 backdrop-blur p-5 sm:p-6 lg:p-8 shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold">
                      Thanks {form.name.split(" ")[0]}, got it!
                    </h3>
                    <p className="mt-2 text-white/70 max-w-md mx-auto">
                      We'll call you on{" "}
                      <span className="text-gold font-semibold">{form.phone}</span>{" "}
                      in the next 30 minutes. Have your car keys handy 😊
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", phone: "", vehicleType: "", service: "" });
                      }}
                      className="mt-6 text-sm font-semibold text-gold hover:underline"
                    >
                      Send another one
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
                    <Field
                      label="Your name"
                      name="name"
                      required
                      error={errors.name}
                      className="sm:col-span-1"
                    >
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange("name")}
                        placeholder="What should we call you?"
                        className={inputClass(errors.name)}
                      />
                    </Field>

                    <Field
                      label="Phone (we'll call)"
                      name="phone"
                      required
                      error={errors.phone}
                      className="sm:col-span-1"
                    >
                      <input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        placeholder="98765 43210"
                        className={inputClass(errors.phone)}
                      />
                    </Field>

                    <Field
                      label="What kind of car?"
                      name="vehicleType"
                      required
                      error={errors.vehicleType}
                      className="sm:col-span-1"
                    >
                      <select
                        id="vehicleType"
                        value={form.vehicleType}
                        onChange={handleChange("vehicleType")}
                        className={`${inputClass(errors.vehicleType)} appearance-none pr-10`}
                      >
                        <option value="" disabled>
                          Pick one
                        </option>
                        {VEHICLE_OPTIONS.map((v) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="What do you need?"
                      name="service"
                      required
                      error={errors.service}
                      className="sm:col-span-1"
                    >
                      <select
                        id="service"
                        value={form.service}
                        onChange={handleChange("service")}
                        className={`${inputClass(errors.service)} appearance-none pr-10`}
                      >
                        <option value="" disabled>
                          Pick one (or "Not sure")
                        </option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <div className="sm:col-span-2 mt-2">
                      <button type="submit" className="btn-primary w-full">
                        Send my details
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                      </button>
                      <p className="mt-3 text-center text-xs text-white/50">
                        We won't spam you. We'll just call once with your quote.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError) {
  return `w-full rounded-xl border bg-carbon/60 px-4 py-3 text-base sm:text-sm text-white placeholder-white/30 outline-none transition-all focus:ring-2 focus:ring-gold/50 min-h-[44px] ${
    hasError ? "border-red-400/70 focus:border-red-400" : "border-white/10 focus:border-gold/50"
  }`;
}

function Field({ label, name, required, error, className = "", children }) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70"
      >
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

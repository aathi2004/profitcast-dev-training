import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ClientLogos from "./components/ClientLogos.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import Results from "./components/Results.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import ContactModal from "./components/ContactModal.jsx";
import Reveal from "./components/Reveal.jsx";

function App() {
  // useState tracks which service the user wants to request.
  // `null` = modal closed; a service object = modal open for that service.
  // Lifting this state to App means any part of the page (Services section,
  // card buttons, future CTAs) can open the modal by calling setRequestedService.
  const [requestedService, setRequestedService] = useState(null);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <ClientLogos />

        <ServicesSection onRequestService={setRequestedService} />

        <Results />

        <section id="process" className="border-t border-white/5 bg-ink-950/60">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400 sm:text-xs">
                  How we work
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                  A process that removes the guesswork.
                </h2>
              </div>
            </Reveal>

            <ol className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Audit & diagnose",
                  body: "We pull tracking, ad accounts, analytics, and CRM into one view to find where revenue is actually leaking. You get the audit on day 10 — even if you don't hire us.",
                },
                {
                  step: "02",
                  title: "Build the system",
                  body: "Creative, landing pages, campaign structure, and reporting — all shipped in the first 30 days. You approve the plan; we do the building.",
                },
                {
                  step: "03",
                  title: "Compound the wins",
                  body: "Weekly optimization cycles, monthly executive reviews, and quarterly roadmaps tied to your P&L. The flywheel gets faster the longer we run it.",
                },
              ].map(({ step, title, body }, i) => (
                <Reveal
                  as="li"
                  key={step}
                  delay={i * 100}
                  className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] sm:p-6"
                >
                  <p className="font-display text-sm text-accent-400">{step}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />

      {/* Conditionally render the modal only when a service has been requested.
          When the user closes it, we set requestedService back to null, which
          unmounts the modal and triggers its useEffect cleanup (removing the
          Escape listener and restoring body scroll). */}
      {requestedService && (
        <ContactModal
          service={requestedService}
          onClose={() => setRequestedService(null)}
        />
      )}
    </div>
  );
}

export default App;

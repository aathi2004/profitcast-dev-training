import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import PriceEstimator from "@/components/PriceEstimator";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import MobileCTABar from "@/components/MobileCTABar";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-carbon text-white pb-[5.5rem] md:pb-0">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Services />
      <PriceEstimator />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
      <FloatingActions />
      <BackToTop />
      <MobileCTABar />
    </main>
  );
}

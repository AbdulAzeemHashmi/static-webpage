import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingCalculator from "@/components/PricingCalculator";
import WhyChooseMe from "@/components/WhyChooseMe";
import ContactSection from "@/components/ContactSection";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#090d16]">
      <Header />
      <Hero />
      <Services />
      <PricingCalculator />
      <WhyChooseMe />
      <ContactSection />
      <WhatsAppWidget />
      <Footer />
    </main>
  );
}

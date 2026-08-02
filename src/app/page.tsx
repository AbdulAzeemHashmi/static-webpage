import { ToastProvider } from "@/components/ToastProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OrderWizard from "@/components/OrderWizard";
import DeliverableInspector from "@/components/DeliverableInspector";
import PortfolioGallery from "@/components/PortfolioGallery";
import Testimonials from "@/components/Testimonials";
import WhyChooseMe from "@/components/WhyChooseMe";
import ContactSection from "@/components/ContactSection";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ToastProvider>
      <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#090d16]">
        <Header />
        <Hero />
        <Services />
        <OrderWizard />
        <DeliverableInspector />
        <PortfolioGallery />
        <Testimonials />
        <WhyChooseMe />
        <ContactSection />
        <WhatsAppWidget />
        <Footer />
      </main>
    </ToastProvider>
  );
}

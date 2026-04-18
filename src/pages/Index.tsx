import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolarCalculator from "@/components/SolarCalculator";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EuroBuddy from "@/components/EuroBuddy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SolarCalculator />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <ProjectsShowcase />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <EuroBuddy />
    </div>
  );
};

export default Index;

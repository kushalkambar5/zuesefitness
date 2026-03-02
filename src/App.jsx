import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GallerySection from "./components/GallerySection";
import ContactFooter from "./components/ContactFooter";
import StickyMobileBar from "./components/StickyMobileBar";

function App() {
  return (
    <div className="min-h-screen bg-base text-secondary font-sans relative selection:bg-accent/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactFooter />
      <StickyMobileBar />
    </div>
  );
}

export default App;

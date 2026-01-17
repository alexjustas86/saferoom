import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import NotBunkerSection from "@/components/landing/NotBunkerSection";
import InteriorZonesSection from "@/components/landing/InteriorZonesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NotBunkerSection />
        <InteriorZonesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

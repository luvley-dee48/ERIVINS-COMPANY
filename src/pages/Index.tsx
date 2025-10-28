import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <ProcessSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;

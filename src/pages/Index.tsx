
import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ImpactSection />
      <FeaturedProjects />
      <TestimonialSection />
      <CallToAction />
    </main>
  );
};

export default Index;


import HeroSection from "@/components/join/HeroSection";
import SupportSection from "@/components/join/SupportSection";
import DonateSection from "@/components/join/DonateSection";
import ImpactStories from "@/components/join/ImpactStories";
import CtaSection from "@/components/join/CtaSection";

const JoinPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SupportSection />
      <DonateSection />
      <ImpactStories />
      <CtaSection />
    </div>
  );
};

export default JoinPage;

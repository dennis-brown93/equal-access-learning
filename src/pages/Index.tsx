
import RotatingBanner from "@/components/home/RotatingBanner";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/home/CallToAction";
import BlogCarousel from "@/components/home/BlogCarousel";
import VolunteerForm from "@/components/home/VolunteerForm";
import NewsletterPopup from "@/components/home/NewsletterPopup";
import AboutUsSection from "@/components/home/AboutUsSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import PartnershipSection from "@/components/home/PartnershipSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <RotatingBanner />
      <AboutUsSection />
      <VisionMissionSection />
      <WhatWeDoSection />
      <PartnershipSection />
      <BlogCarousel />
      <TestimonialSection />
      <VolunteerForm />
      <CallToAction />
      <NewsletterPopup />
    </main>
  );
};

export default Index;

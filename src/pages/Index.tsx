
import RotatingBanner from "@/components/home/RotatingBanner";
import ImpactSection from "@/components/home/ImpactSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/home/CallToAction";
import BlogCarousel from "@/components/home/BlogCarousel";
import VolunteerForm from "@/components/home/VolunteerForm";
import NewsletterPopup from "@/components/home/NewsletterPopup";

const Index = () => {
  return (
    <main className="min-h-screen">
      <RotatingBanner />
      <ImpactSection />
      <FeaturedProjects />
      <BlogCarousel />
      <TestimonialSection />
      <VolunteerForm />
      <CallToAction />
      <NewsletterPopup />
    </main>
  );
};

export default Index;

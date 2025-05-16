import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video Frame */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-3 transform rotate-1 md:p-4 relative z-10">
              <div className="rounded-lg overflow-hidden relative group">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="/images/pexels-kwakugriffn-14554003.jpg"
                    alt="Our team at work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors duration-300">
                    <button
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8 text-primary fill-primary" />
                    </button>
                  </div>
                </AspectRatio>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-100 -z-10 rounded-lg"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/10 -z-10 rounded-lg"></div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              About Equal Access Learning Foundation
            </h2>
            <p className="text-lg text-gray-700">
              The Equal Access Learning Foundation (EALF) is a Nigerian not-for-profit, non-political organization committed to transforming education for underserved and marginalized communities.
            </p>
            <p className="text-lg text-gray-700">
              We believe that every child deserves the opportunity to learn, grow, and thrive—regardless of their location, gender, or ability.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-4 bg-primary hover:bg-primary/90"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

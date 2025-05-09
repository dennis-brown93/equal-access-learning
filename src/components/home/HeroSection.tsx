
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-primary-100 to-primary-200 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Making a Difference,<br />
              <span className="text-primary-600">One Life at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Join us in our mission to create lasting change in communities around the world through sustainable development, education, and empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/donate">Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-500 text-primary-600 hover:bg-primary-100">
                <Link to="/mission">Our Mission</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 rounded-lg transform rotate-3"></div>
              <img 
                src="/placeholder.svg" 
                alt="Children smiling"
                className="relative z-10 rounded-lg shadow-xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

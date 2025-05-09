
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="section bg-primary-600 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Your support can transform lives and communities. Together, we can create lasting change for those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              <Link to="/donate">Make a Donation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

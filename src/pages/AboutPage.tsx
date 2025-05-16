
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <div className="bg-primary-100 py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About EALF</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Learn about our organization, our team, and our journey of creating positive change.
          </p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                The Equal Access Learning Foundation (EALF) is a Nigerian not-for-profit, non-political organization committed to transforming education for underserved and marginalized communities. We believe that every child deserves the opportunity to learn, grow, and thrive regardless of their location, gender, or ability.
              </p>
              <p className="text-gray-700 mb-4">
                The organization is dedicated to establishing libraries, strengthening educator capacity, and promoting equal learning access for all children, including those with disabilities.
              </p>
              <p className="text-gray-700">
                Founded on the principle of educational equity, EALF works to break down the systemic barriers that hinder access to quality learning. Through partnerships, community engagement, and innovation, we strive to create inclusive learning environments where no child is left behind.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-300 rounded-lg transform -rotate-3"></div>
                <img 
                  src="/images/pexels-seyhmuskino-28593055.jpg" 
                  alt="" 
                  className="relative z-10 rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Executive Director", image: "/placeholder.svg" },
              { name: "Michael Okonkwo", role: "Director of Programs", image: "/placeholder.svg" },
              { name: "Elena Rodriguez", role: "Chief Financial Officer", image: "/placeholder.svg" },
              { name: "David Chen", role: "Director of Partnerships", image: "/placeholder.svg" },
              { name: "Amina Patel", role: "Communications Director", image: "/placeholder.svg" },
              { name: "Robert Kim", role: "Development Director", image: "/placeholder.svg" }
            ].map((member, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="h-48 w-48 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-bold text-xl">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our mission. Check out our current openings or volunteer opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              <Link to="/careers">View Openings</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

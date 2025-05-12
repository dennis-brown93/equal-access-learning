
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Clean Water Initiative",
    category: "Infrastructure",
    description: "Providing access to clean water in rural communities through sustainable well construction and water purification systems.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3",
    link: "/work/clean-water"
  },
  {
    title: "Education for All",
    category: "Education",
    description: "Building schools and training teachers to ensure quality education for children in underserved regions.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
    link: "/work/education"
  },
  {
    title: "Community Healthcare",
    category: "Healthcare",
    description: "Delivering essential medical services and preventive care to communities with limited healthcare access.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
    link: "/work/healthcare"
  },
  {
    title: "Sustainable Agriculture",
    category: "Food Security",
    description: "Teaching sustainable farming techniques to improve crop yields and food security in vulnerable regions.",
    image: "https://images.unsplash.com/photo-1620706857370-0a9cbe11bfb7?ixlib=rb-4.0.3",
    link: "/work/agriculture"
  },
  {
    title: "Disaster Relief",
    category: "Emergency",
    description: "Providing emergency supplies, shelter, and support to communities affected by natural disasters.",
    image: "https://images.unsplash.com/photo-1516941064643-74aacd84843c?ixlib=rb-4.0.3",
    link: "/work/disaster-relief"
  },
  {
    title: "Women's Empowerment",
    category: "Gender Equality",
    description: "Supporting economic independence and educational opportunities for women and girls in marginalized communities.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3",
    link: "/work/women-empowerment"
  }
];

const WorkPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Work</h1>
            <p className="text-xl mb-8 text-white/90">
              Through sustainable development projects and community-led initiatives, 
              we're creating lasting positive change in communities worldwide.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-gray-700 mb-6">
                We believe in sustainable, community-led development that empowers local 
                populations and creates lasting change. Our projects are designed with 
                input from community members to ensure they meet real needs and create 
                ownership.
              </p>
              <p className="text-lg text-gray-700">
                Every initiative we undertake is carefully planned, implemented, and 
                monitored to ensure it delivers maximum impact and value. We partner 
                with local organizations to build capacity and ensure continuation after 
                our direct involvement ends.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary-200 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3"
                alt="Our team working in the field"
                className="relative z-10 w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-2 text-center">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Explore our various initiatives aimed at creating sustainable change and improving lives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm font-medium text-primary-600 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link 
                    to={project.link} 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Numbers */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-xl font-serif">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">45</div>
              <div className="text-xl font-serif">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-xl font-serif">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
              <div className="text-xl font-serif">Volunteers</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary-100 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to make a difference?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join us in our mission to create lasting positive change in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/donate">Make a Donation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-500 text-primary-600 hover:bg-primary-100">
                <Link to="/join">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;

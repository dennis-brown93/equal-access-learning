
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Clean Water Initiative",
    description: "Providing access to clean water in rural communities through sustainable well construction and water purification systems.",
    image: "/placeholder.svg",
    link: "/projects/clean-water"
  },
  {
    title: "Education for All",
    description: "Building schools and training teachers to ensure quality education for children in underserved regions.",
    image: "/placeholder.svg",
    link: "/projects/education"
  },
  {
    title: "Community Healthcare",
    description: "Delivering essential medical services and preventive care to communities with limited healthcare access.",
    image: "/placeholder.svg",
    link: "/projects/healthcare"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we're making a difference through our various initiatives around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={project.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="default" className="bg-primary-600 hover:bg-primary-700">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

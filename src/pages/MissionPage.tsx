
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MissionPage = () => {
  return (
    <main className="min-h-screen">
      <div className="bg-primary-100 py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Mission</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Empowering communities through sustainable development and compassionate action.
          </p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Our Vision & Mission</h2>
            <div className="space-y-8">
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                <h3 className="text-xl font-serif font-bold mb-3">Vision</h3>
                <p className="text-gray-700">
                  A world where every person has access to the resources, opportunities, and support they need to live with dignity and reach their full potential.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                <h3 className="text-xl font-serif font-bold mb-3">Mission</h3>
                <p className="text-gray-700">
                  To empower vulnerable communities through sustainable development initiatives that address immediate needs while building long-term resilience and self-sufficiency.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-serif font-bold mb-6">How We Work</h3>
              <p className="text-gray-700 mb-4">
                At KindHearts, we believe that lasting change comes from within communities. Rather than imposing outside solutions, we partner with local organizations and community leaders to develop programs that respect cultural contexts and build on existing strengths.
              </p>
              <p className="text-gray-700 mb-4">
                Our approach is guided by these principles:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Community-Led:</strong> We involve community members in every stage, from needs assessment to program design and evaluation.</li>
                <li><strong>Sustainable:</strong> We develop solutions that can be maintained by communities long after our direct involvement ends.</li>
                <li><strong>Holistic:</strong> We address interconnected challenges through integrated programs rather than isolated interventions.</li>
                <li><strong>Evidence-Based:</strong> We continuously measure our impact and adapt our approaches based on what works.</li>
                <li><strong>Transparent:</strong> We maintain open communication with donors, partners, and the communities we serve.</li>
              </ul>
              <p className="text-gray-700">
                Through this approach, we're able to create programs that not only meet immediate needs but also address root causes of poverty and inequality.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Education & Skills Development",
                description: "We build schools, train teachers, and develop curriculum to provide quality education. We also offer vocational training to youth and adults to increase economic opportunities.",
                image: "/placeholder.svg",
                link: "/programs/education"
              },
              {
                title: "Community Healthcare",
                description: "We improve access to healthcare through mobile clinics, health worker training, and preventive care education, with a focus on maternal and child health.",
                image: "/placeholder.svg",
                link: "/programs/healthcare"
              },
              {
                title: "Clean Water & Sanitation",
                description: "We construct wells, water purification systems, and sanitation facilities while educating communities about hygiene practices to prevent waterborne diseases.",
                image: "/placeholder.svg",
                link: "/programs/water"
              },
              {
                title: "Economic Empowerment",
                description: "We provide microloans, business training, and market access to help community members start and grow sustainable livelihoods.",
                image: "/placeholder.svg",
                link: "/programs/economic"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img 
                  src={area.image}
                  alt={area.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-serif font-bold mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{area.description}</p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to={area.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Support Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your contribution enables us to continue our vital work in communities around the world.
            Every donation makes a difference.
          </p>
          <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
            <Link to="/donate">Make a Donation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default MissionPage;

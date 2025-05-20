
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const whatWeDo = [
  {
    title: "Library Development",
    description: "We establish and equip community-based libraries to foster a culture of reading and lifelong learning.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3"
  },
  {
    title: "Educator Training",
    description: "We strengthen the capacity of teachers and school leaders through workshops, mentoring, and access to innovative teaching resources.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3"
  },
  {
    title: "Inclusive Education Programs",
    description: "We champion education for children with disabilities, girls, and other marginalized groups, providing tailored support to help them succeed.",
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3"
  },
  {
    title: "Technology in Learning",
    description: "We integrate digital tools and e-learning platforms to reach learners in remote areas.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3"
  },
  {
    title: "Community Engagement",
    description: "We work closely with local stakeholders to design solutions that address their unique educational challenges.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3"
  }
];

const partners = [
  {
    title: "Public and Private Schools",
    description: "Partnerships with primary, secondary, and special schools to improve infrastructure and learning environments.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3"
  },
  {
    title: "Community-Based Organizations",
    description: "EALF engages with community leaders, parents, and members to ensure project sustainability.",
    image: "https://images.unsplash.com/photo-1576765608622-067973d6a6d3?ixlib=rb-4.0.3"
  },
  {
    title: "Local and International NGOs",
    description: "We collaborate with other NGOs to reach more remote areas and enhance effectiveness.",
    image: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3"
  },
  {
    title: "Government Education Agencies",
    description: "Collaboration with state and local education authorities to align with national education goals.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3"
  },
  {
    title: "Development Partners and Donors",
    description: "We work with other NGOs, international organizations, and corporate sponsors to scale and sustain our work.",
    image: "https://images.unsplash.com/photo-1558522195-e1201b090344?ixlib=rb-4.0.3"
  },
  {
    title: "Parents and Community Leaders",
    description: "Together, we drive local support for educational transformation.",
    image: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-4.0.3"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.1,
      duration: 0.6,
      ease: "easeOut" 
    }
  })
};

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7,
      ease: "easeOut"
    } 
  }
};

const WorkPage = () => {
  // Initialize IntersectionObserver for elements
  const [viewportHeight, setViewportHeight] = useState(0);
  
  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="bg-primary-600 text-white py-16 md:py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <motion.div 
            variants={textVariants}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Work</h1>
            <p className="text-xl mb-8 text-white/90">
              Creating educational access where it's needed most.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Where We Work Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="relative rounded-lg overflow-hidden"
              variants={imageVariants}
            >
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-200 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1589519160732-57fc6a9dfe40?ixlib=rb-4.0.3" 
                alt="Map of Nigeria showing rural areas"
                className="relative z-10 w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div variants={textVariants}>
              <h2 className="text-3xl font-serif font-bold mb-6">Where We Work</h2>
              <p className="text-lg text-gray-700">
                EALF operates across various rural, underserved, and hard-to-reach communities in Nigeria. 
                These include areas with limited infrastructure, scarce educational resources, 
                and high numbers of out-of-school children. We prioritize locations where the need 
                is greatest—ensuring that interventions are impactful and sustainable.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our focused initiatives create lasting educational impact in underserved communities.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
              >
                <motion.div 
                  className="bg-white rounded-lg overflow-hidden h-full shadow-sm border border-gray-100"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-3 text-primary-600">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Who We Work With */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Who We Work With</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our partnerships expand our reach and strengthen our impact across communities.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
              >
                <motion.div 
                  className="bg-gray-50 rounded-lg overflow-hidden h-full border border-gray-100"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "#003399"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={partner.image}
                      alt={partner.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-3 text-primary-600">{partner.title}</h3>
                    <p className="text-gray-700">{partner.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div 
            className="bg-primary-100 rounded-lg p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to make a difference?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join us in our mission to create lasting educational change in communities across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/donate">Make a Donation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-500 text-primary-600 hover:bg-primary-100">
                <Link to="/join">Volunteer With Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;

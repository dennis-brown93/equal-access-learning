
import { motion } from "framer-motion";

interface StoryProps {
  name: string;
  location: string;
  quote: string;
  image: string;
}

const ImpactStories = () => {
  const stories: StoryProps[] = [
    {
      name: "Amina's Story",
      location: "Kano State",
      quote: "Access to books changed my life. I can now dream of becoming a doctor.",
      image: "/images/pexels-aristotle-guweh-jr-1643208950-28638748.jpg"
    },
    {
      name: "Teacher Emmanuel",
      location: "Lagos State",
      quote: "The training program gave me new tools to engage students who were falling behind.",
      image: "/images/pexels-kwakugriffn-14554003.jpg"
    },
    {
      name: "Inclusive Learning Center",
      location: "Abuja",
      quote: "Materials adapted for different abilities have allowed every child in our community to learn.",
      image: "/images/pexels-katerina-holmes-5905467.jpg"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.h2
          className="text-4xl font-serif font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Stories of Impact
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          See how your support transforms lives and communities.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{story.location}</p>
                <p className="italic">"{story.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;

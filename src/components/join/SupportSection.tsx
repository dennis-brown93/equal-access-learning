
import { motion } from "framer-motion";
import { HandHelping, Handshake, Megaphone } from "lucide-react";
import SupportCard from "./SupportCard";

const SupportSection = () => {
  const supportCards = [
    {
      title: "Volunteer",
      icon: <HandHelping className="h-8 w-8 text-primary" />,
      description: "Volunteer your skills or time",
      imagePath: "/images/pexels-rdne-6646918.jpg",
      alt: "Volunteers working together"
    },
    {
      title: "Partner",
      icon: <Handshake className="h-8 w-8 text-primary" />,
      description: "Partner with us on education projects",
      imagePath: "/images/pexels-katerina-holmes-5905903.jpg",
      alt: "People in a partnership meeting"
    },
    {
      title: "Advocate",
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      description: "Spread awareness about educational inequality",
      imagePath: "/images/pexels-director-muuh-321947994-20101037.jpg",
      alt: "Person advocating"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.h2
          className="text-4xl font-serif font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Support Us
        </motion.h2>
        <motion.p
          className="text-lg text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your involvement can change lives. Whether you're a volunteer, advocate, or educator, there's a place for you in our mission. Here's how you can help:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportCards.map((card, index) => (
            <SupportCard 
              key={index}
              {...card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;


import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const whatWeDoItems = [
  {
    title: "Library Development",
    description: "We establish and equip community-based libraries to foster a culture of reading and lifelong learning.",
    image: "/images/pexels-rdne-6646918.jpg"
  },
  {
    title: "Educator Training",
    description: "We strengthen the capacity of teachers and school leaders through workshops, mentoring, and access to innovative teaching resources.",
    image: "/images/pexels-katerina-holmes-5905903.jpg"
  },
  {
    title: "Inclusive Education Programs",
    description: "We champion education for children with disabilities, girls, and other marginalized groups, providing tailored support to help them succeed.",
    image: "/images/pexels-kema-6869140.jpg"
  },
  {
    title: "Technology in Learning",
    description: "We integrate digital tools and e-learning platforms to reach learners in remote areas.",
    image: "/images/pexels-katerina-holmes-5905467.jpg"
  },
  {
    title: "Community Engagement",
    description: "We work closely with local stakeholders to design solutions that address their unique educational challenges.",
    image: "/images/pexels-scott-ehimare-2175050-20333029.jpg"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    }
  })
};

const WhatWeDoSection = () => {
  return (
    <section className="section bg-primary-100/50">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our programs and initiatives are designed to create lasting impact in education across underserved communities.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeDoItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <motion.div 
                className="h-full"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2 text-primary-600">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;

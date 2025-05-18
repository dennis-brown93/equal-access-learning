
import { motion } from "framer-motion";

const partners = [
  {
    title: "Public and Private Schools",
    description: "Partnerships with primary, secondary, and special schools to improve infrastructure and learning environments.",
    image: "/images/pexels-uniqueerique-6346833.jpg"
  },
  {
    title: "Community-Based Organizations",
    description: "Engagement with community leaders, parents, and members to ensure project sustainability.",
    image: "/images/pexels-zachary-vessels-26649727-6794181.jpg"
  },
  {
    title: "Local and International NGOs",
    description: "Collaboration with other NGOs to extend reach and enhance effectiveness.",
    image: "/images/pexels-director-muuh-321947994-20101037.jpg"
  },
  {
    title: "Government Education Agencies",
    description: "Partnering with state and local education authorities to align with national education goals.",
    image: "/images/pexels-olanma-etigwe-uwa-2199781-4782467.jpg"
  },
  {
    title: "Development Partners and Donors",
    description: "Collaborating with corporate sponsors and international organizations to scale and sustain impact.",
    image: "/images/pexels-seyhmuskino-28593054.jpg"
  },
  {
    title: "Parents and Community Leaders",
    description: "Mobilizing local support and co-creating solutions that address educational challenges.",
    image: "/images/pexels-japhet-kweba-84748259-9882049.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const PartnershipSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Who We Work With
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our impact is made possible through strategic partnerships with various stakeholders committed to education.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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
  );
};

export default PartnershipSection;

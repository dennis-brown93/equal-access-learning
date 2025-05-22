
import { motion } from "framer-motion";
import { Book, GraduationCap, Accessibility, Baby, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DonateSection = () => {
  const donationImpacts = [
    {
      icon: <Book className="h-6 w-6" />,
      text: "Build libraries in communities with no access to books"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      text: "Train teachers to better serve their students"
    },
    {
      icon: <Accessibility className="h-6 w-6" />,
      text: "Provide learning materials for children with disabilities"
    },
    {
      icon: <Baby className="h-6 w-6" />,
      text: "Empower girls through targeted educational programs"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      text: "Bring digital education to the most remote areas"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.h2
          className="text-4xl font-serif font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Donate
        </motion.h2>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Your donation fuels our impact. Contributions go directly toward:
            </motion.p>

            <div className="space-y-4">
              {donationImpacts.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex-shrink-0 bg-primary-100 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="mt-8 text-lg font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A single donation can unlock a lifetime of opportunity. Join us in making learning possible for all.
            </motion.p>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
                <Link to="/donate">Donate Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;

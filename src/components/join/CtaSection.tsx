
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container text-center">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Make a Difference?
        </motion.h2>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

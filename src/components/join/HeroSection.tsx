
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10"></div>
      <img
        src="/images/pexels-olanma-etigwe-uwa-2199781-4782467.jpg"
        alt="Students learning"
        className="absolute w-full h-full object-cover"
      />
      <div className="container relative z-20 text-white text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-serif font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Join Us
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Be part of something bigger — support equitable education.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;

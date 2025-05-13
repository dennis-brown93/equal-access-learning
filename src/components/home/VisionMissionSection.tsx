import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="section bg-primary-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guiding principles that drive our work and impact around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <VisionMissionCard
            title="Our Vision"
            content="A world where every individual has access to the resources, opportunities, and support needed to live a dignified life and reach their full potential."
            icon={<Lightbulb className="h-6 w-6" />}
            iconBg="bg-primary-200"
          />

          {/* Mission Card */}
          <VisionMissionCard
            title="Our Mission"
            content="To empower communities through sustainable development initiatives, focusing on education, healthcare, economic empowerment, and disaster relief to create lasting positive change."
            icon={<Target className="h-6 w-6" />}
            iconBg="bg-secondary/10"
          />
        </div>
      </div>
    </section>
  );
};

interface VisionMissionCardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  iconBg: string;
}

const VisionMissionCard = ({
  title,
  content,
  icon,
  iconBg,
}: VisionMissionCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 h-full"
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 },
      }}
      initial={{
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start mb-4">
          <motion.div
            className={`p-3 rounded-full mr-4 ${iconBg}`}
            initial={{ x: -20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-serif font-bold">{title}</h3>
        </div>
        <p className="text-gray-700 flex-grow">{content}</p>
      </div>
    </motion.div>
  );
};

export default VisionMissionSection;

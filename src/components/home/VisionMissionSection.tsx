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
            Guiding principles that drive our work and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <VisionMissionCard
            title="Our Vision"
            content="To promote inclusive, equitable, and quality education for underserved and marginalized communities in Nigeria by removing barriers to learning, empowering educators, and fostering community-driven solutions for lifelong learning."
            icon={<Lightbulb className="h-6 w-6" />}
            iconBg="bg-primary-200"
          />

          {/* Mission Card */}
          <VisionMissionCard
            title="Our Mission"
            content="A Nigeria where every child and youth, regardless of background or location, has equal access to learning opportunities that unlock their full potential and contribute to national development.
"
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
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
        hover: {
          scale: 1.03,
          boxShadow:
            "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
        },
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <motion.div
          className="flex items-start mb-4"
          variants={{
            rest: {},
            hover: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className={`p-3 rounded-full mr-4 ${iconBg}`}
            variants={{
              rest: { x: -10, opacity: 0 },
              hover: { x: 0, opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-serif font-bold">{title}</h3>
        </motion.div>
        <p className="text-gray-700 flex-grow">{content}</p>
      </div>
    </motion.div>
  );
};

export default VisionMissionSection;

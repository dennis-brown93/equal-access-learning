
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SupportCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  imagePath: string;
  alt: string;
  index: number;
}

const SupportCard = ({ title, icon, description, imagePath, alt, index }: SupportCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="relative h-60 overflow-hidden cursor-pointer group">
            <img
              src={imagePath}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-bold">{title}</h3>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">About {title}ing</h4>
              <p className="text-sm">
                Learn more about how you can make a difference through {title.toLowerCase()}ing with EALF.
              </p>
              <div className="flex pt-2">
                <Button asChild variant="outline" size="sm">
                  <Link to="/join">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-bold ml-3">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default SupportCard;

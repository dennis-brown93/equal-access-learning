
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { School, Users, HandHeart, Bulb, Handshake } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const objectives = [
  {
    title: "Expand Access to Quality Education",
    description: "Provide inclusive and equitable learning opportunities for children and youth in underserved and marginalized communities.",
    icon: School,
    iconBg: "bg-primary-100",
    color: "text-primary-600"
  },
  {
    title: "Promote Gender Equality and Inclusion",
    description: "Support girls' education and ensure learning access for children with disabilities and other vulnerable groups.",
    icon: Users,
    iconBg: "bg-secondary/10",
    color: "text-secondary"
  },
  {
    title: "Strengthen Teacher Capacity and Learning Resources",
    description: "Enhance the skills of educators and improve the availability of learning materials and infrastructure.",
    icon: Bulb,
    iconBg: "bg-amber-100",
    color: "text-amber-600"
  },
  {
    title: "Leverage Innovation and Technology",
    description: "Integrate digital tools and innovative methods to improve education delivery in remote and low-resource areas.",
    icon: HandHeart,
    iconBg: "bg-emerald-100",
    color: "text-emerald-600"
  },
  {
    title: "Advocate for Education Policy Reform",
    description: "Engage communities and influence public policy to prioritize investment in inclusive and quality education.",
    icon: Handshake,
    iconBg: "bg-purple-100",
    color: "text-purple-600"
  }
];

const AimsObjectives = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Aims & Objectives</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="flex h-full"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="bg-white h-full border-0 shadow-sm hover:shadow-md transition-all duration-200">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full mr-3 ${objective.iconBg}`}>
                      <objective.icon className={`h-6 w-6 ${objective.color}`} />
                    </div>
                    <h3 className="text-xl font-serif font-bold">{objective.title}</h3>
                  </div>
                  <p className="text-gray-700 flex-grow">{objective.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AimsObjectives;

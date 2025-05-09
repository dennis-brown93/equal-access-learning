
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const impacts = [
  {
    title: "15,000+",
    description: "Lives Improved",
    icon: "❤️"
  },
  {
    title: "140+",
    description: "Community Projects",
    icon: "🏘️"
  },
  {
    title: "30+",
    description: "Countries Reached",
    icon: "🌍"
  },
  {
    title: "95%",
    description: "Funds to Programs",
    icon: "💰"
  }
];

const ImpactSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            For over a decade, we've been working tirelessly to create positive change around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow hover-lift">
              <CardHeader className="text-center pt-8">
                <div className="text-4xl mb-4">{impact.icon}</div>
                <CardTitle className="text-3xl font-bold text-primary-600">{impact.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

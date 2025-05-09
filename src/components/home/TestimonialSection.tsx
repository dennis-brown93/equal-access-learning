
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The work that KindHearts does has transformed our entire community. We now have clean water and our children can attend school regularly.",
    author: "Maria Rodriguez",
    role: "Community Leader",
    location: "El Salvador"
  },
  {
    quote: "Supporting KindHearts has been one of the most meaningful decisions of my life. I've seen firsthand how effectively they use donations to create real change.",
    author: "James Wilson",
    role: "Monthly Donor",
    location: "United States"
  },
  {
    quote: "The healthcare program implemented by KindHearts in our village has saved countless lives. We are eternally grateful for their support.",
    author: "Amara Okafor",
    role: "Healthcare Worker",
    location: "Nigeria"
  }
];

const TestimonialSection = () => {
  return (
    <section className="section bg-primary-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Voices of Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people whose lives have been changed through our work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white hover-lift">
              <CardContent className="p-6">
                <div className="text-4xl text-primary-300 mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;


import { motion } from "framer-motion";
import { HandHelping, Handshake, Megaphone, Book, GraduationCap, Accessibility, Baby, Heart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const JoinPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

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

  const supportCards = [
    {
      title: "Volunteer",
      icon: <HandHelping className="h-8 w-8 text-primary" />,
      description: "Volunteer your skills or time",
      imagePath: "/images/pexels-rdne-6646918.jpg",
      alt: "Volunteers working together"
    },
    {
      title: "Partner",
      icon: <Handshake className="h-8 w-8 text-primary" />,
      description: "Partner with us on education projects",
      imagePath: "/images/pexels-katerina-holmes-5905903.jpg",
      alt: "People in a partnership meeting"
    },
    {
      title: "Advocate",
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      description: "Spread awareness about educational inequality",
      imagePath: "/images/pexels-director-muuh-321947994-20101037.jpg",
      alt: "Person advocating"
    }
  ];

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
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Support Us Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.h2
            className="text-4xl font-serif font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Support Us
          </motion.h2>
          <motion.p
            className="text-lg text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your involvement can change lives. Whether you're a volunteer, advocate, or educator, there's a place for you in our mission. Here's how you can help:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportCards.map((card, index) => (
              <motion.div
                key={index}
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
                        src={card.imagePath}
                        alt={card.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <h3 className="text-white text-xl font-bold">{card.title}</h3>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">About {card.title}ing</h4>
                        <p className="text-sm">
                          Learn more about how you can make a difference through {card.title.toLowerCase()}ing with EALF.
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
                    {card.icon}
                    <h3 className="text-xl font-bold ml-3">{card.title}</h3>
                  </div>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
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

      {/* Impact Stories */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.h2
            className="text-4xl font-serif font-bold mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Stories of Impact
          </motion.h2>
          
          <motion.p 
            className="text-lg text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See how your support transforms lives and communities.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Amina's Story",
                location: "Kano State",
                quote: "Access to books changed my life. I can now dream of becoming a doctor.",
                image: "/images/pexels-aristotle-guweh-jr-1643208950-28638748.jpg"
              },
              {
                name: "Teacher Emmanuel",
                location: "Lagos State",
                quote: "The training program gave me new tools to engage students who were falling behind.",
                image: "/images/pexels-kwakugriffn-14554003.jpg"
              },
              {
                name: "Inclusive Learning Center",
                location: "Abuja",
                quote: "Materials adapted for different abilities have allowed every child in our community to learn.",
                image: "/images/pexels-katerina-holmes-5905467.jpg"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{story.location}</p>
                  <p className="italic">"{story.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
    </div>
  );
};

export default JoinPage;

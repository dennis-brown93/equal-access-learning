
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DonationForm from "@/components/donation/DonationForm";

const DonatePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

  return (
    <main className="min-h-screen">
      <div className="bg-primary-100 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Make a Donation
            </motion.h1>
            <motion.div 
              className="space-y-4 text-lg text-gray-700"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
            >
              <p className="font-bold">Your donations go directly to:</p>
              <ul className="space-y-2">
                <motion.li variants={fadeIn} custom={2}>
                  Setting up libraries in resource-poor communities
                </motion.li>
                <motion.li variants={fadeIn} custom={3}>
                  Providing inclusive learning materials for children with disabilities
                </motion.li>
                <motion.li variants={fadeIn} custom={4}>
                  Training educators to improve classroom outcomes
                </motion.li>
              </ul>
              <motion.p variants={fadeIn} custom={5}>
                Every naira or dollar counts. Help us bring learning to life — one child, one community at a time.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Your Impact</h2>
              <div className="space-y-6">
                <motion.div 
                  className="bg-primary-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h3 className="font-bold text-xl mb-2">₦2,000</h3>
                  <p>Provides school supplies for a child for one term.</p>
                </motion.div>
                <motion.div 
                  className="bg-primary-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <h3 className="font-bold text-xl mb-2">₦5,000</h3>
                  <p>Funds classroom materials for a rural school.</p>
                </motion.div>
                <motion.div 
                  className="bg-primary-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <h3 className="font-bold text-xl mb-2">₦10,000</h3>
                  <p>Sponsors teacher training for improved classroom methods.</p>
                </motion.div>
                <motion.div 
                  className="bg-primary-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <h3 className="font-bold text-xl mb-2">₦20,000</h3>
                  <p>Helps establish a mini-library in an underserved community.</p>
                </motion.div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Our Commitment to Transparency</h3>
                <p className="text-gray-700">
                  We're committed to using your donations efficiently and effectively. 90% of all donations go directly to our programs, with only 10% used for administrative costs. Our financial statements are audited annually and publicly available.
                </p>
              </div>
            </div>
            <div>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Other Ways to Give</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In addition to one-time donations, there are many other ways you can support our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly Giving",
                description: "Become a sustaining donor with a monthly gift that provides reliable funding for our programs.",
                icon: "🔄"
              },
              {
                title: "Corporate Partnerships",
                description: "Partner with us to align your business with social impact and engage your employees in meaningful causes.",
                icon: "🏢"
              },
              {
                title: "Legacy Giving",
                description: "Create a lasting impact by including us in your will or estate planning.",
                icon: "📝"
              },
            ].map((option, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link to="/join" className="inline-flex items-center text-primary hover:underline group text-lg font-medium">
              Want to support in other ways? Join us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;

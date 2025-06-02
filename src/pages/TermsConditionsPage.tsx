
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Scale, CheckCircle, FileText, Mail, Phone, MapPin, Shield, Users, Gavel } from 'lucide-react';

const TermsConditionsPage = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-section') || '0');
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getSectionClasses = (index: number) => {
    return visibleSections.has(index) ? 'animate-fade-in' : 'opacity-0 translate-y-8';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.section 
        className="pt-24 pb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Scale className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of 
              Equal Access Learning Foundation's website and services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: June 2025
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(1)}`}
              ref={setSectionRef(1)}
              data-section="1"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Welcome to Equal Access Learning Foundation. These Terms and Conditions ("Terms", "Terms and Conditions") 
                  govern your use of our website located at www.equalaccesslearning.org (the "Service") operated by 
                  Equal Access Learning Foundation ("us", "we", or "our").
                </p>
                <p>
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with 
                  any part of these terms, then you may not access the Service.
                </p>
              </CardContent>
            </Card>

            {/* Detailed Terms in Accordion */}
            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(2)}`}
              ref={setSectionRef(2)}
              data-section="2"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <Gavel className="w-6 h-6 text-primary" />
                  Detailed Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="acceptance" className="border-b border-gray-200">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">Acceptance of Terms</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                      <p className="mb-3">
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                      </p>
                      <p>
                        If you do not agree to abide by the above, please do not use this service. Your continued use of the website 
                        following the posting of changes to these terms will be deemed your acceptance of those changes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="services" className="border-b border-gray-200">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold">Use of Services</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                      <p className="mb-3">Our services are provided for educational and charitable purposes. You may use our services to:</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Learn about our educational programs and initiatives</li>
                        <li>Make donations to support our cause</li>
                        <li>Volunteer for our programs</li>
                        <li>Access educational resources we provide</li>
                        <li>Contact us for information or support</li>
                      </ul>
                      <p>
                        You agree to use our services only for lawful purposes and in accordance with these Terms.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="intellectual-property" className="border-b border-gray-200">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-purple-600" />
                        <span className="font-semibold">Intellectual Property</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                      <p className="mb-3">
                        The content on this website, including but not limited to text, graphics, images, logos, and software, 
                        is the property of Equal Access Learning Foundation and is protected by Nigerian and international copyright laws.
                      </p>
                      <p className="mb-3">
                        You may not reproduce, distribute, or create derivative works from our content without explicit written permission.
                      </p>
                      <p>
                        Educational materials may be shared for non-commercial educational purposes with proper attribution.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="user-conduct" className="border-b border-gray-200">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold">User Conduct</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                      <p className="mb-3">You agree not to use our services to:</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Violate any laws or regulations</li>
                        <li>Harass, abuse, or harm others</li>
                        <li>Distribute spam or malicious content</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Interfere with the proper functioning of our website</li>
                        <li>Impersonate others or provide false information</li>
                      </ul>
                      <p>
                        We reserve the right to terminate access for users who violate these guidelines.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="termination" className="border-b border-gray-200">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-red-600" />
                        <span className="font-semibold">Termination</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                      <p className="mb-3">
                        We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                        for any reason whatsoever, including without limitation if you breach the Terms.
                      </p>
                      <p>
                        Upon termination, your right to use the service will cease immediately. All provisions of the Terms 
                        which by their nature should survive termination shall survive termination.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="disclaimers" className="border-b border-gray-200">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-gray-600" />
                        <span className="font-semibold">Disclaimers & Limitation of Liability</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                      <p className="mb-3">
                        Our services are provided "as is" without any representations or warranties, express or implied. 
                        We do not warrant that our services will be uninterrupted, secure, or error-free.
                      </p>
                      <p className="mb-3">
                        In no event shall Equal Access Learning Foundation be liable for any indirect, incidental, 
                        special, consequential, or punitive damages resulting from your use of our services.
                      </p>
                      <p>
                        Our total liability to you for any damages shall not exceed the amount you have paid to us in the past 12 months.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="governing-law" className="border-b border-gray-200">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Gavel className="w-5 h-5 text-blue-800" />
                        <span className="font-semibold">Governing Law</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                      <p className="mb-3">
                        These Terms shall be interpreted and governed in accordance with the laws of the Federal Republic of Nigeria, 
                        without regard to its conflict of law provisions.
                      </p>
                      <p>
                        Any disputes arising from these Terms or your use of our services shall be resolved in the courts of Abuja, Nigeria.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* About Organization */}
            <Card className={`shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50 transition-all duration-700 ${getSectionClasses(3)}`}
              ref={setSectionRef(3)}
              data-section="3"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About Equal Access Learning Foundation</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Equal Access Learning Foundation is an NGO based in Abuja, Nigeria, committed to providing 
                  equitable access to quality education and digital empowerment for underserved communities.
                </p>
                
                <Separator className="my-6" />
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@equalaccesslearning.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">08033053259</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">5, Adegboyega Awomolo Close, Abuja, FCT, Nigeria</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;

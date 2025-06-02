
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, User, Lock, Mail, Phone, MapPin, FileText, CreditCard, Monitor, Receipt, Link, Map } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Equal Access Learning Foundation, we are committed to protecting your privacy 
              and ensuring transparency in how we collect, use, and safeguard your personal information.
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
            
            {/* Section 1: Information We Collect */}
            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(1)}`}
              ref={setSectionRef(1)}
              data-section="1"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                  <User className="w-6 h-6 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                    <p className="text-gray-700 text-sm">Name, email address, phone number, and mailing address when you contact us or sign up for our services.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <CreditCard className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Donation Information</h4>
                    <p className="text-gray-700 text-sm">Payment details and donation history when you make contributions to our organization.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <Monitor className="w-8 h-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Website Usage Data</h4>
                    <p className="text-gray-700 text-sm">IP address, browser type, pages visited, and time spent on our website through cookies and analytics tools.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: How We Collect Information */}
            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(2)}`}
              ref={setSectionRef(2)}
              data-section="2"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                  How We Collect Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Directly from you when you fill out forms, make donations, or contact us</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Automatically through cookies and tracking technologies when you visit our website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>From third-party payment processors when you make donations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Through social media platforms when you interact with our content</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 3: How We Use Information */}
            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(3)}`}
              ref={setSectionRef(3)}
              data-section="3"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Primary Uses:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Process donations and send receipts
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Communicate about our programs and impact
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Respond to inquiries and provide support
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Improve our website and services
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Secondary Uses:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Send newsletters and updates (with consent)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Analyze website usage patterns
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Comply with legal obligations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Protect against fraud and abuse
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Disclosure of Information */}
            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(4)}`}
              ref={setSectionRef(4)}
              data-section="4"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                  <Receipt className="w-6 h-6 text-primary" />
                  Disclosure of Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">With Service Providers</h4>
                    <p className="text-gray-700 text-sm">Trusted third parties who assist us with payment processing, email delivery, and website analytics.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                    <p className="text-gray-700 text-sm">When required by law, court order, or government request.</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">With Your Consent</h4>
                    <p className="text-gray-700 text-sm">When you explicitly authorize us to share your information for specific purposes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Data Security */}
            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(5)}`}
              ref={setSectionRef(5)}
              data-section="5"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                  <Lock className="w-6 h-6 text-primary" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">We implement industry-standard security measures to protect your personal information:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Encryption</h4>
                      <p className="text-gray-600 text-xs">SSL encryption for data transmission</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Lock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Access Controls</h4>
                      <p className="text-gray-600 text-xs">Limited access to authorized personnel</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sections 6-11 (condensed for brevity) */}
            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(6)}`}
              ref={setSectionRef(6)}
              data-section="6"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
              </CardContent>
            </Card>

            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(7)}`}
              ref={setSectionRef(7)}
              data-section="7"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
                  User Rights Under the NDPR
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Under Nigeria's Data Protection Regulation (NDPR), you have the right to access, correct, delete, or transfer your personal data. Contact us to exercise these rights.
              </CardContent>
            </Card>

            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(8)}`}
              ref={setSectionRef(8)}
              data-section="8"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
                  Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Our services are not directed to children under 13, and we do not knowingly collect personal information from children under this age.
              </CardContent>
            </Card>

            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(9)}`}
              ref={setSectionRef(9)}
              data-section="9"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">9</span>
                  <Link className="w-6 h-6 text-primary" />
                  External Links
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Our website may contain links to external sites. We are not responsible for the privacy practices of these third-party websites.
              </CardContent>
            </Card>

            <Card 
              className={`shadow-lg border-0 transition-all duration-700 ${getSectionClasses(10)}`}
              ref={setSectionRef(10)}
              data-section="10"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">10</span>
                  Updates to this Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date.
              </CardContent>
            </Card>

            {/* About Organization */}
            <Card className={`shadow-lg border-0 bg-gradient-to-r from-blue-50 to-green-50 transition-all duration-700 ${getSectionClasses(11)}`}
              ref={setSectionRef(11)}
              data-section="11"
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

export default PrivacyPolicyPage;

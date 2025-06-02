
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Cookie } from 'lucide-react';

const CookiePolicyPage = () => {
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

  const getSectionClasses = (index: number) => {
    return `transition-all duration-700 ease-out ${
      visibleSections.has(index)
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section 
        className={`pt-24 pb-16 ${getSectionClasses(0)}`}
        ref={setSectionRef(0)}
        data-section="0"
      >
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Learn how the Equal Access Learning Foundation uses cookies and similar 
              tracking technologies on our website.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: June 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Section 1 */}
            <Card 
              className={`shadow-lg border-0 ${getSectionClasses(1)}`}
              ref={setSectionRef(1)}
              data-section="1"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                  What are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed text-lg">
                Cookies are small text files placed on your device to help websites function 
                efficiently and provide information to site owners.
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card 
              className={`shadow-lg border-0 ${getSectionClasses(2)}`}
              ref={setSectionRef(2)}
              data-section="2"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                  How We Use Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                    <p className="text-gray-700">Enable core website functionality.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                    <p className="text-gray-700">Track and analyze user behavior for improvements (e.g., Google Analytics).</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Functionality Cookies</h4>
                    <p className="text-gray-700">Remember user preferences (e.g., language).</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Marketing/Advertising Cookies</h4>
                    <p className="text-gray-700">Used for targeted content or campaigns (optional).</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card 
              className={`shadow-lg border-0 ${getSectionClasses(3)}`}
              ref={setSectionRef(3)}
              data-section="3"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                  Types of Cookies We Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Session Cookies</h4>
                    <p className="text-gray-700">Temporary cookies that expire when you close your browser session.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Persistent Cookies</h4>
                    <p className="text-gray-700">Stay on your device for a longer period and can be manually deleted.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card 
              className={`shadow-lg border-0 ${getSectionClasses(4)}`}
              ref={setSectionRef(4)}
              data-section="4"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                  Third-Party Cookies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">Our website may include cookies from third-party services:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Google Analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Social media platforms (sharing buttons)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Payment processors (for donations)
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card 
              className={`shadow-lg border-0 ${getSectionClasses(5)}`}
              ref={setSectionRef(5)}
              data-section="5"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                  Your Cookie Choices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">You can manage cookies through:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
                    <p className="text-gray-600 text-sm">Configure cookie preferences in your browser settings.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Third-Party Tools</h4>
                    <p className="text-gray-600 text-sm">Use browser extensions or privacy tools.</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Disabling cookies may affect some site functionality.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card 
              className={`shadow-lg border-0 ${getSectionClasses(6)}`}
              ref={setSectionRef(6)}
              data-section="6"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                  Updates to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed text-lg">
                Changes will be posted on this page with an updated "Last Updated" date. 
                Continued use of our website indicates acceptance of any modifications.
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card 
              className={`shadow-lg border-0 bg-primary text-white ${getSectionClasses(7)}`}
              ref={setSectionRef(7)}
              data-section="7"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Equal Access Learning Foundation</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-blue-100">info@equalaccesslearning.org</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-blue-100">08033053259</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-blue-100">5, Adegboyega Awomolo Close, Abuja, FCT, Nigeria</p>
                      </div>
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

export default CookiePolicyPage;

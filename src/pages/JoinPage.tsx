
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VolunteerForm from "@/components/home/VolunteerForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const JoinPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join Our Mission</h1>
            <p className="text-xl mb-8 text-white/90">
              There are many ways to get involved and make a difference. Whether you want to volunteer, 
              donate, or become a partner, your support matters.
            </p>
          </div>
        </div>
      </section>
      
      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-2 text-center">Ways to Get Involved</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Choose the path that works best for you to support our cause and make a difference.
          </p>
          
          <Tabs defaultValue="volunteer" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="donate">Donate</TabsTrigger>
              <TabsTrigger value="partner">Partner With Us</TabsTrigger>
            </TabsList>
            
            <TabsContent value="volunteer">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Become a Volunteer</CardTitle>
                  <CardDescription>
                    Join our global network of volunteers making a difference in communities worldwide.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Why Volunteer?</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Make a tangible impact in communities that need help</li>
                        <li>Develop new skills and gain valuable experience</li>
                        <li>Connect with like-minded individuals</li>
                        <li>Be part of meaningful social change</li>
                        <li>Receive training and support from our team</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Volunteer Opportunities</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Field volunteers (international placements)</li>
                        <li>Local community outreach</li>
                        <li>Fundraising and events</li>
                        <li>Administrative support</li>
                        <li>Skills-based volunteering (medical, technical, educational)</li>
                        <li>Remote/virtual volunteering</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <VolunteerForm />
              </div>
            </TabsContent>
            
            <TabsContent value="donate">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Support Our Work</CardTitle>
                  <CardDescription>
                    Your donations help us create lasting change in communities worldwide.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Ways to Give</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>One-time donations</li>
                        <li>Monthly recurring giving</li>
                        <li>Corporate matching programs</li>
                        <li>Legacy giving and planned donations</li>
                        <li>Fundraise on our behalf</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Where Your Money Goes</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>85%</strong> directly supports programs and services</li>
                        <li><strong>10%</strong> administrative costs</li>
                        <li><strong>5%</strong> fundraising expenses</li>
                      </ul>
                      <p className="mt-4 text-gray-700">
                        We maintain full transparency with all our financial records, which are 
                        available in our annual reports.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                      <Link to="/donate">Make a Donation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="partner">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Partner With Us</CardTitle>
                  <CardDescription>
                    Create strategic partnerships that benefit communities and align with your mission.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Corporate Partnerships</h3>
                      <p className="text-gray-700 mb-4">
                        We collaborate with businesses of all sizes to create meaningful 
                        social impact while helping you meet your corporate social responsibility goals.
                      </p>
                      <h4 className="font-medium mb-2">Partnership Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Co-branded initiatives</li>
                        <li>Employee engagement opportunities</li>
                        <li>Cause marketing campaigns</li>
                        <li>Product or service donations</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">NGO & Institutional Partnerships</h3>
                      <p className="text-gray-700 mb-4">
                        We believe in the power of collaboration. By partnering with other organizations, 
                        we can combine resources, expertise, and networks to amplify our collective impact.
                      </p>
                      <h4 className="font-medium mb-2">We partner for:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Joint program implementation</li>
                        <li>Research and knowledge sharing</li>
                        <li>Resource pooling</li>
                        <li>Advocacy and policy initiatives</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Contact Our Partnership Team</h3>
                    <p className="text-gray-700 mb-4">
                      Interested in exploring partnership opportunities? Our team would be happy to discuss 
                      how we can work together to create positive change.
                    </p>
                    <Button asChild variant="outline" className="mt-2">
                      <Link to="/contact?subject=Partnership">Contact Us About Partnerships</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-primary-100 py-16">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">From Our Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-4">
                Volunteering with KindHearts was one of the most rewarding experiences of my life. 
                I gained new skills and perspectives while making a real difference in people's lives.
              </p>
              <div className="font-medium">Sarah L.</div>
              <div className="text-sm text-gray-500">Field Volunteer, Education Program</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-4">
                Our corporate partnership with KindHearts has boosted employee morale and given 
                us meaningful ways to give back to the community. It's been a win-win collaboration.
              </p>
              <div className="font-medium">Michael T.</div>
              <div className="text-sm text-gray-500">CSR Director, Global Tech Inc.</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-4">
                The monthly donation program is so easy to use, and I love receiving updates about 
                how my contributions are helping communities around the world.
              </p>
              <div className="font-medium">Elena R.</div>
              <div className="text-sm text-gray-500">Monthly Donor, 3+ Years</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-serif font-bold mb-2 text-center">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Have questions about getting involved? Find answers to common questions below.
          </p>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Do I need special skills to volunteer?</h3>
              <p className="text-gray-700">
                Not necessarily! While some roles require specific skills (like medical or technical expertise), 
                we have many opportunities that require only enthusiasm and willingness to help. We provide 
                training for all our volunteer positions.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">How much time do I need to commit as a volunteer?</h3>
              <p className="text-gray-700">
                We have flexible volunteer opportunities ranging from one-time events to ongoing commitments. 
                You can volunteer as little as a few hours a month or join us for full-time field positions.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Are donations tax-deductible?</h3>
              <p className="text-gray-700">
                Yes, KindHearts is a registered 501(c)(3) nonprofit organization, and all donations are 
                tax-deductible to the extent allowed by law. We provide receipts for all contributions.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Can my company get involved?</h3>
              <p className="text-gray-700">
                Absolutely! We offer various corporate partnership opportunities, including employee 
                volunteering, matching gift programs, cause marketing, and strategic partnerships. 
                Contact our partnership team to discuss possibilities.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-700 mb-4">Don't see your question answered here?</p>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;

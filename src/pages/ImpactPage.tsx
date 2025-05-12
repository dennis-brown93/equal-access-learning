
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';

// Sample data for charts
const annualData = [
  { year: '2018', beneficiaries: 14500, projects: 35 },
  { year: '2019', beneficiaries: 18700, projects: 42 },
  { year: '2020', beneficiaries: 21200, projects: 48 },
  { year: '2021', beneficiaries: 27800, projects: 54 },
  { year: '2022', beneficiaries: 36400, projects: 63 },
  { year: '2023', beneficiaries: 42000, projects: 75 }
];

const sectorData = [
  { name: 'Education', value: 42 },
  { name: 'Healthcare', value: 28 },
  { name: 'Water & Sanitation', value: 15 },
  { name: 'Food Security', value: 10 },
  { name: 'Economic Development', value: 5 }
];

// Create custom formatter for the tooltips
const tooltipFormatter = (value: number, name: string) => {
  if (name === "beneficiaries") {
    return [`${value.toLocaleString()} people`, "Beneficiaries"];
  }
  return [`${value} projects`, "Projects"];
};

const ImpactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Impact</h1>
            <p className="text-xl mb-8 text-white/90">
              We measure our success by the lives we've changed and the sustainable 
              improvements we've made in communities worldwide.
            </p>
          </div>
        </div>
      </section>
      
      {/* Impact Summary */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-primary-100 p-8 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-lg font-medium">Projects Completed</div>
            </div>
            <div className="bg-primary-100 p-8 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">45</div>
              <div className="text-lg font-medium">Countries</div>
            </div>
            <div className="bg-primary-100 p-8 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">1M+</div>
              <div className="text-lg font-medium">Lives Impacted</div>
            </div>
            <div className="bg-primary-100 p-8 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">$25M</div>
              <div className="text-lg font-medium">Funds Deployed</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Charts */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-2 text-center">Measuring Our Progress</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We're committed to transparency and accountability. Here's how our impact has grown over time.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <h3 className="text-xl font-serif font-bold mb-6">Annual Impact Growth</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={annualData}
                  margin={{ top: 20, right: 30, left: 30, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={tooltipFormatter} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="beneficiaries" name="beneficiaries" fill="#3AAFA9" />
                  <Bar yAxisId="right" dataKey="projects" name="projects" fill="#FF8A5B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-serif font-bold mb-6">Impact by Sector</h3>
              <div className="space-y-6">
                {sectorData.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                    <Progress value={item.value} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-serif font-bold mb-4">Sustainable Development Goals</h3>
              <p className="text-gray-700 mb-6">
                Our work contributes to the United Nations Sustainable Development Goals (SDGs). 
                Here are the primary goals we're working towards:
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-primary-100 p-3 rounded text-center">
                  <div className="font-bold">SDG 1</div>
                  <div className="text-sm">No Poverty</div>
                </div>
                <div className="bg-primary-100 p-3 rounded text-center">
                  <div className="font-bold">SDG 3</div>
                  <div className="text-sm">Good Health</div>
                </div>
                <div className="bg-primary-100 p-3 rounded text-center">
                  <div className="font-bold">SDG 4</div>
                  <div className="text-sm">Quality Education</div>
                </div>
                <div className="bg-primary-100 p-3 rounded text-center">
                  <div className="font-bold">SDG 5</div>
                  <div className="text-sm">Gender Equality</div>
                </div>
                <div className="bg-primary-100 p-3 rounded text-center">
                  <div className="font-bold">SDG 6</div>
                  <div className="text-sm">Clean Water</div>
                </div>
                <div className="bg-primary-100 p-3 rounded text-center">
                  <div className="font-bold">SDG 13</div>
                  <div className="text-sm">Climate Action</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Stories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-2 text-center">Impact Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Behind every number is a real person. Here are some stories of lives transformed through our work.
          </p>
          
          <Tabs defaultValue="education" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="water">Water Access</TabsTrigger>
            </TabsList>
            
            <TabsContent value="education">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3"
                  alt="Children in a school classroom"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-3">School in Nyamata Village</h3>
                  <p className="text-gray-700 mb-4">
                    Before our intervention, children in Nyamata Village had to walk over 7 kilometers 
                    to attend school, resulting in low attendance and high dropout rates.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We built a 6-classroom school, trained 12 local teachers, and provided educational 
                    materials. Today, the school serves 350 children with a 97% attendance rate and has 
                    become a community hub for adult education in the evenings.
                  </p>
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="w-40 font-medium">Completion Date:</div>
                      <div>September 2022</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 font-medium">Location:</div>
                      <div>Rwanda</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 font-medium">Direct Beneficiaries:</div>
                      <div>350 children, 12 teachers, 200+ adults</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 font-medium">SDG Alignment:</div>
                      <div>SDG 4 (Quality Education)</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="healthcare">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3"
                  alt="Healthcare worker examining a child"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-3">Mobile Health Clinic</h3>
                  <p className="text-gray-700 mb-4">
                    In the remote highlands of Peru, access to healthcare was virtually non-existent, 
                    with the nearest clinic over 4 hours away by difficult mountain roads.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our mobile health clinic now visits 14 villages monthly, providing primary care, 
                    vaccinations, maternal health services, and health education. We've trained 24 
                    community health workers who provide basic care between clinic visits.
                  </p>
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="w-40 font-medium">Started:</div>
                      <div>March 2021</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 font-medium">Location:</div>
                      <div>Cusco Region, Peru</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 font-medium">Direct Beneficiaries:</div>
                      <div>5,200+ people across 14 villages</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 font-medium">SDG Alignment:</div>
                      <div>SDG 3 (Good Health & Well-Being)</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="water">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3"
                  alt="Clean water well in a village"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-3">Clean Water for Makani</h3>
                  <p className="text-gray-700 mb-4">
                    The Makani community in Kenya previously relied on a seasonal river for water, 
                    which was often contaminated and caused frequent waterborne illnesses, 
                    particularly affecting children.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We installed a solar-powered deep well system with six community distribution 
                    points, trained a local water committee to maintain the system, and provided 
                    health and sanitation education. Waterborne disease rates have dropped by 87%.
                  </p>
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="w-40 font-medium">Completion Date:</div>
                      <div>January 2023</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 font-medium">Location:</div>
                      <div>Eastern Kenya</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 font-medium">Direct Beneficiaries:</div>
                      <div>2,800 people in Makani community</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 font-medium">SDG Alignment:</div>
                      <div>SDG 6 (Clean Water & Sanitation)</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Annual Report */}
      <section className="py-16 bg-primary-100">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Annual Impact Reports</h2>
          <p className="text-lg text-gray-700 mb-8">
            Transparency is one of our core values. Our detailed annual reports show exactly 
            how we use funds and the impact we've achieved together.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Button asChild variant="outline">
              <Link to="/reports/2023">2023 Report</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/reports/2022">2022 Report</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/reports/2021">2021 Report</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/reports/2020">2020 Report</Link>
            </Button>
          </div>
          
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/donate">Support Our Work</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;

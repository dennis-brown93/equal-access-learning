
import DonationForm from "@/components/donation/DonationForm";

const DonatePage = () => {
  return (
    <main className="min-h-screen">
      <div className="bg-primary-100 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Make a Donation</h1>
            <p className="text-lg text-gray-700">
              Your support enables us to continue our vital work in communities around the world.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Your Impact</h2>
              <div className="space-y-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">$25</h3>
                  <p>Provides clean drinking water for a family for one month.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">$50</h3>
                  <p>Supplies essential school materials for a classroom of children.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">$100</h3>
                  <p>Funds medical supplies for a community health worker for three months.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">$250</h3>
                  <p>Provides a microloan to help a woman start or expand her own business.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">$500</h3>
                  <p>Builds a sustainable water harvesting system for a rural school.</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Our Commitment to Transparency</h3>
                <p className="text-gray-700">
                  We're committed to using your donations efficiently and effectively. 95% of all donations go directly to our programs, with only 5% used for administrative costs. Our financial statements are audited annually and publicly available.
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
                description: "Create a lasting impact by including KindHearts in your will or estate planning.",
                icon: "📝"
              },
            ].map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;

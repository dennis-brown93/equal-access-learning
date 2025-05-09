
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mock blog data (in a real app this would come from Contentful)
const mockBlogPosts = [
  {
    id: "1",
    title: "Clean Water Initiative Reaches 10,000 People",
    slug: "clean-water-initiative",
    excerpt: "Our clean water project in rural Tanzania has successfully provided access to safe drinking water for over 10,000 people in 15 villages.",
    date: "2023-05-15",
    author: "Sarah Johnson",
    image: "/placeholder.svg",
    category: "Water",
    content: "Lorem ipsum dolor sit amet..."
  },
  {
    id: "2",
    title: "New School Opens in Cambodia",
    slug: "new-school-cambodia",
    excerpt: "We're proud to announce the opening of a new school in Cambodia, providing education to 250 children from surrounding communities.",
    date: "2023-04-22",
    author: "Michael Okonkwo",
    image: "/placeholder.svg",
    category: "Education",
    content: "Lorem ipsum dolor sit amet..."
  },
  {
    id: "3",
    title: "Healthcare Training Program Graduates 50 New Health Workers",
    slug: "healthcare-training-graduates",
    excerpt: "Our healthcare training program has successfully graduated 50 new community health workers who will provide essential services in rural areas.",
    date: "2023-03-10",
    author: "Elena Rodriguez",
    image: "/placeholder.svg",
    category: "Healthcare",
    content: "Lorem ipsum dolor sit amet..."
  },
  {
    id: "4",
    title: "Annual Impact Report Released",
    slug: "annual-impact-report",
    excerpt: "Our annual impact report shows significant progress across all our programs, with over 50,000 lives improved in the past year.",
    date: "2023-02-28",
    author: "David Chen",
    image: "/placeholder.svg",
    category: "Organization",
    content: "Lorem ipsum dolor sit amet..."
  },
  {
    id: "5",
    title: "Microfinance Program Enables 100 New Businesses",
    slug: "microfinance-new-businesses",
    excerpt: "Through our microfinance initiative, 100 entrepreneurs have started new businesses, creating economic opportunities in their communities.",
    date: "2023-01-15",
    author: "Amina Patel",
    image: "/placeholder.svg",
    category: "Economic Empowerment",
    content: "Lorem ipsum dolor sit amet..."
  },
  {
    id: "6",
    title: "Volunteer Spotlight: Meet Our Field Team",
    slug: "volunteer-spotlight",
    excerpt: "Get to know the dedicated volunteers who make our work possible through their tireless efforts in the field.",
    date: "2022-12-05",
    author: "Robert Kim",
    image: "/placeholder.svg",
    category: "Volunteers",
    content: "Lorem ipsum dolor sit amet..."
  }
];

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Categories extracted from blog posts
  const categories = ["All", ...Array.from(new Set(mockBlogPosts.map(post => post.category)))];

  useEffect(() => {
    // Simulate fetching data from Contentful
    const fetchData = async () => {
      try {
        // In a real app, this would be a call to Contentful's API
        await new Promise(resolve => setTimeout(resolve, 800)); // simulate network delay
        setBlogPosts(mockBlogPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className="min-h-screen">
      <div className="bg-primary-100 py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Stories from the field, updates on our projects, and insights into our work around the world.
          </p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog posts */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="w-full h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.slug}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover-lift"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-primary-600 font-medium">{post.category}</span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-serif font-bold mb-3">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm">
                        <div className="h-8 w-8 rounded-full bg-gray-200 mr-2"></div>
                        <span>By {post.author}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No posts found</h3>
                  <p className="text-gray-600 mb-4">There are no posts in this category yet.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveCategory("All")}
                  >
                    View All Posts
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Temporary mock data - would be fetched from Contentful in production
const blogPosts = [
  {
    id: "1",
    title: "Clean Water Initiative Reaches 10,000 Families",
    excerpt: "Our clean water project has successfully provided access to clean water for over 10,000 families in rural communities.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    slug: "clean-water-initiative",
    date: "2023-07-15"
  },
  {
    id: "2",
    title: "Education Program Expands to Five New Villages",
    excerpt: "We're excited to announce the expansion of our education program to five additional villages, bringing learning opportunities to hundreds more children.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    slug: "education-program-expands",
    date: "2023-06-22"
  },
  {
    id: "3",
    title: "Volunteer Spotlight: Meet Maria",
    excerpt: "Maria has been volunteering with us for five years. Learn about her journey and the impact she's made in our communities.",
    image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    slug: "volunteer-spotlight-maria",
    date: "2023-05-30"
  },
  {
    id: "4",
    title: "Annual Fundraiser Breaks Records",
    excerpt: "Thanks to your generosity, our annual fundraiser has broken all previous records, allowing us to expand our programs significantly.",
    image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    slug: "annual-fundraiser",
    date: "2023-04-18"
  }
];

const BlogCarousel = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Latest News</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest stories and achievements from around the world.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-44 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <h3 className="font-serif font-bold text-xl mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-2">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
        
        <div className="text-center mt-8">
          <Button asChild variant="default" className="bg-primary-600 hover:bg-primary-700">
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/pexels-director-muuh-321947994-20101037.jpg",
    title: "Unlocking Potential Through Education",
    description:
      "Empowering underserved communities in Nigeria with the tools for lifelong learning.",
    buttonText: "Donate Now",
    buttonLink: "/donate",
  },
  {
    id: 2,
    image: "/images/pexels-swahili-studios-2151583083-31747999.jpg",
    title: "Educate for Tomorrow",
    description:
      "Building schools and providing quality education to children in need",
    buttonText: "Education Programs",
    buttonLink: "/work/education",
  },
  {
    id: 3,
    image: "/images/pexels-rdne-6646918.jpg",
    title: "Join Our Mission",
    description:
      "Become part of our global volunteer network and make a difference",
    buttonText: "Volunteer Now",
    buttonLink: "/join",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    title: "Support Our Cause",
    description:
      "Your donation helps us create lasting change in communities worldwide",
    buttonText: "Donate Now",
    buttonLink: "/donate",
  },
];

const RotatingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  {slide.description}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90"
                >
                  <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        <ChevronLeft size={24} />
        <span className="sr-only">Previous</span>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        <ChevronRight size={24} />
        <span className="sr-only">Next</span>
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-secondary" : "bg-white/50"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RotatingBanner;

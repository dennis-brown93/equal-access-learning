import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 py-2 border-b">
        <div className="container flex justify-between items-center">
          {/* Search */}
          <div className="relative hidden md:flex items-center">
            <Input
              type="search"
              placeholder="Search..."
              className="w-48 lg:w-64 h-8 text-sm"
            />
            <Search size={16} className="absolute right-3 text-gray-400" />
          </div>

          {/* Social and Language */}
          <div className="flex items-center space-x-3 ml-auto">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            {/* Language Selector */}
            <div className="flex items-center text-sm text-gray-500 hover:text-primary cursor-pointer">
              <Globe size={16} className="mr-1" />
              <span className="hidden md:inline">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <img src="" alt="Logo" className="h-10 w-auto" />
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="text-foreground hover:text-primary-600 font-medium px-3"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className="text-foreground hover:text-primary-600 font-medium px-3"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/work"
                    className="text-foreground hover:text-primary-600 font-medium px-3"
                  >
                    Our Work
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/join"
                    className="text-foreground hover:text-primary-600 font-medium px-3"
                  >
                    Join Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/impact"
                    className="text-foreground hover:text-primary-600 font-medium px-3"
                  >
                    Impact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </div>

        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container flex flex-col py-4 space-y-4">
            <div className="relative mb-2">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full text-sm"
              />
              <Search
                size={16}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <Link
              to="/"
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/work"
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Our Work
            </Link>
            <Link
              to="/join"
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
            <Link
              to="/impact"
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Impact
            </Link>
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 w-full"
            >
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                Donate Today
              </Link>
            </Button>

            <div className="flex justify-center space-x-4 pt-4 border-t">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Instagram size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

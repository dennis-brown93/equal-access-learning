
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
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
          className="text-foreground hover:text-primary-600 font-thin py-2 text-sm"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-foreground hover:text-primary-600 font-thin py-2 text-sm"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        
        {/* Our Work Dropdown for mobile */}
        <div className="py-2">
          <div className="flex items-center justify-between text-foreground font-thin text-sm">
            <span>Our Work</span>
            <ChevronDown size={16} />
          </div>
          <div className="pl-4 mt-2 space-y-2">
            <Link
              to="/work"
              className="block text-foreground hover:text-primary-600 font-thin py-1 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Our Projects
            </Link>
            <Link
              to="/impact"
              className="block text-foreground hover:text-primary-600 font-thin py-1 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Impact
            </Link>
          </div>
        </div>
        
        <Link
          to="/join"
          className="text-foreground hover:text-primary-600 font-thin py-2 text-sm"
          onClick={() => setIsOpen(false)}
        >
          Join Us
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
  );
};

export default MobileMenu;

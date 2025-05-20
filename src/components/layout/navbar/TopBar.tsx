
import React from "react";
import { Search, Facebook, Twitter, Instagram, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";

const TopBar = () => {
  return (
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
  );
};

export default TopBar;

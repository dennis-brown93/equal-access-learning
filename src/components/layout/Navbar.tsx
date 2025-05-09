
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary font-serif font-bold text-2xl">KindHearts</span>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary-600 font-medium">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary-600 font-medium">About</Link>
            <Link to="/mission" className="text-foreground hover:text-primary-600 font-medium">Our Mission</Link>
            <Link to="/blog" className="text-foreground hover:text-primary-600 font-medium">Blog</Link>
            <Link to="/contact" className="text-foreground hover:text-primary-600 font-medium">Contact</Link>
          </nav>
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
            <Link 
              to="/" 
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >Home</Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >About</Link>
            <Link 
              to="/mission" 
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >Our Mission</Link>
            <Link 
              to="/blog" 
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >Blog</Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >Contact</Link>
            <Button asChild className="bg-secondary hover:bg-secondary/90 w-full">
              <Link to="/donate" onClick={() => setIsOpen(false)}>Donate Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

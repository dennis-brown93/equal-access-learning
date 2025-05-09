
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-accent text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">KindHearts</h3>
            <p className="mb-6">Making a difference in the lives of those who need it most.</p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="sr-only">Facebook</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="sr-only">Twitter</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="sr-only">Instagram</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/mission" className="hover:underline">Our Mission</Link>
              <Link to="/blog" className="hover:underline">Blog</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact Info</h4>
            <address className="not-italic">
              <p className="mb-2">123 Charity Lane</p>
              <p className="mb-2">Helpville, CA 90210</p>
              <p className="mb-2">contact@kindhearts.org</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter to get updates on our work and events.</p>
            <form className="flex flex-col space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button type="submit" size="icon" className="rounded-l-none bg-secondary hover:bg-secondary/90">
                  <Mail size={18} />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-white/60 text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} KindHearts NGO. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

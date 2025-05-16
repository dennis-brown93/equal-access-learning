
import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // Here would be the API call to subscribe the user
      console.log('Subscribe:', email);
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };
  
  return (
    <footer className="bg-accent text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 pb-8">
          <div className="flex items-center">
            <img
              src="/images/equalfffff_044048.jpg"
              alt="Logo"
              className="h-20 w-auto"
            />
          </div>
        </Link>
            <p className="mb-6">Empowering underserved communities in Nigeria with the tools for lifelong learning.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About Us</Link>
              <Link to="/work" className="hover:underline">Our Work</Link>
              <Link to="/join" className="hover:underline">Join Us</Link>
              <Link to="/impact" className="hover:underline">Impact</Link>
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
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" size="icon" className="rounded-l-none bg-secondary hover:bg-secondary/90">
                  <Mail size={18} />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
              <label className="flex items-start space-x-2 text-sm">
                <input 
                  type="checkbox" 
                  className="mt-1" 
                  required
                />
                <span>I agree to receive emails from KindHearts and understand that I can unsubscribe at any time.</span>
              </label>
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

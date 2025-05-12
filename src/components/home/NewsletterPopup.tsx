
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasAgreed, setHasAgreed] = useState(false);
  
  useEffect(() => {
    // Check if popup was shown before to avoid showing it on every visit
    const wasShown = localStorage.getItem('newsletter_popup_shown');
    
    if (!wasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark as shown for this session
        localStorage.setItem('newsletter_popup_shown', 'true');
      }, 5000); // Show after 5 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && hasAgreed) {
      // Here would be the API call to subscribe the user
      console.log('Newsletter subscription:', email);
      toast.success('Thank you for subscribing to our newsletter!');
      setIsOpen(false);
      setEmail('');
      setHasAgreed(false);
    } else if (!hasAgreed) {
      toast.error('Please agree to our terms to continue');
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full animation-fade-in">
        <div className="relative p-6">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
            <span className="sr-only">Close</span>
          </button>
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif font-bold text-primary-600">Join Our Newsletter</h3>
            <p className="text-gray-600 mt-2">
              Stay updated with our latest news, events, and ways to help.
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="flex items-start space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hasAgreed}
                  onChange={(e) => setHasAgreed(e.target.checked)}
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  I agree to receive emails from KindHearts and understand 
                  that I can unsubscribe at any time.
                </span>
              </label>
            </div>
            
            <Button type="submit" className="w-full">Subscribe Now</Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;

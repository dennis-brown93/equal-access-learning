
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  const handleSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      console.log("Submitting contact form:", data);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main className="min-h-screen">
      <div className="bg-primary-100 py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="donation">Donation Question</SelectItem>
                            <SelectItem value="volunteer">Volunteer Information</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="media">Media Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please type your message here..."
                            className="min-h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Address</h3>
                    <address className="not-italic">
                      <p>123 Charity Lane</p>
                      <p>Helpville, CA 90210</p>
                      <p>United States</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p>Main: (555) 123-4567</p>
                    <p>Donations: (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p>General: info@kindhearts.org</p>
                    <p>Donations: donate@kindhearts.org</p>
                    <p>Volunteer: volunteer@kindhearts.org</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Office Hours</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium">Monday - Friday</td>
                      <td className="py-2">9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-medium">Saturday</td>
                      <td className="py-2">10:00 AM - 2:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Sunday</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-serif font-bold mb-6">Visit Us</h2>
          <div className="h-96 w-full bg-gray-200 rounded-lg shadow-md">
            {/* This would be a Google Map in a real implementation */}
            <div className="h-full w-full flex items-center justify-center bg-gray-300">
              <span className="text-gray-600">Map would be displayed here</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

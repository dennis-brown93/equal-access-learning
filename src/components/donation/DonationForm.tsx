
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

// Define the donation form schema
const donationFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  amount: z.string().min(1, "Please select or enter an amount"),
  customAmount: z.string().optional(),
  message: z.string().optional(),
});

type DonationFormValues = z.infer<typeof donationFormSchema>;

const DonationForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>("25");
  const { toast } = useToast();
  
  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      amount: "25",
      message: "",
    },
  });
  
  const handleDonationSubmit = async (data: DonationFormValues) => {
    setIsProcessing(true);
    
    try {
      // Here we would usually process the payment with Stripe
      console.log("Processing donation:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Donation Submitted!",
        description: "Thank you for your generosity. Your donation is being processed.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error processing donation:", error);
      toast({
        title: "Error Processing Donation",
        description: "There was a problem processing your donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleAmountChange = (value: string) => {
    setSelectedAmount(value);
    form.setValue("amount", value);
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Make a Donation</CardTitle>
        <CardDescription>
          Your generosity helps us make a difference in communities worldwide.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleDonationSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    We'll send a receipt to this email address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel>Donation Amount</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={handleAmountChange}
                      defaultValue={field.value}
                      className="grid grid-cols-3 gap-4"
                    >
                      {["25", "50", "100", "250", "500", "other"].map((value) => (
                        <div key={value} className="flex items-center">
                          <RadioGroupItem
                            value={value}
                            id={`amount-${value}`}
                            className="peer sr-only"
                          />
                          <label
                            htmlFor={`amount-${value}`}
                            className="flex flex-col items-center justify-center w-full p-4 border rounded-md cursor-pointer 
                              peer-checked:border-primary peer-checked:bg-primary-100 hover:bg-gray-50"
                          >
                            {value === "other" ? (
                              "Other"
                            ) : (
                              <span className="text-lg font-medium">${value}</span>
                            )}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  {selectedAmount === "other" && (
                    <FormField
                      control={form.control}
                      name="customAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Custom Amount</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                              <Input
                                type="number"
                                placeholder="Enter amount"
                                className="pl-8"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  form.setValue("amount", e.target.value);
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share why you're donating or any special instructions"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Complete Donation"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col text-center text-sm text-gray-500">
        <p>All donations are tax-deductible to the extent allowed by law.</p>
        <p>Secured by Stripe</p>
      </CardFooter>
    </Card>
  );
};

export default DonationForm;

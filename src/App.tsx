
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import JoinPage from "./pages/JoinPage";
import ImpactPage from "./pages/ImpactPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import AdminPage from "./pages/AdminPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import NotFound from "./pages/NotFound";

// Create the query client outside of the component
const queryClient = new QueryClient();

// Define App as a proper function component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="work" element={<WorkPage />} />
              <Route path="join" element={<JoinPage />} />
              <Route path="impact" element={<ImpactPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="donate" element={<DonatePage />} />
              <Route path="admin" element={<AdminPage />} />
              <Route path="cookie-policy" element={<CookiePolicyPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="terms-conditions" element={<TermsConditionsPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

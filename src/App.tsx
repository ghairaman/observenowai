import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About-page";
import Contact from "./pages/Contact-page";
import Pricing from "./pages/Pricing-page";
import Product from "./pages/Product-page";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import GDPRPage from "./pages/GDPR";
import DPDPPage from "./pages/DPDP";
import CookiePage from "./pages/Cookie";
import DisclaimerPage from "./pages/Disclaimer";
import BlogsPage from "./pages/Blogs-page";
import BlogDetailPage from "./pages/BlogDetail-page";
import CompareEaslyLeadz from "./pages/CompareEaslyLeadz";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import CompareRocketReach from "./pages/CompareRocketReach";
import CompareKaspr from "./pages/CompareKaspr";
import CompareSignalHire from "./pages/CompareSignalHire";
import CompareHunter from "./pages/CompareHunter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* <ScrollToHash/> */}
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compare/easyleadz" element={<CompareEaslyLeadz />} />
            <Route path="/compare/rocketreach" element={<CompareRocketReach />} />
            <Route path="/compare/kaspr" element={<CompareKaspr />} />
            <Route path="/compare/signalhire" element={<CompareSignalHire />} />
            <Route path="/compare/hunter" element={<CompareHunter />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/gdpr" element={<GDPRPage />} />
            <Route path="/dpdp" element={<DPDPPage />} />
            <Route path="/cookie" element={<CookiePage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Layout from "./components/Layout"
import Index from "./pages/Index";
import About from "./pages/About-page"
import Contact from "./pages/Contact-page"
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing-page";
import Product from "./pages/Product-page";
=======

import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About-page";
import Contact from "./pages/Contact-page";
import Pricing from "./pages/Pricing-page";
>>>>>>> cf21f72938519099f67a55c3b61f7a040e614ccc
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import GDPRPage from "./pages/GDPR";
import DPDPPage from "./pages/DPDP";
import CookiePage from "./pages/Cookie";
import DisclaimerPage from "./pages/Disclaimer";
import BlogsPage from "./pages/Blogs-page";
import BlogDetailPage from "./pages/BlogDetail-page";
<<<<<<< HEAD
// import ScrollToHash from "./components/ScroolToHash";
=======
import NotFound from "./pages/NotFound";
>>>>>>> cf21f72938519099f67a55c3b61f7a040e614ccc
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

<<<<<<< HEAD
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      {/* <ScrollToHash/> */}
      <ScrollToTop/>
        <Routes>
         <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/gdpr" element={<GDPRPage />} />
          <Route path="/dpdp" element={<DPDPPage />} />
          <Route path="/cookie" element={<CookiePage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
=======
const App = () => ( <QueryClientProvider client={queryClient}> <TooltipProvider> <Toaster /> <Sonner /> <BrowserRouter>
{/* <ScrollToHash/> */} <ScrollToTop />

```
    <Routes>
      <Route element={<Layout />}>
        
        {/* ✅ Main Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/index.html" element={<Index />} /> {/* Fix */}

        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/gdpr" element={<GDPRPage />} />
        <Route path="/dpdp" element={<DPDPPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />

        {/* ✅ 404 Page */}
        <Route path="*" element={<NotFound />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
</TooltipProvider>
```

>>>>>>> cf21f72938519099f67a55c3b61f7a040e614ccc
  </QueryClientProvider>
);

export default App;

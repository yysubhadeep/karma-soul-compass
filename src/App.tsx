
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Report from "./pages/Report";
import WesternReport from "./pages/WesternReport";
import EasternReport from "./pages/EasternReport";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MoonSign from "./pages/MoonSign";
import WesternAstroExperiment from "./pages/WesternAstroExperiment";
import EasternAstroExperiment from "./pages/EasternAstroExperiment";
import KarmaQ from "./pages/KarmaQ";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/report" element={<Report />} />
          <Route path="/western-report" element={<WesternReport />} />
          <Route path="/eastern-report" element={<EasternReport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/moon-sign" element={<MoonSign />} />
          <Route path="/western-experiment" element={<WesternAstroExperiment />} />
          <Route path="/vedicscience" element={<EasternAstroExperiment />} />
          <Route path="/KarmaQ" element={<KarmaQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ABTestRouter from "./components/ABTestRouter";
import Index from "./pages/Index";
import Report from "./pages/Report";
import EasternAstroExperiment from "./pages/EasternAstroExperiment";
import EasternReport from "./pages/EasternReport";
import MoonSign from "./pages/MoonSign";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ABTestStats from "./components/ABTestStats";

// Import the moon sign test
import "./utils/moonSignTest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ABTestRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/report" element={<Report />} />
            <Route path="/vedicscience" element={<EasternAstroExperiment />} />
            <Route path="/vedicreport" element={<EasternReport />} />
            <Route path="/moonsign" element={<MoonSign />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ab-stats" element={<ABTestStats />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ABTestRouter>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

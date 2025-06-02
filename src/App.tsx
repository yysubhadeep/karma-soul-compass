
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ABTestRouter from "./components/ABTestRouter";
import Index from "./pages/Index";
import Report from "./pages/Report";
import WesternAstroExperiment from "./pages/WesternAstroExperiment";
import WesternReport from "./pages/WesternReport";
import EasternAstroExperiment from "./pages/EasternAstroExperiment";
import EasternReport from "./pages/EasternReport";
import NotFound from "./pages/NotFound";
import ABTestStats from "./components/ABTestStats";

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
            <Route path="/western-experiment" element={<WesternAstroExperiment />} />
            <Route path="/western-report" element={<WesternReport />} />
            <Route path="/vedicscience" element={<EasternAstroExperiment />} />
            <Route path="/vedicreport" element={<EasternReport />} />
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

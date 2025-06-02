
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Report from "./pages/Report";
import WesternAstroExperiment from "./pages/WesternAstroExperiment";
import WesternReport from "./pages/WesternReport";
import EasternAstroExperiment from "./pages/EasternAstroExperiment";
import EasternReport from "./pages/EasternReport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/report" element={<Report />} />
          <Route path="/western-experiment" element={<WesternAstroExperiment />} />
          <Route path="/western-report" element={<WesternReport />} />
          <Route path="/easternexperiment" element={<EasternAstroExperiment />} />
          <Route path="/eastern-report" element={<EasternReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsConditions from "./pages/TermsConditions.tsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.tsx";

const queryClient = new QueryClient();

const serviceRoutes = [
  // New 20 Services
  "agrivoltaics",
  "virtual-net-metering",
  "open-access-solar",
  "solar-ppa",
  "green-power-supply",
  "industrial-solar",
  "commercial-solar",
  "institutional-solar",
  "solar-epc",
  "operation-maintenance",
  "scada-monitoring",
  "energy-efficiency",
  "net-metering",
  "ground-mounted-solar",
  "rooftop-solar",
  "group-captive-solar",
  "project-design-engineering",
  "installation-commissioning",
  "regulatory-approval-support",
  "solar-asset-management",
  
  // Legacy aliases for backward compatibility
  "solar-installation",
  "maintenance-repair",
  "custom-design",
  "subsidy-assistance",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          {serviceRoutes.map((slug) => (
            <Route key={slug} path={`/services/${slug}`} element={<ServiceDetailPage slug={slug} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

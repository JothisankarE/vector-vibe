import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Guidelines from "./pages/Guidelines";
import Round1 from "./pages/Round1";
import Round2 from "./pages/Round2";
import Final from "./pages/Final";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/round1" element={<Round1 />} />
          <Route path="/round2" element={<Round2 />} />
          <Route path="/final" element={<Final />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Leads from "./pages/Leads";
import Voice from "./pages/Voice";
import CallExecution from "./pages/CallExecution";
import Analytics from "./pages/Analytics";
import LeadScoring from "./pages/LeadScoring";
import Conversations from "./pages/Conversations";
import Team from "./pages/Team";
import Compliance from "./pages/Compliance";
import Settings from "./pages/Settings";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/campaigns" element={<Campaigns />} />
                  <Route path="/leads" element={<Leads />} />
                  <Route path="/voice" element={<Voice />} />
                  <Route path="/calls" element={<CallExecution />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/scoring" element={<LeadScoring />} />
                  <Route path="/conversations" element={<Conversations />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/compliance" element={<Compliance />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/about" element={<AboutUs />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

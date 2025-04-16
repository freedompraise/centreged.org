import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Operations from "./pages/Operations";
import CorporateTraining from "./pages/CorporateTraining";
import MentorshipCareerDevelopment from "./pages/MentorshipCareerDevelopment";
import Publications from "./pages/Publications";
import AdvisoryServices from "./pages/AdvisoryServices";
import PolicyResearchAnalysis from "./pages/PolicyResearchAnalysis";
import PublishingKnowledgeDissemination from "./pages/PublishingKnowledgeDissemination";
import DiplomacyStakeholderEngagement from "./pages/DiplomacyStakeholderEngagement";
import DiplomacyHighLevelForums from "./pages/DiplomacyHighLevelForums";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/operations/:operationId" element={<Operations />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/operations/mentorship-career-development" element={<MentorshipCareerDevelopment />} />
            <Route path="/operations/advisory-services" element={<AdvisoryServices />} />
            <Route path="/operations/policy-research" element={<PolicyResearchAnalysis />} />
            <Route path="/operations/knowledge-dissemination" element={<PublishingKnowledgeDissemination />} />
            <Route path="/operations/corporate-training" element={<CorporateTraining />} />
            <Route path="/operations/diplomacy-stakeholder-engagement" element={<DiplomacyStakeholderEngagement />} />
            <Route path="/operations/diplomacy-high-level-forums" element={<DiplomacyHighLevelForums />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ApplyAsReviewer from "./pages/ApplyAsReviewer.tsx";
import InnovationChallenge from "./pages/InnovationChallenge.tsx";
import ICAESET2026 from "./pages/conferences/ICAESET2026.tsx";
import ICNSE26 from "./pages/conferences/ICNSE26.tsx";
import ICTET26 from "./pages/conferences/ICTET26.tsx";
import ICMESS26 from "./pages/conferences/ICMESS26.tsx";
import ICASIT26 from "./pages/conferences/ICASIT26.tsx";
import ICMDIA25 from "./pages/conferences/ICMDIA25.tsx";
import ICETSGC25 from "./pages/conferences/ICETSGC25.tsx";
import ICCINET25 from "./pages/conferences/ICCINET25.tsx";
import PastSpeakers from "./pages/PastSpeakers.tsx";
import Registration from "./pages/Registration.tsx";
import Books from "./pages/Books.tsx";
import ExpertConnect from "./pages/ExpertConnect.tsx";
import GetRecognized from "./pages/GetRecognized.tsx";
import Career from "./pages/Career.tsx";
import AdvisoryTeam from "./pages/AdvisoryTeam.tsx";
import ArticleSubmissions from "./pages/ArticleSubmissions.tsx";
import Blog from "./pages/Blog.tsx";
import ShareYourStory from "./pages/ShareYourStory.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apply-as-reviewer" element={<ApplyAsReviewer />} />
          <Route path="/innovation-challenge-2026" element={<InnovationChallenge />} />
          <Route path="/icaeset-2026" element={<ICAESET2026 />} />
          <Route path="/icnse-26" element={<ICNSE26 />} />
          <Route path="/ictet-26" element={<ICTET26 />} />
          <Route path="/icmess-26" element={<ICMESS26 />} />
          <Route path="/icasit-26" element={<ICASIT26 />} />
          <Route path="/icmdia-25" element={<ICMDIA25 />} />
          <Route path="/icetsgc-25" element={<ICETSGC25 />} />
          <Route path="/iccinet-25" element={<ICCINET25 />} />
          <Route path="/icaidss-26" element={<ComingSoon title="ICAIDSS-26" />} />
          <Route path="/icamet-2025" element={<ComingSoon title="ICAMET 2025" />} />
          <Route path="/icenta-2024" element={<ComingSoon title="ICENTA-2024" />} />
          <Route path="/past-speakers" element={<PastSpeakers />} />
          <Route path="/advisory-members" element={<ComingSoon title="Advisory Members" />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/books" element={<Books />} />
          <Route path="/expert-connect" element={<ExpertConnect />} />
          <Route path="/share-your-story" element={<ShareYourStory />} />
          <Route path="/get-recognized" element={<GetRecognized />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply-advisory-team" element={<AdvisoryTeam />} />
          <Route path="/article-submissions" element={<ArticleSubmissions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

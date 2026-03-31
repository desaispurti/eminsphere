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
import UpcomingConferenceLayout from "./pages/conferences/UpcomingConferenceLayout.tsx";
import ProceedingLayout from "./pages/conferences/ProceedingLayout.tsx";
import UpcomingConferences from "./pages/UpcomingConferences.tsx";
import RecentConferences from "./pages/RecentConferences.tsx";
import RecentConferenceProceedings from "./pages/RecentConferenceProceedings.tsx";

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
          {/* Fix live site URL: /eminsphere-s-innovation-challenge-2026 */}
          <Route path="/eminsphere-s-innovation-challenge-2026" element={<InnovationChallenge />} />
          <Route path="/innovation-challenge-2026" element={<InnovationChallenge />} />
          {/* Recent conference pages */}
          <Route path="/icaeset-2026" element={<ICAESET2026 />} />
          <Route path="/icnse-26" element={<ICNSE26 />} />
          <Route path="/ictet-26" element={<ICTET26 />} />
          <Route path="/icmess-26" element={<ICMESS26 />} />
          <Route path="/icasit-26" element={<ICASIT26 />} />
          <Route path="/icmdia-25" element={<ICMDIA25 />} />
          <Route path="/icetsgc-25" element={<ICETSGC25 />} />
          <Route path="/iccinet-25" element={<ICCINET25 />} />
          <Route path="/icaidss-26" element={<ComingSoon title="ICAIDSS-26" />} />
          {/* Fix live site URLs for ICAMET and ICENTA */}
          <Route path="/international-conference-on-ai-managemen" element={<ComingSoon title="ICAMET 2025" />} />
          <Route path="/icamet-2025" element={<ComingSoon title="ICAMET 2025" />} />
          <Route path="/about-the-conference" element={<ComingSoon title="ICENTA-2024" />} />
          <Route path="/icenta-2024" element={<ComingSoon title="ICENTA-2024" />} />
          {/* Upcoming conference pages */}
          <Route path="/upcomming-confernces" element={<UpcomingConferences />} />
          <Route path="/icaist-26" element={<UpcomingConferenceLayout />} />
          <Route path="/icmref-26" element={<UpcomingConferenceLayout />} />
          {/* Fix live site URLs: /copy-of-icmref-26 and /copy-of-icaits-26 */}
          <Route path="/copy-of-icmref-26" element={<UpcomingConferenceLayout />} />
          <Route path="/icaits-26" element={<UpcomingConferenceLayout />} />
          <Route path="/copy-of-icaits-26" element={<UpcomingConferenceLayout />} />
          <Route path="/icates-26" element={<UpcomingConferenceLayout />} />
          {/* Proceedings listing and detail pages */}
          <Route path="/recent-conference-proceedings" element={<RecentConferenceProceedings />} />
          <Route path="/recent-conference-proceedings/:id" element={<ProceedingLayout />} />
          <Route path="/icmdia-25-1" element={<ProceedingLayout />} />
          <Route path="/proceeding-icetsgc-25" element={<ProceedingLayout />} />
          <Route path="/conference-proceedings" element={<ProceedingLayout />} />
          {/* Recent conferences listing */}
          <Route path="/recent-conferences" element={<RecentConferences />} />
          <Route path="/past-speakers" element={<PastSpeakers />} />
          <Route path="/advisory-members" element={<ComingSoon title="Advisory Members" />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/books" element={<Books />} />
          {/* Fix live site URL: /expert-connect-speaking-advisory */}
          <Route path="/expert-connect-speaking-advisory" element={<ExpertConnect />} />
          <Route path="/expert-connect" element={<ExpertConnect />} />
          <Route path="/share-your-story" element={<ShareYourStory />} />
          <Route path="/get-recognized" element={<GetRecognized />} />
          <Route path="/career" element={<Career />} />
          {/* Fix live site URL: /apply-for-the-advisory-team */}
          <Route path="/apply-for-the-advisory-team" element={<AdvisoryTeam />} />
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

import { useParams, Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { upcomingConferences } from "@/data/eminsphereData";

const UpcomingConferenceLayout = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const pathId = location.pathname.split('/').pop() || "";
  const finalId = id || pathId;
  const data = finalId ? upcomingConferences[finalId] : undefined;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col pt-32 px-4 items-center gap-4 bg-background">
        <Header />
        <h1 className="text-3xl font-display font-bold">Conference Not Found</h1>
        <p className="text-muted-foreground">The upcoming conference details are unavailable.</p>
        <Link to="/" className="text-primary hover:text-accent font-semibold">Return Home</Link>
        <div className="mt-auto w-full"><Footer /></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-body">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 md:py-24">
        <div className="text-center mb-16 relative">
           <div className="absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
           <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold uppercase tracking-widest text-primary border border-primary/20 rounded-full shadow-sm bg-card">
              Upcoming Event
           </span>
           <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              {data.title}
           </h1>
           <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground font-medium text-lg">
              <span className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{data.date}</span>
              <span className="hidden md:block text-muted-foreground/30">•</span>
              <span className="flex items-center gap-2"><svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{data.location}</span>
           </div>
        </div>
        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6 font-display">About the Conference</h2>
          <p className="text-lg text-foreground leading-relaxed mb-8">{data.description}</p>
          <div className="p-6 bg-muted/50 rounded-xl border border-muted flex flex-col items-center text-center gap-4">
            <h3 className="font-semibold text-xl">Call for Papers Open</h3>
            <p className="text-muted-foreground">Submit your abstract today for a chance to present your findings.</p>
            <div className="flex flex-wrap gap-4 mt-2 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">Submit Abstract</button>
              <button className="px-8 py-3 bg-card border-2 border-primary text-primary font-bold rounded-lg shadow hover:bg-muted transition-colors">Register Now</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default UpcomingConferenceLayout;

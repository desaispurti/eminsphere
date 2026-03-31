import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const recentList = [
  { name: "ICAIDSS-26", path: "/icaidss-26", date: "2026" },
  { name: "ICAESET-2026", path: "/icaeset-2026", date: "2026" },
  { name: "ICNSE-26", path: "/icnse-26", date: "2026" },
  { name: "ICTET-26", path: "/ictet-26", date: "2026" },
  { name: "ICMESS-26", path: "/icmess-26", date: "2026" },
  { name: "ICASIT-26", path: "/icasit-26", date: "2026" },
  { name: "ICMDIA-25", path: "/icmdia-25", date: "2025" },
  { name: "ICETSGC-25", path: "/icetsgc-25", date: "2025" },
  { name: "ICCINET-25", path: "/iccinet-25", date: "2025" },
  { name: "ICAMET 2025", path: "/international-conference-on-ai-managemen", date: "2025" },
  { name: "ICENTA-2024", path: "/about-the-conference", date: "2024" },
];

const RecentConferences = () => (
  <div className="min-h-screen bg-background flex flex-col font-body">
    <Header />
    <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 md:py-24">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold uppercase tracking-widest text-primary border border-primary/20 rounded-full bg-card">
          Past Events
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Recent Conferences</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Explore Eminsphere's recently concluded global academic and research conferences.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {recentList.map((conf) => (
          <Link
            key={conf.name}
            to={conf.path}
            className="group bg-card border border-border rounded-xl p-5 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-display font-bold text-foreground group-hover:text-primary transition-colors">{conf.name}</span>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{conf.date}</span>
            </div>
            <div className="mt-3 text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default RecentConferences;

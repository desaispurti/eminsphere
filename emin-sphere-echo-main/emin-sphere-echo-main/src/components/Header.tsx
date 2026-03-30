import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Apply as Reviewer", to: "/apply-as-reviewer" },
  { label: "Eminsphere's Innovation Challenge 2026", to: "/innovation-challenge-2026" },
];

const moreLinks = [
  { label: "Recent conferences", heading: true },
  { label: "ICAIDSS-26", to: "/icaidss-26" },
  { label: "ICAESET-2026", to: "/icaeset-2026" },
  { label: "ICNSE-26", to: "/icnse-26" },
  { label: "ICTET-26", to: "/ictet-26" },
  { label: "ICMESS-26", to: "/icmess-26" },
  { label: "ICASIT-26", to: "/icasit-26" },
  { label: "ICMDIA-25", to: "/icmdia-25" },
  { label: "ICETSGC-25", to: "/icetsgc-25" },
  { label: "ICCINET-25", to: "/iccinet-25" },
  { label: "ICAMET 2025", to: "/icamet-2025" },
  { label: "ICENTA-2024", to: "/icenta-2024" },
  { label: "divider" },
  { label: "Past Speakers", to: "/past-speakers" },
  { label: "Advisory Members", to: "/advisory-members" },
  { label: "Registration", to: "/registration" },
  { label: "Books", to: "/books" },
  { label: "Expert Connect: Speaking & Advisory", to: "/expert-connect" },
  { label: "Share Your Story", to: "/share-your-story" },
  { label: "Get Recognized", to: "/get-recognized" },
  { label: "Career", to: "/career" },
  { label: "Apply for the advisory team", to: "/apply-advisory-team" },
  { label: "Article Submissions", to: "/article-submissions" },
  { label: "Blog", to: "/blog" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
    setMobileMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkItems = moreLinks.filter((l) => l.to);

  return (
    <header className="w-full" id="top">
      <div className="h-1 bg-primary" />

      <div className="relative w-full h-36 md:h-40 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&q=80" alt="Academic background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-card/60 to-card/40" />
        <div className="relative z-10 h-full max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-card shadow-md flex items-center justify-center border-2 border-gold overflow-hidden">
              <span className="font-display text-primary font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">Eminsphere™</h1>
              <p className="text-sm text-muted-foreground font-body">Global Academic, Research & Innovation Platform</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-3 text-right">
            <div>
              <p className="text-sm font-semibold text-foreground">ISO 9001:2015 Certified</p>
              <p className="text-xs text-muted-foreground">Quality Management System</p>
              <p className="text-xs text-muted-foreground">Certification issued by an accredited certification body</p>
            </div>
            <div className="w-12 h-12 rounded bg-card shadow-sm flex items-center justify-center border border-border">
              <span className="text-xs font-bold text-primary">ISO</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-card border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-5 py-3.5 text-sm font-semibold transition-colors font-body border-b-2 ${
                  location.pathname === link.to ? "text-accent border-accent" : "text-primary border-transparent hover:text-accent hover:border-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex items-center gap-1 px-5 py-3.5 text-sm font-semibold transition-colors font-body border-b-2 ${
                  linkItems.some((l) => location.pathname === l.to) ? "text-accent border-accent" : "text-primary border-transparent hover:text-accent hover:border-accent"
                }`}
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 md:left-0 mt-0 w-72 bg-card border border-border rounded-md shadow-lg z-50 max-h-[70vh] overflow-y-auto">
                  {moreLinks.map((link, i) => {
                    if (link.label === "divider") {
                      return <div key={i} className="border-t border-border my-1" />;
                    }
                    if ((link as any).heading) {
                      return (
                        <div key={i} className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-muted/50">
                          {link.label}
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={link.label}
                        to={link.to!}
                        className={`block px-4 py-2.5 text-sm transition-colors font-body ${
                          location.pathname === link.to ? "text-accent bg-muted" : "text-foreground hover:bg-muted hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Search</span>
            <Search className="w-4 h-4" />
          </div>

          <button className="md:hidden p-3 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`block px-6 py-3 text-sm font-semibold font-body ${
                  location.pathname === link.to ? "text-accent bg-muted" : "text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              className="flex items-center justify-between w-full px-6 py-3 text-sm font-semibold text-primary hover:bg-muted font-body"
            >
              More
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileMoreOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileMoreOpen && (
              <div className="bg-muted/50">
                {moreLinks.map((link, i) => {
                  if (link.label === "divider") return <div key={i} className="border-t border-border my-1" />;
                  if ((link as any).heading) {
                    return (
                      <div key={i} className="px-10 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        {link.label}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      to={link.to!}
                      className={`block px-10 py-2.5 text-sm font-body ${
                        location.pathname === link.to ? "text-accent" : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

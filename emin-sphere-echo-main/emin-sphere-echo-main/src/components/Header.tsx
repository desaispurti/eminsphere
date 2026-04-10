import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { companyInfo } from "../data/eminsphereData";

const navLinks = [
  { label: "Home", to: "/" },
];

const moreLinks = [
  { label: "Apply as Reviewer", to: "/apply-as-reviewer" },
  { label: "Eminsphere's Innovation Challenge 2026", to: "/innovation-challenge-2026" },
  { label: "Upcoming Conferences", heading: true },
  { label: "ICQADTS-2026", to: "/icaist-26" },
  { label: "ICMREF-26", to: "/icmref-26" },
  { label: "ICAITS-26", to: "/icaits-26" },
  { label: "ICATES-26", to: "/icates-26" },
  { label: "Recent Conference proceedings", heading: true },
  { label: "Proceeding ICAIDSS-2026", to: "/recent-conference-proceedings/copy-of-proceeding-icaeset-2026-26" },
  { label: "Proceeding ICAESET-2026-26", to: "/recent-conference-proceedings/copy-of-proceeding-icnse-26" },
  { label: "Proceeding ICNSE-26", to: "/recent-conference-proceedings/copy-of-proceeding-ictet-26" },
  { label: "Proceeding ICTET-26", to: "/recent-conference-proceedings/copy-of-proceeding-icmess-26" },
  { label: "Proceeding ICMESS-26", to: "/recent-conference-proceedings/copy-of-proceeding-icasit-26" },
  { label: "Proceeding ICASIT-26", to: "/recent-conference-proceedings/proceeding-icasit-26" },
  { label: "Proceeding ICMDIA-25", to: "/icmdia-25-1" },
  { label: "Proceeding ICETSGC-25", to: "/proceeding-icetsgc-25" },
  { label: "Proceeding ICCINET-25", to: "/conference-proceedings" },
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideSearch = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutsideSearch);
    }
    return () => document.removeEventListener("mousedown", handleClickOutsideSearch);
  }, [searchOpen]);

  return (
    <header className="w-full" id="top">
      <div className="h-1 bg-primary" />

      <div className="relative w-full bg-white/95 backdrop-blur-sm py-6 md:py-8 border-b border-border">
        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 gap-4">
          {/* Logo on Left */}
          <Link to="/" className="flex-shrink-0">
            <img src="/assets/company logo .png" alt="Eminsphere Logo" className="h-20 md:h-24 w-auto" />
          </Link>

          {/* Company Info Center */}
          <div className="flex-1 text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">{companyInfo.name}</h1>
            <p className="text-sm md:text-base text-muted-foreground font-body mt-1">{companyInfo.tagline}</p>
          </div>

          {/* Certifications on Right */}
          <div className="flex-shrink-0 flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex flex-col text-right text-xs md:text-sm pr-3 border-r border-border">
              <p className="font-semibold text-foreground">{companyInfo.certifications[0].name}</p>
              <p className="text-muted-foreground text-xs">Quality Management System</p>
              <p className="text-muted-foreground text-xs">Certification issued by an</p>
              <p className="text-muted-foreground text-xs">accredited certification body</p>
            </div>
            <div className="flex items-center gap-2">
              {companyInfo.certifications.map((cert, idx) => (
                <div key={idx} className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center bg-card rounded shadow-sm border border-border p-1 hover:shadow-md transition">
                  <img 
                    src={cert.badge} 
                    alt={cert.name} 
                    title={cert.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "block";
                      img.parentElement!.className += " bg-muted";
                    }}
                  />
                </div>
              ))}
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

          <div className="relative">
            <button 
              onClick={(e) => {
                e.preventDefault();
                setSearchOpen(!searchOpen);
              }}
              type="button"
              className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition cursor-pointer px-3 py-2 rounded-md hover:bg-muted/50"
            >
              <span className="text-sm font-medium">Search</span>
              <Search className="w-4 h-4" />
            </button>

            {searchOpen && (
              <div ref={searchRef} className="absolute top-full right-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl z-50">
                <input
                  type="text"
                  placeholder="Search conferences, proceedings..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }
                  }}
                  autoFocus
                  className="w-full px-4 py-2 border-b border-border focus:outline-none bg-card text-foreground"
                />
                {searchQuery && (
                  <div className="max-h-96 overflow-y-auto">
                    {moreLinks
                      .filter((l) => l.to && l.label.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((link) => (
                        <Link
                          key={link.label}
                          to={link.to!}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-muted hover:text-primary transition"
                        >
                          {link.label}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            )}
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

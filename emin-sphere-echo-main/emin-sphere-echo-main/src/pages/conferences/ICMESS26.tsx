import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, GraduationCap } from "lucide-react";

const tracks = [
  { icon: Briefcase, title: "Business & Management", desc: "Corporate leadership, innovation strategies, and digital business ecosystems." },
  { icon: TrendingUp, title: "Economics & Finance", desc: "Global trade, sustainable growth, and intelligent financial systems." },
  { icon: Users, title: "Social Innovation", desc: "Public policy, development studies, and societal transformation." },
  { icon: GraduationCap, title: "Human Capital & Education", desc: "Workforce evolution, learning systems, and inclusive global growth." },
];

const speakers = [
  {
    name: "Dr. Nadia Adnan",
    role: "Stanford World's Top 2% Scientist",
    org: "Assistant Professor & Research Scientist, Prince Mohammad Bin Fahd University",
    location: "Saudi Arabia",
    image: "https://static.wixstatic.com/media/30814e_68479290bb114146b46b56f021a75155~mv2.png",
    tag: "★ Stanford Top 2% Scientist",
  },
];

const ICMESS26 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,40%,22%)] to-[hsl(200,50%,35%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold text-white mb-2">ICMESS-26</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/90 font-body font-semibold mb-4">International Conference on Management, Economics, and Social Sciences</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/70 font-body space-y-1">
            <p>Conference ISBN: 978-81-996310-7-6</p>
            <p>📍 Kuala Lumpur, Malaysia | 📅 February 8, 2026 | 🌐 Hybrid Mode</p>
            <p className="text-sm">Organized by: Eminsphere™ | Email: info@eminsphere.com</p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">About the Conference</h2>
          <p className="text-muted-foreground font-body">
            ICMESS-26 brings together global scholars, researchers, and professionals to share insights on emerging challenges and solutions in management, economics, and social sciences. The conference emphasizes sustainable development, digital innovation, and interdisciplinary collaboration for a connected world.
          </p>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Conference Themes and Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-card rounded-xl p-6 border border-border">
                <t.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynote Speaker */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Keynote Speakers</h2>
          {speakers.map((s, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-6 bg-card rounded-xl p-8 border border-border max-w-xl mx-auto">
              <img src={s.image} alt={s.name} className="w-32 h-32 rounded-full object-cover border-4 border-gold" loading="lazy" />
              <div className="text-center md:text-left">
                <span className="text-xs font-semibold text-gold uppercase tracking-wide">{s.tag}</span>
                <h3 className="font-display text-xl font-bold text-foreground">{s.name}</h3>
                <p className="text-sm text-muted-foreground font-body">{s.org}</p>
                <p className="text-sm text-muted-foreground font-body">{s.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICMESS26;

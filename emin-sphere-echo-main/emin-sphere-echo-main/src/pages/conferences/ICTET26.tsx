import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu, BarChart3, Wifi, Radio, BookOpen, Layers } from "lucide-react";

const tracks = [
  { icon: Cpu, title: "AI & Machine Learning", desc: "Generative AI, NLP, Deep Learning" },
  { icon: BarChart3, title: "Data Science", desc: "Big Data, Analytics, Forecasting" },
  { icon: Wifi, title: "IoT & Smart Systems", desc: "Industry 4.0, CPS" },
  { icon: Radio, title: "Communication Systems", desc: "5G/6G, Networks" },
  { icon: BookOpen, title: "Management & Humanities", desc: "Innovation, Sustainability" },
  { icon: Layers, title: "Interdisciplinary Research", desc: "Healthcare, Education, Finance" },
];

const speakers = [
  {
    name: "Dr. Walida Ounruean",
    role: "International Education Ambassador",
    org: "Faculty of Education, Uttaradit Rajabhat University",
    location: "Thailand",
    image: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg",
  },
  {
    name: "Ezinne Esther Arisa",
    role: "Founder",
    org: "Candy Rainbow Creations",
    location: "South Africa",
    image: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg",
  },
];

const ICTET26 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,30%,30%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold text-white mb-2">ICTET-26</motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-xl md:text-2xl text-white/90 mb-4">International Conference on Cutting-Edge Technologies</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/70 font-body mb-2">15 February 2026 | Hybrid Mode (Online + Offline)</motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 font-body text-sm">Conference ISBN: 978-81-998717-5-5 | Organized by Eminsphere™</motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">About the Conference</h2>
          <p className="text-muted-foreground font-body">
            ICTET-26 is an international multidisciplinary conference aimed at bringing together researchers, academicians, industry professionals, entrepreneurs, and policy makers to share innovations, research findings, and future-ready technologies across technical and non-technical domains.
          </p>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Conference Tracks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {tracks.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="bg-card rounded-xl p-5 border border-border text-center">
                <t.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-base font-bold text-foreground mb-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Keynote & Invited Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakers.map((s, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center">
                <img src={s.image} alt={s.name} className="w-28 h-28 rounded-full object-cover border-4 border-gold mb-4" loading="lazy" />
                <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
                <p className="text-sm text-accent font-semibold font-body">{s.role}</p>
                <p className="text-sm text-muted-foreground font-body">{s.org}</p>
                <p className="text-sm text-muted-foreground font-body">{s.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICTET26;

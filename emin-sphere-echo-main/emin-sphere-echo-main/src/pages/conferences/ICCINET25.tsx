import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Globe, Lightbulb, GraduationCap, Handshake } from "lucide-react";

const objectives = [
  { icon: Globe, title: "Global Research Collaboration", desc: "Strengthening international partnerships in AI and emerging technologies" },
  { icon: Lightbulb, title: "Showcasing Innovation", desc: "Latest breakthroughs in AI, ML, IoT, robotics, and sustainable technologies" },
  { icon: GraduationCap, title: "Academic Excellence", desc: "Promoting high-quality peer-reviewed research and publications" },
  { icon: Handshake, title: "Industry-Academia Bridge", desc: "Connecting researchers with industry professionals for real-world impact" },
];

const ICCINET25 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,50%,35%)] to-[hsl(250,40%,45%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold text-white mb-2">ICCINET-25</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/90 font-body font-semibold mb-4">International Conference on Computational Intelligence and Emerging Technologies</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/70 font-body space-y-1">
            <p>Malmö, Sweden | October 25–26, 2025 | Hybrid Mode</p>
            <p className="text-sm">ISBN: 978-93-344-3140-7 | Organized by: Eminsphere™</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">About the Conference</h2>
          <p className="text-muted-foreground font-body">
            ICCINET-25 is a premier global forum advancing innovation, research collaboration, and knowledge sharing in AI, computational intelligence, data science, and next-generation technologies.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Conference Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-card rounded-xl p-6 border border-border">
                <o.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICCINET25;

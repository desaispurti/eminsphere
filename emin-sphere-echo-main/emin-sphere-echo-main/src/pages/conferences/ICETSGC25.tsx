import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu, Leaf, Globe, Lightbulb } from "lucide-react";

const objectives = [
  { icon: Cpu, title: "Emerging Technologies", desc: "AI, IoT, Cloud, Blockchain, Robotics" },
  { icon: Leaf, title: "Sustainability & Climate", desc: "Renewable energy, smart cities, green infrastructure" },
  { icon: Globe, title: "Global Collaboration", desc: "Cross-border research and innovation partnerships" },
  { icon: Lightbulb, title: "Innovation & Entrepreneurship", desc: "Startups, digital transformation, industry 4.0" },
];

const ICETSGC25 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(140,40%,35%)] to-[hsl(180,50%,40%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold text-white mb-2">ICETSGC-25</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/90 font-body font-semibold mb-4">International Conference on Emerging Technologies, Sustainability, and Global Collaboration</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/70 font-body space-y-1">
            <p>Barcelona, Spain | November 16, 2025 | Hybrid Mode</p>
            <p className="text-sm">ISBN No. 978-81-994624-5-8 | Organized by: Eminsphere™</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">About the Conference</h2>
          <p className="text-muted-foreground font-body">
            ICETSGC-25 unites academia, industry, policymakers, and innovators. Explore technological breakthroughs, sustainable practices, and global collaboration strategies to shape a better future.
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

export default ICETSGC25;

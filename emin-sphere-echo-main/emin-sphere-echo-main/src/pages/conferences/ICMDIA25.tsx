import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu, Briefcase, Leaf, Brain, Users } from "lucide-react";

const tracks = [
  { icon: Cpu, title: "Engineering & Technology", desc: "AI, IoT, Cybersecurity, Smart Systems, Data Engineering" },
  { icon: Briefcase, title: "Business & Management", desc: "Digital transformation, sustainability strategies, and global trade" },
  { icon: Leaf, title: "Environmental & Sustainable Sciences", desc: "Climate resilience, renewable resources, and green innovation" },
  { icon: Brain, title: "Computing & Artificial Intelligence", desc: "Machine learning, robotics, autonomous systems, and data ethics" },
  { icon: Users, title: "Social Innovation & Humanities", desc: "Ethics, education, digital inclusion, governance, and policy studies" },
];

const ICMDIA25 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(200,50%,35%)] to-[hsl(180,40%,45%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold text-white mb-2">ICMDIA-25</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/90 font-body font-semibold mb-4">International Conference on Multidisciplinary Developments in Innovation and Advancement</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/70 font-body space-y-1">
            <p>Helsinki, Finland | December 14, 2025 | Hybrid Mode</p>
            <p className="text-sm">ISBN Number: 978-81-994624-6-5 | Organized by: Eminsphere™</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">About the Conference</h2>
          <p className="text-muted-foreground font-body">
            The ICMDIA-25 unites researchers, scholars, and professionals from around the world to promote interdisciplinary innovation and sustainable advancement. This global forum fosters collaboration across engineering, technology, management, environmental sciences, social innovation, and AI-driven transformation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Conference Tracks & Objectives</h2>
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

      <Footer />
    </div>
  );
};

export default ICMDIA25;

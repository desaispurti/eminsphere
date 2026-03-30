import { motion } from "framer-motion";
import { Globe, Lightbulb, GraduationCap, Users } from "lucide-react";

const items = [
  { icon: Globe, label: "Research Partnerships" },
  { icon: Lightbulb, label: "Innovation Exchange" },
  { icon: GraduationCap, label: "Educational Programs" },
  { icon: Users, label: "Global Networking" },
];

const CollaborationSection = () => {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-3"
        >
          Global Collaboration Network
        </motion.h2>
        <p className="text-sm opacity-80 font-body mb-12 max-w-lg mx-auto">
          Connect with researchers, educators, and innovators worldwide.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 p-6 rounded-lg border border-primary/30 hover:border-gold transition-colors"
            >
              <item.icon className="w-10 h-10 text-gold" />
              <span className="font-body text-sm font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;

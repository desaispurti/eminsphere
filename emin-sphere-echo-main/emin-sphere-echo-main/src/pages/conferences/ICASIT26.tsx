import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ICASIT26 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,50%,30%)] to-[hsl(230,40%,40%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold text-white mb-2">ICASIT-26</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/90 font-body font-semibold mb-4">International Conference on Advanced Science, Innovation and Technology</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/70 font-body space-y-1">
            <p>January 25, 2026 | Organized by: Eminsphere™</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Conference Details</h2>
          <p className="text-muted-foreground font-body text-lg">
            ICASIT-26 is an international conference organized by Eminsphere™ focusing on advanced science, innovation, and technology. Details for this conference are being updated. Please check back soon or contact info@eminsphere.com for more information.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICASIT26;

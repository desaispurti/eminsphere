import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ArticleSubmissions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,30%,25%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Article Submissions
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-muted-foreground font-body text-lg mb-8">
            Submit your article for publication through Eminsphere. We welcome high-quality research contributions across all academic domains.
          </p>
          <a href="https://forms.gle/YPBcLTpsPiNLit6D6" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-body">
            Submit Article
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleSubmissions;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const bookImages = [
  "/assets/Books%20_%20Eminsphere_files/30814e_f7d2e633c973493e994531e83f961108~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_cc155ed03b104806bf81258474a65cf7~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_9ddc6849f8e44a65b86f7bff5824cd6d~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_7d1e1a9e732a452e96bfd1d3b6e53799~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_6dbe70cbdceb481bb40f14d92266b7dc~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_5d49a33e7ad94a7fb551d35b324554be~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_4e7690d89d9040cbb988c86eecfc0961~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_1fc8c1efbb284705926f3bbeb216b966~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_1f17314764334431a3d4eaf47b220f68~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_199f000947d84fe7a1e3f97f0535ab35~mv2.jpg",
  "/assets/Books%20_%20Eminsphere_files/30814e_19396b73f27f4728b616f41053071dac~mv2.jpg",
  "/assets/Books%20_%20Eminsphere_files/30814e_133147aca816471683e512c68e38a1da~mv2.jpg",
  "/assets/Books%20_%20Eminsphere_files/30814e_12125d969605430f9e7e06f3731a8ff1~mv2.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_7410938484bc40e9a11c6254db663a5a~mv2.jpg",
  "/assets/Books%20_%20Eminsphere_files/174857.png",
  "/assets/Books%20_%20Eminsphere_files/30814e_b21feb67151747e2a3740b1e47dc4dbf~mv2.jpg",
];

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,30%,25%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Books
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 font-body mt-4 max-w-2xl mx-auto">
            Eminsphere™ publishes hands-on, peer-reviewed technical books in AI, Cloud, Systems & Technology — built for academia and industry.<br className="hidden md:block"/>
            Generative Thinking meets Rigorous Engineering.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-white bg-white/10 px-6 py-2 rounded-full border border-white/20">100+ Titles</div>
            <div className="text-white bg-white/10 px-6 py-2 rounded-full border border-white/20">12 Countries</div>
            <div className="text-white bg-white/10 px-6 py-2 rounded-full border border-white/20">500k Readers</div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-6 rounded-xl border border-border text-center shadow-sm">
              <h3 className="font-display font-bold text-xl mb-3">Academic Rigor</h3>
              <p className="text-muted-foreground font-body">Peer-reviewed, research-grade content.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border text-center shadow-sm">
              <h3 className="font-display font-bold text-xl mb-3">Global Reach</h3>
              <p className="text-muted-foreground font-body">Worldwide ISBN distribution. Our books are globally accessible and officially available on Amazon.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border text-center shadow-sm">
              <h3 className="font-display font-bold text-xl mb-3">Premium Design</h3>
              <p className="text-muted-foreground font-body">Modern layouts & visual clarity.</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-12">
             <button className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-body">Explore Catalog</button>
             <button className="bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-secondary/80 transition-opacity font-body">Become an Author</button>
          </div>

          <h2 className="font-display text-3xl font-bold text-center mb-10">Our Catalog</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {bookImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 8) * 0.05 }}
                viewport={{ once: true }}
              >
                <img src={img} alt={`Book ${i + 1}`} className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Books;

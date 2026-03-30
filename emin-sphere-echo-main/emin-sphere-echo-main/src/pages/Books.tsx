import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const bookImages = [
  "https://static.wixstatic.com/media/30814e_ef74524add6a4927996eafcbbd330437~mv2.jpg/v1/fit/w_480,h_720,q_90,enc_avif,quality_auto/30814e_ef74524add6a4927996eafcbbd330437~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_a440f5cce8b546d3a3cfff1a91613384~mv2.jpg/v1/fit/w_480,h_720,q_90,enc_avif,quality_auto/30814e_a440f5cce8b546d3a3cfff1a91613384~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_16b69a2148aa4ec3974c175db786f935~mv2.jpg/v1/fit/w_480,h_763,q_90,enc_avif,quality_auto/30814e_16b69a2148aa4ec3974c175db786f935~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_7548c433f07049688dc6c086a752fbbb~mv2.jpg/v1/fit/w_480,h_720,q_90,enc_avif,quality_auto/30814e_7548c433f07049688dc6c086a752fbbb~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_9d18e73cd65b44698a048b4451df1769~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_9d18e73cd65b44698a048b4451df1769~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_93f80338a8b842bcad1d34fe83c304ca~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_93f80338a8b842bcad1d34fe83c304ca~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_57ed92c9f96443dcb1f286e9395c1c06~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_57ed92c9f96443dcb1f286e9395c1c06~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_6e1ed5947b4d4d33a0aaadc88ee948e5~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_6e1ed5947b4d4d33a0aaadc88ee948e5~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_4e176ec10b1b4cc984302fbb62a627ea~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_4e176ec10b1b4cc984302fbb62a627ea~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_057c1e9e1f7742fa9ff7ca820bd743f4~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_057c1e9e1f7742fa9ff7ca820bd743f4~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_fa1aba31e5cc49e08870502f68c5b671~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_fa1aba31e5cc49e08870502f68c5b671~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_3eec141d6071465090009732c1419911~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_3eec141d6071465090009732c1419911~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_5c032d72cf2a4aa4b85088bc66bd8cf8~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_5c032d72cf2a4aa4b85088bc66bd8cf8~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_b21feb67151747e2a3740b1e47dc4dbf~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_b21feb67151747e2a3740b1e47dc4dbf~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_69e6f21ca0fa41ebab6f0c9ad4314fa6~mv2.jpg/v1/fit/w_480,h_721,q_90,enc_avif,quality_auto/30814e_69e6f21ca0fa41ebab6f0c9ad4314fa6~mv2.jpg",
  "https://static.wixstatic.com/media/30814e_7d7db80e5b8c4e60bfaca9b3c2dd8377~mv2.jpg/v1/fit/w_480,h_765,q_90,enc_avif,quality_auto/30814e_7d7db80e5b8c4e60bfaca9b3c2dd8377~mv2.jpg",
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
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 font-body mt-4">
            Publications by Eminsphere™
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
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

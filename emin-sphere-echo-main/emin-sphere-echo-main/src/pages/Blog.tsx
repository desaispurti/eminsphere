import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Empowering Cybersecurity to be Smarter Faster and More Resilient with Nandan Sharma's Adaptive Intrusion Detection",
    excerpt: "Nandan Sharma delves into adaptive intrusion detection, highlighting the need for intelligent, responsive, and resilient cybersecurity strategies.",
    date: "Apr 6, 2025",
    image: "https://static.wixstatic.com/media/30814e_5481080a060b480c8a14dd2ab0c8dd7f~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/30814e_5481080a060b480c8a14dd2ab0c8dd7f~mv2.webp",
  },
  {
    title: "Shubham Bhaskar Thakare's Award-Winning Research in Mechanical Systems Optimization",
    excerpt: "Exploring cutting-edge research in mechanical systems optimization and its real-world impact.",
    date: "Mar 31, 2025",
    image: "https://static.wixstatic.com/media/30814e_44fee04852ec45e4aa227a6ef6e0a233~mv2.jpeg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/30814e_44fee04852ec45e4aa227a6ef6e0a233~mv2.webp",
  },
  {
    title: "Key Takeaways from Sambhaji Barse's Thailand Visit",
    excerpt: "Join us for an engaging conversation about career opportunities, industry insights, and academic collaborations.",
    date: "Mar 29, 2025",
    image: "https://i.ytimg.com/vi/4-1NGbogkB0/maxresdefault.jpg",
  },
  {
    title: "Sambhaji Barse Concludes Successful Academic & Research Visit to Thailand, Strengthening Global Collaborations",
    excerpt: "A recap of academic partnerships and research collaborations established during the Thailand visit.",
    date: "Mar 29, 2025",
    image: "https://static.wixstatic.com/media/30814e_b489af32c274400290ecb8ccd00f2958~mv2.jpeg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/30814e_b489af32c274400290ecb8ccd00f2958~mv2.webp",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,30%,25%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Blog
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 font-body mt-4">
            Latest news and articles from Eminsphere
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="text-xs text-muted-foreground font-body mb-2">{post.date}</p>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-tight">{post.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

import { motion } from "framer-motion";
import { Heart, Eye } from "lucide-react";

const articles = [
  {
    title: "Empowering Cybersecurity to be Smarter Faster and More Resilient with Nandan Sharma's Adaptive Intrusion Detection",
    excerpt: "Nandan Sharma delves into adaptive intrusion detection, highlighting the need for intelligent, responsive, and resilient cybersecurity strategies.",
    image: "/assets/Home%20_%20Eminsphere_files/30814e_5481080a060b480c8a14dd2ab0c8dd7f~mv2.webp",
    views: 53,
    likes: 11,
    link: "https://www.eminsphere.com/post/empowering-cybersecurity-to-be-smarter-faster-and-more-resilient-with-nandan-sharma-s-adaptive-intru",
  },
  {
    title: "Shubham Bhaskar Thakare's Award-Winning Research in Mechanical Systems Optimization",
    excerpt: "An exploration of award-winning research in mechanical systems optimization and its implications for the field.",
    image: "/assets/Home%20_%20Eminsphere_files/30814e_44fee04852ec45e4aa227a6ef6e0a233~mv2.webp",
    views: 40,
    likes: 7,
    link: "https://www.eminsphere.com/post/shubham-bhaskar-thakare-s-award-winning-research-in-mechanical-systems-optimization",
  },
  {
    title: "Key Takeaways from Sambha Cha's Research Visit to Bangkok, Thailand",
    excerpt: "Join us for an engaging conversation with Miss. Cha, a working professional in Thailand, as she shares her research experience.",
    image: "/assets/Home%20_%20Eminsphere_files/30814e_77308176719a49509143aca1d24d00c7~mv2.jpg",
    views: 27,
    likes: 7,
    link: "https://www.eminsphere.com/post/key-takeaways-from-sambha-cha-s-research-visit-to-bangkok-thailand",
  },
];

const LatestArticles = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border bg-card"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> {article.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5" /> {article.likes}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;

const fs = require('fs');
const path = require('path');

const dataList = [
  {
    id: "ICAIDSS26",
    shortTitle: "ICAIDSS-26",
    fullName: "International Conference on Artificial Intelligence, Data Science & Sustainable Systems",
    dateLoc: "29 March 2026 | Virtual Mode",
    desc: "A globally recognized academic and professional platform dedicated to fostering innovation, collaboration, and knowledge exchange in the rapidly advancing domains of Artificial Intelligence, Data Science, and Sustainable Technologies. The conference brings together a diverse community of researchers, academicians, and industry experts to discuss emerging challenges and opportunities."
  },
  {
    id: "ICAESET2026",
    shortTitle: "ICAESET-2026",
    fullName: "International Conference on Advanced Engineering Systems, Computing and Emerging Technologies",
    dateLoc: "15 March 2026 | Global Participation",
    desc: "A prestigious global platform bringing together researchers, engineers, scientists, and industry professionals to discuss cutting-edge innovations shaping the future of technology and engineering."
  },
  {
    id: "ICNSE26",
    shortTitle: "ICNSE-26",
    fullName: "International Conference on Next Generation Science & Engineering Innovation",
    dateLoc: "01 March 2026 | Virtual Mode | Global Participation",
    desc: "A premier global academic platform dedicated to interdisciplinary research, innovation, and scholarly collaboration. The conference brings together researchers, academicians, and industry leaders worldwide to ensure academic excellence through rigorous peer review."
  },
  {
    id: "ICTET26",
    shortTitle: "ICTET-26",
    fullName: "International Conference on Cutting-Edge Technologies",
    dateLoc: "15 February 2026 | Hybrid Mode (Online + Offline)",
    desc: "An international multidisciplinary conference aimed at bringing together researchers, academicians, and industry professionals to share innovations, research findings, and future-ready technologies across technical and non-technical domains."
  },
  {
    id: "ICMESS26",
    shortTitle: "ICMESS-26",
    fullName: "International Conference on Management, Economics, and Social Sciences",
    dateLoc: "February 8, 2026 | Kuala Lumpur, Malaysia | Hybrid Mode",
    desc: "A premier international academic research conference providing a high-level scholarly platform for participants to share research, discuss theoretical and practical challenges, and collaborate on future initiatives in management, economics, and social sciences."
  },
  {
    id: "ICASIT26",
    shortTitle: "ICASIT-26",
    fullName: "International Conference on Applied Sciences, Innovation, and Technology",
    dateLoc: "Zurich, Switzerland | 25 January 2026 | Hybrid Mode",
    desc: "A premier international platform bringing together researchers, academicians, and industry experts to exchange ideas in applied sciences, innovation, sustainability, and emerging technologies."
  },
  {
    id: "ICMDIA25",
    shortTitle: "ICMDIA-25",
    fullName: "International Conference on Multidisciplinary Developments in Innovation and Advancement",
    dateLoc: "Helsinki, Finland | December 14, 2025 | Hybrid Mode",
    desc: "This conference unites researchers and professionals from around the world to promote interdisciplinary innovation and sustainable advancement across engineering, technology, management, and AI-driven transformation."
  },
  {
    id: "ICETSGC25",
    shortTitle: "ICETSGC-25",
    fullName: "International Conference on Emerging Technologies, Sustainability, and Global Collaboration",
    dateLoc: "Barcelona, Spain | November 16, 2025 | Hybrid Mode",
    desc: "A platform that unites academia, industry, and innovators to explore technological breakthroughs, sustainable practices, and global collaboration strategies to shape a better future."
  }
];

const template = (data) => `import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Globe, Award, Users, FileText } from "lucide-react";

const whyAttend = [
  { icon: Globe, title: "Global Research Platform", desc: "Connect with researchers and professionals from multiple countries and share innovative research ideas." },
  { icon: Award, title: "Publication Opportunities", desc: "Get your research published in ISBN proceedings with potential Scopus and Web of Science indexing." },
  { icon: Users, title: "Expert Networking", desc: "Network with keynote speakers, session chairs, and researchers from top global institutions." },
  { icon: FileText, title: "Quality Peer Review", desc: "All submissions undergo a double-blind peer-review process by an international panel of experts." },
];

const publications = [
  { title: "ISBN Conference Proceedings", desc: "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
  { title: "Scopus Indexing Opportunity", desc: "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
  { title: "Web of Science Indexing", desc: "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." },
];

const ${data.id} = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,70%,45%)] to-[hsl(270,50%,55%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
          >
            ${data.shortTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 font-body font-semibold mb-4"
          >
            ${data.fullName}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 font-body"
          >
            ${data.desc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-block bg-card/20 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-3 text-white font-body font-semibold"
          >
            ${data.dateLoc}
          </motion.div>
        </div>
      </section>

      {/* Publication & Indexing */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Publication & Indexing</h2>
          <p className="text-center text-muted-foreground font-body mb-10 max-w-3xl mx-auto">
            All accepted and presented papers of ${data.shortTitle} will undergo a rigorous peer-review process by the International Technical Committee. Selected high-quality research papers will be recommended for publication in reputed indexed journals and conference proceedings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <BookOpen className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{pub.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{pub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Why Attend ${data.shortTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyAttend.map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border flex gap-4">
                <item.icon className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ${data.id};
`;

const destDir = path.join(__dirname, 'src', 'pages', 'conferences');

dataList.forEach(data => {
  const fileContent = template(data);
  const filePath = path.join(destDir, `${data.id}.tsx`);
  fs.writeFileSync(filePath, fileContent);
  console.log('Written:', data.id);
});

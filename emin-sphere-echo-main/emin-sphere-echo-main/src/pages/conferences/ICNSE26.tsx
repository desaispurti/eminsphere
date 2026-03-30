import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu, Shield, Lightbulb, Wifi } from "lucide-react";

const tracks = [
  { icon: Cpu, title: "Artificial Intelligence & Data Science", items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"] },
  { icon: Lightbulb, title: "Software Engineering", items: ["Cloud Computing", "Distributed Systems", "DevOps"] },
  { icon: Shield, title: "Cybersecurity", items: ["Cryptography", "Blockchain Security", "Digital Forensics"] },
  { icon: Wifi, title: "Emerging Technologies", items: ["IoT", "Robotics", "Quantum Computing"] },
];

const speakers = [
  {
    name: "Prof. (Dr.) Tanaji Dabade",
    role: "Head of Institutions & Director",
    org: "Navsahyadri Education Society Group of Institutions",
    location: "Pune, India",
    image: "https://static.wixstatic.com/media/30814e_85d4d1b8288f40749bae07d46b5a9683~mv2.jpeg",
    tag: "Chief Guest",
  },
];

const ICNSE26 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25,80%,50%)] to-[hsl(35,90%,55%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            ICNSE-26
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/90 font-body font-semibold mb-4">
            International Conference on Next-Generation Science & Engineering
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-white/70 font-body mb-6">
            Advancing Global Research, Engineering Innovation & Scientific Excellence
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block bg-accent text-accent-foreground rounded-xl px-8 py-3 font-body font-semibold">
            01 March 2026 | Virtual Mode | Global Participation
            <br />
            <span className="text-sm">ISBN Number: 978-81-998717-9-3</span>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">About the Conference</h2>
          <p className="text-muted-foreground font-body mb-3">ICNSE-26 is a premier global academic platform dedicated to interdisciplinary research, innovation, and scholarly collaboration.</p>
          <p className="text-muted-foreground font-body mb-3">The conference brings together researchers, academicians, industry leaders, and doctoral scholars worldwide.</p>
          <p className="text-muted-foreground font-body">All papers undergo rigorous peer review to ensure academic excellence.</p>
        </div>
      </section>

      {/* Technical Tracks */}
      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Technical Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-card rounded-xl p-6 border border-border">
                <track.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{track.title}</h3>
                <ul className="space-y-1">
                  {track.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chief Guest */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4 text-center">Distinguished Conference Patron & Chief Guest</h2>
          <p className="text-center text-muted-foreground font-body mb-10">Honoring Visionary Leadership, Academic Excellence & Transformational Institutional Stewardship</p>
          {speakers.map((s, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-6 bg-card rounded-xl p-8 border border-border max-w-xl mx-auto">
              <img src={s.image} alt={s.name} className="w-32 h-32 rounded-full object-cover border-4 border-gold" loading="lazy" />
              <div className="text-center md:text-left">
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">{s.tag}</span>
                <h3 className="font-display text-xl font-bold text-foreground">{s.name}</h3>
                <p className="text-sm text-muted-foreground font-body">{s.role}</p>
                <p className="text-sm text-muted-foreground font-body">{s.org}</p>
                <p className="text-sm text-muted-foreground font-body">{s.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICNSE26;

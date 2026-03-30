import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, BookOpen, Globe, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Prestigious Academic Recognition",
    desc: "Gain formal recognition as an official reviewer, enhancing your academic profile and professional standing at an international level.",
  },
  {
    icon: BookOpen,
    title: "Early Access to Cutting-Edge Research",
    desc: "Review high-quality manuscripts prior to publication and stay ahead of emerging trends across multiple technical domains.",
  },
  {
    icon: Globe,
    title: "Global Scholarly Networking",
    desc: "Collaborate with editors, keynote speakers, and researchers from leading universities, research centers, and industries worldwide.",
  },
  {
    icon: CheckCircle,
    title: "Contribution to Research Excellence",
    desc: "Uphold ethical research practices, improve manuscript quality, and guide authors toward impactful contributions.",
  },
];

const expertiseAreas = [
  "Artificial Intelligence, Machine Learning & Data Science",
  "Electronics, Communication & Embedded Systems",
  "Computer Science, Cyber Security & Cloud Computing",
  "Electrical Engineering, Renewable Energy & Smart Grids",
  "Mechanical Engineering, Materials & Manufacturing",
  "Civil Engineering, Smart Infrastructure & Sustainability",
  "Interdisciplinary & Emerging Technologies",
];

const ApplyAsReviewer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,40%,25%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Call for Reviewers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 font-body max-w-3xl mx-auto"
          >
            EminSphere invites accomplished academicians, researchers, scientists, and industry professionals to serve as Reviewers for our upcoming international conferences. Reviewers play a pivotal role in ensuring scholarly excellence, research integrity, and global academic impact.
          </motion.p>
        </div>
      </section>

      {/* Role & Importance */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent mb-6">
            Role & Importance of a Reviewer
          </h2>
          <p className="text-foreground font-body text-lg mb-4">
            Reviewers are the cornerstone of high-quality academic publishing. Their expertise ensures that submitted research meets international standards of originality, technical depth, ethical integrity, and relevance.
          </p>
          <p className="text-muted-foreground font-body">
            As a reviewer, you will contribute directly to shaping impactful research while strengthening the credibility and reputation of global scholarly platforms.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent text-center mb-12">
            Why Join the EminSphere Reviewer Panel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <b.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
            Areas of Expertise
          </h2>
          <div className="space-y-3">
            {expertiseAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-body text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
          <p className="text-muted-foreground font-body text-lg mb-8">
            Applications are invited from Ph.D. holders, senior academicians, postdoctoral researchers, journal reviewers, and experienced industry professionals with a strong research and publication record.
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Apply to Join Our Reviewer Panel</h2>
          <p className="text-muted-foreground font-body mb-8">
            If you are passionate about advancing research quality and contributing to internationally recognized academic initiatives, we invite you to apply.
          </p>
          <a
            href="https://forms.gle/vgARCeUie6zzxWrS8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-body"
          >
            Submit Reviewer Application
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplyAsReviewer;

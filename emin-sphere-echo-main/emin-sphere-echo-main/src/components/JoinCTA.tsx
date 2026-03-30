import { motion } from "framer-motion";

const JoinCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Be a Part of Eminsphere™
        </motion.h2>
        <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
          Collaborate, publish, and grow with a global academic community.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-md hover:opacity-90 transition-opacity"
        >
          Join Now
        </motion.a>
      </div>
    </section>
  );
};

export default JoinCTA;

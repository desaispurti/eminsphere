import { motion } from "framer-motion";

const services = [
  {
    title: "Academic Publishing",
    description: "Global research publishing support.",
    image: "/assets/Home%20_%20Eminsphere_files/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Conference Management",
    description: "International conference execution.",
    image: "/assets/Home%20_%20Eminsphere_files/photo-1532619187608-e5375cab36aa",
  },
  {
    title: "Thesis Consultation",
    description: "Expert academic mentoring.",
    image: "/assets/Home%20_%20Eminsphere_files/photo-1556761175-4b46a572b786",
  },
  {
    title: "Skill Development",
    description: "Professional upskilling programs.",
    image: "/assets/Home%20_%20Eminsphere_files/photo-1607746882042-944635dfe10e",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Key Services
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Professional academic and research support for global excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-card border border-border"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

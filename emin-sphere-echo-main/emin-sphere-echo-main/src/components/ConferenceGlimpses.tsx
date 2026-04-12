import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GlimpseGallery {
  title: string;
  date: string;
  viewMoreLink?: string;
  images: string[];
  layout: "scroll" | "pair";
}

const galleries: GlimpseGallery[] = [
  {
    title: "Glimpses of ICTET-26",
    date: "15 February 2026",
    layout: "scroll",
    images: [
      "/assets/Home%20_%20Eminsphere_files/30814e_bd981344bf6d457cb5c1b3ad18e8b2a2~mv2.jpg",
      "/assets/Home%20_%20Eminsphere_files/30814e_df6ff84afa124774ae195216cf2b486d~mv2.jpg",
      "/assets/Home%20_%20Eminsphere_files/30814e_ecea041355d84679ab1367bd82fa0ed5~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_67e286d210b64a398b3806961cca6c6a~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_f60549ac90534778a5183cc470411dfd~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_ea118ea29d6e4d09a3ff77e169672cac~mv2.jpeg"
    ],
  },
  {
    title: "Glimpses of ICETSGC-25",
    date: "20 January 2026",
    layout: "scroll",
    images: [
      "/assets/Home%20_%20Eminsphere_files/30814e_db76cb11be6e4658921b1416c4f002d1~mv2.jpg",
      "/assets/Home%20_%20Eminsphere_files/30814e_77308176719a49509143aca1d24d00c7~mv2.jpg",
      "/assets/Home%20_%20Eminsphere_files/30814e_6a64ae4eab594e29acaa5124ade0d3f7~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_23a41863b4d346e4852747feb1e9f896~mv2.jpeg",
    ],
  },
  {
    title: "Glimpses of ICAIDSS-26",
    date: "Jan 12, 2026",
    layout: "scroll",
    images: [
      "/assets/ICAIDSS-26%20_%20Eminsphere_files/11062b_3e51224f3ee74964a141005767e8feb9~mv2.jpg",
      "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_00654a10251849539ec26353342c5dbf~mv2.jpg",
      "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_0f9939591f474b57b412a1f5f02a3efe~mv2.jpeg",
      "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_1fbcfb0ce35f425eabb9dd005a658e05~mv2.jpeg",
      "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_821d66fc49f64b71a44eb747ef514580~mv2.jpeg"
    ],
  },
  {
    title: "Glimpses of ICMDIA-25",
    date: "Dec 14, 2025",
    viewMoreLink: "https://www.eminsphere.com/icmdia-25",
    layout: "scroll",
    images: [
      "/assets/Home%20_%20Eminsphere_files/30814e_f86882c18c1444b1a13616a827c6775f~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_d917132ef2df4159b65db1a83a1c9bc2~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_f202f06835db41d88aa73f77f3c7b9de~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_be514a5a7b134873aec6cd5aa0de916f~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_e2ab8291c65443b08037daea7ef6a78d~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_9a7ec9347a0a41b799a175f951ce48fe~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_174db642e9584aa784d19c461ae29bad~mv2.jpeg",
      "/assets/Home%20_%20Eminsphere_files/30814e_d86d730b88634ffd973c45f6ce16ebeb~mv2.png"
    ],
  },
];

const ScrollGallery = ({ images, title }: { images: string[]; title: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="relative group">
      <div ref={ref} className="flex gap-3 overflow-x-auto gallery-scroll pb-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} photo ${i + 1}`}
            className="h-48 md:h-56 w-auto rounded-md object-cover flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>
      <button
        onClick={() => scroll(-1)}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-1 shadow opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-1 shadow opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
    </div>
  );
};

const PairGallery = ({ images, title }: { images: string[]; title: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`${title} photo ${i + 1}`}
        className="w-full rounded-md object-cover max-h-80"
        loading="lazy"
      />
    ))}
  </div>
);

const ConferenceGlimpses = () => {
  return (
    <section className="py-16 md:py-24 section-warm">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {galleries.map((gallery, i) => (
          <motion.div
            key={gallery.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {gallery.title}
                </h2>
                <p className="text-sm text-muted-foreground font-body">
                  Date: {gallery.date}
                </p>
              </div>
              {gallery.viewMoreLink && (
                <a
                  href={gallery.viewMoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent hover:underline font-body"
                >
                  View More →
                </a>
              )}
            </div>
            {gallery.layout === "scroll" ? (
              <ScrollGallery images={gallery.images} title={gallery.title} />
            ) : (
              <PairGallery images={gallery.images} title={gallery.title} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ConferenceGlimpses;

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
    title: "Glimpses of ICAESET-2026",
    date: "15 March 2026",
    layout: "scroll",
    images: [
      "https://static.wixstatic.com/media/30814e_33d4e51ec9b548869dc79ff1d169efaa~mv2.png",
      "https://static.wixstatic.com/media/30814e_5e715a3196b14d579d140d5b3eb1ddca~mv2.png",
      "https://static.wixstatic.com/media/30814e_93a8f9332aef4c4aa7fd4f0e49546811~mv2.png",
      "https://static.wixstatic.com/media/30814e_a9f31589b453419d80070cb9359201c8~mv2.png",
      "https://static.wixstatic.com/media/30814e_d86d730b88634ffd973c45f6ce16ebeb~mv2.png",
      "https://static.wixstatic.com/media/30814e_d7cee65f8eb14561ad4ef13530292baa~mv2.png",
    ],
  },
  {
    title: "Glimpses of ICNSE-26",
    date: "1 March 2026",
    layout: "scroll",
    images: [
      "https://static.wixstatic.com/media/502b14_a0dbb2f7139047a08a766656bd0f7454~mv2.png",
      "https://static.wixstatic.com/media/502b14_9126573200ea4347ad45216bf5d5d0cc~mv2.png",
      "https://static.wixstatic.com/media/502b14_09e44ae6e60446d5a50f320be751f625~mv2.png",
      "https://static.wixstatic.com/media/502b14_3795a6d8c1e04913be8f9f278820b1f5~mv2.png",
      "https://static.wixstatic.com/media/502b14_a1d2cd32d08743ca8aff3aef4fa76139~mv2.png",
      "https://static.wixstatic.com/media/502b14_4314189cd9e44cd680613f130b26535f~mv2.png",
    ],
  },
  {
    title: "Glimpses of ICTET-26",
    date: "15 February 2026",
    layout: "scroll",
    images: [
      "https://static.wixstatic.com/media/502b14_edb34fd966bd47828bf664f663abdbf9~mv2.png",
      "https://static.wixstatic.com/media/502b14_219e55d10fce4c84a137a2237cee8ea9~mv2.png",
      "https://static.wixstatic.com/media/502b14_2eaed030e42b41cd83cd53cdfd2e7c08~mv2.png",
      "https://static.wixstatic.com/media/502b14_60fdae1f90e94ac9bc4c901d9d3fab98~mv2.png",
      "https://static.wixstatic.com/media/502b14_ec71360407204e648fac1ff35d41c712~mv2.png",
      "https://static.wixstatic.com/media/502b14_c5b24e50b1a04652a81e622dfbc4101f~mv2.png",
    ],
  },
  {
    title: "Glimpses of ICMESS-26",
    date: "Feb 08, 2026",
    viewMoreLink: "https://www.eminsphere.com/icmess-26",
    layout: "pair",
    images: [
      "https://static.wixstatic.com/media/30814e_bd981344bf6d457cb5c1b3ad18e8b2a2~mv2.jpg/v1/fit/w_1366,h_670,q_90/30814e_bd981344bf6d457cb5c1b3ad18e8b2a2~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_df6ff84afa124774ae195216cf2b486d~mv2.jpg/v1/fit/w_1366,h_670,q_90/30814e_df6ff84afa124774ae195216cf2b486d~mv2.jpg",
    ],
  },
  {
    title: "Glimpses of ICASIT-26",
    date: "Jan 25, 2026",
    viewMoreLink: "https://www.eminsphere.com/icasit-26",
    layout: "pair",
    images: [
      "https://static.wixstatic.com/media/502b14_0f3695fe750741d6915be39ecbc78771~mv2.png/v1/fit/w_1440,h_812,q_90/502b14_0f3695fe750741d6915be39ecbc78771~mv2.png",
      "https://static.wixstatic.com/media/502b14_28332020eeb5428a8ca85edaaec7194a~mv2.png/v1/fit/w_1440,h_810,q_90/502b14_28332020eeb5428a8ca85edaaec7194a~mv2.png",
    ],
  },
  {
    title: "Glimpses of ICMDIA-25",
    date: "Dec 14, 2025",
    viewMoreLink: "https://www.eminsphere.com/icmdia-25",
    layout: "pair",
    images: [
      "https://static.wixstatic.com/media/30814e_ecea041355d84679ab1367bd82fa0ed5~mv2.jpeg/v1/fit/w_960,h_511,q_90/30814e_ecea041355d84679ab1367bd82fa0ed5~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_67e286d210b64a398b3806961cca6c6a~mv2.jpeg/v1/fit/w_960,h_473,q_90/30814e_67e286d210b64a398b3806961cca6c6a~mv2.jpeg",
    ],
  },
  {
    title: "Glimpses of ICETSGC-25",
    date: "Nov 16, 2025",
    viewMoreLink: "https://www.eminsphere.com/icetsgc-25",
    layout: "pair",
    images: [
      "https://static.wixstatic.com/media/30814e_f60549ac90534778a5183cc470411dfd~mv2.jpeg/v1/fit/w_960,h_510,q_90/30814e_f60549ac90534778a5183cc470411dfd~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_ea118ea29d6e4d09a3ff77e169672cac~mv2.jpeg/v1/fit/w_960,h_514,q_90/30814e_ea118ea29d6e4d09a3ff77e169672cac~mv2.jpeg",
    ],
  },
  {
    title: "Glimpses of ICCINET-25",
    date: "October 25, 2025",
    viewMoreLink: "https://www.eminsphere.com/iccinet-25",
    layout: "pair",
    images: [
      "https://static.wixstatic.com/media/30814e_db76cb11be6e4658921b1416c4f002d1~mv2.jpg/v1/fit/w_960,h_511,q_90/30814e_db76cb11be6e4658921b1416c4f002d1~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_77308176719a49509143aca1d24d00c7~mv2.jpg/v1/fit/w_960,h_509,q_90/30814e_77308176719a49509143aca1d24d00c7~mv2.jpg",
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

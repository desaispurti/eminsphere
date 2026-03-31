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
    title: "Glimpses of ICEEE-26",
    date: "10 April 2026",
    layout: "scroll",
    images: [
      "https://static.wixstatic.com/media/11062b_3e51224f3ee74964a141005767e8feb9~mv2.jpg/v1/fill/w_39,h_26,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_3e51224f3ee74964a141005767e8feb9~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_bd981344bf6d457cb5c1b3ad18e8b2a2~mv2.jpg/v1/fit/w_1366,h_670,q_90,enc_avif,quality_auto/30814e_bd981344bf6d457cb5c1b3ad18e8b2a2~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_df6ff84afa124774ae195216cf2b486d~mv2.jpg/v1/fit/w_1366,h_670,q_90,enc_avif,quality_auto/30814e_df6ff84afa124774ae195216cf2b486d~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_3afec8264edf435194c767f0bad090d9~mv2.jpg/v1/fit/w_1366,h_672,q_90,enc_avif,quality_auto/30814e_3afec8264edf435194c767f0bad090d9~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_c870b9a9cd7842379e9f5e9671c5d9a1~mv2.jpg/v1/fit/w_1366,h_674,q_90,enc_avif,quality_auto/30814e_c870b9a9cd7842379e9f5e9671c5d9a1~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_31285efa8b944137a276e7bd208a8eb3~mv2.jpg/v1/fit/w_1366,h_670,q_90,enc_avif,quality_auto/30814e_31285efa8b944137a276e7bd208a8eb3~mv2.jpg"
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
      "https://static.wixstatic.com/media/502b14_4314189cd9e44cd680613f130b26535f~mv2.png"
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
      "https://static.wixstatic.com/media/502b14_c5b24e50b1a04652a81e622dfbc4101f~mv2.png"
    ],
  },
  {
    title: "Glimpses of ICSET-26",
    date: "20 January 2026",
    layout: "scroll",
    images: [
      "https://static.wixstatic.com/media/502b14_76a9176ff6c4452c9a7207567ccb7834~mv2.jpeg/v1/fit/w_1366,h_768,q_90,enc_avif,quality_auto/502b14_76a9176ff6c4452c9a7207567ccb7834~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_ae7cdcf8e2f54ce1885d30b49430b77d~mv2.jpeg/v1/fit/w_1366,h_768,q_90,enc_avif,quality_auto/502b14_ae7cdcf8e2f54ce1885d30b49430b77d~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_329f2a5f116047dd9cd78a3470d1cc09~mv2.jpeg/v1/fit/w_1366,h_768,q_90,enc_avif,quality_auto/502b14_329f2a5f116047dd9cd78a3470d1cc09~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_5a3559a66dad443499f4430147918d8f~mv2.jpeg/v1/fit/w_1366,h_768,q_90,enc_avif,quality_auto/502b14_5a3559a66dad443499f4430147918d8f~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_9fc2a6030a854ee88ede55f78347f648~mv2.jpeg/v1/fit/w_1366,h_768,q_90,enc_avif,quality_auto/502b14_9fc2a6030a854ee88ede55f78347f648~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_6928637d5b1d4474be607b49ff5bdee7~mv2.jpeg/v1/fit/w_1366,h_768,q_90,enc_avif,quality_auto/502b14_6928637d5b1d4474be607b49ff5bdee7~mv2.jpeg"
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
    title: "Glimpses of ICAIDSS-26",
    date: "Jan 12, 2026",
    layout: "pair",
    images: [
      "https://static.wixstatic.com/media/502b14_03c6b197c8b54e999e2d052f9e59ef74~mv2.jpeg/v1/fit/w_1366,h_768,q_90,enc_avif,quality_auto/502b14_03c6b197c8b54e999e2d052f9e59ef74~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_daef1d429f184a9e828b78d3917c77db~mv2.jpeg/v1/fit/w_1366,h_768,q_90,enc_avif,quality_auto/502b14_daef1d429f184a9e828b78d3917c77db~mv2.jpeg",
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

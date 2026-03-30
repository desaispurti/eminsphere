import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const speakers = [
  { name: "Abdullah Al Abri", role: "VP Sustainability, Sohar Port and Free Zone", location: "Oman", image: "https://static.wixstatic.com/media/30814e_e4eab5a58c524432a47ca4e3e9afffe0~mv2.jpeg/v1/fit/w_174,h_204,q_75,enc_avif,quality_auto/30814e_e4eab5a58c524432a47ca4e3e9afffe0~mv2.jpeg" },
  { name: "Nikola Ilić", role: "Assistant Professor, University of Belgrade Faculty of Law", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_cf46fb74cc9446b287ec144125a1c54e~mv2.jpeg/v1/fit/w_169,h_245,q_75,enc_avif,quality_auto/30814e_cf46fb74cc9446b287ec144125a1c54e~mv2.jpeg" },
  { name: "Osman ARAYICI", role: "Professor, Mimar Sinan University of Fine Arts", location: "Turkey", image: "https://static.wixstatic.com/media/30814e_f0f7674fd55346bfb2eaba4b48b3d669~mv2.jpeg/v1/fit/w_225,h_275,q_75,enc_avif,quality_auto/30814e_f0f7674fd55346bfb2eaba4b48b3d669~mv2.jpeg" },
  { name: "Prof. Abdel Rahman Alzoubaidi", role: "Professor, Al Balqa Applied University", location: "Jordan", image: "https://static.wixstatic.com/media/30814e_e9b1616d369d4f1f8dc784bbb1379fc6~mv2.jpeg/v1/fit/w_221,h_299,q_75,enc_avif,quality_auto/30814e_e9b1616d369d4f1f8dc784bbb1379fc6~mv2.jpeg" },
  { name: "Anup Kagalkar", role: "Independent Researcher, Product Technical Expert", location: "United States", image: "https://static.wixstatic.com/media/30814e_38bae8e1c58e4626b639ff27e74b615f~mv2.jpeg/v1/fill/w_140,h_191,fp_1.73_0.9,q_75,enc_avif,quality_auto/30814e_38bae8e1c58e4626b639ff27e74b615f~mv2.jpeg" },
  { name: "Hina Shahbaz", role: "Principal, Progressive Model College", location: "Spain", image: "https://static.wixstatic.com/media/30814e_1d40f47c75c84e399f11834d905fdfca~mv2.jpeg/v1/fit/w_217,h_288,q_75,enc_avif,quality_auto/30814e_1d40f47c75c84e399f11834d905fdfca~mv2.jpeg" },
  { name: "Aynur Mahmudova", role: "Technical Manager, Saipem", location: "Azerbaijan", image: "https://static.wixstatic.com/media/30814e_096b8766915a49b9b4f964848f812618~mv2.jpg/v1/fit/w_145,h_165,q_75,enc_avif,quality_auto/30814e_096b8766915a49b9b4f964848f812618~mv2.jpg" },
  { name: "BERKANI Samir", role: "Professor, University of Bouerdes", location: "Algeria", image: "https://static.wixstatic.com/media/30814e_e76d7e27c8cd48b3845ce3627ec85821~mv2.jpeg/v1/fit/w_154,h_213,q_75,enc_avif,quality_auto/30814e_e76d7e27c8cd48b3845ce3627ec85821~mv2.jpeg" },
  { name: "Pearce Korb", role: "Clinical Educator, Pearce Korb and Associates", location: "United States", image: "https://static.wixstatic.com/media/30814e_2c8d6049087942e4842f1d6f434e040e~mv2.jpg/v1/fit/w_143,h_163,q_75,enc_avif,quality_auto/30814e_2c8d6049087942e4842f1d6f434e040e~mv2.jpg" },
  { name: "Mr. Satish Kabade", role: "Product Technical Expert, Independent Researcher", location: "New York, USA", image: "https://static.wixstatic.com/media/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg/v1/fill/w_480,h_480,fp_0.58_0.31,q_75,enc_avif,quality_auto/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
  { name: "Irandoust-pakchin", role: "Associate Professor, University of Tabriz", location: "Iran", image: "https://static.wixstatic.com/media/30814e_105366170c1b4be7995469e3ae42f001~mv2.jpeg/v1/fit/w_158,h_215,q_75,enc_avif,quality_auto/30814e_105366170c1b4be7995469e3ae42f001~mv2.jpeg" },
  { name: "Aleksandra Ikonov", role: "Professor, Institute for the Application of Innovative Practices", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_ba31cc42a6d34171bc4ac11bf014871e~mv2.jpeg/v1/fit/w_132,h_182,q_75,enc_avif,quality_auto/30814e_ba31cc42a6d34171bc4ac11bf014871e~mv2.jpeg" },
  { name: "Dr. Edralin Rebancos Raro", role: "Assistant Professor, Camarines Norte State College", location: "Philippines", image: "https://static.wixstatic.com/media/30814e_cf15be7087af4a078f1254ff3c08fea8~mv2.jpeg/v1/fit/w_190,h_200,q_75,enc_avif,quality_auto/30814e_cf15be7087af4a078f1254ff3c08fea8~mv2.jpeg" },
  { name: "Kadenova Zuurakan Azhimamatovna", role: "Head of Laboratory, National Academy of Sciences", location: "Kyrgyzstan", image: "https://static.wixstatic.com/media/30814e_e8b8b992c26a49cf99035616610f5216~mv2.jpeg/v1/fit/w_158,h_217,q_75,enc_avif,quality_auto/30814e_e8b8b992c26a49cf99035616610f5216~mv2.jpeg" },
  { name: "Dr. Tiansheng Yang", role: "University of South Wales", location: "United Kingdom", image: "https://static.wixstatic.com/media/30814e_ab0670f34d354ffabafcaa2849d78701~mv2.jpg/v1/fill/w_200,h_200,fp_1.53_0.72,q_75,enc_avif,quality_auto/30814e_ab0670f34d354ffabafcaa2849d78701~mv2.jpg" },
  { name: "Jim Saliba", role: "Principal Consultant, James Saliba Inc", location: "San Jose, California", image: "https://static.wixstatic.com/media/30814e_45d1f903e57d425cb88addf2bdbec7be~mv2.jpeg/v1/fill/w_200,h_200,fp_1.68_1.51,q_75,enc_avif,quality_auto/30814e_45d1f903e57d425cb88addf2bdbec7be~mv2.jpeg" },
  { name: "Nomi Khedawala", role: "Sr. Technical Program Manager, Reddit", location: "San Francisco, California", image: "https://static.wixstatic.com/media/30814e_4dddbaf5110540e7b8c0d5ed7826a8e5~mv2.jpeg/v1/fill/w_200,h_200,fp_1.52_1.15,q_75,enc_avif,quality_auto/30814e_4dddbaf5110540e7b8c0d5ed7826a8e5~mv2.jpeg" },
  { name: "Mr. Sudipkumar Ghanvat", role: "Sr. Director & Head - Data & AI, VRIO Digital", location: "United States", image: "https://static.wixstatic.com/media/30814e_72dbfb478bd540e9abbca0d3811dfe48~mv2.jpeg/v1/fit/w_480,h_480,q_75,enc_avif,quality_auto/30814e_72dbfb478bd540e9abbca0d3811dfe48~mv2.jpeg" },
  { name: "Gregg Clunis", role: "Founder, Kojo", location: "United States", image: "https://static.wixstatic.com/media/30814e_5c95cc3899d64319998d594852b99123~mv2.jpeg/v1/fill/w_480,h_480,fp_0.49_0.47,q_75,enc_avif,quality_auto/30814e_5c95cc3899d64319998d594852b99123~mv2.jpeg" },
  { name: "Mr. Bhushan Balkrishna Chaudhari", role: "Senior Technology Lead, Researcher", location: "New Jersey, USA", image: "https://static.wixstatic.com/media/30814e_80c3ba4b5ad34cc1817090e1e30c7b8e~mv2.jpeg/v1/fill/w_480,h_480,fp_0.47_0.34,q_75,enc_avif,quality_auto/30814e_80c3ba4b5ad34cc1817090e1e30c7b8e~mv2.jpeg" },
  { name: "Dr. Joe Perez", role: "Senior Systems Specialist & Team Leader, NC DHHS", location: "Raleigh, NC, USA", image: "https://static.wixstatic.com/media/30814e_2e4bd98eb15e408fa1470c541ce8e786~mv2.jpg/v1/fit/w_480,h_480,q_75,enc_avif,quality_auto/30814e_2e4bd98eb15e408fa1470c541ce8e786~mv2.jpg" },
  { name: "Dr. Ranà El Khawand", role: "Technical Expert, Saida Risk Mapping Project (UN-Habitat)", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_c0812b3e98ff416db27e799833d12e86~mv2.jpeg/v1/fill/w_480,h_480,fp_0.49_0.33,q_75,enc_avif,quality_auto/30814e_c0812b3e98ff416db27e799833d12e86~mv2.jpeg" },
  { name: "Dr. Firas Zeidan", role: "Researcher and Professor", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_d725b17d6d374b3abf1081771e55f53f~mv2.jpeg/v1/fill/w_299,h_299,fp_1.02_0.88,q_75,enc_avif,quality_auto/30814e_d725b17d6d374b3abf1081771e55f53f~mv2.jpeg" },
  { name: "Mouhssin Ait El Mouden", role: "Research Laboratory, Faculty of Letters, Ibn Tofail University", location: "Kenitra, Morocco", image: "https://static.wixstatic.com/media/30814e_5cbd6440dc0b407c8d10b4d96ab8558f~mv2.jpeg/v1/fit/w_341,h_443,q_75,enc_avif,quality_auto/30814e_5cbd6440dc0b407c8d10b4d96ab8558f~mv2.jpeg" },
];

const PastSpeakers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,30%,25%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Past Speakers
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 font-body mt-4">
            Distinguished experts who have shared their knowledge at Eminsphere conferences
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {speakers.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 10) * 0.03 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <img src={s.image} alt={s.name} className="w-28 h-28 rounded-full object-cover border-2 border-border mb-3" loading="lazy" />
                <h3 className="font-display text-sm font-bold text-foreground leading-tight">{s.name}</h3>
                <p className="text-xs text-muted-foreground font-body mt-1">{s.role}</p>
                <p className="text-xs text-accent font-body">{s.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PastSpeakers;

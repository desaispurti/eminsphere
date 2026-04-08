export interface ConferenceData {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface ProceedingData {
  id: string;
  title: string;
  date: string;
  description: string;
  downloadLink?: string;
  abstractLink?: string;
  videos?: string[];
  papers?: { title: string; authors: string; pdfLink: string; }[];
}

export const upcomingConferences: Record<string, ConferenceData> = {
  "icaist-26": {
    id: "icaist-26",
    title: "ICAIST-26",
    date: "10 April 2026",
    location: "Global Virtual / Hybrid",
    description: "International Conference on Artificial Intelligence and Smart Technologies. Join leading researchers and practitioners to explore the latest innovations in AI, machine learning, and smart systems architecture."
  },
  "icmref-26": {
    id: "icmref-26",
    title: "ICMREF-26",
    date: "25 March 2026",
    location: "Global Virtual / Hybrid",
    description: "International Conference on Multidisciplinary Research and Educational Frontiers. Eminsphere invites you to a platform bridging diverse fields of study, fostering collaborative breakthroughs."
  },
  "icaits-26": {
    id: "icaits-26",
    title: "ICAITS-26",
    date: "14 May 2026",
    location: "Global Virtual / Hybrid",
    description: "International Conference on Advanced Information Technology and Systems. Explore cutting-edge methodologies in data science, cloud computing, and IoT systems."
  },
  "icates-26": {
    id: "icates-26",
    title: "ICATES-26",
    date: "28 May 2026",
    location: "Global Virtual / Hybrid",
    description: "International Conference on Advanced Technologies and Engineering Solutions. Dedicated to accelerating the transition of theoretical research into practical engineering applications."
  }
};

export const proceedings: Record<string, ProceedingData> = {
  "copy-of-proceeding-icaeset-2026-26": {
    id: "copy-of-proceeding-icaeset-2026-26",
    title: "Proceeding ICAIDSS-2026",
    date: "2026",
    description: "Official proceedings from the International Conference on Artificial Intelligence and Data Science Solutions.",
    videos: ["kFzPzREp8jY", "bS89z9hQ63s", "dEw9B-i-T1M", "P6h5Vz6f_2M"]
  },
  "copy-of-proceeding-icnse-26": {
    id: "copy-of-proceeding-icnse-26",
    title: "Proceeding ICAESET-2026",
    date: "2026",
    description: "Full research compendium and journal abstracts from the ICAESET-2026 conference.",
    videos: ["PpccRDDsw1k", "ujuwrmFSCZQ", "TWzp3ADxfIc", "Xxs7Kpf7hT4", "u8gCmG1Qm8M", "EqtDxy590fg", "cDVmhL3SUzE", "FZRTxgOAL4Y"]
  },
  "copy-of-proceeding-ictet-26": {
    id: "copy-of-proceeding-ictet-26",
    title: "Proceeding ICNSE-26",
    date: "2026",
    description: "Published papers and author presentations from ICNSE-26 focusing on Networking and Software Engineering.",
    videos: ["WAu3ZK-aMCs", "wpLib8tqUIE", "tgQMY3oxIHQ", "YOJIRoZyHDo", "O1blIF-S36k", "wpXhq4XFfqU", "VD7L-JnF-3c", "8Q1RaaVd--M", "ziZk6ZH65jE"]
  },
  "copy-of-proceeding-icmess-26": {
    id: "copy-of-proceeding-icmess-26",
    title: "Proceeding ICTET-26",
    date: "2026",
    description: "Technology and Engineering Trends conference papers from ICTET-26.",
    videos: ["V3SIabuurjU", "ivagv4eUKMw", "qaH31wvepRs", "C8CIqoNOM64", "3bB9Tt9XgRE", "G61IgITTEL0", "49haAp1yEGI", "R2wuwgkvbTo", "-j5edNSt3RI", "g0-SUB_tCr4", "jke6pZyTvRA", "ELlIR_EJ-zQ", "RWHaBSxiD9c", "7-EBlGl7Ubk"]
  },
  "copy-of-proceeding-icasit-26": {
    id: "copy-of-proceeding-icasit-26",
    title: "Proceeding ICMESS-26",
    date: "2026",
    description: "Management, Economics, and Social Sciences conference proceeding archives.",
    videos: []
  },
  "proceeding-icasit-26": {
    id: "proceeding-icasit-26",
    title: "Proceeding ICASIT-26",
    date: "2026",
    description: "Advanced Science and Information Technology proceedings compendium.",
    videos: ["bqBRsRe8yAo", "7WN2uLBqkpw", "D8DxzPEe4Rs", "V3SIabuurjU", "_PloauKDo3I", "GIF8ljGrvBc", "8g2Aow3zMUA", "REa4QqDDuyA"]
  },
  "icmdia-25-1": {
    id: "icmdia-25-1",
    title: "Proceeding ICMDIA-25",
    date: "2025",
    description: "The International Conference on Multidisciplinary Developments in Innovation and Advancement (ICMDIA-25), held on December 14, 2025, successfully brought together researchers, academicians, and industry experts from across the globe. The conference featured insightful keynote sessions, technical presentations, and engaging discussions, highlighting emerging trends, innovative ideas, and interdisciplinary collaboration. ICMDIA-25 served as a dynamic platform for knowledge exchange and global academic networking.",
    videos: ["CEc9Jsc_kCc", "cRawYUUGvfE", "sK4t6-_YA0M", "WabTO7zXvWQ", "1lmwe5oqGxU", "-tWPmWroZmY", "KNRVvkplZtA", "cA1B82hXh8I", "jsaNkjwExeQ", "JyBorQ10xbA", "-FNVs3CNVwQ", "TFzKCm8tyns"]
  },
  "proceeding-icetsgc-25": {
    id: "proceeding-icetsgc-25",
    title: "Proceeding ICETSGC-25",
    date: "2025",
    description: "We are pleased to officially launch the Conference Proceedings of the International Conference on Emerging Technologies, Sustainability, and Global Collaboration (ICETSGC-25). This compilation brings together high-quality research papers, keynote contributions, and innovative ideas presented by scholars, academicians, and industry experts from around the world. The proceedings reflect the conference’s commitment to fostering global collaboration, advancing sustainable technological solutions, and promoting impactful research across diverse domains. We extend our sincere appreciation to all contributors, reviewers, and participants for their valuable efforts in making this publication a significant milestone in the ICETSGC series.",
    videos: ["9Mo2hFyA9Jk", "F6JSF4hOASA", "ombTUtaHuWA", "paKzapZAkC4", "5dpDefLhDDk"]
  },
  "conference-proceedings": {
    id: "conference-proceedings",
    title: "Proceeding ICCINET-25",
    date: "2025",
    description: "The International Conference on Computational Intelligence and Emerging Technologies (ICCINET-25), held on October 25, 2025, proudly announces the official launch of its conference proceedings. The proceedings comprise a collection of peer-reviewed research papers presented during the conference, highlighting the latest advancements, innovative methodologies, and emerging applications in computational intelligence, machine learning, and smart technologies. This publication reflects the collaborative efforts of researchers, academicians, and industry experts from across the globe, contributing to the growing body of knowledge in intelligent systems and emerging technologies.",
    videos: ["ALLLQmylkLo", "t_0RhQn7Esw", "RJo9N0ciMF4", "v8dKQ--66qk", "7fUH0kegnu0", "Y1lMMQOjvPo", "NFuRe39dIl4", "xROSdLVB-_A"],
    papers: [
      {
        title: "An Exploration of Game-Based Learning and Incidental Learning",
        authors: "Gaura Kumar Gupta, Shubhangi Sachin Pharande",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_61dfcc3a38164d7c8c60e54efe7e41ea.pdf?index=true"
      },
      {
        title: "Sustainable Digital Transformation: Ethics and Security in Smart Organizations",
        authors: "Dr. Mrunal Pandit, Ashwini Mohite, Dr. Tanaji Dabade",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_77cd07b51ae7481790323616b9fc8f62.pdf?index=true"
      },
      {
        title: "Artificial Intelligence and Machine Learning: Foundations, Applications, and Future Directions",
        authors: "Dr. Shaikh Abdul Waheed, Prof. Vrushali More, Prof. Indranil Mukherjee",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_84c6325a69d640eeb23d596c6957ec5e.pdf?index=true"
      },
      {
        title: "Embodied Multimodal Artificial Intelligence for Real Time Physical Interaction",
        authors: "Pallavi Shingade, Mr. Rakesh Ramakrishna Pai, Dileep Kumar Pandiya",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_0ef09a31c4264e5298e7eafe785e530e.pdf"
      },
      {
        title: "Design of Artificial Intelligence Sensors Using Physics Tools",
        authors: "Dr. Tushar Jagdale, Shital Dhaigude, Dr S A Patil",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_8f152363b8b74f61bb5722b301e4f64c.pdf"
      },
      {
        title: "Smart Healthcare Assistant: AI Powered Chatbot For Remote Medical Support and Guidance.",
        authors: "Miss.Pawar Vrushali Subhash, Dr.D.B. Hanchate, Dr.S. S.Bere",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_4bd161e7b9744d53b83e4b55c71eef94.pdf"
      },
      {
        title: "Deep Learning Approaches for Predicting Student Academic Performance in Higher Education",
        authors: "Poornima Vishal Bhumkar, Dr.Suhas Pakhare, Ramesh Kakade, Pratik Mandlik, Dr. Tanaji Dabade",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_d886379f59794c5a96cc41e4179c3ae9.pdf"
      },
      {
        title: "A Computational Performance Analysis of Artificial Intelligence Models for Classification Tasks",
        authors: "Rohit Sunil Dhende",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_c871804bb98a44d180571d2dc43ca26e.pdf"
      },
      {
        title: "Leveraging Databases to Enhance Business Intelligence (BI) and Statistical Accuracy (SA)",
        authors: "Shubhangi Sachin Pharande, Gaurav Kumar Gupta, Dr. Tanaji Dabade",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_72507c3662fc452e99948ba44970a626.pdf?index=true"
      },
      {
        title: "Artificial Intelligence in the Construction Industry and Its Role in Building a Sustainable Future",
        authors: "Dr Sambhaji Patil, Dr. Ushadevi Patil, Prof. Salunkhe Abhijit Ashok, Dr Neha Patil",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_336e9096d9294e7183d2758f3cafa5cf.pdf"
      },
      {
        title: "Advancements and Applications of Artificial Intelligence: A Data-Driven Analysis",
        authors: "Neelam Jain, Dr. Dikshendra Sarpate, Vatsala Priya Indramohan, Prof.Pranjali N. Kharate, Deepak K. Sharma",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_8384e12d3df34505a5fc99ea633d88a3.pdf"
      },
      {
        title: "EBG for wireless communication",
        authors: "Pooja Kailas Raut, Dr. mrs.Vaishali M. Dhede, Dr. Rahul M. Muljakar",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_5008d902f5634160a6b828624e2a763d.pdf"
      },
      {
        title: "Design & optimization of AI-Integrated Devices using Physics Tools: A Review",
        authors: "Miss Shital Dhaigude, Dr Tushar Jagdale",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_54694b05b76d41feb26b384ecc4bf822.pdf"
      },
      {
        title: "Harnessing AI for Competitive Advantage in Marketing Management: A Futuristic Perspective",
        authors: "Amruta Kale Jadhav, Dipali Dhumal Jadhav, Seema Jadhav Pagare, Dr. Tanaji Dabade",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_5979e9af3f5d40eab642d07ea2366032.pdf"
      },
      {
        title: "AI and the Future of Education: Disruptions, Dilemmas and Directions",
        authors: "Mouhssin AIT EL MOUDEN, Bani KOUMACHI, Ali AIT SI MHAMED, Moulay Sadik MALIKI, Lahcen AIT IDIR",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_0cab9a8e6a074fdd84161cf9c14b8888.pdf"
      },
      {
        title: "An Analytical Review of Issues and Growth Prospects of Migrated Students from Satara to Pune",
        authors: "Sandhya Vijay Sankpal, Dr. Vishal Pandurang Deshmukh",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_da52d8b1002947c887a06378a1aef80b.pdf"
      }
    ]
  }
};

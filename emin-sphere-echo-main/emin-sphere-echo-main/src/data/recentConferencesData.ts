export interface RecentConferenceData {
  id: string;
  title: string;
  subtitle: string;
  dateAndMode: string;
  description: string;
  location?: string;
  isbn?: string;
  downloadLink?: string;
  chiefGuest?: { name: string; title: string; affiliation: string; imageUrl?: string; };
  keynoteSpeakers?: { name: string; title: string; affiliation: string; imageUrl?: string; }[];
  conferenceExperts?: { name: string; title: string; affiliation: string; imageUrl?: string; }[];
  importantDates?: { label: string; date: string; }[];
  objectives?: { title: string; desc: string; }[];
  whyAttend?: { title: string; desc: string; icon?: string; }[];
  publications?: { title: string; desc: string; logoUrl?: string; }[];
  tracks?: string[];
  awards?: { title: string; desc: string; }[];
}

export const recentConferences: Record<string, RecentConferenceData> = {
  "icaist-26": {
    "id": "icaist-26",
    "title": "ICQADTS-2026",
    "subtitle": "International Conference on Quantum-AI Driven Autonomous Digital Twin Systems",
    "description": "ICQADTS-2026 is a high-impact international research forum dedicated to the advancement of next-generation intelligent computational ecosystems. It focuses on the integration of Quantum Computing, AI, Autonomous Systems Engineering, and Cyber-Physical Digital Twin infrastructures. All submissions undergo a double-blind peer-review process, offering ISBN Proceedings and recommendations for Scopus/WoS indexed journals.\n\nThe conference brings together leading researchers, academicians, industry experts, and innovators from across the globe to explore cutting-edge developments in quantum machine intelligence, autonomous digital twins, cyber-physical systems, sustainable AI, post-quantum security, and human-centric intelligent systems. ICQADTS-2026 serves as a premier platform for presenting groundbreaking research, fostering international collaboration, and driving innovation in the convergence of quantum technologies and autonomous systems.\n\nParticipants will have the opportunity to engage with keynote presentations from distinguished experts, participate in technical sessions, attend workshops, and network with peers from leading institutions and organizations worldwide. The conference emphasizes practical applications, real-world case studies, and emerging challenges in quantum-AI driven systems.",
    "dateAndMode": "12 April 2026 | Virtual Mode | Global Participation",
    "location": "Virtual Mode | Global Participation",
    "isbn": "978-81-998820-1-4",
    "chiefGuest": {
      "name": "Prof. Dr. Alexander Bull",
      "title": "Professor & Research Leader",
      "affiliation": "IU International University, Germany"
    },
    "keynoteSpeakers": [
      { "name": "Dr. Ayoub Regragui", "title": "Doctorate in Applied Linguistics", "affiliation": "Mohammed V University, Morocco", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
      { "name": "Mr. Suyash Rai", "title": "5G, Open RAN, AI Networks, Telecom Systems, Wireless Transformation Expert", "affiliation": "Texas, United States", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_73a9a72f460b41268da5f5a621c388c3~mv2.jpeg" },
      { "name": "Mr. Pravin Barapatre", "title": "Engineering Leader in AI, Robotics & Distributed Systems", "affiliation": "USA", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_b190cb540fe940dcb0c96cd2ceab143f~mv2.png" },
      { "name": "Trupti Raikar", "title": "Independent Researcher, SAP Technology Architect", "affiliation": "ERP Modernization and Cloud Transformation, Austin, TX, USA", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_ca6075e6cef84116937f732636db6914~mv2.jpeg" },
      { "name": "Hari Rowtu", "title": "Independent Researcher", "affiliation": "Founder & CEO | Innovating in Construction with AI-Driven Technologies and Robotics | Solving Critical Problems for Housing costs, California, United States", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/1693892740547" },
      { "name": "Hicham El Khodja", "title": "Researcher", "affiliation": "Hassan I University, Faculty of Languages and Arts, Settat - Kingdom of Morocco", "imageUrl": "/scraped-eminsphere/static.wixstatic.com/media/30814e_d1c8c65f9d4d4bd59632c05aa894aa71~mv2.jpeg/v1/crop/x_0,y_39,w_798,h_798/fill/w_688,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hicham%20ELKHOUAJA.jpeg" },
      { "name": "Prof. Dr. Alexander Bull", "title": "Faculty of Business Administration", "affiliation": "IU International University of Applied Sciences, Germany", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
      { "name": "Kateryna Antosz", "title": "Associate Professor", "affiliation": "Rzeszow University of Technology, Rzeszów, Podkarpackie, Poland", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_36d2bb3012e64343a18002662ca61e6b~mv2.avif" },
      { "name": "Dr. Aida Mehrad", "title": "Academic Director & Associate Professor", "affiliation": "C3S Business School", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg" },
      { "name": "Dr. Mehwish (Mishy) Rashid", "title": "DHSc", "affiliation": "Keiser University, USA", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
      { "name": "Nadine Zeinoun", "title": "Master Certified Coach", "affiliation": "President, ICF Chapter Ottawa; Facilitator, Saint Joseph University, Lebanon", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
      { "name": "Yukti Goyal", "title": "Lead Software Engineer", "affiliation": "Tampa, FL, USA", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_f4baaf1857454707a3b7c0c8e5e10963~mv2.avif" },
      { "name": "Ezinne Esther Arisa", "title": "Founder", "affiliation": "Candy Rainbow Creations, South Africa", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" }
    ],
    "conferenceExperts": [
      { "name": "Dr. Zoha Rahman", "title": "Founder & Country Director", "affiliation": "USA", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_2a893f0530e74f178c18e5939b687048~mv2.jpg" },
      { "name": "Dr. Dina A. Alkhodary", "title": "Associate Professor", "affiliation": "Jordan", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/IMG_20250709_234602_216.jpg" },
      { "name": "Dr. Firas Zeidan", "title": "Researcher & Professor", "affiliation": "Lebanon", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_571b3e70d8ff476f8b1272ef84538d8f~mv2.jpeg" },
      { "name": "Dr. Walida Ounruean", "title": "Faculty of Education", "affiliation": "Thailand", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_ac6c40d612254293a4f1f4479dfd7b61~mv2.avif" },
      { "name": "Dr. Tiansheng Yang", "title": "University of South Wales", "affiliation": "UK", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_3a6549a4d2904005a224db41ca5f9cd0~mv2.avif" },
      { "name": "Mouhsine Ait El Mouden", "title": "Researcher", "affiliation": "Morocco", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
      { "name": "Sam Lawe", "title": "Infrastructure Manager", "affiliation": "New Zealand", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/4.jpeg" },
      { "name": "Meryem Gurel", "title": "Founder", "affiliation": "Turkey", "imageUrl": "/scraped-eminsphere/static.wixstatic.com/media/30814e_6346862f510f41209c68b590a9da5215~mv2.jpeg/v1/crop/x_0,y_72,w_914,h_914/fill/w_688,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Meryem.jpeg" },
      { "name": "Dr. Ruth Abiola Adimula", "title": "Associate Professor", "affiliation": "Nigeria", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_d096ce6ec8ff4b05a2cc1c7db574278b~mv2.jpeg" },
      { "name": "Hemang Upadhyay", "title": "Independent Researcher", "affiliation": "AI, E-commerce & Analytics, USA", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_d8f3f76a4383421eb967c779a89ac17f~mv2.jpeg" },
      { "name": "Lawrence Mazaki Mashati", "title": "Community Development Professional", "affiliation": "International Missionary for Christ Kenya (IMFC), Nairobi, Kenya", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/502b14_ec9a529cdc7c4e6e852442836e4fed51~mv2.png" },
      { "name": "Dr. Yulia Kryvenko", "title": "Assistant Professor", "affiliation": "Istanbul Sabahattin Zaim University, France", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_1cc9e627ca8342d59e4122b9240e638d~mv2.png" },
      { "name": "Emem Akpabio", "title": "Invited Delegate", "affiliation": "International Conference Participant, South Africa", "imageUrl": "/assets/ICQADTS-2026%20_%20Eminsphere_files/30814e_2dad2d939abb4236bcb405093be55872~mv2.jpg" }
    ],
    "tracks": [
      "Quantum Machine Intelligence (Hybrid learning, variational circuits, quantum algorithms)",
      "Autonomous Digital Twin Systems (Self-evolving environments, industrial twins, simulation frameworks)",
      "Cyber-Physical Intelligent Systems (Embedded AI, Edge/Fog computing, real-time automation)",
      "AI for Sustainable Systems (Energy-efficient frameworks, Green data centers, sustainable computing)",
      "Secure & Post-Quantum Computing (Quantum-resistant cryptography, Blockchain trust, security protocols)",
      "Human-Centric Intelligent Systems (Explainable AI, Brain-computer interfaces, ethical AI)"
    ],
    "importantDates": [
      { "label": "Paper Submission Deadline", "date": "2 April 2026" },
      { "label": "Acceptance Notification", "date": "6 April 2026" },
      { "label": "Camera Ready & Registration", "date": "10 April 2026" },
      { "label": "Conference Date", "date": "12 April 2026" }
    ],
    "objectives": [
      { "title": "Quantum-AI Integration", "desc": "Advancing research on quantum computing combined with artificial intelligence for next-generation applications." },
      { "title": "Autonomous Systems Engineering", "desc": "Developing autonomous digital twins and cyber-physical systems for industrial and research applications." },
      { "title": "International Collaboration", "desc": "Fostering global research partnerships and knowledge exchange across institutions and industries." },
      { "title": "Sustainable Innovation", "desc": "Exploring energy-efficient and sustainable approaches to intelligent systems development." },
      { "title": "Security & Ethics", "desc": "Addressing post-quantum security challenges and ethical implications of advanced AI systems." }
    ],
    "whyAttend": [
      { "title": "Cutting-Edge Research", "desc": "Present and learn about the latest breakthroughs in quantum computing and autonomous systems.", "icon": "lightbulb" },
      { "title": "Global Networking", "desc": "Connect with leading researchers, academics, and industry professionals worldwide.", "icon": "globe" },
      { "title": "Publication Opportunities", "desc": "Get your work published in ISBN proceedings with potential Scopus and Web of Science indexing.", "icon": "bookopen" },
      { "title": "Expert Insights", "desc": "Learn from keynote speakers and workshop leaders in quantum-AI and digital twin technologies.", "icon": "users" }
    ],
    "awards": [
      { "title": "Best Paper Award", "desc": "Recognizes outstanding research contribution in quantum-AI driven systems." },
      { "title": "Best Presentation Award", "desc": "Awarded for impactful and engaging research presentations." },
      { "title": "Best Student Paper", "desc": "Encouraging young researchers with innovative ideas in emerging technologies." },
      { "title": "Innovative Research Award", "desc": "Honoring groundbreaking and creative research solutions in autonomous digital twins." }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." },
      { "title": "Quality Peer Review Process", "desc": "All submissions will undergo a double-blind peer-review process conducted by an international panel of experts." }
    ]
  },

  "icaidss-26": {
    "id": "icaidss-26",
    "title": "ICAIDSS-26",
    "subtitle": "International Conference on Artificial Intelligence, Data Science & Sustainable Systems",
    "description": "The International Conference on Artificial Intelligence, Data Science, and Sustainable Systems (ICAIDSS-26) is a globally recognized academic and professional platform dedicated to fostering innovation, collaboration, and knowledge exchange in the rapidly advancing domains of Artificial Intelligence, Data Science, and Sustainable Technologies. The conference is designed to bring together a diverse community of researchers, academicians, scientists, industry experts, and policymakers from across the globe to present their research findings, share insights, and discuss emerging challenges and opportunities shaping the future of intelligent and sustainable systems.\n\nIn today's data-driven and technology-oriented world, the integration of Artificial Intelligence and Data Science with sustainable development has become essential for addressing complex global challenges such as climate change, resource optimization, healthcare innovation, smart infrastructure, and digital transformation. ICAIDSS-26 provides a multidisciplinary platform that encourages the exploration of advanced computational techniques, intelligent systems, and sustainable engineering practices aimed at creating impactful and scalable solutions.\n\nThe conference will feature keynote addresses from distinguished international experts, technical paper presentations, and interactive discussions that highlight cutting-edge research and real-world applications. All submitted papers undergo a rigorous peer-review process to ensure high academic quality, originality, and relevance to the conference themes. Selected high-quality papers will be recommended for publication in reputed indexed journals, further enhancing the visibility and impact of the research contributions.\n\nICAIDSS-26 also emphasizes international collaboration by connecting participants from different regions, institutions, and professional backgrounds. It serves as a bridge between academia and industry, enabling knowledge transfer, networking opportunities, and future research partnerships. By participating in ICAIDSS-26, attendees will gain valuable insights into emerging technologies, current industry practices, and future research directions, making it a significant platform for both academic growth and professional development.",
    "dateAndMode": "29 March 2026 | Virtual Mode",
    "keynoteSpeakers": [
      { "name": "Dr. Walida Ounruean", "title": "International Education Innovator, Faculty of Education", "affiliation": "Uttaradit Rajabhat University, Thailand", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
      { "name": "Dr. Tiansheng Yang", "title": "Faculty Member", "affiliation": "University of South Wales, United Kingdom", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_ab0670f34d354ffabafcaa2849d78701~mv2.jpg" },
      { "name": "Marghescu Cristina-Florentina", "title": "Researcher & Academic", "affiliation": "University Politehnica of Bucharest (UPB), Romania", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_fb0f8a532d8a413abf8b61b143684fed~mv2.png" },
      { "name": "Dr. Firas Zeidan", "title": "Researcher & Professor, Higher Education & Research Academic & Scientific Leadership", "affiliation": "Lebanon", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_d725b17d6d374b3abf1081771e55f53f~mv2.jpeg" },
      { "name": "Mr. Pradeep Kachakayala", "title": "Cloud, Data Analytics, and AI Expert, Expertise in Cloud Computing, Data Analytics, and AI across Multiple Sectors", "affiliation": "USA", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_45aeebc11e0045a8bd8941721d274f1a~mv2.png" },
      { "name": "Mr. Shikhar Singhal", "title": "AI, Data, and Business Expert, Expertise in Artificial Intelligence, Data Analytics, and Business Technology Solutions", "affiliation": "New York, USA", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_00654a10251849539ec26353342c5dbf~mv2.jpg" },
      { "name": "Dr. Mohamed Rebbouj", "title": "PhD, Sport Performance, Normal Higher School Hassan II", "affiliation": "University of Casablanca, Morocco", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_1fbcfb0ce35f425eabb9dd005a658e05~mv2.jpeg" },
      { "name": "Manoj Bahirgonde", "title": "Sr. Product Manager, Product Strategy, Data Transformation and Technology Product Leadership", "affiliation": "Atlanta, Georgia, USA", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_0f9939591f474b57b412a1f5f02a3efe~mv2.jpeg" },
      { "name": "Dr. Ayoub Regragui", "title": "Applied Linguistics Researcher, Doctorate in Arabic Linguistics, International Teaching & Academic Research", "affiliation": "Morocco", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_29e2749c5b2849cab290759fb9dde0dc~mv2.png" },
      { "name": "Dr. Elizabeth Sarah George", "title": "Assistant Professor", "affiliation": "RV University, India", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_821d66fc49f64b71a44eb747ef514580~mv2.jpeg" },
      { "name": "Mouhssin Ait El Mouden", "title": "Researcher", "affiliation": "Faculty of Letters, Ibn Tofail University, Morocco", "imageUrl": "/assets/ICAIDSS-26%20_%20Eminsphere_files/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" }
    ],
    "whyAttend": [
      { "title": "International Paper Presentations", "desc": "Showcasing innovative research contributions across AI, data science, and sustainability domains.", "icon": "filetext" },
      { "title": "Expert Talks", "desc": "Keynote sessions from global experts sharing insights into emerging technologies.", "icon": "users" },
      { "title": "Global Participation", "desc": "Participants from multiple countries ensuring diverse perspectives and collaboration.", "icon": "globe" },
      { "title": "Interdisciplinary Discussions", "desc": "Encouraging collaboration across AI, sustainability, and data-driven innovations.", "icon": "lightbulb" }
    ],
    "tracks": [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Big Data Analytics",
      "Sustainable Computing",
      "Smart Cities & IoT",
      "Cybersecurity & Blockchain",
      "Green Energy Systems"
    ],
    "awards": [
      { "title": "Best Paper Award", "desc": "Recognizes outstanding research contribution and originality." },
      { "title": "Best Presentation Award", "desc": "Awarded for impactful and engaging research presentations." },
      { "title": "Best Student Paper", "desc": "Encouraging young researchers with innovative ideas." },
      { "title": "Innovative Research Award", "desc": "Honoring groundbreaking and creative research solutions." }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "icaeset-2026": {
    "id": "icaeset-2026",
    "title": "ICAESET-2026",
    "subtitle": "International Conference on Advanced Engineering Systems, Computing and Emerging Technologies",
    "description": "A prestigious global platform bringing together researchers, engineers, scientists, and industry professionals to discuss cutting-edge innovations shaping the future of technology and engineering.",
    "dateAndMode": "15 March 2026 | Global Participation",
    "objectives": [
      { "title": "Publication & Indexing", "desc": "All accepted and presented papers of ICAESET-2026 will undergo rigorous peer review and be considered for reputed indexed publications and proceedings." },
      { "title": "Global Research Platform", "desc": "Connect with researchers and professionals from multiple countries and share innovative research ideas." },
      { "title": "High-Impact Knowledge Exchange", "desc": "Discuss advanced research developments in engineering, computing, and emerging technologies." },
      { "title": "International Networking", "desc": "Build collaborations with global academicians, scientists, and industry experts." },
      { "title": "Career & Academic Growth", "desc": "Enhance academic visibility and expand professional research opportunities." }
    ],
    "tracks": [
      "Artificial Intelligence & Machine Learning - Deep learning, intelligent algorithms, neural networks, AI applications.",
      "Data Science & Big Data Analytics - Predictive analytics, intelligent data processing, big data frameworks.",
      "Electronics & Communication Engineering - Advanced communication systems, signal processing technologies.",
      "Internet of Things & Embedded Systems - Smart devices, IoT architectures, cyber-physical systems.",
      "Robotics & Automation - Autonomous systems, intelligent robotics, industrial automation.",
      "Cybersecurity & Blockchain - Secure systems, blockchain applications, digital security solutions.",
      "Cloud & Edge Computing - Distributed computing architectures and cloud infrastructure.",
      "Smart Systems & Industry 4.0 - Smart manufacturing, digital transformation, intelligent infrastructure."
    ],
    "keynoteSpeakers": [
      { "name": "Ezinne Esther Arisa", "title": "Founder", "affiliation": "Candy Rainbow Creations, South Africa", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
      { "name": "Karl G. Sieg, M.D.", "title": "Professor of Psychiatry", "affiliation": "University of Central Florida College of Medicine, United States", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_42822b0bd0f145f2a68dd68462fe499c~mv2.jpeg" },
      { "name": "Rajendra Ugrani", "title": "Researcher and Leader", "affiliation": "AI, ML, Security, Software, California, USA", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_bc3782d50a1d430d8cc0ab38bfa0b6c5~mv2.jpeg" },
      { "name": "Katarzyna Antosz", "title": "Associate Professor", "affiliation": "Rzeszow University of Technology, Poland", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_d511f14d64114d2785f3aa065a35cbb9~mv2.jpeg" },
      { "name": "Dr. Mehwish (Mishy) Rashid", "title": "DHSc", "affiliation": "Keiser University, USA", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
      { "name": "Dr. Amit Kukker", "title": "Associate Professor", "affiliation": "Department of Computer Science and Engineering, SRM Institute of Science and Technology, Modinagar, India", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_202af98a01b44a83a30ccb73a0e07ce8~mv2.jpeg" },
      { "name": "Prajakta Talathi", "title": "Data Strategy and Performance Measurement Expert", "affiliation": "Education Finance, USA", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_bf9d3d9fb4974bc0ba217b4bb03ea14d~mv2.jpg" },
      { "name": "Nadine Zeinoun", "title": "Master Certified Coach", "affiliation": "President, ICF Chapter Ottawa; Facilitator, Saint Joseph University, Lebanon", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
      { "name": "Prof. Dr. Alexander Bull", "title": "Professor", "affiliation": "IU International University, Germany", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
      { "name": "Karan Kumar Ratra", "title": "Independent Researcher", "affiliation": "Innovative E-Commerce Systems Architect and Technology Leader in Retail Technology, USA", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_b013ae4c49494f099151f25bbffb92fe~mv2.jpeg" },
      { "name": "Dr. Yulia Kryvenko", "title": "Assistant Professor", "affiliation": "Istanbul Sabahattin Zaim University, France", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" }
    ],
    "conferenceExperts": [
      { "name": "Dr. Jitendra Pandey, FHEA", "title": "Senior Faculty Member", "affiliation": "Middle East College, Affiliated to Coventry University, Oman", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/174857.png" },
      { "name": "Emem Akpabio", "title": "Invited Delegate", "affiliation": "International Conference Participant, South Africa", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/190411.png" },
      { "name": "Andreza Malena Guedes da Costa Silva", "title": "International Research Delegate", "affiliation": "IPM, Brazil", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/201623.png" },
      { "name": "Fatimah Alneel", "title": "Academic Delegate", "affiliation": "The University of Arizona, United States", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/2278992.png" },
      { "name": "Marghescu Cristina-Florentina", "title": "Research Delegate", "affiliation": "University Politehnica of Bucharest, Romania", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/2583344.png" },
      { "name": "KHADRAN MOHAMMED A ALSAHAIMI", "title": "Conference Delegate", "affiliation": "Jamia Hamdard, Saudi Arabia", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/3135768.png" },
      { "name": "James Abdul Malik", "title": "International Delegate", "affiliation": "Academy for Cultural Diplomacy, Germany", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/921347.png" },
      { "name": "Dr. S. M. Shiyekar", "title": "Dean - Research, Development and Grants", "affiliation": "D. Y. Patil College of Engineering, Akurdi, Pune, India", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_1c5123d35814427e94f13afa05595c19~mv2.png" },
      { "name": "Dr. Prabhat Thakur", "title": "Associate Professor", "affiliation": "Alliance School of Applied Engineering, Bengaluru, Karnataka, India", "imageUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/30814e_1cc9e627ca8342d59e4122b9240e638d~mv2.png" }
    ],
    "importantDates": [
      { "label": "Abstract Submission Deadline", "date": "20 February 2026" },
      { "label": "Full Paper Submission Deadline", "date": "25 February 2026" },
      { "label": "Notification of Acceptance", "date": "05 March 2026" },
      { "label": "Final Paper Submission", "date": "10 March 2026" },
      { "label": "Registration Deadline", "date": "12 March 2026" },
      { "label": "Conference Date", "date": "15 March 2026" }
    ],
    "whyAttend": [
      { "title": "Global Research Platform", "desc": "Connect with researchers and professionals from multiple countries and share innovative research ideas.", "icon": "globe" },
      { "title": "High-Impact Knowledge Exchange", "desc": "Discuss advanced research developments in engineering, computing, and emerging technologies.", "icon": "lightbulb" },
      { "title": "International Networking", "desc": "Build collaborations with global academicians, scientists, and industry experts.", "icon": "users" },
      { "title": "Career & Academic Growth", "desc": "Enhance academic visibility and expand professional research opportunities.", "icon": "award" }
    ],
    "awards": [
      { "title": "Best Paper Award", "desc": "Awarded to the research paper that demonstrates outstanding originality, strong methodology, and significant contribution to the advancement of engineering, computing, and emerging technologies." },
      { "title": "Best Presentation Award", "desc": "Presented to the author who delivers the most engaging, technically clear, and impactful presentation during the conference technical sessions." },
      { "title": "Best Student Paper Award", "desc": "Recognizes the best research contribution presented by a student author demonstrating strong originality, research depth, and technical innovation." },
      { "title": "Innovative Research Award", "desc": "Presented to research work introducing highly innovative concepts, cutting-edge technologies, or novel engineering solutions." },
      { "title": "Young Researcher Award", "desc": "Awarded to early-career researchers or postgraduate scholars showing outstanding potential and contribution in emerging technology research." }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number. This ensures proper academic recognition, citation, and international accessibility of the research work.", "logoUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/image.png" },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals, subject to journal scope, editorial policy, and an additional peer-review process.", "logoUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/image(1).png" },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database after editorial review and quality evaluation.", "logoUrl": "/assets/ICAESET-2026%20_%20Eminsphere_files/image(2).png" },
      { "title": "Quality Peer Review Process", "desc": "All submissions will undergo a double-blind peer-review process conducted by an international panel of researchers, academicians, and industry experts to ensure high scientific quality, originality, and relevance." }
    ]
  },

  "icnse-26": {
    "id": "icnse-26",
    "title": "ICNSE-26",
    "subtitle": "International Conference on Next-Generation Science & Engineering",
    "description": "ICNSE-26 is a premier global academic platform dedicated to interdisciplinary research, innovation, and scholarly collaboration. The conference brings together researchers, academicians, industry leaders, and doctoral scholars worldwide. All papers undergo rigorous peer review to ensure academic excellence.",
    "dateAndMode": "01 March 2026 | Virtual Mode | Global Participation",
    "isbn": "978-81-998717-9-3",
    "chiefGuest": {
      "name": "Prof. (Dr.) Tanaji Dabade",
      "title": "Head of Institutions & Director",
      "affiliation": "Navsahyadri Education Society Group of Institutions, Pune, India",
      "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_85d4d1b8288f40749bae07d46b5a9683~mv2.jpeg"
    },
    "tracks": [
      "Artificial Intelligence & Data Science - Machine Learning, Deep Learning, Computer Vision, NLP",
      "Software Engineering - Cloud Computing, Distributed Systems, DevOps",
      "Cybersecurity - Cryptography, Blockchain Security, Digital Forensics",
      "Emerging Technologies - IoT, Robotics, Quantum Computing"
    ],
    "keynoteSpeakers": [
      { "name": "Dr. Yulia Kryvenko", "title": "Assistant Professor", "affiliation": "Istanbul Sabahattin Zaim University, France", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_1cc9e627ca8342d59e4122b9240e638d~mv2.png" },
      { "name": "Prof. Dr. Alexander Bull", "title": "Professor", "affiliation": "IU International University, Germany", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
      { "name": "Manuja Bandal", "title": "Researcher", "affiliation": "Software Engineer, Innovator, and STEM Mentor, USA", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_871155ce5f72470c95772f064886f06e~mv2.jpeg" },
      { "name": "Dr. Walida Ounruean", "title": "International Education Ambassador", "affiliation": "Faculty of Education, Uttaradit Rajabhat University, Thailand", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
      { "name": "Ezinne Esther Arisa", "title": "Founder", "affiliation": "Candy Rainbow Creations, South Africa", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
      { "name": "Harikrishnan Ramakrishna Pillai", "title": "Researcher", "affiliation": "AI & Distributed Systems, USA", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_73c89054e75f4b3bb9bf0c838418960f~mv2.png" },
      { "name": "Mouhssin Ait El Mouden", "title": "Researcher", "affiliation": "Faculty of Letters, Ibn Tofail University, Morocco", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
      { "name": "Ponsankar Shanmugam S", "title": "Researcher", "affiliation": "Innovation in Distributed & AI Systems, USA", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_4a4018f89ef94597bca4b870f45069b0~mv2.jpeg" },
      { "name": "Dr. Entela Shkodrani", "title": "Associate Professor, Clinic of Dermatology", "affiliation": "University Hospital Center, Tirana, Albania", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_1729c779d5bf4cbc9d0b4b2e1d51e148~mv2.jpeg" },
      { "name": "Sanjay Poddar", "title": "Sr. Exec Cloud & SASE Strategist", "affiliation": "USA", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_d78a35a5685040edb9f9ad90272fa830~mv2.jpeg" },
      { "name": "Dr. Elizabeth Sarah George", "title": "Assistant Professor", "affiliation": "RV University, India", "imageUrl": "/assets/ICNSE-26%20_%20Eminsphere_files/30814e_821d66fc49f64b71a44eb747ef514580~mv2.jpeg" }
    ],
    "conferenceExperts": [
      { "name": "Andreza Malena Guedes da Costa Silva", "title": "Conference Delegate", "affiliation": "IPM, Brazil" },
      { "name": "Fatimah Alneel", "title": "Conference Delegate", "affiliation": "The University of Arizona, United States" },
      { "name": "Samsar Naouel", "title": "Conference Delegate", "affiliation": "Faculty of Medicine, Oran, Algeria" },
      { "name": "PEYELINGA NDANGIATO JOMPLIN", "title": "Conference Delegate", "affiliation": "Prive, Algerie" },
      { "name": "Marghescu Cristina-Florentina", "title": "Conference Delegate", "affiliation": "University Politehnica of Bucharest (UPB), Romania" },
      { "name": "DIAKITE SAMBA KANI", "title": "Conference Delegate", "affiliation": "Ministere de l'Environnement et du Developpement Durable, Guinee" },
      { "name": "Pauline Efeti Luma", "title": "Conference Delegate", "affiliation": "Hasselt University, Belgium" },
      { "name": "Gail Narinesingh", "title": "Conference Delegate", "affiliation": "The University of the West Indies, Trinidad" },
      { "name": "Fatemeh Doostgharin", "title": "Conference Delegate", "affiliation": "Quranic Research, Iran" },
      { "name": "Dr. S. M. Shiyekar", "title": "Session Chair - Dean, Research, Development and Grants", "affiliation": "D. Y. Patil College of Engineering, Akurdi, Pune, India" },
      { "name": "Dr. Prabhat Thakur", "title": "Session Chair - Associate Professor", "affiliation": "Alliance School of Applied Engineering, Bengaluru, Karnataka, India" }
    ],
    "importantDates": [
      { "label": "Abstract Deadline", "date": "Feb 15, 2026" },
      { "label": "Paper Deadline", "date": "Feb 20, 2026" },
      { "label": "Notification", "date": "Feb 25, 2026" },
      { "label": "Camera Ready", "date": "Feb 28, 2026" },
      { "label": "Registration", "date": "Feb 29, 2026" },
      { "label": "Conference Date", "date": "March 1, 2026" }
    ],
    "whyAttend": [
      { "title": "Faculty Members", "desc": "Academic professionals from universities and colleges.", "icon": "users" },
      { "title": "Researchers", "desc": "Independent and institutional researchers across domains.", "icon": "globe" },
      { "title": "PhD Scholars", "desc": "Doctoral scholars presenting emerging research work.", "icon": "lightbulb" },
      { "title": "Industry Professionals", "desc": "Practitioners seeking collaboration and applied insights.", "icon": "award" }
    ],
    "publications": [
      { "title": "Publication & Peer Review", "desc": "All accepted papers will be published in conference proceedings with ISBN." },
      { "title": "Submission Guidelines", "desc": "Original papers only, PDF format, English language, and 6-10 pages recommended." },
      { "title": "Paper Submission & Registration", "desc": "Submit Paper / Register Now (portal opens in new tab)." }
    ]
  },

  "ictet-26": {
    "id": "ictet-26",
    "title": "ICTET-26",
    "subtitle": "International Conference on Cutting-Edge Technologies",
    "description": "ICTET-26 is an international multidisciplinary conference aimed at bringing together researchers, academicians, industry professionals, entrepreneurs, and policy makers to share innovations, research findings, and future-ready technologies across technical and non-technical domains.",
    "dateAndMode": "15 February 2026 | Hybrid Mode (Online + Offline)",
    "isbn": "978-81-996717-5-5",
    "keynoteSpeakers": [
      { "name": "Dr. Walida Ounruean", "title": "International Education Ambassador", "affiliation": "Faculty of Education, Uttaradit Rajabhat University, Thailand", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
      { "name": "Ezinne Esther Arisa", "title": "Founder", "affiliation": "Candy Rainbow Creations, South Africa", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
      { "name": "Mrugendra Madalagi", "title": "Independent Researcher & Solution Architect", "affiliation": "Technology Solutions & Architecture, USA", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_91f0775a99254778a49bbb97171dfadb~mv2.jpeg" },
      { "name": "RC Holmes", "title": "Entrepreneur & Business Speaker", "affiliation": "CEO, Wealthy Results LLC, USA", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/502b14_25f6163bd55c4354a06f544c5e8ffa9e~mv2.png" },
      { "name": "Sri Harsha Anand Pushkala", "title": "Director - Fraud Strategy & Analytics", "affiliation": "Atlanticus Holdings, Senior Member IEEE, USA", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_cb5e002dc53f465688ce32280a1a93f3~mv2.jpeg" },
      { "name": "Dr. Aida Mehrad", "title": "Academic Director & Associate Professor", "affiliation": "C3S Business School, Dual PhD | DBA, Spain", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg" },
      { "name": "Dr. Mehwish (Mishy) Rashid", "title": "DHSc", "affiliation": "Keiser University, USA", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
      { "name": "Nadine Zeinoun", "title": "Master Certified Coach", "affiliation": "President, ICF Chapter Ottawa, Facilitator, Saint Joseph University, Lebanon", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
      { "name": "Prathap Raghavan", "title": "Director - Product Management", "affiliation": "Santander, GenAI & Automation, USA", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_5167abbef7fa4549b18fcf6bdf6bbdbd~mv2.png" },
      { "name": "Sudeep Annappa Shanubhog", "title": "Independent Researcher", "affiliation": "Affiliate: Tential Inc., North Carolina, USA", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_d49cf5c47ba64a629f0bb3c0618967e6~mv2.jpeg" },
      { "name": "Utkarsh Sharma", "title": "Independent Researcher & AI-FinTech Leader", "affiliation": "Artificial Intelligence - FinTech Innovation, USA", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_150514da48cb41598e25829a5c686936~mv2.jpeg" },
      { "name": "Shyam Kumar Gajula", "title": "Endpoint & Identity Security Engineer", "affiliation": "Cybersecurity Researcher, United States", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_c5f4a33e93c34938bf4f267806ac057c~mv2.jpg" },
      { "name": "Yesha Patel", "title": "Senior Solution Architect", "affiliation": "United States", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_8bd1ad53a6504ac999bc2116cebfe346~mv2.jpg" }
    ],
    "conferenceExperts": [
      { "name": "Dr. S. M. Shiyekar", "title": "Dean - Research, Development and Grants", "affiliation": "D. Y. Patil College of Engineering, Akurdi, Pune, India", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_e367411df1ea4aaab1c8c9c5e72ecb9e~mv2.jpeg" },
      { "name": "Dr. Prabhat Thakur", "title": "Associate Professor", "affiliation": "Alliance School of Applied Engineering, Bengaluru, Karnataka, India", "imageUrl": "/assets/ICTET-26%20_%20Eminsphere_files/30814e_1f4ecdf8200e4fa688c5125e8d537663~mv2.webp" }
    ],
    "tracks": [
      "AI & Machine Learning - Generative AI, NLP, Deep Learning",
      "Data Science - Big Data, Analytics, Forecasting",
      "IoT & Smart Systems - Industry 4.0, CPS",
      "Communication Systems - 5G/6G, Networks",
      "Management & Humanities - Innovation, Sustainability",
      "Interdisciplinary Research - Healthcare, Education, Finance"
    ],
    "importantDates": [
      { "label": "Paper Submission", "date": "15 January 2026" },
      { "label": "Acceptance Notification", "date": "25 January 2026" },
      { "label": "Conference Date", "date": "15 February 2026" }
    ],
    "whyAttend": [
      { "title": "Global Research Platform", "desc": "Connect with researchers and professionals from multiple countries and share innovative research ideas.", "icon": "globe" },
      { "title": "Publication Opportunities", "desc": "Get your research published in ISBN proceedings with potential Scopus and Web of Science indexing.", "icon": "bookopen" },
      { "title": "Expert Networking", "desc": "Network with keynote speakers, session chairs, and researchers from top global institutions.", "icon": "users" },
      { "title": "Quality Peer Review", "desc": "All submissions undergo a double-blind peer-review process by an international panel of experts.", "icon": "award" }
    ],
    "publications": [
      { "title": "Publication & Indexing", "desc": "All accepted and presented papers will be published in the ISBN-approved Conference Proceedings." },
      { "title": "Scopus / WoS / UGC-CARE", "desc": "Selected papers will be recommended for Scopus / WoS / UGC-CARE indexed journals, subject to journal review process." },
      { "title": "Paper Submission", "desc": "Submit original and unpublished research papers. Submit Paper Now." }
    ]
  },

  "icmess-26": {
    "id": "icmess-26",
    "title": "ICMESS-26",
    "subtitle": "International Conference on Management, Economics, and Social Sciences",
    "description": "ICMESS-26 brings together global scholars, researchers, and professionals to share insights on emerging challenges and solutions in management, economics, and social sciences. The conference emphasizes sustainable development, digital innovation, and interdisciplinary collaboration for a connected world.",
    "dateAndMode": "Kuala Lumpur, Malaysia | February 8, 2026 | Hybrid Mode",
    "location": "Kuala Lumpur, Malaysia",
    "isbn": "978-81-996310-7-6",
    "objectives": [
      { "title": "Business & Management", "desc": "Corporate leadership, innovation strategies, and digital business ecosystems." },
      { "title": "Economics & Finance", "desc": "Global trade, sustainable growth, and intelligent financial systems." },
      { "title": "Social Innovation", "desc": "Public policy, development studies, and societal transformation." }
    ],
    "tracks": [
      "Business & Management",
      "Economics & Finance",
      "Social Innovation"
    ],
    "keynoteSpeakers": [
      { "name": "Dr. Nadia Adnan", "title": "Assistant Professor & Research Scientist", "affiliation": "Prince Mohammad Bin Fahd University, Saudi Arabia", "imageUrl": "/assets/ICMESS-26%20_%20Eminsphere_files/30814e_68479290bb114146b46b56f021a75155~mv2.png" },
      { "name": "Dr. Rana El Khawand", "title": "Technical Expert", "affiliation": "Saida Risk Mapping Project, UN-Habitat", "imageUrl": "/assets/ICMESS-26%20_%20Eminsphere_files/502b14_e3b96c6fde384f0ba16dd14be8710af3~mv2.png" },
      { "name": "Vijayachandar Sanikal", "title": "IEEE Senior Member & Independent Researcher", "affiliation": "AI-Driven Automotive Digital Twin & Simulation, USA", "imageUrl": "/assets/ICMESS-26%20_%20Eminsphere_files/502b14_0269601f3e7b4a9ba877aec373e7f5ee~mv2.png" },
      { "name": "Bhavya Mehta", "title": "Independent Researcher", "affiliation": "Network Security and Cloud Networking, USA", "imageUrl": "/assets/ICMESS-26%20_%20Eminsphere_files/502b14_89220e1abdb549c79f1981b88df127d0~mv2.png" },
      { "name": "Lawrence Mazaki Mashati", "title": "Community Development Professional", "affiliation": "International Missionary for Christ, Nairobi, Kenya", "imageUrl": "/assets/ICMESS-26%20_%20Eminsphere_files/502b14_ec9a529cdc7c4e6e852442836e4fed51~mv2.png" },
      { "name": "Dr. Jitendra Pandey, FHEA", "title": "Senior Faculty Member", "affiliation": "Middle East College (Affiliated to Coventry University), Oman", "imageUrl": "/assets/ICMESS-26%20_%20Eminsphere_files/30814e_bf66c69035bc4e41bc50c2345187c6f2~mv2.jpeg" },
      { "name": "Mr. Satyabrata Pradhan", "title": "Automotive Engineer & Program Leader", "affiliation": "IEEE Senior Member, USA", "imageUrl": "/assets/ICMESS-26%20_%20Eminsphere_files/502b14_603e64a9735f4b8d844465896d5fba01~mv2.png" },
      { "name": "Dr. Thillainayagam Sankaravel", "title": "President", "affiliation": "MedArb International, India", "imageUrl": "/assets/ICMESS-26%20_%20Eminsphere_files/502b14_798238cd07c2464b8935f17ff4bc40be~mv2.png" },
      { "name": "Dr. Walida Ounruean", "title": "International Education Ambassador", "affiliation": "Faculty of Education, Uttaradit Rajabhat University, Thailand", "imageUrl": "/assets/ICMESS-26%20_%20Eminsphere_files/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" }
    ],
    "importantDates": [
      { "label": "Abstract Submission", "date": "January 5, 2026" },
      { "label": "Full Paper Submission", "date": "January 15, 2026" },
      { "label": "Acceptance Notification", "date": "January 25, 2026" },
      { "label": "Final Registration", "date": "January 30, 2026" },
      { "label": "Conference Date", "date": "February 8, 2026" }
    ],
    "whyAttend": [
      { "title": "Global Scholar Network", "desc": "Engage with international researchers and professionals across management and social sciences.", "icon": "globe" },
      { "title": "Practical Insights", "desc": "Discover applied strategies for digital transformation, governance, and sustainable growth.", "icon": "lightbulb" },
      { "title": "Interdisciplinary Collaboration", "desc": "Build connections across business, economics, policy, and social innovation.", "icon": "users" },
      { "title": "Publication Pathways", "desc": "Present peer-reviewed work in ISBN proceedings with extended indexing opportunities.", "icon": "bookopen" }
    ],
    "publications": [
      { "title": "Join ICMESS-26 in Kuala Lumpur, Malaysia", "desc": "Participate in meaningful discussions that drive the evolution of management, economics, and social sciences in the digital age." },
      { "title": "Global Collaboration", "desc": "Connect with thought leaders and innovators through keynote sessions and technical tracks." },
      { "title": "ISBN Proceedings", "desc": "Selected papers will be included in the official conference proceedings under the conference ISBN." }
    ]
  },

  "icasit-26": {
    "id": "icasit-26",
    "title": "ICASIT-26",
    "subtitle": "International Conference on Applied Sciences, Innovation, and Technology",
    "description": "ICASIT-26 is a premier international platform bringing together researchers, academicians, and industry experts to exchange ideas in applied sciences, innovation, sustainability, and emerging technologies.",
    "dateAndMode": "Zurich, Switzerland | 25 January 2026 | Hybrid Mode",
    "location": "Zurich, Switzerland",
    "isbn": "978-81-998310-3-8",
    "keynoteSpeakers": [
      { "name": "Mr. Saptarshi Debnath", "title": "Independent Researcher", "affiliation": "Scalable Systems & Cloud Architecture, USA", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_1b4918e0fd854271a429a912bcb71060~mv2.jpeg" },
      { "name": "Dr. Ruth Abiola Adimula", "title": "Associate Professor", "affiliation": "University of Ilorin, Nigeria", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_164d8ef597e74e1a89f4e800e7c38a3f~mv2.jpeg" },
      { "name": "Mr. Rajaguru Ganesan", "title": "Independent Researcher", "affiliation": "System Modernization, Cloud & Microservices, USA", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_7e8d8afea4824824b0a36dc883235730~mv2.jpeg" },
      { "name": "Dr. Ratna Raja Kumar Jambi", "title": "Principal", "affiliation": "G S Moze College of Engineering, India", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_68b76caedcdf48b6988367c0c06ab3c8~mv2.jpeg" },
      { "name": "Dr. Walida Ounruean", "title": "International Education Ambassador", "affiliation": "Faculty of Education, Uttaradit Rajabhat University, Thailand", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
      { "name": "Mr. Satish Kabade", "title": "Product Technical Expert", "affiliation": "Independent Researcher, New York, USA", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
      { "name": "Dr. Sadia Nazneen Karobi", "title": "Assistant Professor", "affiliation": "Dept. of Environmental Science and Management, School of Environment and Life Sciences", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_d7b9cf9312084baa9e85220ae3d0f383~mv2.png" },
      { "name": "Mr. Amber Rastogi", "title": "Independent Researcher", "affiliation": "Distributed Systems & Cloud Computing, USA", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_e16da5320136479198a3e09ce0193ff2~mv2.jpeg" },
      { "name": "Dr. Tiansheng Yang", "title": "Faculty Member", "affiliation": "University of South Wales, United Kingdom", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_ab0670f34d354ffabafcaa2849d78701~mv2.jpg" },
      { "name": "Karthikeyan Srinivasan", "title": "Independent Researcher", "affiliation": "Software Engineering, System Architecture & Cloud-Native Solutions, USA", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_57facf9d3e004a5794bee03a1ce9feb6~mv2.jpeg" },
      { "name": "Dr. Prashant Patil", "title": "Dean Academic", "affiliation": "NGI's College of Engineering, Pune, India", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_c250e513d1c9430aac76d8bdd850e13e~mv2.jpg" },
      { "name": "Hemang Upadhyay", "title": "Independent Researcher", "affiliation": "AI, E-commerce & Analytics, USA", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_d8f3f76a4383421eb967c779a89ac17f~mv2.jpeg" }
    ],
    "conferenceExperts": [
      { "name": "Katarzyna Antosz", "title": "Associate Professor", "affiliation": "Rzeszow University of Technology, Rzeszow, Podkarpackie, Poland", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_d511f14d64114d2785f3aa065a35cbb9~mv2.jpeg" },
      { "name": "Mouhssin Ait El Mouden", "title": "Researcher", "affiliation": "Research Laboratory, Faculty of Letters, Ibn Tofail University, Kenitra, Morocco", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_5cbd6440dc0b407c8d10b4d96ab8558f~mv2.jpeg" },
      { "name": "Dr. Firas Zeidan", "title": "Researcher & Professor", "affiliation": "Higher Education & Research, Lebanon", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_d725b17d6d374b3abf1081771e55f53f~mv2.jpeg" },
      { "name": "Dr. Reshma Sujal Sonar", "title": "Assistant Professor", "affiliation": "Department of Computer Engineering & Technology, MIT World Peace University (MIT-WPU), Pune, India", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_26a2db6840c04f3398f7443694e6a48a~mv2.jpeg" },
      { "name": "Dr. Deepthi D Kulkarni", "title": "Head of Department & Assistant Professor", "affiliation": "Department of Electronics & Telecommunication (E&TC), KJEI's Trinity Academy of Engineering, Pune, India", "imageUrl": "/assets/ICASIT-26%20_%20Eminsphere_files/30814e_60eb481c5c0a4181b81e5a41555004d4~mv2.jpg" }
    ],
    "tracks": [
      "AI & Machine Learning",
      "Generative AI, NLP, Deep Learning",
      "Data Science",
      "Big Data, Analytics, Forecasting",
      "IoT & Smart Systems",
      "Industry 4.0, CPS",
      "Communication Systems",
      "5G/6G, Networks",
      "Management & Humanities",
      "Innovation, Sustainability",
      "Interdisciplinary Research",
      "Healthcare, Education, Finance"
    ],
    "importantDates": [
      { "label": "Abstract Submission", "date": "26 Dec 2025" },
      { "label": "Full Paper", "date": "05 Jan 2026" },
      { "label": "Acceptance", "date": "15 Jan 2026" },
      { "label": "Final Submission", "date": "20 Jan 2026" },
      { "label": "Conference", "date": "25 Jan 2026" }
    ],
    "whyAttend": [
      { "title": "Global Research Platform", "desc": "Connect with researchers and professionals from multiple countries and share innovative research ideas.", "icon": "globe" },
      { "title": "Publication Opportunities", "desc": "Get your research published in ISBN proceedings with potential Scopus and Web of Science indexing.", "icon": "bookopen" },
      { "title": "Expert Networking", "desc": "Network with keynote speakers, session chairs, and researchers from top global institutions.", "icon": "users" },
      { "title": "Quality Peer Review", "desc": "All submissions undergo a double-blind peer-review process by an international panel of experts.", "icon": "award" }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "icmdia-25": {
    "id": "icmdia-25",
    "title": "ICMDIA-25",
    "subtitle": "International Conference on Multidisciplinary Developments in Innovation and Advancement",
    "description": "The ICMDIA-25 unites researchers, scholars, and professionals from around the world to promote interdisciplinary innovation and sustainable advancement. This global forum fosters collaboration across engineering, technology, management, environmental sciences, social innovation, and AI-driven transformation.",
    "dateAndMode": "Helsinki, Finland | December 14, 2025 | Hybrid Mode",
    "isbn": "978-81-994624-6-5",
    "location": "Helsinki, Finland",
    "objectives": [
      { "title": "Engineering & Technology", "desc": "AI, IoT, cybersecurity, smart systems, and data engineering." },
      { "title": "Business & Management", "desc": "Digital transformation, sustainability strategies, and global trade." },
      { "title": "Environmental & Sustainable Sciences", "desc": "Climate resilience, renewable resources, and green innovation." },
      { "title": "Computing & Artificial Intelligence", "desc": "Machine learning, robotics, autonomous systems, and data ethics." },
      { "title": "Social Innovation & Humanities", "desc": "Ethics, education, digital inclusion, governance, and policy studies." }
    ],
    "tracks": [
      "Engineering & Technology",
      "Business & Management",
      "Environmental & Sustainable Sciences",
      "Computing & Artificial Intelligence",
      "Social Innovation & Humanities"
    ],
    "keynoteSpeakers": [
      { "name": "Dr. Prodhan Mahbub Ibna Seraj", "title": "Associate Professor", "affiliation": "Department of English, American International University-Bangladesh", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Pic.jpeg" },
      { "name": "Dr. Nadia Adnan", "title": "Assistant Professor & Research Scientist", "affiliation": "Prince Mohammad Bin Fahd University, Saudi Arabia", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/image.png" },
      { "name": "Dr. Muhammad Tahir Jan", "title": "Associate Professor", "affiliation": "International Islamic University Malaysia", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Tahir.jpeg" },
      { "name": "Dr. Ayoub Regragui", "title": "Doctorate in Applied Linguistics", "affiliation": "Mohammed V University, Rabat, Morocco", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Updated.jpeg" },
      { "name": "Nilesh Charankar", "title": "AI Technology Leader", "affiliation": "Independent Researcher, USA", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Mr%20nilesh.jpeg" },
      { "name": "Veeramani Sampathkumar", "title": "Fintech Technology Leader", "affiliation": "Independent Researcher, USA", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Veera.jpeg" },
      { "name": "Hicham ELKHOUAJA", "title": "Researcher", "affiliation": "Hassan I University, Settat, Morocco", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Hicham%20ELKHOUAJA.jpeg" },
      { "name": "Mr. Rakesh Ramakrishna Pai", "title": "Independent Researcher", "affiliation": "Franklin, TN, USA", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Rakesh%20pai.jpeg" },
      { "name": "Jawaher Al-Zeidi", "title": "English Language Lecturer", "affiliation": "University of Technology and Applied Sciences, Oman", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Jawaher%20Al-Zeidi.jpg" },
      { "name": "Dr. Ratna Raja Kumar Jambi", "title": "Principal", "affiliation": "Genba Sopanrao Moze College of Engineering, Balewadi, Pune", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Principal.jpeg" },
      { "name": "Yesha Patel", "title": "Senior Solution Architect", "affiliation": "United States", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Yesha%20Patel_IBM.jpg" },
      { "name": "Yukti Goyal", "title": "Lead Software Engineer", "affiliation": "Tampa, FL, USA", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/Yukti.jpg" }
    ],
    "conferenceExperts": [
      { "name": "Dr. Kailash Nath Tripathi", "title": "Session Chair", "affiliation": "Dnyan Prasad Global University, Pimpri, Pune, India", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/30814e_5ff83a19546047ceadcbd901c28e31b4~mv2.jpeg" },
      { "name": "Prof. Indranil Mukherjee", "title": "Session Chair, Head AIML", "affiliation": "NESGI, India", "imageUrl": "/assets/ICMDIA-25%20_%20Eminsphere_files/30814e_8045774ce1b0491da003faecde7c7200~mv2.jpeg" }
    ],
    "importantDates": [
      { "label": "Abstract Submission", "date": "November 10, 2025" },
      { "label": "Full Paper Submission", "date": "November 20, 2025" },
      { "label": "Acceptance Notification", "date": "November 28, 2025" },
      { "label": "Registration Deadline", "date": "December 3, 2025" },
      { "label": "Conference Date", "date": "December 14, 2025" }
    ],
    "publications": [
      { "title": "Join ICMDIA-25 and Be Part of Global Innovation", "desc": "Register now to submit your research, attend sessions, and engage with global experts." },
      { "title": "Click Here to Register", "desc": "Present your research, network with global experts, and publish in ISBN-indexed proceedings and reputed international journals." }
    ],
    "whyAttend": [
      { "title": "Global Research Platform", "desc": "Connect with researchers, scholars, and professionals from multiple countries and share innovative research ideas.", "icon": "globe" },
      { "title": "Interdisciplinary Collaboration", "desc": "Engage across engineering, technology, management, environmental sciences, social innovation, and AI-driven transformation.", "icon": "users" },
      { "title": "Publication Opportunities", "desc": "Promote high-quality research through conference proceedings and scholarly exchange.", "icon": "bookopen" },
      { "title": "Academic Excellence", "desc": "Participate in a global forum fostering innovation and sustainable advancement.", "icon": "award" }
    ]
  },

  "icetsgc-25": {
    "id": "icetsgc-25",
    "title": "ICETSGC-25",
    "subtitle": "International Conference on Emerging Technologies, Sustainability, and Global Collaboration",
    "description": "A platform that unites academia, industry, and innovators to explore technological breakthroughs, sustainable practices, and global collaboration strategies to shape a better future.",
    "dateAndMode": "Barcelona, Spain | November 16, 2025 | Hybrid Mode",
    "isbn": "978-81-994624-5-8",
    "keynoteSpeakers": [
      { "name": "Dr. Zoha Rahman", "title": "Founder and Country Director, Centre for Big Data & Machine Learning", "affiliation": "Big Data Consultant, Bloomberg, USA", "imageUrl": "/assets/ICETSGC-25%20_%20Eminsphere_files/30814e_6fe3056846724889b2741a170caad3a8~mv2.jpeg" },
      { "name": "Dr. Dina A. Alkhodary", "title": "Associate Professor, Faculty of Business", "affiliation": "Middle East University, Amman, Jordan", "imageUrl": "/assets/ICETSGC-25%20_%20Eminsphere_files/30814e_1feb45bda81f4dcdb4b55439a6f8d65a~mv2.jpg" },
      { "name": "Mr. Akshay Sharma", "title": "Technology Leader, Independent Researcher, Pension Systems Expert", "affiliation": "USA", "imageUrl": "/assets/ICETSGC-25%20_%20Eminsphere_files/30814e_3aef18109d86468da8e5fbbf55d37268~mv2.jpg" },
      { "name": "Dr. Firas Zeidan", "title": "Researcher and Professor", "affiliation": "Lebanon", "imageUrl": "/assets/ICETSGC-25%20_%20Eminsphere_files/30814e_d725b17d6d374b3abf1081771e55f53f~mv2.jpeg" },
      { "name": "Dr. Ranà El Khawand", "title": "Technical Expert, Saida Risk Mapping Project", "affiliation": "UN-Habitat", "imageUrl": "/assets/ICETSGC-25%20_%20Eminsphere_files/30814e_c0812b3e98ff416db27e799833d12e86~mv2.jpeg" },
      { "name": "Prof. Dr. Alexander Bull", "title": "Faculty of Business Administration", "affiliation": "IU International University of Applied Sciences, Germany", "imageUrl": "/assets/ICETSGC-25%20_%20Eminsphere_files/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
      { "name": "Mouhssin Ait El Mouden", "title": "Research Laboratory, Faculty of Letters", "affiliation": "Ibn Tofail University, Kenitra, Morocco", "imageUrl": "/assets/ICETSGC-25%20_%20Eminsphere_files/30814e_5cbd6440dc0b407c8d10b4d96ab8558f~mv2.jpeg" },
      { "name": "Prof. Neha Singh", "title": "Assistant Professor in E&TC", "affiliation": "PEG's ISB&M College of Engineering, Pune", "imageUrl": "/assets/ICETSGC-25%20_%20Eminsphere_files/30814e_f258ef8fd1a74b9b9c778f12bcdc9128~mv2.jpeg" },
      { "name": "Prof. Shweta N. Banait", "title": "Assistant Professor, Dept. of AI & Data Science", "affiliation": "D. Y. Patil College of Engineering, Pune, India", "imageUrl": "/assets/ICETSGC-25%20_%20Eminsphere_files/30814e_110f0c5464f34aea993c7055dac271b2~mv2.jpeg" }
    ],
    "whyAttend": [
      { "title": "Global Research Platform", "desc": "Connect with researchers and professionals from multiple countries and share innovative research ideas.", "icon": "globe" },
      { "title": "Publication Opportunities", "desc": "Get your research published in ISBN proceedings with potential Scopus and Web of Science indexing.", "icon": "bookopen" },
      { "title": "Expert Networking", "desc": "Network with keynote speakers, session chairs, and researchers from top global institutions.", "icon": "users" },
      { "title": "Quality Peer Review", "desc": "All submissions undergo a double-blind peer-review process by an international panel of experts.", "icon": "award" }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "iccinet-25": {
    "id": "iccinet-25",
    "title": "ICCINET-25",
    "subtitle": "International Conference on Computational Intelligence and Emerging Technologies",
    "description": "ICCINET-25 is a premier global forum advancing innovation, research collaboration, and knowledge sharing in AI, computational intelligence, data science, and next-generation technologies.",
    "dateAndMode": "October 25-26, 2025 | Hybrid (in-person and virtual)",
    "location": "Malmo, Sweden",
    "isbn": "978-93-344-3140-7",
    "keynoteSpeakers": [
      { "name": "Dr. Joe Perez", "title": "Senior Systems Specialist & Team Leader", "affiliation": "NC Department of Health & Human Services, Raleigh, NC, USA", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_2e4bd98eb15e408fa1470c541ce8e786~mv2.jpg" },
      { "name": "Mr. Satish Kabade", "title": "Product Technical Expert, Independent Researcher", "affiliation": "New York, USA", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
      { "name": "Gregg Clunis", "title": "Founder, Kojo", "affiliation": "United States", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_5c95cc3899d64319998d594852b99123~mv2.jpeg" },
      { "name": "Nomi Khedawala", "title": "Sr. Technical Program Manager, Reddit", "affiliation": "San Francisco, California", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_4dddbaf5110540e7b8c0d5ed7826a8e5~mv2.jpeg" },
      { "name": "Mr. Bhushan Balkrishna Chaudhari", "title": "Senior Technology Lead, Researcher", "affiliation": "New Jersey, USA", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_80c3ba4b5ad34cc1817090e1e30c7b8e~mv2.jpeg" },
      { "name": "Jim Saliba", "title": "Principal Consultant, James Saliba Inc", "affiliation": "San Jose, California", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_45d1f903e57d425cb88addf2bdbec7be~mv2.jpeg" },
      { "name": "Dr. Walida Ounruean", "title": "Curriculum and Instruction, Faculty of Education", "affiliation": "Uttaradit Rajabhat University, Thailand", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
      { "name": "Dr. Tiansheng Yang", "title": "Faculty Member", "affiliation": "University of South Wales, United Kingdom", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_ab0670f34d354ffabafcaa2849d78701~mv2.jpg" },
      { "name": "Mr. Sudipkumar Ghanvat", "title": "Sr. Director & Head - Data & AI", "affiliation": "VRIO Digital, United States", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_72dbfb478bd540e9abbca0d3811dfe48~mv2.jpeg" },
      { "name": "Anup Kagalkar", "title": "Independent Researcher, Product Technical Expert", "affiliation": "United States", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_38bae8e1c58e4626b639ff27e74b615f~mv2.jpeg" }
    ],
    "conferenceExperts": [
      { "name": "Prof. Indranil Mukherjee", "title": "Head, AIML", "affiliation": "NESGI, India", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_8045774ce1b0491da003faecde7c7200~mv2.jpeg" },
      { "name": "Mr. Sam Lawe", "title": "Infrastructure Manager, APAC", "affiliation": "Navico Group, Auckland", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_485133b243e34681b345c2286ad708b2~mv2.jpeg" },
      { "name": "Mrs. Meryem Gurel", "title": "Founder, Point Energy Intelligence Services", "affiliation": "Istanbul, Turkey", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_6346862f510f41209c68b590a9da5215~mv2.jpeg" },
      { "name": "Katarzyna Antosz", "title": "Associate Professor", "affiliation": "Rzeszow University of Technology, Poland", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_d511f14d64114d2785f3aa065a35cbb9~mv2.jpeg" },
      { "name": "Dr. Nilesh Vitthal Limbore", "title": "Associate Professor & HOD BBA", "affiliation": "Navsahayadri Group of Institutions, India", "imageUrl": "/assets/ICCINET-25%20_%20Eminsphere_files/30814e_a4b6a0348dd3456e9360bd662904b62b~mv2.jpeg" }
    ],
    "awards": [
      { "title": "Best Paper Award", "desc": "Recognizes outstanding contributions in research and innovation." },
      { "title": "Best Presentation Award", "desc": "Celebrates excellent communication and impactful research delivery." },
      { "title": "Outstanding Innovation Award", "desc": "Honors creative and high-impact innovations in emerging technologies." }
    ],
    "objectives": [
      { "title": "Global Research Collaboration", "desc": "Strengthening international partnerships in AI and emerging technologies" },
      { "title": "Showcasing Innovation", "desc": "Latest breakthroughs in AI, ML, IoT, robotics, and sustainable technologies" },
      { "title": "Exploring Future Trends", "desc": "Next-generation computing, automation, and intelligent systems" },
      { "title": "Industry-Academia Synergy", "desc": "Bridging research and industrial applications" },
      { "title": "Policy & Ethics", "desc": "AI governance, data privacy, and technology-driven policies" }
    ],
    "importantDates": [
      { "label": "Final Paper Submission & Registration", "date": "October 10, 2025" },
      { "label": "Conference Dates", "date": "October 25-26, 2025" }
    ],
    "whyAttend": [
      { "title": "Global Participation", "desc": "Present research and collaborate with scholars from around the world.", "icon": "globe" },
      { "title": "Knowledge Exchange", "desc": "Learn from keynote speakers and domain experts in computational intelligence.", "icon": "users" },
      { "title": "Publication Opportunities", "desc": "Publish accepted work in ISBN-indexed proceedings and recommended journals.", "icon": "bookopen" },
      { "title": "Research Excellence", "desc": "Gain recognition through peer-reviewed quality and conference awards.", "icon": "award" }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "icamet25": {
    "id": "icamet25",
    "title": "ICAMET 2025",
    "subtitle": "International Conference on AI, Management, Engineering, and Technology",
    "description": "Genba Sopanrao Moze College of Engineering is a premier engineering institution in Pune, Maharashtra, India. Established in 1999, the college offers seven undergraduate and two postgraduate programs, and is dedicated to high-quality technical education, innovative research, and professional development.\n\nICAMET 2025 provides a platform for academia, industry, and research organizations to present advancements and research outcomes across engineering, AI, data analytics, management, and environmental sustainability.",
    "dateAndMode": "24-25 April 2025 | Hybrid Mode",
    "location": "Genba Sopanrao Moze College of Engineering, Balewadi, Pune, India",
    "isbn": "978-93-342-5206-4",
    "chiefGuest": {
      "name": "Hon. Shri. Rambhau Moze",
      "title": "Chief Patron, President, Former MLA",
      "affiliation": "Maharashtra, India"
    },
    "keynoteSpeakers": [
      { "name": "Dr. Ratnaraja Kumar Jambi", "title": "Conference Convener", "affiliation": "Principal, G. S. Moze College of Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_08cd4957e7c24c5593fb00d3cb522d13~mv2.jpg" },
      { "name": "Prof. Deepak K. Sharma", "title": "Conference Co-Convener", "affiliation": "Head of AI&DS and IQAC, G. S. Moze College of Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_2784fc706fb341c38099bb57b0967cb0~mv2.jpg" },
      { "name": "Dr. Ushadevi Patil", "title": "Conference Co-Convener", "affiliation": "Dean of Research and Development, G. S. Moze College of Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_f3fd7d1c0ecd45c196c0c57c97edba07~mv2.jpg" }
    ],
    "conferenceExperts": [
      { "name": "Prof. Sai Sudha", "title": "H.O.D", "affiliation": "Computer Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_af3362f5932045c7ad2cb4bba61279b1~mv2.jpg" },
      { "name": "Prof. Sana Shaikh", "title": "H.O.D", "affiliation": "Information Technology", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_bb389359ae8c4385886650907f3422f3~mv2.jpg" },
      { "name": "Prof. Deepak K. Sharma", "title": "H.O.D", "affiliation": "AI & DS", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_533febda40974a9ab0ee0c71b43481ba~mv2.jpg" },
      { "name": "Prof. Pallavi Patil", "title": "H.O.D", "affiliation": "AI & ML", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_74416773f2f64d1cab82cd0ad8edb6b7~mv2.jpg" },
      { "name": "Prof. Sushma Rathawardhan", "title": "H.O.D", "affiliation": "E&TC", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_145151a8ba384dc59e96d829f4ccb9ccf000.jpg" },
      { "name": "Prof. Seema Sheilykar", "title": "H.O.D", "affiliation": "Civil Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_7410938484bc40e9a11c6254db663a5a~mv2.jpg" },
      { "name": "Dr. Santosh Sandanshiv", "title": "H.O.D", "affiliation": "Mechanical Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/174857.png" },
      { "name": "Prof. Dhananjay Alagavadi", "title": "H.O.D", "affiliation": "First Year Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/190411.png" },
      { "name": "Prof. Deepak Kulkarni", "title": "H.O.D", "affiliation": "MBA", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/201623.png" },
      { "name": "Prof. Mukta Deshpande", "title": "H.O.D", "affiliation": "MCA", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/2278992.png" }
    ],
    "importantDates": [
      { "label": "Conference Dates", "date": "24-25 April 2025" },
      { "label": "Venue", "date": "G. S. Moze College of Engineering, Balewadi, Pune" }
    ],
    "tracks": [
      "Artificial Intelligence",
      "Data Analytics",
      "Engineering and Applied Technologies",
      "Management and Innovation",
      "Environmental Sustainability"
    ],
    "whyAttend": [
      { "title": "High-Quality Research Publications", "desc": "Accepted papers will be published in reputed international journals.", "icon": "bookopen" },
      { "title": "Networking Opportunities", "desc": "Interact with global leaders, researchers, and industry professionals.", "icon": "users" },
      { "title": "Workshops & Tutorials", "desc": "Learn from industry and academic experts through curated sessions.", "icon": "lightbulb" },
      { "title": "Awards & Recognition", "desc": "Best paper and presentation awards to encourage excellence in research.", "icon": "award" }
    ],
    "awards": [
      { "title": "Best Paper Award", "desc": "Recognizes outstanding originality, impact, and technical contribution." },
      { "title": "Best Presentation Award", "desc": "Awarded for exceptional clarity, depth, and delivery of research work." },
      { "title": "Departmental Recognition", "desc": "Special recognition for outstanding contributions across participating departments." }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "icamet-2025": {
    "id": "icamet25",
    "title": "ICAMET 2025",
    "subtitle": "International Conference on AI, Management, Engineering, and Technology",
    "description": "Genba Sopanrao Moze College of Engineering is a premier engineering institution in Pune, Maharashtra, India. Established in 1999, the college offers seven undergraduate and two postgraduate programs, and is dedicated to high-quality technical education, innovative research, and professional development.\n\nICAMET 2025 provides a platform for academia, industry, and research organizations to present advancements and research outcomes across engineering, AI, data analytics, management, and environmental sustainability.",
    "dateAndMode": "24-25 April 2025 | Hybrid Mode",
    "location": "Genba Sopanrao Moze College of Engineering, Balewadi, Pune, India",
    "isbn": "978-93-342-5206-4",
    "chiefGuest": {
      "name": "Hon. Shri. Rambhau Moze",
      "title": "Chief Patron, President, Former MLA",
      "affiliation": "Maharashtra, India"
    },
    "keynoteSpeakers": [
      { "name": "Dr. Ratnaraja Kumar Jambi", "title": "Conference Convener", "affiliation": "Principal, G. S. Moze College of Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_08cd4957e7c24c5593fb00d3cb522d13~mv2.jpg" },
      { "name": "Prof. Deepak K. Sharma", "title": "Conference Co-Convener", "affiliation": "Head of AI&DS and IQAC, G. S. Moze College of Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_2784fc706fb341c38099bb57b0967cb0~mv2.jpg" },
      { "name": "Dr. Ushadevi Patil", "title": "Conference Co-Convener", "affiliation": "Dean of Research and Development, G. S. Moze College of Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_f3fd7d1c0ecd45c196c0c57c97edba07~mv2.jpg" }
    ],
    "conferenceExperts": [
      { "name": "Prof. Sai Sudha", "title": "H.O.D", "affiliation": "Computer Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_af3362f5932045c7ad2cb4bba61279b1~mv2.jpg" },
      { "name": "Prof. Sana Shaikh", "title": "H.O.D", "affiliation": "Information Technology", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_bb389359ae8c4385886650907f3422f3~mv2.jpg" },
      { "name": "Prof. Deepak K. Sharma", "title": "H.O.D", "affiliation": "AI & DS", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_533febda40974a9ab0ee0c71b43481ba~mv2.jpg" },
      { "name": "Prof. Pallavi Patil", "title": "H.O.D", "affiliation": "AI & ML", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_74416773f2f64d1cab82cd0ad8edb6b7~mv2.jpg" },
      { "name": "Prof. Sushma Rathawardhan", "title": "H.O.D", "affiliation": "E&TC", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_145151a8ba384dc59e96d829f4ccb9ccf000.jpg" },
      { "name": "Prof. Seema Sheilykar", "title": "H.O.D", "affiliation": "Civil Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_7410938484bc40e9a11c6254db663a5a~mv2.jpg" },
      { "name": "Dr. Santosh Sandanshiv", "title": "H.O.D", "affiliation": "Mechanical Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/174857.png" },
      { "name": "Prof. Dhananjay Alagavadi", "title": "H.O.D", "affiliation": "First Year Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/190411.png" },
      { "name": "Prof. Deepak Kulkarni", "title": "H.O.D", "affiliation": "MBA", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/201623.png" },
      { "name": "Prof. Mukta Deshpande", "title": "H.O.D", "affiliation": "MCA", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/2278992.png" }
    ],
    "importantDates": [
      { "label": "Conference Dates", "date": "24-25 April 2025" },
      { "label": "Venue", "date": "G. S. Moze College of Engineering, Balewadi, Pune" }
    ],
    "tracks": [
      "Artificial Intelligence",
      "Data Analytics",
      "Engineering and Applied Technologies",
      "Management and Innovation",
      "Environmental Sustainability"
    ],
    "whyAttend": [
      { "title": "High-Quality Research Publications", "desc": "Accepted papers will be published in reputed international journals.", "icon": "bookopen" },
      { "title": "Networking Opportunities", "desc": "Interact with global leaders, researchers, and industry professionals.", "icon": "users" },
      { "title": "Workshops & Tutorials", "desc": "Learn from industry and academic experts through curated sessions.", "icon": "lightbulb" },
      { "title": "Awards & Recognition", "desc": "Best paper and presentation awards to encourage excellence in research.", "icon": "award" }
    ],
    "awards": [
      { "title": "Best Paper Award", "desc": "Recognizes outstanding originality, impact, and technical contribution." },
      { "title": "Best Presentation Award", "desc": "Awarded for exceptional clarity, depth, and delivery of research work." },
      { "title": "Departmental Recognition", "desc": "Special recognition for outstanding contributions across participating departments." }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "international-conference-on-ai-managemen": {
    "id": "icamet25",
    "title": "ICAMET 2025",
    "subtitle": "International Conference on AI, Management, Engineering, and Technology",
    "description": "Genba Sopanrao Moze College of Engineering is a premier engineering institution in Pune, Maharashtra, India. Established in 1999, the college offers seven undergraduate and two postgraduate programs, and is dedicated to high-quality technical education, innovative research, and professional development.\n\nICAMET 2025 provides a platform for academia, industry, and research organizations to present advancements and research outcomes across engineering, AI, data analytics, management, and environmental sustainability.",
    "dateAndMode": "24-25 April 2025 | Hybrid Mode",
    "location": "Genba Sopanrao Moze College of Engineering, Balewadi, Pune, India",
    "isbn": "978-93-342-5206-4",
    "chiefGuest": {
      "name": "Hon. Shri. Rambhau Moze",
      "title": "Chief Patron, President, Former MLA",
      "affiliation": "Maharashtra, India"
    },
    "keynoteSpeakers": [
      { "name": "Dr. Ratnaraja Kumar Jambi", "title": "Conference Convener", "affiliation": "Principal, G. S. Moze College of Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_08cd4957e7c24c5593fb00d3cb522d13~mv2.jpg" },
      { "name": "Prof. Deepak K. Sharma", "title": "Conference Co-Convener", "affiliation": "Head of AI&DS and IQAC, G. S. Moze College of Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_2784fc706fb341c38099bb57b0967cb0~mv2.jpg" },
      { "name": "Dr. Ushadevi Patil", "title": "Conference Co-Convener", "affiliation": "Dean of Research and Development, G. S. Moze College of Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_f3fd7d1c0ecd45c196c0c57c97edba07~mv2.jpg" }
    ],
    "conferenceExperts": [
      { "name": "Prof. Sai Sudha", "title": "H.O.D", "affiliation": "Computer Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_af3362f5932045c7ad2cb4bba61279b1~mv2.jpg" },
      { "name": "Prof. Sana Shaikh", "title": "H.O.D", "affiliation": "Information Technology", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_bb389359ae8c4385886650907f3422f3~mv2.jpg" },
      { "name": "Prof. Deepak K. Sharma", "title": "H.O.D", "affiliation": "AI & DS", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_533febda40974a9ab0ee0c71b43481ba~mv2.jpg" },
      { "name": "Prof. Pallavi Patil", "title": "H.O.D", "affiliation": "AI & ML", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_74416773f2f64d1cab82cd0ad8edb6b7~mv2.jpg" },
      { "name": "Prof. Sushma Rathawardhan", "title": "H.O.D", "affiliation": "E&TC", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_145151a8ba384dc59e96d829f4ccb9ccf000.jpg" },
      { "name": "Prof. Seema Sheilykar", "title": "H.O.D", "affiliation": "Civil Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/30814e_7410938484bc40e9a11c6254db663a5a~mv2.jpg" },
      { "name": "Dr. Santosh Sandanshiv", "title": "H.O.D", "affiliation": "Mechanical Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/174857.png" },
      { "name": "Prof. Dhananjay Alagavadi", "title": "H.O.D", "affiliation": "First Year Engineering", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/190411.png" },
      { "name": "Prof. Deepak Kulkarni", "title": "H.O.D", "affiliation": "MBA", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/201623.png" },
      { "name": "Prof. Mukta Deshpande", "title": "H.O.D", "affiliation": "MCA", "imageUrl": "/assets/ICAMET%202025%20_%20Eminsphere_files/2278992.png" }
    ],
    "importantDates": [
      { "label": "Conference Dates", "date": "24-25 April 2025" },
      { "label": "Venue", "date": "G. S. Moze College of Engineering, Balewadi, Pune" }
    ],
    "tracks": [
      "Artificial Intelligence",
      "Data Analytics",
      "Engineering and Applied Technologies",
      "Management and Innovation",
      "Environmental Sustainability"
    ],
    "whyAttend": [
      { "title": "High-Quality Research Publications", "desc": "Accepted papers will be published in reputed international journals.", "icon": "bookopen" },
      { "title": "Networking Opportunities", "desc": "Interact with global leaders, researchers, and industry professionals.", "icon": "users" },
      { "title": "Workshops & Tutorials", "desc": "Learn from industry and academic experts through curated sessions.", "icon": "lightbulb" },
      { "title": "Awards & Recognition", "desc": "Best paper and presentation awards to encourage excellence in research.", "icon": "award" }
    ],
    "awards": [
      { "title": "Best Paper Award", "desc": "Recognizes outstanding originality, impact, and technical contribution." },
      { "title": "Best Presentation Award", "desc": "Awarded for exceptional clarity, depth, and delivery of research work." },
      { "title": "Departmental Recognition", "desc": "Special recognition for outstanding contributions across participating departments." }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "icenta-2024": {
    "id": "icenta-2024",
    "title": "ICENTA-2024",
    "subtitle": "International Conference on Engineering Nexus & Technological Advancements 2024",
    "description": "ICENTA-2024 is a global initiative by Eminsphere to foster innovation, collaboration, and knowledge exchange in Engineering, AI, IoT, Robotics, and Sustainable Technologies. Renowned academicians, researchers, industry experts, and policymakers came together to discuss the future of engineering advancements. Theme: Bridging Innovation & Technology for a Smarter Future.",
    "dateAndMode": "December 15-16, 2024 | Virtual Mode (Global Participation)",
    "location": "Mitte, Berlin, Germany",
    "isbn": "978-93-342-5598-0",
    "downloadLink": "https://www.eminsphere.com/_files/ugd/30814e_e664e4ead9f740e287d8bc56ce6e9362.pdf",
    "objectives": [
      { "title": "Global Collaboration", "desc": "Strengthen international research collaborations and engineering innovations." },
      { "title": "Cutting-Edge Research", "desc": "Present breakthroughs in AI, IoT, Industry 4.0, and automation." },
      { "title": "Future Trends", "desc": "Explore the intersection of engineering, sustainability, and smart technology." },
      { "title": "Industrial-Academic Synergy", "desc": "Bridge the gap between academia and industry for real-world applications." },
      { "title": "Policy Discussions", "desc": "Engage policymakers to drive technology-forward policies for global benefit." }
    ],
    "importantDates": [
      { "label": "Paper Submission Deadline", "date": "December 5, 2024" },
      { "label": "Notification of Acceptance", "date": "December 10, 2024" },
      { "label": "Final Paper Submission & Registration", "date": "December 12, 2024" },
      { "label": "Conference Dates", "date": "December 15-16, 2024" }
    ],
    "tracks": [
      "Artificial Intelligence",
      "Internet of Things (IoT)",
      "Robotics",
      "Renewable Energy",
      "Cloud Computing",
      "Human-Computer Interaction"
    ],
    "whyAttend": [
      { "title": "Global Research Platform", "desc": "Connect with researchers and professionals from multiple countries and share innovative research ideas.", "icon": "globe" },
      { "title": "Publication Opportunities", "desc": "Get your research published in ISBN proceedings with potential Scopus and Web of Science indexing.", "icon": "bookopen" },
      { "title": "Expert Networking", "desc": "Network with keynote speakers, session chairs, and researchers from top global institutions.", "icon": "users" },
      { "title": "Quality Peer Review", "desc": "All submissions undergo a double-blind peer-review process by an international panel of experts.", "icon": "award" }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "about-the-conference": {
    "id": "icenta-2024",
    "title": "ICENTA-2024",
    "subtitle": "International Conference on Engineering Nexus & Technological Advancements 2024",
    "description": "ICENTA-2024 is a global initiative by Eminsphere to foster innovation, collaboration, and knowledge exchange in Engineering, AI, IoT, Robotics, and Sustainable Technologies. Renowned academicians, researchers, industry experts, and policymakers came together to discuss the future of engineering advancements. Theme: Bridging Innovation & Technology for a Smarter Future.",
    "dateAndMode": "December 15-16, 2024 | Virtual Mode (Global Participation)",
    "location": "Mitte, Berlin, Germany",
    "isbn": "978-93-342-5598-0",
    "downloadLink": "https://www.eminsphere.com/_files/ugd/30814e_e664e4ead9f740e287d8bc56ce6e9362.pdf",
    "objectives": [
      { "title": "Global Collaboration", "desc": "Strengthen international research collaborations and engineering innovations." },
      { "title": "Cutting-Edge Research", "desc": "Present breakthroughs in AI, IoT, Industry 4.0, and automation." },
      { "title": "Future Trends", "desc": "Explore the intersection of engineering, sustainability, and smart technology." },
      { "title": "Industrial-Academic Synergy", "desc": "Bridge the gap between academia and industry for real-world applications." },
      { "title": "Policy Discussions", "desc": "Engage policymakers to drive technology-forward policies for global benefit." }
    ],
    "importantDates": [
      { "label": "Paper Submission Deadline", "date": "December 5, 2024" },
      { "label": "Notification of Acceptance", "date": "December 10, 2024" },
      { "label": "Final Paper Submission & Registration", "date": "December 12, 2024" },
      { "label": "Conference Dates", "date": "December 15-16, 2024" }
    ],
    "tracks": [
      "Artificial Intelligence",
      "Internet of Things (IoT)",
      "Robotics",
      "Renewable Energy",
      "Cloud Computing",
      "Human-Computer Interaction"
    ],
    "whyAttend": [
      { "title": "Global Research Platform", "desc": "Connect with researchers and professionals from multiple countries and share innovative research ideas.", "icon": "globe" },
      { "title": "Publication Opportunities", "desc": "Get your research published in ISBN proceedings with potential Scopus and Web of Science indexing.", "icon": "bookopen" },
      { "title": "Expert Networking", "desc": "Network with keynote speakers, session chairs, and researchers from top global institutions.", "icon": "users" },
      { "title": "Quality Peer Review", "desc": "All submissions undergo a double-blind peer-review process by an international panel of experts.", "icon": "award" }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "iceiis24": {
    "id": "iceiis24",
    "title": "ICEIIS-2024",
    "subtitle": "International Conference on Emerging Innovations in Information Systems",
    "description": "An international conference focusing on the latest innovations and advancements in information systems, covering topics from AI and data analytics to cybersecurity and digital transformation. The conference aims to bring together a global community of researchers and practitioners to share knowledge and collaborate on future directions.",
    "dateAndMode": "2024 | Virtual Mode",
    "whyAttend": [
      { "title": "Global Research Platform", "desc": "Connect with researchers and professionals from multiple countries and share innovative research ideas.", "icon": "globe" },
      { "title": "Publication Opportunities", "desc": "Get your research published in ISBN proceedings with potential Scopus and Web of Science indexing.", "icon": "bookopen" },
      { "title": "Expert Networking", "desc": "Network with keynote speakers, session chairs, and researchers from top global institutions.", "icon": "users" },
      { "title": "Quality Peer Review", "desc": "All submissions undergo a double-blind peer-review process by an international panel of experts.", "icon": "award" }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  },

  "icaids-2024": {
    "id": "icaids-2024",
    "title": "ICAIDS-2024",
    "subtitle": "International Conference on Artificial Intelligence and Data Science",
    "description": "An international conference dedicated to the exploration and advancement of Artificial Intelligence and Data Science methodologies. The conference provides a scholarly platform for researchers and industry experts to present innovative research, share practical experiences, and discuss emerging trends in AI, machine learning, and data-driven decision making.",
    "dateAndMode": "2024 | Virtual Mode",
    "whyAttend": [
      { "title": "Global Research Platform", "desc": "Connect with researchers and professionals from multiple countries and share innovative research ideas.", "icon": "globe" },
      { "title": "Publication Opportunities", "desc": "Get your research published in ISBN proceedings with potential Scopus and Web of Science indexing.", "icon": "bookopen" },
      { "title": "Expert Networking", "desc": "Network with keynote speakers, session chairs, and researchers from top global institutions.", "icon": "users" },
      { "title": "Quality Peer Review", "desc": "All submissions undergo a double-blind peer-review process by an international panel of experts.", "icon": "award" }
    ],
    "publications": [
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database." }
    ]
  }
};

export interface RecentConferenceData {
  id: string;
  title: string;
  subtitle: string;
  dateAndMode: string;
  description: string;
  location?: string;
  isbn?: string;
  downloadLink?: string;
  chiefGuest?: { name: string; title: string; affiliation: string; };
  keynoteSpeakers?: { name: string; title: string; affiliation: string; imageUrl?: string; }[];
  conferenceExperts?: { name: string; title: string; affiliation: string; }[];
  importantDates?: { label: string; date: string; }[];
  objectives?: { title: string; desc: string; }[];
  whyAttend?: { title: string; desc: string; icon?: string; }[];
  publications?: { title: string; desc: string; }[];
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
      { "name": "Prof. Dr. Alexander Bull", "title": "Professor", "affiliation": "IU International University, Germany" },
      { "name": "Dr. Walida Ounruean", "title": "International Education Innovator, Faculty of Education", "affiliation": "Uttaradit Rajabhat University, Thailand" },
      { "name": "Dr. Yulia Kryvenko", "title": "Assistant Professor", "affiliation": "Istanbul Sabahattin Zaim University, France" },
      { "name": "Nadine Zeinoun", "title": "Master Certified Coach & President", "affiliation": "ICF Chapter Ottawa, Saint Joseph University, Lebanon" },
      { "name": "Katarzyna Antosz", "title": "Associate Professor", "affiliation": "Rzeszow University of Technology, Poland" },
      { "name": "Dr. Mehwish (Mishy) Rashid", "title": "DHSc", "affiliation": "Keiser University, USA" },
      { "name": "Ezinne Esther Arisa", "title": "Founder", "affiliation": "Candy Rainbow Creations, South Africa" },
      { "name": "Mouhssin Ait El Mouden", "title": "Researcher", "affiliation": "Faculty of Letters, Ibn Tofail University, Morocco" },
      { "name": "Dr. Firas Zeidan", "title": "Researcher & Professor", "affiliation": "Lebanon" },
      { "name": "Dr. Elizabeth Sarah George", "title": "Assistant Professor", "affiliation": "RV University, India" },
      { "name": "Mrugendra Madalagi", "title": "Independent Researcher & Solution Architect", "affiliation": "Technology Solutions & Architecture, USA" },
      { "name": "Utkarsh Sharma", "title": "Independent Researcher & AI-FinTech Leader", "affiliation": "Artificial Intelligence - FinTech Innovation, USA" }
    ],
    "conferenceExperts": [
      { "name": "Dr. S. M. Shiyekar", "title": "Dean - Research, Development and Grants", "affiliation": "D. Y. Patil College of Engineering, Akurdi, Pune, India" },
      { "name": "Dr. Prabhat Thakur", "title": "Associate Professor", "affiliation": "Alliance School of Applied Engineering, Bengaluru, Karnataka, India" },
      { "name": "Dr. Jitendra Pandey, FHEA", "title": "Senior Faculty Member", "affiliation": "Middle East College, Affiliated to Coventry University, Oman" },
      { "name": "Andreza Malena Guedes da Costa Silva", "title": "International Research Delegate", "affiliation": "IPM, Brazil" },
      { "name": "Fatimah Alneel", "title": "Academic Delegate", "affiliation": "The University of Arizona, United States" },
      { "name": "Marghescu Cristina-Florentina", "title": "Research Delegate", "affiliation": "University Politehnica of Bucharest, Romania" },
      { "name": "James Abdul Malik", "title": "International Delegate", "affiliation": "Academy for Cultural Diplomacy, Germany" }
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
      { "name": "Dr. Walida Ounruean", "title": "International Education Innovator, Faculty of Education", "affiliation": "Uttaradit Rajabhat University, Thailand", "imageUrl": "/speakers/icaidss-26/01-dr-walida-ounruean.jpg" },
      { "name": "Dr. Tiansheng Yang", "title": "Faculty Member", "affiliation": "University of South Wales, United Kingdom", "imageUrl": "/speakers/icaidss-26/02-dr-tiansheng-yang.jpg" },
      { "name": "Marghescu Cristina-Florentina", "title": "Researcher & Academic", "affiliation": "University Politehnica of Bucharest (UPB), Romania", "imageUrl": "/speakers/icaidss-26/03-marghescu-cristina-florentina.png" },
      { "name": "Dr. Firas Zeidan", "title": "Researcher & Professor, Higher Education & Research Academic & Scientific Leadership", "affiliation": "Lebanon", "imageUrl": "/speakers/icaidss-26/04-dr-firas-zeidan.jpg" },
      { "name": "Mr. Pradeep Kachakayla", "title": "Cloud, Data Analytics, and AI Expert, Expertise in Cloud Computing, Data Analytics, and AI across Multiple Sectors", "affiliation": "USA", "imageUrl": "/speakers/icaidss-26/05-mr-pradeep-kachakayla.png" },
      { "name": "Mr. Shikhar Singhal", "title": "AI, Data, and Business Expert, Expertise in Artificial Intelligence, Data Analytics, and Business Technology Solutions", "affiliation": "New York, USA", "imageUrl": "/speakers/icaidss-26/06-mr-shikhar-singhal.png" },
      { "name": "Dr. Mohamed Kebbouj", "title": "PhD, Sport Performance, Normal Higher School Hassan II", "affiliation": "University of Casablanca, Morocco", "imageUrl": "/speakers/icaidss-26/07-dr-mohamed-kebbouj.jpg" },
      { "name": "Manoj Bahirgonde", "title": "Sr. Product Manager, Product Strategy, Data Transformation and Technology Product Leadership", "affiliation": "Atlanta, Georgia, USA", "imageUrl": "/speakers/icaidss-26/08-manoj-bahirgonde.png" },
      { "name": "Dr. Ayoub Regragui", "title": "Applied Linguistics Researcher, Doctorate in Arabic Linguistics, International Teaching & Academic Research", "affiliation": "Morocco", "imageUrl": "/speakers/icaidss-26/09-dr-ayoub-regragui.png" },
      { "name": "Dr. Elizabeth Sarah George", "title": "Assistant Professor", "affiliation": "All University, India", "imageUrl": "/speakers/icaidss-26/10-dr-elizabeth-sarah-george.jpg" },
      { "name": "Mouhssin Ait El Mouden", "title": "Researcher", "affiliation": "Faculty of Letters, Ibn Tofail University, Morocco", "imageUrl": "/speakers/icaidss-26/11-mouhssin-ait-el-mouden.jpg" }
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
      { "name": "Ezinne Esther Arisa", "title": "Founder", "affiliation": "Candy Rainbow Creations, South Africa" },
      { "name": "Karl G. Sieg, M.D.", "title": "Professor of Psychiatry", "affiliation": "University of Central Florida College of Medicine, United States" },
      { "name": "Rajendra Ugrani", "title": "Researcher and Leader", "affiliation": "AI, ML, Security, Software, California, USA" },
      { "name": "Katarzyna Antosz", "title": "Associate Professor", "affiliation": "Rzeszow University of Technology, Poland" },
      { "name": "Dr. Mehwish (Mishy) Rashid", "title": "DHSc", "affiliation": "Keiser University, USA" },
      { "name": "Dr. Amit Kukker", "title": "Associate Professor", "affiliation": "Department of Computer Science and Engineering, SRM Institute of Science and Technology, Modinagar, India" },
      { "name": "Prajakta Talathi", "title": "Data Strategy and Performance Measurement Expert", "affiliation": "Education Finance, USA" },
      { "name": "Nadine Zeinoun", "title": "Master Certified Coach", "affiliation": "President, ICF Chapter Ottawa; Facilitator, Saint Joseph University, Lebanon" },
      { "name": "Prof. Dr. Alexander Bull", "title": "Professor", "affiliation": "IU International University, Germany" },
      { "name": "Karan Kumar Ratra", "title": "Independent Researcher", "affiliation": "Innovative E-Commerce Systems Architect and Technology Leader in Retail Technology, USA" },
      { "name": "Dr. Yulia Kryvenko", "title": "Assistant Professor", "affiliation": "Istanbul Sabahattin Zaim University, France" }
    ],
    "conferenceExperts": [
      { "name": "Dr. Jitendra Pandey, FHEA", "title": "Senior Faculty Member", "affiliation": "Middle East College, Affiliated to Coventry University, Oman" },
      { "name": "Emem Akpabio", "title": "Invited Delegate", "affiliation": "International Conference Participant, South Africa" },
      { "name": "Andreza Malena Guedes da Costa Silva", "title": "International Research Delegate", "affiliation": "IPM, Brazil" },
      { "name": "Fatimah Alneel", "title": "Academic Delegate", "affiliation": "The University of Arizona, United States" },
      { "name": "Marghescu Cristina-Florentina", "title": "Research Delegate", "affiliation": "University Politehnica of Bucharest, Romania" },
      { "name": "KHADRAN MOHAMMED A ALSAHAIMI", "title": "Conference Delegate", "affiliation": "Jamia Hamdard, Saudi Arabia" },
      { "name": "James Abdul Malik", "title": "International Delegate", "affiliation": "Academy for Cultural Diplomacy, Germany" },
      { "name": "Dr. S. M. Shiyekar", "title": "Dean - Research, Development and Grants", "affiliation": "D. Y. Patil College of Engineering, Akurdi, Pune, India" },
      { "name": "Dr. Prabhat Thakur", "title": "Associate Professor", "affiliation": "Alliance School of Applied Engineering, Bengaluru, Karnataka, India" }
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
      { "title": "ISBN Conference Proceedings", "desc": "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number. This ensures proper academic recognition, citation, and international accessibility of the research work." },
      { "title": "Scopus Indexing Opportunity", "desc": "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals, subject to journal scope, editorial policy, and an additional peer-review process." },
      { "title": "Web of Science Indexing", "desc": "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database after editorial review and quality evaluation." },
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
      "affiliation": "Navsahyadri Education Society Group of Institutions, Pune, India"
    },
    "tracks": [
      "Artificial Intelligence & Data Science - Machine Learning, Deep Learning, Computer Vision, NLP",
      "Software Engineering - Cloud Computing, Distributed Systems, DevOps",
      "Cybersecurity - Cryptography, Blockchain Security, Digital Forensics",
      "Emerging Technologies - IoT, Robotics, Quantum Computing"
    ],
    "keynoteSpeakers": [
      { "name": "Dr. Yulia Kryvenko", "title": "Assistant Professor", "affiliation": "Istanbul Sabahattin Zaim University, France" },
      { "name": "Prof. Dr. Alexander Bull", "title": "Professor", "affiliation": "IU International University, Germany" },
      { "name": "Manuja Bandal", "title": "Researcher", "affiliation": "Software Engineer, Innovator, and STEM Mentor, USA" },
      { "name": "Dr. Walida Ounruean", "title": "International Education Ambassador", "affiliation": "Faculty of Education, Uttaradit Rajabhat University, Thailand" },
      { "name": "Ezinne Esther Arisa", "title": "Founder", "affiliation": "Candy Rainbow Creations, South Africa" },
      { "name": "Harikrishnan Ramakrishna Pillai", "title": "Researcher", "affiliation": "AI & Distributed Systems, USA" },
      { "name": "Mouhssin Ait El Mouden", "title": "Researcher", "affiliation": "Faculty of Letters, Ibn Tofail University, Morocco" },
      { "name": "Ponsankar Shanmugam S", "title": "Researcher", "affiliation": "Innovation in Distributed & AI Systems, USA" },
      { "name": "Dr. Entela Shkodrani", "title": "Associate Professor, Clinic of Dermatology", "affiliation": "University Hospital Center, Tirana, Albania" },
      { "name": "Sanjay Poddar", "title": "Sr. Exec Cloud & SASE Strategist", "affiliation": "USA" },
      { "name": "Dr. Elizabeth Sarah George", "title": "Assistant Professor", "affiliation": "RV University, India" }
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
      { "name": "Dr. Walida Ounruean", "title": "International Education Ambassador", "affiliation": "Faculty of Education, Uttaradit Rajabhat University, Thailand" },
      { "name": "Ezinne Esther Arisa", "title": "Founder", "affiliation": "Candy Rainbow Creations, South Africa" },
      { "name": "Mrugendra Madalagi", "title": "Independent Researcher & Solution Architect", "affiliation": "Technology Solutions & Architecture, USA" },
      { "name": "RC Holmes", "title": "Entrepreneur & Business Speaker", "affiliation": "CEO, Wealthy Results LLC, USA" },
      { "name": "Sri Harsha Anand Pushkala", "title": "Director - Fraud Strategy & Analytics", "affiliation": "Atlanticus Holdings, Senior Member IEEE, USA" },
      { "name": "Dr. Aida Mehrad", "title": "Academic Director & Associate Professor", "affiliation": "C3S Business School, Dual PhD | DBA, Spain" },
      { "name": "Dr. Mehwish (Mishy) Rashid", "title": "DHSc", "affiliation": "Keiser University, USA" },
      { "name": "Nadine Zeinoun", "title": "Master Certified Coach", "affiliation": "President, ICF Chapter Ottawa, Facilitator, Saint Joseph University, Lebanon" },
      { "name": "Prathan Raghavan", "title": "Director - Product Management", "affiliation": "Santander, GenAI & Automation, USA" },
      { "name": "Sudeep Annappa Shanubhog", "title": "Independent Researcher", "affiliation": "Affiliate: Tential Inc., North Carolina, USA" },
      { "name": "Utkarsh Sharma", "title": "Independent Researcher & AI-FinTech Leader", "affiliation": "Artificial Intelligence - FinTech Innovation, USA" },
      { "name": "Shyam Kumar Gajula", "title": "Endpoint & Identity Security Engineer", "affiliation": "Cybersecurity Researcher, United States" },
      { "name": "Yesha Patel", "title": "Senior Solution Architect", "affiliation": "United States" }
    ],
    "conferenceExperts": [
      { "name": "Dr. S. M. Shiyekar", "title": "Dean - Research, Development and Grants", "affiliation": "D. Y. Patil College of Engineering, Akurdi, Pune, India" },
      { "name": "Dr. Prabhat Thakur", "title": "Associate Professor", "affiliation": "Alliance School of Applied Engineering, Bengaluru, Karnataka, India" }
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
      { "name": "Dr. Nadia Adnan", "title": "Assistant Professor & Research Scientist", "affiliation": "Prince Mohammad Bin Fahd University, Saudi Arabia" },
      { "name": "Dr. Rana El Khawand", "title": "Technical Expert", "affiliation": "Saida Risk Mapping Project, UN-Habitat" },
      { "name": "Vijayachandar Sanikal", "title": "IEEE Senior Member & Independent Researcher", "affiliation": "AI-Driven Automotive Digital Twin & Simulation, USA" },
      { "name": "Bhavya Mehta", "title": "Independent Researcher", "affiliation": "Network Security and Cloud Networking, USA" },
      { "name": "Lawrence Mazaki Mashati", "title": "Community Development Professional", "affiliation": "International Missionary for Christ, Nairobi, Kenya" },
      { "name": "Dr. Jitendra Pandey, FHEA", "title": "Senior Faculty Member", "affiliation": "Middle East College (Affiliated to Coventry University), Oman" },
      { "name": "Mr. Satyabrata Pradhan", "title": "Automotive Engineer & Program Leader", "affiliation": "IEEE Senior Member, USA" },
      { "name": "Dr. Thillainayagam Sankaravel", "title": "President", "affiliation": "MedArb International, India" },
      { "name": "Dr. Walida Ounruean", "title": "International Education Ambassador", "affiliation": "Faculty of Education, Uttaradit Rajabhat University, Thailand" }
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
      { "name": "Mr. Saptarshi Debnath", "title": "Independent Researcher", "affiliation": "Scalable Systems & Cloud Architecture, USA" },
      { "name": "Dr. Ruth Abiola Adimula", "title": "Associate Professor", "affiliation": "University of Ilorin, Nigeria" },
      { "name": "Mr. Rajaguru Ganesan", "title": "Independent Researcher", "affiliation": "System Modernization, Cloud & Microservices, USA" },
      { "name": "Dr. Ratna Raja Kumar Jambi", "title": "Principal", "affiliation": "G S Moze College of Engineering, India" },
      { "name": "Dr. Walida Ounruean", "title": "International Education Ambassador", "affiliation": "Faculty of Education, Uttaradit Rajabhat University, Thailand" },
      { "name": "Mr. Satish Kabade", "title": "Product Technical Expert", "affiliation": "Independent Researcher, New York, USA" },
      { "name": "Dr. Sadia Nazneen Karobi", "title": "Assistant Professor", "affiliation": "Dept. of Environmental Science and Management, School of Environment and Life Sciences" },
      { "name": "Mr. Amber Rastogi", "title": "Independent Researcher", "affiliation": "Distributed Systems & Cloud Computing, USA" },
      { "name": "Dr. Tiansheng Yang", "title": "Faculty Member", "affiliation": "University of South Wales, United Kingdom" },
      { "name": "Karthikeyan Srinivasan", "title": "Independent Researcher", "affiliation": "Software Engineering, System Architecture & Cloud-Native Solutions, USA" },
      { "name": "Dr. Prashant Patil", "title": "Dean Academic", "affiliation": "NGI's College of Engineering, Pune, India" },
      { "name": "Hemang Upadhyay", "title": "Independent Researcher", "affiliation": "AI, E-commerce & Analytics, USA" }
    ],
    "conferenceExperts": [
      { "name": "Katarzyna Antosz", "title": "Associate Professor", "affiliation": "Rzeszow University of Technology, Rzeszow, Podkarpackie, Poland" },
      { "name": "Mouhssin Ait El Mouden", "title": "Researcher", "affiliation": "Research Laboratory, Faculty of Letters, Ibn Tofail University, Kenitra, Morocco" },
      { "name": "Dr. Firas Zeidan", "title": "Researcher & Professor", "affiliation": "Higher Education & Research, Lebanon" },
      { "name": "Dr. Reshma Sujal Sonar", "title": "Assistant Professor", "affiliation": "Department of Computer Engineering & Technology, MIT World Peace University (MIT-WPU), Pune, India" },
      { "name": "Dr. Deepthi D Kulkarni", "title": "Head of Department & Assistant Professor", "affiliation": "Department of Electronics & Telecommunication (E&TC), KJEI's Trinity Academy of Engineering, Pune, India" }
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
      { "name": "Dr. Prodhan Mahbub Ibna Seraj", "title": "Associate Professor", "affiliation": "Department of English, American International University-Bangladesh" },
      { "name": "Dr. Nadia Adnan", "title": "Assistant Professor & Research Scientist", "affiliation": "Prince Mohammad Bin Fahd University, Saudi Arabia" },
      { "name": "Dr. Muhammad Tahir Jan", "title": "Associate Professor", "affiliation": "International Islamic University Malaysia" },
      { "name": "Dr. Ayoub Regragui", "title": "Doctorate in Applied Linguistics", "affiliation": "Mohammed V University, Rabat, Morocco" },
      { "name": "Nilesh Charankar", "title": "AI Technology Leader", "affiliation": "Independent Researcher, USA" },
      { "name": "Veeramani Sampathkumar", "title": "Fintech Technology Leader", "affiliation": "Independent Researcher, USA" },
      { "name": "Hicham ELKHOUAJA", "title": "Researcher", "affiliation": "Hassan I University, Settat, Morocco" },
      { "name": "Mr. Rakesh Ramakrishna Pai", "title": "Independent Researcher", "affiliation": "Franklin, TN, USA" },
      { "name": "Jawaher Al-Zeidi", "title": "English Language Lecturer", "affiliation": "University of Technology and Applied Sciences, Oman" },
      { "name": "Dr. Ratna Raja Kumar Jambi", "title": "Principal", "affiliation": "Genba Sopanrao Moze College of Engineering, Balewadi, Pune" },
      { "name": "Yesha Patel", "title": "Senior Solution Architect", "affiliation": "United States" },
      { "name": "Yukti Goyal", "title": "Lead Software Engineer", "affiliation": "Tampa, FL, USA" }
    ],
    "conferenceExperts": [
      { "name": "Dr. Kailash Nath Tripathi", "title": "Session Chair", "affiliation": "Dnyan Prasad Global University, Pimpri, Pune, India" },
      { "name": "Prof. Indranil Mukherjee", "title": "Session Chair, Head AIML", "affiliation": "NESGI, India" }
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
      { "name": "Dr. Zoha Rahman", "title": "Founder and Country Director, Centre for Big Data & Machine Learning", "affiliation": "Big Data Consultant, Bloomberg, USA" },
      { "name": "Dr. Dina A. Alkhodary", "title": "Associate Professor, Faculty of Business", "affiliation": "Middle East University, Amman, Jordan" },
      { "name": "Mr. Akshay Sharma", "title": "Technology Leader, Independent Researcher, Pension Systems Expert", "affiliation": "USA" },
      { "name": "Dr. Firas Zeidan", "title": "Researcher and Professor", "affiliation": "Lebanon" },
      { "name": "Dr. Ranà El Khawand", "title": "Technical Expert, Saida Risk Mapping Project", "affiliation": "UN-Habitat" },
      { "name": "Prof. Dr. Alexander Bull", "title": "Faculty of Business Administration", "affiliation": "IU International University of Applied Sciences, Germany" },
      { "name": "Mouhssin Ait El Mouden", "title": "Research Laboratory, Faculty of Letters", "affiliation": "Ibn Tofail University, Kenitra, Morocco" },
      { "name": "Prof. Neha Singh", "title": "Assistant Professor in E&TC", "affiliation": "PEG's ISB&M College of Engineering, Pune" },
      { "name": "Prof. Shweta N. Banait", "title": "Assistant Professor, Dept. of AI & Data Science", "affiliation": "D. Y. Patil College of Engineering, Pune, India" }
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
      { "name": "Dr. Joe Perez", "title": "Senior Systems Specialist & Team Leader", "affiliation": "NC Department of Health & Human Services, Raleigh, NC, USA" },
      { "name": "Mr. Satish Kabade", "title": "Product Technical Expert, Independent Researcher", "affiliation": "New York, USA" },
      { "name": "Gregg Clunis", "title": "Founder, Kojo", "affiliation": "United States" },
      { "name": "Nomi Khedawala", "title": "Sr. Technical Program Manager, Reddit", "affiliation": "San Francisco, California" },
      { "name": "Mr. Bhushan Balkrishna Chaudhari", "title": "Senior Technology Lead, Researcher", "affiliation": "New Jersey, USA" },
      { "name": "Jim Saliba", "title": "Principal Consultant, James Saliba Inc", "affiliation": "San Jose, California" },
      { "name": "Dr. Walida Ounruean", "title": "Curriculum and Instruction, Faculty of Education", "affiliation": "Uttaradit Rajabhat University, Thailand" },
      { "name": "Dr. Tiansheng Yang", "title": "Faculty Member", "affiliation": "University of South Wales, United Kingdom" },
      { "name": "Mr. Sudipkumar Ghanvat", "title": "Sr. Director & Head - Data & AI", "affiliation": "VRIO Digital, United States" },
      { "name": "Anup Kagalkar", "title": "Independent Researcher, Product Technical Expert", "affiliation": "United States" }
    ],
    "conferenceExperts": [
      { "name": "Prof. Indranil Mukherjee", "title": "Head, AIML", "affiliation": "NESGI, India" },
      { "name": "Mr. Sam Lawe", "title": "Infrastructure Manager, APAC", "affiliation": "Navico Group, Auckland" },
      { "name": "Mrs. Meryem Gurel", "title": "Founder, Point Energy Intelligence Services", "affiliation": "Istanbul, Turkey" },
      { "name": "Katarzyna Antosz", "title": "Associate Professor", "affiliation": "Rzeszow University of Technology, Poland" },
      { "name": "Dr. Nilesh Vitthal Limbore", "title": "Associate Professor & HOD BBA", "affiliation": "Navsahayadri Group of Institutions, India" }
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
      { "name": "Dr. Ratnaraja Kumar Jambi", "title": "Conference Convener", "affiliation": "Principal, G. S. Moze College of Engineering" },
      { "name": "Prof. Deepak K. Sharma", "title": "Conference Co-Convener", "affiliation": "Head of AI&DS and IQAC, G. S. Moze College of Engineering" },
      { "name": "Dr. Ushadevi Patil", "title": "Conference Co-Convener", "affiliation": "Dean of Research and Development, G. S. Moze College of Engineering" }
    ],
    "conferenceExperts": [
      { "name": "Prof. Sai Sudha", "title": "H.O.D", "affiliation": "Computer Engineering" },
      { "name": "Prof. Sana Shaikh", "title": "H.O.D", "affiliation": "Information Technology" },
      { "name": "Prof. Deepak K. Sharma", "title": "H.O.D", "affiliation": "AI & DS" },
      { "name": "Prof. Pallavi Patil", "title": "H.O.D", "affiliation": "AI & ML" },
      { "name": "Prof. Sushma Rathawardhan", "title": "H.O.D", "affiliation": "E&TC" },
      { "name": "Prof. Seema Sheilykar", "title": "H.O.D", "affiliation": "Civil Engineering" },
      { "name": "Dr. Santosh Sandanshiv", "title": "H.O.D", "affiliation": "Mechanical Engineering" },
      { "name": "Prof. Dhananjay Alagavadi", "title": "H.O.D", "affiliation": "First Year Engineering" },
      { "name": "Prof. Deepak Kulkarni", "title": "H.O.D", "affiliation": "MBA" },
      { "name": "Prof. Mukta Deshpande", "title": "H.O.D", "affiliation": "MCA" }
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
      { "name": "Dr. Ratnaraja Kumar Jambi", "title": "Conference Convener", "affiliation": "Principal, G. S. Moze College of Engineering" },
      { "name": "Prof. Deepak K. Sharma", "title": "Conference Co-Convener", "affiliation": "Head of AI&DS and IQAC, G. S. Moze College of Engineering" },
      { "name": "Dr. Ushadevi Patil", "title": "Conference Co-Convener", "affiliation": "Dean of Research and Development, G. S. Moze College of Engineering" }
    ],
    "conferenceExperts": [
      { "name": "Prof. Sai Sudha", "title": "H.O.D", "affiliation": "Computer Engineering" },
      { "name": "Prof. Sana Shaikh", "title": "H.O.D", "affiliation": "Information Technology" },
      { "name": "Prof. Deepak K. Sharma", "title": "H.O.D", "affiliation": "AI & DS" },
      { "name": "Prof. Pallavi Patil", "title": "H.O.D", "affiliation": "AI & ML" },
      { "name": "Prof. Sushma Rathawardhan", "title": "H.O.D", "affiliation": "E&TC" },
      { "name": "Prof. Seema Sheilykar", "title": "H.O.D", "affiliation": "Civil Engineering" },
      { "name": "Dr. Santosh Sandanshiv", "title": "H.O.D", "affiliation": "Mechanical Engineering" },
      { "name": "Prof. Dhananjay Alagavadi", "title": "H.O.D", "affiliation": "First Year Engineering" },
      { "name": "Prof. Deepak Kulkarni", "title": "H.O.D", "affiliation": "MBA" },
      { "name": "Prof. Mukta Deshpande", "title": "H.O.D", "affiliation": "MCA" }
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
      { "name": "Dr. Ratnaraja Kumar Jambi", "title": "Conference Convener", "affiliation": "Principal, G. S. Moze College of Engineering" },
      { "name": "Prof. Deepak K. Sharma", "title": "Conference Co-Convener", "affiliation": "Head of AI&DS and IQAC, G. S. Moze College of Engineering" },
      { "name": "Dr. Ushadevi Patil", "title": "Conference Co-Convener", "affiliation": "Dean of Research and Development, G. S. Moze College of Engineering" }
    ],
    "conferenceExperts": [
      { "name": "Prof. Sai Sudha", "title": "H.O.D", "affiliation": "Computer Engineering" },
      { "name": "Prof. Sana Shaikh", "title": "H.O.D", "affiliation": "Information Technology" },
      { "name": "Prof. Deepak K. Sharma", "title": "H.O.D", "affiliation": "AI & DS" },
      { "name": "Prof. Pallavi Patil", "title": "H.O.D", "affiliation": "AI & ML" },
      { "name": "Prof. Sushma Rathawardhan", "title": "H.O.D", "affiliation": "E&TC" },
      { "name": "Prof. Seema Sheilykar", "title": "H.O.D", "affiliation": "Civil Engineering" },
      { "name": "Dr. Santosh Sandanshiv", "title": "H.O.D", "affiliation": "Mechanical Engineering" },
      { "name": "Prof. Dhananjay Alagavadi", "title": "H.O.D", "affiliation": "First Year Engineering" },
      { "name": "Prof. Deepak Kulkarni", "title": "H.O.D", "affiliation": "MBA" },
      { "name": "Prof. Mukta Deshpande", "title": "H.O.D", "affiliation": "MCA" }
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

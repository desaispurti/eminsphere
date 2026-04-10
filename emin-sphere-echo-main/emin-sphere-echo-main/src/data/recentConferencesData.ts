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
  keynoteSpeakers?: { name: string; title: string; affiliation: string; }[];
  conferenceExperts?: { name: string; title: string; affiliation: string; }[];
  objectives?: { title: string; desc: string; }[];
  whyAttend?: { title: string; desc: string; icon?: string; }[];
  publications?: { title: string; desc: string; }[];
  tracks?: string[];
  awards?: { title: string; desc: string; }[];
}

export const recentConferences: Record<string, RecentConferenceData> = {
  "icaidss-26": {
    "id": "icaidss-26",
    "title": "ICAIDSS-26",
    "subtitle": "International Conference on Artificial Intelligence, Data Science & Sustainable Systems",
    "description": "The International Conference on Artificial Intelligence, Data Science, and Sustainable Systems (ICAIDSS-26) is a globally recognized academic and professional platform dedicated to fostering innovation, collaboration, and knowledge exchange in the rapidly advancing domains of Artificial Intelligence, Data Science, and Sustainable Technologies. The conference is designed to bring together a diverse community of researchers, academicians, scientists, industry experts, and policymakers from across the globe to present their research findings, share insights, and discuss emerging challenges and opportunities shaping the future of intelligent and sustainable systems.\n\nIn today's data-driven and technology-oriented world, the integration of Artificial Intelligence and Data Science with sustainable development has become essential for addressing complex global challenges such as climate change, resource optimization, healthcare innovation, smart infrastructure, and digital transformation. ICAIDSS-26 provides a multidisciplinary platform that encourages the exploration of advanced computational techniques, intelligent systems, and sustainable engineering practices aimed at creating impactful and scalable solutions.\n\nThe conference will feature keynote addresses from distinguished international experts, technical paper presentations, and interactive discussions that highlight cutting-edge research and real-world applications. All submitted papers undergo a rigorous peer-review process to ensure high academic quality, originality, and relevance to the conference themes. Selected high-quality papers will be recommended for publication in reputed indexed journals, further enhancing the visibility and impact of the research contributions.\n\nICAIDSS-26 also emphasizes international collaboration by connecting participants from different regions, institutions, and professional backgrounds. It serves as a bridge between academia and industry, enabling knowledge transfer, networking opportunities, and future research partnerships. By participating in ICAIDSS-26, attendees will gain valuable insights into emerging technologies, current industry practices, and future research directions, making it a significant platform for both academic growth and professional development.",
    "dateAndMode": "29 March 2026 | Virtual Mode",
    "keynoteSpeakers": [
      { "name": "Dr. Walida Ounruean", "title": "International Education Innovator, Faculty of Education", "affiliation": "Uttaradit Rajabhat University, Thailand" },
      { "name": "Dr. Tiansheng Yang", "title": "Faculty Member", "affiliation": "University of South Wales, United Kingdom" },
      { "name": "Marghescu Cristina-Florentina", "title": "Researcher & Academic", "affiliation": "University Politehnica of Bucharest (UPB), Romania" },
      { "name": "Dr. Firas Zeidan", "title": "Researcher & Professor, Higher Education & Research Academic & Scientific Leadership", "affiliation": "Lebanon" },
      { "name": "Mr. Pradeep Kachakayla", "title": "Cloud, Data Analytics, and AI Expert, Expertise in Cloud Computing, Data Analytics, and AI across Multiple Sectors", "affiliation": "USA" },
      { "name": "Mr. Shikhar Singhal", "title": "AI, Data, and Business Expert, Expertise in Artificial Intelligence, Data Analytics, and Business Technology Solutions", "affiliation": "New York, USA" },
      { "name": "Dr. Mohamed Kebbouj", "title": "PhD, Sport Performance, Normal Higher School Hassan II", "affiliation": "University of Casablanca, Morocco" },
      { "name": "Manoj Bahirgonde", "title": "Sr. Product Manager, Product Strategy, Data Transformation and Technology Product Leadership", "affiliation": "Atlanta, Georgia, USA" },
      { "name": "Dr. Ayoub Regragui", "title": "Applied Linguistics Researcher, Doctorate in Arabic Linguistics, International Teaching & Academic Research", "affiliation": "Morocco" },
      { "name": "Dr. Elizabeth Sarah George", "title": "Assistant Professor", "affiliation": "All University, India" },
      { "name": "Mouhssin Ait El Mouden", "title": "Researcher", "affiliation": "Faculty of Letters, Ibn Tofail University, Morocco" }
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

  "icnse-26": {
    "id": "icnse-26",
    "title": "ICNSE-26",
    "subtitle": "International Conference on Next Generation Science & Engineering Innovation",
    "description": "A premier global academic platform dedicated to interdisciplinary research, innovation, and scholarly collaboration. The conference brings together researchers, academicians, and industry leaders worldwide to ensure academic excellence through rigorous peer review.",
    "dateAndMode": "01 March 2026 | Virtual Mode | Global Participation",
    "isbn": "978-81-998717-9-3",
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

  "ictet-26": {
    "id": "ictet-26",
    "title": "ICTET-26",
    "subtitle": "International Conference on Cutting-Edge Technologies",
    "description": "An international multidisciplinary conference aimed at bringing together researchers, academicians, and industry professionals to share innovations, research findings, and future-ready technologies across technical and non-technical domains.",
    "dateAndMode": "15 February 2026 | Hybrid Mode (Online + Offline)",
    "isbn": "978-81-998717-5-5",
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

  "icmess-26": {
    "id": "icmess-26",
    "title": "ICMESS-26",
    "subtitle": "International Conference on Management, Economics, and Social Sciences",
    "description": "A premier international academic research conference providing a high-level scholarly platform for participants to share research, discuss theoretical and practical challenges, and collaborate on future initiatives in management, economics, and social sciences.",
    "dateAndMode": "February 8, 2026 | Kuala Lumpur, Malaysia | Hybrid Mode",
    "isbn": "978-81-998310-7-6",
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

  "icasit-26": {
    "id": "icasit-26",
    "title": "ICASIT-26",
    "subtitle": "International Conference on Applied Sciences, Innovation, and Technology",
    "description": "A premier international platform bringing together researchers, academicians, and industry experts to exchange ideas in applied sciences, innovation, sustainability, and emerging technologies.",
    "dateAndMode": "Zurich, Switzerland | 25 January 2026 | Hybrid Mode",
    "isbn": "978-81-998310-3-8",
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
    "description": "This conference unites researchers and professionals from around the world to promote interdisciplinary innovation and sustainable advancement across engineering, technology, management, and AI-driven transformation.",
    "dateAndMode": "Helsinki, Finland | December 14, 2025 | Hybrid Mode",
    "keynoteSpeakers": [
      { "name": "Dr. Prodhan Mahbub Ibna Seraj", "title": "Associate Professor, Department of English", "affiliation": "American International University-Bangladesh" },
      { "name": "Dr. Nadia Adnan", "title": "Assistant Professor & Research Scientist", "affiliation": "Prince Mohammad Bin Fahd University, Saudi Arabia" },
      { "name": "Dr. Muhammad Tahir Jan", "title": "Associate Professor, Department of Business Administration", "affiliation": "International Islamic University Malaysia" },
      { "name": "Dr. Ayoub Regragui", "title": "Doctorate in Applied Linguistics", "affiliation": "Mohammed V University, Rabat, Morocco" },
      { "name": "Nilesh Charankar", "title": "AI Technology Leader and Independent Researcher", "affiliation": "USA" },
      { "name": "Veeramani Sampathkumar", "title": "Fintech Technology Leader, Independent Researcher", "affiliation": "USA" },
      { "name": "Hicham Elkhouaja", "title": "Researcher, Faculty of Languages and Arts", "affiliation": "Hassan I University, Settat, Morocco" },
      { "name": "Mr. Rakesh Ramakrishna Pai", "title": "Independent Researcher", "affiliation": "Franklin, TN, USA" },
      { "name": "Jawaher Al-Zeidi", "title": "English Language Lecturer", "affiliation": "University of Technology and Applied Sciences, Oman" },
      { "name": "Dr. Ratna Raja Kumar Jambi", "title": "Principal", "affiliation": "Genba Sopanrao Moze College of Engineering, Pune, India" },
      { "name": "Yesha Patel", "title": "Senior Solution Architect", "affiliation": "United States" },
      { "name": "Yukti Goyal", "title": "Lead Software Engineer", "affiliation": "Tampa, FL, USA" }
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
    "description": "The International Conference on Computational Intelligence and Emerging Technologies (ICCINET-25), held on October 25, 2025, proudly announces the official launch of its conference proceedings. The proceedings comprise a collection of peer-reviewed research papers presented during the conference, highlighting the latest advancements, innovative methodologies, and emerging applications in computational intelligence, machine learning, and smart technologies.",
    "dateAndMode": "October 25, 2025 | Hybrid Mode",
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
      { "title": "Best Paper Award", "desc": "For the most outstanding research paper submitted and presented." },
      { "title": "Best Presentation Award", "desc": "For delivering an exceptional and engaging presentation." },
      { "title": "Outstanding Innovation Award", "desc": "For creative, innovative, and impactful contributions in the field." }
    ],
    "objectives": [
      { "title": "Global Research Collaboration", "desc": "Strengthening international partnerships in AI and emerging technologies" },
      { "title": "Showcasing Innovation", "desc": "Latest breakthroughs in AI, ML, IoT, robotics, and sustainable technologies" },
      { "title": "Academic Excellence", "desc": "Promoting high-quality peer-reviewed research and publications" },
      { "title": "Industry-Academia Bridge", "desc": "Connecting researchers with industry professionals for real-world impact" }
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
    "subtitle": "International Conference on Advanced Management, Engineering & Technology",
    "description": "An interdisciplinary international conference organized in collaboration with leading academic institutions, focusing on advanced management practices, engineering innovations, and emerging technology trends. The conference provides a platform for researchers and practitioners to share knowledge and foster collaborative research across domains.",
    "dateAndMode": "2025 | Hybrid Mode",
    "isbn": "978-93-342-5206-4",
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

  "icenta-2024": {
    "id": "icenta-2024",
    "title": "ICENTA-2024",
    "subtitle": "International Conference on Engineering Nexus & Technological Advancements 2024",
    "description": "A premier international conference bridging innovation and technology for a smarter future. ICENTA-2024 brought together researchers, academicians, and industry experts from across the globe to share cutting-edge research and foster collaborative advancements in engineering and technology.",
    "dateAndMode": "December 15-16, 2024 | Virtual Mode (Global Participation)",
    "isbn": "978-93-342-5598-0",
    "downloadLink": "https://www.eminsphere.com/_files/ugd/30814e_e664e4ead9f740e287d8bc56ce6e9362.pdf",
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

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
    description: "Multidisciplinary Innovations and Applications proceeding papers published during the December 2025 event.",
    videos: []
  },
  "proceeding-icetsgc-25": {
    id: "proceeding-icetsgc-25",
    title: "Proceeding ICETSGC-25",
    date: "2025",
    description: "Proceeding papers from the International Conference on Emerging Tech.",
    videos: []
  },
  "conference-proceedings": {
    id: "conference-proceedings",
    title: "Proceeding ICCINET-25",
    date: "2025",
    description: "Computational Intelligence and Networks symposium official peer-reviewed abstracts and papers.",
    videos: []
  }
};

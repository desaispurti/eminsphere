const fs = require('fs');
const path = require('path');

const confDir = path.join(__dirname, 'src/pages/conferences');
const files = fs.readdirSync(confDir).filter(f => f !== 'ProceedingLayout.tsx' && f !== 'UpcomingConferenceLayout.tsx' && f !== 'RecentConferenceLayout.tsx');

const data = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(confDir, file), 'utf8');
  
  // Extract Title (usually in <h1>)
  const titleMatch = content.match(/<motion\.h1[^>]*>([^<]+)<\/motion\.h1>/);
  let title = titleMatch ? titleMatch[1].trim() : file.replace('.tsx', '');
  
  // Extract subtitle
  const subMatch = content.match(/<motion\.p[^>]*className="text-xl text-white\/90[^>]*>([\s\S]*?)<\/motion\.p>/);
  let subtitle = subMatch ? subMatch[1].trim() : '';

  // Extract description
  const descMatch = content.match(/<motion\.p[^>]*className="text-white\/70 font-body"[^>]*>([\s\S]*?)<\/motion\.p>/);
  let description = descMatch ? descMatch[1].trim() : '';
  
  // If no motion, maybe normal tags (like ICCINET)
  if (!subtitle) {
    const pSub = content.match(/<motion\.p[^>]*text-xl text-white\/90[^>]*>([^<]+)<\/motion\.p>/);
    if (pSub) subtitle = pSub[1].trim();
  }
  
  // Extract date and location
  const dateLocMatch = content.match(/<motion\.div[^>]*className="mt-8 inline-block[^>]*>([\s\S]*?)<\/motion\.div>/);
  let dateAndMode = dateLocMatch ? dateLocMatch[1].trim() : 'Upcoming';
  
  // Objectives
  const objMatch = content.match(/const objectives = \[([\s\S]*?)\];/);
  let objectives = [];
  if (objMatch) {
    const rowMatches = objMatch[1].matchAll(/\{[^}]*title:\s*"([^"]+)"[^}]*desc:\s*"([^"]+)"/g);
    for (const m of rowMatches) {
      objectives.push({ title: m[1], desc: m[2] });
    }
  }

  // Why Attend 
  const whyMatch = content.match(/const whyAttend = \[([\s\S]*?)\];/);
  let whyAttend = [];
  if (whyMatch) {
    const rMatches = whyMatch[1].matchAll(/title:\s*"([^"]+)",\s*desc:\s*"([^"]+)"/g); // Ignoring icon extraction for simplicity
    for (const m of rMatches) {
      whyAttend.push({ title: m[1], desc: m[2], icon: "globe" }); // default globe
    }
  }

  // Publications
  const pubMatch = content.match(/const publications = \[([\s\S]*?)\];/);
  let publications = [];
  if (pubMatch) {
    const rMatches = pubMatch[1].matchAll(/title:\s*"([^"]+)",\s*desc:\s*"([^"]+)"/g);
    for (const m of rMatches) {
      publications.push({ title: m[1], desc: m[2] });
    }
  }

  const id = file.replace('.tsx', '').toLowerCase().replace('2026', '26').replace('2025', '25');

  // Specific id mapping to match routes
  let finalId = id;
  if (id === 'icaeset26') finalId = 'icaeset-2026';
  else if (id === 'icnse26') finalId = 'icnse-26';
  else if (id === 'ictet26') finalId = 'ictet-26';
  else if (id === 'icmess26') finalId = 'icmess-26';
  else if (id === 'icasit26') finalId = 'icasit-26';
  else if (id === 'icmdia25') finalId = 'icmdia-25';
  else if (id === 'icetsgc25') finalId = 'icetsgc-25';
  else if (id === 'iccinet25') finalId = 'iccinet-25';
  else if (id === 'icaidss26') finalId = 'icaidss-26';

  data[finalId] = {
    id: finalId,
    title,
    subtitle,
    description,
    dateAndMode,
    objectives,
    whyAttend,
    publications
  };
}

// Add the missing ones from the prompt list
const missing = ['icamet25', 'icenta-2024', 'iceiis24', 'icaids-2024'];
for (const m of missing) {
  if (!data[m]) {
    data[m] = {
      id: m,
      title: m.toUpperCase(),
      subtitle: "Upcoming International Conference",
      description: "Full details for this conference are currently being finalized and will be published shortly.",
      dateAndMode: "To Be Announced",
      objectives: [],
      whyAttend: [],
      publications: []
    };
  }
}

const fileContent = `export interface RecentConferenceData {
  id: string;
  title: string;
  subtitle: string;
  dateAndMode: string;
  description: string;
  location?: string;
  objectives?: { title: string; desc: string; }[];
  whyAttend?: { title: string; desc: string; icon?: string; }[];
  publications?: { title: string; desc: string; }[];
}

export const recentConferences: Record<string, RecentConferenceData> = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src/data/recentConferencesData.ts'), fileContent);
console.log('Done!');

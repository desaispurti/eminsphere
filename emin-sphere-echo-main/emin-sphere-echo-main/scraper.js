import fs from 'fs';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const baseUrl = 'https://www.eminsphere.com';
const paths = [
  '/icaist-26', '/icmref-26', '/copy-of-icmref-26', '/copy-of-icaits-26', // these last two map to icaits-26 and icates-26 usually on wix duplications, based on the `header.tsx` dropdown the urls are:
  // wait, from my content.md, the real urls for upcoming conferences were:
  // [ICAIST-26](https://www.eminsphere.com/icaist-26)
  // [ICMREF-26](https://www.eminsphere.com/icmref-26)
  // [ICAITS-26](https://www.eminsphere.com/copy-of-icmref-26)
  // [ICATES-26](https://www.eminsphere.com/copy-of-icaits-26)
  '/icaist-26', '/icmref-26', '/copy-of-icmref-26', '/copy-of-icaits-26',
  
  // Proceedings:
  '/recent-conference-proceedings/copy-of-proceeding-icaeset-2026-26',
  '/recent-conference-proceedings/copy-of-proceeding-icnse-26',
  '/recent-conference-proceedings/copy-of-proceeding-ictet-26',
  '/recent-conference-proceedings/copy-of-proceeding-icmess-26',
  '/recent-conference-proceedings/copy-of-proceeding-icasit-26',
  '/recent-conference-proceedings/proceeding-icasit-26',
  '/icmdia-25-1',
  '/proceeding-icetsgc-25',
  '/conference-proceedings'
];

async function scrape() {
  const results = {};
  for (let path of paths) {
    try {
      console.log('Fetching', baseUrl + path);
      const res = await fetch(baseUrl + path);
      if (!res.ok) {
        console.log('FAILED', path, res.status);
        continue;
      }
      const html = await res.text();
      const dom = new JSDOM(html);
      const doc = dom.window.document;
      
      const titleEl = doc.querySelector('h1') || doc.querySelector('h2');
      const title = titleEl ? titleEl.textContent.trim() : path;

      // get texts
      const paragraphs = Array.from(doc.querySelectorAll('p, span')).map(el => el.textContent.trim()).filter(t => t.length > 20);
      
      // try to find PDF or abstracts links
      const links = Array.from(doc.querySelectorAll('a'))
        .filter(a => a.href && (a.textContent.toLowerCase().includes('download') || a.textContent.toLowerCase().includes('pdf') || a.textContent.toLowerCase().includes('abstract')))
        .map(a => ({ text: a.textContent.trim(), href: a.href }));

      results[path] = {
        title,
        description: paragraphs.slice(0, 5).join('\n'), // just grab first bits of realistic text
        links
      };
    } catch(e) {
      console.error(e);
    }
  }
  
  fs.writeFileSync('scraped_pages.json', JSON.stringify(results, null, 2));
  console.log('Done!');
}
scrape();

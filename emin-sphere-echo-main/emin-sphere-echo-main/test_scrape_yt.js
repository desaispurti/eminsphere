import fs from 'fs';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const baseUrl = 'https://www.eminsphere.com';
const paths = [
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
      const res = await fetch(baseUrl + path);
      if (!res.ok) continue;
      const html = await res.text();
      const dom = new JSDOM(html);
      const doc = dom.window.document;
      
      const iframes = Array.from(doc.querySelectorAll('iframe'))
        .map(i => i.src)
        .filter(src => src && src.includes('youtube'));
        
      // Also wix sometimes uses data attributes or standard links
      const links = Array.from(doc.querySelectorAll('a'))
        .map(a => a.href)
        .filter(href => href && (href.includes('youtube.com') || href.includes('youtu.be')));
        
      results[path] = [...new Set([...iframes, ...links])];
    } catch(e) {}
  }
  fs.writeFileSync('yt_scraped.json', JSON.stringify(results, null, 2));
  console.log('done writing yt_scraped.json');
}
scrape();

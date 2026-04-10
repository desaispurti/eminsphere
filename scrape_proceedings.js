const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const urls = [
    { id: "copy-of-proceeding-icaeset-2026-26", url: "https://www.eminsphere.com/recent-conference-proceedings/proceedingicaidss-26" },
    { id: "copy-of-proceeding-icnse-26", url: "https://www.eminsphere.com/recent-conference-proceedings/copy-of-proceeding-icnse-26" },
    { id: "copy-of-proceeding-ictet-26", url: "https://www.eminsphere.com/recent-conference-proceedings/copy-of-proceeding-ictet-26" },
    { id: "copy-of-proceeding-icmess-26", url: "https://www.eminsphere.com/recent-conference-proceedings/copy-of-proceeding-icmess-26" },
    { id: "copy-of-proceeding-icasit-26", url: "https://www.eminsphere.com/recent-conference-proceedings/copy-of-proceeding-icasit-26" },
    { id: "proceeding-icasit-26", url: "https://www.eminsphere.com/recent-conference-proceedings/proceeding-icasit-26" },
    { id: "icmdia-25-1", url: "https://www.eminsphere.com/icmdia-25-1" },
    { id: "proceeding-icetsgc-25", url: "https://www.eminsphere.com/proceeding-icetsgc-25" },
    { id: "conference-proceedings", url: "https://www.eminsphere.com/conference-proceedings" }
  ];

  const results = {};

  for (const item of urls) {
    console.log(`Scraping: ${item.url}`);
    try {
      await page.goto(item.url, { waitUntil: 'load', timeout: 60000 });
      await new Promise(r => setTimeout(r, 4000));
      
      // Scroll to trigger lazy loading
      await page.evaluate(async () => {
        const docHeight = document.body.scrollHeight;
        for (let i = 0; i < docHeight; i += 500) {
          window.scrollTo(0, i);
          await new Promise(res => setTimeout(res, 200));
        }
      });
      await new Promise(r => setTimeout(r, 4000));
      
      // Extract videos and title
      const data = await page.evaluate(() => {
        const title = document.title.split('|')[0].trim();
        const frames = Array.from(document.querySelectorAll('iframe'));
        const videos = [];
        frames.forEach(f => {
          let src = f.src;
          if (src.includes('youtube.com/embed/')) {
            const vid = src.split('youtube.com/embed/')[1].split('?')[0];
            if (vid && !videos.includes(vid)) videos.push(vid);
          } else if (src.includes('youtube.com/watch?v=')) {
            const vid = src.split('youtube.com/watch?v=')[1].split('&')[0];
            if (vid && !videos.includes(vid)) videos.push(vid);
          }
        });
        
        let desc = "";
        let paragraphs = Array.from(document.querySelectorAll('p, span')).filter(el => {
            const t = el.innerText.trim();
            return t.length > 50 && !t.includes('Skip to Main Content') && !t.includes('Terms & Conditions');
        });
        if(paragraphs.length > 0) {
            desc = paragraphs[0].innerText.trim();
            if (paragraphs.length > 1) {
              desc += " " + paragraphs[1].innerText.trim();
            }
        }
        
        // Find papers
        let papers = [];
        let pdfLinks = Array.from(document.querySelectorAll('a')).filter(a => a.href.includes('.pdf') || a.href.includes('_files/ugd'));
        pdfLinks.forEach(link => {
            // Find parent container to extract title and author
            let container = link.closest('div') || link.parentElement;
            let text = container ? container.innerText.trim() : "";
            papers.push({ pdfLink: link.href, rawText: text });
        });
        
        return { title, videos, desc, papers, rawText: document.body.innerText.substring(0, 500) };
      });
      
      results[item.id] = data;
      console.log(`Found ${data.videos.length} videos and ${data.papers.length} papers for ${item.id}`);
    } catch(e) {
      console.error(`Error scraping ${item.url}: ${e}`);
    }
  }

  const outPath = path.join(__dirname, 'scraped_proceedings.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`Saved scraped proceedings to ${outPath}`);
  
  await browser.close();
})();

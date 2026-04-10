const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const urls = [
  'https://www.eminsphere.com/icaidss-26',
  'https://www.eminsphere.com/icaeset-2026',
  'https://www.eminsphere.com/icnse-26',
  'https://www.eminsphere.com/ictet-26',
  'https://www.eminsphere.com/icmess-26',
  'https://www.eminsphere.com/icasit-26',
  'https://www.eminsphere.com/icmdia-25',
  'https://www.eminsphere.com/icetsgc-25',
  'https://www.eminsphere.com/iccinet-25',
  'https://www.eminsphere.com/icamet25',
  'https://www.eminsphere.com/icenta-2024',
  'https://www.eminsphere.com/iceiis24',
  'https://www.eminsphere.com/icaids-2024',
];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080']
  });

  const outputDir = path.join(__dirname, 'scraped_content');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  for (const url of urls) {
    const slug = url.split('/').pop();
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Scraping: ${slug}`);
    console.log(`${'='.repeat(60)}`);
    
    try {
      // Navigate
      await page.goto(url, { waitUntil: 'load', timeout: 60000 });
      
      // Wait for Wix site to fully render - wait for main content area
      console.log('  Waiting for content render...');
      
      // Wait up to 15 seconds for content beyond nav to appear
      let bodyText = '';
      for (let attempt = 0; attempt < 15; attempt++) {
        await new Promise(r => setTimeout(r, 2000));
        
        bodyText = await page.evaluate(() => {
          return document.body.innerText || '';
        });
        
        if (bodyText.length > 200) {
          console.log(`  Content appeared after ${(attempt+1)*2}s (${bodyText.length} chars)`);
          break;
        }
      }
      
      // Scroll through entire page to trigger lazy content
      await page.evaluate(async () => {
        const delay = ms => new Promise(r => setTimeout(r, ms));
        const h = document.body.scrollHeight;
        for (let y = 0; y < h; y += 500) {
          window.scrollTo(0, y);
          await delay(200);
        }
        // Scroll back up
        window.scrollTo(0, 0);
        await delay(500);
      });
      
      // Wait after scroll
      await new Promise(r => setTimeout(r, 3000));
      
      // Final grab
      bodyText = await page.evaluate(() => {
        return document.body.innerText || '';
      });
      
      // Save to file
      const outPath = path.join(outputDir, `${slug}.txt`);
      fs.writeFileSync(outPath, bodyText);
      
      console.log(`  Total: ${bodyText.length} chars`);
      
      // Print content sections (skip nav by finding "More" or main content)
      const lines = bodyText.split('\n').filter(l => l.trim());
      const moreIdx = lines.findIndex(l => l.trim() === 'More');
      const contentLines = moreIdx >= 0 ? lines.slice(moreIdx + 1) : lines;
      
      console.log(`  Content lines: ${contentLines.length}`);
      console.log('  --- Content Start ---');
      contentLines.forEach(l => console.log(`  | ${l}`));
      console.log('  --- Content End ---');
      
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
    }
  }

  await browser.close();
  console.log('\n\nDone! All pages scraped.');
})();

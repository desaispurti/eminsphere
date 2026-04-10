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
  'https://www.eminsphere.com/icetsgc-25'
];

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const outputDir = path.join(__dirname, 'scraped_images');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Starting screenshot scraping...');

  for (const url of urls) {
    const slug = url.split('/').pop();
    console.log(`\nNavigating: ${slug}`);
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 60000 });
      
      // Wait to ensure main framework loads
      await new Promise(r => setTimeout(r, 6000));
      
      // Scroll down completely to trigger lazy load of components
      await page.evaluate(async () => {
        const docHeight = document.body.scrollHeight;
        for (let i = 0; i < docHeight; i += 300) {
          window.scrollTo(0, i);
          await new Promise(res => setTimeout(res, 200));
        }
        window.scrollTo(0, 0); // Scroll back up
      });
      
      await new Promise(r => setTimeout(r, 3000));
      
      const outPath = path.join(outputDir, `${slug}_full.png`);
      await page.screenshot({ path: outPath, fullPage: true });
      console.log(`Saved screenshot to ${outPath}`);
      
    } catch(err) {
      console.log(`ERROR: ${err.message}`);
    }
  }

  await browser.close();
  console.log('\nDone screenshots!');
})();

const puppeteer = require('puppeteer');
const fs = require('fs');

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
  'https://www.eminsphere.com/icaids-2024'
];

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const results = {};

  for (const url of urls) {
    try {
      console.log(`Scraping ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      // wait a bit for hydration
      await new Promise(r => setTimeout(r, 2000));
      const text = await page.evaluate(() => document.body.innerText);
      
      const id = url.split('/').pop();
      results[id] = text;
    } catch (err) {
      console.error(`Failed ${url}: ${err.message}`);
    }
  }

  await browser.close();
  fs.writeFileSync('scraped_texts.json', JSON.stringify(results, null, 2));
  console.log('Done scraping!');
}

run();

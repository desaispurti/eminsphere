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

  const url = "https://www.eminsphere.com/recent-conference-proceedings/proceedingicaidss-26";
  console.log(`Navigating to ${url}...`);
  
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 6000));
  
  await page.evaluate(async () => {
    const docHeight = document.body.scrollHeight;
    for (let i = 0; i < docHeight; i += 500) {
      window.scrollTo(0, i);
      await new Promise(res => setTimeout(res, 400));
    }
    window.scrollTo(0, 0);
  });
  
  await new Promise(r => setTimeout(r, 4000));
  
  const outPath = path.join(__dirname, 'screenshot_proceeding_icaidss.png');
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Saved screenshot!');
  
  await browser.close();
})();

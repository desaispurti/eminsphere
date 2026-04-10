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
  
  console.log('Navigating...');
  await page.goto('https://www.eminsphere.com/icaidss-26', { waitUntil: 'networkidle2', timeout: 60000 });
  
  console.log('Waiting for 10 seconds...');
  await new Promise(r => setTimeout(r, 10000));
  
  // Take screenshot to see what's actually rendered
  await page.screenshot({ path: path.join(__dirname, 'debug_screenshot.png') });
  console.log('Screenshot saved to debug_screenshot.png');
  
  // Try extracting innerText of specific main containers
  const content = await page.evaluate(() => {
    // Try to find the common wix main container
    const siteContainer = document.getElementById('SITE_CONTAINER');
    const masterPage = document.getElementById('masterPage');
    
    return {
      bodyText: document.body.innerText.substring(0, 500),
      siteContainerText: siteContainer ? siteContainer.innerText.substring(0, 500) : 'Not found',
      masterPageText: masterPage ? masterPage.innerText.substring(0, 500) : 'Not found',
      htmlSnapshot: document.body.innerHTML.substring(0, 1000)
    };
  });
  
  console.log('Extracted details:', content);
  
  await browser.close();
})();

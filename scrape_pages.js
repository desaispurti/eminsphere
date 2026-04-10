// Simple fetch-based scraper - won't work for JS-rendered, but let's check what comes through
const https = require('https');
const http = require('http');

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

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Wix stores page data in JSON within script tags - let's extract it
async function extractWixData(url) {
  const html = await fetch(url);
  const slug = url.split('/').pop();
  
  // Look for rich text content in the HTML
  const richTextRegex = /\"text\":\s*\"(<[^"]*>)/g;
  const texts = [];
  let match;
  while ((match = richTextRegex.exec(html)) !== null) {
    // Decode the text and strip HTML tags
    let text = match[1]
      .replace(/\\u003c/g, '<')
      .replace(/\\u003e/g, '>')
      .replace(/\\u0026/g, '&')
      .replace(/\\n/g, '\n')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (text.length > 20 && !text.includes('specs.') && !text.includes('thunderbolt')) {
      texts.push(text);
    }
  }
  
  // Also look for structured data
  const structuredDataRegex = /"type":"application\/ld\+json","innerHtml":"([^}]*})"/g;
  while ((match = structuredDataRegex.exec(html)) !== null) {
    texts.push('STRUCTURED: ' + match[1]);
  }

  console.log(`\n${'='.repeat(80)}`);
  console.log(`PAGE: ${slug} (${url})`);
  console.log(`${'='.repeat(80)}`);
  if (texts.length > 0) {
    texts.forEach((t, i) => console.log(`[${i}] ${t.substring(0, 500)}`));
  } else {
    console.log('No rich text content found in HTML source');
  }
}

(async () => {
  for (const url of urls) {
    try {
      await extractWixData(url);
    } catch(e) {
      console.log(`Error for ${url}: ${e.message}`);
    }
  }
})();

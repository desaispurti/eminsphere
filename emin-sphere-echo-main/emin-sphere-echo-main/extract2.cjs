const fs = require('fs');
const path = require('path');
const htmlRaw = fs.readFileSync('c:/Users/GCS/Desktop/eminsphere/emin-sphere-echo-main/emin-sphere-echo-main/public/assets/ICQADTS-2026 _ Eminsphere.html', 'utf8');

const cheerio = require('cheerio'); // if installed
try {
  const $ = cheerio.load(htmlRaw);
  const speakers = [];
  $('h4').each((i, el) => {
      let name = $(el).text().trim();
      let parent = $(el).closest('div');
      let img = parent.find('img').attr('src');
      let texts = [];
      parent.find('span, p').each((j, textEl) => {
        let t = $(textEl).text().trim();
        if (t && t !== name && !texts.includes(t)) texts.push(t);
      });
      if (name && img) {
         console.log(name, img);
      }
  });
} catch(e) {
  const regex = /<img.*?src="([^"]+)".*?>/g;
  let match;
  while ((match = regex.exec(htmlRaw)) !== null) {
      console.log(match[1]);
  }
}

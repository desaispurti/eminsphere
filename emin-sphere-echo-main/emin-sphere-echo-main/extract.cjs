const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('c:/Users/GCS/Desktop/eminsphere/emin-sphere-echo-main/emin-sphere-echo-main/public/assets/ICQADTS-2026 _ Eminsphere.html', 'utf8');
const $ = cheerio.load(html);

const speakers = [];
$('div').each((i, el) => {
    const text = $(el).text().trim();
    if ($(el).find('img').length === 1 && $(el).find('h4, span[style*="font-size"]').length > 0) {
        const img = $(el).find('img').attr('src');
        const nameNode = $(el).find('span').first();
        if (img && img.includes('308') && nameNode.text().length > 3) {
            // maybe print the whole block text so we can manually pair it
            let lines = [];
            $(el).find('span').each((j, sel) => {
                let text = $(sel).text().trim();
                if(text && text !== '' && text !== '​') lines.push(text);
            });
            speakers.push({img, lines});
        }
    }
});

const dedup = {};
speakers.forEach(s => {
    if (!dedup[s.img]) dedup[s.img] = [];
    dedup[s.img].push(...s.lines);
});
Object.keys(dedup).forEach(k => {
    let unq = [...new Set(dedup[k])];
    console.log(k);
    console.log(unq.join(" | "));
    console.log('-----');
});

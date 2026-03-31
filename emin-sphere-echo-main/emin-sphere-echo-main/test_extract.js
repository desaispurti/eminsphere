import fs from 'fs';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const html = fs.readFileSync('site.html', 'utf8');
const dom = new JSDOM(html);
const doc = dom.window.document;

function parseGlimpses() {
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const galleries = [];
    
    headings.forEach(h => {
        if(h.textContent.includes('Glimpses of ')) {
            const temp = h.textContent.split('Date: ');
            const title = temp[0].trim();
            const date = temp[1] ? temp[1].replace(/​/g, '').trim() : '';
            
            // find nearest images
            let nextEl = h.nextElementSibling;
            let images = [];
            while(nextEl && images.length === 0) {
               // Wix structure is deeply nested, let's search siblings and parents
               break; 
            }
        }
    });
}
// since Wix is very nested, let's just find the text "Glimpses of " 
// and visually map it, or we can just print ALL images because there are not that many on the site.
const allImages = Array.from(doc.querySelectorAll('img[src*="static.wixstatic.com/media/"]'))
                 .map(img => img.src)
                 .filter(src => !src.includes('logo') && !src.includes('profile'));

fs.writeFileSync('imgs.json', JSON.stringify(allImages, null, 2));
console.log('done writing to imgs.json');

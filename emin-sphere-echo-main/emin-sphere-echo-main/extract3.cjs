const fs = require('fs');
const htmlRaw = fs.readFileSync('c:/Users/GCS/Desktop/eminsphere/emin-sphere-echo-main/emin-sphere-echo-main/public/assets/ICQADTS-2026 _ Eminsphere.html', 'utf8');

// The divs usually consist of an img followed by span elements or h4.
// Let's print out all texts and images nicely grouped to easily extract.

let count = 0;
const regex = /<img[^>]*src="([^"]+)"[^>]*>.*?<h4[^>]*><span[^>]*><span[^>]*>([^<]+)<\/span><\/span><\/h4>.*?<p[^>]*><span[^>]*>(.*?)<\/span><\/p>/gsi;

let match;
while ((match = regex.exec(htmlRaw)) !== null) {
    if (count > 200) break;
    let url = match[1];
    let name = match[2];
    let title = match[3];
    console.log(name, "|", title, "|", url);
    count++;
}

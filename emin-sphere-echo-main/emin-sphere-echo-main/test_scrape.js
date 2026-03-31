import fs from 'fs';
fetch('https://www.eminsphere.com/')
  .then(res => res.text())
  .then(html => {
    fs.writeFileSync('site.html', html);
    console.log("Written to site.html");
  })
  .catch(console.error);

const fs = require('fs');
const path = require('path');

// Target directory containing your HTML files and scraped assets (now scanning everything)
const TARGET_DIR = __dirname;

// Utility to recursively find files with specific extensions
function findFiles(dir, exts, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  if (dir.includes('node_modules') || dir.includes('.git')) return fileList; // Skip heavy/unnecessary folders
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findFiles(filePath, exts, fileList);
    } else {
      if (exts.some(ext => filePath.toLowerCase().endsWith(ext))) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

// Find all HTML and CSS files
const htmlFiles = findFiles(TARGET_DIR, ['.html']);
const cssFiles = findFiles(TARGET_DIR, ['.css']);

// Find all image files in the target directory
const imageFiles = findFiles(TARGET_DIR, ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']);

// Create a map of lowercase image filename to absolute path for fuzzy matching
const imageMap = new Map();
for (const imgPath of imageFiles) {
  imageMap.set(path.basename(imgPath).toLowerCase(), imgPath);
}

console.log(`Found ${htmlFiles.length} HTML files and ${cssFiles.length} CSS files.`);
console.log(`Found ${imageFiles.length} image files to map.`);

// Regex patterns for finding image URLs
const htmlImgSrcRegex = /src=["'](.*?)["']/gi;
const cssUrlRegex = /url\(['"]?(.*?)['"]?\)/gi;

function fixPathsInFile(filePath, regex) {
  let content = fs.readFileSync(filePath, 'utf8');
  let match;
  let fileUpdated = false;

  // We need to collect replacements so we don't mess up the regex loop
  const replacements = [];

  while ((match = regex.exec(content)) !== null) {
    const originalSrc = match[1];
    
    // Ignore external URLs or inline data
    if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      continue;
    }

    const decodedSrc = decodeURIComponent(originalSrc);
    const fileName = path.basename(decodedSrc).toLowerCase();

    if (imageMap.has(fileName)) {
      const correctImgPath = imageMap.get(fileName);
      
      // Calculate relative path from the current file to the correct image file
      const relativePath = path.relative(path.dirname(filePath), correctImgPath);
      // Ensure forward slashes for web paths
      let normalizedRelativePath = relativePath.replace(/\\/g, '/');
      if (!normalizedRelativePath.startsWith('.')) {
        normalizedRelativePath = './' + normalizedRelativePath;
      }

      if (originalSrc !== normalizedRelativePath) {
        replacements.push({
          target: match[0],
          replacement: match[0].replace(originalSrc, normalizedRelativePath)
        });
      }
    } else {
      // If image is missing, we could add an HTML comment (only for HTML files)
      if (filePath.endsWith('.html')) {
        replacements.push({
           target: match[0],
           replacement: match[0] + ` <!-- MISSING IMAGE: ${originalSrc} -->`
        });
      }
    }
  }

  // Apply replacements
  if (replacements.length > 0) {
    for (const { target, replacement } of replacements) {
       content = content.replace(target, replacement);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated paths in ${path.relative(__dirname, filePath)}`);
  }
}

// Process all files
htmlFiles.forEach(file => fixPathsInFile(file, htmlImgSrcRegex));
cssFiles.forEach(file => fixPathsInFile(file, cssUrlRegex));

console.log('Cross-referencing and updates completed!');

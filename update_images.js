const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.js')) {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('app');
let replCount = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('MasterLayoutHeader') && content.includes('rightImage=')) {
    const newContent = content.replace(/rightImage=[\"']\/images\/[^\"']+[\"']/g, 'rightImage=\"/images/MasterLayoutBG.png\"');
    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      replCount++;
      console.log('Updated', file);
    }
  }
}
console.log('Total files updated:', replCount);

const fs = require('fs');
const https = require('https');
const path = require('path');

const FIGMA_TOKEN = 'YOUR_FIGMA_TOKEN_HERE';
const FILE_KEY = 'vlSwuedgMOdAGz1XJX3WIi';

// Node IDs of images/logos to extract. This is an example of extracting banner and logos
const NODE_IDS = [
  '31:71', // Graphic_Elements
  '0:1'    // Example wrapper
];

function fetchFigmaImages() {
  console.log('Connecting to Figma API (MCP Interface)...');
  const ids = NODE_IDS.join(',');
  const options = {
    hostname: 'api.figma.com',
    path: `/v1/images/${FILE_KEY}?ids=${ids}&format=png`,
    headers: { 'X-Figma-Token': FIGMA_TOKEN }
  };

  https.get(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.images) {
          console.log('Successfully extracted image URLs from Figma nodes:');
          Object.entries(json.images).forEach(([id, url]) => {
            console.log(`Node ${id}: ${url}`);
            if (url) {
              downloadImage(url, `figma_asset_${id.replace(':', '_')}.png`);
            }
          });
        }
      } catch (e) {
        console.error('Error parsing response from Figma:', e);
      }
    });
  }).on('error', console.error);
}

function downloadImage(url, filename) {
  const dest = path.join(__dirname, '../public/images', filename);
  const file = fs.createWriteStream(dest);
  https.get(url, (res) => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename} successfully into /public/images/.`);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}

fetchFigmaImages();

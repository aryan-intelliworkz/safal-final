const fs = require('fs');
const https = require('https');

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/vlSwuedgMOdAGz1XJX3WIi?depth=2`,
  method: 'GET',
  headers: {
    'X-Figma-Token': 'YOUR_FIGMA_TOKEN_HERE'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.document) {
        fs.writeFileSync('figma_data.json', JSON.stringify(json.document, null, 2));
        console.log('Saved figma_data.json successfully.');
      } else {
        console.error('Error in response:', json);
      }
    } catch (e) {
      console.error('Error parsing JSON', e);
    }
  });
}).on('error', (e) => {
  console.error(e);
});

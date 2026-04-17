const fs = require('fs');
const content = fs.readFileSync('app/page.js', 'utf-8');

const targetIndex = content.indexOf('/* ═══════════════════════════════════════════════════════\n   FOOTER');
const afterFooterIndex = content.indexOf('/* ═══════════════════════════════════════════════════════\n   MAIN PAGE');

if (targetIndex !== -1 && afterFooterIndex !== -1) {
    const updated = content.substring(0, targetIndex) + content.substring(afterFooterIndex);
    fs.writeFileSync('app/page.js', updated);
    console.log('Removed Footer function from app/page.js');
} else {
    console.log('Could not find exact text match. Target:', targetIndex, 'After:', afterFooterIndex);
}

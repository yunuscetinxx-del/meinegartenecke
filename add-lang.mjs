import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'fs';

const LANG_TAG = '<script src="/lang.js" defer></script>';

const htmlFiles = globSync('downloaded-site/**/*.html');
let count = 0;

for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8');
  // لا تضف مرتين
  if (html.includes('lang.js')) { count++; continue; }
  if (html.includes('</body>')) {
    html = html.replace('</body>', LANG_TAG + '\n</body>');
    writeFileSync(file, html, 'utf8');
    count++;
  }
}
console.log(`✓ تم إضافة lang.js لـ ${count} ملف`);

import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'fs';

const INJECT = '\n<script src="/floating-buttons.js" defer></script>\n';

const htmlFiles = globSync('downloaded-site/**/*.html');
let count = 0;

for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8');

  // احذف الحقنة القديمة بالكامل (من تعليق WhatsApp حتى آخر </script> قبل </body>)
  html = html.replace(/\s*<!-- ===== WhatsApp Button ===== -->[\s\S]*?<\/script>\s*/g, '\n');
  // احذف أي سكريبت floating-buttons قديم
  html = html.replace(/\s*<!-- floating buttons -->\s*<script[^>]*floating-buttons[^>]*><\/script>\s*/g, '\n');
  html = html.replace(/\s*<script[^>]*floating-buttons[^>]*><\/script>\s*/g, '\n');

  if (html.includes('</body>')) {
    html = html.replace('</body>', INJECT + '</body>');
    writeFileSync(file, html, 'utf8');
    count++;
  }
}

console.log(`✓ تم تحديث ${count} ملف - الأزرار الآن عبر floating-buttons.js`);

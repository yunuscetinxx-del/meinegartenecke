import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const ROOT = './downloaded-site';

const REPLACEMENTS = [
  // العنوان الرئيسي
  [/Gettree\s*[-–|]\s*Garden\s*&amp;\s*Landscaping[^<]*/gi, 'Meine Garten Ecke - Garten &amp; Landschaftsbau'],
  [/Gettree\s*[-–|]\s*Garden\s*&\s*Landscaping[^<]*/gi,     'Meine Garten Ecke - Garten &amp; Landschaftsbau'],
  [/Gettree/gi, 'Meine Garten Ecke'],
  [/gettreenextjs\.vercel\.app/gi, 'meinegartenecke.de'],
  // الـ meta description
  [/content="Gettree/gi, 'content="Meine Garten Ecke'],
  // og:site_name
  [/property="og:site_name"\s+content="[^"]*"/gi, 'property="og:site_name" content="meinegartenecke.de"'],
  // og:url
  [/https:\/\/gettreenextjs\.vercel\.app/gi, 'https://meinegartenecke.de'],
];

function getAllHtmlFiles(dir) {
  let results = [];
  for (const item of readdirSync(dir)) {
    const full = join(dir, item);
    if (statSync(full).isDirectory()) results = results.concat(getAllHtmlFiles(full));
    else if (item.endsWith('.html')) results.push(full);
  }
  return results;
}

const files = getAllHtmlFiles(ROOT);
let count = 0;

for (const f of files) {
  let c = readFileSync(f, 'utf8');
  let changed = false;
  for (const [pattern, replacement] of REPLACEMENTS) {
    const newC = c.replace(pattern, replacement);
    if (newC !== c) { c = newC; changed = true; }
  }
  if (changed) { writeFileSync(f, c, 'utf8'); count++; }
}

console.log(`✓ تم تغيير الاسم في ${count} ملف إلى "Meine Garten Ecke" / meinegartenecke.de`);

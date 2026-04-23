import https from 'https';
import http from 'http';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';

const BASE_URL = 'https://gettreenextjs.vercel.app';
const OUTPUT_DIR = './downloaded-site';

const missingFiles = [
  '/_next/static/chunks/polyfills-42372ed130431b0a.js',
  '/images/blog/avt1.jpg',
  '/images/blog/avt2.jpg',
  '/images/blog/close-up-picture-hand-holding-wo.jpg',
  '/images/blog/medium-shot-woman-holding-plant-pot.jpg',
  '/images/blog/planting-flowers-thumb.jpg',
  '/images/blog/plants-pot-with-watering-can.jpg',
  '/images/blog/portrait-smiling-young-woman-holding-colorful-petunias-wooden-crate.jpg',
  '/images/blog/woman-plant-the-tree.jpg',
  '/images/blog/young-beautiful-florist-watering-flowers.jpg',
  '/images/case-study/close-up-picture-hand-holding-wooden-tray-which-full-pots-plants.jpg',
  '/images/case-study/plant-tree.jpg',
  '/images/case-study/plant-tree2.jpg',
  '/images/case-study/working-in-garden.jpg',
  '/images/Counter/the-man-working-tree.jpg',
  '/images/home/close-up-planting-flowers-pot.jpg',
  '/images/home/slidehome2.png',
  '/images/home/young-woman-with-their-garden-crops.png',
  '/images/news/medium-shot-woman-online-meeting.jpg',
  '/images/news/young-workers-greenhouse-feed-flowers-concept-caring-plants.jpg',
  '/images/profolio/home1-item1.jpg',
  '/images/profolio/home1-item2.jpg',
  '/images/profolio/home1-item3.jpg',
  '/images/profolio/home1-item4.jpg',
  '/images/profolio/profolio-image-1.jpg',
  '/images/profolio/profolio-image-2.jpg',
  '/images/profolio/profolio-image-3.jpg',
  '/images/profolio/profolio-image-4.jpg',
  '/images/profolio/profolio-image-5.jpg',
  '/images/services/box-flowers-green-garden.jpg',
  '/images/services/medium-shot-woman-holding-plant-pot.jpg',
  '/images/services/portrait-smiling-young-woman-holding-colorful-petunias-wooden-crate.jpg',
  '/images/services/portrait-woman-gardening.jpg',
  '/images/shop/item1.png',
  '/images/shop/item2.png',
  '/images/shop/item3.png',
  '/images/shop/item4.png',
  '/images/team/staff-box1.jpg',
  '/images/team/staff-box2.jpg',
  '/images/team/staff-box3.jpg',
  '/images/testimonials/young-beautiful-florist-watering-flowers.jpg',
];

function downloadFile(urlPath) {
  return new Promise((resolve) => {
    const url = BASE_URL + urlPath;
    // Fix double slash in path
    const cleanPath = urlPath.replace('//', '/');
    const outputPath = join(OUTPUT_DIR, cleanPath);
    const dir = dirname(outputPath);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    const chunks = [];
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        const loc = res.headers.location;
        if (loc && loc.startsWith('http')) {
          const proto = loc.startsWith('https') ? https : http;
          proto.get(loc, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
            res2.on('data', c => chunks.push(c));
            res2.on('end', () => { try { writeFileSync(outputPath, Buffer.concat(chunks)); } catch(e){} resolve({ path: urlPath, status: res.statusCode }); });
          }).on('error', () => resolve({ path: urlPath, status: 'error' }));
        } else {
          resolve({ path: urlPath, status: res.statusCode });
        }
        return;
      }
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        if (res.statusCode === 200) {
          try { writeFileSync(outputPath, Buffer.concat(chunks)); } catch(e){}
          console.log(`  ✓ ${urlPath} (${res.statusCode})`);
        } else {
          console.log(`  ✗ ${urlPath} (${res.statusCode})`);
        }
        resolve({ path: urlPath, status: res.statusCode });
      });
      res.on('error', () => resolve({ path: urlPath, status: 'error' }));
    });
    req.on('error', () => {
      console.log(`  ✗ ${urlPath} (network error)`);
      resolve({ path: urlPath, status: 'error' });
    });
  });
}

console.log(`تحميل ${missingFiles.length} ملف مفقود...\n`);

const results = [];
for (const f of missingFiles) {
  const r = await downloadFile(f);
  results.push(r);
}

const ok = results.filter(r => r.status === 200).length;
const fail = results.filter(r => r.status !== 200).length;
console.log(`\nتم: ${ok} ✓   فشل: ${fail} ✗`);
if (fail > 0) {
  console.log('\nالملفات التي لم تُحمَّل:');
  results.filter(r => r.status !== 200).forEach(r => console.log(' -', r.path, '→', r.status));
}

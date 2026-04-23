import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname, extname } from 'path';
import { URL } from 'url';
import https from 'https';
import http from 'http';

const BASE_URL = 'https://gettreenextjs.vercel.app';
const OUTPUT_DIR = './downloaded-site';

const visited = new Set();
const toVisit = new Set(['/']);
const downloadedAssets = new Set();

function sanitizePath(urlPath) {
  let p = urlPath.split('?')[0].split('#')[0];
  if (!p || p === '/') p = '/index.html';
  else if (!extname(p)) p = p.replace(/\/$/, '') + '/index.html';
  return p.replace(/[<>:"|?*]/g, '_');
}

function ensureDir(filePath) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function downloadFile(url, outputPath) {
  return new Promise((resolve) => {
    if (downloadedAssets.has(url)) return resolve();
    downloadedAssets.add(url);
    ensureDir(outputPath);
    const proto = url.startsWith('https') ? https : http;
    const file = require('fs').createWriteStream(outputPath);
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return downloadFile(res.headers.location, outputPath).then(resolve);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', () => { file.close(); resolve(); });
  });
}

function downloadFilePromise(url, outputPath) {
  return new Promise((resolve) => {
    if (downloadedAssets.has(url)) return resolve();
    downloadedAssets.add(url);
    ensureDir(outputPath);
    
    const proto = url.startsWith('https') ? https : http;
    const chunks = [];
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFilePromise(res.headers.location, outputPath).then(resolve);
      }
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        try {
          writeFileSync(outputPath, Buffer.concat(chunks));
        } catch(e) {}
        resolve();
      });
      res.on('error', resolve);
    }).on('error', resolve);
  });
}

async function main() {
  console.log('تشغيل المتصفح...');
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const allAssets = new Set();
  
  while (toVisit.size > 0) {
    const [path] = toVisit;
    toVisit.delete(path);
    if (visited.has(path)) continue;
    visited.add(path);
    
    const pageUrl = BASE_URL + path;
    console.log('زيارة:', pageUrl);
    
    const page = await browser.newPage();
    
    // اعتراض الطلبات لجمع الأصول
    page.on('request', req => {
      const url = req.url();
      if (url.startsWith(BASE_URL)) {
        allAssets.add(url);
      }
    });
    
    try {
      await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));
      
      // حفظ HTML
      const html = await page.content();
      const safePath = sanitizePath(path);
      const outputPath = join(OUTPUT_DIR, safePath);
      ensureDir(outputPath);
      writeFileSync(outputPath, html, 'utf8');
      console.log('  حفظ HTML:', outputPath);
      
      // جمع روابط داخلية
      const links = await page.evaluate((base) => {
        const anchors = Array.from(document.querySelectorAll('a[href]'));
        return anchors.map(a => a.getAttribute('href')).filter(h => h);
      }, BASE_URL);
      
      for (const link of links) {
        try {
          let href = link;
          if (href.startsWith(BASE_URL)) {
            href = href.slice(BASE_URL.length) || '/';
          }
          if (href.startsWith('/') && !href.startsWith('//') && !visited.has(href)) {
            toVisit.add(href);
          }
        } catch(e) {}
      }
      
    } catch(e) {
      console.log('  خطأ:', e.message);
    }
    
    await page.close();
  }
  
  await browser.close();
  
  // تحميل جميع الأصول (CSS, JS, صور)
  console.log('\nتحميل الأصول...');
  const assetPromises = [];
  
  for (const assetUrl of allAssets) {
    try {
      const parsed = new URL(assetUrl);
      let assetPath = parsed.pathname;
      if (!extname(assetPath)) assetPath += '.html';
      const outputPath = join(OUTPUT_DIR, assetPath.replace(/[<>:"|?*]/g, '_'));
      
      if (!downloadedAssets.has(assetUrl)) {
        console.log('  تحميل:', assetUrl);
        assetPromises.push(downloadFilePromise(assetUrl, outputPath));
      }
    } catch(e) {}
  }
  
  await Promise.all(assetPromises);
  
  console.log('\n✓ اكتمل التحميل!');
  console.log('الصفحات:', visited.size);
  console.log('الأصول:', downloadedAssets.size);
}

main().catch(console.error);

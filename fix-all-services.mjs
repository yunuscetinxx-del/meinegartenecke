/**
 * fix-all-services.mjs
 * 1. Injects mgecke-services-patch.js into services.html, index.html, home-2.html
 * 2. Fixes nav Home dropdown in ALL html files (both desktop + mobile nav)
 * 3. Directly replaces flat-services HTML in index.html and home-2.html
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const SITE = 'e:/procat/mein garden/downloaded-site';

/* ─── All HTML files ─────────────────────────────────────────────────────── */
const ALL_HTML = [
  'index.html','home-2.html','services.html','service-details.html',
  'about.html','contact.html','blog.html','blog-detail.html',
  'faq.html','case-study.html','case-details.html','team.html',
];

/* ─── Nav patterns to fix ────────────────────────────────────────────────── */
const OLD_NAV_DESKTOP =
  '<li class="menu-item-has-children "><a title="" href="/">Home</a>' +
  '<ul class="sub-menu">' +
  '<li class=""><a title="" href="/">Home 01</a></li>' +
  '<li class=""><a title="" href="/home-2">Home 02</a></li>' +
  '</ul></li>';
const NEW_NAV_DESKTOP = '<li class="current-menu-item"><a title="" href="/">Home</a></li>';

const OLD_NAV_MOBILE =
  '<li class="menu-item menu-item-has-children   "><a href="#" class="down">Home</a>' +
  '<span class="btn-submenu"></span>' +
  '<ul class="sub-menu">' +
  '<li class="menu-item "><a href="/">Home 01</a></li>' +
  '<li class="menu-item "><a href="/home-2">Home 02</a></li>' +
  '</ul></li>';
const NEW_NAV_MOBILE = '<li class="menu-item current-menu-item"><a href="/" class="">Home</a></li>';

/* ─── Script injection tag ───────────────────────────────────────────────── */
const PATCH_TAG = '<script src="/mgecke-services-patch.js"></script>';
const PATCH_PAGES = ['services.html', 'index.html', 'home-2.html'];

/* ─── flat-services section replacement (index + home-2) ─────────────────── */
const NEW_ICON_BOXES =
  '<div class="item-four-column">' +
  '<div class="our-services-box hover-up-style2 mg-bottom30 wow fadeInDown">' +
  '<div class="our-services-overlay"></div>' +
  '<span class="tf-icon icon-size icon-icon-farming-layer"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>' +
  '<div class="content-features">' +
  '<a href="/service-details"><h3 class="section-heading-jost-size22">Gartengestaltung</h3></a>' +
  '<p class="section-desc">Professionelle Gartenplanung und Gestaltung nach Ihren Wünschen – von der Idee bis zur Umsetzung.</p>' +
  '<div class="link2 link-style2"><a class="read-more" href="/service-details">Mehr erfahren</a></div>' +
  '</div>' +
  '</div></div>' +
  '<div class="item-four-column">' +
  '<div class="our-services-box mg-bottom30 wow fadeInUp">' +
  '<div class="our-services-overlay active"></div>' +
  '<span class="tf-icon icon-size3 icon-Group-7527"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>' +
  '<div class="content-features link-style3">' +
  '<a href="/service-details"><h3 class="section-heading-jost-size22">Gartenreinigung &amp; Pflege</h3></a>' +
  '<p class="section-desc white">Laubbeseitigung, Unkrautjäten, Beschönigung – Ihr Garten stets sauber und gepflegt.</p>' +
  '<div class="link2 link-style3"><a class="read-more" href="/service-details">Mehr erfahren</a></div>' +
  '</div>' +
  '</div></div>' +
  '<div class="item-four-column">' +
  '<div class="our-services-box hover-up-style2 wow fadeInLeft">' +
  '<div class="our-services-overlay"></div>' +
  '<span class="tf-icon icon-size2 icon-Group-7526"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>' +
  '<div class="content-features">' +
  '<a href="/service-details"><h3 class="section-heading-jost-size22">Gartenbeleuchtung</h3></a>' +
  '<p class="section-desc">Stimmungsvolle LED-Beleuchtung für Wege, Terrassen und Beete – schön und energieeffizient.</p>' +
  '<div class="link2 link-style2"><a class="read-more" href="/service-details">Mehr erfahren</a></div>' +
  '</div>' +
  '</div></div>' +
  '<div class="item-four-column">' +
  '<div class="our-services-box hover-up-style2 wow fadeInRight">' +
  '<div class="our-services-overlay"></div>' +
  '<span class="tf-icon icon-size4 icon-Group-7528"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>' +
  '<div class="content-features">' +
  '<a href="/service-details"><h3 class="section-heading-jost-size22">Gartenmöbel &amp; Stühle</h3></a>' +
  '<p class="section-desc">Hochwertige Gartenmöbel – Stühle, Tische und Lounges für entspannte Stunden im Freien.</p>' +
  '<div class="link2 link-style2"><a class="read-more" href="/service-details">Mehr erfahren</a></div>' +
  '</div>' +
  '</div></div>';

/* ─── Also fix the flat-services JSON in index.html ─────────────────────── */
// Replace old service titles in the JSON section (escaped)
const JSON_SERVICE_FIXES = [
  ['children\\":{\\"href\\":\\"/service-details\\",\\"children\\":{\\"$\\":\\"h3\\",\\"className\\":\\"section-heading-jost-size22\\",\\"children\\":\\"Landscaping\\"', 'SKIP'],
  // Use simpler targeted replacements:
  ['"children":"Landscaping"', '"children":"Gartengestaltung"'],
  ['"children":"Pruning plants"', '"children":"Gartenreinigung \\u0026 Pflege"'],
  ['"children":"Irrigation &amp; Drainage"', '"children":"Gartenbeleuchtung"'],
  ['"children":"Garden Maintenance"', '"children":"Gartenmöbel \\u0026 Stühle"'],
  // Escaped versions:
  ['\\"children\\":\\"Landscaping\\"', '\\"children\\":\\"Gartengestaltung\\"'],
  ['\\"children\\":\\"Pruning plants\\"', '\\"children\\":\\"Gartenreinigung \\\\u0026 Pflege\\"'],
  ['\\"children\\":\\"Irrigation &amp; Drainage\\"', '\\"children\\":\\"Gartenbeleuchtung\\"'],
  ['\\"children\\":\\"Garden Maintenance\\"', '\\"children\\":\\"Gartenmöbel \\\\u0026 Stühle\\"'],
  // Also fix old service descriptions in JSON
  ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,',
   'Professionelle Gartendienstleistungen für Ihren perfekten Garten in Berlin.'],
  // Old image refs in JSON (services.html)
  ['artical-post-1.jpg', 'unsplash-gartengestaltung.jpg'],
  ['artical-post-2.jpg', 'unsplash-gartenreinigung.jpg'],
  ['artical-post-3.jpg', 'unsplash-gartenbeleuchtung.jpg'],
];

/* ─── Also fix services.html JSON ───────────────────────────────────────── */
const SERVICES_JSON_FIXES = [
  // Old template titles in JSON (escaped)
  ['\\"children\\":\\"Landscaping\\"', '\\"children\\":\\"Gartengestaltung\\"'],
  ['\\"children\\":\\"Pruning plants\\"', '\\"children\\":\\"Gartenreinigung \\\\u0026 Pflege\\"'],
  ['\\"children\\":\\"Lawn Maintenance\\"', '\\"children\\":\\"Gartenbeleuchtung\\"'],
  // Old descriptions in JSON  
  ['\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo\\"',
   '\\"Professionelle Gartendienstleistungen für Berlin und Umgebung.\\"'],
  // Old image paths in JSON
  ['\\"src\\":\\"/images/why-choose-us/artical-post-1.jpg\\"',
   '\\"src\\":\\"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=740\\u0026h=480\\u0026fit=crop\\u0026q=80\\"'],
  ['\\"src\\":\\"/images/why-choose-us/artical-post-2.jpg\\"',
   '\\"src\\":\\"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=740\\u0026h=480\\u0026fit=crop\\u0026q=80\\"'],
  ['\\"src\\":\\"/images/why-choose-us/artical-post-3.jpg\\"',
   '\\"src\\":\\"https://images.unsplash.com/photo-1558075139-f6adb7d0baf8?w=740\\u0026h=480\\u0026fit=crop\\u0026q=80\\"'],
  ['\\"alt\\":\\"images\\"', '\\"alt\\":\\"Gartenservice Berlin\\"'],
];

let totalFixed = 0;

for (const fname of ALL_HTML) {
  const fpath = join(SITE, fname);
  let html;
  try { html = readFileSync(fpath, 'utf8'); } catch { continue; }
  const orig = html;
  let changes = 0;

  /* ── Nav fix ────────────────────────────────────────────────────────── */
  const beforeNav = html;
  html = html.replaceAll(OLD_NAV_DESKTOP, NEW_NAV_DESKTOP);
  html = html.replaceAll(OLD_NAV_MOBILE, NEW_NAV_MOBILE);
  if (html !== beforeNav) changes++;

  /* ── Inject patch script ────────────────────────────────────────────── */
  if (PATCH_PAGES.includes(fname) && !html.includes('mgecke-services-patch.js')) {
    html = html.replace('</body>', PATCH_TAG + '</body>');
    changes++;
  }

  /* ── flat-services HTML section (index + home-2) ────────────────────── */
  if (fname === 'index.html' || fname === 'home-2.html') {
    // Find the 4 column divs inside flat-services section
    const FS_START = '<section class="flat-services">';
    const FS_END = '</section>';
    const si = html.indexOf(FS_START);
    if (si !== -1) {
      const ei = html.indexOf(FS_END, si);
      if (ei !== -1) {
        const oldSection = html.slice(si, ei + FS_END.length);
        // Replace the 4 item-four-column divs
        const COL_PATTERN = /<div class="item-four-column">[\s\S]*?(?=<div class="item-four-column">|<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/;
        // Simpler: find first item-four-column and last closing tag
        const firstCol = oldSection.indexOf('<div class="item-four-column">');
        if (firstCol !== -1) {
          const newSection = oldSection.slice(0, firstCol) + NEW_ICON_BOXES + oldSection.slice(oldSection.lastIndexOf('</div></div></div>'));
          html = html.slice(0, si) + newSection + html.slice(ei + FS_END.length);
          changes++;
        }
      }
    }

    // Also fix JSON service titles for these pages
    for (const [from, to] of JSON_SERVICE_FIXES) {
      if (to === 'SKIP') continue;
      const before = html;
      html = html.replaceAll(from, to);
      if (html !== before) changes++;
    }
  }

  /* ── services.html JSON fix ─────────────────────────────────────────── */
  if (fname === 'services.html') {
    for (const [from, to] of SERVICES_JSON_FIXES) {
      const before = html;
      html = html.replaceAll(from, to);
      if (html !== before) changes++;
    }
  }

  if (html !== orig) {
    writeFileSync(fpath, html, 'utf8');
    totalFixed++;
    console.log(`✓ ${fname} (${changes} change groups)`);
  } else {
    console.log(`  ${fname} – no changes`);
  }
}

console.log(`\nDone! ${totalFixed} files updated.`);

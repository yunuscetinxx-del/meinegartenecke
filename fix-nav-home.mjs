import { readFileSync, writeFileSync } from 'fs';
const SITE = 'e:/procat/mein garden/downloaded-site';
const files = ['index.html', 'home-2.html'];

// Desktop nav on homepage (has current-menu-item)
const D1 = 'class="menu-item-has-children current-menu-item"><a title="" href="/">Home</a><ul class="sub-menu"><li class="current-item"><a title="" href="/">Home 01</a></li><li class=""><a title="" href="/home-2">Home 02</a></li></ul></li>';
const D1R = 'class="current-menu-item"><a title="" href="/">Home</a></li>';

// Mobile nav on homepage
const M1 = 'class="menu-item menu-item-has-children   current-menu-item "><a href="#" class="down">Home</a><span class="btn-submenu"></span><ul class="sub-menu"><li class="menu-item current-item"><a href="/">Home 01</a></li><li class="menu-item "><a href="/home-2">Home 02</a></li></ul></li>';
const M1R = 'class="menu-item current-menu-item"><a href="/" class="">Home</a></li>';

// home-2 desktop nav (Home 02 is current-item)
const D2 = 'class="menu-item-has-children current-menu-item"><a title="" href="/">Home</a><ul class="sub-menu"><li class=""><a title="" href="/">Home 01</a></li><li class="current-item"><a title="" href="/home-2">Home 02</a></li></ul></li>';
const D2R = 'class="current-menu-item"><a title="" href="/">Home</a></li>';
// home-2 mobile nav
const M2 = 'class="menu-item menu-item-has-children   current-menu-item "><a href="#" class="down">Home</a><span class="btn-submenu"></span><ul class="sub-menu"><li class="menu-item "><a href="/">Home 01</a></li><li class="menu-item current-item"><a href="/home-2">Home 02</a></li></ul></li>';
const M2R = 'class="menu-item current-menu-item"><a href="/" class="">Home</a></li>';

for (const f of files) {
  let html = readFileSync(SITE + '/' + f, 'utf8');
  const orig = html;
  html = html.replaceAll('<li ' + D1, '<li ' + D1R);
  html = html.replaceAll('<li ' + D2, '<li ' + D2R);
  html = html.replaceAll('<li ' + M1, '<li ' + M1R);
  html = html.replaceAll('<li ' + M2, '<li ' + M2R);
  if (html !== orig) {
    writeFileSync(SITE + '/' + f, html, 'utf8');
    console.log('\u2713', f, 'nav fixed');
  } else {
    console.log('no change', f);
  }
}
console.log('Done');

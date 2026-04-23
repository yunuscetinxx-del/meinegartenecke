/**
 * mgecke-services-patch.js
 * Runs after React hydration to inject real service content.
 * Injected into: services.html, index.html, home-2.html
 */
(function () {
  /* ── 6 real services (user request: decorations, cleaning, lighting, chairs) ── */
  var SERVICES = [
    {
      title: 'Gartengestaltung',
      desc: 'Individuelle Gartenplanung von der ersten Idee bis zur fertigen Gartenoase.',
      img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=740&h=480&fit=crop&q=80',
      alt: 'Gartengestaltung und Planung',
      icon: 'icon-fruit-box',
      anim: 'fadeInLeft',
    },
    {
      title: 'Gartendekorationen',
      desc: 'Stilvolle Gartendekoration mit Skulpturen, Pflanzgef\u00e4\u00dfen und dekorativen Elementen.',
      img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=740&h=480&fit=crop&q=80',
      alt: 'Gartendekorationen und Skulpturen',
      icon: 'icon2 icon-hanging-bot',
      anim: 'fadeInUp',
    },
    {
      title: 'Gartenreinigung &amp; Pflege',
      desc: 'Professionelle Gartenreinigung \u2013 Laubbeseitigung, Unkrautj\u00e4ten und Fr\u00fchjahrsputz.',
      img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=740&h=480&fit=crop&q=80',
      alt: 'Gartenreinigung und Pflege',
      icon: 'icon3 icon-spray',
      anim: 'fadeInRight',
    },
    {
      title: 'Gartenbeleuchtung',
      desc: 'Stimmungsvolle LED-Beleuchtung f\u00fcr Wege, Beete und Terrassen \u2013 f\u00fcr sch\u00f6ne Gartenabende.',
      img: 'https://images.unsplash.com/photo-1558075139-f6adb7d0baf8?w=740&h=480&fit=crop&q=80',
      alt: 'Gartenbeleuchtung LED',
      icon: 'icon-fruit-box',
      anim: 'fadeInLeft',
    },
    {
      title: 'Gartenm\u00f6bel &amp; St\u00fchle',
      desc: 'Hochwertige Gartenm\u00f6bel \u2013 St\u00fchle, Tische und Lounge-Bereiche f\u00fcr Ihren Au\u00dfenbereich.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=740&h=480&fit=crop&q=80',
      alt: 'Gartenm\u00f6bel und St\u00fchle',
      icon: 'icon2 icon-hanging-bot',
      anim: 'fadeInUp',
    },
    {
      title: 'Terrasse &amp; Pflasterarbeiten',
      desc: 'Professionelle Terrassen- und Pflasterarbeiten aus Naturstein, Beton oder Klinker.',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=740&h=480&fit=crop&q=80',
      alt: 'Terrasse und Pflasterarbeiten',
      icon: 'icon3 icon-spray',
      anim: 'fadeInRight',
    },
  ];

  /* ── 4 icon-box services for flat-services section (homepage) ── */
  var ICON_SERVICES = [
    {
      title: 'Gartengestaltung',
      desc: 'Professionelle Gartenplanung und Gestaltung nach Ihren W\u00fcnschen \u2013 von der Idee bis zur Umsetzung.',
      wrapClass: 'our-services-box hover-up-style2 mg-bottom30 wow fadeInDown',
      overlayClass: 'our-services-overlay',
      iconHtml: '<span class="tf-icon icon-size icon-icon-farming-layer"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>',
      style2: 'link-style2',
    },
    {
      title: 'Gartenreinigung &amp; Pflege',
      desc: 'Laubbeseitigung, Unkrautj\u00e4ten, Besch\u00f6nigung \u2013 Ihr Garten stets sauber und gepflegt.',
      wrapClass: 'our-services-box mg-bottom30 wow fadeInUp',
      overlayClass: 'our-services-overlay active',
      iconHtml: '<span class="tf-icon icon-size3 icon-Group-7527"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>',
      style2: 'link-style3',
      white: true,
    },
    {
      title: 'Gartenbeleuchtung',
      desc: 'Stimmungsvolle LED-Beleuchtung f\u00fcr Wege, Terrassen und Beete \u2013 sch\u00f6n und energieeffizient.',
      wrapClass: 'our-services-box hover-up-style2 wow fadeInLeft',
      overlayClass: 'our-services-overlay',
      iconHtml: '<span class="tf-icon icon-size2 icon-Group-7526"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>',
      style2: 'link-style2',
    },
    {
      title: 'Gartenm\u00f6bel &amp; St\u00fchle',
      desc: 'Hochwertige Gartenm\u00f6bel \u2013 St\u00fchle, Tische und Lounges f\u00fcr entspannte Stunden im Freien.',
      wrapClass: 'our-services-box hover-up-style2 wow fadeInRight',
      overlayClass: 'our-services-overlay',
      iconHtml: '<span class="tf-icon icon-size4 icon-Group-7528"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>',
      style2: 'link-style2',
    },
  ];

  function buildImageCard(s) {
    return '<div class="item-three-column mg-bottom-60 wow ' + s.anim + '">' +
      '<article class="flat-WCU-box grow-up-hover">' +
      '<div class="WCU-image">' +
      '<img alt="' + s.alt + '" loading="lazy" width="370" height="240"' +
      ' src="' + s.img + '" style="color:transparent;object-fit:cover;width:100%;height:240px"/>' +
      '</div>' +
      '<div class="features-box">' +
      '<span class="tf-icon ' + s.icon + '"></span>' +
      '<div class="content-features">' +
      '<a href="/service-details"><h3 class="section-heading-rubik-size20">' + s.title + '</h3></a>' +
      '<h6 class="section-desc">' + s.desc + '</h6>' +
      '</div>' +
      '</div>' +
      '<div class="button-read-more link-style2">' +
      '<a class="read-more btn-read-more" href="/service-details">Mehr erfahren</a>' +
      '</div>' +
      '</article></div>';
  }

  function buildIconBox(s) {
    var descClass = 'section-desc' + (s.white ? ' white' : '');
    var cfClass = 'content-features' + (s.white ? ' link-style3' : '');
    return '<div class="item-four-column">' +
      '<div class="' + s.wrapClass + '">' +
      '<div class="' + s.overlayClass + '"></div>' +
      s.iconHtml +
      '<div class="' + cfClass + '">' +
      '<a href="/service-details"><h3 class="section-heading-jost-size22">' + s.title + '</h3></a>' +
      '<p class="' + descClass + '">' + s.desc + '</p>' +
      '<div class="link2 ' + s.style2 + '">' +
      '<a class="read-more" href="/service-details">Mehr erfahren</a>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  /* ── Patch image-card services (services.html) ── */
  function patchImageCards() {
    var rows = document.querySelectorAll('.row');
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var boxes = row.querySelectorAll('.flat-WCU-box');
      if (boxes.length === 0) continue;
      /* Check if old content: wrong number OR old image src */
      var oldImg = row.querySelector('img[src*="artical-post"]');
      var oldTitle = row.querySelector('.section-heading-rubik-size20');
      var hasOld = oldImg ||
        (oldTitle && (
          oldTitle.textContent.indexOf('Landscaping') !== -1 ||
          oldTitle.textContent.indexOf('Pruning') !== -1 ||
          oldTitle.textContent.indexOf('Lawn') !== -1
        ));
      if (boxes.length !== SERVICES.length || hasOld) {
        row.innerHTML = SERVICES.map(buildImageCard).join('');
      }
      break; /* only first matching row */
    }
  }

  /* ── Patch flat-services icon boxes (index / home-2) ── */
  function patchIconBoxes() {
    var section = document.querySelector('section.flat-services');
    if (!section) return;
    var cols = section.querySelectorAll('.item-four-column');
    if (cols.length === 0) return;
    var hasOld = false;
    for (var i = 0; i < cols.length; i++) {
      var h = cols[i].querySelector('h3');
      if (h && (
        h.textContent.indexOf('Landscaping') !== -1 ||
        h.textContent.indexOf('Pruning') !== -1 ||
        h.textContent.indexOf('Irrigation') !== -1 ||
        h.textContent.indexOf('Garden Maint') !== -1
      )) { hasOld = true; break; }
    }
    if (!hasOld) return;
    /* Replace the 4 column divs with new icon boxes */
    var container = cols[0].parentNode;
    /* remove old columns */
    for (var i = cols.length - 1; i >= 0; i--) container.removeChild(cols[i]);
    /* insert new columns */
    var tmp = document.createElement('div');
    tmp.innerHTML = ICON_SERVICES.map(buildIconBox).join('');
    while (tmp.firstChild) container.appendChild(tmp.firstChild);
  }

  function runPatch() {
    patchImageCards();
    patchIconBoxes();
  }

  /* Run after React has had time to hydrate */
  if (document.readyState === 'complete') {
    setTimeout(runPatch, 150);
  } else {
    window.addEventListener('load', function () { setTimeout(runPatch, 150); });
  }
  /* Also watch for late hydration */
  if (typeof MutationObserver !== 'undefined') {
    var obs = new MutationObserver(function (mutations, o) {
      /* Only act if something relevant changed */
      for (var i = 0; i < mutations.length; i++) {
        var target = mutations[i].target;
        if (target.classList && (
          target.classList.contains('flat-WCU-box') ||
          target.classList.contains('our-services-box') ||
          target.classList.contains('row')
        )) { runPatch(); break; }
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }
})();

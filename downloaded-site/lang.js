/**
 * meinegartenecke.de - Sprachsystem DE / EN
 * Unterstützt: Deutsch (Standard) und Englisch
 */
(function () {
  var STORAGE_KEY = 'mgecke_lang';

  var translations = {
    de: {
      // navigation
      'Home':               'Startseite',
      'Home 01':            'Startseite 01',
      'Home 02':            'Startseite 02',
      'About':              'Über uns',
      'About Us':           'Über uns',
      'Team':               'Team',
      'Faq':                'FAQ',
      'Services':           'Leistungen',
      'Service Details':    'Leistungsdetails',
      'Case':               'Projekte',
      'Case Study':         'Fallstudie',
      'Case Details':       'Projektdetails',
      'Blog':               'Blog',
      'Blog Standard':      'Blog',
      'Blog Detail':        'Blogbeitrag',
      'Contact':            'Kontakt',
      // buttons
      'Get A Quote':        'Angebot anfragen',
      'Read More':          'Mehr lesen',
      'Send message':       'Nachricht senden',
      'Subsrcibe':          'Abonnieren',
      // hero
      'MARKETS & RESOURCES':           'MÄRKTE & RESSOURCEN',
      'Planting a garden is':           'Einen Garten anlegen ist',
      'similar to believe in':          'wie an',
      'tomorrow':                       'morgen zu glauben',
      'Grow your health':               'Wachse gesund –',
      'grow a garden':                  'bau einen Garten',
      // features
      'Landscaping':           'Landschaftsbau',
      'Pruning plants':        'Pflanzenschnitt',
      'Lawn Maintenance':      'Rasenpflege',
      'Irrigation & Drainage': 'Bewässerung & Entwässerung',
      'Garden Maintenance':    'Gartenpflege',
      // about
      'ABOUT US':                           'ÜBER UNS',
      'The Best Choice For your Business.': 'Die beste Wahl für Ihr Unternehmen.',
      'Best Ui Designer':                   'Erfahrene Gestalter',
      'Counter In Work.':                   'Projekte in Arbeit',
      'Years Of experience':                'Jahre Erfahrung',
      // services
      'WHAT WE DO':                          'WAS WIR TUN',
      'What You Can Do':                     'Was Sie tun können',
      'with Meine Garten Ecke':              'mit Meine Garten Ecke',
      // team
      'MEET OUR TEAM':    'UNSER TEAM',
      'Our Creative Team':'Unser kreatives Team',
      'Design Expert':    'Design-Experte',
      // portfolio
      'Finished Work':         'Abgeschlossenes Projekt',
      'Dummy text of free available': 'Kurze Projektbeschreibung',
      // testimonials
      'CLIENT TESTIMONIALS':   'KUNDENSTIMMEN',
      'What our clients say':  'Was unsere Kunden sagen',
      // about 2
      'We Have The Perfect soluion For You': 'Wir haben die perfekte Lösung für Sie',
      'available in market the printing':    'Verfügbar auf dem Markt',
      'Lorem Ipsum simply dummy':            'Einfach ein Beispieltext',
      'market the printing':                 'Druckmarkt',
      'market the printing typesetting':     'Satz & Druck',
      'Lorem Ipsum simply free':             'Kostenlos verfügbar',
      'Get notified about the event! Subscribe today': 'Bleiben Sie informiert – abonnieren Sie jetzt!',
      // work process
      'WORK PROCESS':          'ARBEITSABLAUF',
      'We Complete Every':     'Wir erledigen jeden',
      'Step Carefully':        'Schritt sorgfältig',
      'Set Design Target':     'Designziel setzen',
      'Genaret Uniq Idea':     'Einzigartige Idee entwickeln',
      'Friendly Service':      'Freundlicher Service',
      // contact
      'GET IN TOUCH':          'KONTAKT AUFNEHMEN',
      'We want to share our locationto find us easily.': 'Wir helfen Ihnen, uns leicht zu finden.',
      'Name (required)':       'Name (erforderlich)',
      'Phone (optional)':      'Telefon (optional)',
      'Email address (required)': 'E-Mail-Adresse (erforderlich)',
      'Services (required)':   'Leistung (erforderlich)',
      'Choose services':       'Leistung wählen',
      'Your message*':         'Ihre Nachricht*',
      'Full Name':             'Vollständiger Name',
      'Phone Number':          'Telefonnummer',
      'Email Address':         'E-Mail-Adresse',
      'Your Message':          'Ihre Nachricht',
      'Our Address':           'Unsere Adresse',
      'Our Phone':             'Unser Telefon',
      'Our Email':             'Unsere E-Mail',
      // blog
      'LATEST NEWS':           'AKTUELLE NEUIGKEITEN',
      'Our Insights & Articles':'Unsere Beiträge & Artikel',
      'By Admin':              'Von Admin',
      'Home Gardening':        'Heimgarten',
      'Gardening Ideas':       'Gartenideen',
      // footer
      'Quick Links':           'Schnelllinks',
      'Newsletter':            'Newsletter',
    },

    en: {
      // navigation
      'Home':               'Home',
      'Home 01':            'Home 01',
      'Home 02':            'Home 02',
      'About':              'About',
      'About Us':           'About Us',
      'Team':               'Team',
      'Faq':                'FAQ',
      'Services':           'Services',
      'Service Details':    'Service Details',
      'Case':               'Projects',
      'Case Study':         'Case Study',
      'Case Details':       'Project Details',
      'Blog':               'Blog',
      'Blog Standard':      'Blog',
      'Blog Detail':        'Blog Post',
      'Contact':            'Contact',
      // buttons
      'Get A Quote':        'Get A Quote',
      'Read More':          'Read More',
      'Send message':       'Send Message',
      'Subsrcibe':          'Subscribe',
      // hero
      'MARKETS & RESOURCES':           'MARKETS & RESOURCES',
      'Planting a garden is':           'Planting a garden is',
      'similar to believe in':          'similar to believing in',
      'tomorrow':                       'tomorrow',
      'Grow your health':               'Grow your health –',
      'grow a garden':                  'grow a garden',
      // features
      'Landscaping':           'Landscaping',
      'Pruning plants':        'Pruning Plants',
      'Lawn Maintenance':      'Lawn Maintenance',
      'Irrigation & Drainage': 'Irrigation & Drainage',
      'Garden Maintenance':    'Garden Maintenance',
      // about
      'ABOUT US':                           'ABOUT US',
      'The Best Choice For your Business.': 'The Best Choice For Your Business.',
      'Best Ui Designer':                   'Expert Designers',
      'Counter In Work.':                   'Projects In Progress',
      'Years Of experience':                'Years Of Experience',
      // services
      'WHAT WE DO':                          'WHAT WE DO',
      'What You Can Do':                     'What You Can Do',
      'with Meine Garten Ecke':              'with Meine Garten Ecke',
      // team
      'MEET OUR TEAM':    'MEET OUR TEAM',
      'Our Creative Team':'Our Creative Team',
      'Design Expert':    'Design Expert',
      // portfolio
      'Finished Work':         'Finished Work',
      'Dummy text of free available': 'Short project description',
      // testimonials
      'CLIENT TESTIMONIALS':   'CLIENT TESTIMONIALS',
      'What our clients say':  'What Our Clients Say',
      // about 2
      'We Have The Perfect soluion For You': 'We Have The Perfect Solution For You',
      'available in market the printing':    'Available in the market',
      'Lorem Ipsum simply dummy':            'Simply a sample text',
      'market the printing':                 'Printing market',
      'market the printing typesetting':     'Typesetting & Printing',
      'Lorem Ipsum simply free':             'Freely available',
      'Get notified about the event! Subscribe today': 'Get notified about events! Subscribe today',
      // work process
      'WORK PROCESS':          'WORK PROCESS',
      'We Complete Every':     'We Complete Every',
      'Step Carefully':        'Step Carefully',
      'Set Design Target':     'Set Design Target',
      'Genaret Uniq Idea':     'Generate Unique Ideas',
      'Friendly Service':      'Friendly Service',
      // contact
      'GET IN TOUCH':          'GET IN TOUCH',
      'We want to share our locationto find us easily.': 'We want to share our location so you can find us easily.',
      'Name (required)':       'Name (required)',
      'Phone (optional)':      'Phone (optional)',
      'Email address (required)': 'Email Address (required)',
      'Services (required)':   'Services (required)',
      'Choose services':       'Choose Services',
      'Your message*':         'Your Message*',
      'Full Name':             'Full Name',
      'Phone Number':          'Phone Number',
      'Email Address':         'Email Address',
      'Your Message':          'Your Message',
      'Our Address':           'Our Address',
      'Our Phone':             'Our Phone',
      'Our Email':             'Our Email',
      // blog
      'LATEST NEWS':           'LATEST NEWS',
      'Our Insights & Articles':'Our Insights & Articles',
      'By Admin':              'By Admin',
      'Home Gardening':        'Home Gardening',
      'Gardening Ideas':       'Gardening Ideas',
      // footer
      'Quick Links':           'Quick Links',
      'Newsletter':            'Newsletter',
    }
  };

  // ── تطبيق الترجمة ──
  function applyLang(lang) {
    var t = translations[lang];
    if (!t) return;
    var isEn = lang === 'en';

    document.documentElement.setAttribute('lang', isEn ? 'en' : 'de');
    document.documentElement.setAttribute('dir', 'ltr');

    translateNode(document.body, t);

    document.querySelectorAll('[placeholder]').forEach(function(el){
      var key = el.getAttribute('data-orig-ph') || el.getAttribute('placeholder');
      el.setAttribute('data-orig-ph', key);
      el.setAttribute('placeholder', t[key] || key);
    });

    var btn = document.getElementById('mgecke-lang-btn');
    if (btn) btn.textContent = isEn ? 'DE' : 'EN';

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function translateNode(node, t) {
    if (node.nodeType === Node.TEXT_NODE) {
      var orig = node._origText !== undefined ? node._origText : node.textContent;
      node._origText = orig;
      var trimmed = orig.trim();
      if (t[trimmed] !== undefined) {
        node.textContent = orig.replace(trimmed, t[trimmed]);
      }
      return;
    }
    // تجاهل العناصر غير المرئية أو الـ script/style
    if (['SCRIPT','STYLE','NOSCRIPT'].includes(node.nodeName)) return;
    node.childNodes.forEach(function(child){ translateNode(child, t); });
  }

  // ── زر التبديل ──
  function addLangButton() {
    if (document.getElementById('mgecke-lang-btn')) return;

    var style = document.createElement('style');
    style.textContent = '#mgecke-lang-btn { position:fixed !important; top:16px !important; right:16px !important; z-index:2147483646 !important; background:#2e7d32 !important; color:#fff !important; border:2px solid #fff !important; border-radius:20px !important; padding:6px 16px !important; font-size:13px !important; font-weight:700 !important; cursor:pointer !important; box-shadow:0 2px 8px rgba(0,0,0,.25) !important; letter-spacing:1px !important; } #mgecke-lang-btn:hover { background:#1b5e20 !important; }';
    document.head.appendChild(style);

    var btn = document.createElement('button');
    btn.id = 'mgecke-lang-btn';
    var current = localStorage.getItem(STORAGE_KEY) || 'de';
    btn.textContent = current === 'en' ? 'DE' : 'EN';
    btn.addEventListener('click', function(){
      var next = (localStorage.getItem(STORAGE_KEY) || 'de') === 'de' ? 'en' : 'de';
      applyLang(next);
    });
    document.body.appendChild(btn);

    // تطبيق اللغة المحفوظة
    var saved = localStorage.getItem(STORAGE_KEY) || 'de';
    if (saved !== 'de') applyLang(saved);
  }

  if (document.readyState === 'complete') {
    setTimeout(addLangButton, 400);
  } else {
    window.addEventListener('load', function(){ setTimeout(addLangButton, 400); });
  }

})();

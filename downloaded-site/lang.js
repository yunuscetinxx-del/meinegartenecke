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
      // extra
      'Explore':               'Erkunden',
      'Brangding Design':      'Branding & Design',
      'Graphics Design':       'Grafikdesign',
      'Ui/ux Designing':       'UI/UX Design',
      'Newslatter':            'Newsletter',
      'Recent Post':           'Aktuelle Beiträge',
      'Recent News':           'Aktuelle Neuigkeiten',
      'You have successfully subscribed.': 'Erfolgreich abonniert.',
      'Bigg Ideas Business branding Info.': 'Große Ideen für Ihr Business.',
      'Bigg Ideas Of Business branding Info.': 'Große Business-Ideen.',
      'Happy Customers':       'Zufriedene Kunden',
      'Nurture The environment':'Umwelt pflegen',
      'Satisfaction':          'Zufriedenheit',
      'Payments':              'Zahlungen',
      'Booking':               'Buchung',
      'Search':                'Suchen',
      'Call Us':               'Ruf uns an',
      'Our Mail':              'Unsere E-Mail',
      'Team Member':           'Teammitglied',
      'We are nice people with a lot of experience.': 'Wir sind erfahrene Experten mit viel Leidenschaft.',
      'By admin':              'Von Admin',
      'Category':              'Kategorie',
      'Gardening':             'Gartenbau',
      'Years of experience':   'Jahre Erfahrung',
      'copyright':             'Urheberrecht',
      'Maek Elements':         'Meine Garten Ecke',
      'Get A Free Quote':      'Kostenloses Angebot',
      'Free Estimation':       'Kostenlose Schätzung',
      'Our Services':          'Unsere Leistungen',
      'Our Projects':          'Unsere Projekte',
      'Contact Us':            'Kontakt aufnehmen',
      'Follow Us':             'Folgen Sie uns',
      'Phone Number':          'Telefonnummer',
      'Working Hours':         'Öffnungszeiten',
      'Mon - Sat: 8am - 6pm':  'Mo - Sa: 8-18 Uhr',
      // blog/case/extra pages
      'A step towards less pollution': 'Ein Schritt gegen Umweltverschmutzung',
      'Agency':                'Agentur',
      'BY ADMIN':              'VON ADMIN',
      'Blog Details':          'Blogbeitrag Details',
      'Case Studies':          'Fallstudien',
      'CASE STUDIO':           'FALLSTUDIEN',
      'Comments':              'Kommentare',
      'Company Details.':      'Unternehmensdetails.',
      'Company Gather.':       'Unternehmensversammlung.',
      'Contact us':            'Kontaktieren Sie uns',
      'Corporate.':            'Unternehmen.',
      'DISCOVER':              'ENTDECKEN',
      'DOWNLOAD':              'HERUNTERLADEN',
      'Email:':                'E-Mail:',
      'Experts Trusted Us':    'Experten vertrauen uns',
      'Features Product':      'Produktmerkmale',
      'Leave a Reply':         'Kommentar hinterlassen',
      'Location:':             'Standort:',
      'OUR GARDEN STORE':      'UNSER GARTENSHOP',
      'Post Comment':          'Kommentar posten',
      'Project title':         'Projekttitel',
      'Related Tags :':        'Verwandte Tags:',
      'Reply':                 'Antworten',
      'See all':               'Alle ansehen',
      'Services for You':      'Leistungen für Sie',
      'Share :':               'Teilen:',
      'sign up for newslatter &amp; get lattest news.': 'Anmelden &amp; Neuigkeiten erhalten.',
      'SUBSCRIBE':             'ABONNIEREN',
      'The gardening that matters.': 'Der Garten, der zählt.',
      'ui/ux brand design':    'UI/UX Markendesign',
      'ui/ux design':          'UI/UX Design',
      'Web develop':           'Webentwicklung',
      'web devolopment':       'Webentwicklung',
      'WHY CHOOSE US':         'WARUM WIR',
      'branding design':       'Branding & Design',
      'WHY CHOOSE US':         'WARUM WIR',
      'MARKETS &amp; RESOURCES': 'MÄRKTE & RESSOURCEN',
      'Irrigation &amp; Drainage': 'Bewässerung & Entwässerung',
      'Our Insights &amp; Articles': 'Unsere Beiträge & Artikel',
      'sign up for newslatter & get lattest news.': 'Anmelden & Neuigkeiten erhalten.',
      // new 7 services (DE stays same, EN translated below)
      'Terrasse & Pflasterarbeiten':     'Terrasse & Pflasterarbeiten',
      'Gartengestaltung':                'Gartengestaltung',
      'Formschnitt & Hecken':            'Formschnitt & Hecken',
      'Saisonale Blumen':                'Saisonale Blumen',
      'Zimmerpflanzen':                  'Zimmerpflanzen',
      'Außenpflanzen':                   'Außenpflanzen',
      'Gartenbeleuchtung & Bewässerung': 'Gartenbeleuchtung & Bewässerung',
      // service descriptions (DE)
      'Professionelle Terrassen- und Pflasterarbeiten aus Naturstein, Beton oder Klinker – dauerhaft und stilvoll.': 'Professionelle Terrassen- und Pflasterarbeiten aus Naturstein, Beton oder Klinker – dauerhaft und stilvoll.',
      'Individuelle Gartenplanung und -anlage – von der ersten Idee bis zur fertig gestalteten Gartenoase.':        'Individuelle Gartenplanung und -anlage – von der ersten Idee bis zur fertig gestalteten Gartenoase.',
      'Kunstvoller Formschnitt für Bäume, Sträucher und Hecken – für einen gepflegten und eleganten Garten.':      'Kunstvoller Formschnitt für Bäume, Sträucher und Hecken – für einen gepflegten und eleganten Garten.',
      'Farbenfrohe Bepflanzung mit saisonalen Blumen für leuchtende Beete und Balkonkästen das ganze Jahr.':       'Farbenfrohe Bepflanzung mit saisonalen Blumen für leuchtende Beete und Balkonkästen das ganze Jahr.',
      'Beratung und Lieferung von Zimmerpflanzen – für lebendige, gesunde und grüne Innenräume.':                  'Beratung und Lieferung von Zimmerpflanzen – für lebendige, gesunde und grüne Innenräume.',
      'Auswahl und Pflanzung robuster Stauden, Gehölze und Sträucher für einen naturnahen Außenbereich.':          'Auswahl und Pflanzung robuster Stauden, Gehölze und Sträucher für einen naturnahen Außenbereich.',
      'Installation von stimmungsvoller Gartenbeleuchtung und effizienten Bewässerungsanlagen für Ihren Garten.':  'Installation von stimmungsvoller Gartenbeleuchtung und effizienten Bewässerungsanlagen für Ihren Garten.',
      'Professionelle Terrassen- und Pflasterarbeiten aus Naturstein, Beton oder Klinker.': 'Professionelle Terrassen- und Pflasterarbeiten aus Naturstein, Beton oder Klinker.',
      'Individuelle Gartenplanung und -anlage – von der Idee bis zur fertig gestalteten Oase.':                    'Individuelle Gartenplanung und -anlage – von der Idee bis zur fertig gestalteten Oase.',
      'Kunstvoller Formschnitt für Bäume, Sträucher und Hecken für einen gepflegten Garten.':                     'Kunstvoller Formschnitt für Bäume, Sträucher und Hecken für einen gepflegten Garten.',
      'Installation von Gartenbeleuchtung und effizienten Bewässerungsanlagen.':                                   'Installation von Gartenbeleuchtung und effizienten Bewässerungsanlagen.',
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
      // extra
      'Explore':               'Explore',
      'Brangding Design':      'Branding Design',
      'Graphics Design':       'Graphics Design',
      'Ui/ux Designing':       'UI/UX Design',
      'Newslatter':            'Newsletter',
      'Recent Post':           'Recent Post',
      'Recent News':           'Recent News',
      'You have successfully subscribed.': 'You have successfully subscribed.',
      'Bigg Ideas Business branding Info.': 'Big Ideas for Your Business.',
      'Bigg Ideas Of Business branding Info.': 'Big Business Branding Ideas.',
      'Happy Customers':       'Happy Customers',
      'Nurture The environment':'Nurture the Environment',
      'Satisfaction':          'Satisfaction',
      'Payments':              'Payments',
      'Booking':               'Booking',
      'Search':                'Search',
      'Call Us':               'Call Us',
      'Our Mail':              'Our Mail',
      'Team Member':           'Team Member',
      'We are nice people with a lot of experience.': 'We are experienced experts with great passion.',
      'By admin':              'By Admin',
      'Category':              'Category',
      'Gardening':             'Gardening',
      'Years of experience':   'Years of Experience',
      'copyright':             'copyright',
      'Maek Elements':         'Meine Garten Ecke',
      'Get A Free Quote':      'Get A Free Quote',
      'Free Estimation':       'Free Estimation',
      'Our Services':          'Our Services',
      'Our Projects':          'Our Projects',
      'Contact Us':            'Contact Us',
      'Follow Us':             'Follow Us',
      'Phone Number':          'Phone Number',
      'Working Hours':         'Working Hours',
      'Mon - Sat: 8am - 6pm':  'Mon - Sat: 8am - 6pm',
      // blog/case/extra pages
      'A step towards less pollution': 'A step towards less pollution',
      'Agency':                'Agency',
      'BY ADMIN':              'BY ADMIN',
      'Blog Details':          'Blog Details',
      'Case Studies':          'Case Studies',
      'CASE STUDIO':           'CASE STUDIES',
      'Comments':              'Comments',
      'Company Details.':      'Company Details.',
      'Company Gather.':       'Company Gathering.',
      'Contact us':            'Contact Us',
      'Corporate.':            'Corporate.',
      'DISCOVER':              'DISCOVER',
      'DOWNLOAD':              'DOWNLOAD',
      'Email:':                'Email:',
      'Experts Trusted Us':    'Experts Trusted Us',
      'Features Product':      'Featured Products',
      'Leave a Reply':         'Leave a Reply',
      'Location:':             'Location:',
      'OUR GARDEN STORE':      'OUR GARDEN STORE',
      'Post Comment':          'Post Comment',
      'Project title':         'Project Title',
      'Related Tags :':        'Related Tags:',
      'Reply':                 'Reply',
      'See all':               'See All',
      'Services for You':      'Services for You',
      'Share :':               'Share:',
      'sign up for newslatter &amp; get lattest news.': 'Sign up &amp; get latest news.',
      'SUBSCRIBE':             'SUBSCRIBE',
      'The gardening that matters.': 'The gardening that matters.',
      'ui/ux brand design':    'UI/UX Brand Design',
      'ui/ux design':          'UI/UX Design',
      'Web develop':           'Web Development',
      'web devolopment':       'Web Development',
      'WHY CHOOSE US':         'WHY CHOOSE US',
      'branding design':       'Branding Design',
      'MARKETS &amp; RESOURCES': 'MARKETS & RESOURCES',
      'Irrigation &amp; Drainage': 'Irrigation & Drainage',
      'Our Insights &amp; Articles': 'Our Insights & Articles',
      'sign up for newslatter & get lattest news.': 'Sign up & get latest news.',
      // new 7 services (EN translations)
      'Terrasse & Pflasterarbeiten':     'Terrace & Paving',
      'Gartengestaltung':                'Garden Design',
      'Formschnitt & Hecken':            'Topiary & Hedges',
      'Saisonale Blumen':                'Seasonal Flowers',
      'Zimmerpflanzen':                  'Indoor Plants',
      'Außenpflanzen':                   'Outdoor Plants',
      'Gartenbeleuchtung & Bewässerung': 'Garden Lighting & Irrigation',
      // service descriptions (EN)
      'Professionelle Terrassen- und Pflasterarbeiten aus Naturstein, Beton oder Klinker – dauerhaft und stilvoll.': 'Professional terrace and paving work using natural stone, concrete, or brick – durable and stylish.',
      'Individuelle Gartenplanung und -anlage – von der ersten Idee bis zur fertig gestalteten Gartenoase.':        'Individual garden planning and construction – from the first idea to the finished garden oasis.',
      'Kunstvoller Formschnitt für Bäume, Sträucher und Hecken – für einen gepflegten und eleganten Garten.':      'Artistic topiary for trees, shrubs and hedges – for a well-maintained and elegant garden.',
      'Farbenfrohe Bepflanzung mit saisonalen Blumen für leuchtende Beete und Balkonkästen das ganze Jahr.':       'Colourful planting with seasonal flowers for vibrant flowerbeds and balcony boxes all year round.',
      'Beratung und Lieferung von Zimmerpflanzen – für lebendige, gesunde und grüne Innenräume.':                  'Advice and delivery of indoor plants – for lively, healthy and green interior spaces.',
      'Auswahl und Pflanzung robuster Stauden, Gehölze und Sträucher für einen naturnahen Außenbereich.':          'Selection and planting of robust perennials, woody plants and shrubs for a natural outdoor area.',
      'Installation von stimmungsvoller Gartenbeleuchtung und effizienten Bewässerungsanlagen für Ihren Garten.':  'Installation of atmospheric garden lighting and efficient irrigation systems for your garden.',
      'Professionelle Terrassen- und Pflasterarbeiten aus Naturstein, Beton oder Klinker.': 'Professional terrace and paving work in natural stone, concrete or brick.',
      'Individuelle Gartenplanung und -anlage – von der Idee bis zur fertig gestalteten Oase.':                    'Individual garden planning – from the idea to the finished oasis.',
      'Kunstvoller Formschnitt für Bäume, Sträucher und Hecken für einen gepflegten Garten.':                     'Artistic topiary for trees, shrubs and hedges for a well-maintained garden.',
      'Installation von Gartenbeleuchtung und effizienten Bewässerungsanlagen.':                                   'Installation of garden lighting and efficient irrigation systems.',
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

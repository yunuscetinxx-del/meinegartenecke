/**
 * meinegartenecke.de - نظام الترجمة DE / AR
 * يدعم: ألماني (الافتراضي) وعربي
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

    ar: {
      // navigation
      'Home':               'الرئيسية',
      'Home 01':            'الرئيسية 01',
      'Home 02':            'الرئيسية 02',
      'About':              'من نحن',
      'About Us':           'من نحن',
      'Team':               'الفريق',
      'Faq':                'الأسئلة الشائعة',
      'Services':           'خدماتنا',
      'Service Details':    'تفاصيل الخدمة',
      'Case':               'مشاريعنا',
      'Case Study':         'دراسة حالة',
      'Case Details':       'تفاصيل المشروع',
      'Blog':               'المدونة',
      'Blog Standard':      'المدونة',
      'Blog Detail':        'تفاصيل المقال',
      'Contact':            'اتصل بنا',
      // buttons
      'Get A Quote':        'احصل على عرض',
      'Read More':          'اقرأ المزيد',
      'Send message':       'إرسال الرسالة',
      'Subsrcibe':          'اشترك',
      // hero
      'MARKETS & RESOURCES':           'الأسواق والموارد',
      'Planting a garden is':           'زرع حديقة يشبه',
      'similar to believe in':          'الإيمان',
      'tomorrow':                       'بالغد',
      'Grow your health':               'انمُ بصحة',
      'grow a garden':                  'ابنِ حديقتك',
      // features
      'Landscaping':           'تنسيق الحدائق',
      'Pruning plants':        'تقليم النباتات',
      'Lawn Maintenance':      'صيانة العشب',
      'Irrigation & Drainage': 'الري والصرف',
      'Garden Maintenance':    'صيانة الحديقة',
      // about
      'ABOUT US':                           'من نحن',
      'The Best Choice For your Business.': 'الخيار الأمثل لأعمالك.',
      'Best Ui Designer':                   'أفضل مصممي الحدائق',
      'Counter In Work.':                   'مشاريع قيد التنفيذ',
      'Years Of experience':                'سنوات من الخبرة',
      // services
      'WHAT WE DO':                          'ما نقدمه',
      'What You Can Do':                     'ما يمكنك تحقيقه',
      'with Meine Garten Ecke':              'مع ماين غارتن إيكه',
      // team
      'MEET OUR TEAM':    'تعرّف على فريقنا',
      'Our Creative Team':'فريقنا المبدع',
      'Design Expert':    'خبير تصميم',
      // portfolio
      'Finished Work':         'مشروع مكتمل',
      'Dummy text of free available': 'وصف قصير للمشروع',
      // testimonials
      'CLIENT TESTIMONIALS':   'آراء العملاء',
      'What our clients say':  'ماذا يقول عملاؤنا',
      // about 2
      'We Have The Perfect soluion For You': 'لدينا الحل المثالي لك',
      'available in market the printing':    'متوفر في السوق',
      'Lorem Ipsum simply dummy':            'نص تجريبي بسيط',
      'market the printing':                 'سوق الطباعة',
      'market the printing typesetting':     'الطباعة والتنضيد',
      'Lorem Ipsum simply free':             'متاح مجاناً',
      'Get notified about the event! Subscribe today': 'اشترك اليوم واحصل على آخر المستجدات!',
      // work process
      'WORK PROCESS':          'طريقة العمل',
      'We Complete Every':     'ننجز كل',
      'Step Carefully':        'خطوة بعناية',
      'Set Design Target':     'تحديد هدف التصميم',
      'Genaret Uniq Idea':     'توليد أفكار مبتكرة',
      'Friendly Service':      'خدمة ودودة',
      // contact
      'GET IN TOUCH':          'تواصل معنا',
      'We want to share our locationto find us easily.': 'نريد مشاركة موقعنا لتجدنا بسهولة.',
      'Name (required)':       'الاسم (مطلوب)',
      'Phone (optional)':      'الهاتف (اختياري)',
      'Email address (required)': 'البريد الإلكتروني (مطلوب)',
      'Services (required)':   'الخدمة (مطلوبة)',
      'Choose services':       'اختر الخدمة',
      'Your message*':         'رسالتك*',
      'Full Name':             'الاسم الكامل',
      'Phone Number':          'رقم الهاتف',
      'Email Address':         'البريد الإلكتروني',
      'Your Message':          'رسالتك',
      'Our Address':           'عنواننا',
      'Our Phone':             'هاتفنا',
      'Our Email':             'بريدنا الإلكتروني',
      // blog
      'LATEST NEWS':           'آخر الأخبار',
      'Our Insights & Articles':'مقالاتنا ورؤانا',
      'By Admin':              'بقلم الإدارة',
      'Home Gardening':        'زراعة منزلية',
      'Gardening Ideas':       'أفكار للحديقة',
      // footer
      'Quick Links':           'روابط سريعة',
      'Newsletter':            'النشرة البريدية',
    }
  };

  // ── تطبيق الترجمة ──
  function applyLang(lang) {
    var t = translations[lang];
    if (!t) return;
    var isAr = lang === 'ar';

    // اتجاه الصفحة
    document.documentElement.setAttribute('lang', isAr ? 'ar' : 'de');
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    // ترجمة العقد النصية
    translateNode(document.body, t);

    // الـ placeholders
    document.querySelectorAll('[placeholder]').forEach(function(el){
      var key = el.getAttribute('data-orig-ph') || el.getAttribute('placeholder');
      el.setAttribute('data-orig-ph', key);
      el.setAttribute('placeholder', t[key] || key);
    });

    // CSS إضافي للعربية
    var styleId = 'mgecke-lang-style';
    var existing = document.getElementById(styleId);
    if (existing) existing.remove();
    if (isAr) {
      var s = document.createElement('style');
      s.id = styleId;
      s.textContent = 'body, h1,h2,h3,h4,h5,p,a,li,label,input,textarea,select,button { font-family: "Segoe UI", Tahoma, Arial, sans-serif !important; } .mainnav .menu, .top-bar-right, .header-inner, nav { direction: rtl; } .menu > li { float: right !important; } #mgecke-chat-inputs input, #mgecke-chat-inputs button { direction: rtl; text-align: right; }';
      document.head.appendChild(s);
    }

    // تحديث زر التبديل
    var btn = document.getElementById('mgecke-lang-btn');
    if (btn) btn.textContent = isAr ? 'DE' : 'AR';

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
    btn.textContent = current === 'ar' ? 'DE' : 'AR';
    btn.addEventListener('click', function(){
      var next = (localStorage.getItem(STORAGE_KEY) || 'de') === 'de' ? 'ar' : 'de';
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

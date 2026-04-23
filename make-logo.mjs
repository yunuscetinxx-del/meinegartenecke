import sharp from 'sharp';
import { writeFileSync } from 'fs';

// ── شعار داكن (للهيدر الأبيض) ──
const svgDark = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="58">
  <!-- أيقونة نبتة + مجرفة -->
  <g transform="translate(6,6)">
    <!-- جذع -->
    <rect x="21" y="26" width="4" height="20" rx="2" fill="#2e7d32"/>
    <!-- ورقة يسار -->
    <ellipse cx="14" cy="20" rx="9" ry="5" transform="rotate(-35,14,20)" fill="#4caf50"/>
    <!-- ورقة يمين -->
    <ellipse cx="30" cy="20" rx="9" ry="5" transform="rotate(35,30,20)" fill="#4caf50"/>
    <!-- ورقة وسط -->
    <ellipse cx="23" cy="14" rx="7" ry="11" fill="#388e3c"/>
    <!-- مجرفة -->
    <rect x="20" y="44" width="6" height="2" rx="1" fill="#1b5e20"/>
    <path d="M16,44 Q23,50 30,44 Z" fill="#2e7d32"/>
  </g>
  <!-- اسم الموقع السطر الأول -->
  <text x="54" y="28" font-family="'Segoe UI',Arial,sans-serif" font-size="15" font-weight="700" fill="#1b5e20" letter-spacing="-0.3">meinegarten</text>
  <!-- اسم الموقع السطر الثاني -->
  <text x="54" y="47" font-family="'Segoe UI',Arial,sans-serif" font-size="15" font-weight="700" fill="#4caf50" letter-spacing="-0.3">ecke.de</text>
</svg>`;

// ── شعار فاتح (للفوتر الداكن) ──
const svgLight = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="58">
  <g transform="translate(6,6)">
    <rect x="21" y="26" width="4" height="20" rx="2" fill="#a5d6a7"/>
    <ellipse cx="14" cy="20" rx="9" ry="5" transform="rotate(-35,14,20)" fill="#c8e6c9"/>
    <ellipse cx="30" cy="20" rx="9" ry="5" transform="rotate(35,30,20)" fill="#c8e6c9"/>
    <ellipse cx="23" cy="14" rx="7" ry="11" fill="#81c784"/>
    <rect x="20" y="44" width="6" height="2" rx="1" fill="#e8f5e9"/>
    <path d="M16,44 Q23,50 30,44 Z" fill="#a5d6a7"/>
  </g>
  <text x="54" y="28" font-family="'Segoe UI',Arial,sans-serif" font-size="15" font-weight="700" fill="#ffffff" letter-spacing="-0.3">meinegarten</text>
  <text x="54" y="47" font-family="'Segoe UI',Arial,sans-serif" font-size="15" font-weight="700" fill="#a5d6a7" letter-spacing="-0.3">ecke.de</text>
</svg>`;

await sharp(Buffer.from(svgDark))
  .resize(220, 58)
  .png()
  .toFile('./downloaded-site/icon/logo-dark.png');

await sharp(Buffer.from(svgLight))
  .resize(220, 60)
  .png()
  .toFile('./downloaded-site/icon/logo-light.png');

console.log('✓ تم إنشاء الشعارين بالاسم الجديد meinegartenecke.de');

import { test, expect } from '@playwright/test';

// ==============================
// اختبارات الصفحة الرئيسية
// ==============================
test.describe('الصفحة الرئيسية', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('يجب أن تحمل الصفحة بنجاح', async ({ page }) => {
    await expect(page).toHaveTitle(/.+/);
  });

  test('يجب أن يكون الهيدر مرئياً', async ({ page }) => {
    const header = page.locator('header, nav, .header, [class*="header"]').first();
    await expect(header).toBeVisible();
  });

  test('يجب أن تكون الصفحة تحتوي على محتوى', async ({ page }) => {
    const body = page.locator('body');
    const text = await body.innerText();
    expect(text.length).toBeGreaterThan(100);
  });
});

// ==============================
// اختبار التنقل بين الصفحات
// ==============================
test.describe('التنقل', () => {
  const pages = [
    { path: '/',               name: 'الرئيسية' },
    { path: '/about',          name: 'من نحن' },
    { path: '/team',           name: 'الفريق' },
    { path: '/faq',            name: 'الأسئلة الشائعة' },
    { path: '/services',       name: 'الخدمات' },
    { path: '/service-details',name: 'تفاصيل الخدمة' },
    { path: '/case-study',     name: 'دراسات الحالة' },
    { path: '/case-details',   name: 'تفاصيل الحالة' },
    { path: '/blog',           name: 'المدونة' },
    { path: '/blog-detail',    name: 'تفاصيل المقال' },
    { path: '/contact',        name: 'اتصل بنا' },
    { path: '/home-2',         name: 'الرئيسية 2' },
  ];

  for (const p of pages) {
    test(`صفحة "${p.name}" تُحمَّل بنجاح`, async ({ page }) => {
      const response = await page.goto(p.path);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator('body')).toBeVisible();
    });
  }
});

// ==============================
// اختبار الصور
// ==============================
test.describe('الصور', () => {
  test('يجب أن تحتوي الصفحة الرئيسية على عناصر img', async ({ page }) => {
    await page.goto('/');
    // انتظر تحميل الصفحة بالكامل
    await page.waitForLoadState('networkidle');
    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });

  test('يجب أن تحتوي الصور على خاصية src', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img[src]');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });
});

// ==============================
// اختبار الاستجابة (Responsive)
// ==============================
test.describe('التصميم المتجاوب', () => {
  test('الموقع يعمل على الموبايل', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });

  test('الموقع يعمل على التابلت', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });

  test('الموقع يعمل على الديسكتوب', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });
});

// ==============================
// اختبار صفحة الاتصال
// ==============================
test.describe('صفحة الاتصال', () => {
  test('صفحة الاتصال تحتوي على عنوان أو نموذج', async ({ page }) => {
    await page.goto('/contact');
    const hasForm = await page.locator('form').count() > 0;
    const hasContent = (await page.locator('body').innerText()).length > 50;
    expect(hasContent).toBeTruthy();
  });
});

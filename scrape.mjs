import scrape from 'website-scraper';

const options = {
  urls: ['https://gettreenextjs.vercel.app/'],
  directory: './downloaded-site',
  recursive: true,
  maxRecursiveDepth: 10,
  prettifyUrls: true,
  filenameGenerator: 'bySiteStructure',
  requestConcurrency: 5,
  ignoreErrors: true,
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  }
};

console.log('بدء تحميل الموقع...');
try {
  const result = await scrape(options);
  console.log('تم التحميل بنجاح!');
  console.log('عدد الملفات المحملة:', result.length);
  result.forEach(r => console.log(' -', r.url, '->', r.filename));
} catch (err) {
  console.error('خطأ:', err.message);
}

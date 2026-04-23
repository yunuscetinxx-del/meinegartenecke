import { readFileSync } from 'fs';
const c = readFileSync('downloaded-site/index.html', 'utf8');
const nextIdx = c.indexOf('id="__next"');
console.log('__next div at:', nextIdx);
const bodyIdx = c.indexOf('<body');
console.log('body snippet:', c.substring(bodyIdx, bodyIdx + 200));
const closeBody = c.lastIndexOf('</body>');
console.log('before </body>:', c.substring(closeBody - 200, closeBody + 7));

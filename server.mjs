import express from 'express';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4000;
const SITE_DIR = join(__dirname, 'downloaded-site');
const DATA_FILE = join(__dirname, 'messages.json');

app.use(express.json());
app.use(express.static(SITE_DIR));

// ── تحميل/حفظ الرسائل ──
function loadMessages() {
  if (!existsSync(DATA_FILE)) return [];
  return JSON.parse(readFileSync(DATA_FILE, 'utf8'));
}
function saveMessages(msgs) {
  writeFileSync(DATA_FILE, JSON.stringify(msgs, null, 2), 'utf8');
}

// ── API: استقبال رسالة من الشات ──
app.post('/api/chat', (req, res) => {
  const { name, text, time } = req.body;
  if (!text || text.trim().length === 0) return res.status(400).json({ error: 'empty' });
  const msgs = loadMessages();
  const entry = {
    id: Date.now(),
    name: (name || 'زائر').slice(0, 60),
    text: text.slice(0, 500),
    time: time || new Date().toISOString(),
    read: false
  };
  msgs.unshift(entry);
  saveMessages(msgs);
  console.log(`📩 رسالة جديدة من "${entry.name}": ${entry.text}`);
  res.json({ ok: true });
});

// ── API: جلب الرسائل للوحة التحكم ──
app.get('/api/messages', (req, res) => {
  res.json(loadMessages());
});

// ── API: تمييز رسالة كمقروءة ──
app.patch('/api/messages/:id/read', (req, res) => {
  const msgs = loadMessages();
  const m = msgs.find(x => x.id === Number(req.params.id));
  if (m) { m.read = true; saveMessages(msgs); }
  res.json({ ok: true });
});

// ── API: حذف رسالة ──
app.delete('/api/messages/:id', (req, res) => {
  let msgs = loadMessages();
  msgs = msgs.filter(x => x.id !== Number(req.params.id));
  saveMessages(msgs);
  res.json({ ok: true });
});

// ── لوحة التحكم ──
app.get('/admin', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>meinegartenecke.de - لوحة التحكم</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #f0f4f0; color: #222; }
  .topbar { background: #2e7d32; color: #fff; padding: 16px 28px; display: flex; align-items: center; gap: 14px; }
  .topbar h1 { font-size: 20px; font-weight: 700; }
  .topbar a { color: #a5d6a7; font-size: 13px; margin-right: auto; text-decoration: none; }
  .topbar a:hover { color: #fff; }
  .container { max-width: 900px; margin: 28px auto; padding: 0 16px; }
  .stats { display: flex; gap: 16px; margin-bottom: 24px; }
  .stat-card { background: #fff; border-radius: 10px; padding: 16px 24px; flex: 1; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,.07); }
  .stat-card .num { font-size: 32px; font-weight: 800; color: #2e7d32; }
  .stat-card .lbl { font-size: 13px; color: #777; margin-top: 4px; }
  .toolbar { display: flex; gap: 10px; margin-bottom: 16px; align-items: center; }
  .toolbar input { flex: 1; padding: 8px 14px; border: 1px solid #ccc; border-radius: 8px; font-size: 14px; }
  .btn-refresh { background: #2e7d32; color: #fff; border: none; padding: 8px 18px; border-radius: 8px; cursor: pointer; font-size: 14px; }
  .btn-refresh:hover { background: #1b5e20; }
  .msg-list { display: flex; flex-direction: column; gap: 12px; }
  .msg-card { background: #fff; border-radius: 10px; padding: 16px 20px; box-shadow: 0 2px 8px rgba(0,0,0,.07); border-right: 5px solid #81c784; display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
  .msg-card.unread { border-right-color: #2e7d32; background: #f1f8e9; }
  .msg-card .info { flex: 1; }
  .msg-card .sender { font-weight: 700; font-size: 15px; color: #2e7d32; }
  .msg-card .text { font-size: 14px; margin: 6px 0; color: #333; }
  .msg-card .time { font-size: 12px; color: #999; }
  .msg-actions { display: flex; gap: 8px; flex-shrink: 0; }
  .btn-read, .btn-del { border: none; border-radius: 6px; padding: 6px 12px; cursor: pointer; font-size: 12px; }
  .btn-read { background: #e8f5e9; color: #2e7d32; }
  .btn-read:hover { background: #c8e6c9; }
  .btn-del { background: #fce4e4; color: #c62828; }
  .btn-del:hover { background: #ef9a9a; }
  .empty { text-align: center; color: #aaa; padding: 48px; font-size: 16px; }
  .badge { display: inline-block; background: #ff5722; color: #fff; border-radius: 20px; padding: 2px 8px; font-size: 11px; margin-right: 6px; vertical-align: middle; }
</style>
</head>
<body>
<div class="topbar">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
  <h1>meinegartenecke.de <span class="badge" id="unread-badge">0</span></h1>
  <a href="/">← العودة للموقع</a>
</div>
<div class="container">
  <div class="stats">
    <div class="stat-card"><div class="num" id="total-count">0</div><div class="lbl">إجمالي الرسائل</div></div>
    <div class="stat-card"><div class="num" id="unread-count">0</div><div class="lbl">غير مقروءة</div></div>
    <div class="stat-card"><div class="num" id="today-count">0</div><div class="lbl">اليوم</div></div>
  </div>
  <div class="toolbar">
    <input id="search" type="text" placeholder="بحث في الرسائل...">
    <button class="btn-refresh" onclick="loadMsgs()">🔄 تحديث</button>
  </div>
  <div class="msg-list" id="msg-list"><div class="empty">جاري التحميل...</div></div>
</div>
<script>
let allMsgs = [];

async function loadMsgs() {
  const res = await fetch('/api/messages');
  allMsgs = await res.json();
  renderMsgs(allMsgs);
  updateStats(allMsgs);
}

function updateStats(msgs) {
  const today = new Date().toDateString();
  const unread = msgs.filter(m => !m.read).length;
  document.getElementById('total-count').textContent = msgs.length;
  document.getElementById('unread-count').textContent = unread;
  document.getElementById('unread-badge').textContent = unread;
  document.getElementById('today-count').textContent = msgs.filter(m => new Date(m.time).toDateString() === today).length;
}

function renderMsgs(msgs) {
  const list = document.getElementById('msg-list');
  if (!msgs.length) { list.innerHTML = '<div class="empty">لا توجد رسائل بعد 📭</div>'; return; }
  list.innerHTML = msgs.map(m => \`
    <div class="msg-card \${m.read ? '' : 'unread'}" id="card-\${m.id}">
      <div class="info">
        <div class="sender">\${escHtml(m.name)} \${m.read ? '' : '<span style="font-size:11px;background:#ff5722;color:#fff;padding:2px 7px;border-radius:10px">جديد</span>'}</div>
        <div class="text">\${escHtml(m.text)}</div>
        <div class="time">\${new Date(m.time).toLocaleString('ar-EG')}</div>
      </div>
      <div class="msg-actions">
        \${!m.read ? \`<button class="btn-read" onclick="markRead(\${m.id})">✓ قراءة</button>\` : ''}
        <button class="btn-del" onclick="deleteMsg(\${m.id})">🗑 حذف</button>
      </div>
    </div>
  \`).join('');
}

function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

async function markRead(id) {
  await fetch('/api/messages/'+id+'/read', { method: 'PATCH' });
  loadMsgs();
}
async function deleteMsg(id) {
  if (!confirm('حذف هذه الرسالة؟')) return;
  await fetch('/api/messages/'+id, { method: 'DELETE' });
  loadMsgs();
}

document.getElementById('search').addEventListener('input', function() {
  const q = this.value.toLowerCase();
  renderMsgs(allMsgs.filter(m => m.name.toLowerCase().includes(q) || m.text.toLowerCase().includes(q)));
});

// تحديث تلقائي كل 10 ثواني
loadMsgs();
setInterval(loadMsgs, 10000);
</script>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`\n✅ السيرفر يعمل على http://localhost:${PORT}`);
  console.log(`🌿 الموقع:      http://localhost:${PORT}/`);
  console.log(`📊 لوحة التحكم: http://localhost:${PORT}/admin\n`);
});

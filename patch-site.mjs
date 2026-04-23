import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { globSync } from 'fs';

// ──────────────────────────────────────────────
// الكود المُضاف في نهاية كل <body>
// ──────────────────────────────────────────────
const WHATSAPP_NUMBER = '017651359';

const INJECT = `
<!-- ===== WhatsApp Button ===== -->
<a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" id="whatsapp-btn" title="تواصل معنا على واتساب" aria-label="WhatsApp">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="#fff">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.736 5.476 2.027 7.782L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.765-1.845l-.485-.287-5.001 1.193 1.232-4.869-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.961c-.398-.199-2.354-1.161-2.719-1.293-.365-.133-.630-.199-.896.199-.265.398-1.029 1.293-1.261 1.559-.232.265-.465.298-.863.1-.398-.199-1.681-.619-3.202-1.975-1.183-1.055-1.982-2.357-2.214-2.755-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.697-.1-.199-.896-2.16-1.228-2.957-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.361-1.394 3.322s1.427 3.854 1.626 4.12c.199.265 2.808 4.286 6.805 6.011.951.411 1.693.656 2.271.839.954.304 1.823.261 2.510.158.765-.114 2.354-.962 2.686-1.891.332-.928.332-1.724.232-1.891-.099-.166-.365-.265-.763-.464z"/>
  </svg>
</a>

<!-- ===== Live Chat ===== -->
<div id="live-chat-widget">
  <button id="chat-toggle-btn" aria-label="فتح الشات">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#fff">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
    </svg>
  </button>
  <div id="chat-box" class="chat-hidden">
    <div id="chat-header">
      <span>💬 تحدث معنا</span>
      <button id="chat-close">✕</button>
    </div>
    <div id="chat-messages"></div>
    <div id="chat-input-area">
      <input id="chat-name-input" type="text" placeholder="اسمك" maxlength="50" />
      <input id="chat-msg-input" type="text" placeholder="اكتب رسالتك..." maxlength="300" />
      <button id="chat-send-btn">إرسال</button>
    </div>
  </div>
</div>

<style>
/* ---- WhatsApp ---- */
#whatsapp-btn {
  position: fixed;
  bottom: 90px;
  left: 24px;
  z-index: 9999;
  background: #25D366;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(37,211,102,.5);
  transition: transform .2s;
  text-decoration: none;
}
#whatsapp-btn:hover { transform: scale(1.1); }

/* ---- Live Chat ---- */
#live-chat-widget {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 9999;
  font-family: sans-serif;
}
#chat-toggle-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #2e7d32;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(46,125,50,.5);
  transition: transform .2s;
}
#chat-toggle-btn:hover { transform: scale(1.1); }
#chat-box {
  position: absolute;
  bottom: 68px;
  left: 0;
  width: 300px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: opacity .25s, transform .25s;
}
#chat-box.chat-hidden { opacity: 0; pointer-events: none; transform: translateY(16px); }
#chat-header {
  background: #2e7d32;
  color: #fff;
  padding: 12px 14px;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#chat-close {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  line-height: 1;
}
#chat-messages {
  padding: 12px;
  min-height: 120px;
  max-height: 200px;
  overflow-y: auto;
  font-size: 13px;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.chat-msg-bot {
  background: #e8f5e9;
  border-radius: 8px 8px 8px 0;
  padding: 6px 10px;
  align-self: flex-start;
  max-width: 80%;
}
.chat-msg-user {
  background: #c8e6c9;
  border-radius: 8px 8px 0 8px;
  padding: 6px 10px;
  align-self: flex-end;
  max-width: 80%;
}
#chat-input-area {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  border-top: 1px solid #e0e0e0;
}
#chat-name-input, #chat-msg-input {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 7px 10px;
  font-size: 13px;
  outline: none;
}
#chat-send-btn {
  background: #2e7d32;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
}
#chat-send-btn:hover { background: #1b5e20; }
</style>

<script>
(function(){
  var toggle = document.getElementById('chat-toggle-btn');
  var box    = document.getElementById('chat-box');
  var close  = document.getElementById('chat-close');
  var send   = document.getElementById('chat-send-btn');
  var msgs   = document.getElementById('chat-messages');
  var nameIn = document.getElementById('chat-name-input');
  var msgIn  = document.getElementById('chat-msg-input');

  var STORAGE_KEY = 'mgecke_chat_msgs';

  function addMsg(text, type) {
    var d = document.createElement('div');
    d.className = type === 'user' ? 'chat-msg-user' : 'chat-msg-bot';
    d.textContent = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function saveMsg(name, text) {
    var all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    all.push({ name: name || 'زائر', text: text, time: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    // أرسل للسيرفر
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name || 'زائر', text: text, time: new Date().toISOString() })
    }).catch(function(){});
  }

  // رسالة ترحيب
  addMsg('مرحباً! كيف يمكننا مساعدتك؟ 🌿', 'bot');

  toggle.onclick = function() {
    box.classList.toggle('chat-hidden');
  };
  close.onclick = function() {
    box.classList.add('chat-hidden');
  };

  send.onclick = function() {
    var name = nameIn.value.trim();
    var text = msgIn.value.trim();
    if (!text) return;
    addMsg((name ? name + ': ' : '') + text, 'user');
    saveMsg(name, text);
    msgIn.value = '';
    setTimeout(function() {
      addMsg('شكراً على رسالتك! سنرد عليك قريباً. 🌱', 'bot');
    }, 800);
  };

  msgIn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') send.onclick();
  });
})();
</script>
</body>`;

// ──────────────────────────────────────────────
// معالجة كل ملفات HTML
// ──────────────────────────────────────────────
import { readdirSync, statSync } from 'fs';

function getAllHtmlFiles(dir) {
  let results = [];
  const items = readdirSync(dir);
  for (const item of items) {
    const full = join(dir, item);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(full));
    } else if (item.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const ROOT = './downloaded-site';
const files = getAllHtmlFiles(ROOT);
let modified = 0;

for (const f of files) {
  let c = readFileSync(f, 'utf8');
  
  // 1) حذف السلة
  c = c.replace(/<div class="cart">.*?<\/div>/gs, '');
  
  // 2) إزالة أي </body> موجود وإضافة كودنا
  if (c.includes('</body>')) {
    c = c.replace('</body>', INJECT);
    writeFileSync(f, c, 'utf8');
    modified++;
  }
}

console.log(`تم تعديل ${modified} ملف HTML.`);
console.log('✓ السلة محذوفة');
console.log('✓ زر WhatsApp مضاف');
console.log('✓ Live Chat مضاف');

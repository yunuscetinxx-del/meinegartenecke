import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'fs';
import { join } from 'path';

const WHATSAPP_NUMBER = '017651359';

const INJECT = `\n<!-- floating buttons -->\n<script src="/floating-buttons.js" defer><\/script>\n`;

const INJECT_OLD_START = `<!-- ===== WhatsApp Button ===== -->`;
const INJECT_SCRIPT_TAG = `<!-- floating buttons -->`;

// unused placeholder
const _UNUSED = `
<!-- ===== WhatsApp Button ===== -->
<a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" id="whatsapp-btn" title="WhatsApp" aria-label="WhatsApp">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="#fff">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.736 5.476 2.027 7.782L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.765-1.845l-.485-.287-5.001 1.193 1.232-4.869-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.961c-.398-.199-2.354-1.161-2.719-1.293-.365-.133-.630-.199-.896.199-.265.398-1.029 1.293-1.261 1.559-.232.265-.465.298-.863.1-.398-.199-1.681-.619-3.202-1.975-1.183-1.055-1.982-2.357-2.214-2.755-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.697-.1-.199-.896-2.16-1.228-2.957-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.361-1.394 3.322s1.427 3.854 1.626 4.12c.199.265 2.808 4.286 6.805 6.011.951.411 1.693.656 2.271.839.954.304 1.823.261 2.510.158.765-.114 2.354-.962 2.686-1.891.332-.928.332-1.724.232-1.891-.099-.166-.365-.265-.763-.464z"/>
  </svg>
</a>

<!-- ===== Live Chat ===== -->
<div id="live-chat-widget">
  <button id="chat-toggle-btn" aria-label="Chat">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#fff">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
    </svg>
  </button>
  <div id="chat-box" class="chat-hidden">
    <div id="chat-header">
      <span>&#x1F4AC; Schreib uns</span>
      <button id="chat-close">&#x2715;</button>
    </div>
    <div id="chat-messages"></div>
    <div id="chat-input-area">
      <input id="chat-name-input" type="text" placeholder="Dein Name" maxlength="50" />
      <input id="chat-msg-input" type="text" placeholder="Deine Nachricht..." maxlength="300" />
      <button id="chat-send-btn">Senden</button>
    </div>
  </div>
</div>

<style>
/* ---- WhatsApp ---- */
#whatsapp-btn {
  position: fixed !important;
  bottom: 90px !important;
  right: 24px !important;
  z-index: 99999 !important;
  background: #25D366 !important;
  border-radius: 50% !important;
  width: 56px !important;
  height: 56px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 4px 14px rgba(37,211,102,.5) !important;
  transition: transform .2s !important;
  text-decoration: none !important;
  visibility: visible !important;
  opacity: 1 !important;
  animation: none !important;
}
#whatsapp-btn:hover { transform: scale(1.1) !important; }

/* ---- Live Chat ---- */
#live-chat-widget {
  position: fixed !important;
  bottom: 24px !important;
  right: 24px !important;
  z-index: 99999 !important;
  font-family: sans-serif !important;
  visibility: visible !important;
  opacity: 1 !important;
  animation: none !important;
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
  right: 0;
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
.chat-msg { background: #f1f1f1; border-radius: 8px; padding: 6px 10px; max-width: 90%; }
.chat-msg.own { background: #e8f5e9; align-self: flex-end; }
#chat-input-area {
  padding: 10px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 6px;
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
}
#chat-send-btn:hover { background: #1b5e20; }
</style>

<script>
(function(){
  const STORAGE_KEY = 'mgecke_chat_msgs';
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const chatBox   = document.getElementById('chat-box');
  const closeBtn  = document.getElementById('chat-close');
  const sendBtn   = document.getElementById('chat-send-btn');
  const msgInput  = document.getElementById('chat-msg-input');
  const nameInput = document.getElementById('chat-name-input');
  const msgArea   = document.getElementById('chat-messages');

  function renderMsgs(){
    const msgs = JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');
    msgArea.innerHTML = msgs.map(m=>'<div class="chat-msg own"><b>'+escHtml(m.name)+':</b> '+escHtml(m.text)+'</div>').join('');
    msgArea.scrollTop = msgArea.scrollHeight;
  }
  function escHtml(s){ return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  toggleBtn.addEventListener('click',()=>chatBox.classList.toggle('chat-hidden'));
  closeBtn.addEventListener('click',()=>chatBox.classList.add('chat-hidden'));

  sendBtn.addEventListener('click',()=>{
    const name = nameInput.value.trim()||'Gast';
    const text = msgInput.value.trim();
    if(!text) return;
    const entry = {name, text, time: new Date().toISOString()};
    const msgs = JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');
    msgs.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
    msgInput.value='';
    renderMsgs();
    fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(entry)}).catch(()=>{});
  });

  msgInput.addEventListener('keydown',e=>{ if(e.key==='Enter') sendBtn.click(); });
  renderMsgs();
})();
</script>
`;

const htmlFiles = globSync('downloaded-site/**/*.html');
let count = 0;
for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8');
  // حذف الإضافة القديمة أيًا كانت
  html = html.replace(/<!-- ===== WhatsApp Button ===== -->[\s\S]*?<\/script>\s*/g, '');
  // حذف بقايا backtick-n من التعديل السابق
  html = html.replace(/`n\s+/g, '\n  ');
  // حذف أي سكريبت/ستايل متبقٍّ من الباتش القديم بين </section> و</body>
  if (html.includes('</body>')) {
    html = html.replace(/<\/body>/, INJECT + '</body>');
    writeFileSync(file, html, 'utf8');
    count++;
  }
}
console.log(`✓ تم إعادة حقن الأزرار في ${count} ملف (أسفل اليمين)`);

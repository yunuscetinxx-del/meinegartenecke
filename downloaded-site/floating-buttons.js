(function () {
  var WHATSAPP = '017651359';

  var css = `
#mgecke-wa {
  position: fixed !important;
  bottom: 160px !important;
  right: 24px !important;
  z-index: 2147483647 !important;
  background: #25D366 !important;
  border-radius: 50% !important;
  width: 56px !important;
  height: 56px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 4px 16px rgba(37,211,102,.55) !important;
  text-decoration: none !important;
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;
}
#mgecke-wa:hover { transform: scale(1.1) !important; }
#mgecke-chat-btn {
  position: fixed !important;
  bottom: 90px !important;
  right: 24px !important;
  z-index: 2147483647 !important;
  width: 56px !important;
  height: 56px !important;
  border-radius: 50% !important;
  background: #2e7d32 !important;
  border: none !important;
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 4px 16px rgba(46,125,50,.55) !important;
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;
}
#mgecke-chat-btn:hover { transform: scale(1.1) !important; }
#mgecke-chatbox {
  position: fixed !important;
  bottom: 155px !important;
  right: 24px !important;
  z-index: 2147483647 !important;
  width: 300px !important;
  background: #fff !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 30px rgba(0,0,0,.18) !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
  visibility: visible !important;
  opacity: 1 !important;
}
#mgecke-chatbox.hidden { display: none !important; }
#mgecke-chat-head {
  background: #2e7d32;
  color: #fff;
  padding: 12px 14px;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
}
#mgecke-chat-close {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  line-height: 1;
}
#mgecke-chat-msgs {
  padding: 12px;
  min-height: 100px;
  max-height: 180px;
  overflow-y: auto;
  font-size: 13px;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: sans-serif;
}
.mgecke-msg { background:#f1f1f1; border-radius:8px; padding:6px 10px; }
#mgecke-chat-inputs {
  padding: 10px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
#mgecke-name, #mgecke-msg {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 7px 10px;
  font-size: 13px;
  font-family: sans-serif;
  outline: none;
}
#mgecke-send {
  background: #2e7d32;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  font-size: 13px;
  font-family: sans-serif;
}
#mgecke-send:hover { background: #1b5e20; }
`;

  function inject() {
    // لا تضيف مرتين
    if (document.getElementById('mgecke-wa')) return;

    // أضف CSS
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // زر واتساب
    var wa = document.createElement('a');
    wa.id = 'mgecke-wa';
    wa.href = 'https://wa.me/' + WHATSAPP;
    wa.target = '_blank';
    wa.rel = 'noopener noreferrer';
    wa.setAttribute('aria-label', 'WhatsApp');
    wa.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="#fff"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.736 5.476 2.027 7.782L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.765-1.845l-.485-.287-5.001 1.193 1.232-4.869-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.961c-.398-.199-2.354-1.161-2.719-1.293-.365-.133-.63-.199-.896.199-.265.398-1.029 1.293-1.261 1.559-.232.265-.465.298-.863.1-.398-.199-1.681-.619-3.202-1.975-1.183-1.055-1.982-2.357-2.214-2.755-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.697-.1-.199-.896-2.16-1.228-2.957-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.361-1.394 3.322s1.427 3.854 1.626 4.12c.199.265 2.808 4.286 6.805 6.011.951.411 1.693.656 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.891.332-.928.332-1.724.232-1.891-.099-.166-.365-.265-.763-.464z"/></svg>';
    document.body.appendChild(wa);

    // صندوق الشات
    var box = document.createElement('div');
    box.id = 'mgecke-chatbox';
    box.className = 'hidden';
    box.innerHTML = '<div id="mgecke-chat-head"><span>&#x1F4AC; Schreib uns</span><button id="mgecke-chat-close">&#x2715;</button></div><div id="mgecke-chat-msgs"></div><div id="mgecke-chat-inputs"><input id="mgecke-name" type="text" placeholder="Dein Name" maxlength="50"><input id="mgecke-msg" type="text" placeholder="Deine Nachricht..." maxlength="300"><button id="mgecke-send">Senden</button></div>';
    document.body.appendChild(box);

    // زر فتح الشات
    var btn = document.createElement('button');
    btn.id = 'mgecke-chat-btn';
    btn.setAttribute('aria-label', 'Chat');
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';
    document.body.appendChild(btn);

    // أحداث الشات
    var SK = 'mgecke_msgs';
    function esc(s){ return s.replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
    function renderMsgs(){
      var msgs = JSON.parse(localStorage.getItem(SK)||'[]');
      document.getElementById('mgecke-chat-msgs').innerHTML = msgs.map(function(m){ return '<div class="mgecke-msg"><b>'+esc(m.name)+':</b> '+esc(m.text)+'</div>'; }).join('');
    }

    btn.addEventListener('click', function(){ box.classList.toggle('hidden'); renderMsgs(); });
    document.getElementById('mgecke-chat-close').addEventListener('click', function(){ box.classList.add('hidden'); });
    document.getElementById('mgecke-send').addEventListener('click', function(){
      var name = (document.getElementById('mgecke-name').value||'Gast').trim().slice(0,50);
      var text = document.getElementById('mgecke-msg').value.trim().slice(0,300);
      if(!text) return;
      var entry = {name:name, text:text, time:new Date().toISOString()};
      var msgs = JSON.parse(localStorage.getItem(SK)||'[]');
      msgs.push(entry);
      localStorage.setItem(SK, JSON.stringify(msgs));
      document.getElementById('mgecke-msg').value = '';
      renderMsgs();
      fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(entry)}).catch(function(){});
    });
    document.getElementById('mgecke-msg').addEventListener('keydown', function(e){ if(e.key==='Enter') document.getElementById('mgecke-send').click(); });

    renderMsgs();
  }

  // شغّل بعد تحميل الصفحة كاملاً
  if (document.readyState === 'complete') {
    setTimeout(inject, 300);
  } else {
    window.addEventListener('load', function(){ setTimeout(inject, 300); });
  }

  // راقب إذا اتحذفوا وأعد إضافتهم
  var observer = new MutationObserver(function(){
    if (!document.getElementById('mgecke-wa')) {
      setTimeout(inject, 100);
    }
  });
  window.addEventListener('load', function(){
    observer.observe(document.body, { childList: true, subtree: false });
  });

})();

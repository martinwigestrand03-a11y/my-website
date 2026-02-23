:root{
  --bg:#0b0f17;
  --card:#0f1626;
  --text:#e7eefc;
  --muted:#a9b8d6;
  --border:rgba(255,255,255,.10);
  --shadow: 0 12px 32px rgba(0,0,0,.35);
  --btn:#18233a;
  --btn2:#223357;
  --danger:#4a1b22;
  --danger2:#7a2230;
  --primary:#1a2b4e;
  --primary2:#2a4b8a;
}
*{ box-sizing:border-box; }
html,body{ height:100%; }
body{
  margin:0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(1200px 600px at 20% -10%, #17264c 0%, transparent 60%),
              radial-gradient(900px 500px at 90% 0%, #2b1b3f 0%, transparent 55%),
              var(--bg);
  color:var(--text);
}
.topbar{
  position:sticky; top:0; z-index:50;
  background: rgba(11,15,23,.75);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  padding: 14px 16px;
}
.brand{ display:flex; flex-direction:column; gap:4px; }
.brand__title{ font-size:18px; font-weight:800; letter-spacing:.3px; }
.brand__sub{ font-size:12px; color:var(--muted); }
.tabs{ display:flex; gap:10px; flex-wrap:wrap; margin-top:12px; }
.tab{
  background: transparent;
  border:1px solid var(--border);
  color:var(--text);
  padding:10px 12px;
  border-radius:12px;
  cursor:pointer;
  font-weight:650;
}
.tab.is-active{ background: rgba(255,255,255,.08); }
.layout{ max-width: 1200px; margin: 0 auto; padding: 18px 16px 40px; }
.panel{ display:none; }
.panel.is-active{ display:block; }
.panel__header{
  display:flex; align-items:flex-start; justify-content:space-between;
  gap:12px; margin: 14px 2px 14px;
}
.panel__header h1{ margin:0; font-size:26px; letter-spacing:.2px; }
.panel__actions{ display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
.grid2{ display:grid; grid-template-columns: 1fr 1fr; gap:14px; }
@media (max-width: 980px){ .grid2{ grid-template-columns: 1fr; } }
.card{
  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 14px;
  box-shadow: var(--shadow);
}
.card__title{ margin:0 0 10px; font-size:16px; color: var(--text); letter-spacing:.2px; }
.list{ display:flex; flex-direction:column; gap:8px; }
.item{
  border:1px solid var(--border);
  border-radius:14px;
  padding:10px;
  background: rgba(0,0,0,.15);
  cursor:pointer;
}
.item:hover{ background: rgba(255,255,255,.05); }
.item__top{ display:flex; justify-content:space-between; gap:10px; }
.item__title{ font-weight:800; }
.item__meta{
  color: var(--muted);
  font-size:12px;
  margin-top:6px;
  line-height:1.4;
}
.form{ display:flex; flex-direction:column; gap:10px; }
.row{ display:grid; grid-template-columns:1fr 1fr; gap:10px; }
@media (max-width: 980px){ .row{ grid-template-columns:1fr; } }
.row--actions{ display:flex; gap:10px; flex-wrap:wrap; }
.field{ display:flex; flex-direction:column; gap:6px; }
label{ font-size:12px; color:var(--muted); }
.input, .textarea, select.input{
  width:100%;
  padding:10px 12px;
  border-radius:12px;
  border:1px solid var(--border);
  background: rgba(0,0,0,.2);
  color: var(--text);
  outline: none;
}
.textarea{ min-height: 90px; resize: vertical; }
.gridStats{ display:grid; grid-template-columns: repeat(4, 1fr); gap:10px; }
@media (max-width: 980px){ .gridStats{ grid-template-columns: repeat(2, 1fr); } }
.btn{
  border:1px solid var(--border);
  background: linear-gradient(180deg, var(--btn2), var(--btn));
  color: var(--text);
  padding:10px 12px;
  border-radius:12px;
  cursor:pointer;
  font-weight:750;
}
.btn:hover{ filter: brightness(1.08); }
.btn--primary{ background: linear-gradient(180deg, var(--primary2), var(--primary)); }
.btn--danger{ background: linear-gradient(180deg, var(--danger2), var(--danger)); }
.btn:disabled{ opacity:.5; cursor:not-allowed; }
.preview{
  border:1px dashed var(--border);
  border-radius:12px;
  padding:10px;
  min-height: 56px;
  display:flex;
  align-items:center;
  justify-content:center;
  color: var(--muted);
  background: rgba(0,0,0,.15);
}
.preview img{ max-width:100%; max-height:120px; border-radius:10px; display:block; }
.preview--grid{ justify-content:flex-start; gap:8px; flex-wrap:wrap; }
.preview--grid img{ width: 88px; height: 66px; object-fit: cover; }
.map{
  height: 560px;
  border-radius: 16px;
  overflow:hidden;
  border:1px solid var(--border);
}
.hint{ margin-top:10px; color: var(--muted); font-size:12px; line-height:1.45; }
.text{ color: var(--muted); margin: 0 0 12px; line-height:1.5; }
.footer{
  border-top: 1px solid var(--border);
  padding: 16px;
  color: var(--muted);
  font-size: 12px;
  text-align:center;
}

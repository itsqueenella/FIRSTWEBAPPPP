// Public server that serves the same HTML page when Render builds from /public
const express = require('express');
const app = express();

const studentInfo = {
  fullName: 'MARIELLA G. VILLEROS',
  classSection: 'BSIT SM-4102',
  quote: 'The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt'
};

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(renderPage(studentInfo));
});

function renderPage(info) {
  return `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Student Page - ${info.fullName}</title>
    <style>
      :root{--bg-1:#e8fff6;--bg-2:#d9fbe8;--card:#ffffff;--accent:#2b6fb3;--muted:#6b8b86;--text:#042c24;--meta:#1b6b5a}
      body.dark{--bg-1:#071223;--bg-2:#0b1624;--card:#0b1220;--accent:#6ab0ff;--muted:#9fb1c8;--text:#e6eef8;--meta:#6fb1c8}
      html,body{height:100%;margin:0}
      body{font-family:Inter,Segoe UI,Roboto,Arial;background:linear-gradient(180deg,var(--bg-1),var(--bg-2));color:var(--text);display:flex;align-items:center;justify-content:center;min-height:100vh;padding:0}
      .card{width:min(820px,86vw);background:var(--card);padding:36px;border-radius:10px;box-shadow:0 18px 40px rgba(30,80,60,0.08);position:relative}
      .projectHeader{text-align:center;margin-bottom:8px}
      .projectHeader .projectTitle{font-size:30px;font-weight:900;color:var(--accent);letter-spacing:0.6px}
      .projectHeader .course{font-size:18px;color:var(--meta);margin-top:6px;font-weight:700;text-align:center}
      .title{text-align:center;margin:6px 0 10px}
      .name{margin:8px 0 4px;font-size:36px;letter-spacing:1px;color:var(--accent);font-weight:800;text-align:center}
      .class{margin:0;font-size:14px;color:var(--meta);text-align:center;font-weight:700}
      .quoteWrap{display:flex;justify-content:center;margin-top:18px}
      .quoteBox{max-width:680px;background:linear-gradient(180deg,rgba(230,255,250,0.8),rgba(245,255,250,0.9));padding:14px 18px;border-radius:8px;border:1px solid rgba(3,57,39,0.03);color:#3b6b60;font-style:italic}
      .themeToggle{position:absolute;right:18px;top:18px;width:36px;height:36px;border-radius:8px;background:rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:center;color:var(--text);cursor:pointer;transition:background-color .18s ease, color .18s ease, box-shadow .18s ease, transform .12s ease}
      .themeToggle:hover{transform:translateY(-2px)}
      body.dark .themeToggle{background:var(--accent);color:#fff;box-shadow:0 8px 26px rgba(59,112,211,0.18);border:1px solid rgba(255,255,255,0.08)}
      @media (max-width:720px){.card{padding:20px}.title h1{font-size:22px}}
    </style>
  </head>
  <body>
    <div class="card">
      <div class="themeToggle" id="themeToggle" title="Toggle dark mode">&#9789;</div>
      <div class="projectHeader">
        <div class="projectTitle">Final Project Activity</div>
        <div class="course">IT 412 – Platform Technologies</div>
      </div>
      <div class="content">
        <div class="left">
          <div class="title">
            <div class="name">${info.fullName}</div>
            <div class="class">${info.classSection}</div>
          </div>
          <div class="quoteWrap"><div class="quoteBox">${info.quote}</div></div>
        </div>
      </div>
    </div>
    <script>
      (function(){
        const toggle = document.getElementById('themeToggle');
        const root = document.body;
        const stored = localStorage.getItem('theme');
        if(stored === 'dark' || (!stored && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
          root.classList.add('dark');
          toggle.textContent = '\u2600';
        } else {
          root.classList.remove('dark');
          toggle.textContent = '\u263e';
        }
        toggle.addEventListener('click', ()=>{
          const isDark = root.classList.toggle('dark');
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
          toggle.textContent = isDark ? '\u2600' : '\u263e';
        });
      })();
    </script>
  </body>
  </html>`;
}

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port, () => console.log(`Public server running on port ${port}`));

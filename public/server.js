// Public server that serves the same HTML page when Render builds from /public
const express = require('express');
const app = express();

const studentInfo = {
  fullName: 'MARIELLA G. VILLEROS',
  classSection: 'BSIT SM-4102',
  quote: 'The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt'
};

app.get('/', (req, res) => {
  const html = `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Student Page - ${studentInfo.fullName}</title>
    <style>
      :root{--bg-1:#e8fff6;--bg-2:#d9fbe8;--card:#ffffff;--accent:#2b6fb3;--meta:#1b6b5a;--text:#042c24}
      body{font-family:Inter,Segoe UI,Roboto,Arial;margin:0;background:linear-gradient(180deg,var(--bg-1),var(--bg-2));color:var(--text);display:flex;align-items:center;justify-content:center;min-height:100vh}
      .card{width:min(820px,86vw);background:var(--card);padding:36px;border-radius:10px;box-shadow:0 18px 40px rgba(30,80,60,0.08)}
      .projectTitle{font-size:30px;font-weight:900;color:var(--accent);text-align:center}
      .course{font-size:18px;color:var(--meta);text-align:center;margin-top:6px;font-weight:700}
      .name{font-size:36px;text-align:center;color:var(--accent);font-weight:800;margin:12px 0}
      .class{font-size:14px;text-align:center;color:var(--meta);font-weight:700}
      .quoteBox{max-width:680px;margin:18px auto;background:linear-gradient(180deg,rgba(230,255,250,0.8),rgba(245,255,250,0.9));padding:14px 18px;border-radius:8px;border:1px solid rgba(3,57,39,0.03);font-style:italic;color:#3b6b60}
    </style>
  </head>
  <body>
    <div class="card">
      <div class="projectTitle">Final Project Activity</div>
      <div class="course">IT 412 – Platform Technologies</div>
      <div class="name">${studentInfo.fullName}</div>
      <div class="class">${studentInfo.classSection}</div>
      <div class="quoteBox">${studentInfo.quote}</div>
    </div>
  </body>
  </html>`;
  res.set('Content-Type', 'text/html');
  res.send(html);
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port, () => console.log(`Public server running on port ${port}`));

// Minimal copy of server to run when Render builds from /public as service root
const express = require('express');
const http = require('http');
const app = express();

const studentInfo = {
  fullName: 'MARIELLA G. VILLEROS',
  classSection: 'BSIT SM-4102',
  quote: 'The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt'
};

app.get('/', (req, res) => {
  res.redirect('/../');
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port, () => console.log(`Public server running on port ${port}`));

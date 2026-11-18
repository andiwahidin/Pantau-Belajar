const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

app.use(express.static(path.join(__dirname), {
  extensions: ['html']
}));

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, HOST, () => {
  console.log(`PantauBelajar server listening at http://${HOST}:${PORT}`);
});

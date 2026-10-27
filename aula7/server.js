const http = require('http'), fs = require('fs'), path = require('path');
const { stats } = require('./lib/metrics');
const PUB = path.join(__dirname, 'public'), PORT = process.env.PORT || 3000;
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
const SEC = {
  'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer',
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; frame-ancestors 'none'"
};
const send = (res, code, type, body, extra = {}) => { res.writeHead(code, { 'Content-Type': type, ...SEC, ...extra }); res.end(body); };

http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) return send(res, 405, 'text/plain', 'Method Not Allowed', { Allow: 'GET, HEAD' });
  let p;
  try { p = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch { return send(res, 400, 'text/plain', 'Bad Request'); }
  if (p === '/api/stats') return send(res, 200, 'application/json; charset=utf-8', JSON.stringify(stats()), { 'Cache-Control': 'no-store' });
  if (p === '/healthz') return send(res, 200, 'application/json', '{"status":"ok"}');
  const f = path.join(PUB, p === '/' ? 'index.html' : p);
  if (!f.startsWith(PUB + path.sep) || !MIME[path.extname(f)]) return send(res, 404, 'text/plain', 'Not Found');
  fs.readFile(f, (e, d) => e ? send(res, 404, 'text/plain', 'Not Found') : send(res, 200, MIME[path.extname(f)], req.method === 'HEAD' ? '' : d));
}).listen(PORT, '0.0.0.0', () => console.log('Ronin Monitor em http://localhost:' + PORT));

for (const s of ['SIGTERM', 'SIGINT']) process.on(s, () => process.exit(0));

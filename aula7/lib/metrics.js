const os = require('os'), fs = require('fs'), path = require('path');
let prev = os.cpus(), cores = prev.map(() => 0);
const tot = c => Object.values(c.times).reduce((a, b) => a + b, 0);
// CPU = diferença entre duas leituras sucessivas, a cada 2s
setInterval(() => {
  const cur = os.cpus();
  cores = cur.map((c, i) => {
    const p = prev[i] || c, dt = tot(c) - tot(p), di = c.times.idle - p.times.idle;
    return dt > 0 ? Math.max(0, Math.min(100, Math.round((1 - di / dt) * 100))) : 0;
  });
  prev = cur;
}, 2000).unref();

const MB = b => Math.round(b / 1048576), GB = b => +(b / 2 ** 30).toFixed(1);

function stats() {
  const total = os.totalmem();
  let free = os.freemem();
  if (process.platform === 'linux') {
    try {
      const m = /MemAvailable:\s+(\d+)/.exec(fs.readFileSync('/proc/meminfo', 'utf8'));
      if (m) free = m[1] * 1024;
    } catch {}
  }
  let disk = { available: false };
  try {
    const d = fs.statfsSync(path.parse(process.cwd()).root);
    const t = d.blocks * d.bsize, f = d.bavail * d.bsize;
    disk = { available: true, total: GB(t), used: GB(t - f), pct: Math.round((t - f) / t * 100) };
  } catch {}
  const ip = Object.values(os.networkInterfaces()).flat().find(i => i && i.family === 'IPv4' && !i.internal);
  const pm = process.memoryUsage(), hide = process.env.HIDE_HOST_DETAILS === 'true';
  return {
    time: new Date().toLocaleString('pt-BR'),
    uptime: os.uptime(),
    procUptime: Math.round(process.uptime()),
    cores,
    cpuPercent: cores.length ? Math.round(cores.reduce((a, b) => a + b, 0) / cores.length) : 0,
    load: process.platform === 'win32' ? null : os.loadavg().map(n => +n.toFixed(2)),
    mem: { total: MB(total), used: MB(total - free), free: MB(free), pct: Math.round((total - free) / total * 100) },
    heap: MB(pm.heapUsed), rss: MB(pm.rss),
    disk,
    host: hide ? '—' : os.hostname(),
    ip: hide || !ip ? '—' : ip.address,
    os: os.type() + ' ' + os.release(),
    arch: os.arch(),
    cpuModel: (os.cpus()[0] || {}).model || '—',
    node: process.version
  };
}
module.exports = { stats };

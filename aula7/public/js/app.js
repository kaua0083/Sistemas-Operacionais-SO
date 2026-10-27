const $ = id => document.getElementById(id);
const set = (id, v) => { $(id).textContent = v; };
const bar = (id, p) => { $(id).style.width = Math.max(0, Math.min(100, p)) + '%'; };
const fmtMB = m => m >= 1024 ? (m / 1024).toFixed(1) + ' GB' : m + ' MB';
const fmtT = s => { const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60); return (d ? d + 'd ' : '') + h + 'h ' + m + 'min'; };
const LEVELS = {
  ok: ['Paz', 'Nenhuma ameaça no horizonte'],
  warn: ['Alerta', 'O inimigo se aproxima'],
  crit: ['Guerra', 'O vilarejo está em chamas']
};
const MAX = 40, hist = { c: [], m: [] };
let paused = false, timer;

function line(arr) { return arr.map((v, i) => (i * 200 / (MAX - 1)).toFixed(1) + ',' + (58 - v * .56).toFixed(1)).join(' '); }

function render(s) {
  set('time', s.time);
  set('cpu', s.cpuPercent + '%'); bar('cpuBar', s.cpuPercent); set('cpuModel', s.cpuModel + ' · ' + s.cores.length + ' núcleos');
  const cw = $('cores');
  if (cw.children.length !== s.cores.length)
    cw.innerHTML = s.cores.map((_, i) => `<div class="core"><span>${i + 1}</span><div class="bar"><i></i></div><b></b></div>`).join('');
  s.cores.forEach((v, i) => { const r = cw.children[i]; r.querySelector('i').style.width = v + '%'; r.querySelector('b').textContent = v + '%'; });

  set('mem', s.mem.pct + '%'); bar('memBar', s.mem.pct);
  set('memTxt', `${fmtMB(s.mem.used)} usados de ${fmtMB(s.mem.total)} · ${fmtMB(s.mem.free)} livres`);
  if (s.disk.available) { set('disk', s.disk.pct + '%'); bar('diskBar', s.disk.pct); set('diskTxt', `${s.disk.used} GB usados de ${s.disk.total} GB`); }
  else { set('disk', '—'); bar('diskBar', 0); set('diskTxt', 'Medição indisponível neste sistema'); }

  ['l1', 'l5', 'l15'].forEach((id, i) => set(id, s.load ? s.load[i] : 'N/D'));
  set('heap', fmtMB(s.heap)); set('rss', fmtMB(s.rss)); set('pup', fmtT(s.procUptime));
  set('os', s.os); set('host', s.host); set('ip', s.ip); set('arch', s.arch); set('up', fmtT(s.uptime)); set('node', s.node);

  hist.c.push(s.cpuPercent); hist.m.push(s.mem.pct);
  if (hist.c.length > MAX) { hist.c.shift(); hist.m.shift(); }
  $('hc').setAttribute('points', line(hist.c)); $('hm').setAttribute('points', line(hist.m));

  const worst = Math.max(s.cpuPercent, s.mem.pct, s.disk.available ? s.disk.pct : 0);
  const lv = worst >= 90 ? 'crit' : worst >= 70 ? 'warn' : 'ok';
  document.body.dataset.level = lv;
  set('lvl', LEVELS[lv][0]); set('lvlTxt', LEVELS[lv][1]);
  document.body.style.setProperty('--f', s.cpuPercent / 100);
  if (window.EMBERS) window.EMBERS.set(s.cpuPercent / 100);
}

async function load() {
  try {
    const r = await fetch('/api/stats', { cache: 'no-store' });
    if (!r.ok) throw 0;
    render(await r.json()); set('conn', 'Conectado');
  } catch { set('conn', 'Sem conexão com o servidor — tentando de novo'); }
}
function loop() { clearInterval(timer); if (!paused) timer = setInterval(load, 3000); }

$('now').onclick = load;
$('pause').onclick = e => { paused = !paused; e.target.textContent = paused ? 'Retomar' : 'Pausar'; set('conn', paused ? 'Pausado' : 'Conectado'); loop(); };
load(); loop();

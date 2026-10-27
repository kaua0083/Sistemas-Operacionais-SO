// Brasas e fumaça saindo das cabanas em chamas (substitui a chuva)
(() => {
  const c = document.getElementById('fx'), x = c.getContext('2d');
  const FIRES = [[140, 370], [262, 386]]; // coordenadas do SVG (viewBox 1000x600)
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W, H, lvl = .3, embers = [], smoke = [], t = 0;
  const size = () => { const d = devicePixelRatio || 1; W = innerWidth; H = innerHeight; c.width = W * d; c.height = H * d; x.setTransform(d, 0, 0, d, 0, 0); };
  const pt = (a, b) => { const s = Math.min(W / 1000, H / 600); return [(W - 1000 * s) / 2 + a * s, b * s, s]; };
  addEventListener('resize', size); size();

  function frame() {
    x.clearRect(0, 0, W, H); t++;
    const max = 40 + lvl * 160;
    if (embers.length < max && Math.random() < .35 + lvl * .6) {
      const [fx, fy, s] = pt(...FIRES[Math.random() < .6 ? 0 : 1]);
      embers.push({ x: fx + (Math.random() - .5) * 30 * s, y: fy, vx: (Math.random() - .6) * .6, vy: -(.5 + Math.random() * 1.2), r: .6 + Math.random() * 1.8, a: 1, d: .004 + Math.random() * .008 });
    }
    if (t % 14 === 0 && smoke.length < 26) {
      const [sx, sy, s] = pt(...FIRES[0]);
      smoke.push({ x: sx + (Math.random() - .5) * 20 * s, y: sy - 20 * s, r: 14 * s, vx: -.25 - Math.random() * .3, vy: -.35, a: .16 + lvl * .1 });
    }
    for (const p of smoke) {
      p.x += p.vx; p.y += p.vy; p.r += .35; p.a -= .0006;
      const g = x.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      g.addColorStop(0, `rgba(30,32,36,${p.a})`); g.addColorStop(1, 'rgba(30,32,36,0)');
      x.fillStyle = g; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill();
    }
    smoke = smoke.filter(p => p.a > 0 && p.y > -p.r);
    x.globalCompositeOperation = 'lighter';
    for (const p of embers) {
      p.x += p.vx + Math.sin((t + p.y) / 20) * .3; p.y += p.vy; p.a -= p.d;
      x.fillStyle = `rgba(255,${90 + p.a * 90 | 0},50,${Math.max(p.a, 0)})`;
      x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill();
    }
    x.globalCompositeOperation = 'source-over';
    embers = embers.filter(p => p.a > 0);
    if (!reduce) requestAnimationFrame(frame);
  }
  if (!reduce) frame();
  // A intensidade do fogo acompanha o uso de CPU (0 a 1)
  window.EMBERS = { set: v => { lvl = Math.max(0, Math.min(1, v)); } };
})();

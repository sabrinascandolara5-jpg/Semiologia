// Gera as videoaulas: node gerar.js <modelo_piper.onnx> <pasta_trabalho> <pasta_saida> [id_da_aula]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
const [MODEL, WORK, OUT, ONLY] = process.argv.slice(2);
const sh = (cmd, args, input) => execFileSync(cmd, args, { input, stdio: input ? ['pipe', 'ignore', 'ignore'] : ['ignore', 'pipe', 'ignore'] });
const dur = f => parseFloat(sh('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString());
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  await p.goto('file://' + path.resolve(__dirname, 'slide.html')); await p.waitForTimeout(300);
  const plan = await p.evaluate(() => window.plan());
  for (let ai = 0; ai < plan.length; ai++) {
    const A = plan[ai]; if (ONLY && A.id !== ONLY) continue;
    const dir = path.join(WORK, A.id); fs.mkdirSync(dir, { recursive: true });
    const list = [];
    for (let si = 0; si < A.slides.length; si++) for (let st = 0; st < A.slides[si].length; st++) {
      const base = path.join(dir, `s${String(si).padStart(2, '0')}_${st}`);
      await p.evaluate(([a, s, t]) => window.render(a, s, t), [ai, si, st]);
      await p.screenshot({ path: base + '.png' });
      const txt = A.slides[si][st].replace(/\s+/g, ' ').trim();
      sh('piper', ['-m', MODEL, '-f', base + '.wav', '--length-scale', '0.95', '--sentence-silence', '0.25'], txt + '\n');
      const d = dur(base + '.wav') + (st === A.slides[si].length - 1 ? 0.9 : 0.45) + (si === 0 ? 0.6 : 0);
      sh('ffmpeg', ['-y', '-loglevel', 'error', '-loop', '1', '-framerate', '15', '-i', base + '.png', '-i', base + '.wav', '-af', 'apad', '-t', d.toFixed(2),
        '-c:v', 'libx264', '-tune', 'stillimage', '-preset', 'veryfast', '-crf', '24', '-pix_fmt', 'yuv420p', '-r', '15', '-c:a', 'aac', '-b:a', '96k', '-ar', '44100', '-ac', '1', base + '.mp4']);
      list.push(`file '${base}.mp4'`);
    }
    fs.writeFileSync(path.join(dir, 'lista.txt'), list.join('\n'));
    const out = path.join(OUT, `Aula ${A.id.slice(0, 2)} - ${A.titulo.replace(/[:]/g, ' -')}.mp4`);
    sh('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', path.join(dir, 'lista.txt'), '-c', 'copy', '-movflags', '+faststart', out]);
    console.log(A.id, dur(out).toFixed(0) + 's', (fs.statSync(out).size / 1e6).toFixed(1) + 'MB');
  }
  await b.close();
})();

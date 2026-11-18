// Gera plataforma/videos-data.js: node dados.js <pasta_mp4> <urls.json>
const fs = require('fs'), vm = require('vm'), path = require('path'), { execFileSync } = require('child_process');
const [DIR, URLS] = process.argv.slice(2);
const urls = JSON.parse(fs.readFileSync(URLS, 'utf8'));
const c = {}; vm.createContext(c);
['roteiros-1.js', 'roteiros-2.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(__dirname, f), 'utf8'), c));
const DEPOIS = {
  '01-anamnese': [['trilhas-historia', 'Trilha: Organizando a história'], ['osce-anamnese-lucia', 'Estação de anamnese']],
  '02-exame-geral': [['trilhas-ectoscopia', 'Trilha: Ectoscopia'], ['mecanismos', 'Laboratório: edema']],
  '03-respiratorio-exame': [['roteiros', 'Roteiro do exame respiratório'], ['ausculta', 'Laboratório de ausculta']],
  '04-respiratorio-sindromes': [['trilhas-torax-fala', 'Trilha: O tórax que fala'], ['mecanismos', 'Laboratório: pulmão']],
  '05-cardio-exame': [['trilhas-pulso-pa', 'Trilha: Lendo pulso e pressão'], ['trilhas-remodelamento', 'Trilha: Remodelamento']],
  '06-cardio-sopros': [['trilhas-sopro-ea', 'Trilha: Deduzindo um sopro'], ['mecanismos', 'Laboratório: coração']],
  '07-abdome-exame': [['roteiros', 'Roteiro do exame do abdome'], ['mecanismos', 'Laboratório: abdome']],
  '08-abdome-agudo': [['trilhas-abdome-agudo-tipos', 'Trilha: Os 5 abdomes agudos'], ['trilhas-vias-biliares', 'Trilha: Vias biliares']],
  '09-estacao-osce': [['osce', 'Simulador OSCE'], ['roteiros', 'Roteiros de exame']]
};
const out = c.AULAS.map(A => {
  const file = fs.readdirSync(DIR).find(f => f.startsWith('Aula ' + A.id.slice(0, 2)));
  const dur = parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path.join(DIR, file)]).toString());
  return { id: A.id, n: A.n, titulo: A.titulo, url: urls[file], dur: Math.round(dur), topicos: A.slides.filter(s => !s.cover).map(s => s.h), depois: DEPOIS[A.id] };
});
fs.writeFileSync(path.join(__dirname, '../plataforma/videos-data.js'), '/* gerado por videoaulas/dados.js */\nwindow.SEMIO_VIDEOS = ' + JSON.stringify(out, null, 1) + ';\n');
console.log(out.map(o => o.n + ' ' + o.dur + 's ' + (o.url ? 'ok' : 'SEM URL')).join('\n'));

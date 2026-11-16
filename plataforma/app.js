/* Estação Semiologia — app */
(function () {
'use strict';

/* ================= STORE ================= */
const KEY = 'estacao-semio-v1';
let S = { done: {}, quiz: {}, wrong: [], osce: [], flash: {}, examDate: '', theme: '' };
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch (e) {}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

/* ================= UTILS ================= */
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const strip = h => String(h).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const norm = s => strip(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function toast(msg) { const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2200); }
const fmtTime = s => { const neg = s < 0; s = Math.abs(Math.round(s)); return (neg ? '+' : '') + String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
const TOPICOS = { anamnese: 'Anamnese', geral: 'Exame geral', resp: 'Respiratório', cardio: 'Cardiovascular', abdome: 'Abdome' };
const TOPIC_COLOR = { anamnese: 'var(--a1)', geral: 'var(--a2)', resp: 'var(--a3)', cardio: 'var(--a4)', abdome: 'var(--a5)' };
const TEO_TO_TOP = { anamnese: 'anamnese', geral: 'geral', respiratorio: 'resp', cardio: 'cardio', abdome: 'abdome' };
const ICON = {
  play: '<svg viewBox="0 0 24 24"><path d="M7 5v14l11-7z"/></svg>',
  stop: '<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="1"/></svg>',
  copy: '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
  dice: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="15" r="1"/><circle cx="15" cy="9" r="1"/><circle cx="9" cy="15" r="1"/></svg>'
};

/* ================= THEME ================= */
function applyTheme() {
  if (S.theme) document.documentElement.setAttribute('data-theme', S.theme); else document.documentElement.removeAttribute('data-theme');
  $('#themeBtn').textContent = 'Tema: ' + (S.theme === 'dark' ? 'escuro' : S.theme === 'light' ? 'claro' : 'sistema');
}
$('#themeBtn').addEventListener('click', () => { S.theme = S.theme === '' ? 'light' : S.theme === 'light' ? 'dark' : ''; save(); applyTheme(); });
applyTheme();

/* ================= NAV ================= */
function teoProg(t) { const n = t.secoes.length; const d = t.secoes.filter(s => S.done[t.id + ':' + s.id]).length; return [d, n]; }
const NAV = [
  { label: 'Começo', items: [['inicio', 'Painel', 'var(--teal)']] },
  { label: 'Teoria', items: TEORIA.map(t => ['teoria-' + t.id, t.titulo, 'var(--' + t.cor + ')', t]) },
  { label: 'Prática OSCE', items: [['osce', 'Simulador de estações', 'var(--trace)'], ['roteiros', 'Roteiros de exame', 'var(--trace)'], ['ausculta', 'Laboratório de ausculta', 'var(--trace)'], ['decodificador', 'Decodificador e mapas', 'var(--trace)']] },
  { label: 'Fixação', items: [['quiz', 'Questões', 'var(--a6)'], ['flashcards', 'Flashcards', 'var(--a6)'], ['glossario', 'Glossário', 'var(--a6)'], ['ferramentas', 'Calculadoras', 'var(--a6)']] }
];
function renderNav(active) {
  $('#nav').innerHTML = NAV.map(g => '<div class="nav-label">' + g.label + '</div>' + g.items.map(it => {
    let prog = '';
    if (it[3]) { const p = teoProg(it[3]); prog = '<span class="nav-prog">' + p[0] + '/' + p[1] + '</span>'; }
    const isActive = active === it[0] || (it[0] === 'osce' && active.indexOf('osce-') === 0);
    return '<a class="nav-link' + (isActive ? ' active' : '') + '" href="#' + it[0] + '"><span class="nav-dot" style="background:' + it[2] + '"></span>' + it[1] + prog + '</a>';
  }).join('')).join('');
}
function closeMenu() { $('#rail').classList.remove('open'); $('#scrim').hidden = true; }
$('#menuBtn').addEventListener('click', () => { $('#rail').classList.add('open'); $('#scrim').hidden = false; });
$('#scrim').addEventListener('click', closeMenu);
$('#nav').addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });

/* ================= ROUTER ================= */
let cleanup = [];
function onLeave(fn) { cleanup.push(fn); }
function route() {
  cleanup.forEach(f => { try { f(); } catch (e) {} }); cleanup = [];
  const h = (location.hash || '#inicio').slice(1) || 'inicio';
  $('#searchInput').value = '';
  renderNav(h);
  const v = $('#view');
  if (h === 'inicio') viewHome(v);
  else if (h.indexOf('teoria-') === 0) viewTeoria(v, h.slice(7));
  else if (h === 'osce') viewOsceList(v);
  else if (h.indexOf('osce-') === 0) viewOsceRun(v, h.slice(5));
  else if (h === 'roteiros') viewRoteiros(v);
  else if (h === 'ausculta') viewAusculta(v);
  else if (h === 'decodificador') viewDecoder(v);
  else if (h === 'quiz') viewQuiz(v);
  else if (h === 'flashcards') viewFlash(v);
  else if (h === 'glossario') viewGlossario(v);
  else if (h === 'ferramentas') viewFerramentas(v);
  else viewHome(v);
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);

/* ================= HOME ================= */
function quizStats(t) { const q = S.quiz[t] || { c: 0, n: 0 }; return q; }
function viewHome(v) {
  let totalSec = 0, doneSec = 0;
  TEORIA.forEach(t => { const p = teoProg(t); doneSec += p[0]; totalSec += p[1]; });
  let qc = 0, qn = 0; Object.keys(TOPICOS).forEach(t => { const q = quizStats(t); qc += q.c; qn += q.n; });
  const flashKnown = Object.keys(S.flash).filter(k => S.flash[k] >= 2).length;
  const flashTotal = GLOSSARIO.length + SINAIS.length;
  let days = '';
  if (S.examDate) {
    const d = Math.ceil((new Date(S.examDate + 'T08:00:00') - new Date()) / 86400000);
    days = d > 1 ? d + ' dias' : d === 1 ? 'amanhã' : d === 0 ? 'hoje' : 'passou';
  }
  const bestOsce = S.osce.length ? Math.max.apply(null, S.osce.map(o => o.score)) : null;
  const weak = Object.keys(TOPICOS).map(t => { const q = quizStats(t); return { t, n: q.n, p: q.n ? q.c / q.n : null }; });

  v.innerHTML = `
  <section class="hero">
    <div class="eyebrow">Semiologia do Adulto I · teórica + OSCE</div>
    <h1 style="margin-top:8px">Treine como se já estivesse na estação.</h1>
    <p>Teoria completa dos seus materiais, simulador de casos no estilo OSCE com paciente virtual, roteiros para falar em voz alta, sons cardíacos e pulmonares, ${QUIZ.length} questões e flashcards.</p>
    <div class="row" style="margin-top:10px">
      <a class="btn primary" href="#osce" id="goOsce">${ICON.dice}Sortear uma estação</a>
      <a class="btn" href="#quiz">Fazer 10 questões</a>
      <a class="btn" href="#roteiros">Roteiros de exame</a>
    </div>
    <div class="vitals">
      <div class="vital"><b>${doneSec}/${totalSec}</b><span>seções revisadas</span></div>
      <div class="vital"><b>${qn ? Math.round(qc / qn * 100) + '%' : '—'}</b><span>acerto em ${qn} questões</span></div>
      <div class="vital"><b>${S.osce.length}</b><span>${S.osce.length === 1 ? 'estação feita' : 'estações feitas'}${bestOsce !== null ? ' · melhor ' + bestOsce : ''}</span></div>
      <div class="vital"><b>${flashKnown}/${flashTotal}</b><span>flashcards dominados</span></div>
      <div class="vital"><b>${days || '—'}</b><span>${S.examDate ? 'para a prova' : 'defina a data abaixo'}</span></div>
    </div>
    <svg class="hero-ecg" viewBox="0 0 520 70" aria-hidden="true"><polyline class="ecg-path" style="stroke-dasharray:1200;stroke-dashoffset:1200" points="0,40 120,40 135,40 145,30 155,40 175,40 185,48 195,6 205,64 215,40 240,40 255,32 272,40 520,40"/></svg>
  </section>

  <h2 style="margin:28px 0 12px">Teoria</h2>
  <div class="grid-3">
    ${TEORIA.map(t => { const p = teoProg(t); return `<a class="module-card" href="#teoria-${t.id}"><h3><span class="swatch" style="background:var(--${t.cor})"></span>${t.titulo}</h3><span class="muted small">${t.resumo}</span><div class="bar"><i style="width:${p[1] ? p[0] / p[1] * 100 : 0}%;background:var(--${t.cor})"></i></div><span class="small mono">${p[0]}/${p[1]} seções</span></a>`; }).join('')}
  </div>

  <div class="grid-2" style="margin-top:24px">
    <div class="panel">
      <h3>Desempenho nas questões</h3>
      <p class="muted small">Atualiza conforme você responde. O tópico mais fraco aparece primeiro.</p>
      ${weak.sort((a, b) => (a.p === null ? 2 : a.p) - (b.p === null ? 2 : b.p)).map(w => `
        <div class="match"><span style="min-width:110px;font-weight:600">${TOPICOS[w.t]}</span><div class="bar"><i style="width:${w.p === null ? 0 : w.p * 100}%;background:${TOPIC_COLOR[w.t]}"></i></div><span class="mono small" style="min-width:64px;text-align:right">${w.p === null ? 'sem dados' : Math.round(w.p * 100) + '% · ' + w.n}</span></div>`).join('')}
      <div class="row" style="margin-top:12px"><a class="btn small" href="#quiz">Treinar</a>${S.wrong.length ? `<a class="btn small" href="#quiz" id="goWrong">Revisar ${S.wrong.length} erros</a>` : ''}</div>
    </div>
    <div class="panel">
      <h3>Data da prova</h3>
      <div class="row" style="margin-top:10px"><label class="field" for="examDate" style="flex:1">Dia da prova<input id="examDate" type="date" value="${S.examDate}"></label></div>
      <h4>Plano para os últimos dias</h4>
      <ol class="steps compact">
        <li>Leia a teoria marcando as seções revisadas.</li>
        <li>Decore os 4 roteiros de exame e fale os modelos de descrição em voz alta.</li>
        <li>Faça pelo menos uma estação de cada sistema no simulador, cronometrada.</li>
        <li>Ouça os sons no laboratório até reconhecer cada sopro pelo momento do ciclo.</li>
        <li>Questões por tópico; revise os erros no dia seguinte.</li>
        <li>Véspera: flashcards de sinais e a tabela de síndromes pulmonares.</li>
      </ol>
    </div>
  </div>
  ${S.osce.length ? `<div class="panel" style="margin-top:16px"><h3>Últimas estações</h3>${S.osce.slice(-6).reverse().map(o => { const c = CASOS.find(x => x.id === o.id); return `<div class="match"><a href="#osce-${o.id}" style="min-width:0;flex:1;font-weight:600">${c ? c.titulo : o.id}</a><span class="mono small">${fmtTime(o.time)}</span><span class="tag">${new Date(o.date).toLocaleDateString('pt-BR')}</span><b class="mono">${o.score}</b></div>`; }).join('')}</div>` : ''}
  `;
  $('#examDate').addEventListener('change', e => { S.examDate = e.target.value; save(); viewHome(v); });
  $('#goOsce').addEventListener('click', e => { e.preventDefault(); location.hash = 'osce-' + CASOS[Math.floor(Math.random() * CASOS.length)].id; });
  const gw = $('#goWrong'); if (gw) gw.addEventListener('click', e => { e.preventDefault(); quizPreset = 'erros'; location.hash = 'quiz'; if (location.hash === '#quiz') route(); });
}

/* ================= TEORIA ================= */
function viewTeoria(v, id) {
  const t = TEORIA.find(x => x.id === id); if (!t) return viewHome(v);
  const p = teoProg(t);
  v.innerHTML = `
  <div class="page-head">
    <div class="eyebrow" style="color:var(--${t.cor})">Teoria · ${p[0]}/${p[1]} revisadas</div>
    <h1>${t.titulo}</h1>
    <p>${t.resumo}</p>
  </div>
  <div class="toc" role="navigation" aria-label="Seções">${t.secoes.map(s => `<button class="chip" type="button" data-go="${s.id}">${S.done[t.id + ':' + s.id] ? '✓ ' : ''}${s.h}</button>`).join('')}</div>
  <div class="stack">
  ${t.secoes.map(s => `
    <section class="panel sec" id="sec-${s.id}">
      <div class="sec-head"><h2>${s.h}</h2><button class="btn small done-btn" type="button" data-done="${s.id}" aria-pressed="${!!S.done[t.id + ':' + s.id]}">${S.done[t.id + ':' + s.id] ? 'Revisado' : 'Marcar revisado'}</button></div>
      <div class="sec-body">${s.html}</div>
    </section>`).join('')}
  </div>
  <div class="row" style="margin-top:20px">
    <a class="btn primary" href="#quiz" id="quizTopic">Questões de ${t.titulo}</a>
    <a class="btn" href="#osce">Casos OSCE</a>
  </div>`;
  v.addEventListener('click', teoClick);
  onLeave(() => v.removeEventListener('click', teoClick));
  function teoClick(e) {
    const go = e.target.closest('[data-go]');
    if (go) { const el = $('#sec-' + go.dataset.go); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    const d = e.target.closest('[data-done]');
    if (d) {
      const k = t.id + ':' + d.dataset.done; if (S.done[k]) delete S.done[k]; else S.done[k] = 1; save();
      d.setAttribute('aria-pressed', !!S.done[k]); d.textContent = S.done[k] ? 'Revisado' : 'Marcar revisado';
      renderNav('teoria-' + t.id);
      const chip = $('[data-go="' + d.dataset.done + '"]'); if (chip) chip.textContent = (S.done[k] ? '✓ ' : '') + t.secoes.find(s => s.id === d.dataset.done).h;
    }
    const qt = e.target.closest('#quizTopic');
    if (qt) { quizPreset = TEO_TO_TOP[t.id]; }
  }
}

/* ================= OSCE LIST ================= */
const AREA_LABEL = { anamnese: 'Anamnese', geral: 'Geral', resp: 'Respiratório', cardio: 'Cardio', abdome: 'Abdome' };
let osceFilter = 'todos';
function viewOsceList(v) {
  const best = {}; S.osce.forEach(o => { best[o.id] = Math.max(best[o.id] || 0, o.score); });
  const list = CASOS.filter(c => osceFilter === 'todos' || c.area.indexOf(osceFilter) >= 0);
  v.innerHTML = `
  <div class="page-head">
    <div class="eyebrow">Prática · ${CASOS.length} estações</div>
    <h1>Simulador OSCE</h1>
    <p>Leia a porta, inicie o cronômetro e conduza: pergunte ao paciente virtual, escolha as manobras de exame e receba os achados. No fim, marque a hipótese e veja seu checklist com nota. Os casos 1 a 4 são os da aula de revisão.</p>
  </div>
  <div class="row" style="margin-bottom:16px;justify-content:space-between">
    <div class="chips">${['todos', 'anamnese', 'geral', 'resp', 'cardio', 'abdome'].map(a => `<button class="chip" type="button" data-f="${a}" aria-pressed="${osceFilter === a}">${a === 'todos' ? 'Todos' : AREA_LABEL[a]}</button>`).join('')}</div>
    <button class="btn primary" type="button" id="rand">${ICON.dice}Sortear estação</button>
  </div>
  <div class="grid-3">
    ${list.map(c => `<a class="case-card" href="#osce-${c.id}">
      <span class="lvl">${'●'.repeat(c.nivel)}${'○'.repeat(3 - c.nivel)} ${c.fonte ? '· ' + c.fonte : ''}</span>
      <h3>${c.titulo}</h3>
      <span class="muted small">${strip(c.porta).slice(0, 110)}…</span>
      <div class="row">${c.area.map(a => `<span class="tag">${AREA_LABEL[a]}</span>`).join('')}${best[c.id] !== undefined ? `<span class="tag" style="background:var(--ok-soft);color:var(--ok)">melhor ${best[c.id]}</span>` : ''}</div>
    </a>`).join('')}
  </div>`;
  v.onclick = e => {
    const f = e.target.closest('[data-f]'); if (f) { osceFilter = f.dataset.f; viewOsceList(v); }
    if (e.target.closest('#rand')) { const pool = list.length ? list : CASOS; location.hash = 'osce-' + pool[Math.floor(Math.random() * pool.length)].id; }
  };
  onLeave(() => { v.onclick = null; });
}

/* ================= OSCE RUN ================= */
function viewOsceRun(v, id) {
  const c = CASOS.find(x => x.id === id); if (!c) return viewOsceList(v);
  const hasExam = c.keyEx.length > 0;
  const st = { asked: [], done: [], log: [], phase: 'porta', t0: 0, limit: 600, elapsed: 0, timer: null, choice: null, comm: {}, order: shuffle(c.opcoes.map((_, i) => i)), tab: hasExam ? 'anamnese' : 'anamnese' };
  onLeave(() => clearInterval(st.timer));

  function tick() { st.elapsed = (Date.now() - st.t0) / 1000; const el = $('#tmr'); if (el) { const r = st.limit - st.elapsed; el.textContent = fmtTime(r); el.classList.toggle('low', r < 60); } }

  function render() {
    if (st.phase === 'porta') {
      v.innerHTML = `
      <div class="page-head"><a href="#osce" class="small">← Estações</a><div class="eyebrow">${c.fonte || 'Estação OSCE'} · nível ${c.nivel}</div><h1>${c.titulo}</h1></div>
      <div class="door"><div class="eyebrow">Porta da estação</div><p>${c.porta}</p></div>
      <div class="panel" style="margin-top:16px">
        <h3>Antes de entrar</h3>
        <ul><li>As perguntas e manobras ficam em botões; cada uma revela a resposta do paciente ou o achado.</li><li>Fale em voz alta como faria na estação: apresentação, consentimento, cada manobra e a descrição.</li><li>Há checklist automático das perguntas e manobras-chave, mais a autoavaliação da comunicação.</li></ul>
        <div class="row" style="margin-top:12px">
          <label class="field" for="lim">Tempo<select id="lim"><option value="300">5 min</option><option value="420">7 min</option><option value="600" selected>10 min</option><option value="900">15 min</option></select></label>
          <button class="btn primary" type="button" id="start" style="align-self:flex-end">${ICON.play}Entrar na estação</button>
        </div>
      </div>`;
      $('#start').onclick = () => { st.limit = +$('#lim').value; st.phase = 'run'; st.t0 = Date.now(); st.timer = setInterval(tick, 500); render(); };
      return;
    }
    if (st.phase === 'run') {
      const groupsQ = groupBy(PERGUNTAS, 'g');
      const groupsE = groupBy(MANOBRAS, 'g');
      v.innerHTML = `
      <div class="row" style="justify-content:space-between;margin-bottom:12px">
        <div style="min-width:0"><div class="eyebrow">Em andamento</div><h2>${c.titulo}</h2></div>
        <div class="row"><span class="timer" id="tmr">${fmtTime(st.limit)}</span><button class="btn primary" type="button" id="finish">Encerrar e apresentar hipótese</button></div>
      </div>
      <details class="door" style="padding:12px 16px;margin-bottom:14px"><summary style="cursor:pointer;font-weight:700">Porta da estação</summary><p>${c.porta}</p></details>
      <div class="osce-grid">
        <div class="panel">
          <div class="tabs" role="tablist">
            <button class="tab" role="tab" data-tab="anamnese" aria-selected="${st.tab === 'anamnese'}">Anamnese (${st.asked.length})</button>
            ${hasExam ? `<button class="tab" role="tab" data-tab="exame" aria-selected="${st.tab === 'exame'}">Exame físico (${st.done.length})</button>` : ''}
          </div>
          <div id="actions">
          ${st.tab === 'anamnese' ? Object.keys(groupsQ).map(g => `<div class="qgroup"><div class="qgroup-h">${g}</div>${groupsQ[g].map(q => `<button class="qbtn${st.asked.indexOf(q.k) >= 0 ? ' asked' : ''}" type="button" data-q="${q.k}">${q.l}</button>`).join('')}</div>`).join('')
          : Object.keys(groupsE).map(g => `<div class="qgroup"><div class="qgroup-h">${g}</div>${groupsE[g].map(q => `<button class="qbtn${st.done.indexOf(q.k) >= 0 ? ' asked' : ''}" type="button" data-e="${q.k}">${q.l}</button>`).join('')}</div>`).join('')}
          </div>
        </div>
        <div class="panel" style="position:sticky;top:76px">
          <div class="row" style="justify-content:space-between;margin-bottom:8px"><h3>Prontuário da estação</h3><span class="tag">${st.log.length} registros</span></div>
          <div class="log" id="log">${st.log.length ? st.log.map(l => `<div class="log-item${l.ex ? ' ex' : ''}"><span class="who">${l.ex ? 'Exame · ' : 'Paciente · '}${esc(l.q)}</span>${l.a}</div>`).join('') : '<div class="log-empty">Comece pela apresentação e uma pergunta aberta. As respostas aparecem aqui, como no seu prontuário.</div>'}</div>
        </div>
      </div>`;
      tick();
      const log = $('#log'); log.scrollTop = log.scrollHeight;
      v.onclick = e => {
        const tb = e.target.closest('[data-tab]'); if (tb) { st.tab = tb.dataset.tab; render(); return; }
        const q = e.target.closest('[data-q]');
        if (q) { const k = q.dataset.q; const def = PERGUNTAS.find(x => x.k === k); if (st.asked.indexOf(k) < 0) st.asked.push(k); st.log.push({ q: def.l, a: c.anamnese[k] || PERGUNTA_PADRAO }); render(); return; }
        const ex = e.target.closest('[data-e]');
        if (ex) { const k = ex.dataset.e; const def = MANOBRAS.find(x => x.k === k); if (st.done.indexOf(k) < 0) st.done.push(k); st.log.push({ ex: 1, q: def.l, a: c.exame[k] || def.n }); render(); return; }
        if (e.target.closest('#finish')) { clearInterval(st.timer); st.elapsed = (Date.now() - st.t0) / 1000; st.phase = 'answer'; render(); }
      };
      onLeave(() => { v.onclick = null; });
      return;
    }
    if (st.phase === 'answer') {
      v.innerHTML = `
      <div class="page-head"><div class="eyebrow">Tempo usado ${fmtTime(st.elapsed)}</div><h1>Hipótese e autoavaliação</h1></div>
      <div class="grid-2">
        <div class="panel">
          <h3 style="margin-bottom:10px">${c.pergunta}</h3>
          ${st.order.map(i => `<button class="opt" type="button" data-o="${i}" ${st.choice !== null ? 'disabled' : ''}>${c.opcoes[i]}</button>`).join('')}
          <p class="muted small">Antes de clicar, fale sua síntese em voz alta: síndromes + hipótese principal + diferenciais.</p>
        </div>
        <div class="panel">
          <h3>Comunicação e postura</h3>
          <p class="muted small">Seja honesto: marque só o que você realmente fez/falou.</p>
          ${COMUNICACAO.map((x, i) => `<label class="check"><input type="checkbox" data-c="${i}" ${st.comm[i] ? 'checked' : ''}>${x}</label>`).join('')}
        </div>
      </div>
      <div class="row" style="margin-top:16px"><button class="btn primary" type="button" id="seeRes" ${st.choice === null ? 'disabled' : ''}>Ver resultado</button><span class="muted small">${st.choice === null ? 'Escolha uma hipótese para liberar o resultado.' : ''}</span></div>`;
      v.onclick = e => {
        const o = e.target.closest('[data-o]');
        if (o && st.choice === null) { st.choice = +o.dataset.o; render(); return; }
        if (e.target.closest('#seeRes') && st.choice !== null) { st.phase = 'result'; saveResult(); render(); }
      };
      v.onchange = e => { const cb = e.target.closest('[data-c]'); if (cb) st.comm[cb.dataset.c] = cb.checked; };
      onLeave(() => { v.onclick = null; v.onchange = null; });
      return;
    }
    if (st.phase === 'result') {
      const r = score();
      const missedAbn = Object.keys(c.exame).filter(k => st.done.indexOf(k) < 0);
      v.innerHTML = `
      <div class="page-head"><a href="#osce" class="small">← Estações</a><div class="eyebrow">Resultado · ${fmtTime(st.elapsed)} de ${fmtTime(st.limit)}</div><h1>${c.titulo}</h1></div>
      <div class="panel" style="display:flex;gap:20px;align-items:center;flex-wrap:wrap">
        ${ring(r.total)}
        <div style="flex:1;min-width:220px">
          <div class="match"><span style="min-width:150px">Anamnese-chave</span><div class="bar"><i style="width:${r.qa * 100}%"></i></div><span class="mono small">${r.qHit}/${c.keyQ.length}</span></div>
          ${hasExam ? `<div class="match"><span style="min-width:150px">Exame-chave</span><div class="bar"><i style="width:${r.ea * 100}%"></i></div><span class="mono small">${r.eHit}/${c.keyEx.length}</span></div>` : ''}
          <div class="match"><span style="min-width:150px">Hipótese</span><div class="bar"><i style="width:${r.h * 100}%"></i></div><span class="mono small">${r.h ? 'certa' : 'errada'}</span></div>
          <div class="match"><span style="min-width:150px">Comunicação</span><div class="bar"><i style="width:${r.cm * 100}%"></i></div><span class="mono small">${r.cmHit}/${COMUNICACAO.length}</span></div>
          ${st.elapsed > st.limit ? '<p class="small" style="color:var(--bad)">Passou do tempo. Na prova real a estação seria interrompida.</p>' : ''}
        </div>
      </div>
      <div class="grid-2" style="margin-top:16px">
        <div class="panel">
          <h3>Hipótese</h3>
          ${st.order.map(i => `<div class="opt ${i === c.correta ? 'right' : (i === st.choice ? 'wrong' : '')}" style="cursor:default">${c.opcoes[i]}</div>`).join('')}
        </div>
        <div class="panel">
          <h3>Discussão</h3>
          ${c.discussao}
        </div>
      </div>
      <div class="grid-2" style="margin-top:16px">
        <div class="panel"><h3>Checklist de anamnese</h3>
          ${c.keyQ.map(k => { const ok = st.asked.indexOf(k) >= 0; return `<div class="check"><span class="mark ${ok ? 'y' : 'n'}">${ok ? '✓' : '✗'}</span><div><b>${PERGUNTAS.find(p => p.k === k).l}</b><div class="small muted">${c.anamnese[k] || PERGUNTA_PADRAO}</div></div></div>`; }).join('')}
        </div>
        ${hasExam ? `<div class="panel"><h3>Checklist de exame</h3>
          ${c.keyEx.map(k => { const ok = st.done.indexOf(k) >= 0; const m = MANOBRAS.find(p => p.k === k); return `<div class="check"><span class="mark ${ok ? 'y' : 'n'}">${ok ? '✓' : '✗'}</span><div><b>${m.l}</b><div class="small muted">${c.exame[k] || m.n}</div></div></div>`; }).join('')}
          ${missedAbn.filter(k => c.keyEx.indexOf(k) < 0).length ? `<h4>Outros achados alterados que você não pesquisou</h4>${missedAbn.filter(k => c.keyEx.indexOf(k) < 0).map(k => `<div class="check"><span class="mark">•</span><div><b>${MANOBRAS.find(p => p.k === k).l}</b><div class="small muted">${c.exame[k]}</div></div></div>`).join('')}` : ''}
        </div>` : ''}
      </div>
      <div class="row" style="margin-top:16px"><button class="btn primary" type="button" id="again">Refazer esta estação</button><a class="btn" href="#osce">Outra estação</a></div>`;
      v.onclick = e => { if (e.target.closest('#again')) viewOsceRun(v, id); };
      onLeave(() => { v.onclick = null; });
    }
  }
  function score() {
    const qHit = c.keyQ.filter(k => st.asked.indexOf(k) >= 0).length;
    const eHit = c.keyEx.filter(k => st.done.indexOf(k) >= 0).length;
    const cmHit = Object.keys(st.comm).filter(k => st.comm[k]).length;
    const qa = qHit / c.keyQ.length, ea = hasExam ? eHit / c.keyEx.length : 0, h = st.choice === c.correta ? 1 : 0, cm = cmHit / COMUNICACAO.length;
    const total = Math.round(hasExam ? qa * 30 + ea * 30 + h * 25 + cm * 15 : qa * 60 + h * 25 + cm * 15);
    return { qHit, eHit, cmHit, qa, ea, h, cm, total };
  }
  function saveResult() { const r = score(); S.osce.push({ id: c.id, score: r.total, time: Math.round(st.elapsed), date: Date.now() }); if (S.osce.length > 60) S.osce = S.osce.slice(-60); save(); }
  render();
}
function groupBy(arr, k) { const o = {}; arr.forEach(x => { (o[x[k]] = o[x[k]] || []).push(x); }); return o; }
function ring(val) {
  const r = 50, C = 2 * Math.PI * r, col = val >= 70 ? 'var(--ok)' : val >= 50 ? 'var(--amber)' : 'var(--bad)';
  return `<svg class="score-ring" viewBox="0 0 120 120" role="img" aria-label="Nota ${val} de 100"><circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="10"/><circle cx="60" cy="60" r="${r}" fill="none" stroke="${col}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C * val / 100} ${C}" transform="rotate(-90 60 60)"/><text x="60" y="58" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="28" fill="var(--ink)">${val}</text><text x="60" y="78" text-anchor="middle" font-size="11" fill="var(--muted)">de 100</text></svg>`;
}

/* ================= ROTEIROS ================= */
const ROTEIROS = [
{ id: 'abertura', t: 'Abertura e encerramento (toda estação)', passos: [
  ['Higienizar as mãos', 'Vou higienizar as mãos antes de iniciar.', 'Faça o gesto completo. Muitos checklists pontuam isso.'],
  ['Apresentar-se', 'Bom dia, meu nome é ___, sou estudante de Medicina. Qual é o seu nome?', 'Pergunte como prefere ser chamado (nome social).'],
  ['Explicar e pedir consentimento', 'Vou conversar com o(a) senhor(a) e depois examinar. Posso?', ''],
  ['Privacidade e posicionamento', 'Vou fechar a cortina. O senhor pode se sentar/deitar assim?', 'Exponha só a região examinada; respeite o pudor. Fique à direita do paciente.'],
  ['Pergunta aberta', 'O que trouxe o(a) senhor(a) aqui hoje?', 'Deixe falar sem interromper; depois direcione.'],
  ['Encerramento', 'Terminamos. Vou conversar com a equipe e explicar os próximos passos. Alguma dúvida?', 'Agradeça, cubra o paciente, higienize as mãos de novo.']
]},
{ id: 'anamnese', t: 'Anamnese completa', passos: [
  ['Identificação', 'Nome, idade, sexo, cor, estado civil, profissão (atual e anteriores), naturalidade, procedência, religião, escolaridade', 'Registre a fonte e a confiabilidade.'],
  ['Queixa e duração', '"Qual o principal motivo da consulta? Há quanto tempo?"', 'Palavras do paciente, sem rótulo diagnóstico.'],
  ['HDA – sintoma-guia', 'Início, característica, intensidade (0–10), localização e irradiação, fatores de melhora e piora, evolução, sintomas associados, situação atual', 'OPQRST. Para dispneia: grau de esforço, ortopneia, DPN.'],
  ['HDA – tratamentos já feitos', '"Tomou algum remédio? Qual, quem receitou, que dose?"', ''],
  ['HDA – negativas pertinentes', 'Pergunte o que ajuda no diferencial (ex.: febre, dor torácica, sintomas urinários)', 'Finalize a HDA com o que o paciente nega.'],
  ['IDA', '"Agora vou perguntar sobre o corpo todo, mesmo que não tenha relação."', 'Geral, pele, cabeça, respiratório, cardio, digestório, urinário, genital, neuro, locomotor.'],
  ['Antecedentes pessoais', 'Doenças, medicações (dose, tempo), cirurgias, internações, transfusões, alergias, vacinas, gineco-obstétricos', ''],
  ['Antecedentes familiares', 'Pais, irmãos, filhos: doenças e causa/idade de óbito', ''],
  ['Hábitos e condições de vida', 'Tabagismo (maços-ano), etilismo, drogas, alimentação, atividade física, sono, moradia, saneamento, ocupação', 'Use perguntas que não constrangem.'],
  ['Resumo ao paciente', '"Deixa eu ver se entendi: o senhor está com… há…"', 'Mostra escuta ativa e confirma dados.']
]},
{ id: 'geral', t: 'Exame físico geral', passos: [
  ['Estado geral', '"Paciente em bom/regular/mau estado geral."', ''],
  ['Consciência e orientação', '"Consciente, orientado no tempo e no espaço." (pergunte nome, data, local)', 'Se rebaixado: Glasgow.'],
  ['Fácies, biotipo, atitude', '"Fácies atípica, normolíneo, atitude ativa."', ''],
  ['Sinais vitais', 'PA, FC (1 min, ritmo), FR (1 min, sem avisar), Tax, SpO₂', 'Conte a FR fingindo ainda palpar o pulso.'],
  ['Mucosas', 'Puxe a pálpebra inferior e olhe a boca: "Mucosas normocoradas e hidratadas."', 'Gradue 1+/4+.'],
  ['Pele', '"Acianótico, anictérico." Olhe esclera e freio lingual. Procure lesões.', ''],
  ['Perfusão', 'TEC na polpa digital; temperatura das extremidades', ''],
  ['Mãos e unhas', 'Baqueteamento (janela entre os indicadores), coiloníquia, eritema palmar, flapping', ''],
  ['Edema', 'Pressione 5 s sobre tíbia/maléolo dos dois lados: cacifo, intensidade, consistência, temperatura, dor', 'Compare os lados com o dorso da mão.'],
  ['Linfonodos', 'Cadeias cervicais, supraclaviculares, axilares, epitrocleares, inguinais, com polpas digitais em movimentos circulares, bilateral', 'Descreva os 8 itens se palpável.'],
  ['Antropometria', 'Peso, altura, IMC, circunferência abdominal', '']
], desc: 'Paciente em bom estado geral, consciente, orientado no tempo e no espaço, corado, hidratado, afebril, acianótico, anictérico, eupneico em ar ambiente. Fácies atípica, atitude ativa. Pele íntegra. TEC < 2 s. Sem edemas. Sem linfonodomegalias palpáveis. Sinais vitais: PA 120 × 80 mmHg, FC 78 bpm, FR 16 irpm, Tax 36,5 °C.' },
{ id: 'resp', t: 'Exame do aparelho respiratório', passos: [
  ['Posicionar', '"Por favor, sente-se e tire a camisa." Examine face anterior e posterior.', 'Use o ângulo de Louis para contar os EIC.'],
  ['Inspeção estática', 'Formato do tórax, simetria, abaulamentos, retrações, cicatrizes, circulação colateral', ''],
  ['Inspeção dinâmica', 'FR, ritmo, amplitude, tipo respiratório, musculatura acessória, tiragem', ''],
  ['Expansibilidade', 'Mãos espalmadas nos ápices e depois nas bases, polegares próximos à linha média: "Respire fundo."', 'Compare os lados. Assimetria é o achado mais importante.'],
  ['Frêmito toracovocal', '"Fale trinta e três." Mão espalmada (ou borda ulnar), comparando simetricamente de cima para baixo, posterior, lateral e anterior', ''],
  ['Percussão', 'Digitodigital, comparando pontos simétricos de cima para baixo, no dorso, axilas e face anterior', 'Dedo plessímetro firme no EIC; golpe de punho.'],
  ['Ausculta', 'Diafragma, paciente respirando pela boca, profundo; pontos simétricos alternando lados, posterior, lateral e anterior', 'Descreva MV e adventícios.'],
  ['Ressonância vocal', '"Fale trinta e três" e depois cochichado, auscultando', 'Broncofonia, pectorilóquia, egofonia.']
], desc: 'Tórax atípico, simétrico, sem abaulamentos ou retrações. Eupneico, FR 16 irpm, padrão toracoabdominal, sem uso de musculatura acessória. Expansibilidade preservada e simétrica. FTV presente e simétrico. Som claro pulmonar à percussão. MV presente e simétrico, sem ruídos adventícios. Ressonância vocal normal.' },
{ id: 'cardio', t: 'Exame cardiovascular', passos: [
  ['Pulsos', 'Radial (FC e ritmo em 1 min), comparar bilateralmente; carotídeo (um lado por vez); femorais, poplíteos, pediosos e tibiais posteriores', 'Nunca palpe as duas carótidas juntas.'],
  ['Pressão arterial', 'Método auscultatório, estimando antes pela palpação da radial', 'Na estação, fale a técnica enquanto faz.'],
  ['Jugulares', 'Decúbito a 45°, cabeça para a esquerda: turgência e pulso venoso; refluxo hepatojugular', ''],
  ['Inspeção do precórdio', 'Abaulamentos, ictus visível, pulsações', 'Ilumine tangencialmente.'],
  ['Palpação do ictus', 'Polpas digitais no 5º EIC LHC esquerda; se não achar, DLE', 'Localização, extensão (polpas), intensidade, ritmo.'],
  ['Frêmitos e pulsações', 'Palpe os focos com a palma: frêmito = sopro ≥ 4+', ''],
  ['Ausculta com diafragma', 'Focos aórtico, pulmonar, aórtico acessório, tricúspide e mitral, palpando o pulso carotídeo para identificar B1', 'B1 coincide com o pulso carotídeo.'],
  ['Ausculta com campânula', 'Foco mitral e tricúspide (B3, B4, ruflar)', 'Encoste levemente.'],
  ['Manobras', 'DLE (mitral), sentado inclinado em expiração (aórtico), inspiração profunda (Rivero-Carvallo), handgrip', 'Use quando houver sopro.'],
  ['Irradiação', 'Axila, carótidas, dorso', 'Para descrever o sopro.']
], desc: 'Pulsos periféricos palpáveis, simétricos, amplitude normal. Sem turgência jugular a 45°. Ictus cordis palpável no 5º EIC esquerdo na LHC, 1–2 polpas, não propulsivo. Ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros. FC 78 bpm, PA 120 × 80 mmHg.' },
{ id: 'abdome', t: 'Exame do abdome', passos: [
  ['Posicionar', 'Decúbito dorsal, braços ao longo do corpo, pernas estendidas, travesseiro baixo; expor do xifoide ao púbis', 'Mãos aquecidas; pergunte onde dói e deixe por último.'],
  ['Inspeção', 'De frente, tangencial e dos pés da maca: forma, simetria, cicatrizes, abaulamentos, circulação colateral, peristaltismo, pulsações', 'Peça para tossir/fazer força: hérnias.'],
  ['Ausculta', 'Centro de cada quadrante por 10–15 s; sopros na aorta, renais e ilíacas', 'Antes de percutir e palpar!'],
  ['Percussão', 'Linhas longitudinais ou raios a partir do umbigo; espaço de Traube', ''],
  ['Hepatimetria', 'Percutir a LHC direita do 2º EIC para baixo (macicez) e de baixo para cima (timpanismo)', 'Normal até ~12 cm.'],
  ['Palpação superficial', 'Polpas, compressão suave, os 4 quadrantes, começando longe da dor', 'Defesa? Hérnias? Diástase?'],
  ['Palpação profunda', 'Deslizante, mãos a 45°, aprofundando na expiração', 'Massas: 7 características.'],
  ['Fígado', 'Lemos-Torres ou Mathieu (em garra), borda tocando na inspiração', 'Borda, superfície, consistência, sensibilidade.'],
  ['Baço', 'Castell; palpação bimanual e em Schuster', ''],
  ['Sinais conforme o caso', 'Murphy, Blumberg, Rovsing, Psoas, Obturador, Giordano, macicez móvel, Skoda, piparote', 'Avise antes do Blumberg.']
], desc: 'Abdome plano, simétrico, sem cicatrizes ou circulação colateral. RHA presentes e normoativos, sem sopros. Timpânico à percussão, macicez restrita à área hepática, Traube livre. Flácido, indolor à palpação superficial e profunda, sem massas ou visceromegalias. Hepatimetria de 10 cm na LHC direita, borda não palpável. Baço não palpável. Murphy, Blumberg e Giordano negativos.' }
];
let rotSel = 'abertura', rotHide = false; const rotDone = {};
function viewRoteiros(v) {
  const r = ROTEIROS.find(x => x.id === rotSel);
  v.innerHTML = `
  <div class="page-head"><div class="eyebrow">Prática</div><h1>Roteiros de exame</h1><p>O passo a passo para executar e verbalizar em cada estação. Ative "Treinar de memória" para esconder os passos e revelar um por um depois de lembrar.</p></div>
  <div class="chips" style="margin-bottom:14px">${ROTEIROS.map(x => `<button class="chip" type="button" data-r="${x.id}" aria-pressed="${x.id === rotSel}">${x.t}</button>`).join('')}</div>
  <div class="panel">
    <div class="row" style="justify-content:space-between;margin-bottom:6px">
      <h2>${r.t}</h2>
      <div class="row"><label class="row small" style="gap:6px;font-weight:600"><input type="checkbox" id="hide" ${rotHide ? 'checked' : ''} style="width:18px;height:18px;accent-color:var(--teal)">Treinar de memória</label><button class="btn small" type="button" id="reset">Zerar</button></div>
    </div>
    ${r.passos.map((p, i) => { const k = r.id + i; const done = rotDone[k]; const hidden = rotHide && !done; return `
      <div class="step-card${done ? ' done' : ''}" data-s="${k}" style="cursor:pointer">
        <span class="step-n">${String(i + 1).padStart(2, '0')}</span>
        <div style="min-width:0">${hidden ? '<b class="muted">Lembre-se do passo e clique para conferir</b>' : `<b>${p[0]}</b><div class="say">${p[1]}</div>${p[2] ? `<div class="small muted">${p[2]}</div>` : ''}`}</div>
      </div>`; }).join('')}
    ${r.desc ? `<h4>Descrição normal para falar ao examinador</h4><div class="model">${r.desc}</div><div class="row" style="margin-top:8px"><button class="btn small" type="button" id="copyDesc">${ICON.copy}Copiar</button></div>` : ''}
  </div>`;
  v.onclick = e => {
    const c = e.target.closest('[data-r]'); if (c) { rotSel = c.dataset.r; viewRoteiros(v); return; }
    const s = e.target.closest('[data-s]'); if (s) { rotDone[s.dataset.s] = !rotDone[s.dataset.s]; viewRoteiros(v); return; }
    if (e.target.closest('#reset')) { Object.keys(rotDone).forEach(k => { if (k.indexOf(rotSel) === 0) delete rotDone[k]; }); viewRoteiros(v); }
    if (e.target.closest('#copyDesc')) copyText(r.desc);
  };
  v.onchange = e => { if (e.target.id === 'hide') { rotHide = e.target.checked; viewRoteiros(v); } };
  onLeave(() => { v.onclick = null; v.onchange = null; });
}
function copyText(t) {
  try { navigator.clipboard.writeText(t).then(() => toast('Copiado'), () => toast('Selecione o texto e copie manualmente')); }
  catch (e) { toast('Selecione o texto e copie manualmente'); }
}

/* ================= AUDIO ENGINE ================= */
let AC = null, master = null, noiseBuf = null;
function ac() {
  if (!AC) {
    const Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return null;
    AC = new Ctx();
    const comp = AC.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 4;
    master = AC.createGain(); master.gain.value = 0.8; master.connect(comp); comp.connect(AC.destination);
    noiseBuf = AC.createBuffer(1, AC.sampleRate * 3, AC.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (AC.state === 'suspended') AC.resume();
  return AC;
}
function env(g, t, shape, dur, peak) {
  const a = g.gain; a.setValueAtTime(0.0001, t);
  if (shape === 'diamond') { a.linearRampToValueAtTime(peak, t + dur * 0.45); a.linearRampToValueAtTime(0.0001, t + dur); }
  else if (shape === 'plateau') { a.linearRampToValueAtTime(peak, t + 0.02); a.setValueAtTime(peak, t + dur - 0.03); a.linearRampToValueAtTime(0.0001, t + dur); }
  else if (shape === 'decresc') { a.linearRampToValueAtTime(peak, t + 0.015); a.exponentialRampToValueAtTime(0.0005, t + dur); }
  else if (shape === 'cresc') { a.linearRampToValueAtTime(peak * 0.15, t + 0.01); a.linearRampToValueAtTime(peak, t + dur - 0.01); a.linearRampToValueAtTime(0.0001, t + dur); }
  else if (shape === 'breath') { a.linearRampToValueAtTime(peak, t + dur * 0.25); a.setValueAtTime(peak, t + dur * 0.7); a.linearRampToValueAtTime(0.0001, t + dur); }
  else { a.linearRampToValueAtTime(peak, t + 0.005); a.exponentialRampToValueAtTime(0.0005, t + dur); }
}
function thump(t, f0, dur, g, bright) {
  const c = AC; const og = c.createGain(); og.connect(master);
  const o = c.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * 0.7, t + dur);
  const o2 = c.createOscillator(); o2.type = 'triangle'; o2.frequency.setValueAtTime(f0 * 2, t); o2.frequency.exponentialRampToValueAtTime(f0 * 1.4, t + dur);
  const g2 = c.createGain(); g2.gain.value = 0.35; o2.connect(g2); g2.connect(og); o.connect(og);
  env(og, t, 'hit', dur, g);
  o.start(t); o2.start(t); o.stop(t + dur + 0.05); o2.stop(t + dur + 0.05);
  const n = c.createBufferSource(); n.buffer = noiseBuf; const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = bright || f0 * 3; bp.Q.value = 1.2;
  const ng = c.createGain(); n.connect(bp); bp.connect(ng); ng.connect(master); env(ng, t, 'hit', dur * 0.6, g * 0.5);
  n.start(t, Math.random() * 2); n.stop(t + dur);
}
function noise(t, dur, shape, peak, ftype, freq, Q, am) {
  const c = AC; const n = c.createBufferSource(); n.buffer = noiseBuf;
  const f = c.createBiquadFilter(); f.type = ftype; f.frequency.value = freq; f.Q.value = Q || 0.7;
  const g = c.createGain(); n.connect(f); f.connect(g);
  if (am) {
    const amg = c.createGain(); amg.gain.value = 0.55; const lfo = c.createOscillator(); lfo.frequency.value = am; const lg = c.createGain(); lg.gain.value = 0.45;
    lfo.connect(lg); lg.connect(amg.gain); g.connect(amg); amg.connect(master); lfo.start(t); lfo.stop(t + dur + 0.05);
  } else g.connect(master);
  env(g, t, shape, dur, peak);
  n.start(t, Math.random() * 1.5); n.stop(t + dur + 0.05);
}
function tone(t, dur, freq, peak, type, shape, vib) {
  const c = AC; const o = c.createOscillator(); o.type = type || 'sine'; o.frequency.value = freq;
  if (vib) { const l = c.createOscillator(); l.frequency.value = vib; const lg = c.createGain(); lg.gain.value = freq * 0.02; l.connect(lg); lg.connect(o.frequency); l.start(t); l.stop(t + dur + 0.05); }
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = Math.max(freq * 3, 400);
  const g = c.createGain(); o.connect(lp); lp.connect(g); g.connect(master); env(g, t, shape || 'breath', dur, peak);
  o.start(t); o.stop(t + dur + 0.05);
}
function crackle(t, dur, peak, freq) { noise(t, dur, 'hit', peak, 'bandpass', freq, 1.5); }

/* Presets: cycle (s), fn(t,i) agenda sons; marks (fração do ciclo) para desenho */
const HB = 0.833, T1 = 0.10, T2 = 0.40;
const SONS = [
  { id: 'normal', g: 'cardio', n: 'Normal (B1 + B2)', s: 'Ritmo em 2 tempos', cycle: HB,
    fn: t => { thump(t + T1, 62, 0.12, 1); thump(t + T2, 90, 0.08, 0.75, 260); },
    marks: [['spike', T1, 1, 'B1'], ['spike', T2, 0.75, 'B2']],
    d: '<b>TUM-TÁ</b>. B1 (fechamento mitral e tricúspide) é mais grave e longa, maior no foco mitral; B2 (aórtica e pulmonar) é mais aguda e seca, maior na base. A sístole (B1→B2) é mais curta que a diástole.' },
  { id: 'desdobr', g: 'cardio', n: 'Desdobramento fisiológico de B2', s: 'Separa na inspiração', cycle: HB,
    fn: (t, i) => { const insp = (i % 6) < 3; thump(t + T1, 62, 0.12, 1); thump(t + T2, 92, 0.07, 0.7, 260); if (insp) thump(t + T2 + 0.045, 100, 0.06, 0.55, 300); },
    resp: i => (i % 6) < 3 ? 'inspiração' : 'expiração',
    marks: [['spike', T1, 1, 'B1'], ['spike', T2, 0.7, 'A2'], ['spike', T2 + 0.054, 0.55, 'P2*']],
    d: 'Na <b>inspiração</b> o retorno ao VD aumenta e P2 atrasa: "TUM-TLÁ". Na expiração volta a "TUM-TÁ". Melhor no foco pulmonar. Fixo = CIA; paradoxal (separa na expiração) = BRE, estenose aórtica. (*P2 só nos ciclos de inspiração.)' },
  { id: 'b3', g: 'cardio', n: 'B3 (galope ventricular)', s: 'Protodiastólica', cycle: HB,
    fn: t => { thump(t + T1, 62, 0.12, 1); thump(t + T2, 90, 0.08, 0.75, 260); thump(t + T2 + 0.15, 42, 0.1, 0.9, 110); },
    marks: [['spike', T1, 1, 'B1'], ['spike', T2, 0.75, 'B2'], ['spike', (T2 + 0.15) / HB * HB, 0.55, 'B3']],
    d: 'Som grave logo após B2, no enchimento rápido: "TA-TA-TU" (Kentucky). <b>Campânula</b> no foco mitral em DLE. Fisiológica em jovens, atletas e gestantes; patológica na IC com sobrecarga de volume, IM.' },
  { id: 'b4', g: 'cardio', n: 'B4 (galope atrial)', s: 'Pré-sistólica', cycle: HB,
    fn: t => { thump(t + 0.01, 40, 0.08, 0.85, 110); thump(t + T1, 62, 0.12, 1); thump(t + T2, 90, 0.08, 0.75, 260); },
    marks: [['spike', 0.012, 0.5, 'B4'], ['spike', T1, 1, 'B1'], ['spike', T2, 0.75, 'B2']],
    d: 'Som grave logo <b>antes de B1</b>: "TU-TUM-TÁ" (Tennessee). Contração atrial contra ventrículo rígido: HAS, estenose aórtica, cardiomiopatia hipertrófica. Quase sempre patológica.' },
  { id: 'eao', g: 'cardio', n: 'Estenose aórtica', s: 'Mesossistólico em diamante', cycle: HB,
    fn: t => { thump(t + T1, 62, 0.12, 0.9); noise(t + T1 + 0.05, 0.22, 'diamond', 0.75, 'bandpass', 320, 0.9); thump(t + T2, 90, 0.07, 0.4, 260); },
    marks: [['spike', T1, 0.9, 'B1'], ['shape', T1 + 0.05, T1 + 0.27, 'diamond', 0.8, 'sopro'], ['spike', T2, 0.4, 'B2']],
    d: 'Sopro <b>de ejeção</b>, rude, que começa após B1, cresce e decresce (diamante) e termina antes de B2. Foco aórtico, irradia para <b>carótidas</b>. Pulso parvus et tardus, pressão convergente. Diminui com handgrip.' },
  { id: 'im', g: 'cardio', n: 'Insuficiência mitral', s: 'Holossistólico em platô', cycle: HB,
    fn: t => { thump(t + T1, 62, 0.1, 0.45); noise(t + T1, 0.30, 'plateau', 0.5, 'bandpass', 520, 0.7); thump(t + T2, 90, 0.08, 0.7, 260); thump(t + T2 + 0.15, 42, 0.09, 0.6, 110); },
    marks: [['spike', T1, 0.45, 'B1'], ['shape', T1, T2, 'plateau', 0.6, 'sopro'], ['spike', T2, 0.7, 'B2'], ['spike', T2 + 0.15, 0.4, 'B3']],
    d: 'Sopro <b>regurgitativo</b> que ocupa toda a sístole, de intensidade constante, encobrindo B1 (hipofonética). Foco mitral, irradia para <b>axila</b>. Pode haver B3. Aumenta com handgrip, diminui com Valsalva.' },
  { id: 'iao', g: 'cardio', n: 'Insuficiência aórtica', s: 'Protodiastólico aspirativo', cycle: HB,
    fn: t => { thump(t + T1, 62, 0.12, 0.9); thump(t + T2, 90, 0.08, 0.75, 260); noise(t + T2 + 0.01, 0.34, 'decresc', 0.55, 'highpass', 650, 0.6); },
    marks: [['spike', T1, 0.9, 'B1'], ['spike', T2, 0.75, 'B2'], ['shape', T2 + 0.01, T2 + 0.35, 'decresc', 0.6, 'sopro']],
    d: 'Sopro agudo, <b>aspirativo</b>, que começa junto de B2 e vai diminuindo (decrescendo). Foco aórtico acessório; melhor sentado, inclinado para frente, em expiração. Pulso de Corrigan, pressão divergente.' },
  { id: 'em', g: 'cardio', n: 'Estenose mitral', s: 'Estalido + ruflar diastólico', cycle: HB,
    fn: t => { noise(t + 0.0, 0.1, 'cresc', 0.6, 'lowpass', 140, 0.8, 24); thump(t + T1, 78, 0.09, 1.35, 340); thump(t + T2, 90, 0.07, 0.7, 260); thump(t + T2 + 0.07, 160, 0.03, 0.7, 900); noise(t + T2 + 0.12, 0.26, 'decresc', 0.65, 'lowpass', 130, 0.9, 22); },
    marks: [['shape', 0.0, 0.1, 'cresc', 0.55, ''], ['spike', T1, 1.2, 'B1↑'], ['spike', T2, 0.7, 'B2'], ['spike', T2 + 0.07, 0.6, 'EA'], ['shape', T2 + 0.12, T2 + 0.38, 'decresc', 0.6, 'ruflar']],
    d: '<b>B1 hiperfonética</b>, <b>estalido de abertura</b> (EA) logo após B2 e <b>ruflar</b> grave no meio da diástole, com <b>reforço pré-sistólico</b> antes de B1 (some na FA). Campânula no foco mitral em DLE. Não irradia.' },
  { id: 'pvm', g: 'cardio', n: 'Prolapso mitral', s: 'Clique mesossistólico', cycle: HB,
    fn: t => { thump(t + T1, 62, 0.12, 1); thump(t + 0.27, 180, 0.025, 0.75, 1400); noise(t + 0.28, 0.11, 'cresc', 0.32, 'bandpass', 600, 0.8); thump(t + T2, 90, 0.08, 0.75, 260); },
    marks: [['spike', T1, 1, 'B1'], ['spike', 0.27, 0.6, 'clique'], ['shape', 0.28, 0.39, 'cresc', 0.35, ''], ['spike', T2, 0.75, 'B2']],
    d: '<b>Clique</b> agudo no meio/fim da sístole (tensão súbita dos folhetos frouxos), às vezes seguido de sopro telessistólico. Área mitral.' },
  { id: 'pca', g: 'cardio', n: 'Contínuo (PCA)', s: '"Em maquinaria"', cycle: HB,
    fn: t => { thump(t + T1, 62, 0.1, 0.5); noise(t + T1, 0.30, 'cresc', 0.55, 'bandpass', 380, 0.6, 38); noise(t + T2, 0.42, 'decresc', 0.55, 'bandpass', 380, 0.6, 38); thump(t + T2, 90, 0.07, 0.45, 260); },
    marks: [['spike', T1, 0.5, 'B1'], ['shape', T1, T2, 'cresc', 0.7, ''], ['shape', T2, T2 + 0.42, 'decresc', 0.7, 'contínuo'], ['spike', T2, 0.45, 'B2']],
    d: 'Sopro <b>sistodiastólico</b> que recobre B1 e B2, máximo perto de B2: ruído de máquina. Persistência do canal arterial, fístulas AV.' },
  { id: 'atrito', g: 'cardio', n: 'Atrito pericárdico', s: '"Couro raspando"', cycle: HB,
    fn: t => { thump(t + T1, 62, 0.1, 0.55); thump(t + T2, 90, 0.07, 0.45, 260); [0.02, 0.2, 0.52].forEach(x => noise(t + x, 0.09, 'diamond', 0.6, 'highpass', 1500, 0.7, 70)); },
    marks: [['shape', 0.02, 0.11, 'diamond', 0.55, ''], ['spike', T1, 0.55, 'B1'], ['shape', 0.2, 0.29, 'diamond', 0.55, 'atrito'], ['spike', T2, 0.45, 'B2'], ['shape', 0.52, 0.61, 'diamond', 0.55, '']],
    d: 'Ruído áspero, superficial, com até 3 componentes por ciclo, que não segue exatamente as fases. Ponta e BEE; varia de intensidade e melhora sentado. Pericardite.' },
  /* pulmonares: ciclo 4 s — inspiração 0–1.5, expiração 1.5–3.5 */
  { id: 'mv', g: 'pulm', n: 'Murmúrio vesicular', s: 'Normal', cycle: 4,
    fn: t => { noise(t, 1.5, 'breath', 0.5, 'bandpass', 280, 0.5); noise(t + 1.5, 0.9, 'decresc', 0.18, 'bandpass', 250, 0.5); },
    marks: [['breath'], ['label', 0.19, 'inspiração'], ['label', 0.55, 'expiração']],
    d: 'Suave, inspiratório mais intenso e longo que o expiratório. Periferia pulmonar. Descreva: "MV presente e simétrico, sem ruídos adventícios".' },
  { id: 'tubario', g: 'pulm', n: 'Sopro tubário', s: 'Consolidação', cycle: 4,
    fn: t => { noise(t, 1.5, 'breath', 0.55, 'bandpass', 1100, 0.9); noise(t + 1.6, 1.7, 'breath', 0.6, 'bandpass', 1100, 0.9); },
    marks: [['breath'], ['label', 0.19, 'inspiração'], ['label', 0.6, 'expiração longa e alta']],
    d: 'Som brônquico (alto, expiração ≥ inspiração) onde deveria haver MV: parênquima consolidado transmitindo o som da via aérea. Pneumonia.' },
  { id: 'finos', g: 'pulm', n: 'Estertores finos', s: 'Fim da inspiração', cycle: 4,
    fn: t => { noise(t, 1.5, 'breath', 0.35, 'bandpass', 280, 0.5); noise(t + 1.5, 0.9, 'decresc', 0.12, 'bandpass', 250, 0.5); for (let k = 0; k < 16; k++) crackle(t + 0.8 + Math.random() * 0.65, 0.008, 0.5 + Math.random() * 0.4, 1500 + Math.random() * 900); },
    marks: [['breath'], ['dots', 0.2, 0.37, 16, 'crepitantes']],
    d: 'Estalidos curtos, agudos, no <b>final da inspiração</b>, como velcro ou cabelo friccionado. Não mudam com a tosse. Pneumonia, congestão (IC), fibrose.' },
  { id: 'grossos', g: 'pulm', n: 'Estertores grossos', s: 'Início da inspiração e expiração', cycle: 4,
    fn: t => { noise(t, 1.5, 'breath', 0.35, 'bandpass', 280, 0.5); noise(t + 1.5, 1.2, 'decresc', 0.15, 'bandpass', 250, 0.5); for (let k = 0; k < 9; k++) crackle(t + 0.05 + Math.random() * 0.55, 0.025, 0.6, 350 + Math.random() * 200); for (let k = 0; k < 7; k++) crackle(t + 1.6 + Math.random() * 1.2, 0.025, 0.5, 300 + Math.random() * 200); },
    marks: [['breath'], ['dots', 0.01, 0.15, 9, 'bolhosos'], ['dots', 0.4, 0.7, 7, '']],
    d: 'Estalidos mais graves e longos, no <b>início da inspiração e durante a expiração</b>; <b>mudam com a tosse</b>. Bronquiectasias, bronquite, DPOC.' },
  { id: 'sibilos', g: 'pulm', n: 'Sibilos', s: 'Expiratórios, musicais', cycle: 4,
    fn: t => { noise(t, 1.5, 'breath', 0.3, 'bandpass', 280, 0.5); [430, 560, 690].forEach((f, k) => tone(t + 1.55 + k * 0.08, 1.75, f, 0.07, 'sine', 'breath', 6 + k)); },
    marks: [['breath'], ['wave', 0.39, 0.84, 'sibilos']],
    d: 'Contínuos, <b>agudos</b> e musicais ("miado de gato"), predominam na <b>expiração</b>, com expiração prolongada. Asma, DPOC.' },
  { id: 'roncos', g: 'pulm', n: 'Roncos', s: 'Graves', cycle: 4,
    fn: t => { noise(t, 1.5, 'breath', 0.3, 'bandpass', 280, 0.5); tone(t + 1.55, 1.6, 120, 0.12, 'sawtooth', 'breath', 4); tone(t + 0.3, 1.0, 140, 0.05, 'sawtooth', 'breath', 3); },
    marks: [['breath'], ['wave', 0.39, 0.79, 'roncos'], ['wave', 0.08, 0.32, '']],
    d: 'Contínuos, <b>graves</b>, por secreção em vias de médio/grande calibre; predominam na expiração e <b>mudam com a tosse</b>. Bronquite, DPOC.' },
  { id: 'estridor', g: 'pulm', n: 'Estridor', s: 'Inspiratório, alto', cycle: 4,
    fn: t => { tone(t + 0.05, 1.35, 880, 0.09, 'sawtooth', 'breath', 9); noise(t, 1.5, 'breath', 0.3, 'bandpass', 1200, 1.2); noise(t + 1.5, 0.9, 'decresc', 0.1, 'bandpass', 300, 0.5); },
    marks: [['breath'], ['wave', 0.02, 0.36, 'estridor']],
    d: 'Agudo e intenso na <b>inspiração</b>, audível à distância: obstrução alta (laringe, traqueia). Laringite, anafilaxia, corpo estranho. Emergência.' },
  { id: 'atritopl', g: 'pulm', n: 'Atrito pleural', s: '"Couro atritado"', cycle: 4,
    fn: t => { noise(t, 1.5, 'breath', 0.25, 'bandpass', 280, 0.5); for (let k = 0; k < 10; k++) noise(t + 0.9 + k * 0.06, 0.045, 'diamond', 0.45, 'lowpass', 700, 1); for (let k = 0; k < 8; k++) noise(t + 1.55 + k * 0.07, 0.05, 'diamond', 0.4, 'lowpass', 650, 1); },
    marks: [['breath'], ['dots', 0.22, 0.37, 10, 'atrito'], ['dots', 0.39, 0.53, 8, '']],
    d: 'Ruído áspero e irregular, no fim da inspiração e começo da expiração, como couro novo rangendo. Não muda com a tosse. Pleurite.' }
];

let player = { id: null, timer: null, next: 0, i: 0, t0: 0, raf: null };
function stopSound() {
  clearInterval(player.timer); player.timer = null; cancelAnimationFrame(player.raf); player.id = null;
  if (master && AC) { master.gain.cancelScheduledValues(AC.currentTime); master.gain.setValueAtTime(0, AC.currentTime); setTimeout(() => { if (master && !player.id) master.gain.value = vol; }, 120); }
}
let vol = 0.8;
function playSound(p) {
  const c = ac(); if (!c) { toast('Seu navegador não suporta áudio'); return; }
  stopSound(); master.gain.value = vol;
  player.id = p.id; player.i = 0; player.next = c.currentTime + 0.08; player.t0 = player.next;
  const sched = () => { while (player.next < c.currentTime + 0.25) { p.fn(player.next, player.i); player.next += p.cycle; player.i++; } };
  sched(); player.timer = setInterval(sched, 40);
}

function drawScope(canvas, p, playing) {
  const dpr = window.devicePixelRatio || 1; const W = canvas.clientWidth, H = canvas.clientHeight;
  if (canvas.width !== W * dpr) { canvas.width = W * dpr; canvas.height = H * dpr; }
  const x = canvas.getContext('2d'); x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, W, H);
  // grid
  x.strokeStyle = 'rgba(242,112,154,0.10)'; x.lineWidth = 1;
  for (let gx = 0; gx < W; gx += 16) { x.beginPath(); x.moveTo(gx + 0.5, 0); x.lineTo(gx + 0.5, H); x.stroke(); }
  for (let gy = 0; gy < H; gy += 16) { x.beginPath(); x.moveTo(0, gy + 0.5); x.lineTo(W, gy + 0.5); x.stroke(); }
  const mid = H * 0.5, amp = H * 0.36, pad = 8, span = W - pad * 2;
  const X = f => pad + f * span;
  x.font = '600 11px "JetBrains Mono", monospace'; x.textAlign = 'center';
  x.strokeStyle = 'rgba(226,237,234,0.35)'; x.beginPath(); x.moveTo(pad, mid); x.lineTo(W - pad, mid); x.stroke();
  let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  if (p.g === 'cardio') {
    // phase labels
    x.fillStyle = 'rgba(226,237,234,0.45)'; x.textAlign = 'left';
    x.fillText('sístole', X(T1 / p.cycle) + 4, 14); x.fillText('diástole', X(T2 / p.cycle) + 4, 14);
    x.strokeStyle = 'rgba(226,237,234,0.18)'; x.setLineDash([3, 4]);
    [T1, T2].forEach(tt => { x.beginPath(); x.moveTo(X(tt / p.cycle), 18); x.lineTo(X(tt / p.cycle), H - 18); x.stroke(); }); x.setLineDash([]);
    x.textAlign = 'center';
    p.marks.forEach(m => {
      if (m[0] === 'spike') {
        const cx = X(m[1] / p.cycle), h = amp * m[2];
        x.strokeStyle = '#F2709A'; x.lineWidth = 2; x.beginPath();
        for (let k = 0; k <= 24; k++) { const px = cx - 9 + k * 0.75; const py = mid - Math.sin(k * 1.3) * h * Math.exp(-k / 9); k ? x.lineTo(px, py) : x.moveTo(px, py); }
        x.stroke(); x.fillStyle = '#E2EDEA'; x.fillText(m[3], cx, H - 6);
      } else if (m[0] === 'shape') {
        const a = X(m[1] / p.cycle), b = X(m[2] / p.cycle), h = amp * m[4];
        x.fillStyle = 'rgba(127,224,210,0.55)'; x.strokeStyle = '#7FE0D2'; x.lineWidth = 1;
        x.beginPath(); x.moveTo(a, mid);
        const N = Math.max(8, Math.floor((b - a) / 2));
        for (let k = 0; k <= N; k++) { const f = k / N; let e = 1; if (m[3] === 'diamond') e = f < .45 ? f / .45 : (1 - f) / .55; else if (m[3] === 'decresc') e = 1 - f; else if (m[3] === 'cresc') e = f; x.lineTo(a + f * (b - a), mid - e * h * (0.6 + 0.4 * rnd())); }
        for (let k = N; k >= 0; k--) { const f = k / N; let e = 1; if (m[3] === 'diamond') e = f < .45 ? f / .45 : (1 - f) / .55; else if (m[3] === 'decresc') e = 1 - f; else if (m[3] === 'cresc') e = f; x.lineTo(a + f * (b - a), mid + e * h * (0.6 + 0.4 * rnd())); }
        x.closePath(); x.fill(); if (m[5]) { x.fillStyle = '#7FE0D2'; x.fillText(m[5], (a + b) / 2, mid - h - 6); }
      }
    });
  } else {
    // respiração: curva de fluxo
    x.strokeStyle = 'rgba(127,224,210,0.85)'; x.lineWidth = 2; x.beginPath();
    for (let k = 0; k <= 200; k++) { const f = k / 200, tt = f * 4; let y = 0; if (tt < 1.5) y = Math.sin(Math.PI * tt / 1.5); else if (tt < 3.5) y = -0.6 * Math.sin(Math.PI * (tt - 1.5) / 2); const px = X(f), py = mid - y * amp * 0.75; k ? x.lineTo(px, py) : x.moveTo(px, py); }
    x.stroke();
    x.fillStyle = 'rgba(226,237,234,0.55)'; x.fillText('inspiração ↑', X(0.19), 14); x.fillText('expiração ↓', X(0.62), H - 6);
    p.marks.forEach(m => {
      if (m[0] === 'dots') { x.fillStyle = '#F2709A'; for (let k = 0; k < m[3]; k++) { const f = m[1] + rnd() * (m[2] - m[1]); x.fillRect(X(f) - 1, mid - 16 - rnd() * 20, 2.5, 10 + rnd() * 14); } if (m[4]) { x.fillStyle = '#F2709A'; x.fillText(m[4], X((m[1] + m[2]) / 2), mid - 46); } }
      if (m[0] === 'wave') { x.strokeStyle = '#F2709A'; x.lineWidth = 1.5; x.beginPath(); const a = X(m[1]), b = X(m[2]); for (let px = a; px <= b; px += 1) { const py = mid + 22 + Math.sin(px * 0.9) * 7 * Math.sin(Math.PI * (px - a) / (b - a)); px === a ? x.moveTo(px, py) : x.lineTo(px, py); } x.stroke(); if (m[3]) { x.fillStyle = '#F2709A'; x.fillText(m[3], (a + b) / 2, mid + 46); } }
    });
  }
  if (playing && AC) {
    const f = (((AC.currentTime - player.t0) % p.cycle) + p.cycle) % p.cycle / p.cycle;
    x.strokeStyle = '#FFFFFF'; x.lineWidth = 1.5; x.beginPath(); x.moveTo(X(f), 0); x.lineTo(X(f), H); x.stroke();
  }
}

let sndSel = 'normal';
function viewAusculta(v) {
  const p = SONS.find(s => s.id === sndSel);
  v.innerHTML = `
  <div class="page-head"><div class="eyebrow">Prática</div><h1>Laboratório de ausculta</h1><p>Sons sintetizados para treinar <b>o momento no ciclo</b> e o formato. São aproximações didáticas, não gravações reais: use fones de ouvido e volume moderado. Depois compare com gravações reais (ex.: easyauscultation.com, citado na aula).</p></div>
  <div class="panel">
    <div class="scope"><canvas id="scope" aria-label="Fonocardiograma esquemático"></canvas>
      <div class="scope-meta"><span>${p.g === 'cardio' ? '72 bpm · ciclo cardíaco' : '15 irpm · ciclo respiratório'}</span><span id="respPhase"></span><span>${p.n}</span></div>
    </div>
    <div class="row" style="margin-top:12px;justify-content:space-between">
      <div class="row"><button class="btn primary" type="button" id="playBtn">${player.id === p.id ? ICON.stop + 'Parar' : ICON.play + 'Tocar'}</button>
      <label class="row small" style="gap:8px;font-weight:600">Volume<input type="range" id="vol" min="0" max="1" step="0.05" value="${vol}"></label></div>
      <span class="tag">${p.s}</span>
    </div>
    <p style="margin-top:12px">${p.d}</p>
  </div>
  <h3 style="margin:22px 0 10px">Coração</h3>
  <div class="sound-list">${SONS.filter(s => s.g === 'cardio').map(s => `<button class="sound-btn" type="button" data-snd="${s.id}" aria-pressed="${s.id === sndSel}"><b>${s.n}</b><span>${s.s}</span></button>`).join('')}</div>
  <h3 style="margin:22px 0 10px">Pulmões</h3>
  <div class="sound-list">${SONS.filter(s => s.g === 'pulm').map(s => `<button class="sound-btn" type="button" data-snd="${s.id}" aria-pressed="${s.id === sndSel}"><b>${s.n}</b><span>${s.s}</span></button>`).join('')}</div>
  <div class="panel" style="margin-top:22px">
    <h3>Desafio: que som é este?</h3>
    <p class="muted small">Toca um som aleatório sem mostrar o nome. Tente identificar antes de revelar.</p>
    <div class="row"><button class="btn" type="button" id="mystery">${ICON.dice}Tocar som misterioso</button><button class="btn" type="button" id="reveal" ${mystery ? '' : 'disabled'}>Revelar</button><span id="mysAns" class="mono"></span></div>
  </div>`;
  const cv = $('#scope');
  const loop = () => { const cur = SONS.find(s => s.id === (mystery && player.id === mystery ? sndSel : sndSel)); drawScope(cv, mystery && player.id === mystery ? { g: SONS.find(s => s.id === mystery).g, cycle: SONS.find(s => s.id === mystery).cycle, marks: [] } : cur, !!player.id);
    const rp = $('#respPhase'); if (rp && player.id && p.resp && AC) rp.textContent = p.resp(Math.floor((AC.currentTime - player.t0) / p.cycle));
    if (player.id) player.raf = requestAnimationFrame(loop); };
  loop();
  const onResize = () => loop(); window.addEventListener('resize', onResize);
  onLeave(() => { stopSound(); window.removeEventListener('resize', onResize); });
  v.onclick = e => {
    const b = e.target.closest('[data-snd]');
    if (b) { const was = !!player.id; mystery = null; sndSel = b.dataset.snd; viewAusculta(v); if (was) { playSound(SONS.find(s => s.id === sndSel)); loop(); $('#playBtn').innerHTML = ICON.stop + 'Parar'; } return; }
    if (e.target.closest('#playBtn')) { mystery = null; if (player.id) { stopSound(); viewAusculta(v); } else { playSound(p); $('#playBtn').innerHTML = ICON.stop + 'Parar'; loop(); } return; }
    if (e.target.closest('#mystery')) { const pick = SONS[Math.floor(Math.random() * SONS.length)]; mystery = pick.id; playSound(pick); $('#mysAns').textContent = 'tocando…'; $('#reveal').disabled = false; $('#playBtn').innerHTML = ICON.stop + 'Parar'; loop(); return; }
    if (e.target.closest('#reveal') && mystery) { const m = SONS.find(s => s.id === mystery); $('#mysAns').textContent = m.n + ' (' + m.s + ')'; }
  };
  v.oninput = e => { if (e.target.id === 'vol') { vol = +e.target.value; if (master) master.gain.value = vol; } };
  onLeave(() => { v.onclick = null; v.oninput = null; });
}
let mystery = null;

/* ================= DECODIFICADOR & MAPAS ================= */
const SINDR = [
  ['Normal', { ftv: ['normal'], perc: ['claro'], mv: ['normal'], adv: ['nenhum'] }, 'Pulmão aerado, pleuras finas.'],
  ['Consolidação (pneumonia)', { ftv: ['aum'], perc: ['macico', 'submacico'], mv: ['tubario', 'dim'], adv: ['finos', 'pector'] }, 'Alvéolos preenchidos com brônquio pérvio conduzem melhor o som.'],
  ['Atelectasia', { ftv: ['dim'], perc: ['macico', 'submacico'], mv: ['abol', 'dim'], adv: ['nenhum'] }, 'Colapso com brônquio obstruído: tiragem, retração, ressonância ↓.'],
  ['Derrame pleural', { ftv: ['dim'], perc: ['macico'], mv: ['abol', 'dim'], adv: ['egofonia', 'nenhum', 'atrito'] }, 'Líquido entre pulmão e parede abafa tudo; egofonia no limite superior.'],
  ['Pneumotórax', { ftv: ['dim'], perc: ['timpanico'], mv: ['abol', 'dim'], adv: ['nenhum'] }, 'Ar no espaço pleural: timpanismo unilateral.'],
  ['Enfisema / hiperinsuflação', { ftv: ['dim'], perc: ['hiper'], mv: ['dim'], adv: ['nenhum', 'roncos', 'sibilos'] }, 'Bilateral e simétrico; tórax em tonel; expiração prolongada.'],
  ['Crise de asma', { ftv: ['normal', 'dim'], perc: ['hiper', 'claro'], mv: ['dim', 'normal'], adv: ['sibilos'] }, 'Sibilos expiratórios difusos, tiragem, musculatura acessória.'],
  ['Congestão pulmonar (IC esquerda)', { ftv: ['normal', 'aum'], perc: ['claro', 'submacico'], mv: ['normal'], adv: ['finos', 'sibilos'] }, 'Estertores finos nas bases, bilaterais.'],
  ['Bronquite / bronquiectasia', { ftv: ['normal'], perc: ['claro'], mv: ['normal'], adv: ['grossos', 'roncos'] }, 'Secreção em vias aéreas: ruídos que mudam com a tosse.'],
  ['Pleurite seca', { ftv: ['normal'], perc: ['claro'], mv: ['normal', 'dim'], adv: ['atrito'] }, 'Atrito pleural com dor ventilatório-dependente.']
];
const DEC_OPTS = {
  ftv: [['aum', 'Aumentado'], ['normal', 'Normal'], ['dim', 'Diminuído / abolido']],
  perc: [['claro', 'Claro pulmonar'], ['submacico', 'Submaciço'], ['macico', 'Maciço'], ['timpanico', 'Timpânico'], ['hiper', 'Hipersonoro']],
  mv: [['normal', 'Normal'], ['dim', 'Diminuído'], ['abol', 'Abolido'], ['tubario', 'Sopro tubário']],
  adv: [['nenhum', 'Nenhum'], ['finos', 'Estertores finos'], ['grossos', 'Estertores grossos'], ['sibilos', 'Sibilos'], ['roncos', 'Roncos'], ['atrito', 'Atrito pleural'], ['egofonia', 'Egofonia'], ['pector', 'Pectorilóquia']]
};
const DEC_LABEL = { ftv: 'Frêmito toracovocal', perc: 'Percussão', mv: 'Murmúrio vesicular', adv: 'Adventícios / voz' };
const SOPROS = [
  ['Estenose aórtica', { fase: 'sist', forma: 'diamante', foco: 'ao', irr: 'carot', insp: 'nao' }],
  ['Estenose pulmonar', { fase: 'sist', forma: 'diamante', foco: 'pulm', irr: 'dorso', insp: 'sim' }],
  ['Insuficiência mitral', { fase: 'sist', forma: 'holo', foco: 'mit', irr: 'axila', insp: 'nao' }],
  ['Insuficiência tricúspide', { fase: 'sist', forma: 'holo', foco: 'tri', irr: 'nenhuma', insp: 'sim' }],
  ['Prolapso mitral', { fase: 'sist', forma: 'clique', foco: 'mit', irr: 'axila', insp: 'nao' }],
  ['Insuficiência aórtica', { fase: 'diast', forma: 'decresc', foco: 'erb', irr: 'apice', insp: 'nao' }],
  ['Insuficiência pulmonar (Graham Steell)', { fase: 'diast', forma: 'decresc', foco: 'pulm', irr: 'nenhuma', insp: 'sim' }],
  ['Estenose mitral', { fase: 'diast', forma: 'ruflar', foco: 'mit', irr: 'nenhuma', insp: 'nao' }],
  ['Estenose tricúspide', { fase: 'diast', forma: 'ruflar', foco: 'tri', irr: 'nenhuma', insp: 'sim' }],
  ['Persistência do canal arterial', { fase: 'cont', forma: 'maquina', foco: 'pulm', irr: 'nenhuma', insp: 'nao' }]
];
const SOP_OPTS = {
  fase: [['sist', 'Sistólico'], ['diast', 'Diastólico'], ['cont', 'Contínuo']],
  forma: [['diamante', 'Ejeção em diamante'], ['holo', 'Holossistólico em platô'], ['clique', 'Clique + telessistólico'], ['decresc', 'Protodiastólico em decrescendo'], ['ruflar', 'Ruflar mesodiastólico'], ['maquina', 'Em maquinaria']],
  foco: [['ao', 'Aórtico'], ['pulm', 'Pulmonar'], ['erb', 'Aórtico acessório'], ['tri', 'Tricúspide'], ['mit', 'Mitral']],
  irr: [['carot', 'Carótidas/pescoço'], ['axila', 'Axila'], ['apice', 'Ápice'], ['dorso', 'Dorso'], ['nenhuma', 'Não irradia']],
  insp: [['sim', 'Aumenta na inspiração'], ['nao', 'Não aumenta']]
};
const SOP_LABEL = { fase: 'Momento', forma: 'Forma / timbre', foco: 'Foco de maior intensidade', irr: 'Irradiação', insp: 'Rivero-Carvallo' };
const FOCOS = [
  { id: 'ao', n: 'Foco aórtico', x: 168, y: 112, loc: '2º EIC direito, justaesternal', d: 'B2 mais intensa. Sopro da estenose aórtica (mesossistólico em diamante → carótidas).' },
  { id: 'pulm', n: 'Foco pulmonar', x: 232, y: 112, loc: '2º EIC esquerdo, justaesternal', d: 'Melhor local para o desdobramento de B2. Estenose pulmonar, Graham Steell, PCA (infraclavicular E).' },
  { id: 'erb', n: 'Aórtico acessório (Erb)', x: 236, y: 160, loc: '3º–4º EIC esquerdo, junto ao esterno', d: 'Sopro da insuficiência aórtica (protodiastólico aspirativo), melhor sentado inclinado em expiração.' },
  { id: 'tri', n: 'Foco tricúspide', x: 212, y: 236, loc: 'Base do apêndice xifoide, ligeiramente à esquerda', d: 'Sopros do coração direito: aumentam na inspiração (Rivero-Carvallo). IT holossistólica, ET ruflar.' },
  { id: 'mit', n: 'Foco mitral', x: 288, y: 218, loc: '5º EIC esquerdo, linha hemiclavicular (ictus)', d: 'B1 mais intensa. IM (holossistólico → axila), EM (ruflar com campânula em DLE), B3 e B4.' }
];
const REGIOES = [
  ['Hipocôndrio direito', 'Fígado (lobo D), vesícula, ângulo hepático do cólon, rim D', 'Colecistite (Murphy), cólica biliar, hepatite, congestão hepática (IC)'],
  ['Epigástrio', 'Lobo E do fígado, estômago (antro), duodeno, pâncreas, aorta', 'Dispepsia, úlcera, pancreatite (dor em faixa), DRGE, IAM inferior'],
  ['Hipocôndrio esquerdo', 'Fundo gástrico, baço, ângulo esplênico, cauda do pâncreas', 'Esplenomegalia (Traube, Castell), pancreatite'],
  ['Flanco direito', 'Cólon ascendente, delgado, rim D', 'Pielonefrite/litíase (Giordano), colite'],
  ['Mesogástrio', 'Grande curvatura, cólon transverso, delgado, aorta', 'Início da dor da apendicite, obstrução intestinal, aneurisma (massa pulsátil)'],
  ['Flanco esquerdo', 'Cólon descendente, delgado, rim E', 'Pielonefrite/litíase, diverticulite'],
  ['Fossa ilíaca direita', 'Ceco, apêndice, íleo terminal, ovário D', 'Apendicite (McBurney, Blumberg, Rovsing, Psoas), anexite'],
  ['Hipogástrio', 'Delgado, bexiga e útero (se aumentados)', 'Cistite, retenção urinária (bexigoma), doença pélvica'],
  ['Fossa ilíaca esquerda', 'Sigmoide, delgado, ovário E', 'Diverticulite, palpação do sigmoide (normal)']
];
const decState = { ftv: 'aum', perc: 'macico', mv: 'tubario', adv: 'finos' };
const sopState = { fase: 'sist', forma: 'holo', foco: 'mit', irr: 'axila', insp: 'nao' };
let decTab = 'pulm', focoSel = 'mit', regSel = 6;
function viewDecoder(v) {
  const tabs = [['pulm', 'Síndromes pulmonares'], ['sopro', 'Qual é o sopro?'], ['focos', 'Mapa dos focos'], ['abd', 'Mapa do abdome']];
  let body = '';
  if (decTab === 'pulm') {
    const ranked = SINDR.map(s => { let sc = 0, max = 0; const w = { ftv: 1.5, perc: 1.5, mv: 1, adv: 1 }; Object.keys(w).forEach(k => { max += w[k]; if (s[1][k].indexOf(decState[k]) >= 0) sc += w[k]; }); return { n: s[0], p: sc / max, d: s[2] }; }).sort((a, b) => b.p - a.p);
    body = `<div class="grid-2"><div class="stack">${Object.keys(DEC_OPTS).map(k => `<div><div class="qgroup-h">${DEC_LABEL[k]}</div><div class="seg">${DEC_OPTS[k].map(o => `<button class="chip" type="button" data-dk="${k}" data-dv="${o[0]}" aria-pressed="${decState[k] === o[0]}">${o[1]}</button>`).join('')}</div></div>`).join('')}</div>
      <div><div class="qgroup-h">Compatibilidade</div>${ranked.slice(0, 6).map((r, i) => `<div class="match"><div style="min-width:0;flex:1.6"><b>${r.n}</b>${i === 0 ? `<div class="small muted">${r.d}</div>` : ''}</div><div class="bar"><i style="width:${r.p * 100}%"></i></div><span class="mono small">${Math.round(r.p * 100)}%</span></div>`).join('')}</div></div>`;
  } else if (decTab === 'sopro') {
    const ranked = SOPROS.map(s => { let sc = 0; const w = { fase: 2, forma: 2, foco: 1.2, irr: 1, insp: 1 }; let max = 0; Object.keys(w).forEach(k => { max += w[k]; if (s[1][k] === sopState[k]) sc += w[k]; }); return { n: s[0], p: sc / max }; }).sort((a, b) => b.p - a.p);
    body = `<div class="grid-2"><div class="stack">${Object.keys(SOP_OPTS).map(k => `<div><div class="qgroup-h">${SOP_LABEL[k]}</div><div class="seg">${SOP_OPTS[k].map(o => `<button class="chip" type="button" data-sk="${k}" data-sv="${o[0]}" aria-pressed="${sopState[k] === o[0]}">${o[1]}</button>`).join('')}</div></div>`).join('')}</div>
      <div><div class="qgroup-h">Mais provável</div>${ranked.slice(0, 6).map(r => `<div class="match"><b style="flex:1.6;min-width:0">${r.n}</b><div class="bar"><i style="width:${r.p * 100}%"></i></div><span class="mono small">${Math.round(r.p * 100)}%</span></div>`).join('')}
      ${co('tip', 'Regra rápida', 'Sístole: <b>E</b>stenose das semilunares, <b>I</b>nsuficiência das AV. Diástole: o contrário. Inspiração aumenta = lado direito.')}</div></div>`;
  } else if (decTab === 'focos') {
    const f = FOCOS.find(x => x.id === focoSel);
    body = `<div class="map-wrap"><svg class="map-svg" viewBox="0 0 400 340" role="img" aria-label="Tórax com focos de ausculta">
      <path d="M90 40 Q200 10 310 40 L340 300 Q200 330 60 300 Z" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2"/>
      <rect x="186" y="70" width="28" height="160" rx="8" fill="var(--surface)" stroke="var(--line)"/>
      <path d="M192 230 L200 252 L208 230" fill="var(--surface)" stroke="var(--line)"/>
      ${[95, 135, 175, 215, 255].map((y, i) => `<path d="M120 ${y} Q150 ${y - 12} 184 ${y - 4}" fill="none" stroke="var(--line)" stroke-width="1.5"/><path d="M280 ${y} Q250 ${y - 12} 216 ${y - 4}" fill="none" stroke="var(--line)" stroke-width="1.5"/><text x="104" y="${y + 4}" font-size="10" fill="var(--muted)" font-family="JetBrains Mono, monospace">${i + 1}ª</text>`).join('')}
      <line x1="288" y1="60" x2="288" y2="300" stroke="var(--line)" stroke-dasharray="4 4"/><text x="292" y="70" font-size="10" fill="var(--muted)">LHC E</text>
      <path d="M120 40 Q160 34 186 66" fill="none" stroke="var(--muted)" stroke-width="2"/><path d="M280 40 Q240 34 214 66" fill="none" stroke="var(--muted)" stroke-width="2"/>
      ${FOCOS.map(x => `<g class="hot${x.id === focoSel ? ' on' : ''}" data-foco="${x.id}" tabindex="0"><circle class="zone" cx="${x.x}" cy="${x.y}" r="18" fill="var(--teal)" fill-opacity=".12" stroke="var(--teal)"/><circle class="dot" cx="${x.x}" cy="${x.y}" r="6" fill="var(--teal)"/></g>`).join('')}
    </svg>
    <div class="panel map-info"><div class="eyebrow">Clique em um foco</div><h3 style="margin-top:6px">${f.n}</h3><p class="mono small">${f.loc}</p><p>${f.d}</p><p class="small muted">Os focos são pontos de referência acústica, não a posição anatômica das valvas.</p></div></div>`;
  } else {
    const r = REGIOES[regSel];
    body = `<div class="map-wrap"><svg class="map-svg" viewBox="0 0 360 380" role="img" aria-label="Abdome em nove regiões">
      <path d="M60 30 Q180 0 300 30 L320 330 Q180 372 40 330 Z" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2"/>
      ${REGIOES.map((x, i) => { const cx = i % 3, cy = Math.floor(i / 3); const X0 = [55, 135, 225][cx], W0 = [80, 90, 80][cx], Y0 = [40, 140, 240][cy]; return `<g class="hot${i === regSel ? ' on' : ''}" data-reg="${i}" tabindex="0"><rect class="zone" x="${X0}" y="${Y0}" width="${W0}" height="100" fill="var(--teal)" fill-opacity=".06" stroke="var(--line)"/><text x="${X0 + W0 / 2}" y="${Y0 + 54}" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)" font-family="Source Sans 3, sans-serif">${['HD', 'Epigástrio', 'HE', 'Flanco D', 'Mesogástrio', 'Flanco E', 'FID', 'Hipogástrio', 'FIE'][i]}</text></g>`; }).join('')}
      <circle cx="180" cy="190" r="4" fill="var(--trace)"/>
      <circle cx="98" cy="292" r="5" fill="none" stroke="var(--trace)" stroke-width="2"/><text x="60" y="355" font-size="10" fill="var(--muted)">○ McBurney</text>
    </svg>
    <div class="panel map-info"><div class="eyebrow">Região</div><h3 style="margin-top:6px">${r[0]}</h3><h4>Projeção</h4><p>${r[1]}</p><h4>Dor / achados típicos</h4><p>${r[2]}</p><p class="small muted">Lado esquerdo e direito são os do paciente.</p></div></div>`;
  }
  v.innerHTML = `<div class="page-head"><div class="eyebrow">Prática</div><h1>Decodificador e mapas</h1><p>Monte os achados e veja qual síndrome ou valvopatia combina. Use para treinar o raciocínio reverso: do achado à hipótese.</p></div>
    <div class="tabs" role="tablist">${tabs.map(t => `<button class="tab" role="tab" type="button" data-dt="${t[0]}" aria-selected="${decTab === t[0]}">${t[1]}</button>`).join('')}</div>
    <div class="panel">${body}</div>`;
  v.onclick = e => {
    const t = e.target.closest('[data-dt]'); if (t) { decTab = t.dataset.dt; return viewDecoder(v); }
    const d = e.target.closest('[data-dk]'); if (d) { decState[d.dataset.dk] = d.dataset.dv; return viewDecoder(v); }
    const s = e.target.closest('[data-sk]'); if (s) { sopState[s.dataset.sk] = s.dataset.sv; return viewDecoder(v); }
    const f = e.target.closest('[data-foco]'); if (f) { focoSel = f.dataset.foco; return viewDecoder(v); }
    const r = e.target.closest('[data-reg]'); if (r) { regSel = +r.dataset.reg; return viewDecoder(v); }
  };
  v.onkeydown = e => { if (e.key === 'Enter' && e.target.closest('[data-foco],[data-reg]')) e.target.dispatchEvent(new MouseEvent('click', { bubbles: true })); };
  onLeave(() => { v.onclick = null; v.onkeydown = null; });
}

/* ================= QUIZ ================= */
let quizPreset = null;
let QZ = null; // {sel:[], n, mode, pool, i, ans:[], phase}
function viewQuiz(v) {
  if (quizPreset) {
    const pr = quizPreset; quizPreset = null;
    if (pr === 'erros') startQuiz(S.wrong.slice(), 'treino');
    else startQuiz(shuffle(QUIZ.map((q, i) => i).filter(i => QUIZ[i].t === pr)).slice(0, 15), 'treino');
  }
  if (!QZ || QZ.phase === 'setup') return quizSetup(v);
  if (QZ.phase === 'run') return quizRun(v);
  return quizEnd(v);
}
let qSel = Object.keys(TOPICOS), qN = 10, qMode = 'treino';
function quizSetup(v) {
  const avail = QUIZ.filter(q => qSel.indexOf(q.t) >= 0).length;
  v.innerHTML = `<div class="page-head"><div class="eyebrow">Fixação · ${QUIZ.length} questões</div><h1>Questões</h1><p>Modo treino mostra a explicação a cada resposta. Modo prova só corrige no fim. Os erros ficam salvos para revisão.</p></div>
  <div class="panel stack">
    <div><div class="qgroup-h">Tópicos</div><div class="chips">${Object.keys(TOPICOS).map(t => `<button class="chip" type="button" data-qt="${t}" aria-pressed="${qSel.indexOf(t) >= 0}">${TOPICOS[t]} <span class="mono small">${QUIZ.filter(q => q.t === t).length}</span></button>`).join('')}</div></div>
    <div><div class="qgroup-h">Quantidade</div><div class="chips">${[10, 20, 40, 0].map(n => `<button class="chip" type="button" data-qn="${n}" aria-pressed="${qN === n}">${n || 'Todas (' + avail + ')'}</button>`).join('')}</div></div>
    <div><div class="qgroup-h">Modo</div><div class="chips"><button class="chip" type="button" data-qm="treino" aria-pressed="${qMode === 'treino'}">Treino</button><button class="chip" type="button" data-qm="prova" aria-pressed="${qMode === 'prova'}">Prova</button></div></div>
    <div class="row"><button class="btn primary" type="button" id="qGo" ${avail ? '' : 'disabled'}>Começar</button>${S.wrong.length ? `<button class="btn" type="button" id="qWrong">Revisar meus ${S.wrong.length} erros</button>` : ''}<button class="btn ghost small" type="button" id="qReset">Zerar estatísticas</button></div>
  </div>`;
  v.onclick = e => {
    const t = e.target.closest('[data-qt]'); if (t) { const k = t.dataset.qt; const i = qSel.indexOf(k); if (i >= 0) qSel.splice(i, 1); else qSel.push(k); return quizSetup(v); }
    const n = e.target.closest('[data-qn]'); if (n) { qN = +n.dataset.qn; return quizSetup(v); }
    const m = e.target.closest('[data-qm]'); if (m) { qMode = m.dataset.qm; return quizSetup(v); }
    if (e.target.closest('#qGo')) { const pool = shuffle(QUIZ.map((q, i) => i).filter(i => qSel.indexOf(QUIZ[i].t) >= 0)); startQuiz(qN ? pool.slice(0, qN) : pool, qMode); return viewQuiz(v); }
    if (e.target.closest('#qWrong')) { startQuiz(shuffle(S.wrong), 'treino'); return viewQuiz(v); }
    if (e.target.closest('#qReset')) { S.quiz = {}; S.wrong = []; save(); toast('Estatísticas zeradas'); return quizSetup(v); }
  };
  onLeave(() => { v.onclick = null; });
}
function startQuiz(pool, mode) { QZ = { pool, mode, i: 0, ans: [], order: pool.map(i => shuffle(QUIZ[i].o.map((_, k) => k))), phase: pool.length ? 'run' : 'setup' }; }
function recordAnswer(qi, ok) {
  const t = QUIZ[qi].t; S.quiz[t] = S.quiz[t] || { c: 0, n: 0 }; S.quiz[t].n++; if (ok) S.quiz[t].c++;
  const w = S.wrong.indexOf(qi); if (ok && w >= 0) S.wrong.splice(w, 1); if (!ok && w < 0) S.wrong.push(qi); save();
}
function quizRun(v) {
  const qi = QZ.pool[QZ.i], q = QUIZ[qi], ans = QZ.ans[QZ.i], showFb = QZ.mode === 'treino' && ans !== undefined;
  v.innerHTML = `<div class="page-head"><div class="row" style="justify-content:space-between"><div class="eyebrow">${TOPICOS[q.t]} · ${QZ.i + 1} de ${QZ.pool.length} · modo ${QZ.mode}</div><button class="btn small ghost" type="button" id="qQuit">Sair</button></div></div>
  <div class="progress-line"><i style="width:${(QZ.i) / QZ.pool.length * 100}%"></i></div>
  <div class="panel">
    <div class="quiz-q">${q.q}</div>
    ${QZ.order[QZ.i].map(k => { let cls = ''; if (showFb) { if (k === q.a) cls = 'right'; else if (k === ans) cls = 'wrong'; } else if (QZ.mode === 'prova' && ans === k) cls = 'right'; return `<button class="opt ${cls}" type="button" data-a="${k}" ${showFb ? 'disabled' : ''}>${q.o[k]}</button>`; }).join('')}
    ${showFb ? `<div class="explain"><b>${ans === q.a ? 'Correto.' : 'Resposta: ' + q.o[q.a] + '.'}</b> ${q.e}</div>` : ''}
    <div class="row" style="margin-top:14px;justify-content:space-between">
      <button class="btn" type="button" id="qPrev" ${QZ.i === 0 ? 'disabled' : ''}>Anterior</button>
      <button class="btn primary" type="button" id="qNext" ${ans === undefined ? 'disabled' : ''}>${QZ.i === QZ.pool.length - 1 ? 'Finalizar' : 'Próxima'}</button>
    </div>
  </div>`;
  v.onclick = e => {
    const a = e.target.closest('[data-a]');
    if (a && !(QZ.mode === 'treino' && ans !== undefined)) { const k = +a.dataset.a; const first = QZ.ans[QZ.i] === undefined; QZ.ans[QZ.i] = k; if (QZ.mode === 'treino' && first) recordAnswer(qi, k === q.a); return quizRun(v); }
    if (e.target.closest('#qNext')) { if (QZ.i < QZ.pool.length - 1) { QZ.i++; quizRun(v); } else { if (QZ.mode === 'prova') QZ.pool.forEach((p, j) => recordAnswer(p, QZ.ans[j] === QUIZ[p].a)); QZ.phase = 'end'; quizEnd(v); } window.scrollTo(0, 0); return; }
    if (e.target.closest('#qPrev')) { QZ.i--; return quizRun(v); }
    if (e.target.closest('#qQuit')) { QZ = null; return viewQuiz(v); }
  };
  onLeave(() => { v.onclick = null; });
}
function quizEnd(v) {
  const hits = QZ.pool.filter((p, j) => QZ.ans[j] === QUIZ[p].a).length, pct = Math.round(hits / QZ.pool.length * 100);
  v.innerHTML = `<div class="page-head"><div class="eyebrow">Resultado</div><h1>${hits} de ${QZ.pool.length} (${pct}%)</h1></div>
  <div class="panel" style="display:flex;gap:20px;align-items:center;flex-wrap:wrap">${ring(pct)}<div class="row"><button class="btn primary" type="button" id="qAgain">Nova rodada</button>${S.wrong.length ? `<button class="btn" type="button" id="qW">Revisar ${S.wrong.length} erros</button>` : ''}</div></div>
  <div class="stack" style="margin-top:16px">${QZ.pool.map((p, j) => { const q = QUIZ[p], ok = QZ.ans[j] === q.a; return `<div class="panel"><div class="row" style="gap:8px"><span class="mark ${ok ? 'y' : 'n'}">${ok ? '✓' : '✗'}</span><b style="flex:1;min-width:0">${q.q}</b></div><p class="small">Sua resposta: ${q.o[QZ.ans[j]] !== undefined ? q.o[QZ.ans[j]] : '—'}${ok ? '' : ' · <b>Correta: ' + q.o[q.a] + '</b>'}</p><p class="small muted">${q.e}</p></div>`; }).join('')}</div>`;
  v.onclick = e => { if (e.target.closest('#qAgain')) { QZ = null; viewQuiz(v); } if (e.target.closest('#qW')) { startQuiz(shuffle(S.wrong), 'treino'); viewQuiz(v); } };
  onLeave(() => { v.onclick = null; });
}

/* ================= FLASHCARDS ================= */
let FL = null, flDeck = 'sinais', flOnlyNew = false;
function deckCards(d) { return (d === 'sinais' ? SINAIS : GLOSSARIO).map(c => ({ k: d + ':' + c[0], f: c[0], b: c[1] })); }
function viewFlash(v) {
  if (!FL) { let cards = deckCards(flDeck); if (flOnlyNew) cards = cards.filter(c => (S.flash[c.k] || 0) < 2); FL = { cards: shuffle(cards), i: 0, flip: false }; }
  const all = deckCards(flDeck), known = all.filter(c => (S.flash[c.k] || 0) >= 2).length;
  const c = FL.cards[FL.i];
  v.innerHTML = `<div class="page-head"><div class="eyebrow">Fixação · ${known}/${all.length} dominados</div><h1>Flashcards</h1><p>Toque no cartão para virar. "Sei" duas vezes marca como dominado; "Rever" volta para a fila.</p></div>
  <div class="row" style="margin-bottom:14px;justify-content:space-between"><div class="chips"><button class="chip" type="button" data-deck="sinais" aria-pressed="${flDeck === 'sinais'}">Sinais e epônimos (${SINAIS.length})</button><button class="chip" type="button" data-deck="glossario" aria-pressed="${flDeck === 'glossario'}">Termos técnicos (${GLOSSARIO.length})</button></div>
  <label class="row small" style="gap:6px;font-weight:600"><input type="checkbox" id="onlyNew" ${flOnlyNew ? 'checked' : ''} style="width:18px;height:18px;accent-color:var(--teal)">Só os não dominados</label></div>
  ${c ? `<div class="flash${FL.flip ? ' flipped' : ''}" id="card" role="button" tabindex="0" aria-label="Virar cartão">
    <div class="flash-inner"><div class="flash-face"><span class="eyebrow">${FL.i + 1} / ${FL.cards.length}</span><div class="flash-term">${c.f}</div><span class="muted small">toque para ver</span></div>
    <div class="flash-face back"><div class="flash-term" style="font-size:1.15rem">${c.f}</div><div class="flash-def">${c.b}</div></div></div></div>
  <div class="row" style="justify-content:center;margin-top:16px"><button class="btn" type="button" id="fBad">Rever</button><button class="btn primary" type="button" id="fOk">Sei</button></div>`
  : `<div class="empty">Você dominou todos os cartões deste baralho. <button class="btn small" type="button" id="fRestart">Recomeçar</button></div>`}`;
  const flip = () => { FL.flip = !FL.flip; const el = $('#card'); if (el) el.classList.toggle('flipped', FL.flip); };
  v.onclick = e => {
    const d = e.target.closest('[data-deck]'); if (d) { flDeck = d.dataset.deck; FL = null; return viewFlash(v); }
    if (e.target.closest('#card')) return flip();
    if (e.target.closest('#fOk') || e.target.closest('#fBad')) {
      const ok = !!e.target.closest('#fOk'); S.flash[c.k] = ok ? Math.min((S.flash[c.k] || 0) + 1, 3) : 0; save();
      if (!ok) FL.cards.push(c);
      FL.i++; FL.flip = false; if (FL.i >= FL.cards.length) { FL = null; toast('Rodada completa'); } return viewFlash(v);
    }
    if (e.target.closest('#fRestart')) { flOnlyNew = false; FL = null; return viewFlash(v); }
  };
  v.onchange = e => { if (e.target.id === 'onlyNew') { flOnlyNew = e.target.checked; FL = null; viewFlash(v); } };
  v.onkeydown = e => { if ((e.key === ' ' || e.key === 'Enter') && e.target.id === 'card') { e.preventDefault(); flip(); } };
  onLeave(() => { v.onclick = null; v.onchange = null; v.onkeydown = null; });
}

/* ================= GLOSSÁRIO ================= */
function viewGlossario(v) {
  v.innerHTML = `<div class="page-head"><div class="eyebrow">Fixação · ${GLOSSARIO.length} termos + ${SINAIS.length} sinais</div><h1>Glossário</h1><p>Termos técnicos para usar na HDA e os sinais com epônimo.</p></div>
  <div class="row" style="margin-bottom:14px"><label class="field" for="glq" style="flex:1;max-width:420px">Filtrar<input id="glq" type="search" placeholder="ex.: úria, sinal de, dispneia"></label></div>
  <div id="glOut"></div>`;
  const out = $('#glOut');
  const render = q => {
    const nq = norm(q || '');
    const f = arr => arr.filter(x => !nq || norm(x[0] + ' ' + x[1]).indexOf(nq) >= 0);
    const g = f(GLOSSARIO), s = f(SINAIS);
    out.innerHTML = `<h3 style="margin-bottom:10px">Termos (${g.length})</h3><div class="gl-list">${g.map(x => `<div class="gl-item"><b>${x[0]}</b><div class="small">${x[1]}</div></div>`).join('') || '<p class="muted">Nada encontrado.</p>'}</div>
      <h3 style="margin:22px 0 10px">Sinais (${s.length})</h3><div class="gl-list">${s.map(x => `<div class="gl-item"><b>${x[0]}</b><div class="small">${x[1]}</div></div>`).join('') || '<p class="muted">Nada encontrado.</p>'}</div>`;
  };
  render(''); $('#glq').addEventListener('input', e => render(e.target.value));
}

/* ================= FERRAMENTAS ================= */
function viewFerramentas(v) {
  v.innerHTML = `<div class="page-head"><div class="eyebrow">Fixação</div><h1>Calculadoras</h1><p>Contas que aparecem na anamnese e no exame físico.</p></div>
  <div class="grid-2">
    <div class="panel stack"><h3>IMC</h3><div class="row"><label class="field" for="peso">Peso (kg)<input id="peso" type="number" inputmode="decimal" value="70"></label><label class="field" for="alt">Altura (m)<input id="alt" type="number" inputmode="decimal" step="0.01" value="1.70"></label></div><div><span class="result-big" id="imcR"></span> <span id="imcC" class="muted"></span></div></div>
    <div class="panel stack"><h3>Carga tabágica</h3><div class="row"><label class="field" for="cig">Cigarros/dia<input id="cig" type="number" value="20"></label><label class="field" for="anos">Anos fumando<input id="anos" type="number" value="20"></label><label class="field" for="palha">Cigarros de palha/dia<input id="palha" type="number" value="0"></label></div><div><span class="result-big" id="tabR"></span> <span class="muted">maços-ano</span></div><p class="small muted">(cigarros/dia ÷ 20) × anos · 1 de palha = 5 industrializados.</p></div>
    <div class="panel stack"><h3>Escala de Glasgow</h3>
      <label class="field" for="gE">Abertura ocular<select id="gE"><option value="4">4 · espontânea</option><option value="3">3 · ao chamado</option><option value="2">2 · à dor</option><option value="1">1 · nenhuma</option></select></label>
      <label class="field" for="gV">Resposta verbal<select id="gV"><option value="5">5 · orientado</option><option value="4">4 · confuso</option><option value="3">3 · palavras inapropriadas</option><option value="2">2 · sons incompreensíveis</option><option value="1">1 · nenhuma</option></select></label>
      <label class="field" for="gM">Resposta motora<select id="gM"><option value="6">6 · obedece comandos</option><option value="5">5 · localiza dor</option><option value="4">4 · retira ao estímulo</option><option value="3">3 · flexão anormal</option><option value="2">2 · extensão anormal</option><option value="1">1 · nenhuma</option></select></label>
      <div><span class="result-big" id="gR"></span> <span id="gC" class="muted"></span></div></div>
    <div class="panel stack"><h3>Pressão arterial</h3><div class="row"><label class="field" for="pas">PAS<input id="pas" type="number" value="120"></label><label class="field" for="pad">PAD<input id="pad" type="number" value="80"></label></div>
      <div class="mono">Pressão de pulso: <b id="ppR"></b> mmHg · PAM: <b id="pamR"></b> mmHg</div><div id="paC" class="small"></div></div>
    <div class="panel stack"><h3>Cronômetro para contar FR e FC</h3><p class="small muted">Conte os movimentos ou batimentos até o sinal sonoro. Em 30 s multiplique por 2.</p>
      <div class="row"><button class="btn" type="button" data-cr="15">15 s</button><button class="btn" type="button" data-cr="30">30 s</button><button class="btn" type="button" data-cr="60">60 s</button><span class="result-big" id="crR">00:00</span></div></div>
  </div>`;
  const calc = () => {
    const p = +$('#peso').value, a = +$('#alt').value; const imc = a > 0 ? p / (a * a) : 0;
    $('#imcR').textContent = imc ? imc.toFixed(1) : '—';
    $('#imcC').textContent = !imc ? '' : imc < 18.5 ? 'baixo peso' : imc < 25 ? 'eutrofia' : imc < 30 ? 'sobrepeso' : imc < 35 ? 'obesidade grau I' : imc < 40 ? 'obesidade grau II' : 'obesidade grau III';
    const t = ((+$('#cig').value || 0) + (+$('#palha').value || 0) * 5) / 20 * (+$('#anos').value || 0); $('#tabR').textContent = (Math.round(t * 10) / 10).toString().replace('.', ',');
    const g = +$('#gE').value + +$('#gV').value + +$('#gM').value; $('#gR').textContent = g; $('#gC').textContent = g >= 13 ? 'leve (13–15)' : g >= 9 ? 'moderado (9–12)' : 'grave (≤ 8)';
    const s = +$('#pas').value, d = +$('#pad').value, pp = s - d, pam = Math.round(d + pp / 3); $('#ppR').textContent = pp; $('#pamR').textContent = pam;
    const cls = s >= 180 || d >= 110 ? 'HAS estágio 3' : s >= 160 || d >= 100 ? 'HAS estágio 2' : s >= 140 || d >= 90 ? 'HAS estágio 1' : s >= 130 || d >= 85 ? 'Pré-hipertensão' : s >= 120 || d >= 80 ? 'PA normal' : 'PA ótima';
    $('#paC').innerHTML = '<b>' + cls + '</b> · ' + (pp <= 25 ? 'pressão de pulso <b>convergente</b> (pense em estenose aórtica, choque, tamponamento)' : pp >= 60 ? 'pressão de pulso <b>divergente</b> (pense em insuficiência aórtica, hipertireoidismo, anemia, rigidez arterial)' : 'pressão de pulso habitual (~40)');
  };
  v.oninput = calc; v.onchange = calc; calc();
  let ct = null;
  v.onclick = e => {
    const b = e.target.closest('[data-cr]'); if (!b) return;
    clearInterval(ct); const total = +b.dataset.cr, t0 = Date.now(); const out = $('#crR');
    const c = ac();
    ct = setInterval(() => { const r = total - (Date.now() - t0) / 1000; out.textContent = fmtTime(Math.max(0, r)); if (r <= 0) { clearInterval(ct); if (c) { master.gain.value = vol; tone(c.currentTime + 0.01, 0.35, 880, 0.3, 'sine', 'hit'); } toast('Tempo!'); } }, 200);
  };
  onLeave(() => { clearInterval(ct); v.oninput = null; v.onchange = null; v.onclick = null; });
}

/* ================= BUSCA ================= */
let searchT = null;
$('#searchInput').addEventListener('input', e => {
  clearTimeout(searchT); const q = e.target.value.trim();
  searchT = setTimeout(() => { if (q.length >= 2) viewBusca($('#view'), q); else if (!q) route(); }, 180);
});
function viewBusca(v, q) {
  cleanup.forEach(f => { try { f(); } catch (e) {} }); cleanup = [];
  const nq = norm(q); const res = [];
  const snip = (txt) => { const t = strip(txt); const i = norm(t).indexOf(nq); if (i < 0) return esc(t.slice(0, 140)) + '…'; const a = Math.max(0, i - 60); return (a ? '…' : '') + esc(t.slice(a, i)) + '<mark>' + esc(t.slice(i, i + q.length)) + '</mark>' + esc(t.slice(i + q.length, i + q.length + 90)) + '…'; };
  TEORIA.forEach(t => t.secoes.forEach(s => { if (norm(s.h + ' ' + s.html).indexOf(nq) >= 0) res.push({ href: '#teoria-' + t.id, sec: s.id, title: t.titulo + ' · ' + s.h, body: snip(s.h + ' ' + s.html) }); }));
  GLOSSARIO.concat(SINAIS).forEach(g => { if (norm(g[0] + ' ' + g[1]).indexOf(nq) >= 0) res.push({ href: '#glossario', title: g[0], body: esc(g[1]) }); });
  CASOS.forEach(c => { if (norm(c.titulo + ' ' + c.porta + ' ' + c.discussao).indexOf(nq) >= 0) res.push({ href: '#osce-' + c.id, title: 'Estação OSCE · ' + c.titulo, body: snip(c.discussao) }); });
  v.innerHTML = `<div class="page-head"><div class="eyebrow">Busca</div><h1>"${esc(q)}"</h1><p>${res.length} resultado(s)</p></div>
  <div class="search-res">${res.slice(0, 60).map(r => `<a href="${r.href}" ${r.sec ? `data-sec="${r.sec}"` : ''}><b>${r.title}</b><div class="small muted">${r.body}</div></a>`).join('') || '<div class="empty">Nada encontrado. Tente outro termo.</div>'}</div>`;
  v.onclick = e => {
    const a = e.target.closest('a[data-sec]'); if (!a) return;
    e.preventDefault(); const sec = a.dataset.sec, h = a.getAttribute('href');
    if (location.hash === h) route(); else location.hash = h.slice(1);
    setTimeout(() => { const el = $('#sec-' + sec); if (el) el.scrollIntoView({ block: 'start' }); }, 60);
  };
  onLeave(() => { v.onclick = null; });
}

route();
})();

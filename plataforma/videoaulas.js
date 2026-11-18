/* Videoaulas: player dentro da plataforma (dados em videos-data.js) */
(function () {
  var VIDS = function () { return window.SEMIO_VIDEOS || []; };
  var sel = 0;
  function fmt(s) { s = Math.round(s); return Math.floor(s / 60) + ' min ' + String(s % 60).padStart(2, '0') + ' s'; }
  function view(v) {
    var A = window.SEMIO, S = A.S; S.vistos = S.vistos || {};
    var list = VIDS();
    if (!list.length) { v.innerHTML = '<div class="empty">As videoaulas ainda não foram carregadas.</div>'; return; }
    var cur = list[sel];
    var total = list.reduce(function (a, x) { return a + x.dur; }, 0);
    var vistos = list.filter(function (x) { return S.vistos[x.id]; }).length;
    v.innerHTML =
      '<div class="page-head"><div class="eyebrow">Aprender fazendo · ' + list.length + ' aulas · ' + Math.round(total / 60) + ' min no total · ' + vistos + ' assistidas</div>' +
      '<h1>Videoaulas</h1><p>Slides narrados com os desenhos da plataforma. A voz é sintetizada. Assista na ordem, ou vá direto ao tema. Depois de cada aula, faça a trilha indicada para fixar.</p></div>' +
      '<div class="va-layout"><div class="va-main">' +
      '<video id="vaPlayer" class="va-video" controls preload="metadata" playsinline src="' + cur.url + '"></video>' +
      '<div class="row" style="justify-content:space-between;margin-top:12px"><div style="min-width:0"><div class="eyebrow">Aula ' + cur.n + ' · ' + fmt(cur.dur) + '</div><h2 style="margin-top:4px">' + cur.titulo + '</h2></div>' +
      '<button class="btn small done-btn" type="button" id="vaDone" aria-pressed="' + !!S.vistos[cur.id] + '">' + (S.vistos[cur.id] ? 'Assistida' : 'Marcar como assistida') + '</button></div>' +
      '<div class="panel" style="margin-top:12px"><h4 style="margin-top:0">Nesta aula</h4><ol class="steps compact">' + cur.topicos.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ol>' +
      (cur.depois ? '<div class="row" style="margin-top:12px">' + cur.depois.map(function (d) { return '<a class="btn small" href="#' + d[0] + '">' + d[1] + '</a>'; }).join('') + '</div>' : '') + '</div>' +
      '</div><div class="va-list">' + list.map(function (x, i) {
        return '<button class="va-item' + (i === sel ? ' on' : '') + '" type="button" data-va="' + i + '"><span class="va-n mono">' + String(x.n).padStart(2, '0') + '</span><span style="min-width:0"><b>' + x.titulo + '</b><span class="small muted">' + fmt(x.dur) + (S.vistos[x.id] ? ' · ✓ assistida' : '') + '</span></span></button>';
      }).join('') + '</div></div>';
    var pl = document.getElementById('vaPlayer');
    pl.addEventListener('ended', function () { S.vistos[cur.id] = 1; A.save(); });
    v.onclick = function (e) {
      var it = e.target.closest('[data-va]'); if (it) { sel = +it.dataset.va; view(v); window.scrollTo(0, 0); return; }
      if (e.target.closest('#vaDone')) { if (S.vistos[cur.id]) delete S.vistos[cur.id]; else S.vistos[cur.id] = 1; A.save(); view(v); }
    };
    A.onLeave(function () { v.onclick = null; try { pl.pause(); } catch (e) {} });
  }
  (window.SEMIO_VIEWS = window.SEMIO_VIEWS || []).push({ id: 'videoaulas', render: function (v) { view(v); } });
})();

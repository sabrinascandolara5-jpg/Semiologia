/* Laboratório de mecanismos: aba de neuro (onde está a lesão?) */
(function () {
var NROW = [
  ['forca', 'Força', ['Normal', 'Reduzida no hemicorpo oposto à lesão', 'Reduzida do mesmo lado, abaixo da lesão', 'Reduzida só nos músculos de uma raiz ou nervo']],
  ['tonus', 'Tônus', ['Normal', 'Espasticidade (canivete)', 'Rigidez plástica (roda denteada)', 'Hipotonia']],
  ['refl', 'Reflexos profundos', ['Normais', 'Exaltados, com clônus', 'Diminuídos ou abolidos']],
  ['plantar', 'Cutâneo plantar', ['Flexão (normal)', 'Babinski']],
  ['trof', 'Trofismo e fasciculações', ['Normal (no máximo atrofia leve por desuso)', 'Atrofia importante com fasciculações']],
  ['dor', 'Dor e temperatura', ['Normais', 'Perdidas do lado oposto, abaixo da lesão', 'Perdidas nos pés (bota), bilateral', 'Perdidas no dermátomo de uma raiz', 'Diminuídas no hemicorpo oposto']],
  ['prop', 'Propriocepção e vibração', ['Normais', 'Perdidas do mesmo lado, abaixo da lesão', 'Perdidas nos pés, bilateral', 'Diminuídas no hemicorpo oposto']],
  ['romb', 'Romberg', ['Negativo', 'Positivo: cai ao fechar os olhos', 'Oscila já de olhos abertos']],
  ['coord', 'Coordenação', ['Normal', 'Dismetria e disdiadococinesia do mesmo lado', 'Piora muito de olhos fechados (ataxia sensitiva)', 'Prejudicada pela fraqueza ou pela lentidão']],
  ['face', 'Face', ['Normal', 'Paralisia central: poupa a testa, lado oposto', 'Paralisia periférica: inclui a testa, mesmo lado']],
  ['marcha', 'Marcha', ['Normal', 'Ceifante (espástica)', 'Braquibásica (parkinsoniana)', 'Ebriosa (atáxica)', 'Talonante', 'Escarvante (pé caído)']],
  ['inv', 'Movimento involuntário', ['Nenhum', 'Tremor de repouso', 'Tremor intencional']]
];
var NEU = {
  cortex: { n: 'Córtex / cápsula interna esquerda (AVC)', vias: ['cs', 'dc', 'st'],
    chave: 'O 1º neurônio motor nasce no córtex e só cruza no bulbo: lesão encefálica <b>esquerda</b> dá déficit à <b>direita</b>. As vias sensitivas também chegam ao córtex esquerdo.',
    v: { forca: [1, 'Hemiparesia direita, de predomínio braquiofacial se for território da cerebral média.'], tonus: [1, 'Depois da fase aguda (que é flácida, de choque) surge espasticidade: flexores do braço, extensores da perna.'], refl: [1, 'O córtex deixa de inibir o arco reflexo, que fica liberado.'], plantar: [1, 'Sinal da via piramidal lesada.'], trof: [0, 'O 2º neurônio está íntegro: só há desuso.'], dor: [4, 'As vias sensitivas já cruzaram e chegam ao córtex esquerdo: hipoestesia no hemicorpo direito se a lesão pegar a área sensitiva.'], prop: [3, 'Mesma explicação: a coluna posterior cruzou no bulbo e termina no hemisfério oposto.'], romb: [0, 'O problema é motor, não de propriocepção periférica.'], coord: [3, 'Não é cerebelar: o movimento é ruim pela fraqueza.'], face: [1, 'A testa tem representação cortical bilateral e fica poupada.'], marcha: [1, 'A perna estendida e espástica é jogada em arco.'], inv: [0, 'Não é característico da via piramidal.'] } },
  medula: { n: 'Hemissecção da medula à direita (T10)', vias: ['cs', 'dc'],
    chave: '<b>Brown-Séquard.</b> O corticoespinhal e a coluna posterior da perna direita sobem e descem pelo lado direito (só cruzam no bulbo). A espinotalâmica da perna direita já cruzou para a esquerda ao entrar: escapa. Quem perde dor é a perna <b>esquerda</b>, cuja via sobe pelo lado lesado.',
    v: { forca: [2, 'Paresia da perna direita: o 1º neurônio direito foi cortado abaixo da decussação.'], tonus: [1, 'Lesão do 1º neurônio: espasticidade (após a fase de choque medular).'], refl: [1, 'Arco liberado abaixo da lesão.'], plantar: [1, 'Babinski à direita.'], trof: [0, 'O corno anterior abaixo da lesão está preservado.'], dor: [1, 'Perde na perna esquerda, 1–2 níveis abaixo: a fibra dela cruzou e subia pelo lado direito.'], prop: [1, 'A coluna posterior direita leva a propriocepção da perna direita sem cruzar.'], romb: [1, 'A perna direita perdeu propriocepção: cai de olhos fechados.'], coord: [3, 'Pela fraqueza e pela falta de propriocepção.'], face: [0, 'A lesão está abaixo do tronco.'], marcha: [1, 'Perna direita espástica.'], inv: [0, 'Sem movimentos involuntários.'] } },
  cornoant: { n: 'Corno anterior à direita (2º neurônio)', vias: ['cs'],
    chave: 'O corpo do 2º neurônio fica no corno anterior: é a <b>via final comum</b>. Sem ele o músculo perde a inervação. Exemplos: poliomielite, ELA (que soma sinais de 1º neurônio).',
    v: { forca: [2, 'Fraqueza nos músculos desse segmento, do mesmo lado.'], tonus: [3, 'Sem o neurônio que mantém o tônus: flacidez.'], refl: [2, 'O eferente do arco reflexo foi destruído.'], plantar: [0, 'A via piramidal está íntegra.'], trof: [1, 'Músculo desnervado atrofia muito; unidades motoras doentes disparam sozinhas (fasciculações).'], dor: [0, 'O corno anterior é só motor.'], prop: [0, 'Coluna posterior intacta.'], romb: [0, 'Propriocepção preservada.'], coord: [3, 'Prejudicada pela fraqueza.'], face: [0, 'Fora do tronco.'], marcha: [5, 'Se os músculos da dorsiflexão forem atingidos, o pé cai.'], inv: [0, 'Fasciculações não são movimentos involuntários de núcleos da base.'] } },
  raiz: { n: 'Raiz L5 à direita (hérnia L4–L5)', vias: ['cs', 'dc', 'st'],
    chave: 'A raiz leva fibras motoras e sensitivas de <b>um segmento</b>. O déficit fica restrito ao miótomo e ao dermátomo de L5, com sobreposição das raízes vizinhas (hipoestesia, não anestesia).',
    v: { forca: [3, 'Fraqueza da extensão do hálux (miótomo L5).'], tonus: [0, 'Um só miótomo: o tônus global não muda.'], refl: [0, 'L5 não tem reflexo próprio confiável; o aquileu (S1) e o patelar (L4) ficam normais.'], plantar: [0, 'A via piramidal está íntegra.'], trof: [0, 'Pode haver atrofia leve nos casos crônicos.'], dor: [3, 'Hipoestesia na face lateral da perna e no dorso do pé (dermátomo L5).'], prop: [0, 'Uma raiz só não abole a propriocepção.'], romb: [0, 'Negativo.'], coord: [0, 'Normal.'], face: [0, 'Normal.'], marcha: [5, 'Fraqueza da dorsiflexão do pé e do hálux: o pé cai.'], inv: [0, 'Nenhum.'] } },
  nervo: { n: 'Nervos periféricos (polineuropatia sensitiva)', vias: ['dc', 'st'],
    chave: 'Nas polineuropatias comprimento-dependentes (diabetes, álcool, B12) sofrem primeiro as fibras mais longas: começa nos pés, em <b>bota</b>, simétrica.',
    v: { forca: [0, 'Na forma sensitiva a força fica preservada.'], tonus: [0, 'Normal ou levemente reduzido.'], refl: [2, 'O aferente Ia do arco reflexo está doente: aquileus somem primeiro.'], plantar: [0, 'Normal.'], trof: [0, 'Sem atrofia importante na forma sensitiva.'], dor: [2, 'Fibras finas lesadas nos pés.'], prop: [2, 'Fibras grossas lesadas: vibração e posição do hálux somem.'], romb: [1, 'Sem propriocepção, a visão compensa; fechou os olhos, cai.'], coord: [2, 'Ataxia sensitiva: piora de olhos fechados.'], face: [0, 'Normal.'], marcha: [4, 'Não sabe onde o pé está: eleva e bate o calcanhar.'], inv: [0, 'Nenhum.'] } },
  colpost: { n: 'Colunas posteriores (tabes dorsalis)', vias: ['dc'],
    chave: 'A sífilis terciária lesa as raízes dorsais e as colunas posteriores: some a propriocepção, e a dor e a temperatura (espinotalâmica) ficam preservadas.',
    v: { forca: [0, 'O corticoespinhal está íntegro.'], tonus: [3, 'Sem o aferente do fuso, o tônus cai.'], refl: [2, 'A raiz dorsal (aferente do arco) está lesada.'], plantar: [0, 'Normal.'], trof: [0, 'Normal.'], dor: [0, 'A espinotalâmica corre na parte anterolateral da medula e é poupada.'], prop: [2, 'Coluna posterior lesada nos dois lados.'], romb: [1, 'Romberg clássico.'], coord: [2, 'Ataxia sensitiva.'], face: [0, 'Normal.'], marcha: [4, 'Marcha tabética (talonante).'], inv: [0, 'Nenhum.'] } },
  cerebelo: { n: 'Hemisfério cerebelar direito', vias: [],
    chave: 'O cerebelo coordena o movimento do <b>mesmo lado</b> (as vias cruzam duas vezes). Não tira força nem sensibilidade: tira precisão.',
    v: { forca: [0, 'Força preservada.'], tonus: [3, 'Hipotonia do mesmo lado.'], refl: [0, 'Normais ou pendulares.'], plantar: [0, 'Normal.'], trof: [0, 'Normal.'], dor: [0, 'Normal.'], prop: [0, 'Normal.'], romb: [2, 'Já oscila de olhos abertos e piora pouco ao fechar: Romberg negativo.'], coord: [1, 'Dismetria no índex-nariz e disdiadococinesia à direita.'], face: [0, 'Normal.'], marcha: [3, 'Base alargada, tende a cair para o lado da lesão.'], inv: [2, 'Tremor que piora ao se aproximar do alvo.'] } },
  nucbase: { n: 'Núcleos da base (doença de Parkinson)', vias: [],
    chave: 'A via extrapiramidal modula tônus, postura e automatismos. Perda de dopamina da substância negra: bradicinesia, rigidez, tremor de repouso. <b>Sem paresia e sem Babinski.</b>',
    v: { forca: [0, 'Não há paresia: o movimento é lento, não fraco.'], tonus: [2, 'Rigidez plástica, constante, somada ao tremor.'], refl: [0, 'Normais.'], plantar: [0, 'Flexão normal.'], trof: [0, 'Normal.'], dor: [0, 'Normal.'], prop: [0, 'Normal.'], romb: [0, 'Negativo (a instabilidade postural vem tarde).'], coord: [3, 'Movimentos alternados lentos pela bradicinesia, sem dismetria.'], face: [0, 'Sem paralisia; há hipomimia (face pouco expressiva).'], marcha: [2, 'Passos curtos, arrastados, sem balanço dos braços.'], inv: [1, 'Melhora ao mover.'] } },
  facial: { n: 'Nervo facial direito (paralisia de Bell)', vias: [],
    chave: 'Lesão do 2º neurônio do facial: toda a hemiface do mesmo lado paralisa, inclusive a testa, e aparece o fenômeno de Bell.',
    v: { forca: [0, 'Membros normais: isso ajuda a separar da paralisia central do AVC.'], tonus: [0, 'Normal.'], refl: [0, 'Normais.'], plantar: [0, 'Normal.'], trof: [0, 'Normal.'], dor: [0, 'Normal.'], prop: [0, 'Normal.'], romb: [0, 'Negativo.'], coord: [0, 'Normal.'], face: [2, 'Testa lisa, olho não fecha, boca desviada para o lado são.'], marcha: [0, 'Normal.'], inv: [0, 'Nenhum.'] } }
};
var LES = {
  cortex: '<ellipse cx="128" cy="58" rx="20" ry="14" class="nles"/>',
  medula: '<rect x="180" y="250" width="22" height="18" rx="3" class="nles"/>',
  cornoant: '<circle cx="193" cy="322" r="9" class="nles"/>',
  raiz: '<circle cx="222" cy="331" r="9" class="nles"/>',
  nervo: '<circle cx="292" cy="392" r="10" class="nles"/><circle cx="68" cy="392" r="10" class="nles"/>',
  colpost: '<rect x="174" y="185" width="14" height="140" rx="4" class="nles"/>',
  cerebelo: '<ellipse cx="226" cy="148" rx="26" ry="16" class="nles"/>',
  nucbase: '<ellipse cx="152" cy="74" rx="10" ry="8" class="nles"/><ellipse cx="208" cy="74" rx="10" ry="8" class="nles"/>',
  facial: '<circle cx="244" cy="120" r="9" class="nles"/>'
};
function svg(site) {
  var a = site ? NEU[site].vias : ['cs', 'dc', 'st'];
  function op(k) { return !site || a.indexOf(k) >= 0 ? 1 : 0.28; }
  return '<svg viewBox="0 0 360 420" class="lab-svg" role="img" aria-label="Vias motoras e sensitivas do membro inferior direito, vista posterior">' +
  '<style>.nb{fill:var(--surface-2,#eef2f2);stroke:var(--line-2,#9aa);stroke-width:1.5}.nt{font:600 10px var(--mono,monospace);fill:var(--muted,#667)}.nles{fill:#e5484d33;stroke:#e5484d;stroke-width:2.5;stroke-dasharray:4 3}</style>' +
  '<text x="180" y="14" text-anchor="middle" class="nt">vista posterior · E = esquerda do paciente</text>' +
  '<ellipse cx="128" cy="62" rx="56" ry="40" class="nb"/><ellipse cx="232" cy="62" rx="56" ry="40" class="nb"/>' +
  '<text x="96" y="50" class="nt">E</text><text x="262" y="50" class="nt">D</text>' +
  '<ellipse cx="152" cy="74" rx="10" ry="8" fill="none" stroke="var(--muted,#889)" stroke-dasharray="2 2"/><ellipse cx="208" cy="74" rx="10" ry="8" fill="none" stroke="var(--muted,#889)" stroke-dasharray="2 2"/>' +
  '<rect x="160" y="98" width="40" height="80" rx="8" class="nb"/><text x="104" y="118" class="nt">tronco</text>' +
  '<ellipse cx="134" cy="148" rx="26" ry="16" class="nb"/><ellipse cx="226" cy="148" rx="26" ry="16" class="nb"/><text x="104" y="182" class="nt">cerebelo</text>' +
  '<line x1="200" y1="120" x2="250" y2="120" stroke="var(--a2,#6b4fa0)" stroke-width="2"/><text x="254" y="116" class="nt">VII</text>' +
  '<rect x="160" y="178" width="40" height="160" rx="8" class="nb"/><text x="110" y="262" class="nt">T10</text><text x="104" y="330" class="nt">L5</text>' +
  '<text x="206" y="196" class="nt">medula</text>' +
  '<path d="M68 395 Q120 360 166 335" fill="none" stroke="var(--line-2,#9aa)" stroke-width="2"/><path d="M292 395 Q240 360 194 335" fill="none" stroke="var(--line-2,#9aa)" stroke-width="2"/>' +
  '<text x="280" y="414" class="nt">perna D</text><text x="30" y="414" class="nt">perna E</text>' +
  /* corticoespinhal: córtex E desce, cruza nas pirâmides, desce à D */
  '<path d="M128 56 L168 100 L168 160 L194 172 L194 322 Q240 352 292 392" fill="none" stroke="#e5484d" stroke-width="3" opacity="' + op('cs') + '"/>' +
  /* coluna posterior: sobe à D, cruza no bulbo, vai ao córtex E */
  '<path d="M290 386 Q236 352 184 328 L184 150 L172 140 L118 66" fill="none" stroke="#3e7bd6" stroke-width="3" opacity="' + op('dc') + '"/>' +
  /* espinotalâmica: entra e cruza logo, sobe à E */
  '<path d="M288 382 Q232 350 186 334 L166 326 L166 104 L110 70" fill="none" stroke="#2f9e6a" stroke-width="3" opacity="' + op('st') + '"/>' +
  '<circle cx="181" cy="166" r="3" fill="#e5484d"/><text x="204" y="168" class="nt">pirâmides</text>' +
  (site ? LES[site] : '') +
  '<g transform="translate(226,214)" class="nt"><rect width="10" height="4" y="4" fill="#e5484d"/><text x="14" y="9">corticoespinhal</text><rect width="10" height="4" y="16" fill="#3e7bd6"/><text x="14" y="21">coluna posterior</text><rect width="10" height="4" y="28" fill="#2f9e6a"/><text x="14" y="33">espinotalâmica</text></g>' +
  '</svg>';
}
window.NEURO_LAB = { NROW: NROW, NEU: NEU, svg: svg };
})();

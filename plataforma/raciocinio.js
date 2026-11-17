/* Aprender fazendo: trilhas de raciocínio + laboratório de mecanismos */
(function () {
'use strict';
const A = () => window.SEMIO;
const $ = (s, el) => (el || document).querySelector(s);
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/* =====================================================================
   TRILHAS
   tipos de passo: texto, escolha, prever, multi, classificar, ordenar, montar, medidor
   add: { p: [pistas], s: [síndromes], h: 'hipótese' } cresce o mapa do raciocínio
   ===================================================================== */
const TRILHAS = [
{
  id: 'historia', titulo: 'Organizando a história', area: 'Anamnese', cor: 'var(--a1)',
  resumo: 'Transforme a fala solta de uma paciente em QD, HDA e IDA, e descubra o sintoma-guia.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">Consultório · paciente D. Lúcia, 44 anos</p><div class="speech">"Doutor(a), estou com uma dor no peito do tipo <b>fincada</b>, muito forte, de tirar o ar. Começou há 3 dias, lavando roupa. Ela <b>vai para as costas</b> e só melhora com <b>Novalgina</b>. Piora quando eu respiro fundo. Ah, e estou chateada porque <b>engordei muito</b> no último ano, e às vezes sinto <b>ardor para urinar</b>. Meu pai é hipertenso. Não fumo. Estou com medo porque minha <b>vizinha teve um infarto</b> mês passado."</div><p>Sua tarefa nesta trilha: organizar esse relato como se fosse escrever no prontuário e, no caminho, montar um raciocínio sobre a dor.</p>' },
  { type: 'classificar', q: 'Em que parte da anamnese entra cada informação?', buckets: ['HDA', 'IDA', 'Antecedentes', 'Hábitos e contexto'],
    items: [['Dor no peito em pontada há 3 dias', 0], ['Irradia para as costas', 0], ['Melhora com dipirona', 0], ['Piora ao respirar fundo', 0], ['Ganho de peso no último ano', 1], ['Ardor ao urinar às vezes', 1], ['Pai hipertenso', 2], ['Não fuma', 3], ['Vizinha teve infarto', 3]],
    why: 'A HDA gira em torno do <b>sintoma-guia</b> (a dor) e de tudo que a caracteriza. Queixas sem relação com ele (peso, disúria) vão para o <b>IDA</b>. A doença do pai é antecedente familiar. O infarto da vizinha é contexto emocional: acolha, mas não é dado clínico da paciente.',
    add: { p: ['Dor torácica em pontada, 3 dias', 'Irradia para o dorso', 'Piora à inspiração'] } },
  { type: 'escolha', q: 'Como registrar a queixa e duração (QD)?', o: ['"Dor no peito" há 3 dias', 'Dor torácica pleurítica', 'Suspeita de infarto há 3 dias', 'Dor no peito, ganho de peso e disúria'], a: 0,
    ex: ['Palavras da paciente + tempo. Perfeito.', 'Isso já é interpretação técnica; vai para a HDA, não para a QD.', 'Nunca coloque rótulo diagnóstico na QD.', 'A QD é a queixa principal; as outras vão para o IDA.'],
    why: 'QD = a queixa mais importante, com as palavras do paciente, em poucas palavras, com a duração e <b>sem rótulo diagnóstico</b>.' },
  { type: 'montar', q: 'Monte a primeira frase da HDA em termos técnicos. Toque nos blocos na ordem certa (há blocos que sobram).',
    chips: ['Paciente refere', 'dor torácica', 'em pontada,', 'de forte intensidade (8/10),', 'iniciada há 3 dias,', 'com irradiação para o dorso,', 'que piora à inspiração profunda', 'e melhora com dipirona.', 'provavelmente cardíaca,', 'por causa da pressão alta'],
    correct: [0, 1, 2, 3, 4, 5, 6, 7],
    why: 'A HDA usa termos técnicos e segue o esquema: sintoma + qualidade + intensidade + início + irradiação + fatores de piora e melhora. Interpretações ("provavelmente cardíaca") não entram na narrativa.' },
  { type: 'escolha', q: 'Pensando no OPQRST, qual pergunta ainda vale fazer sobre essa dor?', o: ['"Onde dói?"', '"Quanto dói de 0 a 10?"', '"Começou de repente ou aos poucos? Já teve antes? Tem febre, tosse ou falta de ar fora da dor?"', '"O que melhora a dor?"'], a: 2,
    why: 'Localização, intensidade e alívio ela já contou. Faltam o <b>modo de início</b>, episódios prévios e os <b>sintomas associados</b>, que ajudam a separar causas pleurais, cardíacas e de parede.' },
  { type: 'escolha', q: 'Ela diz: "Tenho medo de ser infarto como a minha vizinha". A melhor resposta é:', o: ['"Fica tranquila, não é infarto."', '"Entendo sua preocupação, faz sentido ter medo depois do que aconteceu. Vamos examinar com cuidado para entender essa dor."', '"Isso não tem nada a ver com a sua vizinha."', 'Ignorar e seguir o roteiro.'], a: 1,
    why: '<b>Resposta empática</b>: reconhece a emoção sem prometer um diagnóstico que você ainda não tem. Na OSCE, isso costuma estar no checklist de comunicação.' },
  { type: 'medidor', q: 'Use cada pista para fortalecer (↑), enfraquecer (↓) ou não mexer (=) em cada hipótese.', hip: ['Dor pleurítica / de parede', 'Síndrome coronariana', 'Dissecção de aorta'],
    pistas: [
      { t: 'Dor em pontada ("fincada")', e: [1, -1, 0], why: 'Pontada sugere pleura ou parede. A dor isquêmica costuma ser em aperto, peso ou queimação. Na dissecção a dor é "rasgando", lancinante.' },
      { t: 'Piora ao respirar fundo', e: [1, -1, 0], why: 'Dor ventilatório-dependente aponta para a pleura (ou a parede). A angina não varia com a respiração.' },
      { t: 'Irradia para as costas', e: [0, 0, 1], why: 'A irradiação dorsal é típica da dissecção (e da pancreatite). Sozinha, sem "rasgar" nem diferença de pressão entre os braços, pesa pouco.' },
      { t: 'Mulher de 44 anos, não fumante, sem HAS', e: [0, -1, -1], why: 'Poucos fatores de risco reduzem a probabilidade de coronariopatia e de dissecção.' },
      { t: 'Alívio com dipirona', e: [1, 0, -1], why: 'Dor de parede/pleura costuma aliviar com analgésico comum; a dissecção não melhora assim.' }
    ],
    add: { s: ['Dor torácica ventilatório-dependente'], h: 'Dor pleurítica/de parede (confirmar com exame físico)' } }
  ],
  licao: 'O sintoma-guia organiza tudo: o que o caracteriza vai para a HDA, o resto vai para o IDA. Cada característica da dor (qualidade, relação com a respiração, irradiação) muda o peso das hipóteses. O exame físico vem depois para confirmar.'
},
{
  id: 'ic-infeccao', titulo: 'Febre, falta de ar e pernas inchadas', area: 'Integrado', cor: 'var(--a4)',
  resumo: 'Caso 1 da revisão: separe o que é infecção, o que é coração esquerdo e o que é coração direito.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">Pronto-atendimento · J.A.S., 68 anos</p><div class="speech">"Faz 4 dias que tenho febre com calafrio. A perna direita inchou, ficou vermelha, quente e doendo. Ontem a esquerda também inchou, mas essa não dói. Há 2 dias falto o ar até para tomar banho, durmo sentado com 3 travesseiros e acordo sufocado de madrugada."</div><p>Antecedentes: HAS há 20 anos (remédio irregular), <b>infarto há 6 anos</b>, diabetes. Frieira no pé direito há meses.</p>' },
  { type: 'medidor', q: 'Quatro hipóteses no começo. Como cada pista mexe nelas?', hip: ['Infecção de pele (erisipela/celulite)', 'IC descompensada', 'TVP', 'Síndrome nefrótica'],
    pistas: [
      { t: 'Febre com calafrios há 4 dias', e: [1, 0, 0, 0], why: 'Febre com calafrio sugere infecção bacteriana. Não explica, sozinha, as outras hipóteses.' },
      { t: 'Perna D vermelha, quente, dolorosa, eritema bem delimitado', e: [1, 0, 1, -1], why: 'Edema quente e doloroso é inflamatório: erisipela/celulite ou TVP. O edema da nefrótica é frio e indolor.' },
      { t: 'Fissura com coceira entre os dedos do pé D', e: [1, 0, 0, 0], why: 'Intertrigo é a clássica <b>porta de entrada</b> da erisipela.' },
      { t: 'Ortopneia e dispneia paroxística noturna', e: [0, 1, 0, -1], why: 'Ortopneia e DPN são marcadores de congestão pulmonar: IC esquerda.' },
      { t: 'Perna E inchada, fria, mole e indolor', e: [0, 1, -1, 1], why: 'Edema frio, mole e indolor é hidrostático ou oncótico (IC, nefrótica). Ter os dois membros inchados com características diferentes enfraquece TVP como explicação única.' },
      { t: 'Infarto prévio e HAS mal controlada', e: [0, 1, 0, 0], why: 'Coração já lesado: substrato para descompensar quando a demanda sobe (febre, taquicardia).' }
    ],
    add: { p: ['Febre + perna D quente e dolorosa', 'Intertrigo (porta de entrada)', 'Ortopneia e DPN', 'IAM prévio'] } },
  { type: 'prever', q: 'Você vai palpar o ictus. O que espera encontrar num VE que sofreu infarto e vive com HAS?', o: ['5º EIC LHC, 1 polpa', 'Desviado para baixo e para a esquerda, difuso', 'Impalpável por hiperinsuflação', 'Propulsivo, no lugar normal'], a: 1,
    reveal: 'Ictus no 6º EIC na linha axilar anterior, difuso (3 polpas).', why: 'Ventrículo <b>dilatado</b> → ictus desviado e difuso (≥ 3 polpas). Propulsivo e no lugar seria hipertrofia sem dilatação.' },
  { type: 'prever', q: 'Que som extra na ausculta denuncia sobrecarga de volume no ventrículo?', o: ['B4', 'B3', 'Estalido de abertura', 'Atrito pericárdico'], a: 1,
    reveal: 'Ritmo de galope com B3; sopro sistólico +3/+6 no foco mitral.', why: 'B3 nasce no enchimento rápido de um ventrículo dilatado e cheio. B4 é de ventrículo rígido. O sopro mitral é funcional: o anel dilatou junto com o VE.' },
  { type: 'prever', q: 'Na base do hemitórax direito: macicez, FTV abolido e MV abolido. Qual síndrome?', o: ['Consolidação', 'Derrame pleural', 'Pneumotórax', 'Hiperinsuflação'], a: 1,
    reveal: 'Derrame pleural no 1/3 inferior direito.', why: 'Macicez = algo denso. FTV abolido = algo entre o pulmão e a parede abafando a vibração. Líquido faz as duas coisas. Na consolidação o FTV estaria aumentado.', add: { s: ['Derrame pleural direito'] } },
  { type: 'classificar', q: 'Agora separe os achados pela origem.', buckets: ['Infecção', 'Coração esquerdo (congestão pulmonar)', 'Coração direito (congestão sistêmica)'],
    items: [['Febre 38,8 °C', 0], ['Eritema quente na perna D', 0], ['Linfonodo inguinal D doloroso', 0], ['Ortopneia e DPN', 1], ['Estertores finos nas bases', 1], ['Turgência jugular a 45°', 2], ['Refluxo hepatojugular', 2], ['Fígado doloroso a 4 cm do RCD', 2], ['Edema frio e mole na perna E', 2]],
    why: 'Coração esquerdo falhando = sangue represado no pulmão (dispneia, ortopneia, estertores). Coração direito falhando = sangue represado nas veias do corpo (jugular, fígado, edema). A infecção explica a perna D e o linfonodo reacional.',
    add: { s: ['Erisipela/celulite em MID', 'IC esquerda (congestão pulmonar)', 'IC direita (congestão sistêmica)'] } },
  { type: 'ordenar', q: 'Monte a cadeia: como uma frieira levou a um edema agudo de pulmão?', items: ['Fissura interdigital vira porta de entrada', 'Bactéria causa erisipela/celulite na perna D', 'Febre e taquicardia aumentam a demanda do coração', 'VE dilatado pós-infarto não consegue acompanhar', 'Pressões sobem: congestão pulmonar e sistêmica'],
    why: 'Infecção → demanda → coração doente descompensa. Essa é a lógica "infecção, demanda e congestão" da aula de revisão.' },
  { type: 'multi', q: 'Marque todas as síndromes presentes neste paciente.', o: ['Infecciosa de pele (erisipela/celulite)', 'Insuficiência cardíaca congestiva', 'Derrame pleural', 'Síndrome nefrótica', 'Consolidação pulmonar', 'Hipertensão portal'], correct: [0, 1, 2],
    why: 'Não há proteinúria (nefrótica), FTV aumentado com sopro tubário (consolidação) nem circulação colateral/esplenomegalia (hipertensão portal). A hepatomegalia aqui é congestiva.',
    add: { h: 'IC congestiva descompensada por erisipela (porta de entrada: intertrigo), com derrame pleural' } }
  ],
  licao: 'Separe os achados por mecanismo: o que é infecção, o que é congestão pulmonar (coração esquerdo) e o que é congestão sistêmica (coração direito). A perna D é inflamatória (quente, dolorosa); a perna E é cardíaca (fria, mole). Saber explicar essa diferença é o que a estação cobra.'
},
{
  id: 'edema-renal', titulo: 'O inchaço que começa no rosto', area: 'Exame geral', cor: 'var(--a2)',
  resumo: 'Caso 2 da revisão: do edema periorbitário à anasarca, entendendo a pressão oncótica.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">Ambulatório · M.L.R., 24 anos</p><div class="speech">"Há 2 semanas comecei a inchar em volta dos olhos, nas pernas e na região genital. De manhã o rosto está pior. Engordei 6 kg. A urina está fazendo muita espuma."</div><p>Tomou anti-inflamatório recentemente por dor de garganta. Tia com lúpus.</p>' },
  { type: 'medidor', q: 'Pese as pistas.', hip: ['Síndrome nefrótica', 'Insuficiência cardíaca', 'Cirrose', 'Angioedema'],
    pistas: [
      { t: 'Edema periorbitário, pior pela manhã', e: [1, -1, 0, 1], why: 'Edema facial matinal é típico renal (tecido frouxo + decúbito noturno). O angioedema também é facial, mas súbito.' },
      { t: 'Evolução progressiva em 2 semanas', e: [1, 0, 0, -1], why: 'Angioedema se instala em minutos a horas.' },
      { t: 'Urina espumosa', e: [1, 0, 0, 0], why: 'Espuma persistente = proteinúria. Pista central de nefrótica.' },
      { t: 'Nega dispneia e ortopneia; sem turgência jugular', e: [0, -1, 0, 0], why: 'Sem congestão pulmonar ou venosa, o coração explica mal o quadro.' },
      { t: 'Sem icterícia, sem etilismo, sem hepatopatia', e: [0, 0, -1, 0], why: 'Cirrose também dá edema oncótico, mas aqui faltam os estigmas e a história.' }
    ],
    add: { p: ['Edema periorbitário matinal', 'Urina espumosa', 'Ganho de 6 kg', 'Sem turgência jugular'] } },
  { type: 'ordenar', q: 'Monte o mecanismo do edema.', items: ['Lesão do glomérulo', 'Perda de proteína na urina (urina espumosa)', 'Albumina do sangue cai', 'Pressão oncótica do plasma diminui', 'Líquido escapa para o interstício e as cavidades'],
    why: 'É um edema <b>oncótico</b>: falta proteína para segurar a água dentro do vaso. A retenção renal de sódio também contribui.', add: { s: ['Edema oncótico generalizado'] } },
  { type: 'prever', q: 'Percutindo as bases pulmonares dela, o que espera?', o: ['Claro pulmonar', 'Macicez bilateral com MV diminuído', 'Timpanismo à direita', 'Hipersonoridade bilateral'], a: 1,
    reveal: 'Macicez nas bases com murmúrio vesicular diminuído, bilateral.', why: 'O líquido também se acumula nas serosas: derrame pleural bilateral (transudato).', add: { s: ['Derrame pleural bilateral'] } },
  { type: 'escolha', q: 'No abdome: macicez móvel presente e semicírculo de Skoda, piparote negativo. Isso indica:', o: ['Ascite de pequeno volume', 'Ascite de médio volume', 'Ascite de grande volume', 'Obstrução intestinal'], a: 1,
    why: 'Macicez móvel e Skoda aparecem a partir do médio volume; o piparote só fica positivo em ascite volumosa.', add: { s: ['Ascite (médio volume)', 'Anasarca'] } },
  { type: 'escolha', q: 'Por que o edema dela tem cacifo e é frio e indolor?', o: ['Porque é inflamatório', 'Porque é linfático', 'Porque é líquido livre no interstício, sem inflamação nem fibrose', 'Porque é mixedema'], a: 2,
    why: 'Líquido livre se desloca com a pressão do dedo (cacifo). Edema inflamatório é quente e doloroso; linfedema avançado e mixedema são duros e sem cacifo.',
    add: { h: 'Síndrome nefrótica (investigar AINE e lúpus)' } }
  ],
  licao: 'O tipo de edema conta o mecanismo: facial e matinal sugere rim; frio, mole e com cacifo sugere líquido livre sem inflamação. Com edema oncótico, o líquido vai para todo lugar, inclusive pleura e peritônio.'
},
{
  id: 'torax-fala', titulo: 'O tórax que fala', area: 'Respiratório', cor: 'var(--a3)',
  resumo: 'Deduza FTV, percussão e ausculta a partir do que está dentro do tórax: sólido, líquido ou ar.',
  passos: [
  { type: 'texto', html: '<h3>Uma regra para não decorar</h3><p>Pergunte sempre: <b>o que está entre o brônquio e a sua mão (ou o estetoscópio)?</b></p><div class="mini-cards"><div class="mini-card"><div class="mini-card-h">Sólido com brônquio aberto</div><div class="mini-card-b">Conduz melhor a vibração: FTV ↑, macicez, sopro tubário, pectorilóquia.</div></div><div class="mini-card"><div class="mini-card-h">Líquido na pleura</div><div class="mini-card-b">Afasta o pulmão da parede: FTV ↓, macicez, MV abolido.</div></div><div class="mini-card"><div class="mini-card-h">Ar na pleura</div><div class="mini-card-b">Afasta e ressoa: FTV ↓, timpanismo, MV abolido.</div></div><div class="mini-card"><div class="mini-card-h">Ar demais nos alvéolos</div><div class="mini-card-b">Hipersonoridade, tudo diminuído e simétrico.</div></div></div><p>Agora aplique.</p>' },
  { type: 'prever', q: 'Pneumonia lobar na base direita. O frêmito toracovocal ali está:', o: ['Aumentado', 'Normal', 'Diminuído', 'Abolido'], a: 0,
    reveal: 'FTV aumentado na base direita.', why: 'O alvéolo cheio de exsudato vira um meio sólido e o brônquio está pérvio: a voz passa melhor.', add: { p: ['Pneumonia: FTV ↑'] } },
  { type: 'prever', q: 'E na ausculta dessa área?', o: ['MV normal', 'Sopro tubário e estertores finos', 'Sibilos difusos', 'Silêncio absoluto'], a: 1,
    reveal: 'Sopro tubário, estertores finos, pectorilóquia.', why: 'Som brônquico chega à periferia pelo parênquima condensado (sopro tubário); os alvéolos abrindo com líquido dão crepitantes.' },
  { type: 'prever', q: 'Derrame pleural moderado na base esquerda. Percussão e FTV:', o: ['Timpanismo, FTV ↑', 'Macicez, FTV ↑', 'Macicez, FTV ↓/abolido', 'Hipersonoridade, FTV ↓'], a: 2,
    reveal: 'Macicez com FTV abolido; egofonia no limite superior do derrame.', why: 'Líquido é denso (macicez) e se interpõe entre pulmão e parede (FTV ↓). Na borda superior, o pulmão comprimido gera a voz metálica (egofonia).', add: { p: ['Derrame: macicez + FTV ↓'] } },
  { type: 'prever', q: 'Jovem alto e magro, dor súbita no peito. Hemitórax direito com MV abolido e FTV abolido. A percussão vai dar:', o: ['Macicez', 'Timpanismo', 'Claro pulmonar', 'Submacicez'], a: 1,
    reveal: 'Timpanismo em todo o hemitórax direito.', why: 'Mesmo padrão de "tudo abolido" do derrame, mas com ar: a percussão é o que separa os dois.', add: { p: ['Pneumotórax: timpanismo + FTV ↓'] } },
  { type: 'prever', q: 'Atelectasia do lobo inferior direito por tumor obstruindo o brônquio. Para onde vai a traqueia?', o: ['Fica centrada', 'Para o lado da atelectasia', 'Para o lado oposto', 'Oscila com a respiração'], a: 1,
    reveal: 'Traqueia desviada para a direita (lado colapsado), com retração.', why: 'O pulmão murcha e "puxa" o mediastino. Derrame volumoso e pneumotórax hipertensivo "empurram" para o lado oposto.' },
  { type: 'classificar', q: 'Associe cada achado à síndrome que ele mais sugere.', buckets: ['Consolidação', 'Derrame', 'Pneumotórax', 'Enfisema'],
    items: [['FTV aumentado', 0], ['Pectorilóquia afônica', 0], ['Egofonia', 1], ['Macicez com FTV abolido', 1], ['Timpanismo unilateral', 2], ['Abaulamento intercostal unilateral', 2], ['Hipersonoridade bilateral', 3], ['Tórax em tonel', 3]],
    why: 'Repare que FTV e percussão, juntos, já separam as quatro síndromes.', add: { s: ['Consolidação', 'Derrame pleural', 'Pneumotórax', 'Hiperinsuflação'] } },
  { type: 'escolha', q: 'Qual combinação distingue melhor consolidação de derrame?', o: ['Macicez', 'FTV', 'Expansibilidade', 'Frequência respiratória'], a: 1,
    why: 'Os dois são maciços e reduzem a expansibilidade. O <b>FTV</b> separa: aumenta na consolidação e diminui no derrame.',
    add: { h: 'Regra: sólido conduz; líquido e ar interpostos abafam' } }
  ],
  licao: 'Você não precisa decorar a tabela de síndromes: deduza cada linha perguntando o que há entre o brônquio e a parede. Percussão diz denso × ar; FTV diz se conduz ou abafa.'
},
{
  id: 'linfonodos-tb', titulo: 'Caroços no pescoço', area: 'Exame geral', cor: 'var(--a2)',
  resumo: 'Caso 3 da revisão: leia um linfonodo e junte com o pulmão para chegar à tuberculose.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">C.B.P., 32 anos, pedreiro</p><div class="speech">"Faz 6 semanas que o pescoço começou a crescer dos dois lados. No começo os caroços eram duros e mexiam; agora estão grudados uns nos outros. Tenho febre todo fim de tarde, suo à noite e perdi 9 kg. Tusso com catarro e às vezes sai raia de sangue."</div><p>Mora com 8 colegas em casa pequena e pouco ventilada. Tabagista e etilista.</p>' },
  { type: 'classificar', q: 'O que cada característica de linfonodo sugere?', buckets: ['Infecção aguda / reacional', 'Neoplasia ou tuberculose'],
    items: [['Doloroso à palpação', 0], ['Quente, com rubor', 0], ['Móvel, fibroelástico', 0], ['Endurecido ou pétreo', 1], ['Aderido aos planos', 1], ['Coalescente (em bloco)', 1], ['Fistulizado', 1], ['Supraclavicular', 1]],
    why: 'Dor e calor = inflamação aguda. Dureza, fixação e coalescência = infiltração (neoplasia, TB). Fístula é característica de TB ganglionar. Supraclavicular é sempre suspeito.', add: { p: ['Linfonodos coalescentes, endurecidos'] } },
  { type: 'medidor', q: 'Pese as pistas.', hip: ['Tuberculose', 'Linfoma', 'Pneumonia bacteriana', 'Câncer de pulmão'],
    pistas: [
      { t: 'Febre vespertina, sudorese noturna, perda de 9 kg', e: [1, 1, -1, 1], why: 'Síndrome consumptiva: TB, linfoma e câncer. Pneumonia bacteriana é aguda e não emagrece 9 kg.' },
      { t: 'Mora com 8 pessoas em casa pouco ventilada', e: [1, 0, 0, 0], why: 'Aglomeração e pouca ventilação favorecem a transmissão do bacilo.' },
      { t: 'Tosse com hemoptoicos há 4 semanas', e: [1, 0, 0, 1], why: 'Escarro com sangue em quadro subagudo: TB e neoplasia.' },
      { t: '32 anos', e: [0, 0, 0, -1], why: 'Câncer de pulmão é raro nessa idade.' },
      { t: 'Ápice direito: FTV ↑, estertores grossos e sopro anfórico', e: [1, 0, 0, 0], why: 'Lesão apical com cavidade: padrão clássico da TB pós-primária.' }
    ],
    add: { p: ['Síndrome consumptiva', 'Hemoptoicos', 'Aglomeração', 'Cavidade no ápice D'] } },
  { type: 'escolha', q: 'O sopro anfórico no ápice significa:', o: ['Derrame pleural', 'Grande cavidade pulmonar', 'Broncoespasmo', 'Atrito pleural'], a: 1,
    why: 'Ruído de baixa frequência com ressonância metálica, como soprar a boca de uma garrafa vazia: o ar ressoa dentro de uma <b>caverna</b>.', add: { s: ['Síndrome cavitária (ápice D)', 'Linfadenopatia cervical'] } },
  { type: 'escolha', q: 'Se o linfonodo fosse só supraclavicular esquerdo, endurecido, num idoso emagrecido, você pensaria em:', o: ['Faringite', 'Sinal de Troisier-Virchow: neoplasia abdominal (gástrica)', 'Reação vacinal', 'Mononucleose'], a: 1,
    why: 'O linfonodo de Virchow drena o ducto torácico: metástase de câncer gástrico ou intra-abdominal.',
    add: { h: 'Tuberculose pulmonar cavitária + ganglionar (diferencial: linfoma)' } }
  ],
  licao: 'Descreva o linfonodo com os 8 itens (número, local, tamanho, consistência, mobilidade, dor, coalescência, pele) e deixe as características apontarem infecção aguda ou infiltração. Depois junte com o contexto e o pulmão.'
},
{
  id: 'cirrose', titulo: 'Barriga inchada e confusão', area: 'Abdome', cor: 'var(--a5)',
  resumo: 'Caso 4 da revisão: separe hipertensão portal de insuficiência hepática e veja a encefalopatia surgir.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">R.M.T., 56 anos · informante: esposa</p><div class="speech">"A barriga dele foi crescendo há 2 meses e as pernas incharam. Há 3 semanas ficou com os olhos amarelos. Anteontem vomitou sangue e hoje fez cocô preto. Desde então troca o dia pela noite e está confuso."</div><p>Hepatite C há 15 anos, nunca tratada. Nega etilismo.</p>' },
  { type: 'escolha', q: 'Por que é importante registrar que a informante é a esposa?', o: ['Por formalidade', 'Porque o paciente está confuso: a fonte e a confiabilidade mudam a interpretação', 'Para saber o estado civil', 'Não é importante'], a: 1,
    why: 'Fonte e grau de confiabilidade são parte da identificação. A própria confusão já é um achado.' },
  { type: 'classificar', q: 'Separe os achados em duas grandes síndromes (e a complicação).', buckets: ['Hipertensão portal', 'Insuficiência hepática', 'Encefalopatia hepática'],
    items: [['Ascite', 0], ['Circulação colateral periumbilical', 0], ['Baço palpável', 0], ['Hematêmese e melena (varizes)', 0], ['Icterícia', 1], ['Aranhas vasculares', 1], ['Eritema palmar', 1], ['Equimoses (coagulopatia)', 1], ['Flapping', 2], ['Inversão do sono-vigília', 2]],
    why: '<b>Hipertensão portal</b> = sangue que não passa pelo fígado: abre colaterais, aumenta o baço e transuda para o peritônio. <b>Insuficiência hepática</b> = o fígado não faz seu trabalho: não conjuga bilirrubina, não degrada estrogênio (aranhas, eritema), não produz fatores de coagulação. <b>Encefalopatia</b>: toxinas (amônia) chegam ao cérebro.',
    add: { s: ['Hipertensão portal', 'Insuficiência hepática', 'Encefalopatia hepática'] } },
  { type: 'prever', q: 'Na circulação colateral tipo porta, abaixo do umbigo o fluxo é:', o: ['Ascendente', 'Descendente', 'Ausente', 'Igual ao da cava inferior'], a: 1,
    reveal: 'Veias periumbilicais com fluxo centrífugo: ascendente acima e descendente abaixo do umbigo.', why: 'O sangue sai do umbigo (veia umbilical recanalizada) para todos os lados. Na obstrução da cava inferior o fluxo é sempre ascendente, nos flancos.' },
  { type: 'prever', q: 'Como você espera o fígado à palpação?', o: ['Liso, doloroso, borda romba', 'Nodular, borda romba, indolor', 'Liso, mole, borda fina', 'Pulsátil'], a: 1,
    reveal: 'Fígado palpável no RCD, superfície nodular, borda romba, indolor.', why: 'Fibrose com nódulos de regeneração. O fígado liso e doloroso é o da congestão (IC); liso e mole, o da esteatose.' },
  { type: 'ordenar', q: 'Monte a história natural.', items: ['Hepatite C crônica sem tratamento', 'Fibrose progressiva até cirrose', 'Resistência ao fluxo portal aumenta', 'Varizes esofágicas, esplenomegalia e ascite', 'Varizes sangram (hematêmese e melena)', 'Sangue no intestino aumenta a amônia: encefalopatia'],
    why: 'A hemorragia digestiva é um precipitante clássico da encefalopatia: a proteína do sangue vira amônia no intestino.' },
  { type: 'escolha', q: 'Ele tem edema e fígado palpável. Qual achado afasta congestão cardíaca como causa?', o: ['Ascite', 'Ausência de turgência jugular', 'Icterícia', 'Taquicardia'], a: 1,
    why: 'Se o coração direito estivesse falhando, as jugulares estariam túrgidas e haveria refluxo hepatojugular.',
    add: { h: 'Cirrose por HCV com hipertensão portal, insuficiência hepática e encefalopatia precipitada por HDA' } }
  ],
  licao: 'Na hepatopatia crônica, pergunte duas coisas: o sangue consegue passar pelo fígado (hipertensão portal)? O fígado consegue trabalhar (insuficiência hepática)? Quase todo achado cabe numa das duas.'
},
{
  id: 'sopro-ea', titulo: 'Deduzindo um sopro', area: 'Cardiovascular', cor: 'var(--a4)',
  resumo: 'Desmaio ao subir escadas: deduza momento, forma, irradiação, pulso e PA de uma estenose aórtica.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">A.G.L., 74 anos</p><div class="speech">"Subindo a escada, fiquei tonto e apaguei por alguns segundos. Há meses sinto um aperto no peito quando caminho, que passa quando paro, e me canso mais."</div><p>Ao auscultar, há um sopro no foco aórtico. Em vez de decorar, vamos deduzir tudo.</p>' },
  { type: 'escolha', q: 'Passo 1. Em que fase a valva aórtica fica aberta?', o: ['Na sístole (ejeção)', 'Na diástole (enchimento)'], a: 0,
    why: 'Valvas semilunares (aórtica e pulmonar) abrem para o sangue sair dos ventrículos: sístole. As AV (mitral, tricúspide) abrem na diástole.' },
  { type: 'escolha', q: 'Passo 2. Estenose é problema quando a valva deveria estar…', o: ['Aberta', 'Fechada'], a: 0,
    why: 'Estenose = não abre direito. Insuficiência = não fecha direito. Então a estenose aórtica soa na <b>sístole</b>.', add: { p: ['Sopro sistólico no foco aórtico'] } },
  { type: 'prever', q: 'Passo 3. A velocidade da ejeção sobe e depois cai. Qual a forma do sopro?', o: ['Platô (holossistólico)', 'Crescendo-decrescendo (diamante)', 'Decrescendo', 'Ruflar'], a: 1,
    reveal: 'Sopro mesossistólico rude em diamante, começando após B1 e terminando antes de B2.', why: 'O sopro de ejeção acompanha o fluxo: começa quando a valva abre (depois de B1), cresce, decresce e termina antes de B2.' },
  { type: 'prever', q: 'Passo 4. Para onde vai o sangue que atravessa a valva? Isso define a irradiação.', o: ['Axila', 'Carótidas e fúrcula', 'Dorso', 'Não irradia'], a: 1,
    reveal: 'Irradia para o pescoço (carótidas) e fúrcula.', why: 'O sopro irradia no sentido do jato: da aorta para os vasos do pescoço. Na insuficiência mitral o jato vai para o átrio, que fica atrás: axila.' },
  { type: 'prever', q: 'Passo 5. Pouco sangue sai, e devagar. Como fica o pulso e a PA?', o: ['Pulso de Corrigan e pressão divergente', 'Pulso parvus et tardus e pressão convergente', 'Pulso paradoxal', 'Pulso normal'], a: 1,
    reveal: 'Carotídeo de pequena amplitude e ascensão lenta. PA 110 × 90 mmHg.', why: 'Parvus (pouco volume) et tardus (sobe devagar). A sistólica cai e a diastólica sobe: a pressão de pulso estreita (convergente).', add: { p: ['Parvus et tardus', 'Pressão convergente'] } },
  { type: 'prever', q: 'Passo 6. O VE empurra contra resistência por anos. O que acontece com o ictus e que bulha aparece?', o: ['Ictus difuso, B3', 'Ictus propulsivo, B4', 'Ictus impalpável, B3', 'Ictus normal, sem bulha extra'], a: 1,
    reveal: 'Ictus propulsivo e sustentado; B4 audível.', why: 'Sobrecarga de <b>pressão</b> → hipertrofia concêntrica → ictus propulsivo e ventrículo rígido (B4). Sobrecarga de volume daria dilatação (ictus difuso, B3).', add: { s: ['Hipertrofia do VE'] } },
  { type: 'montar', q: 'Agora descreva o sopro para o examinador. Monte na ordem (sobram blocos).',
    chips: ['Sopro sistólico', 'ejetivo, em diamante,', 'rude,', '+4/+6 com frêmito,', 'mais audível no foco aórtico,', 'irradiando para carótidas,', 'que diminui com handgrip.', 'holossistólico,', 'irradiando para axila,'],
    correct: [0, 1, 2, 3, 4, 5, 6],
    why: 'Os 6 itens da descrição: momento, forma, timbre, intensidade, foco, irradiação e manobras.' },
  { type: 'escolha', q: 'Os sintomas dele (síncope, angina, dispneia de esforço) formam qual tríade?', o: ['Tríade de Beck', 'SAD da estenose aórtica', 'Tríade de Virchow', 'Tríade de Charcot'], a: 1,
    why: 'No esforço, a valva estreita impede o débito de subir: cai a perfusão cerebral (síncope) e coronariana (angina), e a pressão volta para o pulmão (dispneia).',
    add: { h: 'Estenose aórtica (provável calcificação senil)' } }
  ],
  licao: 'Qualquer sopro valvar se deduz com duas perguntas: quando a valva abre? A lesão impede abrir (estenose) ou fechar (insuficiência)? O resto (forma, irradiação, pulso, ictus) sai do fluxo de sangue. Teste as 8 combinações no Laboratório de mecanismos.'
},
{
  id: 'abdome-agudo', titulo: 'Dor que migrou para a direita', area: 'Abdome', cor: 'var(--a5)',
  resumo: 'Faça o exame do abdome na ordem certa e use os sinais para separar as causas.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">G.H.A., 21 anos</p><div class="speech">"A dor começou em volta do umbigo, meio espalhada. Umas 8 horas depois desceu para o lado direito, embaixo, e não sai mais. Perdi a fome, vomitei uma vez depois que a dor começou. Dói mais quando ando ou tusso."</div>' },
  { type: 'ordenar', q: 'Em que ordem você examina o abdome?', items: ['Inspeção', 'Ausculta', 'Percussão', 'Palpação superficial', 'Palpação profunda', 'Sinais especiais'],
    why: 'No abdome a ausculta vem antes de percutir e palpar, porque a manipulação altera os ruídos hidroaéreos. A palpação começa superficial e longe da dor.' },
  { type: 'medidor', q: 'Pese as pistas.', hip: ['Apendicite', 'Pielonefrite', 'Colecistite', 'Obstrução intestinal'],
    pistas: [
      { t: 'Dor periumbilical que migra para a FID', e: [1, 0, 0, 0], why: 'Migração clássica: primeiro dor visceral mal localizada (umbigo), depois irritação do peritônio parietal sobre o apêndice (FID).' },
      { t: 'Anorexia; vômito depois do início da dor', e: [1, 0, 0, 0], why: 'Na apendicite a dor vem antes do vômito; na gastroenterite costuma ser o contrário.' },
      { t: 'Nega disúria; Giordano negativo', e: [0, -1, 0, 0], why: 'Sem sintomas urinários e sem dor à punho-percussão lombar, pielonefrite fica improvável.' },
      { t: 'Murphy negativo, dor longe do hipocôndrio direito', e: [0, 0, -1, 0], why: 'Colecistite dói no HD e tem Murphy positivo.' },
      { t: 'Sem distensão, RHA hipoativos (não metálicos), evacuou ontem', e: [0, 0, 0, -1], why: 'Obstrução daria distensão, peristaltismo visível, ruídos metálicos e parada de eliminação.' },
      { t: 'Blumberg positivo na FID', e: [1, 0, 0, 0], why: 'Dor à descompressão = irritação peritoneal localizada.' }
    ],
    add: { p: ['Dor migratória para FID', 'Anorexia', 'Blumberg + na FID', 'Giordano e Murphy negativos'] } },
  { type: 'escolha', q: 'Por que palpar a fossa ilíaca ESQUERDA dói na DIREITA (Rovsing)?', o: ['Reflexo nervoso cruzado', 'A compressão empurra gases pelo cólon até o ceco e distende o apêndice inflamado', 'Porque o apêndice fica à esquerda', 'É simulação'], a: 1,
    why: 'Entender o mecanismo ajuda a lembrar: o ar desloca-se retrogradamente pelo cólon até o ceco.', add: { s: ['Irritação peritoneal localizada (FID)'] } },
  { type: 'classificar', q: 'Cada sinal aponta para quê?', buckets: ['Apendicite', 'Vesícula / pâncreas', 'Rim', 'Perfuração / ascite / baço'],
    items: [['Rovsing', 0], ['Psoas', 0], ['Lenander', 0], ['Murphy', 1], ['Courvoisier-Terrier', 1], ['Cullen e Grey-Turner', 1], ['Giordano', 2], ['Jobert', 3], ['Piparote', 3], ['Castell', 3]],
    why: 'Jobert = timpanismo na área hepática (ar livre). Piparote = ascite volumosa. Castell = esplenomegalia.' },
  { type: 'escolha', q: 'Antes de pesquisar o Blumberg você deve:', o: ['Pedir que o paciente prenda a respiração', 'Avisar o paciente e começar longe da área dolorosa', 'Fazer de surpresa para não haver simulação', 'Pular, porque dói'], a: 1,
    why: 'Na OSCE, avisar antes de uma manobra dolorosa costuma pontuar (comunicação e respeito).',
    add: { h: 'Apendicite aguda com irritação peritoneal localizada' } }
  ],
  licao: 'A dor abdominal se organiza por localização (projeção dos órgãos) e por evolução. Os sinais semiológicos confirmam: cada um tem um mecanismo que você pode explicar ao examinador.'
}
];

/* ---------- motor das trilhas ---------- */
const SCORABLE = { escolha: 1, prever: 1, multi: 1, classificar: 1, ordenar: 1, montar: 1, medidor: 1 };
let TR = null;
function trilhaProg(id) { const S = A().S; S.trilhas = S.trilhas || {}; return S.trilhas[id] || null; }

function viewTrilhas(v) {
  const S = A().S; S.trilhas = S.trilhas || {};
  v.innerHTML = `
  <div class="page-head"><div class="eyebrow">Aprender fazendo · ${TRILHAS.length} trilhas</div><h1>Trilhas de raciocínio</h1>
  <p>Cada trilha é um caso que você constrói passo a passo: organiza a história, pesa hipóteses a cada pista, prevê o achado antes de examinar, monta a cadeia do mecanismo e escreve a descrição. Ao lado, o mapa do seu raciocínio vai crescendo.</p></div>
  <div class="panel" style="margin-bottom:18px"><h3>Como funciona cada tipo de passo</h3>
  <div class="mini-cards">
    <div class="mini-card"><div class="mini-card-h">Termômetro de hipóteses</div><div class="mini-card-b">Para cada pista, diga se ela fortalece, enfraquece ou não mexe em cada hipótese.</div></div>
    <div class="mini-card"><div class="mini-card-h">Prever o achado</div><div class="mini-card-b">Antes de examinar, diga o que espera. Depois vê o achado real e o porquê.</div></div>
    <div class="mini-card"><div class="mini-card-h">Classificar</div><div class="mini-card-b">Escolha uma caixa e toque nos itens que pertencem a ela.</div></div>
    <div class="mini-card"><div class="mini-card-h">Ordenar e montar</div><div class="mini-card-b">Toque na sequência certa para montar um mecanismo ou uma descrição.</div></div>
  </div></div>
  <div class="grid-3">${TRILHAS.map(t => { const p = S.trilhas[t.id]; return `<a class="case-card" href="#trilhas-${t.id}">
    <span class="lvl" style="color:${t.cor}">${t.area} · ${t.passos.length} passos</span>
    <h3>${t.titulo}</h3><span class="muted small">${t.resumo}</span>
    <div class="row">${p ? `<span class="tag" style="background:var(--ok-soft);color:var(--ok)">melhor ${p.best}%</span>` : '<span class="tag">nova</span>'}</div></a>`; }).join('')}</div>`;
}

function viewTrilha(v, id) {
  const t = TRILHAS.find(x => x.id === id); if (!t) return viewTrilhas(v);
  TR = { t, i: 0, ss: t.passos.map(() => ({})), mapa: { p: [], s: [], h: '' }, fresh: [] };
  renderTrilha(v);
  v.onclick = e => onTrilhaClick(e, v);
  A().onLeave(() => { v.onclick = null; });
}

function mapaHTML(final) {
  const m = TR.mapa;
  const isNew = x => TR.fresh.indexOf(x) >= 0 ? ' new' : '';
  return `<div class="mapa${final ? ' final' : ''}">
    <div class="mapa-h"><span class="eyebrow">Seu raciocínio</span></div>
    <div class="mapa-col"><div class="mapa-lbl">Pistas-chave</div>${m.p.length ? m.p.map(x => `<span class="pista${isNew(x)}">${x}</span>`).join('') : '<span class="mapa-empty">aparecem conforme você avança</span>'}</div>
    <div class="mapa-arrow">↓</div>
    <div class="mapa-col"><div class="mapa-lbl">Síndromes</div>${m.s.length ? m.s.map(x => `<span class="sind${isNew(x)}">${x}</span>`).join('') : '<span class="mapa-empty">—</span>'}</div>
    <div class="mapa-arrow">↓</div>
    <div class="mapa-col"><div class="mapa-lbl">Hipótese</div>${m.h ? `<div class="hip${isNew(m.h)}">${m.h}</div>` : '<span class="mapa-empty">—</span>'}</div>
  </div>`;
}

function renderTrilha(v) {
  const t = TR.t;
  if (TR.i >= t.passos.length) return renderFim(v);
  const p = t.passos[TR.i], ss = TR.ss[TR.i];
  v.innerHTML = `
  <div class="row" style="justify-content:space-between;margin-bottom:10px"><a href="#trilhas" class="small">← Trilhas</a><span class="mono small">${TR.i + 1}/${t.passos.length}</span></div>
  <h1 style="font-size:1.7rem;margin-bottom:10px">${t.titulo}</h1>
  <div class="stepper">${t.passos.map((x, k) => `<i class="${k < TR.i ? 'ok' : k === TR.i ? 'cur' : ''}"></i>`).join('')}</div>
  <div class="tr-layout">
    <div class="panel tr-step">${stepHTML(p, ss)}
      ${ss.done ? `<div class="row" style="margin-top:16px;justify-content:flex-end"><button class="btn primary" type="button" data-next>${TR.i === t.passos.length - 1 ? 'Ver o mapa final' : 'Próximo passo →'}</button></div>` : ''}
    </div>
    <aside class="tr-side">${mapaHTML()}</aside>
  </div>`;
  TR.fresh = [];
}

function renderFim(v) {
  const t = TR.t; let pts = 0, max = 0;
  t.passos.forEach((p, k) => { if (SCORABLE[p.type]) { max++; pts += TR.ss[k].pts || 0; } });
  const pct = max ? Math.round(pts / max * 100) : 100;
  const S = A().S; S.trilhas = S.trilhas || {}; const prev = S.trilhas[t.id]; S.trilhas[t.id] = { best: Math.max(pct, prev ? prev.best : 0), last: pct }; A().save();
  v.innerHTML = `
  <div class="row" style="justify-content:space-between;margin-bottom:10px"><a href="#trilhas" class="small">← Trilhas</a></div>
  <div class="page-head"><div class="eyebrow">Trilha concluída</div><h1>${t.titulo}</h1></div>
  <div class="grid-2">
    <div class="panel" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap">${A().ring(pct)}<div style="flex:1;min-width:200px"><h3>O que fica</h3><p>${t.licao}</p></div></div>
    ${mapaHTML(true)}
  </div>
  <div class="panel" style="margin-top:16px"><h3>Fale o raciocínio em voz alta</h3><p class="muted small">Use o mapa: "O paciente apresenta [pistas], que compõem [síndromes]; minha hipótese principal é [hipótese] porque…" Repita sem olhar.</p></div>
  <div class="row" style="margin-top:16px"><button class="btn primary" type="button" data-again>Refazer</button><a class="btn" href="#trilhas">Outra trilha</a><a class="btn" href="#mecanismos">Laboratório de mecanismos</a></div>`;
}

function complete(p, ss, pts) {
  ss.done = true; ss.pts = pts;
  if (p.add && !ss.added) {
    ss.added = true; const m = TR.mapa;
    (p.add.p || []).forEach(x => { if (m.p.indexOf(x) < 0) { m.p.push(x); TR.fresh.push(x); } });
    (p.add.s || []).forEach(x => { if (m.s.indexOf(x) < 0) { m.s.push(x); TR.fresh.push(x); } });
    if (p.add.h) { m.h = p.add.h; TR.fresh.push(p.add.h); }
  }
}

function whyBox(html, ok) { return `<div class="explain ${ok === true ? 'good' : ok === false ? 'bad' : ''}">${ok === true ? '<b>Isso.</b> ' : ok === false ? '<b>Não exatamente.</b> ' : ''}${html}</div>`; }

function stepHTML(p, ss) {
  const T = p.type;
  if (T === 'texto') {
    if (!ss.done) ss.done = true;
    return p.html;
  }
  if (T === 'escolha' || T === 'prever') {
    return `<div class="step-kind">${T === 'prever' ? 'Prever antes de examinar' : 'Decida'}</div><div class="quiz-q">${p.q}</div>
      ${p.o.map((o, k) => { let c = ''; if (ss.done) { if (k === p.a) c = 'right'; else if (k === ss.choice) c = 'wrong'; } return `<button class="opt ${c}" type="button" data-op="${k}" ${ss.done ? 'disabled' : ''}>${o}${ss.done && p.ex && (k === ss.choice || k === p.a) ? `<span class="opt-ex">${p.ex[k]}</span>` : ''}</button>`; }).join('')}
      ${ss.done && p.reveal ? `<div class="finding"><span class="eyebrow">Achado no exame</span><div>${p.reveal}</div></div>` : ''}
      ${ss.done ? whyBox(p.why, ss.choice === p.a) : ''}`;
  }
  if (T === 'multi') {
    ss.sel = ss.sel || [];
    return `<div class="step-kind">Selecione todas as corretas</div><div class="quiz-q">${p.q}</div>
      ${p.o.map((o, k) => { const on = ss.sel.indexOf(k) >= 0, should = p.correct.indexOf(k) >= 0; let c = on ? 'picked' : ''; if (ss.done) c = should ? 'right' : (on ? 'wrong' : ''); return `<button class="opt ${c}" type="button" data-mo="${k}" ${ss.done ? 'disabled' : ''}>${on ? '☑ ' : '☐ '}${o}</button>`; }).join('')}
      ${ss.done ? whyBox(p.why, ss.pts === 1) : `<button class="btn primary" type="button" data-check>Conferir</button>`}`;
  }
  if (T === 'classificar') {
    ss.as = ss.as || {}; if (ss.paint === undefined) ss.paint = 0;
    if (!ss.order) ss.order = shuffle(p.items.map((_, k) => k));
    const all = Object.keys(ss.as).length === p.items.length;
    return `<div class="step-kind">Classifique</div><div class="quiz-q">${p.q}</div>
      ${ss.done ? '' : `<p class="small muted">1) Toque numa caixa. 2) Toque nos itens que pertencem a ela.</p>`}
      <div class="buckets">${p.buckets.map((b, k) => `<button class="bucket b${k}${ss.paint === k && !ss.done ? ' on' : ''}" type="button" data-bk="${k}" ${ss.done ? 'disabled' : ''}>${b}<span class="mono">${Object.values(ss.as).filter(x => x === k).length}</span></button>`).join('')}</div>
      <div class="items">${ss.order.map(k => { const it = p.items[k], a = ss.as[k]; let st = ''; if (ss.done) st = a === it[1] ? ' right' : ' wrong'; return `<button class="item${a !== undefined ? ' b' + a + ' set' : ''}${st}" type="button" data-it="${k}" ${ss.done ? 'disabled' : ''}>${it[0]}${a !== undefined ? `<span class="item-tag">${p.buckets[a]}</span>` : ''}${ss.done && a !== it[1] ? `<span class="item-fix">→ ${p.buckets[it[1]]}</span>` : ''}</button>`; }).join('')}</div>
      ${ss.done ? whyBox(p.why, ss.pts === 1 ? true : ss.pts < 0.6 ? false : undefined) + `<p class="mono small">${Math.round(ss.pts * p.items.length)}/${p.items.length} corretos</p>` : `<button class="btn primary" type="button" data-check ${all ? '' : 'disabled'}>Conferir</button>`}`;
  }
  if (T === 'ordenar' || T === 'montar') {
    const isOrd = T === 'ordenar';
    const pool = isOrd ? p.items : p.chips;
    ss.seq = ss.seq || []; if (!ss.order) ss.order = shuffle(pool.map((_, k) => k));
    const target = isOrd ? pool.map((_, k) => k) : p.correct;
    const ready = isOrd ? ss.seq.length === pool.length : ss.seq.length > 0;
    return `<div class="step-kind">${isOrd ? 'Ordene' : 'Monte a frase'}</div><div class="quiz-q">${p.q}</div>
      <div class="${isOrd ? 'seq-list' : 'sentence'}">${ss.seq.length ? ss.seq.map((k, pos) => { let st = ''; if (ss.done) st = target[pos] === k ? ' right' : ' wrong'; return isOrd ? `<button class="seq-item${st}" type="button" data-rm="${pos}" ${ss.done ? 'disabled' : ''}><span class="mono">${pos + 1}</span>${pool[k]}</button>` : `<button class="word${st}" type="button" data-rm="${pos}" ${ss.done ? 'disabled' : ''}>${pool[k]}</button>`; }).join('') : `<span class="mapa-empty">${isOrd ? 'Toque nos itens abaixo na ordem certa' : 'Toque nos blocos abaixo para montar'}</span>`}</div>
      ${ss.done ? '' : `<div class="pool">${ss.order.filter(k => ss.seq.indexOf(k) < 0).map(k => `<button class="${isOrd ? 'item' : 'word'}" type="button" data-add="${k}">${pool[k]}</button>`).join('')}</div>`}
      ${ss.done ? (ss.pts < 1 ? `<div class="finding"><span class="eyebrow">Sequência correta</span><div>${isOrd ? '<ol>' + target.map(k => '<li>' + pool[k] + '</li>').join('') + '</ol>' : target.map(k => pool[k]).join(' ')}</div></div>` : '') + whyBox(p.why, ss.pts === 1 ? true : ss.pts < 0.6 ? false : undefined)
      : `<div class="row"><button class="btn primary" type="button" data-check ${ready ? '' : 'disabled'}>Conferir</button>${ss.seq.length ? '<button class="btn" type="button" data-clear>Limpar</button>' : ''}</div>`}`;
  }
  if (T === 'medidor') {
    if (ss.k === undefined) { ss.k = 0; ss.sel = {}; ss.tot = p.hip.map(() => 0); ss.hits = 0; ss.cells = 0; }
    const pi = p.pistas[Math.min(ss.k, p.pistas.length - 1)];
    const finished = ss.k >= p.pistas.length;
    const lead = Math.max.apply(null, ss.tot);
    return `<div class="step-kind">Termômetro de hipóteses</div><div class="quiz-q">${p.q}</div>
      ${finished ? '' : `<div class="pista-card"><span class="eyebrow">Pista ${ss.k + 1} de ${p.pistas.length}</span><div>${pi.t}</div></div>`}
      <div class="meter">${p.hip.map((h, j) => { const w = Math.max(6, Math.min(100, 50 + ss.tot[j] * 12)); const s = ss.sel[j]; const chk = ss.checked && !finished;
        const btn = (val, lbl) => { let c = s === val ? ' on' : ''; if (chk) { if (pi.e[j] === val) c += ' right'; else if (s === val) c += ' wrong'; } return `<button class="mbtn${c}" type="button" data-me="${j}:${val}" ${chk || finished ? 'disabled' : ''} aria-label="${lbl}">${lbl}</button>`; };
        return `<div class="meter-row${finished && ss.tot[j] === lead ? ' lead' : ''}"><div class="meter-name">${h}</div><div class="meter-bar"><i style="width:${w}%"></i></div>${finished ? `<span class="mono small">${ss.tot[j] > 0 ? '+' : ''}${ss.tot[j]}</span>` : `<div class="mbtns">${btn(-1, '↓')}${btn(0, '=')}${btn(1, '↑')}</div>`}</div>`; }).join('')}</div>
      ${finished ? whyBox('A barra mais longa é a hipótese que sobreviveu às pistas. Você acertou ' + ss.hits + ' de ' + ss.cells + ' julgamentos.', ss.hits / ss.cells >= 0.75 ? true : undefined)
      : ss.checked ? whyBox(pi.why) + `<div class="row" style="justify-content:flex-end"><button class="btn primary" type="button" data-mnext>${ss.k === p.pistas.length - 1 ? 'Ver resultado' : 'Próxima pista'}</button></div>`
      : `<button class="btn primary" type="button" data-check ${Object.keys(ss.sel).length === p.hip.length ? '' : 'disabled'}>Conferir</button> <span class="small muted">${Object.keys(ss.sel).length}/${p.hip.length} marcadas</span>`}`;
  }
  return '';
}

function onTrilhaClick(e, v) {
  if (!TR) return;
  if (e.target.closest('[data-again]')) { const id = TR.t.id; TR = null; return viewTrilha(v, id); }
  if (TR.i >= TR.t.passos.length) return;
  const p = TR.t.passos[TR.i], ss = TR.ss[TR.i], T = p.type;
  const g = s => e.target.closest(s);
  const re = () => { const y = window.scrollY; renderTrilha(v); window.scrollTo(0, y); };
  if (g('[data-next]')) { TR.i++; renderTrilha(v); window.scrollTo(0, 0); return; }
  if ((T === 'escolha' || T === 'prever') && g('[data-op]') && !ss.done) { ss.choice = +g('[data-op]').dataset.op; complete(p, ss, ss.choice === p.a ? 1 : 0); return re(); }
  if (T === 'multi') {
    if (g('[data-mo]') && !ss.done) { const k = +g('[data-mo]').dataset.mo; const i = ss.sel.indexOf(k); if (i >= 0) ss.sel.splice(i, 1); else ss.sel.push(k); return re(); }
    if (g('[data-check]')) { let ok = 0; p.o.forEach((_, k) => { if ((ss.sel.indexOf(k) >= 0) === (p.correct.indexOf(k) >= 0)) ok++; }); complete(p, ss, ok === p.o.length ? 1 : ok / p.o.length * 0.8); return re(); }
  }
  if (T === 'classificar') {
    if (g('[data-bk]')) { ss.paint = +g('[data-bk]').dataset.bk; return re(); }
    if (g('[data-it]') && !ss.done) { const k = +g('[data-it]').dataset.it; if (ss.as[k] === ss.paint) delete ss.as[k]; else ss.as[k] = ss.paint; return re(); }
    if (g('[data-check]')) { const ok = p.items.filter((it, k) => ss.as[k] === it[1]).length; complete(p, ss, ok / p.items.length); return re(); }
  }
  if (T === 'ordenar' || T === 'montar') {
    if (g('[data-add]')) { ss.seq.push(+g('[data-add]').dataset.add); return re(); }
    if (g('[data-rm]') && !ss.done) { ss.seq.splice(+g('[data-rm]').dataset.rm, 1); return re(); }
    if (g('[data-clear]')) { ss.seq = []; return re(); }
    if (g('[data-check]')) {
      const target = T === 'ordenar' ? p.items.map((_, k) => k) : p.correct;
      let ok = 0; target.forEach((k, pos) => { if (ss.seq[pos] === k) ok++; });
      const extra = Math.max(0, ss.seq.length - target.length);
      complete(p, ss, Math.max(0, (ok - extra) / target.length)); return re();
    }
  }
  if (T === 'medidor') {
    if (g('[data-me]') && !ss.checked) { const [j, val] = g('[data-me]').dataset.me.split(':').map(Number); ss.sel[j] = val; return re(); }
    if (g('[data-check]')) { const pi = p.pistas[ss.k]; ss.checked = true; p.hip.forEach((_, j) => { ss.cells++; if (ss.sel[j] === pi.e[j]) ss.hits++; ss.tot[j] += pi.e[j]; }); return re(); }
    if (g('[data-mnext]')) { ss.k++; ss.sel = {}; ss.checked = false; if (ss.k >= p.pistas.length) complete(p, ss, ss.hits / ss.cells); return re(); }
  }
}

/* =====================================================================
   LABORATÓRIO DE MECANISMOS
   ===================================================================== */
/* ---------- Pulmão ---------- */
const PROW = [
  ['exp', 'Expansibilidade', ['Preservada e simétrica', 'Reduzida no lado afetado', 'Reduzida bilateralmente']],
  ['traq', 'Traqueia / mediastino', ['Centrada', 'Desviada para o lado afetado', 'Desviada para o lado oposto']],
  ['ftv', 'Frêmito toracovocal', ['Normal', 'Aumentado', 'Diminuído ou abolido']],
  ['perc', 'Percussão', ['Claro pulmonar', 'Maciço / submaciço', 'Timpânico', 'Hipersonoro']],
  ['mv', 'Murmúrio vesicular', ['Normal', 'Diminuído ou abolido', 'Substituído por sopro tubário', 'Diminuído, expiração prolongada']],
  ['adv', 'Ruídos adventícios', ['Nenhum', 'Estertores finos', 'Sibilos', 'Egofonia / atrito no limite']],
  ['voz', 'Ressonância vocal', ['Normal', 'Aumentada (broncofonia, pectorilóquia)', 'Diminuída ou abolida']]
];
const PROC = {
  normal: { n: 'Normal', bi: true, chave: 'Alvéolos cheios de ar, pleuras finas e coladas.', v: { exp: [0, 'Os dois lados se movem igual.'], traq: [0, 'Nada empurra nem puxa o mediastino.'], ftv: [0, 'A vibração atravessa o pulmão aerado de forma simétrica.'], perc: [0, 'Ar dentro de alvéolos: som claro.'], mv: [0, 'Ar entrando e saindo dos alvéolos.'], adv: [0, 'Vias aéreas livres e secas.'], voz: [0, 'O parênquima aerado filtra a voz: sons incompreensíveis.'] } },
  consolidacao: { n: 'Consolidação (pneumonia)', chave: 'Alvéolos cheios de exsudato, brônquio aberto: vira um bloco sólido que CONDUZ.', v: {
    exp: [1, 'O lobo inflamado e a dor pleurítica limitam o movimento daquele lado.'], traq: [0, 'O volume do lobo não muda: nada empurra nem puxa.'], ftv: [1, 'Sólido com brônquio pérvio conduz melhor a vibração da voz.'], perc: [1, 'Tecido denso no lugar do ar.'], mv: [2, 'O som brônquico chega à periferia através do bloco sólido.'], adv: [1, 'Alvéolos com líquido se abrindo no fim da inspiração.'], voz: [1, 'A voz atravessa nítida: broncofonia e pectorilóquia.'] } },
  derrame: { n: 'Derrame pleural', chave: 'Líquido no espaço pleural: AFASTA o pulmão da parede e abafa.', v: {
    exp: [1, 'O líquido restringe aquele hemitórax.'], traq: [0, 'Moderado não desvia; volumoso empurra para o lado oposto.'], ftv: [2, 'O líquido entre o pulmão e a mão abafa a vibração.'], perc: [1, 'Líquido é denso: macicez (com limite superior curvo).'], mv: [1, 'O som pulmonar não atravessa o líquido.'], adv: [3, 'No limite superior, o pulmão comprimido dá egofonia; no início, atrito pleural.'], voz: [2, 'O líquido abafa a voz.'] } },
  pneumotorax: { n: 'Pneumotórax', chave: 'Ar no espaço pleural: afasta o pulmão e RESSOA.', v: {
    exp: [1, 'O pulmão colapsado não acompanha a parede.'], traq: [0, 'Simples fica centrada; hipertensivo empurra para o lado oposto (emergência).'], ftv: [2, 'O ar entre o pulmão e a parede não transmite a vibração.'], perc: [2, 'Ar livre numa cavidade: timpanismo.'], mv: [1, 'O pulmão está afastado; quase não se ouve.'], adv: [0, 'Não há pulmão ventilando ali.'], voz: [2, 'A voz não chega à parede.'] } },
  atelectasia: { n: 'Atelectasia', chave: 'Brônquio obstruído, alvéolos murcham: o lobo colapsa e PUXA.', v: {
    exp: [1, 'O lobo colapsado não expande; pode haver retração e tiragem.'], traq: [1, 'O volume perdido puxa o mediastino para o mesmo lado.'], ftv: [2, 'Com o brônquio fechado, a vibração não chega.'], perc: [1, 'Tecido colapsado sem ar: macicez.'], mv: [1, 'Não entra ar no lobo.'], adv: [0, 'Sem fluxo, sem ruído.'], voz: [2, 'Brônquio obstruído não conduz a voz.'] } },
  enfisema: { n: 'Enfisema / hiperinsuflação', bi: true, chave: 'Ar demais preso nos alvéolos destruídos, dos dois lados.', v: {
    exp: [2, 'Tórax já insuflado (em tonel) quase não expande mais.'], traq: [0, 'Processo simétrico.'], ftv: [2, 'Muito ar e pouco parênquima conduzem mal: diminuído dos dois lados.'], perc: [3, 'Excesso de ar: hipersonoridade.'], mv: [3, 'Pouco fluxo e ar aprisionado: MV diminuído com expiração longa.'], adv: [0, 'Pode haver roncos ou sibilos se houver bronquite associada.'], voz: [2, 'O ar em excesso abafa a voz.'] } },
  asma: { n: 'Broncoespasmo (asma)', bi: true, chave: 'Brônquios estreitados: o ar sai com dificuldade e assobiando.', v: {
    exp: [2, 'Hiperinsuflação dinâmica limita a expansão; uso de musculatura acessória e tiragem.'], traq: [0, 'Processo difuso e simétrico.'], ftv: [0, 'Normal ou levemente diminuído.'], perc: [3, 'Ar aprisionado: hipersonoridade.'], mv: [3, 'Fluxo reduzido, expiração prolongada.'], adv: [2, 'Ar passando por via estreita: sibilos expiratórios.'], voz: [0, 'Parênquima preservado.'] } },
  congestao: { n: 'Congestão (IC esquerda)', bi: true, chave: 'Pressão alta nos capilares pulmonares: líquido nos alvéolos das bases.', v: {
    exp: [0, 'Geralmente preservada.'], traq: [0, 'Processo bilateral.'], ftv: [0, 'Normal ou levemente aumentado.'], perc: [0, 'Claro (ou submacicez nas bases).'], mv: [0, 'Presente.'], adv: [1, 'Alvéolos com líquido nas bases abrindo: estertores finos bilaterais.'], voz: [0, 'Normal.'] } }
};

function lungSVG(proc, lado, hip) {
  const P = PROC[proc]; const affD = !P.bi && lado === 'D', affE = !P.bi && lado === 'E';
  let shift = 0; // + desloca para a direita da imagem (lado E do paciente)
  if (proc === 'atelectasia') shift = lado === 'D' ? -14 : 14;
  if ((proc === 'pneumotorax' && hip) ) shift = lado === 'D' ? 16 : -16;
  const lungD = 'M188 72 Q120 60 76 120 Q58 200 62 282 Q125 262 186 276 Z';
  const lungE = 'M212 72 Q280 60 324 120 Q342 200 338 282 Q275 262 214 276 Z';
  const hil = side => side === 'D' ? '186 130' : '214 130';
  const lung = (side, path) => {
    const aff = side === 'D' ? affD : affE;
    let tr = '', fill = 'var(--lung)';
    if (aff && proc === 'pneumotorax') tr = `transform="translate(${side === 'D' ? 186 : 214} 130) scale(0.58) translate(-${side === 'D' ? 186 : 214} -130)"`;
    if (aff && proc === 'atelectasia') tr = `transform="translate(0 72) scale(1 0.88) translate(0 -72)"`;
    if (proc === 'enfisema') tr = `transform="translate(${side === 'D' ? 186 : 214} 150) scale(1.05) translate(-${side === 'D' ? 186 : 214} -150)"`;
    return `<path d="${path}" fill="${fill}" stroke="var(--teal)" stroke-width="1.5" ${tr}/>`;
  };
  let over = '';
  const lowerD = 'M66 205 Q125 185 187 212 L186 276 Q125 262 62 282 Z', lowerE = 'M334 205 Q275 185 213 212 L214 276 Q275 262 338 282 Z';
  if (proc === 'consolidacao') { const pth = lado === 'D' ? lowerD : lowerE; const x0 = lado === 'D' ? 180 : 220, dir = lado === 'D' ? -1 : 1;
    over += `<path d="${pth}" fill="var(--trace)" fill-opacity=".45"/><path d="M${x0} 200 l${dir * 30} 25 l${dir * 25} 10 M${x0 + dir * 30} 225 l${dir * 5} 25" stroke="var(--surface)" stroke-width="2" fill="none"/><text x="${lado === 'D' ? 120 : 280}" y="252" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">exsudato</text>`; }
  if (proc === 'derrame') { const pth = lado === 'D' ? 'M54 200 Q90 228 192 250 L192 292 L46 302 Z' : 'M346 200 Q310 228 208 250 L208 292 L354 302 Z';
    over += `<path d="${pth}" fill="var(--liquid)" fill-opacity=".75"/><text x="${lado === 'D' ? 115 : 285}" y="282" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">líquido</text>`; }
  if (proc === 'pneumotorax') { over += `<text x="${lado === 'D' ? 95 : 305}" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">ar livre</text>`; }
  if (proc === 'atelectasia') { const x = lado === 'D' ? 150 : 250; over += `<ellipse cx="${x}" cy="235" rx="30" ry="18" fill="var(--ink)" fill-opacity=".45"/><text x="${x}" y="268" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">colapso</text><circle cx="${lado === 'D' ? 176 : 224}" cy="128" r="6" fill="var(--trace)"/><text x="${lado === 'D' ? 150 : 250}" y="112" text-anchor="middle" font-size="10" fill="var(--ink)">obstrução</text>`; }
  if (proc === 'congestao') { for (let k = 0; k < 26; k++) { const side = k % 2, x = side ? 230 + (k * 37) % 100 : 75 + (k * 41) % 100, y = 230 + (k * 13) % 40; over += `<circle cx="${x}" cy="${y}" r="3" fill="var(--liquid)"/>`; } }
  if (proc === 'asma') { over += `<path d="M186 130 L150 170 L120 210 M150 170 L160 220 M214 130 L250 170 L280 210 M250 170 L240 220" stroke="var(--trace)" stroke-width="3" fill="none" stroke-dasharray="2 3"/><text x="200" y="300" text-anchor="middle" font-size="11" fill="var(--ink)">brônquios estreitados</text>`; }
  if (proc === 'enfisema') { over += `<text x="200" y="306" text-anchor="middle" font-size="11" fill="var(--ink)">diafragma rebaixado e plano</text>`; }
  const diaY = proc === 'enfisema' ? 300 : 290;
  const affLabel = !P.bi && proc !== 'normal' ? `<text x="${lado === 'D' ? 60 : 340}" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="var(--trace)">lado afetado</text>` : '';
  return `<svg class="lung-svg" viewBox="0 0 400 320" role="img" aria-label="Esquema do tórax: ${P.n}">
    <path d="M40 300 L52 90 Q70 40 150 30 L250 30 Q330 40 348 90 L360 300 Z" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2"/>
    ${lung('D', lungD)}${lung('E', lungE)}
    <path d="M50 ${diaY} Q120 ${proc === 'enfisema' ? diaY - 6 : diaY - 26} 195 ${diaY - 4} Q280 ${proc === 'enfisema' ? diaY - 6 : diaY - 24} 352 ${diaY}" fill="none" stroke="var(--muted)" stroke-width="2"/>
    <g transform="translate(${shift} 0)" style="transition:transform .4s">
      <ellipse cx="214" cy="215" rx="38" ry="48" fill="var(--surface-3)" stroke="var(--line)"/><text x="214" y="219" text-anchor="middle" font-size="10" fill="var(--muted)">coração</text>
      <rect x="194" y="8" width="12" height="96" rx="5" fill="var(--surface)" stroke="var(--teal)" stroke-width="1.5"/>
      <path d="M200 104 L178 128 M200 104 L222 128" stroke="var(--teal)" stroke-width="5" stroke-linecap="round"/>
    </g>
    ${over}${affLabel}
    <text x="14" y="160" font-size="12" font-weight="700" fill="var(--muted)">D</text><text x="378" y="160" font-size="12" font-weight="700" fill="var(--muted)">E</text>
  </svg>`;
}

/* ---------- Coração ---------- */
const HROW = [
  ['fase', 'Momento do sopro', ['Sistólico', 'Diastólico']],
  ['forma', 'Forma', ['Ejeção em diamante (mesossistólico)', 'Holossistólico em platô', 'Protodiastólico em decrescendo', 'Mesodiastólico em ruflar']],
  ['foco', 'Foco', ['Aórtico', 'Aórtico acessório', 'Pulmonar', 'Mitral', 'Tricúspide']],
  ['irr', 'Irradiação', ['Carótidas / pescoço', 'Axila', 'Ápice', 'Dorso / ombro E', 'Pouco ou não irradia']],
  ['insp', 'Inspeção profunda (Rivero-Carvallo)', ['Aumenta', 'Não aumenta']],
  ['carga', 'Quem sofre', ['VE: sobrecarga de pressão (hipertrofia)', 'VE: sobrecarga de volume (dilatação)', 'AE e pulmão (VE poupado)', 'Coração direito']],
  ['pulso', 'Pulso / PA / jugular', ['Parvus et tardus, PA convergente', 'Corrigan, PA divergente', 'Pulso pouco alterado', 'Jugular com onda v gigante', 'Jugular com onda a proeminente']]
];
const VALV = { aortica: { n: 'Aórtica', sem: true, dir: false }, mitral: { n: 'Mitral', sem: false, dir: false }, pulmonar: { n: 'Pulmonar', sem: true, dir: true }, tricuspide: { n: 'Tricúspide', sem: false, dir: true } };
function heartDerive(vk, les) {
  const V = VALV[vk], est = les === 'estenose';
  const abre = V.sem ? 'sístole' : 'diástole', fecha = V.sem ? 'diástole' : 'sístole';
  const faseTxt = est ? abre : fecha;
  const r = {};
  r.fase = [faseTxt === 'sístole' ? 0 : 1, `A valva ${V.n.toLowerCase()} fica <b>aberta na ${abre}</b> e fechada na ${fecha}. ${est ? 'Estenose = não abre direito → o problema aparece quando deveria estar aberta' : 'Insuficiência = não fecha direito → o problema aparece quando deveria estar fechada'}: <b>${faseTxt}</b>.`];
  if (V.sem && est) r.forma = [0, 'O sangue é ejetado através da valva estreita: o sopro começa quando ela abre (após B1), acompanha a velocidade (sobe e desce) e termina antes de B2.'];
  else if (!V.sem && !est) r.forma = [1, 'O ventrículo já tem pressão maior que o átrio desde o fechamento: o refluxo dura a sístole inteira, com intensidade constante, encobrindo B1.'];
  else if (V.sem && !est) r.forma = [2, 'Logo após B2 o gradiente artéria→ventrículo é máximo e vai caindo: sopro que começa forte e decresce, aspirativo.'];
  else r.forma = [3, 'O sangue passa do átrio ao ventrículo por orifício estreito: sopro grave (ruflar) no meio da diástole, com reforço pré-sistólico pela contração atrial.'];
  r.foco = [{ aortica: est ? 0 : 1, mitral: 3, pulmonar: 2, tricuspide: 4 }[vk], vk === 'aortica' && !est ? 'O jato regurgitante desce junto ao septo: melhor no foco aórtico acessório (Erb).' : 'O foco é o ponto onde o som daquela valva chega melhor à parede.'];
  const irrMap = { 'aortica-estenose': [0, 'O jato segue a aorta para os vasos do pescoço.'], 'aortica-insuficiencia': [2, 'O jato volta para dentro do VE, em direção à ponta.'], 'mitral-insuficiencia': [1, 'O jato vai para o AE, que fica acima e atrás: axila e dorso.'], 'mitral-estenose': [4, 'Ruflar localizado no ápice, pouco irradia.'], 'pulmonar-estenose': [3, 'O jato segue a artéria pulmonar: dorso e ombro esquerdo.'], 'pulmonar-insuficiencia': [4, 'Localizado na borda esternal esquerda alta.'], 'tricuspide-insuficiencia': [4, 'Localizado na borda esternal esquerda baixa.'], 'tricuspide-estenose': [4, 'Localizado na borda esternal esquerda baixa.'] };
  r.irr = irrMap[vk + '-' + les];
  r.insp = [V.dir ? 0 : 1, V.dir ? 'Na inspiração a pressão no tórax cai e chega mais sangue ao coração <b>direito</b>: os sopros direitos aumentam.' : 'O aumento do retorno venoso na inspiração vai para o lado direito; sopros esquerdos não aumentam.'];
  const cargaMap = { 'aortica-estenose': [0, 'O VE empurra contra resistência: hipertrofia concêntrica → ictus propulsivo, B4.'], 'aortica-insuficiencia': [1, 'O VE recebe de volta o que ejetou: dilata → ictus desviado e difuso.'], 'mitral-insuficiencia': [1, 'O VE ejeta para a aorta e para o AE: sobrecarga de volume → ictus desviado, B3.'], 'mitral-estenose': [2, 'O sangue fica preso no AE: AE dilata (FA, Ortner), pulmão congestiona (hemoptise); o VE é poupado e o ictus é normal.'] };
  r.carga = cargaMap[vk + '-' + les] || [3, 'Lesão do lado direito: congestão sistêmica (jugular, fígado, edema).'];
  const pulsoMap = { 'aortica-estenose': [0, 'Pouco volume saindo devagar: parvus et tardus; sistólica cai e diastólica sobe.'], 'aortica-insuficiencia': [1, 'Grande volume ejetado e aorta que se esvazia de volta: Corrigan, sistólica alta e diastólica baixa.'], 'mitral-insuficiencia': [2, 'Pulso normal ou amplo nos casos crônicos.'], 'mitral-estenose': [2, 'Pulso de baixa amplitude; irregular se houver FA.'], 'tricuspide-insuficiencia': [3, 'O VD empurra sangue de volta ao AD na sístole: onda v gigante e fígado pulsátil.'], 'tricuspide-estenose': [4, 'O AD contrai contra uma valva estreita: onda a proeminente.'], 'pulmonar-estenose': [4, 'O AD contrai contra um VD hipertrofiado: onda a proeminente; pulso arterial normal.'], 'pulmonar-insuficiencia': [2, 'Pulso arterial normal.'] };
  r.pulso = pulsoMap[vk + '-' + les];
  const extra = { 'aortica-estenose': 'Tríade SAD; B4; fenômeno de Gallavardin; diminui com handgrip.', 'aortica-insuficiencia': '"Tudo pulsa" (Musset, Quincke, Müller, Traube, Duroziez, Hill); Austin-Flint; melhor sentado inclinado em expiração; aumenta com handgrip.', 'mitral-insuficiencia': 'B1 hipofonética; B3; aumenta com handgrip, diminui com Valsalva; aguda no IAM → edema agudo de pulmão.', 'mitral-estenose': 'B1 hiperfonética; estalido de abertura (quanto mais perto de B2, mais grave); campânula em DLE; reforço pré-sistólico some na FA; fácies mitral.', 'tricuspide-insuficiencia': 'Causa mais comum é funcional (hipertensão pulmonar dilata o VD); endocardite em usuário de droga IV.', 'tricuspide-estenose': 'Quase sempre reumática, junto com estenose mitral.', 'pulmonar-estenose': 'Congênita; estalido de ejeção que diminui na inspiração; P2 hipofonética.', 'pulmonar-insuficiencia': 'Graham Steell quando há hipertensão pulmonar; P2 hiperfonética.' };
  r.extra = extra[vk + '-' + les];
  r.snd = { 'aortica-estenose': 'eao', 'pulmonar-estenose': 'eao', 'mitral-insuficiencia': 'im', 'tricuspide-insuficiencia': 'im', 'aortica-insuficiencia': 'iao', 'pulmonar-insuficiencia': 'iao', 'mitral-estenose': 'em', 'tricuspide-estenose': 'em' }[vk + '-' + les];
  return r;
}
function heartSVG(vk, les) {
  const pos = { tricuspide: [120, 140, 'h'], mitral: [280, 140, 'h'], pulmonar: [50, 230, 'v'], aortica: [350, 230, 'v'] };
  const valve = k => { const [x, y, o] = pos[k]; const on = k === vk; const col = on ? 'var(--trace)' : 'var(--muted)'; const gap = on && les === 'estenose' ? 6 : 18;
    return o === 'h' ? `<line x1="${x - 34}" y1="${y}" x2="${x - gap / 2}" y2="${y}" stroke="${col}" stroke-width="${on ? 5 : 3}" stroke-linecap="round"/><line x1="${x + gap / 2}" y1="${y}" x2="${x + 34}" y2="${y}" stroke="${col}" stroke-width="${on ? 5 : 3}" stroke-linecap="round"/>`
      : `<line x1="${x}" y1="${y - 14}" x2="${x}" y2="${y - gap / 3}" stroke="${col}" stroke-width="${on ? 5 : 3}" stroke-linecap="round"/><line x1="${x}" y1="${y + gap / 3}" x2="${x}" y2="${y + 14}" stroke="${col}" stroke-width="${on ? 5 : 3}" stroke-linecap="round"/>`; };
  const [x, y, o] = pos[vk]; const fwd = les === 'estenose';
  // direção normal do fluxo: AV de cima para baixo; semilunar de dentro (ventrículo) para fora
  let path;
  if (o === 'h') path = fwd ? `M${x} ${y - 50} L${x} ${y + 55}` : `M${x} ${y + 50} L${x} ${y - 55}`;
  else { const out = vk === 'aortica' ? 1 : -1; path = fwd ? `M${x - out * 70} ${y} L${x + out * 6} ${y} L${x + out * 6} ${y - 90}` : `M${x + out * 6} ${y - 80} L${x + out * 6} ${y} L${x - out * 40} ${y}`; }
  return `<svg class="heart-svg" viewBox="0 0 400 330" role="img" aria-label="Esquema das quatro câmaras">
    <defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${fwd ? 'var(--teal)' : 'var(--trace)'}"/></marker></defs>
    <rect x="70" y="40" width="110" height="92" rx="16" fill="var(--liquid)" fill-opacity=".25" stroke="var(--line)"/><text x="125" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">AD</text>
    <rect x="220" y="40" width="110" height="92" rx="16" fill="var(--trace)" fill-opacity=".14" stroke="var(--line)"/><text x="275" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">AE</text>
    <rect x="70" y="148" width="110" height="140" rx="20" fill="var(--liquid)" fill-opacity=".25" stroke="var(--line)"/><text x="125" y="225" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">VD</text>
    <rect x="220" y="148" width="110" height="150" rx="20" fill="var(--trace)" fill-opacity=".14" stroke="var(--line)"/><text x="275" y="230" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">VE</text>
    <path d="M72 230 L44 230 L44 22" stroke="var(--line)" stroke-width="18" stroke-linejoin="round" fill="none" opacity=".8"/><text x="24" y="14" font-size="10" fill="var(--muted)">a. pulmonar</text>
    <path d="M328 230 L356 230 L356 22" stroke="var(--line)" stroke-width="18" stroke-linejoin="round" fill="none" opacity=".8"/><text x="345" y="14" font-size="10" fill="var(--muted)">aorta</text>
    ${['tricuspide', 'mitral', 'pulmonar', 'aortica'].map(valve).join('')}
    <path class="jet" d="${path}" stroke="${fwd ? 'var(--teal)' : 'var(--trace)'}" stroke-width="4" fill="none" stroke-dasharray="8 6" marker-end="url(#ah)"/>
    <text x="200" y="320" text-anchor="middle" font-size="11" fill="var(--ink)">${fwd ? 'jato atravessando valva estreita (turbilhão para frente)' : 'refluxo pela valva que não fecha'}</text>
  </svg>`;
}

/* ---------- Edema ---------- */
const EROW = [
  ['mec', 'Mecanismo (Starling)', ['↑ Pressão hidrostática', '↓ Pressão oncótica (albumina)', '↑ Permeabilidade (inflamação/alergia)', '↓ Drenagem linfática / depósito']],
  ['dist', 'Distribuição', ['Membros inferiores, bilateral', 'Face/periorbitário e generalizado', 'Um membro só', 'Face e lábios']],
  ['cacifo', 'Cacifo e consistência', ['Cacifo presente, mole', 'Sem cacifo, duro']],
  ['temp', 'Temperatura e cor', ['Frio, sem rubor', 'Quente, com rubor', 'Pele acastanhada (hiperpigmentação)', 'Morno, panturrilha empastada']],
  ['dor', 'Dor', ['Indolor', 'Doloroso']],
  ['tempo', 'Padrão temporal', ['Piora no fim do dia / em pé', 'Pior pela manhã', 'Súbito (minutos a horas)', 'Agudo (dias)', 'Crônico e progressivo']]
];
const EDEMAS = {
  ic: { n: 'Insuficiência cardíaca direita', f: [1, 0, 0, 0], v: { mec: [0, 'O coração direito não dá conta: a pressão nas veias e capilares sobe e empurra líquido para fora.'], dist: [0, 'Gravidade: acumula onde é mais baixo (MMII; sacro se acamado).'], cacifo: [0, 'Líquido livre no interstício.'], temp: [0, 'Sem inflamação.'], dor: [0, 'Indolor.'], tempo: [0, 'Ao longo do dia em pé, a gravidade acumula: vespertino.'] }, ex: 'Com turgência jugular, refluxo hepatojugular e hepatomegalia.' },
  nefrotica: { n: 'Síndrome nefrótica', f: [0, 1, 0, 0], v: { mec: [1, 'Proteinúria → hipoalbuminemia → o plasma não segura água.'], dist: [1, 'Tecido frouxo da face incha primeiro; depois anasarca e cavidades.'], cacifo: [0, 'Líquido livre.'], temp: [0, 'Sem inflamação.'], dor: [0, 'Indolor.'], tempo: [1, 'Deitado à noite, o líquido redistribui para a face: pior de manhã.'] }, ex: 'Urina espumosa, fácies renal.' },
  cirrose: { n: 'Cirrose', f: [1, 1, 0, 0], v: { mec: [1, 'O fígado não produz albumina (oncótico); a hipertensão portal soma pressão hidrostática no território esplâncnico (ascite).'], dist: [0, 'MMII bilateral, com ascite.'], cacifo: [0, 'Líquido livre.'], temp: [0, 'Sem inflamação.'], dor: [0, 'Indolor.'], tempo: [4, 'Evolução de semanas a meses.'] }, ex: 'Com ascite, icterícia, aranhas vasculares, sem turgência jugular.' },
  venosa: { n: 'Insuficiência venosa crônica', f: [1, 0, 0, 0], v: { mec: [0, 'Válvulas venosas incompetentes: o sangue fica nas pernas e a pressão capilar sobe.'], dist: [0, 'MMII, pior no lado com mais varizes.'], cacifo: [0, 'Mole no início.'], temp: [2, 'Hemácias extravasam e deixam hemossiderina: pele acastanhada (dermatite ocre), úlceras.'], dor: [0, 'Indolor ou peso.'], tempo: [0, 'Piora em pé e melhora com elevação.'] }, ex: 'Varizes, dermatite ocre, úlcera maleolar.' },
  tvp: { n: 'Trombose venosa profunda', f: [1, 0, 1, 0], v: { mec: [0, 'O trombo obstrui a veia: pressão a montante sobe (com componente inflamatório).'], dist: [2, 'Só o membro da veia trombosada: assimétrico.'], cacifo: [0, 'Geralmente com cacifo.'], temp: [3, 'Discreto aumento de temperatura e empastamento da panturrilha.'], dor: [1, 'Dor na panturrilha.'], tempo: [3, 'Instalação aguda, em dias.'] }, ex: 'Fatores: imobilização, cirurgia, câncer, anticoncepcional.' },
  celulite: { n: 'Celulite / erisipela', f: [0, 0, 1, 0], v: { mec: [2, 'Inflamação abre o endotélio: proteína e líquido saem.'], dist: [2, 'Localizado no membro infectado.'], cacifo: [0, 'Pode ter cacifo, geralmente mais endurecido.'], temp: [1, 'Sinais flogísticos: calor e rubor (erisipela com borda bem delimitada).'], dor: [1, 'Doloroso.'], tempo: [3, 'Agudo, com febre.'] }, ex: 'Porta de entrada (intertrigo), linfonodo regional doloroso.' },
  linfedema: { n: 'Linfedema', f: [0, 0, 0, 1], v: { mec: [3, 'A linfa não drena; proteína acumula e induz fibrose.'], dist: [2, 'Geralmente um membro (pós-mastectomia, filariose).'], cacifo: [1, 'Fibrose: duro, sem cacifo nas fases avançadas.'], temp: [0, 'Sem inflamação (fora de infecção).'], dor: [0, 'Indolor.'], tempo: [4, 'Crônico e progressivo.'] }, ex: 'Pele espessa, "casca de laranja".' },
  angioedema: { n: 'Angioedema (alérgico)', f: [0, 0, 1, 0], v: { mec: [2, 'Histamina/bradicinina aumentam a permeabilidade.'], dist: [3, 'Face, lábios, língua, glote.'], cacifo: [0, 'Mole.'], temp: [0, 'Sem calor importante.'], dor: [0, 'Indolor (pode arder).'], tempo: [2, 'Minutos a horas.'] }, ex: 'Risco de obstrução de via aérea: estridor.' },
  mixedema: { n: 'Mixedema (hipotireoidismo)', f: [0, 0, 0, 1], v: { mec: [3, 'Depósito de mucopolissacarídeos que retêm água no interstício.'], dist: [1, 'Face (mixedematosa) e pré-tibial.'], cacifo: [1, 'Duro, sem cacifo.'], temp: [0, 'Pele fria e seca.'], dor: [0, 'Indolor.'], tempo: [4, 'Crônico.'] }, ex: 'Fácies mixedematosa, perda da cauda das sobrancelhas.' }
};
function edemaSVG(f) {
  const labels = [['Pressão hidrostática', '↑ empurra para fora'], ['Pressão oncótica', '↓ não segura dentro'], ['Permeabilidade', '↑ parede vaza'], ['Drenagem linfática', '↓ não recolhe']];
  return `<svg class="edema-svg" viewBox="0 0 400 210" role="img" aria-label="Forças de Starling no capilar">
    <rect x="20" y="70" width="360" height="56" rx="28" fill="var(--trace)" fill-opacity=".15" stroke="var(--trace)" stroke-width="${f[2] ? 3 : 1.5}" stroke-dasharray="${f[2] ? '6 5' : '0'}"/>
    <text x="200" y="103" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">capilar</text>
    ${[60, 120, 180, 240, 300, 340].map((x, k) => `<circle cx="${x}" cy="${86 + (k % 2) * 22}" r="${f[1] ? 3 : 6}" fill="var(--amber)"/>`).join('')}
    ${[80, 160, 240, 320].map(x => `<path d="M${x} 70 L${x} ${f[0] || f[2] ? 22 : 46}" stroke="var(--liquid)" stroke-width="${f[0] || f[1] || f[2] ? 5 : 2}" marker-end="url(#ea)"/>`).join('')}
    <defs><marker id="ea" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--liquid)"/></marker></defs>
    <path d="M30 160 Q200 ${f[3] ? 165 : 185} 370 160" stroke="var(--teal)" stroke-width="${f[3] ? 2 : 6}" fill="none" stroke-dasharray="${f[3] ? '3 6' : '0'}"/><text x="200" y="${f[3] ? 158 : 200}" text-anchor="middle" font-size="10" fill="var(--muted)">vaso linfático</text>
    <text x="24" y="16" font-size="10" fill="var(--muted)">interstício</text>
    ${labels.map((l, k) => f[k] ? `<text x="${[80, 200, 320, 200][k]}" y="${[12, 140, 12, 150][k]}" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--trace)">${l[0]} ${l[1]}</text>` : '').join('')}
    <text x="210" y="${f[1] ? 132 : 0}" font-size="10" fill="var(--amber)" ${f[1] ? '' : 'visibility="hidden"'}>pouca albumina</text>
  </svg>`;
}

/* ---------- view dos mecanismos ---------- */
const MEC = { tab: 'pulmao', proc: 'consolidacao', lado: 'D', hip: false, prever: false, resp: {}, valv: 'aortica', les: 'estenose', edema: 'ic', desafio: null };
function rowsHTML(rows, data, keyPrefix) {
  return rows.map(r => {
    const k = r[0], val = data[k]; if (!val) return '';
    const ans = MEC.resp[keyPrefix + k];
    if (MEC.prever && ans === undefined) {
      return `<div class="frow"><div class="frow-h">${r[1]}</div><div class="seg">${r[2].map((o, i) => `<button class="chip" type="button" data-pr="${keyPrefix + k}:${i}">${o}</button>`).join('')}</div></div>`;
    }
    const ok = ans === undefined ? null : ans === val[0];
    return `<div class="frow${ok === true ? ' good' : ok === false ? ' bad' : ''}"><div class="frow-h">${r[1]}${ok === true ? ' <span class="mark y">✓</span>' : ok === false ? ` <span class="mark n">✗</span><span class="small muted"> (você disse: ${r[2][ans]})</span>` : ''}</div><div class="frow-v">${r[2][val[0]]}</div><div class="frow-why">${val[1]}</div></div>`;
  }).join('');
}
function scoreLine(rows, data, prefix) {
  if (!MEC.prever) return '';
  const ks = rows.filter(r => data[r[0]]).map(r => prefix + r[0]); const ans = ks.filter(k => MEC.resp[k] !== undefined);
  if (ans.length < ks.length) return `<p class="small muted">${ans.length}/${ks.length} previstos</p>`;
  const ok = rows.filter(r => data[r[0]] && MEC.resp[prefix + r[0]] === data[r[0]][0]).length;
  return `<p class="mono">${ok}/${ks.length} previsões corretas</p>`;
}
function viewMecanismos(v) {
  const tabs = [['pulmao', 'Pulmão: o que há no tórax?'], ['coracao', 'Coração: deduza o sopro'], ['edema', 'Edema: forças de Starling']];
  let body = '';
  if (MEC.tab === 'pulmao') {
    const dz = MEC.desafio && MEC.desafio.t === 'pulmao' ? MEC.desafio : null;
    const proc = dz ? dz.proc : MEC.proc, lado = dz ? dz.lado : MEC.lado, P = PROC[proc];
    const prefix = 'p-' + proc + '-' + lado + '-';
    body = `
    ${dz ? `<div class="callout warn"><div class="callout-t">Desafio</div>Leia os achados e descubra o processo. O desenho fica escondido até você responder.</div>` : `
    <div class="stack" style="gap:10px;margin-bottom:14px">
      <div><div class="qgroup-h">Processo</div><div class="seg">${Object.keys(PROC).map(k => `<button class="chip" type="button" data-proc="${k}" aria-pressed="${MEC.proc === k}">${PROC[k].n}</button>`).join('')}</div></div>
      ${!P.bi ? `<div class="row"><div><div class="qgroup-h">Lado</div><div class="seg"><button class="chip" type="button" data-lado="D" aria-pressed="${MEC.lado === 'D'}">Direito</button><button class="chip" type="button" data-lado="E" aria-pressed="${MEC.lado === 'E'}">Esquerdo</button></div></div>${proc === 'pneumotorax' ? `<label class="row small" style="gap:6px;font-weight:600;align-self:flex-end"><input type="checkbox" id="hip" ${MEC.hip ? 'checked' : ''} style="width:18px;height:18px;accent-color:var(--teal)">Hipertensivo</label>` : ''}</div>` : ''}
    </div>`}
    <div class="lab-grid">
      <div>${dz && !dz.done ? '<div class="empty" style="min-height:260px;display:grid;place-items:center">?</div>' : lungSVG(proc, lado, MEC.hip && proc === 'pneumotorax')}
        ${dz && !dz.done ? '' : `<div class="callout tip"><div class="callout-t">${P.n}${P.bi ? ' (bilateral)' : ' · lado ' + (lado === 'D' ? 'direito' : 'esquerdo')}</div>${P.chave}</div>`}
        ${proc === 'pneumotorax' && MEC.hip && !dz ? '<p class="small"><b>Hipertensivo:</b> a traqueia e o mediastino vão para o lado oposto, com turgência jugular e hipotensão. É emergência.</p>' : ''}
      </div>
      <div>${dz ? (() => { const fake = {}; PROW.forEach(r => fake[r[0]] = P.v[r[0]]); return PROW.map(r => `<div class="frow"><div class="frow-h">${r[1]}</div><div class="frow-v">${r[2][P.v[r[0]][0]]}${!P.bi && r[0] !== 'traq' ? ' <span class="small muted">(' + (lado === 'D' ? 'à direita' : 'à esquerda') + ')</span>' : ''}</div>${dz.done ? `<div class="frow-why">${P.v[r[0]][1]}</div>` : ''}</div>`).join(''); })()
        + `<div class="qgroup-h" style="margin-top:12px">Qual é o processo?</div>${dz.opts.map(k => { let c = ''; if (dz.done) { if (k === proc) c = 'right'; else if (k === dz.ans) c = 'wrong'; } return `<button class="opt ${c}" type="button" data-dz="${k}" ${dz.done ? 'disabled' : ''}>${PROC[k].n}</button>`; }).join('')}
        ${dz.done ? `<div class="row"><button class="btn primary" type="button" data-novo>Outro desafio</button><button class="btn" type="button" data-sair>Sair do desafio</button></div>` : ''}`
        : rowsHTML(PROW, P.v, prefix) + scoreLine(PROW, P.v, prefix)}</div>
    </div>`;
  } else if (MEC.tab === 'coracao') {
    const dz = MEC.desafio && MEC.desafio.t === 'coracao' ? MEC.desafio : null;
    const vk = dz ? dz.valv : MEC.valv, les = dz ? dz.les : MEC.les, R = heartDerive(vk, les);
    const prefix = 'h-' + vk + '-' + les + '-';
    const name = (les === 'estenose' ? 'Estenose ' : 'Insuficiência ') + VALV[vk].n.toLowerCase();
    body = `
    ${dz ? `<div class="callout warn"><div class="callout-t">Desafio</div>Leia a ausculta e os achados. Qual é a valvopatia?</div>` : `
    <div class="row" style="margin-bottom:14px">
      <div><div class="qgroup-h">Valva</div><div class="seg">${Object.keys(VALV).map(k => `<button class="chip" type="button" data-valv="${k}" aria-pressed="${MEC.valv === k}">${VALV[k].n}</button>`).join('')}</div></div>
      <div><div class="qgroup-h">Lesão</div><div class="seg"><button class="chip" type="button" data-les="estenose" aria-pressed="${MEC.les === 'estenose'}">Estenose (não abre)</button><button class="chip" type="button" data-les="insuficiencia" aria-pressed="${MEC.les === 'insuficiencia'}">Insuficiência (não fecha)</button></div></div>
    </div>`}
    <div class="lab-grid">
      <div>${dz && !dz.done ? '<div class="empty" style="min-height:260px;display:grid;place-items:center">?</div>' : heartSVG(vk, les)}
        <div class="row" style="margin-top:8px"><button class="btn small" type="button" data-hplay="${R.snd}">${A().player && A().player.id ? 'Parar som' : 'Ouvir padrão'}</button><span class="small muted">${VALV[vk].dir ? 'Som igual ao do lado esquerdo; o que muda é o foco e a inspiração.' : ''}</span></div>
        ${dz && !dz.done ? '' : `<div class="callout tip"><div class="callout-t">${name}</div>${R.extra}</div>`}
      </div>
      <div>${dz ? HROW.map(r => `<div class="frow"><div class="frow-h">${r[1]}</div><div class="frow-v">${r[2][R[r[0]][0]]}</div>${dz.done ? `<div class="frow-why">${R[r[0]][1]}</div>` : ''}</div>`).join('')
        + `<div class="qgroup-h" style="margin-top:12px">Qual valvopatia?</div><div class="seg">${dz.opts.map(o => { const [ov, ol] = o.split('|'); let c = ''; if (dz.done) { if (ov === vk && ol === les) c = ' right'; else if (o === dz.ans) c = ' wrong'; } return `<button class="opt${c}" type="button" data-dzh="${o}" ${dz.done ? 'disabled' : ''} style="width:auto">${(ol === 'estenose' ? 'Estenose ' : 'Insuficiência ') + VALV[ov].n.toLowerCase()}</button>`; }).join('')}</div>
        ${dz.done ? `<div class="row"><button class="btn primary" type="button" data-novo>Outro desafio</button><button class="btn" type="button" data-sair>Sair do desafio</button></div>` : ''}`
        : rowsHTML(HROW, R, prefix) + scoreLine(HROW, R, prefix)}</div>
    </div>`;
  } else {
    const E = EDEMAS[MEC.edema]; const prefix = 'e-' + MEC.edema + '-';
    body = `<div style="margin-bottom:14px"><div class="qgroup-h">Causa</div><div class="seg">${Object.keys(EDEMAS).map(k => `<button class="chip" type="button" data-ed="${k}" aria-pressed="${MEC.edema === k}">${EDEMAS[k].n}</button>`).join('')}</div></div>
    <div class="lab-grid"><div>${edemaSVG(E.f)}<div class="callout tip"><div class="callout-t">${E.n}</div>${E.ex}</div>
      <p class="small muted">Equilíbrio de Starling: a pressão hidrostática empurra líquido para fora do capilar; a oncótica (albumina) segura dentro; a parede controla o vazamento; a linfa recolhe o excesso. O edema surge quando uma dessas forças falha.</p></div>
      <div>${rowsHTML(EROW, E.v, prefix) + scoreLine(EROW, E.v, prefix)}</div></div>`;
  }
  v.innerHTML = `<div class="page-head"><div class="eyebrow">Aprender fazendo</div><h1>Laboratório de mecanismos</h1><p>Mude a causa e veja os achados mudarem, cada um com o porquê. Ligue "Prever antes de ver" para responder cada achado antes de ele aparecer, ou entre no desafio reverso.</p></div>
  <div class="tabs" role="tablist">${tabs.map(t => `<button class="tab" role="tab" type="button" data-mt="${t[0]}" aria-selected="${MEC.tab === t[0]}">${t[1]}</button>`).join('')}</div>
  <div class="row" style="margin-bottom:12px;justify-content:space-between">
    <label class="row small" style="gap:6px;font-weight:600"><input type="checkbox" id="prever" ${MEC.prever ? 'checked' : ''} style="width:18px;height:18px;accent-color:var(--teal)">Prever antes de ver</label>
    ${MEC.tab !== 'edema' && !MEC.desafio ? '<button class="btn small" type="button" data-novo>Desafio reverso</button>' : ''}
    ${MEC.prever ? '<button class="btn small ghost" type="button" data-limpa>Limpar previsões</button>' : ''}
  </div>
  <div class="panel">${body}</div>`;
}
function novoDesafio() {
  if (MEC.tab === 'pulmao') {
    const ks = Object.keys(PROC); const proc = ks[Math.floor(Math.random() * ks.length)];
    const others = shuffle(ks.filter(k => k !== proc)).slice(0, 3);
    MEC.desafio = { t: 'pulmao', proc, lado: Math.random() < 0.5 ? 'D' : 'E', opts: shuffle(others.concat(proc)), done: false };
  } else {
    const all = []; Object.keys(VALV).forEach(vv => ['estenose', 'insuficiencia'].forEach(l => all.push(vv + '|' + l)));
    const pick = all[Math.floor(Math.random() * all.length)]; const [valv, les] = pick.split('|');
    MEC.desafio = { t: 'coracao', valv, les, opts: shuffle(shuffle(all.filter(x => x !== pick)).slice(0, 3).concat(pick)), done: false };
  }
}
function mecView(v) {
  viewMecanismos(v);
  v.onclick = e => {
    const g = s => e.target.closest(s); const re = () => { const y = window.scrollY; viewMecanismos(v); window.scrollTo(0, y); };
    if (g('[data-mt]')) { MEC.tab = g('[data-mt]').dataset.mt; MEC.desafio = null; A().stopSound(); return re(); }
    if (g('[data-proc]')) { MEC.proc = g('[data-proc]').dataset.proc; return re(); }
    if (g('[data-lado]')) { MEC.lado = g('[data-lado]').dataset.lado; return re(); }
    if (g('[data-valv]')) { MEC.valv = g('[data-valv]').dataset.valv; A().stopSound(); return re(); }
    if (g('[data-les]')) { MEC.les = g('[data-les]').dataset.les; A().stopSound(); return re(); }
    if (g('[data-ed]')) { MEC.edema = g('[data-ed]').dataset.ed; return re(); }
    if (g('[data-pr]')) { const [k, i] = g('[data-pr]').dataset.pr.split(':'); MEC.resp[k] = +i; return re(); }
    if (g('[data-limpa]')) { MEC.resp = {}; return re(); }
    if (g('[data-novo]')) { novoDesafio(); return re(); }
    if (g('[data-sair]')) { MEC.desafio = null; return re(); }
    if (g('[data-dz]') && MEC.desafio && !MEC.desafio.done) { MEC.desafio.ans = g('[data-dz]').dataset.dz; MEC.desafio.done = true; return re(); }
    if (g('[data-dzh]') && MEC.desafio && !MEC.desafio.done) { MEC.desafio.ans = g('[data-dzh]').dataset.dzh; MEC.desafio.done = true; return re(); }
    if (g('[data-hplay]')) { const api = A(); if (api.player.id) api.stopSound(); else { const s = api.SONS.find(x => x.id === g('[data-hplay]').dataset.hplay); api.playSound(s); } return re(); }
  };
  v.onchange = e => {
    if (e.target.id === 'prever') { MEC.prever = e.target.checked; const y = window.scrollY; viewMecanismos(v); window.scrollTo(0, y); }
    if (e.target.id === 'hip') { MEC.hip = e.target.checked; viewMecanismos(v); }
  };
  A().onLeave(() => { v.onclick = null; v.onchange = null; A().stopSound(); });
}

/* ---------- registro ---------- */
window.SEMIO_VIEWS = [
  { id: 'trilhas', render: (v, h) => { if (h === 'trilhas') viewTrilhas(v); else viewTrilha(v, h.slice(8)); } },
  { id: 'mecanismos', render: v => mecView(v) }
];
window.SEMIO_HOME = function () {
  const S = A().S; S.trilhas = S.trilhas || {};
  return `<h2 style="margin:28px 0 6px">Aprender fazendo</h2><p class="muted" style="margin:0 0 12px">Construa o raciocínio passo a passo. Comece por aqui se quer entender, e não só decorar.</p>
  <div class="grid-3">${TRILHAS.slice(0, 5).map(t => { const p = S.trilhas[t.id]; return `<a class="case-card" href="#trilhas-${t.id}"><span class="lvl" style="color:${t.cor}">Trilha · ${t.area}</span><h3>${t.titulo}</h3><span class="muted small">${t.resumo}</span>${p ? `<span class="tag" style="background:var(--ok-soft);color:var(--ok);align-self:flex-start">melhor ${p.best}%</span>` : ''}</a>`; }).join('')}
  <a class="case-card" href="#mecanismos" style="border-color:var(--teal)"><span class="lvl">Laboratório</span><h3>Mecanismos</h3><span class="muted small">Mude o que há no tórax, a valva doente ou a força de Starling e veja os achados mudarem, com o porquê.</span></a></div>
  <div class="row" style="margin-top:10px"><a class="btn small" href="#trilhas">Ver as ${TRILHAS.length} trilhas</a></div>`;
};
window.SEMIO_TRILHAS = TRILHAS;
})();

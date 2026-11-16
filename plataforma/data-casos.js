/* Simulador OSCE: perguntas de anamnese, manobras de exame e casos clínicos.
   Casos 1–4 vêm da aula "Semiologia: revisão por casos clínicos"; os demais foram montados
   com os achados descritos nos materiais de cada sistema. */

var PERGUNTAS = [
  { g: 'Abertura', k: 'ident', l: 'Identificação (nome, idade, profissão, procedência)' },
  { g: 'Abertura', k: 'qd', l: 'O que trouxe o(a) senhor(a) aqui? (queixa e duração)' },
  { g: 'HDA', k: 'inicio', l: 'Quando e como começou?' },
  { g: 'HDA', k: 'carac', l: 'Como é o sintoma? (local, tipo, intensidade, irradiação)' },
  { g: 'HDA', k: 'fatores', l: 'O que melhora? O que piora?' },
  { g: 'HDA', k: 'evol', l: 'Como evoluiu até hoje?' },
  { g: 'HDA', k: 'assoc', l: 'Sentiu mais alguma coisa junto?' },
  { g: 'IDA', k: 'ida_geral', l: 'Geral: febre, calafrios, peso, astenia, sudorese' },
  { g: 'IDA', k: 'ida_resp', l: 'Respiratório: tosse, escarro, hemoptise, dispneia, chiado' },
  { g: 'IDA', k: 'ida_cv', l: 'Cardiovascular: dor no peito, palpitações, ortopneia, DPN, síncope, edema' },
  { g: 'IDA', k: 'ida_gi', l: 'Digestório: apetite, náuseas, vômitos, hábito intestinal, sangramentos' },
  { g: 'IDA', k: 'ida_gu', l: 'Urinário: diurese, disúria, cor e aspecto da urina' },
  { g: 'IDA', k: 'ida_outros', l: 'Pele, neurológico, locomotor' },
  { g: 'Antecedentes', k: 'ap', l: 'Doenças prévias, cirurgias, internações' },
  { g: 'Antecedentes', k: 'meds', l: 'Medicações em uso e alergias' },
  { g: 'Antecedentes', k: 'af', l: 'Doenças na família' },
  { g: 'Hábitos', k: 'tab', l: 'Tabagismo (tipo, quantidade, tempo)' },
  { g: 'Hábitos', k: 'etil', l: 'Bebida alcoólica e outras drogas' },
  { g: 'Hábitos', k: 'vida', l: 'Alimentação, atividade física, moradia, trabalho' }
];
var PERGUNTA_PADRAO = 'Nega. Nada digno de nota.';

var MANOBRAS = [
  { g: 'Geral', k: 'g_estado', l: 'Estado geral e nível de consciência', n: 'BEG, consciente, orientado no tempo e espaço, contactuante. Glasgow 15.' },
  { g: 'Geral', k: 'g_sinais', l: 'Sinais vitais (PA, FC, FR, Tax, SpO₂)', n: 'PA 120 × 80 mmHg, FC 76 bpm, FR 16 irpm, Tax 36,5 °C, SpO₂ 98% em ar ambiente.' },
  { g: 'Geral', k: 'g_facies', l: 'Fácies e atitude', n: 'Fácies atípica. Atitude ativa, decúbito livre.' },
  { g: 'Geral', k: 'g_mucosas', l: 'Mucosas: coloração e hidratação', n: 'Mucosas normocoradas e úmidas.' },
  { g: 'Geral', k: 'g_pele', l: 'Pele: cianose, icterícia, lesões', n: 'Acianótico, anictérico. Pele íntegra, sem lesões.' },
  { g: 'Geral', k: 'g_tec', l: 'Perfusão periférica e TEC', n: 'Extremidades aquecidas, TEC < 2 s, turgor preservado.' },
  { g: 'Geral', k: 'g_linfo', l: 'Palpação de linfonodos', n: 'Sem linfonodomegalias palpáveis em cadeias cervicais, supraclaviculares, axilares e inguinais.' },
  { g: 'Geral', k: 'g_edema', l: 'Edema (MMII, face, sacro)', n: 'Sem edemas; cacifo negativo.' },
  { g: 'Geral', k: 'g_maos', l: 'Mãos e unhas (baqueteamento, flapping)', n: 'Unhas sem alterações, sem baqueteamento digital. Sem flapping.' },
  { g: 'Geral', k: 'g_antropo', l: 'Peso, altura e IMC', n: 'IMC 23 kg/m², normolíneo.' },
  { g: 'Respiratório', k: 'r_insp_est', l: 'Inspeção estática do tórax', n: 'Tórax atípico, simétrico, sem abaulamentos, retrações ou cicatrizes.' },
  { g: 'Respiratório', k: 'r_insp_din', l: 'Inspeção dinâmica (FR, padrão, ritmo, musculatura acessória)', n: 'Eupneico, FR 16 irpm, ritmo regular, padrão toracoabdominal, sem musculatura acessória ou tiragem.' },
  { g: 'Respiratório', k: 'r_expans', l: 'Expansibilidade (ápices e bases)', n: 'Expansibilidade preservada e simétrica.' },
  { g: 'Respiratório', k: 'r_ftv', l: 'Frêmito toracovocal ("33")', n: 'FTV presente e simétrico.' },
  { g: 'Respiratório', k: 'r_perc', l: 'Percussão do tórax', n: 'Som claro pulmonar bilateralmente.' },
  { g: 'Respiratório', k: 'r_ausc', l: 'Ausculta pulmonar', n: 'MV presente e simétrico, sem ruídos adventícios.' },
  { g: 'Respiratório', k: 'r_voz', l: 'Ressonância vocal', n: 'Ressonância vocal normal e simétrica.' },
  { g: 'Cardiovascular', k: 'c_jug', l: 'Jugulares a 45° e refluxo hepatojugular', n: 'Sem turgência jugular patológica a 45°. Refluxo hepatojugular negativo.' },
  { g: 'Cardiovascular', k: 'c_ictus', l: 'Ictus cordis (inspeção e palpação)', n: 'Ictus palpável no 5º EIC esquerdo na LHC, 1–2 polpas, não propulsivo.' },
  { g: 'Cardiovascular', k: 'c_pulsos', l: 'Pulsos arteriais (radial, carotídeo, femoral, pedioso)', n: 'Pulsos palpáveis, simétricos, amplitude normal, ritmo regular.' },
  { g: 'Cardiovascular', k: 'c_ausc', l: 'Ausculta dos 5 focos', n: 'Ritmo regular em 2 tempos, bulhas normofonéticas, sem sopros.' },
  { g: 'Cardiovascular', k: 'c_manobras', l: 'Manobras (DLE, sentado inclinado, inspiração, handgrip)', n: 'Sem fenômenos adicionais às manobras.' },
  { g: 'Abdome', k: 'a_insp', l: 'Inspeção do abdome', n: 'Plano, simétrico, sem cicatrizes, circulação colateral, abaulamentos ou peristaltismo visível.' },
  { g: 'Abdome', k: 'a_ausc', l: 'Ausculta (RHA e sopros)', n: 'RHA presentes e normoativos. Sem sopros vasculares.' },
  { g: 'Abdome', k: 'a_perc', l: 'Percussão do abdome', n: 'Timpânico, com macicez apenas na projeção hepática. Traube livre.' },
  { g: 'Abdome', k: 'a_palp_sup', l: 'Palpação superficial', n: 'Flácido, indolor, sem defesa, sem hérnias.' },
  { g: 'Abdome', k: 'a_palp_prof', l: 'Palpação profunda', n: 'Indolor, sem massas ou visceromegalias.' },
  { g: 'Abdome', k: 'a_figado', l: 'Fígado: hepatimetria e palpação', n: 'Hepatimetria 10 cm na LHC direita; borda fina, lisa, indolor no RCD.' },
  { g: 'Abdome', k: 'a_baco', l: 'Baço: Traube, Castell, palpação (Schuster)', n: 'Traube livre, Castell negativo, baço não palpável.' },
  { g: 'Abdome', k: 'a_ascite', l: 'Ascite: macicez móvel, Skoda, piparote', n: 'Macicez móvel ausente, Skoda e piparote negativos.' },
  { g: 'Abdome', k: 'a_murphy', l: 'Sinal de Murphy', n: 'Murphy negativo.' },
  { g: 'Abdome', k: 'a_blumberg', l: 'Sinal de Blumberg (descompressão brusca)', n: 'Blumberg negativo.' },
  { g: 'Abdome', k: 'a_apendice', l: 'Rovsing, Psoas, Obturador', n: 'Negativos.' },
  { g: 'Abdome', k: 'a_giordano', l: 'Punho-percussão lombar (Giordano)', n: 'Giordano negativo bilateralmente.' }
];

var COMUNICACAO = [
  'Higienizei as mãos antes e depois',
  'Apresentei-me (nome e função) e confirmei o nome do paciente',
  'Expliquei o que ia fazer e pedi consentimento',
  'Garanti privacidade e exposição adequada (respeitando o pudor)',
  'Comecei com pergunta aberta e deixei o paciente falar',
  'Usei linguagem leiga, sem jargão com o paciente',
  'Verbalizei cada manobra ao examinador',
  'Descrevi os achados em termos técnicos e organizados',
  'Resumi o caso e formulei hipótese sindrômica/diagnóstica',
  'Encerrei: agradeci, orientei e cobri o paciente'
];

var CASOS = [
/* ---------- 1 */
{
  id: 'erisipela-ic', titulo: 'Febre e inchaço nas pernas', fonte: 'Aula de revisão – Caso 1', area: ['geral', 'resp', 'cardio', 'abdome'], nivel: 3,
  porta: 'J.A.S., 68 anos, masculino, aposentado, procura o pronto-atendimento com febre e inchaço nas pernas. Você tem 10 minutos: faça a anamnese dirigida, examine o que julgar necessário e apresente sua hipótese.',
  anamnese: {
    ident: 'José, 68 anos, aposentado, casado.',
    qd: '"Febre e inchaço nas pernas" há 4 dias.',
    inicio: 'Há 4 dias, 2 a 3 picos de febre por dia (38–38,5 °C) com calafrios. No mesmo dia a perna direita inchou, ficou vermelha, quente e doendo.',
    carac: 'Perna direita: vermelhidão bem delimitada, quente, dolorosa. Há 1 dia a esquerda também incha, mas é fria e não dói.',
    fatores: 'Piora deitado por causa da falta de ar; uso 3 travesseiros.',
    evol: 'Há 2 dias falta de ar aos pequenos esforços, precisa dormir sentado e acorda à noite sufocado. Tosse seca à noite.',
    assoc: 'Nega dor no peito típica.',
    ida_geral: 'Inapetência. Nega perda de peso.',
    ida_resp: 'Tosse seca noturna. Dispneia aos pequenos esforços.',
    ida_cv: 'Ortopneia e dispneia paroxística noturna. Nega dor torácica típica e palpitações.',
    ida_gi: 'Empachamento após as refeições. Nega icterícia.',
    ida_gu: 'Nictúria. Nega disúria.',
    ida_outros: 'Rachadura com coceira entre os dedos do pé direito há meses.',
    ap: 'Hipertensão há 20 anos (uso irregular do remédio). Infarto há 6 anos. Diabetes tipo 2. Frieira recorrente no pé direito.',
    meds: 'Losartana "quando lembra". Metformina. Nega alergias.',
    af: 'Pai faleceu de infarto aos 62 anos. Mãe hipertensa.',
    tab: 'Ex-tabagista, 40 maços-ano; parou há 6 anos.',
    etil: 'Etilismo social.',
    vida: 'Dieta rica em sal, sedentário.'
  },
  exame: {
    g_estado: 'REG, consciente e orientado no tempo e no espaço.',
    g_sinais: 'Tax 38,8 °C, FC 118 bpm, FR 24 irpm, PA 150 × 90 mmHg.',
    g_facies: 'Fácies atípica. <b>Atitude ortopneica.</b>',
    g_mucosas: 'Mucosas coradas, <b>desidratadas +2/+4</b>.',
    g_pele: 'Acianótico, anictérico. <b>Fissura interdigital com maceração no pé direito</b> (intertrigo). Turgor diminuído.',
    g_tec: 'TEC 2 s.',
    g_linfo: '<b>Linfonodo inguinal direito</b> palpável, único, 1 × 1,5 cm, fibroelástico, móvel, <b>doloroso</b>, sem calor ou rubor.',
    g_edema: '<b>MID</b>: cacifo +3/+4, discretamente endurecido, <b>doloroso, quente, eritema bem delimitado</b> na face anterior da perna. <b>MIE</b>: +2/+4, mole, indolor, sem calor ou rubor.',
    r_insp_din: 'Taquipneico, FR 24 irpm.',
    r_ftv: '<b>FTV abolido no 1/3 inferior do hemitórax direito.</b>',
    r_perc: '<b>Macicez no 1/3 inferior do hemitórax direito.</b>',
    r_ausc: '<b>Estertores finos nas bases.</b> MV abolido no 1/3 inferior direito.',
    r_voz: 'Ressonância vocal abolida no 1/3 inferior direito.',
    r_expans: 'Expansibilidade reduzida na base direita.',
    c_jug: '<b>Turgência jugular a 45°</b>, refluxo hepatojugular <b>presente</b>.',
    c_ictus: '<b>Ictus desviado para a esquerda e para baixo</b> (6º EIC, linha axilar anterior), difuso.',
    c_ausc: 'Ritmo regular, <b>B3</b> (galope), FC 118 bpm, <b>sopro sistólico +3/+6 no foco mitral</b>.',
    c_manobras: 'Sopro mitral aumenta com handgrip; não varia com inspiração.',
    a_insp: 'Semigloboso, sem circulação colateral.',
    a_figado: '<b>Fígado palpável a 4 cm do RCD</b>, doloroso, borda romba, superfície lisa. Macicez até 4 cm do RCD.',
    a_perc: 'Timpânico, exceto macicez até 4 cm abaixo do RCD.'
  },
  keyQ: ['qd', 'inicio', 'carac', 'evol', 'ida_cv', 'ida_outros', 'ap', 'meds', 'tab'],
  keyEx: ['g_sinais', 'g_edema', 'g_pele', 'g_linfo', 'r_ftv', 'r_perc', 'r_ausc', 'c_jug', 'c_ictus', 'c_ausc', 'a_figado'],
  pergunta: 'Qual a melhor síntese do caso?',
  opcoes: [
    'Erisipela/celulite em MID (porta de entrada: intertrigo) descompensando insuficiência cardíaca congestiva, com derrame pleural direito',
    'Trombose venosa profunda bilateral com tromboembolismo pulmonar',
    'Síndrome nefrótica com anasarca',
    'Pneumonia lobar direita com sepse, sem cardiopatia'
  ],
  correta: 0,
  discussao: '<p><b>Fisiopatologia: infecção, demanda e congestão.</b> A fissura interdigital (intertrigo) foi a <b>porta de entrada</b> para uma infecção de pele (edema quente, doloroso, eritema bem delimitado = erisipela/celulite) com linfadenite inguinal reacional. Febre e taquicardia aumentam a demanda de um coração já doente (HAS mal controlada + IAM prévio → VE dilatado: ictus desviado e difuso, B3, sopro de IM funcional).</p><p>Resultado: <b>IC congestiva descompensada</b>. Esquerda: dispneia, ortopneia, DPN, tosse noturna, estertores finos (congestão). Direita: turgência jugular, refluxo hepatojugular, hepatomegalia dolorosa (congestão da cápsula de Glisson), edema mole e frio no MIE, nictúria. O derrame pleural direito (macicez + FTV abolido + MV abolido) é transudato da IC.</p><p><b>Atenção</b>: o edema do MID é misto (inflamatório + cardíaco); o do MIE é cardíaco puro. Saber descrever as diferenças é o ponto da estação.</p>'
},
/* ---------- 2 */
{
  id: 'nefrotica', titulo: 'Inchaço no rosto e nas pernas', fonte: 'Aula de revisão – Caso 2', area: ['geral', 'resp', 'abdome'], nivel: 2,
  porta: 'M.L.R., 24 anos, feminino, estudante, parda, procura atendimento por inchaço. Faça a anamnese, o exame físico pertinente e formule a hipótese sindrômica.',
  anamnese: {
    ident: 'Mariana, 24 anos, estudante universitária, parda, solteira.',
    qd: '"Inchaço no rosto e nas pernas" há 2 semanas.',
    inicio: 'Há 2 semanas começou a inchar as pernas, a região genital e em volta dos olhos, cada vez mais.',
    carac: 'O inchaço é frio, não dói, sem vermelhidão. Em volta dos olhos é pior de manhã.',
    fatores: 'Piora ao longo do dia e não melhora ao elevar as pernas.',
    evol: 'Ganhou 6 kg nesse período. Notou urina com muita espuma e em menor quantidade.',
    assoc: 'Cansaço e barriga inchada, sem dor, há 5 dias.',
    ida_geral: 'Ganho de 6 kg em 2 semanas. Fadiga. Nega febre.',
    ida_resp: 'Nega dispneia, ortopneia e tosse.',
    ida_cv: 'Nega dor torácica, palpitações, vertigem, síncope.',
    ida_gi: 'Distensão abdominal indolor há 5 dias.',
    ida_gu: '<b>Urina espumosa</b>, diurese diminuída. Nega disúria, polaciúria, nictúria e hematúria.',
    ida_outros: 'Nega artralgias e lesões de pele.',
    ap: 'Sem comorbidades. Nega diabetes e hipertensão.',
    meds: 'Tomou <b>anti-inflamatório</b> recentemente por dor de garganta. Nega alergias.',
    af: 'Sem doença renal na família. Tia com lúpus.',
    tab: 'Nega.', etil: 'Nega.', vida: 'Dieta habitual, atividade física regular.'
  },
  exame: {
    g_estado: 'REG, consciente, orientada.',
    g_sinais: '<b>PA 150 × 90 mmHg</b>, FC 98 bpm, FR 18 irpm, afebril.',
    g_facies: '<b>Fácies renal</b> (edema periorbitário, palidez). Atitude ativa.',
    g_mucosas: '<b>Hipocorada +1/+4</b>, hidratada.',
    g_edema: '<b>Edema periorbitário bilateral</b>, simétrico, indolor. <b>MMII +3/+4</b> com cacifo, mole, indolor, sem calor ou rubor. Edema genital.',
    r_perc: '<b>Macicez nas bases</b> bilateralmente.',
    r_ausc: '<b>MV diminuído nas bases</b>.',
    r_ftv: 'FTV diminuído nas bases.',
    a_insp: '<b>Globoso</b>.',
    a_ascite: '<b>Macicez móvel presente e semicírculo de Skoda</b>. Piparote negativo.',
    a_perc: 'Timpanismo central com macicez nos flancos.'
  },
  keyQ: ['qd', 'carac', 'fatores', 'evol', 'ida_gu', 'ida_resp', 'meds', 'af'],
  keyEx: ['g_sinais', 'g_facies', 'g_edema', 'r_perc', 'r_ausc', 'a_ascite', 'c_jug'],
  pergunta: 'Qual a síndrome e o mecanismo central do edema?',
  opcoes: [
    'Síndrome nefrótica: proteinúria → hipoalbuminemia → edema oncótico (com retenção renal de sódio)',
    'Insuficiência cardíaca direita: edema hidrostático por congestão venosa',
    'Cirrose hepática: hipertensão portal',
    'Angioedema alérgico ao anti-inflamatório'
  ],
  correta: 0,
  discussao: '<p><b>Proteinúria e edema generalizado.</b> Urina espumosa = proteinúria maciça → hipoalbuminemia → queda da pressão oncótica → <b>edema oncótico</b> difuso: periorbitário (pior de manhã, típico renal), MMII, genital, derrames cavitários (ascite e derrame pleural bilateral: macicez e MV ↓ nas bases) = <b>anasarca</b>. A retenção renal de sódio também participa.</p><p>Pistas contra causa cardíaca: <b>sem turgência jugular</b>, sem dispneia, ortopneia ou B3. O edema não melhora com elevação (não é gravitacional). Uso de AINE e tia com lúpus são pistas etiológicas a investigar.</p>'
},
/* ---------- 3 */
{
  id: 'tuberculose', titulo: 'Caroços no pescoço, febre e emagrecimento', fonte: 'Aula de revisão – Caso 3', area: ['geral', 'resp'], nivel: 3,
  porta: 'C.B.P., 32 anos, masculino, pedreiro, natural de Januária (MG), mora em Ribeirão Preto há 5 meses. Queixa de caroços no pescoço. Conduza a estação.',
  anamnese: {
    ident: 'Carlos, 32 anos, pedreiro, natural de Januária-MG, em RP há 5 meses pelo trabalho.',
    qd: '"Caroços no pescoço, febre e emagrecimento" há 2 meses.',
    inicio: 'Há 6 semanas o pescoço começou a aumentar dos dois lados, devagar.',
    carac: 'No começo os caroços eram duros, mexiam e não doíam; há 1 semana "grudaram uns nos outros".',
    fatores: 'Nada melhora.',
    evol: 'Febre todo dia no fim da tarde, suor à noite que molha o lençol, perdeu 9 kg.',
    assoc: 'Há 4 semanas falta de ar aos grandes esforços e tosse com catarro e raias de sangue. Dor do lado direito do peito que piora ao respirar fundo.',
    ida_geral: '<b>Febre vespertina diária, sudorese noturna, perda de 9 kg</b>, astenia, anorexia.',
    ida_resp: 'Tosse produtiva com <b>hemoptoicos</b>; dispneia aos grandes esforços; <b>dor torácica ventilatório-dependente à direita</b>. Nega ortopneia, DPN e platipneia.',
    ida_cv: 'Nega.', ida_gi: 'Nega diarreia.', ida_gu: 'Nega sintomas urinários.',
    ap: 'Sem comorbidades conhecidas.',
    meds: 'Nenhuma.',
    af: 'Pais hipertensos e diabéticos. Nega câncer na família.',
    tab: 'Tabagista, 10 maços-ano.',
    etil: '4 latas de cerveja e 1 dose de cachaça por dia.',
    vida: '<b>Mora com 8 colegas em casa pequena e pouco ventilada.</b>'
  },
  exame: {
    g_estado: 'REG, <b>emagrecido</b>, consciente, orientado.',
    g_sinais: '<b>Tax 38,2 °C</b>, FC 109 bpm, PA 130 × 80 mmHg, FR 20 irpm.',
    g_mucosas: '<b>Hipocorado +3/+4</b>, desidratado +1/+4.',
    g_linfo: '<b>Cervicais anteriores e supraclaviculares</b> de 2–3 cm, <b>coalescentes</b>, pouco móveis, endurecidos, indolores, sem calor ou rubor.',
    g_antropo: 'Emagrecido, perda de 9 kg.',
    r_ftv: '<b>FTV aumentado no ápice direito.</b>',
    r_perc: 'Submacicez no ápice direito.',
    r_ausc: 'MV presente e simétrico, <b>estertores grossos e sopro anfórico no ápice direito</b>.',
    r_voz: '<b>Broncofonia no ápice direito.</b>',
    c_ausc: 'RCR em 2 tempos, BNF, sem sopros. FC 109 bpm.'
  },
  keyQ: ['qd', 'carac', 'evol', 'ida_geral', 'ida_resp', 'tab', 'etil', 'vida'],
  keyEx: ['g_sinais', 'g_linfo', 'g_mucosas', 'r_ftv', 'r_perc', 'r_ausc', 'r_voz'],
  pergunta: 'Hipótese principal?',
  opcoes: [
    'Tuberculose pulmonar cavitária (ápice direito) com tuberculose ganglionar',
    'Pneumotórax espontâneo à direita',
    'Derrame pleural parapneumônico à direita',
    'Crise asmática'
  ],
  correta: 0,
  discussao: '<p>Síndrome consumptiva (febre vespertina, sudorese noturna, emagrecimento) + tosse com hemoptoicos + <b>linfonodos coalescentes</b> (conglomerados sugerem TB e linfoma) em contexto de <b>aglomeração</b>, tabagismo e etilismo.</p><p>No ápice direito: FTV ↑ e broncofonia (parênquima condensado em volta da lesão) + estertores grossos + <b>sopro anfórico</b> (ruído de baixa frequência e ressonância metálica, como soprar garrafa vazia) = <b>grande cavitação</b>. Diagnóstico diferencial importante: linfoma (linfonodos + sintomas B).</p>'
},
/* ---------- 4 */
{
  id: 'cirrose', titulo: 'Barriga inchada e agitação', fonte: 'Aula de revisão – Caso 4', area: ['geral', 'abdome', 'resp'], nivel: 3,
  porta: 'R.M.T., 56 anos, motorista de caminhão, casado, trazido pela esposa (informante). Realize a avaliação e apresente as síndromes.',
  anamnese: {
    ident: 'Roberto, 56 anos, caminhoneiro, casado. <b>Informante: esposa</b> (paciente confuso).',
    qd: '"Barriga inchada e agitação" há 2 meses.',
    inicio: 'Há 2 meses a barriga foi crescendo aos poucos e as pernas incharam.',
    carac: 'Inchaço das pernas dos dois lados, sem dor, sem calor, sem vermelhidão.',
    fatores: '—',
    evol: 'Há 3 semanas olhos amarelos. Há 2 dias vomitou sangue em pequena quantidade e hoje evacuou fezes pretas. Desde então troca o dia pela noite.',
    assoc: 'Falta de ar aos grandes esforços.',
    ida_geral: 'Hiporexia, perda de massa muscular.',
    ida_resp: 'Nega tosse. Dispneia aos grandes esforços; nega ortopneia, DPN e platipneia.',
    ida_cv: 'Nega.',
    ida_gi: '<b>Hematêmese</b> de pequeno volume há 2 dias e <b>melena</b> hoje. Icterícia há 3 semanas.',
    ida_gu: 'Volume urinário habitual; nega urina espumosa, colúria, disúria.',
    ida_outros: '<b>Alteração do ciclo sono-vigília.</b>',
    ap: '<b>Hepatite C há 15 anos, sem tratamento.</b> Diabetes recente. Sem cirurgias.',
    meds: 'Nenhuma regular.',
    af: 'Pai diabético. Sem hepatopatia familiar.',
    tab: 'Tabagista, 20 maços-ano.',
    etil: 'Nega etilismo e drogas.',
    vida: 'Dieta rica em carboidratos e gorduras.'
  },
  exame: {
    g_estado: 'REG, <b>contactuante mas confuso</b>.',
    g_sinais: '<b>PA 90 × 55 mmHg, FC 110 bpm</b>, FR 22 irpm, afebril.',
    g_antropo: '<b>IMC 16</b>, consumido.',
    g_mucosas: 'Hipocorado +2/+4.',
    g_pele: '<b>Icterícia +2/+4. Aranhas vasculares</b> no tórax, <b>equimoses</b> em membros.',
    g_maos: '<b>Eritema palmar. Flapping presente</b> (asterixe).',
    g_edema: 'MMII cacifo +2/+4, simétrico, indolor, sem calor ou rubor.',
    r_insp_din: 'FR 22 irpm.',
    r_ftv: '<b>FTV abolido na base direita.</b>',
    r_perc: '<b>Macicez na base direita.</b>',
    r_ausc: '<b>MV diminuído na base direita.</b>',
    a_insp: '<b>Globoso. Circulação colateral tipo porta</b> (periumbilical).',
    a_perc: 'Timpanismo central, macicez em flancos.',
    a_ascite: '<b>Macicez móvel presente, piparote positivo.</b>',
    a_figado: 'Fígado palpável no RCD, <b>superfície nodular, borda romba</b>, indolor.',
    a_baco: '<b>Baço palpável</b>, superfície lisa. Traube maciço.',
    a_murphy: 'Negativo.', a_blumberg: 'Negativo.'
  },
  keyQ: ['ident', 'qd', 'evol', 'ida_gi', 'ida_outros', 'ap', 'etil'],
  keyEx: ['g_estado', 'g_sinais', 'g_pele', 'g_maos', 'a_insp', 'a_ascite', 'a_figado', 'a_baco', 'r_perc'],
  pergunta: 'Quais síndromes estão presentes?',
  opcoes: [
    'Cirrose (HCV) com hipertensão portal (ascite, colaterais, esplenomegalia, HDA), insuficiência hepática (icterícia, aranhas, eritema palmar) e encefalopatia hepática',
    'Insuficiência cardíaca direita com hepatomegalia congestiva',
    'Neoplasia de cabeça de pâncreas com sinal de Courvoisier',
    'Síndrome nefrótica com anasarca'
  ],
  correta: 0,
  discussao: '<p><b>Hipertensão portal</b>: ascite (macicez móvel, piparote = grande volume), circulação colateral tipo porta, esplenomegalia, varizes esofágicas sangrando (hematêmese + melena).</p><p><b>Falência hepática</b>: icterícia, aranhas vasculares, eritema palmar, equimoses (coagulopatia), desnutrição (IMC 16) e <b>encefalopatia</b> (confusão, inversão sono-vigília, flapping), precipitada pela hemorragia digestiva.</p><p>Fígado <b>nodular, borda romba, indolor</b> = cirrose. Derrame pleural à direita = <b>hidrotórax hepático</b>. Hipotensão e taquicardia: sangramento. Note: <b>sem turgência jugular</b> → não é congestão cardíaca.</p>'
},
/* ---------- 5 */
{
  id: 'pneumonia', titulo: 'Tosse, febre e dor ao respirar', area: ['resp', 'geral'], nivel: 1,
  porta: 'A.P.S., 45 anos, feminino, professora, com febre e tosse há 4 dias. Faça anamnese focada e o exame do aparelho respiratório.',
  anamnese: {
    ident: 'Ana, 45 anos, professora, natural e procedente de Ribeirão Preto.',
    qd: '"Febre e tosse com catarro" há 4 dias.',
    inicio: 'Começou de repente com calafrio e febre alta; no dia seguinte veio a tosse.',
    carac: 'Tosse com catarro amarelo-esverdeado, grosso. Dor em pontada embaixo do peito direito.',
    fatores: 'A dor piora quando respira fundo e quando tosse; melhora deitando sobre o lado direito.',
    evol: 'Hoje está mais cansada, com falta de ar aos médios esforços.',
    assoc: 'Calafrios, mal-estar.',
    ida_geral: 'Febre até 39,2 °C, calafrios, astenia.',
    ida_resp: 'Tosse produtiva <b>purulenta</b>; <b>dor ventilatório-dependente</b> à direita; dispneia aos médios esforços. Nega hemoptise.',
    ap: 'Hígida.', meds: 'Dipirona se febre. Nega alergias.', tab: 'Nega.', etil: 'Social.', vida: 'Mora com marido e filhos.'
  },
  exame: {
    g_estado: 'REG, consciente, orientada.',
    g_sinais: '<b>Tax 38,9 °C, FC 108 bpm, FR 26 irpm</b>, PA 110 × 70 mmHg, SpO₂ 92%.',
    g_facies: 'Fácies de dor; <b>decúbito lateral direito</b> (antálgico).',
    r_insp_din: 'Taquipneica, FR 26 irpm, <b>expansibilidade reduzida à direita</b>.',
    r_expans: '<b>Reduzida na base direita.</b>',
    r_ftv: '<b>FTV aumentado na base direita.</b>',
    r_perc: '<b>Macicez/submacicez na base direita.</b>',
    r_ausc: '<b>Estertores finos (crepitantes) e sopro tubário</b> na base direita.',
    r_voz: '<b>Broncofonia e pectorilóquia</b> na base direita.'
  },
  keyQ: ['qd', 'inicio', 'carac', 'fatores', 'ida_geral', 'ida_resp', 'tab'],
  keyEx: ['g_sinais', 'r_insp_din', 'r_expans', 'r_ftv', 'r_perc', 'r_ausc', 'r_voz'],
  pergunta: 'Qual síndrome pleuropulmonar?',
  opcoes: ['Consolidação (pneumonia) na base direita', 'Derrame pleural à direita', 'Pneumotórax à direita', 'Atelectasia à direita'],
  correta: 0,
  discussao: '<p>A combinação <b>macicez + FTV aumentado + sopro tubário + estertores finos + pectorilóquia</b> só cabe na <b>consolidação</b>: alvéolos cheios de exsudato com brônquios pérvios conduzem melhor o som. No derrame o FTV estaria diminuído/abolido.</p><p>A dor ventilatório-dependente com decúbito sobre o lado afetado indica acometimento pleural associado.</p>'
},
/* ---------- 6 */
{
  id: 'pneumotorax', titulo: 'Dor súbita no peito e falta de ar', area: ['resp', 'cardio'], nivel: 1,
  porta: 'L.F.M., 22 anos, masculino, estudante, alto e magro, chega com dor torácica súbita. Avalie.',
  anamnese: {
    ident: 'Lucas, 22 anos, estudante, 1,92 m.',
    qd: '"Dor no peito e falta de ar" há 3 horas.',
    inicio: '<b>De repente</b>, em repouso, assistindo aula.',
    carac: 'Dor em pontada no lado esquerdo do peito, forte (8/10), não irradia.',
    fatores: 'Piora ao respirar fundo.',
    evol: 'A dor melhorou um pouco, mas a falta de ar continua.',
    assoc: 'Tosse seca leve.',
    ida_resp: 'Dispneia súbita aos pequenos esforços. Nega febre e expectoração.',
    ap: 'Hígido. Nega trauma.', meds: 'Nenhuma.', tab: '<b>Fuma 10 cigarros/dia há 4 anos.</b>', etil: 'Social.'
  },
  exame: {
    g_sinais: 'FC 112 bpm, <b>FR 28 irpm</b>, PA 120 × 70 mmHg, afebril, SpO₂ 91%.',
    g_antropo: 'Longilíneo, IMC 19.',
    r_insp_est: 'Discreto <b>abaulamento dos espaços intercostais à esquerda</b>.',
    r_insp_din: 'Taquipneico, <b>expansibilidade reduzida à esquerda</b>.',
    r_expans: '<b>Reduzida no hemitórax esquerdo.</b>',
    r_ftv: '<b>FTV diminuído/abolido no hemitórax esquerdo.</b>',
    r_perc: '<b>Timpânico/hipertimpânico no hemitórax esquerdo.</b>',
    r_ausc: '<b>MV abolido no hemitórax esquerdo.</b>',
    r_voz: 'Ressonância vocal abolida à esquerda.',
    c_jug: 'Sem turgência jugular. Traqueia centrada.'
  },
  keyQ: ['qd', 'inicio', 'carac', 'fatores', 'ap', 'tab'],
  keyEx: ['g_sinais', 'r_insp_din', 'r_expans', 'r_ftv', 'r_perc', 'r_ausc'],
  pergunta: 'Qual a síndrome?',
  opcoes: ['Pneumotórax espontâneo à esquerda', 'Derrame pleural à esquerda', 'Consolidação à esquerda', 'Enfisema pulmonar'],
  correta: 0,
  discussao: '<p>Jovem longilíneo, tabagista, dor pleurítica <b>súbita</b> + <b>timpanismo + FTV e MV abolidos</b> unilateralmente = <b>pneumotórax</b> (ar no espaço pleural afasta o pulmão da parede). O derrame daria <b>macicez</b>.</p>' + '<p>Sinal de alarme: turgência jugular, desvio da traqueia e hipotensão sugeririam <b>pneumotórax hipertensivo</b>.</p>'
},
/* ---------- 7 */
{
  id: 'asma', titulo: 'Chiado e falta de ar', area: ['resp'], nivel: 1,
  porta: 'B.R.C., 19 anos, feminino, com falta de ar e chiado desde a madrugada. Faça a avaliação respiratória.',
  anamnese: {
    ident: 'Beatriz, 19 anos, estudante.',
    qd: '"Chiado no peito e falta de ar" desde a madrugada (6 horas).',
    inicio: 'Começou de madrugada, depois de limpar o quarto empoeirado ontem à noite.',
    carac: 'Chiado e aperto no peito, dificuldade para soltar o ar.',
    fatores: 'Melhorou pouco com "bombinha" (salbutamol); piora com poeira e frio.',
    evol: 'Hoje fala frases curtas.',
    assoc: 'Tosse seca.',
    ida_resp: '<b>Sibilância</b>, tosse seca, dispneia aos pequenos esforços. Crises desde a infância.',
    ap: '<b>Asma desde a infância</b>, rinite alérgica. 1 internação aos 12 anos.',
    meds: 'Salbutamol se necessário (não usa corticoide inalatório regularmente).',
    af: 'Mãe com rinite.', tab: 'Nega.', vida: 'Gato em casa.'
  },
  exame: {
    g_estado: 'REG, ansiosa, fala frases curtas.',
    g_sinais: 'FC 116 bpm, <b>FR 30 irpm</b>, PA 120 × 80 mmHg, SpO₂ 92%.',
    g_facies: 'Atitude: sentada, inclinada para frente, apoiando as mãos.',
    r_insp_din: '<b>Taquipneia, uso de musculatura acessória (ECM), tiragem intercostal</b>, expiração prolongada.',
    r_expans: 'Reduzida bilateral e simetricamente.',
    r_ftv: 'FTV normal a levemente diminuído, simétrico.',
    r_perc: '<b>Hipersonoridade</b> bilateral.',
    r_ausc: 'MV diminuído difusamente, <b>expiração prolongada e sibilos expiratórios difusos</b>.',
    c_pulsos: 'Pulsos simétricos; queda da amplitude na inspiração (pulso paradoxal discreto).'
  },
  keyQ: ['qd', 'inicio', 'fatores', 'ida_resp', 'ap', 'meds', 'vida'],
  keyEx: ['g_sinais', 'r_insp_din', 'r_perc', 'r_ausc'],
  pergunta: 'Qual o quadro?',
  opcoes: ['Crise de asma (síndrome obstrutiva com sibilos expiratórios e hiperinsuflação)', 'Pneumonia com consolidação bilateral', 'Edema agudo de pulmão', 'Obstrução alta de via aérea com estridor'],
  correta: 0,
  discussao: '<p>Síndrome brônquica obstrutiva: <b>sibilos expiratórios</b> difusos, expiração prolongada, hipersonoridade, musculatura acessória e <b>tiragem</b> (obstrução torna a pressão pleural mais negativa). Fala entrecortada, FR 30 e SpO₂ 92% indicam gravidade. O pulso paradoxal aparece na asma grave.</p><p>Diferencie: estridor é <b>inspiratório</b> e alto (laringe/traqueia); sibilo é expiratório e difuso.</p>'
},
/* ---------- 8 */
{
  id: 'dpoc', titulo: 'Cansaço progressivo em fumante', area: ['resp', 'geral'], nivel: 2,
  porta: 'O.S.T., 66 anos, masculino, aposentado (ex-trabalhador de pedreira), com cansaço progressivo. Faça a avaliação.',
  anamnese: {
    ident: 'Osvaldo, 66 anos, aposentado, trabalhou 20 anos em pedreira.',
    qd: '"Canseira" há 3 anos, pior há 6 meses.',
    inicio: 'Aos poucos, primeiro só subindo morro.',
    carac: 'Falta de ar que hoje aparece ao andar dentro de casa e tomar banho.',
    fatores: 'Piora com esforço e no frio; melhora em repouso.',
    evol: 'Progressiva.',
    assoc: 'Tosse com catarro claro todas as manhãs há anos.',
    ida_geral: 'Perdeu 4 kg no último ano.',
    ida_resp: 'Tosse crônica produtiva matinal (mucoide), dispneia aos pequenos esforços, chiado ocasional.',
    ida_cv: 'Nega ortopneia e DPN.',
    ap: 'HAS.', meds: 'Enalapril.', tab: '<b>60 maços-ano</b> (3 maços/dia por 20 anos); ainda fuma.', etil: 'Nega.'
  },
  exame: {
    g_estado: 'REG, emagrecido.',
    g_sinais: 'FR 24 irpm, FC 96 bpm, PA 130 × 80 mmHg, SpO₂ 89%.',
    g_pele: 'Cianose discreta de lábios.',
    g_maos: '<b>Baqueteamento digital</b> (unha em vidro de relógio).',
    g_facies: 'Respira com lábios semicerrados.',
    r_insp_est: '<b>Tórax em tonel</b> (↑ diâmetro anteroposterior, costelas horizontalizadas).',
    r_insp_din: 'Musculatura acessória, expiração prolongada.',
    r_expans: '<b>Reduzida bilateral e simetricamente.</b>',
    r_ftv: '<b>FTV diminuído simetricamente.</b>',
    r_perc: '<b>Hipersonoridade</b> bilateral.',
    r_ausc: '<b>MV globalmente diminuído</b>, expiração prolongada, roncos esparsos.',
    r_voz: 'Ressonância vocal diminuída.',
    c_ictus: 'Ictus não palpável (hiperinsuflação).',
    c_ausc: 'Bulhas hipofonéticas, RCR 2T, sem sopros.'
  },
  keyQ: ['ident', 'qd', 'carac', 'evol', 'assoc', 'ida_resp', 'tab'],
  keyEx: ['g_maos', 'r_insp_est', 'r_expans', 'r_ftv', 'r_perc', 'r_ausc'],
  pergunta: 'Qual síndrome predomina?',
  opcoes: ['Hiperinsuflação / enfisema (DPOC)', 'Derrame pleural bilateral', 'Congestão pulmonar por IC', 'Consolidação bilateral'],
  correta: 0,
  discussao: '<p><b>Enfisema</b>: tórax em tonel, expansibilidade e FTV reduzidos <b>de forma simétrica</b>, <b>hipersonoridade</b>, MV globalmente diminuído com expiração prolongada. A carga tabágica (cigarros/dia ÷ 20 × anos) e a exposição ocupacional (pedreira: pneumoconiose) são fundamentais na anamnese. Bulhas abafadas e ictus impalpável pela hiperinsuflação.</p>'
},
/* ---------- 9 */
{
  id: 'estenose-aortica', titulo: 'Desmaio ao subir escada', area: ['cardio'], nivel: 2,
  porta: 'A.G.L., 74 anos, masculino, teve um desmaio ao subir escadas. Realize anamnese cardiovascular e exame do coração.',
  anamnese: {
    ident: 'Antônio, 74 anos, aposentado.',
    qd: '"Desmaio" há 2 dias.',
    inicio: 'Subindo dois lances de escada, sentiu tontura e apagou por alguns segundos; acordou logo, sem confusão.',
    carac: 'Já vinha com aperto no peito ao caminhar há 6 meses, que passa ao parar.',
    fatores: 'Os sintomas vêm com esforço e melhoram em repouso.',
    evol: 'Cansaço aos médios esforços há 3 meses.',
    assoc: 'Nega palpitações antes do desmaio.',
    ida_cv: '<b>Angina de esforço, síncope de esforço, dispneia aos médios esforços.</b> Nega ortopneia.',
    ap: 'Dislipidemia.', meds: 'Sinvastatina.', tab: 'Nega.', etil: 'Nega.'
  },
  exame: {
    g_sinais: '<b>PA 110 × 90 mmHg</b> (pressão de pulso estreita), FC 72 bpm, FR 16 irpm.',
    c_pulsos: '<b>Pulso carotídeo parvus et tardus</b> (pequena amplitude, ascensão lenta).',
    c_ictus: '<b>Ictus propulsivo</b> e sustentado no 5º EIC LHC, 2 polpas.',
    c_ausc: '<b>Sopro mesossistólico rude, em diamante, +4/+6 com frêmito no foco aórtico</b>, irradiando para as <b>carótidas</b> e fúrcula. B2 hipofonética. B4.',
    c_manobras: 'Sopro diminui com handgrip. Também audível no ápice, com timbre musical (Gallavardin).'
  },
  keyQ: ['qd', 'inicio', 'carac', 'fatores', 'ida_cv'],
  keyEx: ['g_sinais', 'c_pulsos', 'c_ictus', 'c_ausc', 'c_manobras'],
  pergunta: 'Qual valvopatia?',
  opcoes: ['Estenose aórtica', 'Insuficiência aórtica', 'Insuficiência mitral', 'Estenose mitral'],
  correta: 0,
  discussao: '<p>Tríade <b>SAD</b> (síncope, angina, dispneia de esforço) em idoso (calcificação senil). Sopro <b>mesossistólico de ejeção em diamante</b> no foco aórtico irradiando para o pescoço, <b>pulso parvus et tardus</b>, <b>pressão convergente</b>, ictus propulsivo (hipertrofia concêntrica) e B4 (VE rígido). Diminui com handgrip (↑ pós-carga reduz o gradiente).</p>'
},
/* ---------- 10 */
{
  id: 'insuf-aortica', titulo: 'Palpitações e "coração batendo no pescoço"', area: ['cardio'], nivel: 2,
  porta: 'R.S.P., 38 anos, masculino, sente o coração bater forte. Examine o sistema cardiovascular.',
  anamnese: {
    ident: 'Rafael, 38 anos, bancário.',
    qd: '"Coração batendo forte" há 1 ano.',
    inicio: 'Aos poucos; percebe principalmente deitado à noite.',
    carac: 'Sente batimentos fortes no peito e no pescoço; a cabeça balança.',
    evol: 'Há 3 meses falta de ar aos médios esforços.',
    assoc: 'Às vezes aperto no peito à noite.',
    ida_cv: 'Palpitações, dispneia aos médios esforços, angina noturna ocasional.',
    ap: 'Teve "infecção no coração" (endocardite) há 2 anos, tratada.', meds: 'Nenhuma.', tab: 'Nega.', etil: 'Nega.'
  },
  exame: {
    g_sinais: '<b>PA 160 × 40 mmHg</b> (pressão divergente), FC 90 bpm.',
    g_facies: '<b>Movimento da cabeça sincrônico com os batimentos (Musset).</b>',
    c_pulsos: '<b>Pulso em martelo d\'água (Corrigan)</b>: ascensão rápida e colapso súbito. Pulsação capilar no leito ungueal (Quincke). Duplo sopro na femoral comprimida (Duroziez).',
    c_ictus: '<b>Ictus desviado para baixo e para a esquerda</b> (6º EIC, LAA), difuso (3 polpas), hiperdinâmico.',
    c_ausc: '<b>Sopro protodiastólico aspirativo em decrescendo</b>, +3/+6, no foco aórtico acessório, irradiando para o ápice. Ruflar mesodiastólico apical discreto (Austin-Flint).',
    c_manobras: 'Sopro mais audível com o paciente <b>sentado, inclinado para frente, em expiração</b>; aumenta com handgrip.'
  },
  keyQ: ['qd', 'carac', 'evol', 'ida_cv', 'ap'],
  keyEx: ['g_sinais', 'c_pulsos', 'c_ictus', 'c_ausc', 'c_manobras'],
  pergunta: 'Qual valvopatia?',
  opcoes: ['Insuficiência aórtica', 'Estenose aórtica', 'Estenose mitral', 'Insuficiência tricúspide'],
  correta: 0,
  discussao: '<p>"Tudo pulsa": Musset, Corrigan, Quincke, Duroziez. <b>Pressão divergente</b> (sistólica alta pelo grande volume ejetado; diastólica baixa pela regurgitação). Sopro <b>protodiastólico aspirativo em decrescendo</b>, melhor sentado/inclinado em expiração. Austin-Flint: jato regurgitante limita a abertura do folheto anterior mitral (estenose mitral funcional). Endocardite prévia é a causa provável.</p>'
},
/* ---------- 11 */
{
  id: 'estenose-mitral', titulo: 'Falta de ar e escarro com sangue', area: ['cardio', 'resp'], nivel: 3,
  porta: 'S.M.O., 34 anos, feminino, doméstica, natural do interior da Bahia, com dispneia progressiva. Conduza a estação.',
  anamnese: {
    ident: 'Sueli, 34 anos, doméstica, natural de Vitória da Conquista-BA.',
    qd: '"Falta de ar" há 1 ano, pior há 1 mês.',
    inicio: 'Aos poucos, nos esforços.',
    carac: 'Hoje cansa ao arrumar a casa; dorme com 2 travesseiros.',
    evol: 'Há 1 mês coração disparado e irregular; 2 episódios de escarro com sangue.',
    assoc: 'Voz rouca há alguns meses.',
    ida_resp: '<b>Hemoptise</b> em pequena quantidade; dispneia aos pequenos/médios esforços; <b>rouquidão</b>.',
    ida_cv: '<b>Palpitações irregulares</b>, <b>ortopneia</b>, DPN ocasional.',
    ap: '<b>Na infância teve dor nas juntas que "pulava" de uma para outra e "febre reumática"</b>; tomou Benzetacil por um tempo e parou.',
    meds: 'Nenhuma.', af: 'Nada relevante.', tab: 'Nega.', vida: 'Casa simples, muitas pessoas.'
  },
  exame: {
    g_facies: '<b>Fácies mitral</b> (rubor malar bilateral).',
    g_sinais: 'PA 100 × 70 mmHg, <b>FC 110 bpm irregular</b>, FR 22 irpm.',
    c_pulsos: '<b>Pulso irregularmente irregular</b>, baixa amplitude; <b>déficit de pulso</b> (FC na ausculta > pulso radial).',
    c_ictus: 'Ictus pouco palpável, não desviado. <b>Frêmito diastólico no ápice.</b>',
    c_ausc: 'Ritmo irregular. <b>B1 hiperfonética</b>, <b>estalido de abertura</b> logo após B2, <b>sopro mesodiastólico em ruflar</b> no foco mitral, sem irradiação. P2 hiperfonética.',
    c_manobras: 'Ruflar melhor com <b>campânula em decúbito lateral esquerdo</b> e após exercício. Sem reforço pré-sistólico (FA).',
    r_ausc: 'Estertores finos em bases.'
  },
  keyQ: ['qd', 'evol', 'ida_resp', 'ida_cv', 'ap'],
  keyEx: ['g_facies', 'c_pulsos', 'c_ictus', 'c_ausc', 'c_manobras'],
  pergunta: 'Qual valvopatia e complicação?',
  opcoes: ['Estenose mitral reumática com fibrilação atrial', 'Insuficiência mitral por prolapso', 'Estenose aórtica calcificada', 'Comunicação interatrial'],
  correta: 0,
  discussao: '<p>Febre reumática na infância → <b>estenose mitral</b>. Ausculta clássica: <b>B1 hiperfonética + estalido de abertura + ruflar mesodiastólico</b> no ápice (campânula, DLE, manobra de Pachon). O reforço pré-sistólico <b>desaparece na FA</b> (sem contração atrial efetiva).</p><p>Congestão pulmonar → dispneia, ortopneia, <b>hemoptise</b>. AE dilatado → FA (pulso irregular com déficit) e <b>rouquidão (Ortner)</b>. Fácies mitral. Ictus normal: o VE é poupado.</p>'
},
/* ---------- 12 */
{
  id: 'apendicite', titulo: 'Dor abdominal que "desceu" para a direita', area: ['abdome', 'geral'], nivel: 1,
  porta: 'G.H.A., 21 anos, masculino, com dor abdominal há 18 horas. Faça a anamnese e o exame do abdome.',
  anamnese: {
    ident: 'Gabriel, 21 anos, estudante.',
    qd: '"Dor na barriga" há 18 horas.',
    inicio: 'Começou em volta do umbigo, mal localizada.',
    carac: 'Depois de umas 8 horas "desceu" para o lado direito embaixo; contínua, 7/10.',
    fatores: 'Piora ao andar e tossir; prefere ficar parado.',
    evol: 'Cada vez mais forte e localizada.',
    assoc: 'Perdeu o apetite, enjoo, vomitou 1 vez (depois do início da dor).',
    ida_geral: 'Febre baixa, anorexia.',
    ida_gi: 'Anorexia, náusea, 1 vômito; última evacuação ontem, normal.',
    ida_gu: 'Nega disúria e hematúria.',
    ap: 'Hígido.', meds: 'Nenhuma.', tab: 'Nega.', etil: 'Nega.'
  },
  exame: {
    g_sinais: '<b>Tax 37,9 °C</b> (retal 39,1 °C), FC 102 bpm, PA 120 × 80 mmHg.',
    g_facies: 'Fácies de dor, imóvel no leito, flexiona a coxa direita.',
    a_insp: 'Plano, respiração superficial.',
    a_ausc: '<b>RHA hipoativos.</b>',
    a_palp_sup: '<b>Defesa localizada na FID.</b>',
    a_palp_prof: '<b>Dor intensa no ponto de McBurney.</b>',
    a_blumberg: '<b>Blumberg positivo na FID.</b>',
    a_apendice: '<b>Rovsing positivo</b> (dor na FID ao palpar a FIE). <b>Psoas positivo.</b> Obturador negativo. <b>Lenander positivo</b> (retal − axilar > 1 °C).',
    a_giordano: 'Negativo.', a_murphy: 'Negativo.'
  },
  keyQ: ['qd', 'inicio', 'carac', 'fatores', 'assoc', 'ida_gu'],
  keyEx: ['g_sinais', 'a_ausc', 'a_palp_sup', 'a_palp_prof', 'a_blumberg', 'a_apendice', 'a_giordano'],
  pergunta: 'Hipótese?',
  opcoes: ['Apendicite aguda com irritação peritoneal localizada', 'Colecistite aguda', 'Pielonefrite direita', 'Obstrução intestinal'],
  correta: 0,
  discussao: '<p>Dor <b>periumbilical que migra para a FID</b>, anorexia e vômito após a dor. Sinais: <b>Blumberg</b> (irritação peritoneal), <b>Rovsing</b>, <b>Psoas</b>, <b>Lenander</b>. RHA hipoativos e defesa localizada. Giordano negativo e ausência de sintomas urinários afastam pielonefrite. Lembre-se: <b>ausculta antes da palpação</b>.</p>'
},
/* ---------- 13 */
{
  id: 'colecistite', titulo: 'Dor no lado direito depois de feijoada', area: ['abdome'], nivel: 1,
  porta: 'F.C.D., 48 anos, feminino, com dor abdominal e febre. Avalie.',
  anamnese: {
    ident: 'Fátima, 48 anos, cozinheira.',
    qd: '"Dor do lado direito da barriga" há 1 dia.',
    inicio: 'Após almoço com feijoada, ontem.',
    carac: 'Dor no hipocôndrio direito, contínua, forte, irradiando para as costas/escápula direita.',
    fatores: 'Piora ao respirar fundo e com alimentos gordurosos.',
    evol: 'Já teve crises curtas de cólica parecida, que passavam em horas; esta não passou.',
    assoc: 'Náuseas, 2 vômitos com restos alimentares, febre.',
    ida_geral: 'Febre 38,3 °C.',
    ida_gi: 'Náuseas e vômitos alimentares. Nega icterícia, colúria e acolia.',
    ap: '"Pedra na vesícula" vista em ultrassom há 2 anos.', meds: 'Nenhuma.', af: 'Mãe operou a vesícula.', tab: 'Nega.', etil: 'Nega.', vida: 'Obesidade, 4 gestações.'
  },
  exame: {
    g_sinais: 'Tax 38,3 °C, FC 98 bpm, PA 130 × 80 mmHg.',
    g_pele: 'Anictérica.',
    g_antropo: 'IMC 33 kg/m².',
    a_palp_sup: 'Defesa discreta no hipocôndrio direito.',
    a_palp_prof: 'Dor à palpação do hipocôndrio direito.',
    a_murphy: '<b>Murphy positivo</b>: interrompe a inspiração profunda à compressão do ponto cístico.',
    a_figado: 'Hepatimetria normal; doloroso na região da vesícula.',
    a_blumberg: 'Negativo.', a_giordano: 'Negativo.'
  },
  keyQ: ['qd', 'inicio', 'carac', 'fatores', 'evol', 'assoc', 'ap'],
  keyEx: ['g_sinais', 'g_pele', 'a_palp_prof', 'a_murphy', 'a_giordano'],
  pergunta: 'Hipótese?',
  opcoes: ['Colecistite aguda litiásica', 'Neoplasia de cabeça de pâncreas', 'Hepatite aguda', 'Pancreatite aguda grave'],
  correta: 0,
  discussao: '<p>Cólicas biliares prévias que agora persistem + febre + <b>Murphy positivo</b> = colecistite aguda. Perfil clássico: mulher, obesa, multípara, ~40 anos. Sem icterícia: o colédoco não está obstruído. Compare com <b>Courvoisier</b>: vesícula palpável e <b>indolor</b> em paciente <b>ictérico</b> → neoplasia periampular.</p>'
},
/* ---------- 14 */
{
  id: 'pancreatite', titulo: 'Dor em faixa e manchas roxas', area: ['abdome', 'geral'], nivel: 2,
  porta: 'M.A.V., 52 anos, masculino, com dor abdominal intensa há 2 dias. Examine o abdome.',
  anamnese: {
    ident: 'Marcos, 52 anos, comerciante.',
    qd: '"Dor forte na barriga" há 2 dias.',
    inicio: 'Após um fim de semana bebendo muito.',
    carac: 'Dor epigástrica intensa (10/10), <b>em faixa, irradiando para as costas</b>.',
    fatores: 'Melhora um pouco sentado e inclinado para frente; piora deitado e ao comer.',
    evol: 'Piorando, vômitos repetidos.',
    assoc: 'Náuseas e vômitos que não aliviam a dor.',
    ida_gi: 'Vômitos repetidos, sem sangue.',
    ap: 'Episódio parecido há 1 ano.', meds: 'Nenhuma.', tab: '20 maços-ano.', etil: '<b>Etilista: 1 litro de cachaça por dia há 15 anos.</b>'
  },
  exame: {
    g_estado: 'MEG, sudoreico.',
    g_sinais: 'PA 90 × 60 mmHg, FC 124 bpm, FR 24 irpm, Tax 38 °C.',
    g_mucosas: 'Desidratado +3/+4.',
    g_tec: 'TEC 4 s, extremidades frias.',
    a_insp: 'Distendido. <b>Equimose periumbilical (Cullen) e equimose em flancos (Grey-Turner).</b>',
    a_ausc: '<b>RHA hipoativos.</b>',
    a_palp_sup: 'Defesa no andar superior.',
    a_palp_prof: 'Dor intensa no epigástrio e hipocôndrio esquerdo.',
    a_murphy: 'Negativo.'
  },
  keyQ: ['qd', 'inicio', 'carac', 'fatores', 'etil', 'ap'],
  keyEx: ['g_sinais', 'g_tec', 'a_insp', 'a_ausc', 'a_palp_prof'],
  pergunta: 'O que indicam as equimoses?',
  opcoes: ['Pancreatite aguda grave (necro-hemorrágica) com hemorragia retroperitoneal', 'Trauma abdominal fechado apenas', 'Coagulopatia por cirrose', 'Aneurisma de aorta roto, sem relação pancreática'],
  correta: 0,
  discussao: '<p>Etilismo pesado + dor epigástrica <b>em faixa irradiada para o dorso</b> (melhora inclinado para frente) + vômitos = pancreatite. <b>Cullen</b> (periumbilical) e <b>Grey-Turner</b> (flancos) indicam hemorragia retroperitoneal → <b>forma grave</b>. Hipotensão, taquicardia e TEC lentificado: hipovolemia (sequestro de líquido).</p>'
},
/* ---------- 15 */
{
  id: 'pielonefrite', titulo: 'Febre, calafrios e dor lombar', area: ['abdome', 'geral'], nivel: 1,
  porta: 'J.P.R., 29 anos, feminino, com febre alta e dor lombar. Faça anamnese e exame.',
  anamnese: {
    ident: 'Juliana, 29 anos, vendedora.',
    qd: '"Febre e dor nas costas" há 2 dias.',
    inicio: 'Há 5 dias ardor para urinar; há 2 dias febre alta e dor nas costas à direita.',
    carac: 'Dor lombar direita, contínua, moderada.',
    fatores: 'Piora ao bater nas costas e ao se mexer.',
    evol: 'Febre com calafrios, prostração.',
    assoc: 'Náuseas.',
    ida_geral: 'Febre 39 °C com calafrios.',
    ida_gu: '<b>Disúria, polaciúria, urgência</b>; urina turva e com mau cheiro. Nega hematúria.',
    ap: 'ITUs de repetição.', meds: 'Anticoncepcional oral.', tab: 'Nega.'
  },
  exame: {
    g_sinais: '<b>Tax 39 °C</b>, FC 110 bpm, PA 110 × 70 mmHg.',
    g_mucosas: 'Desidratada +1/+4.',
    a_palp_prof: 'Dor discreta à palpação profunda no flanco direito e hipogástrio.',
    a_giordano: '<b>Giordano positivo à direita</b> (dor à punho-percussão do ângulo costovertebral).',
    a_blumberg: 'Negativo.', a_murphy: 'Negativo.', a_apendice: 'Negativos.'
  },
  keyQ: ['qd', 'inicio', 'carac', 'ida_geral', 'ida_gu', 'ap'],
  keyEx: ['g_sinais', 'a_giordano', 'a_blumberg', 'a_murphy'],
  pergunta: 'Hipótese?',
  opcoes: ['Pielonefrite aguda à direita', 'Apendicite retrocecal', 'Colecistite aguda', 'Cólica biliar'],
  correta: 0,
  discussao: '<p>Cistite (disúria, polaciúria, urgência) que <b>ascende</b>: febre alta com calafrios + dor lombar + <b>Giordano positivo</b> = pielonefrite. Blumberg, Murphy e sinais apendiculares negativos ajudam no diferencial.</p>'
},
/* ---------- 16 */
{
  id: 'ic-congestiva', titulo: 'Falta de ar ao deitar', area: ['cardio', 'resp', 'geral', 'abdome'], nivel: 2,
  porta: 'E.F.N., 62 anos, feminino, com falta de ar que piora deitada. Avalie e descreva o exame cardiovascular e respiratório.',
  anamnese: {
    ident: 'Elza, 62 anos, costureira aposentada, natural de Montes Claros-MG.',
    qd: '"Falta de ar" há 3 meses.',
    inicio: 'Começou aos grandes esforços.',
    carac: 'Hoje ao tomar banho; dorme sentada (3 travesseiros); acorda sufocada e precisa sentar na beira da cama.',
    fatores: 'Melhora sentada.',
    evol: 'Progressiva; pernas incham no fim do dia.',
    assoc: 'Tosse seca à noite, nictúria.',
    ida_cv: '<b>Dispneia aos pequenos esforços, ortopneia (3 travesseiros), DPN</b>, edema vespertino de MMII.',
    ida_gi: 'Empachamento, dor em peso no lado direito.',
    ida_gu: 'Nictúria.',
    ap: '<b>Doença de Chagas</b> diagnosticada há 10 anos. HAS.', meds: 'Enalapril irregular.', af: 'Irmão com Chagas.', vida: 'Morou em casa de pau a pique na infância.'
  },
  exame: {
    g_sinais: 'PA 110 × 80 mmHg, FC 104 bpm, FR 24 irpm.',
    g_facies: '<b>Atitude ortopneica.</b>',
    g_edema: 'Edema de MMII +3/+4, <b>simétrico, mole, com cacifo, frio, indolor</b>, até joelhos.',
    g_tec: 'Extremidades frias, TEC 3 s.',
    c_jug: '<b>Turgência jugular a 45°, refluxo hepatojugular positivo.</b>',
    c_ictus: '<b>Ictus desviado para baixo e para a esquerda</b> (6º EIC LAA), <b>difuso (3 polpas)</b>.',
    c_pulsos: 'Pulso de pequena amplitude, alternante.',
    c_ausc: 'Ritmo de <b>galope por B3</b> (TA-TA-TU) no foco mitral em DLE; sopro holossistólico +2/+6 no FM irradiando para axila.',
    r_ausc: '<b>Estertores finos nas bases</b> bilateralmente.',
    r_perc: 'Submacicez nas bases.',
    a_figado: '<b>Hepatomegalia dolorosa</b>, borda romba, lisa, 3 cm do RCD.',
    a_ascite: 'Macicez móvel discreta.'
  },
  keyQ: ['qd', 'carac', 'evol', 'ida_cv', 'ap', 'vida'],
  keyEx: ['g_facies', 'g_edema', 'c_jug', 'c_ictus', 'c_ausc', 'r_ausc', 'a_figado'],
  pergunta: 'Qual a síntese sindrômica?',
  opcoes: ['Insuficiência cardíaca congestiva (esquerda e direita) por miocardiopatia dilatada chagásica', 'Síndrome nefrótica', 'DPOC exacerbado', 'Cirrose com hipertensão portal'],
  correta: 0,
  discussao: '<p><b>IC esquerda</b>: dispneia progressiva, ortopneia, DPN, estertores finos nas bases (congestão passiva), B3. <b>IC direita</b>: turgência jugular, refluxo hepatojugular, hepatomegalia dolorosa (borda romba, lisa), edema simétrico vespertino com cacifo, ascite. <b>Ictus difuso e desviado</b> = dilatação do VE (miocardiopatia chagásica). Sopro de IM funcional pela dilatação do anel. Pulso alternante = disfunção grave.</p>'
},
/* ---------- 17 anamnese pura */
{
  id: 'anamnese-lucia', titulo: 'Estação de anamnese: dor no peito', fonte: 'Aula de Anamnese – Caso 1', area: ['anamnese'], nivel: 1,
  porta: 'D. Lúcia, 44 anos, procura atendimento por dor no peito. Esta estação é <b>só de anamnese</b>: colete a história completa e identifique queixa, duração e sintoma-guia.',
  anamnese: {
    ident: 'Lúcia, 44 anos, auxiliar administrativa, casada, natural e procedente de Ribeirão Preto.',
    qd: '"Dor no peito do tipo fincada, muito forte, de tirar o ar" há 3 dias.',
    inicio: 'Começou há 3 dias, de repente, enquanto lavava roupa.',
    carac: 'Dor em pontada ("fincada"), 8/10, no lado esquerdo do peito, <b>"vai para as costas"</b>.',
    fatores: '<b>"Só melhora com Novalgina®"</b>; piora ao respirar fundo.',
    evol: 'Vem e volta, igual desde o início.',
    assoc: 'Sente falta de ar quando a dor vem.',
    ida_geral: '<b>Engordou muito no último ano</b> (está chateada com isso).',
    ida_gu: '<b>Às vezes ardor ao urinar.</b>',
    ida_cv: 'Nega palpitações, síncope, edema.',
    ap: 'Nega doenças.', meds: 'Dipirona se dor.', af: 'Pai hipertenso.', tab: 'Nega.', etil: 'Nega.',
    vida: '<b>Preocupada porque a vizinha teve infarto no mês passado.</b>'
  },
  exame: {},
  keyQ: ['ident', 'qd', 'inicio', 'carac', 'fatores', 'evol', 'assoc', 'ida_geral', 'ida_gu', 'ap', 'meds', 'af', 'tab', 'etil'],
  keyEx: [],
  pergunta: 'Qual é o sintoma-guia e onde entram as outras queixas?',
  opcoes: [
    'Sintoma-guia: dor torácica em pontada com irradiação para o dorso; ganho de peso e disúria vão para o IDA; o infarto da vizinha é preocupação (contexto)',
    'Sintoma-guia: disúria, pois é a queixa mais antiga',
    'Sintoma-guia: ganho de peso; a dor é secundária',
    'Registrar a QD como "infarto", pois é o que a paciente teme'
  ],
  correta: 0,
  discussao: '<p>A QD usa as palavras da paciente e o tempo, <b>sem rótulo diagnóstico</b>. O sintoma-guia é a <b>dor torácica</b>: caracterize com OPQRST (início súbito, pontada, 8/10, irradia para dorso, piora com inspiração, alívio com dipirona, dispneia associada). O ganho de peso e a disúria são queixas <b>sem relação</b> → registradas no IDA. A preocupação com o infarto da vizinha deve ser acolhida (resposta empática), mas não vira dado clínico da paciente.</p>'
}
];

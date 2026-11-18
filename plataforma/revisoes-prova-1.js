/* Revisões ao final das estações estilo prova (parte 1: cardio e respiratório) */
window.SEMIO_REVISOES = window.SEMIO_REVISOES || {};
Object.assign(window.SEMIO_REVISOES, {

'im-congestao': {
  fisio: '<p>A valva mitral deveria fechar na sístole. Na insuficiência mitral ela não fecha: parte do sangue que o VE ejeta volta para o átrio esquerdo. Isso gera dois problemas:</p><ul><li><b>Para trás (pulmão):</b> o AE recebe sangue a mais, a pressão sobe e é transmitida às veias e capilares pulmonares. Com a pressão hidrostática alta, o líquido sai para o interstício e os alvéolos, primeiro nas bases (gravidade). É a congestão pulmonar: dispneia, ortopneia, DPN, estertores finos.</li><li><b>No ventrículo:</b> o VE recebe, na diástole, o sangue normal mais o que refluiu. Sobrecarga de volume → dilatação (hipertrofia excêntrica) → ictus desviado e difuso, B3.</li></ul><p>No caso, o infarto prévio dilatou o VE e o anel mitral (IM funcional) ou lesou o músculo papilar.</p>',
  sinais: [['Sopro holossistólico no foco mitral', 'O VE tem pressão maior que o AE durante toda a sístole: refluxo de B1 a B2, em platô.'], ['Irradiação para a axila', 'O jato vai para o AE, que fica acima e atrás.'], ['B1 hipofonética', 'Os folhetos não coaptam: o fechamento é fraco e o sopro encobre a B1.'], ['B3', 'Grande volume entrando rápido num ventrículo dilatado no início da diástole.'], ['Estertores finos nas bases', 'Alvéolos com transudato se abrindo no fim da inspiração; não mudam com a tosse.'], ['Ortopneia e DPN', 'Deitado, o sangue das pernas volta ao pulmão já congestionado; à noite o líquido do interstício é reabsorvido e encharca o pulmão.']],
  tecnica: ['Focos: aórtico 2º EIC D, pulmonar 2º EIC E, aórtico acessório 3º EIC E, tricúspide borda esternal E baixa, mitral no ictus.', 'Palpe o pulso carotídeo para saber qual é a B1.', 'Ausculta pulmonar: sentado, face posterior primeiro, ápices às bases, comparando.', 'Handgrip aumenta o sopro da IM.'],
  dif: [['Insuficiência tricúspide', 'Mesmo som, mas no foco tricúspide e aumenta na inspiração (Rivero-Carvallo); onda v na jugular.'], ['Estenose aórtica', 'Sopro de ejeção em diamante, foco aórtico, irradia para carótidas, diminui com handgrip.'], ['CIV', 'Holossistólico na borda esternal esquerda, sem irradiação para a axila.']],
  pegadinha: 'Estertor fino após IAM caiu no gabarito: é congestão por IC esquerda. "EAIM na sístole": IM é sistólica.'
},
'eao': {
  fisio: '<p>A valva aórtica deveria abrir amplamente na sístole. Calcificada (idoso), reumática ou bicúspide, ela abre pouco. O VE precisa gerar muito mais pressão para ejetar: <b>sobrecarga de pressão</b> → hipertrofia concêntrica (parede grossa, cavidade normal) → VE rígido.</p><p>Como passa pouco sangue e devagar, a pressão sistólica cai e a diastólica sobe (<b>pressão convergente</b>), e o pulso fica pequeno e lento (<b>parvus et tardus</b>). No esforço, o débito não consegue subir: falta sangue para o cérebro (síncope), para as coronárias do VE hipertrofiado (angina) e a pressão volta ao pulmão (dispneia): tríade <b>SAD</b>.</p>',
  sinais: [['Sopro mesossistólico em diamante', 'Começa após B1 (a valva precisa abrir), cresce e decresce acompanhando a velocidade da ejeção, termina antes de B2.'], ['Irradiação para carótidas', 'O jato segue a aorta para os vasos do pescoço.'], ['Ictus propulsivo e sustentado', 'Hipertrofia concêntrica: mais força, no lugar normal.'], ['B4', 'Átrio contraindo contra o VE rígido.'], ['B2 hipofonética', 'Valva calcificada e pouco móvel fecha fraco.'], ['Fenômeno de Gallavardin', 'Na estenose grave o sopro irradia ao ápice com timbre musical, simulando IM.']],
  tecnica: ['Pulso: 2º e 3º dedos, nunca o polegar; carótidas uma de cada vez.', 'Ausculta no foco aórtico, procurando irradiação para o pescoço.', 'Handgrip diminui o sopro (aumenta a pós-carga e reduz o gradiente).'],
  dif: [['Cardiomiopatia hipertrófica', 'Sopro sistólico que diminui com handgrip e aumenta com Valsalva; paciente jovem.'], ['Insuficiência mitral', 'Holossistólico, foco mitral, irradia para axila, aumenta com handgrip.'], ['Esclerose aórtica do idoso', 'Sopro suave sem repercussão no pulso.']],
  pegadinha: 'EAo é sopro EJETIVO (não regurgitativo) e a pressão é CONVERGENTE. Insuficiência aórtica é o oposto.'
},
'iao': {
  fisio: '<p>A valva aórtica deveria fechar na diástole. Na insuficiência (endocardite, febre reumática, dilatação da raiz, Marfan, sífilis), o sangue volta da aorta para o VE durante a diástole. O VE recebe o volume normal do AE mais o que refluiu: <b>sobrecarga de volume</b> → dilata e ejeta um volume sistólico enorme.</p><p>Resultado: sistólica alta (muito volume ejetado) e diastólica baixa (a aorta se esvazia de volta): <b>pressão divergente</b>. Esse "enche e esvazia" brusco das artérias faz <b>tudo pulsar</b>.</p>',
  sinais: [['Sopro protodiastólico aspirativo em decrescendo', 'Logo após a B2 o gradiente aorta → VE é máximo e vai caindo; jato de alta velocidade (agudo, diafragma).'], ['Pulso em martelo d’água (Corrigan)', 'Subida rápida (grande volume) e colapso brusco (refluxo).'], ['Musset, Quincke, Müller, Traube, Duroziez, Hill', 'Cabeça, unhas, úvula e femoral pulsam pela grande pressão de pulso.'], ['Ictus desviado e difuso', 'VE dilatado (hipertrofia excêntrica).'], ['Austin-Flint', 'Jato regurgitante limita a abertura do folheto anterior da mitral: ruflar no ápice sem estenose mitral.']],
  tecnica: ['PA: repouso, braço no nível do coração, manguito 2–3 cm acima da fossa cubital, palpar a radial para estimar a PAS, inflar 20–30 acima, desinflar 2–3 mmHg/s, fase I = PAS, fase V = PAD.', 'Ausculta do sopro: sentado, inclinado para frente, em expiração, no aórtico acessório.', 'Handgrip aumenta o sopro.'],
  dif: [['Insuficiência pulmonar (Graham Steell)', 'Protodiastólico no foco pulmonar, aumenta na inspiração, com hipertensão pulmonar.'], ['Estenose mitral', 'Ruflar mesodiastólico grave com estalido e B1 forte; ictus normal.']],
  pegadinha: 'Pressão DIVERGENTE e Corrigan = IAo. Não confundir sopro diastólico aspirativo (IAo) com ruflar (EM).'
},
'em': {
  fisio: '<p>A febre reumática funde e espessa os folhetos mitrais. A valva deveria abrir na diástole, mas abre pouco: o sangue fica <b>preso no átrio esquerdo</b>.</p><ul><li><b>Para trás:</b> pressão alta no AE → veias pulmonares → congestão (dispneia, ortopneia) e ruptura de vasos (hemoptise). Com o tempo, hipertensão pulmonar e sobrecarga do VD.</li><li><b>No AE:</b> dilata → fibrilação atrial (pulso irregular) e compressão do laríngeo recorrente (rouquidão, sinal de Ortner).</li><li><b>No VE:</b> recebe pouco sangue e é poupado → ictus normal; débito baixo.</li></ul>',
  sinais: [['B1 hiperfonética', 'Com pressão alta no AE os folhetos ficam abertos até o fim da diástole e fecham com força.'], ['Estalido de abertura', 'Folhetos fundidos abrem bruscamente e param; quanto mais perto da B2, mais grave.'], ['Ruflar mesodiastólico', 'Fluxo de baixa velocidade por orifício estreito: som grave (campânula).'], ['Reforço pré-sistólico', 'A contração atrial empurra mais sangue no fim da diástole; some na FA.'], ['Fácies mitral', 'Rubor malar por vasodilatação/baixo débito.'], ['Hemoptise', 'Hipertensão venosa pulmonar rompe vasos brônquicos.']],
  tecnica: ['Ictus: inspeção tangencial, palma e depois polpas no 5º EIC E LHC; se não achar, decúbito lateral esquerdo.', 'Manobra de Pachón: decúbito lateral esquerdo + campânula no ápice.', 'Exercício (aumenta FC) acentua o ruflar.'],
  dif: [['Austin-Flint (IAo)', 'Ruflar apical funcional com sopro diastólico aspirativo e pressão divergente.'], ['Estenose tricúspide', 'Ruflar no foco tricúspide, aumenta na inspiração; quase sempre junto com EM.']],
  pegadinha: 'Na EM o ictus é NORMAL (VE poupado) e não há B4 se houver FA.'
},
'ic-direita': {
  fisio: '<p>A miocardiopatia chagásica dilata as câmaras e enfraquece o músculo. Quando o <b>VE</b> falha, o sangue represa no pulmão (ortopneia, DPN, estertores). Quando o <b>VD</b> falha (geralmente como consequência do lado esquerdo), o sangue represa nas veias do corpo: jugular cheia, fígado congesto, edema.</p><p>O edema é <b>hidrostático</b>: pressão venosa alta empurra líquido para o interstício, nas partes mais baixas (MMII), pior no fim do dia. O fígado incha de sangue e a <b>cápsula de Glisson distendida dói</b>.</p>',
  sinais: [['Turgência jugular a 45°', 'Pressão venosa central elevada (PVC = altura acima do Louis + 5 cm).'], ['Refluxo hepatojugular', 'Comprimir o fígado empurra sangue que o VD não consegue receber: a jugular sobe e fica.'], ['B3', 'Ventrículo dilatado e cheio.'], ['Hepatomegalia dolorosa, lisa, romba', 'Congestão aguda distende a cápsula.'], ['Edema simétrico, mole, com cacifo, vespertino', 'Hidrostático, gravitacional.'], ['Ictus difuso e desviado', 'Dilatação do VE.']],
  tecnica: ['Jugular: 45°, cabeça para a esquerda, jugular interna direita, só inspeção, luz tangencial.', 'Refluxo: comprimir o HCD por 10–30 s sem Valsalva; positivo se sobe ≥ 3 cm e mantém.'],
  dif: [['Síndrome nefrótica', 'Edema facial matinal, urina espumosa, sem turgência jugular.'], ['Cirrose', 'Fígado nodular indolor, estigmas hepáticos, jugular vazia.'], ['Insuficiência venosa', 'Sem jugular cheia; pele ocre, varizes.']],
  pegadinha: 'A jugular é o divisor de águas: edema com jugular cheia = coração.'
},
'pericardite-tamponamento': {
  fisio: '<p>Na pericardite viral os folhetos do pericárdio inflamam e ficam rugosos com fibrina: o atrito entre eles gera dor e um ruído áspero. A dor piora deitado e na inspiração (o coração se apoia no pericárdio posterior e o diafragma traciona o pericárdio) e melhora inclinado para frente.</p><p>Se acumular líquido rapidamente, o pericárdio não distende: o coração não consegue encher (<b>tamponamento</b>). Cai o débito (hipotensão), o sangue represa nas veias (turgência jugular) e o líquido afasta o coração da parede (bulhas abafadas): <b>tríade de Beck</b>.</p>',
  sinais: [['Atrito pericárdico', 'Couro raspando, até 3 componentes, não segue exatamente o ciclo, persiste em apneia.'], ['Pulso paradoxal', 'Na inspiração o VD enche mais e, num pericárdio que não cede, empurra o septo e reduz o enchimento do VE: a PAS cai > 10 mmHg.'], ['Sinal de Kussmaul jugular', 'A jugular sobe na inspiração quando o coração direito não aceita o retorno extra (constrição).'], ['Atitude genupeitoral/inclinada', 'Alivia a dor e facilita o enchimento.']],
  tecnica: ['Pulso paradoxal: desinflar o manguito lentamente, anotar quando os sons aparecem só na expiração e quando aparecem nas duas fases; diferença > 10 mmHg.', 'Atrito: ausculte na borda esternal esquerda, paciente sentado inclinado; peça apneia para diferenciar do pleural.'],
  dif: [['IAM', 'Dor em aperto que não muda com posição/respiração, sudorese, fatores de risco.'], ['Pleurite', 'Atrito some em apneia, dor ventilatória lateral.'], ['Dissecção de aorta', 'Dor rasgante para o dorso, PA assimétrica.']],
  pegadinha: 'Kussmaul jugular ≠ respiração de Kussmaul. Beck = hipotensão + turgência + bulhas abafadas.'
},
'endocardite-it': {
  fisio: '<p>No usuário de droga injetável, bactérias da pele entram pela veia e chegam primeiro ao <b>coração direito</b>, aderindo à tricúspide e formando vegetações. A valva destruída não fecha: na sístole o VD ejeta sangue de volta para o AD e para as veias (onda v, fígado pulsátil).</p><p>A infecção prolongada dá febre, emagrecimento, anemia e esplenomegalia. Fragmentos e imunocomplexos causam fenômenos vasculares e imunológicos: petéquias, hemorragias subungueais, nódulos dolorosos nas polpas. Êmbolos da tricúspide vão para o <b>pulmão</b> (embolias sépticas).</p>',
  sinais: [['Sopro holossistólico no foco tricúspide', 'Refluxo VD → AD durante toda a sístole.'], ['Rivero-Carvallo positivo', 'Inspiração aumenta o retorno ao coração direito → mais refluxo → sopro mais intenso.'], ['Onda v gigante', 'Pressão do VD transmitida ao sistema venoso na sístole.'], ['Fígado pulsátil', 'Refluxo pelas veias hepáticas.'], ['Petéquias, lesões de polpa', 'Embolia e vasculite imunológica.']],
  tecnica: ['Rivero-Carvallo: ausculta no foco tricúspide comparando inspiração profunda e expiração.', 'Jugular a 45° procurando onda sistólica coincidente com a B2.'],
  dif: [['Insuficiência mitral', 'Não aumenta na inspiração, irradia para axila.'], ['TB ou linfoma', 'Febre prolongada, mas sem sopro novo.'], ['IT funcional', 'Hipertensão pulmonar (DPOC, EM), sem febre.']],
  pegadinha: '"Febre + sopro (novo) = endocardite." Droga IV → valva tricúspide.'
},
'iam-dor': {
  fisio: '<p>Uma placa aterosclerótica coronariana rompe, forma trombo e reduz o fluxo: o miocárdio fica isquêmico. A dor visceral cardíaca é em <b>aperto/peso</b>, retroesternal, irradiando para MSE e mandíbula (dor referida pelos mesmos segmentos medulares), com descarga simpática (sudorese fria, palidez) e vagal (náusea). Angina é transitória e melhora com repouso; IAM dura > 20 min e não melhora.</p><p>O músculo isquêmico fica rígido (<b>B4</b>). Se uma área grande perde força, o VE falha: congestão pulmonar (estertores finos) e B3. A ruptura de músculo papilar causa IM aguda.</p>',
  sinais: [['Dor opressiva > 20 min em repouso', 'Necrose em curso.'], ['Sudorese fria, palidez', 'Ativação simpática.'], ['B4', 'VE isquêmico pouco complacente.'], ['Estertores finos + B3', 'Evolução para IC esquerda.'], ['PA igual nos dois braços', 'Fala contra dissecção de aorta.']],
  tecnica: ['OPQRST da dor + sintomas associados + fatores de risco.', 'PA nos dois braços e pulsos simétricos na dor torácica.'],
  dif: [['Dissecção de aorta', 'Dor súbita rasgante para o dorso, PA/pulsos assimétricos, sopro de IAo.'], ['Pericardite', 'Muda com posição e respiração, atrito.'], ['TEP', 'Dispneia súbita, Virchow, pleurítica.'], ['Pneumotórax', 'Pontada súbita, MV abolido, timpanismo.'], ['DRGE', 'Queimação pós-prandial que piora deitado.']],
  pegadinha: 'Dor torácica: primeiro afaste o que mata (IAM, dissecção, TEP, pneumotórax, tamponamento).'
},
'choque': {
  fisio: '<p>Choque é hipoperfusão tecidual. No hemorrágico, a perda de volume reduz o retorno venoso e o débito (DC = VS × FC). O corpo compensa com descarga simpática: <b>taquicardia</b> e <b>vasoconstrição periférica</b> (pele fria, pálida, úmida, TEC prolongado) para preservar cérebro e coração. Quando a compensação falha, a PA cai, a consciência se altera e a diurese diminui.</p>',
  sinais: [['Pulso filiforme', 'Pequeno volume ejetado com vasoconstrição.'], ['TEC > 3 s, extremidades frias', 'Vasoconstrição periférica.'], ['Taquicardia', 'Compensação para manter o débito.'], ['Agitação/confusão', 'Hipoperfusão cerebral.'], ['Jugular colabada', 'Pouco volume circulante (hipovolêmico).']],
  tecnica: ['TEC: comprimir a polpa/leito ungueal e contar o retorno da cor; comparar com o próprio.', 'Glasgow: ocular 1–4, verbal 1–5, motora 1–6.'],
  dif: [['Cardiogênico', 'Jugular cheia, estertores, B3, IAM.'], ['Obstrutivo', 'Jugular cheia: tamponamento (Beck), pneumotórax hipertensivo, TEP maciço.'], ['Séptico', 'Febre, extremidades quentes no início, jugular vazia.']],
  pegadinha: 'Jugular vazia × cheia separa hipovolêmico/séptico de cardiogênico/obstrutivo.'
},
'cor-pulmonale': {
  fisio: '<p>Na DPOC, a hipoxemia crônica provoca vasoconstrição das arteríolas pulmonares e a destruição do parênquima reduz o leito vascular. A pressão na artéria pulmonar sobe (<b>hipertensão pulmonar</b>) e o VD, que é feito para baixa pressão, hipertrofia, dilata e falha. É a <b>IC direita de causa pulmonar</b>: congestão sistêmica sem congestão pulmonar.</p>',
  sinais: [['Impulsão paraesternal esquerda', 'VD aumentado empurra a parede junto ao esterno.'], ['P2 hiperfonética', 'Valva pulmonar fecha com força pela pressão alta.'], ['Sopro de IT funcional', 'Anel tricúspide dilatado; aumenta na inspiração.'], ['Turgência jugular, refluxo HJ, hepatomegalia, edema', 'Congestão sistêmica.'], ['Cianose central e baqueteamento', 'Hipoxemia crônica.']],
  tecnica: ['Palpar a região paraesternal esquerda com a palma.', 'Baqueteamento: ângulo ungueal > 160°, sem janela de Schamroth.'],
  dif: [['IC esquerda', 'Ortopneia, DPN, crepitantes nas bases, ictus desviado.'], ['TEP agudo', 'Cor pulmonale agudo, súbito, pós-operatório.']],
  pegadinha: 'Cor pulmonale = IC DIREITA por doença pulmonar (blue bloater).'
},
/* ================= RESPIRATÓRIO ================= */
'pneumonia': {
  fisio: '<p>A bactéria (geralmente pneumococo) chega aos alvéolos e causa inflamação: os alvéolos se enchem de exsudato (hepatização), mas o brônquio continua aberto. O lobo vira um bloco sólido que <b>conduz melhor</b> o som e a vibração. A inflamação atinge a pleura vizinha: dor em pontada que piora ao inspirar.</p>',
  sinais: [['FTV aumentado', 'Sólido com brônquio pérvio conduz a vibração.'], ['Macicez', 'Parênquima sem ar.'], ['Sopro tubário', 'Som brônquico transmitido à periferia pelo bloco sólido.'], ['Estertores finos', 'Alvéolos com exsudato se abrindo no fim da inspiração.'], ['Broncofonia/pectorilóquia', 'A voz chega nítida.'], ['Expansibilidade reduzida', 'Lobo rígido e dor pleurítica.']],
  tecnica: ['FTV: "33", mesma mão espalmada, pontos simétricos, posterior → lateral → anterior.', 'Percussão: dígito-digital, dedo plessímetro firme no EIC, golpe com o punho, comparando.'],
  dif: [['Derrame pleural', 'FTV abolido, MV abolido, Signorelli +, egofonia.'], ['Atelectasia', 'FTV ↓, traqueia puxada, sem sopro tubário.'], ['TEP', 'Súbito, sem febre, pulmão quase normal.']],
  pegadinha: '"Pneumonia: tudo aumenta." Só a condensação aumenta o FTV.'
},
'derrame': {
  fisio: '<p>Na IC, a pressão venosa alta aumenta a pressão hidrostática nos capilares pleurais e o líquido transuda para o espaço pleural mais rápido do que a linfa consegue drenar: <b>transudato</b>, geralmente bilateral ou à direita. O líquido se acumula na base, <b>afasta o pulmão da parede</b> e abafa tudo.</p>',
  sinais: [['FTV abolido', 'O líquido se interpõe entre o pulmão e a mão.'], ['Macicez com Signorelli positivo', 'Líquido denso; a coluna fica maciça no terço inferior.'], ['MV e voz abolidos', 'O som pulmonar não atravessa o líquido.'], ['Egofonia no limite superior', 'Pulmão comprimido transmite a voz com timbre metálico ("i" vira "ê").'], ['Lemos-Torres', 'Abaulamento intercostal expiratório.'], ['Traqueia para o lado oposto (volumoso)', 'O líquido empurra o mediastino.']],
  tecnica: ['Ruault (ápices: polegares em C7) e Lasègue (bases: polegares a ~T10 com prega de pele).', 'Signorelli: percutir os processos espinhosos de T1 a T12.'],
  dif: [['Pneumonia', 'FTV aumentado, sopro tubário, coluna clara.'], ['Atelectasia', 'Traqueia puxada para o mesmo lado.'], ['Derrame parapneumônico', 'Exsudato, febre, pneumonia prévia.']],
  pegadinha: '"Derrame: tudo some." Pneumonia × derrame: FTV + Signorelli.'
},
'asma': {
  fisio: '<p>Inflamação alérgica dos brônquios com broncoespasmo, edema e muco. O ar entra mas tem dificuldade de sair: <b>aprisionamento aéreo</b> e hiperinsuflação. O ar passando por brônquios estreitos vibra: sibilos. O esforço para respirar recruta a musculatura acessória e a pressão pleural muito negativa retrai os espaços intercostais (tiragem).</p><p>Na crise grave o fluxo é tão baixo que nem sibila: <b>silêncio auscultatório</b>, sinal de alarme. À noite a asma piora (decúbito reduz volumes, menos catecolaminas e cortisol).</p>',
  sinais: [['Sibilos expiratórios difusos', 'Ar em vias estreitadas.'], ['Expiração prolongada', 'Obstrução ao fluxo expiratório.'], ['Hipersonoridade', 'Ar aprisionado.'], ['Tiragem, musculatura acessória, fala entrecortada', 'Esforço respiratório e gravidade.'], ['Pulso paradoxal', 'Grandes variações de pressão intratorácica.']],
  tecnica: ['FR por 1 minuto sem avisar.', 'Inspeção dinâmica: ritmo, amplitude, tipo, tiragem, musculatura acessória, asa do nariz.'],
  dif: [['Estridor', 'Inspiratório, alto, obstrução alta (laringe).'], ['DPOC', 'Tabagista, progressivo, não episódico.'], ['Asma cardíaca', 'Sibilos por IC esquerda: ortopneia, B3, crepitantes.']],
  pegadinha: 'Tórax silencioso numa crise = gravíssimo. Sibilo + tiragem caiu no gabarito.'
},
'pneumotorax': {
  fisio: '<p>Uma pequena bolha (bleb) no ápice se rompe (típico de jovem alto, magro e fumante) e o ar entra no espaço pleural. A pressão negativa que mantinha o pulmão expandido se perde e o pulmão colapsa em direção ao hilo. O ar livre ressoa (timpanismo) e afasta o pulmão da parede (tudo abolido).</p><p>Se o ar entra e não sai (mecanismo valvular), a pressão sobe: <b>pneumotórax hipertensivo</b>, que empurra o mediastino, reduz o retorno venoso e causa choque obstrutivo.</p>',
  sinais: [['Timpanismo', 'Ar livre na cavidade pleural.'], ['FTV, MV e voz abolidos', 'O pulmão está afastado da parede.'], ['Expansibilidade reduzida', 'O pulmão colapsado não acompanha.'], ['Hipertensivo: traqueia contralateral, jugular cheia, hipotensão', 'Ar sob pressão empurra o mediastino e comprime as veias.']],
  tecnica: ['Percussão comparativa simétrica.', 'Avaliar posição da traqueia na fúrcula.'],
  dif: [['Derrame', 'Macicez (e não timpanismo), Signorelli +.'], ['Enfisema', 'Hipersonoridade bilateral e simétrica.'], ['TEP', 'Dispneia súbita, mas pulmão com MV presente.']],
  pegadinha: '"Atelectasia puxa; derrame e pneumotórax hipertensivo empurram."'
},
'dpoc-enfisema': {
  fisio: '<p>O tabagismo destrói as paredes alveolares (enfisema) e inflama os brônquios (bronquite). Com menos tecido elástico, os alvéolos não esvaziam e o ar fica preso: tórax em tonel, diafragma rebaixado e plano, costelas horizontais. O paciente expira com lábios semicerrados para manter as vias abertas (PEEP fisiológica).</p>',
  sinais: [['Tórax em tonel, Charpy obtuso', 'Hiperinsuflação crônica.'], ['Hipersonoridade bilateral', 'Ar em excesso.'], ['FTV e MV diminuídos simetricamente', 'Muito ar e pouco parênquima conduzem mal.'], ['Expiração prolongada', 'Obstrução ao fluxo.'], ['Macicez hepática rebaixada', 'Diafragma rebaixado.'], ['Frenolabial, musculatura acessória', 'Esforço respiratório.']],
  tecnica: ['Inspeção estática de frente, de lado e de costas.', 'Carga tabágica: (cigarros/dia ÷ 20) × anos.'],
  dif: [['Asma', 'Episódica, atopia, reversível.'], ['IC', 'Ortopneia, DPN, B3, crepitantes.'], ['Fibrose', 'Crepitantes em velcro, sem hipersonoridade.']],
  pegadinha: 'Pink puffer (enfisema, magro, corado) × blue bloater (bronquite, obeso, cianótico, cor pulmonale).'
},
'atelectasia': {
  fisio: '<p>No pós-operatório abdominal, a dor impede respirar fundo e tossir. A secreção se acumula e <b>obstrui um brônquio</b>; o ar distal é absorvido e os alvéolos <b>colapsam</b>. O lobo perde volume e "puxa" as estruturas vizinhas (traqueia, mediastino, diafragma) para o seu lado.</p>',
  sinais: [['Macicez', 'Tecido sem ar.'], ['FTV, MV e voz diminuídos/abolidos', 'Brônquio fechado não conduz.'], ['Retração e tiragem', 'Perda de volume.'], ['Traqueia desviada para o mesmo lado', 'O pulmão murcho puxa.']],
  tecnica: ['Posição da traqueia: dedo na fúrcula, comparar os espaços laterais.'],
  dif: [['Derrame', 'Traqueia vai para o lado oposto; Signorelli +; egofonia.'], ['Pneumonia', 'Brônquio aberto: FTV ↑, sopro tubário.']],
  pegadinha: 'Atelectasia = alvéolo VAZIO e colapsado; pneumonia = alvéolo CHEIO de exsudato.'
},
'tep': {
  fisio: '<p>Um trombo formado nas veias profundas da perna (favorecido pela tríade de <b>Virchow</b>: estase, hipercoagulabilidade, lesão endotelial) se solta e obstrui a artéria pulmonar. A área ventilada deixa de ser perfundida (espaço morto): hipoxemia, taquipneia e taquicardia. Se houver infarto pulmonar, aparecem dor pleurítica e hemoptise. Se a obstrução for grande, o VD falha agudamente (cor pulmonale agudo).</p>',
  sinais: [['Pulmão quase normal', 'O problema é vascular, não do parênquima: "grande simulador".'], ['Taquicardia, taquipneia, hipoxemia', 'Distúrbio ventilação-perfusão.'], ['P2 hiperfonética, turgência jugular', 'Sobrecarga aguda do VD.'], ['Edema assimétrico da panturrilha, Homans, Bancroft', 'Fonte: TVP.']],
  tecnica: ['Medir as panturrilhas no mesmo nível (> 3 cm de diferença).', 'Homans: dorsiflexão do pé; Bancroft: compressão contra a tíbia; bandeira: menor mobilidade.'],
  dif: [['Pneumonia', 'Febre, instalação em dias, condensação ao exame.'], ['Pneumotórax', 'Timpanismo, MV abolido.'], ['IAM', 'Dor em aperto, sem Virchow.']],
  pegadinha: 'Dispneia súbita + Virchow + exame pobre = pense em TEP.'
},
'derrame-parapneumonico': {
  fisio: '<p>A inflamação da pneumonia atinge a pleura e aumenta a permeabilidade dos capilares pleurais: forma-se um <b>exsudato</b> (rico em proteínas). Se infecta, vira empiema (pus) e precisa de drenagem. Antes de o líquido se acumular, os folhetos inflamados atritam (atrito pleural); quando o líquido os separa, o atrito some.</p>',
  sinais: [['FTV que passou de aumentado a abolido', 'Antes condensação; agora líquido entre o pulmão e a parede.'], ['Macicez + Signorelli', 'Líquido na base.'], ['Egofonia no limite superior', 'Pulmão comprimido.'], ['Lemos-Torres', 'Abaulamento intercostal expiratório.'], ['Febre persistente', 'Infecção não controlada (empiema?).']],
  tecnica: ['Ressonância vocal: "33" falado e cochichado; egofonia com "i" prolongado.', 'Lemos-Torres: observar 9º–11º EIC na expiração com luz tangencial.'],
  dif: [['Derrame da IC', 'Transudato, bilateral, sem febre, com congestão.'], ['Pneumonia sem derrame', 'FTV aumentado.']],
  pegadinha: 'AINE pode mascarar a febre: pergunte sempre.'
},
'ritmos-geral-resp': {
  fisio: '<p>Sem insulina, a glicose não entra nas células e o corpo queima gordura, produzindo cetoácidos: <b>acidose metabólica</b>. A hiperglicemia causa diurese osmótica (poliúria, polidipsia) e desidratação. Os quimiorreceptores detectam o pH baixo e estimulam a respiração: <b>Kussmaul</b>, profunda e rápida, para eliminar CO₂ e compensar a acidose.</p>',
  sinais: [['Respiração de Kussmaul', 'Compensação respiratória da acidose.'], ['Hálito cetônico', 'Acetona eliminada na respiração.'], ['Desidratação', 'Diurese osmótica + vômitos.'], ['Sonolência', 'Acidose e hiperosmolaridade.']],
  tecnica: ['Contar a FR por 1 minuto sem avisar.', 'Descrever ritmo, amplitude e frequência separadamente.'],
  dif: [['Cheyne-Stokes', 'Crescendo-decrescendo com apneia: IC grave, AVC.'], ['Biot', 'Irregular com apneias: lesão grave do SNC.'], ['Suspirosa', 'Ansiedade.']],
  pegadinha: 'Respiração de Kussmaul (acidose) ≠ sinal de Kussmaul (jugular).'
}
});

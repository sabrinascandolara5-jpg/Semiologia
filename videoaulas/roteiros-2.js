/* Roteiros das videoaulas (parte 2) */
var PH = {
  normal: [['spike', .12, 1, 'B1'], ['spike', .48, .75, 'B2']],
  b3: [['spike', .12, 1, 'B1'], ['spike', .48, .75, 'B2'], ['spike', .66, .5, 'B3']],
  b4: [['spike', .03, .5, 'B4'], ['spike', .12, 1, 'B1'], ['spike', .48, .75, 'B2']],
  eao: [['spike', .12, .9, 'B1'], ['shape', .18, .44, 'diamond', .8, 'sopro'], ['spike', .48, .4, 'B2']],
  im: [['spike', .12, .45, 'B1'], ['shape', .12, .48, 'plateau', .6, 'sopro'], ['spike', .48, .7, 'B2']],
  iao: [['spike', .12, .9, 'B1'], ['spike', .48, .75, 'B2'], ['shape', .49, .9, 'decresc', .6, 'sopro']],
  em: [['shape', .0, .11, 'cresc', .5, ''], ['spike', .12, 1.2, 'B1'], ['spike', .48, .7, 'B2'], ['spike', .56, .6, 'EA'], ['shape', .62, .9, 'decresc', .6, 'ruflar']]
};

AULAS.push({ id: '05-cardio-exame', n: 5, titulo: 'Cardiovascular: pulsos, ictus e bulhas', slides: [
{ cover: true, h: 'Sistema cardiovascular', sub: 'Pressão, pulsos, jugular, ictus e bulhas', say: 'Nesta aula vamos estudar o exame cardiovascular: a pressão arterial, os pulsos, a jugular, o ictus e as bulhas cardíacas.' },
{ eyebrow: 'Sequência na estação', h: 'Ordem do exame', b: [
  ['Paciente a 45°, médico à direita', 'Na estação, com o paciente em decúbito a quarenta e cinco graus e você à direita, siga uma ordem.'],
  ['PA → pulsos → jugular', 'Pressão arterial, pulsos e jugular.'],
  ['Inspeção e palpação do precórdio (ictus, frêmitos)', 'Depois inspeção e palpação do precórdio, procurando o ictus e frêmitos.'],
  ['Ausculta dos focos → manobras → perfusão', 'Em seguida a ausculta dos focos, as manobras e a perfusão periférica.']
]},
{ eyebrow: 'Pressão arterial', h: 'Técnica auscultatória', b: [
  ['Repouso de 5 min, braço na altura do coração', 'Para medir a pressão: repouso de cinco minutos, braço na altura do coração, manguito dois a três centímetros acima da dobra do cotovelo.'],
  ['Palpe a radial para estimar a sistólica', 'Palpe a radial e infle até ela sumir: isso estima a sistólica e evita o hiato auscultatório.'],
  ['Infle 20–30 mmHg acima e desinfle devagar', 'Infle vinte a trinta acima desse valor e desinfle devagar, dois milímetros por segundo.'],
  ['Fase I de Korotkoff = sistólica · fase V = diastólica', 'O primeiro som, fase um de Korotkoff, é a sistólica. O desaparecimento, fase cinco, é a diastólica. Hipertensão é a partir de catorze por nove.']
]},
{ eyebrow: 'Pulsos', h: 'O que o pulso conta', b: [
  ['2º e 3º dedos, 1 minuto, comparar os lados', 'Palpe o pulso com o segundo e o terceiro dedos, nunca com o polegar, por um minuto, comparando com o lado oposto. Nunca palpe as duas carótidas juntas.'],
  ['<b>Parvus et tardus</b>: pequeno e lento → estenose aórtica', 'Pulso pequeno e de subida lenta, o parvus et tardus, é da estenose aórtica.'],
  ['<b>Martelo d’água</b> (Corrigan): sobe e cai rápido → insuficiência aórtica', 'Pulso que sobe e cai bruscamente, o martelo d’água, é da insuficiência aórtica.'],
  ['<b>Paradoxal</b>: cai &gt; 10 mmHg na inspiração → tamponamento, asma grave', 'O pulso paradoxal cai mais de dez milímetros na inspiração: tamponamento ou asma grave.'],
  ['<b>Alternante</b>: forte e fraco → IC grave · déficit de pulso na FA', 'O alternante, forte e fraco, indica insuficiência cardíaca grave. E na fibrilação atrial, conte a frequência na ausculta, porque há déficit de pulso.']
]},
{ eyebrow: 'Pulso venoso', h: 'A jugular mostra o coração direito', b: [
  ['45°, jugular interna direita, só inspeção', 'A jugular se avalia só pela inspeção, a quarenta e cinco graus, olhando a jugular interna direita.'],
  ['PVC ≈ altura acima do ângulo de Louis + 5 cm', 'A pressão venosa é a altura do pulso acima do ângulo de Louis, mais cinco centímetros. Mais de três centímetros acima do Louis é estase.'],
  ['Refluxo hepatojugular: comprimir o fígado 10–30 s', 'No refluxo hepatojugular, você comprime o fígado por dez a trinta segundos. Se a jugular sobe e fica, a pressão venosa está alta: insuficiência cardíaca direita.'],
  ['Onda v gigante → insuficiência tricúspide · onda a em canhão → BAVT', 'Onda v gigante sugere insuficiência tricúspide; onda a em canhão sugere bloqueio atrioventricular total.']
]},
{ eyebrow: 'Ictus cordis', h: 'Onde, quanto e como', b: [
  ['Normal: 5º EIC esquerdo, linha hemiclavicular, 1–2 polpas', 'O ictus normal fica no quinto espaço intercostal esquerdo, na linha hemiclavicular, com uma a duas polpas digitais.'],
  ['<b>Propulsivo</b>: levanta a mão → hipertrofia (pressão)', 'Se ele levanta a mão a cada batimento, é propulsivo: hipertrofia por sobrecarga de pressão, como na hipertensão e na estenose aórtica.'],
  ['<b>Difuso e desviado</b>: ≥ 3 polpas → dilatação (volume)', 'Se ocupa três polpas ou mais e está desviado para baixo e para a esquerda, é difuso: dilatação, por sobrecarga de volume ou lesão do miocárdio.'],
  ['Frêmito = sopro de grau 4 ou mais', 'Palpe também os frêmitos: frêmito significa sopro de grau quatro ou mais.']
]},
{ eyebrow: 'Focos de ausculta', h: 'Cinco pontos de referência', b: [
  ['Aórtico: 2º EIC direito · Pulmonar: 2º EIC esquerdo', 'Os focos são pontos de referência, e não a posição das valvas. Aórtico no segundo espaço à direita do esterno; pulmonar no segundo à esquerda.'],
  ['Aórtico acessório: 3º EIC esquerdo', 'O aórtico acessório fica no terceiro espaço à esquerda.'],
  ['Tricúspide: borda esternal esquerda baixa', 'O tricúspide, na borda esternal esquerda baixa, perto do apêndice xifoide.'],
  ['Mitral: no ictus', 'E o mitral, no ictus. Diafragma para sons agudos; campânula para sons graves, como terceira e quarta bulhas e o ruflar.']
]},
{ eyebrow: 'Bulhas', h: 'Primeira e segunda bulha', vis: { fn: 'phono', arg: 'normal' }, b: [
  ['<b>B1</b> (TUM): fecham mitral e tricúspide → início da sístole', 'A primeira bulha, o TUM, é o fechamento da mitral e da tricúspide. Marca o início da sístole e coincide com o pulso carotídeo.'],
  ['<b>B2</b> (TÁ): fecham aórtica e pulmonar → início da diástole', 'A segunda bulha, o TÁ, é o fechamento da aórtica e da pulmonar. Marca o início da diástole.'],
  ['Sístole = B1 → B2 · Diástole = B2 → B1 (mais longa)', 'A sístole vai da primeira à segunda bulha. A diástole, da segunda até a próxima primeira, e é mais longa.'],
  ['B2 desdobra na inspiração (normal) · fixa = CIA', 'A segunda bulha se desdobra na inspiração, o que é normal. Desdobramento fixo sugere comunicação interatrial.']
]},
{ eyebrow: 'Terceira bulha', h: 'B3: ventrículo grande e cheio', vis: { fn: 'phono', arg: 'b3' }, b: [
  ['Logo <b>depois</b> de B2, no enchimento rápido', 'A terceira bulha vem logo depois da segunda, no enchimento rápido do ventrículo.'],
  ['Ventrículo dilatado, sobrecarga de volume', 'Ela aparece quando o ventrículo está dilatado e cheio, como na insuficiência cardíaca e na insuficiência mitral.'],
  ['Fisiológica em jovens, atletas e gestantes', 'Pode ser normal em crianças, jovens, atletas e gestantes.'],
  ['Campânula no foco mitral, decúbito lateral esquerdo', 'Ouça com a campânula no foco mitral, com o paciente deitado sobre o lado esquerdo.']
]},
{ eyebrow: 'Quarta bulha', h: 'B4: ventrículo rígido', vis: { fn: 'phono', arg: 'b4' }, b: [
  ['Logo <b>antes</b> de B1, na contração atrial', 'A quarta bulha vem logo antes da primeira, na contração do átrio.'],
  ['Átrio empurra contra parede grossa', 'Ela nasce quando o átrio empurra sangue contra um ventrículo rígido, de parede grossa.'],
  ['HAS, estenose aórtica, cardiomiopatia hipertrófica, isquemia', 'Hipertensão, estenose aórtica, cardiomiopatia hipertrófica e isquemia.'],
  ['Na fibrilação atrial: <b>nunca há B4</b>', 'E como depende da contração atrial, na fibrilação atrial nunca há quarta bulha. Parede grossa dá quarta bulha; cavidade grande dá terceira. Até a próxima!']
]}
]});

AULAS.push({ id: '06-cardio-sopros', n: 6, titulo: 'Sopros e valvopatias', slides: [
{ cover: true, h: 'Sopros e valvopatias', sub: 'Deduza qualquer sopro com duas perguntas', say: 'Nesta aula vamos aprender a deduzir qualquer sopro valvar com apenas duas perguntas, e depois passar pelas principais valvopatias.' },
{ eyebrow: 'As duas perguntas', h: 'Quando a valva abre? Ela não abre ou não fecha?', b: [
  ['Semilunares (aórtica, pulmonar) abrem na <b>sístole</b>', 'Primeira pergunta: quando a valva abre? As semilunares, aórtica e pulmonar, abrem na sístole, para o sangue sair.'],
  ['Atrioventriculares (mitral, tricúspide) abrem na <b>diástole</b>', 'As atrioventriculares, mitral e tricúspide, abrem na diástole, para o ventrículo encher.'],
  ['<b>Estenose</b> = não abre → soa quando deveria estar aberta', 'Segunda pergunta: estenose é a valva que não abre, então ela soa quando deveria estar aberta.'],
  ['<b>Insuficiência</b> = não fecha → soa quando deveria estar fechada', 'Insuficiência é a valva que não fecha, então ela soa quando deveria estar fechada.'],
  ['"EAIM na sístole, IAEM na diástole"', 'Daí o macete: estenose aórtica e insuficiência mitral na sístole; insuficiência aórtica e estenose mitral na diástole.']
]},
{ eyebrow: 'Descrição de um sopro', h: 'Os seis itens', b: [
  ['Momento no ciclo', 'Todo sopro se descreve por seis itens. Primeiro, o momento: sistólico, diastólico ou contínuo.'],
  ['Foco de maior intensidade', 'Segundo, o foco onde é mais intenso.'],
  ['Irradiação (segue o jato)', 'Terceiro, a irradiação, que segue a direção do jato de sangue.'],
  ['Intensidade de 1 a 6 (4 = frêmito)', 'Quarto, a intensidade, de um a seis. A partir de quatro, há frêmito palpável.'],
  ['Timbre e forma · manobras', 'E por fim o timbre e a forma, e as manobras que aumentam ou diminuem o sopro.']
]},
{ eyebrow: 'Estenose aórtica', h: 'Sopro de ejeção em diamante', vis: { fn: 'phono', arg: 'eao' }, b: [
  ['Mesossistólico, rude, em diamante, foco aórtico', 'Na estenose aórtica, o sangue é ejetado por uma valva estreita: sopro sistólico de ejeção, rude, em diamante, no foco aórtico.'],
  ['Irradia para as <b>carótidas</b>', 'Ele irradia para as carótidas, seguindo o jato.'],
  ['Parvus et tardus, pressão <b>convergente</b>', 'O pulso é pequeno e lento, e a pressão é convergente: a sistólica cai e a diastólica sobe.'],
  ['Ictus propulsivo, B4 · Síncope, angina, dispneia', 'O ventrículo hipertrofia: ictus propulsivo e quarta bulha. O idoso tem a tríade síncope, angina e dispneia ao esforço. O handgrip diminui esse sopro.']
]},
{ eyebrow: 'Insuficiência mitral', h: 'Holossistólico em platô', vis: { fn: 'phono', arg: 'im' }, b: [
  ['Holossistólico, encobre B1, foco mitral', 'Na insuficiência mitral, o sangue volta do ventrículo para o átrio durante toda a sístole: sopro holossistólico em platô, que encobre a primeira bulha.'],
  ['Irradia para a <b>axila</b>', 'Irradia para a axila, porque o átrio esquerdo fica atrás e acima.'],
  ['Ictus desviado, B3', 'O ventrículo recebe volume a mais e dilata: ictus desviado e terceira bulha.'],
  ['Handgrip aumenta', 'O handgrip, que aumenta a pós carga, aumenta o sopro.']
]},
{ eyebrow: 'Insuficiência aórtica', h: 'Protodiastólico aspirativo', vis: { fn: 'phono', arg: 'iao' }, b: [
  ['Logo após B2, em decrescendo, aspirativo', 'Na insuficiência aórtica, o sangue volta da aorta para o ventrículo na diástole: sopro logo após a segunda bulha, aspirativo, em decrescendo.'],
  ['Aórtico acessório; sentado, inclinado, em expiração', 'Ouça no foco aórtico acessório, com o paciente sentado, inclinado para a frente, em expiração.'],
  ['Pressão <b>divergente</b>, pulso de Corrigan', 'A pressão é divergente, como dezesseis por quatro, e o pulso é em martelo d’água.'],
  ['"Tudo pulsa": Musset, Quincke, Müller, Traube, Duroziez', 'E tudo pulsa: a cabeça balança, os capilares das unhas pulsam, a úvula pulsa, e a femoral faz barulho de tiro de pistola.']
]},
{ eyebrow: 'Estenose mitral', h: 'Estalido e ruflar diastólico', vis: { fn: 'phono', arg: 'em' }, b: [
  ['Febre reumática; mulher jovem', 'A estenose mitral é quase sempre sequela de febre reumática, em mulher jovem.'],
  ['B1 hiperfonética + estalido de abertura', 'Ouve-se primeira bulha forte e um estalido de abertura logo após a segunda.'],
  ['Ruflar mesodiastólico, campânula, decúbito lateral esquerdo', 'Depois um ruflar grave no meio da diástole, melhor com campânula em decúbito lateral esquerdo, com reforço antes da primeira bulha.'],
  ['AE dilata: fibrilação atrial, rouquidão (Ortner), hemoptise', 'O átrio dilata: fibrilação atrial, rouquidão por compressão do nervo laríngeo, e hemoptise. O ventrículo é poupado, então o ictus é normal.']
]},
{ eyebrow: 'Lado direito', h: 'Rivero-Carvallo', vis: { fn: 'heart', arg: ['tricuspide', 'insuficiencia'] }, b: [
  ['Inspiração profunda ↑ retorno ao coração direito', 'Como saber se o sopro é do lado direito? Na inspiração profunda chega mais sangue ao coração direito.'],
  ['Sopro que <b>aumenta</b> na inspiração = lado direito', 'Então o sopro que aumenta na inspiração é do lado direito: é o sinal de Rivero Carvallo.'],
  ['Insuficiência tricúspide: igual à mitral, mas ↑ na inspiração', 'A insuficiência tricúspide soa igual à mitral, mas aumenta na inspiração e vem com onda v gigante na jugular e fígado pulsátil.'],
  ['Causa comum: funcional (hipertensão pulmonar); droga IV → endocardite', 'A causa mais comum é funcional, pela hipertensão pulmonar. Em usuário de droga injetável, pense em endocardite.']
]},
{ eyebrow: 'Manobras', h: 'Como diferenciar na prova', b: [
  ['<b>Handgrip</b>: ↑ IM e IAo · ↓ EAo', 'O handgrip aumenta os sopros de insuficiência mitral e aórtica, e diminui o da estenose aórtica.'],
  ['<b>Decúbito lateral esquerdo</b>: mitrais, B3, B4', 'O decúbito lateral esquerdo realça os fenômenos mitrais e as terceira e quarta bulhas.'],
  ['<b>Sentado inclinado em expiração</b>: IAo, atrito', 'Sentado, inclinado, em expiração, realça a insuficiência aórtica e o atrito pericárdico.'],
  ['<b>Febre + sopro novo = endocardite</b>', 'E lembre: febre com sopro novo, pense em endocardite. Até a próxima!']
]}
]});

AULAS.push({ id: '07-abdome-exame', n: 7, titulo: 'Abdome: semiotécnica', slides: [
{ cover: true, h: 'Exame do abdome', sub: 'Inspeção, ausculta, percussão, palpação, fígado, baço e ascite', say: 'Nesta aula vamos estudar o exame do abdome: a sequência, a topografia, cada etapa do exame, o fígado, o baço e a pesquisa de ascite.' },
{ eyebrow: 'A regra', h: 'No abdome, a ordem inverte', b: [
  ['Inspeção → <b>ausculta</b> → percussão → palpação', 'No abdome, a ordem muda: inspeção, ausculta, percussão e só depois palpação.'],
  ['Palpar antes altera os ruídos hidroaéreos', 'Isso porque mexer no abdome estimula o intestino e altera os ruídos.'],
  ['Decúbito dorsal, braços ao lado, xifoide ao púbis exposto', 'Paciente deitado, braços ao lado do corpo, pernas esticadas, travesseiro baixo, abdome exposto do xifoide ao púbis.'],
  ['Mãos aquecidas; a área dolorosa por último', 'Aqueça as mãos, examine à direita do paciente e deixe a área dolorosa por último.']
]},
{ eyebrow: 'Topografia', h: 'Nove regiões', vis: { fn: 'abd', arg: ['normal', 'medio'] }, b: [
  ['Hipocôndrio D: fígado e vesícula', 'O abdome se divide em nove regiões. No hipocôndrio direito ficam o fígado e a vesícula.'],
  ['Epigástrio: estômago, lobo esquerdo do fígado', 'No epigástrio, o estômago e o lobo esquerdo do fígado.'],
  ['Hipocôndrio E: baço · Flancos: cólons', 'No hipocôndrio esquerdo, o baço. Nos flancos, os cólons ascendente e descendente.'],
  ['FID: ceco e apêndice · FIE: sigmoide · Hipogástrio: bexiga', 'Na fossa ilíaca direita, o ceco e o apêndice. Na esquerda, o sigmoide. No hipogástrio, a bexiga.']
]},
{ eyebrow: 'Inspeção', h: 'Forma, cicatrizes, veias', b: [
  ['Plano, globoso, <b>batráquio</b> (ascite), escavado', 'Na inspeção, observe a forma: plano, globoso, batráquio, com flancos abaulados como na ascite, ou escavado, na caquexia.'],
  ['Cicatrizes → aderências → obstrução', 'Procure cicatrizes: cirurgia prévia significa risco de aderências e obstrução.'],
  ['Colateral <b>tipo porta</b>: umbigo, fluxo centrífugo', 'Na circulação colateral tipo porta, as veias saem do umbigo, para cima acima dele e para baixo abaixo dele: hipertensão portal.'],
  ['Peristaltismo visível com cólica → obstrução', 'E peristaltismo visível com cólica e vômitos sugere obstrução intestinal.']
]},
{ eyebrow: 'Ausculta', h: 'Ruídos hidroaéreos e sopros', b: [
  ['Centro dos quadrantes, cerca de 15 segundos', 'Ausculte o centro de cada quadrante por cerca de quinze segundos.'],
  ['Normal: 5 a 34 por minuto', 'O normal é de cinco a trinta e quatro ruídos por minuto.'],
  ['<b>Abolidos</b>: nada em 3 a 5 min → íleo, peritonite', 'Abolidos, sem nada em três a cinco minutos: íleo paralítico ou peritonite.'],
  ['<b>Metálicos</b> → obstrução · todo sopro é patológico', 'Ruídos de timbre metálico sugerem obstrução. E qualquer sopro na aorta ou nas renais é patológico.']
]},
{ eyebrow: 'Percussão', h: 'Timpanismo, fígado e Traube', b: [
  ['Normal: timpanismo, macicez no fígado', 'Na percussão, o normal é timpanismo, com macicez na área do fígado.'],
  ['Hepatimetria: 6 a 12 cm na linha hemiclavicular', 'A hepatimetria, na linha hemiclavicular direita, vai de seis a doze centímetros.'],
  ['Traube maciço / Castell + → esplenomegalia', 'O espaço de Traube é normalmente timpânico. Se ficar maciço, ou se o sinal de Castell for positivo, pense em esplenomegalia.'],
  ['<b>Jobert</b>: timpanismo no fígado → perfuração', 'E timpanismo onde deveria haver macicez hepática é o sinal de Jobert: ar livre, víscera perfurada.']
]},
{ eyebrow: 'Palpação', h: 'Superficial e profunda', b: [
  ['Superficial: dor, defesa, hérnias', 'Na palpação superficial, avalie dor, defesa e hérnias.'],
  ['Defesa involuntária → peritonite; generalizada = tábua', 'A defesa involuntária indica irritação do peritônio. Generalizada, vira o abdome em tábua.'],
  ['Profunda deslizante: massas, ceco, sigmoide', 'Na profunda, deslizante, você procura massas e sente o ceco e o sigmoide.'],
  ['<b>Blumberg</b>: dor à descompressão → peritonite', 'E o sinal de Blumberg: dor ao soltar bruscamente a mão, sinal de irritação peritoneal. Avise o paciente antes.']
]},
{ eyebrow: 'Fígado', h: 'Palpando a borda hepática', b: [
  ['Lemos-Torres (mão na loja renal) ou Mathieu (em garra)', 'Palpe o fígado pela técnica de Lemos Torres, com a mão esquerda na loja renal, ou de Mathieu, com as mãos em garra.'],
  ['Normal: borda fina, lisa, indolor', 'O normal é borda fina, lisa e indolor.'],
  ['Congestão (IC): liso, doloroso, rombo', 'Na congestão da insuficiência cardíaca: liso, doloroso, de borda romba.'],
  ['Cirrose: nodular, indolor · Hepatite: liso, doloroso, fino', 'Na cirrose: nodular e indolor. Na hepatite: liso, doloroso e de borda fina.']
]},
{ eyebrow: 'Ascite', h: 'Três sinais, três volumes', vis: { fn: 'abd', arg: ['ascite', 'medio'] }, b: [
  ['Líquido desce para os flancos; alças flutuam no centro', 'Na ascite, em decúbito, o líquido desce para os flancos e as alças com gás flutuam no centro.'],
  ['<b>Macicez móvel</b>: o mais sensível (médio volume)', 'A macicez móvel, que muda de lugar quando o paciente vira, é o sinal mais sensível, já no médio volume.'],
  ['<b>Skoda</b>: percuta do epigástrio para a periferia', 'O semicírculo de Skoda é a linha entre timpanismo e macicez. Percuta a partir do epigástrio, e não do umbigo.'],
  ['<b>Piparote</b>: só em grande volume', 'E o piparote, a onda líquida de um flanco ao outro, só aparece em ascite volumosa. Até a próxima!']
]}
]});

AULAS.push({ id: '08-abdome-agudo', n: 8, titulo: 'Abdome agudo e sinais semiológicos', slides: [
{ cover: true, h: 'Abdome agudo', sub: 'Os cinco tipos e os sinais que confirmam', say: 'Nesta aula vamos estudar o abdome agudo: os cinco tipos, as doenças principais e os sinais semiológicos que você precisa saber pesquisar e interpretar.' },
{ eyebrow: 'Dor', h: 'Visceral × parietal', b: [
  ['Visceral: surda, mal localizada, linha média', 'A dor visceral é surda, mal localizada, sentida na linha média. É como a dor começa.'],
  ['Parietal: aguda, bem localizada', 'A dor parietal é aguda e bem localizada. Aparece quando a inflamação atinge o peritônio da parede.'],
  ['Apendicite: umbigo → fossa ilíaca direita', 'É por isso que a apendicite começa no umbigo e depois migra para a fossa ilíaca direita.']
]},
{ eyebrow: 'Classificação', h: 'Os cinco tipos', b: [
  ['<b>Inflamatório</b>: dor localizada + febre', 'O abdome agudo inflamatório tem dor localizada e febre: apendicite, colecistite, diverticulite, pancreatite e pielonefrite.'],
  ['<b>Perfurativo</b>: súbito, tábua, Jobert', 'O perfurativo é súbito, com abdome em tábua e sinal de Jobert: úlcera perfurada.'],
  ['<b>Obstrutivo</b>: cólica, distensão, parada de gases', 'O obstrutivo tem cólica, distensão, vômitos e parada de eliminação de gases e fezes.'],
  ['<b>Hemorrágico</b>: dor + choque', 'O hemorrágico tem dor com sinais de choque: gravidez ectópica rota, aneurisma roto, trauma.'],
  ['<b>Isquêmico</b>: dor desproporcional ao exame', 'E o isquêmico tem dor muito maior do que o exame mostra, como no idoso com fibrilação atrial.']
]},
{ eyebrow: 'Apendicite', h: 'Fossa ilíaca direita', vis: { fn: 'abd', arg: ['apendicite', 'medio'] }, b: [
  ['Ponto de McBurney: 1/3 da espinha ilíaca até o umbigo', 'O ponto de McBurney fica a um terço da distância entre a espinha ilíaca anterior e o umbigo.'],
  ['<b>Blumberg</b>: dor à descompressão', 'Blumberg: dor ao soltar a compressão.'],
  ['<b>Rovsing</b>: palpar a esquerda dói à direita (gases)', 'Rovsing: palpar a fossa ilíaca esquerda empurra gases até o ceco e dói à direita.'],
  ['<b>Psoas</b> (retrocecal), <b>Obturador</b> (pélvica), <b>Lenander</b>', 'Psoas, para o apêndice retrocecal; obturador, para o pélvico; e Lenander, quando a temperatura retal passa a axilar em mais de um grau.']
]},
{ eyebrow: 'Vias biliares', h: 'Murphy, Charcot e Courvoisier', vis: { fn: 'abd', arg: ['colecistite', 'medio'] }, b: [
  ['<b>Colecistite</b>: Murphy (parada da inspiração no ponto cístico)', 'Na colecistite, a dor no hipocôndrio direito vem após comida gordurosa. O sinal de Murphy é a parada da inspiração ao comprimir o ponto cístico.'],
  ['<b>Colangite</b>: Charcot = febre + icterícia + dor', 'Na colangite, há a tríade de Charcot: febre, icterícia e dor. Com choque e confusão, vira a pêntade de Reynolds.'],
  ['<b>Courvoisier</b>: vesícula palpável e indolor em ictérico', 'E vesícula palpável e indolor em paciente ictérico é o sinal de Courvoisier: tumor de cabeça de pâncreas.']
]},
{ eyebrow: 'Pâncreas e rim', h: 'Cullen, Grey-Turner e Giordano', vis: { fn: 'abd', arg: ['pancreatite', 'medio'] }, b: [
  ['Pancreatite: dor epigástrica em faixa para o dorso', 'Na pancreatite, a dor é epigástrica, em faixa, irradiando para o dorso, em etilistas ou com cálculos.'],
  ['<b>Cullen</b> (umbigo) e <b>Grey-Turner</b> (flancos)', 'Equimose em volta do umbigo é o sinal de Cullen; nos flancos, de Grey Turner. Indicam a forma grave, hemorrágica.'],
  ['Pielonefrite: <b>Giordano</b> (punho-percussão lombar)', 'Na pielonefrite, com febre e calafrios, a punho percussão lombar dói: sinal de Giordano.'],
  ['Febre separa pielonefrite de cólica renal', 'E a febre separa a pielonefrite da cólica renal.']
]},
{ eyebrow: 'Perfuração', h: 'Jobert × Chilaiditi', vis: { fn: 'abd', arg: ['perfuracao', 'medio'] }, b: [
  ['Úlcera perfurada: dor súbita "em apunhalada"', 'Na úlcera perfurada, a dor é súbita, como uma facada.'],
  ['Tábua, Blumberg difuso, RHA abolidos', 'O abdome fica em tábua, com Blumberg difuso e ruídos abolidos.'],
  ['<b>Jobert</b>: ar livre sobre o fígado', 'A percussão mostra timpanismo sobre o fígado: o sinal de Jobert.'],
  ['<b>Chilaiditi</b>: alça entre fígado e diafragma, sem perfuração', 'O diferencial benigno é o Chilaiditi: uma alça intestinal entre o fígado e o diafragma, sem peritonite.']
]},
{ eyebrow: 'Obstrução', h: 'O intestino que luta', vis: { fn: 'abd', arg: ['obstrucao', 'medio'] }, b: [
  ['Tríade: cólica + vômitos + peristaltismo visível', 'Na obstrução, a tríade é dor em cólica, vômitos e peristaltismo visível.'],
  ['RHA metálicos, hipertimpanismo', 'Os ruídos são metálicos e a percussão é hipertimpânica.'],
  ['Alta: vômitos precoces · baixa: distensão, vômito fecaloide', 'Obstrução alta dá vômitos precoces; baixa dá distensão e vômito fecaloide tardio.'],
  ['Defesa + RHA abolidos = sofrimento de alça', 'Se aparecerem defesa e ruídos abolidos, há sofrimento da alça. É alarme. Até a próxima!']
]}
]});

AULAS.push({ id: '09-estacao-osce', n: 9, titulo: 'Como fazer uma estação OSCE', slides: [
{ cover: true, h: 'A estação OSCE', sub: 'Roteiro do início ao fim, e como apresentar o raciocínio', say: 'Nesta última aula vamos juntar tudo: como conduzir uma estação OSCE do começo ao fim, o que falar e como apresentar o raciocínio clínico.' },
{ eyebrow: 'Antes de entrar', h: 'Leia a porta com atenção', b: [
  ['Quem é o paciente? Qual a tarefa?', 'Antes de entrar, leia a porta: quem é o paciente e qual é exatamente a tarefa.'],
  ['Só anamnese? Só exame? Os dois?', 'Pode ser só anamnese, só exame de um sistema, ou os dois com hipótese no final.'],
  ['Controle o tempo', 'Controle o tempo: deixe o último minuto para a síntese.']
]},
{ eyebrow: 'Abertura', h: 'Os pontos que todo checklist cobra', b: [
  ['Higienizar as mãos', 'Higienize as mãos.'],
  ['Apresentar-se e confirmar o nome', 'Apresente-se e confirme o nome do paciente.'],
  ['Explicar e pedir permissão', 'Explique o que vai fazer e peça permissão.'],
  ['Privacidade e exposição adequada', 'Garanta privacidade e exponha só o necessário, respeitando o pudor.'],
  ['Aquecer mãos e estetoscópio', 'E aqueça as mãos e o estetoscópio.']
]},
{ eyebrow: 'Durante o exame', h: 'Verbalize tudo', b: [
  ['Fale cada manobra em voz alta', 'Durante o exame, fale cada manobra em voz alta: o examinador pontua o que ouve.'],
  ['Compare os lados', 'Compare sempre os dois lados.'],
  ['Siga a ordem do sistema', 'Siga a ordem de cada sistema: no tórax, inspeção, palpação, percussão e ausculta; no abdome, ausculta antes de percutir e palpar.'],
  ['Avise antes das manobras dolorosas', 'E avise antes de qualquer manobra que possa doer, como o Blumberg.']
]},
{ eyebrow: 'Descrição', h: 'Descreva antes de interpretar', b: [
  ['Gradue: +/4+', 'Ao descrever, gradue as alterações em cruzes.'],
  ['Localize: lado, região, espaço intercostal', 'Localize: lado, região e espaço intercostal.'],
  ['Termos técnicos', 'Use termos técnicos.'],
  ['Exemplo: "Macicez, FTV abolido e MV abolido no terço inferior do hemitórax direito"', 'Por exemplo: macicez, frêmito toracovocal abolido e murmúrio vesicular abolido no terço inferior do hemitórax direito.']
]},
{ eyebrow: 'Síntese', h: 'Pistas → síndromes → hipótese', b: [
  ['Junte as <b>pistas-chave</b>', 'No final, organize o raciocínio em três degraus. Primeiro, as pistas chave da história e do exame.'],
  ['Nomeie as <b>síndromes</b>', 'Segundo, as síndromes que essas pistas formam, como síndrome de derrame pleural ou insuficiência cardíaca congestiva.'],
  ['Dê a <b>hipótese</b> e um diferencial', 'Terceiro, a hipótese principal e um diferencial, dizendo o que fala contra ele.'],
  ['"O paciente apresenta…, que compõem…; minha hipótese é… porque…"', 'Uma frase que funciona: o paciente apresenta tais achados, que compõem tais síndromes; minha hipótese é esta, porque.']
]},
{ eyebrow: 'Encerramento', h: 'Termine bem', b: [
  ['Cubra o paciente e agradeça', 'Ao terminar, cubra o paciente e agradeça.'],
  ['Explique os próximos passos', 'Explique os próximos passos em linguagem simples.'],
  ['Higienize as mãos de novo', 'E higienize as mãos de novo.'],
  ['Treine no simulador: sorteie uma estação', 'Agora é com você: entre no simulador da plataforma, sorteie uma estação e treine com o cronômetro. Boa prova!']
]}
]});

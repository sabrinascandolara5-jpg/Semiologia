/* Estações estilo prova: caso completo + 5 tarefas (demonstrar, identificar som descrito, explicar, listar) */
(function () {
'use strict';
const A = () => window.SEMIO;
const TIPO = { demonstrar: 'Demonstre em voz alta', identificar: 'Identifique', explicar: 'Explique', listar: 'Cite' };

const PROVAS = [
/* ================= CARDIO ================= */
{ id: 'im-congestao', sist: 'cardio', caiu: true, titulo: 'Insuficiência mitral com congestão pulmonar',
  caso: '<b>J.R.M., 64 anos, masculino.</b> Infarto há 2 anos. Há 3 meses com dispneia progressiva, hoje aos pequenos esforços, ortopneia (3 travesseiros) e dispneia paroxística noturna. Exame: PA 110 × 70 mmHg, FC 96 bpm, FR 24 irpm. Ictus no 6º EIC esquerdo na linha axilar anterior, difuso. Estertores finos nas bases pulmonares. <b>Diagnóstico: insuficiência mitral com insuficiência cardíaca esquerda.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Indique e demonstre os focos de ausculta cardíaca.',
    pontos: ['Higieniza as mãos, explica e pede permissão; paciente em decúbito dorsal, tórax exposto, examinador à direita', 'Localiza o ângulo de Louis (2ª costela) para contar os espaços intercostais', 'Foco aórtico: 2º EIC direito, junto ao esterno', 'Foco pulmonar: 2º EIC esquerdo, junto ao esterno', 'Foco aórtico acessório: 3º EIC esquerdo, junto ao esterno', 'Foco tricúspide: borda esternal esquerda baixa / base do xifoide', 'Foco mitral: 5º EIC esquerdo na linha hemiclavicular (ictus)', 'Usa diafragma e campânula; palpa o pulso carotídeo para identificar a B1', 'Ausculta também em decúbito lateral esquerdo (foco mitral) e procura irradiação (axila, pescoço)'],
    modelo: 'Os focos são pontos de referência acústicos, não a posição das valvas. Ausculte todo o precórdio, axila, dorso e pescoço.' },
  { tipo: 'identificar', q: 'Na ausculta do foco mitral você ouve: <i>"sopro que começa junto com a B1 e ocupa toda a sístole até a B2, de intensidade constante, encobrindo a B1, que irradia para a axila e aumenta com o handgrip"</i>. Que sopro é esse?',
    o: ['Holossistólico regurgitativo de insuficiência mitral', 'Mesossistólico de ejeção de estenose aórtica', 'Protodiastólico de insuficiência aórtica', 'Ruflar mesodiastólico de estenose mitral'], a: 0,
    modelo: 'Holossistólico (B1 → B2), em platô, foco mitral, irradiação para a axila (o AE fica acima e atrás), aumenta com handgrip (↑ pós-carga → mais refluxo). A B1 fica hipofonética porque a valva não fecha bem.' },
  { tipo: 'explicar', q: 'Descreva o sopro da insuficiência mitral como faria para o examinador.',
    pontos: ['Sistólico, holossistólico (de B1 a B2)', 'Regurgitativo, em platô, encobre a B1', 'Mais intenso no foco mitral', 'Irradia para a axila (e região interescapular)', 'Intensidade graduada (ex.: +3/+6, sem frêmito)', 'Aumenta com handgrip; pode haver B3'],
    modelo: '"Sopro sistólico, holossistólico, regurgitativo, em platô, +3/+6, mais audível no foco mitral, com irradiação para a axila, que aumenta com a manobra de handgrip; presença de B3."' },
  { tipo: 'explicar', q: 'Explique por que esse paciente tem congestão pulmonar (estertores finos nas bases).',
    pontos: ['A valva mitral não fecha na sístole e o sangue reflui do VE para o AE', 'Aumentam o volume e a pressão no átrio esquerdo', 'A pressão é transmitida às veias e capilares pulmonares', 'Aumento da pressão hidrostática capilar → transudação de líquido para interstício e alvéolos', 'O líquido se acumula nas bases (gravidade)', 'Estertores finos = abertura de alvéolos com líquido no fim da inspiração', 'Clínica: dispneia, ortopneia (ao deitar, mais sangue volta ao pulmão) e DPN'],
    modelo: 'Refluxo VE → AE → pressão alta no AE e nas veias pulmonares → edema intersticial/alveolar nas bases → crepitantes finos que não mudam com a tosse. O VE recebe mais volume e dilata (ictus desviado, B3): insuficiência cardíaca esquerda.' },
  { tipo: 'demonstrar', q: 'Demonstre a ausculta pulmonar.',
    pontos: ['Paciente sentado, tórax despido, respirando pela boca, profundo e sem ruído', 'Diafragma do estetoscópio direto na pele', 'Começa pela face posterior, dos ápices às bases', 'Compara pontos simétricos alternando os lados (zigue-zague)', 'Ausculta as regiões laterais (axilas) e a face anterior', 'Descreve: MV presente/diminuído/abolido, simétrico, ruídos adventícios e onde', 'Pesquisa ressonância vocal ("33") se houver alteração'],
    modelo: 'Neste paciente: "MV presente e simétrico, com estertores finos em bases bilateralmente."' }
  ] },
{ id: 'eao', sist: 'cardio', titulo: 'Estenose aórtica',
  caso: '<b>A.G.L., 74 anos.</b> Síncope ao subir escadas, angina aos esforços há 6 meses e dispneia aos médios esforços. PA 110 × 90 mmHg. Pulso carotídeo de pequena amplitude e ascensão lenta. Ictus propulsivo e sustentado, no 5º EIC na LHC. <b>Diagnóstico: estenose aórtica calcificada.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a palpação dos pulsos radial e carotídeo.',
    pontos: ['Explica e pede permissão; paciente sentado ou deitado', 'Usa as polpas do 2º e 3º dedos (nunca o polegar)', 'Radial: no punho, lateral ao tendão do flexor radial do carpo', 'Conta por 1 minuto e avalia ritmo', 'Compara com o lado oposto (simetria)', 'Carotídeo: borda medial do esternocleidomastoideo, um lado de cada vez, sem comprimir forte', 'Descreve frequência, ritmo, amplitude, formato e simetria'],
    modelo: 'Neste caso o carotídeo é <b>parvus et tardus</b> (pequeno e de subida lenta). Nunca palpe as duas carótidas ao mesmo tempo.' },
  { tipo: 'identificar', q: 'No foco aórtico: <i>"sopro que começa logo após a B1, cresce e decresce (diamante), termina antes da B2, de timbre rude, irradia para o pescoço e diminui com o handgrip"</i>. Qual é?',
    o: ['Insuficiência mitral', 'Estenose aórtica', 'Insuficiência aórtica', 'Persistência do canal arterial'], a: 1,
    modelo: 'Mesossistólico de ejeção em diamante = estenose de semilunar. Foco aórtico + irradiação para as carótidas = estenose aórtica. O handgrip aumenta a pós-carga e reduz o gradiente, diminuindo o sopro.' },
  { tipo: 'explicar', q: 'Explique a pressão convergente e o pulso parvus et tardus.',
    pontos: ['A valva estreita dificulta a saída de sangue do VE', 'Sai menos volume por batimento → a sistólica cai', 'Fica mais sangue nas artérias na diástole → a diastólica sobe', 'Pressão de pulso estreita (convergente), ex.: 110 × 90', 'Parvus = pequena amplitude (pouco volume)', 'Tardus = subida lenta (ejeção difícil)'],
    modelo: 'Estenose aórtica: sistólica ↓, diastólica ↑, pressão de pulso pequena. Na insuficiência aórtica é o contrário (divergente, Corrigan).' },
  { tipo: 'explicar', q: 'Explique o ictus propulsivo e a B4 nesse paciente.',
    pontos: ['O VE ejeta contra uma resistência alta (sobrecarga de pressão)', 'Hipertrofia concêntrica: parede grossa, cavidade normal', 'Ictus propulsivo e sustentado, no lugar (não desviado)', 'O VE hipertrofiado fica rígido, pouco complacente', 'A B4 é a contração atrial empurrando sangue contra o VE rígido (pré-sístole)'],
    modelo: 'Parede grossa → B4 e ictus propulsivo. Cavidade grande (volume) → B3 e ictus desviado/difuso.' },
  { tipo: 'listar', q: 'Cite a tríade de sintomas da estenose aórtica e explique um deles.',
    pontos: ['Síncope', 'Angina', 'Dispneia (de esforço)', 'Explica: no esforço o débito não consegue subir pela valva estreita → hipofluxo cerebral (síncope) ou coronariano (angina), ou pressão volta ao pulmão (dispneia)'],
    modelo: 'Tríade SAD: Síncope, Angina, Dispneia. Ocorre aos esforços.' }
  ] },
{ id: 'iao', sist: 'cardio', titulo: 'Insuficiência aórtica',
  caso: '<b>R.S.P., 38 anos.</b> Endocardite tratada há 2 anos. Sente o coração "bater no pescoço" e a cabeça balançar. Dispneia aos médios esforços. PA 160 × 40 mmHg. Ictus no 6º EIC esquerdo, LAA, difuso e hiperdinâmico. <b>Diagnóstico: insuficiência aórtica.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a aferição da pressão arterial pelo método auscultatório.',
    pontos: ['Paciente em repouso por 5 min, sentado, pernas descruzadas, bexiga vazia', 'Braço na altura do coração, palma para cima, sem roupa apertando', 'Manguito de tamanho adequado, 2–3 cm acima da fossa cubital', 'Palpa a radial e infla até o pulso sumir (estima a PAS)', 'Desinfla, posiciona o estetoscópio sobre a artéria braquial', 'Infla 20–30 mmHg acima da PAS estimada', 'Desinfla a 2–3 mmHg por segundo', 'PAS = fase I de Korotkoff (aparecimento); PAD = fase V (desaparecimento)', 'Mede nos dois braços na primeira avaliação'],
    modelo: 'Estimar pela palpação evita o hiato auscultatório. Manguito pequeno dá PA falsamente alta.' },
  { tipo: 'identificar', q: 'No foco aórtico acessório: <i>"sopro que começa logo após a B2, agudo, aspirativo, em decrescendo, melhor com o paciente sentado inclinado para frente em expiração, irradiando para o ápice"</i>. Qual é?',
    o: ['Estenose mitral', 'Insuficiência aórtica', 'Estenose aórtica', 'Atrito pericárdico'], a: 1,
    modelo: 'Protodiastólico aspirativo em decrescendo = insuficiência de semilunar; foco aórtico acessório = insuficiência aórtica.' },
  { tipo: 'explicar', q: 'Explique a pressão divergente (160 × 40).',
    pontos: ['A valva aórtica não fecha na diástole e o sangue volta da aorta para o VE', 'O VE recebe mais volume, dilata e ejeta um volume sistólico grande → sistólica sobe', 'Na diástole a aorta se esvazia de volta para o VE → diastólica cai', 'Pressão de pulso alargada (divergente)', 'Daí o pulso em martelo d’água (Corrigan): sobe e cai rápido'],
    modelo: 'Muito volume ejetado + muito volume que volta = pressão divergente e "tudo pulsa".' },
  { tipo: 'listar', q: 'Cite 3 sinais periféricos da insuficiência aórtica e o que significam.',
    pontos: ['Musset: cabeça balança com os batimentos', 'Corrigan: pulso em martelo d’água / carótidas pulsando', 'Quincke: pulsação capilar no leito ungueal', 'Müller (úvula), Traube (tiro de pistola na femoral), Duroziez (duplo sopro femoral), Hill (PAS poplítea > braquial)'],
    modelo: 'Basta citar 3. Todos vêm do grande volume ejetado com colapso diastólico.' },
  { tipo: 'demonstrar', q: 'Demonstre a posição e a manobra para auscultar melhor esse sopro.',
    pontos: ['Paciente sentado, tórax inclinado para frente', 'Pede expiração profunda e pausa (apneia expiratória)', 'Diafragma no foco aórtico acessório (3º EIC esquerdo) e aórtico', 'Cita que o handgrip aumenta o sopro'],
    modelo: 'Inclinar para frente aproxima a base do coração da parede torácica.' }
  ] },
{ id: 'em', sist: 'cardio', titulo: 'Estenose mitral',
  caso: '<b>S.M.O., 34 anos.</b> Febre reumática na infância. Dispneia aos pequenos esforços, ortopneia, palpitações irregulares, dois episódios de hemoptise e rouquidão. Rubor malar. Pulso irregularmente irregular. <b>Diagnóstico: estenose mitral reumática com fibrilação atrial.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a inspeção e a palpação do ictus cordis.',
    pontos: ['Paciente em decúbito dorsal, tórax exposto, examinador à direita', 'Inspeciona o precórdio (luz tangencial) procurando o ictus', 'Palpa com a palma e localiza com as polpas no 5º EIC esquerdo, LHC', 'Se não encontrar, coloca em decúbito lateral esquerdo', 'Descreve localização (EIC e linha), extensão em polpas, intensidade/propulsão, ritmo', 'Palpa frêmitos nos focos'],
    modelo: 'Na estenose mitral o ictus é normal ou pouco palpável (o VE é poupado); pode haver frêmito diastólico apical.' },
  { tipo: 'identificar', q: 'No foco mitral, com campânula em decúbito lateral esquerdo: <i>"B1 hiperfonética, um som seco logo após a B2, seguido de um ruído grave, em ruflar, no meio da diástole, sem irradiação"</i>. O que é?',
    o: ['Insuficiência mitral com B3', 'Estenose mitral: estalido de abertura + ruflar mesodiastólico', 'Insuficiência aórtica com Austin-Flint', 'Estenose aórtica'], a: 1,
    modelo: 'B1 hiperfonética + estalido de abertura + ruflar mesodiastólico = estenose mitral. Quanto mais perto da B2 o estalido, mais grave. O reforço pré-sistólico some na FA.' },
  { tipo: 'explicar', q: 'Explique por que ela tem dispneia e hemoptise, mas o ictus é normal.',
    pontos: ['A mitral estreita impede o esvaziamento do AE na diástole', 'O sangue represa no AE e a pressão sobe nas veias pulmonares', 'Congestão pulmonar → dispneia e ortopneia', 'Hipertensão venosa pulmonar rompe vasos brônquicos/capilares → hemoptise', 'O VE recebe pouco sangue, sem sobrecarga → ictus normal'],
    modelo: 'O problema está antes do VE: tudo vem do sangue preso no átrio esquerdo.' },
  { tipo: 'listar', q: 'Cite 3 consequências da dilatação do átrio esquerdo.',
    pontos: ['Fibrilação atrial (pulso irregular, déficit de pulso)', 'Rouquidão por compressão do laríngeo recorrente (sinal de Ortner)', 'Desaparecimento do reforço pré-sistólico do ruflar (na FA)', 'Risco de trombo e embolia'],
    modelo: 'AE grande desorganiza a condução elétrica (FA) e comprime estruturas vizinhas (Ortner).' },
  { tipo: 'demonstrar', q: 'Demonstre a manobra para ouvir melhor esse sopro.',
    pontos: ['Decúbito lateral esquerdo (manobra de Pachón)', 'Campânula, apoiada levemente, no ictus/foco mitral', 'Cita que o exercício (↑ FC) aumenta o ruflar', 'Explica que é som grave → campânula'],
    modelo: 'DLE aproxima o ápice da parede. Campânula capta sons graves (ruflar, B3, B4).' }
  ] },
{ id: 'ic-direita', sist: 'cardio', titulo: 'Insuficiência cardíaca congestiva',
  caso: '<b>E.F.N., 62 anos.</b> Doença de Chagas. Dispneia aos pequenos esforços, ortopneia, DPN, edema vespertino de MMII e dor em peso no hipocôndrio direito. Ictus desviado e difuso, B3, estertores finos nas bases, fígado doloroso a 3 cm do RCD, edema +3/+4 em MMII. <b>Diagnóstico: IC congestiva por miocardiopatia chagásica.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a avaliação da turgência jugular e a estimativa da pressão venosa.',
    pontos: ['Paciente em decúbito com cabeceira a 45°', 'Cabeça relaxada e levemente voltada para a esquerda', 'Observa a veia jugular interna direita (só inspeção), com luz tangencial', 'Identifica o ponto mais alto do pulso venoso', 'Mede a altura vertical acima do ângulo de Louis', 'PVC ≈ altura + 5 cm; > 3 cm acima do Louis = turgência patológica', 'Diferencia do pulso arterial: venoso não é palpável e tem mais de uma onda por ciclo'],
    modelo: 'O ângulo de Louis fica ~5 cm acima do átrio direito com o paciente a 45°.' },
  { tipo: 'demonstrar', q: 'Demonstre a pesquisa do refluxo hepatojugular.',
    pontos: ['Paciente a 45°, respirando normalmente (sem Valsalva)', 'Comprime o hipocôndrio direito com a palma por 10–30 s', 'Observa a jugular durante a compressão', 'Positivo: a jugular sobe ≥ 3 cm e se mantém', 'Interpreta: pressão venosa elevada / IC direita'],
    modelo: 'Avise que vai comprimir e observe o rosto do paciente (o fígado congesto dói).' },
  { tipo: 'identificar', q: 'Com campânula no foco mitral, em DLE: <i>"som grave, logo após a B2, no início da diástole, formando um ritmo de três tempos (TA-TA-TU)"</i>. O que é e o que significa?',
    o: ['B4: ventrículo rígido', 'B3: ventrículo dilatado com sobrecarga de volume', 'Estalido de abertura: estenose mitral', 'Desdobramento fisiológico da B2'], a: 1,
    modelo: 'B3 = enchimento rápido de um ventrículo grande e cheio (galope ventricular). Na IC é patológica.' },
  { tipo: 'explicar', q: 'Explique o edema de MMII e a hepatomegalia dolorosa.',
    pontos: ['O VD não bombeia o retorno venoso → pressão venosa sistêmica sobe', 'Aumento da pressão hidrostática nos capilares → líquido vai para o interstício (edema)', 'Edema simétrico, mole, com cacifo, frio, que piora no fim do dia (gravidade)', 'O fígado congestiona de sangue e aumenta', 'A distensão da cápsula de Glisson causa dor', 'Fígado liso, doloroso, de borda romba; refluxo hepatojugular positivo'],
    modelo: 'É edema hidrostático, diferente do oncótico (nefrótica, cirrose).' },
  { tipo: 'listar', q: 'Cite 3 diferenças entre o edema cardíaco e o edema renal (nefrótico).',
    pontos: ['Cardíaco começa em MMII; renal começa na face/periorbitário', 'Cardíaco piora no fim do dia; renal é pior pela manhã', 'Cardíaco tem turgência jugular; renal não tem', 'Mecanismo: cardíaco hidrostático; renal oncótico (hipoalbuminemia)', 'Renal com urina espumosa (proteinúria)'],
    modelo: 'A jugular é o divisor de águas: cheia = coração.' }
  ] },
/* ================= RESPIRATÓRIO ================= */
{ id: 'pneumonia', sist: 'resp', titulo: 'Pneumonia (síndrome de consolidação)',
  caso: '<b>Homem, 58 anos, tabagista.</b> Febre de 39,2 °C há 3 dias, calafrios, tosse com escarro amarelado e dor em pontada na base direita que piora ao respirar. FR 28 irpm, SpO₂ 91%. <b>Diagnóstico: pneumonia lobar em base direita.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a pesquisa do frêmito toracovocal.',
    pontos: ['Paciente sentado, tórax despido', 'Pede para falar "trinta e três" a cada ponto', 'Usa a mão espalmada (ou borda ulnar/face palmar dos dedos) sempre a mesma mão', 'Compara pontos simétricos dos dois lados, de cima para baixo', 'Faz face posterior, laterais e anterior', 'Descreve: normal, aumentado, diminuído ou abolido e onde'],
    modelo: 'Neste caso: "FTV aumentado na base direita."' },
  { tipo: 'demonstrar', q: 'Demonstre a percussão do tórax.',
    pontos: ['Percussão dígito-digital: dedo médio esquerdo (plessímetro) firme no espaço intercostal', 'Golpe com a ponta do dedo médio direito, movimento só do punho', 'Começa pela face posterior, de cima para baixo', 'Compara pontos simétricos dos dois lados', 'Faz laterais e anterior', 'Descreve o som: claro pulmonar, submaciço, maciço, timpânico, hipersonoro'],
    modelo: 'Neste caso: "macicez na base direita".' },
  { tipo: 'identificar', q: 'Na base direita: <i>"ruídos descontínuos, curtos e agudos no final da inspiração, como velcro, que não se modificam com a tosse; além disso, o som respiratório é alto e tubular, com expiração tão longa quanto a inspiração"</i>. O que você está ouvindo?',
    o: ['Estertores finos + sopro tubário', 'Sibilos + roncos', 'Atrito pleural', 'Estertores grossos'], a: 0,
    modelo: 'Estertores finos (alvéolos com exsudato se abrindo) + sopro tubário (som brônquico transmitido pelo parênquima consolidado).' },
  { tipo: 'explicar', q: 'Explique por que o FTV está aumentado nessa área.',
    pontos: ['Os alvéolos ficam cheios de exsudato (sem ar)', 'O brônquio continua pérvio', 'O parênquima vira um meio sólido/homogêneo', 'Sólido conduz melhor a vibração da voz do que o pulmão aerado', 'Por isso também há broncofonia/pectorilóquia'],
    modelo: '"Pneumonia: tudo aumenta" (FTV, voz). Só a condensação aumenta o FTV.' },
  { tipo: 'listar', q: 'Cite 3 achados que diferenciam esta consolidação de um derrame pleural.',
    pontos: ['FTV aumentado (no derrame: abolido)', 'Sopro tubário e broncofonia/pectorilóquia (no derrame: MV e voz abolidos)', 'Signorelli negativo, coluna clara (no derrame: positivo)', 'Macicez não muda com a posição (no derrame livre muda)', 'Sem egofonia/Lemos-Torres'],
    modelo: 'Os dois são maciços: quem separa é o FTV.' }
  ] },
{ id: 'derrame', sist: 'resp', titulo: 'Derrame pleural',
  caso: '<b>Homem, 72 anos, hipertenso e diabético.</b> Dispneia progressiva há 10 dias, ortopneia, edema de MMII. Sem febre. Na base direita: expansibilidade reduzida, macicez, FTV e MV abolidos. <b>Diagnóstico: derrame pleural direito por insuficiência cardíaca.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a avaliação da expansibilidade (ápices e bases).',
    pontos: ['Examinador atrás do paciente sentado', 'Ápices (Ruault): mãos nas fossas supraclaviculares, polegares juntos sobre C7', 'Bases (Lasègue): polegares paralelos à coluna (~T10) com uma prega de pele, dedos nos últimos arcos costais', 'Pede inspiração profunda e observa o afastamento dos polegares', 'Compara os lados: o que expande menos é o doente', 'Pode fazer também na face anterior'],
    modelo: 'Neste caso: "expansibilidade reduzida na base direita".' },
  { tipo: 'demonstrar', q: 'Demonstre o sinal de Signorelli.',
    pontos: ['Paciente sentado, de costas', 'Percute sobre os processos espinhosos, de T1 a T12', 'De cima para baixo, comparando o som', 'Positivo: macicez no terço inferior da coluna', 'Interpreta: derrame pleural (na condensação a coluna é clara)'],
    modelo: 'Pode complementar: no derrame livre a macicez muda quando o paciente se inclina para frente.' },
  { tipo: 'listar', q: 'Cite os achados de inspeção, palpação, percussão e ausculta no derrame.',
    pontos: ['Inspeção: expansibilidade reduzida; abaulamento; Lemos-Torres (abaulamento intercostal expiratório)', 'Palpação: FTV diminuído ou abolido', 'Percussão: macicez; Signorelli positivo', 'Ausculta: MV e voz abolidos; egofonia no limite superior', 'Volumoso: traqueia desviada para o lado oposto'],
    modelo: '"Derrame: tudo some."' },
  { tipo: 'explicar', q: 'Explique por que o FTV está abolido e onde aparece a egofonia.',
    pontos: ['O líquido fica entre o pulmão e a parede torácica', 'Afasta o pulmão da parede e abafa a transmissão da vibração', 'FTV, MV e ressonância vocal diminuem ou somem', 'No limite superior do líquido, o pulmão comprimido transmite a voz com timbre metálico/anasalado', 'Isso é a egofonia ("voz de cabra")'],
    modelo: 'Pergunta-chave: o que há entre o brônquio e a mão? Líquido → abafa.' },
  { tipo: 'explicar', q: 'Explique por que a insuficiência cardíaca causa derrame pleural.',
    pontos: ['Pressão venosa pulmonar e sistêmica elevadas', 'Aumento da pressão hidrostática nos capilares pleurais', 'Transudação de líquido para o espaço pleural', 'Drenagem linfática não acompanha', 'É um transudato (pobre em proteínas), geralmente bilateral ou à direita'],
    modelo: 'Diferente do derrame parapneumônico (exsudato, febre, pneumonia que não melhora).' }
  ] },
{ id: 'asma', sist: 'resp', titulo: 'Asma em crise',
  caso: '<b>Adolescente, 17 anos.</b> Sibilância intensa, tosse seca, dispneia aos mínimos esforços e fala entrecortada. Usou salbutamol 3 vezes sem melhora. Rinite e mãe atópica. FR 32 irpm, SpO₂ 91%. <b>Diagnóstico: crise de asma grave.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a inspeção dinâmica do tórax.',
    pontos: ['Conta a FR por 1 minuto sem o paciente perceber (12–20 irpm normal)', 'Observa ritmo e amplitude', 'Observa o tipo respiratório (torácico, abdominal, misto)', 'Procura tiragem (retração intercostal/supraclavicular na inspiração)', 'Procura uso de musculatura acessória (ECM, escalenos) e batimento de asa do nariz', 'Observa expansibilidade e simetria'],
    modelo: 'Neste caso: "taquipneica (32 irpm), tiragem intercostal, uso de musculatura acessória, expiração prolongada".' },
  { tipo: 'identificar', q: '<i>"Ruídos contínuos, agudos, musicais, difusos, predominando na expiração, com expiração prolongada"</i>. O que é?',
    o: ['Estridor', 'Sibilos', 'Roncos', 'Estertores finos'], a: 1,
    modelo: 'Sibilos: ar passando por brônquios estreitados. Estridor é inspiratório e alto (laringe/traqueia).' },
  { tipo: 'explicar', q: 'Explique por que a percussão está hipersonora.',
    pontos: ['Broncoespasmo e edema estreitam os brônquios', 'O ar entra mas tem dificuldade de sair na expiração', 'Aprisionamento aéreo → hiperinsuflação', 'Excesso de ar nos alvéolos → som hipersonoro', 'FTV e MV podem diminuir'],
    modelo: 'Mesma física do enfisema, mas na asma é reversível e episódica.' },
  { tipo: 'listar', q: 'Cite 3 sinais de gravidade nessa paciente.',
    pontos: ['Fala entrecortada (frases curtas)', 'FR > 30 irpm / taquipneia importante', 'Tiragem e musculatura acessória', 'SpO₂ baixa (91%)', 'Sem resposta ao broncodilatador', 'Silêncio auscultatório (tórax "mudo") ou pulso paradoxal'],
    modelo: 'O tórax silencioso numa crise é sinal de alarme: o fluxo é tão baixo que nem sibila.' },
  { tipo: 'explicar', q: 'Diferencie sibilo de estridor (fase, local e causa).',
    pontos: ['Sibilo: predominantemente expiratório; estridor: inspiratório', 'Sibilo: difuso no tórax; estridor: alto, audível no pescoço/à distância', 'Sibilo: vias aéreas inferiores estreitadas (asma, DPOC)', 'Estridor: obstrução alta (laringe/traqueia: laringite, anafilaxia, corpo estranho)'],
    modelo: 'Cornagem é o sintoma (dificuldade inspiratória alta); estridor é o sinal.' }
  ] },
{ id: 'pneumotorax', sist: 'resp', titulo: 'Pneumotórax espontâneo',
  caso: '<b>Homem, 22 anos, hígido, alto e magro, fumante.</b> Dispneia súbita e dor em pontada no hemitórax esquerdo há 3 horas. FC 102 bpm, SpO₂ 92%, PA 140 × 80 mmHg. <b>Diagnóstico: pneumotórax espontâneo à esquerda.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a percussão comparativa do tórax e diga o que espera neste caso.',
    pontos: ['Dígito-digital, dedo plessímetro firme no espaço intercostal', 'Movimento do punho, golpes iguais', 'Face posterior primeiro, de cima para baixo', 'Compara pontos simétricos', 'Faz laterais e anterior', 'Espera timpanismo/hipersonoridade no hemitórax esquerdo'],
    modelo: '"Timpânico em todo o hemitórax esquerdo; claro pulmonar à direita."' },
  { tipo: 'explicar', q: 'Explique por que há timpanismo e MV abolido.',
    pontos: ['Ar entra no espaço pleural', 'O pulmão colapsa e se afasta da parede', 'Ar livre numa cavidade ressoa → timpanismo', 'Não há pulmão ventilando junto à parede → MV abolido', 'A vibração não chega à parede → FTV e voz abolidos'],
    modelo: 'Mesmo padrão "tudo abolido" do derrame, mas com timpanismo em vez de macicez.' },
  { tipo: 'listar', q: 'Cite 3 achados que diferenciam o pneumotórax do derrame pleural.',
    pontos: ['Percussão: timpânica (derrame: maciça)', 'Signorelli negativo', 'Sem egofonia no limite', 'Início súbito, jovem longilíneo (derrame: progressivo, IC/infecção)', 'Pode haver abaulamento dos espaços intercostais'],
    modelo: 'A percussão separa os dois.' },
  { tipo: 'listar', q: 'Cite os sinais de pneumotórax hipertensivo.',
    pontos: ['Traqueia/mediastino desviados para o lado oposto', 'Turgência jugular', 'Hipotensão e taquicardia (choque obstrutivo)', 'Cianose, dispneia intensa', 'Abaulamento do hemitórax'],
    modelo: 'É emergência: o ar acumula sob pressão, comprime o mediastino e reduz o retorno venoso.' },
  { tipo: 'explicar', q: 'Explique para que lado vai a traqueia no pneumotórax hipertensivo, no derrame volumoso e na atelectasia.',
    pontos: ['Pneumotórax hipertensivo: lado oposto (empurra)', 'Derrame volumoso: lado oposto (empurra)', 'Atelectasia: mesmo lado (o pulmão colapsado puxa)', 'Pneumonia: traqueia central'],
    modelo: '"Atelectasia puxa; derrame e pneumotórax hipertensivo empurram."' }
  ] },
/* ================= ABDOME ================= */
{ id: 'cirrose-ascite', sist: 'abdome', caiu: true, titulo: 'Cirrose com ascite: hepatimetria e percussão',
  caso: '<b>J.M.S., 58 anos, ex-etilista, hepatite C.</b> Aumento progressivo e indolor do abdome há 30 dias, edema de MMII. Eritema palmar, aranhas vasculares, icterícia +2/+4, circulação colateral periumbilical. <b>Diagnóstico: cirrose hepática com hipertensão portal e ascite.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a hepatimetria.',
    pontos: ['Paciente em decúbito dorsal, examinador à direita, abdome e tórax inferior expostos', 'Localiza a linha hemiclavicular direita', 'Limite superior: percute do 2º EIC para baixo até o som passar de claro pulmonar para maciço (~5º EIC); marca o ponto', 'Limite inferior: percute de baixo (abdome, timpânico) para cima até a macicez, ou palpa a borda hepática; marca o ponto', 'Mede a distância entre os dois pontos com régua (ou polpas/dedos)', 'Normal: 6–12 cm na LHC direita (lobo esquerdo 4–8 cm)'],
    modelo: 'Na estação, diga em voz alta que vai medir com régua ou com os dedos.' },
  { tipo: 'demonstrar', q: 'Demonstre a percussão de todo o abdome.',
    pontos: ['Faz a ausculta antes da percussão e da palpação', 'Percussão dígito-digital', 'Sistemática: 3 pontos por quadrante, sentido horário, começando no QSD (ou linhas longitudinais/raios)', 'Inclui o espaço de Traube', 'Compara timpanismo e macicez', 'Descreve: aqui, timpanismo central e macicez nos flancos'],
    modelo: 'Normal: timpanismo em quase todo o abdome, com macicez só na área hepática.' },
  { tipo: 'listar', q: 'Cite 3 achados de exame da ascite e como pesquisar.',
    pontos: ['Inspeção: abdome globoso/em batráquio, cicatriz umbilical plana ou protrusa', 'Macicez móvel: percute até a macicez no flanco, mantém o dedo, vira o paciente para o lado oposto e o ponto fica timpânico (médio volume, mais sensível)', 'Semicírculo de Skoda: percute a partir do epigástrio em raios; linha timpanismo-macicez côncava para cima (médio volume)', 'Piparote: mão do paciente/assistente na linha média, golpe num flanco, onda sentida no outro (grande volume > 3–4 L)'],
    modelo: 'Macicez móvel e Skoda: 1–3 L. Piparote: só em ascite volumosa.' },
  { tipo: 'explicar', q: 'Explique por que há ascite na cirrose.',
    pontos: ['A fibrose e os nódulos aumentam a resistência ao fluxo portal → hipertensão portal', 'Pressão hidrostática alta no território esplâncnico → transudação para o peritônio', 'O fígado produz menos albumina → pressão oncótica baixa', 'Vasodilatação esplâncnica ativa o sistema renina-angiotensina-aldosterona → retenção de sódio e água', 'A produção de linfa excede a drenagem'],
    modelo: 'Dois grandes mecanismos: hipertensão portal (pressão) e hipoalbuminemia (oncótico), somados à retenção renal de sódio.' },
  { tipo: 'listar', q: 'Cite 3 pontos a analisar quando você palpa um fígado aumentado.',
    pontos: ['Borda: fina ou romba', 'Superfície: lisa ou nodular/irregular', 'Consistência: normal, aumentada, diminuída ou pétrea', 'Sensibilidade: dolorosa ou indolor', 'Pulsatilidade e distância do rebordo costal'],
    modelo: 'Cirrose: nodular, romba, indolor. Congestão: lisa, romba, dolorosa. Hepatite: lisa, fina, dolorosa. Esteatose: lisa, fina, mole.' }
  ] },
{ id: 'apendicite', sist: 'abdome', titulo: 'Apendicite aguda',
  caso: '<b>F.J.B., 27 anos.</b> Dor iniciada no epigástrio/umbigo há 2 dias, que há 12 horas se fixou na fossa ilíaca direita. Inapetência, náuseas, vômitos, febre de 38 °C. Temperatura retal 1,2 °C acima da axilar. <b>Diagnóstico: apendicite aguda.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a palpação superficial e profunda do abdome.',
    pontos: ['Decúbito dorsal, braços ao lado, pernas estendidas, mãos aquecidas, à direita', 'Pergunta onde dói e começa longe da área dolorosa', 'Superficial: mão espalmada, polpas, compressão suave nos 4 quadrantes (avalia dor, defesa, hérnias)', 'Profunda: deslizante, mãos a ~45°, aprofunda na expiração', 'Procura massas e descreve: local, tamanho, consistência, mobilidade, dor, pulsação', 'Observa a face do paciente durante a palpação'],
    modelo: 'Neste caso: "defesa localizada e dor à palpação profunda na FID".' },
  { tipo: 'demonstrar', q: 'Demonstre os sinais de Blumberg e Rovsing.',
    pontos: ['Localiza o ponto de McBurney (⅓ da EIAS direita até o umbigo)', 'Avisa o paciente antes da manobra dolorosa', 'Blumberg: comprime lenta e profundamente e solta bruscamente → dor à descompressão', 'Rovsing: palpa/comprime a fossa ilíaca esquerda → dor na FID', 'Interpreta: irritação peritoneal / apendicite'],
    modelo: 'Positivos neste paciente.' },
  { tipo: 'explicar', q: 'Explique o mecanismo do sinal de Blumberg e do sinal de Rovsing.',
    pontos: ['Blumberg: o peritônio inflamado tem fibrina; a compressão aproxima os folhetos', 'Na descompressão súbita os folhetos se separam e ativam receptores de dor do peritônio parietal', 'Rovsing: a compressão do cólon esquerdo empurra gases retrogradamente até o ceco', 'O ceco distende e mobiliza o apêndice inflamado → dor na FID'],
    modelo: 'Blumberg = irritação peritoneal (não é exclusivo de apendicite).' },
  { tipo: 'explicar', q: 'Explique por que a dor começou no umbigo e depois foi para a FID.',
    pontos: ['No início, a distensão e inflamação do apêndice geram dor visceral', 'Dor visceral é surda, mal localizada, referida na linha média (periumbilical)', 'Quando a inflamação atinge o peritônio parietal, surge dor parietal', 'Dor parietal é aguda e bem localizada, sobre o órgão (FID)'],
    modelo: 'Cronologia de Murphy: epigástrio/umbigo → FID em 12–24 h, com anorexia e vômito após a dor.' },
  { tipo: 'listar', q: 'Cite outros 2 sinais de apendicite e como pesquisar.',
    pontos: ['Psoas: extensão passiva do quadril direito (DLE) → dor (apêndice retrocecal)', 'Obturador: flexão do quadril/joelho direito e rotação interna → dor (apêndice pélvico)', 'Lenander: temperatura retal > axilar em mais de 1 °C'],
    modelo: 'O Lenander está positivo no caso (1,2 °C).' }
  ] },
{ id: 'vesicula', sist: 'abdome', titulo: 'Colecistite: fígado e vesícula',
  caso: '<b>Mulher, 42 anos.</b> Dor forte no hipocôndrio direito 2 horas após refeição gordurosa, irradiando para o ombro direito, com náuseas e vômitos. Anictérica. <b>Diagnóstico: colecistite aguda.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a palpação do fígado (uma técnica).',
    pontos: ['Decúbito dorsal, à direita do paciente', 'Lemos-Torres: mão esquerda na loja renal direita elevando; mão direita na parede, partindo da FID e subindo em direção ao rebordo', 'Ou Mathieu: de costas para a cabeça do paciente, mãos em garra abaixo do rebordo', 'Pede inspiração profunda e espera a borda tocar os dedos', 'Descreve: distância do rebordo, borda, superfície, consistência, sensibilidade'],
    modelo: 'Começar baixo (FID) evita perder um fígado muito aumentado.' },
  { tipo: 'demonstrar', q: 'Demonstre a pesquisa do sinal de Murphy.',
    pontos: ['Localiza o ponto cístico: rebordo costal direito × linha hemiclavicular (borda do reto)', 'Comprime o ponto com os dedos ou o polegar', 'Pede inspiração profunda', 'Positivo: o paciente interrompe a inspiração por dor', 'Interpreta: colecistite aguda'],
    modelo: 'Avise antes; observe a face do paciente.' },
  { tipo: 'explicar', q: 'Explique o mecanismo da parada inspiratória no Murphy.',
    pontos: ['Na inspiração profunda o diafragma desce e empurra o fígado e a vesícula para baixo', 'A vesícula inflamada encontra os dedos que comprimem o ponto cístico', 'O contato com a vesícula/peritônio inflamado causa dor', 'O paciente interrompe a inspiração reflexamente'],
    modelo: 'A dor irradia para o ombro direito por inervação frênica.' },
  { tipo: 'explicar', q: 'Diferencie o sinal de Murphy do sinal de Courvoisier-Terrier.',
    pontos: ['Murphy: vesícula inflamada, dolorosa; parada da inspiração', 'Murphy → colecistite aguda (geralmente sem icterícia)', 'Courvoisier: vesícula palpável e indolor em paciente ictérico', 'Courvoisier → obstrução lenta do colédoco distal por tumor (cabeça de pâncreas)', 'Na litíase crônica a vesícula é fibrosada e não distende'],
    modelo: 'Dor + inflamação × distensão silenciosa com icterícia.' },
  { tipo: 'listar', q: 'Cite a tríade de Charcot e o que acrescenta a pêntade de Reynolds.',
    pontos: ['Febre', 'Icterícia', 'Dor no hipocôndrio direito', 'Reynolds acrescenta: hipotensão (choque) e rebaixamento da consciência (confusão)'],
    modelo: 'Charcot = colangite. Reynolds = colangite grave (supurativa).' }
  ] },
{ id: 'baco-portal', sist: 'abdome', titulo: 'Esplenomegalia e hipertensão portal',
  caso: '<b>Homem, 45 anos, lavrador, natural de área endêmica.</b> Banhos de rio desde a infância. Episódio de hematêmese ontem. Anictérico, sem aranhas vasculares. Baço muito aumentado. <b>Diagnóstico: esquistossomose hepatoesplênica com hipertensão portal.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a percussão do espaço de Traube.',
    pontos: ['Decúbito dorsal', 'Delimita o espaço: 6ª costela esquerda (superior), rebordo costal (inferior), linha axilar anterior/média (lateral), lobo esquerdo do fígado (medial)', 'Percute dentro do espaço', 'Normal: timpânico (bolha gástrica)', 'Maciço: esplenomegalia (ou derrame pleural esquerdo, tumor)'],
    modelo: 'Neste caso: "espaço de Traube maciço".' },
  { tipo: 'demonstrar', q: 'Demonstre o sinal de Castell.',
    pontos: ['Localiza o último espaço intercostal (9º/10º) na linha axilar anterior esquerda', 'Percute com o paciente em expiração (normal: timpânico)', 'Pede inspiração profunda e percute de novo o mesmo ponto', 'Positivo: passa a maciço na inspiração', 'Interpreta: esplenomegalia (o baço desce)'],
    modelo: 'Útil quando o baço ainda não é palpável.' },
  { tipo: 'demonstrar', q: 'Demonstre a palpação do baço.',
    pontos: ['Decúbito dorsal, à direita do paciente', 'Mão esquerda por trás elevando o gradil costal esquerdo', 'Mão direita oblíqua, partindo da FID em direção ao rebordo esquerdo', 'Pede inspiração profunda e espera a borda tocar os dedos', 'Se não palpar: posição de Schuster (entre dorsal e lateral direito, perna esquerda fletida, braço esquerdo sobre a cabeça)', 'Cita que o baço só é palpável se aumentado ~2 vezes'],
    modelo: 'Começar baixo para não "pular" um baço muito grande (aqui chega ao umbigo).' },
  { tipo: 'explicar', q: 'Explique por que o baço aumenta e por que ele vomitou sangue.',
    pontos: ['A fibrose periportal (ou cirrose) aumenta a resistência ao fluxo portal', 'A pressão no sistema porta sobe (hipertensão portal)', 'A veia esplênica drena para a porta: o baço congestiona e cresce', 'O sangue busca colaterais porto-sistêmicas (esôfago, fundo gástrico, umbigo, reto)', 'Varizes esofágicas se rompem → hematêmese (e melena)'],
    modelo: 'Na esquistossomose a função hepática é preservada: sem icterícia e sem estigmas.' },
  { tipo: 'explicar', q: 'Diferencie a circulação colateral tipo porta da tipo cava inferior.',
    pontos: ['Tipo porta: veias em torno do umbigo (cabeça de medusa)', 'Porta: fluxo centrífugo, para cima acima do umbigo e para baixo abaixo dele', 'Tipo cava inferior: veias nos flancos e fossas ilíacas', 'Cava inferior: fluxo sempre ascendente', 'Como testar: esvazia um segmento da veia com dois dedos e solta um lado para ver de onde enche'],
    modelo: 'Na trombose de veia porta a colateral costuma ser tipo cava.' }
  ] },
/* ================= EXAME GERAL ================= */
{ id: 'edema-nefrotico', sist: 'geral', titulo: 'Edema generalizado (síndrome nefrótica)',
  caso: '<b>M.L.R., 24 anos.</b> Edema periorbitário pior pela manhã, edema de MMII e genital há 2 semanas, ganho de 6 kg, urina espumosa. Sem turgência jugular. PA 150 × 90 mmHg. <b>Diagnóstico: síndrome nefrótica.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a avaliação do edema de membros inferiores.',
    pontos: ['Inspeciona: localização, simetria, cor, brilho da pele', 'Compara a temperatura com o dorso da mão nos dois lados', 'Faz digitopressão por alguns segundos sobre a tíbia/maléolo (cacifo/Godet)', 'Avalia o retorno: cacifo presente/ausente; gradua de +1 a +4', 'Avalia consistência (mole/duro) e dor', 'Descreve: ex. "edema +3/+4, bilateral, simétrico, mole, com cacifo, frio, indolor"'],
    modelo: 'Pesquise também face, região sacral (acamados) e sinais de anasarca.' },
  { tipo: 'listar', q: 'Cite 3 características típicas do edema renal.',
    pontos: ['Começa na face/periorbitário', 'Pior pela manhã (redistribuição no decúbito)', 'Mole, com cacifo, frio, indolor', 'Generalizado, pode evoluir para anasarca', 'Sem turgência jugular'],
    modelo: 'Fácies renal: edema palpebral + palidez.' },
  { tipo: 'explicar', q: 'Explique o mecanismo do edema na síndrome nefrótica.',
    pontos: ['Lesão do glomérulo → perda de proteína na urina (urina espumosa)', 'Albumina plasmática cai (hipoalbuminemia)', 'Pressão oncótica do plasma diminui', 'O líquido sai do capilar para o interstício (edema oncótico)', 'Retenção renal de sódio e água contribui'],
    modelo: 'Edema oncótico, diferente do hidrostático da IC.' },
  { tipo: 'demonstrar', q: 'Demonstre a avaliação do grau de hidratação.',
    pontos: ['Mucosas: oral e conjuntival (úmidas, secas, muito secas)', 'Turgor: pinça a pele do dorso da mão/antebraço e vê o retorno', 'Olhos: enoftalmia', 'Tempo de enchimento capilar (polpa/leito ungueal, normal ≤ 2–3 s)', 'Pergunta sobre diurese e sede; FC e PA', 'Gradua de +1 a +4'],
    modelo: 'Ela está edemaciada mas pode estar "hidratada": edema é água no interstício, não no vaso.' },
  { tipo: 'explicar', q: 'Explique por que ela tem macicez nas bases pulmonares e ascite.',
    pontos: ['A pressão oncótica baixa afeta todos os capilares', 'O líquido também escapa para as serosas', 'Pleura → derrame pleural bilateral (transudato): macicez, MV diminuído nas bases', 'Peritônio → ascite (macicez móvel, Skoda)', 'Edema + derrames cavitários = anasarca'],
    modelo: 'Sem turgência jugular nem B3: não é cardíaco.' }
  ] },
{ id: 'linfonodo-tb', sist: 'geral', titulo: 'Linfonodomegalia cervical (tuberculose)',
  caso: '<b>C.B.P., 32 anos, pedreiro.</b> Mora com 8 colegas em casa pouco ventilada. "Caroços" no pescoço há 6 semanas que ficaram grudados, febre vespertina, sudorese noturna, perda de 9 kg e tosse com raias de sangue. <b>Diagnóstico: tuberculose pulmonar e ganglionar.</b>',
  tarefas: [
  { tipo: 'demonstrar', q: 'Demonstre a palpação dos linfonodos cervicais e supraclaviculares.',
    pontos: ['Paciente sentado, pescoço levemente fletido/relaxado', 'Usa as polpas dos dedos em movimentos circulares suaves', 'Palpa os dois lados simultaneamente, comparando', 'Segue uma ordem: pré e retroauricular, occipital, submentoniano, submandibular, cervicais anterior e posterior, supraclaviculares', 'Descreve os achados'],
    modelo: 'Pode palpar por trás do paciente. Não esqueça o supraclavicular esquerdo (Virchow).' },
  { tipo: 'listar', q: 'Cite as 8 características a descrever em um linfonodo.',
    pontos: ['Número e localização (cadeia)', 'Tamanho (cm)', 'Consistência (amolecido, fibroelástico, endurecido, pétreo)', 'Mobilidade (móvel ou aderido)', 'Sensibilidade (doloroso ou indolor)', 'Coalescência (isolado ou em bloco)', 'Alterações da pele (calor, rubor, fístula)'],
    modelo: '"Linfonodos cervicais anteriores, múltiplos, 2–3 cm, endurecidos, pouco móveis, indolores, coalescentes, sem calor ou rubor."' },
  { tipo: 'explicar', q: 'Que características sugerem infecção aguda e quais sugerem neoplasia ou TB?',
    pontos: ['Infecção aguda: doloroso, móvel, elástico/amolecido, calor e rubor', 'Neoplasia/TB: endurecido ou pétreo, fixo/aderido, indolor', 'Coalescência (em bloco): TB e linfoma', 'Fístula: TB ganglionar (e micoses)', 'Supraclavicular esquerdo: metástase abdominal (Virchow)'],
    modelo: 'Linfonodo duro, indolor e fixo: sempre suspeitar de malignidade.' },
  { tipo: 'identificar', q: 'No ápice direito: <i>"ruído contínuo, de baixa frequência, com ressonância metálica, como soprar a boca de uma garrafa vazia, com FTV aumentado e estertores grossos"</i>. O que isso indica?',
    o: ['Derrame pleural', 'Grande cavidade (caverna) com parênquima condensado em volta', 'Crise de asma', 'Pneumotórax pequeno sem repercussão'], a: 1,
    modelo: 'Sopro anfórico/cavitário em ápice = cavitação, típica da TB pós-primária. (Algumas fontes associam o anfórico também ao pneumotórax hipertensivo.)' },
  { tipo: 'listar', q: 'Cite 3 dados da anamnese que sustentam tuberculose.',
    pontos: ['Febre vespertina e sudorese noturna', 'Emagrecimento importante (9 kg)', 'Tosse prolongada com hemoptoicos', 'Aglomeração e pouca ventilação (moradia)', 'Tabagismo/etilismo'],
    modelo: 'Diferencial importante: linfoma (linfonodos + sintomas B).' }
  ] }
];

/* ================= VIEW ================= */
const SIST = { cardio: ['Cardiovascular', 'var(--a4)'], resp: ['Respiratório', 'var(--a3)'], abdome: ['Abdome', 'var(--a5)'], geral: ['Exame geral', 'var(--a2)'] };
let filtro = 'todos', R = null;

function lista(v) {
  const S = A().S; S.provas = S.provas || {};
  const items = PROVAS.filter(p => filtro === 'todos' || p.sist === filtro);
  v.innerHTML = `<div class="page-head"><div class="eyebrow">Prática OSCE · ${PROVAS.length} estações</div><h1>Estações estilo prova</h1>
    <p>No formato da prova: um caso completo (muitas vezes com o diagnóstico) e 5 tarefas. Nas de <b>demonstrar</b>, execute a manobra em voz alta e depois marque no checklist o que você fez. Nas de <b>explicar</b> e <b>citar</b>, responda (falando ou escrevendo) e confira os pontos-chave. Nas de <b>identificar</b>, o som vem descrito, como na prova. Nota de 0 a 10.</p></div>
    <div class="row" style="margin-bottom:14px;justify-content:space-between"><div class="chips">${['todos', 'cardio', 'resp', 'abdome', 'geral'].map(k => `<button class="chip" type="button" data-pf="${k}" aria-pressed="${filtro === k}">${k === 'todos' ? 'Todas' : SIST[k][0]}</button>`).join('')}</div>
    <button class="btn primary" type="button" id="pRand">Sortear estação</button></div>
    <div class="grid-3">${items.map(p => { const r = S.provas[p.id]; return `<a class="case-card" href="#provas-${p.id}">
      <span class="lvl" style="color:${SIST[p.sist][1]}">${SIST[p.sist][0]}</span><h3>${p.titulo}</h3>
      <span class="muted small">${p.tarefas.map(t => TIPO[t.tipo]).filter((x, i, a) => a.indexOf(x) === i).join(' · ')}</span>
      <div class="row">${p.caiu ? '<span class="tag" style="background:var(--amber-soft);color:var(--amber)">caiu na turma anterior</span>' : ''}${r ? `<span class="tag" style="background:var(--ok-soft);color:var(--ok)">melhor ${r.best.toFixed(1)}</span>` : ''}</div></a>`; }).join('')}</div>`;
  v.onclick = e => {
    const f = e.target.closest('[data-pf]'); if (f) { filtro = f.dataset.pf; return lista(v); }
    if (e.target.closest('#pRand')) { const pool = items.length ? items : PROVAS; location.hash = 'provas-' + pool[Math.floor(Math.random() * pool.length)].id; }
  };
  A().onLeave(() => { v.onclick = null; });
}

function ring10(n) {
  const r = 50, C = 2 * Math.PI * r, col = n >= 7 ? 'var(--ok)' : n >= 5 ? 'var(--amber)' : 'var(--bad)';
  return `<svg class="score-ring" viewBox="0 0 120 120" role="img" aria-label="Nota ${n.toFixed(1)} de 10"><circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="10"/><circle cx="60" cy="60" r="${r}" fill="none" stroke="${col}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C * n / 10} ${C}" transform="rotate(-90 60 60)"/><text x="60" y="58" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="28" fill="var(--ink)">${n.toFixed(1)}</text><text x="60" y="78" text-anchor="middle" font-size="11" fill="var(--muted)">de 10</text></svg>`;
}
function nota(p) { return p.tarefas.reduce((a, t, i) => a + (R.sc[i] || 0), 0) / p.tarefas.length * 10; }
function fmt(s) { s = Math.max(0, Math.round(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }

function run(v, id) {
  const p = PROVAS.find(x => x.id === id); if (!p) return lista(v);
  R = { p, i: -1, t0: 0, lim: 600, timer: null, ans: {}, chk: {}, shown: {}, sc: {}, notes: {} };
  A().onLeave(() => clearInterval(R && R.timer));
  render(v);
  v.onclick = e => click(e, v);
  v.oninput = e => { if (e.target.id === 'pNote') R.notes[R.i] = e.target.value; };
  A().onLeave(() => { v.onclick = null; v.oninput = null; });
}

function tick() { const el = document.getElementById('pTmr'); if (!el || !R) return; const r = R.lim - (Date.now() - R.t0) / 1000; el.textContent = (r < 0 ? '+' : '') + fmt(Math.abs(r)); el.classList.toggle('low', r < 60); }

function render(v) {
  const p = R.p;
  if (R.i === -1) {
    v.innerHTML = `<div class="page-head"><a href="#provas" class="small">← Estações</a><div class="eyebrow" style="color:${SIST[p.sist][1]}">${SIST[p.sist][0]}${p.caiu ? ' · caiu na turma anterior' : ''}</div><h1>${p.titulo}</h1></div>
      <div class="door"><div class="eyebrow">Caso</div><p>${p.caso}</p></div>
      <div class="panel" style="margin-top:14px"><h3>Como funciona</h3><p>São 5 tarefas, uma de cada vez. Leia, execute ou responda em voz alta como faria para o examinador e só então clique em <b>Conferir</b>. Marque com honestidade apenas o que você realmente fez ou falou.</p>
      <div class="row" style="margin-top:10px"><label class="field" for="pLim">Tempo<select id="pLim"><option value="300">5 min</option><option value="420">7 min</option><option value="600" selected>10 min</option><option value="900">15 min</option></select></label>
      <button class="btn primary" type="button" id="pStart" style="align-self:flex-end">Começar</button></div></div>`;
    return;
  }
  if (R.i >= p.tarefas.length) return fim(v);
  const t = p.tarefas[R.i], shown = R.shown[R.i];
  let corpo = '';
  if (t.tipo === 'identificar') {
    const ans = R.ans[R.i];
    corpo = t.o.map((o, k) => { let c = ''; if (ans !== undefined) { if (k === t.a) c = 'right'; else if (k === ans) c = 'wrong'; } return `<button class="opt ${c}" type="button" data-po="${k}" ${ans !== undefined ? 'disabled' : ''}>${o}</button>`; }).join('') +
      (ans !== undefined ? `<div class="explain ${ans === t.a ? 'good' : 'bad'}"><b>${ans === t.a ? 'Correto.' : 'Resposta: ' + t.o[t.a] + '.'}</b> ${t.modelo}</div>` : '');
  } else if (!shown) {
    corpo = `<label class="field" for="pNote" style="margin-top:8px">Sua resposta (opcional: escreva tópicos ou só fale em voz alta)<textarea id="pNote" rows="4" style="padding:9px 11px;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit">${(R.notes[R.i] || '').replace(/</g, '&lt;')}</textarea></label>
      <div class="row" style="margin-top:10px"><button class="btn primary" type="button" id="pShow">Conferir</button></div>`;
  } else {
    const ck = R.chk[R.i] = R.chk[R.i] || {};
    corpo = (R.notes[R.i] ? `<div class="case-box small"><b>Sua anotação:</b> ${R.notes[R.i].replace(/</g, '&lt;')}</div>` : '') +
      `<h4>Checklist do examinador · marque o que você fez/falou</h4>` + t.pontos.map((pt, k) => `<label class="check"><input type="checkbox" data-pc="${k}" ${ck[k] ? 'checked' : ''}>${pt}</label>`).join('') +
      `<div class="explain"><b>Resposta modelo:</b> ${t.modelo}</div>`;
  }
  const done = t.tipo === 'identificar' ? R.ans[R.i] !== undefined : shown;
  v.innerHTML = `<div class="row" style="justify-content:space-between;margin-bottom:10px"><div style="min-width:0"><div class="eyebrow">${p.titulo}</div><div class="mono small">Tarefa ${R.i + 1} de ${p.tarefas.length}</div></div><span class="timer" id="pTmr">--:--</span></div>
    <div class="stepper">${p.tarefas.map((x, k) => `<i class="${k < R.i ? 'ok' : k === R.i ? 'cur' : ''}"></i>`).join('')}</div>
    <details class="door" style="padding:10px 14px;margin-bottom:12px" ${R.i === 0 ? 'open' : ''}><summary style="cursor:pointer;font-weight:700">Caso</summary><p>${p.caso}</p></details>
    <div class="panel"><div class="step-kind">${TIPO[t.tipo]}</div><div class="quiz-q">${t.q}</div>${corpo}
    ${done ? `<div class="row" style="justify-content:space-between;margin-top:14px"><span class="mono small">${t.tipo === 'identificar' ? '' : 'Pontos marcados: ' + Object.values(R.chk[R.i] || {}).filter(Boolean).length + '/' + t.pontos.length}</span><button class="btn primary" type="button" id="pNext">${R.i === p.tarefas.length - 1 ? 'Ver nota' : 'Próxima tarefa →'}</button></div>` : ''}</div>`;
  tick();
}

function score(i) {
  const t = R.p.tarefas[i];
  if (t.tipo === 'identificar') R.sc[i] = R.ans[i] === t.a ? 1 : 0;
  else R.sc[i] = Object.values(R.chk[i] || {}).filter(Boolean).length / t.pontos.length;
}

function fim(v) {
  clearInterval(R.timer); const p = R.p, n = nota(p), S = A().S; S.provas = S.provas || {};
  if (!R.saved) { R.saved = 1; const prev = S.provas[p.id]; S.provas[p.id] = { best: Math.max(n, prev ? prev.best : 0), last: n }; A().save(); }
  const tempo = (Date.now() - R.t0) / 1000;
  v.innerHTML = `<div class="page-head"><a href="#provas" class="small">← Estações</a><div class="eyebrow">Resultado · ${fmt(tempo)} de ${fmt(R.lim)}</div><h1>${p.titulo}</h1></div>
    <div class="panel" style="display:flex;gap:20px;align-items:center;flex-wrap:wrap">${ring10(n)}
      <div style="flex:1;min-width:220px">${p.tarefas.map((t, i) => `<div class="match"><span style="flex:1.6;min-width:0" class="small"><b>${i + 1}.</b> ${t.q.replace(/<[^>]+>/g, '').slice(0, 70)}${t.q.length > 70 ? '…' : ''}</span><div class="bar"><i style="width:${(R.sc[i] || 0) * 100}%"></i></div><span class="mono small">${((R.sc[i] || 0) * 2).toFixed(1)}/2</span></div>`).join('')}
      ${tempo > R.lim ? '<p class="small" style="color:var(--bad)">Passou do tempo.</p>' : ''}</div></div>
    <div class="panel" style="margin-top:14px"><h3>Revise os pontos que faltaram</h3>${p.tarefas.map((t, i) => { if (t.tipo === 'identificar') return R.ans[i] === t.a ? '' : `<div class="check"><span class="mark n">✗</span><div><b>${i + 1}.</b> Resposta: ${t.o[t.a]}</div></div>`; const ck = R.chk[i] || {}; const miss = t.pontos.filter((_, k) => !ck[k]); return miss.length ? `<div style="margin-bottom:8px"><b>${i + 1}. ${t.q.replace(/<[^>]+>/g, '')}</b>${miss.map(m => `<div class="check"><span class="mark n">✗</span><div class="small">${m}</div></div>`).join('')}</div>` : ''; }).join('') || '<p>Você marcou todos os pontos. Excelente!</p>'}</div>
    <div class="row" style="margin-top:14px"><button class="btn primary" type="button" id="pAgain">Refazer</button><a class="btn" href="#provas">Outra estação</a></div>`;
}

function click(e, v) {
  const g = s => e.target.closest(s); const p = R.p;
  const keep = () => { const y = window.scrollY; render(v); window.scrollTo(0, y); };
  if (g('#pStart')) { R.lim = +document.getElementById('pLim').value; R.t0 = Date.now(); R.i = 0; R.timer = setInterval(tick, 500); render(v); return; }
  if (g('[data-po]') && R.ans[R.i] === undefined) { R.ans[R.i] = +g('[data-po]').dataset.po; score(R.i); return keep(); }
  if (g('#pShow')) { R.shown[R.i] = 1; score(R.i); return keep(); }
  if (g('#pNext')) { score(R.i); R.i++; render(v); window.scrollTo(0, 0); return; }
  if (g('#pAgain')) { const id = p.id; return run(v, id); }
}
document.addEventListener('change', e => { if (R && e.target.matches && e.target.matches('[data-pc]')) { R.chk[R.i] = R.chk[R.i] || {}; R.chk[R.i][e.target.dataset.pc] = e.target.checked; score(R.i); const s = document.querySelector('#pNext') && document.querySelector('#pNext').previousElementSibling; if (s) s.textContent = 'Pontos marcados: ' + Object.values(R.chk[R.i]).filter(Boolean).length + '/' + p_len(); } });
function p_len() { return R.p.tarefas[R.i].pontos.length; }

(window.SEMIO_VIEWS = window.SEMIO_VIEWS || []).push({ id: 'provas', render: (v, h) => { if (h === 'provas') lista(v); else run(v, h.slice(7)); } });
window.SEMIO_PROVAS = PROVAS;
})();

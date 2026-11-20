/* Módulo de Semiologia Neurológica (só teoria) — baseado no resumo e nos slides do Prof. Guilherme Riccioppo Rodrigues */
(function () {
var NEURO = {
  id: 'neuro', titulo: 'Semiologia neurológica', cor: 'a6',
  resumo: 'Anamnese neurológica, consciência e Glasgow, marcha e Romberg, nervos cranianos, 1º × 2º neurônio, tônus, reflexos, dermátomos, sensibilidade, sinais meníngeos e movimentos involuntários.',
  secoes: [
  { id: 'anamnese', h: 'Anamnese neurológica',
    html: '<p>A história bem conduzida muitas vezes <b>localiza a lesão e sugere a etiologia antes do exame físico</b>. Em neurologia, as duas perguntas centrais são <b>onde</b> está a lesão (topografia) e <b>o que</b> ela é (natureza).</p>' +
    tb(['Item', 'O que importa'], [
      ['Identificação', 'Idade, sexo, cor, naturalidade, procedência, <b>ascendência</b> (doenças com herança definida), estado civil, religião.'],
      ['Queixa e duração', 'Nas palavras do paciente, com a duração.'],
      ['Início', '<b>Súbito</b>: AVC, crise epiléptica (eventos vasculares ou paroxísticos). <b>Insidioso</b>: doenças neurodegenerativas.'],
      ['Evolução', '<b>Estacionária, progressiva, regressiva ou paroxística</b>. Muitas vezes é mais informativa que qualquer exame complementar.'],
      ['Medicações', 'Obrigatório: fármacos causam ou agravam sintomas (<b>tremor induzido por fármacos</b>, encefalopatia medicamentosa).'],
      ['Antecedentes pessoais', 'Gestação e período perinatal, <b>desenvolvimento psicomotor</b> (paralisia cerebral, epilepsia), etilismo, tabagismo, drogas.'],
      ['Antecedentes familiares', 'Moléstias semelhantes e <b>consanguinidade dos pais</b> (doenças metabólicas e genéticas raras).']
    ]) +
    co('tip', 'Perguntas de fixação', ul([
      '<b>Por que o modo de início importa?</b> Ele separa a natureza do processo: súbito sugere vascular ou paroxístico (AVC, crise epiléptica); insidioso sugere degenerativo (Parkinson, Alzheimer).',
      '<b>Neuropediatria:</b> gestação, parto e período perinatal, desenvolvimento psicomotor, consanguinidade e casos semelhantes na família.',
      '<b>Tremor de início recente:</b> antes de tudo, pergunte pelas <b>medicações</b> em uso (tremor induzido por fármacos).'
    ])) },

  { id: 'material', h: 'Material e ordem do exame',
    html: '<p>O exame neurológico é <b>sistemático</b>: segue uma ordem que avalia níveis progressivos do sistema nervoso.</p>' +
    '<div class="flow"><span>Estado mental</span><span>Marcha e equilíbrio</span><span>Nervos cranianos</span><span>Motricidade (força, trofismo, tônus, reflexos)</span><span>Coordenação</span><span>Sensibilidade</span><span>Sinais meníngeos</span></div>' +
    cards([['Básico', 'Abaixador de língua, algodão, alfinete, estilete de ponta romba, fita métrica, lanterna de bolso.'], ['Específico', 'Martelo de reflexos (Taylor, Babinski, Buck), diapasão de <b>128 ou 256 Hz</b>, oftalmoscópio.']]) },

  { id: 'consciencia', h: 'Estado mental: nível de consciência',
    html: '<p>A consciência tem duas dimensões: o <b>nível</b> (estar acordado, alerta) e o <b>conteúdo</b> (orientação, atenção, linguagem, memória). Exemplo de nível preservado com conteúdo comprometido: paciente <b>acordado, mas confuso</b> (delirium, demência, afasia).</p>' +
    tb(['Nível', 'Conceito', 'Resposta ao examinador'], [
      ['<b>Vigil</b>', 'Acordado, alerta, orientado e atento', 'Responde normalmente'],
      ['<b>Sonolento</b>', 'Tendência a dormir', 'Desperta com estímulo verbal leve; mantém a atenção por pouco tempo'],
      ['<b>Obnubilado</b>', 'Lentificação, redução da atenção e da compreensão; desorientação', 'Desperta com estímulo verbal mais forte ou tátil'],
      ['<b>Torpor (estupor)</b>', 'Só desperta com estímulos intensos, em geral dolorosos; volta logo ao estado anterior', 'Respostas mínimas'],
      ['<b>Coma</b>', 'Ausência de abertura ocular e de resposta voluntária', 'Nenhuma resposta voluntária, mesmo à dor']
    ]) +
    '<h3>Diagnósticos diferenciais do coma</h3>' +
    tb(['Condição', 'O que é', 'Lesão'], [
      ['<b>Síndrome do encarceramento (locked-in)</b>', 'Paciente <b>consciente e desperto</b>, com tetraplegia e paralisia da face e do olhar horizontal; comunica-se por <b>movimentos verticais dos olhos e piscar</b>', 'Base da ponte'],
      ['<b>Mutismo acinético</b>', 'Aparentemente desperto, olhos abertos que acompanham, mas sem fala nem movimento espontâneo (abulia grave)', 'Frontal medial bilateral ou diencefálica'],
      ['<b>Estado vegetativo</b>', 'Ciclos de sono-vigília com olhos abertos, <b>sem consciência de si nem do ambiente</b>; funções autonômicas preservadas', 'Cortical difusa com tronco preservado'],
      ['<b>Catatonia</b>', 'Síndrome psicomotora (psiquiátrica ou orgânica): imóvel, mutismo, negativismo, postura mantida, <b>flexibilidade cérea</b>; responde a benzodiazepínicos', 'Funcional ou orgânica']
    ]) },

  { id: 'glasgow', h: 'Escala de Coma de Glasgow',
    html: tb(['Abertura ocular', 'Resposta verbal', 'Resposta motora'], [
      ['4 Espontânea', '5 Orientado', '6 Obedece comandos'],
      ['3 Ao chamado', '4 Desorientado (tempo ou espaço)', '5 Localiza a dor'],
      ['2 À dor', '3 Palavras inapropriadas', '4 Retirada inespecífica'],
      ['1 Sem abertura', '2 Sons incompreensíveis', '3 Decorticação'],
      ['', '1 Sem vocalização', '2 Descerebração'],
      ['', '', '1 Sem resposta']
    ]) +
    ul(['Pontuação de <b>3 a 15</b>.', '<b>≤ 8 = coma</b> e necessidade de <b>proteger a via aérea</b> (intubação).']) +
    cards([
      ['Decorticação (3)', '<b>Flexão dos MMSS e extensão dos MMII</b>. Lesão <b>acima do mesencéfalo</b> (hemisférios, cápsula interna, diencéfalo).'],
      ['Descerebração (2)', '<b>Extensão e pronação de todos os membros</b>. Lesão <b>no tronco encefálico</b>: mais caudal e mais grave.']
    ]) +
    co('tip', 'Exemplo do material', 'Abre os olhos à dor (2) + sons incompreensíveis (2) + retirada inespecífica (4) = <b>Glasgow 8</b>: coma, proteger a via aérea.') +
    co('info', 'Por que a descerebração é mais grave', 'Na decorticação o tronco ainda está íntegro e a lesão está acima do núcleo rubro, que mantém a flexão dos braços. Quando a lesão desce para o tronco, abaixo do núcleo rubro, predominam as vias vestibuloespinhais (extensoras): tudo estende.') },

  { id: 'pupilas', h: 'Pupilas',
    html: tb(['Achado', 'Significado (material)'], [
      ['<b>Isocóricas</b>, reagentes à luz', 'Normal'],
      ['<b>Mióticas</b>', 'Drogas (opioides) e lesões do sistema nervoso central (ponte)'],
      ['<b>Midriáticas</b>', 'PCR, TCE, hemorragia, choque, anóxia ou hipóxia grave'],
      ['<b>Anisocóricas</b>', 'AVE, TCE (compressão do NC III do lado da pupila dilatada)']
    ]) +
    ul(['Reflexo <b>fotomotor direto</b> (a pupila iluminada contrai) e <b>consensual</b> (a outra também contrai).', 'Via: aferência pelo <b>NC II</b>, eferência parassimpática pelo <b>NC III</b>.']) +
    co('warn', 'Anisocoria no rebaixamento', 'Pupila dilatada e pouco reativa num paciente com rebaixamento sugere <b>herniação uncal comprimindo o NC III</b>: as fibras parassimpáticas ficam na superfície do nervo e são as primeiras afetadas.') },

  { id: 'marcha', h: 'Marcha',
    html: '<p>A marcha integra <b>força, tônus, coordenação, propriocepção e cerebelo</b>. Observe a fase de apoio, a fase de balanço, a amplitude da passada e a cadência. Impossibilidade completa de andar = <b>abasia</b>.</p>' +
    tb(['Marcha', 'Como é', 'Onde está a lesão'], [
      ['<b>Espástica: ceifante</b> (unilateral) ou <b>em tesoura</b> (bilateral)', 'O membro espástico avança fazendo um arco lateral; na forma bilateral as pernas se cruzam', '<b>Piramidal</b> (1º neurônio): AVC, paraparesias espásticas'],
      ['<b>Braquibásica</b> (parkinsoniana)', 'Passos curtos e arrastados, pouco balanço dos braços, postura fletida, início hesitante, dificuldade de virar', '<b>Extrapiramidal</b>: Parkinson e parkinsonismos'],
      ['<b>Ebriosa</b> (atáxica)', 'Base alargada, trajeto irregular e instável', '<b>Cerebelo</b> ou vestibular'],
      ['<b>Talonante</b> (tabética)', 'Eleva demais as pernas e bate o calcanhar no chão; <b>piora de olhos fechados</b>', '<b>Perda de propriocepção</b>: tabes dorsalis, polineuropatias sensitivas'],
      ['<b>Anserina</b>', 'Balanceio exagerado do quadril ("passo de pato")', '<b>Fraqueza proximal</b> dos MMII: distrofias musculares'],
      ['<b>Escarvante</b>', 'Pé cai na fase de balanço; eleva o joelho para compensar', '<b>Nervo fibular</b> (pé caído) ou raízes L4–L5']
    ]) +
    co('tip', 'Perguntas de fixação', ul([
      '<b>AVC hemisférico direito</b> → hemiparesia esquerda → marcha <b>ceifante</b> à esquerda (braço fletido junto ao corpo, perna estendida que faz um arco).',
      '<b>Talonante piora de olhos fechados</b> porque a visão compensa a falta de propriocepção. O teste formal é o <b>Romberg</b>.',
      '<b>Ebriosa × talonante:</b> a ebriosa é cerebelar (falta coordenação; não melhora com a visão); a talonante é sensitiva (falta informação de posição; coluna posterior ou nervo periférico; piora sem a visão).'
    ])) },

  { id: 'romberg', h: 'Equilíbrio e sinal de Romberg',
    html: '<p>Paciente em pé, pés juntos, <b>olhos abertos e depois fechados</b>. <b>Romberg positivo</b>: equilíbrio mantido de olhos abertos, com oscilação ou queda ao fechá-los. O paciente compensava a perda proprioceptiva com a visão. Sensibilização: posição <b>pé ante pé</b> (Romberg sensibilizado) ou empurrões leves.</p>' +
    tb(['Causa', 'Romberg', 'Padrão da queda', 'Achados associados'], [
      ['<b>Cerebelo</b>', '<b>Negativo</b>: já oscila de olhos abertos; piora pouco ao fechar', 'Base alargada, sem lado definido', 'Marcha ebriosa, dismetria, disdiadococinesia, tremor intencional'],
      ['<b>Vestibular</b>', 'Positivo', '<b>Lateropulsão</b>: cai para o lado da lesão', 'Vertigem, nistagmo, náuseas; marcha em estrela'],
      ['<b>Nervos periféricos / colunas posteriores</b> (ataxia sensitiva)', '<b>Positivo</b>, com piora marcante ao fechar os olhos', 'Cai ao fechar os olhos', 'Marcha talonante; vibração e posição reduzidas; reflexos abolidos']
    ]) +
    co('tip', 'Como ler', 'Oscila já de olhos abertos: <b>cerebelo</b>. Cai só ao fechar os olhos: <b>propriocepção</b> (nervo periférico ou coluna posterior). Queda para um lado com vertigem: <b>vestibular</b>.') },

  { id: 'nc', h: 'Nervos cranianos',
    html: '<p>12 pares. Origem no tronco, exceto o I e o II. <b>Mesencéfalo: III e IV · Ponte: V, VI, VII e VIII · Bulbo: IX, X, XI e XII</b>.</p>' +
    tb(['Nervo', 'Função', 'Exame', 'Lesão'], [
      ['<b>I Olfatório</b>', 'Olfato', 'Odores conhecidos, uma narina por vez', '<b>Anosmia</b>: TCE, meningioma do sulco olfatório, precoce em <b>Parkinson e Alzheimer</b>'],
      ['<b>II Óptico</b>', 'Visão', 'Acuidade (Snellen), campo visual por confrontação, fundoscopia, reflexo fotomotor', 'Edema de papila = <b>hipertensão intracraniana</b>; atrofia óptica = lesão crônica; anopsias'],
      ['<b>III Oculomotor</b>', 'Maioria dos músculos oculares, elevador da pálpebra, pupila (parassimpático)', 'Seis posições do olhar; pupilas', '<b>Ptose, olho "para baixo e para fora", midríase</b>'],
      ['<b>IV Troclear</b>', 'Oblíquo superior (olhar para baixo e para dentro)', 'Seis posições do olhar', 'Diplopia vertical, piora ao descer escadas'],
      ['<b>V Trigêmeo</b>', 'Sensibilidade da face (V1, V2, V3); músculos da mastigação', 'Tato e dor na face; morder; reflexo córneo-palpebral (aferente V1)', 'Mandíbula desvia para o <b>lado da lesão</b>'],
      ['<b>VI Abducente</b>', 'Reto lateral (abdução)', 'Olhar lateral', '<b>Desvio medial</b> e diplopia horizontal ao olhar para o lado afetado'],
      ['<b>VII Facial</b>', 'Mímica facial, paladar dos 2/3 anteriores da língua, autonômico (lágrima, saliva)', 'Franzir a testa, fechar os olhos, sorrir; eferente do córneo-palpebral', 'Central × periférica (ver abaixo)'],
      ['<b>VIII Vestibulococlear</b>', 'Audição (coclear) e equilíbrio (vestibular)', 'Weber e Rinne; reflexo vestíbulo-ocular (teste do impulso cefálico)', 'Hipoacusia, vertigem, nistagmo'],
      ['<b>IX e X</b> Glossofaríngeo e Vago', 'Deglutição, fonação, reflexo do vômito', 'Elevação do palato, "Ah", reflexo nauseoso', '<b>Úvula desvia para o lado são</b> (contralateral à lesão); disfonia, disfagia'],
      ['<b>XI Acessório</b>', 'Esternocleidomastóideo e trapézio superior', 'Rodar a cabeça e elevar os ombros contra resistência', 'Fraqueza para elevar o ombro'],
      ['<b>XII Hipoglosso</b>', 'Músculos da língua', 'Protrusão e movimentos da língua', 'Na lesão periférica a língua <b>desvia para o lado lesado</b>']
    ]) +
    co('tip', 'Regra do "lado são empurra"', 'Língua (XII) e mandíbula (V motor): desviam <b>para o lado lesado</b>, porque o lado são empurra sem oposição. Úvula (IX/X): desvia <b>para o lado são</b>, porque o lado são puxa o palato para si.') },

  { id: 'facial', h: 'Paralisia facial: central × periférica',
    html: tb(['', 'Central (1º neurônio, ex.: AVC)', 'Periférica (núcleo ou nervo, ex.: Bell)'], [
      ['Hemiface superior (testa, fechar o olho)', '<b>Poupada</b>: representação cortical bilateral', '<b>Comprometida</b>, incluindo fronte e orbicular do olho'],
      ['Hemiface inferior (boca)', 'Comprometida', 'Comprometida'],
      ['Lado', '<b>Contralateral</b> à lesão encefálica', '<b>Ipsilateral</b> à lesão'],
      ['Fenômeno de Bell', 'Ausente', '<b>Presente</b>']
    ]) +
    '<p><b>Fenômeno de Bell:</b> ao tentar fechar a pálpebra, o globo ocular desvia para cima e fica visível, porque o orbicular do olho não fecha.</p>' +
    co('info', 'Por que a central poupa a testa', 'O núcleo do facial que comanda a metade de cima do rosto recebe fibras dos <b>dois</b> córtices; a metade de baixo recebe só do córtex <b>contralateral</b>. Numa lesão cortical, o outro hemisfério ainda mantém a testa funcionando.') +
    co('tip', 'Questão integradora 5', 'Olho direito não fecha, fronte não franze à direita e a boca desvia para a esquerda ao sorrir, sem fraqueza de membros: <b>paralisia facial periférica direita</b> (NC VII). É periférica porque a <b>testa está acometida</b>; a central pouparia a fronte e viria com hemiparesia.') },

  { id: 'olhos', h: 'Motricidade ocular, vias ópticas e nistagmo',
    html: '<h3>NC III: compressivo × diabético</h3>' +
    '<p>As fibras <b>parassimpáticas (pupilares) ficam na superfície</b> do NC III. Um <b>aneurisma da comunicante posterior</b> comprime de fora para dentro e lesa primeiro essas fibras: <b>midríase</b>. Na <b>neuropatia diabética</b> a lesão é isquêmica, no centro do nervo (vasa nervorum), e as fibras superficiais são poupadas: ptose e olho para baixo e para fora, <b>com pupila normal</b>.</p>' +
    '<h3>Vias ópticas</h3>' +
    tb(['Local da lesão', 'Defeito'], [
      ['Nervo óptico', 'Cegueira do olho do mesmo lado'],
      ['<b>Quiasma</b> (adenoma de hipófise)', '<b>Hemianopsia bitemporal</b>'],
      ['Trato ou <b>radiações ópticas</b>, córtex occipital', '<b>Hemianopsia homônima contralateral</b>']
    ]) +
    '<h3>Nistagmo</h3><p>Movimento ocular rítmico e involuntário, com fase lenta (deriva) e fase rápida de correção. <b>A direção é nomeada pela fase rápida.</b></p>' +
    tb(['Tipo', 'Características', 'Situações'], [
      ['<b>Periférico (vestibular)</b>', 'Horizonto-rotatório, <b>unidirecional</b>, <b>inibido pela fixação visual</b>, esgota com a repetição, <b>vertigem intensa</b>', 'Labirintite, neurite vestibular, VPPB'],
      ['<b>Central</b>', '<b>Vertical</b>, puramente horizontal ou rotatório puro, <b>bidirecional</b> (muda com o olhar), não inibido pela fixação, pouca vertigem', 'AVC de tronco ou cerebelo, esclerose múltipla, tumores de fossa posterior'],
      ['Evocado pelo olhar', 'Aparece ao olhar para o lado', 'Anticonvulsivantes, álcool, lesão cerebelar'],
      ['Pendular', 'Fases de velocidade igual', 'Congênito, baixa visão precoce, esclerose múltipla'],
      ['Optocinético', 'Induzido por alvos em movimento (olhar pela janela do trem)', 'Fisiológico']
    ]) +
    co('info', 'Reflexo vestíbulo-ocular (impulso cefálico)', 'O paciente fixa um alvo e o examinador gira a cabeça rapidamente: normalmente os olhos ficam no alvo. É um componente do <b>HINTS</b> (impulso cefálico, nistagmo, skew), usado na vertigem aguda. Paradoxo útil: <b>impulso cefálico alterado</b> sugere lesão <b>periférica</b>; impulso <b>normal</b> num paciente com vertigem intensa e nistagmo preocupa para causa <b>central</b> (AVC).') +
    co('tip', 'Weber e Rinne (complemento)', ul(['<b>Rinne:</b> diapasão na mastoide e depois perto do ouvido. Normal: ouve melhor pelo ar (Rinne positivo). Perda <b>condutiva</b>: osso > ar.', '<b>Weber:</b> diapasão no vértice do crânio. Normal: ouve no meio. Lateraliza para o ouvido com perda <b>condutiva</b> e para longe do ouvido com perda <b>neurossensorial</b>.'])) },

  { id: 'neuronios', h: '1º neurônio × 2º neurônio motor',
    html: cards([
      ['1º neurônio (superior, central)', 'Corpo no <b>córtex motor</b>; axônio desce pelo <b>trato corticoespinhal</b> e cruza na <b>decussação das pirâmides</b> (bulbo); faz sinapse com o 2º neurônio no tronco ou no corno anterior. Lesão = <b>síndrome piramidal</b>.'],
      ['2º neurônio (inferior, periférico)', 'Corpo no <b>corno anterior da medula</b> ou nos núcleos dos nervos cranianos; axônio sai pela raiz e pelo nervo até a junção neuromuscular. É a <b>via final comum</b>.']
    ]) +
    tb(['Achado', '1º neurônio', '2º neurônio'], [
      ['Força', 'Reduzida', 'Reduzida'],
      ['Tônus', '<b>Aumentado</b> (espasticidade)', '<b>Reduzido</b> (hipotonia, flacidez)'],
      ['Reflexos profundos', '<b>Exaltados</b>, clônus', '<b>Reduzidos ou abolidos</b>'],
      ['Cutâneo plantar', '<b>Babinski</b>', 'Flexão plantar (normal)'],
      ['Trofismo', 'Normal ou leve redução (desuso)', '<b>Atrofia importante</b>'],
      ['Fasciculações', 'Ausentes', '<b>Presentes</b>'],
      ['Exemplos', 'AVC, esclerose múltipla, tumor medular', 'Polineuropatia, radiculopatia, ELA (tem os dois)']
    ]) +
    tb(['', 'Via piramidal', 'Via extrapiramidal'], [
      ['Origem', 'Córtex motor, trato corticoespinhal', 'Núcleos da base e circuitos associados'],
      ['Função', 'Movimento voluntário e fino', 'Modula tônus, postura e automatismos'],
      ['Lesão causa', '<b>Paresia</b>', 'Rigidez, tremor de repouso, bradicinesia'],
      ['Tônus', 'Espasticidade em canivete', 'Rigidez plástica em roda denteada'],
      ['Reflexos', 'Hiper-reflexia e Babinski', '<b>Sem paresia nem Babinski</b>'],
      ['Movimentos involuntários', 'Não característicos', 'Presentes'],
      ['Exemplo', 'AVC', 'Doença de Parkinson']
    ]) +
    co('warn', 'AVC agudo × crônico', 'Na fase aguda há <b>choque</b>: o membro fica <b>flácido e hiporreflexo</b>, porque a medula perde de repente o comando de cima. Em dias a semanas surgem <b>espasticidade, hiper-reflexia e Babinski</b>, porque o arco reflexo fica liberado da inibição cortical.') },

  { id: 'forca', h: 'Força, trofismo e tônus',
    html: '<h3>Força: escala MRC</h3>' +
    tb(['Grau', 'Significado'], [['0', 'Sem contração'], ['1', 'Contração visível ou palpável, sem movimento'], ['2', 'Movimento no plano horizontal (sem gravidade)'], ['3', '<b>Vence a gravidade, não vence resistência</b>'], ['4', 'Vence alguma resistência'], ['5', 'Normal']]) +
    ul(['Compare os dois lados, proximal e distal: <b>braços estendidos</b> (proximal MMSS), flexão dos dedos (distal MMSS), elevação da coxa (proximal MMII), dorsiflexão do pé (distal MMII).', '<b>Braços estendidos</b> e <b>Mingazzini</b> (MMII) detectam déficits sutis: o membro parético <b>cai progressivamente</b> (paresia discreta, geralmente piramidal).']) +
    '<h3>Trofismo</h3>' +
    ul(['Inspeção e fita métrica: atrofia, hipertrofia, pseudo-hipertrofia.', '<b>Atrofia importante</b> = 2º neurônio (o músculo perde a inervação). No 1º neurônio a atrofia é leve, por desuso.', '<b>Fasciculações</b> = desnervação (2º neurônio), típicas da <b>ELA</b>.', '<b>Pseudo-hipertrofia de panturrilha</b>: músculo substituído por gordura e fibrose na <b>distrofia de Duchenne</b>.']) +
    '<h3>Tônus</h3><p>Avaliado pela consistência à palpação e pela resistência ao movimento passivo, com o paciente relaxado.</p>' +
    tb(['', 'Piramidal (espástica)', 'Extrapiramidal (plástica)'], [
      ['Padrão', 'Irregular: <b>flexores nos MMSS, extensores nos MMII</b>', 'Uniforme em todos os grupos'],
      ['Resistência', '<b>Velocidade-dependente</b>', 'Constante, independe da velocidade'],
      ['Caráter', 'Elástico', 'Plástico ("cano de chumbo")'],
      ['Sinal', '<b>Canivete</b>: resistência inicial que cede de repente', '<b>Roda denteada</b>: rigidez + tremor, resistência intermitente'],
      ['Exemplo', 'AVC', 'Doença de Parkinson']
    ]) +
    co('info', 'Postura do hemiplégico', 'Como a espasticidade predomina nos flexores do braço e nos extensores da perna, o paciente com AVC fica com o <b>braço fletido junto ao corpo e a perna estendida</b> (postura de Wernicke-Mann). Para andar com a perna estendida, ele a joga em arco: <b>marcha ceifante</b>.') },

  { id: 'reflexos', h: 'Reflexos',
    html: '<p><b>Arco reflexo:</b> resposta motora involuntária a um estímulo sensitivo, processada na medula ou no tronco, sem depender do córtex.</p>' +
    '<div class="flow"><span>1 Receptor: fuso muscular estirado pela percussão</span><span>2 Aferente: fibra Ia até o gânglio da raiz dorsal</span><span>3 Centro: sinapse na medula (monossináptica)</span><span>4 Eferente: motoneurônio alfa pela raiz ventral</span><span>5 Efetor: músculo contrai</span></div>' +
    cards([['Lesão em qualquer ponto do arco', '<b>Hiporreflexia ou arreflexia</b> (2º neurônio, raiz, nervo, receptor).'], ['Lesão do 1º neurônio', 'O córtex deixa de inibir o arco: <b>hiper-reflexia</b>.']]) +
    tb(['Grau', 'Resposta', 'Interpretação'], [
      ['0', 'Ausente mesmo com reforço (<b>Jendrassik</b>)', 'Anormal: 2º neurônio ou arco reflexo'],
      ['1+', 'Diminuído, presente só com reforço', 'Pode ser normal ou patológico'],
      ['2+', 'Normal', 'Normal'],
      ['3+', 'Vivo, aumentado', 'Pode ser normal; sugere 1º neurônio se houver outros sinais'],
      ['4+', 'Exaltado, com <b>clônus</b>', 'Lesão do 1º neurônio']
    ]) +
    '<p class="small">Sempre compare a <b>simetria</b>: reflexo difusamente vivo e simétrico pode ser normal.</p>' +
    tb(['Reflexo profundo', 'Raiz (slides)', 'Faixa (resumo)'], [
      ['Bicipital', '<b>C5–C6</b>', 'C5–C6'],
      ['Estilorradial (braquiorradial)', '<b>C6</b>', 'C5–C6'],
      ['Tricipital', '<b>C7</b>', 'C6–C8'],
      ['Patelar', '<b>L4</b>', 'L2–L4'],
      ['Aquileu', '<b>S1</b>', 'L5–S2']
    ]) +
    '<h3>Reflexos superficiais (cutâneos)</h3>' +
    ul(['<b>Cutâneo plantar:</b> estímulo na face lateral da planta. Normal: flexão do hálux. <b>Babinski</b>: extensão lenta do hálux com abertura em leque dos dedos = lesão piramidal no adulto.', '<b>Cutâneo abdominal:</b> contração da parede ao estímulo em direção à linha média; <b>abolido nas lesões piramidais</b> (T7–T12).', '<b>Cremastérico:</b> elevação do testículo ao estímulo da face interna da coxa; abolido em lesões L1–L2 ou piramidais.']) +
    co('tip', 'Perguntas de fixação', ul([
      '<b>Babinski é fisiológico no lactente</b> (até cerca de 1–2 anos), porque o trato piramidal ainda não está totalmente mielinizado.',
      '<b>Hérnia L4–L5 comprime a raiz L5</b>: L5 não tem reflexo próprio confiável; o achado principal é a fraqueza da <b>extensão do hálux</b> e a hipoestesia do dorso do pé. (Hérnia L5–S1, raiz S1: <b>aquileu</b> diminuído.)'
    ])) },

  { id: 'dermatomos', h: 'Dermátomos e miótomos',
    html: '<p><b>Dermátomo</b>: área da pele inervada por uma única raiz dorsal. <b>Miótomo</b>: músculos inervados por uma única raiz. Como há sobreposição, a lesão de uma só raiz causa <b>hipoestesia</b> (não anestesia) e fraqueza <b>parcial</b>. Não confundir com o território de um nervo periférico.</p>' +
    tb(['Nível', 'Dermátomo', 'Miótomo', 'Reflexo'], [
      ['C4', 'Ombro, clavícula', 'Elevação do ombro; diafragma (C3–C5)', '—'],
      ['C5', 'Face lateral do braço (deltoide)', 'Abdução do ombro, flexão do cotovelo', 'Bicipital'],
      ['C6', 'Face lateral do antebraço e <b>polegar</b>', 'Extensão do punho, flexão do cotovelo', 'Estilorradial e bicipital'],
      ['C7', '<b>Dedo médio</b>', 'Extensão do cotovelo (tríceps)', 'Tricipital'],
      ['C8', '<b>Dedo mínimo</b>, borda medial da mão', 'Flexão dos dedos', '—'],
      ['T1', 'Face medial do antebraço', 'Abdução dos dedos (interósseos)', '—'],
      ['T4 / T10', '<b>Mamilos / umbigo</b>', '—', '—'],
      ['L1', 'Região inguinal', 'Flexão do quadril (fraca)', '—'],
      ['L2', 'Face anterior e superior da coxa', 'Flexão do quadril (iliopsoas)', '—'],
      ['L3', 'Face anterior da coxa até o joelho', 'Extensão do joelho (quadríceps)', 'Patelar'],
      ['L4', 'Face medial da perna, <b>maléolo medial</b>', '<b>Dorsiflexão</b> do tornozelo', 'Patelar'],
      ['L5', 'Face lateral da perna, <b>dorso do pé</b>', '<b>Extensão do hálux</b>', '—'],
      ['S1', '<b>Borda lateral do pé</b>, planta, calcanhar', '<b>Flexão plantar</b>', 'Aquileu']
    ]) +
    co('tip', 'Pé caído: raiz L5 ou nervo fibular?', 'Os dois dão fraqueza da dorsiflexão (marcha escarvante). Na <b>radiculopatia L5</b> há dor lombar irradiada, Lasègue positivo e também fraqueza da <b>inversão</b> do pé e da abdução do quadril (músculos L5 inervados por outros nervos). No <b>fibular</b> (compressão na cabeça da fíbula, ex.: cruzar as pernas) a inversão está preservada e a hipoestesia fica no dorso do pé, sem dor lombar.') },

  { id: 'coordenacao', h: 'Coordenação',
    html: '<p>Depende do <b>cerebelo</b>, das vias proprioceptivas aferentes e das vias motoras. Os principais sinais de doença cerebelar são <b>dismetria</b> e <b>disdiadococinesia</b>.</p>' +
    tb(['Prova', 'Como', 'Alteração cerebelar'], [
      ['<b>Índex-nariz</b> (ou índex-índex)', 'Toca alternadamente o nariz e o dedo do examinador', '<b>Dismetria</b> (erra o alvo) e <b>tremor intencional</b> (piora perto do alvo)'],
      ['<b>Calcanhar-joelho</b>', 'Calcanhar no joelho oposto, deslizando pela tíbia', 'Oscilação, erra o trajeto'],
      ['<b>Diadococinesia</b> (pronação-supinação)', 'Movimentos rápidos e alternados do antebraço', '<b>Disdiadococinesia</b>: lentos e irregulares']
    ]) +
    co('tip', 'Ataxia cerebelar × sensitiva no índex-nariz', 'Repita a prova de <b>olhos fechados</b>. A <b>sensitiva</b> piora muito (a visão compensava a falta de propriocepção). A <b>cerebelar</b> fica igual com os olhos abertos ou fechados.') },

  { id: 'sensibilidade', h: 'Sensibilidade e vias',
    html: tb(['Via', 'Leva', 'Cruza', 'Como testar'], [
      ['<b>Espinotalâmica</b> (exteroceptiva)', '<b>Dor, temperatura</b>, tato grosseiro', '<b>Na medula</b>, 1–2 níveis acima da entrada', 'Algodão (tato), alfinete alternado com ponta romba (dor), tubos quente e frio'],
      ['<b>Coluna posterior</b> (proprioceptiva)', '<b>Posição, vibração</b>, tato fino', '<b>No bulbo</b> (sobe do mesmo lado na medula)', 'Posição do hálux de olhos fechados (cinético-postural), diapasão em proeminências ósseas (palestesia)'],
      ['<b>Corticoespinhal lateral</b> (motora)', 'Movimento voluntário', '<b>No bulbo</b> (pirâmides)', 'Força, reflexos, Babinski']
    ]) +
    '<h3>Síndrome de Brown-Séquard (hemissecção medular)</h3>' +
    tb(['Do lado da lesão', 'Do lado oposto'], [['<b>Paresia de 1º neurônio</b> (espasticidade, hiper-reflexia, Babinski) e perda de <b>propriocepção e vibração</b>', 'Perda de <b>dor e temperatura</b> a partir de 1–2 níveis abaixo da lesão']]) +
    '<p>Explicação: corticoespinhal e coluna posterior ainda não cruzaram (cruzam no bulbo), então o déficit é ipsilateral. A espinotalâmica já cruzou na medula, então o déficit é contralateral.</p>' +
    '<h3>Fibras nervosas</h3>' +
    tb(['Fibra', 'Mielina', 'Velocidade', 'Função'], [
      ['A-alfa', 'Mielinizada, grossa', '70–120 m/s', 'Propriocepção, motoneurônio alfa'],
      ['A-beta', 'Mielinizada', '30–70 m/s', 'Tato fino, pressão, vibração'],
      ['A-gama', 'Mielinizada', '15–30 m/s', 'Fuso muscular (tônus)'],
      ['A-delta', 'Pouco mielinizada', '5–30 m/s', '<b>Dor rápida</b>, frio, tato grosseiro'],
      ['B', 'Mielinizada', '3–15 m/s', 'Autonômicas pré-ganglionares'],
      ['C', '<b>Amielínica</b>', '0,5–2 m/s', '<b>Dor lenta</b> (queimação), calor, autonômicas pós-ganglionares']
    ]) +
    '<p>Fibras <b>finas</b> (A-delta e C) levam dor e temperatura e são as primeiras afetadas nas neuropatias de fibras finas; fibras <b>grossas</b> levam vibração e propriocepção.</p>' +
    co('tip', 'Pergunta de fixação', 'Lesão da <b>coluna posterior direita</b> na medula torácica: perde propriocepção no <b>membro inferior direito</b>, porque essa via sobe do mesmo lado e só cruza no bulbo. A dor não se altera porque viaja por outra via (espinotalâmica), que já cruzou e está do outro lado da medula.') },

  { id: 'meningeos', h: 'Sinais meníngeos',
    html: '<p>Indicam <b>irritação das meninges</b>: meningite, hemorragia subaracnoidea e outras.</p>' +
    tb(['Sinal', 'Como é'], [
      ['<b>Rigidez de nuca</b>', 'Resistência à flexão passiva do pescoço. <b>O sinal mais constante</b>: sempre pesquisar.'],
      ['<b>Brudzinski</b>', 'A flexão passiva do pescoço provoca <b>flexão involuntária de joelhos e quadris</b>.'],
      ['<b>Kernig</b>', 'Com o quadril fletido a 90°, a extensão do joelho é limitada por dor e resistência (ângulo <b>&lt; 135°</b>).'],
      ['<b>Lasègue</b>', 'Elevar o membro inferior estendido provoca dor no trajeto do ciático. Útil na <b>compressão radicular L4–S1</b> (hérnia de disco); também positivo na irritação meníngea.']
    ]) +
    co('info', 'Por que aparecem', 'As meninges e as raízes inflamadas doem quando são estiradas. Flexionar o pescoço ou estender a perna estira a medula e as raízes dentro do canal; o corpo se defende contraindo os músculos (rigidez) ou fletindo quadris e joelhos (Brudzinski) para afrouxar as raízes.') +
    co('tip', 'Perguntas de fixação', ul([
      '<b>28 anos, cefaleia súbita intensa, febre, rigidez de nuca:</b> hipóteses prioritárias são <b>meningite</b> e <b>hemorragia subaracnoidea</b> (cefaleia súbita "a pior da vida"). Pede-se <b>TC de crânio</b> e, se não houver contraindicação, <b>punção lombar</b> (líquor).',
      '<b>Kernig × Lasègue:</b> o Kernig é específico de irritação meníngea; o Lasègue é usado principalmente para <b>radiculopatia</b> (hérnia L4–S1) e só secundariamente para meninges.'
    ])) },

  { id: 'involuntarios', h: 'Movimentos involuntários',
    html: '<p>Caracterize: localização, amplitude, frequência e regularidade.</p>' +
    tb(['Movimento', 'Como é', 'Onde / exemplo'], [
      ['<b>Tremor de repouso</b>', 'Rítmico; aparece em repouso e melhora com o movimento', 'Núcleos da base: <b>Parkinson</b>'],
      ['<b>Tremor postural / de ação</b>', 'Ao manter uma postura (braços estendidos)', '<b>Tremor essencial</b>'],
      ['<b>Tremor intencional</b>', 'Piora ao se aproximar do alvo', '<b>Cerebelo</b>'],
      ['<b>Coreia</b>', 'Rápidos, arrítmicos, amplitude variável, "fluem" de uma parte do corpo para outra', '<b>Huntington</b>, coreia de <b>Sydenham</b> (febre reumática)'],
      ['<b>Balismo</b>', 'Grande amplitude, violentos, raiz dos membros', 'Hemibalismo: <b>núcleo subtalâmico</b> contralateral'],
      ['<b>Mioclonias</b>', 'Contrações breves e súbitas, "choques"', 'Fisiológicas (sono) ou patológicas (epilepsia mioclônica, encefalopatias metabólicas)'],
      ['<b>Distonia</b>', 'Contração <b>sustentada</b> que gera posturas ou movimentos repetitivos', 'Focal (torcicolo, blefaroespasmo), segmentar ou generalizada']
    ]) +
    co('tip', 'Perguntas de fixação', ul([
      '<b>Repouso × intenção:</b> o de repouso some ao mover e é dos núcleos da base (substância negra); o intencional aparece no movimento, piora perto do alvo e é do cerebelo.',
      '<b>Parkinsoniano com tremor que piora ao tocar o nariz:</b> sugere outro componente, cerebelar (ver questão integradora 3).',
      '<b>Coreia × distonia:</b> na coreia predomina excesso de movimento rápido e fluido (circuito hipercinético, como a perda de neurônios do estriado no Huntington); na distonia há contração sustentada de músculos agonistas e antagonistas ao mesmo tempo.'
    ])) },

  { id: 'integradoras', h: 'Questões integradoras resolvidas',
    html: tb(['Caso', 'Resposta'], [
      ['<b>1.</b> 68 anos, acorda com dificuldade para falar e fraqueza no MSD. Força 3 proximal e 2 distal no MSD, reflexos exaltados à direita, Babinski, sem atrofia; paresia da parte inferior da face à direita, fronte poupada.', '<b>Síndrome piramidal (1º neurônio) direita</b> com <b>paralisia facial central</b> e <b>afasia</b>: lesão no <b>hemisfério esquerdo</b> (córtex e cápsula interna, território da artéria cerebral média esquerda). Início súbito ao acordar: <b>AVC</b> isquêmico.'],
      ['<b>2.</b> 45 anos, formigamento progressivo nos pés; vibração abolida nos pés, Romberg positivo, aquileus abolidos, força normal.', '<b>Polineuropatia periférica sensitiva</b> de fibras grossas, comprimento-dependente (pés primeiro). Etiologias: <b>diabetes</b>, <b>deficiência de B12</b>, <b>álcool</b>, hipotireoidismo, sífilis (tabes), fármacos.'],
      ['<b>3.</b> Parkinson há 8 anos, agora com ataxia no calcanhar-joelho e disdiadococinesia.', 'São sinais <b>cerebelares</b>, que não fazem parte do Parkinson. Pense em <b>parkinsonismo atípico</b>: <b>atrofia de múltiplos sistemas</b> (forma cerebelar). Também afastar efeito de fármacos, álcool ou AVC cerebelar.'],
      ['<b>4.</b> 20 anos, cefaleia súbita, pescoço rígido, <b>petéquias</b>, Glasgow 14.', 'Hipótese de <b>meningite meningocócica</b> (petéquias). Pesquisar rigidez de nuca, <b>Kernig</b>, <b>Brudzinski</b>, nível de consciência (Glasgow), sinais focais, pupilas e fundo de olho (edema de papila = hipertensão intracraniana, que muda a conduta antes da punção).'],
      ['<b>5.</b> Olho direito não fecha, fronte não franze à direita, boca desvia para a esquerda, sem fraqueza nos membros.', '<b>Paralisia facial periférica direita</b> (NC VII, tipo Bell): a fronte está acometida, há fenômeno de Bell e não há hemiparesia. Na central, a fronte seria poupada.']
    ]) }
  ]
};

/* ---------- registrar no conteúdo da plataforma ---------- */
TEORIA.push(NEURO);

[
['Abasia', 'Impossibilidade completa de andar.'],
['Anisocoria', 'Pupilas de tamanhos diferentes.'],
['Anosmia', 'Perda do olfato (NC I).'],
['Ataxia', 'Incoordenação dos movimentos, cerebelar ou sensitiva.'],
['Bradicinesia', 'Lentidão para iniciar e executar movimentos (parkinsonismo).'],
['Clônus', 'Contrações rítmicas repetidas após o estiramento brusco de um músculo; indica lesão do 1º neurônio.'],
['Coreia', 'Movimentos rápidos, arrítmicos, que fluem de uma parte do corpo para outra.'],
['Dermátomo', 'Área da pele inervada por uma única raiz dorsal.'],
['Diplopia', 'Visão dupla.'],
['Disartria', 'Dificuldade de articular as palavras (motora), com linguagem preservada.'],
['Disdiadococinesia', 'Dificuldade em fazer movimentos alternados rápidos; sinal cerebelar.'],
['Dismetria', 'Erro na medida do movimento, passando ou não alcançando o alvo; sinal cerebelar.'],
['Distonia', 'Contração muscular sustentada que gera posturas anormais.'],
['Fasciculação', 'Contração visível de unidades motoras em repouso; sinal de desnervação (2º neurônio).'],
['Hemianopsia', 'Perda da visão em metade do campo visual.'],
['Hemiparesia / hemiplegia', 'Fraqueza / paralisia de um lado do corpo.'],
['Miótomo', 'Grupo de músculos inervado por uma única raiz.'],
['Nistagmo', 'Movimento ocular rítmico involuntário, nomeado pela fase rápida.'],
['Obnubilação', 'Rebaixamento leve: lentificação e desorientação; desperta com estímulo verbal forte ou tátil.'],
['Palestesia', 'Sensibilidade vibratória (diapasão).'],
['Paresia', 'Diminuição da força muscular (plegia = ausência).'],
['Parestesia', 'Sensação anormal espontânea: formigamento, dormência.'],
['Ptose palpebral', 'Queda da pálpebra superior (NC III ou simpático).'],
['Torpor (estupor)', 'Só desperta com estímulos intensos e volta logo ao estado anterior.']
].forEach(function (g) { GLOSSARIO.push(g); });
GLOSSARIO.sort(function (a, b) { return a[0].localeCompare(b[0], 'pt'); });

[
['Sinal de Babinski', 'Extensão lenta do hálux com abertura dos dedos ao estímulo plantar → lesão piramidal (fisiológico no lactente).'],
['Sinal de Romberg', 'Equilibrado de olhos abertos, cai ao fechá-los → perda proprioceptiva (coluna posterior, neuropatia).'],
['Sinal do canivete', 'Resistência velocidade-dependente que cede de repente → espasticidade piramidal.'],
['Sinal da roda denteada', 'Resistência intermitente ao movimento passivo → rigidez extrapiramidal (Parkinson).'],
['Fenômeno de Bell', 'Olho desvia para cima ao tentar fechar a pálpebra → paralisia facial periférica.'],
['Sinal de Kernig', 'Quadril a 90°, extensão do joelho limitada (< 135°) → irritação meníngea.'],
['Sinal de Brudzinski', 'Flexão do pescoço flete joelhos e quadris → irritação meníngea.'],
['Sinal de Lasègue', 'Elevar a perna estendida dói no trajeto do ciático → radiculopatia L4–S1.'],
['Manobra de Mingazzini', 'Membros inferiores elevados; o parético cai → paresia discreta.'],
['Manobra de Jendrassik', 'Puxar as mãos entrelaçadas para reforçar um reflexo diminuído.'],
['Decorticação', 'Flexão dos MMSS e extensão dos MMII → lesão acima do mesencéfalo.'],
['Descerebração', 'Extensão e pronação dos quatro membros → lesão do tronco encefálico.'],
['Síndrome de Brown-Séquard', 'Hemissecção medular: motor e propriocepção do mesmo lado; dor e temperatura do lado oposto.'],
['Hemianopsia bitemporal', 'Perda dos campos temporais → lesão do quiasma (adenoma de hipófise).']
].forEach(function (s) { SINAIS.push(s); });

var Q = [
{q:'Paciente abre os olhos à dor, emite sons incompreensíveis e faz retirada inespecífica. Glasgow?', o:['6','8','10','12'], a:1, e:'O2 + V2 + M4 = 8: coma, proteger a via aérea.'},
{q:'Glasgow que define coma e indica proteger a via aérea:', o:['≤ 12','≤ 10','≤ 8','≤ 5'], a:2, e:'Escore ≤ 8.'},
{q:'Flexão dos membros superiores com extensão dos inferiores ao estímulo doloroso indica:', o:['Descerebração, lesão de tronco','Decorticação, lesão acima do mesencéfalo','Retirada inespecífica','Localização da dor'], a:1, e:'Decorticação (M3) = lesão acima do mesencéfalo; descerebração (M2) = tronco, mais grave.'},
{q:'Paciente consciente, tetraplégico, que se comunica piscando e movendo os olhos na vertical:', o:['Estado vegetativo','Mutismo acinético','Síndrome do encarceramento (locked-in)','Catatonia'], a:2, e:'Lesão da base da ponte: consciência preservada, só movimentos oculares verticais.'},
{q:'Ciclos de sono-vigília com olhos abertos, sem consciência de si nem do ambiente, tronco preservado:', o:['Coma','Estado vegetativo','Locked-in','Torpor'], a:1, e:'Lesão cortical difusa com tronco preservado.'},
{q:'Paciente só desperta com estímulo doloroso e volta logo a "dormir":', o:['Sonolento','Obnubilado','Torpor (estupor)','Coma'], a:2, e:'Torpor: só desperta com estímulos intensos e volta ao estado anterior.'},
{q:'Marcha com passos curtos e arrastados, pouco balanço dos braços e dificuldade de virar:', o:['Ceifante','Braquibásica (parkinsoniana)','Talonante','Anserina'], a:1, e:'Marcha braquibásica: Parkinson e parkinsonismos.'},
{q:'Paciente bate o calcanhar no chão, eleva demais as pernas e piora no escuro:', o:['Ebriosa','Escarvante','Talonante (tabética)','Anserina'], a:2, e:'Perda de propriocepção (tabes dorsalis, polineuropatia sensitiva).'},
{q:'Balanceio exagerado do quadril ("passo de pato") indica:', o:['Lesão cerebelar','Fraqueza proximal dos MMII (distrofias)','Pé caído','Lesão piramidal'], a:1, e:'Marcha anserina: fraqueza da cintura pélvica.'},
{q:'Marcha escarvante (pé caído) resulta de lesão de:', o:['Cerebelo','Nervo fibular ou raízes L4–L5','Núcleos da base','Coluna posterior'], a:1, e:'Falha da dorsiflexão: eleva o joelho para o pé não arrastar.'},
{q:'Paciente estável de olhos abertos que cai ao fechá-los. O achado aponta para:', o:['Lesão cerebelar','Perda proprioceptiva (coluna posterior ou nervo periférico)','Lesão piramidal','Lesão do núcleo subtalâmico'], a:1, e:'Romberg positivo: a visão compensava a propriocepção.'},
{q:'No paciente cerebelar, o Romberg é tipicamente:', o:['Positivo com queda brusca','Negativo: já oscila de olhos abertos e piora pouco','Positivo para o lado da lesão','Impossível de testar'], a:1, e:'O cerebelo não depende da visão: o desequilíbrio já existe com olhos abertos.'},
{q:'Ptose, olho "para baixo e para fora" e midríase sugerem lesão do:', o:['NC IV','NC VI','NC III','NC VII'], a:2, e:'Oculomotor; a midríase indica compressão (aneurisma).'},
{q:'Por que a neuropatia diabética do NC III costuma poupar a pupila?', o:['O diabetes não afeta nervos','As fibras pupilares são superficiais e a isquemia diabética lesa o centro do nervo','A pupila depende do NC II','Porque é bilateral'], a:1, e:'Compressão (aneurisma) lesa a superfície: midríase. Isquemia lesa o centro: pupila poupada.'},
{q:'Desvio medial do olho e diplopia horizontal ao olhar para o lado afetado:', o:['NC III','NC IV','NC VI','NC VIII'], a:2, e:'Abducente: reto lateral.'},
{q:'Hemianopsia bitemporal localiza a lesão no:', o:['Nervo óptico','Quiasma óptico','Radiações ópticas','Córtex occipital'], a:1, e:'Clássico do adenoma de hipófise.'},
{q:'Hemianopsia homônima contralateral resulta de lesão:', o:['Do quiasma','Retroquiasmática (trato, radiações, córtex occipital)','Da retina','Do NC III'], a:1, e:'Depois do quiasma as fibras dos dois olhos do mesmo hemicampo seguem juntas.'},
{q:'Paralisia facial que poupa a testa e vem com hemiparesia:', o:['Periférica ipsilateral','Central (1º neurônio), contralateral à lesão encefálica','Periférica bilateral','Do NC V'], a:1, e:'A metade superior do rosto tem representação cortical bilateral.'},
{q:'O fenômeno de Bell é visível na:', o:['Paralisia facial central','Paralisia facial periférica','Lesão do NC III','Lesão do NC V'], a:1, e:'O olho não fecha e o globo desvia para cima.'},
{q:'O reflexo córneo-palpebral tem aferência e eferência, respectivamente, pelos nervos:', o:['II e III','V (V1) e VII','VII e V','III e VII'], a:1, e:'Sensibilidade da córnea pelo trigêmeo; fechamento da pálpebra pelo facial.'},
{q:'Na lesão periférica do NC XII, a língua desvia:', o:['Para o lado são','Para o lado lesado','Para cima','Não desvia'], a:1, e:'O músculo são empurra a língua para o lado fraco.'},
{q:'Na lesão unilateral do IX/X, a úvula desvia:', o:['Para o lado da lesão','Para o lado contralateral à lesão','Para trás','Não desvia'], a:1, e:'O lado são puxa o palato para si.'},
{q:'Nistagmo vertical, que muda de direção com o olhar e não é inibido pela fixação, sugere:', o:['Causa periférica','Causa central (tronco, cerebelo)','VPPB','Nistagmo optocinético'], a:1, e:'Periférico: unidirecional, horizonto-rotatório, inibido pela fixação, vertigem intensa.'},
{q:'A direção do nistagmo é nomeada pela:', o:['Fase lenta','Fase rápida','Direção do olhar','Lado da lesão'], a:1, e:'Fase rápida, de correção.'},
{q:'Anosmia pode ser manifestação precoce de:', o:['Miastenia','Doença de Parkinson e Alzheimer','ELA','Esclerose múltipla apenas'], a:1, e:'Além de TCE e meningioma do sulco olfatório.'},
{q:'Força grau 3 na escala MRC significa:', o:['Contração sem movimento','Movimento só sem gravidade','Vence a gravidade, mas não a resistência','Vence alguma resistência'], a:2, e:'MRC: 0 nada, 1 contração, 2 sem gravidade, 3 contra a gravidade, 4 alguma resistência, 5 normal.'},
{q:'Qual achado é típico de lesão do 2º neurônio motor?', o:['Babinski','Hiper-reflexia','Fasciculações e atrofia importante','Espasticidade'], a:2, e:'2º neurônio: hipotonia, arreflexia, atrofia, fasciculações.'},
{q:'Qual combinação indica lesão do 1º neurônio motor?', o:['Hipotonia, arreflexia, fasciculações','Espasticidade, hiper-reflexia, Babinski','Rigidez em roda denteada, tremor de repouso','Atrofia e flexão plantar normal'], a:1, e:'Síndrome piramidal.'},
{q:'A doença que combina sinais de 1º e 2º neurônio motor é:', o:['Parkinson','ELA','Polineuropatia diabética','Distrofia de Duchenne'], a:1, e:'Esclerose lateral amiotrófica.'},
{q:'Resistência ao movimento passivo que aumenta com a velocidade e cede de repente:', o:['Roda denteada','Canivete (espasticidade piramidal)','Cano de chumbo','Paratonia'], a:1, e:'Velocidade-dependente: piramidal.'},
{q:'O sinal da roda denteada resulta de:', o:['Espasticidade + clônus','Rigidez plástica + tremor (Parkinson)','Hipotonia cerebelar','Lesão de nervo periférico'], a:1, e:'Resistência intermitente.'},
{q:'Na hipertonia piramidal predominam:', o:['Extensores nos MMSS e flexores nos MMII','Flexores nos MMSS e extensores nos MMII','Todos os grupos igualmente','Só os músculos distais'], a:1, e:'Postura de Wernicke-Mann: braço fletido, perna estendida.'},
{q:'Pseudo-hipertrofia de panturrilha é clássica de:', o:['ELA','Distrofia muscular de Duchenne','AVC','Polineuropatia'], a:1, e:'Músculo substituído por gordura e fibrose.'},
{q:'Na fase aguda de um AVC, o membro parético costuma estar:', o:['Espástico e hiper-reflexo','Flácido e hiporreflexo (choque)','Com fasciculações','Com roda denteada'], a:1, e:'A espasticidade e a hiper-reflexia surgem depois de dias a semanas.'},
{q:'O reflexo patelar avalia principalmente a raiz:', o:['C5','L4','L5','S1'], a:1, e:'Faixa L2–L4, principalmente L4.'},
{q:'O reflexo aquileu avalia principalmente a raiz:', o:['L3','L4','L5','S1'], a:3, e:'Aquileu = S1.'},
{q:'O reflexo tricipital avalia principalmente:', o:['C5','C6','C7','C8'], a:2, e:'Bicipital C5–C6, estilorradial C6, tricipital C7.'},
{q:'Reflexo graduado 4+ com clônus indica:', o:['Normal','Lesão do 2º neurônio','Lesão do 1º neurônio','Lesão do nervo periférico'], a:2, e:'Hiper-reflexia com clônus.'},
{q:'A manobra de Jendrassik serve para:', o:['Testar a força','Reforçar um reflexo diminuído','Pesquisar irritação meníngea','Testar o cerebelo'], a:1, e:'Puxar as mãos entrelaçadas distrai e facilita o reflexo.'},
{q:'O sinal de Babinski é fisiológico:', o:['No idoso','No lactente, pela mielinização incompleta do trato piramidal','Durante o sono','Nunca'], a:1, e:'No adulto indica lesão piramidal.'},
{q:'O reflexo cutâneo abdominal está abolido em:', o:['Lesões piramidais','Lesões cerebelares','Doença de Parkinson','Neuropatia de fibras finas'], a:0, e:'Ao contrário dos profundos, os superficiais somem na lesão piramidal.'},
{q:'O dermátomo do dedo médio é:', o:['C6','C7','C8','T1'], a:1, e:'C6 polegar, C7 dedo médio, C8 dedo mínimo.'},
{q:'O umbigo corresponde ao dermátomo:', o:['T4','T7','T10','L1'], a:2, e:'T4 mamilos, T10 umbigo, L1 região inguinal.'},
{q:'Fraqueza da extensão do hálux e hipoestesia no dorso do pé sugerem raiz:', o:['L3','L4','L5','S1'], a:2, e:'L5: extensão do hálux, dorso do pé.'},
{q:'Flexão plantar fraca, borda lateral do pé dormente e aquileu abolido:', o:['L4','L5','S1','S2'], a:2, e:'Raiz S1 (hérnia L5–S1).'},
{q:'Dismetria e tremor que piora ao se aproximar do alvo indicam disfunção:', o:['Piramidal','Extrapiramidal','Cerebelar','Da coluna posterior'], a:2, e:'Prova índex-nariz alterada.'},
{q:'Como diferenciar ataxia sensitiva de cerebelar no índex-nariz?', o:['Pela velocidade','A sensitiva piora muito de olhos fechados','A cerebelar some de olhos fechados','Não há diferença'], a:1, e:'Na sensitiva a visão compensa a falta de propriocepção.'},
{q:'A dor e a temperatura sobem pelo:', o:['Funículo posterior, cruzando no bulbo','Trato espinotalâmico, cruzando na medula','Trato corticoespinhal','Trato espinocerebelar'], a:1, e:'Cruza 1–2 níveis acima da entrada.'},
{q:'Na síndrome de Brown-Séquard, do lado da lesão há:', o:['Perda de dor e temperatura','Paresia e perda de propriocepção e vibração','Só perda de tato','Nada'], a:1, e:'Dor e temperatura somem do lado oposto.'},
{q:'A sensibilidade vibratória é testada com:', o:['Algodão','Alfinete','Diapasão de 128 ou 256 Hz em proeminências ósseas','Tubos quente e frio'], a:2, e:'Palestesia, via coluna posterior.'},
{q:'Fibras amielínicas, lentas, que conduzem dor em queimação e calor:', o:['A-alfa','A-beta','A-delta','C'], a:3, e:'A-delta: dor rápida e frio; C: dor lenta e calor.'},
{q:'O sinal meníngeo mais constante é:', o:['Kernig','Brudzinski','Rigidez de nuca','Lasègue'], a:2, e:'Sempre pesquisar.'},
{q:'A flexão passiva do pescoço provoca flexão de joelhos e quadris. Esse é o sinal de:', o:['Kernig','Brudzinski','Lasègue','Romberg'], a:1, e:'Irritação meníngea.'},
{q:'Com o quadril a 90°, a extensão do joelho fica limitada a menos de 135° por dor. Esse é o sinal de:', o:['Lasègue','Kernig','Brudzinski','Babinski'], a:1, e:'Irritação meníngea.'},
{q:'O sinal de Lasègue é usado principalmente para:', o:['Meningite','Compressão radicular L4–S1 (hérnia de disco)','Lesão cerebelar','Lesão do NC VIII'], a:1, e:'Também pode ser positivo na irritação meníngea.'},
{q:'Tremor que surge ao manter os braços estendidos, sem outros sinais, em familiares também:', o:['Parkinson','Tremor essencial','Tremor cerebelar','Coreia'], a:1, e:'Tremor postural/de ação.'},
{q:'Movimentos rápidos, arrítmicos, que fluem de uma parte do corpo para outra:', o:['Distonia','Coreia','Mioclonia','Balismo'], a:1, e:'Huntington, Sydenham.'},
{q:'Hemibalismo resulta de lesão do:', o:['Cerebelo','Núcleo subtalâmico','Tálamo','Córtex motor'], a:1, e:'Movimentos amplos e violentos da raiz dos membros, contralaterais.'},
{q:'Contração muscular sustentada que gera torcicolo ou blefaroespasmo:', o:['Coreia','Mioclonia','Distonia','Tremor'], a:2, e:'Distonia focal.'},
{q:'Paciente com tremor de início recente: o primeiro item da anamnese a investigar é:', o:['História familiar','Medicações em uso','Desenvolvimento psicomotor','Religião'], a:1, e:'Tremor induzido por fármacos.'},
{q:'Na anamnese neurológica, início súbito sugere principalmente:', o:['Doença neurodegenerativa','AVC ou crise epiléptica','Tumor de crescimento lento','Polineuropatia'], a:1, e:'Insidioso sugere degenerativo.'},
{q:'Edema de papila na fundoscopia indica:', o:['Atrofia óptica','Hipertensão intracraniana','Glaucoma','Lesão do NC III'], a:1, e:'Atrofia óptica indica lesão crônica.'}
];
Q.forEach(function (x) { x.t = 'neuro'; QUIZ.push(x); });
})();

/* Revisões ao final das estações estilo prova (parte 2: abdome e exame geral) */
window.SEMIO_REVISOES = window.SEMIO_REVISOES || {};
Object.assign(window.SEMIO_REVISOES, {

'cirrose-ascite': {
  fisio: '<p>A agressão crônica (álcool, hepatite C) leva a fibrose e nódulos de regeneração. Isso causa dois grandes problemas:</p><ul><li><b>Hipertensão portal:</b> o sangue tem dificuldade de atravessar o fígado. Abre colaterais (varizes esofágicas, cabeça de medusa), congestiona o baço (esplenomegalia) e transuda para o peritônio (ascite).</li><li><b>Insuficiência hepática:</b> menos albumina (pressão oncótica baixa), menos fatores de coagulação (equimoses), menos conjugação de bilirrubina (icterícia), menos degradação de estrogênio (aranhas, eritema palmar, ginecomastia) e de amônia (encefalopatia).</li></ul><p>A <b>ascite</b> soma hipertensão portal + hipoalbuminemia + retenção renal de sódio (vasodilatação esplâncnica ativa o sistema renina-angiotensina-aldosterona).</p>',
  sinais: [['Abdome globoso/batráquio', 'Líquido nos flancos em decúbito.'], ['Macicez móvel', 'O líquido desce para o lado mais baixo e as alças com gás sobem (médio volume, o mais sensível).'], ['Semicírculo de Skoda', 'Linha timpanismo-macicez côncava para cima; percutir do epigástrio.'], ['Piparote', 'Onda líquida, só em grande volume (> 3–4 L).'], ['Circulação colateral tipo porta', 'Fluxo centrífugo a partir do umbigo.'], ['Fígado nodular, rombo, indolor', 'Fibrose com nódulos.']],
  tecnica: ['Hepatimetria: LHC D, do 2º EIC para baixo até a macicez (limite superior); de baixo para cima até a macicez (limite inferior); medir com régua ou dedos; normal 6–12 cm.', 'Percussão: 3 pontos por quadrante, sentido horário, do QSD, após a ausculta.', 'Na hepatomegalia avaliar: borda, superfície, consistência, sensibilidade.'],
  dif: [['IC direita', 'Jugular cheia, refluxo HJ, fígado liso doloroso.'], ['Esquistossomose', 'Baço enorme, função hepática preservada.'], ['Síndrome nefrótica', 'Edema facial, urina espumosa.'], ['Trombose de porta', 'Sem icterícia/hipoalbuminemia, colateral tipo cava.']],
  pegadinha: 'Caiu: hepatimetria com régua, 3 achados, percussão de todo o abdome, explicar a ascite.'
},
'apendicite': {
  fisio: '<p>A luz do apêndice é obstruída (fecalito, hiperplasia linfoide): o apêndice distende, inflama e pode necrosar e perfurar. No início, a distensão gera <b>dor visceral</b> (surda, periumbilical, pela inervação embrionária do intestino médio). Quando a inflamação atinge o <b>peritônio parietal</b>, a dor fica aguda e localizada na FID. Anorexia, náusea e vômito vêm depois da dor.</p>',
  sinais: [['Dor no ponto de McBurney', '⅓ da EIAS direita até o umbigo: projeção do apêndice.'], ['Blumberg', 'Descompressão brusca separa folhetos com fibrina e estimula o peritônio parietal.'], ['Rovsing', 'A compressão da FIE empurra gases até o ceco e distende o apêndice.'], ['Psoas', 'Apêndice retrocecal encostado no músculo psoas.'], ['Obturador', 'Apêndice pélvico próximo ao músculo obturador.'], ['Lenander', 'Temperatura retal > axilar em mais de 1 °C (inflamação pélvica).']],
  tecnica: ['Palpação superficial (mão espalmada) e profunda (deslizante, 45°, na expiração), começando longe da dor.', 'Avisar antes do Blumberg; observar a face.'],
  dif: [['Pielonefrite/cólica renal', 'Sintomas urinários, Giordano.'], ['Doenças ginecológicas', 'Ectópica (atraso menstrual), anexite.'], ['Diverticulite', 'Idoso, FIE.']],
  pegadinha: 'Gabarito: palpação superficial + profunda + Blumberg e Rovsing.'
},
'vesicula': {
  fisio: '<p>Um cálculo obstrui o ducto cístico; a vesícula distende e inflama. A colecistocinina liberada após refeição gordurosa contrai a vesícula contra o cálculo: dor no hipocôndrio direito 1–3 h após comer. A dor irradia para o ombro/escápula direita por irritação do diafragma (nervo frênico, C3–C5). Como o colédoco está livre, raramente há icterícia.</p>',
  sinais: [['Murphy', 'Na inspiração o fígado desce e empurra a vesícula inflamada contra os dedos no ponto cístico: a dor interrompe a inspiração.'], ['Defesa no hipocôndrio direito', 'Irritação peritoneal local.'], ['Charcot (se colangite)', 'Febre + icterícia + dor: cálculo no colédoco infectado.'], ['Courvoisier (outro contexto)', 'Vesícula palpável indolor + icterícia: tumor.']],
  tecnica: ['Palpação hepática: Lemos-Torres (mão E na loja renal) ou Mathieu (em garra), inspiração profunda.', 'Murphy: comprimir o ponto cístico (rebordo × LHC) e pedir inspiração profunda.'],
  dif: [['Colangite', 'Febre alta + icterícia (Charcot); Reynolds se choque e confusão.'], ['Hepatite', 'Fígado doloroso difusamente, icterícia, pródromo.'], ['Pancreatite', 'Dor epigástrica em faixa para o dorso.'], ['IAM inferior', 'Pode simular dor epigástrica.']],
  pegadinha: 'Murphy = dor (inflamação). Courvoisier = indolor (distensão lenta por tumor).'
},
'baco-portal': {
  fisio: '<p>Os ovos do Schistosoma mansoni se alojam nos ramos da veia porta e causam fibrose periportal. O fluxo portal fica bloqueado: <b>hipertensão portal pré-sinusoidal</b>, com função hepática preservada. A veia esplênica drena para a porta, então o baço congestiona e cresce muito. O sangue busca colaterais porto-sistêmicas (varizes esofágicas), que podem romper (hematêmese, melena).</p>',
  sinais: [['Traube maciço', 'O baço aumentado ocupa o espaço da bolha gástrica.'], ['Castell positivo', 'Na inspiração o baço desce até o último EIC na LAA.'], ['Baço palpável', 'Só é palpável se aumentar cerca de 2 vezes.'], ['Lobo esquerdo duro', 'Fibrose característica da esquistossomose.'], ['Sem icterícia e sem estigmas', 'A função hepática está preservada.']],
  tecnica: ['Traube: 6ª costela E, rebordo, LAA, lobo E do fígado; normal timpânico.', 'Castell: último EIC na LAA E, percutir em expiração e em inspiração.', 'Palpação do baço: mão E elevando o gradil, mão D oblíqua da FID ao rebordo; Schuster se não palpar.', 'Colateral: esvaziar um segmento da veia e ver de que lado enche.'],
  dif: [['Cirrose', 'Estigmas de insuficiência hepática, fígado nodular.'], ['Doenças hematológicas', 'Linfoma, leucemia: linfonodos, sintomas B.'], ['Trombose de porta', 'Sem área endêmica; colateral tipo cava.']],
  pegadinha: 'Colateral tipo porta: centrífuga a partir do umbigo. Tipo cava inferior: flancos, sempre ascendente.'
},
'obstrucao': {
  fisio: '<p>Uma aderência (brida) de cirurgia prévia dobra ou estrangula a alça. Acima do bloqueio, gás e líquido se acumulam e a alça contrai com força contra o obstáculo (<b>peristaltismo de luta</b>): cólica, distensão, ruídos metálicos. Abaixo, o intestino esvazia: parada de gases e fezes. Se a alça ficar sem sangue (estrangulamento), ela necrosa, o peritônio inflama e o intestino para.</p>',
  sinais: [['Peristaltismo visível', 'Alças distendidas contraindo contra o obstáculo.'], ['RHA hiperativos metálicos', 'Gás sob pressão ressoa; depois do bloqueio, raros ou abolidos.'], ['Hipertimpanismo', 'Excesso de gás.'], ['Cicatriz cirúrgica', 'Aderências.'], ['Vômitos', 'Precoces na obstrução alta; fecaloides tardios na baixa.']],
  tecnica: ['Ausculta antes de percutir e palpar; centro dos quadrantes ~15 s; normal 5–34/min; abolido = 3–5 min sem ruído.', 'Inspecionar hérnias com Valsalva.'],
  dif: [['Íleo paralítico', 'RHA abolidos, sem cólica.'], ['Peritonite', 'Dor contínua, tábua, RHA abolidos.'], ['Fecaloma', 'Massa moldável no sigmoide (Gersuny).']],
  pegadinha: 'Tríade: cólica + vômitos + peristaltismo visível. Defesa + RHA abolidos = sofrimento de alça.'
},
'perfuracao': {
  fisio: '<p>O AINE e o ácido corroem a mucosa até perfurar a parede do estômago/duodeno. Ar e suco gástrico escapam para a cavidade peritoneal: <b>peritonite química</b> (depois bacteriana). O ar livre sobe e fica entre o fígado e o diafragma. A irritação de todo o peritônio causa rigidez muscular involuntária difusa e paralisa o intestino.</p>',
  sinais: [['Jobert', 'Ar livre sobre o fígado substitui a macicez por timpanismo.'], ['Abdome em tábua', 'Defesa involuntária generalizada.'], ['Blumberg difuso', 'Peritônio inflamado em todo o abdome.'], ['RHA abolidos', 'Íleo paralítico.'], ['Imobilidade, respiração torácica', 'Qualquer movimento dói.']],
  tecnica: ['Percutir a LHC direita sobre a área hepática.', 'Defesa voluntária cede na expiração/com distração; involuntária não.'],
  dif: [['Chilaiditi', 'Alça entre fígado e diafragma, sem peritonite.'], ['Pancreatite', 'Dor em faixa, Cullen/Grey-Turner.'], ['IAM', 'Pode simular dor epigástrica.']],
  pegadinha: 'Jobert = pneumoperitônio; Chilaiditi NÃO é perfuração.'
},
'pancreatite': {
  fisio: '<p>Álcool ou cálculo biliar ativam as enzimas pancreáticas dentro do próprio pâncreas: <b>autodigestão</b>. A inflamação retroperitoneal causa dor epigástrica em faixa para o dorso, vômitos e íleo paralítico. Há grande sequestro de líquido (hipovolemia, taquicardia). Na forma necro-hemorrágica, o sangue disseca pelo retroperitônio até a pele: Cullen e Grey-Turner.</p>',
  sinais: [['Cullen', 'Equimose periumbilical por sangue retroperitoneal.'], ['Grey-Turner', 'Equimose nos flancos.'], ['RHA abolidos', 'Íleo paralítico.'], ['Defesa no andar superior', 'Irritação peritoneal.'], ['Taquicardia, hipotensão', 'Hipovolemia por sequestro.']],
  tecnica: ['Inspeção de frente, tangencial e dos pés da maca.', 'Fatores de risco: álcool, litíase, hipertrigliceridemia.'],
  dif: [['Úlcera perfurada', 'Súbita, Jobert, tábua.'], ['Colecistite', 'Murphy, hipocôndrio direito.'], ['Aneurisma roto', 'Massa pulsátil, choque.']],
  pegadinha: 'Cullen (umbigo) e Grey-Turner (flancos) indicam GRAVIDADE.'
},
'pielonefrite': {
  fisio: '<p>Bactérias da bexiga (cistite: disúria, polaciúria, urgência) sobem pelo ureter até o rim: infecção do parênquima renal. O rim inflama e edemacia, distendendo a cápsula. A febre alta com calafrios indica infecção tecidual (a cistite isolada não dá febre alta). Pode evoluir rapidamente para sepse.</p>',
  sinais: [['Giordano positivo', 'A punho-percussão vibra o rim e estira a cápsula inflamada.'], ['Febre alta e calafrios', 'Infecção do parênquima.'], ['Disúria, polaciúria', 'Cistite prévia.'], ['Blumberg negativo', 'O rim é retroperitoneal: não irrita o peritônio anterior.']],
  tecnica: ['Giordano: paciente sentado, ângulo costovertebral, golpe leve com a borda ulnar, comparar os lados.'],
  dif: [['Cólica renal', 'Sem febre, dor em cólica para flanco e genitália, paciente inquieto.'], ['Apendicite retrocecal', 'Psoas positivo, sem sintomas urinários.'], ['Colecistite', 'Murphy.']],
  pegadinha: 'A febre separa pielonefrite de cólica renal.'
},
'courvoisier': {
  fisio: '<p>O tumor de cabeça de pâncreas cresce e comprime lentamente o colédoco distal. A bile não chega ao intestino: <b>icterícia colestática</b> com bilirrubina direta. Por ser hidrossolúvel, ela sai na urina (colúria); sem bile, as fezes ficam claras (acolia); os sais biliares na pele causam prurido. A vesícula, sadia, distende progressivamente e fica palpável e indolor. O câncer consome: emagrecimento.</p>',
  sinais: [['Courvoisier-Terrier', 'Vesícula palpável, globosa e indolor em paciente ictérico.'], ['Colúria', 'Bilirrubina direta na urina.'], ['Acolia', 'Falta de bile no intestino.'], ['Prurido e escoriações', 'Sais biliares na pele.'], ['Virchow', 'Linfonodo supraclavicular esquerdo: metástase abdominal.']],
  tecnica: ['Icterícia: luz natural, esclera e freio lingual, graduar +1 a +4.', 'Virchow: fossa supraclavicular esquerda com as polpas.'],
  dif: [['Coledocolitíase', 'Cólica, icterícia flutuante, vesícula fibrosada que não distende.'], ['Hepatite', 'Pródromo, fígado doloroso, icterícia sem vesícula palpável.'], ['Colangite', 'Charcot.']],
  pegadinha: 'Icterícia INDOLOR + emagrecimento + vesícula palpável = tumor.'
},
'figado-congestao': {
  fisio: '<p>Na doença de Chagas, a miocardite crônica dilata e enfraquece o coração. O VD não esvazia e a pressão venosa sistêmica sobe: o sangue represa nas veias hepáticas e o fígado aumenta. A distensão aguda da <b>cápsula de Glisson</b> dói. O edema de MMII é hidrostático.</p>',
  sinais: [['Fígado liso, doloroso, borda romba', 'Congestão com distensão da cápsula.'], ['Refluxo hepatojugular', 'O VD não recebe o sangue empurrado do fígado.'], ['Turgência jugular', 'PVC alta.'], ['Edema simétrico vespertino', 'Hidrostático.']],
  tecnica: ['Mathieu: de costas para a cabeça do paciente, mãos em garra, inspiração profunda.', 'Refluxo: comprimir o HCD 10–30 s.'],
  dif: [['Cirrose', 'Nodular, indolor, estigmas, jugular vazia.'], ['Hepatite', 'Borda fina, consistência normal, icterícia.'], ['Esteatose', 'Mole, indolor, borda fina.']],
  pegadinha: 'Aumento do abdome com dor = distensão de cápsula; sem dor = ascite.'
},
'edema-nefrotico': {
  fisio: '<p>A lesão do glomérulo deixa passar proteína para a urina (urina espumosa). A albumina do sangue cai e a <b>pressão oncótica</b> diminui: o plasma não consegue segurar a água, que escapa para o interstício (edema) e para as serosas (derrame pleural, ascite) = <b>anasarca</b>. O rim também retém sódio e água. O edema começa na face porque o tecido periorbitário é frouxo e, deitada a noite toda, o líquido se redistribui para o rosto.</p>',
  sinais: [['Edema periorbitário matinal', 'Redistribuição no decúbito.'], ['Edema mole, com cacifo, frio, indolor', 'Líquido livre sem inflamação.'], ['Derrame pleural bilateral e ascite', 'Transudato nas serosas.'], ['Sem turgência jugular', 'Não é cardíaco.'], ['Fácies renal', 'Edema palpebral + palidez.']],
  tecnica: ['Edema: digitopressão alguns segundos sobre a tíbia, graduar +1 a +4, temperatura com o dorso da mão, consistência, dor.', 'Hidratação: mucosas, turgor, enoftalmia, TEC, diurese.'],
  dif: [['IC', 'Jugular cheia, edema vespertino em MMII, B3.'], ['Cirrose', 'Estigmas hepáticos.'], ['Síndrome nefrítica', 'Hematúria, HAS, edema discreto (pós-estreptocócica).'], ['Angioedema', 'Súbito, face e lábios.']],
  pegadinha: 'Edema oncótico (falta albumina) × hidrostático (pressão alta).'
},
'linfonodo-tb': {
  fisio: '<p>O bacilo da tuberculose é transmitido por aerossóis (aglomeração, pouca ventilação). Na forma pós-primária ele se instala nos ápices (mais oxigênio), forma granulomas com necrose caseosa que pode escavar (cavidade). Nos linfonodos, a necrose faz os gânglios aderirem entre si (coalescência) e à pele, podendo fistulizar. A resposta inflamatória crônica dá febre vespertina, sudorese noturna e emagrecimento.</p>',
  sinais: [['Linfonodos coalescentes, endurecidos, indolores', 'Granulomas com necrose que unem os gânglios.'], ['Fístula', 'Típica da TB ganglionar.'], ['FTV aumentado no ápice', 'Parênquima condensado em volta da lesão.'], ['Sopro anfórico/cavitário', 'Ar ressoando em grande cavidade.'], ['Estertores apicais', 'Secreção e inflamação.']],
  tecnica: ['Linfonodos: polpas, movimentos circulares, bilateral, ordem das cadeias; 8 características.', 'Ruault para ápices.'],
  dif: [['Linfoma', 'Linfonodos elásticos, sintomas B, sem cavidade.'], ['Infecção aguda', 'Linfonodo doloroso, móvel, quente.'], ['Metástase', 'Pétreo, fixo; Virchow.']],
  pegadinha: 'Linfonodo duro, indolor e fixo: suspeitar de malignidade (ou TB).'
},
'desidratacao': {
  fisio: '<p>A diarreia aquosa do delgado perde grande volume de água e eletrólitos; o diurético piora a perda. O volume intravascular cai: o simpático aumenta a FC e contrai os vasos periféricos (extremidades frias, TEC lento), o rim retém água (oligúria) e, quando a compensação falha, a PA cai e o cérebro sofre (sonolência, confusão). No idoso a sede é menor e a reserva é pequena.</p>',
  sinais: [['Mucosas muito secas com fissuras', 'Perda de água corporal.'], ['Enoftalmia', 'Perda de líquido periorbitário.'], ['TEC ≥ 3 s, extremidades frias', 'Vasoconstrição.'], ['Hipotensão e taquicardia', 'Hipovolemia.'], ['Oligúria', 'Rim poupando água.'], ['Confusão (Glasgow 13)', 'Hipoperfusão cerebral.']],
  tecnica: ['Hidratação: mucosas, turgor (pouco confiável no idoso), enoftalmia, TEC, PA ortostática, diurese.', 'Glasgow: O3 V4 M6 = 13.'],
  dif: [['Choque séptico', 'Febre, foco infeccioso.'], ['Insuficiência renal', 'Oligúria com sobrecarga de volume.']],
  pegadinha: 'Registrar a informante (filha) e a confiabilidade da história.'
},
'hipotireoidismo': {
  fisio: '<p>A falta de hormônio tireoidiano reduz o metabolismo de todo o corpo: menos produção de calor (intolerância ao frio, pele fria), menos estímulo cardíaco (bradicardia), trânsito intestinal lento (constipação), cansaço e lentidão. Mucopolissacarídeos se depositam na pele e retêm água de forma ligada: <b>mixedema</b>, duro e sem cacifo, na face e na região pré-tibial.</p>',
  sinais: [['Fácies mixedematosa', 'Face arredondada, pálida, edemaciada, apática.'], ['Perda do terço lateral das sobrancelhas', 'Alteração dos pelos.'], ['Edema duro sem cacifo', 'Depósito de mucopolissacarídeos, não água livre.'], ['Bradicardia, hipotermia', 'Metabolismo reduzido.'], ['Pele seca, cabelo quebradiço', 'Menor renovação.']],
  tecnica: ['Descrever a fácies antes de nomear.', 'Diferenciar edema com e sem cacifo pela digitopressão.'],
  dif: [['Síndrome nefrótica', 'Edema mole com cacifo, urina espumosa.'], ['Hipertireoidismo', 'Fácies basedowiana: exoftalmia, taquicardia, ansiedade.'], ['Depressão', 'Sem os sinais físicos.']],
  pegadinha: 'Mixedema e linfedema são os edemas SEM cacifo.'
},
'anamnese-completa': {
  fisio: '<p>A anamnese é a principal ferramenta diagnóstica: a HDA concentra as hipóteses. Ela tem 7 componentes: identificação, queixa e duração, HDA, IDA, antecedentes pessoais, familiares e hábitos. O sintoma-guia organiza a história; o que não se relaciona com ele vai para o IDA. O contexto emocional (luto) faz parte da história e deve ser acolhido.</p>',
  sinais: [['QD sem rótulo diagnóstico', '"Dor de barriga muito forte" há 1 ano, com as palavras do paciente.'], ['OPQRST', 'Início, provocação/alívio, qualidade, região/irradiação, severidade, tempo.'], ['Sinais de alarme', 'Emagrecimento, sangue nas fezes, febre, icterícia, vômitos, idade > 50, história familiar.'], ['Resposta empática', 'Reconhecer a emoção sem prometer diagnóstico.']],
  tecnica: ['Abertura: higienizar, apresentar-se, confirmar nome, explicar, permissão, privacidade, pergunta aberta.', 'Técnicas: apoio, facilitação, reflexão, esclarecimento, confrontação, interpretação, resposta empática, silêncio.'],
  dif: [['Síndrome do intestino irritável', 'Dor em cólica com alteração do hábito, piora com estresse, sem sinais de alarme.'], ['Neoplasia', 'Emagrecimento, sangue, idade, história familiar.']],
  pegadinha: 'Nunca registre na QD o diagnóstico que o paciente teme.'
}
});

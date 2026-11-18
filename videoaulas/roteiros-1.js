/* Roteiros das videoaulas (parte 1). Cada slide: h (título), eyebrow, vis (visual opcional), b: [[html na tela, texto narrado], ...]
   cover: slide de abertura com narração única. */
var AULAS = [];

AULAS.push({ id: '01-anamnese', n: 1, titulo: 'Anamnese', slides: [
{ cover: true, h: 'Anamnese', sub: 'Da conversa ao raciocínio clínico', say: 'Olá! Nesta primeira aula de semiologia, vamos aprender a fazer uma anamnese completa: como começar a entrevista, quais são os sete componentes, como construir a história da doença atual a partir do sintoma guia, e como isso aparece na estação do OSCE.' },
{ eyebrow: 'Por que a anamnese importa', h: 'A primeira parte da consulta', b: [
  ['Anamnese + exame físico → <b>hipóteses</b> → exames → diagnóstico', 'A anamnese é a primeira parte da consulta. Junto com o exame físico, ela gera as hipóteses diagnósticas, que depois são confirmadas ou descartadas pelos exames complementares.'],
  ['<b>Não</b> é só registrar: é interpretar', 'Atenção: anamnese não é o registro puro do que o paciente fala. Ela precisa ser interpretada à luz do conhecimento médico.'],
  ['Quem procura é um <b>paciente</b>, não uma doença', 'E nunca esqueça: quem procura você é um paciente, e não uma doença.']
]},
{ eyebrow: 'Início da entrevista', h: 'O que fazer nos primeiros segundos', b: [
  ['Higienizar as mãos', 'Na estação, tudo começa antes da primeira pergunta. Higienize as mãos.'],
  ['Apresentar-se pelo nome e função', 'Apresente-se pelo nome, diga que é estudante de medicina e pergunte como o paciente prefere ser chamado.'],
  ['Explicar e pedir permissão', 'Explique o que vai fazer e peça permissão.'],
  ['Privacidade, vínculo, postura segura', 'Garanta privacidade e crie vínculo. A abordagem deve ser gentil, competente e segura.'],
  ['Registrar a <b>fonte</b> e a confiabilidade', 'E registre quem está informando: o próprio paciente ou um acompanhante, e o quanto essa fonte é confiável. Num paciente confuso, por exemplo, quem conta a história é a família.']
]},
{ eyebrow: 'Técnicas de entrevista', h: 'Ferramentas para o paciente falar', b: [
  ['<b>Apoio</b>: "eu compreendo"', 'Algumas técnicas ajudam o paciente a contar a história. Apoio: frases como eu compreendo, que dão segurança.'],
  ['<b>Facilitação</b>: gestos que encorajam', 'Facilitação: gestos e palavras que encorajam a continuar, como balançar a cabeça.'],
  ['<b>Reflexão</b>: repetir as palavras-chave', 'Reflexão: repetir as palavras mais importantes do relato.'],
  ['<b>Esclarecimento</b>: "tontura" quer dizer o quê?', 'Esclarecimento: tornar claro o que o paciente quis dizer. Tontura, por exemplo, pode ser vertigem ou pode ser sensação de desmaio.'],
  ['<b>Confrontação</b>, <b>interpretação</b>, <b>resposta empática</b>, <b>silêncio</b>', 'Há ainda a confrontação, a interpretação, a resposta empática e o silêncio, que é muito útil quando o paciente se emociona.']
]},
{ eyebrow: 'Estrutura', h: 'Os 7 componentes', b: [
  ['1. Identificação', 'A anamnese tem sete componentes. Primeiro, a identificação.'],
  ['2. Queixa e duração', 'Segundo, a queixa e duração.'],
  ['3. História da doença atual', 'Terceiro, a história da doença atual, a parte mestra da anamnese.'],
  ['4. Interrogatório dos diversos aparelhos', 'Quarto, o interrogatório sobre os diversos aparelhos.'],
  ['5–6. Antecedentes pessoais e familiares', 'Quinto e sexto, os antecedentes pessoais e os familiares.'],
  ['7. Hábitos de vida', 'E sétimo, os hábitos de vida e as condições socioeconômicas.']
]},
{ eyebrow: 'Identificação', h: 'Cada dado tem um motivo', b: [
  ['<b>Idade</b>: cada faixa etária tem suas doenças', 'Na identificação, cada dado tem um porquê. A idade, porque cada faixa etária tem suas doenças.'],
  ['<b>Sexo e cor</b>: prevalências diferentes', 'O sexo e a cor, porque algumas doenças são mais comuns ou mais graves em certos grupos, como a anemia falciforme e a hipertensão em pessoas pretas.'],
  ['<b>Profissão</b> atual e anteriores', 'A profissão atual e as anteriores: um trabalhador de pedreira pode ter pneumoconiose.'],
  ['<b>Naturalidade e procedência</b>', 'E a naturalidade e a procedência, por causa das doenças endêmicas, como Chagas e esquistossomose.']
]},
{ eyebrow: 'Queixa e duração', h: 'Palavras do paciente + tempo', b: [
  ['Certo: <b>"dor de cabeça" há 2 dias</b>', 'A queixa e duração usa as palavras do próprio paciente, entre aspas, com o tempo. Por exemplo: dor de cabeça há dois dias.'],
  ['Errado: <s>"hipertensão descompensada"</s>', 'Nunca coloque um rótulo diagnóstico. Hipertensão descompensada não é queixa.'],
  ['Várias queixas? A que <b>mais incomoda</b>', 'Se o paciente traz várias queixas, registre a que mais incomoda, a que o trouxe hoje.']
]},
{ eyebrow: 'História da doença atual', h: 'O sintoma-guia conduz tudo', b: [
  ['Escolha o <b>sintoma-guia</b> e date o início', 'Na história da doença atual, escolha o sintoma guia, o mais importante, e marque quando começou.'],
  ['OPQRST: início, piora e alívio, qualidade, região e irradiação, intensidade, tempo', 'Caracterize com o O P Q R S T: como começou, o que piora e o que alivia, a qualidade, a região e a irradiação, a intensidade de zero a dez, e a evolução no tempo.'],
  ['Termos técnicos e ordem cronológica', 'Escreva em termos técnicos e em ordem cronológica, com começo, meio e fim.'],
  ['Termine com o que o paciente <b>nega</b>', 'E termine com o que o paciente nega. As negativas também ajudam no diagnóstico.']
]},
{ eyebrow: 'Exemplo da aula', h: 'Dona Lúcia, 44 anos', b: [
  ['"Dor no peito fincada, de tirar o ar, vai para as costas"', 'Veja o caso da dona Lúcia. Ela conta uma dor no peito fincada, muito forte, de tirar o ar, que vai para as costas e melhora com dipirona.'],
  ['Também: ganho de peso e ardor para urinar', 'Ela também conta que engordou e que às vezes sente ardor para urinar.'],
  ['Sintoma-guia = <b>dor torácica</b> → HDA', 'O sintoma guia é a dor torácica, que vai para a história da doença atual.'],
  ['Peso e disúria → <b>IDA</b>', 'Ganho de peso e ardor urinário não têm relação com a dor: vão para o interrogatório dos diversos aparelhos.']
]},
{ eyebrow: 'Dispneia', h: 'Classifique pelo esforço', b: [
  ['<b>Grandes</b>: correr, subir vários lances', 'Quando o sintoma é falta de ar, em vez de fatores de melhora e piora, classifique pelo esforço. Grandes esforços: correr, subir vários lances de escada.'],
  ['<b>Médios</b>: andar um quarteirão, um lance de escada', 'Médios esforços: andar um quarteirão no plano, subir um lance de escada.'],
  ['<b>Pequenos</b>: tomar banho, vestir-se', 'Pequenos esforços: tomar banho, vestir-se, pentear o cabelo.'],
  ['Pergunte: <b>ortopneia</b> e <b>DPN</b>', 'E pergunte sempre se piora ao deitar, a ortopneia, e se acorda sufocado à noite, a dispneia paroxística noturna. As duas apontam para o coração.']
]},
{ eyebrow: 'Antecedentes e hábitos', h: 'Completando a história', b: [
  ['Pessoais: doenças, remédios, cirurgias, alergias, vacinas', 'Nos antecedentes pessoais: doenças prévias, medicações com dose e tempo de uso, cirurgias, internações, alergias e vacinas.'],
  ['Familiares: pais, irmãos, filhos; causa e idade de óbito', 'Nos familiares: doenças de pais, irmãos e filhos, e a causa e a idade de cada óbito.'],
  ['Carga tabágica = (cigarros/dia ÷ 20) × anos', 'Nos hábitos, calcule a carga tabágica: cigarros por dia divididos por vinte, vezes os anos de tabagismo. Um cigarro de palha vale cinco industrializados.'],
  ['Perguntas que não constrangem', 'E use perguntas que não constrangem, como: tem gente que só bebe em festas, outros quase todo dia; e você, como costuma ser?']
]},
{ eyebrow: 'Resumo', h: 'Para levar para a estação', b: [
  ['Abertura: mãos, apresentação, permissão', 'Resumindo: abra a estação com higiene das mãos, apresentação e permissão.'],
  ['QD com as palavras do paciente + tempo', 'Registre a queixa com as palavras do paciente e o tempo.'],
  ['Sintoma-guia + OPQRST + negativas', 'Construa a história em torno do sintoma guia, com o O P Q R S T e as negativas.'],
  ['IDA sistemático, antecedentes, hábitos', 'Depois, interrogatório sistemático, antecedentes e hábitos.'],
  ['Resuma ao paciente e acolha', 'E no final, resuma a história para o paciente e acolha as preocupações dele. Até a próxima aula!']
]}
]});

AULAS.push({ id: '02-exame-geral', n: 2, titulo: 'Exame físico geral', slides: [
{ cover: true, h: 'Exame físico geral', sub: 'O que se vê, mede e palpa no paciente como um todo', say: 'Nesta aula vamos estudar o exame físico geral, também chamado de ectoscopia: a avaliação do paciente como um todo, antes de examinar cada sistema.' },
{ eyebrow: 'Sequência', h: 'Do estado geral aos sinais vitais', b: [
  ['Estado geral: BEG, REG, MEG', 'Comece pelo estado geral: bom, regular ou mau estado geral. É uma impressão do conjunto.'],
  ['Consciência e orientação', 'Depois, o nível de consciência e a orientação no tempo e no espaço.'],
  ['Fácies, biotipo, atitude', 'Observe a fácies, o biotipo e a atitude.'],
  ['Pele e mucosas, hidratação, edema, linfonodos', 'Avalie pele e mucosas, hidratação, edema e linfonodos.'],
  ['Sinais vitais', 'E feche com os sinais vitais: pressão, frequência cardíaca, frequência respiratória e temperatura.']
]},
{ eyebrow: 'Consciência', h: 'Escala de Coma de Glasgow', b: [
  ['<b>Ocular (1–4)</b>: espontânea, ao chamado, à dor, nenhuma', 'A escala de Glasgow soma três respostas. A abertura ocular vale de um a quatro: espontânea, ao chamado, à dor ou nenhuma.'],
  ['<b>Verbal (1–5)</b>: orientado, confuso, palavras, sons, nenhuma', 'A resposta verbal vale de um a cinco: orientado, confuso, palavras inapropriadas, sons incompreensíveis ou nenhuma.'],
  ['<b>Motora (1–6)</b>: obedece, localiza, retira, flexão, extensão, nenhuma', 'A motora vale de um a seis: obedece comandos, localiza a dor, retira, flexão anormal, extensão anormal ou nenhuma.'],
  ['Leve 13–15 · Moderado 9–12 · <b>Grave ≤ 8</b>', 'De treze a quinze é leve, de nove a doze é moderado, e oito ou menos é grave.']
]},
{ eyebrow: 'Fácies', h: 'O rosto conta a doença', b: [
  ['<b>Renal</b>: edema periorbitário matinal', 'A fácies renal tem edema em volta dos olhos, pior pela manhã.'],
  ['<b>Mixedematosa</b>: face inchada, apática, sem a cauda das sobrancelhas', 'A mixedematosa, do hipotireoidismo, é arredondada, pálida, apática, e perde o terço lateral das sobrancelhas.'],
  ['<b>Basedowiana</b>: exoftalmia, olhar assustado', 'A basedowiana, do hipertireoidismo, tem olhos saltados e olhar assustado.'],
  ['<b>Cushingoide</b>, <b>leonina</b>, <b>hipocrática</b>, <b>parkinsoniana</b>, <b>mitral</b>', 'Há ainda a cushingoide, em lua cheia; a leonina, da hanseníase; a hipocrática, das doenças graves; a parkinsoniana, em máscara; e a mitral, com rubor nas maçãs do rosto.']
]},
{ eyebrow: 'Atitudes', h: 'A posição que alivia', b: [
  ['<b>Ortopneica</b>: sentado, não tolera deitar → IC, asma, ascite', 'A atitude é a posição que o paciente adota. Na ortopneica ele fica sentado e não tolera deitar: insuficiência cardíaca, asma ou ascite volumosa.'],
  ['<b>Genupeitoral</b>: derrame pericárdico', 'Na genupeitoral, de joelhos com o tórax apoiado: derrame pericárdico.'],
  ['<b>Cócoras</b>: cardiopatia congênita cianótica', 'De cócoras: crianças com cardiopatia congênita cianótica.'],
  ['<b>Decúbito lateral</b> sobre o lado da dor pleurítica', 'E deitado sobre o lado da dor, na dor pleurítica, para diminuir o movimento da pleura.']
]},
{ eyebrow: 'Coloração', h: 'Palidez, cianose e icterícia', b: [
  ['<b>Descorado</b> 1+ a 4+ → anemia', 'Avalie a cor nas mucosas. Descorado, de uma a quatro cruzes, sugere anemia.'],
  ['<b>Cianose</b>: Hb reduzida acima de 5 g/dL', 'A cianose aparece quando a hemoglobina reduzida passa de cinco gramas por decilitro.'],
  ['Central (lábios, língua) × periférica (extremidade fria)', 'Ela pode ser central, generalizada, por pulmão ou coração, ou periférica, localizada numa extremidade fria.'],
  ['<b>Icterícia</b>: esclera e freio da língua', 'E a icterícia se vê melhor na esclera e no freio da língua.']
]},
{ eyebrow: 'Hidratação', h: 'Classificando a desidratação', b: [
  ['Mucosas, turgor, enoftalmia, TEC, diurese', 'Para avaliar a hidratação, olhe as mucosas, o turgor da pele, os olhos, o tempo de enchimento capilar e a diurese.'],
  ['<b>Leve</b>: sede, mucosas pouco secas', 'Na desidratação leve há sede e mucosas levemente secas.'],
  ['<b>Moderada</b>: taquicardia, hipotensão ortostática', 'Na moderada, taquicardia e hipotensão ao ficar em pé.'],
  ['<b>Grave</b>: TEC ≥ 3 s, hipotensão, anúria, rebaixamento', 'Na grave, enchimento capilar de três segundos ou mais, hipotensão, anúria e rebaixamento da consciência. No idoso, o turgor é pouco confiável.']
]},
{ eyebrow: 'Edema', h: 'O tipo de edema conta o mecanismo', vis: { fn: 'edema', arg: 'nefrotica' }, b: [
  ['Cacifo, consistência, temperatura, dor, simetria', 'O edema se descreve por localização, simetria, intensidade em cruzes, cacifo, consistência, temperatura e dor.'],
  ['<b>Hidrostático</b>: pressão alta no capilar (IC)', 'Pelo mecanismo, ele pode ser hidrostático, com pressão alta no capilar, como na insuficiência cardíaca.'],
  ['<b>Oncótico</b>: falta albumina (nefrótica, cirrose)', 'Ou oncótico, por falta de albumina para segurar a água, como na síndrome nefrótica e na cirrose.'],
  ['<b>Inflamatório</b>: quente e doloroso · <b>linfático/mixedema</b>: duro, sem cacifo', 'O inflamatório é quente e doloroso. O linfático e o mixedema são duros e sem cacifo.']
]},
{ eyebrow: 'Linfonodos', h: 'Oito características', b: [
  ['Número, local, tamanho, consistência', 'Ao palpar um linfonodo, descreva número, localização, tamanho e consistência.'],
  ['Mobilidade, dor, coalescência, pele', 'E também mobilidade, dor, coalescência e alterações da pele.'],
  ['Doloroso, móvel, elástico → <b>infecção</b>', 'Doloroso, móvel e elástico sugere infecção.'],
  ['Duro, fixo, indolor, em bloco → <b>neoplasia ou TB</b>', 'Duro, fixo, indolor e em bloco sugere neoplasia ou tuberculose.'],
  ['Supraclavicular esquerdo = <b>Virchow</b>', 'E o supraclavicular esquerdo, o linfonodo de Virchow, pode ser metástase de câncer gástrico.']
]},
{ eyebrow: 'Lesões elementares', h: 'Cinco grupos', b: [
  ['Sem relevo: manchas (vasculares somem à vitropressão)', 'As lesões de pele se dividem em cinco grupos. Sem relevo: as manchas. As vasculares somem à vitropressão; as hemorrágicas, como petéquias e equimoses, não.'],
  ['Sólidas: pápula, tubérculo, nódulo, urtica', 'Sólidas: pápula, tubérculo, nódulo e urtica.'],
  ['Líquidas: vesícula, bolha, pústula, abscesso', 'Com conteúdo líquido: vesícula, bolha, pústula e abscesso.'],
  ['Continuidade: erosão, úlcera, fissura, fístula · Caducas: escama, crosta, escara', 'Soluções de continuidade: erosão, úlcera, fissura e fístula. E as caducas: escama, crosta e escara.']
]},
{ eyebrow: 'Resumo', h: 'Descrição normal para falar', b: [
  ['"Bom estado geral, consciente e orientado, corado, hidratado, afebril, acianótico, anictérico, eupneico."', 'Para fechar, a descrição normal que você vai falar na estação: paciente em bom estado geral, consciente e orientado, corado, hidratado, afebril, acianótico, anictérico e eupneico.'],
  ['"Fácies atípica, atitude ativa, sem edemas, sem linfonodomegalias."', 'Fácies atípica, atitude ativa, sem edemas e sem linfonodomegalias palpáveis.'],
  ['Sempre gradue: <b>+/4+</b>', 'E quando houver alteração, sempre gradue em cruzes e diga onde está. Até a próxima!']
]}
]});

AULAS.push({ id: '03-respiratorio-exame', n: 3, titulo: 'Sistema respiratório: sintomas e semiotécnica', slides: [
{ cover: true, h: 'Sistema respiratório', sub: 'Sintomas, inspeção, palpação, percussão e ausculta', say: 'Nesta aula vamos estudar o sistema respiratório: os sintomas principais e a técnica do exame, passo a passo, como você vai fazer na estação.' },
{ eyebrow: 'Sintomas', h: 'O que perguntar', b: [
  ['<b>Tosse</b>: seca ou produtiva, tempo, horário', 'Na anamnese respiratória, caracterize a tosse: seca ou produtiva, há quanto tempo, em que horário.'],
  ['<b>Expectoração</b>: serosa, mucoide, purulenta, hemoptoica', 'A expectoração pode ser serosa, mucoide, purulenta ou com estrias de sangue, que chamamos de hemoptoica.'],
  ['<b>Hemoptise</b> (sangue vivo) × <b>vômica</b> (pus em grande quantidade)', 'Hemoptise é sangue vivo vindo das vias aéreas. Vômica é a eliminação brusca de muito pus de uma cavidade.'],
  ['<b>Dispneia</b>, <b>sibilância</b>, <b>dor ventilatório-dependente</b>', 'Pergunte ainda sobre falta de ar, chiado, e dor que piora ao respirar fundo, típica da pleura.']
]},
{ eyebrow: 'Posição e referências', h: 'Antes de começar', b: [
  ['Sentado, tórax despido; comece pela <b>face posterior</b>', 'Para o exame, o paciente fica sentado, com o tórax despido. Comece pela face posterior, com os braços cruzados, depois as laterais e a frente.'],
  ['Ângulo de Louis = 2ª costela (conte os espaços)', 'Use o ângulo de Louis, que marca a segunda costela, para contar os espaços intercostais.'],
  ['C7 = vértebra mais saliente; escápula ≈ 7º EIC', 'Atrás, a sétima vértebra cervical é a mais saliente, e o ângulo inferior da escápula fica perto do sétimo espaço.'],
  ['Sempre <b>comparar pontos simétricos</b>', 'E a regra de ouro: sempre compare pontos simétricos dos dois lados.']
]},
{ eyebrow: 'Inspeção estática', h: 'A forma do tórax', b: [
  ['<b>Tonel</b>: diâmetro anteroposterior ↑ → enfisema', 'Na inspeção estática, observe a forma. O tórax em tonel, com diâmetro anteroposterior aumentado, é típico do enfisema.'],
  ['<b>Pectus excavatum</b> e <b>carinatum</b>', 'O peito escavado e o peito de pombo são, em geral, congênitos.'],
  ['<b>Em sino</b>: ascite volumosa, visceromegalias', 'O tórax em sino, com a base alargada, aparece na ascite volumosa.'],
  ['Cianose, baqueteamento, abaulamentos, retrações', 'Procure também cianose, baqueteamento digital, abaulamentos e retrações.']
]},
{ eyebrow: 'Inspeção dinâmica', h: 'O tórax em movimento', b: [
  ['FR normal: 12 a 20 irpm, contada sem avisar', 'Na inspeção dinâmica, conte a frequência respiratória em um minuto, sem o paciente perceber. O normal é de doze a vinte.'],
  ['Tiragem, musculatura acessória, asa do nariz', 'Observe tiragem, uso de musculatura acessória e batimento da asa do nariz: são sinais de esforço respiratório.'],
  ['<b>Cheyne-Stokes</b>: cresce, decresce, apneia → IC grave, lesão neurológica', 'Observe o ritmo. Cheyne Stokes cresce, decresce e faz pausa: insuficiência cardíaca grave ou lesão neurológica.'],
  ['<b>Kussmaul</b>: profunda e rápida → acidose · <b>Biot</b>: irregular → lesão do SNC', 'Kussmaul é profunda e rápida, na acidose metabólica. E Biot é irregular, com apneias, nas lesões graves do sistema nervoso.']
]},
{ eyebrow: 'Palpação', h: 'Expansibilidade e frêmito toracovocal', b: [
  ['Ruault (ápices) e Lasègue (bases)', 'Na palpação, avalie a expansibilidade. Nos ápices, com a manobra de Ruault; nas bases, com a de Lasègue. O lado que expande menos é o doente.'],
  ['FTV: "trinta e três", mão espalmada, comparando', 'Depois o frêmito toracovocal: o paciente fala trinta e três e você compara a vibração com a mão espalmada.'],
  ['FTV <b>aumenta só na condensação</b>', 'Guarde isto: o frêmito aumenta só na condensação, como na pneumonia.'],
  ['FTV ↓: derrame, pneumotórax, atelectasia, enfisema', 'Ele diminui no derrame, no pneumotórax, na atelectasia e no enfisema.']
]},
{ eyebrow: 'Percussão', h: 'Os cinco sons', b: [
  ['<b>Claro pulmonar</b>: normal', 'Na percussão dígito digital, o som normal é o claro pulmonar.'],
  ['<b>Maciço / submaciço</b>: líquido ou tecido denso', 'Maciço ou submaciço: líquido ou tecido denso, como derrame, consolidação e atelectasia.'],
  ['<b>Timpânico</b>: ar na pleura (pneumotórax)', 'Timpânico: ar livre na pleura, o pneumotórax.'],
  ['<b>Hipersonoro</b>: ar demais nos alvéolos (enfisema, asma)', 'E hipersonoro: ar demais nos alvéolos, como no enfisema e na crise de asma.']
]},
{ eyebrow: 'Ausculta', h: 'Murmúrio e ruídos adventícios', b: [
  ['Normal: murmúrio vesicular presente e simétrico', 'Na ausculta, o normal é murmúrio vesicular presente e simétrico, sem ruídos adventícios.'],
  ['<b>Estertores finos</b>: fim da inspiração, velcro, não mudam com a tosse', 'Estertores finos: no fim da inspiração, como velcro, e não mudam com a tosse. Pneumonia, congestão e fibrose.'],
  ['<b>Estertores grossos</b> e <b>roncos</b>: mudam com a tosse', 'Estertores grossos e roncos mudam com a tosse: secreção nas vias aéreas.'],
  ['<b>Sibilos</b>: expiratórios, agudos · <b>estridor</b>: inspiratório, alto', 'Sibilos são agudos e expiratórios, como na asma. O estridor é inspiratório e indica obstrução alta.'],
  ['<b>Atrito pleural</b>: couro, nas duas fases', 'E o atrito pleural soa como couro atritado: pleurite.']
]},
{ eyebrow: 'Ausculta da voz', h: 'O que a voz revela', b: [
  ['Normal: sons incompreensíveis', 'Por fim, ausculte a voz. Normalmente ela chega incompreensível.'],
  ['<b>Broncofonia e pectorilóquia</b> → condensação', 'Se a voz fica alta e nítida, é broncofonia ou pectorilóquia: condensação.'],
  ['<b>Egofonia</b> (voz de cabra) → limite superior do derrame', 'A egofonia, voz anasalada como balido de cabra, aparece no limite superior do derrame.'],
  ['<b>Abolida</b> → derrame, pneumotórax, atelectasia', 'E a voz abolida aparece no derrame, no pneumotórax e na atelectasia. Na próxima aula, vamos juntar tudo isso nas síndromes.']
]}
]});

AULAS.push({ id: '04-respiratorio-sindromes', n: 4, titulo: 'O tórax que fala: síndromes pleuropulmonares', slides: [
{ cover: true, h: 'O tórax que fala', sub: 'Deduza as síndromes pleuropulmonares em vez de decorar', say: 'Nesta aula, em vez de decorar a tabela de síndromes, vamos deduzir cada uma delas a partir de uma única pergunta.' },
{ eyebrow: 'A regra', h: 'O que há entre o brônquio e a sua mão?', b: [
  ['<b>Sólido</b> com brônquio aberto → conduz', 'A pergunta é: o que existe entre o brônquio e a sua mão ou o estetoscópio? Se for sólido com o brônquio aberto, o som e a vibração são conduzidos melhor.'],
  ['<b>Líquido ou ar</b> na pleura → abafa', 'Se houver líquido ou ar na pleura, afastando o pulmão da parede, tudo fica abafado.'],
  ['<b>Ar demais</b> nos alvéolos → hipersonoro, tudo diminuído', 'E se houver ar demais nos alvéolos, o som fica hipersonoro e o resto diminui.']
]},
{ eyebrow: 'Consolidação', h: 'Pneumonia: "tudo aumenta"', vis: { fn: 'lung', arg: ['consolidacao', 'D'] }, b: [
  ['Expansibilidade ↓ do lado afetado', 'Na pneumonia, os alvéolos se enchem de exsudato e o brônquio continua aberto. A expansibilidade diminui do lado doente.'],
  ['<b>FTV aumentado</b>', 'O frêmito aumenta, porque o bloco sólido conduz a vibração.'],
  ['Macicez', 'A percussão é maciça.'],
  ['Sopro tubário, estertores finos, pectorilóquia', 'E na ausculta há sopro tubário, estertores finos e pectorilóquia.']
]},
{ eyebrow: 'Derrame pleural', h: 'Líquido na pleura: "tudo some"', vis: { fn: 'lung', arg: ['derrame', 'D'] }, b: [
  ['<b>FTV abolido</b>, macicez, MV e voz abolidos', 'No derrame, o líquido afasta o pulmão da parede. O frêmito fica abolido, a percussão maciça, e o murmúrio e a voz desaparecem.'],
  ['Egofonia no limite superior', 'No limite superior do líquido, o pulmão comprimido produz a egofonia.'],
  ['<b>Signorelli</b>: macicez na coluna inferior', 'Percutindo a coluna, há macicez no terço inferior: é o sinal de Signorelli.'],
  ['Volumoso: traqueia empurrada para o lado oposto', 'Se for volumoso, empurra a traqueia para o lado oposto.']
]},
{ eyebrow: 'O duelo mais cobrado', h: 'Pneumonia × derrame', b: [
  ['Os dois são <b>maciços</b>', 'Pneumonia e derrame têm uma coisa em comum: os dois são maciços à percussão.'],
  ['O <b>FTV</b> separa: ↑ na pneumonia, ↓ no derrame', 'Quem separa é o frêmito: aumentado na pneumonia, abolido no derrame.'],
  ['Signorelli, Lemos-Torres, posição', 'No derrame, ainda há o Signorelli positivo, o sinal de Lemos Torres, com abaulamento intercostal na expiração, e a macicez que muda com a posição.']
]},
{ eyebrow: 'Pneumotórax', h: 'Ar na pleura: timpanismo', vis: { fn: 'lung', arg: ['pneumotorax', 'E'] }, b: [
  ['Dor súbita + dispneia súbita; jovem longilíneo', 'O pneumotórax espontâneo típico é o jovem alto e magro com dor e falta de ar súbitas.'],
  ['FTV, MV e voz abolidos', 'Frêmito, murmúrio e voz ficam abolidos, como no derrame.'],
  ['Mas a percussão é <b>timpânica</b>', 'Mas a percussão é timpânica: o ar ressoa. É isso que separa os dois.'],
  ['Hipertensivo: traqueia para o lado oposto, jugular cheia, hipotensão', 'Se for hipertensivo, a traqueia vai para o lado oposto, a jugular enche e a pressão cai. É uma emergência.']
]},
{ eyebrow: 'Atelectasia', h: 'O pulmão murcha e puxa', vis: { fn: 'lung', arg: ['atelectasia', 'D'] }, b: [
  ['Brônquio obstruído: alvéolos colapsam', 'Na atelectasia, um brônquio obstruído faz os alvéolos murcharem.'],
  ['Macicez, FTV e MV diminuídos', 'Há macicez, com frêmito e murmúrio diminuídos.'],
  ['Retração e tiragem', 'Pode haver retração e tiragem do lado afetado.'],
  ['Traqueia <b>puxada para o mesmo lado</b>', 'E a traqueia é puxada para o mesmo lado. Atelectasia puxa; derrame e pneumotórax hipertensivo empurram.']
]},
{ eyebrow: 'Hiperinsuflação', h: 'Enfisema e crise de asma', vis: { fn: 'lung', arg: ['enfisema', 'D'] }, b: [
  ['Bilateral e simétrico', 'No enfisema, o ar fica preso nos alvéolos destruídos, dos dois lados.'],
  ['Tonel, Charpy obtuso, expansibilidade ↓', 'O tórax fica em tonel, o ângulo de Charpy obtuso e a expansibilidade diminuída.'],
  ['Hipersonoro, FTV e MV diminuídos, expiração prolongada', 'A percussão é hipersonora, o frêmito e o murmúrio diminuem e a expiração é prolongada.'],
  ['Asma: + <b>sibilos expiratórios</b>, tiragem; silêncio = gravíssimo', 'Na crise de asma, somam-se sibilos expiratórios difusos e tiragem. E atenção: tórax silencioso numa crise é sinal de gravidade extrema.']
]},
{ eyebrow: 'Congestão', h: 'Insuficiência cardíaca esquerda', vis: { fn: 'lung', arg: ['congestao', 'D'] }, b: [
  ['Ortopneia, DPN, após IAM ou HAS', 'Na congestão pulmonar da insuficiência cardíaca esquerda, o paciente tem ortopneia e dispneia paroxística noturna.'],
  ['Percussão e FTV praticamente normais', 'A percussão e o frêmito costumam estar normais.'],
  ['<b>Estertores finos nas bases</b>, bilaterais', 'O achado é de estertores finos nas bases, dos dois lados: líquido nos alvéolos mais baixos.'],
  ['Pense no coração: B3, jugular, edema', 'E aí você vai buscar o coração: terceira bulha, jugular e edema.']
]},
{ eyebrow: 'Resumo', h: 'A tabela em uma frase', b: [
  ['Macicez + FTV ↑ = <b>consolidação</b>', 'Resumindo: macicez com frêmito aumentado é consolidação.'],
  ['Macicez + FTV ↓ = <b>derrame</b> (ou atelectasia, se puxar)', 'Macicez com frêmito diminuído é derrame, ou atelectasia se a traqueia for puxada.'],
  ['Timpanismo + FTV ↓ = <b>pneumotórax</b>', 'Timpanismo com frêmito diminuído é pneumotórax.'],
  ['Hipersonoridade bilateral = <b>enfisema / asma</b>', 'E hipersonoridade bilateral é enfisema ou asma. Treine no laboratório de mecanismos da plataforma. Até a próxima!']
]}
]});

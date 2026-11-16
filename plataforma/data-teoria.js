/* Conteúdo teórico — construído a partir dos materiais da disciplina (Semiologia do Adulto I) */
function tb(h, rows, cls) {
  return '<div class="tbl-wrap"><table class="tbl ' + (cls || '') + '"><thead><tr>' +
    h.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody>' +
    rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') +
    '</tbody></table></div>';
}
function co(type, title, html) {
  return '<div class="callout ' + type + '"><div class="callout-t">' + title + '</div>' + html + '</div>';
}
function ul(items) { return '<ul>' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>'; }
function cards(items) {
  return '<div class="mini-cards">' + items.map(function (c) {
    return '<div class="mini-card"><div class="mini-card-h">' + c[0] + '</div><div class="mini-card-b">' + c[1] + '</div></div>';
  }).join('') + '</div>';
}

var TEORIA = [
/* ===================================================== ANAMNESE */
{
  id: 'anamnese', titulo: 'Anamnese', cor: 'a1',
  resumo: 'Relação médico-paciente, técnicas de entrevista, os 7 componentes, HDA com sintoma-guia, IDA e termos técnicos.',
  secoes: [
  { id: 'raciocinio', h: 'Onde a anamnese entra no raciocínio',
    html: '<div class="flow"><span>Anamnese + exame físico</span><span>Hipóteses diagnósticas</span><span>Exames complementares</span><span>Interpretação</span><span>Diagnóstico</span></div>' +
    '<p>A anamnese é a <b>primeira parte da consulta</b>. Ela <b>não é o registro puro</b> das informações: precisa ser interpretada à luz do conhecimento médico. A HDA é a <b>parte-mestra</b> da anamnese, porque é nela que residem as hipóteses diagnósticas.</p>' +
    co('tip', 'Frase de prova', '"Uma das principais causas da perda da qualidade do trabalho médico é a redução do tempo dedicado à anamnese." O médico não deve esquecer que quem o procura é um <b>paciente</b>, e não uma doença.') },
  { id: 'relacao', h: 'Relação médico-paciente',
    html: '<p>Baseia-se nos princípios bioéticos de <b>beneficência, não maleficência, justiça e autonomia</b>. Também importam <b>alteridade</b> (respeitar a diferença no outro) e <b>sigilo</b>. O respeito à autonomia é hoje o núcleo da relação.</p>' +
    tb(['Modelo', 'Como funciona', 'Contexto típico'], [
      ['Médico ativo / paciente passivo', 'Paciente aceita passivamente os cuidados e se abstém por completo', 'Urgência e emergência'],
      ['Médico direciona / paciente colabora', 'Médico assume o papel de modo até certo ponto autoritário; paciente compreende, aceita e colabora', 'Regime hospitalar'],
      ['Médico age / paciente participa ativamente', 'Decisões tomadas após troca de informações e análise de alternativas (aliança terapêutica)', 'Ambulatório, visita domiciliar']
    ]) + '<p><b>"O médico como droga"</b>: estudos com placebo mostram que a maneira de agir do médico influencia o resultado de qualquer tratamento, inclusive cirúrgico.</p>' },
  { id: 'inicio', h: 'Início da entrevista (o que fazer na estação)',
    html: cards([
      ['Apresente-se', 'Diga seu nome e função. Dê um aperto de mão.'],
      ['Explique', 'Conte o que vai fazer e peça permissão.'],
      ['Crie vínculo', 'Abordagem gentil, competente, segura e com confiança.'],
      ['Privacidade', 'Assegure privacidade e sossego.'],
      ['Fonte', 'Registre quem informa (paciente ou acompanhante) e o grau de confiabilidade.'],
      ['Higienize as mãos', 'Antes e depois de atender qualquer paciente. Esteja trajado, sem adornos.']
    ]) +
    '<p><b>Três maneiras de conduzir:</b> (1) deixar o paciente relatar livremente, só ouvindo; (2) anamnese dirigida, com um esquema em mente; (3) relato espontâneo primeiro e depois condução objetiva (a mais usada).</p>' +
    '<p>Perguntas de abertura: <i>"O que o(a) senhor(a) está sentindo?"</i>, <i>"O que te trouxe aqui?"</i>, <i>"O que está te incomodando?"</i></p>' },
  { id: 'tecnicas', h: 'Técnicas de entrevista',
    html: tb(['Técnica', 'O que é', 'Exemplo'], [
      ['Apoio', 'Afirmações que dão segurança e encorajam o relato', '"Eu compreendo."'],
      ['Facilitação', 'Gestos ou palavras que incentivam a continuar', 'Balançar levemente a cabeça'],
      ['Reflexão', 'Repetir as palavras mais significativas do relato', '"…uma dor que aperta…"'],
      ['Esclarecimento', 'Tornar claro o que o paciente quer dizer', '"Tontura" = vertigem? lipotímia? Especificar.'],
      ['Confrontação', 'Mostrar algo sobre as próprias palavras ou comportamento', '"Diz que está tudo bem, mas está com lágrimas nos olhos…"'],
      ['Interpretação', 'Observação a partir da percepção do médico', '"Você parece preocupado com os laudos que me trouxe."'],
      ['Resposta empática', 'Compreensão e aceitação por palavras, gestos e atitudes', 'Mão no braço, oferecer um lenço'],
      ['Silêncio', 'Útil quando o paciente se emociona ou chora', '"Está tudo bem chorar."']
    ]) },
  { id: 'componentes', h: 'Os 7 componentes da anamnese',
    html: '<ol class="steps"><li><b>Identificação</b></li><li><b>Queixa e duração</b> (QD / queixa principal)</li><li><b>História da doença atual</b> (HDA / HMA)</li><li><b>Interrogatório sobre os diversos aparelhos</b> (IDA / ISDA)</li><li><b>Antecedentes pessoais</b></li><li><b>Antecedentes familiares</b></li><li><b>Hábitos de vida</b> e condições socioeconômicas</li></ol>' +
    co('tip', 'Mnemônico', 'I-Q-H-I-A-A-H: <b>I</b>dentifique, <b>Q</b>ueixe-se, <b>H</b>istorie, <b>I</b>nterrogue, <b>A</b>ntecedentes (pessoais e familiares), <b>H</b>ábitos.') },
  { id: 'identificacao', h: '1. Identificação',
    html: '<p>Saber o nome é indispensável para começar uma comunicação em nível afetivo. Permite interpretar dados individuais e coletivos.</p>' +
    tb(['Dado', 'Por que importa'], [
      ['Nome (registro e "fantasia"/social)', 'Vínculo. No hospital, o nome da mãe diferencia homônimos.'],
      ['Idade', 'Cada grupo etário tem suas próprias doenças.'],
      ['Sexo (biológico) / gênero', 'Doenças exclusivas de um sexo; ex.: hemofilia (transmitida pelas mulheres, manifesta nos homens).'],
      ['Cor / etnia (branca, parda, preta)', 'Anemia falciforme e HAS mais graves em pretos; câncer de pele em brancos.'],
      ['Estado civil', 'Contexto social; pista para ISTs.'],
      ['Profissão e local de trabalho (atual e anteriores)', 'LER/DORT; pneumoconioses (minas, pedreiras).'],
      ['Naturalidade e procedência / residência', 'Doenças endêmicas. Perguntar sobre viagens recentes.'],
      ['Religião', 'Testemunhas de Jeová (hemotransfusão); adventistas (sem carne).'],
      ['Escolaridade; fonte e confiabilidade', 'Quem informa e se está confuso ou seguro.']
    ]) },
  { id: 'qd', h: '2. Queixa e duração',
    html: ul(['Anotar a queixa <b>mais importante</b>, que motivou a procura.', 'Usar as <b>expressões do paciente</b>, entre aspas, em poucas palavras.', '<b>Evitar rótulos diagnósticos!</b> ("pressão alta", "gastrite" não são queixas).', 'Sempre com o <b>tempo</b>: <i>"tosse há 1 semana"</i>, <i>"dor de cabeça há 2 dias"</i>.']) +
    co('warn', 'Pegadinha', 'Se o paciente chega com o "diagnóstico", esclareça os sintomas antes de aceitar. Se enumera vários motivos, direcione para o que <b>mais incomoda</b> / o que o trouxe hoje.') },
  { id: 'hda', h: '3. HDA: sintoma-guia e narrativa',
    html: ul(['Registro <b>cronológico e detalhado</b> do problema, do início até hoje.', 'Usar <b>termos técnicos</b>.', 'Determinar o <b>sintoma-guia</b> (o mais importante) e marcar a época de início.', 'O sintoma-guia é o <b>fio condutor</b>; estabelecer relações com as outras queixas.', 'A história deve ter <b>começo, meio e fim</b> (forma de narrativa).', 'Anotar também sintomas <b>não referidos</b> pelo paciente (o que ele nega).', 'Preservar a cronologia, sem perguntas sugestivas.']) +
    '<h4>Esquema de análise de um sintoma</h4><div class="flow small"><span>Início</span><span>Características</span><span>Fatores de melhora/piora</span><span>Relações com outras queixas</span><span>Evolução</span><span>Situação atual</span></div>' +
    '<h4>OPQRST (para dor e sintomas em geral)</h4>' +
    tb(['Letra', 'Pergunta'], [
      ['O – Onset (início)', 'Quando começou? Súbito ou gradual? O que estava fazendo?'],
      ['P – Provocação / Paliação', 'O que piora? O que melhora? Tomou algum remédio? Qual, quem receitou, posologia?'],
      ['Q – Qualidade', 'Aperto, pontada, queimação, peso, cólica?'],
      ['R – Região / iRradiação', 'Onde dói? Irradia para algum lugar?'],
      ['S – Severidade', '"De 0 a 10, quanto dói?"'],
      ['T – Tempo', 'Duração, frequência, evolução, já sentiu antes?']
    ]) +
    '<h4>Modelo de organização da HDA</h4><p>QP em termos técnicos + duração + fatores desencadeantes + fatores de melhora + fatores de piora + evolução + <b>finalizar com o que o paciente nega</b>.</p>' +
    '<h4>Dispneia: classificar pelo esforço (em vez de melhora/piora)</h4>' +
    tb(['Grau', 'Exemplos'], [
      ['Grandes esforços', 'Correr, subir vários lances de escada rapidamente'],
      ['Médios esforços', 'Andar um quarteirão em passo normal, subir um lance de escada, carregar sacolas'],
      ['Pequenos esforços', 'Tomar banho, pentear o cabelo, vestir-se, falar ao telefone, andar dentro de casa'],
      ['Repouso', 'Falta de ar parado ou deitado']
    ]) + '<p>Para dor, acrescente <b>tipo, intensidade e irradiação</b>.</p>' },
  { id: 'casos-sg', h: 'Treino: identifique o sintoma-guia',
    html: '<div class="case-box"><b>Caso 1 – D. Lúcia, 44 anos.</b> "Dor no peito do tipo fincada, muito forte, de tirar o ar". A dor "vai para as costas" e "só melhora com Novalgina®". Está chateada porque engordou muito no último ano; às vezes sente ardor para urinar. Preocupada porque a vizinha teve infarto.</div>' +
    '<details class="reveal"><summary>Ver resposta</summary><p><b>QD:</b> "dor no peito" + tempo (perguntar a duração). <b>Sintoma-guia:</b> dor torácica, em pontada ("fincada"), intensa, irradiando para o dorso, com alívio por dipirona, associada a dispneia ("de tirar o ar"). Ganho de peso e disúria são queixas <b>não relacionadas</b> → vão para o IDA. O infarto da vizinha é preocupação, não dado clínico do paciente.</p></details>' +
    '<div class="case-box"><b>Caso 2 – Sr. Carlos, 50 anos.</b> "Dor de barriga muito forte, torcendo o intestino por dentro". A "dor pega a barriga toda" e só melhora com Buscopan®. Tem colesterol alto; a irmã faleceu de câncer de pâncreas há 1 ano; depois disso "não teve mais sossego" por causa da dor.</div>' +
    '<details class="reveal"><summary>Ver resposta</summary><p><b>Sintoma-guia:</b> dor abdominal difusa, em cólica ("torcendo"), intensa, com alívio por antiespasmódico, há cerca de 1 ano. Dislipidemia → antecedentes pessoais. Câncer de pâncreas da irmã → antecedentes familiares. Fique atento ao componente emocional (luto).</p></details>' },
  { id: 'ida', h: '4. IDA – Interrogatório sobre os diversos aparelhos',
    html: '<p>Complemento da HDA: aborda queixas ainda não levantadas e reconhece sintomas sem relação com o quadro atual (ex.: HDA sugere gastrite, mas no IDA aparece edema de MMII → nova hipótese: cirrose). Seguir <b>ordem sistemática</b> para não esquecer. Tudo que o paciente não apresentar é registrado: "nega febre, nega cefaleia…".</p>' +
    co('tip', 'Dica de estação', 'Antes de começar, avise: "Agora vou fazer perguntas sobre todo o corpo, mesmo que não tenham relação com o que o trouxe." Comece amplo ("Como anda sua digestão?") e aprofunde se necessário.') +
    tb(['Aparelho', 'O que perguntar'], [
      ['Geral', 'Febre, calafrios, astenia, fadiga, sudorese, alteração de peso (kg/tempo), apetite, memória, humor'],
      ['Pele e fâneros', 'Prurido, cor (palidez, rubor, cianose), lesões, nódulos, feridas, queda de cabelo, unhas, mudanças em verrugas/manchas'],
      ['Cabeça e órgãos dos sentidos', 'Cefaleia, vertigem; acuidade visual, diplopia, escotomas, fotofobia; otalgia, zumbido, hipoacusia; epistaxe, coriza, olfato; odinofagia, paladar'],
      ['Mamas', 'Nódulos, dor, secreção mamilar'],
      ['Respiratório', 'Tosse, expectoração (cor, quantidade), hemoptise, hemoptoicos, dispneia, chiado'],
      ['Cardiovascular', 'Dor torácica, palpitações, dispneia, ortopneia, DPN, edema, síncope, lipotímia, sudorese fria'],
      ['Gastrointestinal', 'Disfagia, odinofagia, pirose, regurgitação, náuseas, vômitos, hábito intestinal, fezes (cor, volume), melena, enterorragia, dor abdominal, flatulência'],
      ['Urinário', 'Frequência, poliúria, polaciúria, nictúria, urgência, disúria, hematúria, colúria, dor lombar, incontinência, jato urinário'],
      ['Genital', 'Função sexual; homens: secreções, feridas, massas; mulheres: ciclo, DUM, dismenorreia, dispareunia, corrimento'],
      ['Linfo-hematopoiético / endócrino', 'Sangramentos, adenomegalias; polidipsia, poliúria, polifagia, intolerância ao frio/calor, bócio'],
      ['Neuropsíquico', 'Convulsões, síncope, tremores, parestesias, paresias, marcha, ansiedade, depressão'],
      ['Musculoesquelético / vascular periférico', 'Artralgia, mialgia, rigidez matinal, lombalgia; claudicação intermitente, varizes, edema, alterações de cor no frio']
    ]) },
  { id: 'antecedentes', h: '5–6. Antecedentes pessoais e familiares',
    html: '<div class="two-col"><div><h4>Pessoais</h4>' + ul(['Doenças preexistentes, da infância, crônicas, ISTs, mentais', 'Medicamentos em uso: nome, dose, posologia, tempo de uso, prescritos ou não (inclui chás, ervas)', 'Cirurgias, internações, traumas, transfusões', 'Alergias', 'Vacinação', 'Histórico gineco-obstétrico']) + '</div><div><h4>Familiares</h4>' + ul(['Fatores de risco de ordem genética', 'Parentes de 1º grau: pais, irmãos, filhos (depois cônjuge e outros)', 'Estado de saúde de cada um', 'Óbitos: causa e idade']) + '</div></div>' },
  { id: 'habitos', h: '7. Hábitos de vida',
    html: ul(['Alimentação (inclusive ingestão de água), habitação, saneamento', 'Ocupação atual e anteriores', 'Atividade física: tipo, frequência, duração', 'Tabagismo, etilismo, drogas ilícitas, anabolizantes', 'Atividade sexual, padrão de sono', 'Condição socioeconômica e suporte familiar']) +
    '<h4>Carga tabágica (maços-ano)</h4><div class="formula">maços-ano = (cigarros por dia ÷ 20) × anos de tabagismo</div><p>1 cigarro de palha equivale a <b>5 cigarros industrializados</b>. Pergunte tipo, frequência, quantidade, duração e tentativas de parar. Use a calculadora em Ferramentas.</p>' +
    co('tip', 'Perguntas que não constrangem', '"Um maço durava quanto tempo para você?" · "Tem gente que só bebe em festas, outros quase todo dia… e você?" · "Alguns tomam 1 ou 2 latinhas, outros uma garrafa… quanto você costuma tomar?"') },
  { id: 'sintomas-cv-resp', h: 'Como caracterizar sintomas cardiovasculares e respiratórios',
    html: '<h4>Cardiovasculares</h4>' + tb(['Sintoma', 'Descrever'], [
      ['Dor torácica', 'Localização, irradiação, qualidade (aperto, queimação, peso), intensidade, duração, desencadeantes e alívio, relação com esforço ou estresse'],
      ['Dispneia', 'Limitação funcional, relação com esforço, ortopneia, DPN, evolução temporal'],
      ['Palpitações', 'Início e término súbitos ou graduais, frequência, duração, regularidade, desencadeantes, tontura ou síncope associadas'],
      ['Síncope', 'Circunstâncias, posição, duração da perda de consciência, recuperação, pródromos'],
      ['Pré-síncope (lipotímia)', 'Sensação de desmaio iminente, desencadeantes, duração, sintomas associados'],
      ['Edema', 'Localização, bilateralidade, intensidade, progressão, horário, relação com ortostatismo'],
      ['Ortopneia', 'Número de travesseiros, necessidade de dormir sentado, tempo de evolução'],
      ['DPN', 'Frequência, tempo após adormecer, alívio ao sentar ou levantar'],
      ['Claudicação intermitente', 'Local da dor, distância até o sintoma, melhora com repouso, limitação funcional']
    ]) + '<h4>Respiratórios</h4>' + tb(['Sintoma', 'Descrever'], [
      ['Dispneia', 'Início (súbito/gradual), duração, progressão, esforço, posição (ortopneia, platipneia, trepopneia), intensidade (mMRC), desencadeantes'],
      ['Tosse', 'Evolução (aguda, subaguda, crônica), frequência, seca ou produtiva, horário, desencadeantes'],
      ['Expectoração', 'Quantidade, cor, consistência, odor, sangue, variação no dia'],
      ['Hemoptise', 'Volume, frequência, aspecto (vivo/escuro), coágulos; diferenciar de hematêmese e epistaxe'],
      ['Dor torácica', 'Localização, intensidade, caráter (pontada), relação com inspiração, tosse, movimentos'],
      ['Sibilância', 'Início, frequência, desencadeantes, associação com dispneia, melhora com broncodilatador'],
      ['Rouquidão (disfonia)', 'Evolução, intermitente ou contínua, tabagismo, refluxo, infecção'],
      ['Cianose', 'Central ou periférica, situação em que ocorre, sintomas associados']
    ]) + '<h4>Mesmo sintoma, causas respiratórias × cardiovasculares</h4>' + tb(['Sintoma', 'Respiratórias', 'Cardiovasculares'], [
      ['Dispneia', 'Asma, DPOC, pneumonia, derrame pleural, TEP', 'IC, valvopatias, cardiomiopatias'],
      ['Dor torácica', 'Pleurite, pneumonia, pneumotórax, TEP', 'Angina, IAM, pericardite, dissecção de aorta'],
      ['Tosse', 'Infecções, asma, DPOC, DRGE', 'IC esquerda'],
      ['Hemoptise', 'Tuberculose, bronquiectasias, câncer, TEP', 'Estenose mitral, edema pulmonar'],
      ['Cianose', 'Doenças pulmonares graves', 'Cardiopatias congênitas cianóticas, IC avançada']
    ]) }
  ]
},
/* ===================================================== EXAME FÍSICO GERAL */
{
  id: 'geral', titulo: 'Exame físico geral', cor: 'a2',
  resumo: 'Ectoscopia: estado geral, consciência, Glasgow, hidratação, biotipo, fácies, atitudes, temperatura, pele, lesões elementares, edema e linfonodos.',
  secoes: [
  { id: 'visao', h: 'Visão geral e semiotécnica',
    html: '<p>O exame físico tem 2 etapas: <b>exame físico geral</b> (somatoscopia ou ectoscopia: visão do paciente como um todo) e <b>exame dos sistemas</b>. Requer local adequado, <b>boa iluminação</b> e posicionamento. Técnicas do geral: <b>inspeção e palpação</b>. O examinador fica sempre do <b>lado direito</b> do paciente; higienize as mãos antes e depois.</p>' +
    '<h4>Sequência sugerida</h4><ol class="steps compact"><li>Estado geral</li><li>Nível de consciência, fala e linguagem</li><li>Fácies</li><li>Biotipo e postura</li><li>Atitude</li><li>Temperatura</li><li>Pele e mucosas (coloração, hidratação, lesões, TEC)</li><li>Edema e tecido subcutâneo</li><li>Fâneros (unhas e pelos)</li><li>Articulações</li><li>Linfonodos</li><li>Tônus, trofismo, estado nutricional, antropometria, sinais vitais</li></ol>' },
  { id: 'estado', h: 'Estado geral e nível de consciência',
    html: '<p><b>Estado geral</b>: avaliação subjetiva do conjunto dos dados → <b>BEG</b> (bom), <b>REG</b> (regular), <b>MEG</b> (mau).</p>' +
    tb(['Nível', 'Descrição'], [
      ['Consciente (vigil)', 'Contato adequado, responde prontamente a comandos simples; atenção preservada'],
      ['Obnubilado / sonolento', 'Lentificação psicomotora; desperta ao chamado, distrai-se facilmente; facilmente despertado, logo volta a dormir'],
      ['Letárgico / torporoso', 'Desperta só com estímulos vigorosos (tátil/doloroso), responde brevemente e volta ao sono'],
      ['Inconsciente', 'Não responde a comandos; pode reagir à dor com movimentos inespecíficos'],
      ['Comatoso', 'Sem abertura ocular ou resposta a voz/dor; pode haver ausência de reflexos de tronco']
    ]) + '<p>Avalie também a <b>orientação</b> (pessoa, lugar, tempo, situação): um paciente consciente pode estar desorientado. Perguntas: nome completo, data de nascimento, onde está, que dia/mês/ano é hoje.</p>' +
    '<h4>Escala de Coma de Glasgow (3–15)</h4>' + tb(['Componente', 'Pontuação'], [
      ['<b>E</b> – Abertura ocular (1–4)', '4 espontânea · 3 ao chamado · 2 à dor · 1 nenhuma'],
      ['<b>V</b> – Resposta verbal (1–5)', '5 orientado · 4 confuso · 3 palavras inapropriadas · 2 sons incompreensíveis · 1 nenhuma'],
      ['<b>M</b> – Resposta motora (1–6)', '6 obedece comandos · 5 localiza dor · 4 retira ao estímulo · 3 flexão anormal · 2 extensão anormal · 1 nenhuma']
    ]) + '<p><b>Leve 13–15 · Moderado 9–12 · Grave ≤ 8.</b></p>' +
    '<h4>Fala e linguagem</h4>' + tb(['Item', 'Como avaliar'], [
      ['Fluência', 'Ritmo e prosódia; afasia fluente × não fluente'],
      ['Articulação / voz', 'Clareza articulatória; diferenciar disartria (articulação) de afasia (linguagem)'],
      ['Compreensão', 'Comandos simples e complexos ("feche os olhos", "mostre dois dedos")'],
      ['Repetição', '"Nem todo ninho tem ninho"'],
      ['Nomeação', 'Nomear objetos e partes do corpo (anomia, parafasias)']
    ]) },
  { id: 'hidratacao', h: 'Grau de hidratação',
    html: tb(['O que observar', 'Como testar / normal'], [
      ['Pele', 'Umidade, elasticidade e turgor. Pinçar pele (dorso da mão/antebraço). Normal < 2 s; reduzido 2–3 s; diminuído > 3 s'],
      ['Mucosas (oral e conjuntival)', 'Úmidas, secas ou muito secas (com fissuras)'],
      ['Olhos', 'Enoftalmia (olhos encovados); lactentes: fontanela deprimida'],
      ['Perfusão', 'FC, PA, temperatura das extremidades, TEC (pressão 5 s no leito ungueal; normal ≤ 2 s)'],
      ['Diurese e sede', 'Débito urinário (< 0,5 mL/kg/h em adultos é reduzido), intensidade da sede, queda ponderal']
    ]) + '<h4>Classificação prática</h4>' + tb(['Grau', 'Achados'], [
      ['Leve', 'Sede, mucosas levemente secas; TEC até 2–3 s; turgor discretamente reduzido; diurese levemente diminuída'],
      ['Moderada', 'Mucosas secas, enoftalmia discreta; TEC > 2 s; turgor 2–3 s; taquicardia; hipotensão ortostática'],
      ['Grave', 'Mucosas muito secas, enoftalmia evidente; TEC ≥ 3 s; turgor > 3 s; hipotensão, extremidades frias, anúria, rebaixamento']
    ]) + co('tip', 'Como descrever', '"Mucosas desidratadas +2/+4" (gradua-se de 1+ a 4+). Em idosos o turgor é pouco fidedigno.') },
  { id: 'antropometria', h: 'Antropometria e biotipo',
    html: '<p><b>IMC = peso (kg) ÷ altura² (m²)</b>: triagem do estado nutricional (calculadora em Ferramentas). Circunferências: braquial, cintura abdominal, quadril. Pregas: bicipital, tricipital, subescapular, suprailíaca. Idosos precisam de valores de referência ajustados.</p>' +
    tb(['Biotipo', 'Características', 'Ângulo de Charpy'], [
      ['Longilíneo', 'Pescoço longo e delgado, tórax afilado e chato, membros longos, tendência a estatura elevada; coração mais verticalizado', '< 90°'],
      ['Mediolíneo (normolíneo)', 'Equilíbrio entre membros e tronco, desenvolvimento harmônico', '≈ 90°'],
      ['Brevilíneo', 'Pescoço curto e grosso, tórax largo, membros curtos, tendência a baixa estatura; coração mais horizontalizado', '> 90°']
    ]) + '<p><b>Postura</b> (em pé): boa, sofrível ou má; observe cifose, lordose e escoliose. Com a idade a cabeça desloca-se para frente e a lordose lombar diminui.</p>' },
  { id: 'facies', h: 'Fácies',
    html: '<p>Conjunto de <b>traços anatômicos + expressão fisionômica</b>. Sem nada específico: <b>fácies atípica</b>.</p>' +
    tb(['Fácies', 'Características', 'Associação'], [
      ['Hipocrática', 'Face emagrecida, olhos fundos e opacos, nariz afilado, lábios ressecados, sofrimento', 'Doenças graves, terminais'],
      ['Renal', 'Face pálida, edema palpebral/periorbitário predominante pela manhã', 'Síndrome nefrótica, GNDA, IRC'],
      ['Leonina', 'Pele espessa com nódulos e tubérculos, sobrancelhas ralas, nariz alargado, lóbulos infiltrados', 'Hanseníase virchowiana'],
      ['Adenoidiana', 'Boca sempre entreaberta, lábio superior curto, nariz pequeno e afilado', 'Hipertrofia de adenoides'],
      ['Parkinsoniana', 'Face "em máscara", inexpressiva, piscamento reduzido, olhar fixo, sialorreia', 'Doença de Parkinson'],
      ['Basedowiana', 'Exoftalmia, olhos brilhantes, olhar vivo e assustado, ansiedade, bócio', 'Hipertireoidismo (Graves)'],
      ['Mixedematosa', 'Face arredondada, pálida, edemaciada; nariz e lábios grossos; apatia; perda da cauda das sobrancelhas', 'Hipotireoidismo'],
      ['Acromegálica', 'Prognatismo, nariz/lábios/orelhas grandes, arcadas supraorbitárias salientes', 'Excesso de GH no adulto'],
      ['Cushingoide ("lua cheia")', 'Face redonda e avermelhada, acne, gordura facial e dorsal (giba)', 'Síndrome de Cushing, corticoide prolongado'],
      ['Mongoloide (Down)', 'Fenda palpebral oblíqua, epicanto, boca entreaberta, língua protusa', 'Trissomia do 21'],
      ['Mitral', 'Rubor malar bilateral', 'Estenose mitral'],
      ['Paralisia facial periférica', 'Assimetria, desvio da comissura, lagoftalmia', 'Lesão do nervo facial']
    ]) },
  { id: 'atitudes', h: 'Atitudes',
    html: '<p>Posição adotada pelo paciente no leito ou fora dele. <b>Voluntária</b> (para aliviar sintomas) ou <b>involuntária</b> (imposta pela doença).</p>' +
    '<div class="two-col"><div><h4>Voluntárias</h4>' + ul(['<b>Ortopneica</b>: não tolera decúbito → IC, asma, ascite volumosa', '<b>Genupeitoral</b>: joelhos e cotovelos no leito → derrame pericárdico / pericardite', '<b>Cócoras</b>: crianças com cardiopatia congênita cianótica (tetralogia de Fallot)', '<b>Decúbito lateral</b>: dor pleurítica (deita sobre o lado que dói)', '<b>Decúbito ventral</b>: cólica intestinal', '<b>Decúbito dorsal</b>: processos inflamatórios pelviperitoneais']) + '</div><div><h4>Involuntárias</h4>' + ul(['<b>Passiva</b>: fica como é colocado → coma', '<b>Ortótono</b>: tronco e membros rígidos', '<b>Opistótono</b>: arco para trás → tétano, meningite', '<b>Emprostótono</b>: concavidade para diante → tétano, meningite, raiva', '<b>Pleurostótono</b>: curva lateral', '<b>Torcicolo</b>', '<b>Mão pêndula</b>: paralisia do nervo radial', '<b>Parkinsoniana</b>: tronco fletido, marcha em festinação']) + '</div></div>' },
  { id: 'temperatura', h: 'Temperatura e febre',
    html: '<p>Temperatura axilar normal: <b>36,0–37,4 °C</b>. Locais: axilar, oral, retal, timpânica, temporal.</p>' +
    tb(['Faixa (slides de Exame Físico Geral)', 'Valor'], [
      ['Febre', '37,8–38,9 °C'], ['Febre alta', '> 39 °C'], ['Hipotermia leve', '32–35 °C'], ['Hipotermia moderada', '28–32 °C'], ['Hipotermia grave', '< 28 °C']
    ]) + tb(['Intensidade (apostila Semiologia do Adulto I)', 'Valor'], [
      ['Leve / febrícula', 'até 37,5 °C'], ['Moderada', '37,6–38,5 °C'], ['Elevada', '> 38,6 °C']
    ]) + co('warn', 'Atenção: as fontes divergem', 'Os dois materiais usam cortes diferentes. Na prova, cite o valor e a fonte do seu professor; na estação, descreva o número ("Tax 38,8 °C").') +
    '<h4>Características da febre</h4>' + ul(['<b>Início</b>: súbito ou gradual', '<b>Duração</b>: prolongada (> 1 semana) → TB, septicemia, malária, endocardite, febre tifoide, colagenoses, linfomas, pielonefrite', '<b>Término</b>: em <b>crise</b> (súbito, sudorese profusa, típico de malária) ou em <b>lise</b> (gradual)']) +
    tb(['Padrão', 'Característica', 'Exemplos'], [
      ['Contínua', 'Sempre acima do normal, variação ≤ 1 °C', 'Febre tifoide, endocardite, pneumonia'],
      ['Irregular / séptica', 'Picos altos e baixas imprevisíveis', 'Septicemia, abscessos, TB, malária inicial'],
      ['Remitente', 'Diária, variação > 1 °C, sem apirexia', 'Septicemia, pneumonia, TB'],
      ['Intermitente', 'Interrompida por períodos normais: cotidiana, terçã (dia sim, dia não), quartã (1 dia com, 2 sem)', 'Malária; ITU, linfomas, septicemias']
    ]) },
  { id: 'pele', h: 'Pele, mucosas e coloração',
    html: tb(['Alteração', 'Definição', 'Onde ver / interpretar'], [
      ['Descoramento (palidez)', 'Perda da cor róseo-avermelhada', 'Mucosas; gradua 1+ a 4+; infere <b>anemia</b>'],
      ['Eritrose', 'Acentuação da cor (vermelho-arroxeada)', 'Inflamação ou policitemia'],
      ['Cianose', 'Cor azulada quando Hb reduzida > 5 g/dL', 'Extremidades, lábios. <b>Generalizada/central</b>: hipoventilação, doença pulmonar, shunt. <b>Localizada/periférica</b>: obstrução de drenagem, isquemia'],
      ['Icterícia', 'Cor amarela por impregnação de bilirrubina (direta ou indireta)', 'Esclera, conjuntiva, freio lingual; gradua 1+ a 4+']
    ]) + co('tip', 'Como descrever', '"Hipocorado +2/+4, acianótico, anictérico" ou "ictérico +2/+4". Sempre classificar e localizar.') +
    '<p><b>TEC (tempo de enchimento capilar)</b>: pressionar a polpa/leito ungueal alguns segundos e soltar. Normal até 2–3 s (≤ 2 s nos slides de hidratação); prolongado no choque e hipoperfusão.</p>' },
  { id: 'lesoes', h: 'Lesões elementares da pele',
    html: '<p>Organizadas em <b>5 grupos</b>:</p>' +
    tb(['Grupo', 'Lesões', 'Pontos-chave'], [
      ['1. Sem relevo (manchas/máculas)', 'Pigmentares, vasculares, hemorrágicas', 'Mesmo plano da pele; vista na inspeção, confirmada na palpação'],
      ['2. Sólidas', 'Pápula, tubérculo, nódulo, urtica, queratose, liquenificação, esclerose, vegetação', 'Elevadas, consistência sólida'],
      ['3. Conteúdo líquido', 'Vesícula, bolha, pústula, abscesso', 'Seroso, purulento ou hemorrágico'],
      ['4. Soluções de continuidade', 'Erosão/exulceração, úlcera, fissura, fístula', 'Perda de substância'],
      ['5. Caducas', 'Escama, crosta, escara', 'Descamação, ressecamento, necrose']
    ]) +
    '<h4>Manchas</h4>' + tb(['Tipo', 'Mecanismo', 'Vitropressão', 'Exemplos'], [
      ['Pigmentares hipocrômicas', '↓ melanina', '—', 'Vitiligo, pitiríase versicolor, hanseníase, nevo acrômico'],
      ['Pigmentares hipercrômicas', '↑ melanina', '—', 'Cloasma, nevos, estase venosa crônica'],
      ['Vasculares', 'Distúrbio da microcirculação', '<b>Desaparecem</b>', 'Eritema (alergias, sarampo), telangiectasias (spiders na cirrose)'],
      ['Hemorrágicas', 'Extravasamento de hemácias', '<b>Não desaparecem</b>', 'Petéquias (< 2 mm), víbices (lineares), equimoses (placas), hematoma (palpável, coleção)']
    ]) + co('tip', 'Equimose × hematoma', 'Hematoma é palpável (elevação com coleção); equimose não.') +
    '<h4>Sólidas e líquidas</h4>' + tb(['Lesão', 'Definição', 'Exemplo'], [
      ['Pápula', 'Sólida, até 0,5 cm, superficial, bem delimitada', 'Acne, verruga'],
      ['Tubérculo', 'Sólida, > 0,5 cm, derme profunda', 'Hanseníase virchowiana'],
      ['Nódulo', 'Na hipoderme, perceptível mais à palpação', '—'],
      ['Urtica (lesão urticada)', 'Achatada, pruriginosa, evanescente (horas), por histamina', 'Urticária (risco de angioedema)'],
      ['Queratose', 'Espessamento da camada córnea', 'Ceratose actínica, plantar'],
      ['Liquenificação', 'Espessamento com acentuação do quadriculado por atrito crônico', 'Dermatite atópica'],
      ['Esclerose', 'Pele dura, aderida, difícil de preguear', 'Esclerodermia'],
      ['Vegetação', 'Saliente, em couve-flor', 'Condiloma (HPV), leishmaniose'],
      ['Vesícula / bolha', 'Líquido seroso; até 0,5 cm / > 0,5 cm', 'Herpes, queimadura, pênfigo'],
      ['Pústula', 'Conteúdo purulento superficial', 'Varicela, acne'],
      ['Abscesso', 'Coleção purulenta profunda, flutuante, dolorosa', 'Furunculose, hidradenite']
    ]) +
    '<h4>Soluções de continuidade e caducas</h4>' + tb(['Lesão', 'Definição', 'Exemplo'], [
      ['Erosão / exulceração', 'Perda só da epiderme; cura sem cicatriz', 'Afta, herpes roto'],
      ['Úlcera', 'Atinge derme (até subcutâneo); cicatriza com sequela', 'Úlcera varicosa, de pressão'],
      ['Fissura', 'Perda linear, dolorosa', 'Rágades, fissura anal, intertrigo'],
      ['Fístula', 'Pertuito que liga foco profundo à pele', 'TB, actinomicose, Crohn perianal'],
      ['Escama', 'Lâminas epidérmicas que se desprendem', 'Psoríase, ictiose'],
      ['Crosta', 'Secreção ressecada sobre área lesada', '—'],
      ['Escara', 'Necrose isquêmica, escura, bem delimitada', 'Lesão por pressão']
    ]) },
  { id: 'faneros', h: 'Fâneros: unhas e pelos',
    html: '<h4>Unhas</h4>' + ul(['Avaliar forma, implantação (ângulo), espessura, superfície e coloração', '<b>Baqueteamento / hipocratismo digital</b> (unha em vidro de relógio): ângulo de implantação > 160°; ao encostar os dois indicadores <b>não há janela</b> → hipoxemia crônica (DPOC, doenças pulmonares, cardiopatias)', '<b>Coiloníquia</b> (unha em colher): anemia ferropriva grave', '<b>Leuconíquia</b>: manchas brancas (microtrauma, fungos, insuficiência hepática)', '<b>Onicólise</b>: descolamento do leito (psoríase, onicomicose, hipertireoidismo)']) +
    '<h4>Pelos e cabelos</h4>' + ul(['Implantação, distribuição, quantidade, cor, textura e brilho', '<b>Hirsutismo</b>: pelos em padrão masculino na mulher (SOP, hiperplasia adrenal)', '<b>Hipotireoidismo</b>: pelos finos, ralos, perda da cauda das sobrancelhas', 'Doença vascular periférica: perda de pelos nas pernas', 'Alopecia: difusa, em placas, total']) },
  { id: 'edema', h: 'Edema',
    html: '<p>Excesso de líquido no interstício. Avaliado na <b>inspeção</b> (intensidade, rubor, simetria, localização) e na <b>palpação</b> (cacifo, consistência, sensibilidade, temperatura com o dorso da mão comparando lados).</p>' +
    tb(['Característica', 'Como avaliar', 'Significado'], [
      ['Localização', 'Generalizado (anasarca) ou localizado', 'Generalizado: IC, síndrome nefrótica, cirrose. Localizado: TVP, linfedema, infecção'],
      ['Distribuição', 'Simétrico ou assimétrico', 'Simétrico: causa sistêmica. Assimétrico: vascular ou linfática local'],
      ['Intensidade', 'Cacifo (sinal de Godet): 1+ a 4+', 'Acompanha evolução; não define etiologia'],
      ['Consistência', 'Mole ou duro', 'Mole: cardíaco, renal. Duro: crônico, linfedema, mixedema, inflamatório'],
      ['Cacifo', 'Digitopressão por alguns segundos', 'Presente: cardíaco, renal, venoso. Ausente: linfedema e mixedema'],
      ['Elasticidade', 'Tempo para a pele voltar', 'Elástico (volta logo) × inelástico'],
      ['Temperatura', 'Dorso da mão, comparando', 'Quente: inflamatório/infeccioso. Fria: comprometimento da irrigação'],
      ['Sensibilidade', 'Dor à digitopressão', 'Doloroso: inflamatório (geralmente duro e doloroso)'],
      ['Cor da pele', 'Normal, hiperemiada, cianótica, pálida', 'Rubor: inflamação. Cianose: perturbação venosa'],
      ['Horário', 'Matutino ou vespertino', 'Matutino (periorbitário): renal. Vespertino: venoso ou cardíaco'],
      ['Melhora/piora', 'Ortostatismo, elevação', 'Piora em pé: insuficiência venosa; melhora com elevação: gravitacional'],
      ['Instalação', 'Aguda ou crônica', 'Aguda: TVP, alergia, IC descompensada. Crônica: insuficiência venosa, cirrose, nefrótica'],
      ['Pele', 'Lisa e brilhante / espessa / enrugada', 'Recente e intenso / longa duração / sendo eliminado']
    ]) +
    '<h4>Tipos de edema</h4>' + tb(['Tipo', 'Característica', 'Causa'], [
      ['Cardíaco', 'Simétrico, MMII, com cacifo, piora ao final do dia', 'IC direita ou congestiva'],
      ['Renal', 'Mais evidente pela manhã, face e periorbitário', 'Síndrome nefrótica, glomerulopatias'],
      ['Venoso', 'MMII, piora após muito tempo em pé', 'Insuficiência venosa crônica'],
      ['Linfático', 'Endurecido, sem cacifo nas fases avançadas', 'Obstrução linfática'],
      ['Inflamatório', 'Quente, doloroso, hiperemiado', 'Celulite, erisipela, artrite'],
      ['Alérgico (angioedema)', 'Rápido, face e lábios', 'Reações alérgicas, anafilaxia']
    ]) +
    '<div class="two-col"><div>' + co('info', 'Edema hidrostático', 'Aumento da pressão nos capilares empurra líquido para o interstício: IC, doença venosa. Geralmente simétrico e melhora com elevação.') + '</div><div>' + co('info', 'Edema oncótico', 'Queda da pressão oncótica por falta de proteínas (albumina): síndrome nefrótica, cirrose, desnutrição. Difuso: anasarca, ascite, periorbitário.') + '</div></div>' +
    co('tip', 'Sinal de Romaña', 'Edema periorbitário unilateral → doença de Chagas aguda.') },
  { id: 'linfonodos', h: 'Linfonodos',
    html: '<p>Palpação sistemática e comparativa com as <b>polpas digitais</b>, movimentos suaves e circulares, dos dois lados simultaneamente. Cadeias: auricular anterior e posterior, occipital, submandibular, mentoniana, cervical anterior e posterior, <b>supraclavicular</b>, axilar, epitroclear, inguinal e poplítea.</p>' +
    tb(['Característica', 'Descrever', 'Significado provável'], [
      ['Número', 'Único ou múltiplos', 'Múltiplos: sistêmico (mononucleose, HIV, linfoma)'],
      ['Localização', 'Cadeia acometida', 'Pista da origem'],
      ['Tamanho', 'cm (1 polpa ≈ 1,5 cm; 2 polpas ≈ 3 cm)', 'Aumentado: infecção, autoimune, neoplasia'],
      ['Consistência', 'Amolecida, fibroelástica, endurecida, pétrea', 'Pétrea: metástase; amolecida/elástica: infecção'],
      ['Mobilidade', 'Móvel ou aderido a planos', 'Aderido: malignidade ou TB'],
      ['Sensibilidade', 'Doloroso ou indolor', 'Doloroso: inflamatório agudo; indolor: mais comum em neoplasia'],
      ['Coalescência', 'Isolados ou em bloco', 'Conglomerados: TB e linfomas'],
      ['Pele circunjacente', 'Calor, rubor, fistulização', 'Fístula: TB ganglionar, micoses']
    ]) +
    tb(['Cadeia', 'Drena / sugere'], [
      ['Cervical', 'Infecções de vias aéreas superiores, neoplasias de cabeça e pescoço'],
      ['Supraclavicular esquerda (Troisier-Virchow)', 'Metástase de câncer gástrico / intra-abdominal'],
      ['Axilar', 'Câncer de mama, infecções do membro superior'],
      ['Inguinal', 'ISTs, neoplasias pélvicas, infecção de membro inferior'],
      ['Mediastinal', 'Linfomas, TB, neoplasia pulmonar']
    ]) + co('warn', 'Bandeira vermelha', 'Linfonodo <b>endurecido, indolor e fixo</b>: sempre suspeitar de malignidade. Adenomegalia simétrica → sistêmica (viral); assimétrica → localizada ou neoplásica.') +
    co('tip', 'Modelo de descrição', '"Linfonodo inguinal direito palpável, único, 1 × 1,5 cm, fibroelástico, móvel, doloroso à palpação, sem calor ou rubor."') },
  { id: 'normal-geral', h: 'Modelo de exame físico geral normal',
    html: '<div class="model">Paciente em bom estado geral, consciente, orientado no tempo e no espaço, corado, hidratado, afebril, acianótico, anictérico, eupneico em ar ambiente. Fácies atípica. Marcha preservada, decúbito ativo (atitude ativa). Pele íntegra, sem lesões ou cicatrizes, sem equimoses ou petéquias. Unhas sem alterações. Mucosas normocoradas e úmidas. TEC < 2 s. Sem edemas. Ausência de linfonodomegalias palpáveis em cadeias cervicais, axilares e inguinais. Tônus e trofismo muscular preservados. Estado nutricional adequado, IMC dentro da normalidade. Sinais vitais: PA 120 × 80 mmHg, FC 78 bpm, FR 16 irpm, Tax 36,5 °C.</div>' }
  ]
},
/* ===================================================== RESPIRATÓRIO */
{
  id: 'respiratorio', titulo: 'Sistema respiratório', cor: 'a3',
  resumo: 'Sintomas, referências anatômicas, inspeção estática e dinâmica, ritmos, palpação (FTV), percussão, ausculta, ressonância vocal e síndromes.',
  secoes: [
  { id: 'anatomia', h: 'Referências anatômicas',
    html: ul(['<b>Trato superior</b>: nariz, cavidade nasal, faringe, laringe, parte superior da traqueia. <b>Inferior</b>: parte inferior da traqueia, brônquios, bronquíolos, alvéolos, pulmões; pleuras visceral e parietal.', '<b>Ângulo de Louis</b>: junção manúbrio-corpo do esterno; articulação da <b>2ª costela</b> (2º EIC logo abaixo); posteriormente T4; nível da <b>bifurcação traqueal</b>.', '<b>Ângulo de Charpy</b>: entre os rebordos costais → biotipo.', '<b>Ápices</b>: 3–4 cm acima das clavículas (anterior), até T1 (posterior).', '<b>Bordas inferiores</b>: anterior na LHC × 6ª costela; lateral até a 8ª costela na linha axilar média; posterior até T10 (varia com a respiração).']) +
    '<p><b>Linhas</b>: medioesternal, esternal, paraesternal, hemiclavicular, axilares anterior/média/posterior, escapular, vertebral. <b>Regiões</b>: supraclavicular, clavicular, infraclavicular, mamária, inframamária, supraesternal, esternal superior/inferior, axilar, infra-axilar, supraescapular, supraespinhal, infraespinhal, interescapulovertebral, infraescapular.</p>' +
    '<p><b>Posição</b>: paciente sentado, tórax despido; examine as faces anterior e posterior (também pode ser em decúbito dorsal).</p>' },
  { id: 'sintomas', h: 'Sinais e sintomas',
    html: tb(['Sintoma', 'Pontos-chave'], [
      ['Dor torácica', 'Origem: parede, trato respiratório, coração, vasos, esôfago, mediastino, abdome, psicogênica. Piora com inspiração = <b>ventilatório-dependente</b> (pleurite, pneumonia)'],
      ['Tosse', 'Estímulo de receptores, mecanismo expulsivo. <b>Seca</b> ou <b>produtiva</b>; aguda, subaguda ou crônica'],
      ['Expectoração', '<b>Serosa</b> (clara, aquosa) · <b>mucoide</b> · <b>purulenta</b> (amarelo-esverdeada, espessa, fétida) · <b>hemoptoica</b> (rajas de sangue)'],
      ['Hemoptise', 'Sangue vivo em maior quantidade vindo das vias aéreas, passando pela glote (≠ hemoptoico: sangue misturado ao escarro)'],
      ['Vômica', 'Eliminação brusca e abundante de pus pela glote ("parece vômito"), de uma cavidade pulmonar'],
      ['Dispneia', 'Subjetiva ou objetiva. Por esforço (grandes, médios, pequenos, repouso) e decúbito: <b>ortopneia</b>, <b>DPN</b> (típica de IC), <b>trepopneia</b> (em um decúbito lateral), platipneia'],
      ['Sibilância', 'Ruído predominantemente expiratório, musical ("miado de gato") → estreitamento das vias aéreas (asma, DPOC)'],
      ['Rouquidão', 'Alteração do timbre por comprometimento das cordas vocais: laringite, tumor, refluxo, compressão (Ortner na estenose mitral)'],
      ['Cornagem', 'Dificuldade inspiratória por obstrução alta (laringe); manifesta-se por <b>estridor</b> e tiragem. Cornagem = sintoma; estridor = sinal']
    ]) },
  { id: 'geral-resp', h: 'Exame geral com foco respiratório',
    html: ul(['Nível de consciência (alerta para hipóxia)', 'Estado nutricional (emagrecimento → neoplasia, TB)', 'Lesões de pele e mucosas', 'Linfonodomegalias', 'Dedos: <b>baqueteamento</b> (hipoxemia crônica)', '<b>Cianose</b>: central (alteração da hematose) × periférica', 'Turgência jugular (pneumotórax hipertensivo, hipertensão pulmonar)', 'Circulação colateral no tórax (obstrução venosa)']) },
  { id: 'inspecao', h: 'Inspeção estática ("estrutura")',
    html: '<p>Simetria, cicatrizes, abaulamentos, retrações, deformidades e <b>formato do tórax</b>.</p>' +
    tb(['Formato', 'Descrição', 'Associação'], [
      ['Normal (atípico)', 'Diâmetro laterolateral > anteroposterior', '—'],
      ['Em tonel (globoso)', '↑ diâmetro anteroposterior, costelas horizontalizadas', 'DPOC – enfisema'],
      ['Infundibuliforme (pectus excavatum)', 'Depressão da parte inferior do esterno', 'Congênito'],
      ['Cariniforme (pectus carinatum)', 'Esterno proeminente (peito de pombo)', 'Congênito (mais comum)'],
      ['Cônico / em sino', 'Parte inferior alargada', 'Ascite volumosa, hepatoesplenomegalia'],
      ['Cifótico / escoliótico / gibosidade', 'Deformidades da coluna', 'Postural, Pott, idoso']
    ]) },
  { id: 'dinamica', h: 'Inspeção dinâmica ("funcionamento")',
    html: tb(['Item', 'Normal e alterações'], [
      ['Frequência respiratória', '<b>12–20 irpm</b> (eupneia). <b>Taquipneia > 20</b>: febre, dor, ansiedade, insuficiência respiratória. <b>Bradipneia < 12</b>: depressão do SNC, opioides, hipotireoidismo grave'],
      ['Tipo respiratório', 'Torácico (sentado/em pé), abdominal/diafragmático (decúbito), toracoabdominal'],
      ['Amplitude', 'Profunda ou superficial'],
      ['Expansibilidade', 'Vista na inspeção, mas a palpação é mais sensível'],
      ['Musculatura acessória', 'Inspiração: ECM, escalenos, peitoral menor, serrátil anterior. Expiração: abdominais, intercostais internos'],
      ['Tiragem', 'Retração dos espaços intercostais na inspiração por obstrução brônquica (pressão pleural mais negativa)']
    ]) +
    '<h4>Ritmos respiratórios anormais</h4>' + tb(['Ritmo', 'Padrão', 'Causa'], [
      ['Cheyne-Stokes', 'Amplitude cresce e decresce, seguida de apneia (periódica)', 'IC grave, hipertensão intracraniana'],
      ['Biot', 'Irregular, sem padrão, com apneias', 'Hipertensão intracraniana; precede morte encefálica'],
      ['Kussmaul', 'Inspirações profundas e rápidas, pausas', 'Acidose metabólica (cetoacidose diabética)'],
      ['Suspirosa', 'Suspiros frequentes e profundos', 'Ansiedade (fadiga respiratória)'],
      ['Cantani', 'Aumento da amplitude respiratória', 'Acidose metabólica']
    ]) },
  { id: 'palpacao', h: 'Palpação: expansibilidade e FTV',
    html: '<p>Avalia sensibilidade, <b>expansibilidade</b> (amplitude e simetria) e <b>frêmito toracovocal</b>.</p>' +
    '<h4>Expansibilidade</h4>' + ul(['Mãos espalmadas sobre ápices e bases (anterior e posterior), polegares próximos da linha média; pedir inspiração profunda e observar o afastamento.', '<b>Normal: simétrica.</b> Assimetria (o achado mais relevante): atelectasia, pneumotórax, derrame, fratura de costela, pneumonia.', 'Redução bilateral: DPOC, fibrose, obesidade, dor intensa.']) +
    '<h4>Frêmito toracovocal (FTV)</h4>' + ul(['Vibrações das cordas vocais transmitidas à parede. Paciente fala <b>"33"</b>; usar a face palmar/região tenar, comparando simetricamente de cima para baixo.', '<b>Aumentado</b>: condensação (pneumonia): vias aéreas pérvias e alvéolos preenchidos conduzem melhor.', '<b>Diminuído/abolido</b>: algo se interpõe ou falta parênquima: derrame pleural, pneumotórax, enfisema, atelectasia/obstrução brônquica.', 'DPOC: reduzido de forma simétrica.']) +
    co('tip', 'Regra de ouro', '"O tórax que fala": sólido conduz (FTV ↑), líquido ou ar entre o pulmão e a parede abafa (FTV ↓).') },
  { id: 'percussao', h: 'Percussão',
    html: '<p>Digitodigital (dedo percussor sobre o dedo plessímetro), comparando áreas simétricas, de cima para baixo.</p>' +
    tb(['Som', 'Significado'], [
      ['Claro pulmonar', 'Normal: ar nos alvéolos'],
      ['Submaciço', 'Transição: consolidação parcial/inicial, espessamento pleural'],
      ['Maciço', 'Líquido ou tecido denso: derrame pleural, grande consolidação, atelectasia'],
      ['Timpânico', 'Ar livre no espaço pleural: pneumotórax'],
      ['Hipersonoro (hiper-ressonante)', 'Ar em excesso nos alvéolos: enfisema, crise de asma']
    ]) },
  { id: 'ausculta', h: 'Ausculta',
    html: '<h4>Sons normais</h4>' + tb(['Som', 'Onde'], [
      ['Traqueal', 'Sobre a traqueia'],
      ['Brônquico', 'Manúbrio (expiração > inspiração)'],
      ['Broncovesicular', 'Região esternal e interescapular'],
      ['Murmúrio vesicular (MV)', 'Periferia pulmonar; componente inspiratório mais intenso e longo; mais intenso na parte anterossuperior, axilas e infraescapulares']
    ]) + '<h4>Ruídos adventícios</h4>' + tb(['Ruído', 'Tipo', 'Características', 'Associação'], [
      ['Estertores finos (crepitantes)', 'Descontínuo', 'Final da inspiração, alta frequência, curtos, "velcro"/"cabelo"; <b>não mudam com a tosse</b>', 'Pneumonia, congestão (IC), fibrose'],
      ['Estertores grossos (bolhosos)', 'Descontínuo', 'Início da inspiração e toda a expiração, baixa frequência; <b>mudam com a tosse</b>', 'Bronquiectasias, bronquite, DPOC'],
      ['Roncos', 'Contínuo', 'Graves, secreção em vias de médio/grande calibre, predominam na expiração, mudam com a tosse', 'Bronquite, DPOC'],
      ['Sibilos', 'Contínuo', 'Agudos, musicais, predominam na expiração', 'Asma, DPOC'],
      ['Estridor', 'Contínuo', 'Agudo, inspiratório, obstrução alta (laringe/traqueia)', 'Laringite, câncer de laringe, anafilaxia, corpo estranho'],
      ['Atrito pleural', 'Pleural', 'Irregular, áspero, "couro atritado", mais na inspiração', 'Pleurite'],
      ['Sopro tubário', 'Sopro', 'Som brônquico onde deveria haver MV', 'Consolidação (pneumonia)'],
      ['Sopro cavitário', 'Sopro', 'Sobre caverna', 'TB cavitária'],
      ['Sopro anfórico', 'Sopro', 'Ressonância metálica, "soprar boca de garrafa vazia"', 'Grandes cavidades (revisão); pneumotórax hipertensivo (slides)']
    ]) + '<h4>Ressonância vocal (voz falada e cochichada)</h4>' + tb(['Achado', 'O que se ouve', 'Associação'], [
      ['Normal', 'Sons incompreensíveis, abafados, simétricos', '—'],
      ['Broncofonia', 'Voz mais intensa, mas sem nitidez', 'Condensação'],
      ['Pectorilóquia fônica', 'Voz falada nítida', 'Consolidação'],
      ['Pectorilóquia afônica', 'Até o cochicho é nítido', 'Consolidação'],
      ['Egofonia', 'Broncofonia de timbre metálico/anasalado ("de cabra")', 'Parte superior de derrame pleural'],
      ['Diminuída/abolida', 'Quase nada', 'Derrame, pneumotórax, atelectasia, enfisema']
    ]) },
  { id: 'sindromes', h: 'Síndromes pleuropulmonares (a tabela que cai)',
    html: tb(['Síndrome', 'Inspeção / expansibilidade', 'FTV', 'Percussão', 'MV', 'Adventícios / voz', 'Exemplo'], [
      ['<b>Consolidação</b>', '↓ no lado afetado', '<b>↑</b>', 'Macicez/submacicez', '↓ ou substituído por sopro tubário', 'Estertores finos, broncofonia, pectorilóquia', 'Pneumonia'],
      ['<b>Atelectasia</b>', '↓, tiragem, retração', '↓ ou abolido', 'Macicez', '↓ ou abolido', 'Ressonância ↓', 'Neoplasia, corpo estranho'],
      ['<b>Derrame pleural</b>', '↓', '↓ ou abolido', 'Macicez', 'Abolido', 'Egofonia no limite superior; atrito antes de acumular', 'IC, nefrótica, cirrose, TB, câncer'],
      ['<b>Pneumotórax</b>', '↓, abaulamento intercostal', '↓ ou abolido', '<b>Timpânico</b>', '↓ ou abolido', 'Ressonância ↓', 'Espontâneo, trauma'],
      ['<b>Enfisema / hiperinsuflação</b>', 'Tórax em tonel, ↓ bilateral', '↓ simétrico', '<b>Hipersonoridade</b>', '↓ global, expiração prolongada', 'Ressonância ↓', 'DPOC'],
      ['<b>Asma (crise)</b>', 'Taquipneia, musculatura acessória, tiragem', 'Normal ou ↓', 'Hipersonoridade', '↓ (grave), expiração prolongada', '<b>Sibilos expiratórios</b>', 'Asma'],
      ['<b>Congestão passiva</b>', 'Esforço respiratório', 'Normal ou ↑', 'Claro ou submacicez', 'Presente', '<b>Estertores finos nas bases</b>, sibilos ocasionais', 'IC esquerda']
    ], 'compact') +
    co('tip', 'Atalho', 'Macicez + FTV ↑ = <b>consolidação</b>. Macicez + FTV ↓ = <b>derrame</b> (ou atelectasia). Timpanismo + FTV ↓ = <b>pneumotórax</b>. Hipersonoridade bilateral = <b>enfisema</b>. Treine no Decodificador.') },
  { id: 'normal-resp', h: 'Modelo de exame respiratório normal',
    html: '<div class="model">Tórax atípico, simétrico, sem abaulamentos, retrações ou cicatrizes. Eupneico, FR 16 irpm, ritmo regular, padrão toracoabdominal, sem uso de musculatura acessória ou tiragem. Expansibilidade preservada e simétrica. Frêmito toracovocal presente e simétrico. Som claro pulmonar à percussão bilateralmente. Murmúrio vesicular presente e simétrico, sem ruídos adventícios. Ressonância vocal normal.</div>' }
  ]
},
/* ===================================================== CARDIOVASCULAR */
{
  id: 'cardio', titulo: 'Sistema cardiovascular', cor: 'a4',
  resumo: 'Ciclo cardíaco, PA, ictus, pulsos arteriais e venosos, focos, bulhas, desdobramentos, sopros, manobras e as 8 valvopatias.',
  secoes: [
  { id: 'fisio', h: 'Anatomia e fisiologia essenciais',
    html: ul(['Coração no mediastino médio, sobre o diafragma; ápice para baixo, frente e esquerda (2/3 à esquerda). Posição varia com biotipo (longilíneo: verticalizado/à esquerda; brevilíneo: horizontalizado), respiração e decúbito.', 'Camadas: pericárdio, miocárdio, endocárdio.', '<b>Propriedades</b>: cronotropismo/automaticidade (nó sinusal), excitabilidade, condutibilidade, inotropismo/contratilidade.', '<b>Nó sinusal</b>: marca-passo no AD. <b>Nó AV</b>: atrasa a condução para os átrios esvaziarem antes dos ventrículos.']) +
    '<h4>Ciclo cardíaco</h4>' + tb(['Fase', 'Evento', 'Som'], [
      ['1. Contração isovolumétrica', 'Fecham mitral e tricúspide; todas as valvas fechadas; pressão ↑', '<b>B1 (TUM)</b>'],
      ['2. Ejeção ventricular', 'Abrem aórtica e pulmonar; ejeção rápida (~70%) e lenta', 'Sopros de ejeção'],
      ['3. Relaxamento isovolumétrico', 'Fecham aórtica e pulmonar; todas fechadas', '<b>B2 (TÁ)</b>'],
      ['4. Enchimento rápido', 'Abrem mitral e tricúspide; maior parte do enchimento (1º terço)', '<b>B3</b> (se ventrículo dilatado/sobrecarga de volume)'],
      ['5. Enchimento lento (diástase)', 'Fluxo passivo menor (2º terço)', '—'],
      ['6. Contração atrial', 'Completa ~20% do enchimento (último terço)', '<b>B4</b> (se ventrículo rígido)']
    ]) + co('tip', 'Sístole × diástole', 'Sístole = de B1 a B2. Diástole = de B2 até a próxima B1 (é mais longa).') },
  { id: 'pa', h: 'Pressão arterial',
    html: '<div class="formula">PA = DC × RVP &nbsp;&nbsp;·&nbsp;&nbsp; DC = VS × FC</div><p>Fatores: débito cardíaco, resistência vascular periférica, elasticidade dos grandes vasos, viscosidade, volemia, influência neurogênica e hormonal. O método auscultatório (indireto) dá valores ~3–4 mmHg mais baixos que o intra-arterial.</p>' +
    '<h4>Técnica (método auscultatório)</h4><ol class="steps compact"><li>Repouso de 3–5 min, sentado, pernas descruzadas, bexiga vazia, sem fumar/café/exercício nos 30 min anteriores.</li><li>Braço na altura do coração, palma para cima; manguito adequado 2–3 cm acima da fossa cubital.</li><li>Palpar a radial, insuflar até desaparecer (estimativa da PAS) e desinsuflar.</li><li>Estetoscópio sobre a braquial; insuflar 20–30 mmHg acima da PAS estimada.</li><li>Desinsuflar 2–3 mmHg/s; ler PAS (fase I) e PAD (fase V).</li></ol>' +
    tb(['Fase de Korotkoff', 'Som', 'Corresponde'], [
      ['I', 'Aparecimento de sons nítidos', '<b>PAS</b>'], ['II', 'Sons com caráter de sopro', '—'], ['III', 'Sons mais intensos e nítidos', '—'],
      ['IV', 'Abafamento súbito', 'PAD quando a fase V vai a zero'], ['V', 'Desaparecimento', '<b>PAD</b>']
    ]) +
    tb(['Classificação (adulto, consultório)', 'PAS (mmHg)', 'PAD (mmHg)'], [
      ['PA ótima', '< 120', '< 80'], ['PA normal', '120–129', '80–84'], ['Pré-hipertensão', '130–139', '85–89'],
      ['HAS estágio 1', '140–159', '90–99'], ['HAS estágio 2', '160–179', '100–109'], ['HAS estágio 3', '≥ 180', '≥ 110']
    ]) + '<p class="muted small">Classificação conforme Diretriz Brasileira de HAS 2020; confira a tabela usada na sua aula.</p>' },
  { id: 'anamnese-cv', h: 'Anamnese cardiovascular',
    html: '<p>Sintomas principais: dor torácica, dispneia, astenia, edema, palpitações, síncope (perda transitória de consciência por hipofluxo cerebral), tosse, cianose. Sempre <b>OPQRST</b> + sintomas associados.</p>' +
    tb(['Grupo', 'Causas de dor torácica'], [
      ['Cardíaca', 'Angina (estável/instável), síndrome coronariana aguda, pericardite'],
      ['Vascular', 'Dissecção de aorta (súbita, lancinante, "rasgando", PA diferente entre membros), TEP, hipertensão pulmonar'],
      ['Pulmonar', 'Pneumonia, pleurite, pneumotórax, derrame, traqueobronquite'],
      ['Gastrointestinal', 'DRGE, úlcera péptica, doenças da vesícula, pancreatite'],
      ['Musculoesquelética', 'Costocondrite, hérnia de disco, trauma'],
      ['Infecciosa', 'Herpes-zóster (acompanha dermátomo)'],
      ['Psicológica', 'Pânico (diagnóstico de exclusão)']
    ]) },
  { id: 'ictus', h: 'Inspeção e palpação: ictus cordis',
    html: '<p>Exame: inspeção, palpação, percussão (<b>valor limitado</b>) e ausculta. Médico à direita do paciente.</p>' +
    '<p><b>Ictus (choque de ponta)</b>: contato da porção anterior do VE com a parede durante a contração isovolumétrica. Percebido em cerca de 25% dos pacientes; procurar em decúbito dorsal ou lateral esquerdo.</p>' +
    tb(['Parâmetro', 'Normal'], [
      ['Localização', '4º/5º EIC esquerdo na linha hemiclavicular (em DLE pode deslocar até 2 cm para a axila)'],
      ['Extensão', '< 2 cm, 1–2 polpas digitais'],
      ['Duração', 'Simultâneo ao pulso carotídeo (prolongado: estenose aórtica grave)'],
      ['Mobilidade', 'Desloca 1–2 cm com mudança de posição'],
      ['Intensidade', 'Avaliada com a palma; não reflete diretamente a contratilidade'],
      ['Ritmo e frequência', 'Regular']
    ]) +
    '<div class="two-col"><div>' + co('info', 'Ictus difuso (≥ 3 polpas)', '<b>Dilatação do VE</b> (miocardiopatia dilatada, chagásica, IAo, IM). Desviado para baixo e para a esquerda.') + '</div><div>' + co('info', 'Ictus propulsivo', 'A mão é levantada a cada contração → <b>hipertrofia do VE</b> (HAS, estenose aórtica).') + '</div></div>' +
    '<h4>Como descrever (7 itens)</h4><ol class="steps compact"><li>Localização (EIC + linha)</li><li>Extensão (polpas ou cm)</li><li>Duração (vs. pulso carotídeo)</li><li>Intensidade (normal/aumentada/diminuída)</li><li>Forma (globoso = dilatação; impulsivo = hipertrofia)</li><li>Ritmo</li><li>Componentes acessórios (antes do pulso carotídeo = B4; depois = B3)</li></ol>' +
    '<p>Palpar também <b>frêmitos</b> (sopros ≥ 4+) e pulsações paraesternais (VD).</p>' },
  { id: 'perfusao', h: 'Perfusão periférica',
    html: tb(['Parâmetro', 'Como avaliar', 'Alteração'], [
      ['Temperatura', 'Toque nas extremidades', 'Fria: vasoconstrição e possível ↓ DC (cuidado: frio ambiente)'],
      ['Coloração', 'Inspeção; comprimir o leito distal', 'Palidez, cianose (difícil em anêmicos e pele escura)'],
      ['Enchimento capilar', 'Comprimir a polpa e soltar', 'Normal 2–3 s; quanto mais lento, maior a hipoperfusão. Comparar com o próprio examinador']
    ]) },
  { id: 'pulsos', h: 'Pulsos arteriais',
    html: '<p>Pulso: flutuação periódica causada pelo coração, decorrente sobretudo da pressão intravascular. Avaliar em <b>1 minuto</b>: frequência, ritmo, simetria (comparar com o homólogo), amplitude, formato. Locais: carotídeo, temporal, braquial, radial, ulnar, femoral, poplíteo, tibial posterior, pedioso.</p>' +
    co('warn', 'Déficit de pulso', 'Na fibrilação atrial o número de pulsos pode ser menor que o de batimentos (contrações ineficazes): conte a FC na ausculta.') +
    tb(['Pulso', 'Características', 'Causas'], [
      ['Normal', 'Amplitude adequada', 'Saudáveis'],
      ['Filiforme', 'Fraco, fino, pequena amplitude', 'Choque, baixo débito, hemorragia, EAo grave'],
      ['Amplo (cheio)', 'Grande amplitude', 'Febre, anemia, hipertireoidismo'],
      ['<b>Parvus et tardus</b>', 'Pequena amplitude e ascensão lenta', '<b>Estenose aórtica</b> grave'],
      ['<b>Martelo d\'água (Corrigan)</b>', 'Ascensão rápida e colapso súbito', '<b>Insuficiência aórtica</b>'],
      ['Bisferiens / bífido', 'Dois picos sistólicos', 'IAo + EAo; cardiomiopatia hipertrófica'],
      ['Dicrótico', 'Pico sistólico + onda diastólica proeminente', 'Baixo débito, sepse, choque'],
      ['Alternante', 'Alternância regular entre forte e fraco', 'IC esquerda grave (mau prognóstico)'],
      ['<b>Paradoxal</b>', 'Queda exagerada (> 10 mmHg) na inspiração', 'Tamponamento, asma grave, DPOC grave, TEP']
    ]) },
  { id: 'jugular', h: 'Pulso venoso e turgência jugular',
    html: ul(['Somente <b>inspeção</b> (regime de baixa pressão); reflete o <b>coração direito</b>.', 'Diferencia-se do arterial por ter <b>mais de uma oscilação</b> por ciclo e não ser palpável.', 'Melhor na <b>jugular interna direita</b> (linha reta até o AD pela VCS).', 'Paciente em decúbito dorsal a <b>45°</b>, cabeça relaxada voltada para a esquerda; estimar a altura da turgência e inferir a pressão venosa central.', 'Na inspiração a amplitude diminui e o pulso se aproxima da base do pescoço.', '<b>Refluxo hepatojugular</b>: compressão do hipocôndrio direito aumenta a turgência → congestão sistêmica (IC direita).']) +
    tb(['Alteração', 'Achado', 'Doença'], [
      ['Onda <b>v</b> (cv) gigante', 'Pulsação sistólica na jugular, coincidente com B2; fígado pulsátil', 'Insuficiência tricúspide'],
      ['Onda <b>a</b> em canhão', 'Átrio contrai contra tricúspide fechada', 'BAVT (dissociação AV)'],
      ['Onda <b>a</b> proeminente', 'AD contrai contra resistência', 'Estenose tricúspide, estenose pulmonar'],
      ['Descensos X e Y profundos (W ou M)', 'Restrição ao enchimento do VD', 'Pericardite constritiva, tamponamento, miocardiopatia restritiva']
    ]) },
  { id: 'focos', h: 'Focos de ausculta e posições',
    html: tb(['Foco', 'Localização'], [
      ['Mitral (FM)', '5º EIC esquerdo, linha hemiclavicular (ictus)'],
      ['Tricúspide (FT)', 'Base do apêndice xifoide, ligeiramente à esquerda (borda esternal esquerda baixa)'],
      ['Aórtico (FAo)', '2º EIC direito, justaesternal'],
      ['Pulmonar (FP)', '2º EIC esquerdo, justaesternal'],
      ['Aórtico acessório (Erb)', '3º–4º EIC esquerdo, junto ao esterno']
    ]) + co('info', 'Focos ≠ valvas', 'Focos são pontos de referência onde o som de cada valva chega melhor, não a localização anatômica. Ausculte todo o precórdio, axila esquerda, dorso (interescapulovertebral), pescoço/carótidas, infra e supraclaviculares.') +
    tb(['Posição', 'Para quê'], [
      ['Decúbito dorsal', 'Ausculta geral, médico à direita, tórax despido'],
      ['Decúbito lateral esquerdo (Pachon)', 'Fenômenos mitrais (ruflar da EM, B3, B4) com campânula'],
      ['Sentado, tórax inclinado para frente, expiração', 'Fenômenos da base (sopro da IAo, atrito)']
    ]) + '<p><b>Estetoscópio</b>: <b>diafragma</b> para sons agudos (B1, B2, sopros de regurgitação, IAo); <b>campânula</b> para sons graves (B3, B4, ruflar mitral), apoiada levemente.</p>' },
  { id: 'bulhas', h: 'Bulhas cardíacas',
    html: tb(['Bulha', 'Origem', 'Onde / como', 'Significado'], [
      ['<b>B1 – TUM</b>', 'Fechamento mitral (primeiro) e tricúspide; início da sístole', 'Maior no foco mitral; mais grave e longa que B2; coincide com ictus e pulso carotídeo', 'Hiperfonética: EM (folhetos móveis). Hipofonética: IM'],
      ['<b>B2 – TÁ</b>', 'Fechamento aórtico (A2, primeiro) e pulmonar (P2); início da diástole', 'Maior nos focos da base; aguda e seca, após pequeno silêncio', 'P2 hiperfonética: hipertensão pulmonar'],
      ['<b>B3 – TU</b>', 'Vibração da parede no enchimento rápido (protodiástole)', 'Foco mitral, DLE, <b>campânula</b>; logo após B2', 'Fisiológica em crianças, jovens, atletas, gestantes. Patológica (galope PA-TA-TA): sobrecarga de volume, IC, IM, shunts'],
      ['<b>B4</b>', 'Contração atrial contra ventrículo rígido (telediástole/pré-sístole)', 'Logo antes de B1; campânula', 'Quase sempre patológica (galope atrial): HAS, EAo, cardiomiopatia hipertrófica']
    ]) + '<p><b>Intensidade</b>: normofonética, hipofonética, hiperfonética. <b>Ritmo</b>: binário (2 tempos) ou tríplice (3 tempos: B3, B4 ou desdobramento audível); regular ou irregular. <b>FC</b> normal 60–100 bpm, contar 1 min.</p>' +
    '<h4>Desdobramentos</h4>' + tb(['Tipo', 'Comportamento', 'Causa'], [
      ['B1 fisiológico (TLUM)', 'Pequena assincronia mitral-tricúspide', 'Normal'],
      ['B1 patológico', 'Atraso do fechamento tricúspide', 'Bloqueio de ramo direito'],
      ['B2 fisiológico (TLÁ)', 'Separa na <b>inspiração</b> (↑ retorno ao VD atrasa P2), une na expiração; melhor no foco pulmonar', 'Normal'],
      ['B2 fixo', 'Separado e não varia com a respiração', 'Comunicação interatrial (CIA)'],
      ['B2 paradoxal', 'P2 antes de A2: separa na <b>expiração</b>, some na inspiração', 'Bloqueio de ramo esquerdo, estenose aórtica']
    ]) },
  { id: 'sopros', h: 'Sopros: como analisar',
    html: '<p>Vibrações mais longas que as bulhas, por <b>turbilhonamento</b> (normal = fluxo laminar).</p>' +
    tb(['Mecanismo', 'Exemplo'], [
      ['Fluxo por obstrução parcial', 'Estenose aórtica, estenose mitral'],
      ['Irregularidade valvar ou vascular', 'Endocardite (vegetação), placas'],
      ['Velocidade aumentada em estruturas normais', 'Anemia, febre, hipertireoidismo, gestação (sopros funcionais/inocentes)'],
      ['Fluxo em câmara dilatada', 'Cardiomiopatia dilatada, IC'],
      ['Regurgitação por valva incompetente', 'Insuficiência mitral, aórtica']
    ]) +
    '<h4>Os 6 itens de descrição</h4><ol class="steps compact"><li><b>Situação no ciclo</b>: sistólico, diastólico, contínuo; proto/meso/tele/holo</li><li><b>Localização</b>: foco de maior intensidade</li><li><b>Irradiação</b>: segue o fluxo (IM → axila; EAo → carótidas/pescoço)</li><li><b>Intensidade</b>: 1+ a 6+</li><li><b>Timbre e tonalidade</b>: suave, rude, aspirativo, ruflar, piante</li><li><b>Manobras</b></li></ol>' +
    tb(['Grau', 'Critério (Levine)'], [
      ['1+', 'Difícil de ouvir mesmo para experientes, em ambiente adequado'], ['2+', 'Audível com menos dificuldade'], ['3+', 'Audível com facilidade, <b>sem frêmito</b>'],
      ['4+', 'Audível com facilidade, <b>com frêmito</b>'], ['5+', 'Audível com só parte do estetoscópio na pele'], ['6+', 'Audível com o estetoscópio afastado da pele']
    ]) +
    '<h4>A regra estenose × insuficiência</h4>' + tb(['', 'Sístole', 'Diástole'], [
      ['Valvas semilunares (aórtica, pulmonar)', '<b>Estenose</b> → sopro de <b>ejeção</b> mesossistólico em diamante (crescendo-decrescendo), começa após B1 e termina antes de B2', '<b>Insuficiência</b> → <b>protodiastólico</b>, aspirativo, em decrescendo, logo após B2'],
      ['Valvas AV (mitral, tricúspide)', '<b>Insuficiência</b> → <b>holossistólico</b> de regurgitação, em platô, encobre B1', '<b>Estenose</b> → <b>mesodiastólico</b> em ruflar (B2 – intervalo – sopro), reforço pré-sistólico']
    ]) + '<p><b>Contínuos (sistodiastólicos)</b>: recobrem B1 e B2, "em maquinaria" → persistência do canal arterial (PCA), fístulas AV.</p>' +
    '<h4>Manobras</h4>' + tb(['Manobra', 'Efeito'], [
      ['Inspiração profunda (<b>Rivero-Carvallo</b>)', '↑ retorno venoso → <b>aumenta sopros do coração direito</b> (tricúspide, pulmonar). Diferencia IT de IM'],
      ['Apneia expiratória, sentado inclinado para frente', 'Realça sopros aórticos (IAo) e da base'],
      ['Decúbito lateral esquerdo', 'Realça fenômenos mitrais'],
      ['<b>Handgrip</b> (apertar as mãos 20–30 s)', '↑ pós-carga: <b>aumenta IM e IAo</b>, <b>diminui EAo</b>'],
      ['Valsalva / ortostatismo', '↓ retorno venoso: diminui a maioria dos sopros (ex.: IM)'],
      ['Exercício / taquicardia', '↑ ruflar da estenose mitral']
    ]) },
  { id: 'valvopatias', h: 'As 8 valvopatias',
    html: '<div class="valve-grid">' + [
      ['Estenose aórtica', 'Sequela reumática, calcificação senil, congênita (bicúspide)', 'Ictus propulsivo (hipertrofia), pode deslocar', 'Parvus et tardus; <b>pressão convergente</b> (ex.: 100/90)', '<b>Mesossistólico rude em diamante</b> no FAo, irradia para <b>pescoço/carótidas</b> e fúrcula. Fenômeno de Gallavardin (irradia ao ápice, piante). B4. ↓ com handgrip', 'Tríade <b>SAD</b>: síncope, angina, dispneia (de esforço)'],
      ['Insuficiência aórtica', 'Endocardite, reumática, aortite sifilítica, dissecção, Marfan, HAS crônica', 'Ictus desviado para baixo e esquerda, difuso e propulsivo (hiperdinâmico)', '<b>Corrigan</b> (martelo d\'água); <b>pressão divergente</b> (ex.: 160/40)', '<b>Protodiastólico aspirativo em decrescendo</b> no FAo/Erb, melhor sentado inclinado em expiração; irradia ao ápice. <b>Austin-Flint</b> (ruflar no FM). ↑ handgrip', 'Dispneia progressiva, angina noturna, palpitações. "<b>Tudo pulsa</b>"'],
      ['Estenose mitral', 'Febre reumática (principal), LES, AR, calcificação do anel', 'Ictus normal ou impalpável (VE poupado); frêmito diastólico no ápice', 'Pequena amplitude; irregular se FA', '<b>B1 hiperfonética</b>, <b>estalido de abertura</b> após B2 (quanto mais perto de B2, mais grave), <b>ruflar mesodiastólico</b> no FM com campânula em DLE, <b>reforço pré-sistólico</b> (some na FA). Não irradia', 'Dispneia, ortopneia, <b>hemoptise</b>, palpitações (FA), rouquidão (<b>Ortner</b>), fácies mitral'],
      ['Insuficiência mitral', 'Reumática, prolapso, endocardite, ruptura de músculo papilar (IAM), dilatação do anel', 'Ictus desviado para baixo e esquerda, propulsivo; frêmito sistólico apical se grave', 'Normal ou ↑; ↓ se aguda (choque)', '<b>Holossistólico</b> de regurgitação no FM, <b>encobre B1</b> (hipofonética), irradia para <b>axila</b>/dorso; B3. ↑ handgrip, ↓ Valsalva', 'Dispneia, ortopneia, DPN; aguda (IAM): edema agudo de pulmão. → IC esquerda'],
      ['Estenose tricúspide', 'Quase só reumática (com EM); carcinoide, LES', 'Ictus normal; hepatomegalia congestiva', 'Jugular com onda <b>a</b> proeminente', 'B1 hiperfonética no FT, estalido de abertura, <b>ruflar mesodiastólico</b> no FT; <b>Rivero-Carvallo +</b>', 'Edema, ascite, hepatomegalia, fadiga'],
      ['Insuficiência tricúspide', '<b>Funcional</b> (dilatação do VD por hipertensão pulmonar); endocardite em usuários de drogas IV, carcinoide, Ebstein', 'Ictus sem alteração; pulsação paraesternal; fígado pulsátil', 'Jugular com onda <b>v (cv) gigante</b>', '<b>Holossistólico</b> no FT, igual ao da IM, mas <b>↑ na inspiração (Rivero-Carvallo +)</b>', 'Congestão sistêmica → IC direita'],
      ['Estenose pulmonar', 'Congênita (isolada, tetralogia de Fallot)', 'Pulsação paraesternal esquerda alta; frêmito no FP', 'Arterial normal; jugular onda a', '<b>Estalido de ejeção</b> (único que ↓ na inspiração), <b>mesossistólico em diamante</b> no FP, irradia para dorso/ombro E; B2 desdobrada com P2 ↓; Rivero-Carvallo +', 'Assintomática se leve; dispneia, síncope, IC direita'],
      ['Insuficiência pulmonar', 'Funcional por hipertensão pulmonar; pós-Fallot; endocardite', 'Pulsação paraesternal esquerda', 'Normal', '<b>Graham Steell</b>: protodiastólico em decrescendo, alta frequência, no FP; P2 hiperfonética; Rivero-Carvallo +', 'Oligossintomática; IC direita se grave']
    ].map(function (v) {
      return '<article class="valve"><h4>' + v[0] + '</h4><dl><dt>Causas</dt><dd>' + v[1] + '</dd><dt>Ictus / palpação</dt><dd>' + v[2] + '</dd><dt>Pulso / PA</dt><dd>' + v[3] + '</dd><dt>Ausculta</dt><dd>' + v[4] + '</dd><dt>Clínica</dt><dd>' + v[5] + '</dd></dl></article>';
    }).join('') + '</div>' },
  { id: 'iao-sinais', h: 'Insuficiência aórtica: "tudo pulsa"',
    html: tb(['Sinal', 'O que é'], [
      ['Musset', 'Cabeça balança com os batimentos'],
      ['Müller', 'Pulsação da úvula'],
      ['Quincke', 'Pulsação capilar no leito ungueal (rubor/palidez alternados)'],
      ['Traube', 'Som de "tiro de pistola" sobre a femoral (sem comprimir)'],
      ['Duroziez', 'Duplo sopro (sistólico e diastólico) na femoral levemente comprimida'],
      ['Hill', 'PAS poplítea maior que a braquial (> 20 mmHg; em grave > 60 mmHg)'],
      ['Rosenbach / Gerhard', 'Pulsação sistólica do fígado / do baço'],
      ['Corrigan', 'Pulso em martelo d\'água; pulsação visível das carótidas']
    ]) +
    '<h4>Pressão convergente × divergente</h4>' + tb(['', 'Sistólica', 'Diastólica', 'Pressão de pulso', 'Pulso'], [
      ['Normal', '120', '80', '40 mmHg', 'Normal'],
      ['Estenose aórtica', '↓ (ex.: 100)', '↑ (ex.: 90)', '<b>Convergente</b> (10)', 'Parvus et tardus'],
      ['Insuficiência aórtica', '↑ (ex.: 160)', '↓ (ex.: 40)', '<b>Divergente</b> (120; > 50)', 'Corrigan']
    ]) },
  { id: 'outros-sons', h: 'Cliques, estalidos, atrito e rumor venoso',
    html: tb(['Som', 'Momento', 'Características', 'Causa'], [
      ['Clique protossistólico (de ejeção)', 'Início da sístole, logo após B1', 'Agudo, breve; distensão arterial, folhetos estenóticos', 'Estenose aórtica/pulmonar'],
      ['Clique meso/telessistólico', 'Meio/fim da sístole', 'Tensão súbita dos folhetos; área mitral', '<b>Prolapso da valva mitral</b>'],
      ['Estalido de abertura', 'Diástole, logo após B2', 'Seco, agudo; DLE, FM e BEE', 'Estenose mitral/tricúspide'],
      ['Atrito pericárdico', 'Não coincide com fase do ciclo (sístole e diástole)', '"Fricção de couro", áspero, intensidade variável; ponta e BEE 4º EIC', 'Pericardite fibrinosa'],
      ['Rumor venoso', 'Contínuo', 'Grave, base do pescoço, sentado; junção jugular-tronco braquiocefálico', 'Fisiológico (crianças)']
    ]) },
  { id: 'normal-cv', h: 'Modelo de exame cardiovascular normal',
    html: '<div class="model">Sem turgência jugular patológica a 45°. Ictus cordis visível e palpável no 5º EIC esquerdo na linha hemiclavicular, com extensão de 1 a 2 polpas digitais, não propulsivo. Pulsos periféricos palpáveis, simétricos, com amplitude normal. Extremidades aquecidas, TEC < 2 s. Ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros, cliques ou atritos. FC 78 bpm, PA 120 × 80 mmHg.</div>' +
    co('tip', 'Forma curta (prontuário)', '"RCR em 2T, BNF, sem sopros. FC 78 bpm. PA 120 × 80 mmHg."') }
  ]
},
/* ===================================================== ABDOME */
{
  id: 'abdome', titulo: 'Abdome', cor: 'a5',
  resumo: 'Anamnese digestiva, sequência IAPP, topografia, inspeção, ausculta, percussão, palpação, fígado, baço, vesícula, ascite e sinais semiológicos.',
  secoes: [
  { id: 'anamnese-gi', h: 'Anamnese do sistema digestivo',
    html: tb(['Segmento', 'Sintomas'], [
      ['Boca', 'Dor (dentes, glândulas, ATM), halitose, gengivorragia'],
      ['Esôfago', 'Disfagia, odinofagia, pirose, <b>regurgitação</b> (não precedida de náusea), sialorreia, hematêmese'],
      ['Estômago e duodeno', 'Dor epigástrica, náuseas e vômitos (<b>perguntar o conteúdo!</b>), hematêmese, <b>dispepsia</b> (desconforto epigástrico com saciedade precoce, plenitude, distensão), pirose'],
      ['Intestino delgado', 'Diarreia alta (volumosa), esteatorreia, dor (localização variável), distensão, melena'],
      ['Intestino grosso', 'Dor, <b>tenesmo</b>, hematoquezia, enterorragia, diarreia baixa, mudança de ritmo, obstipação (normal: 8 h a 48 h entre evacuações)'],
      ['Fígado e vias biliares', 'Dor no QSD (distensão da cápsula de Glisson, cólica biliar), icterícia, colúria, acolia, vômitos'],
      ['Pâncreas', 'Dor epigástrica/HCE irradiada para o dorso ("em faixa"), náuseas, vômitos, icterícia (obstrução do colédoco), diarreia e esteatorreia (insuficiência)']
    ]) + co('tip', 'Sempre', 'Caracterizar a <b>dor</b> (OPQRST) e as <b>evacuações</b> (volume, consistência, aspecto, frequência).') +
    tb(['Sangramento', 'Definição'], [
      ['Hematêmese', 'Vômito com sangue (sangramento até o ângulo de Treitz)'],
      ['Melena', 'Fezes negras, pastosas, fétidas (sangramento acima do ângulo de Treitz)'],
      ['Enterorragia', 'Sangue vivo puro pelo ânus'],
      ['Hematoquezia', 'Sangue misturado com as fezes / com coágulos']
    ]) +
    '<p><b>Exame geral no paciente digestivo</b>: antropometria (desnutrição), cor (anemia, icterícia), lesões de pele (hipovitaminoses), pelos e unhas, hidratação (diarreia), edema (desnutrição), estigmas hepáticos (eritema palmar, aranhas vasculares, ginecomastia, flapping).</p>' },
  { id: 'sequencia', h: 'Sequência e preparo',
    html: '<div class="flow"><span>1. Inspeção</span><span>2. Ausculta</span><span>3. Percussão</span><span>4. Palpação</span><span>5. Sinais especiais</span></div>' +
    co('warn', 'Por que auscultar antes?', 'Percussão e palpação estimulam a motilidade e <b>alteram os ruídos hidroaéreos</b>. No abdome a ausculta vem antes.') +
    '<div class="two-col"><div><h4>Paciente e ambiente</h4>' + ul(['Decúbito dorsal, braços ao longo do corpo, pernas estendidas', 'Travesseiro baixo sob cabeça e ombros', 'Expor do xifoide ao púbis, respeitando o pudor', 'Corrigir pernas cruzadas e mãos na nuca', 'Ambiente silencioso, aquecido, bem iluminado']) + '</div><div><h4>Examinador</h4>' + ul(['À direita do paciente', 'Mãos aquecidas', 'Explicar cada manobra', 'Observar a face do paciente (dor)', 'Começar longe da área dolorosa']) + '</div></div>' },
  { id: 'topografia', h: 'Divisão topográfica',
    html: '<p><b>Nove regiões</b>: linhas horizontais na altura das extremidades das 10ªs costelas (subcostal) e das espinhas ilíacas anterossuperiores; verticais da 10ª costela/LHC ao púbis. <b>Quatro quadrantes</b>: linhas cruzando na cicatriz umbilical. Use a que descreve melhor. Veja o mapa interativo no Decodificador.</p>' +
    tb(['Região', 'Projeção'], [
      ['Hipocôndrio direito', 'Fígado (lobo direito), vesícula, seio costofrênico direito'],
      ['Epigástrio', 'Lobo esquerdo do fígado, estômago (antro)'],
      ['Hipocôndrio esquerdo', 'Fundo gástrico, baço, ângulo esplênico do cólon'],
      ['Flanco direito', 'Cólon ascendente, delgado'],
      ['Mesogástrio (umbilical)', 'Grande curvatura, cólon transverso, delgado'],
      ['Flanco esquerdo', 'Cólon descendente, delgado'],
      ['Fossa ilíaca direita', 'Ceco, apêndice, delgado, ovário'],
      ['Hipogástrio', 'Delgado; bexiga e útero quando aumentados'],
      ['Fossa ilíaca esquerda', 'Sigmoide, delgado, ovário']
    ]) },
  { id: 'inspecao-abd', h: 'Inspeção',
    html: '<p>Observar de frente, de perto, de longe e <b>tangencialmente</b>; ir aos pés da maca para comparar os hemiabdomes; complementar em pé (hérnias).</p>' +
    tb(['Forma', 'Associação'], [
      ['Plano', 'Normal'], ['Globoso', 'Ascite, distensão gasosa, obesidade'], ['Em avental', 'Grande obesidade (cai sobre as coxas)'],
      ['Batráquio', 'Ascite: flancos abaulados em decúbito'], ['Piriforme', 'Gravidez avançada'], ['Escavado', 'Caquexia, desidratação'], ['Visceroptótico', 'Flacidez (puerpério, pós-bariátrica)']
    ]) +
    ul(['<b>Abaulamentos</b>: distensão de alças (megacólon chagásico), hérnias, visceromegalias, tumores, útero gravídico. <b>Retrações</b>: raras, sob cicatrizes.', '<b>Cicatrizes</b>: cirurgia prévia → aderências → risco de obstrução.', '<b>Cullen</b> (equimose periumbilical) e <b>Grey-Turner</b> (equimose nos flancos): hemorragia retroperitoneal, pancreatite necro-hemorrágica.', '<b>Peristaltismo visível</b>: pode ser normal em magros; com cólica e vômitos → <b>obstrução intestinal</b>.', '<b>Pulsações</b>: aorta no epigástrio em magros é comum; massa pulsátil expansível → aneurisma de aorta.']) +
    '<h4>Circulação colateral</h4>' + tb(['Tipo', 'Distribuição', 'Fluxo', 'Causa'], [
      ['<b>Porta</b>', 'Em torno do umbigo (cabeça de medusa), andar superior e inferior', 'Ascendente acima e <b>descendente abaixo</b> do umbigo (centrífugo)', 'Hipertensão portal (cirrose)'],
      ['<b>Cava inferior</b>', 'Flancos e fossas ilíacas', 'Sempre <b>ascendente</b>', 'Obstrução da VCI']
    ]) },
  { id: 'ausculta-abd', h: 'Ausculta',
    html: ul(['Diafragma (ou campânula) aquecido, com leve pressão; centro de cada quadrante por 10–15 s; pelo menos 2 pontos acima e abaixo do umbigo.', '<b>Ruídos hidroaéreos (RHA)</b>: turbilhonamento de líquido e gás. Normal: a cada 5–10 s, <b>5 a 34/min</b>.', '<b>Abolidos</b>: ausência após <b>3–5 min</b> → íleo paralítico, peritonite.', '<b>Hipoativos</b>: ↓ motilidade.', '<b>Hiperativos</b> (quase contínuos): diarreia, sangue no lúmen, obstrução inicial.', '<b>Timbre metálico</b>: obstrução intestinal.']) +
    tb(['Sopro vascular', 'Onde auscultar'], [
      ['Aorta abdominal', 'Linha média, epigástrio (acima do umbigo)'],
      ['Artérias renais', '2–3 cm acima do umbigo e 2–3 cm lateral à linha média'],
      ['Artérias ilíacas', '2–3 cm abaixo do umbigo, lateralmente'],
      ['Artérias femorais', 'Abaixo do ligamento inguinal']
    ]) },
  { id: 'percussao-abd', h: 'Percussão',
    html: ul(['Digitodigital, em linhas longitudinais craniocaudais ou em raios a partir do umbigo.', '<b>Normal</b>: timpanismo em quase todo o abdome; macicez na projeção hepática.', 'Macicez em outras regiões: visceromegalias, tumores, bexigoma, ascite.', '<b>Hipertimpanismo</b>: excesso de gás (distensão, obstrução).', '<b>Sinal de Jobert</b>: desaparecimento da macicez hepática (timpanismo) → <b>pneumoperitônio</b> por perfuração de víscera oca (abdome agudo perfurativo).']) +
    '<h4>Espaço de Traube</h4><p>Limites: superior 6ª costela esquerda; inferior rebordo costal esquerdo; lateral linha axilar anterior/média; medial borda do lobo esquerdo do fígado. Normal: <b>timpânico</b> (bolha gástrica). Maciço: esplenomegalia, tumor, pseudocisto, derrame pleural esquerdo.</p>' },
  { id: 'palpacao-abd', h: 'Palpação',
    html: '<h4>Superficial</h4>' + ul(['Avalia <b>tônus e sensibilidade</b> da parede, massas superficiais, hérnias, diástase dos retos.', 'Mãos aquecidas, polpas apoiadas, compressão e descompressão suaves, começando longe da dor; uni ou bimanual, comparando áreas simétricas.', '<b>Defesa</b> (contratura involuntária): irritação peritoneal; localizada → generalizada ("<b>abdome em tábua</b>"). Diferenciar de contratura voluntária.']) +
    '<h4>Profunda e deslizante</h4>' + ul(['Mãos a ~45°, deslocando pele e subcutâneo; aprofundar na expiração; deslizar contra plano profundo.', 'Normalmente palpáveis: ceco, sigmoide, cólon transverso, borda hepática, aorta (grande curvatura gástrica às vezes).', 'Massas: localização, tamanho, forma, consistência, sensibilidade, pulsação, mobilidade.']) +
    co('warn', 'Sinal de Blumberg', 'Compressão lenta e profunda e <b>descompressão brusca</b>: dor aguda à descompressão = <b>irritação peritoneal / peritonite</b> (folhetos com fibrina se separam). Avise o paciente antes.') },
  { id: 'figado', h: 'Fígado',
    html: '<h4>Hepatimetria (percussão)</h4>' + ul(['Percutir na LHC e paraesternal direitas a partir do 2º EIC: som claro pulmonar → <b>submacicez/macicez no 5º EIC</b> (limite superior) → timpanismo (limite inferior, melhor confirmado pela palpação).', 'Normal: até ~12 cm na LHC direita (6–12 cm).']) +
    '<h4>Palpação</h4>' + tb(['Técnica', 'Como'], [
      ['Unimanual / bimanual (Lemos-Torres)', 'Mão esquerda na loja renal elevando; mão direita paralela ou oblíqua à linha média; aprofundar na expiração e <b>esperar a borda tocar na inspiração</b>'],
      ['Em garra (Mathieu)', 'De costas para a cabeça do paciente, dedos em garra abaixo do rebordo; a borda toca a ponta dos dedos na inspiração']
    ]) + '<p><b>Normal</b>: borda fina, superfície lisa, consistência firme/elástica, indolor, sem pulsação (pode ser palpável até o RCD).</p>' +
    tb(['Condição', 'Volume', 'Superfície', 'Consistência', 'Sensibilidade', 'Borda'], [
      ['ICC (congestão)', '↑', 'Lisa', '↑', '<b>Dolorosa</b>', 'Romba'],
      ['Colestase extra-hepática benigna', '↑', 'Lisa', '↑', 'Indolor', 'Romba'],
      ['Colestase extra-hepática maligna', '↑', 'Lisa ou irregular', '↑', 'Dolorosa', 'Romba'],
      ['<b>Cirrose</b>', '↑ ou ↓', '<b>Nodular</b> (micro/macro)', '↑', 'Indolor', 'Romba'],
      ['Hepatite', '↑', 'Lisa', 'Normal', 'Dolorosa', 'Fina'],
      ['Esteatose', '↑', 'Lisa', '↓', 'Indolor', 'Fina'],
      ['Esquistossomose', '↑', '—', '↑', 'Indolor', 'Romba'],
      ['Neoplasias', '↑', 'Irregular', '↑ (pétrea)', 'Dolorosa', 'Romba'],
      ['Linfomas', '↑', 'Lisa', 'Normal ou ↑', 'Dolorosa', 'Romba']
    ], 'compact') + co('tip', 'Fígado pulsátil', 'Pulsação sistólica do fígado = insuficiência tricúspide (ou sinal de Rosenbach na IAo).') },
  { id: 'baco', h: 'Baço',
    html: ul(['Normal: em geral <b>não percutível e não palpável</b>; só fica palpável se aumentar pelo menos 2 vezes.', 'Percutir as linhas axilares média e anterior esquerdas; macicez em pelo menos um EIC → suspeitar de esplenomegalia.', 'Espaço de Traube maciço → esplenomegalia.']) +
    '<h4>Sinal de Castell</h4><p>Último EIC (9º/10º) na <b>linha axilar anterior esquerda</b>. Percutir em expiração (timpânico) e após inspiração profunda: <b>se ficar maciço → Castell positivo (esplenomegalia)</b>.</p>' +
    '<h4>Palpação</h4>' + ul(['Mão esquerda eleva o hipocôndrio esquerdo por trás; mão direita oblíqua, dedos para a linha axilar anterior; sentir a borda na inspiração profunda.', '<b>Posição de Schuster</b>: entre decúbito dorsal e lateral direito, perna esquerda fletida, braço esquerdo sobre a cabeça.', 'Massa no QSE que desce com a respiração sugere baço.']) },
  { id: 'vesicula', h: 'Vesícula biliar',
    html: tb(['Sinal', 'Técnica', 'Significado'], [
      ['<b>Murphy</b>', 'Comprimir o <b>ponto cístico</b> (intersecção do rebordo costal direito com a LHC) e pedir inspiração profunda', 'Parada da inspiração pela dor → <b>colecistite aguda</b>'],
      ['<b>Courvoisier-Terrier</b>', 'Palpação da vesícula', 'Vesícula <b>palpável e indolor</b> em paciente <b>ictérico</b> → neoplasia de cabeça de pâncreas (obstrução do colédoco terminal)']
    ]) },
  { id: 'ascite', h: 'Ascite',
    html: tb(['Manobra', 'Técnica', 'Volume'], [
      ['<b>Macicez móvel</b>', 'Decúbito dorsal: macicez no flanco; manter o dedo e virar o paciente para o lado oposto → o ponto fica timpânico (líquido desce, alças flutuam)', 'Médio volume. <b>Sinal mais sensível, específico e reprodutível</b>'],
      ['<b>Semicírculo de Skoda</b>', 'Percutir do centro para a periferia: timpanismo central e macicez periférica, linha de transição com <b>concavidade voltada para o epigástrio</b>', 'Médio volume'],
      ['<b>Piparote</b>', 'Paciente/assistente põe a borda da mão na linha média; golpear um flanco e sentir a onda no outro', '<b>Grande volume</b>']
    ]) + '<p>Ascite volumosa: abdome em batráquio, cicatriz umbilical plana ou protrusa, tórax em sino.</p>' },
  { id: 'sinais', h: 'Sinais semiológicos (resumão)',
    html: tb(['Sinal', 'Como pesquisar', 'Sugere'], [
      ['Blumberg', 'Descompressão brusca dolorosa (na FID: ponto de McBurney)', 'Peritonite / apendicite'],
      ['Rovsing', 'Palpar a FIE causa dor na FID (gases deslocados ao ceco)', 'Apendicite'],
      ['Psoas', 'Dor na FID à extensão da coxa direita (decúbito lateral esquerdo) ou flexão contra resistência', 'Apendicite retrocecal'],
      ['Obturador', 'Dor hipogástrica/FID à rotação interna da coxa direita fletida', 'Apendicite pélvica'],
      ['Lenander', 'Temperatura retal > axilar em mais de 1 °C', 'Apendicite'],
      ['Murphy', 'Parada inspiratória à compressão do ponto cístico', 'Colecistite aguda'],
      ['Courvoisier-Terrier', 'Vesícula palpável e indolor + icterícia', 'Neoplasia periampular / cabeça de pâncreas'],
      ['Giordano', 'Punho-percussão no ângulo costovertebral dolorosa', 'Pielonefrite, hidronefrose (litíase)'],
      ['Jobert', 'Timpanismo na área hepática', 'Pneumoperitônio (perfuração)'],
      ['Cullen', 'Equimose periumbilical', 'Pancreatite grave (hemorragia retroperitoneal)'],
      ['Grey-Turner', 'Equimose nos flancos', 'Pancreatite grave'],
      ['Macicez móvel, Skoda, piparote', 'Ver ascite', 'Ascite'],
      ['Castell', 'Macicez no último EIC LAA E à inspiração', 'Esplenomegalia']
    ]) +
    '<h4>Grandes síndromes abdominais</h4>' + tb(['Síndrome', 'Inspeção', 'Ausculta', 'Percussão', 'Palpação'], [
      ['<b>Peritonite aguda</b>', 'Imobilidade, respiração superficial', 'RHA <b>abolidos</b>', 'Dor intensa', 'Defesa/hipertonia (tábua); <b>Blumberg +</b>'],
      ['<b>Obstrução intestinal</b>', 'Distensão, <b>peristaltismo visível</b>', 'Hiperativos, <b>timbre metálico</b> (depois abolidos)', '<b>Hipertimpanismo</b>', 'Alças dilatadas eventualmente palpáveis'],
      ['<b>Hipertensão portal</b>', 'Ascite, <b>circulação colateral tipo porta</b>, batráquio', 'Normais', 'Macicez móvel, Skoda; macicez no HCE (baço)', 'Piparote (grande volume), fígado alterado, <b>baço palpável</b>']
    ], 'compact') },
  { id: 'normal-abd', h: 'Modelo de exame do abdome normal',
    html: '<div class="model">Abdome plano, simétrico, sem cicatrizes, abaulamentos, circulação colateral ou peristaltismo visível. Ruídos hidroaéreos presentes e normoativos, sem sopros. Timpânico à percussão, com macicez restrita à projeção hepática; espaço de Traube livre. Flácido, indolor à palpação superficial e profunda, sem massas ou visceromegalias. Fígado com hepatimetria de 10 cm na LHC direita, borda não palpável (ou fina, lisa, indolor no RCD). Baço não palpável. Sinais de Murphy, Blumberg e Giordano negativos. Sem sinais de ascite.</div>' }
  ]
}
];

/* ================= GLOSSÁRIO (material: Glossário de termos científicos + termos técnicos da aula) */
var GLOSSARIO = [
['Acolia fecal', 'Fezes esbranquiçadas pela ausência de bilirrubina.'],
['Adenite', 'Inflamação de um linfonodo.'],
['Adenomegalia / linfadenomegalia', 'Aumento de um linfonodo.'],
['Afasia', 'Perda da capacidade de usar palavras como símbolos de ideias (linguagem).'],
['Ageusia', 'Perda do paladar.'],
['Alopecia', 'Queda dos cabelos / ausência de pelos.'],
['Amaurose', 'Perda da visão por lesão do sistema nervoso.'],
['Amenorreia', 'Ausência de menstruação por 3 meses (< 3 meses = atraso menstrual).'],
['Anasarca', 'Edema generalizado, incluindo cavidades serosas (pleura, peritônio, pericárdio).'],
['Anisocoria', 'Desigualdade no diâmetro das pupilas.'],
['Anorexia', 'Falta de apetite, inapetência.'],
['Anosmia', 'Perda do olfato.'],
['Anúria', 'Ausência de urina (< 100 mL/24 h). Oligoanúria é o termo intermediário.'],
['Apraxia', 'Incapacidade de executar tarefas previamente aprendidas.'],
['Artralgia', 'Dor em uma articulação.'],
['Artrite', 'Inflamação de uma articulação.'],
['Ascite', 'Acúmulo anormal de líquido na cavidade peritoneal.'],
['Astenia', 'Cansaço, debilidade (≠ fraqueza muscular, ≠ dispneia). Sempre perguntar o que o paciente quer dizer.'],
['Ataxia', 'Falta de coordenação.'],
['Baqueteamento digital', 'Engrossamento da falange distal (dedos em baqueta de tambor), hipocratismo digital.'],
['Bradicardia', 'FC abaixo de 60 bpm.'],
['Bradipneia', 'Lentidão anormal da respiração (< 12 irpm no adulto).'],
['Cacifo (sinal de Godet)', 'Depressão que persiste na pele edemaciada após a pressão do dedo.'],
['Cacosmia', 'Percepção de mau cheiro (olfato alterado).'],
['Caquexia', 'Emagrecimento extremo com comprometimento franco do estado geral.'],
['Cefaleia', 'Dor de cabeça.'],
['Cervicalgia', 'Dor na região cervical.'],
['Cianose', 'Coloração azulada de pele e mucosas por oxigenação insuficiente (Hb reduzida > 5 g/dL).'],
['Colúria', 'Urina escura, cor de "coca-cola" (bilirrubina direta).'],
['Constipação', 'Obstipação: evacuações espaçadas ou fezes endurecidas com esforço.'],
['Coriza', 'Corrimento de secreção nasal.'],
['Cornagem', 'Dificuldade inspiratória por obstrução alta (laringe), com estridor (sintoma; estridor é o sinal).'],
['Derrame', 'Líquido em cavidade serosa (pleural, peritoneal, pericárdica, sinovial).'],
['Diarreia', 'Aumento do número de evacuações, de consistência líquida ou pastosa.'],
['Diplopia', 'Visão dupla.'],
['Disacusia', 'Distúrbio da audição em que certos sons causam dor ou mal-estar.'],
['Disartria', 'Dificuldade na articulação das palavras por lesão neurológica.'],
['Disenteria', 'Diarreia com muco, pus ou sangue e tenesmo.'],
['Disfagia', 'Dificuldade para deglutir.'],
['Disfasia', 'Comprometimento parcial da linguagem.'],
['Dismenorreia', 'Menstruação dolorosa.'],
['Dispareunia', 'Dor na relação sexual.'],
['Dispepsia', 'Desconforto epigástrico após as refeições, dificuldade de digestão.'],
['Dispneia', 'Falta de ar; dificuldade subjetiva de respirar.'],
['Dispneia paroxística noturna', 'Crise de dispneia que acorda o paciente à noite, aliviada ao sentar (IC).'],
['Disúria', 'Micção difícil ou dolorosa.'],
['Edema', 'Acúmulo anormal de líquido no interstício.'],
['Enterorragia', 'Sangue vivo puro pelo ânus, do tubo digestivo.'],
['Enurese noturna', 'Emissão involuntária de urina durante o sono.'],
['Epistaxe', 'Sangramento nasal.'],
['Eritema', 'Mancha vermelha por vasodilatação.'],
['Eructação', 'Arroto; eliminação de gases do estômago pela boca.'],
['Escotoma', 'Mancha escura que ocupa parte do campo visual.'],
['Esteatorreia', 'Gordura em excesso nas fezes.'],
['Estrangúria', 'Micção lenta e dolorosa.'],
['Estridor', 'Ruído áspero da respiração por obstrução alta (sinal).'],
['Exantema', 'Erupção cutânea de doença aguda viral ou bacteriana.'],
['Fâneros', 'Pelos e unhas (anexos cutâneos).'],
['Flatos', 'Gases eliminados pelo ânus.'],
['Fonofobia', 'Intolerância a ruídos.'],
['Fotofobia', 'Intolerância à luz.'],
['Halitose', 'Mau hálito.'],
['Hematêmese', 'Vômito com sangue do tubo digestivo alto.'],
['Hematoquezia', 'Sangue (com coágulos) misturado às fezes.'],
['Hematúria', 'Sangue na urina.'],
['Hemoptise', 'Eliminação pela boca de sangue vivo vindo do trato respiratório.'],
['Hemoptoico', 'Escarro com estrias de sangue.'],
['Hemospermia', 'Sangue no esperma.'],
['Hígido', 'Sadio, são.'],
['Hiporexia', 'Diminuição do apetite.'],
['Hiposmia', 'Diminuição do olfato.'],
['Hipoacusia', 'Diminuição da audição.'],
['Icterícia', 'Coloração amarela de pele, mucosas e secreções por pigmentos biliares.'],
['Incontinência', 'Perda do controle esfincteriano (fezes ou urina).'],
['Lagoftalmia', 'Incapacidade de fechar a pálpebra (lesão do nervo facial).'],
['Lipotímia', 'Sensação de desmaio iminente / perda momentânea, fugaz (pré-síncope).'],
['Lombalgia', 'Dor na região lombar.'],
['Mácula', 'Mancha plana de cor diferente da pele circundante.'],
['Melena', 'Fezes negras por sangramento acima do ângulo de Treitz.'],
['Menarca', 'Primeira menstruação.'],
['Mialgia', 'Dor muscular.'],
['Nictúria (noctúria)', 'Micções durante a noite.'],
['Nucalgia', 'Dor na nuca.'],
['Odinofagia', 'Dor à deglutição.'],
['Oligúria', 'Diurese < 400 mL/24 h.'],
['Ortopneia', 'Dispneia ao deitar, necessidade de ficar sentado para respirar.'],
['Otalgia', 'Dor de ouvido.'],
['Otorragia', 'Sangramento pelo conduto auditivo.'],
['Otorreia', 'Secreção mucosa ou purulenta pelo ouvido.'],
['Palpitação', 'Percepção incômoda dos batimentos cardíacos.'],
['Pápula', 'Elevação sólida da pele até 0,5 cm.'],
['Paraplegia', 'Paralisia dos membros inferiores.'],
['Paresia', 'Diminuição da força muscular.'],
['Parestesia', 'Sensação de formigamento/amortecimento.'],
['Pirose', 'Azia, queimação retroesternal/epigástrica.'],
['Plegia', 'Ausência de força, paralisia.'],
['Polaciúria', 'Aumento do número de micções com pequeno volume cada.'],
['Polidipsia', 'Sede excessiva.'],
['Polifagia', 'Fome excessiva.'],
['Poliúria', 'Aumento do volume urinário em 24 h.'],
['Pródromo', 'Sintomas inespecíficos que antecedem uma doença.'],
['Prurido', 'Coceira.'],
['Pústula', 'Elevação circunscrita contendo pus.'],
['Regurgitação', 'Retorno de alimento à boca sem náusea.'],
['Rinorreia', 'Corrimento nasal.'],
['Sialorreia (sialose)', 'Produção excessiva de saliva.'],
['Síncope', 'Perda transitória da consciência e do tônus postural (hipofluxo cerebral).'],
['Taquicardia', 'FC acima de 100 bpm no adulto.'],
['Taquipneia', 'FR acima de 20 irpm no adulto.'],
['Taquisfigmia', 'Aceleração do pulso.'],
['Tenesmo', 'Dor retal com desejo imperioso de evacuar, eliminando pouco.'],
['Tinnitus (zumbido)', 'Percepção de ruído sem fonte externa; acúfeno.'],
['Trepopneia', 'Dispneia em um decúbito lateral e não no outro.'],
['Platipneia', 'Dispneia na posição sentada/ereta que melhora deitado.'],
['Vertigem', 'Sensação de rotação do corpo (subjetiva) ou dos objetos (objetiva).'],
['Vesícula (lesão)', 'Elevação até 0,5 cm cheia de líquido claro.'],
['Vômica', 'Expectoração súbita e abundante de pus de cavidade pulmonar.']
];

/* ================= SINAIS (para flashcards) */
var SINAIS = [
['Sinal de Murphy', 'Parada da inspiração por dor à compressão do ponto cístico → colecistite aguda.'],
['Sinal de Courvoisier-Terrier', 'Vesícula palpável e indolor em paciente ictérico → neoplasia de cabeça de pâncreas.'],
['Sinal de Blumberg', 'Dor à descompressão brusca → irritação peritoneal (apendicite, peritonite).'],
['Sinal de Rovsing', 'Dor na FID ao palpar a FIE → apendicite.'],
['Sinal do Psoas', 'Dor à extensão da coxa direita → apendicite retrocecal.'],
['Sinal do Obturador', 'Dor à rotação interna da coxa direita fletida → apendicite pélvica.'],
['Sinal de Lenander', 'Temperatura retal > axilar em mais de 1 °C → apendicite.'],
['Sinal de Giordano', 'Dor à punho-percussão lombar → pielonefrite, hidronefrose.'],
['Sinal de Jobert', 'Timpanismo na área hepática → pneumoperitônio (perfuração).'],
['Sinal de Cullen', 'Equimose periumbilical → pancreatite grave.'],
['Sinal de Grey-Turner', 'Equimose nos flancos → pancreatite grave.'],
['Sinal de Castell', 'Último EIC na LAA esquerda maciço na inspiração → esplenomegalia.'],
['Semicírculo de Skoda', 'Linha timpanismo-macicez com concavidade para o epigástrio → ascite de médio volume.'],
['Sinal do piparote', 'Onda líquida transmitida entre flancos → ascite de grande volume.'],
['Macicez móvel', 'Macicez no flanco que vira timpanismo ao mudar o decúbito → ascite (mais sensível).'],
['Sinal de Troisier-Virchow', 'Linfonodo supraclavicular esquerdo endurecido → metástase de câncer gástrico.'],
['Sinal de Romaña', 'Edema periorbitário unilateral → Chagas agudo.'],
['Sinal de Rivero-Carvallo', 'Sopro que aumenta na inspiração profunda → origem no coração direito (IT).'],
['Fenômeno de Gallavardin', 'Sopro da EAo irradiado ao ápice, musical (piante) → estenose aórtica grave.'],
['Sopro de Austin-Flint', 'Ruflar diastólico no foco mitral por jato regurgitante → insuficiência aórtica.'],
['Sopro de Graham Steell', 'Protodiastólico agudo no foco pulmonar → insuficiência pulmonar por hipertensão pulmonar.'],
['Sinal de Ortner', 'Rouquidão por compressão do laríngeo recorrente pelo AE dilatado → estenose mitral.'],
['Sinal de Musset', 'Cabeça balança com os batimentos → insuficiência aórtica.'],
['Sinal de Müller', 'Pulsação da úvula → insuficiência aórtica.'],
['Sinal de Quincke', 'Pulsação capilar no leito ungueal → insuficiência aórtica.'],
['Sinal de Traube (femoral)', 'Ruído de "tiro de pistola" na femoral → insuficiência aórtica.'],
['Sinal de Duroziez', 'Duplo sopro na femoral comprimida → insuficiência aórtica.'],
['Sinal de Hill', 'PAS poplítea > braquial (> 20 mmHg; > 60 se grave) → insuficiência aórtica.'],
['Pulso de Corrigan', 'Martelo d\'água: ascensão rápida e colapso → insuficiência aórtica.'],
['Pulso parvus et tardus', 'Pequeno e lento → estenose aórtica grave.'],
['Pulso paradoxal', 'Queda > 10 mmHg na inspiração → tamponamento, asma grave, DPOC grave.'],
['Pulso alternante', 'Alterna forte e fraco → IC esquerda grave.'],
['Onda a em canhão', 'Pulso jugular com onda a gigante intermitente → BAVT.'],
['Onda v gigante', 'Pulso jugular sistólico → insuficiência tricúspide.'],
['Respiração de Kussmaul', 'Profunda e rápida → acidose metabólica (cetoacidose).'],
['Respiração de Cheyne-Stokes', 'Crescendo-decrescendo com apneia → IC grave, HIC.'],
['Respiração de Biot', 'Irregular com apneias → HIC, pré-morte encefálica.'],
['Egofonia', 'Voz metálica/anasalada à ausculta → limite superior de derrame pleural.'],
['Pectorilóquia afônica', 'Cochicho nítido à ausculta → consolidação.'],
['Atitude genupeitoral', 'Joelhos e cotovelos no leito → derrame pericárdico.'],
['Atitude de cócoras', 'Cardiopatia congênita cianótica (Fallot).'],
['Fácies mitral', 'Rubor malar → estenose mitral.'],
['Ponto de McBurney', 'Junção do terço lateral com os 2/3 mediais da linha umbigo–EIAS direita → apendicite.']
];

/* Trilhas de raciocínio de Semiologia Neurológica */
(function () {
var C = 'var(--a6)';
var T = [
{
  id: 'neuro-avc', titulo: 'Acordou sem conseguir falar', area: 'Neurológico', cor: C,
  resumo: 'Fraqueza súbita de um lado: localizar a lesão com força, reflexos, Babinski e a face.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">Sr. Osvaldo, 68 anos, hipertenso</p><div class="speech">"Ele acordou hoje enrolando a língua para falar e sem conseguir segurar a xícara com a mão direita."</div><p>Força: 3 proximal e 2 distal no MSD. Reflexos exaltados à direita, Babinski à direita, sem atrofia. A boca desvia ao sorrir, mas ele franze a testa dos dois lados.</p>' },
  { type: 'escolha', q: 'O início súbito, ao acordar, aponta para qual natureza do processo?', o: ['Degenerativa', 'Vascular (AVC)', 'Infecciosa crônica', 'Tumor de crescimento lento'], a: 1,
    why: 'Na anamnese neurológica, o modo de início define a natureza: súbito = vascular ou paroxístico; insidioso = degenerativo.', add: { p: ['Início súbito', 'Afasia', 'Fraqueza no MSD'] } },
  { type: 'classificar', q: 'Separe os achados entre 1º e 2º neurônio motor.', buckets: ['1º neurônio', '2º neurônio'],
    items: [['Reflexos exaltados', 0], ['Babinski', 0], ['Espasticidade em canivete', 0], ['Fasciculações', 1], ['Atrofia importante', 1], ['Arreflexia', 1], ['Clônus', 0]],
    why: 'Exaltação, Babinski, clônus e espasticidade são liberação do arco reflexo pela perda do comando cortical. Atrofia, fasciculações e arreflexia indicam que o próprio neurônio que chega ao músculo foi lesado.', add: { s: ['Síndrome piramidal direita'] } },
  { type: 'escolha', q: 'A boca desvia, mas a testa franze dos dois lados. A paralisia facial é:', o: ['Periférica direita', 'Central direita (lesão encefálica à esquerda)', 'Periférica esquerda', 'Do trigêmeo'], a: 1,
    why: 'A metade superior da face recebe fibras dos dois córtices e fica poupada na lesão central. Na periférica a testa também paralisa.', add: { s: ['Paralisia facial central'] } },
  { type: 'medidor', q: 'Onde está a lesão?', hip: ['Hemisfério esquerdo', 'Hemisfério direito', 'Medula cervical', 'Nervo periférico'],
    pistas: [
      { t: 'Fraqueza à direita', e: [1, -1, 0, 0], why: 'A via piramidal cruza no bulbo: lesão encefálica esquerda dá déficit à direita.' },
      { t: 'Afasia', e: [1, -1, -1, -1], why: 'A linguagem fica no hemisfério esquerdo na grande maioria das pessoas.' },
      { t: 'Paralisia facial central à direita', e: [1, -1, -1, -1], why: 'A face só é acometida em lesão acima da medula; a central indica lesão encefálica contralateral.' },
      { t: 'Babinski e hiper-reflexia', e: [1, 1, 1, -1], why: 'Indicam 1º neurônio: excluem o nervo periférico.' }
    ], add: { h: 'AVC no hemisfério esquerdo (território da cerebral média)' } },
  { type: 'prever', q: 'Daqui a 3 semanas, como estará o tônus do braço direito?', o: ['Flácido', 'Espástico, com braço fletido junto ao corpo', 'Com rigidez em roda denteada', 'Normal'], a: 1,
    reveal: 'Braço fletido, perna estendida, marcha ceifante.', why: 'Na fase aguda há choque (flacidez e hiporreflexia). Depois surge espasticidade, predominando nos flexores do braço e extensores da perna: postura de Wernicke-Mann.' }
  ],
  licao: 'Fraqueza: primeiro decida 1º ou 2º neurônio (tônus, reflexos, Babinski, atrofia). Depois localize pelo lado, pela face e pelas funções corticais (afasia).'
},
{
  id: 'neuro-romberg', titulo: 'Quedas no escuro', area: 'Neurológico', cor: C,
  resumo: 'Formigamento nos pés e desequilíbrio: cerebelo, vestibular ou propriocepção?',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">D. Márcia, 45 anos</p><div class="speech">"Meus pés formigam há meses, cada vez mais. À noite, quando apago a luz, quase caio no corredor."</div>' },
  { type: 'prever', q: 'Ela fica em pé com os pés juntos, de olhos abertos e depois fechados. O que você espera?', o: ['Oscila igual nas duas situações', 'Estável de olhos abertos, cai ao fechar', 'Cai sempre para a direita com vertigem', 'Não consegue ficar em pé'], a: 1,
    reveal: 'Romberg positivo.', why: 'Piora no escuro = depende da visão para compensar a falta de propriocepção.', add: { p: ['Parestesias nos pés', 'Piora no escuro', 'Romberg positivo'] } },
  { type: 'medidor', q: 'Pese as pistas.', hip: ['Ataxia sensitiva (propriocepção)', 'Ataxia cerebelar', 'Vestibular'],
    pistas: [
      { t: 'Romberg positivo, cai ao fechar os olhos', e: [1, -1, 0], why: 'O cerebelar já oscila de olhos abertos.' },
      { t: 'Vibração abolida nos pés', e: [1, 0, 0], why: 'Diapasão avalia a coluna posterior e as fibras grossas.' },
      { t: 'Aquileus abolidos', e: [1, -1, -1], why: 'O arco reflexo depende da fibra sensitiva grossa: neuropatia.' },
      { t: 'Sem vertigem nem nistagmo', e: [0, 0, -1], why: 'Afasta o vestibular.' },
      { t: 'Índex-nariz normal de olhos abertos', e: [1, -1, 0], why: 'Sem dismetria: o cerebelo vai bem.' }
    ], add: { s: ['Ataxia sensitiva'] } },
  { type: 'escolha', q: 'Por que o reflexo aquileu sumiu?', o: ['Lesão piramidal', 'O arco reflexo depende da fibra aferente Ia, lesada na neuropatia', 'Fraqueza do tríceps sural', 'Lesão cerebelar'], a: 1,
    why: 'Qualquer lesão no arco (receptor, aferente, medula, eferente, músculo) reduz o reflexo. Neuropatias comprimento-dependentes começam pelos pés: aquileu primeiro.' },
  { type: 'multi', q: 'Quais etiologias são compatíveis com essa polineuropatia sensitiva?', o: ['Diabetes', 'Deficiência de vitamina B12', 'Etilismo', 'Hemorragia subaracnoidea', 'Sífilis (tabes dorsalis)', 'Doença de Parkinson'], correct: [0, 1, 2, 4],
    why: 'Diabetes, B12, álcool e sífilis lesam fibras grossas ou colunas posteriores. HSA e Parkinson não causam esse quadro.', add: { h: 'Polineuropatia periférica sensitiva (investigar diabetes, B12, álcool)' } },
  { type: 'escolha', q: 'Como ela deve andar?', o: ['Ebriosa', 'Talonante, batendo o calcanhar, pior no escuro', 'Anserina', 'Braquibásica'], a: 1,
    why: 'Sem saber onde o pé está, ela eleva demais a perna e o lança no chão, olhando para os pés.' }
  ],
  licao: 'Oscila de olhos abertos: cerebelo. Cai ao fechar os olhos: propriocepção (neuropatia ou coluna posterior). Cai para um lado com vertigem: vestibular.'
},
{
  id: 'neuro-facial', titulo: 'O rosto torto', area: 'Neurológico', cor: C,
  resumo: 'Paralisia facial central × periférica e a regra do lado são que empurra.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">Lucas, 32 anos</p><div class="speech">"Acordei com o rosto torto. A água escorre da boca e o olho direito não fecha."</div><p>Força nos membros normal. Ao tentar fechar os olhos, o olho direito gira para cima e fica à mostra.</p>' },
  { type: 'escolha', q: 'O olho que gira para cima ao tentar fechar a pálpebra é o:', o: ['Sinal de Romberg', 'Fenômeno de Bell', 'Sinal de Kernig', 'Nistagmo'], a: 1,
    why: 'O orbicular do olho não fecha e o movimento reflexo do globo para cima fica visível.', add: { p: ['Olho direito não fecha', 'Fenômeno de Bell', 'Sem fraqueza nos membros'] } },
  { type: 'prever', q: 'Ao pedir que franza a testa, o que você espera do lado direito?', o: ['Franze normal', 'Não franze', 'Franze mais que o esquerdo', 'Treme'], a: 1,
    reveal: 'A fronte direita fica lisa.', why: 'Na lesão periférica toda a hemiface do mesmo lado paralisa, inclusive a testa.', add: { s: ['Paralisia facial periférica direita'] } },
  { type: 'classificar', q: 'Central ou periférica?', buckets: ['Central', 'Periférica'],
    items: [['Testa poupada', 0], ['Testa paralisada', 1], ['Fenômeno de Bell', 1], ['Vem com hemiparesia', 0], ['Lado contralateral à lesão', 0], ['Lado ipsilateral à lesão', 1]],
    why: 'A metade de cima da face tem representação cortical bilateral: a lesão cortical não a paralisa.' },
  { type: 'classificar', q: 'Para onde desvia? (lesão à direita)', buckets: ['Para a direita (lado lesado)', 'Para a esquerda (lado são)'],
    items: [['Língua (NC XII)', 0], ['Mandíbula (NC V motor)', 0], ['Úvula (IX/X)', 1], ['Comissura labial ao sorrir (VII)', 1]],
    why: 'Língua e mandíbula são empurradas pelo lado são para o lado fraco. Úvula e boca são puxadas pelo lado são.', add: { h: 'Paralisia facial periférica direita (tipo Bell)' } }
  ],
  licao: 'Na face, olhe a testa: poupada = central (com hemiparesia); acometida = periférica (Bell).'
},
{
  id: 'neuro-meninge', titulo: 'Febre, cefaleia e nuca dura', area: 'Neurológico', cor: C,
  resumo: 'Sinais meníngeos, Glasgow e o que pesquisar antes da punção.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">Rafael, 20 anos</p><div class="speech">"Começou uma dor de cabeça fortíssima, febre alta, e agora apareceram umas manchinhas vermelhas na perna."</div><p>Responde, mas está confuso quanto à data.</p>' },
  { type: 'escolha', q: 'Ele abre os olhos espontaneamente, está desorientado e obedece comandos. Glasgow?', o: ['15', '14', '13', '12'], a: 1,
    why: 'O4 + V4 (desorientado) + M6 = 14.', add: { p: ['Febre', 'Cefaleia intensa', 'Petéquias', 'Glasgow 14'] } },
  { type: 'ordenar', q: 'Ordene a pesquisa dos sinais meníngeos do mais constante para os complementares.', items: ['Rigidez de nuca', 'Brudzinski (flexão do pescoço flete os joelhos)', 'Kernig (extensão do joelho limitada com quadril a 90°)'],
    why: 'A rigidez de nuca é o sinal mais constante e sempre deve ser pesquisada; Brudzinski e Kernig complementam.', add: { s: ['Síndrome de irritação meníngea'] } },
  { type: 'escolha', q: 'Febre + rigidez de nuca + petéquias: hipótese principal?', o: ['Hemorragia subaracnoidea', 'Meningite meningocócica', 'Enxaqueca', 'AVC isquêmico'], a: 1,
    why: 'As petéquias sugerem meningococo. A HSA dá cefaleia súbita e rigidez, mas sem febre no início e sem petéquias.' },
  { type: 'escolha', q: 'Antes da punção lombar, que achado do exame neurológico muda a conduta?', o: ['Reflexo patelar vivo', 'Edema de papila ou sinal focal (risco de hipertensão intracraniana)', 'Romberg positivo', 'Tremor postural'], a: 1,
    why: 'Edema de papila na fundoscopia indica hipertensão intracraniana: faz-se tomografia antes de puncionar.', add: { h: 'Meningite bacteriana (provável meningococo)' } }
  ],
  licao: 'Cefaleia com febre: procure rigidez de nuca, Kernig, Brudzinski, nível de consciência, sinais focais e o fundo de olho.'
},
{
  id: 'neuro-tremor', titulo: 'A mão que treme', area: 'Neurológico', cor: C,
  resumo: 'Tremor de repouso, postural ou intencional e o tônus que acompanha cada um.',
  passos: [
  { type: 'texto', html: '<p class="eyebrow">Sr. Jorge, 70 anos</p><div class="speech">"Minha mão direita treme quando está parada no colo. Quando pego o copo, melhora. Ando devagar, arrastando os pés."</div>' },
  { type: 'escolha', q: 'Primeira pergunta da anamnese para um tremor:', o: ['Religião', 'Medicações em uso', 'Antecedentes perinatais', 'Vacinas'], a: 1,
    why: 'Fármacos (antipsicóticos, metoclopramida, entre outros) causam tremor e parkinsonismo.', add: { p: ['Tremor de repouso', 'Melhora ao movimento', 'Marcha arrastada'] } },
  { type: 'classificar', q: 'Associe o tremor à estrutura.', buckets: ['Núcleos da base', 'Cerebelo', 'Tremor essencial'],
    items: [['Em repouso, melhora ao mover', 0], ['Piora ao se aproximar do alvo', 1], ['Ao manter os braços estendidos', 2], ['Com dismetria', 1], ['Com bradicinesia', 0]],
    why: 'Repouso = Parkinson; intencional = cerebelo; postural = essencial.' },
  { type: 'prever', q: 'Ao mobilizar passivamente o punho, o que você sente?', o: ['Canivete', 'Roda denteada', 'Hipotonia', 'Nada'], a: 1,
    reveal: 'Resistência em "trancos" regulares.', why: 'Rigidez plástica (constante, independe da velocidade) somada ao tremor gera a roda denteada.', add: { s: ['Síndrome parkinsoniana (extrapiramidal)'] } },
  { type: 'escolha', q: 'Qual achado NÃO faz parte da síndrome extrapiramidal?', o: ['Bradicinesia', 'Tremor de repouso', 'Babinski e paresia', 'Rigidez plástica'], a: 2,
    why: 'Extrapiramidal não dá paresia nem Babinski: esses são da via piramidal.', add: { h: 'Doença de Parkinson (afastar parkinsonismo por fármacos)' } }
  ],
  licao: 'Tremor: defina quando aparece (repouso, postura, intenção) e veja o tônus: roda denteada é extrapiramidal, canivete é piramidal.'
}
];
T.forEach(function (t) { window.SEMIO_TRILHAS.push(t); });
})();

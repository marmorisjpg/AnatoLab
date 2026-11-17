// Edite aqui os 30 casos clínicos. Preserve os campos e a numeração.
const CASES = [
  {
    "id": 1,
    "region": "Cabeça",
    "title": "Ptério",
    "level": "Intermediário",
    "scenario": "Após uma queda, uma pessoa sofreu impacto na região lateral do crânio, próximo à têmpora. A equipe está atenta a sinais de deterioração neurológica.",
    "question": "Qual região de junção entre ossos cranianos merece atenção pela proximidade de um ramo arterial importante?",
    "choices": [
      "Ptério",
      "Processo mastoide",
      "Sutura lambdóidea",
      "Forame magno"
    ],
    "correct": 0,
    "explanation": "O ptério é a região onde se encontram frontal, parietal, temporal e esfenoide. Sua relação com a artéria meníngea média ajuda a compreender o risco de hematoma epidural em traumatismos.",
    "tip": "Na avaliação de trauma craniano, acompanhe nível de consciência e alterações neurológicas e acione a equipe conforme o protocolo; a localização do impacto sozinha não define a lesão.",
    "tag": "cabeça"
  },
  {
    "id": 2,
    "region": "Cabeça",
    "title": "Artéria meníngea média",
    "level": "Intermediário",
    "scenario": "Um paciente apresenta fratura na região temporal. O médico solicita avaliação por imagem diante da suspeita de sangramento entre o osso e a dura-máter.",
    "question": "Qual vaso é classicamente associado ao hematoma epidural traumático nessa região?",
    "choices": [
      "Artéria temporal superficial",
      "Artéria meníngea média",
      "Artéria basilar",
      "Veia jugular interna"
    ],
    "correct": 1,
    "explanation": "A artéria meníngea média atravessa o forame espinhoso e tem relação com a face interna do crânio. Sua lesão pode provocar hematoma epidural.",
    "tip": "Sinais de agravamento neurológico após trauma exigem avaliação imediata. Não espere um padrão clássico de sintomas para comunicar alterações.",
    "tag": "cabeça"
  },
  {
    "id": 3,
    "region": "Cabeça",
    "title": "Nervo trigêmeo (V)",
    "level": "Básico",
    "scenario": "Durante um exame neurológico, uma pessoa refere perda de sensibilidade na bochecha e dor em choques na face. O profissional avalia também a mastigação.",
    "question": "Qual nervo craniano reúne sensibilidade facial e função motora dos músculos mastigatórios?",
    "choices": [
      "Nervo facial (VII)",
      "Nervo glossofaríngeo (IX)",
      "Nervo trigêmeo (V)",
      "Nervo acessório (XI)"
    ],
    "correct": 2,
    "explanation": "O trigêmeo possui ramos oftálmico, maxilar e mandibular. A sensibilidade da face e a motricidade dos músculos mastigatórios são funções relevantes para sua avaliação.",
    "tip": "Registre lado, localização e características da alteração sensitiva; diferencie avaliação do trigêmeo da mímica facial, relacionada principalmente ao nervo facial.",
    "tag": "cabeça"
  },
  {
    "id": 4,
    "region": "Cabeça",
    "title": "Osso temporal",
    "level": "Básico",
    "scenario": "Após trauma na lateral da cabeça, o paciente apresenta queixas auditivas e dor próxima à orelha. A equipe revisa a anatomia óssea da região.",
    "question": "Qual osso abriga estruturas relacionadas à audição e ao equilíbrio?",
    "choices": [
      "Osso frontal",
      "Osso zigomático",
      "Osso temporal",
      "Osso occipital"
    ],
    "correct": 2,
    "explanation": "A porção petrosa do osso temporal contém estruturas do ouvido interno, relacionadas à audição e ao equilíbrio.",
    "tip": "Em trauma craniano, novas alterações auditivas, vestibulares ou secreção pela orelha devem ser comunicadas e documentadas.",
    "tag": "cabeça"
  },
  {
    "id": 5,
    "region": "Cabeça",
    "title": "Seio sagital superior",
    "level": "Avançado",
    "scenario": "Em um estudo sobre drenagem venosa do encéfalo, a turma revisa um canal localizado ao longo da foice do cérebro e associado às granulações aracnóideas.",
    "question": "Que estrutura venosa está sendo descrita?",
    "choices": [
      "Seio cavernoso",
      "Seio sagital superior",
      "Seio sigmoide",
      "Veia cerebral magna"
    ],
    "correct": 1,
    "explanation": "O seio sagital superior drena sangue de veias cerebrais e recebe líquido cerebrospinal por meio das granulações aracnóideas.",
    "tip": "Em sintomas neurológicos agudos, a prioridade assistencial é reconhecer mudanças e comunicar a equipe, não presumir a localização de uma trombose pela queixa isolada.",
    "tag": "cabeça"
  },
  {
    "id": 6,
    "region": "Pescoço",
    "title": "Esternocleidomastóideo",
    "level": "Básico",
    "scenario": "Durante avaliação do pescoço, o estudante observa um músculo evidente quando a pessoa gira a cabeça para o lado oposto.",
    "question": "Qual músculo é importante referência dos triângulos cervicais?",
    "choices": [
      "Trapézio",
      "Esternocleidomastóideo",
      "Escaleno anterior",
      "Platisma"
    ],
    "correct": 1,
    "explanation": "O esternocleidomastóideo auxilia na rotação contralateral da cabeça e delimita regiões cervicais utilizadas como referências anatômicas.",
    "tip": "Na avaliação do pescoço, observe simetria e amplitude de movimento; não force movimentos quando houver suspeita de lesão cervical.",
    "tag": "pescoço"
  },
  {
    "id": 7,
    "region": "Pescoço",
    "title": "Artéria carótida comum",
    "level": "Básico",
    "scenario": "Em treinamento de avaliação circulatória, a turma estuda um vaso palpável no pescoço, medial ao esternocleidomastóideo.",
    "question": "Qual artéria se divide em carótida interna e externa?",
    "choices": [
      "Artéria subclávia",
      "Artéria vertebral",
      "Artéria carótida comum",
      "Artéria braquiocefálica"
    ],
    "correct": 2,
    "explanation": "A carótida comum ascende na bainha carótica e bifurca-se em carótidas interna e externa.",
    "tip": "A palpação do pulso carotídeo, quando indicada em protocolo e por pessoa treinada, deve ser unilateral e breve; nunca comprima as duas carótidas simultaneamente.",
    "tag": "pescoço"
  },
  {
    "id": 8,
    "region": "Pescoço",
    "title": "Glândulas paratireoides",
    "level": "Intermediário",
    "scenario": "Após cirurgia na tireoide, uma paciente apresenta formigamento ao redor da boca e espasmos musculares. A equipe considera a possibilidade de alteração do cálcio.",
    "question": "Qual estrutura glandular próxima à tireoide participa diretamente da regulação do cálcio?",
    "choices": [
      "Glândulas paratireoides",
      "Glândulas salivares",
      "Timo",
      "Hipófise"
    ],
    "correct": 0,
    "explanation": "As paratireoides produzem o paratormônio (PTH), essencial ao equilíbrio do cálcio. Alterações após tireoidectomia podem estar associadas a hipocalcemia.",
    "tip": "Parestesias e espasmos no pós-operatório cervical são achados que merecem avaliação e comunicação; siga os protocolos de monitorização e exames.",
    "tag": "pescoço"
  },
  {
    "id": 9,
    "region": "Pescoço",
    "title": "Trígono carótico",
    "level": "Intermediário",
    "scenario": "Em aula de anatomia aplicada, a equipe precisa localizar a região delimitada pelo esternocleidomastóideo, pelo digástrico e pelo omo-hióideo.",
    "question": "Qual espaço topográfico contém a bifurcação da artéria carótida comum?",
    "choices": [
      "Trígono submandibular",
      "Trígono carótico",
      "Trígono submentual",
      "Fossa supraclavicular"
    ],
    "correct": 1,
    "explanation": "O trígono carótico pertence à região cervical anterior e ajuda a compreender a posição da bifurcação carotídea e de estruturas próximas.",
    "tip": "Conhecer a topografia cervical orienta a avaliação, mas acessos vasculares profundos exigem treinamento, técnica e protocolo específicos.",
    "tag": "pescoço"
  },
  {
    "id": 10,
    "region": "Pescoço",
    "title": "Articulação atlantoaxial",
    "level": "Intermediário",
    "scenario": "Uma pessoa sofreu acidente automobilístico e há suspeita de trauma cervical. A equipe evita movimentações desnecessárias enquanto avalia o paciente.",
    "question": "Qual articulação entre C1 e C2 permite grande parte do movimento de rotação da cabeça?",
    "choices": [
      "Atlanto-occipital",
      "Temporomandibular",
      "Atlantoaxial",
      "Esternoclavicular"
    ],
    "correct": 2,
    "explanation": "A articulação atlantoaxial envolve atlas e áxis, incluindo o dente do áxis, e participa principalmente da rotação da cabeça.",
    "tip": "Suspeita de lesão cervical requer precauções de movimento e avaliação conforme protocolo; não teste rotação do pescoço nessa situação.",
    "tag": "pescoço"
  },
  {
    "id": 11,
    "region": "Tórax",
    "title": "Esterno",
    "level": "Básico",
    "scenario": "Durante treinamento em manequim de ressuscitação cardiopulmonar, o instrutor pede o ponto de apoio das mãos para compressões em adulto.",
    "question": "Qual osso serve de referência para colocar as mãos no centro do tórax, sobre sua metade inferior?",
    "choices": [
      "Clavícula",
      "Esterno",
      "Escápula",
      "Primeira costela"
    ],
    "correct": 1,
    "explanation": "As compressões torácicas em adultos são realizadas no centro do tórax, sobre a metade inferior a terço inferior do esterno. Deve-se evitar comprimir o processo xifoide.",
    "tip": "Use as diretrizes atuais de RCP e o treinamento prático para a técnica completa; anatomia correta é só uma parte da qualidade das compressões.",
    "tag": "tórax"
  },
  {
    "id": 12,
    "region": "Tórax",
    "title": "Feixe vasculonervoso intercostal",
    "level": "Avançado",
    "scenario": "Uma equipe treinada prepara um procedimento na parede torácica. O profissional responsável revisa o sulco na borda inferior das costelas.",
    "question": "Qual conjunto anatômico principal ocupa esse sulco?",
    "choices": [
      "Artéria pulmonar e bronquíolo",
      "Veia, artéria e nervo intercostais",
      "Nervo frênico e vasos torácicos internos",
      "Ducto torácico e veia ázigos"
    ],
    "correct": 1,
    "explanation": "O feixe intercostal principal segue no sulco costal, próximo à borda inferior da costela, na sequência clássica veia, artéria e nervo.",
    "tip": "Procedimentos invasivos torácicos devem seguir orientação técnica e protocolos da instituição; o feixe intercostal e vasos colaterais precisam ser considerados.",
    "tag": "tórax"
  },
  {
    "id": 13,
    "region": "Tórax",
    "title": "Pleura parietal",
    "level": "Intermediário",
    "scenario": "Um paciente relata dor que piora durante a inspiração profunda. O profissional revisa a diferença de inervação entre as duas lâminas da pleura.",
    "question": "Qual lâmina pleural é sensível à dor por sua inervação somática?",
    "choices": [
      "Pleura visceral",
      "Pleura parietal",
      "Pericárdio visceral",
      "Endocárdio"
    ],
    "correct": 1,
    "explanation": "A pleura parietal, inervada principalmente pelos nervos intercostais e frênico conforme a região, é sensível à dor. A pleura visceral tem sensibilidade diferente.",
    "tip": "Dor torácica ou desconforto respiratório exigem avaliação clínica abrangente; não atribua a causa apenas ao padrão da dor.",
    "tag": "tórax"
  },
  {
    "id": 14,
    "region": "Tórax",
    "title": "Mediastino (coração)",
    "level": "Básico",
    "scenario": "Na radiografia de tórax, um aluno observa a região central entre os pulmões onde se encontram coração, grandes vasos e outras estruturas.",
    "question": "Como se chama esse compartimento anatômico?",
    "choices": [
      "Cavidade pleural",
      "Mediastino",
      "Recesso costodiafragmático",
      "Região axilar"
    ],
    "correct": 1,
    "explanation": "O mediastino é o compartimento central do tórax e contém o coração, grandes vasos, traqueia, esôfago e outras estruturas.",
    "tip": "Saber onde as estruturas se projetam ajuda a compreender a monitorização cardiopulmonar e os achados de exames, sem substituir a interpretação clínica.",
    "tag": "tórax"
  },
  {
    "id": 15,
    "region": "Tórax",
    "title": "Músculo serrátil anterior",
    "level": "Intermediário",
    "scenario": "Ao pedir que um paciente empurre a parede, o profissional percebe que a borda medial da escápula fica proeminente.",
    "question": "Qual músculo pode perder a função após lesão do nervo torácico longo?",
    "choices": [
      "Peitoral maior",
      "Latíssimo do dorso",
      "Serrátil anterior",
      "Romboide maior"
    ],
    "correct": 2,
    "explanation": "O serrátil anterior estabiliza a escápula contra a parede torácica. A lesão do nervo torácico longo pode causar escápula alada.",
    "tip": "Na avaliação motora, compare os dois lados e registre limitações funcionais; o achado necessita interpretação clínica, não é diagnóstico isolado.",
    "tag": "tórax"
  },
  {
    "id": 16,
    "region": "Abdome",
    "title": "Reto do abdome e linha alba",
    "level": "Básico",
    "scenario": "Antes de uma cirurgia abdominal, estudantes observam a linha fibrosa central que separa os dois músculos retos do abdome.",
    "question": "Qual estrutura aponeurótica está localizada na linha mediana?",
    "choices": [
      "Linha alba",
      "Ligamento inguinal",
      "Fáscia lata",
      "Linha arqueada"
    ],
    "correct": 0,
    "explanation": "A linha alba é uma faixa tendínea da parede abdominal anterior entre os músculos retos do abdome, frequentemente usada como referência para incisões medianas.",
    "tip": "Em avaliações e curativos pós-operatórios, registre localização da incisão e aspectos da ferida; não presuma que a linha alba seja completamente avascular.",
    "tag": "abdome"
  },
  {
    "id": 17,
    "region": "Abdome",
    "title": "Plano transumbilical",
    "level": "Básico",
    "scenario": "Para descrever a localização de desconforto abdominal, a equipe divide o abdome em quatro quadrantes usando duas linhas que se cruzam na região umbilical.",
    "question": "Qual plano horizontal integra essa divisão?",
    "choices": [
      "Plano subcostal",
      "Plano transpilorico",
      "Plano transumbilical",
      "Plano transtubercular"
    ],
    "correct": 2,
    "explanation": "O plano transumbilical, associado ao plano mediano, auxilia a divisão do abdome em quadrantes e a descrição padronizada de achados.",
    "tip": "Use localização clara — quadrante e lateralidade — nas anotações de Enfermagem. A divisão topográfica organiza o relato, não determina a causa do sintoma.",
    "tag": "abdome"
  },
  {
    "id": 18,
    "region": "Abdome",
    "title": "Fígado e vesícula biliar",
    "level": "Básico",
    "scenario": "Durante exame físico, um paciente indica desconforto no quadrante superior direito. A turma revisa o órgão grande que ocupa essa região e produz bile.",
    "question": "Qual órgão é o principal responsável pela produção da bile?",
    "choices": [
      "Vesícula biliar",
      "Pâncreas",
      "Fígado",
      "Baço"
    ],
    "correct": 2,
    "explanation": "O fígado produz a bile, enquanto a vesícula biliar a armazena e concentra. Ambos estão associados ao quadrante superior direito do abdome.",
    "tip": "Queixas abdominais devem ser avaliadas com sinais vitais, história e exame pertinente; dor no quadrante superior direito tem várias possibilidades clínicas.",
    "tag": "abdome"
  },
  {
    "id": 19,
    "region": "Abdome",
    "title": "Ponto de McBurney",
    "level": "Intermediário",
    "scenario": "Uma pessoa apresenta dor abdominal com maior sensibilidade na fossa ilíaca direita. O professor pede a identificação de um ponto de referência clássico da região.",
    "question": "Qual ponto fica aproximadamente na transição do terço lateral com os dois terços mediais entre a espinha ilíaca ântero-superior direita e o umbigo?",
    "choices": [
      "Ponto de Murphy",
      "Ponto de McBurney",
      "Ponto de Erb",
      "Ponto de Lanz"
    ],
    "correct": 1,
    "explanation": "O ponto de McBurney é uma referência topográfica clássica na avaliação de suspeita de apendicite, mas sua sensibilidade não confirma o diagnóstico isoladamente.",
    "tip": "Dor abdominal progressiva, rigidez, febre ou instabilidade requerem avaliação apropriada. Evite palpação dolorosa repetitiva sem necessidade.",
    "tag": "abdome"
  },
  {
    "id": 20,
    "region": "Abdome",
    "title": "Músculo psoas maior",
    "level": "Intermediário",
    "scenario": "Em discussão sobre apendicite retrocecal, a turma estuda por que a extensão passiva do quadril direito pode provocar dor em algumas pessoas.",
    "question": "Qual músculo, próximo à parede posterior do abdome, está relacionado a esse sinal clínico?",
    "choices": [
      "Reto femoral",
      "Psoas maior",
      "Oblíquo externo",
      "Transverso do abdome"
    ],
    "correct": 1,
    "explanation": "O psoas maior é um flexor do quadril. Sua irritação pode explicar dor associada à extensão do quadril em certas apresentações de inflamação abdominal.",
    "tip": "Um sinal isolado não confirma apendicite. A realização e interpretação de manobras semiológicas devem respeitar treinamento e supervisão clínica.",
    "tag": "abdome"
  },
  {
    "id": 21,
    "region": "Membros superiores",
    "title": "Colo cirúrgico do úmero",
    "level": "Intermediário",
    "scenario": "Após uma queda sobre o ombro, um paciente apresenta fratura proximal do úmero e dificuldade de abduzir o braço, com redução da sensibilidade na face lateral do ombro.",
    "question": "Qual região óssea fraturada fica próxima ao nervo axilar?",
    "choices": [
      "Epicôndilo medial",
      "Colo cirúrgico do úmero",
      "Tuberosidade deltoidea",
      "Olécrano"
    ],
    "correct": 1,
    "explanation": "O nervo axilar e vasos circunflexos posteriores têm relação com a região do colo cirúrgico do úmero. Fraturas locais podem comprometer função do deltoide.",
    "tip": "Documente alteração neurovascular distal e limitações após trauma, seguindo orientação da equipe; evite mobilizar o membro lesionado sem necessidade.",
    "tag": "mmss"
  },
  {
    "id": 22,
    "region": "Membros superiores",
    "title": "Músculo deltoide",
    "level": "Básico",
    "scenario": "Em sala de vacinação, o profissional revisa o ponto anatômico da aplicação intramuscular no braço e destaca a necessidade de localizar corretamente o acrômio.",
    "question": "Qual músculo é utilizado para diversas aplicações intramusculares em adultos?",
    "choices": [
      "Bíceps braquial",
      "Deltoide",
      "Braquial",
      "Redondo maior"
    ],
    "correct": 1,
    "explanation": "O deltoide é um dos locais recomendados para diversas vacinas intramusculares em adultos, desde que os marcos anatômicos sejam corretamente identificados.",
    "tip": "Aplicações muito altas ou fora da região indicada podem causar lesões. Siga idade, vacina, técnica, protocolo e recomendações atualizadas.",
    "tag": "mmss"
  },
  {
    "id": 23,
    "region": "Membros superiores",
    "title": "Veias cefálica, basílica e intermédia do cotovelo",
    "level": "Intermediário",
    "scenario": "Uma equipe realiza coleta de sangue e avalia vasos superficiais na fossa cubital, procurando um trajeto acessível e seguro.",
    "question": "Qual veia é frequentemente escolhida para punção por sua posição na região anterior do cotovelo?",
    "choices": [
      "Veia intermédia do cotovelo",
      "Veia femoral",
      "Veia jugular interna",
      "Veia subclávia"
    ],
    "correct": 0,
    "explanation": "A veia intermédia do cotovelo frequentemente conecta os sistemas cefálico e basílico. É um local comum para venopunção, considerando variações anatômicas.",
    "tip": "Segundo orientações de flebotomia da OMS, avalie o vaso e estruturas próximas; a região da veia basílica exige maior atenção a nervos e artérias adjacentes.",
    "tag": "mmss"
  },
  {
    "id": 24,
    "region": "Membros superiores",
    "title": "Artéria radial",
    "level": "Básico",
    "scenario": "Ao aferir sinais vitais, uma estudante palpa o punho na face lateral, próximo à base do polegar, para avaliar frequência e ritmo do pulso.",
    "question": "Qual artéria é palpada nesse local?",
    "choices": [
      "Artéria ulnar",
      "Artéria braquial",
      "Artéria radial",
      "Artéria axilar"
    ],
    "correct": 2,
    "explanation": "A artéria radial é superficial no punho lateral e frequentemente utilizada na avaliação do pulso periférico.",
    "tip": "Avalie frequência, ritmo e amplitude conforme o contexto; compare perfusão periférica e registre achados anormais.",
    "tag": "mmss"
  },
  {
    "id": 25,
    "region": "Membros superiores",
    "title": "Nervo mediano e túnel do carpo",
    "level": "Intermediário",
    "scenario": "Uma paciente relata formigamento no polegar, indicador e dedo médio, pior à noite, com dificuldade para segurar objetos.",
    "question": "Qual nervo pode sofrer compressão no túnel do carpo?",
    "choices": [
      "Nervo ulnar",
      "Nervo radial",
      "Nervo mediano",
      "Nervo musculocutâneo"
    ],
    "correct": 2,
    "explanation": "O nervo mediano atravessa o túnel do carpo acompanhado por tendões flexores. Sua compressão pode causar parestesias em distribuição característica.",
    "tip": "Observe localização dos sintomas, perda de força e impacto funcional. Os sintomas não bastam, isoladamente, para confirmar a síndrome do túnel do carpo.",
    "tag": "mmss"
  },
  {
    "id": 26,
    "region": "Membros inferiores",
    "title": "Trocanter maior do fêmur",
    "level": "Intermediário",
    "scenario": "Durante discussão sobre administração intramuscular na região ventroglútea, o grupo identifica uma proeminência óssea palpável na face lateral do quadril.",
    "question": "Qual marco ósseo é usado na identificação da região ventroglútea?",
    "choices": [
      "Maléolo lateral",
      "Trocanter maior do fêmur",
      "Tuberosidade da tíbia",
      "Espinha ilíaca póstero-superior"
    ],
    "correct": 1,
    "explanation": "O trocanter maior é uma referência palpável do fêmur proximal e integra a identificação anatômica da região ventroglútea.",
    "tip": "A escolha do local para injeção depende do medicamento, paciente, formação e protocolo. Treine a técnica com supervisão.",
    "tag": "mmii"
  },
  {
    "id": 27,
    "region": "Membros inferiores",
    "title": "Músculo glúteo máximo",
    "level": "Básico",
    "scenario": "Ao orientar a mobilização de um paciente, a equipe relaciona a ação de levantar-se da cadeira à extensão vigorosa da coxa.",
    "question": "Qual músculo superficial da região glútea é um importante extensor do quadril?",
    "choices": [
      "Glúteo máximo",
      "Glúteo mínimo",
      "Tensor da fáscia lata",
      "Sartório"
    ],
    "correct": 0,
    "explanation": "O glúteo máximo atua na extensão e rotação lateral da coxa. Seu posicionamento também ajuda a entender os cuidados com procedimentos na região glútea.",
    "tip": "Considere risco de lesão do nervo isquiático ao estudar aplicações glúteas; preferências de sítio e técnica dependem de protocolos locais.",
    "tag": "mmii"
  },
  {
    "id": 28,
    "region": "Membros inferiores",
    "title": "Trígono femoral",
    "level": "Intermediário",
    "scenario": "Um profissional revisa a anatomia da região inguinal para compreender onde é palpado o pulso femoral e como nervo, artéria e veia se organizam.",
    "question": "Qual região triangular contém essas estruturas?",
    "choices": [
      "Fossa poplítea",
      "Trígono femoral",
      "Triângulo cervical posterior",
      "Região glútea"
    ],
    "correct": 1,
    "explanation": "O trígono femoral tem como limites o ligamento inguinal, o sartório e o adutor longo. O arranjo lateral-medial clássico é nervo, artéria e veia.",
    "tip": "A anatomia orienta avaliação de pulsos e reconhecimento de riscos, mas punções vasculares profundas são procedimentos especializados.",
    "tag": "mmii"
  },
  {
    "id": 29,
    "region": "Membros inferiores",
    "title": "Nervo isquiático",
    "level": "Intermediário",
    "scenario": "Após uma injeção glútea aplicada em local inadequado, um paciente relata dor irradiada e alterações sensitivas na perna. O grupo discute estruturas suscetíveis a lesão.",
    "question": "Qual grande nervo atravessa a região glútea e segue pela parte posterior da coxa?",
    "choices": [
      "Nervo femoral",
      "Nervo obturatório",
      "Nervo isquiático",
      "Nervo safeno"
    ],
    "correct": 2,
    "explanation": "O nervo isquiático se origina do plexo sacral e percorre a região glútea e a face posterior da coxa. Lesões podem causar déficits neurológicos.",
    "tip": "Dor súbita intensa, fraqueza ou perda de sensibilidade após um procedimento precisam ser prontamente comunicadas; prevenção requer escolha correta da região anatômica.",
    "tag": "mmii"
  },
  {
    "id": 30,
    "region": "Membros inferiores",
    "title": "Veia safena magna",
    "level": "Básico",
    "scenario": "Durante avaliação de alterações venosas dos membros inferiores, o profissional observa vasos superficiais na face medial da perna e da coxa.",
    "question": "Qual veia superficial passa anteriormente ao maléolo medial e drena para a veia femoral?",
    "choices": [
      "Veia safena parva",
      "Veia poplítea",
      "Veia safena magna",
      "Veia tibial posterior"
    ],
    "correct": 2,
    "explanation": "A safena magna é uma veia superficial extensa que ascende pelo lado medial do membro inferior até sua junção com a veia femoral.",
    "tip": "Edema, dor, calor ou mudança súbita de coloração exigem avaliação clínica; alterações vasculares não podem ser classificadas apenas pela localização de uma veia.",
    "tag": "mmii"
  }
];

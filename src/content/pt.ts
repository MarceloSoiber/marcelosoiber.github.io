import type { SiteContent } from './schema'

export const pt: SiteContent = {
  locale: 'pt',
  htmlLang: 'pt-BR',
  path: '/',
  meta: {
    title: 'Marcelo Soiber — Engenharia de Software, Arquitetura e IA',
    description:
      'Portfólio de Marcelo Soiber: arquitetura de software, sistemas inteligentes, IA aplicada, RAG e engenharia full stack.',
  },
  skipLink: 'Ir para o conteúdo',
  brandLabel: 'Marcelo Soiber — início',
  availability: 'Sistema online · Tubarão, SC',
  navigationLabel: 'Navegação principal',
  nav: [
    { label: 'Perfil', page: 'profile' },
    { label: 'Sistemas', page: 'projects' },
    { label: 'Experiência', page: 'experience' },
    { label: 'Contato', page: 'contact' },
  ],
  languageLabel: 'Selecionar idioma',
  hero: {
    eyebrow: 'ENGENHARIA DE SOFTWARE // ARQUITETURA // IA APLICADA',
    titleLead: 'Construo sistemas que transformam',
    titleFocus: 'complexidade em clareza.',
    description:
      'Engenheiro de Software especializado em arquitetura, sistemas inteligentes e IA aplicada. Mais de dez anos convertendo problemas reais em software confiável.',
    primaryCta: 'Explorar sistemas',
    secondaryCta: 'Baixar currículo',
    telemetryLabel: 'Núcleo profissional',
    telemetryValue: 'ARCH · AI · SYSTEMS',
    statusLabel: 'Operacional',
  },
  profile: {
    eyebrow: '01 // PERFIL DE MISSÃO',
    title: 'Engenharia orientada a decisões, não a modismos.',
    lead: 'Minha especialidade está na interseção entre arquitetura, produto e execução.',
    body: 'Atuo há mais de dez anos no desenvolvimento de software, incluindo soluções para meios de pagamentos. Trabalho com Python, PHP e TypeScript, conectando APIs, dados, aplicações web e inteligência artificial com atenção a privacidade, operação e resultado de negócio.',
    metrics: [
      { value: '10+', label: 'anos de engenharia' },
      { value: '04', label: 'sistemas em destaque' },
      { value: 'PT·EN·ES', label: 'presença internacional' },
    ],
  },
  capabilities: {
    eyebrow: '02 // MATRIZ DE CAPACIDADE',
    title: 'Da arquitetura ao software em produção.',
    description:
      'Competências demonstradas em sistemas completos, com decisões técnicas, restrições e operação explícitas.',
    items: [
      {
        index: 'A.01',
        title: 'Arquitetura de software',
        description: 'Fronteiras, contratos, fluxos assíncronos e decisões evolutivas.',
        technologies: ['APIs', 'MCP', 'SSE', 'Docker'],
      },
      {
        index: 'A.02',
        title: 'Sistemas inteligentes',
        description: 'RAG, embeddings, busca vetorial e integração responsável de modelos.',
        technologies: ['LLMs', 'RAG', 'pgvector', 'ML'],
      },
      {
        index: 'A.03',
        title: 'Engenharia full stack',
        description: 'Interfaces, serviços, persistência e automação como uma solução coerente.',
        technologies: ['Angular', 'Node.js', 'FastAPI', 'PostgreSQL'],
      },
    ],
  },
  projects: {
    eyebrow: '03 // SISTEMAS SELECIONADOS',
    title: 'Projetos tratados como decisões de engenharia.',
    description:
      'Quatro estudos de caso que exploram arquitetura, conhecimento, risco e otimização sob perspectivas diferentes.',
    repositoryLabel: 'Examinar código',
    challengeLabel: 'Desafio',
    decisionLabel: 'Decisão',
    resultLabel: 'Resultado',
    details: {
      caseStudy: 'Dossiê técnico',
      open: 'Explorar projeto',
      close: 'Fechar detalhes do projeto',
      status: 'Status',
      period: 'Ciclo',
      role: 'Atuação',
      overview: 'Visão geral',
      features: 'Capacidades principais',
      architecture: 'Arquitetura',
      tradeoffs: 'Decisões e trade-offs',
      outcomes: 'Resultados',
      nextSteps: 'Próximos passos',
      technologies: 'Stack técnica',
    },
    items: [
      {
        id: 'adr-forge',
        index: 'SYS.01',
        name: 'ADR Forge',
        eyebrow: 'ARCHITECTURE · RAG · FINE-TUNING',
        summary:
          'Laboratório local-first para analisar decisões arquiteturais e avaliar estratégias de modelos de linguagem com rigor reproduzível.',
        challenge:
          'Comparar prompting, recuperação de contexto e fine-tuning sem perder rastreabilidade nem transformar recomendações de IA em decisões automáticas.',
        decision:
          'Construir um monólito modular com FastAPI, React e SQLite, usando revisões imutáveis, snapshots de contexto e validação determinística do contrato de ADR.',
        result:
          'Um fluxo auditável que gera ADRs, monitora execuções em tempo real e permite comparações cegas com avaliação humana e proveniência preservada.',
        technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'Transformers'],
        repository: 'https://github.com/MarceloSoiber/adr-forge',
        image: '/images/adr-forge.png',
        imageAlt: 'Interface do ADR Forge exibindo um laboratório de decisões arquiteturais',
        accent: 'cyan',
        details: {
          status: 'Em evolução',
          period: 'Produto autoral',
          role: 'Arquitetura, produto e implementação full stack',
          overview: [
            'O ADR Forge transforma a elaboração de registros de decisão arquitetural em um experimento rastreável. Cada execução preserva contexto, configuração e resposta para permitir análise posterior.',
            'O sistema foi desenhado para comparar estratégias de IA sem delegar a decisão final ao modelo: a recomendação continua pertencendo ao engenheiro responsável.',
          ],
          features: [
            'Geração estruturada de ADRs com validação determinística do contrato.',
            'Execuções observáveis em tempo real e histórico de revisões imutáveis.',
            'Comparação cega entre prompting, RAG e modelos ajustados.',
            'Snapshots de contexto e proveniência para reprodução dos experimentos.',
          ],
          architecture: [
            'Frontend React e TypeScript para condução dos experimentos e leitura dos resultados.',
            'API FastAPI organizada como monólito modular, com fronteiras por capacidade.',
            'SQLite para uma operação local-first simples e portável.',
            'Pipeline de modelos isolado do domínio para permitir trocar estratégias de inferência.',
          ],
          tradeoffs: [
            'Monólito modular reduz custo operacional enquanto mantém limites claros para evolução.',
            'Revisões imutáveis consomem mais armazenamento, mas preservam auditoria e reprodutibilidade.',
            'Validação determinística restringe respostas livres em troca de contratos previsíveis.',
          ],
          outcomes: [
            'Processo comparável para avaliar estratégias de geração arquitetural.',
            'Decisões com contexto, autoria e evidências preservadas.',
            'Base segura para incorporar avaliação humana e métricas de qualidade.',
          ],
          nextSteps: [
            'Ampliar o conjunto de avaliações e critérios de comparação.',
            'Adicionar visualizações de custo, latência e qualidade por experimento.',
            'Consolidar exportação e integração com fluxos de documentação.',
          ],
        },
      },
      {
        id: 'knowledge-hub',
        index: 'SYS.02',
        name: 'Knowledge Hub',
        eyebrow: 'RAG · LOCAL FIRST · MCP',
        summary:
          'Um workspace para organizar conhecimento, recuperar contexto com confiança e conectar agentes de IA.',
        challenge:
          'Documentos, notas e referências perdem valor quando ficam distribuídos e não podem ser recuperados pelo significado.',
        decision:
          'Arquitetura RAG com Angular, FastAPI, PostgreSQL/pgvector, inferência local e um servidor MCP com acesso controlado.',
        result:
          'Uma base consultável por busca semântica e perguntas fundamentadas, preservando controle e privacidade dos dados.',
        technologies: ['Angular', 'FastAPI', 'PostgreSQL', 'pgvector', 'MCP', 'Local LLM'],
        repository: 'https://github.com/MarceloSoiber/knowledge-hub',
        image: '/images/knowledge-hub-architecture.svg',
        imageAlt: 'Diagrama abstrato da arquitetura do Knowledge Hub',
        accent: 'cyan',
        details: {
          status: 'Operacional',
          period: 'Plataforma autoral',
          role: 'Arquitetura, engenharia de IA e desenvolvimento full stack',
          overview: [
            'O Knowledge Hub reúne documentos, notas e referências em um workspace pesquisável por significado, mantendo o usuário no controle do conteúdo e do acesso.',
            'A plataforma conecta ingestão, busca híbrida, respostas fundamentadas e agentes externos por meio de uma fronteira MCP controlada.',
          ],
          features: [
            'Ingestão e organização de diferentes fontes de conhecimento.',
            'Busca semântica com filtros e recuperação de trechos relevantes.',
            'Perguntas e respostas com evidências vinculadas às fontes.',
            'Servidor MCP para acesso de agentes a capacidades autorizadas.',
          ],
          architecture: [
            'Angular concentra a experiência de organização, busca e exploração.',
            'FastAPI coordena ingestão, recuperação, autorização e geração de respostas.',
            'PostgreSQL e pgvector armazenam metadados, conteúdo e embeddings.',
            'Inferência local mantém dados sensíveis dentro do ambiente controlado.',
          ],
          tradeoffs: [
            'Inferência local favorece privacidade, com maior exigência de hardware e operação.',
            'Busca vetorial melhora descoberta semântica, mas exige chunking e avaliação contínua.',
            'MCP amplia interoperabilidade e demanda contratos de permissão explícitos.',
          ],
          outcomes: [
            'Conhecimento disperso convertido em contexto recuperável.',
            'Respostas auditáveis, ligadas às fontes utilizadas.',
            'Integração reutilizável entre a base pessoal e diferentes agentes.',
          ],
          nextSteps: [
            'Evoluir avaliação de recuperação e qualidade das respostas.',
            'Adicionar políticas mais granulares de acesso por coleção.',
            'Expandir conectores de ingestão e rotinas de atualização.',
          ],
        },
      },
      {
        id: 'fraud-detection',
        index: 'SYS.03',
        name: 'Credit Card Fraud Detection',
        eyebrow: 'MACHINE LEARNING · XAI · RISK',
        summary:
          'Laboratório de análise de transações que combina detecção sequencial e apoio interpretativo por IA.',
        challenge:
          'Priorizar comportamentos anômalos sem transformar um score automatizado em uma decisão opaca e definitiva.',
        decision:
          'Combinar modelagem temporal, explicabilidade e agentes generativos para apoiar — não substituir — a análise humana.',
        result:
          'Um ambiente aplicado para investigar risco, interpretar sinais e experimentar fluxos de decisão assistida.',
        technologies: ['Python', 'FastAPI', 'PyTorch', 'scikit-learn', 'PostgreSQL', 'LangGraph'],
        repository: 'https://github.com/MarceloSoiber/credit-card-fraud-detection',
        image: '/images/fraud-detection.svg',
        imageAlt: 'Visualização abstrata de análise de transações e detecção de anomalias',
        accent: 'amber',
        details: {
          status: 'Laboratório aplicado',
          period: 'Pesquisa e prototipação',
          role: 'Arquitetura, modelagem e experiência analítica',
          overview: [
            'Este laboratório investiga como modelos sequenciais e técnicas explicáveis podem apoiar a triagem de transações potencialmente fraudulentas.',
            'O objetivo não é automatizar a decisão final, mas organizar sinais, hipóteses e contexto para uma análise humana mais informada.',
          ],
          features: [
            'Pipeline de preparação e análise de sequências transacionais.',
            'Pontuação de anomalia acompanhada de sinais interpretáveis.',
            'Investigação assistida por agentes com contexto controlado.',
            'Registro das evidências consideradas durante a análise.',
          ],
          architecture: [
            'FastAPI expõe os fluxos de análise e coordena os modelos.',
            'PyTorch e scikit-learn suportam experimentos temporais e baselines.',
            'PostgreSQL preserva transações, resultados e trilhas de investigação.',
            'LangGraph organiza etapas de apoio generativo sem assumir a decisão.',
          ],
          tradeoffs: [
            'Maior sensibilidade pode elevar falsos positivos e custo de investigação.',
            'Explicabilidade simplifica modelos complexos e precisa ser apresentada como evidência, não verdade causal.',
            'Agentes aumentam capacidade exploratória, mas exigem limites e validação humana.',
          ],
          outcomes: [
            'Ambiente reproduzível para comparar estratégias de detecção.',
            'Separação explícita entre score, explicação e decisão humana.',
            'Base para investigar qualidade, viés e custo operacional do fluxo.',
          ],
          nextSteps: [
            'Medir precisão, recall e custo por faixa de risco.',
            'Simular drift e estratégias de atualização dos modelos.',
            'Aprimorar trilhas de auditoria e visualizações temporais.',
          ],
        },
      },
      {
        id: 'knights-tour',
        index: 'SYS.04',
        name: "Knight's Tour",
        eyebrow: 'GENETIC ALGORITHM · JOBS · SSE',
        summary:
          'Uma aplicação full stack para observar algoritmos genéticos explorando o percurso do cavalo.',
        challenge:
          'Buscar uma rota de 64 movimentos em um espaço combinatório sujeito a estagnação e mínimos locais.',
        decision:
          'Executar populações em jobs, transmitir progresso por SSE e combinar mutações com a heurística de Warnsdorff.',
        result:
          'Uma experiência visual e mensurável para acompanhar convergência, diversidade e recuperação de estagnação.',
        technologies: ['TypeScript', 'Node.js', 'SSE', 'SQLite', 'Genetic Algorithms'],
        repository: 'https://github.com/MarceloSoiber/Knight-s-Tour',
        image: '/images/knights-tour.svg',
        imageAlt: 'Tabuleiro técnico mostrando o percurso do cavalo e telemetria do algoritmo',
        accent: 'cyan',
        details: {
          status: 'Experimento funcional',
          period: 'Projeto full stack',
          role: 'Algoritmo, backend, interface e observabilidade',
          overview: [
            'Knight’s Tour transforma um problema clássico de otimização combinatória em uma experiência observável, na qual cada execução pode ser acompanhada enquanto a população evolui.',
            'O projeto combina exploração genética com heurísticas conhecidas para estudar convergência, diversidade e recuperação de estagnação.',
          ],
          features: [
            'Criação e acompanhamento independente de jobs evolutivos.',
            'Telemetria ao vivo de geração, fitness e diversidade por SSE.',
            'Visualização do melhor percurso diretamente no tabuleiro.',
            'Configuração de população, mutação e critérios de parada.',
          ],
          architecture: [
            'Backend Node.js executa e isola os jobs do algoritmo genético.',
            'Eventos SSE enviam progresso incremental sem polling constante.',
            'SQLite persiste configurações, estado e resultados das execuções.',
            'Interface TypeScript traduz telemetria algorítmica em feedback visual.',
          ],
          tradeoffs: [
            'SSE simplifica atualização unidirecional, mas não atende comunicação bidirecional complexa.',
            'Heurísticas aceleram a busca ao custo de reduzir parte da exploração aleatória.',
            'Persistir checkpoints melhora recuperação e adiciona custo de escrita durante o job.',
          ],
          outcomes: [
            'Algoritmo complexo apresentado como processo visual compreensível.',
            'Execuções isoladas com progresso e histórico consultáveis.',
            'Base prática para comparar parâmetros e estratégias evolutivas.',
          ],
          nextSteps: [
            'Comparar configurações por tempo, convergência e diversidade.',
            'Adicionar pausa, retomada e reprodução de execuções.',
            'Explorar operadores adaptativos e outras heurísticas de busca.',
          ],
        },
      },
    ],
  },
  experience: {
    eyebrow: '04 // LINHA DE EXPERIÊNCIA',
    title: 'Uma trajetória de software, modernização e problemas reais.',
    description:
      'Mais de 10 anos evoluindo de fundamentos full stack para sistemas de pagamentos, arquitetura e IA aplicada.',
    professionalCode: '01 // TRAJETORIA.LOG',
    professionalTitle: 'Trajetória profissional',
    backgroundCode: '02 // FORMACAO.INDEX',
    backgroundTitle: 'Formação & reconhecimentos',
    contributionsLabel: 'Contribuições selecionadas',
    technologiesLabel: 'Tecnologias e contextos',
    kindLabels: {
      education: 'Formação',
      recognition: 'Reconhecimento',
    },
    items: [
      {
        period: 'DEZ. 2018 — ATUAL',
        title: 'Desenvolvedor Sênior',
        organization: 'gsurf · Tecnologia para meios de pagamentos',
        location: 'Santa Catarina, Brasil · Remoto',
        description:
          'Atuação em sistemas críticos de pagamentos, conectando decisões de arquitetura, confiabilidade operacional e necessidades de produto.',
        contributions: [
          'Liderança técnica na modernização de monólitos PHP e Laravel para microsserviços Python na AWS.',
          'Projeto e manutenção de APIs de pagamentos com foco em segurança, resiliência, baixa latência e continuidade operacional.',
          'Otimização de bancos relacionais, automação com CloudFormation e colaboração próxima com produto.',
        ],
        technologies: ['Python', 'PHP / Laravel', 'AWS', 'CloudFormation', 'APIs', 'SQL'],
        current: true,
      },
      {
        period: 'FEV. 2016 — DEZ. 2018',
        title: 'Desenvolvedor Web PHP',
        organization: 'Eprocessos',
        location: 'Garopaba, Santa Catarina, Brasil',
        description: 'Desenvolvimento full stack e suporte a aplicações web voltadas a processos de negócio.',
        contributions: [
          'Desenvolvimento e manutenção de frontend e backend em aplicações PHP.',
          'Projeto e evolução de estruturas de dados em MySQL.',
          'Análise de requisitos, suporte técnico e resolução de incidentes para aplicações e usuários.',
        ],
        technologies: ['PHP', 'MySQL', 'Frontend', 'Suporte técnico'],
      },
    ],
    background: [
      {
        period: '2026 — 2027',
        kind: 'education',
        title: 'Engenharia de Software com IA Aplicada',
        organization: 'UNIPDS · Pós-graduação em andamento',
        description:
          'Aprofundamento em arquitetura, inteligência artificial e aplicação prática de sistemas inteligentes.',
      },
      {
        period: '2015',
        kind: 'education',
        title: 'Ciência da Computação',
        organization: 'Universidade do Sul de Santa Catarina · Unisul',
        description:
          'Trabalho final apresentado com um sistema de identificação taxonômica baseado em chaves dicotômicas.',
      },
      {
        period: '2009 — 2011',
        kind: 'education',
        title: 'Técnico em Programação — Informática',
        organization: 'CEDUP',
        description: 'Formação técnica que estabeleceu a base para o desenvolvimento de software.',
      },
      {
        period: '2012 · 2013',
        kind: 'recognition',
        title: '3º lugar na Maratona de Programação',
        organization: 'Competições acadêmicas',
        description: 'Reconhecimento por raciocínio algorítmico e resolução de problemas sob pressão.',
      },
      {
        period: '2011 · 2013',
        kind: 'recognition',
        title: 'Unisul Tech Day',
        organization: 'Universidade do Sul de Santa Catarina',
        description: 'Participação nas edições de 2011 e 2013 do evento de tecnologia.',
      },
    ],
  },
  notes: {
    eyebrow: '05 // NOTAS DE ENGENHARIA',
    title: 'Princípios extraídos da prática.',
    description: 'Pequenas leituras sobre decisões que atravessam os sistemas apresentados.',
    items: [
      {
        code: 'NOTE.RAG',
        title: 'RAG confiável começa antes da resposta',
        text: 'Qualidade de ingestão, identidade do embedding e rastreabilidade das fontes importam tanto quanto o modelo gerador.',
        projectId: 'knowledge-hub',
      },
      {
        code: 'NOTE.RISK',
        title: 'Score não é decisão',
        text: 'Em cenários de risco, o valor do modelo cresce quando sua incerteza e seus sinais podem ser interpretados por pessoas.',
        projectId: 'fraud-detection',
      },
      {
        code: 'NOTE.SEARCH',
        title: 'Estagnação também é um sinal',
        text: 'Algoritmos evolutivos precisam observar diversidade e mudar sua estratégia quando a população deixa de explorar.',
        projectId: 'knights-tour',
      },
    ],
  },
  contact: {
    eyebrow: '06 // CANAL ABERTO',
    title: 'Vamos conversar sobre sistemas que valem a pena construir.',
    description:
      'Arquitetura, IA aplicada, engenharia de software ou uma boa pergunta técnica: o canal está aberto.',
    about: [
      'Gosto de transformar problemas ambíguos em decisões claras e software sustentável. Trabalho próximo ao produto e à operação, fazendo as perguntas certas antes de escolher ferramentas.',
      'Tenho interesse especial em arquitetura, IA aplicada e modernização de sistemas — principalmente quando existe um desafio técnico difícil e impacto real para o negócio.',
    ],
    highlights: [
      { value: '10+', label: 'anos construindo software' },
      { value: 'ARCH · PROD · EXEC', label: 'visão de ponta a ponta' },
      { value: 'PT · EN · ES', label: 'comunicação' },
    ],
    dialogLabel: 'Dados de contato de Marcelo Soiber',
    closeLabel: 'Fechar contato',
    role: 'Engenheiro de Software · Arquitetura & IA',
    location: 'Tubarão, SC · Brasil',
    photoAlt: 'Retrato profissional de Marcelo Soiber',
    emailLabel: 'Enviar e-mail',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    resumeLabel: 'Baixar currículo',
    resumeHref: '/cv/Curriculo_Marcelo_Soiber_PT-BR.pdf',
    resumeLanguage: 'PDF · PT-BR',
    resumeFilename: 'Curriculo_Marcelo_Soiber_PT-BR.pdf',
  },
  footer: 'Projetado e construído por Marcelo Soiber. Sistema atualizado em 2026.',
}

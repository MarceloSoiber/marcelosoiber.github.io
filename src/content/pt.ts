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
    { label: 'Perfil', href: '#perfil' },
    { label: 'Sistemas', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Contato', href: '#contato' },
  ],
  languageLabel: 'Selecionar idioma',
  hero: {
    eyebrow: 'ENGENHARIA DE SOFTWARE // ARQUITETURA // IA APLICADA',
    titleLead: 'Construo sistemas que transformam',
    titleFocus: 'complexidade em clareza.',
    description:
      'Engenheiro de Software especializado em arquitetura, sistemas inteligentes e IA aplicada. Mais de nove anos convertendo problemas reais em software confiável.',
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
    body:
      'Atuo há mais de nove anos no desenvolvimento de software, incluindo soluções para meios de pagamentos. Trabalho com Python, PHP e TypeScript, conectando APIs, dados, aplicações web e inteligência artificial com atenção a privacidade, operação e resultado de negócio.',
    metrics: [
      { value: '9+', label: 'anos de engenharia' },
      { value: '03', label: 'sistemas em destaque' },
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
      'Três estudos de caso que exploram conhecimento, risco e otimização sob perspectivas diferentes.',
    repositoryLabel: 'Examinar código',
    challengeLabel: 'Desafio',
    decisionLabel: 'Decisão',
    resultLabel: 'Resultado',
    items: [
      {
        id: 'knowledge-hub',
        index: 'SYS.01',
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
      },
      {
        id: 'fraud-detection',
        index: 'SYS.02',
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
      },
      {
        id: 'knights-tour',
        index: 'SYS.03',
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
      },
    ],
  },
  experience: {
    eyebrow: '04 // LINHA DE EXPERIÊNCIA',
    title: 'Conhecimento construído entre software e problemas reais.',
    items: [
      {
        period: 'ATUAL',
        title: 'Engenharia de Software',
        organization: 'gsurf · Tecnologia para meios de pagamentos',
        description:
          'Desenvolvimento de software no contexto de pagamentos, unindo conhecimento técnico, confiabilidade e resolução de problemas de negócio.',
        current: true,
      },
      {
        period: '2026—2027',
        title: 'Engenharia de Software com IA Aplicada',
        organization: 'UNIPDS · Pós-graduação',
        description:
          'Aprofundamento em arquitetura, inteligência artificial e aplicação prática de sistemas inteligentes.',
      },
      {
        period: '2015',
        title: 'Ciência da Computação',
        organization: 'Universidade do Sul de Santa Catarina',
        description:
          'Formação concluída com um sistema de identificação taxonômica baseado em chaves dicotômicas.',
      },
      {
        period: '2012—2013',
        title: '3º lugar em Maratona de Programação',
        organization: 'Competições acadêmicas',
        description: 'Reconhecimento por raciocínio algorítmico e resolução de problemas sob restrição de tempo.',
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

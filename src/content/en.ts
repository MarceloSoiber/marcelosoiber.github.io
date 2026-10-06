import type { SiteContent } from './schema'

export const en: SiteContent = {
  locale: 'en',
  htmlLang: 'en',
  path: '/en/',
  meta: {
    title: 'Marcelo Soiber — Software Engineering, Architecture & AI',
    description:
      'Marcelo Soiber portfolio: software architecture, intelligent systems, applied AI, RAG, and full-stack engineering.',
  },
  skipLink: 'Skip to content',
  brandLabel: 'Marcelo Soiber — home',
  availability: 'System online · Tubarão, Brazil',
  navigationLabel: 'Main navigation',
  nav: [
    { label: 'Profile', href: '#perfil' },
    { label: 'Systems', href: '#projetos' },
    { label: 'Experience', href: '#experiencia' },
    { label: 'Contact', href: '#contato' },
  ],
  languageLabel: 'Select language',
  hero: {
    eyebrow: 'SOFTWARE ENGINEERING // ARCHITECTURE // APPLIED AI',
    titleLead: 'I build systems that turn',
    titleFocus: 'complexity into clarity.',
    description:
      'Software Engineer specializing in architecture, intelligent systems, and applied AI. Over nine years turning real problems into reliable software.',
    primaryCta: 'Explore systems',
    secondaryCta: 'Download résumé',
    telemetryLabel: 'Professional core',
    telemetryValue: 'ARCH · AI · SYSTEMS',
    statusLabel: 'Operational',
  },
  profile: {
    eyebrow: '01 // MISSION PROFILE',
    title: 'Engineering driven by decisions, not trends.',
    lead: 'My specialty lives at the intersection of architecture, product, and execution.',
    body:
      'I have worked in software development for over nine years, including payment technology. I build with Python, PHP, and TypeScript, connecting APIs, data, web applications, and artificial intelligence with a focus on privacy, operations, and business outcomes.',
    metrics: [
      { value: '9+', label: 'years in engineering' },
      { value: '03', label: 'featured systems' },
      { value: 'PT·EN·ES', label: 'international presence' },
    ],
  },
  capabilities: {
    eyebrow: '02 // CAPABILITY MATRIX',
    title: 'From architecture to production software.',
    description:
      'Skills demonstrated in complete systems, with explicit technical decisions, constraints, and operations.',
    items: [
      {
        index: 'A.01',
        title: 'Software architecture',
        description: 'Boundaries, contracts, asynchronous flows, and evolutionary decisions.',
        technologies: ['APIs', 'MCP', 'SSE', 'Docker'],
      },
      {
        index: 'A.02',
        title: 'Intelligent systems',
        description: 'RAG, embeddings, vector search, and responsible model integration.',
        technologies: ['LLMs', 'RAG', 'pgvector', 'ML'],
      },
      {
        index: 'A.03',
        title: 'Full-stack engineering',
        description: 'Interfaces, services, persistence, and automation as one coherent solution.',
        technologies: ['Angular', 'Node.js', 'FastAPI', 'PostgreSQL'],
      },
    ],
  },
  projects: {
    eyebrow: '03 // SELECTED SYSTEMS',
    title: 'Projects presented as engineering decisions.',
    description: 'Three case studies exploring knowledge, risk, and optimization from different angles.',
    repositoryLabel: 'Examine code',
    challengeLabel: 'Challenge',
    decisionLabel: 'Decision',
    resultLabel: 'Outcome',
    items: [
      {
        id: 'knowledge-hub',
        index: 'SYS.01',
        name: 'Knowledge Hub',
        eyebrow: 'RAG · LOCAL FIRST · MCP',
        summary:
          'A workspace to organize knowledge, retrieve context with confidence, and connect AI agents.',
        challenge:
          'Documents, notes, and references lose value when scattered and impossible to retrieve by meaning.',
        decision:
          'A RAG architecture with Angular, FastAPI, PostgreSQL/pgvector, local inference, and an access-controlled MCP server.',
        result:
          'A knowledge base searchable by semantics and grounded questions while preserving data control and privacy.',
        technologies: ['Angular', 'FastAPI', 'PostgreSQL', 'pgvector', 'MCP', 'Local LLM'],
        repository: 'https://github.com/MarceloSoiber/knowledge-hub',
        image: '/images/knowledge-hub-architecture.svg',
        imageAlt: 'Abstract architecture diagram for Knowledge Hub',
        accent: 'cyan',
      },
      {
        id: 'fraud-detection',
        index: 'SYS.02',
        name: 'Credit Card Fraud Detection',
        eyebrow: 'MACHINE LEARNING · XAI · RISK',
        summary:
          'A transaction analysis lab combining sequence-based detection and AI-assisted interpretation.',
        challenge:
          'Prioritize anomalous behavior without turning an automated score into an opaque, final decision.',
        decision:
          'Combine temporal modeling, explainability, and generative agents to support — not replace — human analysis.',
        result:
          'An applied environment for investigating risk, interpreting signals, and experimenting with assisted decisions.',
        technologies: ['Python', 'FastAPI', 'PyTorch', 'scikit-learn', 'PostgreSQL', 'LangGraph'],
        repository: 'https://github.com/MarceloSoiber/credit-card-fraud-detection',
        image: '/images/fraud-detection.svg',
        imageAlt: 'Abstract transaction analysis and anomaly detection visualization',
        accent: 'amber',
      },
      {
        id: 'knights-tour',
        index: 'SYS.03',
        name: "Knight's Tour",
        eyebrow: 'GENETIC ALGORITHM · JOBS · SSE',
        summary: 'A full-stack application for observing genetic algorithms explore the knight’s tour.',
        challenge:
          'Search for a 64-move route in a combinatorial space subject to stagnation and local minima.',
        decision:
          'Run populations as jobs, stream progress with SSE, and combine mutation strategies with Warnsdorff’s heuristic.',
        result:
          'A visual, measurable experience for tracking convergence, diversity, and stagnation recovery.',
        technologies: ['TypeScript', 'Node.js', 'SSE', 'SQLite', 'Genetic Algorithms'],
        repository: 'https://github.com/MarceloSoiber/Knight-s-Tour',
        image: '/images/knights-tour.svg',
        imageAlt: 'Technical chessboard showing a knight path and algorithm telemetry',
        accent: 'cyan',
      },
    ],
  },
  experience: {
    eyebrow: '04 // EXPERIENCE LINE',
    title: 'Knowledge built between software and real-world problems.',
    items: [
      {
        period: 'NOW',
        title: 'Software Engineering',
        organization: 'gsurf · Payment technology',
        description:
          'Software development in the payments domain, combining technical knowledge, reliability, and business problem-solving.',
        current: true,
      },
      {
        period: '2026—2027',
        title: 'Software Engineering with Applied AI',
        organization: 'UNIPDS · Postgraduate program',
        description:
          'Advanced study in architecture, artificial intelligence, and practical intelligent systems.',
      },
      {
        period: '2015',
        title: 'Computer Science',
        organization: 'University of Southern Santa Catarina',
        description:
          'Degree completed with a taxonomic identification system based on dichotomous keys.',
      },
      {
        period: '2012—2013',
        title: '3rd place in programming contests',
        organization: 'Academic competitions',
        description: 'Recognition for algorithmic reasoning and problem-solving under time constraints.',
      },
    ],
  },
  notes: {
    eyebrow: '05 // ENGINEERING NOTES',
    title: 'Principles extracted from practice.',
    description: 'Short reads on decisions that cut across the featured systems.',
    items: [
      {
        code: 'NOTE.RAG',
        title: 'Reliable RAG begins before the answer',
        text: 'Ingestion quality, embedding identity, and source traceability matter as much as the generative model.',
        projectId: 'knowledge-hub',
      },
      {
        code: 'NOTE.RISK',
        title: 'A score is not a decision',
        text: 'In risk scenarios, a model becomes more valuable when people can interpret its uncertainty and signals.',
        projectId: 'fraud-detection',
      },
      {
        code: 'NOTE.SEARCH',
        title: 'Stagnation is a signal too',
        text: 'Evolutionary algorithms must observe diversity and change strategy when the population stops exploring.',
        projectId: 'knights-tour',
      },
    ],
  },
  contact: {
    eyebrow: '06 // OPEN CHANNEL',
    title: 'Let’s talk about systems worth building.',
    description:
      'Architecture, applied AI, software engineering, or a good technical question: the channel is open.',
    emailLabel: 'Send email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    resumeLabel: 'Download résumé',
    resumeHref: '/cv/Curriculo_Marcelo_Soiber_EN.pdf',
    resumeLanguage: 'PDF · EN',
    resumeFilename: 'Curriculo_Marcelo_Soiber_EN.pdf',
  },
  footer: 'Designed and built by Marcelo Soiber. System updated in 2026.',
}

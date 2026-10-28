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
    { label: 'Profile', page: 'profile' },
    { label: 'Systems', page: 'projects' },
    { label: 'Experience', page: 'experience' },
    { label: 'Contact', page: 'contact' },
  ],
  languageLabel: 'Select language',
  hero: {
    eyebrow: 'WELCOME // NAVIGATION SYSTEM',
    titleLead: 'A map of how I think,',
    titleFocus: 'build, and evolve systems.',
    description:
      'Software engineering, architecture, and applied AI presented through decisions, working systems, and a journey shaped by real-world problems.',
    primaryCta: 'Open map',
    secondaryCta: 'Download CV',
    telemetryLabel: 'Portfolio core',
    telemetryValue: 'PROFILE · SYSTEMS · PATH',
    statusLabel: 'Operational',
  },
  homeMap: {
    eyebrow: '00 // SYSTEM MAP',
    title: 'Choose an entry point.',
    description:
      'Each route reveals a different part of the work: thinking, built systems, professional journey, and conversation.',
    items: [
      {
        index: '01',
        page: 'profile',
        title: 'Profile',
        description: 'How I think, make decisions, and approach the work.',
        signal: 'METHOD / PRINCIPLES',
      },
      {
        index: '02',
        page: 'projects',
        title: 'Systems',
        description: 'Case studies with architecture, trade-offs, and code.',
        signal: 'CASES / CODE',
      },
      {
        index: '03',
        page: 'experience',
        title: 'Experience',
        description: 'Professional journey, education, and recognition.',
        signal: 'CAREER / EDUCATION',
      },
      {
        index: '04',
        page: 'contact',
        title: 'Contact',
        description: 'A direct channel for projects, technical challenges, and good conversations.',
        signal: 'CHANNEL / OPEN',
      },
    ],
  },
  profile: {
    eyebrow: '01 // MISSION PROFILE',
    title: 'Engineering driven by decisions, not trends.',
    lead: 'My way of working combines architecture, product context, and responsibility for operations.',
    body: [
      'I start with the problem, its constraints, and the decisions that need to be made. Only then do I choose tools, design contracts, and connect interfaces, services, data, and automation into one coherent solution.',
      'Over more than ten years, I have worked across full-stack development, critical payment systems, and application modernization. Today, I bring that experience to architecture and AI, with close attention to traceability, privacy, and operational continuity.',
    ],
    principlesCode: 'OPERATING.MODE // 03 PRINCIPLES',
    principlesTitle: 'How I approach the work',
    principles: [
      {
        index: 'P.01',
        title: 'Clarity before tools',
        description:
          'Understand the problem, constraints, and trade-offs before choosing technology or architecture.',
      },
      {
        index: 'P.02',
        title: 'Product and operations in the same conversation',
        description:
          'Keep business needs, technical decisions, and operational reality connected throughout the system’s evolution.',
      },
      {
        index: 'P.03',
        title: 'Evolve without losing control',
        description:
          'Modernize through explicit boundaries and contracts while preserving traceability and continuity.',
      },
    ],
  },
  capabilities: {
    eyebrow: '02 // CAPABILITY MATRIX',
    title: 'From architecture to production software.',
    description:
      'Three connected disciplines guided by the same approach: context before solutions, explicit decisions, and responsibility for operations.',
    evidenceLabel: 'Evidence in practice',
    items: [
      {
        index: 'A.01',
        title: 'Software architecture',
        description:
          'Turn context and constraints into boundaries, contracts, and decisions that can evolve.',
        evidence: [
          'APIs and asynchronous flows',
          'Modular monoliths and microservices',
          'MCP and SSE integrations',
        ],
        technologies: ['APIs', 'MCP', 'SSE', 'Docker'],
      },
      {
        index: 'A.02',
        title: 'Applied AI',
        description:
          'Integrate models with context, traceability, and validation while keeping final decisions with people.',
        evidence: [
          'RAG, embeddings, and vector search',
          'Comparable prompting, RAG, and fine-tuning',
          'Local inference and controlled access',
        ],
        technologies: ['LLMs', 'RAG', 'pgvector', 'Fine-tuning'],
      },
      {
        index: 'A.03',
        title: 'Systems modernization',
        description: 'Evolve existing systems with attention to operations, data, and business continuity.',
        evidence: [
          'PHP and Laravel to Python microservices',
          'Automated infrastructure on AWS',
          'Payment APIs and relational databases',
        ],
        technologies: ['Python', 'PHP / Laravel', 'AWS', 'CloudFormation', 'SQL'],
      },
    ],
  },
  projects: {
    eyebrow: '03 // SELECTED SYSTEMS',
    title: 'Projects presented as engineering decisions.',
    description:
      'Four case studies exploring architecture, knowledge, risk, and optimization from different angles.',
    repositoryLabel: 'Examine code',
    challengeLabel: 'Challenge',
    decisionLabel: 'Decision',
    resultLabel: 'Outcome',
    details: {
      caseStudy: 'Case study',
      open: 'View full case study',
      close: 'Close case study',
      status: 'Status',
      period: 'Period',
      role: 'Role',
      overview: 'Overview',
      features: 'Core capabilities',
      architecture: 'Architecture',
      tradeoffs: 'Decisions & trade-offs',
      outcomes: 'Outcomes',
      nextSteps: 'Next steps',
      technologies: 'Technology stack',
    },
    items: [
      {
        id: 'adr-forge',
        index: 'SYS.01',
        name: 'ADR Forge',
        eyebrow: 'ARCHITECTURE · RAG · FINE-TUNING',
        summary:
          'A local-first lab for analyzing architectural decisions and evaluating language-model strategies with reproducible rigor.',
        challenge:
          'Compare prompting, context retrieval, and fine-tuning without losing traceability or turning AI recommendations into automatic decisions.',
        decision:
          'Build a modular monolith with FastAPI, React, and SQLite, using immutable revisions, context snapshots, and deterministic ADR-contract validation.',
        result:
          'An auditable workflow that generates ADRs, monitors runs in real time, and enables blind human comparisons with preserved provenance.',
        technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'Transformers'],
        repository: 'https://github.com/MarceloSoiber/adr-forge',
        image: '/images/adr-forge.png',
        imageAlt: 'ADR Forge interface showing an architectural decision laboratory',
        accent: 'cyan',
        details: {
          status: 'Active development',
          period: '2026',
          role: 'Creator · Architecture · Full-stack engineering · AI evaluation',
          overview: [
            'ADR Forge is a local-first laboratory for turning architecture discussions into traceable decision records.',
            'It compares prompting, retrieval-augmented generation, and fine-tuned models under the same contracts, datasets, and review criteria.',
          ],
          features: [
            'Structured ADR authoring with immutable revisions and deterministic contract validation.',
            'Real-time run telemetry, context snapshots, and complete input-to-output provenance.',
            'Blind human evaluation for comparing model strategies without provider bias.',
            'Dataset preparation and experiment tracking for repeatable fine-tuning workflows.',
          ],
          architecture: [
            'A modular monolith keeps domain rules, evaluation workflows, and infrastructure adapters isolated without premature distribution.',
            'FastAPI exposes the application layer; React provides the experiment workspace; SQLite stores projects, revisions, runs, and evaluations.',
            'Model and retrieval providers sit behind explicit ports, allowing local and remote strategies to be exchanged without changing the core workflow.',
          ],
          tradeoffs: [
            'Local-first execution favors privacy and reproducibility, while requiring deliberate resource and model management.',
            'Immutable snapshots consume additional storage but preserve the evidence needed to reproduce every recommendation.',
            'A modular monolith reduces operational overhead now while retaining boundaries that can support future extraction.',
          ],
          outcomes: [
            'Produced an auditable workflow in which AI supports architectural reasoning without becoming the decision authority.',
            'Made evaluation results comparable across prompting, retrieval, and fine-tuning strategies.',
            'Reduced ambiguity by validating generated ADRs against explicit structural contracts.',
          ],
          nextSteps: [
            'Expand evaluation datasets and quality rubrics with domain-specific scenarios.',
            'Add experiment dashboards for latency, cost, agreement, and regression analysis.',
            'Package additional model and vector-store adapters for reproducible comparisons.',
          ],
        },
      },
      {
        id: 'knowledge-hub',
        index: 'SYS.02',
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
        details: {
          status: 'Active development',
          period: '2025—2026',
          role: 'Creator · Solution architecture · Full-stack engineering',
          overview: [
            'Knowledge Hub consolidates documents, notes, and references into a private workspace designed for semantic retrieval.',
            'It gives people and connected AI agents grounded context while keeping source ownership, access control, and traceability explicit.',
          ],
          features: [
            'Document ingestion, normalization, chunking, embedding, and lifecycle management.',
            'Hybrid knowledge retrieval with source citations and relevance-aware context assembly.',
            'Grounded question answering through locally hosted language models.',
            'An authenticated MCP interface that exposes approved knowledge to external agents.',
          ],
          architecture: [
            'Angular delivers the workspace, while FastAPI coordinates ingestion, retrieval, permissions, and model orchestration.',
            'PostgreSQL stores application data and pgvector indexes embeddings alongside their document and chunk metadata.',
            'Background ingestion isolates expensive parsing and embedding work from interactive queries; MCP forms a controlled integration boundary.',
          ],
          tradeoffs: [
            'Local inference improves privacy and cost predictability but offers less throughput than managed model APIs.',
            'Keeping vectors and metadata in PostgreSQL simplifies consistency and operations at the cost of specialized vector-database features.',
            'Chunking is configurable because no single segmentation strategy performs best across every document type.',
          ],
          outcomes: [
            'Created a searchable knowledge base that retrieves information by meaning instead of folder location.',
            'Preserved answer provenance through document-level metadata and direct source references.',
            'Enabled agent integrations without exposing the entire repository or bypassing access rules.',
          ],
          nextSteps: [
            'Introduce retrieval evaluation suites with relevance, faithfulness, and citation metrics.',
            'Add connectors for more document sources and incremental synchronization.',
            'Improve permission granularity and observability across ingestion and query pipelines.',
          ],
        },
      },
      {
        id: 'fraud-detection',
        index: 'SYS.03',
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
        details: {
          status: 'Research prototype',
          period: '2025—2026',
          role: 'Creator · ML engineering · Backend architecture',
          overview: [
            'This research system explores fraud investigation as a decision-support problem rather than a binary prediction task.',
            'It combines transaction sequences, explainable signals, and agent-assisted summaries so analysts can inspect why an event deserves attention.',
          ],
          features: [
            'Sequence-aware transaction scoring and anomaly detection over behavioral patterns.',
            'Explainability views that surface the signals contributing to each risk score.',
            'Investigation workflows with transaction history, evidence, and analyst feedback.',
            'LangGraph agents that organize findings while keeping final decisions with people.',
          ],
          architecture: [
            'FastAPI serves scoring and investigation use cases; PostgreSQL stores transactions, model outputs, and review history.',
            'PyTorch handles temporal models, while scikit-learn supplies baselines, preprocessing, and evaluation utilities.',
            'A graph-based orchestration layer separates deterministic risk signals from generative interpretation and enforces human review checkpoints.',
          ],
          tradeoffs: [
            'Sequence models capture behavioral context but increase training cost and explanation complexity.',
            'The system optimizes for investigation quality rather than fully automated blocking, accepting additional review latency.',
            'Generative summaries improve navigation of evidence but never replace calibrated scores or recorded source signals.',
          ],
          outcomes: [
            'Built an end-to-end environment for comparing risk models and investigating individual alerts.',
            'Made model evidence visible alongside scores to support accountable analyst decisions.',
            'Established a clear boundary between prediction, interpretation, and human action.',
          ],
          nextSteps: [
            'Evaluate models against temporal drift, class imbalance, and cost-sensitive thresholds.',
            'Add analyst feedback loops and model-monitoring dashboards.',
            'Expand privacy controls and audit trails for production-oriented experimentation.',
          ],
        },
      },
      {
        id: 'knights-tour',
        index: 'SYS.04',
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
        details: {
          status: 'Completed',
          period: '2025',
          role: 'Creator · Algorithm design · Full-stack engineering',
          overview: [
            'Knight’s Tour turns a classic combinatorial search problem into an observable full-stack experiment.',
            'Users can launch evolutionary runs, follow the population in real time, and inspect how search strategies affect convergence and diversity.',
          ],
          features: [
            'Configurable populations, mutation rates, selection pressure, and stopping criteria.',
            'Server-side job execution with live progress delivered through Server-Sent Events.',
            'Interactive board playback for the best route discovered in each run.',
            'Telemetry for fitness, diversity, stagnation, generations, and recovery attempts.',
          ],
          architecture: [
            'A TypeScript and Node.js service manages independent optimization jobs and persists their configuration and results in SQLite.',
            'The genetic engine combines selection, crossover, adaptive mutation, and Warnsdorff-guided move ordering.',
            'SSE provides a simple unidirectional stream for incremental progress without polling or WebSocket coordination overhead.',
          ],
          tradeoffs: [
            'Heuristic guidance accelerates convergence but reduces the purity of an unguided evolutionary search.',
            'In-process jobs keep deployment simple, while limiting horizontal scaling and fault isolation.',
            'SSE fits telemetry delivery well but does not provide the bidirectional semantics needed for richer live control.',
          ],
          outcomes: [
            'Delivered a measurable visualization of evolutionary search rather than only its final answer.',
            'Demonstrated how adaptive mutation and diversity signals can recover from stagnation.',
            'Separated job execution from presentation so multiple experiments can be compared consistently.',
          ],
          nextSteps: [
            'Move long-running jobs to a durable queue with cancellation and retry support.',
            'Add seeded runs and exportable experiment reports for stronger reproducibility.',
            'Compare the genetic approach with backtracking and other metaheuristics.',
          ],
        },
      },
    ],
  },
  experience: {
    eyebrow: '04 // EXPERIENCE LINE',
    title: 'A journey through software, modernization, and real-world problems.',
    description:
      'Over 10 years progressing from full-stack foundations to payment systems, architecture, and applied AI.',
    professionalCode: '01 // CAREER.LOG',
    professionalTitle: 'Professional journey',
    backgroundCode: '02 // BACKGROUND.INDEX',
    backgroundTitle: 'Education & recognition',
    contributionsLabel: 'Selected contributions',
    technologiesLabel: 'Technologies and contexts',
    kindLabels: {
      education: 'Education',
      recognition: 'Recognition',
    },
    items: [
      {
        period: 'DEC 2018 — PRESENT',
        title: 'Senior Software Developer',
        organization: 'gsurf · Payment technology',
        location: 'Santa Catarina, Brazil · Remote',
        description:
          'Work on critical payment systems, connecting architecture decisions, operational reliability, and product needs.',
        contributions: [
          'Technical leadership in modernizing PHP and Laravel monoliths into Python microservices on AWS.',
          'Design and maintenance of payment APIs focused on security, resilience, low latency, and operational continuity.',
          'Relational database optimization, CloudFormation automation, and close collaboration with product stakeholders.',
        ],
        technologies: ['Python', 'PHP / Laravel', 'AWS', 'CloudFormation', 'APIs', 'SQL'],
        current: true,
      },
      {
        period: 'FEB 2016 — DEC 2018',
        title: 'PHP Web Developer',
        organization: 'Eprocessos',
        location: 'Garopaba, Santa Catarina, Brazil',
        description:
          'Full-stack development and support for web applications built around business processes.',
        contributions: [
          'Frontend and backend development and maintenance for PHP web applications.',
          'Design and evolution of MySQL data structures.',
          'Requirements analysis, technical support, and incident resolution for applications and users.',
        ],
        technologies: ['PHP', 'MySQL', 'Frontend', 'Technical support'],
      },
    ],
    background: [
      {
        period: '2026 — 2027',
        kind: 'education',
        title: 'Software Engineering with Applied AI',
        organization: 'UNIPDS · Postgraduate program in progress',
        description:
          'Advanced study in architecture, artificial intelligence, and the practical application of intelligent systems.',
      },
      {
        period: '2015',
        kind: 'education',
        title: "Bachelor's Degree in Computer Science",
        organization: 'Universidade do Sul de Santa Catarina · Unisul',
        description:
          'Final project presented with a taxonomic identification system based on dichotomous keys.',
      },
      {
        period: '2009 — 2011',
        kind: 'education',
        title: 'Technical Diploma in Computer Programming',
        organization: 'CEDUP',
        description:
          'Technical education that established the foundation for a career in software development.',
      },
      {
        period: '2012 · 2013',
        kind: 'recognition',
        title: '3rd place in the Programming Marathon',
        organization: 'Academic competitions',
        description: 'Recognition for algorithmic reasoning and problem-solving under pressure.',
      },
      {
        period: '2011 · 2013',
        kind: 'recognition',
        title: 'Unisul Tech Day',
        organization: 'Universidade do Sul de Santa Catarina',
        description: 'Participation in the 2011 and 2013 editions of the technology event.',
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
    about: [
      'I enjoy turning ambiguous problems into clear decisions and sustainable software. I work close to product and operations, asking the right questions before choosing tools.',
      'I am especially interested in architecture, applied AI, and systems modernization — particularly when there is a difficult technical challenge with real business impact.',
    ],
    highlights: [
      { value: '10+', label: 'years building software' },
      { value: 'ARCH · PROD · EXEC', label: 'end-to-end perspective' },
      { value: 'PT · EN · ES', label: 'communication' },
    ],
    dialogLabel: 'Marcelo Soiber contact details',
    closeLabel: 'Close contact',
    role: 'Software Engineer · Architecture & AI',
    location: 'Tubarão, SC · Brazil',
    photoAlt: 'Professional portrait of Marcelo Soiber',
    emailLabel: 'Send email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    resumeLabel: 'Download CV',
    resumeHref: '/cv/Curriculo_Marcelo_Soiber_EN.pdf',
    resumeLanguage: 'PDF · EN',
    resumeFilename: 'Curriculo_Marcelo_Soiber_EN.pdf',
  },
  footer: 'Designed and built by Marcelo Soiber. System updated in 2026.',
}

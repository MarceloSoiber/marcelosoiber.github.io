import type { SiteContent } from './schema'

export const es: SiteContent = {
  locale: 'es',
  htmlLang: 'es',
  path: '/es/',
  meta: {
    title: 'Marcelo Soiber — Ingeniería de Software, Arquitectura e IA',
    description:
      'Portafolio de Marcelo Soiber: arquitectura de software, sistemas inteligentes, IA aplicada, RAG e ingeniería full stack.',
  },
  skipLink: 'Ir al contenido',
  brandLabel: 'Marcelo Soiber — inicio',
  availability: 'Sistema en línea · Tubarão, Brasil',
  navigationLabel: 'Navegación principal',
  nav: [
    { label: 'Perfil', page: 'profile' },
    { label: 'Sistemas', page: 'projects' },
    { label: 'Experiencia', page: 'experience' },
    { label: 'Contacto', page: 'contact' },
  ],
  languageLabel: 'Seleccionar idioma',
  hero: {
    eyebrow: 'INGENIERÍA DE SOFTWARE // ARQUITECTURA // IA APLICADA',
    titleLead: 'Construyo sistemas que convierten',
    titleFocus: 'complejidad en claridad.',
    description:
      'Ingeniero de Software especializado en arquitectura, sistemas inteligentes e IA aplicada. Más de nueve años transformando problemas reales en software confiable.',
    primaryCta: 'Explorar sistemas',
    secondaryCta: 'Descargar currículum',
    telemetryLabel: 'Núcleo profesional',
    telemetryValue: 'ARCH · AI · SYSTEMS',
    statusLabel: 'Operativo',
  },
  profile: {
    eyebrow: '01 // PERFIL DE MISIÓN',
    title: 'Ingeniería guiada por decisiones, no por modas.',
    lead: 'Mi especialidad está en la intersección entre arquitectura, producto y ejecución.',
    body:
      'Trabajo hace más de nueve años en desarrollo de software, incluyendo tecnología para pagos. Construyo con Python, PHP y TypeScript, conectando APIs, datos, aplicaciones web e inteligencia artificial con atención a la privacidad, la operación y los resultados del negocio.',
    metrics: [
      { value: '9+', label: 'años de ingeniería' },
      { value: '04', label: 'sistemas destacados' },
      { value: 'PT·EN·ES', label: 'presencia internacional' },
    ],
  },
  capabilities: {
    eyebrow: '02 // MATRIZ DE CAPACIDADES',
    title: 'De la arquitectura al software en producción.',
    description:
      'Capacidades demostradas en sistemas completos, con decisiones técnicas, restricciones y operación explícitas.',
    items: [
      {
        index: 'A.01',
        title: 'Arquitectura de software',
        description: 'Límites, contratos, flujos asíncronos y decisiones evolutivas.',
        technologies: ['APIs', 'MCP', 'SSE', 'Docker'],
      },
      {
        index: 'A.02',
        title: 'Sistemas inteligentes',
        description: 'RAG, embeddings, búsqueda vectorial e integración responsable de modelos.',
        technologies: ['LLMs', 'RAG', 'pgvector', 'ML'],
      },
      {
        index: 'A.03',
        title: 'Ingeniería full stack',
        description: 'Interfaces, servicios, persistencia y automatización como una solución coherente.',
        technologies: ['Angular', 'Node.js', 'FastAPI', 'PostgreSQL'],
      },
    ],
  },
  projects: {
    eyebrow: '03 // SISTEMAS SELECCIONADOS',
    title: 'Proyectos presentados como decisiones de ingeniería.',
    description:
      'Cuatro casos de estudio que exploran arquitectura, conocimiento, riesgo y optimización desde perspectivas diferentes.',
    repositoryLabel: 'Examinar código',
    challengeLabel: 'Desafío',
    decisionLabel: 'Decisión',
    resultLabel: 'Resultado',
    items: [
      {
        id: 'adr-forge',
        index: 'SYS.01',
        name: 'ADR Forge',
        eyebrow: 'ARQUITECTURA · RAG · FINE-TUNING',
        summary:
          'Laboratorio local-first para analizar decisiones arquitectónicas y evaluar estrategias de modelos de lenguaje con rigor reproducible.',
        challenge:
          'Comparar prompting, recuperación de contexto y fine-tuning sin perder trazabilidad ni convertir recomendaciones de IA en decisiones automáticas.',
        decision:
          'Construir un monolito modular con FastAPI, React y SQLite, usando revisiones inmutables, snapshots de contexto y validación determinista del contrato ADR.',
        result:
          'Un flujo auditable que genera ADRs, monitorea ejecuciones en tiempo real y permite comparaciones ciegas con evaluación humana y procedencia preservada.',
        technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'Transformers'],
        repository: 'https://github.com/MarceloSoiber/adr-forge',
        image: '/images/adr-forge.png',
        imageAlt: 'Interfaz de ADR Forge mostrando un laboratorio de decisiones arquitectónicas',
        accent: 'cyan',
      },
      {
        id: 'knowledge-hub',
        index: 'SYS.02',
        name: 'Knowledge Hub',
        eyebrow: 'RAG · LOCAL FIRST · MCP',
        summary:
          'Un espacio para organizar conocimiento, recuperar contexto con confianza y conectar agentes de IA.',
        challenge:
          'Documentos, notas y referencias pierden valor cuando están dispersos y no pueden recuperarse por significado.',
        decision:
          'Arquitectura RAG con Angular, FastAPI, PostgreSQL/pgvector, inferencia local y un servidor MCP con acceso controlado.',
        result:
          'Una base consultable mediante búsqueda semántica y preguntas fundamentadas, preservando el control y la privacidad.',
        technologies: ['Angular', 'FastAPI', 'PostgreSQL', 'pgvector', 'MCP', 'Local LLM'],
        repository: 'https://github.com/MarceloSoiber/knowledge-hub',
        image: '/images/knowledge-hub-architecture.svg',
        imageAlt: 'Diagrama abstracto de la arquitectura de Knowledge Hub',
        accent: 'cyan',
      },
      {
        id: 'fraud-detection',
        index: 'SYS.03',
        name: 'Credit Card Fraud Detection',
        eyebrow: 'MACHINE LEARNING · XAI · RISK',
        summary:
          'Laboratorio de análisis de transacciones que combina detección secuencial e interpretación asistida por IA.',
        challenge:
          'Priorizar comportamientos anómalos sin convertir una puntuación automatizada en una decisión opaca y definitiva.',
        decision:
          'Combinar modelado temporal, explicabilidad y agentes generativos para apoyar — no sustituir — el análisis humano.',
        result:
          'Un entorno aplicado para investigar riesgos, interpretar señales y experimentar con decisiones asistidas.',
        technologies: ['Python', 'FastAPI', 'PyTorch', 'scikit-learn', 'PostgreSQL', 'LangGraph'],
        repository: 'https://github.com/MarceloSoiber/credit-card-fraud-detection',
        image: '/images/fraud-detection.svg',
        imageAlt: 'Visualización abstracta de análisis de transacciones y detección de anomalías',
        accent: 'amber',
      },
      {
        id: 'knights-tour',
        index: 'SYS.04',
        name: "Knight's Tour",
        eyebrow: 'GENETIC ALGORITHM · JOBS · SSE',
        summary:
          'Una aplicación full stack para observar algoritmos genéticos explorando el recorrido del caballo.',
        challenge:
          'Buscar una ruta de 64 movimientos en un espacio combinatorio sujeto a estancamiento y mínimos locales.',
        decision:
          'Ejecutar poblaciones como jobs, transmitir progreso por SSE y combinar mutaciones con la heurística de Warnsdorff.',
        result:
          'Una experiencia visual y medible para acompañar convergencia, diversidad y recuperación del estancamiento.',
        technologies: ['TypeScript', 'Node.js', 'SSE', 'SQLite', 'Genetic Algorithms'],
        repository: 'https://github.com/MarceloSoiber/Knight-s-Tour',
        image: '/images/knights-tour.svg',
        imageAlt: 'Tablero técnico con el recorrido del caballo y telemetría del algoritmo',
        accent: 'cyan',
      },
    ],
  },
  experience: {
    eyebrow: '04 // LÍNEA DE EXPERIENCIA',
    title: 'Conocimiento construido entre software y problemas reales.',
    items: [
      {
        period: 'ACTUAL',
        title: 'Ingeniería de Software',
        organization: 'gsurf · Tecnología para medios de pago',
        description:
          'Desarrollo de software en el contexto de pagos, combinando conocimiento técnico, confiabilidad y resolución de problemas de negocio.',
        current: true,
      },
      {
        period: '2026—2027',
        title: 'Ingeniería de Software con IA Aplicada',
        organization: 'UNIPDS · Posgrado',
        description:
          'Profundización en arquitectura, inteligencia artificial y aplicación práctica de sistemas inteligentes.',
      },
      {
        period: '2015',
        title: 'Ciencias de la Computación',
        organization: 'Universidad del Sur de Santa Catarina',
        description:
          'Formación concluida con un sistema de identificación taxonómica basado en claves dicotómicas.',
      },
      {
        period: '2012—2013',
        title: '3.er lugar en maratones de programación',
        organization: 'Competiciones académicas',
        description: 'Reconocimiento por razonamiento algorítmico y resolución de problemas bajo presión de tiempo.',
      },
    ],
  },
  notes: {
    eyebrow: '05 // NOTAS DE INGENIERÍA',
    title: 'Principios extraídos de la práctica.',
    description: 'Lecturas breves sobre decisiones presentes en los sistemas destacados.',
    items: [
      {
        code: 'NOTE.RAG',
        title: 'Un RAG confiable comienza antes de la respuesta',
        text: 'La calidad de la ingestión, la identidad del embedding y la trazabilidad de las fuentes importan tanto como el modelo generador.',
        projectId: 'knowledge-hub',
      },
      {
        code: 'NOTE.RISK',
        title: 'Una puntuación no es una decisión',
        text: 'En escenarios de riesgo, el modelo gana valor cuando las personas pueden interpretar su incertidumbre y sus señales.',
        projectId: 'fraud-detection',
      },
      {
        code: 'NOTE.SEARCH',
        title: 'El estancamiento también es una señal',
        text: 'Los algoritmos evolutivos deben observar la diversidad y cambiar de estrategia cuando la población deja de explorar.',
        projectId: 'knights-tour',
      },
    ],
  },
  contact: {
    eyebrow: '06 // CANAL ABIERTO',
    title: 'Hablemos de sistemas que vale la pena construir.',
    description:
      'Arquitectura, IA aplicada, ingeniería de software o una buena pregunta técnica: el canal está abierto.',
    dialogLabel: 'Datos de contacto de Marcelo Soiber',
    closeLabel: 'Cerrar contacto',
    role: 'Ingeniero de Software · Arquitectura e IA',
    location: 'Tubarão, SC · Brasil',
    photoAlt: 'Retrato profesional de Marcelo Soiber',
    emailLabel: 'Enviar correo',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    resumeLabel: 'Descargar currículum',
    resumeHref: '/cv/Curriculo_Marcelo_Soiber_ES.pdf',
    resumeLanguage: 'PDF · ES',
    resumeFilename: 'Curriculo_Marcelo_Soiber_ES.pdf',
  },
  footer: 'Diseñado y construido por Marcelo Soiber. Sistema actualizado en 2026.',
}

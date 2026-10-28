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
      'Ingeniero de Software especializado en arquitectura, sistemas inteligentes e IA aplicada. Más de diez años transformando problemas reales en software confiable.',
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
    body: 'Trabajo hace más de diez años en desarrollo de software, incluyendo tecnología para pagos. Construyo con Python, PHP y TypeScript, conectando APIs, datos, aplicaciones web e inteligencia artificial con atención a la privacidad, la operación y los resultados del negocio.',
    metrics: [
      { value: '10+', label: 'años de ingeniería' },
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
    details: {
      caseStudy: 'ESTUDIO DE CASO',
      open: 'Ver proyecto completo',
      close: 'Cerrar detalles del proyecto',
      status: 'Estado',
      period: 'Período',
      role: 'Rol',
      overview: 'Visión general',
      features: 'Funciones principales',
      architecture: 'Arquitectura',
      tradeoffs: 'Decisiones y compromisos',
      outcomes: 'Resultados',
      nextSteps: 'Próximos pasos',
      technologies: 'Tecnologías',
    },
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
        details: {
          status: 'Laboratorio funcional',
          period: '2026 · En evolución',
          role: 'Arquitectura, producto e implementación full stack',
          overview: [
            'ADR Forge convierte una pregunta arquitectónica en un experimento reproducible: conserva el contexto, ejecuta distintas estrategias de IA y produce registros de decisión estructurados.',
            'El sistema mantiene la recomendación automatizada separada de la decisión humana y preserva la procedencia necesaria para revisar cada resultado.',
          ],
          features: [
            'Creación de proyectos, problemas arquitectónicos y revisiones inmutables.',
            'Ejecuciones en tiempo real con eventos de progreso y snapshots del contexto utilizado.',
            'Comparación ciega entre prompting, RAG y modelos ajustados, con evaluación humana.',
            'Validación determinista del contrato ADR antes de almacenar un resultado.',
          ],
          architecture: [
            'Monolito modular con API FastAPI, interfaz React/TypeScript y persistencia local en SQLite.',
            'Pipeline de experimentación aislado por adaptadores para cambiar proveedores, modelos y estrategias de recuperación.',
            'Entidades versionadas conectan entrada, configuración, fuentes, salida y evaluación en una cadena auditable.',
          ],
          tradeoffs: [
            'SQLite y la ejecución local reducen la complejidad operativa y favorecen la reproducibilidad, a cambio de una escalabilidad horizontal limitada.',
            'El contrato estructurado restringe la libertad del modelo, pero facilita validación, comparación y consumo seguro.',
            'Las revisiones inmutables requieren más almacenamiento, pero evitan que cambios posteriores alteren experimentos anteriores.',
          ],
          outcomes: [
            'Flujo único para diseñar, ejecutar y evaluar experimentos arquitectónicos con IA.',
            'Resultados comparables y auditables sin delegar la decisión final al modelo.',
            'Base preparada para ampliar conjuntos de evaluación y modelos sin acoplar el dominio a un proveedor.',
          ],
          nextSteps: [
            'Ampliar el conjunto de casos de referencia y las métricas de evaluación.',
            'Incorporar exportación y colaboración sobre ADRs manteniendo el enfoque local-first.',
          ],
        },
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
        details: {
          status: 'Sistema funcional',
          period: '2025—2026 · En evolución',
          role: 'Arquitectura e implementación end-to-end',
          overview: [
            'Knowledge Hub centraliza documentos y notas en una base de conocimiento privada que puede explorarse por significado, no solo por palabras exactas.',
            'Además de la experiencia web, expone capacidades controladas mediante MCP para que agentes consulten el mismo conocimiento con fuentes verificables.',
          ],
          features: [
            'Ingestión, segmentación y enriquecimiento de documentos con seguimiento de su procedencia.',
            'Búsqueda híbrida y preguntas con respuestas fundamentadas en fragmentos recuperados.',
            'Gestión de colecciones y navegación por fuentes desde una interfaz Angular.',
            'Herramientas MCP con límites explícitos para búsquedas y lecturas realizadas por agentes.',
          ],
          architecture: [
            'Frontend Angular conectado a una API FastAPI que concentra casos de uso, autorización e ingestión.',
            'PostgreSQL almacena metadatos y pgvector mantiene embeddings consultables por similitud semántica.',
            'Workers procesan documentos fuera del ciclo HTTP, mientras modelos locales preservan privacidad y control de costos.',
          ],
          tradeoffs: [
            'La inferencia local protege datos y evita dependencia de un proveedor, pero exige administrar recursos y modelos.',
            'El procesamiento asíncrono mejora la respuesta de la API, aunque introduce estados intermedios y reintentos que deben observarse.',
            'La segmentación configurable aumenta la calidad en fuentes diversas a cambio de más parámetros para calibrar.',
          ],
          outcomes: [
            'Conocimiento disperso convertido en una base única, consultable y rastreable.',
            'Respuestas acompañadas de evidencia para que el usuario pueda verificar el contexto recuperado.',
            'La misma capa de conocimiento atiende a personas y agentes sin exponer directamente la persistencia.',
          ],
          nextSteps: [
            'Medir recuperación y fidelidad con un conjunto de preguntas de referencia.',
            'Añadir políticas de acceso por colección y observabilidad detallada del pipeline de ingestión.',
          ],
        },
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
        details: {
          status: 'Prototipo de investigación',
          period: '2025—2026',
          role: 'Modelado, arquitectura e implementación',
          overview: [
            'El proyecto investiga cómo detectar patrones de fraude en secuencias de transacciones y presentar las señales de forma útil para un analista.',
            'Su objetivo no es aprobar o bloquear operaciones automáticamente, sino combinar puntuaciones, explicaciones y contexto para apoyar decisiones humanas.',
          ],
          features: [
            'Ingestión y preparación de secuencias de transacciones para entrenamiento y análisis.',
            'Puntuación de riesgo basada en comportamiento temporal y señales derivadas.',
            'Explicaciones de las variables y eventos que más influyeron en cada alerta.',
            'Flujo de agentes para resumir evidencia y organizar la revisión del analista.',
          ],
          architecture: [
            'API FastAPI separa la inferencia, la explicación y la consulta de casos.',
            'PyTorch y scikit-learn implementan experimentos reproducibles; PostgreSQL conserva transacciones, predicciones y revisiones.',
            'LangGraph coordina pasos generativos con estado explícito sin colocarlos en la ruta crítica del modelo de riesgo.',
          ],
          tradeoffs: [
            'Los modelos secuenciales capturan comportamiento temporal, pero son más costosos de explicar que modelos tabulares simples.',
            'La IA generativa mejora la lectura del caso, aunque sus textos deben permanecer vinculados a evidencia estructurada.',
            'Priorizar sensibilidad ayuda a encontrar más riesgos, pero aumenta falsos positivos y carga de revisión.',
          ],
          outcomes: [
            'Entorno integrado para comparar señales predictivas, explicaciones y análisis asistido.',
            'Separación explícita entre la puntuación del modelo y la decisión operacional.',
            'Trazabilidad de datos, versión del modelo y evidencia presentada en cada caso.',
          ],
          nextSteps: [
            'Calibrar umbrales con costos de falsos positivos y falsos negativos.',
            'Incorporar monitoreo de drift y pruebas con analistas para evaluar la utilidad de las explicaciones.',
          ],
        },
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
        details: {
          status: 'Aplicación funcional',
          period: '2025',
          role: 'Diseño del algoritmo e implementación full stack',
          overview: [
            'Knight’s Tour hace visible la dinámica de un algoritmo genético mientras busca un recorrido que visite las 64 casillas del tablero una sola vez.',
            'La aplicación trata cada búsqueda como un job observable y permite acompañar generaciones, diversidad y estancamiento sin bloquear la interfaz.',
          ],
          features: [
            'Configuración y ejecución de búsquedas independientes con parámetros evolutivos.',
            'Visualización del mejor recorrido y de su evolución generación a generación.',
            'Telemetría en tiempo real mediante SSE, con progreso, fitness y diversidad.',
            'Detección de estancamiento y mutaciones adaptativas orientadas por la heurística de Warnsdorff.',
          ],
          architecture: [
            'Backend Node.js administra el ciclo de vida de los jobs y ejecuta el motor genético fuera de las solicitudes largas.',
            'SSE entrega eventos unidireccionales con reconexión sencilla y menor complejidad que una conexión bidireccional.',
            'SQLite persiste configuraciones, estado y resultados para recuperar experimentos y comparar ejecuciones.',
          ],
          tradeoffs: [
            'SSE se ajusta al flujo servidor-cliente, pero no resuelve interacción bidireccional como WebSocket.',
            'La heurística acelera la búsqueda y reduce rutas inviables, aunque introduce conocimiento específico del problema.',
            'Mantener poblaciones diversas consume más cómputo, pero reduce la convergencia prematura.',
          ],
          outcomes: [
            'Proceso combinatorio convertido en una experiencia visual, observable y reproducible.',
            'Separación entre motor de optimización, gestión de jobs, persistencia y presentación.',
            'Telemetría que permite entender por qué una ejecución converge o queda estancada.',
          ],
          nextSteps: [
            'Comparar operadores genéticos y estrategias de reinicio con semillas reproducibles.',
            'Añadir exportación de experimentos y visualizaciones comparativas entre ejecuciones.',
          ],
        },
      },
    ],
  },
  experience: {
    eyebrow: '04 // LÍNEA DE EXPERIENCIA',
    title: 'Una trayectoria de software, modernización y problemas reales.',
    description:
      'Más de 10 años evolucionando desde fundamentos full stack hacia sistemas de pago, arquitectura e IA aplicada.',
    professionalCode: '01 // TRAYECTORIA.LOG',
    professionalTitle: 'Trayectoria profesional',
    backgroundCode: '02 // FORMACION.INDEX',
    backgroundTitle: 'Formación y reconocimientos',
    contributionsLabel: 'Contribuciones seleccionadas',
    technologiesLabel: 'Tecnologías y contextos',
    kindLabels: {
      education: 'Formación',
      recognition: 'Reconocimiento',
    },
    items: [
      {
        period: 'DIC. 2018 — ACTUALIDAD',
        title: 'Desarrollador Sénior',
        organization: 'gsurf · Tecnología para medios de pago',
        location: 'Santa Catarina, Brasil · Remoto',
        description:
          'Trabajo en sistemas críticos de pago, conectando decisiones de arquitectura, confiabilidad operativa y necesidades de producto.',
        contributions: [
          'Liderazgo técnico en la modernización de monolitos PHP y Laravel hacia microservicios Python en AWS.',
          'Diseño y mantenimiento de APIs de pago con foco en seguridad, resiliencia, baja latencia y continuidad operativa.',
          'Optimización de bases de datos relacionales, automatización con CloudFormation y colaboración cercana con producto.',
        ],
        technologies: ['Python', 'PHP / Laravel', 'AWS', 'CloudFormation', 'APIs', 'SQL'],
        current: true,
      },
      {
        period: 'FEB. 2016 — DIC. 2018',
        title: 'Desarrollador Web PHP',
        organization: 'Eprocessos',
        location: 'Garopaba, Santa Catarina, Brasil',
        description: 'Desarrollo full stack y soporte de aplicaciones web orientadas a procesos de negocio.',
        contributions: [
          'Desarrollo y mantenimiento frontend y backend de aplicaciones web PHP.',
          'Diseño y evolución de estructuras de datos en MySQL.',
          'Análisis de requisitos, soporte técnico y resolución de incidentes para aplicaciones y usuarios.',
        ],
        technologies: ['PHP', 'MySQL', 'Frontend', 'Soporte técnico'],
      },
    ],
    background: [
      {
        period: '2026 — 2027',
        kind: 'education',
        title: 'Ingeniería de Software con IA Aplicada',
        organization: 'UNIPDS · Posgrado en curso',
        description:
          'Profundización en arquitectura, inteligencia artificial y aplicación práctica de sistemas inteligentes.',
      },
      {
        period: '2015',
        kind: 'education',
        title: 'Ciencias de la Computación',
        organization: 'Universidade do Sul de Santa Catarina · Unisul',
        description:
          'Proyecto final presentado con un sistema de identificación taxonómica basado en claves dicotómicas.',
      },
      {
        period: '2009 — 2011',
        kind: 'education',
        title: 'Técnico en Programación — Informática',
        organization: 'CEDUP',
        description: 'Formación técnica que estableció la base para el desarrollo de software.',
      },
      {
        period: '2012 · 2013',
        kind: 'recognition',
        title: '3.er lugar en la Maratón de Programación',
        organization: 'Competiciones académicas',
        description: 'Reconocimiento por razonamiento algorítmico y resolución de problemas bajo presión.',
      },
      {
        period: '2011 · 2013',
        kind: 'recognition',
        title: 'Unisul Tech Day',
        organization: 'Universidade do Sul de Santa Catarina',
        description: 'Participación en las ediciones de 2011 y 2013 del evento de tecnología.',
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
    about: [
      'Me gusta transformar problemas ambiguos en decisiones claras y software sostenible. Trabajo cerca del producto y de la operación, haciendo las preguntas correctas antes de elegir herramientas.',
      'Tengo un interés especial en arquitectura, IA aplicada y modernización de sistemas, principalmente cuando existe un desafío técnico difícil con un impacto real en el negocio.',
    ],
    highlights: [
      { value: '10+', label: 'años construyendo software' },
      { value: 'ARQ · PROD · EJEC', label: 'visión integral' },
      { value: 'PT · EN · ES', label: 'comunicación' },
    ],
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

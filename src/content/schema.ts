export type Locale = 'pt' | 'en' | 'es'

export interface NavItem {
  label: string
  href: string
}

export interface Project {
  id: string
  index: string
  name: string
  eyebrow: string
  summary: string
  challenge: string
  decision: string
  result: string
  technologies: string[]
  repository: string
  image: string
  imageAlt: string
  accent: 'cyan' | 'amber'
}

export interface Capability {
  index: string
  title: string
  description: string
  technologies: string[]
}

export interface TimelineItem {
  period: string
  title: string
  organization: string
  description: string
  current?: boolean
}

export interface Note {
  code: string
  title: string
  text: string
  projectId: string
}

export interface SiteContent {
  locale: Locale
  htmlLang: string
  path: string
  meta: {
    title: string
    description: string
  }
  skipLink: string
  brandLabel: string
  availability: string
  navigationLabel: string
  nav: NavItem[]
  languageLabel: string
  hero: {
    eyebrow: string
    titleLead: string
    titleFocus: string
    description: string
    primaryCta: string
    secondaryCta: string
    telemetryLabel: string
    telemetryValue: string
    statusLabel: string
  }
  profile: {
    eyebrow: string
    title: string
    lead: string
    body: string
    metrics: Array<{ value: string; label: string }>
  }
  capabilities: {
    eyebrow: string
    title: string
    description: string
    items: Capability[]
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    repositoryLabel: string
    challengeLabel: string
    decisionLabel: string
    resultLabel: string
    items: Project[]
  }
  experience: {
    eyebrow: string
    title: string
    items: TimelineItem[]
  }
  notes: {
    eyebrow: string
    title: string
    description: string
    items: Note[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    dialogLabel: string
    closeLabel: string
    role: string
    location: string
    photoAlt: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
    resumeLabel: string
    resumeHref: string
    resumeLanguage: string
    resumeFilename: string
  }
  footer: string
}

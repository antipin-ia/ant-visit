export const en = {
  a11y: {
    skipToContent: 'Skip to content',
    navLabel: 'Primary navigation',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greetingPrefix: 'Hi, I am',
    role: 'Frontend Developer React + Go',
    summary:
      'Mid-level+ developer with 3 years of experience building modern web apps. I specialize in React, TypeScript, and microservice architectures.',
    ctaContact: 'Contact me',
  },
  about: {
    title: 'About',
    birthdate: 'Birth date',
    location: 'Location',
    education: 'Education',
    p1:
      'My name is {fullName}, I am 23. I am a goal‑oriented and responsible frontend developer constantly striving to improve.',
    p2:
      'I am looking for a middle+/middle position. I focus on modern web apps using React, TypeScript, and microservice architecture. I have experience in large companies and greenfield projects.',
    stats: {
      years: 'Years of experience',
      companies: 'Companies',
      english: 'English',
    },
  },
  experience: {
    title: 'Experience',
    items: [
      {
        company: 'Yandex (Realty Magazine)',
        role: 'Frontend Developer',
        period: 'Sep 2024 — May 2025 (10 months)',
        summary: 'Full‑stack development. Responsible for the entire lifecycle of the real estate magazine:',
        bullets: [
          'Feature development and integrations using micro frontends and microservices',
          'Working with internal DBs (MySQL, PostgreSQL) and REST APIs',
          'Reliability and performance, e2e/unit tests and documentation',
          'SEO optimization and user metrics',
          'Working with REST and GraphQL',
        ],
        achievements:
          'Migrated the magazine microservice into the main monorepo, removed 45% of legacy code, optimized middleware/hooks, set up SSR and auth with deploy, reworked routing, boosting link collection by 1.5x and cutting maintenance costs by 50%.',
        tech: [
          'TypeScript',
          'React',
          'SSR',
          'Webpack',
          'Redux',
          'Node.js',
          'Express',
          'Next.js',
          'MySQL',
          'PostgreSQL',
          'Redis',
          'Docker',
          'CI/CD',
        ],
      },
      {
        company: 'White Board LLC',
        role: 'Fullstack Developer',
        period: 'May 2022 — Apr 2024 (2 years)',
        summary:
          'Built Microboard (Miro‑like) with real‑time collaboration and AI integration:',
        bullets: [
          'Key features: alignment guides, real‑time collaboration',
          'AI module integration: architecture and UI for content/image generation',
          'Stability improvements: Playwright e2e, session desync fixes',
          'Infra: CI/CD pipelines, Docker, custom Webpack',
          'OpenSource migration: codebase adaptation, docs, deploy',
        ],
        achievements:
          'Reduced data desync by 70% via WebSocket logic optimization. Implemented AI generation at 1000+ RPS integrated into canvas engine. Ensured smooth OpenSource migration with full CI/CD automation.',
        tech: [
          'TypeScript',
          'React',
          'Canvas',
          'WebSockets',
          'Node.js',
          'Redis',
          'Next.js',
          'Docker',
          'Webpack',
          'Playwright',
          'CI/CD',
        ],
      },
    ],
  },
  skills: {
    title: 'My skills',
    frontend: 'Frontend',
    backend: 'Backend & Databases',
    api: 'API & Integrations',
    tools: 'Tools & DevOps',
    radar: {
      title: 'Tech Radar',
      axes: ['React', 'TypeScript', 'Architecture', 'Testing', 'Redux', 'Node.js'],
      values: [5, 5, 5, 4, 5, 5],
      legendLow: 'Novice',
      legendHigh: 'Expert',
    },
  },
  projects: {
    title: 'Projects',
    items: [
      {
        title: 'Yandex Realty Magazine',
        description:
          'Full‑stack magazine with micro frontends and microservices. Performance and SEO optimization.',
        tech: ['React', 'TypeScript', 'Node.js', 'SSR', 'GraphQL'],
        icon: 'globe',
      },
      {
        title: 'Microboard (Miro‑like)',
        description:
          'Online board with real‑time collaboration and AI integrations.',
        tech: ['React', 'Canvas', 'WebSockets', 'TypeScript', 'AI Integration'],
        icon: 'database',
      },
      {
        title: 'OpenSource Migration',
        description: 'Project migration to OpenSource with CI/CD automation, docs and deploy.',
        tech: ['Docker', 'CI/CD', 'Webpack', 'Playwright', 'Documentation'],
        icon: 'code',
      },
    ],
  },
  contact: {
    title: 'Contact me',
    email: 'Email',
    preferred: 'Preferred way to contact',
    phone: 'Phone & Telegram',
    telegram: 'Telegram',
    location: 'Location',
    travel: 'Available for business trips',
    openGithub: 'Open GitHub',
  },
  footer: { madeWith: 'Made with ❤️ in React' },
  toggles: { theme: 'Theme', lang: 'Language' },
  copy: { copy: 'Copy', copied: 'Copied!' },
  cta: { hireMe: 'Hire me' },
};


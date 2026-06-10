import renaultLogo from './assets/renault.svg'
import ekodLogo from './assets/ekod.svg'

// Affiches déposées dans src/assets/posters/ — détectées automatiquement par nom de fichier
const posterFiles = import.meta.glob('./assets/posters/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})
const poster = (name) =>
  Object.entries(posterFiles).find(([path]) => path.includes(name))?.[1] ?? null

export const profile = {
  name: 'Simon Parmé',
  email: 'parmesimon@gmail.com',
  github: 'https://github.com/ParmeSimon',
  linkedin: 'https://www.linkedin.com/in/simon-parmé',
  cv: `${import.meta.env.BASE_URL}cv.pdf`,
  location: { fr: 'Le Mans, France', en: 'Le Mans, France' },
  title: {
    fr: 'Développeur Web Fullstack',
    en: 'Fullstack Web Developer',
  },
  tagline: {
    fr: 'Alternant développeur chez Renault Group — Expert en Architecture et Développement Logiciel (Bac+5) à EKOD.',
    en: 'Apprentice developer at Renault Group — pursuing an Expert in Software Architecture & Development degree (Master’s level) at EKOD.',
  },
  about: {
    fr: 'Développeur web en alternance chez Renault Group depuis 2023, je conçois des applications web industrielles de bout en bout : architecture, frontend React, backend Symfony, tests et mise en production. Je poursuis chez Renault en alternance jusqu’en 2028, dans le cadre de la formation Expert en Architecture et Développement Logiciel (Bac+5) à EKOD. À côté, je construis des apps mobiles Flutter et des projets perso pour explorer de nouvelles stacks. Permis B, anglais B2+, et un faible pour les trails de 11,2 km.',
    en: 'Web developer apprentice at Renault Group since 2023, I build industrial web applications end to end: architecture, React frontend, Symfony backend, testing and production deployment. I’m continuing at Renault on a work-study contract through 2028, as part of the Expert in Software Architecture & Development programme (Master’s level) at EKOD. On the side, I build Flutter mobile apps and personal projects to explore new stacks. Driving licence, B2+ English, and a soft spot for 11.2 km trail runs.',
  },
}

export const projects = [
  {
    name: 'Tchao',
    year: '2026',
    type: { fr: 'App mobile & web', en: 'Mobile & web app' },
    stack: ['Flutter', 'Firebase', 'Stripe Connect', 'Cloud Functions', 'TypeScript'],
    desc: {
      fr: 'Le pot de départ, sans la prise de tête. Cagnottes collectives avec paiement Stripe Connect, hub public partageable, livre d’or et clôture PDF. Auth magic-link, Cloud Functions Node 20.',
      en: 'Farewell gift pools without the hassle. Group money pools with Stripe Connect payments, shareable public hub, guestbook and PDF closure report. Magic-link auth, Node 20 Cloud Functions.',
    },
    link: 'https://github.com/jordanbmrd/tchao-app',
    private: true,
  },
  {
    name: 'WorkingTime',
    year: '2026',
    type: { fr: 'App mobile', en: 'Mobile app' },
    stack: ['Flutter', 'Firebase', 'Provider', 'Firestore'],
    desc: {
      fr: 'Suivi du temps de travail iOS & Android. Multi-rôles (admin / employeur), synchronisation Firestore, mode hors-ligne, multilingue et interface responsive.',
      en: 'iOS & Android working-time tracker. Multi-role (admin / employer), Firestore sync, offline mode, multilingual and responsive interface.',
    },
    link: 'https://github.com/ParmeSimon/WorkingTime',
  },
  {
    name: 'BeConnect',
    year: '2025',
    type: { fr: 'Projet fil rouge — équipe de 3', en: 'Capstone project — team of 3' },
    stack: ['Symfony', 'Next.js', 'TypeScript', 'Docker', 'PHP'],
    desc: {
      fr: 'Plateforme web fil rouge EKOD, construite en équipe avec Eva Ferrand et Vincent Desoeuvre. API REST Symfony avec migrations et Docker Compose, frontend Next.js en TypeScript.',
      en: 'EKOD capstone web platform, built as a team with Eva Ferrand and Vincent Desoeuvre. Symfony REST API with migrations and Docker Compose, Next.js TypeScript frontend.',
    },
    link: 'https://github.com/ParmeSimon/BeConnect',
  },
  {
    name: 'BurnerConfession',
    year: '2026',
    type: { fr: 'App mobile', en: 'Mobile app' },
    stack: ['Flutter', 'Firebase', 'Firestore', 'Cloud Storage'],
    desc: {
      fr: 'Talkie-walkie audio éphémère et anonyme : 10 secondes de confession envoyées à un inconnu au hasard, autodétruites après écoute. Tirage aléatoire par transactions Firestore atomiques.',
      en: 'Ephemeral anonymous audio walkie-talkie: a 10-second confession sent to a random stranger, self-destructing once played. Random draw via atomic Firestore transactions.',
    },
    link: 'https://github.com/ParmeSimon/BurnerConfession',
  },
  {
    name: 'CompanyTransportManager',
    year: '2026',
    type: { fr: 'Jeu de gestion', en: 'Management game' },
    stack: ['Unity', 'C#', 'OpenRouteService', 'Python'],
    desc: {
      fr: 'Jeu de gestion logistique sous Unity : 873 villes dans 150 pays, contrats de transport, tournées multi-arrêts et itinéraires routiers réels via OpenRouteService.',
      en: 'Unity logistics management game: 873 cities across 150 countries, transport contracts, multi-stop routes and real road itineraries via OpenRouteService.',
    },
    link: 'https://github.com/ParmeSimon/CompanyTransportManager',
  },
]

export const otherProjects = [
  { name: 'CitadelExpedition', stack: 'C#', link: 'https://github.com/ParmeSimon/CitadelExpedition' },
  { name: 'campus-party-planner', stack: 'JavaScript', link: 'https://github.com/ParmeSimon/campus-party-planner' },
  { name: 'tp7-cine-club', stack: 'Java', link: 'https://github.com/ParmeSimon/tp7-cine-club' },
  { name: 'codeBustersTp4', stack: 'JavaScript', link: 'https://github.com/ParmeSimon/codeBustersTp4' },
]

export const experiences = [
  {
    role: {
      fr: 'Expert en Architecture et Développement Logiciel',
      en: 'Expert in Software Architecture & Development',
    },
    company: 'Renault Group',
    logo: renaultLogo,
    place: 'Le Mans',
    period: { fr: 'Sept. 2026 — Sept. 2028', en: 'Sept. 2026 — Sept. 2028' },
    upcoming: true,
    points: {
      fr: [
        'Poursuite en alternance dans le cadre du Bac+5 Expert en Architecture et Développement Logiciel (EKOD)',
        'Architecture logicielle, DevOps et cloud sur les applications web industrielles',
        'Coordination technique et accompagnement de l’équipe de développement',
      ],
      en: [
        'Continuing on a work-study contract as part of the Expert in Software Architecture & Development degree (EKOD)',
        'Software architecture, DevOps and cloud on industrial web applications',
        'Technical coordination and support of the development team',
      ],
    },
  },
  {
    role: { fr: 'Concepteur et Développeur d’Applications', en: 'Application Designer & Developer' },
    company: 'Renault Group',
    logo: renaultLogo,
    place: 'Le Mans',
    period: { fr: 'Sept. 2025 — Sept. 2026', en: 'Sept. 2025 — Sept. 2026' },
    points: {
      fr: [
        'Pilotage du développement de sites web industriels en mode Agile',
        'Conception d’architectures techniques et choix des technologies',
        'Tests techniques et fonctionnels, manuels et automatisés',
        'Déploiement en production : serveurs, CI/CD',
        'Analyse de problématiques complexes, animation de réunions techniques',
      ],
      en: [
        'Leading the development of industrial websites using Agile',
        'Designing technical architectures and selecting technologies',
        'Manual and automated technical & functional testing',
        'Production deployment: servers, CI/CD',
        'Analysing complex technical issues, leading technical meetings',
      ],
    },
  },
  {
    role: { fr: 'Web Concepteur', en: 'Web Designer & Developer' },
    company: 'Renault Group',
    logo: renaultLogo,
    place: 'Le Mans',
    period: { fr: 'Sept. 2023 — Sept. 2025', en: 'Sept. 2023 — Sept. 2025' },
    points: {
      fr: [
        'Développement d’applications web industrielles en mode Agile',
        'Interfaces HTML/CSS et montée en compétence sur React',
        'Modules backend en PHP (Symfony)',
        'Rédaction de spécifications techniques',
      ],
      en: [
        'Building industrial web applications using Agile',
        'HTML/CSS interfaces and upskilling on React',
        'Backend modules in PHP (Symfony)',
        'Writing technical specifications',
      ],
    },
  },
  {
    role: { fr: 'Intérimaire Développeur Web', en: 'Temp Web Developer' },
    company: 'Renault Group',
    logo: renaultLogo,
    place: 'Le Mans',
    period: { fr: 'Juin 2023 — Août 2023', en: 'June 2023 — Aug. 2023' },
    points: {
      fr: [
        'Application web en HTML / CSS / JavaScript',
        'Découverte du backend PHP et des pratiques Agile',
        'Participation à la définition de tests fonctionnels',
      ],
      en: [
        'Web application in HTML / CSS / JavaScript',
        'First steps in PHP backend and Agile practices',
        'Contributing to functional test definition',
      ],
    },
  },
]

export const education = [
  {
    school: 'EKOD',
    logo: ekodLogo,
    degree: {
      fr: 'Expert en Architecture et Développement Logiciel — Bac+5 (RNCP niv. 7)',
      en: 'Expert in Software Architecture & Development — Master’s level (EQF 7)',
    },
    place: 'Le Mans',
    period: '2026 — 2028',
  },
  {
    school: 'EKOD',
    logo: ekodLogo,
    degree: {
      fr: 'Concepteur et Développeur d’Applications',
      en: 'Application Designer & Developer',
    },
    place: 'Le Mans',
    period: '2025 — 2026',
  },
  {
    school: 'EKOD',
    logo: ekodLogo,
    degree: { fr: 'Web Concepteur', en: 'Web Designer & Developer' },
    place: 'Le Mans',
    period: '2023 — 2025',
  },
]

export const hackathons = [
  {
    name: 'AI For Business Hackathon',
    date: { fr: '18 avril 2026', en: 'April 18, 2026' },
    rank: { fr: '1ère place', en: '1st place' },
    subject: 'BNP Lumen',
    place: { fr: 'Audencia, Nantes', en: 'Audencia, Nantes' },
    team: ['Jordan Baumard', 'Ubeyd Turhan'],
    stack: ['Mistral AI', 'React + Vite', 'Python', 'FastAPI', 'AWS'],
    desc: {
      fr: 'Les conseillers bancaires passent plus de temps à préparer les dossiers qu’à conseiller leurs clients. BNP Lumen y répond avec 4 agents IA spécialisés : analyse approfondie des dossiers clients, détection de signaux de tension et préparation de rendez-vous avec génération d’ordre du jour.',
      en: 'Bank advisors spend more time preparing files than advising their clients. BNP Lumen tackles this with 4 specialised AI agents: deep client-file analysis, tension-signal detection and meeting preparation with agenda generation.',
    },
    link: 'https://www.linkedin.com/posts/simon-parm%C3%A9_%F0%9D%97%AA%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%BB%F0%9D%97%B2%F0%9D%97%BF%F0%9D%98%80-%F0%9D%97%BC%F0%9D%97%B3-%F0%9D%98%81%F0%9D%97%B5%F0%9D%97%B2-%F0%9D%97%94%F0%9D%97%9C-%F0%9D%97%99%F0%9D%97%BC%F0%9D%97%BF-%F0%9D%97%95-share-7452238090859024385-pfmZ/',
    image: poster('ai-for-business'),
  },
  {
    name: 'HAKS 2026 — Hackathon Airbus × IBM × AWS',
    date: { fr: '11 juin 2026', en: 'June 11, 2026' },
    rank: null, // pas encore de résultat
    upcoming: true,
    subject: { fr: 'IA pour l’aéronautique', en: 'AI for aviation' },
    place: { fr: 'Télécom Paris, Palaiseau', en: 'Télécom Paris, Palaiseau' },
    team: [],
    stack: ['IBM Bob', 'AWS'],
    desc: {
      fr: 'Hackathon organisé par KRYPTOSPHERE® : une journée pour résoudre des défis réels de l’industrie aérospatiale proposés par Airbus, avec l’outil de vibe coding « Bob » d’IBM et l’infrastructure cloud AWS. Pitch devant jury, 5 000 € de prix.',
      en: 'Hackathon by KRYPTOSPHERE®: one day solving real aerospace-industry challenges set by Airbus, using IBM’s vibe-coding tool “Bob” and AWS cloud infrastructure. Jury pitch, €5,000 in prizes.',
    },
    link: 'https://luma.com/pl4jzdh8',
    image: poster('ai-for-aviation'),
  },
]

export const skills = {
  main: ['JavaScript', 'React', 'PHP', 'Symfony', 'Flutter', 'Firebase', 'HTML / CSS', 'SQL'],
  tools: ['TypeScript', 'Next.js', 'Dart', 'C#', 'Unity', 'Linux', 'Git', 'Docker', 'CI/CD', 'Stripe'],
  langs: [
    { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
    { name: { fr: 'Anglais', en: 'English' }, level: 'B2+' },
  ],
}

export const interests = {
  fr: ['Trail — 11,2 km', 'Tennis de table', 'Football', 'Cyclisme'],
  en: ['Trail running — 11.2 km', 'Table tennis', 'Football', 'Cycling'],
}

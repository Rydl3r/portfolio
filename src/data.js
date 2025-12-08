// Import images
import profileImage from './assets/images/profile.jpeg';
import globalLogicLogo from './assets/images/globallogic.png';
import uspacyLogo from './assets/images/uspacy.png';
import fastAndCuriousLogo from './assets/images/fast_and_curious.jpg';
import upworkLogo from './assets/images/upwork.png';
import rapiraThumbnail from './assets/images/rapira.png';
import cvbuildaiThumbnail from './assets/images/cvbuildai.png';
import uspacyThumbnail from './assets/images/uspacy.webp';
import feodalThumbnail from './assets/images/feodal.png';
import carHubThumbnail from './assets/images/car_hub.png';
import youtubeThumbnail from './assets/images/youtube.png';

const header = {
  homepage: '#',
  title: 'Ivan Mukoied',
};

const about = {
  name: 'Ivan Mukoied',
  role: 'Frontend Developer',
  tagline: 'Building the web, one pixel at a time',
  description:
    "I'm a frontend developer who's spent the last 4+ years turning coffee into code and ideas into interactive experiences. Currently crafting digital solutions at HumanSpark, where I get to work on projects that actually matter. From scrappy freelance projects to enterprise-level platforms serving 550,000+ businesses, I've learned that great frontend development isn't just about making things look pretty – it's about creating experiences that users actually want to use.",
  highlights: [
    '4+ years of React & TypeScript expertise',
    'Enterprise-level platform experience',
    'Complex systems made user-friendly',
    'Seamless team collaboration',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/rydler/',
    github: 'https://github.com/Rydl3r',
  },
  profileImage: profileImage,
};

const experience = [
  {
    company: 'HumanSpark',
    role: 'Frontend Developer',
    period: 'Sep 2025 - Present',
    location: 'Cyprus',
    description: 'Building innovative solutions with modern frontend technologies.',
    technologies: ['React', 'TypeScript', 'Next.js'],
  },
  {
    company: 'GlobalLogic',
    role: 'Frontend Developer',
    period: 'Apr 2024 - Sep 2025',
    location: 'Kyiv, Ukraine',
    description:
      "Working on one of the industry's most secure accounts payable automation solutions, building interfaces that handle millions in transactions daily. Led the migration from legacy JSP/Backbone/Marionette architecture to modern React, maintaining rock-solid security standards for 550,000+ businesses.",
    achievements: [
      'Migrated critical payment flows to React',
      'Improved cross-browser compatibility by 95%',
      'Implemented comprehensive testing with Jest and Cypress',
    ],
    technologies: ['React', 'TypeScript', 'Tanstack Query', 'Jest', 'Cypress'],
    logo: globalLogicLogo,
  },
  {
    company: 'Uspacy',
    role: 'Frontend Developer',
    period: 'Sep 2022 - Apr 2024',
    location: 'Ukraine',
    description:
      "Built the frontend for Ukraine's answer to Slack meets Salesforce – an all-in-one platform helping companies streamline everything from internal chat to customer management. Worked on diverse microservices including real-time chat, CRM workflows, task management, and telephony integration.",
    achievements: [
      'Delivered 5+ microservices on schedule',
      'Integrated complex third-party telephony solutions',
      'Maintained 90%+ test coverage across all modules',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'MUI', 'Module Federation'],
    logo: uspacyLogo,
  },
  {
    company: 'Fast&Curious',
    role: 'Frontend Developer',
    period: 'Jan 2022 - Jul 2022',
    location: 'Kyiv, Ukraine',
    description:
      'Worked on "Feodal" – think Google Maps meets agricultural science. Built complex land visualization tools helping Ukrainian farmers manage thousands of hectares through automated audits and real-time monitoring.',
    achievements: [
      'Implemented advanced geospatial visualizations',
      'Migrated entire codebase to modern React patterns',
      'Delivered pixel-perfect mathematical calculations for land management',
    ],
    technologies: ['React', 'TypeScript', 'Mapbox', 'Firebase'],
    logo: fastAndCuriousLogo,
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: 'Jun 2019 - Feb 2021',
    location: 'Remote',
    description:
      'My "learning in the wild" phase – hustling on Upwork and other platforms, taking on everything from simple landing pages to full-stack applications. This was where I learned that good code is just half the battle; clear communication and meeting client expectations matter just as much.',
    achievements: [
      'Completed 20+ projects with 100% client satisfaction',
      'Expanded technical stack from vanilla JS to React ecosystem',
      'Achieved advanced English proficiency',
    ],
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Firebase'],
    logo: upworkLogo,
  },
];

const projects = [
  {
    name: 'Uspacy',
    description:
      'All-in-one business platform for communication, collaboration, and CRM. Served 100K+ users across Ukraine and internationally.',
    stack: ['React', 'TypeScript', 'Redux', 'MUI', 'Module Federation'],
    livePreview: 'https://uspacy.com/',
    image: uspacyThumbnail,
  },
  {
    name: 'AI Resume Builder',
    description:
      'AI-powered resume builder that helps create professional resumes with intelligent content suggestions and PDF export.',
    stack: ['Next.js', 'TypeScript', 'Generative AI', 'Shadcn', 'PostgreSQL'],
    sourceCode: 'https://github.com/Rydl3r/cvbuildai',
    livePreview: 'https://cvbuildai.vercel.app/',
    image: cvbuildaiThumbnail,
  },
  {
    name: 'Feodal',
    description:
      'Agricultural land management platform with automated audits, geospatial visualization, and real-time monitoring for Ukrainian farmers.',
    stack: ['React', 'Mapbox', 'Firebase', 'Tailwind'],
    livePreview: 'https://feodal.online/',
    image: feodalThumbnail,
  },
  {
    name: 'Rapira',
    description:
      'E-commerce platform for professional nail service tools and accessories manufacturer.',
    stack: ['React', 'TypeScript', 'Firebase', 'Chakra UI'],
    livePreview: 'https://rapira.com.ua/',
    image: rapiraThumbnail,
  },
  {
    name: 'Car Hub',
    description:
      'Cars catalogue app with advanced filtering to find vehicles matching your needs and budget.',
    stack: ['Next.js', 'HeadlessUI', 'Tailwind', 'Cars API'],
    sourceCode: 'https://github.com/Rydl3r/car-hub',
    livePreview: 'https://car-hub-three-psi.vercel.app/',
    image: carHubThumbnail,
  },
  {
    name: 'YouTube Clone',
    description:
      'A reimagination of YouTube with focus on modern UI/UX patterns and responsive design.',
    stack: ['React', 'YouTube API', 'MUI'],
    sourceCode: 'https://github.com/Rydl3r/youtube-clone',
    livePreview: 'https://youtube-clone-xi-roan.vercel.app/',
    image: youtubeThumbnail,
  },
];

const skills = {
  core: [
    { name: 'React', level: 'expert' },
    { name: 'TypeScript', level: 'expert' },
    { name: 'JavaScript', level: 'expert' },
    { name: 'Next.js', level: 'proficient' },
    { name: 'HTML5', level: 'expert' },
    { name: 'CSS3', level: 'expert' },
  ],
  stateManagement: [
    { name: 'Redux', level: 'expert' },
    { name: 'Tanstack Query', level: 'proficient' },
    { name: 'Recoil', level: 'proficient' },
    { name: 'MobX', level: 'familiar' },
    { name: 'Zustand', level: 'familiar' },
    { name: 'Context API', level: 'expert' },
  ],
  styling: [
    { name: 'Material UI', level: 'expert' },
    { name: 'Tailwind CSS', level: 'proficient' },
    { name: 'Shadcn/ui', level: 'proficient' },
    { name: 'Chakra UI', level: 'proficient' },
    { name: 'Styled Components', level: 'proficient' },
    { name: 'SCSS/Sass', level: 'proficient' },
  ],
  testing: [
    { name: 'Jest', level: 'proficient' },
    { name: 'Cypress', level: 'proficient' },
    { name: 'React Testing Library', level: 'proficient' },
    { name: 'Playwright', level: 'familiar' },
  ],
  tools: [
    { name: 'Git', level: 'expert' },
    { name: 'Webpack', level: 'proficient' },
    { name: 'Vite', level: 'proficient' },
    { name: 'GraphQL', level: 'proficient' },
    { name: 'REST APIs', level: 'expert' },
    { name: 'Firebase', level: 'proficient' },
    { name: 'Docker', level: 'familiar' },
    { name: 'CI/CD', level: 'familiar' },
  ],
  bestPractices: [
    { name: 'Performance Optimization', level: 'proficient' },
    { name: 'Accessibility (a11y)', level: 'proficient' },
    { name: 'Responsive Design', level: 'expert' },
    { name: 'Code Review', level: 'expert' },
    { name: 'Agile/Scrum', level: 'proficient' },
    { name: 'Clean Code', level: 'expert' },
  ],
};

const contact = {
  email: '1rydler@gmail.com',
  headline: "Let's build something awesome together",
  description:
    "Always up for connecting with fellow developers, discussing the latest in frontend tech, or debating whether CSS-in-JS is the future or just a phase we're going through.",
};

const navItems = [
  { id: 'experience', label: 'Experience', condition: () => experience?.length > 0 },
  { id: 'projects', label: 'Projects', condition: () => projects?.length > 0 },
  { id: 'skills', label: 'Skills', condition: () => !!skills },
  { id: 'contact', label: 'Contact', condition: () => !!contact?.email, isCta: true },
];

const skillCategories = [
  { key: 'core', title: 'Core Technologies', icon: '⚛️' },
  { key: 'stateManagement', title: 'State Management', icon: '🔄' },
  { key: 'styling', title: 'UI & Styling', icon: '🎨' },
  { key: 'testing', title: 'Testing', icon: '🧪' },
  { key: 'tools', title: 'Tools & DevOps', icon: '🛠️' },
  { key: 'bestPractices', title: 'Best Practices', icon: '✨' },
];

const levelLabels = {
  expert: { label: 'Expert', className: 'levelExpert' },
  proficient: { label: 'Proficient', className: 'levelProficient' },
  familiar: { label: 'Familiar', className: 'levelFamiliar' },
};

const footer = {
  author: about.name,
  github: about.social.github,
};

export {
  header,
  about,
  experience,
  projects,
  skills,
  contact,
  navItems,
  skillCategories,
  levelLabels,
  footer,
};

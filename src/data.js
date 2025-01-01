const header = {
  homepage: 'https://portfolio-two-sigma-83.vercel.app/',
  title: 'Rydler.',
};

const about = {
  name: 'Ivan Mukoied',
  role: 'Front End Developer',
  description:
    "I'm a Frontend Developer passionate about creating captivating user experiences. With expertise in modern website-building tools, I specialize in crafting visually stunning and functional websites. Let's collaborate to bring your digital vision to life!",
  social: {
    linkedin: 'https://www.linkedin.com/in/rydler/',
    github: 'https://github.com/Rydl3r',
  },
};

const projects = [
  {
    name: 'Uspacy',
    description: 'Communication, collaboration and CRM. All-in-one.',
    stack: [
      'React',
      'Typescript',
      'Redux',
      'React Router',
      'MUI',
      'Webpack ModuleFederationPlugin',
    ],
    livePreview: 'https://uspacy.com/',
  },
  {
    name: 'Resume builder',
    description: 'AI powered resume builder',
    stack: [
      'Next',
      'Typescript',
      'Generative AI',
      'PDF generation',
      'Shadcn',
      'PostgreSQL + Drizzle',
    ],
    sourceCode: 'https://github.com/Rydl3r/cvbuildai',
    livePreview: 'https://cvbuildai.vercel.app/',
  },
  {
    name: 'Feodal',
    description:
      'Feodal.Online — automated audit of land plots, visualization, land bank monitoring and obtaining information from DZK and DRRP registers in one user window.',
    stack: ['React', 'Firebase', 'React Router', 'Tailwind'],
    livePreview: 'https://feodal.online/',
  },
  {
    name: 'Car Hub',
    description:
      'Cars catalogue app, where you can find a car for your needs and budget',
    stack: ['Next', 'HeadlessUI', 'Tailwind', 'Cars API'],
    sourceCode: 'https://github.com/Rydl3r/car-hub',
    livePreview: 'https://car-hub-three-psi.vercel.app/',
  },
  {
    name: 'Questions poll',
    description:
      'A simple poll app where you can answer questions and see the results',
    stack: ['Next', 'Typescript', 'Tailwind'],
    sourceCode: 'https://github.com/Rydl3r/questions-poll',
    livePreview: 'https://questions-poll.vercel.app/',
  },
  {
    name: 'Travel Hub',
    description:
      'A travel app website that allows you to find the best places to travel to.',
    stack: ['HTML', 'CSS', 'JS'],
    sourceCode: 'https://github.com/Rydl3r/Travel-Hub',
    livePreview: 'https://travel-hub-six.vercel.app/',
  },
  {
    name: 'Youtube clone',
    description:
      'A reimagination of Youtube with a focus on the overall UI and UX.',
    stack: ['React', 'Youtube API', 'MUI'],
    sourceCode: 'https://github.com/Rydl3r/youtube-clone',
    livePreview: 'https://youtube-clone-xi-roan.vercel.app/',
  },
  {
    name: 'Resume builder - simple version',
    description:
      'A simple resume builder app that allows you to create a resume with a few clicks.',
    stack: ['HTML', 'CSS', 'JS', 'JQuery'],
    sourceCode: 'https://github.com/Rydl3r/resume-builder',
    livePreview: 'https://resume-builder-zeta-drab.vercel.app/',
  },
  {
    name: 'Rayal Park',
    description:
      'A simple hotel landing page with a collection of information about the hotel, rooms, and services.',
    stack: ['HTML', 'CSS', 'JS'],
    sourceCode: 'https://github.com/Rydl3r/Rayal-Park',
    livePreview: 'https://rayal-park-ten.vercel.app/',
  },
];

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next',
  'Redux',
  'Recoil',
  'MobX',
  'MUI',
  'Tailwind',
  'HeadlessUI',
  'GraphQL',
  'Express',
  'Git',
  'Jest',
];

const contact = {
  email: '1rydler@gmail.com',
};

export { header, about, projects, skills, contact };

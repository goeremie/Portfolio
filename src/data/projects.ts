import aiPreview from '../assets/AI2.png';
import hireHorizonPreview from '../assets/HH.jpg';
import sunbakedPreview from '../assets/SBP1.png';
import TwoD from '../assets/2d.png';
import ThreeD from '../assets/3d.png';
export type ProjectCategory = 'Software' | 'Client website' | 'Design' | 'Game';
export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  contributions: string[];
  stack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  gameUrl?: string;
  gameInstructions?: string[];
};

export const projects: Project[] = [
  {
    slug: 'sunbaked-pastries',
    number: '01',
    title: 'SunBaked Pastries',
    subtitle: 'A responsive website for a local baking business',
    category: 'Client website',
    year: '2026',
    summary:
      'A business website showcasing the brand, baked goods, menu, gallery, catering information, and online ordering experience.',
    problem:
      'Customers needed an accessible way to discover the business, browse its products, review ordering information, and get in touch.',
    solution:
      'Built a responsive website with dedicated pages for the business, menu, gallery, and catering, alongside an ordering flow designed to make product selection and pickup or delivery details easier to understand.',
    contributions: [
      'Built the website interface and responsive layouts',
      'Applied brand-aligned typography, colors, and visual styling',
      'Organized menu items, product options, and gallery content',
      'Implemented customer-facing ordering and email confirmation functionality',
    ],
    stack: ['React', 'Vite', 'Netlify', 'EmailJS', 'Responsive design'],
    image: sunbakedPreview,
    liveUrl: 'https://sunbakedpastries.netlify.app/',
  },
  {
    slug: 'ai-training-quiz-builder',
    number: '02',
    title: 'AI Training Quiz Builder',
    subtitle: 'AI-assisted quiz generation for learning and review',
    category: 'Software',
    year: '2025',
    summary:
      'An educational web application designed to help turn training and disaster-preparedness materials into practice quizzes.',
    problem:
      'Creating practice quizzes from training materials manually can be time-consuming, making it harder to produce and update learning activities.',
    solution:
      'Developed a web application concept that uses AI-assisted quiz generation alongside Firebase-powered user authentication and data services.',
    contributions: [
      'Developed the React user interface',
      'Integrated Firebase authentication and data services',
      'Connected the application workflow to AI-assisted quiz generation',
      'Considered accessibility through voice-command interactions',
      'Note: Due to privacy reasons from Innomergence the source code and website cannot be currently viewed'
    ],
    stack: ['React', 'TypeScript', 'Firebase', 'OpenAI'],
    image: aiPreview,
  },
  {
    slug: 'hire-horizon',
    number: '03',
    title: 'Hire Horizon',
    subtitle: 'An Android app for tracking job applications',
    category: 'Software',
    year: '2025',
    summary:
      'An Android application designed to help job seekers organize applications, monitor their progress, and keep important job-search information in one place.',
    problem:
      'Managing multiple job applications can make it difficult to remember application statuses, track progress, and stay organized throughout a job search.',
    solution:
      'Designed a structured mobile experience with application management, summary statistics, and dedicated screens for reviewing and maintaining job-search information.',
    contributions: [
      'Developed Android user interface components',
      'Structured the application using the MVVM architecture',
      'Implemented application tracking screens and workflows',
      'Created summary and statistics views',
    ],
    stack: ['Kotlin', 'Android', 'MVVM', 'ViewBinding'],
    image: hireHorizonPreview,
    repoUrl: 'https://github.com/AbdulkarimMziya/job_application_tracker',
  },
  {
    slug: 'squash-the-creeps-3d',
    number: '04',
    title: 'Squash the Creeps',
    subtitle: 'A 3D arcade game built with Godot',
    category: 'Game',
    year: '2026',
    summary:
      'A 3D arcade game where players move around an arena, avoid incoming enemies, and jump on them to score points.',
    problem:
      'The project explores real-time gameplay, player movement, collision detection, and interactive 3D environments.',
    solution:
      'Built a playable 3D game with Godot and prepared a browser-based version so visitors can experience it easily.',
    contributions: [
      'Implemented 3D player movement and jumping',
      'Worked with enemy spawning and collision interactions',
      'Prepared and tested a browser-playable Web export',
    ],
    stack: ['Godot', 'GDScript', '3D game development', 'Web export'],
    image: ThreeD,
    gameUrl: '/games/squash-the-creeps-3d/index.html',
    gameInstructions: [
  'W / ↑ — Move forward',
  'S / ↓ — Move backward',
  'A / ← — Move left',
  'D / → — Move right',
  'Spacebar — Jump',
  'Gamepad: Left joystick to move, A button to jump.',
  'Jump on the creeps to squash them and score points.','Note: This game uses keyboard controls and is not currently optimized for touchscreen devices.'],
  },
  {
  slug: 'dodge-the-creeps-2d',
  number: '05',
  title: 'Dodge the Creeps',
  subtitle: 'A 2D arcade game built with Godot',
  category: 'Game',
  year: '2026',
  summary:
    'A 2D arcade game where players move through the environment, avoid incoming enemies, and survive for as long as possible.',
  problem:
    'The project explores the fundamentals of 2D game development, including player movement, enemy spawning, collision detection, and real-time gameplay.',
  solution:
    'Built a playable 2D game with Godot and prepared a browser-based version, allowing visitors to experience the gameplay directly on the web.',
  contributions: [
    'Implemented 2D player movement and keyboard controls',
    'Worked with enemy spawning and collision detection',
    'Developed the gameplay loop and survival mechanics',
    'Prepared and tested a browser-playable Web export',
  ],
  stack: ['Godot', 'GDScript', '2D game development', 'Web export'],
  image: TwoD,
  gameUrl: '/games/first2d/index.html',
  gameInstructions: [
    '↑ / Up Arrow — Move up',
    '↓ / Down Arrow — Move down',
    '← / Left Arrow — Move left',
    '→ / Right Arrow — Move right',
    'Avoid the creeps and survive for as long as possible.',
    'Note: This game uses keyboard controls and is not currently optimized for touchscreen devices.',
  ],
},
];
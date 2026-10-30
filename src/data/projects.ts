import aiPreview from '../assets/AI2.png';
import hireHorizonPreview from '../assets/HH.jpg';
import sunbakedPreview from '../assets/SBP1.png';

export type ProjectCategory = 'Software' | 'Client website' | 'Design';
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
};

// Replace links, dates, imagery and descriptions with verified project details.
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
];

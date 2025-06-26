export const projects = [
  {
    id: 'love-survival-kit',
    title: 'Love Survival Kit',
    description:
      'A playful relationship quiz app built with SvelteKit and Tailwind. It challenges users with humorous “relationship trial” questions and delivers dramatic results.',
    featured: true,
    image: '/images/projects/love-survival-kit.jpg',
    technologies: ['SvelteKit', 'Tailwind', 'Vercel'],
    category: 'Web App',
    github: 'https://github.com/Duardz/love-survival-kit',
    demo: 'https://love-survival-kit.vercel.app/',
    details: {
      overview:
        'A fun web app that simulates relationship trials by asking quirky questions. The project demonstrates creativity, frontend UX, and dynamic rendering using SvelteKit.',
      features: [
        'Dynamic question-based interface',
        'Funny and playful result logic',
        'Responsive design',
        'Deployed on Vercel',
        'Built with SvelteKit'
      ],
      techStack: [
        'SvelteKit for full-stack framework',
        'Tailwind CSS for styling',
        'Vercel for deployment',
        'GitHub for version control'
      ],
      challenges:
        'Balancing humor and functionality while ensuring responsive design and fast load times.',
      results:
        'Delivered a fun app that resonates with users and demonstrates practical SvelteKit skills.'
    }
  },
  {
    id: 'papa-juns-pos',
    title: "Papa Jun's POS",
    description:
      'A lightweight point-of-sale system built with SvelteKit and Firebase, designed for small businesses. Currently, only the frontend is available for demo purposes. Users can request access to a full test environment with backend functionality.',
    featured: true,
    image: '/images/projects/papajuns-pos.jpg',
    technologies: ['SvelteKit', 'Tailwind', 'Vercel', 'Firebase'],
    category: 'POS System',
    github: 'https://github.com/Duardz/Papa-Juns-POS',
    demo: 'https://papa-juns-pos.vercel.app/',
    details: {
      overview:
        "Papa Jun's POS is a custom-made system for managing orders and inventory. Built with modern web tools and focused on simplicity for local business use.",
      features: [
        'Order and inventory management',
        'Real-time data via Firebase',
        'Simple, intuitive UI',
        'Responsive and mobile-friendly',
        'Hosted on Vercel'
      ],
      techStack: [
        'SvelteKit for frontend and routing',
        'Tailwind CSS for UI',
        'Firebase for real-time DB and auth',
        'Vercel for deployment'
      ],
      challenges:
        'Integrating Firebase with SvelteKit while maintaining real-time reactivity and minimal latency.',
      results:
        'A lightweight POS that’s fast, easy to use, and ready for real-world application.'
    }
  },
  {
  id: 'power-zone',
  title: 'Power Zone',
  description:
    'A gym website built with SvelteKit and Firebase, featuring membership registration, a modern admin dashboard, and responsive UI for mobile and desktop.',
  featured: true,
  image: '/images/projects/power-zone.jpg', // replace with your actual image path
  technologies: ['SvelteKit', 'Tailwind', 'Firebase', 'Vercel'],
  category: 'Website',
  github: null, // update if private or not hosted
  demo: 'https://power-zone.vercel.app/', // replace if different or coming soon
  details: {
    overview:
      'Power Zone is a modern gym website focused on seamless user experience for both clients and admins. It includes features like contact forms, real-time data with Firebase, and an elegant design using Tailwind CSS.',
    features: [
      'Mobile-first responsive design',
      'Membership and contact forms',
      'Admin dashboard with Firebase integration',
      'Animated UI with Tailwind transitions',
      'Deployed on Vercel'
    ],
    techStack: [
      'SvelteKit for building dynamic routes and components',
      'Tailwind CSS for consistent and clean design',
      'Firebase for real-time database and auth',
      'Vercel for easy and fast deployment'
    ],
    challenges:
      'Handling form validation, Firebase integration, and mobile responsiveness while keeping the experience smooth across devices.',
    results:
      'Launched a stylish, functional gym website that is ready for both customer engagement and admin use on mobile or desktop.'
  }
},
{
  id: 'axionark-hacking-journey',
  title: 'Axionark: The Hacking Journey',
  description:
    'A gamified cybersecurity journaling app built with SvelteKit and Firebase, where users log their ethical hacking progress, earn XP, and level up through daily learning goals.',
  featured: true,
  image: '/images/projects/axionark.jpg',
  technologies: ['SvelteKit', 'Tailwind', 'Firebase', 'Vercel'],
  category: 'App',
  github: 'https://github.com/Duardz/axionark',
  demo: 'https://axionark.vercel.app/',
  details: {
    overview:
      'Axionark is a gamified self-paced cybersecurity learning app that blends journaling with progression systems. Users document their hacking journey, define concepts in their own words, and gain XP as they reach milestones and complete daily objectives.',
    features: [
      'Gamified XP and leveling system',
      'Custom journal entries tied to learning goals',
      'Personal knowledge base with tags and search',
      'Firebase authentication and real-time Firestore database',
      'Responsive design for mobile and desktop'
    ],
    techStack: [
      'SvelteKit for reactive components and routing',
      'Tailwind CSS for clean, fast UI development',
      'Firebase for auth, Firestore, and deployment-ready backend',
      'Vercel for smooth deployment and CI integration'
    ],
    challenges:
      'Designing a rewarding XP system that encourages daily use, implementing secure user auth and Firestore writes, and creating a flexible system for journaling and tracking technical terms.',
    results:
      'Created a sleek, developer-focused app that encourages consistent learning and reflection, while tracking user growth and knowledge accumulation.'
  }
}
];

// Helper functions
export function getFeaturedProjects() {
  return projects.filter(p => p.featured);
}

// @ts-ignore
export function getProjectsByCategory(category) {
  return projects.filter(p => p.category === category);
}

// @ts-ignore
export function getProjectById(id) {
  return projects.find(p => p.id === id);
}

export function getProjectCategories() {
  return [...new Set(projects.map(p => p.category))];
}

export function getProjectTechnologies() {
  const techs = new Set();
  projects.forEach(p => p.technologies.forEach(t => techs.add(t)));
  return [...techs].sort();
}

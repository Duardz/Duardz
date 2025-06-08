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
      'A simple yet functional point-of-sale system built using SvelteKit and Firebase. Designed for local businesses with a clean interface.',
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

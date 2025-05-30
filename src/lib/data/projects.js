// lib/data/projects.js

export const projects = [
  {
    id: 'project-template',
    title: 'Project Template',
    description: 'A template for organizing and showcasing cybersecurity projects. This serves as a placeholder for upcoming security tools and applications.',
    featured: true,
    image: '/images/projects/dashboard.jpg',
    technologies: ['Python', 'Network Security', 'Penetration Testing'],
    category: 'Security Tools',
    github: 'https://github.com/username/project-template',
    demo: null,
    details: {
      overview: 'This is a template project that demonstrates the structure and layout for future cybersecurity projects. It showcases how projects will be presented with detailed information about features, technology stack, challenges, and results.',
      features: [
        'Clean project structure',
        'Comprehensive documentation',
        'Security-focused design',
        'Scalable architecture',
        'Easy to customize'
      ],
      techStack: [
        'Python for backend logic',
        'React for frontend interface',
        'Docker for containerization',
        'PostgreSQL for data storage',
        'Git for version control'
      ],
      challenges: 'Setting up a template that can be easily adapted for different types of security projects while maintaining consistency and professional presentation.',
      results: 'Created a reusable template that accelerates the development and documentation of future cybersecurity projects.'
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
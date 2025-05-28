// lib/data/projects.js

export const projects = [
  {
    id: 'network-vulnerability-scanner',
    title: 'Network Vulnerability Scanner',
    description: 'Custom-built scanner that identifies security vulnerabilities in network infrastructure using Python and modern security tools.',
    featured: true,
    image: '/images/projects/network-scanner.jpg',
    technologies: ['Python', 'Nmap', 'Security', 'Networking'],
    category: 'Security Tools',
    github: 'https://github.com/username/network-scanner',
    demo: null,
    details: {
      overview: 'A comprehensive network vulnerability scanner designed to identify security weaknesses in network infrastructure. The scanner performs port scanning, service enumeration, and vulnerability mapping against known CVEs.',
      features: [
        'Comprehensive port scanning',
        'Service version detection',
        'CVE vulnerability mapping',
        'Automated reporting',
        'Real-time alerts'
      ],
      techStack: [
        'Python 3.x for core functionality',
        'Scapy for packet manipulation',
        'Nmap integration for port scanning',
        'SQLite for vulnerability database',
        'Rich for terminal UI'
      ],
      challenges: 'The main challenge was optimizing scan performance while maintaining accuracy. Implemented multi-threading and intelligent scan ordering to reduce scan times by 70%.',
      results: 'Successfully deployed in production environments, identifying critical vulnerabilities that led to improved security posture for multiple organizations.'
    }
  },
  {
    id: 'secure-auth-system',
    title: 'Secure Authentication System',
    description: 'Multi-factor authentication system with biometric validation for enhanced security in financial applications.',
    featured: true,
    image: '/images/projects/auth-system.jpg',
    technologies: ['JavaScript', 'Node.js', 'Cryptography', 'React'],
    category: 'Web Security',
    github: 'https://github.com/username/secure-auth',
    demo: 'https://auth-demo.example.com',
    details: {
      overview: 'Enterprise-grade authentication system implementing multi-factor authentication with support for biometric validation, hardware tokens, and adaptive authentication.',
      features: [
        'Multi-factor authentication (MFA)',
        'Biometric authentication support',
        'Hardware token integration',
        'Risk-based adaptive authentication',
        'Comprehensive audit logging'
      ],
      techStack: [
        'React for frontend UI',
        'Node.js/Express backend',
        'JWT for token management',
        'WebAuthn API for biometrics',
        'Redis for session management'
      ],
      challenges: 'Balancing security with user experience was crucial. Implemented progressive authentication that adapts based on risk signals.',
      results: 'Reduced unauthorized access attempts by 95% while maintaining a smooth user experience with sub-second authentication times.'
    }
  },
  {
    id: 'security-dashboard',
    title: 'Real-time Security Dashboard',
    description: 'SOC dashboard that aggregates and visualizes security events from multiple sources for threat detection.',
    featured: false,
    image: '/images/projects/dashboard.jpg',
    technologies: ['React', 'D3.js', 'WebSockets', 'Node.js'],
    category: 'Monitoring',
    github: 'https://github.com/username/security-dashboard',
    demo: null,
    details: {
      overview: 'Real-time security monitoring dashboard designed for Security Operations Centers (SOC) to visualize and respond to security threats.',
      features: [
        'Real-time event streaming',
        'Interactive data visualization',
        'Custom alerting rules',
        'Threat intelligence integration',
        'Incident response workflows'
      ],
      techStack: [
        'React with TypeScript',
        'D3.js for visualizations',
        'WebSocket for real-time updates',
        'Node.js backend',
        'Elasticsearch for data storage'
      ],
      challenges: 'Handling high-volume event streams while maintaining responsive UI required careful optimization and data aggregation strategies.',
      results: 'Reduced mean time to detect (MTTD) by 65% and improved incident response coordination across security teams.'
    }
  },
  {
    id: 'encrypted-comms',
    title: 'End-to-End Encrypted Chat',
    description: 'Secure communication platform implementing Signal Protocol for confidential team collaboration.',
    featured: false,
    image: '/images/projects/encrypted-chat.jpg',
    technologies: ['Encryption', 'React Native', 'WebRTC', 'Node.js'],
    category: 'Communication',
    github: 'https://github.com/username/encrypted-chat',
    demo: null,
    details: {
      overview: 'Secure messaging platform built with end-to-end encryption for teams requiring confidential communication channels.',
      features: [
        'End-to-end encryption',
        'Perfect forward secrecy',
        'Encrypted file sharing',
        'Voice and video calls',
        'Self-destructing messages'
      ],
      techStack: [
        'React Native for mobile apps',
        'Signal Protocol implementation',
        'WebRTC for calls',
        'Node.js backend',
        'PostgreSQL database'
      ],
      challenges: 'Implementing the Signal Protocol correctly while ensuring good performance on mobile devices required extensive optimization.',
      results: 'Successfully deployed to organizations handling sensitive information, with zero security breaches reported.'
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
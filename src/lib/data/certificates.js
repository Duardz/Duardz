// lib/data/certificates.js

export const certificates = [
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    platform: 'Coursera',
    date: '2025',
    credentialId: 'ABC123XYZ',
    credentialUrl: 'https://coursera.org/verify/professional-cert/ABC123XYZ',
    featured: true,
    icon: 'shield',
    color: '#4285F4',
    description: 'Comprehensive 8-course program covering cybersecurity fundamentals, risk management, network security, and incident response.',
    skills: [
      'Security Frameworks',
      'SIEM Tools',
      'Threat Detection',
      'Incident Response',
      'Network Security',
      'Python for Security',
      'Linux Administration',
      'Security Audits'
    ],
    courses: [
      'Foundations of Cybersecurity',
      'Managing Security Risks',
      'Networks and Network Security',
      'Linux and SQL',
      'Assets, Threats, and Vulnerabilities',
      'Detection and Response',
      'Python Automation',
      'Cybersecurity Job Preparation'
    ]
  },
  {
    id: 'fullstack-kodego',
    title: 'Full Stack Web Development',
    issuer: 'KodeGo',
    platform: 'KodeGo Bootcamp',
    date: '2023',
    credentialId: 'KG2023-001',
    credentialUrl: null,
    featured: true,
    icon: 'code',
    color: '#6366F1',
    description: 'Intensive 12-week bootcamp covering modern web development technologies and best practices.',
    skills: [
      'HTML/CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Git/GitHub',
      'Responsive Design'
    ],
    courses: [
      'Frontend Fundamentals',
      'JavaScript Programming',
      'React Development',
      'Backend with Node.js',
      'Database Design',
      'Full Stack Projects'
    ]
  },
  {
    id: 'lean-six-sigma',
    title: 'Lean Six Sigma White Belt',
    issuer: 'Six Sigma Council',
    platform: 'Online',
    date: '2022',
    credentialId: 'LSS-WB-2022',
    credentialUrl: null,
    featured: false,
    icon: 'chart',
    color: '#10B981',
    description: 'Foundation certification in Lean Six Sigma principles focusing on process improvement and efficiency.',
    skills: [
      'Process Improvement',
      'DMAIC Methodology',
      'Root Cause Analysis',
      'Data Analysis',
      'Quality Management',
      'Team Collaboration'
    ],
    courses: [
      'Lean Principles',
      'Six Sigma Basics',
      'Process Mapping',
      'Basic Statistics'
    ]
  }
];

// Currently pursuing certificates
export const inProgress = [
  {
    id: 'comptia-security',
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    expectedDate: '2025 Q2',
    progress: 65,
    description: 'Industry-standard certification for cybersecurity professionals.',
    topics: [
      'Threats, Attacks & Vulnerabilities',
      'Technologies & Tools',
      'Architecture & Design',
      'Identity & Access Management',
      'Risk Management',
      'Cryptography & PKI'
    ]
  },
  {
    id: 'aws-security',
    title: 'AWS Certified Security - Specialty',
    issuer: 'Amazon Web Services',
    expectedDate: '2025 Q3',
    progress: 30,
    description: 'Advanced AWS security certification for cloud security expertise.',
    topics: [
      'Incident Response',
      'Logging and Monitoring',
      'Infrastructure Security',
      'Identity and Access Management',
      'Data Protection'
    ]
  }
];

// Helper functions
export function getFeaturedCertificates() {
  return certificates.filter(cert => cert.featured);
}

// @ts-ignore
export function getCertificateById(id) {
  return certificates.find(cert => cert.id === id);
}

// @ts-ignore
export function getCertificatesByYear(year) {
  return certificates.filter(cert => cert.date.includes(year));
}

export function getAllSkills() {
  const skills = new Set();
  certificates.forEach(cert => cert.skills.forEach(skill => skills.add(skill)));
  return [...skills].sort();
}
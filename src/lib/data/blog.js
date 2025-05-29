// lib/data/blog.js

export const blogPosts = [
  {
    id: 'zero-trust-architecture',
    slug: 'zero-trust-architecture-guide',
    title: 'Zero Trust Architecture: Implementation Guide',
    date: '2025-04-15',
    category: 'Network Security',
    readingTime: 8,
    featured: true,
    author: {
      name: 'Eduardo Camay III',
      image: '/images/profile.jpg'
    },
    coverImage: '/images/blog/blog1.jpg',
    excerpt: 'A comprehensive guide to implementing Zero Trust Architecture in enterprise environments. Learn about the key principles and practical steps to enhance your security posture.',
    tags: ['Zero Trust', 'Network Security', 'Architecture', 'Enterprise'],
    content: `
# Zero Trust Architecture: Implementation Guide

Zero Trust Architecture (ZTA) represents a paradigm shift in how organizations approach security. The traditional perimeter-based security model operates on the principle of "trust but verify," where entities inside the network are inherently trusted. In contrast, ZTA follows the principle of "never trust, always verify."

## Core Principles of Zero Trust

The Zero Trust model is built on several foundational principles:

1. **Verify explicitly**: Always authenticate and authorize based on all available data points
2. **Use least privileged access**: Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA)
3. **Assume breach**: Minimize blast radius and prevent lateral movement

## Implementation Strategies

Implementing Zero Trust requires a systematic approach:

### 1. Identify your protect surface
This includes critical data, applications, assets, and services (DAAS).

### 2. Map transaction flows
Understand how traffic moves across your network to determine how it should be protected.

### 3. Design a Zero Trust architecture
Starting with a next-generation firewall as a micro-perimeter around your protect surface.

### 4. Create Zero Trust policies
Determine who should and should not have access to resources within your protect surface.

### 5. Monitor and maintain
Continuously review logs and security analytics to improve your security posture.

## Technologies Enabling Zero Trust

Several technologies are essential for implementing a robust Zero Trust model:

- **Strong Identity Authentication**: Multi-factor authentication (MFA) and Identity and Access Management (IAM)
- **Micro-segmentation**: Network segmentation at a granular level
- **Encryption**: End-to-end encryption for all data in transit and at rest
- **Analytics**: SIEM and UEBA for continuous monitoring

## Conclusion

Zero Trust Architecture is not a single product or solution but a strategic approach to security that requires continuous improvement. By embracing the "never trust, always verify" principle, organizations can significantly enhance their security posture.
    `
  },
  {
    id: 'ransomware-analysis',
    slug: 'analyzing-ransomware-attacks-2025',
    title: 'Analyzing Recent Ransomware Attacks: Lessons Learned',
    date: '2025-03-22',
    category: 'Threat Intelligence',
    readingTime: 10,
    featured: true,
    author: {
      name: 'Eduardo Camay III',
      image: '/images/profile.jpg'
    },
    coverImage: '/images/blog/blog2.jpg',
    excerpt: 'Breaking down the techniques used in recent high-profile ransomware attacks and what organizations can learn to improve their defenses.',
    tags: ['Ransomware', 'Threat Intelligence', 'Incident Response'],
    content: `
# Analyzing Recent Ransomware Attacks: Lessons Learned

The ransomware landscape continues to evolve with increasingly sophisticated attacks targeting organizations worldwide. This analysis examines recent high-profile incidents and extracts valuable lessons for defenders.

## Recent Attack Patterns

### Initial Access Vectors
- Phishing emails remain the primary entry point (45%)
- Exploited vulnerabilities in public-facing applications (30%)
- Supply chain compromises (15%)
- RDP brute force attacks (10%)

### Lateral Movement Techniques
Modern ransomware groups employ advanced techniques for lateral movement:
- Living off the Land (LotL) tactics
- Abuse of legitimate admin tools
- Credential harvesting and reuse
- Exploitation of unpatched systems

## Case Studies

### Case 1: Healthcare Provider Attack
A major healthcare provider fell victim to a ransomware attack that encrypted critical patient data systems...

### Case 2: Manufacturing Giant Breach
A global manufacturing company experienced a week-long shutdown after ransomware operators...

## Defense Strategies

1. **Implement robust backup strategies**
2. **Deploy EDR solutions across all endpoints**
3. **Regular vulnerability assessments**
4. **Employee security awareness training**
5. **Incident response planning and testing**

## Conclusion

The fight against ransomware requires a multi-layered approach combining technology, processes, and people. Organizations must remain vigilant and continuously adapt their defenses.
    `
  },
  {
    id: 'web-app-security',
    slug: 'web-application-security-best-practices',
    title: 'Web Application Security: Best Practices for Developers',
    date: '2025-03-10',
    category: 'Application Security',
    readingTime: 6,
    featured: false,
    author: {
      name: 'Eduardo Camay III',
      image: '/images/profile.jpg'
    },
    coverImage: '/images/blog/blog1.jpg',
    excerpt: 'Essential security practices every web developer should implement to protect applications from common vulnerabilities.',
    tags: ['Web Security', 'OWASP', 'Development', 'Best Practices'],
    content: `
# Web Application Security: Best Practices for Developers

Web application security is crucial in today's threat landscape. This guide covers essential practices every developer should implement.

## OWASP Top 10 Overview

Understanding the OWASP Top 10 is fundamental:
- Injection attacks
- Broken authentication
- Sensitive data exposure
- XML external entities (XXE)
- Broken access control

## Security Best Practices

### Input Validation
Always validate and sanitize user input...

### Authentication & Session Management
Implement secure authentication mechanisms...

### HTTPS Everywhere
Enforce HTTPS across your entire application...

## Code Examples

\`\`\`javascript
// Example: Input sanitization
function sanitizeInput(input) {
  return input.replace(/[<>]/g, '');
}
\`\`\`

## Conclusion

Security is not a one-time effort but an ongoing process. Stay informed about new vulnerabilities and continuously update your security practices.
    `
  },
  {
    id: 'cloud-security-aws',
    slug: 'securing-aws-infrastructure',
    title: 'Securing Your AWS Infrastructure: A Practical Guide',
    date: '2025-02-28',
    category: 'Cloud Security',
    readingTime: 7,
    featured: false,
    author: {
      name: 'Eduardo Camay III',
      image: '/images/profile.jpg'
    },
    coverImage: '/images/blog/blog2.jpg',
    excerpt: 'Learn how to implement security best practices in AWS, from IAM policies to network segmentation and monitoring.',
    tags: ['AWS', 'Cloud Security', 'IAM', 'Infrastructure'],
    content: `
# Securing Your AWS Infrastructure: A Practical Guide

AWS provides powerful tools for building secure cloud infrastructure, but proper configuration is essential. This guide covers key security considerations for AWS deployments.

## IAM Best Practices

### Principle of Least Privilege
Grant only the permissions required to perform a task...

### MFA for All Users
Enable multi-factor authentication for all IAM users...

## Network Security

### VPC Design
Implement proper network segmentation using VPCs...

### Security Groups and NACLs
Configure both security groups and network ACLs...

## Monitoring and Compliance

### CloudTrail
Enable CloudTrail in all regions...

### AWS Config
Use AWS Config for compliance monitoring...

## Conclusion

Security in AWS is a shared responsibility. While AWS secures the infrastructure, you must secure your applications and data within it.
    `
  }
];

// Helper functions
export function getFeaturedPosts() {
  return blogPosts.filter(post => post.featured);
}

// @ts-ignore
export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

// @ts-ignore
export function getPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category);
}

export function getCategories() {
  return [...new Set(blogPosts.map(post => post.category))];
}

export function getRecentPosts(limit = 5) {
  return blogPosts
    // @ts-ignore
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

// @ts-ignore
export function getRelatedPosts(currentPost, limit = 3) {
  return blogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
}

// Format date helper
// @ts-ignore
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // @ts-ignore
  return new Date(dateString).toLocaleDateString(undefined, options);
}
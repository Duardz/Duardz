<!-- lib/components/layout/Footer.svelte -->
<script>
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Duardz',
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eduardo-iii-camay-2a232a237/',
      icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
    },
  ];
  
  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const services = [
    { label: 'Security Consulting', href: '/contact' },
    { label: 'Web Development', href: '/contact' },
    { label: 'Code Review', href: '/contact' },
    { label: 'Technical Writing', href: '/contact' }
  ];
</script>

<footer class="footer">
  <div class="footer-grid"></div>
  <div class="footer-glow"></div>
  
  <div class="container">
    <div class="footer-content">
      <!-- Brand Column -->
      <div class="footer-brand">
        <a href="/" class="brand-link">
          <div class="brand-hexagon">
            <svg class="brand-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div class="brand-pulse"></div>
          </div>
          <div class="brand-text">
            <span class="brand-name">DUARDZ</span>
          </div>
        </a>
        
        <p class="brand-description">
          Securing the digital frontier through innovative cybersecurity solutions, 
          ethical hacking, and cutting-edge web development.
        </p>
        
        <div class="social-links">
          {#each socialLinks as social}
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
              aria-label={social.name}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d={social.icon}/>
              </svg>
              <div class="social-glow"></div>
            </a>
          {/each}
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="footer-section">
        <h3 class="footer-heading">
          <span class="heading-text">Navigation</span>
          <div class="heading-accent"></div>
        </h3>
        <ul class="footer-links">
          {#each quickLinks as link}
            <li>
              <a href={link.href} class="footer-link">
                <span class="link-text">{link.label}</span>
                <div class="link-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Services -->
      <div class="footer-section">
        <h3 class="footer-heading">
          <span class="heading-text">Services</span>
          <div class="heading-accent"></div>
        </h3>
        <ul class="footer-links">
          {#each services as service}
            <li>
              <a href={service.href} class="footer-link">
                <span class="link-text">{service.label}</span>
                <div class="link-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Contact CTA -->
      <div class="footer-section">
        <h3 class="footer-heading">
          <span class="heading-text">Get In Touch</span>
          <div class="heading-accent"></div>
        </h3>
        <p class="footer-text">
          Ready to secure your digital assets? Let's discuss your cybersecurity needs.
        </p>
        <a href="/contact" class="contact-button">
          <span>Start Project</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14m-7-7 7 7-7 7"/>
          </svg>
          <div class="button-glow"></div>
        </a>
        
        <div class="status-indicator">
          <div class="status-dot"></div>
          <span class="status-text">Available for projects</span>
        </div>
      </div>
    </div>
    
    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="footer-divider"></div>
      <div class="footer-meta">
        <p class="copyright">
          © {currentYear} DUARDZ. All rights reserved.
        </p>
        <div class="footer-badges">
          <span class="badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Secure
          </span>
          <span class="badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            SvelteKit
          </span>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-glow);
    margin-top: var(--space-24);
    position: relative;
    overflow: hidden;
  }

  .footer-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.5;
  }

  .footer-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient-primary);
    filter: blur(2px);
  }

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: var(--space-12);
    padding: var(--space-20) 0 var(--space-16);
    position: relative;
    z-index: 1;
  }

  /* Brand Section */
  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .brand-link {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    color: var(--text-primary);
    text-decoration: none;
    transition: all var(--transition-base);
    width: fit-content;
  }

  .brand-link:hover {
    transform: translateY(-2px);
  }

  .brand-hexagon {
    position: relative;
    width: 48px;
    height: 48px;
    background: var(--gradient-primary);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-base);
  }

  .brand-link:hover .brand-hexagon {
    filter: brightness(1.2);
    box-shadow: var(--shadow-glow);
  }

  .brand-icon {
    color: var(--bg-primary);
    z-index: 2;
  }

  .brand-pulse {
    position: absolute;
    inset: -4px;
    background: var(--gradient-primary);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    opacity: 0.3;
    animation: pulse 2s ease-in-out infinite;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }

  .brand-name {
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .brand-tagline {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    letter-spacing: 1px;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-top: 2px;
  }

  .brand-description {
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 400px;
  }

  .social-links {
    display: flex;
    gap: var(--space-3);
  }

  .social-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    color: var(--text-secondary);
    transition: all var(--transition-base);
    overflow: hidden;
  }

  .social-glow {
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  .social-link:hover {
    color: var(--bg-primary);
    border-color: var(--border-glow);
    transform: translateY(-4px);
  }

  .social-link:hover .social-glow {
    opacity: 1;
  }

  /* Footer Sections */
  .footer-section {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .footer-heading {
    position: relative;
    padding-bottom: var(--space-2);
  }

  .heading-text {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .heading-accent {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
  }

  .footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .footer-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-2) 0;
    color: var(--text-secondary);
    transition: all var(--transition-base);
    text-decoration: none;
    group: link;
  }

  .link-text {
    font-size: var(--text-sm);
    font-weight: 500;
  }

  .link-arrow {
    opacity: 0;
    transform: translateX(-8px);
    transition: all var(--transition-base);
    color: var(--neon-cyan);
  }

  .footer-link:hover {
    color: var(--text-primary);
    padding-left: var(--space-2);
  }

  .footer-link:hover .link-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  .footer-text {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: var(--text-sm);
    margin-bottom: var(--space-4);
  }

  .contact-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-4) var(--space-6);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 2px solid var(--border-glow);
    border-radius: var(--radius-lg);
    color: var(--text-primary);
    font-weight: 600;
    transition: all var(--transition-base);
    text-decoration: none;
    overflow: hidden;
    width: fit-content;
  }

  .button-glow {
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  .contact-button:hover {
    transform: translateY(-2px);
    color: var(--bg-primary);
  }

  .contact-button:hover .button-glow {
    opacity: 1;
  }

  .contact-button span,
  .contact-button svg {
    position: relative;
    z-index: 1;
  }

  .status-indicator {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-top: var(--space-4);
  }

  .status-dot {
    width: 8px;
    height: 8px;
    background: var(--success);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
    box-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
  }

  .status-text {
    font-size: var(--text-xs);
    color: var(--text-muted);
    font-weight: 500;
  }

  /* Footer Bottom */
  .footer-bottom {
    border-top: 1px solid var(--border);
    padding: var(--space-6) 0;
    position: relative;
  }

  .footer-divider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--gradient-primary);
    opacity: 0.3;
  }

  .footer-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-4);
  }

  .copyright {
    color: var(--text-muted);
    font-size: var(--text-sm);
    font-family: var(--font-mono);
  }

  .footer-badges {
    display: flex;
    gap: var(--space-3);
  }

  .badge {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-3);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    color: var(--text-muted);
    font-size: var(--text-xs);
    font-weight: 500;
    transition: all var(--transition-base);
  }

  .badge:hover {
    border-color: var(--border-glow);
    color: var(--text-primary);
  }

  /* Animations */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .footer-content {
      grid-template-columns: 1fr 1fr;
      gap: var(--space-8);
    }

    .footer-brand {
      grid-column: span 2;
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      align-items: center;
    }

    .brand-link {
      justify-content: center;
    }

    .social-links {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .footer {
      margin-top: var(--space-16);
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: var(--space-8);
      padding: var(--space-16) 0 var(--space-12);
      text-align: center;
    }

    .footer-brand {
      grid-column: auto;
      align-items: center;
    }

    .brand-description {
      text-align: center;
      max-width: 350px;
    }

    .footer-section {
      align-items: center;
    }

    .footer-links {
      align-items: center;
      max-width: 250px;
      margin: 0 auto;
    }

    .footer-link {
      justify-content: center;
      gap: var(--space-2);
    }

    .link-arrow {
      opacity: 1;
      transform: translateX(0);
    }

    .contact-button {
      margin: 0 auto;
    }

    .footer-meta {
      flex-direction: column;
      text-align: center;
      gap: var(--space-3);
    }

    .brand-name {
      font-size: 1.25rem;
    }

    .brand-hexagon {
      width: 40px;
      height: 40px;
    }

    .brand-icon {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 480px) {
    .footer-content {
      padding: var(--space-12) 0 var(--space-8);
    }

    .footer-brand {
      gap: var(--space-4);
    }

    .brand-link {
      flex-direction: column;
      gap: var(--space-3);
    }

    .brand-text {
      text-align: center;
    }

    .brand-description {
      font-size: var(--text-sm);
      max-width: 300px;
    }

    .social-links {
      gap: var(--space-2);
    }

    .social-link {
      width: 44px;
      height: 44px;
    }

    .footer-section {
      gap: var(--space-4);
    }

    .contact-button {
      padding: var(--space-3) var(--space-5);
      font-size: var(--text-sm);
    }

    .footer-badges {
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  /* Performance optimizations */
  @media (prefers-reduced-motion: reduce) {
    .brand-pulse,
    .status-dot {
      animation: none;
    }

    .social-link,
    .footer-link,
    .contact-button {
      transition: none;
    }

    .social-link:hover,
    .contact-button:hover {
      transform: none;
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .footer {
      border-top: 2px solid var(--border-glow);
    }

    .social-link,
    .contact-button,
    .badge {
      border-width: 2px;
    }
  }
</style>
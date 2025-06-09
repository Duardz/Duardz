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
    }
  ];

  
  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <!-- Brand Column -->
      <div class="footer-brand">
        <a href="/" class="brand-link">
          <svg class="brand-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span class="brand-text">DUARDZ</span>
        </a>
        <p class="brand-tagline">
          Securing the digital world, one line of code at a time.
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.icon}/>
              </svg>
            </a>
          {/each}
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="footer-section">
        <h3 class="footer-heading">Quick Links</h3>
        <ul class="footer-links">
          {#each quickLinks as link}
            <li>
              <a href={link.href} class="footer-link">{link.label}</a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Contact Info -->
      <div class="footer-section">
        <h3 class="footer-heading">Get In Touch</h3>
        <p class="footer-text">
          Available for freelance projects and cybersecurity consultations.
        </p>
        <a href="/contact" class="contact-button">
          Contact Me
        </a>
      </div>
    </div>
    
    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p class="copyright">
        © {currentYear} DUARDZ. All rights reserved.
      </p>
      <p class="footer-note">
        Built with <span class="heart">♥</span> using SvelteKit
      </p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--bg-secondary);
    border-top: 1px solid var(--border);
    margin-top: var(--space-20);
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--space-8);
    padding: var(--space-16) 0;
  }
  
  /* Brand Column - Enhanced */
  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .brand-link {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--text-primary);
    font-size: var(--text-xl);
    font-weight: 700;
    transition: color var(--transition-base);
    text-decoration: none;
  }
  
  .brand-link:hover {
    color: var(--primary-400);
  }
  
  .brand-icon {
    color: var(--primary-400);
    flex-shrink: 0; /* Prevent icon from shrinking */
  }
  
  .brand-text {
    white-space: nowrap; /* Prevent brand name from wrapping */
  }
  
  .brand-tagline {
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 300px;
    font-size: var(--text-base);
  }
  
  .social-links {
    display: flex;
    gap: var(--space-3);
    margin-top: var(--space-2);
    flex-wrap: wrap; /* Allow wrapping on very small screens */
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px; /* Larger touch target */
    height: 44px;
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    transition: all var(--transition-base);
    flex-shrink: 0; /* Prevent shrinking */
  }
  
  .social-link:hover {
    background-color: var(--primary-600);
    border-color: var(--primary-600);
    color: white;
    transform: translateY(-2px);
  }
  
  /* Footer Sections */
  .footer-section {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .footer-heading {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-2);
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .footer-link {
    color: var(--text-secondary);
    transition: color var(--transition-base);
    text-decoration: none;
    padding: var(--space-1) 0; /* Add padding for better touch targets */
    display: block;
  }
  
  .footer-link:hover {
    color: var(--primary-400);
  }
  
  .footer-text {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: var(--text-base);
  }
  
  .contact-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3) var(--space-6);
    background-color: var(--primary-600);
    color: white;
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: all var(--transition-base);
    margin-top: var(--space-2);
    text-decoration: none;
    min-height: 44px; /* Better touch target */
    text-align: center;
  }
  
  .contact-button:hover {
    background-color: var(--primary-700);
    transform: translateY(-2px);
    color: white;
  }
  
  /* Footer Bottom */
  .footer-bottom {
    padding: var(--space-6) 0;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-4);
  }
  
  .copyright {
    color: var(--text-muted);
    font-size: var(--text-sm);
  }
  
  .footer-note {
    color: var(--text-muted);
    font-size: var(--text-sm);
  }
  
  .heart {
    color: var(--error);
    font-size: var(--text-base); /* Consistent with text size */
  }
  
  /* Enhanced Responsive Design */
  
  /* Large tablets */
  @media (max-width: 1024px) {
    .footer {
      margin-top: var(--space-16);
    }
    
    .footer-content {
      grid-template-columns: 1fr 1fr;
      gap: var(--space-6);
      padding: var(--space-12) 0;
    }
    
    .footer-brand {
      grid-column: span 2;
      text-align: center;
      align-items: center;
    }
    
    .brand-tagline {
      text-align: center;
      max-width: 400px;
    }
    
    .social-links {
      justify-content: center;
    }
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    .footer-content {
      gap: var(--space-8);
      padding: var(--space-10) 0;
    }
    
    .footer-section {
      text-align: center;
    }
    
    .footer-links {
      align-items: center;
    }
    
    .contact-button {
      align-self: center;
      max-width: 200px;
    }
    
    .footer-bottom {
      gap: var(--space-2);
    }
  }
  
  /* Small tablets and large phones */
  @media (max-width: 640px) {
    .footer {
      margin-top: var(--space-12);
    }
    
    .footer-content {
      grid-template-columns: 1fr;
      gap: var(--space-6);
      padding: var(--space-8) 0;
      text-align: center;
    }
    
    .footer-brand {
      grid-column: auto;
      align-items: center;
    }
    
    .brand-link {
      justify-content: center;
      font-size: var(--text-lg);
    }
    
    .brand-tagline {
      font-size: var(--text-sm);
      max-width: 280px;
    }
    
    .footer-section {
      gap: var(--space-3);
    }
    
    .footer-heading {
      font-size: var(--text-base);
    }
    
    .footer-text {
      font-size: var(--text-sm);
      max-width: 280px;
      margin: 0 auto;
    }
    
    .contact-button {
      width: 100%;
      max-width: 240px;
      margin: var(--space-3) auto 0;
    }
    
    .footer-bottom {
      flex-direction: column;
      text-align: center;
      gap: var(--space-2);
      padding: var(--space-4) 0;
    }
    
    .copyright,
    .footer-note {
      font-size: var(--text-xs);
    }
  }
  
  /* Mobile phones */
  @media (max-width: 480px) {
    .footer-content {
      gap: var(--space-4);
      padding: var(--space-6) 0;
    }
    
    .footer-brand {
      gap: var(--space-3);
    }
    
    .brand-link {
      font-size: var(--text-base);
      gap: var(--space-2);
    }
    
    .brand-icon {
      width: 24px;
      height: 24px;
    }
    
    .brand-tagline {
      font-size: var(--text-xs);
      max-width: 240px;
    }
    
    .social-links {
      gap: var(--space-2);
      margin-top: var(--space-3);
    }
    
    .social-link {
      width: 40px;
      height: 40px;
    }
    
    .footer-section {
      gap: var(--space-2);
    }
    
    .footer-heading {
      font-size: var(--text-sm);
      font-weight: 600;
    }
    
    .footer-links {
      gap: var(--space-1);
    }
    
    .footer-link {
      font-size: var(--text-sm);
      padding: var(--space-2) 0;
    }
    
    .footer-text {
      font-size: var(--text-xs);
      max-width: 240px;
    }
    
    .contact-button {
      font-size: var(--text-sm);
      padding: var(--space-3) var(--space-4);
      width: 100%;
      max-width: 200px;
    }
    
    .footer-bottom {
      padding: var(--space-3) 0;
    }
  }
  
  /* Very small screens */
  @media (max-width: 360px) {
    .footer-content {
      padding: var(--space-4) 0;
    }
    
    .brand-tagline {
      max-width: 200px;
    }
    
    .social-links {
      justify-content: center;
      max-width: 200px;
      margin: var(--space-2) auto 0;
    }
    
    .social-link {
      width: 36px;
      height: 36px;
    }
    
    .footer-text {
      max-width: 200px;
    }
    
    .contact-button {
      max-width: 180px;
      padding: var(--space-2) var(--space-3);
    }
    
    .footer-bottom {
      gap: var(--space-1);
    }
  }
  
  /* Ultra-wide screens - prevent footer from becoming too spread out */
  @media (min-width: 1440px) {
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  
  /* High DPI screens - ensure icons remain crisp */
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .social-link svg,
    .brand-icon {
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
    }
  }
  
  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    .social-link,
    .contact-button,
    .brand-link {
      transition: none;
    }
    
    .social-link:hover,
    .contact-button:hover {
      transform: none;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .footer {
      border-top: 2px solid var(--border);
    }
    
    .social-link,
    .contact-button {
      border-width: 2px;
    }
  }
</style>
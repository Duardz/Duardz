<!-- lib/components/layout/Footer.svelte -->
<script>
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/username',
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/username',
      icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/username',
      icon: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'
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
          <span class="brand-text">Eduardo Camay III</span>
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
        © {currentYear} Eduardo Camay III. All rights reserved.
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
  
  /* Brand Column */
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
  }
  
  .brand-link:hover {
    color: var(--primary-400);
  }
  
  .brand-icon {
    color: var(--primary-400);
  }
  
  .brand-tagline {
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 300px;
  }
  
  .social-links {
    display: flex;
    gap: var(--space-3);
    margin-top: var(--space-2);
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    transition: all var(--transition-base);
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
  }
  
  .footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .footer-link {
    color: var(--text-secondary);
    transition: color var(--transition-base);
  }
  
  .footer-link:hover {
    color: var(--primary-400);
  }
  
  .footer-text {
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  .contact-button {
    display: inline-flex;
    align-items: center;
    padding: var(--space-3) var(--space-6);
    background-color: var(--primary-600);
    color: white;
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: all var(--transition-base);
    margin-top: var(--space-2);
  }
  
  .contact-button:hover {
    background-color: var(--primary-700);
    transform: translateY(-2px);
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
    font-size: var(--text-lg);
  }
  
  /* Responsive */
  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: 1fr 1fr;
      gap: var(--space-6);
    }
    
    .footer-brand {
      grid-column: span 2;
    }
  }
  
  @media (max-width: 640px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: var(--space-8);
      padding: var(--space-12) 0;
    }
    
    .footer-brand {
      grid-column: auto;
    }
    
    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
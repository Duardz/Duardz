<!-- src/routes/contact/+page.svelte -->
<script>
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  
  const contactMethods = [
    {
      title: 'Location',
      value: 'Auckland, New Zealand',
      icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
      color: 'var(--neon-cyan)'
    },
    {
      title: 'Response Time',
      value: '24-48 hours',
      icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-13h-2v6l5 3 1-1.5-4-2.5V7z',
      color: 'var(--neon-purple)'
    },
    {
      title: 'Status',
      value: 'Available for Projects',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',
      color: 'var(--neon-green)'
    }
  ];
  
  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive vulnerability assessments and penetration testing for web applications and network infrastructure.',
      icon: 'shield',
      features: ['Web App Security', 'Network Analysis', 'Vulnerability Scanning', 'Risk Assessment']
    },
    {
      title: 'Secure Development',
      description: 'Full-stack development with security-first approach, implementing best practices and secure coding principles.',
      icon: 'code',
      features: ['Secure Coding', 'Security Architecture', 'Code Reviews', 'Threat Modeling']
    },
    {
      title: 'Security Consulting',
      description: 'Expert guidance on cybersecurity strategy, compliance requirements, and security awareness training.',
      icon: 'users',
      features: ['Security Strategy', 'Compliance Guidance', 'Team Training', 'Incident Response']
    }
  ];
</script>

<svelte:head>
  <title>Contact - DUARDZ | Cybersecurity Professional</title>
  <meta name="description" content="Get in touch for cybersecurity consultation, penetration testing, secure development, or collaboration opportunities.">
</svelte:head>

<!-- Hero Section -->
<Section size="lg" background="primary">
  <div class="contact-hero">
    <!-- Animated Background -->
    <div class="hero-background">
      <div class="cyber-grid"></div>
      <div class="floating-particles">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
    </div>
    
    <div class="hero-content">
      <div class="hero-badge">
        <div class="badge-pulse"></div>
        <span>Available for Collaboration</span>
      </div>
      
      <h1 class="hero-title">
        <span class="title-line">LET'S BUILD</span>
        <span class="title-highlight">SECURE SOLUTIONS</span>
      </h1>
      
      <p class="hero-description">
        Ready to strengthen your digital defenses? Whether you need a security assessment, 
        secure application development, or cybersecurity consultation, I'm here to help 
        protect what matters most to your organization.
      </p>
      
      <!-- Contact Methods Grid -->
      <div class="contact-methods-grid">
        {#each contactMethods as method}
          <div class="contact-method glass">
            <div class="method-icon" style="color: {method.color}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d={method.icon}/>
              </svg>
            </div>
            <div class="method-content">
              <h3 class="method-title">{method.title}</h3>
              <p class="method-value">{method.value}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</Section>

<!-- Services Section -->
<Section background="secondary">
  <div class="services-section">
    <div class="section-header">
      <div class="section-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        Services
      </div>
      <h2 class="heading-2">Security Expertise</h2>
      <p class="text-lead">
        Combining cybersecurity knowledge with development skills to deliver 
        comprehensive security solutions tailored to your needs.
      </p>
    </div>
    
    <div class="services-grid">
      {#each services as service}
        <Card hover animate>
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon">
                {#if service.icon === 'shield'}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                {:else if service.icon === 'code'}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                {:else if service.icon === 'users'}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                {/if}
              </div>
              <h3 class="service-title">{service.title}</h3>
            </div>
            
            <p class="service-description">{service.description}</p>
            
            <div class="service-features">
              {#each service.features as feature}
                <span class="feature-tag">{feature}</span>
              {/each}
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</Section>

<!-- Connect Section -->
<Section background="primary">
  <div class="connect-section">
    <Card>
      <div class="connect-content">
        <div class="connect-header">
          <h2 class="heading-2">Ready to Secure Your Future?</h2>
          <p class="connect-text">
            Let's discuss your cybersecurity needs and how we can work together 
            to build more secure, resilient systems. Connect with me on professional networks.
          </p>
        </div>
        
        <div class="social-grid">
          <a 
            href="https://www.linkedin.com/in/eduardo-iii-camay-2a232a237/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-card glass card-hover"
          >
            <div class="social-icon linkedin">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
            </div>
            <div class="social-content">
              <h3>LinkedIn</h3>
              <p>Professional networking & career updates</p>
              <span class="social-action">Connect with me</span>
            </div>
          </a>
          
          <a 
            href="https://github.com/Duardz" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-card glass card-hover"
          >
            <div class="social-icon github">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </div>
            <div class="social-content">
              <h3>GitHub</h3>
              <p>Open source projects & code repositories</p>
              <span class="social-action">View my code</span>
            </div>
          </a>
        </div>
        
        <div class="contact-note">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <p>I typically respond to inquiries within 24-48 hours. 
             For urgent security matters, please mention it in your message.</p>
        </div>
      </div>
    </Card>
  </div>
</Section>

<style>
  /* Hero Section */
  .contact-hero {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  
  .cyber-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: grid-slide 30s linear infinite;
  }
  
  @keyframes grid-slide {
    0% { transform: translate(0, 0); }
    100% { transform: translate(40px, 40px); }
  }
  
  .floating-particles {
    position: absolute;
    inset: 0;
  }
  
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--neon-cyan);
    border-radius: 50%;
    animation: float-particle 8s ease-in-out infinite;
  }
  
  .particle-1 { top: 20%; left: 20%; animation-delay: 0s; }
  .particle-2 { top: 40%; right: 30%; animation-delay: 2s; }
  .particle-3 { bottom: 30%; left: 40%; animation-delay: 4s; }
  .particle-4 { bottom: 50%; right: 20%; animation-delay: 6s; }
  
  @keyframes float-particle {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
    50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .hero-badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-full);
    color: var(--text-primary);
    font-size: var(--text-sm);
    font-weight: 500;
    margin-bottom: var(--space-6);
    overflow: hidden;
  }
  
  .badge-pulse {
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    opacity: 0.1;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .title-line {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .title-highlight {
    color: var(--text-primary);
    position: relative;
  }
  
  .title-highlight::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
  }
  
  .hero-description {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-8);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Contact Methods */
  .contact-methods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);
    margin-top: var(--space-8);
  }
  
  .contact-method {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
  }
  
  .contact-method:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
  }
  
  .method-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background: rgba(0, 212, 255, 0.1);
    flex-shrink: 0;
  }
  
  .method-content {
    flex: 1;
    text-align: left;
  }
  
  .method-title {
    font-size: var(--text-base);
    font-weight: 600;
    margin-bottom: var(--space-1);
    color: var(--text-primary);
  }
  
  .method-value {
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
  
  /* Services Section */
  .services-section {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: var(--space-12);
  }
  
  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    color: var(--text-secondary);
    font-size: var(--text-sm);
    font-weight: 500;
    margin-bottom: var(--space-4);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-6);
  }
  
  .service-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .service-header {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
  }
  
  .service-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 212, 255, 0.1);
    border: 2px solid var(--border-glow);
    border-radius: var(--radius-xl);
    color: var(--neon-cyan);
    flex-shrink: 0;
  }
  
  .service-title {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
  }
  
  .service-description {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-6);
    flex: 1;
  }
  
  .service-features {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  
  .feature-tag {
    padding: var(--space-1) var(--space-3);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  /* Connect Section */
  .connect-section {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .connect-content {
    padding: var(--space-8);
    text-align: center;
  }
  
  .connect-header {
    margin-bottom: var(--space-8);
  }
  
  .connect-text {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 600px;
    margin: var(--space-4) auto 0;
  }
  
  .social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-6);
    margin-bottom: var(--space-8);
  }
  
  .social-card {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-6);
    border-radius: var(--radius-xl);
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-base);
    border: 1px solid var(--border);
  }
  
  .social-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-glow);
    border-color: var(--border-glow);
  }
  
  .social-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-xl);
    flex-shrink: 0;
  }
  
  .social-icon.linkedin {
    background: linear-gradient(135deg, #0077B5, #005885);
    color: white;
  }
  
  .social-icon.github {
    background: var(--surface);
    color: var(--text-primary);
    border: 2px solid var(--border);
  }
  
  .social-content {
    flex: 1;
    text-align: left;
  }
  
  .social-content h3 {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-1);
  }
  
  .social-content p {
    color: var(--text-secondary);
    font-size: var(--text-sm);
    margin-bottom: var(--space-2);
  }
  
  .social-action {
    color: var(--neon-cyan);
    font-size: var(--text-sm);
    font-weight: 500;
  }
  
  .contact-note {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-4);
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    text-align: left;
  }
  
  .contact-note svg {
    color: var(--neon-cyan);
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  .contact-note p {
    color: var(--text-secondary);
    font-size: var(--text-sm);
    line-height: 1.6;
    margin: 0;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .contact-methods-grid {
      grid-template-columns: 1fr;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
    }
    
    .social-grid {
      grid-template-columns: 1fr;
    }
    
    .social-card {
      flex-direction: column;
      text-align: center;
    }
    
    .social-content {
      text-align: center;
    }
    
    .connect-content {
      padding: var(--space-6);
    }
    
    .contact-note {
      flex-direction: column;
      text-align: center;
    }
  }
  
  @media (max-width: 480px) {
    .hero-title {
      font-size: clamp(2rem, 8vw, 3rem);
    }
    
    .connect-content {
      padding: var(--space-4);
    }
  }
</style>
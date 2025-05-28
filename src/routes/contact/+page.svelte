<!-- src/routes/contact/+page.svelte -->
<script>
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  
  const contactMethods = [
    {
      title: 'Location',
      value: 'Auckland, New Zealand',
      icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
      color: 'var(--primary-400)'
    },
    {
      title: 'Response Time',
      value: '24-48 hours',
      icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-13h-2v6l5 3 1-1.5-4-2.5V7z',
      color: 'var(--accent-400)'
    },
    {
      title: 'Availability',
      value: 'Open to opportunities',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',
      color: 'var(--success)'
    }
  ];
  
  const services = [
    {
      title: 'Security Consultation',
      description: 'Vulnerability assessments, security audits, and penetration testing for web applications.',
      icon: 'shield'
    },
    {
      title: 'Web Development',
      description: 'Full-stack development with security-first approach using modern technologies.',
      icon: 'code'
    },
    {
      title: 'Technical Writing',
      description: 'Security documentation, technical guides, and educational content.',
      icon: 'edit'
    }
  ];
</script>

<svelte:head>
  <title>Contact - Eduardo Camay III</title>
  <meta name="description" content="Get in touch for cybersecurity consultation, web development projects, or collaboration opportunities.">
</svelte:head>

<!-- Hero Section -->
<Section background="secondary">
  <div class="contact-hero">
    <h1 class="heading-1">Let's Connect</h1>
    <p class="hero-text">
      Have a project in mind or need cybersecurity expertise? 
      I'm always interested in new opportunities and collaborations.
    </p>
  </div>
</Section>

<!-- Contact Methods -->
<Section background="primary">
  <div class="contact-methods">
    {#each contactMethods as method}
      <Card hover animate>
        <div class="method-card">
          <div class="method-icon" style="color: {method.color}">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d={method.icon}/>
            </svg>
          </div>
          <h3 class="method-title">{method.title}</h3>
          <p class="method-value">{method.value}</p>
        </div>
      </Card>
    {/each}
  </div>
</Section>

<!-- Services -->
<Section background="secondary">
  <div class="services-section">
    <div class="section-header">
      <h2 class="heading-2">How I Can Help</h2>
      <p class="text-lead">
        Combining security expertise with development skills to deliver comprehensive solutions
      </p>
    </div>
    
    <div class="services-grid">
      {#each services as service}
        <Card hover animate>
          <div class="service-card">
            <div class="service-icon">
              {#if service.icon === 'shield'}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              {:else if service.icon === 'code'}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              {:else if service.icon === 'edit'}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              {/if}
            </div>
            <h3 class="service-title">{service.title}</h3>
            <p class="service-description">{service.description}</p>
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
        <h2 class="heading-2 mb-6">Ready to Work Together?</h2>
        <p class="connect-text">
          I'm currently available for freelance projects and consultation work. 
          Connect with me on professional networks to discuss your project needs.
        </p>
        
        <div class="social-links">
          <a 
            href="https://linkedin.com/in/username" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-button linkedin"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
            <span>Connect on LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-button github"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>
        
        <div class="email-note">
          <p class="text-muted">
            For direct inquiries, you can reach out through LinkedIn or GitHub.
            I typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </Card>
  </div>
</Section>

<style>
  /* Hero */
  .contact-hero {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
  
  .hero-text {
    font-size: var(--text-xl);
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  /* Contact Methods */
  .contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-6);
    max-width: 900px;
    margin: 0 auto;
  }
  
  .method-card {
    text-align: center;
    padding: var(--space-2);
  }
  
  .method-icon {
    display: flex;
    justify-content: center;
    margin-bottom: var(--space-4);
  }
  
  .method-title {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-2);
  }
  
  .method-value {
    color: var(--text-secondary);
    font-size: var(--text-base);
  }
  
  /* Services */
  .services-section {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-6);
  }
  
  .service-card {
    text-align: center;
    padding: var(--space-4);
  }
  
  .service-icon {
    display: flex;
    justify-content: center;
    margin-bottom: var(--space-4);
    color: var(--primary-400);
  }
  
  .service-title {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-3);
  }
  
  .service-description {
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  /* Connect Section */
  .connect-section {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .connect-content {
    text-align: center;
    padding: var(--space-8);
  }
  
  .connect-text {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-8);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .social-links {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--space-8);
  }
  
  .social-button {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-lg);
    font-weight: 500;
    transition: all var(--transition-base);
    text-decoration: none;
    border: 2px solid transparent;
  }
  
  .social-button.linkedin {
    background-color: #0077B5;
    color: white;
    border-color: #0077B5;
  }
  
  .social-button.linkedin:hover {
    background-color: #005885;
    border-color: #005885;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .social-button.github {
    background-color: var(--surface);
    color: var(--text-primary);
    border-color: var(--border);
  }
  
  .social-button.github:hover {
    background-color: var(--surface-hover);
    border-color: var(--primary-600);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .email-note {
    padding: var(--space-4);
    background-color: var(--bg-primary);
    border-radius: var(--radius-md);
    max-width: 500px;
    margin: 0 auto;
  }
  
  /* Section Headers */
  .section-header {
    text-align: center;
    margin-bottom: var(--space-8);
  }
  
  .section-header .text-lead {
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* Utilities */
  .mb-6 {
    margin-bottom: var(--space-6);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .contact-methods {
      grid-template-columns: 1fr;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
    }
    
    .social-links {
      flex-direction: column;
      align-items: center;
    }
    
    .social-button {
      width: 100%;
      max-width: 300px;
      justify-content: center;
    }
    
    .connect-content {
      padding: var(--space-6);
    }
  }
</style>
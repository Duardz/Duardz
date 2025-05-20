<!-- Contact Page (Without Form): src/routes/contact/+page.svelte -->
<script>
  // Social media profiles data - simplified to just LinkedIn and GitHub
  const socialProfiles = [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://linkedin.com/in/username",
      color: "#0A66C2"
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/username",
      color: "#6e5494"
    }
  ];
  
  // Contact info - simplified (removed email)
  const contactInfo = {
    location: "Auckland, New Zealand",
    availability: "Available for freelance projects",
    response: "Usually responds within 24-48 hours"
  };
</script>

<svelte:head>
  <title>Contact | CyberPortfolio</title>
  <meta name="description" content="Get in touch with me for cybersecurity and web development services.">
</svelte:head>

<main class="page-wrapper">
  <!-- Header Section -->
  <section class="hero-section">
    <div class="container">
      <h1 class="main-heading">Get In Touch</h1>
      <p class="intro-text">Have a question or interested in working together? I'm a cybersecurity enthusiast with a passion for web security and development. Feel free to reach out if you need help with vulnerability assessment or website creation.</p>
    </div>
  </section>

  <!-- Contact Info Section -->
  <section class="contact-section">
    <div class="container">
      <div class="section-content">
        <h2 class="section-heading">Connect With Me</h2>
        
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="contact-details">
              <h3>Location</h3>
              <p>{contactInfo.location}</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <div class="contact-details">
              <h3>Availability</h3>
              <p>{contactInfo.availability}</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                <circle cx="12" cy="13" r="3"></circle>
              </svg>
            </div>
            <div class="contact-details">
              <h3>Response Time</h3>
              <p>{contactInfo.response}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Social Profiles Section -->
  <section class="social-section">
    <div class="container">
      <div class="section-content">
        <h2 class="section-heading">Find Me Online</h2>
        <div class="social-grid">
          {#each socialProfiles as profile}
            <a href={profile.url} target="_blank" rel="noopener noreferrer" class="social-card" aria-label={`Connect on ${profile.name}`}>
              <span class="social-card-icon" style={`color: ${profile.color};`}>
                {#if profile.icon === 'linkedin'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                {:else if profile.icon === 'github'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                {/if}
              </span>
              <span class="social-label">{profile.name}</span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Services section -->
  <section class="services-section">
    <div class="container">
      <h2 class="section-heading centered">How I Can Help</h2>
      <p class="services-intro">As a cybersecurity enthusiast with web development skills, here are the services I currently offer:</p>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
          </div>
          <div class="service-content">
            <h3>Web Vulnerability Assessment</h3>
            <p>I can help identify security weaknesses in your website, perform basic penetration testing, and provide recommendations to improve your web security.</p>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <div class="service-content">
            <h3>Website Creation</h3>
            <p>Need a simple, secure website? I create responsive websites with modern frameworks like SvelteKit, focusing on both functionality and security best practices.</p>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="service-content">
            <h3>Project Collaboration</h3>
            <p>Interested in collaborating on a cybersecurity or web development project? I'm always looking to learn and grow by working with others on interesting challenges.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  /* Base styles */
  :global(body) {
    background-color: #121212;
    color: #f0f0f0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .page-wrapper {
    overflow: hidden;
  }
  
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  
  .section-content {
    max-width: 850px;
    margin: 0 auto;
  }
  
  /* Hero Section */
  .hero-section {
    position: relative;
    padding: 6rem 0 4rem;
    background: linear-gradient(135deg, rgba(40, 30, 50, 0.9) 0%, rgba(20, 20, 25, 0.95) 100%);
    overflow: hidden;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(98, 0, 234, 0.15), transparent 70%);
  }
  
  /* Typography */
  .main-heading {
    position: relative;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(120deg, #fff, #e0d0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.5px;
  }
  
  .section-heading {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 600;
    color: #f0f0f0;
    text-align: center;
  }
  
  .intro-text {
    position: relative;
    text-align: center;
    margin-bottom: 0;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.85);
  }
  
  /* Contact Section */
  .contact-section {
    padding: 5rem 0;
    position: relative;
    background-color: rgba(25, 25, 30, 0.4);
  }
  
  .contact-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin-top: 3rem;
  }
  
  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background-color: rgba(30, 30, 38, 0.6);
    border-radius: 16px;
    border: 1px solid rgba(98, 0, 234, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
  
  .contact-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }
  
  .contact-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: rgba(98, 0, 234, 0.15);
    border-radius: 30%;
    color: #6200EA;
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .contact-item:hover .contact-icon {
    transform: scale(1.1);
    background-color: rgba(98, 0, 234, 0.2);
  }
  
  .contact-details h3 {
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
    color: #f0f0f0;
  }
  
  .contact-details p {
    margin: 0;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
  }
  
  /* Social Section */
  .social-section {
    padding: 5rem 0;
    background-color: rgba(20, 20, 25, 0.6);
    position: relative;
    overflow: hidden;
  }
  
  .social-section::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom left, rgba(98, 0, 234, 0.1), transparent 60%);
    z-index: 0;
  }
  
  .social-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 500px;
    margin: 3rem auto 0;
    position: relative;
    z-index: 1;
  }
  
  .social-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: rgba(30, 30, 38, 0.6);
    border: 1px solid rgba(98, 0, 234, 0.2);
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    color: inherit;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  
  .social-card:hover {
    transform: translateY(-8px);
    background-color: rgba(40, 40, 50, 0.7);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }
  
  .social-card-icon {
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
    font-size: 2rem;
  }
  
  .social-card:hover .social-card-icon {
    transform: scale(1.2);
  }
  
  .social-label {
    font-size: 1.2rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }
  
  /* Services Section */
  .services-section {
    padding: 6rem 0;
    background-color: rgba(25, 25, 30, 0.95);
    position: relative;
    overflow: hidden;
  }
  
  .services-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(98, 0, 234, 0.1), transparent 60%);
    z-index: 0;
  }
  
  .services-intro {
    position: relative;
    max-width: 700px;
    margin: 0 auto 4rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    line-height: 1.7;
    z-index: 1;
  }
  
  .services-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 1;
  }
  
  .service-card {
    background-color: rgba(30, 30, 38, 0.6);
    border: 1px solid rgba(98, 0, 234, 0.2);
    border-radius: 16px;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  }
  
  .service-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: rgba(98, 0, 234, 0.15);
    border-radius: 50%;
    margin-bottom: 2rem;
    color: #6200EA;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .service-card:hover .service-icon {
    transform: scale(1.1);
    background-color: rgba(98, 0, 234, 0.25);
  }
  
  .service-content h3 {
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #f0f0f0;
  }
  
  .service-content p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
  }
  
  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .services-grid {
      gap: 2rem;
    }
    
    .main-heading {
      font-size: 2.5rem;
    }
  }
  
  @media (max-width: 900px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
      max-width: 700px;
    }
  }
  
  @media (max-width: 768px) {
    .hero-section {
      padding: 4rem 0 3rem;
    }
    
    .contact-section,
    .social-section,
    .services-section {
      padding: 4rem 0;
    }
    
    .contact-info {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    
    .main-heading {
      font-size: 2.2rem;
    }
    
    .section-heading {
      font-size: 1.8rem;
    }
    
    .contact-item,
    .social-card,
    .service-card {
      padding: 1.75rem;
    }
    
    .service-icon {
      width: 70px;
      height: 70px;
    }
  }
  
  @media (max-width: 600px) {
    .contact-info,
    .services-grid {
      grid-template-columns: 1fr;
      max-width: 450px;
    }
    
    .main-heading {
      font-size: 2rem;
    }
    
    .intro-text {
      font-size: 1rem;
    }
    
    .social-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .hero-section {
      padding: 3rem 0 2rem;
    }
    
    .contact-section,
    .social-section,
    .services-section {
      padding: 3rem 0;
    }
    
    .main-heading {
      font-size: 1.8rem;
    }
    
    .section-heading {
      font-size: 1.6rem;
    }
    
    .contact-item,
    .social-card,
    .service-card {
      padding: 1.5rem;
    }
    
    .service-icon {
      width: 60px;
      height: 60px;
      margin-bottom: 1.5rem;
    }
  }
</style>
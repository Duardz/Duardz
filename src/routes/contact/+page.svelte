<!-- Contact Page (Without Form): src/routes/contact/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  
  // Social media profiles data - simplified
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
    },
    {
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/username",
      color: "#1DA1F2"
    }
  ];
  
  // Contact info - simplified
  const contactInfo = {
    location: "Auckland, New Zealand",
    email: "contact@gmail.com",
    availability: "Available for freelance projects",
    response: "Usually responds within 24-48 hours"
  };
  
  // Matrix canvas animation (simplified)
  // @ts-ignore
  let canvas;
  
  onMount(() => {
    // @ts-ignore
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      
      const characters = "01".split("");
      const fontSize = 12;
      const columns = canvas.width / fontSize;
      
      // @ts-ignore
      const drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
      }
      
      function draw() {
        ctx.fillStyle = "rgba(18, 18, 18, 0.05)";
        // @ts-ignore
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#6200EA";
        ctx.font = fontSize + "px monospace";
        
        for (let i = 0; i < drops.length; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          // @ts-ignore
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          // @ts-ignore
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          // @ts-ignore
          drops[i]++;
        }
      }
      
      setInterval(draw, 33);
      
      // Resize handler
      window.addEventListener('resize', () => {
        // @ts-ignore
        canvas.width = canvas.clientWidth;
        // @ts-ignore
        canvas.height = canvas.clientHeight;
      });
    }
  });
</script>

<svelte:head>
  <title>Contact | CyberPortfolio</title>
</svelte:head>

<section class="section">
  <div class="container">
    <div style="position: relative;">
      <canvas 
        bind:this={canvas} 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.2;"
      ></canvas>
      
      <div style="position: relative; z-index: 1; padding: 2rem 0;">
        <h1 class="main-heading">Get In Touch</h1>
        <p class="intro-text">Have a question or interested in working together? I'm a cybersecurity enthusiast with a passion for web security and development. Feel free to reach out if you need help with vulnerability assessment or website creation.</p>
        
        <div class="content-layout">
          <!-- Contact Information -->
          <div class="card contact-card">
            <div class="card-content">
              <h2>Connect With Me</h2>
              
              <div class="contact-info">
                <div class="contact-item">
                  <span class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div>
                    <h3>Location</h3>
                    <p>{contactInfo.location}</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"></path>
                    </svg>
                  </span>
                  <div>
                    <h3>Email</h3>
                    <p>{contactInfo.email}</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </span>
                  <div>
                    <h3>Availability</h3>
                    <p>{contactInfo.availability}</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <span class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                  </span>
                  <div>
                    <h3>Response Time</h3>
                    <p>{contactInfo.response}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Profiles Section - Simplified -->
          <div class="social-section">
            <h2>Find Me Online</h2>
            <div class="social-grid">
              {#each socialProfiles as profile}
                <a href={profile.url} target="_blank" rel="noopener noreferrer" class="social-card">
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
                    {:else if profile.icon === 'twitter'}
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    {/if}
                  </span>
                  <span class="social-label">{profile.name}</span>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Services section - Simplified and focused on actual services -->
<section class="section" style="background-color: var(--dark-elevated); padding: 3rem 0;">
  <div class="container" style="text-align: center;">
    <h2>How I Can Help</h2>
    <p style="max-width: 700px; margin: 0 auto 1.5rem auto;">As a cybersecurity enthusiast with web development skills, here are the services I currently offer:</p>
    
    <div class="services-grid">
      <div class="card">
        <div class="card-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
          <h3>Web Vulnerability Assessment</h3>
          <p>I can help identify security weaknesses in your website, perform basic penetration testing, and provide recommendations to improve your web security.</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <h3>Website Creation</h3>
          <p>Need a simple, secure website? I create responsive websites with modern frameworks like SvelteKit, focusing on both functionality and security best practices.</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <h3>Project Collaboration</h3>
          <p>Interested in collaborating on a cybersecurity or web development project? I'm always looking to learn and grow by working with others on interesting challenges.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .main-heading {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }
  
  .intro-text {
    text-align: center;
    margin-bottom: 2.5rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
  
  .content-layout {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .contact-card {
    max-width: 700px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(98, 0, 234, 0.15);
    border-radius: 8px;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .contact-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: rgba(98, 0, 234, 0.1);
    border-radius: 6px;
    color: var(--secondary, #6200EA);
  }
  
  .contact-item h3 {
    font-size: 1rem;
    margin: 0 0 0.2rem 0;
    font-weight: 500;
  }
  
  .contact-item p {
    margin: 0;
    font-size: 0.95rem;
  }
  
  .social-section {
    text-align: center;
  }
  
  .social-section h2 {
    margin-bottom: 1.5rem;
  }
  
  .social-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .social-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(98, 0, 234, 0.15);
    border-radius: 8px;
    transition: transform 0.2s, background-color 0.2s;
    text-decoration: none;
    color: inherit;
  }
  
  .social-card:hover {
    transform: translateY(-3px);
    background-color: rgba(255, 255, 255, 0.04);
  }
  
  .social-card-icon {
    margin-bottom: 0.5rem;
  }
  
  .social-label {
    font-size: 0.95rem;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .card {
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(98, 0, 234, 0.15);
    border-radius: 8px;
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: translateY(-3px);
  }
  
  .card h3 {
    font-size: 1.1rem;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
  
  .card p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  /* Responsive adjustments */
  @media (max-width: 900px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
      max-width: 650px;
    }
  }
  
  @media (max-width: 768px) {
    .contact-info {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
    
    .social-grid {
      grid-template-columns: repeat(3, 1fr);
      max-width: 100%;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
      max-width: 450px;
    }
    
    .main-heading {
      font-size: 1.8rem;
    }
  }
  
  @media (max-width: 500px) {
    .social-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
    
    .card-content {
      padding: 1.25rem;
    }
  }
</style>
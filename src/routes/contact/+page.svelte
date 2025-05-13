<!-- Contact Page (Without Form): src/routes/contact/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  
  // Social media profiles data
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
    },
    {
      name: "Medium",
      icon: "medium",
      url: "https://medium.com/@username",
      color: "#00AB6C"
    },
    {
      name: "Stack Overflow",
      icon: "stack-overflow",
      url: "https://stackoverflow.com/users/12345/username",
      color: "#F48024"
    },
    {
      name: "Discord",
      icon: "message-circle",
      url: "https://discord.gg/username",
      color: "#5865F2"
    }
  ];
  
  // Contact info
  const contactInfo = {
    location: "New York, NY",
    email: "contact@example.com",
    availability: "Available for freelance projects and consulting",
    response: "Usually responds within 24 hours"
  };
  
  // Matrix canvas animation
  // @ts-ignore
  let canvas;
  
  onMount(() => {
    // @ts-ignore
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      
      const characters = "01".split("");
      const fontSize = 14;
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
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.3;"
      ></canvas>
      
      <div style="position: relative; z-index: 1; padding: 3rem 0;">
        <h1>Get In Touch</h1>
        <p style="margin-bottom: 2rem; max-width: 700px;">Have a question, interested in working together, or want to discuss a potential project? Feel free to reach out! I'm always open to new opportunities and collaborations in the cybersecurity field.</p>
        
        <!-- Contact Information -->
        <div class="card" style="max-width: 700px; margin: 0 auto 3rem auto;">
          <div class="card-content">
            <h2>Connect With Me</h2>
            
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <div>
                  <h3 style="font-size: 1.1rem; margin-bottom: 0.25rem;">Location</h3>
                  <p style="margin: 0;">{contactInfo.location}</p>
                </div>
              </div>
              
              <div class="contact-item">
                <span class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"></path>
                  </svg>
                </span>
                <div>
                  <h3 style="font-size: 1.1rem; margin-bottom: 0.25rem;">Email</h3>
                  <p style="margin: 0;">{contactInfo.email}</p>
                </div>
              </div>
              
              <div class="contact-item">
                <span class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </span>
                <div>
                  <h3 style="font-size: 1.1rem; margin-bottom: 0.25rem;">Availability</h3>
                  <p style="margin: 0;">{contactInfo.availability}</p>
                </div>
              </div>
              
              <div class="contact-item">
                <span class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                </span>
                <div>
                  <h3 style="font-size: 1.1rem; margin-bottom: 0.25rem;">Response Time</h3>
                  <p style="margin: 0;">{contactInfo.response}</p>
                </div>
              </div>
            </div>
            
            <div class="cyber-terminal" style="margin-top: 2rem;">
              <div class="cyber-terminal-content">
                echo "Looking forward to connecting with you!" | openssl enc -aes-256-cbc -base64
              </div>
            </div>
          </div>
        </div>
        
        <h2 style="text-align: center;">Find Me Online</h2>
        <div class="social-grid" style="max-width: 800px; margin: 0 auto 3rem auto;">
          {#each socialProfiles as profile}
            <a href={profile.url} target="_blank" rel="noopener noreferrer" class="social-card">
              <span class="social-card-icon" style={`color: ${profile.color};`}>
                {#if profile.icon === 'linkedin'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                {:else if profile.icon === 'github'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                {:else if profile.icon === 'twitter'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                {:else if profile.icon === 'medium'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <path d="M8 10.5h8"></path>
                    <path d="M8 14.5h8"></path>
                    <path d="M8 6.5h8"></path>
                  </svg>
                {:else if profile.icon === 'stack-overflow'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 20.002V15.002H20V22.002H3V15.002H5V20.002H18Z"></path>
                    <path d="M7.5 14.8L16.8 17.2L17.4 15.3L8.1 12.9L7.5 14.8Z" fill="currentColor" stroke="none"></path>
                    <path d="M8.4 11.2L16.9 16.2L18 14.6L9.5 9.60001L8.4 11.2Z" fill="currentColor" stroke="none"></path>
                    <path d="M10.4 8.00001L17.1 15.2L18.5 13.9L11.8 6.70001L10.4 8.00001Z" fill="currentColor" stroke="none"></path>
                    <path d="M13.2 5.19999L17.9 14.4L19.6 13.5L14.9 4.29999L13.2 5.19999Z" fill="currentColor" stroke="none"></path>
                    <path d="M16.4 3.10001L18.8 13.1L20.7 12.7L18.3 2.70001L16.4 3.10001Z" fill="currentColor" stroke="none"></path>
                  </svg>
                {:else if profile.icon === 'message-circle'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                {/if}
              </span>
              <span>{profile.name}</span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background-color: var(--dark-elevated); padding: 4rem 0;">
  <div class="container" style="text-align: center;">
    <h2>Let's Work Together</h2>
    <p style="max-width: 700px; margin: 0 auto 2rem auto;">Whether you're looking for a cybersecurity consultant, need help with a specific project, or just want to connect, I'm open to discussions and collaborations. Don't hesitate to reach out via email or social media!</p>
    
    <div class="grid grid-3" style="max-width: 900px; margin: 0 auto;">
      <div class="card" style="text-align: center;">
        <div class="card-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <h3>Security Consulting</h3>
          <p>Need expert advice on strengthening your security posture? I offer consulting services tailored to your needs.</p>
        </div>
      </div>
      
      <div class="card" style="text-align: center;">
        <div class="card-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
          <h3>Project Collaboration</h3>
          <p>Looking for a cybersecurity professional to join your team for a specific project? Let's discuss how I can contribute.</p>
        </div>
      </div>
      
      <div class="card" style="text-align: center;">
        <div class="card-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <h3>Speaking Engagements</h3>
          <p>Need a speaker for your cybersecurity event or conference? I'm available for presentations on various security topics.</p>
        </div>
      </div>
    </div>
  </div>
</section>
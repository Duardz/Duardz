<!-- src/routes/+page.svelte -->
<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import ProjectCard from '$lib/components/common/ProjectCard.svelte';
  import { getFeaturedProjects } from '$lib/data/projects.js';
  // @ts-ignore
  import { getFeaturedCertificates } from '$lib/data/certificates.js';
  
  // Get featured content
  const featuredProjects = getFeaturedProjects();
  const featuredCertificates = getFeaturedCertificates();
  
  // Terminal animation
  let terminalText = '';
  let terminalCursor = true;
  const fullText = `$ whoami
> Cybersecurity enthusiast & Full-stack developer
$ cat skills.txt
> Penetration Testing | Web Security | Network Analysis
> Python | JavaScript | React | Node.js
$ ./start-journey.sh
> Ready to secure the digital world...`;
  
  onMount(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        terminalText = fullText.slice(0, index + 1);
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);
    
    // Cursor blink
    const cursorInterval = setInterval(() => {
      terminalCursor = !terminalCursor;
    }, 500);
    
    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  });
</script>

<svelte:head>
  <title>Eduardo Camay III - Cybersecurity Professional & Developer</title>
  <meta name="description" content="Aspiring cybersecurity professional with expertise in penetration testing, web security, and full-stack development.">
</svelte:head>

<!-- Hero Section -->
<Section size="lg" background="primary">
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-title animate-fadeIn">
        Hi, I'm <span class="text-gradient">Eduardo</span>
      </h1>
      <p class="hero-subtitle animate-fadeIn" style="animation-delay: 0.1s">
        Aspiring Cybersecurity Professional & Full-Stack Developer
      </p>
      <p class="hero-description animate-fadeIn" style="animation-delay: 0.2s">
        Passionate about securing digital infrastructure and building robust applications. 
        Currently focused on penetration testing, network security, and modern web technologies.
      </p>
      
      <div class="hero-terminal animate-fadeIn" style="animation-delay: 0.3s">
        <div class="terminal-header">
          <span class="terminal-dot red"></span>
          <span class="terminal-dot yellow"></span>
          <span class="terminal-dot green"></span>
          <span class="terminal-title">terminal</span>
        </div>
        <pre class="terminal-content">{terminalText}<span class="cursor" class:visible={terminalCursor}>_</span></pre>
      </div>
      
      <div class="hero-actions animate-fadeIn" style="animation-delay: 0.4s">
        <Button href="/projects" size="lg">
          View My Projects
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          Get In Touch
        </Button>
      </div>
    </div>
    
    <div class="hero-decoration">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
  </div>
</Section>

<!-- Featured Projects -->
<Section background="secondary">
  <div class="section-header">
    <h2 class="heading-2">Featured Projects</h2>
    <p class="text-lead">
      Recent projects showcasing my skills in cybersecurity and web development
    </p>
  </div>
  
  <div class="grid grid-cols-2 mb-8">
    {#each featuredProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>
  
  <div class="text-center">
    <Button href="/projects" variant="secondary">
      View All Projects
    </Button>
  </div>
</Section>

<!-- Skills & Expertise -->
<Section background="primary">
  <div class="section-header">
    <h2 class="heading-2">Skills</h2>
    <p class="text-lead">
      Building a strong foundation in both security and development
    </p>
  </div>
  
  <div class="grid grid-cols-3 gap-8">
    <Card hover animate>
      <div class="skill-category">
        <div class="skill-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3 class="heading-4">Cybersecurity</h3>
        <ul class="skill-list">
          <li>Penetration Testing</li>
          <li>Vulnerability Assessment</li>
          <li>Network Security</li>
          <li>Security Audits</li>
          <li>Incident Response</li>
        </ul>
      </div>
    </Card>
    
    <Card hover animate>
      <div class="skill-category">
        <div class="skill-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <h3 class="heading-4">Development</h3>
        <ul class="skill-list">
          <li>Python & JavaScript</li>
          <li>React & Node.js</li>
          <li>API Development</li>
          <li>Database Design</li>
          <li>Cloud Services</li>
        </ul>
      </div>
    </Card>
    
    <Card hover animate>
      <div class="skill-category">
        <div class="skill-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h3 class="heading-4">Tools</h3>
        <ul class="skill-list">
          <li>Kali Linux</li>
          <li>Wireshark</li>
          <li>Burp Suite</li>
          <li>Git & Docker</li>
          <li>SIEM Tools</li>
        </ul>
      </div>
    </Card>
  </div>
</Section>

<!-- Certifications -->
<Section background="secondary">
  <div class="section-header">
    <h2 class="heading-2">Certifications</h2>
    <p class="text-lead">
      Continuous learning through industry-recognized certifications
    </p>
  </div>
  
  <div class="grid grid-cols-2 mb-8">
    {#each featuredCertificates as cert}
      <Card hover animate>
        <div class="cert-card">
          <div class="cert-header">
            <div class="cert-icon" style="background-color: {cert.color}20; color: {cert.color}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                {#if cert.icon === 'shield'}
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                {:else if cert.icon === 'code'}
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                {/if}
              </svg>
            </div>
            <div>
              <h3 class="cert-title">{cert.title}</h3>
              <p class="cert-issuer">{cert.issuer} • {cert.date}</p>
            </div>
          </div>
          <p class="cert-description">{cert.description}</p>
          <div class="cert-skills">
            {#each cert.skills.slice(0, 4) as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
            {#if cert.skills.length > 4}
              <span class="skill-tag">+{cert.skills.length - 4} more</span>
            {/if}
          </div>
        </div>
      </Card>
    {/each}
  </div>
  
  <div class="text-center">
    <Button href="/certificates" variant="secondary">
      View All Certificates
    </Button>
  </div>
</Section>

<!-- CTA Section -->
<Section size="lg" background="primary">
  <div class="cta">
    <h2 class="heading-2 mb-4">Let's Work Together</h2>
    <p class="text-lead mb-8">
      Looking for a cybersecurity professional or need help with a project?<br>
      I'm available for freelance work and exciting opportunities.
    </p>
    <div class="flex justify-center gap-4">
      <Button href="/contact" size="lg">
        Get In Touch
      </Button>
      <Button href="/about" variant="secondary" size="lg">
        Learn More About Me
      </Button>
    </div>
  </div>
</Section>

<style>
  /* Hero Styles */
  .hero {
    position: relative;
    min-height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: var(--space-4);
  }
  
  .text-gradient {
    background: linear-gradient(135deg, var(--primary-400), var(--accent-400));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hero-subtitle {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    color: var(--primary-300);
    margin-bottom: var(--space-4);
  }
  
  .hero-description {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-8);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Terminal */
  .hero-terminal {
    background-color: var(--gray-900);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    max-width: 600px;
    margin: 0 auto var(--space-8);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
  }
  
  .terminal-header {
    background-color: var(--gray-800);
    padding: var(--space-2) var(--space-4);
    display: flex;
    align-items: center;
    gap: var(--space-2);
    border-bottom: 1px solid var(--border);
  }
  
  .terminal-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  
  .terminal-dot.red { background-color: #ff5f56; }
  .terminal-dot.yellow { background-color: #ffbd2e; }
  .terminal-dot.green { background-color: #27c93f; }
  
  .terminal-title {
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-left: auto;
    font-family: var(--font-mono);
  }
  
  .terminal-content {
    padding: var(--space-4);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    line-height: 1.6;
    color: var(--accent-400);
    white-space: pre-wrap;
    word-break: break-word;
  }
  
  .cursor {
    display: inline-block;
    width: 8px;
    height: 1em;
    background-color: var(--accent-400);
    margin-left: 2px;
    opacity: 0;
    transition: opacity 0.1s;
  }
  
  .cursor.visible {
    opacity: 1;
  }
  
  .hero-actions {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
  }
  
  /* Hero Decoration */
  .hero-decoration {
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    pointer-events: none;
  }
  
  .floating-shapes {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.3;
  }
  
  .shape-1 {
    width: 400px;
    height: 400px;
    background: var(--primary-600);
    top: -200px;
    left: -200px;
    animation: float 20s ease-in-out infinite;
  }
  
  .shape-2 {
    width: 300px;
    height: 300px;
    background: var(--accent-600);
    bottom: -150px;
    right: -150px;
    animation: float 15s ease-in-out infinite reverse;
  }
  
  .shape-3 {
    width: 200px;
    height: 200px;
    background: var(--primary-400);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 10s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  /* Section Headers */
  .section-header {
    text-align: center;
    margin-bottom: var(--space-12);
  }
  
  .section-header .text-lead {
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* Skills */
  .skill-category {
    text-align: center;
  }
  
  .skill-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin: 0 auto var(--space-4);
    background-color: var(--primary-600);
    color: white;
    border-radius: var(--radius-xl);
    transition: transform var(--transition-base);
  }
  
  .card:hover .skill-icon {
    transform: scale(1.1);
  }
  
  .skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.8;
  }
  
  /* Certifications */
  .cert-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .cert-header {
    display: flex;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
  }
  
  .cert-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .cert-title {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-1);
  }
  
  .cert-issuer {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }
  
  .cert-description {
    color: var(--text-secondary);
    margin-bottom: var(--space-4);
    flex: 1;
  }
  
  .cert-skills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  
  .skill-tag {
    padding: var(--space-1) var(--space-3);
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    color: var(--text-secondary);
  }
  
  /* CTA */
  .cta {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Utilities */
  .mb-4 {
    margin-bottom: var(--space-4);
  }
  
  .mb-8 {
    margin-bottom: var(--space-8);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .hero {
      min-height: auto;
      padding: var(--space-8) 0;
    }
    
    .hero-actions {
      flex-direction: column;
      width: 100%;
    }
    
    .hero-actions :global(.btn) {
      width: 100%;
    }
    
    .terminal-content {
      font-size: var(--text-xs);
    }
  }
</style>
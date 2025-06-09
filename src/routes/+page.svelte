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
> Learning cybersecurity through CTFs & bug bounties
$ cat current_focus.txt
> Web Pentesting | CTF Challenges | Bug Bounty Hunting
> SvelteKit | HTML/CSS/JS | Firebase | AI-Assisted Development
$ ./learning-journey.sh
> Building, breaking, and securing things...`;
  
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
  <title>DUARDZ - Cybersecurity Enthusiast & Developer</title>
  <meta name="description" content="Self-taught cybersecurity enthusiast learning through CTFs and bug bounties, building cool stuff with SvelteKit.">
</svelte:head>

<!-- Hero Section -->
<Section size="lg" background="primary">
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-title animate-fadeIn">
        Hi, I'm <span class="text-gradient">Duardz</span>
      </h1>
      <p class="hero-subtitle animate-fadeIn" style="animation-delay: 0.1s">
        Cybersecurity Enthusiast & Self-Taught Developer
      </p>
      <p class="hero-description animate-fadeIn" style="animation-delay: 0.2s">
        I'm on a self-taught journey into cybersecurity, diving deep into CTF challenges and bug bounty hunting. 
        I love building things with SvelteKit and exploring web pentesting. Always learning, always curious!
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
          Check Out My Projects
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          Let's Connect
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
    <h2 class="heading-2">What I've Been Building</h2>
    <p class="text-lead">
      Projects I've worked on while learning cybersecurity and web development
    </p>
  </div>
  
  <div class="grid grid-cols-2 mb-8">
    {#each featuredProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>
  
  <div class="text-center">
    <Button href="/projects" variant="secondary">
      See All My Projects
    </Button>
  </div>
</Section>

<!-- Skills & Expertise -->
<Section background="primary">
  <div class="section-header">
    <h2 class="heading-2">What I'm Learning</h2>
    <p class="text-lead">
      Currently diving into cybersecurity and web development - here's what I'm working with
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
        <h3 class="heading-4">Cybersecurity Learning</h3>
        <ul class="skill-list">
          <li>CTF Challenges</li>
          <li>Web Pentesting</li>
          <li>Bug Bounty Hunting</li>
          <li>Security Research</li>
          <li>Ethical Hacking</li>
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
        <h3 class="heading-4">Development Stack</h3>
        <ul class="skill-list">
          <li>SvelteKit</li>
          <li>HTML/CSS/JavaScript</li>
          <li>Firebase</li>
          <li>Node.js & NPM</li>
          <li>SEO Optimization</li>
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
        <h3 class="heading-4">Tools I Use</h3>
        <ul class="skill-list">
          <li>Git & GitHub</li>
          <li>Figma</li>
          <li>AI Code Generation</li>
          <li>CTF Platforms</li>
          <li>Bug Bounty Tools</li>
        </ul>
      </div>
    </Card>
  </div>
</Section>

<!-- Certifications -->
<Section background="secondary">
  <div class="section-header">
    <h2 class="heading-2">Learning Journey</h2>
    <p class="text-lead">
      Courses and certifications I'm working through in my self-taught journey
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
      See My Learning Path
    </Button>
  </div>
</Section>

<!-- CTA Section -->
<Section size="lg" background="primary">
  <div class="cta">
    <h2 class="heading-2 mb-4">Let's Connect!</h2>
    <p class="text-lead mb-8">
      Always excited to connect with fellow learners, share knowledge, or collaborate on projects.<br>
      Whether you're into cybersecurity, web dev, or just want to chat about tech!
    </p>
    <div class="cta-buttons flex justify-center gap-4">
      <Button href="/contact" size="lg">
        Get In Touch
      </Button>
      <Button href="/about" variant="secondary" size="lg">
        More About My Journey
      </Button>
    </div>
  </div>
</Section>

<style>
  /* Hero Styles - Fixed Version */
  .hero {
    position: relative;
    min-height: 100vh; /* Changed from calc(100vh - 4rem) */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: var(--space-8) 0; /* Added padding for safety */
  }
  
  .hero-content {
    position: relative;
    z-index: 10; /* Increased z-index to ensure content stays on top */
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 var(--space-4); /* Added horizontal padding */
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
  
  /* Terminal - Fixed */
  .hero-terminal {
    background-color: var(--gray-900);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    max-width: 600px;
    margin: 0 auto var(--space-8);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    position: relative; /* Added for proper stacking */
    z-index: 5; /* Ensure terminal stays above background */
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
  
  /* Hero Decoration - Fixed */
  .hero-decoration {
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    pointer-events: none;
  }
  
  .floating-shapes {
    position: absolute; /* Changed from relative */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  
  .shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px); /* Increased blur for softer effect */
    opacity: 0.2; /* Reduced opacity for subtlety */
    will-change: transform; /* Optimization for animations */
  }
  
  .shape-1 {
    width: 300px; /* Reduced size */
    height: 300px;
    background: linear-gradient(135deg, var(--primary-600), var(--primary-400));
    top: -150px;
    left: -150px;
    animation: float 25s ease-in-out infinite;
  }
  
  .shape-2 {
    width: 250px; /* Reduced size */
    height: 250px;
    background: linear-gradient(135deg, var(--accent-600), var(--accent-400));
    bottom: -125px;
    right: -125px;
    animation: float 20s ease-in-out infinite reverse;
  }
  
  .shape-3 {
    width: 150px; /* Reduced size */
    height: 150px;
    background: linear-gradient(135deg, var(--primary-500), var(--accent-500));
    top: 20%;
    right: 20%;
    animation: pulse 15s ease-in-out infinite;
  }
  
  /* Improved animations */
  @keyframes float {
    0%, 100% { 
      transform: translateY(0) rotate(0deg) scale(1); 
    }
    33% { 
      transform: translateY(-30px) rotate(120deg) scale(1.1); 
    }
    66% { 
      transform: translateY(20px) rotate(240deg) scale(0.9); 
    }
  }
  
  @keyframes pulse {
    0%, 100% { 
      transform: scale(1) rotate(0deg); 
      opacity: 0.2; 
    }
    50% { 
      transform: scale(1.2) rotate(180deg); 
      opacity: 0.3; 
    }
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
  
  /* Responsive improvements */
  @media (max-width: 768px) {
    .cta-buttons {
      flex-direction: column;
      gap: var(--space-4);
    }

    .hero {
      min-height: 90vh; /* Adjusted for mobile */
      padding: var(--space-4) 0;
    }
    
    .hero-content {
      padding: 0 var(--space-2);
    }
    
    .hero-actions {
      flex-direction: column;
      width: 100%;
      gap: var(--space-3);
    }
    
    .hero-actions :global(.btn) {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
    
    .terminal-content {
      font-size: var(--text-xs);
      padding: var(--space-3);
    }
    
    /* Reduce shape sizes on mobile */
    .shape-1 {
      width: 200px;
      height: 200px;
      top: -100px;
      left: -100px;
    }
    
    .shape-2 {
      width: 150px;
      height: 150px;
      bottom: -75px;
      right: -75px;
    }
    
    .shape-3 {
      width: 100px;
      height: 100px;
    }
  }
  
  /* Performance optimization */
  @media (prefers-reduced-motion: reduce) {
    .shape-1,
    .shape-2,
    .shape-3 {
      animation: none;
    }
  }
</style>
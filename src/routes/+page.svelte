<!-- src/routes/+page.svelte -->
<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import ProjectCard from '$lib/components/common/ProjectCard.svelte';
  import { getFeaturedProjects } from '$lib/data/projects.js';
  import { getFeaturedCertificates } from '$lib/data/certificates.js';
  
  // Get featured content
  const featuredProjects = getFeaturedProjects();
  const featuredCertificates = getFeaturedCertificates();
  
  // Terminal animation
  let terminalText = '';
  let terminalCursor = true;
  const fullText = `$ whoami
> DUARDZ | Cybersecurity Enthusiast & Web Developer
$ cat /etc/mission.txt
> Learning cybersecurity fundamentals through hands-on practice
> Building cool web apps with modern technologies
$ ./current_focus.sh
> [████████████████] Studying: Web Pentesting Basics
> [████████████████] Building: SvelteKit Projects
> [████████████████] Exploring: CTF Challenges
$ echo "Always learning, always curious!"
> Always learning, always curious!
$ _`;
  
  // Particle system
  let particles = [];
  let heroSection;
  
  onMount(() => {
    // Terminal typing effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        terminalText = fullText.slice(0, index + 1);
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
    
    // Cursor blink
    const cursorInterval = setInterval(() => {
      terminalCursor = !terminalCursor;
    }, 500);
    
    // Initialize particles
    initParticles();
    animateParticles();
    
    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  });
  
  function initParticles() {
    particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    }));
  }
  
  function animateParticles() {
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
    });
    
    requestAnimationFrame(animateParticles);
  }
</script>

<svelte:head>
  <title>DUARDZ - Cybersecurity Enthusiast & Web Developer</title>
  <meta name="description" content="Self-taught cybersecurity enthusiast and web developer. Learning through CTFs, building projects with SvelteKit, and exploring the fascinating world of cybersecurity.">
</svelte:head>

<!-- Hero Section -->
<Section size="lg" background="primary">
  <div class="hero" bind:this={heroSection}>
    <!-- Animated Background -->
    <div class="hero-background">
      <div class="cyber-grid"></div>
      <div class="floating-elements">
        <div class="element element-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="element element-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="9"/>
          </svg>
        </div>
        <div class="element element-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
      </div>
      
      <!-- Particle Canvas -->
      <canvas class="particle-canvas" width="100" height="100"></canvas>
    </div>
    
    <div class="hero-content">
      <div class="hero-badge">
        <div class="badge-dot"></div>
        <span>Learning & Building</span>
      </div>
      
      <h1 class="hero-title animate-fadeIn">
        <span class="title-line-1">CYBER</span>
        <span class="title-line-2">SECURITY</span>
        <span class="title-highlight">ENTHUSIAST</span>
      </h1>
      
      <p class="hero-subtitle animate-fadeIn" style="animation-delay: 0.2s">
        Self-Taught Developer • CTF Player • Security Learner
      </p>
      
      <p class="hero-description animate-fadeIn" style="animation-delay: 0.3s">
        Passionate about cybersecurity and web development. Currently learning through 
        hands-on practice with CTF challenges, building projects with modern web technologies, 
        and exploring the fascinating intersection of security and development.
      </p>
      
      <!-- Terminal Display -->
      <div class="hero-terminal animate-fadeIn" style="animation-delay: 0.4s">
        <div class="terminal-header">
          <div class="terminal-controls">
            <span class="control red"></span>
            <span class="control yellow"></span>
            <span class="control green"></span>
          </div>
          <div class="terminal-title">learning_terminal@duardz:~$</div>
          <div class="terminal-status">
            <div class="status-indicator active"></div>
            <span>LEARNING</span>
          </div>
        </div>
        <div class="terminal-body">
          <pre class="terminal-content">{terminalText}<span class="cursor" class:visible={terminalCursor}>█</span></pre>
        </div>
      </div>
      
      <!-- CTA Buttons -->
      <div class="hero-actions animate-fadeIn" style="animation-delay: 0.6s">
        <Button href="/projects" size="lg" variant="primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          View My Projects
        </Button>
        <Button href="/about" size="lg" variant="secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          My Journey
        </Button>
      </div>
      
      <!-- Quick Stats -->
      <div class="hero-stats animate-fadeIn" style="animation-delay: 0.8s">
        <div class="stat-item">
          <div class="stat-number">3+</div>
          <div class="stat-label">Years Learning</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">10+</div>
          <div class="stat-label">Projects Built</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">24/7</div>
          <div class="stat-label">Curiosity Active</div>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- Featured Projects -->
<Section background="secondary">
  <div class="section-header">
    <div class="section-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      Portfolio
    </div>
    <h2 class="heading-2">Projects I've Built</h2>
    <p class="text-lead">
      A collection of web applications and tools I've created while learning 
      development and exploring cybersecurity concepts. Each project taught me something new!
    </p>
  </div>
  
  <div class="projects-grid">
    {#each featuredProjects as project}
      <div class="project-wrapper">
        <ProjectCard {project} />
      </div>
    {/each}
  </div>
  
  <div class="section-cta">
    <Button href="/projects" variant="secondary" size="lg">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14m-7-7 7 7-7 7"/>
      </svg>
      See All Projects
    </Button>
  </div>
</Section>

<!-- Learning Areas -->
<Section background="primary">
  <div class="section-header">
    <div class="section-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
      Learning Path
    </div>
    <h2 class="heading-2">What I'm Studying</h2>
    <p class="text-lead">
      My self-taught journey covers both cybersecurity fundamentals and 
      modern web development, with hands-on practice being my favorite way to learn.
    </p>
  </div>
  
  <div class="expertise-grid">
    <Card hover animate>
      <div class="expertise-card">
        <div class="expertise-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <div class="icon-glow"></div>
        </div>
        <h3 class="heading-4">Cybersecurity Fundamentals</h3>
        <p class="expertise-description">
          Learning the basics through online courses, CTF challenges, and hands-on practice. 
          Exploring web security, basic penetration testing, and ethical hacking principles.
        </p>
        <ul class="expertise-skills">
          <li>Web Application Security</li>
          <li>CTF Challenges</li>
          <li>Basic Pentesting</li>
          <li>Security Mindset</li>
        </ul>
        <div class="expertise-badge">LEARNING</div>
      </div>
    </Card>
    
    <Card hover animate>
      <div class="expertise-card">
        <div class="expertise-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
          <div class="icon-glow"></div>
        </div>
        <h3 class="heading-4">Web Development</h3>
        <p class="expertise-description">
          Building modern web applications with a focus on clean code and user experience. 
          Always thinking about security while developing.
        </p>
        <ul class="expertise-skills">
          <li>SvelteKit & React</li>
          <li>Modern JavaScript</li>
          <li>Responsive Design</li>
          <li>API Integration</li>
        </ul>
        <div class="expertise-badge">ACTIVE</div>
      </div>
    </Card>
    
    <Card hover animate>
      <div class="expertise-card">
        <div class="expertise-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
          </svg>
          <div class="icon-glow"></div>
        </div>
        <h3 class="heading-4">Continuous Learning</h3>
        <p class="expertise-description">
          Always exploring new technologies, taking online courses, and staying updated 
          with the latest trends in both cybersecurity and web development.
        </p>
        <ul class="expertise-skills">
          <li>Online Courses</li>
          <li>Documentation Reading</li>
          <li>Community Learning</li>
          <li>Practical Projects</li>
        </ul>
        <div class="expertise-badge">ONGOING</div>
      </div>
    </Card>
  </div>
</Section>

<!-- Certifications */
<Section background="secondary">
  <div class="section-header">
    <div class="section-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
      Education
    </div>
    <h2 class="heading-2">Learning Milestones</h2>
    <p class="text-lead">
      Courses and certifications I've completed on my self-taught journey, 
      each one adding new skills and knowledge to my toolkit.
    </p>
  </div>
  
  <div class="certifications-grid">
    {#each featuredCertificates as cert}
      <Card hover animate>
        <div class="cert-card">
          <div class="cert-header">
            <div class="cert-icon" style="background-color: {cert.color}20; border-color: {cert.color};">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                {#if cert.icon === 'shield'}
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                {:else if cert.icon === 'code'}
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                {/if}
              </svg>
            </div>
            <div class="cert-meta">
              <div class="cert-year">{cert.date}</div>
              <h3 class="cert-title">{cert.title}</h3>
              <p class="cert-issuer">{cert.issuer}</p>
            </div>
          </div>
          
          <p class="cert-description">{cert.description}</p>
          
          <div class="cert-skills">
            {#each cert.skills.slice(0, 4) as skill}
              <span class="skill-tag" style="border-color: {cert.color}; color: {cert.color};">{skill}</span>
            {/each}
            {#if cert.skills.length > 4}
              <span class="skill-tag more">+{cert.skills.length - 4} more</span>
            {/if}
          </div>
        </div>
      </Card>
    {/each}
  </div>
  
  <div class="section-cta">
    <Button href="/certificates" variant="secondary" size="lg">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
      See My Learning Path
    </Button>
  </div>
</Section>

<!-- CTA Section -->
<Section size="lg" background="primary">
  <div class="cta-section">
    <div class="cta-content">
      <div class="cta-badge">
        <div class="badge-pulse"></div>
        <span>Open to Opportunities</span>
      </div>
      
      <h2 class="heading-2">Let's Connect!</h2>
      <p class="text-lead">
        I'm always excited to connect with fellow learners, developers, and cybersecurity enthusiasts. 
        Whether you want to collaborate on a project, share knowledge, or just chat about tech!
      </p>
      
      <div class="cta-features">
        <div class="feature">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="9"/>
          </svg>
          <span>Always Eager to Learn</span>
        </div>
        <div class="feature">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="9"/>
          </svg>
          <span>Open to Collaboration</span>
        </div>
        <div class="feature">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="9"/>
          </svg>
          <span>Passionate About Security</span>
        </div>
      </div>
      
      <div class="cta-buttons">
        <Button href="/contact" size="lg" variant="primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Get In Touch
        </Button>
        <Button href="/about" size="lg" variant="secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          Learn About My Journey
        </Button>
      </div>
    </div>
    
    <div class="cta-visual">
      <div class="security-dashboard">
        <div class="dashboard-header">
          <div class="header-status">
            <div class="status-dot learning"></div>
            <span>LEARNING</span>
          </div>
          <div class="header-title">Progress Monitor</div>
        </div>
        <div class="dashboard-metrics">
          <div class="metric">
            <div class="metric-value">85%</div>
            <div class="metric-label">Motivated</div>
          </div>
          <div class="metric">
            <div class="metric-value">∞</div>
            <div class="metric-label">Curious</div>
          </div>
          <div class="metric">
            <div class="metric-value">100%</div>
            <div class="metric-label">Ready</div>
          </div>
        </div>
        <div class="dashboard-chart">
          <div class="chart-bars">
            <div class="bar" style="height: 60%"></div>
            <div class="bar" style="height: 80%"></div>
            <div class="bar" style="height: 45%"></div>
            <div class="bar" style="height: 90%"></div>
            <div class="bar" style="height: 70%"></div>
            <div class="bar" style="height: 95%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>

<style>
  /* All the existing styles remain the same, just adding this new status color */
  .status-dot.learning {
    background: var(--neon-cyan);
    animation: pulse 2s ease-in-out infinite;
  }
  
  /* Keep all the existing styles from the previous version */
  /* Hero Section */
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: var(--space-8) 0;
  }
  
  .hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }
  
  .cyber-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: grid-move 20s linear infinite;
  }
  
  @keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
  
  .floating-elements {
    position: absolute;
    inset: 0;
  }
  
  .element {
    position: absolute;
    color: var(--neon-cyan);
    opacity: 0.3;
    animation: float 6s ease-in-out infinite;
  }
  
  .element-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  .element-2 {
    top: 60%;
    right: 15%;
    animation-delay: 2s;
  }
  
  .element-3 {
    bottom: 30%;
    left: 20%;
    animation-delay: 4s;
  }
  
  .particle-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .hero-badge {
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
  }
  
  .badge-dot {
    width: 8px;
    height: 8px;
    background: var(--success);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .title-line-1,
  .title-line-2 {
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
  
  .hero-subtitle {
    font-family: var(--font-mono);
    font-size: clamp(var(--text-lg), 3vw, var(--text-xl));
    color: var(--text-secondary);
    margin-bottom: var(--space-6);
    letter-spacing: 1px;
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
  
  /* Terminal */
  .hero-terminal {
    background: var(--bg-secondary);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-xl);
    max-width: 700px;
    margin: 0 auto var(--space-8);
    overflow: hidden;
    box-shadow: var(--shadow-glow-lg);
  }
  
  .terminal-header {
    background: var(--bg-tertiary);
    padding: var(--space-3) var(--space-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
  }
  
  .terminal-controls {
    display: flex;
    gap: var(--space-2);
  }
  
  .control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  
  .control.red { background: #ff5f56; }
  .control.yellow { background: #ffbd2e; }
  .control.green { background: #27c93f; }
  
  .terminal-title {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
  
  .terminal-status {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--neon-cyan);
  }
  
  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--neon-cyan);
  }
  
  .status-indicator.active {
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  .terminal-body {
    padding: var(--space-4);
  }
  
  .terminal-content {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    line-height: 1.6;
    color: var(--neon-cyan);
    white-space: pre-wrap;
    word-break: break-word;
  }
  
  .cursor {
    color: var(--neon-cyan);
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
    margin-bottom: var(--space-8);
  }
  
  .hero-stats {
    display: flex;
    justify-content: center;
    gap: var(--space-8);
    flex-wrap: wrap;
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-number {
    font-family: var(--font-mono);
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--neon-cyan);
    line-height: 1;
    margin-bottom: var(--space-1);
  }
  
  .stat-label {
    font-size: var(--text-sm);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  /* Section Components */
  .section-header {
    text-align: center;
    margin-bottom: var(--space-16);
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
  
  .section-cta {
    text-align: center;
    margin-top: var(--space-12);
  }
  
  /* Projects Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-8);
    margin-bottom: var(--space-8);
  }
  
  .project-wrapper {
    position: relative;
  }
  
  /* Expertise Grid */
  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-8);
  }
  
  .expertise-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .expertise-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin: 0 auto var(--space-6);
    color: var(--neon-cyan);
  }
  
  .icon-glow {
    position: absolute;
    inset: -8px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    animation: glow 3s ease-in-out infinite;
  }
  
  .expertise-description {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-6);
    flex: 1;
  }
  
  .expertise-skills {
    list-style: none;
    margin-bottom: var(--space-6);
  }
  
  .expertise-skills li {
    position: relative;
    padding: var(--space-2) 0 var(--space-2) var(--space-6);
    color: var(--text-secondary);
    font-size: var(--text-sm);
  }
  
  .expertise-skills li::before {
    content: '◆';
    position: absolute;
    left: 0;
    color: var(--neon-cyan);
    font-size: var(--text-xs);
  }
  
  .expertise-badge {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    padding: var(--space-1) var(--space-3);
    background: var(--gradient-primary);
    color: var(--bg-primary);
    font-size: var(--text-xs);
    font-weight: 600;
    border-radius: var(--radius-full);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  /* Certifications */
  .certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-8);
  }
  
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
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: var(--radius-xl);
    flex-shrink: 0;
  }
  
  .cert-meta {
    flex: 1;
  }
  
  .cert-year {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--space-1);
  }
  
  .cert-title {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-1);
    line-height: 1.3;
  }
  
  .cert-issuer {
    color: var(--text-secondary);
    font-size: var(--text-sm);
  }
  
  .cert-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-6);
    flex: 1;
  }
  
  .cert-skills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  
  .skill-tag {
    padding: var(--space-1) var(--space-3);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid;
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    font-weight: 500;
  }
  
  .skill-tag.more {
    color: var(--text-muted);
    border-color: var(--border);
  }
  
  /* CTA Section */
  .cta-section {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: var(--space-16);
    align-items: center;
  }
  
  .cta-content {
    text-align: left;
  }
  
  .cta-badge {
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
    text-transform: uppercase;
    letter-spacing: 1px;
    overflow: hidden;
  }
  
  .badge-pulse {
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    opacity: 0.1;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .cta-features {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin: var(--space-8) 0;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--text-secondary);
  }
  
  .feature svg {
    color: var(--success);
    flex-shrink: 0;
  }
  
  .cta-buttons {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
  }
  
  /* Security Dashboard */
  .cta-visual {
    display: flex;
    justify-content: center;
  }
  
  .security-dashboard {
    width: 100%;
    max-width: 400px;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-glow-lg);
  }
  
  .dashboard-header {
    padding: var(--space-4);
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header-status {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--neon-cyan);
  }
  
  .header-title {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
  
  .dashboard-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
    padding: var(--space-6);
    border-bottom: 1px solid var(--border);
  }
  
  .metric {
    text-align: center;
  }
  
  .metric-value {
    font-family: var(--font-mono);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--neon-cyan);
    line-height: 1;
    margin-bottom: var(--space-1);
  }
  
  .metric-label {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .dashboard-chart {
    padding: var(--space-6);
  }
  
  .chart-bars {
    display: flex;
    align-items: end;
    gap: var(--space-2);
    height: 80px;
  }
  
  .bar {
    flex: 1;
    background: var(--gradient-primary);
    border-radius: var(--radius-sm) var(--radius-sm) 0 0;
    min-height: 20%;
    animation: bar-grow 2s ease-out;
  }
  
  @keyframes bar-grow {
    from { height: 0; }
    to { height: var(--height, 50%); }
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .cta-section {
      grid-template-columns: 1fr;
      gap: var(--space-12);
      text-align: center;
    }
    
    .cta-content {
      text-align: center;
    }
    
    .cta-buttons {
      justify-content: center;
    }
  }
  
  @media (max-width: 768px) {
    .hero {
      min-height: 90vh;
      padding: var(--space-4) 0;
    }
    
    .hero-title {
      font-size: clamp(2rem, 12vw, 4rem);
    }
    
    .hero-actions {
      flex-direction: column;
      align-items: center;
    }
    
    .hero-stats {
      gap: var(--space-6);
    }
    
    .terminal-header {
      padding: var(--space-2) var(--space-3);
    }
    
    .terminal-body {
      padding: var(--space-3);
    }
    
    .terminal-content {
      font-size: var(--text-xs);
    }
    
    .projects-grid,
    .expertise-grid,
    .certifications-grid {
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }
    
    .section-header {
      margin-bottom: var(--space-12);
    }
  }
  
  @media (max-width: 480px) {
    .hero-badge,
    .section-badge,
    .cta-badge {
      font-size: var(--text-xs);
      padding: var(--space-1) var(--space-3);
    }
    
    .stat-number {
      font-size: var(--text-2xl);
    }
    
    .cta-buttons {
      flex-direction: column;
      width: 100%;
    }
    
    .cta-buttons :global(.btn) {
      width: 100%;
    }
  }
  
  /* Performance optimizations */
  @media (prefers-reduced-motion: reduce) {
    .cyber-grid,
    .element,
    .badge-dot,
    .status-indicator,
    .icon-glow,
    .badge-pulse,
    .status-dot,
    .bar {
      animation: none !important;
    }
  }
</style>
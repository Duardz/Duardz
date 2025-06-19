<!-- src/routes/certificates/+page.svelte -->
<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  // @ts-ignore
  import Button from '$lib/components/ui/Button.svelte';
  
  // Certificates data
  const certificates = [
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google Career Certificates",
      date: "2025",
      description: "Comprehensive cybersecurity program covering security frameworks, SIEM tools, threat detection, incident response, network security, Python scripting, and Linux security. Developed practical skills in security analysis, vulnerability assessment, and risk management through hands-on labs and real-world scenarios.",
      skills: ["Security Frameworks", "SIEM Tools", "Threat Detection", "Incident Response", "Network Security", "Python", "Linux Security", "Risk Management"],
      icon: "shield",
      featured: true,
      color: "#4285F4",
      credentialId: "GCC-2025-001",
      status: "Active"
    },
    {
      title: "Full Stack Web Development Bootcamp",
      issuer: "KodeGo PH",
      date: "2023",
      description: "Intensive 6-month bootcamp covering modern web development technologies with emphasis on security best practices. Gained expertise in front-end and back-end development, database management, and secure coding principles for building robust web applications.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Secure Coding"],
      icon: "code",
      featured: true,
      color: "#6200EA",
      credentialId: "KG-2023-WD-047",
      status: "Completed"
    },
    {
      title: "Lean Six Sigma White Belt",
      issuer: "Process Excellence Institute",
      date: "2022",
      description: "Foundation-level certification in Lean Six Sigma methodologies focusing on process improvement, waste reduction, and quality enhancement. Applied systematic problem-solving approaches and statistical analysis to optimize operational efficiency.",
      skills: ["Process Improvement", "Statistical Analysis", "Quality Management", "Problem Solving", "Team Collaboration", "Data Analysis"],
      icon: "target",
      featured: false,
      color: "#00BFA5",
      credentialId: "LSS-WB-2022-156",
      status: "Active"
    }
  ];
  
  // Animation and interaction
  let visible = false;
  // @ts-ignore
  let selectedCert = null;
  
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
  
  // @ts-ignore
  function openCertDetails(cert) {
    selectedCert = cert;
    document.body.style.overflow = 'hidden';
  }
  
  function closeCertDetails() {
    selectedCert = null;
    document.body.style.overflow = '';
  }
  
  // Stats for the dashboard
  const stats = {
    totalCerts: certificates.length,
    activeCerts: certificates.filter(c => c.status === 'Active').length,
    skillsLearned: [...new Set(certificates.flatMap(c => c.skills))].length,
    hoursCompleted: 450 // Approximate total hours
  };
</script>

<svelte:head>
  <title>Certifications - DUARDZ | Cybersecurity Professional</title>
  <meta name="description" content="Professional certifications and credentials in cybersecurity, web development, and process improvement. Continuous learning journey in security and technology.">
</svelte:head>

<!-- Hero Section -->
<Section size="lg" background="primary">
  <div class="certs-hero">
    <!-- Animated Background -->
    <div class="hero-background">
      <div class="cert-grid"></div>
      <div class="achievement-elements">
        <div class="achievement-icon icon-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="8" r="7"/>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
          </svg>
        </div>
        <div class="achievement-icon icon-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="achievement-icon icon-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="hero-content">
      <div class="hero-badge">
        <div class="badge-scanner"></div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
        <span>Certified Professional</span>
      </div>
      
      <h1 class="hero-title">
        <span class="title-line">PROFESSIONAL</span>
        <span class="title-highlight">CREDENTIALS</span>
      </h1>
      
      <p class="hero-description">
        Validated expertise through industry-recognized certifications in cybersecurity, 
        web development, and process improvement. Committed to continuous learning and 
        staying current with evolving security landscapes and technologies.
      </p>
      
      <!-- Credentials Dashboard -->
      <div class="credentials-dashboard">
        <div class="dashboard-header">
          <div class="security-level">
            <div class="level-indicator high"></div>
            <span>SECURITY CLEARANCE: VALIDATED</span>
          </div>
          <div class="scan-line"></div>
        </div>
        <div class="dashboard-grid">
          <div class="metric-card">
            <div class="metric-value">{stats.totalCerts}</div>
            <div class="metric-label">Certifications</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">{stats.activeCerts}</div>
            <div class="metric-label">Active Status</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">{stats.skillsLearned}</div>
            <div class="metric-label">Skills Acquired</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">{stats.hoursCompleted}+</div>
            <div class="metric-label">Hours Completed</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- Featured Certifications -->
<Section background="secondary">
  <div class="featured-section" class:visible>
    <div class="section-header">
      <div class="section-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        Featured Credentials
      </div>
      <h2 class="heading-2">Core Certifications</h2>
      <p class="text-lead">
        Primary certifications that demonstrate expertise in cybersecurity and development
      </p>
    </div>
    
    <div class="certificates-grid">
      {#each certificates.filter(cert => cert.featured) as cert, i}
        <Card hover animate>
          <div class="certificate-card featured" 
               style="--delay: {i * 0.1}s; --accent-color: {cert.color};"
               on:click={() => openCertDetails(cert)}
               on:keydown={(e) => e.key === 'Enter' && openCertDetails(cert)}
               role="button"
               tabindex="0">
            
            <div class="card-header">
              <div class="cert-status">
                <div class="status-dot {cert.status.toLowerCase()}"></div>
                <span>{cert.status}</span>
              </div>
              <div class="credential-id">ID: {cert.credentialId}</div>
            </div>
            
            <div class="cert-icon-container">
              <div class="cert-icon" style="background-color: {cert.color}20; border-color: {cert.color};">
                {#if cert.icon === 'shield'}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                {:else if cert.icon === 'code'}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                {/if}
              </div>
            </div>
            
            <div class="cert-content">
              <h3 class="cert-title">{cert.title}</h3>
              <div class="cert-meta">
                <span class="issuer">{cert.issuer}</span>
                <span class="date">{cert.date}</span>
              </div>
              <p class="cert-description">{cert.description}</p>
            </div>
            
            <div class="cert-skills">
              <h4>Core Competencies</h4>
              <div class="skills-grid">
                {#each cert.skills.slice(0, 6) as skill}
                  <span class="skill-chip" style="--skill-color: {cert.color}">{skill}</span>
                {/each}
                {#if cert.skills.length > 6}
                  <span class="skill-chip more">+{cert.skills.length - 6} more</span>
                {/if}
              </div>
            </div>
            
            <div class="cert-actions">
              <button class="view-details">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                View Details
              </button>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</Section>

<!-- Additional Certifications -->
{#if certificates.some(cert => !cert.featured)}
<Section background="primary">
  <div class="additional-section" class:visible>
    <div class="section-header">
      <div class="section-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
        </svg>
        Additional Credentials
      </div>
      <h2 class="heading-2">Specialized Training</h2>
      <p class="text-lead">
        Complementary certifications that enhance security and operational expertise
      </p>
    </div>
    
    <div class="additional-grid">
      {#each certificates.filter(cert => !cert.featured) as cert, i}
        <Card hover animate>
          <div class="certificate-card additional" 
               style="--delay: {i * 0.1}s; --accent-color: {cert.color};"
               on:click={() => openCertDetails(cert)}
               on:keydown={(e) => e.key === 'Enter' && openCertDetails(cert)}
               role="button"
               tabindex="0">
            
            <div class="card-compact-header">
              <div class="cert-icon small" style="background-color: {cert.color}20; border-color: {cert.color};">
                {#if cert.icon === 'target'}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                {/if}
              </div>
              <div class="cert-header-info">
                <h3 class="cert-title compact">{cert.title}</h3>
                <div class="cert-meta compact">
                  <span class="issuer">{cert.issuer}</span>
                  <span class="date">{cert.date}</span>
                </div>
              </div>
            </div>
            
            <p class="cert-description compact">{cert.description}</p>
            
            <div class="cert-skills compact">
              <div class="skills-list">
                {#each cert.skills.slice(0, 4) as skill}
                  <span class="skill-tag" style="--skill-color: {cert.color}">{skill}</span>
                {/each}
                {#if cert.skills.length > 4}
                  <span class="skill-tag more">+{cert.skills.length - 4}</span>
                {/if}
              </div>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</Section>
{/if}

<!-- Learning Journey Section -->
<Section background="secondary">
  <div class="journey-section">
    <div class="section-header">
      <div class="section-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        Continuous Learning
      </div>
      <h2 class="heading-2">Learning <span class="highlight-gradient">Evolution</span></h2>
      <p class="text-lead">
        My commitment to staying ahead of emerging threats and technologies through 
        continuous professional development and hands-on experience.
      </p>
    </div>
    
    <div class="journey-content">
      <div class="journey-stats">
        <div class="stat-card">
          <div class="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-number">450+</div>
            <div class="stat-text">Training Hours</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-number">15+</div>
            <div class="stat-text">Projects Completed</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-number">3+</div>
            <div class="stat-text">Years Experience</div>
          </div>
        </div>
      </div>
      
      <div class="learning-terminal">
        <div class="terminal-header">
          <div class="terminal-controls">
            <span class="control red"></span>
            <span class="control yellow"></span>
            <span class="control green"></span>
          </div>
          <div class="terminal-title">continuous_learning.sh</div>
        </div>
        <div class="terminal-body">
          <div class="terminal-content">
            <div class="command-line">$ whoami</div>
            <div class="output">cybersec_professional@learning-station</div>
            <div class="command-line">$ cat current_objectives.txt</div>
            <div class="output">
              > Advanced Penetration Testing Certification
              > Cloud Security Specialization  
              > Incident Response Expertise
              > Threat Intelligence Analysis
            </div>
            <div class="command-line">$ echo "Learning never stops in cybersecurity"</div>
            <div class="output">Learning never stops in cybersecurity</div>
            <div class="command-line cursor">$ _</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- Certificate Detail Modal -->
{#if selectedCert}
  <div class="modal-overlay" on:click={closeCertDetails} on:keydown={(e) => e.key === 'Escape' && closeCertDetails()}>
    <div class="cert-modal" on:click|stopPropagation>
      <button class="close-button" on:click={closeCertDetails}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      
      <div class="modal-header">
        <div class="modal-icon" style="background-color: {selectedCert.color}20; border-color: {selectedCert.color};">
          {#if selectedCert.icon === 'shield'}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          {:else if selectedCert.icon === 'code'}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          {:else if selectedCert.icon === 'target'}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          {/if}
        </div>
        <div class="modal-title-area">
          <h2 class="modal-title">{selectedCert.title}</h2>
          <div class="modal-meta">
            <span class="modal-issuer">{selectedCert.issuer}</span>
            <span class="modal-date">{selectedCert.date}</span>
            <span class="modal-id">ID: {selectedCert.credentialId}</span>
          </div>
        </div>
        <div class="status-badge {selectedCert.status.toLowerCase()}">
          <div class="status-indicator"></div>
          {selectedCert.status}
        </div>
      </div>
      
      <div class="modal-content">
        <div class="modal-description">
          <h3>Certification Overview</h3>
          <p>{selectedCert.description}</p>
        </div>
        
        <div class="modal-skills">
          <h3>Skills & Competencies</h3>
          <div class="all-skills">
            {#each selectedCert.skills as skill}
              <span class="skill-badge" style="--skill-color: {selectedCert.color}">{skill}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Hero Section */
  .certs-hero {
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
  
  .cert-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(157, 78, 221, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(157, 78, 221, 0.08) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: cert-grid-flow 25s linear infinite;
  }
  
  @keyframes cert-grid-flow {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
  
  .achievement-elements {
    position: absolute;
    inset: 0;
  }
  
  .achievement-icon {
    position: absolute;
    color: var(--neon-purple);
    opacity: 0.4;
    animation: achievement-float 10s ease-in-out infinite;
  }
  
  .icon-1 {
    top: 20%;
    left: 15%;
    animation-delay: 0s;
  }
  
  .icon-2 {
    top: 50%;
    right: 20%;
    animation-delay: 3s;
  }
  
  .icon-3 {
    bottom: 25%;
    left: 25%;
    animation-delay: 6s;
  }
  
  @keyframes achievement-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
    33% { transform: translateY(-12px) rotate(3deg); opacity: 0.6; }
    66% { transform: translateY(-8px) rotate(-3deg); opacity: 0.5; }
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
  
  .badge-scanner {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, var(--neon-purple), transparent);
    opacity: 0.3;
    animation: scanner 3s ease-in-out infinite;
  }
  
  @keyframes scanner {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
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
    background: var(--gradient-accent);
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
  
  /* Credentials Dashboard */
  .credentials-dashboard {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    max-width: 600px;
    margin: 0 auto;
    box-shadow: var(--shadow-glow);
  }
  
  .dashboard-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--border);
  }
  
  .security-level {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--neon-green);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .level-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  
  .level-indicator.high {
    background: var(--neon-green);
    animation: pulse 2s ease-in-out infinite;
    box-shadow: 0 0 10px var(--neon-green);
  }
  
  .scan-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: var(--gradient-primary);
    animation: scan-progress 4s ease-in-out infinite;
  }
  
  @keyframes scan-progress {
    0% { width: 0; }
    50% { width: 100%; }
    100% { width: 0; }
  }
  
  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
  
  .metric-card {
    text-align: center;
    padding: var(--space-3);
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
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
  
  /* Section Components */
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
  
  .highlight-gradient {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* Certificate Cards */
  .certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: var(--space-8);
  }
  
  .additional-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-6);
  }
  
  .certificate-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
  }
  
  .certificate-card.featured {
    background: linear-gradient(135deg, var(--glass-bg) 0%, rgba(0, 212, 255, 0.05) 100%);
  }
  
  .certificate-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-glow-lg);
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-4);
  }
  
  .cert-status {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  
  .status-dot.active {
    background: var(--neon-green);
    animation: pulse 2s ease-in-out infinite;
  }
  
  .status-dot.completed {
    background: var(--neon-cyan);
  }
  
  .credential-id {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
  }
  
  .cert-icon-container {
    display: flex;
    justify-content: center;
    margin-bottom: var(--space-6);
  }
  
  .cert-icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: var(--radius-xl);
    color: var(--accent-color, var(--neon-cyan));
    transition: all var(--transition-base);
  }
  
  .cert-icon.small {
    width: 48px;
    height: 48px;
  }
  
  .certificate-card:hover .cert-icon {
    transform: scale(1.1);
    box-shadow: 0 0 20px var(--accent-color, var(--neon-cyan));
  }
  
  .cert-content {
    flex: 1;
    text-align: center;
    margin-bottom: var(--space-6);
  }
  
  .cert-title {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-3);
    line-height: 1.3;
  }
  
  .cert-meta {
    display: flex;
    justify-content: center;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
    font-size: var(--text-sm);
  }
  
  .issuer {
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  .date {
    color: var(--text-muted);
  }
  
  .cert-description {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: var(--text-sm);
  }
  
  .cert-skills {
    margin-bottom: var(--space-6);
  }
  
  .cert-skills h4 {
    font-size: var(--text-sm);
    font-weight: 600;
    margin-bottom: var(--space-3);
    text-align: center;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    justify-content: center;
  }
  
  .skill-chip {
    padding: var(--space-1) var(--space-3);
    background: rgba(0, 212, 255, 0.1);
    border: 1px solid var(--skill-color, var(--neon-cyan));
    color: var(--skill-color, var(--neon-cyan));
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    font-weight: 500;
    transition: all var(--transition-base);
  }
  
  .skill-chip:hover {
    background: var(--skill-color, var(--neon-cyan));
    color: var(--bg-primary);
  }
  
  .skill-chip.more {
    background: var(--glass-bg);
    border-color: var(--border);
    color: var(--text-muted);
  }
  
  .cert-actions {
    text-align: center;
  }
  
  .view-details {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-6);
    background: var(--gradient-primary);
    color: var(--bg-primary);
    border: none;
    border-radius: var(--radius-lg);
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-base);
  }
  
  .view-details:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  /* Compact Certificate Cards */
  .card-compact-header {
    display: flex;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
  }
  
  .cert-header-info {
    flex: 1;
  }
  
  .cert-title.compact {
    font-size: var(--text-lg);
    text-align: left;
    margin-bottom: var(--space-2);
  }
  
  .cert-meta.compact {
    justify-content: flex-start;
    margin-bottom: 0;
    font-size: var(--text-xs);
  }
  
  .cert-description.compact {
    text-align: left;
    margin-bottom: var(--space-4);
  }
  
  .cert-skills.compact {
    margin-bottom: 0;
  }
  
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  
  .skill-tag {
    padding: var(--space-1) var(--space-2);
    background: var(--glass-bg);
    border: 1px solid var(--skill-color, var(--border));
    color: var(--skill-color, var(--text-secondary));
    border-radius: var(--radius-sm);
    font-size: var(--text-xs);
    font-weight: 500;
  }
  
  .skill-tag.more {
    color: var(--text-muted);
    border-color: var(--border);
  }
  
  /* Learning Journey Section */
  .journey-section {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .journey-content {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: var(--space-8);
    align-items: start;
  }
  
  .journey-stats {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .stat-card {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
  }
  
  .stat-card:hover {
    transform: translateX(4px);
    border-color: var(--border-glow);
  }
  
  .stat-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 212, 255, 0.1);
    border: 2px solid var(--neon-cyan);
    border-radius: var(--radius-lg);
    color: var(--neon-cyan);
    flex-shrink: 0;
  }
  
  .stat-content {
    flex: 1;
  }
  
  .stat-number {
    font-family: var(--font-mono);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1;
    margin-bottom: var(--space-1);
  }
  
  .stat-text {
    color: var(--text-secondary);
    font-size: var(--text-sm);
  }
  
  /* Learning Terminal */
  .learning-terminal {
    background: var(--bg-secondary);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-glow);
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
  
  .terminal-body {
    padding: var(--space-4);
  }
  
  .terminal-content {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    line-height: 1.6;
  }
  
  .command-line {
    color: var(--neon-cyan);
    margin-bottom: var(--space-2);
  }
  
  .output {
    color: var(--text-secondary);
    margin-bottom: var(--space-3);
    margin-left: var(--space-4);
  }
  
  .cursor {
    animation: cursor-blink 1s infinite;
  }
  
  @keyframes cursor-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    z-index: var(--z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4);
  }
  
  .cert-modal {
    background: var(--surface);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-xl);
    max-width: 700px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: var(--shadow-glow);
  }
  
  .close-button {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    width: 40px;
    height: 40px;
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all var(--transition-base);
  }
  
  .close-button:hover {
    background: var(--surface-hover);
    transform: scale(1.05);
  }
  
  .modal-header {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-8);
    border-bottom: 1px solid var(--border);
  }
  
  .modal-icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: var(--radius-xl);
    flex-shrink: 0;
  }
  
  .modal-title-area {
    flex: 1;
  }
  
  .modal-title {
    font-size: var(--text-2xl);
    font-weight: 600;
    margin-bottom: var(--space-2);
  }
  
  .modal-meta {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    font-size: var(--text-sm);
  }
  
  .modal-issuer {
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  .modal-date {
    color: var(--text-muted);
  }
  
  .modal-id {
    font-family: var(--font-mono);
    color: var(--text-muted);
    font-size: var(--text-xs);
  }
  
  .status-badge {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .status-badge.active {
    background: rgba(57, 255, 20, 0.1);
    color: var(--neon-green);
    border: 1px solid var(--neon-green);
  }
  
  .status-badge.completed {
    background: rgba(0, 212, 255, 0.1);
    color: var(--neon-cyan);
    border: 1px solid var(--neon-cyan);
  }
  
  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
  }
  
  .modal-content {
    padding: var(--space-8);
  }
  
  .modal-description {
    margin-bottom: var(--space-6);
  }
  
  .modal-description h3 {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-3);
  }
  
  .modal-description p {
    color: var(--text-secondary);
    line-height: 1.7;
  }
  
  .modal-skills h3 {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-4);
  }
  
  .all-skills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }
  
  .skill-badge {
    padding: var(--space-2) var(--space-4);
    background: rgba(0, 212, 255, 0.1);
    border: 1px solid var(--skill-color, var(--neon-cyan));
    color: var(--skill-color, var(--neon-cyan));
    border-radius: var(--radius-lg);
    font-size: var(--text-sm);
    font-weight: 500;
    transition: all var(--transition-base);
  }
  
  .skill-badge:hover {
    background: var(--skill-color, var(--neon-cyan));
    color: var(--bg-primary);
    transform: translateY(-2px);
  }
  
  /* Responsive */
  @media (max-width: 1024px) {
    .certificates-grid {
      grid-template-columns: 1fr;
    }
    
    .additional-grid {
      grid-template-columns: 1fr;
    }
    
    .journey-content {
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }
    
    .dashboard-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-3);
    }
  }
  
  @media (max-width: 768px) {
    .dashboard-grid {
      grid-template-columns: 1fr;
    }
    
    .journey-stats {
      gap: var(--space-3);
    }
    
    .stat-card {
      flex-direction: column;
      text-align: center;
      padding: var(--space-3);
    }
    
    .modal-header {
      flex-direction: column;
      text-align: center;
    }
    
    .modal-icon {
      width: 64px;
      height: 64px;
    }
    
    .cert-modal {
      margin: var(--space-2);
    }
  }
  
  @media (max-width: 480px) {
    .hero-title {
      font-size: clamp(2rem, 8vw, 3rem);
    }
    
    .credentials-dashboard {
      padding: var(--space-4);
    }
    
    .certificates-grid,
    .additional-grid {
      gap: var(--space-4);
    }
    
    .modal-content,
    .modal-header {
      padding: var(--space-4);
    }
  }
</style>
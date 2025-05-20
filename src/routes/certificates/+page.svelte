<!-- Certificates Page: src/routes/certificates/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  
  // Certificates data
  const certificates = [
    {
      title: "Google Cybersecurity",
      issuer: "Google",
      date: 2025,
      description: "Completed the Google Cybersecurity Professional Certificate program covering security frameworks, SIEM tools, threat detection, incident response, network security, Python scripting, and Linux security. Developed skills in security analysis, vulnerability assessment, and risk management through hands-on labs and projects.",
      skills: ["Security Frameworks", "SIEM Tools", "Threat Detection", "Incident Response", "Network Security", "Python", "Linux", "Security Analysis"],
      icon: "award",
      featured: true,
      color: "#4285F4"
    },
    {
      title: "Full Stack Web Development",
      issuer: "KodeGo PH",
      date: "2023",
      description: "Completed an immersive web development bootcamp focused on front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and database integration.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      icon: "award",
      featured: true,
      color: "#6200EA"
    },
    {
      title: "Lean Six Sigma White Belt",
      issuer: "Unknown",
      date: "2022",
      description: "Gained foundational knowledge of Lean Six Sigma principles, focusing on process improvement, efficiency, and problem-solving frameworks.",
      skills: ["Process Improvement", "Efficiency Analysis", "Problem Solving", "Team Collaboration"],
      icon: "key",
      featured: false,
      color: "#00BFA5"
    }
  ];
  
  // For animation
  let visible = false;
  
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<svelte:head>
  <title>Certificates | CyberPortfolio</title>
</svelte:head>

<!-- Featured Certificates -->
{#if certificates.some(cert => cert.featured)}
  <section class="section featured-section" class:visible>
    <div class="container">
      <div class="section-header">
        <h2>Featured Certifications</h2>
        <div class="section-divider"></div>
      </div>
      
      <div class="certificates-grid">
        {#each certificates.filter(cert => cert.featured) as cert, i}
          <div class="certificate-card featured" class:visible style="--delay: {i * 0.1}s; --accent-color: {cert.color};">
            <div class="card-ribbon"></div>
            <div class="card-header">
              <div class="icon-container">
                <div class="icon">
                  {#if cert.icon === 'award'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  {:else if cert.icon === 'shield'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  {/if}
                </div>
              </div>
              <div class="title-wrapper">
                <div class="badge-container">
                  <span class="badge" style="background-color: {cert.color};">Featured</span>
                </div>
                <h3>{cert.title}</h3>
              </div>
            </div>
            
            <div class="meta">
              <div class="meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>{cert.issuer}</span>
              </div>
              <div class="meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{cert.date}</span>
              </div>
            </div>
            
            <p class="description">{cert.description}</p>
            
            <div class="skills-container">
              <h4>Key Skills</h4>
              <div class="skill-tags">
                {#each cert.skills as skill}
                  <span class="skill-tag" style="--skill-color: {cert.color}">{skill}</span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}

<!-- Other Certificates -->
{#if certificates.some(cert => !cert.featured)}
  <section class="section" class:visible>
    <div class="container">
      <div class="section-header">
        <h2>Additional Certifications</h2>
        <div class="section-divider"></div>
      </div>
      
      <div class="certificates-grid secondary-grid">
        {#each certificates.filter(cert => !cert.featured) as cert, i}
          <div class="certificate-card" class:visible style="--delay: {i * 0.1}s; --accent-color: {cert.color};">
            <div class="card-header">
              <div class="icon-container">
                <div class="icon">
                  {#if cert.icon === 'key'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                    </svg>
                  {:else if cert.icon === 'target'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  {/if}
                </div>
              </div>
              <div class="title-wrapper">
                <h3>{cert.title}</h3>
              </div>
            </div>
            
            <div class="meta">
              <div class="meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>{cert.issuer}</span>
              </div>
              <div class="meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{cert.date}</span>
              </div>
            </div>
            
            <p class="description">{cert.description}</p>
            
            <div class="skills-container">
              <h4>Key Skills</h4>
              <div class="skill-tags">
                {#each cert.skills as skill}
                  <span class="skill-tag" style="--skill-color: {cert.color}">{skill}</span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}

<!-- Development Section -->
<section class="dev-section" class:visible>
  <div class="container">
    <div class="dev-content">
      <div class="dev-text">
        <h2>Commitment to <span class="highlight">Growth</span></h2>
        <p>
          In the rapidly evolving field of cybersecurity, continuous learning is essential.
          I regularly participate in professional development activities including workshops,
          conferences, specialized training programs, and security challenges.
        </p>
        <div class="dev-stats">
          <div class="stat-item">
            <div class="stat-value">100+</div>
            <div class="stat-label">Hours of Training</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">5+</div>
            <div class="stat-label">Active Projects</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">3+</div>
            <div class="stat-label">Years Learning</div>
          </div>
        </div>
      </div>
      
      <div class="terminal-container">
        <div class="terminal-header">
          <div class="terminal-buttons">
            <span class="terminal-button"></span>
            <span class="terminal-button"></span>
            <span class="terminal-button"></span>
          </div>
          <div class="terminal-title">cybersec-journey.sh</div>
        </div>
        <div class="terminal">
          <div class="terminal-lines">
            <div class="terminal-line">$ echo "Continuous improvement is the key to success"</div>
            <div class="terminal-line result">Continuous improvement is the key to success</div>
            <div class="terminal-line">$ sudo apt-get update && sudo apt-get upgrade knowledge -y</div>
            <div class="terminal-line result">Upgrading skills... [████████████████] 100%</div>
            <div class="terminal-line">$ ./start-new-learning-path.sh</div>
            <div class="terminal-line cursor">_</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Base styles */
  :global(:root) {
    --card-hover-translate: translateY(-6px);
    --animation-timing: 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  }
  
  .section,
  
  .visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .container {
    width: 95%; /* Increased from 90% to reduce side margins on mobile */
    max-width: 1400px; /* Increased from 1200px for better use of large screens */
    margin: 0 auto;
    padding: 0 1rem; /* Added padding to ensure content doesn't touch screen edges */
  }
  
  .highlight {
    color: var(--secondary);
    position: relative;
    z-index: 1;
  }
  
  .highlight::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-color: rgba(98, 0, 234, 0.1);
    z-index: -1;
    transform: skewX(-5deg);
  }
  
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(98, 0, 234, 0.4); }
    70% { box-shadow: 0 0 0 15px rgba(98, 0, 234, 0); }
    100% { box-shadow: 0 0 0 0 rgba(98, 0, 234, 0); }
  }
  
  /* Section styling */
  .section {
    padding: 4rem 0; /* Reduced padding for mobile */
    position: relative;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 2.5rem; /* Reduced margin for mobile */
    position: relative;
  }
  
  .section-header h2 {
    font-size: clamp(1.5rem, 4vw, 2rem); /* Responsive font size */
    font-weight: 700;
    margin-bottom: 1rem;
    display: inline-block;
  }
  
  .section-divider {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--secondary), rgba(98, 0, 234, 0.3));
    margin: 0 auto;
    border-radius: 2px;
  }
  
  .featured-section {
    position: relative;
    z-index: 1;
  }
  
  .featured-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236200ea' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: -1;
    opacity: 0.4;
  }
  
  /* Certificate cards */
  .certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjusted for better mobile responsiveness */
    gap: 1.5rem; /* Reduced gap for mobile */
  }
  
  .secondary-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Adjusted for better mobile responsiveness */
  }
  
  /* Added media query for larger screens to display more columns */
  @media (min-width: 1440px) {
    .certificates-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .secondary-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .certificate-card {
    background-color: var(--card-bg);
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    padding: 1.5rem; /* Reduced from 1.75rem for mobile */
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform var(--animation-timing), 
                box-shadow var(--animation-timing),
                opacity 0.5s ease;
    opacity: 0;
    transform: translateY(20px);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .certificate-card.visible {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }
  
  .certificate-card:hover {
    transform: var(--card-hover-translate);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  .certificate-card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.05) 0%, 
                rgba(255, 255, 255, 0) 60%);
    pointer-events: none;
  }
  
  .certificate-card.featured {
    border: none;
  }
  
  .card-ribbon {
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background: linear-gradient(to bottom, var(--accent-color), transparent);
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  
  .card-header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.25rem; /* Reduced from 1.5rem for mobile */
    position: relative;
  }
  
  .icon-container {
    margin-right: 1rem;
    margin-top: 0.25rem;
  }
  
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px; /* Reduced from 48px for mobile */
    height: 42px; /* Reduced from 48px for mobile */
    background-color: rgba(98, 0, 234, 0.08);
    border-radius: 12px;
    color: var(--accent-color, var(--secondary));
    transition: all 0.3s ease;
  }
  
  .certificate-card:hover .icon {
    background-color: rgba(98, 0, 234, 0.12);
    transform: scale(1.05);
  }
  
  .title-wrapper {
    flex: 1;
  }
  
  .badge-container {
    margin-bottom: 0.5rem;
  }
  
  .badge {
    display: inline-block;
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.2rem 0.7rem;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 5px rgba(98, 0, 234, 0.2);
  }
  
  .title-wrapper h3 {
    font-size: 1.3rem; /* Reduced from 1.4rem for mobile */
    margin: 0;
    line-height: 1.3;
    transition: color 0.3s ease;
  }
  
  .certificate-card:hover .title-wrapper h3 {
    color: var(--accent-color, var(--secondary));
  }
  
  /* Meta information */
  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.25rem;
    font-size: 0.9rem;
  }
  
  .meta-item {
    display: flex;
    align-items: center;
    color: var(--text-secondary);
  }
  
  .meta-item svg {
    margin-right: 0.5rem;
    opacity: 0.7;
  }
  
  .meta-item span {
    font-weight: 500;
  }
  
  /* Description */
  .description {
    margin-bottom: 1.5rem; /* Reduced from 1.75rem for mobile */
    flex: 1;
    line-height: 1.6;
    color: var(--text-secondary);
    font-size: 0.95rem; /* Added for better readability on mobile */
  }
  
  /* Skills */
  .skills-container {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .skills-container h4 {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
    font-weight: 600;
  }
  
  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem; /* Reduced from 0.6rem for mobile */
  }
  
  .skill-tag {
    background-color: rgba(98, 0, 234, 0.08);
    color: var(--accent-color, var(--secondary));
    padding: 0.25rem 0.7rem; /* Reduced padding for mobile */
    border-radius: 50px;
    font-size: 0.75rem; /* Reduced from 0.8rem for mobile */
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid rgba(var(--accent-color, 98, 0, 234), 0.05);
    margin-bottom: 0.25rem; /* Added to improve wrapping on small screens */
  }
  
  .skill-tag:hover {
    background-color: rgba(98, 0, 234, 0.15);
    transform: translateY(-2px);
  }
  
  /* Development Section */
  .dev-section {
    background-color: var(--dark-elevated);
    padding: 4rem 0; /* Reduced padding for mobile */
    position: relative;
    overflow: hidden;
  }
  
  .dev-section::before {
    content: "";
    position: absolute;
    top: -150px;
    right: -150px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(98, 0, 234, 0.1) 0%, rgba(98, 0, 234, 0) 60%);
    border-radius: 50%;
    z-index: 0;
  }
  
  .dev-section::after {
    content: "";
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(98, 0, 234, 0.08) 0%, rgba(98, 0, 234, 0) 60%);
    border-radius: 50%;
    z-index: 0;
  }
  
  .dev-content {
    display: flex;
    align-items: center;
    gap: 2rem; /* Reduced from 3rem for mobile */
    position: relative;
    z-index: 1;
  }
  
  .dev-text {
    flex: 1;
    text-align: left;
  }
  
  .dev-text h2 {
    font-size: clamp(1.8rem, 4vw, 2.2rem); /* Responsive font size */
    margin-bottom: 1.25rem; /* Reduced from 1.5rem for mobile */
    font-weight: 700;
  }
  
  .dev-text p {
    font-size: clamp(0.95rem, 1.5vw, 1.05rem); /* Responsive font size */
    line-height: 1.7;
    margin-bottom: 1.5rem; /* Reduced from 2rem for mobile */
    color: var(--text-secondary);
  }
  
  .dev-stats {
    display: flex;
    gap: 1.5rem; /* Reduced from 2rem for mobile */
    margin-top: 1.5rem; /* Reduced from 2rem for mobile */
    flex-wrap: wrap; /* Added for better mobile layout */
  }
  
  .stat-item {
    text-align: center;
    min-width: 90px; /* Added to prevent squishing on small screens */
  }
  
  .stat-value {
    font-size: clamp(2rem, 4vw, 2.5rem); /* Responsive font size */
    font-weight: 700;
    color: var(--secondary);
    margin-bottom: 0.25rem;
    line-height: 1;
  }
  
  .stat-label {
    font-size: clamp(0.75rem, 1.5vw, 0.9rem); /* Responsive font size */
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  /* Terminal */
  .terminal-container {
    flex: 1;
    max-width: 100%; /* Changed from 550px for mobile responsiveness */
    width: 100%;
  }
  
  .terminal-header {
    background-color: #1a1a27;
    padding: 0.75rem 1rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
  }
  
  .terminal-buttons {
    display: flex;
    gap: 8px;
  }
  
  .terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: block;
  }
  
  .terminal-button:nth-child(1) {
    background-color: #ff5f56;
  }
  
  .terminal-button:nth-child(2) {
    background-color: #ffbd2e;
  }
  
  .terminal-button:nth-child(3) {
    background-color: #27c93f;
  }
  
  .terminal-title {
    margin-left: 1rem;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
  }
  
  .terminal {
    background-color: #1E1E2E;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  
  .terminal-lines {
    padding: 1.25rem; /* Reduced from 1.5rem for mobile */
    font-family: "JetBrains Mono", Consolas, Monaco, "Andale Mono", monospace;
    font-size: 0.85rem; /* Reduced from 0.95rem for mobile */
    line-height: 1.7;
    color: #a9b1d6;
    overflow-x: auto; /* Added to handle text overflow on small screens */
  }
  
  .terminal-line {
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }
  
  .terminal-line.result {
    color: #7dcfff;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  
  .terminal-line.cursor::after {
    content: "";
    display: inline-block;
    width: 8px;
    height: 18px;
    background-color: #a9b1d6;
    margin-left: 4px;
    animation: cursor-blink 1.2s infinite;
    vertical-align: text-bottom;
  }
  
  @keyframes cursor-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  /* Responsive Adjustments */
  @media (max-width: 1200px) {
    .container {
      width: 95%;
    }
    
    .dev-content {
      gap: 1.5rem;
    }
  }
  
  @media (max-width: 1024px) {
    .dev-content {
      flex-direction: column;
      text-align: center;
    }
    
    .dev-stats {
      justify-content: center;
    }
    
    .dev-text {
      margin-bottom: 2rem;
    }
    
    .terminal-container {
      max-width: 95%; /* Added to prevent overflow on medium screens */
    }
  }
  
  @media (max-width: 768px) {
    .section,
    .certificates-grid,
    .secondary-grid {
      grid-template-columns: 1fr;
      gap: 1.25rem; /* Further reduced gap */
    }
    
    .dev-stats {
      flex-direction: row; /* Changed from column to allow better wrapping */
      gap: 1.25rem;
      flex-wrap: wrap;
      justify-content: space-around; /* Evenly space stats */
    }
    
    .stat-item {
      flex: 0 0 calc(33% - 1.25rem); /* Allow 3 items per row with gap */
      min-width: 80px; /* Minimum width for small screens */
    }
  }
  
  @media (max-width: 480px) {
    .container {
      width: 92%; /* Slightly reduced width for very small screens */
      padding: 0 0.5rem; /* Reduced padding */
    }
    
    .section,
    .dev-section {
      padding: 2.5rem 0; /* Further reduced padding */
    }
    
    .card-header {
      flex-direction: row; /* Keep row layout on small screens for better space usage */
      align-items: center;
    }
    
    .icon-container {
      margin-bottom: 0;
    }
    
    .icon {
      width: 36px; /* Further reduced for very small screens */
      height: 36px;
    }
    
    .title-wrapper h3 {
      font-size: 1.2rem; /* Further reduced for very small screens */
    }
    
    .certificate-card {
      padding: 1.25rem; /* Further reduced padding */
    }
    
    .meta {
      flex-direction: column; /* Stack meta items for very small screens */
      gap: 0.5rem;
    }
    
    .skill-tags {
      gap: 0.4rem; /* Further reduced gap */
    }
    
    .stat-item {
      flex: 0 0 calc(50% - 1rem); /* Allow 2 items per row on very small screens */
    }
    
  .terminal-lines {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>
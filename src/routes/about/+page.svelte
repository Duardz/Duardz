<!-- src/routes/about/+page.svelte -->
<script>
// @ts-nocheck

  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  
  const journey = [
    {
      year: '2022',
      title: 'The Spark',
      description: 'Started getting curious about cybersecurity after watching some YouTube videos. Decided to dive deeper and began exploring online resources and communities.',
      icon: 'power',
      status: 'COMPLETED'
    },
    {
      year: '2023',
      title: 'Learning to Code',
      description: 'Jumped into web development through online courses and tutorials. Built my first websites and started understanding how the internet actually works.',
      icon: 'code',
      status: 'COMPLETED'
    },
    {
      year: '2024',
      title: 'Security Meets Development',
      description: 'Started connecting the dots between coding and security. Began exploring CTF challenges and learning about web application vulnerabilities.',
      icon: 'shield',
      status: 'COMPLETED'
    },
    {
      year: '2025',
      title: 'Continuous Learning',
      description: 'Currently balancing learning cybersecurity fundamentals with building cool projects. Every day brings something new to discover and understand.',
      icon: 'target',
      status: 'ACTIVE'
    }
  ];
  
  const learningAreas = [
    { name: 'Web Development', color: '#00D4FF', status: 'Leading Projects at Work' },
    { name: 'SvelteKit & Modern JS', color: '#9D4EDD', status: 'Building Real Applications' },
    { name: 'Database Design', color: '#39FF14', status: 'Learning for Work Projects' },
    { name: 'UI/UX Design', color: '#FF6B35', status: 'Improving Daily' },
    { name: 'Basic Security Concepts', color: '#FFA500', status: 'Side Learning' },
    { name: 'Problem Solving', color: '#FF073A', status: 'Always Improving' }
  ];
</script>

<svelte:head>
  <title>About - DUARDZ | Learning Cybersecurity & Development</title>
  <meta name="description" content="Self-taught cybersecurity enthusiast and web developer. Currently learning through online courses, CTF challenges, and building projects. Always curious and eager to grow!">
</svelte:head>

<!-- Hero Section -->
<Section background="secondary">
  <div class="about-hero">
    <div class="hero-badge">
      <div class="badge-pulse"></div>
      <span>STUDENT STATUS: ALWAYS LEARNING</span>
    </div>
    <h1 class="heading-1">MY LEARNING JOURNEY</h1>
    <p class="hero-text">
      Self-taught enthusiast exploring cybersecurity and web development, 
      one tutorial and challenge at a time. Still figuring things out, but loving every minute of it!
    </p>
  </div>
</Section>

<!-- Main Profile Section -->
<Section background="primary">
  <div class="profile-section">
    <div class="profile-grid">
      <!-- Profile Display -->
      <div class="profile-container">
        <div class="profile-frame">
          <div class="frame-corner tl"></div>
          <div class="frame-corner tr"></div>
          <div class="frame-corner bl"></div>
          <div class="frame-corner br"></div>
          <div class="scan-overlay"></div>
          <img src="/images/profile.jpg" alt="DUARDZ - Learning Cybersecurity" class="profile-image" />
          <div class="profile-status">
            <div class="status-indicator learning"></div>
            <span>LEARNING</span>
          </div>
        </div>
        
        <div class="profile-stats">
          <div class="stat-item">
            <div class="stat-value">3+</div>
            <div class="stat-label">Years Curious</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">10+</div>
            <div class="stat-label">Projects Built</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">∞</div>
            <div class="stat-label">Things to Learn</div>
          </div>
        </div>
      </div>
      
      <!-- Bio Content -->
      <div class="bio-section">
        <div class="section-header">
          <div class="header-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            LEARNER PROFILE
          </div>
          <h2 class="heading-2">Hey, I'm DUARDZ!</h2>
        </div>
        
        <div class="bio-content">
          <div class="bio-terminal">
            <div class="terminal-header">
              <div class="terminal-controls">
                <span class="control active"></span>
                <span class="control"></span>
                <span class="control"></span>
              </div>
              <span class="terminal-title">learning_log.txt</span>
            </div>
            <div class="terminal-body">
              <div class="log-entry">
                <span class="timestamp">[2022]</span>
                <span class="event">STATUS: Got curious about cybersecurity</span>
              </div>
              <div class="log-entry">
                <span class="timestamp">[2023]</span>
                <span class="event">PROGRESS: Started learning web development</span>
              </div>
              <div class="log-entry">
                <span class="timestamp">[2024]</span>
                <span class="event">MILESTONE: First CTF challenges attempted</span>
              </div>
              <div class="log-entry active">
                <span class="timestamp">[NOW]</span>
                <span class="event">CURRENT: Learning every day, building stuff!</span>
              </div>
            </div>
          </div>
          
          <div class="bio-text">
            <p>
              <strong>Current Status:</strong> Web development intern at Saint Patrick's Academy, where I'm leading the development 
              of their enrollment and information website. It's my first real professional project and I'm learning so much!
            </p>
            <p>
              <strong>What I Do:</strong> Working with modern web technologies, designing user interfaces, handling databases, 
              and making sure everything works smoothly. Leading a project has taught me about planning, problem-solving, 
              and communicating with stakeholders.
            </p>
            <p>
              <strong>My Focus:</strong> Right now I'm all-in on web development - mastering the fundamentals while building 
              real applications. Cybersecurity is still my long-term interest, but I'm focused on becoming really good at 
              development first since that's where I can make the biggest impact right now.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- Learning Timeline -->
<Section background="secondary">
  <div class="timeline-section">
    <div class="section-header">
      <div class="header-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        LEARNING TIMELINE
      </div>
      <h2 class="heading-2">My Learning Path</h2>
      <p class="text-lead">The journey so far - from curious beginner to... well, still a beginner, but a more informed one!</p>
    </div>
    
    <div class="timeline">
      {#each journey as milestone, i}
        <div class="timeline-item" style="--delay: {i * 0.2}s">
          <div class="timeline-marker">
            <div class="marker-ring"></div>
            <div class="marker-core">
              {#if milestone.icon === 'power'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
                  <line x1="12" y1="2" x2="12" y2="12"/>
                </svg>
              {:else if milestone.icon === 'code'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              {:else if milestone.icon === 'shield'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              {:else if milestone.icon === 'target'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              {/if}
            </div>
          </div>
          
          <Card hover animate variant="cyber">
            <div class="timeline-content">
              <div class="content-header">
                <div class="year-badge">{milestone.year}</div>
                <div class="status-badge {milestone.status.toLowerCase()}">
                  <div class="status-dot"></div>
                  <span>{milestone.status}</span>
                </div>
              </div>
              <h3 class="timeline-title">{milestone.title}</h3>
              <p class="timeline-description">{milestone.description}</p>
            </div>
          </Card>
        </div>
      {/each}
    </div>
  </div>
</Section>

<!-- Tech Stack & Tools -->
<Section background="primary">
  <div class="tech-section">
    <div class="section-header">
      <div class="header-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        TECH STACK
      </div>
      <h2 class="heading-2">Tools & Technologies</h2>
      <p class="text-lead">The technologies I'm working with daily at Saint Patrick's Academy and in my personal projects</p>
    </div>
    
    <div class="tech-categories">
      <!-- Frontend -->
      <Card hover animate variant="glass">
        <div class="tech-category">
          <div class="category-header">
            <div class="category-icon frontend">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3 class="category-title">Frontend Development</h3>
          </div>
          <div class="tech-items">
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>SvelteKit</span>
              <div class="tech-badge">Main Framework</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>TypeScript</span>
              <div class="tech-badge">Daily Use</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>Tailwind CSS</span>
              <div class="tech-badge">Styling</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot secondary"></div>
              <span>Responsive Design</span>
              <div class="tech-badge">Mobile-First</div>
            </div>
          </div>
        </div>
      </Card>
      
      <!-- Backend & Database -->
      <Card hover animate variant="glass">
        <div class="tech-category">
          <div class="category-header">
            <div class="category-icon backend">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 class="category-title">Backend & Database</h3>
          </div>
          <div class="tech-items">
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>Firebase</span>
              <div class="tech-badge">Backend Platform</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>Firestore</span>
              <div class="tech-badge">Database</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>Firebase Auth</span>
              <div class="tech-badge">Authentication</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot secondary"></div>
              <span>AES Encryption</span>
              <div class="tech-badge">Data Security</div>
            </div>
          </div>
        </div>
      </Card>
      
      <!-- Tools & Workflow -->
      <Card hover animate variant="glass">
        <div class="tech-category">
          <div class="category-header">
            <div class="category-icon tools">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <h3 class="category-title">Tools & Workflow</h3>
          </div>
          <div class="tech-items">
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>Git & GitHub</span>
              <div class="tech-badge">Version Control</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>Figma</span>
              <div class="tech-badge">Design & Prototyping</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>Claude AI</span>
              <div class="tech-badge">Code Generation</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot secondary"></div>
              <span>VS Code</span>
              <div class="tech-badge">Development</div>
            </div>
          </div>
        </div>
      </Card>
      
      <!-- Learning & Interests -->
      <Card hover animate variant="glass">
        <div class="tech-category">
          <div class="category-header">
            <div class="category-icon learning">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 class="category-title">Security & Best Practices</h3>
          </div>
          <div class="tech-items">
            <div class="tech-item">
              <div class="tech-dot primary"></div>
              <span>Data Encryption</span>
              <div class="tech-badge">User Privacy</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot secondary"></div>
              <span>Secure Authentication</span>
              <div class="tech-badge">Firebase Auth</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot learning"></div>
              <span>Web Security</span>
              <div class="tech-badge">Learning</div>
            </div>
            <div class="tech-item">
              <div class="tech-dot learning"></div>
              <span>Performance Optimization</span>
              <div class="tech-badge">Improving</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</Section>

<!-- Current Focus -->
<Section background="secondary">
  <div class="focus-section">
    <div class="section-header">
      <div class="header-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
        </svg>
        CURRENT FOCUS
      </div>
      <h2 class="heading-2">What I'm Working On</h2>
      <p class="text-lead">Here's what's keeping me busy these days - always juggling learning with building!</p>
    </div>
    
    <div class="focus-grid">
      <Card hover animate variant="glow">
        <div class="focus-card">
          <div class="focus-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <div class="icon-pulse"></div>
          </div>
          <h3 class="heading-4">Learning Web Security</h3>
          <p class="focus-description">
            Working through OWASP Top 10, trying to understand common vulnerabilities. 
            It's fascinating (and a bit scary) how many ways things can go wrong!
          </p>
          <div class="focus-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: 40%"></div>
            </div>
            <span class="progress-text">Still Learning...</span>
          </div>
        </div>
      </Card>
      
      <Card hover animate variant="glow">
        <div class="focus-card">
          <div class="focus-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            <div class="icon-pulse"></div>
          </div>
          <h3 class="heading-4">Building Cool Stuff</h3>
          <p class="focus-description">
            Creating projects with SvelteKit and other modern tools. Each project teaches me 
            something new about development and helps solidify what I've learned.
          </p>
          <div class="focus-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
            </div>
            <span class="progress-text">Always Building</span>
          </div>
        </div>
      </Card>
      
      <Card hover animate variant="glow">
        <div class="focus-card">
          <div class="focus-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="9"/>
            </svg>
            <div class="icon-pulse"></div>
          </div>
          <h3 class="heading-4">CTF Challenges</h3>
          <p class="focus-description">
            Slowly working through beginner CTF challenges. They're tough but super rewarding 
            when you finally crack them. Each solve feels like a small victory!
          </p>
          <div class="focus-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: 30%"></div>
            </div>
            <span class="progress-text">One Flag at a Time</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</Section>

<!-- Learning Philosophy -->
<Section background="primary">
  <div class="philosophy-section">
    <div class="section-header">
      <div class="header-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"/>
          <path d="M12 9v4"/>
          <path d="M12 17h.01"/>
        </svg>
        LEARNING MINDSET
      </div>
      <h2 class="heading-2">How I Approach Learning</h2>
    </div>
    
    <div class="philosophy-grid">
      <Card hover variant="glass">
        <div class="philosophy-item">
          <div class="philosophy-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <h3 class="philosophy-title">Learning by Doing</h3>
          <p class="philosophy-text">
            I learn best when I'm actually building or breaking things. Reading is great, 
            but nothing beats hands-on experience and making mistakes!
          </p>
        </div>
      </Card>
      
      <Card hover variant="glass">
        <div class="philosophy-item">
          <div class="philosophy-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 2v4"/>
              <path d="M16 2v4"/>
              <rect width="18" height="18" x="3" y="4" rx="2"/>
              <path d="M3 10h18"/>
            </svg>
          </div>
          <h3 class="philosophy-title">Consistency Over Intensity</h3>
          <p class="philosophy-text">
            I try to learn something new every day, even if it's just for 30 minutes. 
            Small, consistent steps add up to big progress over time.
          </p>
        </div>
      </Card>
      
      <Card hover variant="glass">
        <div class="philosophy-item">
          <div class="philosophy-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <rect width="8" height="4" x="8" y="2" rx="1"/>
            </svg>
          </div>
          <h3 class="philosophy-title">Document Everything</h3>
          <p class="philosophy-text">
            I write down what I learn, take notes, and build projects to remember concepts. 
            If I don't document it, I'll probably forget it next week!
          </p>
        </div>
      </Card>
      
      <Card hover variant="glass">
        <div class="philosophy-item">
          <div class="philosophy-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3 class="philosophy-title">Community Learning</h3>
          <p class="philosophy-text">
            The cybersecurity and dev communities are amazing! I learn so much from forums, 
            Discord servers, and just talking to other learners and professionals.
          </p>
        </div>
      </Card>
    </div>
  </div>
</Section>

<!-- Call to Action -->
<Section background="secondary">
  <div class="cta-section">
    <Card variant="cyber">
      <div class="cta-content">
        <div class="cta-badge">
          <div class="badge-scan"></div>
          <span>ALWAYS OPEN TO CONNECT</span>
        </div>
        
        <h2 class="heading-2">Let's Learn Together!</h2>
        <p class="text-lead">
          I'm always excited to connect with fellow learners, students, or anyone passionate 
          about cybersecurity and development. Whether you're just starting out or you're an expert 
          who can teach me something new!
        </p>
        
        <div class="cta-features">
          <div class="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="9"/>
            </svg>
            <span>Love Learning from Others</span>
          </div>
          <div class="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="9"/>
            </svg>
            <span>Happy to Share What I Know</span>
          </div>
          <div class="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="9"/>
            </svg>
            <span>Always Up for Collaboration</span>
          </div>
        </div>
        
        <div class="cta-buttons">
          <Button href="/contact" size="lg" variant="primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Let's Chat!
          </Button>
          <Button href="/projects" size="lg" variant="secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Check Out My Projects
          </Button>
        </div>
      </div>
    </Card>
  </div>
</Section>

<style>
  /* Hero Section */
  .about-hero {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
  
  .hero-badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-6);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-full);
    color: var(--neon-cyan);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: 600;
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
  
  .hero-text {
    font-size: var(--text-xl);
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* Profile Section */
  .profile-section {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .profile-grid {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: var(--space-16);
    align-items: start;
  }
  
  .profile-container {
    position: sticky;
    top: calc(4rem + var(--space-8));
  }
  
  .profile-frame {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto var(--space-8);
    background: var(--bg-tertiary);
    border-radius: var(--radius-xl);
    overflow: hidden;
  }
  
  .frame-corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid var(--neon-cyan);
  }
  
  .frame-corner.tl {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }
  
  .frame-corner.tr {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
  }
  
  .frame-corner.bl {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
  }
  
  .frame-corner.br {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }
  
  .scan-overlay {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 212, 255, 0.1) 2px,
      rgba(0, 212, 255, 0.1) 4px
    );
    animation: scan 3s linear infinite;
  }
  
  @keyframes scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  
  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: contrast(1.1) brightness(0.9);
  }
  
  .profile-status {
    position: absolute;
    bottom: var(--space-4);
    right: var(--space-4);
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-full);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--neon-cyan);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .status-indicator {
    width: 8px;
    height: 8px;
    background: var(--neon-cyan);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .status-indicator.learning {
    background: var(--neon-cyan);
  }
  
  .profile-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }
  
  .stat-item {
    text-align: center;
    padding: var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
  }
  
  .stat-value {
    font-family: var(--font-mono);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--neon-cyan);
    line-height: 1;
    margin-bottom: var(--space-1);
  }
  
  .stat-label {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  /* Section Headers */
  .section-header {
    text-align: center;
    margin-bottom: var(--space-12);
  }
  
  .header-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: 500;
    margin-bottom: var(--space-4);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  /* Bio Section */
  .bio-section {
    max-width: 800px;
  }
  
  .bio-terminal {
    background: var(--bg-secondary);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-xl);
    overflow: hidden;
    margin-bottom: var(--space-8);
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
    background: var(--border);
  }
  
  .control.active {
    background: var(--neon-cyan);
    animation: pulse 2s ease-in-out infinite;
  }
  
  .terminal-title {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
  
  .terminal-body {
    padding: var(--space-4);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
  }
  
  .log-entry {
    display: flex;
    gap: var(--space-3);
    margin-bottom: var(--space-2);
    opacity: 0.7;
    transition: opacity var(--transition-base);
  }
  
  .log-entry.active {
    opacity: 1;
    color: var(--neon-cyan);
  }
  
  .timestamp {
    color: var(--text-muted);
    flex-shrink: 0;
  }
  
  .event {
    color: var(--text-secondary);
  }
  
  .log-entry.active .event {
    color: var(--neon-cyan);
  }
  
  .bio-text {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .bio-text p {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: var(--text-base);
  }
  
  .bio-text strong {
    color: var(--neon-cyan);
    font-weight: 600;
  }
  
  /* Timeline */
  .timeline-section {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .timeline {
    position: relative;
    padding-left: var(--space-12);
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--gradient-primary);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: var(--space-12);
    animation: slideInRight 0.8s ease-out backwards;
    animation-delay: var(--delay);
  }
  
  .timeline-marker {
    position: absolute;
    left: -32px;
    top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .marker-ring {
    position: absolute;
    inset: 0;
    border: 2px solid var(--border-glow);
    border-radius: 50%;
    background: var(--bg-primary);
    animation: pulse 3s ease-in-out infinite;
  }
  
  .marker-core {
    position: relative;
    z-index: 1;
    color: var(--neon-cyan);
  }
  
  .timeline-content {
    padding: var(--space-6);
  }
  
  .content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-4);
  }
  
  .year-badge {
    font-family: var(--font-mono);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--neon-cyan);
    padding: var(--space-2) var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-lg);
  }
  
  .status-badge {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-full);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .status-badge.completed {
    background: rgba(57, 255, 20, 0.1);
    color: var(--success);
    border: 1px solid var(--success);
  }
  
  .status-badge.active {
    background: rgba(0, 212, 255, 0.1);
    color: var(--neon-cyan);
    border: 1px solid var(--neon-cyan);
  }
  
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .timeline-title {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-3);
    color: var(--text-primary);
  }
  
  .timeline-description {
    color: var(--text-secondary);
    line-height: 1.7;
  }
  
  /* Tech Stack Section */
  .tech-section {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .tech-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-6);
  }
  
  .tech-category {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .category-header {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--border);
  }
  
  .category-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-lg);
    border: 2px solid;
  }
  
  .category-icon.frontend {
    background: rgba(0, 212, 255, 0.1);
    border-color: var(--neon-cyan);
    color: var(--neon-cyan);
  }
  
  .category-icon.backend {
    background: rgba(157, 78, 221, 0.1);
    border-color: var(--neon-purple);
    color: var(--neon-purple);
  }
  
  .category-icon.tools {
    background: rgba(255, 107, 53, 0.1);
    border-color: var(--cyber-orange);
    color: var(--cyber-orange);
  }
  
  .category-icon.learning {
    background: rgba(57, 255, 20, 0.1);
    border-color: var(--neon-green);
    color: var(--neon-green);
  }
  
  .category-title {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text-primary);
  }
  
  .tech-items {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    flex: 1;
  }
  
  .tech-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-2);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }
  
  .tech-item:hover {
    background: var(--surface-hover);
    transform: translateX(4px);
  }
  
  .tech-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    animation: pulse 3s ease-in-out infinite;
  }
  
  .tech-dot.primary {
    background: var(--neon-cyan);
    box-shadow: 0 0 8px rgba(0, 212, 255, 0.4);
  }
  
  .tech-dot.secondary {
    background: var(--neon-green);
    box-shadow: 0 0 8px rgba(57, 255, 20, 0.4);
  }
  
  .tech-dot.learning {
    background: var(--cyber-orange);
    box-shadow: 0 0 8px rgba(255, 107, 53, 0.4);
  }
  
  .tech-item span {
    flex: 1;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-primary);
  }
  
  .tech-badge {
    padding: var(--space-1) var(--space-2);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    font-size: var(--text-xs);
    color: var(--text-muted);
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  /* Focus Section */
  .focus-section {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .focus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--space-8);
  }
  
  .focus-card {
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .focus-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 0 auto var(--space-6);
    color: var(--neon-cyan);
  }
  
  .icon-pulse {
    position: absolute;
    inset: -12px;
    border: 2px solid var(--neon-cyan);
    border-radius: 50%;
    opacity: 0.3;
    animation: icon-pulse 2s ease-in-out infinite;
  }
  
  @keyframes icon-pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.1); opacity: 0.6; }
  }
  
  .focus-description {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-6);
    flex: 1;
  }
  
  .focus-status {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    justify-content: center;
  }
  
  .status-text {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .status-dot.active {
    background: var(--success);
    animation: pulse 2s ease-in-out infinite;
  }
  
  .status-dot.learning {
    background: var(--neon-cyan);
    animation: pulse 2s ease-in-out infinite;
  }
  
  .status-dot.side {
    background: var(--neon-purple);
    animation: pulse 2s ease-in-out infinite;
  }
  
  /* Philosophy Section */
  .philosophy-section {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .philosophy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-6);
  }
  
  .philosophy-item {
    text-align: center;
    padding: var(--space-6);
  }
  
  .philosophy-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin: 0 auto var(--space-4);
    color: var(--neon-purple);
    background: rgba(157, 78, 221, 0.1);
    border: 1px solid var(--neon-purple);
    border-radius: var(--radius-xl);
  }
  
  .philosophy-title {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-3);
    color: var(--text-primary);
  }
  
  .philosophy-text {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: var(--text-sm);
  }
  
  /* CTA Section */
  .cta-section {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .cta-content {
    text-align: center;
    padding: var(--space-8);
  }
  
  .cta-badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-6);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-full);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: 500;
    margin-bottom: var(--space-6);
    text-transform: uppercase;
    letter-spacing: 1px;
    overflow: hidden;
  }
  
  .badge-scan {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 4px,
      rgba(0, 212, 255, 0.1) 4px,
      rgba(0, 212, 255, 0.1) 8px
    );
    animation: scan-horizontal 3s linear infinite;
  }
  
  @keyframes scan-horizontal {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .cta-features {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin: var(--space-8) 0;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--text-secondary);
    font-size: var(--text-sm);
  }
  
  .feature-item svg {
    color: var(--success);
    flex-shrink: 0;
  }
  
  .cta-buttons {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .profile-grid {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }
    
    .profile-container {
      position: relative;
      top: 0;
      text-align: center;
    }
    
    .profile-frame {
      width: 250px;
      height: 250px;
    }
    
    .profile-stats {
      max-width: 400px;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 768px) {
    .timeline {
      padding-left: var(--space-8);
    }
    
    .timeline::before {
      left: 15px;
    }
    
    .timeline-marker {
      left: -27px;
      width: 30px;
      height: 30px;
    }
    
    .tech-categories {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-4);
    }
    
    .focus-grid {
      grid-template-columns: 1fr;
    }
    
    .philosophy-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .cta-buttons :global(.btn) {
      width: 100%;
      max-width: 300px;
    }
  }
  
  @media (max-width: 480px) {
    .profile-frame {
      width: 200px;
      height: 200px;
    }
    
    .profile-stats {
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
    
    .bio-terminal {
      margin: 0 -var(--space-2) var(--space-6);
    }
    
    .timeline-content {
      padding: var(--space-4);
    }
    
    .content-header {
      flex-direction: column;
      gap: var(--space-2);
      align-items: flex-start;
    }
    
    .cta-content {
      padding: var(--space-6);
    }
    
    .philosophy-grid {
      grid-template-columns: 1fr;
    }
    
    .philosophy-item {
      padding: var(--space-4);
    }
  }
  
  /* Performance optimizations */
  @media (prefers-reduced-motion: reduce) {
    .badge-pulse,
    .scan-overlay,
    .status-indicator,
    .marker-ring,
    .status-dot,
    .icon-pulse,
    .skill-progress,
    .progress-fill,
    .badge-scan {
      animation: none !important;
    }
    
    .timeline-item {
      animation: none !important;
    }
    
    .skill-item {
      animation: none !important;
    }
  }
</style>
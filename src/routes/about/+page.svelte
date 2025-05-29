<!-- src/routes/about/+page.svelte -->
<script>
// @ts-nocheck

  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  
  const journey = [
    {
      year: '2022',
      title: 'Started Web Development Journey',
      description: 'Enrolled in KodeGo bootcamp to learn full-stack development, discovering my passion for creating secure web applications.',
      icon: 'code'
    },
    {
      year: '2023',
      title: 'Completed Full-Stack Bootcamp',
      description: 'Graduated from intensive web development program, mastering React, Node.js, and modern development practices.',
      icon: 'graduate'
    },
    {
      year: '2024',
      title: 'Pivoted to Cybersecurity',
      description: 'Realized the critical importance of security in software development and began focused study in cybersecurity.',
      icon: 'shield'
    },
    {
      year: '2025',
      title: 'Google Cybersecurity Certificate',
      description: 'Completed comprehensive cybersecurity training, gaining hands-on experience with security tools and incident response.',
      icon: 'certificate'
    }
  ];
  
  const interests = [
    'Penetration Testing',
    'Security Research',
    'Open Source',
    'CTF Competitions',
    'Tech Innovation',
    'Continuous Learning'
  ];
</script>

<svelte:head>
  <title>About - Eduardo Camay III</title>
  <meta name="description" content="Learn about my journey from web development to cybersecurity, my skills, and passion for securing digital infrastructure.">
</svelte:head>

<!-- Hero Section -->
<Section background="secondary">
  <div class="about-hero">
    <div class="hero-content">
      <h1 class="heading-1">About Me</h1>
      <p class="hero-text">
        From building websites to securing them – my journey into the world of cybersecurity.
      </p>
    </div>
  </div>
</Section>

<!-- Main Content -->
<Section background="primary">
  <div class="about-content">
    <div class="content-grid">
      <!-- Profile Image -->
      <div class="profile-section">
        <div class="profile-image-wrapper">
          <img src="/images/profile.jpg" alt="Eduardo Camay III" class="profile-image" />
          <div class="profile-decoration"></div>
        </div>
      </div>
      
      <!-- Bio Content -->
      <div class="bio-section">
        <h2 class="heading-2">Hello, I'm Eduardo 👋</h2>
        <div class="bio-text">
          <p>
            I'm an aspiring cybersecurity professional with a strong foundation in web development. 
            My journey began in 2022 when I discovered my passion for technology and decided to pursue 
            a career in software development.
          </p>
          <p>
            After completing an intensive full-stack bootcamp at KodeGo, I realized that creating 
            applications was only half the equation – securing them was equally important. This 
            realization led me to pivot towards cybersecurity in 2024.
          </p>
          <p>
            Now, I combine my development skills with security knowledge to help organizations build 
            and maintain secure digital infrastructure. I believe that the best security professionals 
            understand how systems are built, which gives me a unique perspective in identifying and 
            addressing vulnerabilities.
          </p>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- Journey Timeline -->
<Section background="secondary">
  <div class="section-header">
    <h2 class="heading-2">My Journey</h2>
    <p class="text-lead">From curious beginner to security-focused developer</p>
  </div>
  
  <div class="timeline">
    {#each journey as milestone, i}
      <div class="timeline-item" style="--delay: {i * 0.1}s">
        <div class="timeline-marker">
          <div class="timeline-icon">
            {#if milestone.icon === 'code'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            {:else if milestone.icon === 'graduate'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            {:else if milestone.icon === 'shield'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            {:else if milestone.icon === 'certificate'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"/>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
              </svg>
            {/if}
          </div>
        </div>
        <Card animate>
          <div class="timeline-content">
            <span class="timeline-year">{milestone.year}</span>
            <h3 class="timeline-title">{milestone.title}</h3>
            <p class="timeline-description">{milestone.description}</p>
          </div>
        </Card>
      </div>
    {/each}
  </div>
</Section>

<!-- Interests & Values -->
<Section background="primary">
  <div class="interests-section">
    <div class="section-header">
      <h2 class="heading-2">What Drives Me</h2>
      <p class="text-lead">My interests and values in technology and security</p>
    </div>
    
    <div class="interests-grid">
      {#each interests as interest}
        <div class="interest-item">
          <div class="interest-icon">✦</div>
          <span>{interest}</span>
        </div>
      {/each}
    </div>
    
    <div class="values-content">
      <Card>
        <blockquote class="quote">
          "In a world where technology touches every aspect of our lives, security isn't just about 
          protecting data – it's about protecting people, their privacy, and their digital freedom."
        </blockquote>
      </Card>
    </div>
  </div>
</Section>

<!-- CTA -->
<Section background="secondary">
  <div class="cta-section">
    <h2 class="heading-2">Let's Connect</h2>
    <p class="text-lead mb-8">
      Whether you need security consultation, web development, or just want to chat about tech – I'm always open to new connections.
    </p>
    <div class="cta-buttons">
      <Button href="/contact" size="lg">Get In Touch</Button>
      <Button href="/projects" variant="secondary" size="lg">View My Work</Button>
    </div>
  </div>
</Section>

<style>
  /* Hero */
  .about-hero {
    text-align: center;
    padding: var(--space-8) 0;
  }
  
  .hero-text {
    font-size: var(--text-xl);
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* Content Grid */
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--space-12);
    align-items: start;
  }
  
  /* Profile Section */
  .profile-section {
    position: sticky;
    top: calc(4rem + var(--space-8));
  }
  
  .profile-image-wrapper {
    position: relative;
    display: inline-block;
    aspect-ratio: 1 / 1;
    width: 100%;
    max-width: 300px;
  }

  
  .profile-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
  }
  
  .profile-decoration {
    position: absolute;
    inset: -20px;
    background: linear-gradient(135deg, var(--primary-600), var(--accent-600));
    border-radius: var(--radius-xl);
    z-index: -1;
    opacity: 0.3;
    filter: blur(20px);
  }
  
  /* Bio Section */
  .bio-text {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .bio-text p {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: var(--text-lg);
  }
  
  /* Timeline */
  .timeline {
    position: relative;
    padding-left: var(--space-8);
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--primary-600), var(--accent-600));
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: var(--space-8);
    animation: fadeIn 0.6s ease-out backwards;
    animation-delay: var(--delay);
  }
  
  .timeline-marker {
    position: absolute;
    left: -23px;
    top: 0;
  }
  
  .timeline-icon {
    width: 48px;
    height: 48px;
    background-color: var(--surface);
    border: 2px solid var(--primary-600);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-400);
  }
  
  .timeline-content {
    padding-left: var(--space-6);
  }
  
  .timeline-year {
    font-size: var(--text-sm);
    color: var(--primary-400);
    font-weight: 600;
  }
  
  .timeline-title {
    font-size: var(--text-xl);
    font-weight: 600;
    margin: var(--space-2) 0;
  }
  
  .timeline-description {
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  /* Interests */
  .interests-section {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-4);
    margin: var(--space-8) 0;
  }
  
  .interest-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-4);
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
  }
  
  .interest-item:hover {
    border-color: var(--primary-600);
    transform: translateY(-2px);
  }
  
  .interest-icon {
    color: var(--primary-400);
    font-size: var(--text-xl);
  }
  
  .values-content {
    margin-top: var(--space-8);
  }
  
  .quote {
    font-size: var(--text-xl);
    line-height: 1.8;
    color: var(--text-secondary);
    font-style: italic;
    border-left: 4px solid var(--primary-600);
    padding-left: var(--space-6);
    margin: 0;
  }
  
  /* CTA */
  .cta-section {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .cta-buttons {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
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
  
  /* Responsive */
  @media (max-width: 1024px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }
    
    .profile-section {
      position: relative;
      top: 0;
      text-align: center;
    }
    
    .profile-image {
      max-width: 250px;
    }
  }
  
  @media (max-width: 768px) {
    .timeline {
      padding-left: var(--space-6);
    }
    
    .timeline-marker {
      left: -18px;
    }
    
    .timeline-icon {
      width: 36px;
      height: 36px;
    }
    
    .interests-grid {
      grid-template-columns: 1fr;
    }
    
    .cta-buttons {
      flex-direction: column;
    }
    
    .cta-buttons :global(.btn) {
      width: 100%;
    }
  }
</style>
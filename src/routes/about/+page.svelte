<!-- src/routes/about/+page.svelte -->
<script>
// @ts-nocheck

  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  
  const journey = [
    {
      year: '2022',
      title: 'Started My Tech Journey',
      description: 'Enrolled in KodeGo bootcamp to learn web development, discovering my love for building things with code.',
      icon: 'code'
    },
    {
      year: '2023',
      title: 'Completed Bootcamp & Started Building',
      description: 'Graduated and began creating projects with SvelteKit, diving deep into modern web development.',
      icon: 'graduate'
    },
    {
      year: '2024',
      title: 'Discovered Cybersecurity',
      description: 'Got fascinated by the security side of things - started learning about CTFs, web pentesting, and bug bounties.',
      icon: 'shield'
    },
    {
      year: '2025',
      title: 'Deep Diving into Security',
      description: 'Currently grinding through CTF challenges, learning web pentesting, and exploring the bug bounty world.',
      icon: 'target'
    }
  ];
  
  const interests = [
    'CTF Challenges',
    'Web Pentesting',
    'Bug Bounty Hunting',
    'Building Cool Projects',
    'AI-Assisted Coding',
    'Learning New Things'
  ];
</script>

<svelte:head>
  <title>About - DUARDZ</title>
  <meta name="description" content="Learn about my self-taught journey from web development to cybersecurity, my passion for CTFs and building things.">
</svelte:head>

<!-- Hero Section -->
<Section background="secondary">
  <div class="about-hero">
    <div class="hero-content">
      <h1 class="heading-1">About Me</h1>
      <p class="hero-text">
        A self-taught journey from building websites to understanding how to break (and secure) them.
      </p>
    </div>
  </div>
</Section>

<!-- Main Content -->
<Section background="primary">
  <div class="about-content">
    <div class="content-grid">
      <!-- Enhanced Profile Image -->
      <div class="profile-section">
        <div class="profile-hexagon-wrapper">
          <img src="/images/profile.jpg" alt="DUARDZ Profile" />
        </div>
      </div>
      
      <!-- Bio Content -->
      <div class="bio-section">
        <h2 class="heading-2">Hello, I'm Duardz 👋</h2>
        <div class="bio-text">
          <p>
            I'm a cybersecurity enthusiast who loves building things and figuring out how they work 
            (and sometimes how they break). My journey started in 2022 when I decided to dive into 
            web development through a bootcamp at KodeGo.
          </p>
          <p>
            What started as learning to build websites quickly evolved into a fascination with the 
            security side of things. I discovered CTF challenges, got hooked on web pentesting, and 
            realized there's this whole world of ethical hacking and bug bounties out there.
          </p>
          <p>
            I'm completely self-taught in the cybersecurity space, learning through hands-on CTFs, 
            online resources, and lots of trial and error. I love combining my development background 
            with security knowledge - understanding how things are built really helps when you're 
            trying to find vulnerabilities.
          </p>
          <p>
            When I'm not breaking things for educational purposes, I enjoy building projects with 
            SvelteKit and experimenting with AI tools to speed up my coding. Always learning, 
            always curious!
          </p>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- Journey Timeline -->
<Section background="secondary">
  <div class="section-header">
    <h2 class="heading-2">My Learning Journey</h2>
    <p class="text-lead">From curious beginner to security enthusiast</p>
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
            {:else if milestone.icon === 'target'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
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
      <h2 class="heading-2">What I'm Into</h2>
      <p class="text-lead">The things that keep me motivated and excited about tech</p>
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
          "I believe the best way to learn cybersecurity is by doing - breaking things, solving 
          challenges, and getting your hands dirty. Every CTF flag captured and every vulnerability 
          found is a step closer to understanding how to build more secure systems."
        </blockquote>
      </Card>
    </div>
  </div>
</Section>

<!-- Current Focus -->
<Section background="secondary">
  <div class="focus-section">
    <div class="section-header">
      <h2 class="heading-2">What I'm Working On</h2>
      <p class="text-lead">Current projects and learning goals</p>
    </div>
    
    <div class="focus-grid">
      <Card hover animate>
        <div class="focus-item">
          <div class="focus-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="heading-4">CTF Grinding</h3>
          <p>Spending time on platforms like TryHackMe, HackTheBox, and PicoCTF to sharpen my skills and learn new attack vectors.</p>
        </div>
      </Card>
      
      <Card hover animate>
        <div class="focus-item">
          <div class="focus-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
              <polyline points="7.5 19.79 7.5 14.6 3 12"/>
              <polyline points="21 12 16.5 14.6 16.5 19.79"/>
            </svg>
          </div>
          <h3 class="heading-4">Building Projects</h3>
          <p>Creating web applications with SvelteKit and Firebase, always thinking about security from the ground up.</p>
        </div>
      </Card>
      
      <Card hover animate>
        <div class="focus-item">
          <div class="focus-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="21 21l-4.35-4.35"/>
            </svg>
          </div>
          <h3 class="heading-4">Bug Bounty Learning</h3>
          <p>Exploring the bug bounty world, understanding how to responsibly find and report vulnerabilities in real applications.</p>
        </div>
      </Card>
    </div>
  </div>
</Section>

<!-- CTA -->
<Section background="primary">
  <div class="cta-section">
    <h2 class="heading-2">Let's Connect!</h2>
    <p class="text-lead mb-8">
      Always excited to connect with fellow learners, share knowledge, or just chat about tech, CTFs, or anything cybersecurity related!
    </p>
    <div class="cta-buttons">
      <Button href="/contact" size="lg">Get In Touch</Button>
      <Button href="/projects" variant="secondary" size="lg">Check Out My Projects</Button>
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
  
  /* Enhanced Profile Section */
  .profile-section {
    position: sticky;
    top: calc(4rem + var(--space-8));
    text-align: center;
  }
  
  /* Cyberpunk Hexagon Profile */
  .profile-hexagon-wrapper {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background: linear-gradient(45deg, var(--primary-600), var(--accent-600));
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    animation: hexagon-glow 3s ease-in-out infinite alternate;
    cursor: pointer;
    transition: all var(--transition-base);
  }

  .profile-hexagon-wrapper:hover {
    transform: scale(1.05);
    animation-duration: 1.5s;
  }

  .profile-hexagon-wrapper::before {
    content: '';
    position: absolute;
    inset: 8px;
    background: var(--bg-primary);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    z-index: 1;
  }

  .profile-hexagon-wrapper::after {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(45deg, 
      transparent, var(--accent-400), transparent, 
      var(--primary-400), transparent, var(--accent-600), transparent);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    z-index: -1;
    opacity: 0.5;
    animation: hexagon-rotate 8s linear infinite;
  }

  .profile-hexagon-wrapper img {
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    object-fit: cover;
    z-index: 2;
    transition: all var(--transition-base);
  }

  .profile-hexagon-wrapper:hover img {
    filter: brightness(1.1) contrast(1.1);
  }


  @keyframes hexagon-glow {
    from {
      filter: drop-shadow(0 0 20px var(--primary-600)) 
              drop-shadow(0 0 40px var(--accent-600));
      transform: scale(1);
    }
    to {
      filter: drop-shadow(0 0 30px var(--primary-400)) 
              drop-shadow(0 0 60px var(--accent-400));
      transform: scale(1.02);
    }
  }

  @keyframes hexagon-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
  
  /* Focus Section */
  .focus-section {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .focus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-6);
  }
  
  .focus-item {
    text-align: center;
  }
  
  .focus-icon {
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
  .focus-item p {
    color: var(--text-secondary);
    line-height: 1.6;
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
    
    .profile-hexagon-wrapper {
      width: 240px;
      height: 240px;
    }

    .profile-hexagon-wrapper img {
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      top: 6px;
      left: 6px;
    }

  }
  
  @media (max-width: 768px) {
    .timeline {
      padding-left: var(--space-6);
    }
    
    .timeline-marker {
      left: -18px;
    }
    
    .interests-grid {
      grid-template-columns: 1fr;
    }
    
    .focus-grid {
      grid-template-columns: 1fr;
    }
    
    .cta-buttons {
      flex-direction: column;
    }
    
    .cta-buttons :global(.btn) {
      width: 100%;
    }

    .profile-hexagon-wrapper {
      width: 200px;
      height: 200px;
    }

    .profile-hexagon-wrapper img {
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      top: 5px;
      left: 5px;
    }

  }
</style>
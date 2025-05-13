<!-- Home Page: src/routes/+page.svelte (COMPLETE VERSION) -->
<script>
  import { onMount } from 'svelte';
  
  // Typing effect for the terminal text
  let terminalText = "";
  const fullTerminalText = "Security analyst and penetration tester with expertise in network security, vulnerability assessment, and security architecture.";
  let terminalIndex = 0;
  
  onMount(() => {
    const typingInterval = setInterval(() => {
      if (terminalIndex < fullTerminalText.length) {
        terminalText += fullTerminalText[terminalIndex];
        terminalIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
    
    return () => clearInterval(typingInterval);
  });
  
  // Featured sections data
  const featuredCertificates = [
    {
      title: "Certified Meow Hacker (CMH)",
      issuer: "EC-Council",
      date: "2023",
      icon: "award"
    },
    {
      title: "Comp Meow+",
      issuer: "Comp",
      date: "2022",
      icon: "shield"
    }
  ];
  
  const featuredProjects = [
    {
      title: "Network Vulnerability Scanner",
      description: "A custom-built scanner that identifies security vulnerabilities in network infrastructure.",
      tags: ["Python", "Security", "Networking"],
      image: "/images/project1.jpg"
    },
    {
      title: "Secure Authentication System",
      description: "Implemented a secure multi-factor authentication system with biometric validation.",
      tags: ["JavaScript", "Authentication", "Cryptography"],
      image: "/images/project2.jpg"
    }
  ];
  
  const featuredPosts = [
    {
      title: "Zero Trust Architecture: Implementation Guide",
      date: "April 15, 2025",
      category: "Network Security",
      excerpt: "A comprehensive guide to implementing Zero Trust Architecture in enterprise environments."
    },
    {
      title: "Analyzing Recent Ransomware Attacks",
      date: "March 22, 2025",
      category: "Threat Intelligence",
      excerpt: "Breaking down the techniques used in recent high-profile ransomware attacks."
    }
  ];
</script>

<svelte:head>
  <title>Home | Duardz</title>
</svelte:head>

<section class="hero">
  <div class="container hero-content">
    <h1 class="hero-title">Eduardo Camay III</h1>
    <h3 class="hero-subtitle">Cybersecurity Professional</h3>
    
    <div class="cyber-terminal">
      <div class="cyber-terminal-content">{terminalText}</div>
    </div>
    
    <div class="hero-buttons">
      <a href="/projects" class="btn">View Projects</a>
      <a href="/contact" class="btn btn-outline">Get In Touch</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Featured Certificates</h2>
    <div class="grid grid-2">
      {#each featuredCertificates as certificate}
        <div class="card certificate-card">
          <div class="card-content">
            <h3 class="card-title">
              <span class="certificate-icon">
                {#if certificate.icon === 'award'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                {:else}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                {/if}
              </span>
              {certificate.title}
            </h3>
            <p class="certificate-issuer">Issued by {certificate.issuer}</p>
            <p class="certificate-date">Obtained in {certificate.date}</p>
            <a href="/certificates" class="btn btn-outline">View Certificate</a>
          </div>
        </div>
      {/each}
    </div>
    <div class="text-center" style="text-align: center; margin-top: 2rem;">
      <a href="/certificates" class="btn">View All Certificates</a>
    </div>
  </div>
</section>

<section class="section" style="background-color: var(--dark-elevated); padding: 4rem 0;">
  <div class="container">
    <h2>Featured Projects</h2>
    <div class="grid grid-2">
      {#each featuredProjects as project}
        <div class="card project-card">
          <div class="card-content">
            <img src={project.image} alt={project.title} class="project-image" />
            <h3 class="card-title">{project.title}</h3>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="project-tag">{tag}</span>
              {/each}
            </div>
            <p>{project.description}</p>
            <a href="/projects" class="btn btn-outline">View Project</a>
          </div>
        </div>
      {/each}
    </div>
    <div class="text-center" style="text-align: center; margin-top: 2rem;">
      <a href="/projects" class="btn">View All Projects</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Latest Blog Posts</h2>
    <div class="grid grid-2">
      {#each featuredPosts as post}
        <div class="card blog-card">
          <div class="card-content">
            <h3 class="card-title">{post.title}</h3>
            <div class="blog-meta">
              <span>{post.date}</span>
              <span class="blog-category">{post.category}</span>
            </div>
            <p>{post.excerpt}</p>
            <a href="/blog" class="btn btn-outline">Read More</a>
          </div>
        </div>
      {/each}
    </div>
    <div class="text-center" style="text-align: center; margin-top: 2rem;">
      <a href="/blog" class="btn">View All Posts</a>
    </div>
  </div>
</section>

<section class="section" style="background-color: var(--dark-elevated); padding: 4rem 0;">
  <div class="container" style="text-align: center;">
    <h2>Ready to Connect?</h2>
    <p style="max-width: 600px; margin: 0 auto 2rem auto;">Looking for a cybersecurity professional for your project or want to discuss potential collaborations? Get in touch!</p>
    <a href="/contact" class="btn">Contact Me</a>
  </div>
</section>
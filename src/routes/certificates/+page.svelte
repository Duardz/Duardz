<!-- Certificates Page: src/routes/certificates/+page.svelte -->
<script>
  // Certificates data
  const certificates = [
    {
      title: "Full Stack Web Development Certificate",
      issuer: "KodeGo PH",
      date: "2023",
      description: "Completed an immersive web development bootcamp focused on front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and database integration.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      icon: "award",
      featured: true
    },
    {
      title: "Lean Six Sigma White Belt",
      issuer: "Unknown", // You can update this later if you recall
      date: "2022",
      description: "Gained foundational knowledge of Lean Six Sigma principles, focusing on process improvement, efficiency, and problem-solving frameworks.",
      skills: ["Process Improvement", "Efficiency Analysis", "Problem Solving", "Team Collaboration"],
      icon: "key",
      featured: false
    }
  ];
</script>

<svelte:head>
  <title>Certificates | CyberPortfolio</title>
</svelte:head>

<section class="section">
  <div class="container">
    <h1>Featured Certifications</h1>
    <p style="margin-bottom: 2rem;"><p style="margin-bottom: 2rem;">
  On my path to becoming a cybersecurity professional, I’m continuously learning and earning certifications to strengthen my expertise. Here are some of the credentials I’ve achieved so far.</p>
    
    <div class="grid grid-3">
      {#each certificates.filter(cert => cert.featured) as cert}
        <div class="card certificate-card" style="border-left-color: var(--secondary);">
          <div class="card-content">
            <h3 class="card-title">
              <span class="certificate-icon">
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
              </span>
              {cert.title}
              <span class="badge badge-featured">Featured</span>
            </h3>
            <p class="certificate-issuer">Issued by {cert.issuer}</p>
            <p class="certificate-date">Obtained in {cert.date}</p>
            <p>{cert.description}</p>
            
            <div style="margin: 1.5rem 0;">
              <h4 style="font-size: 1rem; margin-bottom: 0.5rem; color: var(--text-primary);">Key Skills</h4>
              <div class="skill-list">
                {#each cert.skills as skill}
                  <div class="skill-item" style="background-color: rgba(98, 0, 234, 0.1);">
                    {skill}
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <h2 style="margin-top: 3rem;">All Certifications</h2>
    
    <div class="grid grid-3">
      {#each certificates.filter(cert => !cert.featured) as cert, i}
        <div class="card certificate-card">
          <div class="card-content">
            <h3 class="card-title">
              <span class="certificate-icon">
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
                {:else if cert.icon === 'users'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                {:else if cert.icon === 'cloud'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                {/if}
              </span>
              {cert.title}
            </h3>
            <p class="certificate-issuer">Issued by {cert.issuer}</p>
            <p class="certificate-date">Obtained in {cert.date}</p>
            <p>{cert.description}</p>
            
            <div style="margin: 1.5rem 0;">
              <h4 style="font-size: 1rem; margin-bottom: 0.5rem; color: var(--text-primary);">Key Skills</h4>
              <div class="skill-list">
                {#each cert.skills as skill}
                  <div class="skill-item" style="background-color: rgba(98, 0, 234, 0.1);">
                    {skill}
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section" style="background-color: var(--dark-elevated); padding: 4rem 0;">
  <div class="container" style="text-align: center;">
    <h2>Professional Development</h2>
    <p style="max-width: 700px; margin: 0 auto 2rem auto;">I am committed to continuous learning and staying current with the latest developments in cybersecurity. I regularly participate in professional development activities, including workshops, conferences, and hands-on training.</p>
    
    <div class="cyber-terminal" style="max-width: 700px; margin: 0 auto;">
      <div class="cyber-terminal-content">
        $ sudo apt-get update && sudo apt-get upgrade knowledge -y
      </div>
    </div>
  </div>
</section>
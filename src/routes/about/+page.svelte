<!-- About Page: src/routes/about/+page.svelte -->
<script>
  // Skill categories
  const skillCategories = [
    {
      name: "Cybersecurity",
      skills: [
        { name: "Penetration Testing", icon: "tool" },
        { name: "Vulnerability Assessment", icon: "search" },
        { name: "Network Security", icon: "globe" },
        { name: "Security Architecture", icon: "layers" },
        { name: "Incident Response", icon: "alert-triangle" },
        { name: "Threat Intelligence", icon: "eye" }
      ]
    },
    {
      name: "Technical",
      skills: [
        { name: "Python", icon: "code" },
        { name: "JavaScript", icon: "code" },
        { name: "Linux", icon: "terminal" },
        { name: "Docker", icon: "box" },
        { name: "AWS", icon: "cloud" },
        { name: "SQL", icon: "database" }
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Kali Linux", icon: "terminal" },
        { name: "Wireshark", icon: "activity" },
        { name: "Metasploit", icon: "target" },
        { name: "Burp Suite", icon: "crosshair" },
        { name: "Nmap", icon: "map" },
        { name: "Splunk", icon: "bar-chart-2" }
      ]
    }
  ];
  
  // Experience timeline
  const experiences = [
    {
      title: "Meow Security Analyst",
      company: "CyberDefense Inc.",
      period: "2023 - Present",
      description: "Lead Meow analyst responsible for conducting penetration tests, vulnerability assessments, and security architecture reviews for enterprise clients."
    }
  ];
  
  // Education timeline
  const education = [
    {
      degree: "Fullstack Web Development Bootcamp",
      institution: "KodeGo Bootcamp",
      period: "2022 - 2023",
      description: "Intensive training in full-stack web development including frontend, backend, and database technologies."
    },
    {
      degree: "Senior High School",
      institution: "Saint Patrick's Academy Inc.",
      period: "2018 - 2022",
      description: "Completed senior high school education with focus on HUMSS subjects."
    }
  ];
</script>

<svelte:head>
  <title>About Me | CyberPortfolio</title>
</svelte:head>

<section class="section">
  <div class="container">
    <h1>About Me</h1>
    
    <div class="about-section">
      <div>
        <img src="/images/profile.jpg" alt="Profile" class="about-image" />
      </div>
      <div>
        <p>I’m an aspiring cybersecurity professional with a strong foundation in web development and a growing passion for ethical hacking and digital defense. My journey into cybersecurity began in 2024, after learning web development in 2022 and discovering how essential security is in the digital world.</p>

        <p>Since then, I’ve been building hands-on skills in penetration testing, vulnerability assessment, and network security through self-study, practical labs, and real-world simulations. My interest in technology started young—from fixing gadgets and collecting parts to gaming and experimenting with systems.</p>

        <p>I believe in continuous learning and aim to contribute to a safer digital environment by helping identify vulnerabilities, assess risks, and implement practical security solutions. I’m currently working toward industry certifications and expanding my portfolio with real-world cybersecurity projects.</p>

        <div class="cyber-terminal">
          <div class="cyber-terminal-content">
            rm -rf vulnerabilities && ./deploy-security-measures.sh && echo "System secured successfully."
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background-color: var(--dark-elevated); padding: 4rem 0;">
  <div class="container">
    <h2>Current Focus & Skills</h2>
    
    {#each skillCategories as category}
      <div style="margin-bottom: 2rem;">
        <h3>{category.name}</h3>
        <div class="skill-list">
          {#each category.skills as skill}
            <div class="skill-item">
              <span class="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  {#if skill.icon === 'tool'}
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  {:else if skill.icon === 'search'}
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  {:else if skill.icon === 'globe'}
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  {:else if skill.icon === 'layers'}
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  {:else if skill.icon === 'alert-triangle'}
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  {:else if skill.icon === 'eye'}
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  {:else if skill.icon === 'code'}
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  {:else if skill.icon === 'terminal'}
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  {:else if skill.icon === 'box'}
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  {:else if skill.icon === 'cloud'}
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  {:else if skill.icon === 'database'}
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  {:else if skill.icon === 'activity'}
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  {:else if skill.icon === 'target'}
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  {:else if skill.icon === 'crosshair'}
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="22" y1="12" x2="18" y2="12"></line>
                    <line x1="6" y1="12" x2="2" y2="12"></line>
                    <line x1="12" y1="6" x2="12" y2="2"></line>
                    <line x1="12" y1="22" x2="12" y2="18"></line>
                  {:else if skill.icon === 'map'}
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                    <line x1="8" y1="2" x2="8" y2="18"></line>
                    <line x1="16" y1="6" x2="16" y2="22"></line>
                  {:else if skill.icon === 'bar-chart-2'}
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  {:else}
                    <circle cx="12" cy="12" r="10"></circle>
                  {/if}
                </svg>
              </span>
              {skill.name}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Professional Experience</h2>
    
    <div class="timeline">
      {#each experiences as experience, i}
        <div class="card" style="position: relative; padding-left: 2rem;">
          <div style="position: absolute; left: -10px; top: 1.5rem; width: 20px; height: 20px; background-color: var(--primary); border-radius: 50%;"></div>
          <div class="card-content">
            <h3 class="card-title">{experience.title}</h3>
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
              <span style="color: var(--secondary);">{experience.company}</span>
              <span style="color: var(--text-secondary);">{experience.period}</span>
            </div>
            <p>{experience.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section" style="background-color: var(--dark-elevated); padding: 4rem 0;">
  <div class="container">
    <h2>Education</h2>
    
    <div class="timeline">
      {#each education as edu, i}
        <div class="card" style="position: relative; padding-left: 2rem;">
          <div style="position: absolute; left: -10px; top: 1.5rem; width: 20px; height: 20px; background-color: var(--secondary); border-radius: 50%;"></div>
          <div class="card-content">
            <h3 class="card-title">{edu.degree}</h3>
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
              <span style="color: var(--secondary);">{edu.institution}</span>
              <span style="color: var(--text-secondary);">{edu.period}</span>
            </div>
            <p>{edu.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container" style="text-align: center;">
    <h2>Interested in Working Together?</h2>
    <p style="max-width: 600px; margin: 0 auto 2rem auto;">If you're looking for a cybersecurity professional for your project or want to discuss potential collaborations, I'd love to connect.</p>
    <a href="/contact" class="btn">Get In Touch</a>
  </div>
</section>
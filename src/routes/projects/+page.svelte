<!-- Projects Page: src/routes/projects/+page.svelte (continued) -->
<script>
  // Projects data
  const projects = [
    {
      title: "Network Vulnerability Scanner",
      description: "A custom-built network vulnerability scanner that identifies security weaknesses in network infrastructure. The scanner performs comprehensive scans to detect open ports, vulnerable services, and potential entry points for attackers.",
      longDescription: "This custom-built network vulnerability scanner is designed to identify security weaknesses in network infrastructure. The scanner performs comprehensive scans to detect open ports, vulnerable services, and potential entry points for attackers. It includes features such as service enumeration, vulnerability mapping against known CVEs, and detailed reporting with remediation recommendations. The tool was built using Python with libraries like Scapy for packet manipulation and integrates with various security databases to provide up-to-date vulnerability information.",
      tags: ["Python", "Network Security", "Penetration Testing"],
      image: "/images/project1.jpg",
      github: "https://github.com/username/network-scanner",
      featured: true
    },
    {
      title: "Secure Authentication System",
      description: "Implemented a secure multi-factor authentication system with biometric validation for a financial services client. The system significantly reduced unauthorized access attempts while maintaining a streamlined user experience.",
      longDescription: "This secure authentication system was implemented for a financial services client to enhance their access control mechanisms. The solution incorporates multi-factor authentication combining something you know (password), something you have (hardware token or mobile device), and something you are (biometric validation). The system was designed with a focus on security while maintaining a streamlined user experience. Key features include dynamic challenge-response protocols, adaptive authentication based on risk assessment, and comprehensive audit logging for compliance purposes. The implementation resulted in a 95% reduction in unauthorized access attempts.",
      tags: ["JavaScript", "Authentication", "Cryptography", "Financial Services"],
      image: "/images/project2.jpg",
      github: "https://github.com/username/secure-auth",
      featured: true
    },
    {
      title: "Security Monitoring Dashboard",
      description: "Developed a real-time security monitoring dashboard that aggregates and visualizes security events from multiple sources. The dashboard provides SOC analysts with a comprehensive view of the security landscape.",
      longDescription: "This real-time security monitoring dashboard was developed to provide Security Operations Center (SOC) analysts with a comprehensive view of the organization's security landscape. The dashboard aggregates and visualizes security events from multiple sources, including SIEM systems, network monitoring tools, and endpoint protection platforms. It features interactive data visualization, custom alerting rules, and trend analysis capabilities. The solution was built using a modern tech stack including React for the frontend, Node.js for the backend, and WebSocket for real-time data transmission. The dashboard has significantly reduced the mean time to detect (MTTD) security incidents by 65%.",
      tags: ["React", "Node.js", "Data Visualization", "Security Operations"],
      image: "/images/project3.jpg",
      github: "https://github.com/username/security-dashboard",
      featured: false
    },
    {
      title: "Encrypted Communication Tool",
      description: "Created an end-to-end encrypted communication tool for secure team collaboration. The tool ensures that all messages and file transfers are protected with strong encryption.",
      longDescription: "This end-to-end encrypted communication tool was designed to enable secure team collaboration in environments where confidentiality is critical. The solution ensures that all messages and file transfers are protected with strong encryption, where only the intended recipients have the ability to decrypt the content. The tool implements the Signal Protocol for secure messaging and includes features such as perfect forward secrecy, key verification, and secure group chats. The application is available as a desktop client and mobile app, with a focus on usability to encourage adoption among non-technical users.",
      tags: ["Encryption", "Communication", "Signal Protocol", "Collaboration"],
      image: "/images/project4.jpg",
      github: "https://github.com/username/encrypted-comms",
      featured: false
    },
    {
      title: "Cloud Security Compliance Framework",
      description: "Developed a compliance framework for assessing and ensuring security in cloud environments. The framework provides automated checks against industry standards like CIS, NIST, and ISO.",
      longDescription: "This cloud security compliance framework was developed to help organizations assess and ensure security in their cloud environments. The framework provides automated checks against industry standards such as CIS Benchmarks, NIST Cybersecurity Framework, and ISO 27001. It includes capabilities for continuous monitoring, deviation alerting, and compliance reporting. The solution was implemented using infrastructure as code principles with tools like Terraform for deployment and custom scripts for compliance checks. The framework has been successfully deployed in multiple AWS and Azure environments, helping clients achieve and maintain their compliance requirements.",
      tags: ["Cloud Security", "Compliance", "AWS", "Azure", "Terraform"],
      image: "/images/project5.jpg",
      github: "https://github.com/username/cloud-compliance",
      featured: false
    },
    {
      title: "Phishing Awareness Training Platform",
      description: "Built an interactive training platform to educate employees about phishing attacks. The platform includes simulated phishing scenarios, assessment quizzes, and detailed analytics on user performance.",
      longDescription: "This interactive training platform was built to educate employees about phishing attacks and improve organizational security awareness. The platform includes realistic simulated phishing scenarios based on recent attack patterns, interactive educational modules, assessment quizzes, and detailed analytics on user performance. The solution adapts training content based on individual user performance and focuses on behavioral change rather than just knowledge transfer. The platform has been deployed in several organizations, resulting in an average 70% reduction in susceptibility to phishing attacks among trained employees.",
      tags: ["Security Awareness", "Phishing", "Training", "Behavioral Security"],
      image: "/images/project6.jpg",
      github: "https://github.com/username/phishing-awareness",
      featured: false
    }
  ];
  
  // Filtered projects
  let filteredProjects = [...projects];
  let activeFilter = 'all';
  
  // Get all unique tags from projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects by tag
  // @ts-ignore
  function filterProjects(tag) {
    activeFilter = tag;
    
    if (tag === 'all') {
      filteredProjects = [...projects];
    } else {
      filteredProjects = projects.filter(project => project.tags.includes(tag));
    }
  }
  
  // Current project for modal
  /**
	 * @type {{ image: any; title: any; tags: any; longDescription: any; github: any; } | null}
	 */
  let currentProject = null;
  let isModalOpen = false;
  
  // @ts-ignore
  function openProjectModal(project) {
    currentProject = project;
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeProjectModal() {
    isModalOpen = false;
    document.body.style.overflow = 'auto';
  }
</script>

<svelte:head>
  <title>Projects | CyberPortfolio</title>
</svelte:head>

<section class="section">
  <div class="container">
    <h1>Projects</h1>
    <p style="margin-bottom: 2rem;">Explore my cybersecurity projects, ranging from vulnerability scanners to secure authentication systems. Each project showcases different aspects of my skills and expertise in the field.</p>
    
    <!-- Filter buttons -->
    <div style="margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <button 
        class="btn btn-outline" 
        style={activeFilter === 'all' ? 'background-color: var(--primary); color: white;' : ''}
        on:click={() => filterProjects('all')}
      >
        All
      </button>
      
      {#each allTags as tag}
        <button 
          class="btn btn-outline" 
          style={activeFilter === tag ? 'background-color: var(--primary); color: white;' : ''}
          on:click={() => filterProjects(tag)}
        >
          {tag}
        </button>
      {/each}
    </div>
    
    <!-- Featured Projects -->
    {#if activeFilter === 'all'}
      <h2>Featured Projects</h2>
      <div class="grid grid-2">
        {#each projects.filter(p => p.featured) as project}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <div class="card project-card" on:click={() => openProjectModal(project)}>
            <div class="card-content">
              <img src={project.image} alt={project.title} class="project-image" />
              <h3 class="card-title">{project.title}</h3>
              <div class="project-tags">
                {#each project.tags as tag}
                  <span class="project-tag">{tag}</span>
                {/each}
              </div>
              <p>{project.description}</p>
              <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <button class="btn" on:click|stopPropagation={() => openProjectModal(project)}>View Details</button>
                <a href={project.github} target="_blank" rel="noopener noreferrer" class="btn btn-outline" on:click|stopPropagation>View Code</a>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <h2 style="margin-top: 3rem;">More Projects</h2>
    {/if}
    
    <!-- All Projects -->
    <div class="grid grid-3">
      {#each (activeFilter === 'all' ? filteredProjects.filter(p => !p.featured) : filteredProjects) as project}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="card project-card" on:click={() => openProjectModal(project)}>
          <div class="card-content">
            <img src={project.image} alt={project.title} class="project-image" />
            <h3 class="card-title">{project.title}</h3>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="project-tag">{tag}</span>
              {/each}
            </div>
            <p>{project.description}</p>
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
              <button class="btn" on:click|stopPropagation={() => openProjectModal(project)}>View Details</button>
              <a href={project.github} target="_blank" rel="noopener noreferrer" class="btn btn-outline" on:click|stopPropagation>View Code</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    {#if filteredProjects.length === 0}
      <div style="text-align: center; padding: 3rem 0;">
        <h3>No projects match the selected filter.</h3>
        <button class="btn" style="margin-top: 1rem;" on:click={() => filterProjects('all')}>View All Projects</button>
      </div>
    {/if}
  </div>
</section>

<!-- Project Detail Modal -->
{#if isModalOpen && currentProject}
  <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); z-index: 1000; display: flex; justify-content: center; align-items: center; padding: 2rem;">
    <div style="position: relative; background-color: var(--dark-surface); max-width: 800px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 2rem; border-radius: 4px; border-left: 3px solid var(--primary);">
      <button 
        style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; color: var(--text-secondary); font-size: 1.5rem; cursor: pointer;"
        on:click={closeProjectModal}
      >
        ×
      </button>
      
      <img src={currentProject.image} alt={currentProject.title} style="width: 100%; border-radius: 4px; margin-bottom: 1.5rem;" />
      
      <h2 style="margin-bottom: 1rem;">{currentProject.title}</h2>
      
      <div class="project-tags" style="margin-bottom: 1.5rem;">
        {#each currentProject.tags as tag}
          <span class="project-tag">{tag}</span>
        {/each}
      </div>
      
      <h3>Overview</h3>
      <p style="margin-bottom: 1.5rem;">{currentProject.longDescription}</p>
      
      <div style="display: flex; gap: 1rem; margin-top: 2rem;">
        <a href={currentProject.github} target="_blank" rel="noopener noreferrer" class="btn">View Code</a>
        <button class="btn btn-outline" on:click={closeProjectModal}>Close</button>
      </div>
    </div>
  </div>
{/if}

<section class="section" style="background-color: var(--dark-elevated); padding: 4rem 0;">
  <div class="container" style="text-align: center;">
    <h2>Interested in Collaboration?</h2>
    <p style="max-width: 700px; margin: 0 auto 2rem auto;">I'm always open to new challenges and collaborations. If you have a project idea or need cybersecurity expertise, let's discuss how we can work together.</p>
    <a href="/contact" class="btn">Get In Touch</a>
  </div>
</section>
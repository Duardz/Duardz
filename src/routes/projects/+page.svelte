<!-- Projects Page (Dropdown Filtering): src/routes/projects/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  
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
  
  // Extract all unique tags
  /**
	 * @type {any[]}
	 */
  let allTags = [];
  projects.forEach(project => {
    project.tags.forEach(tag => {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    });
  });
  
  // Sort tags alphabetically
  allTags.sort();
  
  // Add 'All Technologies' option at the beginning
  allTags = ['All Technologies', ...allTags];
  
  // Filter states
  let selectedTag = 'All Technologies';
  let showFeaturedOnly = false;
  
  // Clear all filters
  function clearFilters() {
    selectedTag = 'All Technologies';
    showFeaturedOnly = false;
  }
  
  // Filter projects based on selected filters
  $: filteredProjects = projects.filter(project => {
    // Check if project matches tag filter
    const matchesTag = selectedTag === 'All Technologies' || project.tags.includes(selectedTag);
    
    // Check if project matches featured filter
    const matchesFeatured = !showFeaturedOnly || project.featured;
    
    return matchesTag && matchesFeatured;
  });
  
  // Current project for modal
  /**
	 * @type {{ image: any; title: any; featured: any; tags: any; longDescription: any; github: any; } | null}
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
  
  // Dropdown state
  let isDropdownOpen = false;
  
  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
  
  // @ts-ignore
  function selectTag(tag) {
    selectedTag = tag;
    isDropdownOpen = false;
  }
  
  // Close dropdown when clicking outside
  // @ts-ignore
  function handleClickOutside(event) {
    const dropdown = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    // @ts-ignore
    if (dropdown && !dropdown.contains(event.target) && !dropdownToggle.contains(event.target)) {
      isDropdownOpen = false;
    }
  }
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<svelte:head>
  <title>Projects | CyberPortfolio</title>
</svelte:head>

<section class="section">
  <div class="container">
    <h1>Projects</h1>
    <p style="margin-bottom: 2rem; max-width: 800px;">Explore my cybersecurity projects, ranging from vulnerability scanners to secure authentication systems. Each project showcases different aspects of my skills and expertise in the field.</p>
    
    <!-- Improved Filter UI with Dropdown -->
    <div class="card" style="margin-bottom: 2rem; background-color: var(--dark-elevated); border-left-color: var(--primary);">
      <div class="card-content">
        <h3 style="margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          Filter Projects
        </h3>
        
        <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem; align-items: center;">
          <!-- Featured Projects Toggle -->
          <div style="display: flex; align-items: center;">
            <label class="checkbox-container" style="cursor: pointer; display: flex; align-items: center; user-select: none; margin-bottom: 0;">
              <input 
                type="checkbox" 
                checked={showFeaturedOnly} 
                on:change={() => showFeaturedOnly = !showFeaturedOnly}
                style="margin-right: 0.5rem;"
              />
              <span style="display: flex; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem; color: var(--secondary);">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Featured Projects Only
              </span>
            </label>
          </div>
          
          <!-- Technology Dropdown -->
          <div style="position: relative;">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">Filter by technology:</label>
            <div class="dropdown">
              <button 
                class="dropdown-toggle"
                on:click={toggleDropdown}
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  width: 250px;
                  padding: 0.5rem 1rem;
                  background-color: var(--dark-surface);
                  border: 1px solid var(--border-color);
                  border-radius: 4px;
                  color: var(--text-primary);
                  cursor: pointer;
                "
              >
                <span style="display: flex; align-items: center;">
                  {#if selectedTag !== 'All Technologies'}
                    <span style="
                      display: inline-block;
                      font-size: 0.8rem;
                      padding: 0.15rem 0.5rem;
                      margin-right: 0.5rem;
                      border-radius: 20px;
                      background-color: var(--primary);
                      color: white;
                    ">
                      {selectedTag}
                    </span>
                  {:else}
                    {selectedTag}
                  {/if}
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  style="transition: transform 0.2s ease; transform: rotate({isDropdownOpen ? '180deg' : '0deg'});"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {#if isDropdownOpen}
                <div 
                  class="dropdown-menu"
                  style="
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 250px;
                    max-height: 300px;
                    overflow-y: auto;
                    background-color: var(--dark-surface);
                    border: 1px solid var(--border-color);
                    border-radius: 4px;
                    margin-top: 0.25rem;
                    z-index: 10;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                  "
                >
                  {#each allTags as tag}
                    <button 
                      class="dropdown-item"
                      on:click={() => selectTag(tag)}
                      style="
                        display: flex;
                        align-items: center;
                        width: 100%;
                        padding: 0.5rem 1rem;
                        background: none;
                        border: none;
                        text-align: left;
                        color: var(--text-primary);
                        cursor: pointer;
                        transition: background-color 0.2s ease;
                        
                        ${selectedTag === tag ? 'background-color: var(--primary); color: white;' : ''}
                      "
                    >
                      {#if selectedTag === tag}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="2" 
                          stroke-linecap="round" 
                          stroke-linejoin="round"
                          style="margin-right: 0.5rem;"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      {/if}
                      <span style={selectedTag === tag ? 'margin-left: ' + (selectedTag === tag ? '0' : '1.5rem') : ''}>
                        {tag}
                      </span>
                    </button>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
          
          {#if selectedTag !== 'All Technologies' || showFeaturedOnly}
            <button 
              on:click={clearFilters}
              style="
                background: none;
                border: none;
                color: var(--primary-light);
                cursor: pointer;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                margin-top: 2rem;
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.25rem;">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Clear Filters
            </button>
          {/if}
        </div>
        
        <div>
          <span style="font-size: 0.9rem; color: var(--text-secondary);">
            Showing <strong style="color: var(--secondary);">{filteredProjects.length}</strong> of <strong>{projects.length}</strong> projects
          </span>
        </div>
      </div>
    </div>
    
    <!-- Project Grid -->
    {#if filteredProjects.length > 0}
      <div class="grid grid-3">
        {#each filteredProjects as project}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div class="card project-card" on:click={() => openProjectModal(project)}>
            <div class="card-content">
              {#if project.featured}
                <div style="position: absolute; top: -10px; right: -10px; background-color: var(--secondary); color: var(--dark); font-size: 0.7rem; padding: 0.25rem 0.5rem; border-radius: 4px; display: flex; align-items: center; z-index: 2;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.25rem;">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Featured
                </div>
              {/if}
              
              <img src={project.image} alt={project.title} class="project-image" />
              <h3 class="card-title">{project.title}</h3>
              
              <div style="margin-bottom: 0.75rem;">
                {#each project.tags as tag}
                  <span style="
                    display: inline-block;
                    font-size: 0.7rem;
                    padding: 0.15rem 0.5rem;
                    margin-right: 0.5rem;
                    margin-bottom: 0.5rem;
                    border-radius: 20px;
                    background-color: {selectedTag === tag ? 'var(--primary)' : 'rgba(98, 0, 234, 0.1)'};
                    color: {selectedTag === tag ? 'white' : 'var(--primary-light)'};
                  ">
                    {tag}
                  </span>
                {/each}
              </div>
              
              <p style="margin-bottom: 1.5rem; font-size: 0.9rem;">{project.description}</p>
              
              <div style="display: flex; gap: 1rem;">
                <button class="btn btn-outline" on:click|stopPropagation={() => openProjectModal(project)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.25rem;">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Details
                </button>
                <a href={project.github} target="_blank" rel="noopener noreferrer" class="btn btn-outline" on:click|stopPropagation style="display: flex; align-items: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.25rem;">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="card" style="text-align: center; padding: 3rem;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h3>No projects match your current filters</h3>
        <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">Try adjusting your filter criteria to see more projects.</p>
        <button class="btn" on:click={clearFilters}>Clear All Filters</button>
      </div>
    {/if}
  </div>
</section>

<!-- Project Detail Modal -->
{#if isModalOpen && currentProject}
  <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); z-index: 1000; display: flex; justify-content: center; align-items: center; padding: 2rem;">
    <div style="position: relative; background-color: var(--dark-surface); max-width: 800px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 2rem; border-radius: 4px; border-left: 3px solid var(--primary);">
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button 
        style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; color: var(--text-secondary); font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; transition: all 0.2s ease;"
        on:click={closeProjectModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <img src={currentProject.image} alt={currentProject.title} style="width: 100%; border-radius: 4px; margin-bottom: 1.5rem;" />
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h2 style="margin: 0;">{currentProject.title}</h2>
        
        {#if currentProject.featured}
          <span style="background-color: var(--secondary); color: var(--dark); font-size: 0.8rem; padding: 0.25rem 0.75rem; border-radius: 20px; display: flex; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.25rem;">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Featured Project
          </span>
        {/if}
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        {#each currentProject.tags as tag}
          <span style="
            display: inline-block;
            font-size: 0.8rem;
            padding: 0.25rem 0.75rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            border-radius: 20px;
            background-color: rgba(98, 0, 234, 0.1);
            color: var(--primary-light);
          ">
            {tag}
          </span>
        {/each}
      </div>
      
      <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">Overview</h3>
      <p style="margin-bottom: 2rem;">{currentProject.longDescription}</p>
      
      <a href={currentProject.github} target="_blank" rel="noopener noreferrer" class="btn" style="display: inline-flex; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        View Project on GitHub
      </a>
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

<style>
  /* Additional styling for better filter UI */
  .dropdown-item:hover {
    background-color: var(--dark-elevated) !important;
  }
  
  .project-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .project-card:hover .project-image {
    transform: scale(1.05);
  }
  
  .project-image {
    transition: transform 0.3s ease;
  }
</style>
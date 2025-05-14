
<script>
// @ts-nocheck

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
  // @ts-ignore
  let allTags = [];
  projects.forEach(project => {
    project.tags.forEach(tag => {
      // @ts-ignore
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    });
  });
  
  // Sort tags alphabetically
  // @ts-ignore
  allTags.sort();
  
  // Add 'All Technologies' option at the beginning
  // @ts-ignore
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
  // @ts-ignore
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
    const dropdown = document.getElementById('tag-dropdown-menu');
    const dropdownToggle = document.getElementById('tag-dropdown-toggle');
    
    if (dropdown && dropdownToggle && 
        !dropdown.contains(event.target) && 
        !dropdownToggle.contains(event.target)) {
      isDropdownOpen = false;
    }
  }
  
  // Handle keyboard events for accessibility
  // @ts-ignore
  function handleKeyDown(event) {
    if (isModalOpen && event.key === 'Escape') {
      closeProjectModal();
    }
    
    if (isDropdownOpen && (event.key === 'Escape' || event.key === 'Tab')) {
      isDropdownOpen = false;
    }
  }
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>

<svelte:head>
  <title>Projects | CyberPortfolio</title>
</svelte:head>

<section class="section">
  <div class="container">
    <h1>Projects</h1>
    <p class="section-intro">Explore my cybersecurity projects, ranging from vulnerability scanners to secure authentication systems. Each project showcases different aspects of my skills and expertise in the field.</p>
    
    <!-- Improved Filter UI with Dropdown -->
    <div class="filter-card">
      <div class="card-content">
        <h3 class="filter-heading">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-filter">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          Filter Projects
        </h3>
        
        <div class="filter-controls">
          <!-- Featured Projects Toggle -->
          <div class="filter-control-item">
            <label class="checkbox-container">
              <input 
                type="checkbox" 
                checked={showFeaturedOnly} 
                on:change={() => showFeaturedOnly = !showFeaturedOnly}
                aria-label="Show featured projects only"
              />
              <span class="checkbox-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Featured Projects Only
              </span>
            </label>
          </div>
          
          <!-- Technology Dropdown -->
          <div class="filter-control-item dropdown-container">
            <label for="tech-filter" class="dropdown-label">Filter by technology:</label>
            <div class="dropdown">
              <button 
                id="tag-dropdown-toggle"
                class="dropdown-toggle"
                on:click={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                aria-controls="tag-dropdown-menu"
              >
                <span class="dropdown-selected">
                  {#if selectedTag !== 'All Technologies'}
                    <span class="tag tag-selected">
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
                  class="dropdown-arrow"
                  style="transform: rotate({isDropdownOpen ? '180deg' : '0deg'});"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {#if isDropdownOpen}
                <div 
                  id="tag-dropdown-menu"
                  class="dropdown-menu"
                  role="listbox"
                  aria-label="Technology options"
                  tabindex="-1"
                >
                  {#each allTags as tag, i}
                    <button 
                      class="dropdown-item {selectedTag === tag ? 'active' : ''}"
                      on:click={() => selectTag(tag)}
                      role="option"
                      aria-selected={selectedTag === tag}
                      id={`tag-option-${i}`}
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
                          class="icon-check"
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
              class="btn-clear-filters"
              aria-label="Clear all filters"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-close">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Clear Filters
            </button>
          {/if}
        </div>
        
        <div class="filter-status">
          <span class="status-text">
            Showing <strong class="highlight">{filteredProjects.length}</strong> of <strong>{projects.length}</strong> projects
          </span>
        </div>
      </div>
    </div>
    
    <!-- Project Grid -->
    {#if filteredProjects.length > 0}
      <div class="project-grid">
        {#each filteredProjects as project}
          <div 
            class="project-card"
            on:click={() => openProjectModal(project)}
            on:keydown={(e) => e.key === 'Enter' && openProjectModal(project)}
            tabindex="0"
            role="button"
            aria-label={`View details for ${project.title}`}
          >
            <div class="card-content">
              {#if project.featured}
                <div class="featured-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-star-sm">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Featured
                </div>
              {/if}
              
              <img src={project.image} alt="" class="project-image" aria-hidden="true" />
              <h3 class="card-title">{project.title}</h3>
              
              <div class="tag-container">
                {#each project.tags as tag}
                  <span class="tag {selectedTag === tag ? 'tag-highlighted' : ''}">
                    {tag}
                  </span>
                {/each}
              </div>
              
              <p class="project-description">{project.description}</p>
              
              <div class="card-actions">
                <button class="btn btn-outline" on:click|stopPropagation={() => openProjectModal(project)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-search">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Details
                </button>
                <a href={project.github} target="_blank" rel="noopener noreferrer" class="btn btn-outline" on:click|stopPropagation>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-github">
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
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-info">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h3>No projects match your current filters</h3>
        <p class="empty-state-message">Try adjusting your filter criteria to see more projects.</p>
        <button class="btn" on:click={clearFilters}>Clear All Filters</button>
      </div>
    {/if}
  </div>
</section>

<!-- Project Detail Modal -->
{#if isModalOpen && currentProject}
  <!-- svelte-ignore a11y_interactive_supports_focus -->
  <div 
    class="modal-overlay"
    on:click={closeProjectModal}
    on:keydown={(e) => e.key === 'Escape' && closeProjectModal()}
    role="dialog"
    aria-labelledby="modal-title"
    aria-modal="true"
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
      class="modal-content"
      on:click|stopPropagation
    >
      <button 
        class="modal-close"
        on:click={closeProjectModal}
        aria-label="Close project details"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <img src={currentProject.image} alt="" class="modal-image" aria-hidden="true" />
      
      <div class="modal-header">
        <h2 id="modal-title">{currentProject.title}</h2>
        
        {#if currentProject.featured}
          <span class="featured-badge-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-star-sm">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Featured Project
          </span>
        {/if}
      </div>
      
      <div class="modal-tags">
        {#each currentProject.tags as tag}
          <span class="tag">
            {tag}
          </span>
        {/each}
      </div>
      
      <h3 class="modal-section-title">Overview</h3>
      <p class="modal-description">{currentProject.longDescription}</p>
      
      <a href={currentProject.github} target="_blank" rel="noopener noreferrer" class="btn modal-action">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-github-lg">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        View Project on GitHub
      </a>
    </div>
  </div>
{/if}

<section class="section cta-section">
  <div class="container cta-container">
    <h2>Interested in Collaboration?</h2>
    <p class="cta-text">I'm always open to new challenges and collaborations. If you have a project idea or need cybersecurity expertise, let's discuss how we can work together.</p>
    <a href="/contact" class="btn">Get In Touch</a>
  </div>
</section>

<style>
  /* Base styles */
  .section-intro {
    margin-bottom: 2rem;
    max-width: 800px;
  }

  /* Filter Card Styles */
  .filter-card {
    margin-bottom: 2rem;
    background-color: var(--dark-elevated);
    border-left: 4px solid var(--primary);
    border-radius: 4px;
  }

  .filter-heading {
    margin-top: 0;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  .icon-filter {
    margin-right: 0.5rem;
  }

  .filter-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;
  }

  .filter-control-item {
    min-width: 200px;
  }

  /* Checkbox styles */
  .checkbox-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    margin-bottom: 0;
  }

  .checkbox-container input {
    margin-right: 0.5rem;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
  }

  .icon-star {
    margin-right: 0.5rem;
    color: var(--secondary);
  }

  /* Dropdown styles */
  .dropdown-container {
    position: relative;
  }

  .dropdown-label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .dropdown {
    position: relative;
  }

  .dropdown-toggle {
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
  }

  .dropdown-toggle:focus {
    outline: 2px solid var(--primary);
    outline-offset: 1px;
  }

  .dropdown-selected {
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dropdown-arrow {
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  .dropdown-menu {
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
  }

  .dropdown-item {
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
  }

  .dropdown-item:hover, .dropdown-item:focus {
    background-color: var(--dark-elevated);
  }

  .dropdown-item.active {
    background-color: var(--primary);
    color: white;
  }

  .icon-check {
    margin-right: 0.5rem;
  }

  /* Clear filters button */
  .btn-clear-filters {
    background: none;
    border: none;
    color: var(--primary-light);
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    margin-top: 1.5rem;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }

  .btn-clear-filters:hover {
    background-color: rgba(98, 0, 234, 0.1);
  }

  .icon-close {
    margin-right: 0.25rem;
  }

  /* Filter status */
  .filter-status {
    margin-top: 0.5rem;
  }

  .status-text {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .highlight {
    color: var(--secondary);
  }

  /* Project grid */
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  /* Project cards */
  .project-card {
    position: relative;
    overflow: visible;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    border-radius: 4px;
    background-color: var(--dark-surface);
    border: 1px solid var(--border-color);
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .project-card:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    transform: translateY(-5px);
  }

  .project-card:hover .project-image {
    transform: scale(1.05);
  }

  .featured-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: var(--secondary);
    color: var(--dark);
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    z-index: 2;
  }

  .icon-star-sm {
    margin-right: 0.25rem;
  }

  .project-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: transform 0.3s ease;
  }

  .card-title {
    font-size: 1.2rem;
    margin: 1rem 0 0.75rem;
  }

  .tag-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.75rem;
  }

  .tag {
    display: inline-block;
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 20px;
    background-color: rgba(98, 0, 234, 0.1);
    color: var(--primary-light);
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .tag-selected {
    display: inline-block;
    font-size: 0.8rem;
    padding: 0.15rem 0.5rem;
    margin-right: 0.5rem;
    border-radius: 20px;
    background-color: var(--primary);
    color: white;
  }

  .tag-highlighted {
    background-color: var(--primary);
    color: white;
  }

  .project-description {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-primary);
  }

  .card-actions {
    display: flex;
    gap: 1rem;
    margin-top: auto;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s ease;
  }

  .btn:hover, .btn:focus {
    background-color: var(--primary-dark, #5000c2);
  }

  .btn-outline {
    background-color: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
  }

  .btn-outline:hover, .btn-outline:focus {
    background-color: rgba(98, 0, 234, 0.1);
  }

  .icon-search, .icon-github {
    margin-right: 0.25rem;
  }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 3rem;
    background-color: var(--dark-surface);
    border-radius: 4px;
    border: 1px solid var(--border-color);
  }

  .icon-info {
    margin-bottom: 1rem;
  }

  .empty-state-message {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
  }

  /* Modal styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    backdrop-filter: blur(2px);
  }

  .modal-content {
    position: relative;
    background-color: var(--dark-surface);
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 2rem;
    border-radius: 4px;
    border-left: 3px solid var(--primary);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: all 0.2s ease;
    z-index: 5;
  }

  .modal-close:hover, .modal-close:focus {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
  }

  .modal-image {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    max-height: 400px;
    object-fit: cover;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .modal-header h2 {
    margin: 0;
    font-size: 1.8rem;
  }

  .featured-badge-lg {
    background-color: var(--secondary);
    color: var(--dark);
    font-size: 0.8rem;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }

  .modal-tags {
    margin-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
  }

  .modal-section-title {
    color: var(--secondary);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .modal-description {
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .modal-action {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }

  .icon-github-lg {
    margin-right: 0.5rem;
  }

  /* CTA Section */
  .cta-section {
    background-color: var(--dark-elevated);
    padding: 4rem 0;
    margin-top: 4rem;
  }

  .cta-container {
    text-align: center;
  }

  .cta-text {
    max-width: 700px;
    margin: 0 auto 2rem auto;
    color: var(--text-secondary);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .filter-controls {
      flex-direction: column;
      gap: 1rem;
    }

    .filter-control-item {
      width: 100%;
    }
    
    .dropdown-toggle {
      width: 100%;
    }
    
    .dropdown-menu {
      width: 100%;
    }
    
    .project-grid {
      grid-template-columns: 1fr;
    }
    
    .modal-content {
      max-width: 100%;
      margin: 0 1rem;
      padding: 1.5rem;
    }
    
    .modal-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .featured-badge-lg {
      margin-top: 0.5rem;
    }
  }

  /* Accessibility focus styles */
  button:focus, a:focus, input:focus, .project-card:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  /* Animation smoothness */
    .card-content {
      padding: 1.25rem;
    }
  </style>
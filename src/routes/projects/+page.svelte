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
  let searchQuery = '';
  
  // Clear all filters
  function clearFilters() {
    selectedTag = 'All Technologies';
    showFeaturedOnly = false;
    searchQuery = '';
  }
  
  // Filter projects based on selected filters and search query
  $: filteredProjects = projects.filter(project => {
    // Check if project matches tag filter
    const matchesTag = selectedTag === 'All Technologies' || project.tags.includes(selectedTag);
    
    // Check if project matches featured filter
    const matchesFeatured = !showFeaturedOnly || project.featured;
    
    // Check if project matches search query
    const matchesSearch = searchQuery === '' || 
                          project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesTag && matchesFeatured && matchesSearch;
  });
  
  // Current project for modal
  // @ts-ignore
  let currentProject = null;
  let isModalOpen = false;
  
  // @ts-ignore
  function openProjectModal(project) {
    currentProject = project;
    isModalOpen = true;
    document.body.classList.add('modal-open');
  }
  
  function closeProjectModal() {
    isModalOpen = false;
    document.body.classList.remove('modal-open');
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
  
  // Masonry layout helper
  let columns = 3;
  
 // @ts-ignore
   $: {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        columns = 1;
      } else if (window.innerWidth < 1024) {
        columns = 2;
      } else {
        columns = 3;
      }
    }
  }
  
  // @ts-ignore
  function calculateMasonryColumns(projects, numColumns) {
    const columnArray = Array.from({ length: numColumns }, () => []);
    
    // Distribute projects into columns
    // @ts-ignore
    projects.forEach((project, index) => {
      const columnIndex = index % numColumns;
      // @ts-ignore
      columnArray[columnIndex].push(project);
    });
    
    return columnArray;
  }
  
  $: masonryColumns = calculateMasonryColumns(filteredProjects, columns);
  
  // Handle window resize
  function handleResize() {
    if (window.innerWidth < 768) {
      columns = 1;
    } else if (window.innerWidth < 1024) {
      columns = 2;
    } else {
      columns = 3;
    }
  }
  
  onMount(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  
  // Related projects helper
  // @ts-ignore
  function getRelatedProjects(currentProject, allProjects) {
    if (!currentProject) return [];
    
    // Find projects with matching tags
    const related = allProjects
      // @ts-ignore
      .filter(p => p.title !== currentProject.title) // Exclude current project
      // @ts-ignore
      .map(p => {
        // Count matching tags
        // @ts-ignore
        const matchingTags = p.tags.filter(tag => currentProject.tags.includes(tag));
        return { 
          project: p, 
          relevance: matchingTags.length 
        };
      })
      // @ts-ignore
      .filter(p => p.relevance > 0) // Only include projects with at least one matching tag
      // @ts-ignore
      .sort((a, b) => b.relevance - a.relevance) // Sort by relevance
      .slice(0, 3) // Take top 3
      // @ts-ignore
      .map(p => p.project);
      
    return related;
  }
  
 // @ts-ignore
   $: relatedProjects = currentProject ? getRelatedProjects(currentProject, projects) : [];
</script>

<svelte:head>
  <title>Projects | CyberPortfolio</title>
</svelte:head>

<section class="header-section">
  <div class="container">
    <h1 class="page-title">Projects</h1>
    <p class="section-intro">Explore my cybersecurity projects, ranging from vulnerability scanners to secure authentication systems. Each project showcases different aspects of my skills and expertise in the field.</p>
  </div>
</section>

<div class="container">
  <!-- Improved Filter UI -->
  <div class="filter-bar">
    <div class="search-container">
      <div class="search-input-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text"
          placeholder="Search projects..."
          bind:value={searchQuery}
          aria-label="Search projects"
          class="search-input"
        />
        {#if searchQuery}
          <button 
            class="clear-search"
            on:click={() => searchQuery = ''}
            aria-label="Clear search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        {/if}
      </div>
    </div>
    
    <div class="filter-controls">
      <div class="filter-group">
        <!-- Featured Projects Toggle -->
        <label class="switch-container" for="featured-toggle">
          <input 
            type="checkbox" 
            id="featured-toggle"
            checked={showFeaturedOnly} 
            on:change={() => showFeaturedOnly = !showFeaturedOnly}
            aria-label="Show featured projects only"
          />
          <span class="switch-slider"></span>
          <span class="switch-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Featured Only
          </span>
        </label>
      </div>
      
      <!-- Technology Dropdown -->
      <div class="filter-group dropdown-container">
        <div class="dropdown">
          <button 
            id="tag-dropdown-toggle"
            class="dropdown-toggle"
            on:click={toggleDropdown}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
            aria-controls="tag-dropdown-menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="filter-icon">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span class="dropdown-label-text">Technology:</span>
            <span class="dropdown-selected">
              {#if selectedTag !== 'All Technologies'}
                <span class="tag tag-selected">
                  {selectedTag}
                </span>
              {:else}
                <span>All Technologies</span>
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
                  <span>{tag}</span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>
      
      <!-- Filter status and reset -->
      <div class="filter-status">
        <span class="status-text">
          Showing <strong class="highlight">{filteredProjects.length}</strong> of <strong>{projects.length}</strong> projects
        </span>
        
        {#if selectedTag !== 'All Technologies' || showFeaturedOnly || searchQuery}
          <button 
            on:click={clearFilters}
            class="btn-clear-filters"
            aria-label="Clear all filters"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-close">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Reset
          </button>
        {/if}
      </div>
    </div>
  </div>
  
  <!-- Project Masonry Grid -->
  {#if filteredProjects.length > 0}
    <div class="masonry-container">
      {#each masonryColumns as column, colIndex}
        <div class="masonry-column">
          {#each column as project}
            <div 
              class="project-card"
              on:click={() => openProjectModal(project)}
              on:keydown={(e) => e.key === 'Enter' && openProjectModal(project)}
              tabindex="0"
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <div class="card-content">
                <div class="card-image-container">
                  <img src={project.image} alt="" class="project-image" aria-hidden="true" />
                  <div class="card-overlay">
                    <button class="overlay-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      View Details
                    </button>
                  </div>
                </div>
                
                {#if project.featured}
                  <div class="featured-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="icon-star-sm">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    Featured
                  </div>
                {/if}
                
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer" class="btn-link" on:click|stopPropagation>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          {/each}
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
      <button class="btn" on:click={clearFilters}>Reset Filters</button>
    </div>
  {/if}
</div>

<!-- Enhanced Project Detail Modal -->
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
      
      <div class="modal-grid">
        <div class="modal-main">
          <img src={currentProject.image} alt="" class="modal-image" aria-hidden="true" />
          
          <div class="modal-header">
            <h2 id="modal-title">{currentProject.title}</h2>
            
            {#if currentProject.featured}
              <span class="featured-badge-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="icon-star-sm">
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
        
        {#if relatedProjects.length > 0}
          <div class="modal-sidebar">
            <h3 class="modal-section-title">Related Projects</h3>
            <div class="related-projects">
              {#each relatedProjects as project}
                <div 
                  class="related-project-card"
                  on:click|stopPropagation={() => {
                    closeProjectModal();
                    setTimeout(() => openProjectModal(project), 100);
                  }}
                >
                  <div class="related-project-image">
                    <img src={project.image} alt="" aria-hidden="true" />
                  </div>
                  <div class="related-project-info">
                    <h4>{project.title}</h4>
                    <div class="related-project-tags">
                      {#each project.tags.slice(0, 2) as tag}
                        <span class="tag tag-small">{tag}</span>
                      {/each}
                      {#if project.tags.length > 2}
                        <span class="tag-more">+{project.tags.length - 2}</span>
                      {/if}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<section class="section cta-section">
  <div class="container cta-container">
    <h2>Ready to Work Together?</h2>
    <p class="cta-text">I'm always open to new challenges and collaborations. If you have a project idea or need cybersecurity expertise, let's discuss how we can work together.</p>
    <a href="/contact" class="btn btn-cta">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
      Get In Touch
    </a>
  </div>
</section>

<style>
  /* Base styles */
  :global(body.modal-open) {
    overflow: hidden;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  /* Header section */
  .header-section {
    padding: 4rem 0 2rem;
    background-color: var(--dark-elevated);
    position: relative;
    overflow: hidden;
  }
  
  .header-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(98, 0, 234, 0.1), transparent 70%);
    z-index: 0;
  }
  
  .page-title {
    font-size: 2.5rem;
    position: relative;
    z-index: 1;
    margin-bottom: 1rem;
  }
  
  .section-intro {
    max-width: 800px;
    position: relative;
    z-index: 1;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }
  
  /* Filter UI */
  .filter-bar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--dark-elevated);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .search-container {
    width: 100%;
  }
  
  .search-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .search-icon {
    position: absolute;
    left: 1rem;
    color: var(--text-secondary);
  }
  
  .search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background-color: var(--dark-surface);
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.2s ease;
  }
  
  .search-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(98, 0, 234, 0.2);
    outline: none;
  }
  
  .clear-search {
    position: absolute;
    right: 1rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }
  
  .clear-search:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
  }
  
  .filter-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-between;
  }
  
  .filter-group {
    display: flex;
    align-items: center;
  }
  
  /* Toggle switch */
  .switch-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }
  
  .switch-container input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
  
  .switch-slider {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: var(--dark-surface);
    border-radius: 20px;
    margin-right: 0.75rem;
    transition: all 0.2s ease;
    border: 1px solid var(--border-color);
  }
  
  .switch-slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 1px;
    background-color: var(--text-secondary);
    border-radius: 50%;
    transition: all 0.2s ease;
  }
  
  input:checked + .switch-slider {
    background-color: var(--primary);
    border-color: var(--primary);
  }
  
  input:checked + .switch-slider:before {
    transform: translateX(19px);
    background-color: white;
  }
  
  input:focus + .switch-slider {
    box-shadow: 0 0 0 3px rgba(98, 0, 234, 0.2);
  }
  
  .switch-label {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
  }
  
  .icon-star {
    margin-right: 0.5rem;
    color: var(--secondary);
  }
  
  /* Dropdown styles */
  .dropdown-container {
    position: relative;
  }
  
  .dropdown {
    position: relative;
  }
  
  .dropdown-toggle {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    background-color: var(--dark-surface);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 250px;
  }
  
  .dropdown-toggle:hover {
    border-color: var(--primary-light);
  }
  
  .dropdown-toggle:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(98, 0, 234, 0.2);
  }
  
  .filter-icon {
    margin-right: 0.5rem;
    color: var(--text-secondary);
  }
  
  .dropdown-label-text {
    margin-right: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
  
  .dropdown-selected {
    display: flex;
    align-items: center;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .dropdown-arrow {
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }
  
  .dropdown-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    background-color: var(--dark-surface);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    z-index: 10;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .dropdown-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75rem 1rem;
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
    background-color: rgba(98, 0, 234, 0.1);
  }
  
  .icon-check {
    margin-right: 0.5rem;
    color: var(--primary);
  }
  
  /* Filter status */
  .filter-status {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  
  .status-text {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  
  .highlight {
    color: var(--secondary);
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
    padding: 0.35rem 0.75rem;
    margin-left: 1rem;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }
  
  .btn-clear-filters:hover {
    background-color: rgba(98, 0, 234, 0.1);
  }
  
  .icon-close {
    margin-right: 0.35rem;
  }
  
  /* Masonry grid */
  .masonry-container {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .masonry-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  /* Project cards */
  .project-card {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    border-radius: 8px;
    background-color: var(--dark-surface);
    border: 1px solid var(--border-color);
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    border-color: var(--primary-light);
  }
  
  .project-card:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(98, 0, 234, 0.2), 0 12px 24px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  
  .card-content {
    padding: 0;
  }
  
  .card-image-container {
    position: relative;
    overflow: hidden;
  }
  
  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .project-card:hover .project-image {
    transform: scale(1.05);
  }
  
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 25, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover .card-overlay {
    opacity: 1;
  }
  
  .overlay-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 0.9rem;
    transform: translateY(20px);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .overlay-button svg {
    margin-right: 0.5rem;
  }
  
  .project-card:hover .overlay-button {
    transform: translateY(0);
    opacity: 1;
  }
  
  .featured-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: var(--secondary);
    color: var(--dark);
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    z-index: 2;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  
  .icon-star-sm {
    margin-right: 0.25rem;
  }
  
  .card-title {
    font-size: 1.2rem;
    margin: 0;
    padding: 1.25rem 1.25rem 0.75rem;
  }
  
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1.25rem;
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
    background-color: var(--primary);
    color: white;
  }
  
  .tag-highlighted {
    background-color: var(--primary);
    color: white;
  }
  
  .tag-small {
    font-size: 0.65rem;
    padding: 0.1rem 0.4rem;
  }
  
  .tag-more {
    font-size: 0.65rem;
    color: var(--text-secondary);
  }
  
  .project-description {
    padding: 0 1.25rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }
  
  .card-actions {
    display: flex;
    padding: 1.25rem;
    background-color: rgba(15, 15, 25, 0.3);
    border-top: 1px solid var(--border-color);
  }
  
  .btn-link {
    display: flex;
    align-items: center;
    color: var(--primary-light);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;
  }
  
  .btn-link:hover {
    color: var(--primary);
  }
  
  .icon-github {
    margin-right: 0.5rem;
  }
  
  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    background-color: var(--dark-surface);
    border-radius: 8px;
    border: 1px solid var(--border-color);
    margin-bottom: 3rem;
  }
  
  .icon-info {
    margin-bottom: 1.5rem;
  }
  
  .empty-state h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  .empty-state-message {
    margin-bottom: 2rem;
    color: var(--text-secondary);
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Enhanced Modal styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 20, 0.85);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    backdrop-filter: blur(5px);
  }
  
  .modal-content {
    position: relative;
    background-color: var(--dark-surface);
    width: 100%;
    max-width: 1000px;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border-left: 4px solid var(--primary);
  }
  
  .modal-grid {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 0;
  }
  
  .modal-main {
    padding: 2rem;
  }
  
  .modal-sidebar {
    background-color: var(--dark-elevated);
    padding: 2rem;
    border-left: 1px solid var(--border-color);
  }
  
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(15, 15, 25, 0.5);
    border: none;
    color: var(--text-secondary);
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transition: all 0.2s ease;
    z-index: 5;
    backdrop-filter: blur(2px);
  }
  
  .modal-close:hover, .modal-close:focus {
    background-color: rgba(255, 255, 255, 0.15);
    color: var(--text-primary);
  }
  
  .modal-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    max-height: 400px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .modal-header h2 {
    margin: 0;
    font-size: 2rem;
  }
  
  .featured-badge-lg {
    background-color: var(--secondary);
    color: var(--dark);
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.35rem 0.85rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  
  .modal-tags {
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
  }
  
  .modal-section-title {
    color: var(--secondary);
    margin-bottom: 1rem;
    font-size: 1.2rem;
    position: relative;
    padding-bottom: 0.5rem;
  }
  
  .modal-section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--secondary);
    border-radius: 3px;
  }
  
  .modal-description {
    margin-bottom: 2rem;
    line-height: 1.8;
    font-size: 1rem;
    color: var(--text-secondary);
  }
  
  .modal-action {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .modal-action:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(98, 0, 234, 0.3);
  }
  
  .icon-github-lg {
    margin-right: 0.75rem;
  }
  
  /* Related projects */
  .related-projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .related-project-card {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    background-color: rgba(15, 15, 25, 0.5);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
  }
  
  .related-project-card:hover {
    background-color: rgba(98, 0, 234, 0.1);
    border-color: var(--primary-light);
  }
  
  .related-project-image {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .related-project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .related-project-info {
    flex: 1;
  }
  
  .related-project-info h4 {
    margin: 0 0 0.5rem 0;
    font-size: 0.95rem;
  }
  
  .related-project-tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.35rem;
  }
  
  /* CTA Section */
  .cta-section {
    background-color: var(--dark-elevated);
    padding: 5rem 0;
    margin-top: 3rem;
    position: relative;
    overflow: hidden;
  }
  
  .cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(98, 0, 234, 0.15), transparent 80%);
    z-index: 0;
  }
  
  .cta-container {
    text-align: center;
    position: relative;
    z-index: 1;
  }
  
  .cta-container h2 {
    margin-bottom: 1.5rem;
    font-size: 2.2rem;
  }
  
  .cta-text {
    max-width: 700px;
    margin: 0 auto 2.5rem auto;
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1.1rem;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .btn:hover, .btn:focus {
    background-color: var(--primary-dark, #5000c2);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(98, 0, 234, 0.3);
  }
  
  .btn svg {
    margin-right: 0.5rem;
  }
  
  .btn-cta {
    padding: 0.85rem 2rem;
    font-size: 1.1rem;
  }
  
  /* Accessibility focus styles */
  button:focus, a:focus, input:focus {
    outline: none;
  }
  
  button:focus-visible, a:focus-visible, input:focus-visible, .project-card:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
  
  /* Responsive styles */
  @media (max-width: 1024px) {
    .modal-grid {
      grid-template-columns: 1fr;
    }
    
    .modal-sidebar {
      border-left: none;
      border-top: 1px solid var(--border-color);
    }
    
    .related-projects {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1rem;
    }
    
    .filter-controls {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .filter-status {
      margin-left: 0;
      width: 100%;
      justify-content: space-between;
    }
  }
  
  @media (max-width: 768px) {
    .masonry-container {
      display: block;
    }
    
    .masonry-column {
      margin-bottom: 1.5rem;
    }
    
    .related-projects {
      grid-template-columns: 1fr;
    }
    
    .dropdown-toggle {
      width: 100%;
      min-width: auto;
    }
    
    .page-title {
      font-size: 2rem;
    }
    
    .header-section {
      padding: 3rem 0 1.5rem;
    }
    
    .filter-bar {
      padding: 1.25rem;
    }
    
    .modal-content {
      margin: 0;
      height: 100%;
      max-height: 100%;
      border-radius: 0;
      border-left: none;
      border-top: 4px solid var(--primary);
    }
    
    .modal-main, .modal-sidebar {
      padding: 1.5rem;
    }
    
    .modal-overlay {
      padding: 0;
    }
    
    .cta-section {
      padding: 3rem 0;
    }
    
    .cta-container h2 {
      font-size: 1.8rem;
    }
  }
  
  @media (max-width: 480px) {
    .modal-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .featured-badge-lg {
      margin-top: 0.75rem;
    }
    
    .btn-cta {
      width: 100%;
    }
  }
</style>
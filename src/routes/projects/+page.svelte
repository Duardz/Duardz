<!-- src/routes/projects/+page.svelte -->
<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  // @ts-ignore
  import ProjectCard from '$lib/components/common/ProjectCard.svelte';
  import { projects, getProjectCategories, getProjectTechnologies } from '$lib/data/projects.js';
  
  // Filter state
  let selectedCategory = 'All';
  let selectedTech = 'All';
  let searchQuery = '';
  let showOnlyFeatured = false;
  
  // Get unique categories and technologies
  const categories = ['All', ...getProjectCategories()];
  const technologies = ['All', ...getProjectTechnologies()];
  
  // Filter projects
  $: filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFeatured = !showOnlyFeatured || project.featured;
    
    return matchesCategory && matchesTech && matchesSearch && matchesFeatured;
  });
  
  // Selected project for modal
  // @ts-ignore
  let selectedProject = null;
  
  // @ts-ignore
  function selectProject(project) {
    selectedProject = project;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    selectedProject = null;
    document.body.style.overflow = '';
  }
  
  function clearFilters() {
    selectedCategory = 'All';
    selectedTech = 'All';
    searchQuery = '';
    showOnlyFeatured = false;
  }
  
  // Keyboard navigation
  // @ts-ignore
  function handleKeydown(e) {
    // @ts-ignore
    if (e.key === 'Escape' && selectedProject) {
      closeModal();
    }
  }
  
  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  });
  
  // Stats for dashboard
  const stats = {
    totalProjects: projects.length,
    categories: categories.length - 1,
    technologies: technologies.length - 1,
    featuredProjects: projects.filter(p => p.featured).length
  };
</script>

<svelte:head>
  <title>Security Projects - DUARDZ | Cybersecurity Portfolio</title>
  <meta name="description" content="Explore cybersecurity and web development projects including penetration testing tools, security dashboards, vulnerability scanners, and secure applications.">
</svelte:head>

<!-- Hero Section -->
<Section size="lg" background="primary">
  <div class="projects-hero">
    <!-- Animated Background -->
    <div class="hero-background">
      <div class="code-grid"></div>
      <div class="project-elements">
        <div class="project-icon icon-1">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div class="project-icon icon-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="project-icon icon-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="hero-content">
      <div class="hero-badge">
        <div class="badge-circuit"></div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>Project Portfolio</span>
      </div>
      
      <h1 class="hero-title">
        <span class="title-line">SECURITY</span>
        <span class="title-highlight">PROJECTS</span>
      </h1>
      
      <p class="hero-description">
        A collection of cybersecurity tools, web applications, and security-focused projects. 
        From penetration testing utilities to secure web development, each project demonstrates 
        practical application of security principles and modern development practices.
      </p>
      
      <!-- Project Dashboard -->
      <div class="project-dashboard">
        <div class="dashboard-header">
          <div class="system-status">
            <div class="status-indicator online"></div>
            <span>PROJECT SYSTEMS ONLINE</span>
          </div>
          <div class="deployment-status">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
            <span>READY FOR DEPLOYMENT</span>
          </div>
        </div>
        <div class="stats-grid">
          <div class="stat-box">
            <div class="stat-number">{stats.totalProjects}</div>
            <div class="stat-label">Projects</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">{stats.categories}</div>
            <div class="stat-label">Categories</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">{stats.technologies}</div>
            <div class="stat-label">Technologies</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">{stats.featuredProjects}</div>
            <div class="stat-label">Featured</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- Filters Section -->
<Section size="sm" background="secondary">
  <div class="filters-section">
    <div class="filters-header">
      <h2 class="heading-3">Project Filters</h2>
      <p class="text-secondary">Filter by category, technology, or search for specific projects</p>
    </div>
    
    <div class="filters-container">
      <!-- Search -->
      <div class="filter-row">
        <div class="search-container">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search security tools, web apps, vulnerabilities..."
            class="input search-input"
          />
          {#if searchQuery}
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button class="clear-search" on:click={() => searchQuery = ''}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          {/if}
        </div>
      </div>
      
      <!-- Category and Tech Filters -->
      <div class="filter-row">
        <div class="select-group">
          <label for="category" class="filter-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Category
          </label>
          <select id="category" bind:value={selectedCategory} class="input select-input">
            {#each categories as category}
              <option value={category}>{category}</option>
            {/each}
          </select>
        </div>
        
        <div class="select-group">
          <label for="technology" class="filter-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
            </svg>
            Technology
          </label>
          <select id="technology" bind:value={selectedTech} class="input select-input">
            {#each technologies as tech}
              <option value={tech}>{tech}</option>
            {/each}
          </select>
        </div>
      </div>
      
      <!-- Featured Toggle and Clear -->
      <div class="filter-row">
        <label class="featured-toggle">
          <input
            type="checkbox"
            bind:checked={showOnlyFeatured}
            class="checkbox"
          />
          <div class="toggle-slider">
            <div class="toggle-indicator"></div>
          </div>
          <span class="toggle-label">Featured Projects Only</span>
        </label>
        
        {#if selectedCategory !== 'All' || selectedTech !== 'All' || searchQuery || showOnlyFeatured}
          <Button variant="ghost" size="sm" on:click={clearFilters}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c0-1 1-2 2-2v2"/>
            </svg>
            Clear All Filters
          </Button>
        {/if}
      </div>
    </div>
    
    <!-- Filter Results -->
    <div class="filter-results">
      <div class="results-info">
        <span class="results-count">
          Showing {filteredProjects.length} of {projects.length} projects
        </span>
        <div class="results-visualization">
          <div class="result-bar">
            <div class="result-fill" style="width: {(filteredProjects.length / projects.length) * 100}%"></div>
          </div>
          <span class="percentage">{Math.round((filteredProjects.length / projects.length) * 100)}%</span>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- Projects Grid -->
<Section background="primary">
  <div class="projects-content">
    {#if filteredProjects.length > 0}
      <div class="projects-grid">
        {#each filteredProjects as project (project.id)}
          <div 
            class="project-wrapper"
            on:click={() => selectProject(project)} 
            on:keydown={(e) => e.key === 'Enter' && selectProject(project)}
            role="button"
            tabindex="0"
          >
            <Card hover animate>
              <div class="project-card">
                {#if project.featured}
                  <div class="featured-indicator">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    Featured
                  </div>
                {/if}
                
                <div class="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div class="image-overlay">
                    <div class="category-tag">{project.category}</div>
                    <div class="project-actions">
                      {#if project.github}
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <a href={project.github} target="_blank" rel="noopener" class="action-link" on:click|stopPropagation>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                          </svg>
                        </a>
                      {/if}
                      {#if project.demo}
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <a href={project.demo} target="_blank" rel="noopener" class="action-link" on:click|stopPropagation>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </a>
                      {/if}
                    </div>
                  </div>
                </div>
                
                <div class="project-content">
                  <div class="project-header">
                    <h3 class="project-title">{project.title}</h3>
                    <div class="project-status">
                      <div class="status-dot active"></div>
                      <span>Active</span>
                    </div>
                  </div>
                  
                  <p class="project-description">{project.description}</p>
                  
                  <div class="project-tech">
                    {#each project.technologies.slice(0, 4) as tech}
                      <span class="tech-tag">{tech}</span>
                    {/each}
                    {#if project.technologies.length > 4}
                      <span class="tech-tag more">+{project.technologies.length - 4}</span>
                    {/if}
                  </div>
                  
                  <div class="project-footer">
                    <div class="project-meta">
                      <span class="meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        Recent
                      </span>
                    </div>
                    <button class="view-details">
                      <span>View Details</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        {/each}
      </div>
    {:else}
      <div class="empty-state">
        <div class="empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
        <h3 class="heading-3">No Security Projects Found</h3>
        <p class="text-secondary">
          Try adjusting your filters or search terms to discover relevant projects.
        </p>
        <Button variant="secondary" on:click={clearFilters}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c0-1 1-2 2-2v2"/>
          </svg>
          Reset All Filters
        </Button>
      </div>
    {/if}
  </div>
</Section>

<!-- Project Detail Modal -->
{#if selectedProject}
  <div class="modal-overlay" on:click={closeModal} on:keydown={(e) => e.key === 'Escape' && closeModal()}>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="project-modal" on:click|stopPropagation>
      <button class="modal-close" on:click={closeModal}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      
      <div class="modal-header">
        <img src={selectedProject.image} alt={selectedProject.title} class="modal-image" />
        <div class="modal-overlay-content">
          <div class="modal-badges">
            {#if selectedProject.featured}
              <span class="modal-badge featured">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Featured
              </span>
            {/if}
            <span class="modal-badge category">{selectedProject.category}</span>
          </div>
        </div>
      </div>
      
      <div class="modal-content">
        <div class="modal-title-section">
          <h2 class="modal-title">{selectedProject.title}</h2>
          <div class="modal-actions">
            {#if selectedProject.github}
              <a href={selectedProject.github} target="_blank" rel="noopener" class="modal-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                Source Code
              </a>
            {/if}
            {#if selectedProject.demo}
              <a href={selectedProject.demo} target="_blank" rel="noopener" class="modal-link primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
              </a>
            {/if}
          </div>
        </div>
        
        <div class="modal-section">
          <h3 class="section-title">Project Overview</h3>
          <p class="section-content">{selectedProject.details.overview}</p>
        </div>
        
        <div class="modal-section">
          <h3 class="section-title">Key Features</h3>
          <ul class="features-list">
            {#each selectedProject.details.features as feature}
              <li class="feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                {feature}
              </li>
            {/each}
          </ul>
        </div>
        
        <div class="modal-section">
          <h3 class="section-title">Technology Stack</h3>
          <div class="tech-stack">
            {#each selectedProject.details.techStack as tech}
              <span class="tech-badge">{tech}</span>
            {/each}
          </div>
        </div>
        
        <div class="modal-section">
          <h3 class="section-title">Security Implementation</h3>
          <p class="section-content">{selectedProject.details.challenges}</p>
        </div>
        
        <div class="modal-section">
          <h3 class="section-title">Results & Impact</h3>
          <p class="section-content">{selectedProject.details.results}</p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Hero Section */
  .projects-hero {
    position: relative;
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  
  .code-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 107, 53, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 107, 53, 0.08) 1px, transparent 1px);
    background-size: 45px 45px;
    animation: code-matrix 20s linear infinite;
  }
  
  @keyframes code-matrix {
    0% { transform: translate(0, 0); }
    100% { transform: translate(45px, 45px); }
  }
  
  .project-elements {
    position: absolute;
    inset: 0;
  }
  
  .project-icon {
    position: absolute;
    color: var(--cyber-orange);
    opacity: 0.4;
    animation: project-drift 12s ease-in-out infinite;
  }
  
  .icon-1 {
    top: 18%;
    left: 12%;
    animation-delay: 0s;
  }
  
  .icon-2 {
    top: 55%;
    right: 18%;
    animation-delay: 4s;
  }
  
  .icon-3 {
    bottom: 22%;
    left: 22%;
    animation-delay: 8s;
  }
  
  @keyframes project-drift {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
    33% { transform: translateY(-18px) rotate(4deg); opacity: 0.6; }
    67% { transform: translateY(-10px) rotate(-4deg); opacity: 0.5; }
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .hero-badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-full);
    color: var(--text-primary);
    font-size: var(--text-sm);
    font-weight: 500;
    margin-bottom: var(--space-6);
    overflow: hidden;
  }
  
  .badge-circuit {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, var(--cyber-orange), transparent);
    opacity: 0.2;
    animation: circuit-flow 4s ease-in-out infinite;
  }
  
  @keyframes circuit-flow {
    0%, 100% { transform: translateX(-100%) rotate(0deg); }
    50% { transform: translateX(100%) rotate(180deg); }
  }
  
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .title-line {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .title-highlight {
    color: var(--text-primary);
    position: relative;
  }
  
  .title-highlight::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-accent);
    border-radius: var(--radius-full);
  }
  
  .hero-description {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-8);
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Project Dashboard */
  .project-dashboard {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    max-width: 650px;
    margin: 0 auto;
    box-shadow: var(--shadow-glow);
  }
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--border);
    flex-wrap: wrap;
    gap: var(--space-3);
  }
  
  .system-status,
  .deployment-status {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .system-status {
    color: var(--neon-green);
  }
  
  .deployment-status {
    color: var(--cyber-orange);
  }
  
  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  
  .status-indicator.online {
    background: var(--neon-green);
    animation: pulse 2s ease-in-out infinite;
    box-shadow: 0 0 8px var(--neon-green);
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-4);
  }
  
  .stat-box {
    text-align: center;
    padding: var(--space-3);
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
  }
  
  .stat-box:hover {
    border-color: var(--border-glow);
    transform: translateY(-2px);
  }
  
  .stat-number {
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
  
  /* Filters Section */
  .filters-section {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .filters-header {
    text-align: center;
    margin-bottom: var(--space-6);
  }
  
  .filters-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .filter-row {
    display: flex;
    align-items: flex-end;
    gap: var(--space-4);
    flex-wrap: wrap;
  }
  
  .search-container {
    position: relative;
    flex: 1;
    min-width: 300px;
  }
  
  .search-icon {
    position: absolute;
    left: var(--space-3);
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
  }
  
  .search-input {
    padding-left: var(--space-10);
    padding-right: var(--space-10);
    width: 100%;
  }
  
  .clear-search {
    position: absolute;
    right: var(--space-3);
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: var(--space-1);
    border-radius: var(--radius-sm);
  }
  
  .clear-search:hover {
    color: var(--text-primary);
    background: var(--surface-hover);
  }
  
  .select-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    min-width: 180px;
  }
  
  .filter-label {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-secondary);
  }
  
  .select-input {
    cursor: pointer;
  }
  
  .featured-toggle {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    cursor: pointer;
    user-select: none;
  }
  
  .checkbox {
    display: none;
  }
  
  .toggle-slider {
    position: relative;
    width: 44px;
    height: 24px;
    background: var(--border);
    border-radius: var(--radius-full);
    transition: all var(--transition-base);
  }
  
  .toggle-indicator {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-sm);
  }
  
  .checkbox:checked + .toggle-slider {
    background: var(--neon-cyan);
  }
  
  .checkbox:checked + .toggle-slider .toggle-indicator {
    transform: translateX(20px);
  }
  
  .toggle-label {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-secondary);
  }
  
  /* Filter Results */
  .filter-results {
    margin-top: var(--space-4);
    padding-top: var(--space-4);
    border-top: 1px solid var(--border);
  }
  
  .results-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
  }
  
  .results-count {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
  
  .results-visualization {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }
  
  .result-bar {
    width: 100px;
    height: 6px;
    background: var(--border);
    border-radius: var(--radius-full);
    overflow: hidden;
  }
  
  .result-fill {
    height: 100%;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
    transition: width var(--transition-base);
  }
  
  .percentage {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--neon-cyan);
    font-weight: 600;
  }
  
  /* Projects Content */
  .projects-content {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: var(--space-6);
  }
  
  .project-wrapper {
    cursor: pointer;
    height: 100%;
  }
  
  .project-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
  
  .featured-indicator {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    display: flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-3);
    background: var(--gradient-accent);
    color: var(--bg-primary);
    font-size: var(--text-xs);
    font-weight: 600;
    border-radius: var(--radius-full);
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .project-image {
    position: relative;
    width: calc(100% + 3rem);
    margin: -1.5rem -1.5rem 1.5rem;
    height: 200px;
    overflow: hidden;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }
  
  :global(.card:hover) .project-image img {
    transform: scale(1.08);
  }
  
  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: var(--space-4);
    opacity: 0;
    transition: opacity var(--transition-base);
  }
  
  .project-wrapper:hover .image-overlay {
    opacity: 1;
  }
  
  .category-tag {
    padding: var(--space-1) var(--space-3);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    color: var(--neon-cyan);
    font-size: var(--text-xs);
    font-weight: 500;
    border-radius: var(--radius-md);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .project-actions {
    display: flex;
    gap: var(--space-2);
  }
  
  .action-link {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    transition: all var(--transition-base);
  }
  
  .action-link:hover {
    background: var(--neon-cyan);
    border-color: var(--neon-cyan);
    color: var(--bg-primary);
    transform: translateY(-2px);
  }
  
  .project-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-3);
    margin-bottom: var(--space-3);
  }
  
  .project-title {
    font-size: var(--text-xl);
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-primary);
  }
  
  .project-status {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    font-size: var(--text-xs);
    color: var(--neon-green);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  
  .status-dot.active {
    background: var(--neon-green);
    animation: pulse 2s ease-in-out infinite;
  }
  
  .project-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-4);
    flex: 1;
  }
  
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }
  
  .tech-tag {
    padding: var(--space-1) var(--space-2);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    font-size: var(--text-xs);
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  .tech-tag.more {
    color: var(--neon-cyan);
    border-color: var(--border-glow);
  }
  
  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-4);
    border-top: 1px solid var(--border);
  }
  
  .project-meta {
    display: flex;
    gap: var(--space-3);
  }
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    font-size: var(--text-xs);
    color: var(--text-muted);
  }
  
  .view-details {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    background: none;
    border: none;
    color: var(--neon-cyan);
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    transition: gap var(--transition-base);
  }
  
  .project-wrapper:hover .view-details {
    gap: var(--space-2);
  }
  
  /* Empty State */
  .empty-state {
    text-align: center;
    padding: var(--space-16) 0;
  }
  
  .empty-icon {
    margin: 0 auto var(--space-6);
    color: var(--text-muted);
    opacity: 0.5;
  }
  
  .empty-state h3 {
    margin-bottom: var(--space-3);
    color: var(--text-primary);
  }
  
  .empty-state p {
    margin-bottom: var(--space-6);
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Project Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(8px);
    z-index: var(--z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4);
  }
  
  .project-modal {
    background: var(--surface);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-xl);
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: var(--shadow-glow-lg);
  }
  
  .modal-close {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    width: 44px;
    height: 44px;
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all var(--transition-base);
  }
  
  .modal-close:hover {
    background: var(--surface-hover);
    border-color: var(--border-glow);
    transform: scale(1.05);
  }
  
  .modal-header {
    position: relative;
    height: 300px;
    overflow: hidden;
  }
  
  .modal-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .modal-overlay-content {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
    display: flex;
    align-items: flex-end;
    padding: var(--space-6);
  }
  
  .modal-badges {
    display: flex;
    gap: var(--space-2);
  }
  
  .modal-badge {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .modal-badge.featured {
    background: var(--gradient-accent);
    color: var(--bg-primary);
  }
  
  .modal-badge.category {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    color: var(--neon-cyan);
  }
  
  .modal-content {
    padding: var(--space-8);
  }
  
  .modal-title-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-6);
    margin-bottom: var(--space-8);
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--border);
  }
  
  .modal-title {
    font-size: var(--text-3xl);
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-primary);
  }
  
  .modal-actions {
    display: flex;
    gap: var(--space-3);
    flex-shrink: 0;
  }
  
  .modal-link {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-6);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    color: var(--text-primary);
    font-size: var(--text-sm);
    font-weight: 500;
    text-decoration: none;
    transition: all var(--transition-base);
  }
  
  .modal-link:hover {
    background: var(--surface-hover);
    border-color: var(--border-glow);
    transform: translateY(-2px);
  }
  
  .modal-link.primary {
    background: var(--gradient-primary);
    border-color: var(--neon-cyan);
    color: var(--bg-primary);
  }
  
  .modal-link.primary:hover {
    background: var(--gradient-secondary);
    box-shadow: var(--shadow-glow);
  }
  
  .modal-section {
    margin-bottom: var(--space-8);
  }
  
  .modal-section:last-child {
    margin-bottom: 0;
  }
  
  .section-title {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-4);
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  
  .section-title::before {
    content: '';
    width: 4px;
    height: 20px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
  }
  
  .section-content {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: var(--text-base);
  }
  
  .features-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  .feature-item svg {
    color: var(--neon-cyan);
    flex-shrink: 0;
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }
  
  .tech-badge {
    padding: var(--space-2) var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    color: var(--neon-cyan);
    border-radius: var(--radius-lg);
    font-size: var(--text-sm);
    font-weight: 500;
    transition: all var(--transition-base);
  }
  
  .tech-badge:hover {
    background: var(--neon-cyan);
    color: var(--bg-primary);
    transform: translateY(-2px);
  }
  
  /* Responsive */
  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--space-5);
    }
    
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-3);
    }
    
    .dashboard-header {
      justify-content: center;
      text-align: center;
    }
  }
  
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }
    
    .filter-row {
      flex-direction: column;
      align-items: stretch;
    }
    
    .search-container {
      min-width: 100%;
    }
    
    .select-group {
      min-width: 100%;
    }
    
    .modal-title-section {
      flex-direction: column;
      align-items: stretch;
    }
    
    .modal-actions {
      flex-direction: column;
    }
    
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .hero-title {
      font-size: clamp(2rem, 8vw, 3rem);
    }
    
    .project-dashboard {
      padding: var(--space-4);
    }
    
    .stats-grid {
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
    
    .modal-content {
      padding: var(--space-4);
    }
    
    .modal-title {
      font-size: var(--text-2xl);
    }
    
    .tech-stack {
      gap: var(--space-2);
    }
    
    .tech-badge {
      padding: var(--space-1) var(--space-3);
      font-size: var(--text-xs);
    }
  }
</style>
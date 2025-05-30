<!-- src/routes/projects/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
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
  /**
	 * @type {{ image: any; title: any; featured: any; category: any; github: any; demo: any; details: { overview: any; features: any; techStack: any; challenges: any; results: any; }; } | null}
	 */
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
</script>

<svelte:head>
  <title>Projects - Eduardo Camay III</title>
  <meta name="description" content="Explore my cybersecurity and web development projects, including penetration testing tools, security dashboards, and more.">
</svelte:head>

<!-- Header Section -->
<Section background="secondary">
  <div class="page-header">
    <h1 class="heading-1">Projects</h1>
    <p class="text-lead">
      A collection of my work in cybersecurity and web development, 
      showcasing practical applications of security principles and modern technologies.
    </p>
  </div>
</Section>

<!-- Filters Section -->
<Section size="sm" background="primary">
  <div class="filters">
    <!-- Search -->
    <div class="filter-group">
      <label for="search" class="filter-label">Search</label>
      <div class="search-wrapper">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          id="search"
          type="text"
          bind:value={searchQuery}
          placeholder="Search projects..."
          class="input search-input"
        />
      </div>
    </div>
    
    <!-- Category Filter -->
    <div class="filter-group">
      <label for="category" class="filter-label">Category</label>
      <select id="category" bind:value={selectedCategory} class="input">
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>
    
    <!-- Technology Filter -->
    <div class="filter-group">
      <label for="technology" class="filter-label">Technology</label>
      <select id="technology" bind:value={selectedTech} class="input">
        {#each technologies as tech}
          <option value={tech}>{tech}</option>
        {/each}
      </select>
    </div>
    
    <!-- Featured Toggle -->
    <div class="filter-group">
      <label class="checkbox-label">
        <input
          type="checkbox"
          bind:checked={showOnlyFeatured}
          class="checkbox"
        />
        <span>Featured only</span>
      </label>
    </div>
    
    <!-- Clear Filters -->
    {#if selectedCategory !== 'All' || selectedTech !== 'All' || searchQuery || showOnlyFeatured}
      <Button variant="ghost" size="sm" on:click={clearFilters}>
        Clear Filters
      </Button>
    {/if}
  </div>
  
  <div class="filter-results">
    Showing {filteredProjects.length} of {projects.length} projects
  </div>
</Section>

<!-- Projects Grid -->
<Section background="primary">
  {#if filteredProjects.length > 0}
    <div class="projects-grid">
      {#each filteredProjects as project (project.id)}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div on:click={() => selectProject(project)} on:keydown={(e) => e.key === 'Enter' && selectProject(project)}>
          <ProjectCard {project} detailed />
        </div>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
      <h3 class="heading-3">No projects found</h3>
      <p class="text-muted">Try adjusting your filters or search query</p>
      <Button variant="secondary" on:click={clearFilters}>Clear Filters</Button>
    </div>
  {/if}
</Section>

<!-- Project Modal -->
{#if selectedProject}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-overlay" on:click={closeModal}>
    <div class="modal" on:click|stopPropagation>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button class="modal-close" on:click={closeModal}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      
      <div class="modal-header">
        <img src={selectedProject.image} alt={selectedProject.title} class="modal-image" />
      </div>
      
      <div class="modal-content">
        <div class="modal-title-row">
          <h2 class="heading-2">{selectedProject.title}</h2>
          {#if selectedProject.featured}
            <span class="featured-badge">Featured</span>
          {/if}
        </div>
        
        <div class="modal-meta">
          <span class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            {selectedProject.category}
          </span>
          <div class="modal-links">
            {#if selectedProject.github}
              <a href={selectedProject.github} target="_blank" rel="noopener" class="link-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                View Code
              </a>
            {/if}
            {#if selectedProject.demo}
              <a href={selectedProject.demo} target="_blank" rel="noopener" class="link-button">
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
          <h3 class="heading-3">Overview</h3>
          <p class="text-secondary">{selectedProject.details.overview}</p>
        </div>
        
        <div class="modal-section">
          <h3 class="heading-3">Key Features</h3>
          <ul class="feature-list">
            {#each selectedProject.details.features as feature}
              <li>{feature}</li>
            {/each}
          </ul>
        </div>
        
        <div class="modal-section">
          <h3 class="heading-3">Technology Stack</h3>
          <div class="tech-grid">
            {#each selectedProject.details.techStack as tech}
              <div class="tech-item">{tech}</div>
            {/each}
          </div>
        </div>
        
        <div class="modal-section">
          <h3 class="heading-3">Challenges & Solutions</h3>
          <p class="text-secondary">{selectedProject.details.challenges}</p>
        </div>
        
        <div class="modal-section">
          <h3 class="heading-3">Results & Impact</h3>
          <p class="text-secondary">{selectedProject.details.results}</p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Page Header */
  .page-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Filters */
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    align-items: flex-end;
  }
  
  .filter-group {
    flex: 1;
    min-width: 200px;
  }
  
  .filter-label {
    display: block;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: var(--space-2);
  }
  
  .search-wrapper {
    position: relative;
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
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    cursor: pointer;
    user-select: none;
  }
  
  .checkbox {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  
  .filter-results {
    margin-top: var(--space-4);
    font-size: var(--text-sm);
    color: var(--text-muted);
  }
  
  /* Projects Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: var(--space-6);
  }
  
  /* Empty State */
  .empty-state {
    text-align: center;
    padding: var(--space-16) 0;
    color: var(--text-muted);
  }
  
  .empty-state svg {
    margin: 0 auto var(--space-4);
    opacity: 0.5;
  }
  
  .empty-state h3 {
    margin-bottom: var(--space-2);
  }
  
  .empty-state p {
    margin-bottom: var(--space-6);
  }
  
  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    z-index: var(--z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4);
    overflow-y: auto;
  }
  
  .modal {
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }
  
  .modal-close {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    background-color: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all var(--transition-base);
  }
  
  .modal-close:hover {
    background-color: var(--surface-hover);
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
  
  .modal-content {
    padding: var(--space-8);
  }
  
  .modal-title-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
  }
  
  .featured-badge {
    flex-shrink: 0;
    padding: var(--space-2) var(--space-4);
    background: linear-gradient(135deg, var(--primary-600), var(--accent-600));
    color: white;
    font-size: var(--text-sm);
    font-weight: 500;
    border-radius: var(--radius-full);
  }
  
  .modal-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-4);
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--border);
    margin-bottom: var(--space-6);
  }
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-muted);
    font-size: var(--text-sm);
  }
  
  .modal-links {
    display: flex;
    gap: var(--space-3);
  }
  
  .link-button {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background-color: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-size: var(--text-sm);
    font-weight: 500;
    transition: all var(--transition-base);
  }
  
  .link-button:hover {
    background-color: var(--primary-600);
    border-color: var(--primary-600);
    color: white;
  }
  
  .modal-section {
    margin-bottom: var(--space-8);
  }
  
  .modal-section:last-child {
    margin-bottom: 0;
  }
  
  .modal-section h3 {
    margin-bottom: var(--space-4);
  }
  
  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .feature-list li {
    position: relative;
    padding-left: var(--space-6);
    margin-bottom: var(--space-2);
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  .feature-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-500);
    font-weight: 700;
  }
  
  .tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }
  
  .tech-item {
    padding: var(--space-2) var(--space-4);
    background-color: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .filters {
      flex-direction: column;
      align-items: stretch;
    }
    
    .filter-group {
      min-width: 100%;
    }
    
    .modal-header {
      height: 200px;
    }
    
    .modal-content {
      padding: var(--space-6);
    }
    
    .modal-meta {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
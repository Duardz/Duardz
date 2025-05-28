<!-- lib/components/common/ProjectCard.svelte -->
<script>
  import Card from '$lib/components/ui/Card.svelte';
  
  export let project;
  export let detailed = false;
</script>

<Card hover clickable animate>
  <a href="/projects#{project.id}" class="project-link">
    <div class="project-image">
      <img src={project.image} alt={project.title} loading="lazy" />
      <div class="project-overlay">
        <span class="view-text">View Project</span>
      </div>
    </div>
    
    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">{project.title}</h3>
        {#if project.featured}
          <span class="featured-badge">Featured</span>
        {/if}
      </div>
      
      <p class="project-description">{project.description}</p>
      
      <div class="project-tech">
        {#each project.technologies.slice(0, 3) as tech}
          <span class="tech-tag">{tech}</span>
        {/each}
        {#if project.technologies.length > 3}
          <span class="tech-tag">+{project.technologies.length - 3}</span>
        {/if}
      </div>
      
      {#if detailed}
        <div class="project-links">
          {#if project.github}
            <!-- svelte-ignore node_invalid_placement_ssr -->
            <a href={project.github} class="project-link-item" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              Code
            </a>
          {/if}
          {#if project.demo}
            <!-- svelte-ignore node_invalid_placement_ssr -->
            <a href={project.demo} class="project-link-item" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Demo
            </a>
          {/if}
        </div>
      {/if}
    </div>
  </a>
</Card>

<style>
  .project-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  
  .project-image {
    position: relative;
    width: 100%;
    height: 200px;
    margin: -1.5rem -1.5rem 1.5rem;
    overflow: hidden;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }
  
  .project-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--transition-base);
  }
  
  .view-text {
    color: white;
    font-weight: 500;
    transform: translateY(10px);
    transition: transform var(--transition-base);
  }
  
  :global(.card:hover) .project-image img {
    transform: scale(1.05);
  }
  
  :global(.card:hover) .project-overlay {
    opacity: 1;
  }
  
  :global(.card:hover) .view-text {
    transform: translateY(0);
  }
  
  .project-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
  
  .project-header {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: var(--space-3);
  }
  
  .project-title {
    font-size: var(--text-xl);
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-primary);
  }
  
  .featured-badge {
    flex-shrink: 0;
    padding: var(--space-1) var(--space-3);
    background: linear-gradient(135deg, var(--primary-600), var(--accent-600));
    color: white;
    font-size: var(--text-xs);
    font-weight: 500;
    border-radius: var(--radius-full);
  }
  
  .project-description {
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-top: auto;
  }
  
  .tech-tag {
    padding: var(--space-1) var(--space-3);
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    color: var(--primary-400);
    font-weight: 500;
  }
  
  .project-links {
    display: flex;
    gap: var(--space-3);
    padding-top: var(--space-3);
    border-top: 1px solid var(--border);
  }
  
  .project-link-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-secondary);
    font-size: var(--text-sm);
    transition: color var(--transition-base);
  }
  
  .project-link-item:hover {
    color: var(--primary-400);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .project-image {
      height: 150px;
    }
  }
</style>
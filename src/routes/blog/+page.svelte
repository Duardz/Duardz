<!-- src/routes/blog/+page.svelte -->
<script>
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { blogPosts, getCategories, formatDate } from '$lib/data/blog.js';
  import { onMount } from 'svelte';
  
  // Filter state
  let selectedCategory = 'All';
  let searchQuery = '';
  
  // Get categories
  const categories = ['All', ...getCategories()];
  
  // Filter posts
  $: filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Sort posts by date
 // @ts-ignore
   $: sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  function clearFilters() {
    selectedCategory = 'All';
    searchQuery = '';
  }

  // Cyber elements animation
  let heroSection;
  
  onMount(() => {
    // Add some interactive animations here if needed
  });
</script>

<svelte:head>
  <title>Cyber Insights - DUARDZ</title>
  <meta name="description" content="Explore cybersecurity insights, threat analysis, penetration testing techniques, and security best practices from a cybersecurity enthusiast.">
</svelte:head>

<!-- Hero Section -->
<Section size="lg" background="primary">
  <div class="blog-hero" bind:this={heroSection}>
    <!-- Animated Background -->
    <div class="hero-background">
      <div class="cyber-grid"></div>
      <div class="security-elements">
        <div class="security-icon icon-1">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="security-icon icon-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <div class="security-icon icon-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="hero-content">
      <div class="hero-badge">
        <div class="badge-glow"></div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <span>Cyber Intelligence</span>
      </div>
      
      <h1 class="hero-title">
        <span class="title-line">SECURITY</span>
        <span class="title-highlight">INSIGHTS</span>
      </h1>
      
      <p class="hero-description">
        Dive deep into the world of cybersecurity with practical insights, threat analysis, 
        penetration testing techniques, and security best practices. From vulnerability 
        assessments to secure coding practices.
      </p>
      
      <!-- Security Dashboard Widget -->
      <div class="security-dashboard">
        <div class="dashboard-header">
          <div class="status-indicator">
            <div class="status-dot active"></div>
            <span>THREAT MONITORING ACTIVE</span>
          </div>
          <div class="timestamp">
            {new Date().toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </div>
        </div>
        <div class="dashboard-stats">
          <div class="stat-item">
            <div class="stat-value">{blogPosts.length}</div>
            <div class="stat-label">Articles</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{categories.length - 1}</div>
            <div class="stat-label">Topics</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">∞</div>
            <div class="stat-label">Learning</div>
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
      <h2 class="heading-3">Filter Articles</h2>
      <p class="text-secondary">Find exactly what you're looking for</p>
    </div>
    
    <div class="filters-container">
      <!-- Search -->
      <div class="filter-group">
        <div class="search-wrapper">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search threat analysis, pentesting, security..."
            class="input search-input"
          />
        </div>
      </div>
      
      <!-- Category Pills -->
      <div class="category-section">
        <span class="filter-label">Categories:</span>
        <div class="category-pills">
          {#each categories as category}
            <button
              class="category-pill"
              class:active={selectedCategory === category}
              on:click={() => selectedCategory = category}
            >
              {category}
            </button>
          {/each}
        </div>
      </div>
      
      {#if selectedCategory !== 'All' || searchQuery}
        <Button variant="ghost" size="sm" on:click={clearFilters}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c0-1 1-2 2-2v2"/>
          </svg>
          Clear Filters
        </Button>
      {/if}
    </div>
    
    <div class="filter-results">
      <span class="results-text">
        Showing {filteredPosts.length} of {blogPosts.length} articles
      </span>
      {#if filteredPosts.length > 0}
        <div class="results-bar">
          <div class="results-progress" style="width: {(filteredPosts.length / blogPosts.length) * 100}%"></div>
        </div>
      {/if}
    </div>
  </div>
</Section>

<!-- Blog Posts Grid -->
<Section background="primary">
  <div class="blog-content">
    {#if sortedPosts.length > 0}
      <div class="blog-grid">
        {#each sortedPosts as post, i}
          <a href="/blog/{post.slug}" class="blog-link">
            <Card hover animate>
              <article class="blog-card">
                {#if post.featured}
                  <div class="featured-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    Featured
                  </div>
                {/if}
                
                <div class="blog-image">
                  <img src={post.coverImage} alt={post.title} loading="lazy" />
                  <div class="image-overlay">
                    <div class="category-badge">{post.category}</div>
                  </div>
                </div>
                
                <div class="blog-content-area">
                  <div class="blog-meta">
                    <time datetime={post.date} class="blog-date">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {formatDate(post.date)}
                    </time>
                    <span class="reading-time">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                      {post.readingTime} min read
                    </span>
                  </div>
                  
                  <h2 class="blog-title">{post.title}</h2>
                  <p class="blog-excerpt">{post.excerpt}</p>
                  
                  <div class="blog-tags">
                    {#each post.tags.slice(0, 3) as tag}
                      <span class="tag">{tag}</span>
                    {/each}
                    {#if post.tags.length > 3}
                      <span class="tag more">+{post.tags.length - 3}</span>
                    {/if}
                  </div>
                  
                  <div class="blog-footer">
                    <div class="author">
                      <img src={post.author.image} alt={post.author.name} class="author-image" />
                      <span class="author-name">{post.author.name}</span>
                    </div>
                    <div class="read-more">
                      <span>Read Analysis</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Card>
          </a>
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
        <h3 class="heading-3">No Security Insights Found</h3>
        <p class="text-secondary">
          Try adjusting your search terms or explore different categories.
        </p>
        <Button variant="secondary" on:click={clearFilters}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c0-1 1-2 2-2v2"/>
          </svg>
          Clear All Filters
        </Button>
      </div>
    {/if}
  </div>
</Section>

<style>
  /* Hero Section */
  .blog-hero {
    position: relative;
    min-height: 70vh;
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
  
  .cyber-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.08) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: grid-pulse 15s ease-in-out infinite;
  }
  
  @keyframes grid-pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  
  .security-elements {
    position: absolute;
    inset: 0;
  }
  
  .security-icon {
    position: absolute;
    color: var(--neon-cyan);
    opacity: 0.4;
    animation: float-security 8s ease-in-out infinite;
  }
  
  .icon-1 {
    top: 15%;
    left: 10%;
    animation-delay: 0s;
  }
  
  .icon-2 {
    top: 60%;
    right: 15%;
    animation-delay: 3s;
  }
  
  .icon-3 {
    bottom: 20%;
    left: 20%;
    animation-delay: 6s;
  }
  
  @keyframes float-security {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-15px) rotate(5deg); }
    66% { transform: translateY(-10px) rotate(-5deg); }
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
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
  
  .badge-glow {
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    opacity: 0.1;
    animation: pulse 3s ease-in-out infinite;
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
    background: var(--gradient-secondary);
    border-radius: var(--radius-full);
  }
  
  .hero-description {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-8);
  }
  
  /* Security Dashboard */
  .security-dashboard {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-xl);
    padding: var(--space-4);
    max-width: 500px;
    margin: 0 auto;
    box-shadow: var(--shadow-glow);
  }
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--border);
  }
  
  .status-indicator {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--neon-green);
    font-weight: 500;
  }
  
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--neon-green);
  }
  
  .status-dot.active {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .timestamp {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
  }
  
  .dashboard-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-value {
    font-family: var(--font-mono);
    font-size: var(--text-xl);
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
  
  .filter-group {
    width: 100%;
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
    width: 100%;
  }
  
  .category-section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-3);
  }
  
  .filter-label {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-secondary);
  }
  
  .category-pills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  
  .category-pill {
    padding: var(--space-2) var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    color: var(--text-secondary);
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-base);
  }
  
  .category-pill:hover {
    background: var(--surface-hover);
    border-color: var(--border-glow);
    transform: translateY(-1px);
  }
  
  .category-pill.active {
    background: var(--gradient-primary);
    border-color: var(--neon-cyan);
    color: var(--bg-primary);
    box-shadow: var(--shadow-glow);
  }
  
  .filter-results {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-top: var(--space-4);
  }
  
  .results-text {
    font-size: var(--text-sm);
    color: var(--text-muted);
    font-family: var(--font-mono);
  }
  
  .results-bar {
    flex: 1;
    height: 4px;
    background: var(--border);
    border-radius: var(--radius-full);
    overflow: hidden;
  }
  
  .results-progress {
    height: 100%;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
    transition: width var(--transition-base);
  }
  
  /* Blog Content */
  .blog-content {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: var(--space-6);
  }
  
  .blog-link {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
  }
  
  .blog-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
  
  .featured-badge {
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
  
  .blog-image {
    position: relative;
    width: calc(100% + 3rem);
    margin: -1.5rem -1.5rem 1.5rem;
    height: 220px;
    overflow: hidden;
  }
  
  .blog-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }
  
  :global(.card:hover) .blog-image img {
    transform: scale(1.05);
  }
  
  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.4) 100%);
    display: flex;
    align-items: flex-end;
    padding: var(--space-4);
  }
  
  .category-badge {
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
  
  .blog-content-area {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .blog-meta {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    font-size: var(--text-xs);
    color: var(--text-muted);
    margin-bottom: var(--space-3);
    font-family: var(--font-mono);
  }
  
  .blog-date,
  .reading-time {
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }
  
  .blog-title {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-3);
    line-height: 1.3;
    color: var(--text-primary);
  }
  
  .blog-excerpt {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-4);
    flex: 1;
  }
  
  .blog-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }
  
  .tag {
    padding: var(--space-1) var(--space-2);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    font-size: var(--text-xs);
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  .tag.more {
    color: var(--neon-cyan);
    border-color: var(--border-glow);
  }
  
  .blog-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-4);
    border-top: 1px solid var(--border);
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  
  .author-image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border);
  }
  
  .author-name {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-secondary);
  }
  
  .read-more {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    color: var(--neon-cyan);
    font-size: var(--text-sm);
    font-weight: 500;
    transition: gap var(--transition-base);
  }
  
  :global(.card:hover) .read-more {
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
  
  /* Responsive */
  @media (max-width: 1024px) {
    .blog-grid {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--space-5);
    }
  }
  
  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }
    
    .category-section {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .dashboard-stats {
      gap: var(--space-3);
    }
    
    .blog-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-3);
    }
  }
  
  @media (max-width: 480px) {
    .hero-title {
      font-size: clamp(2rem, 8vw, 3rem);
    }
    
    .security-dashboard {
      padding: var(--space-3);
    }
    
    .dashboard-header {
      flex-direction: column;
      gap: var(--space-2);
      text-align: center;
    }
    
    .filters-container {
      gap: var(--space-3);
    }
  }
</style>
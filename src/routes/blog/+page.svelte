<!-- src/routes/blog/+page.svelte -->
<script>
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { blogPosts, getCategories, formatDate } from '$lib/data/blog.js';
  
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
</script>

<svelte:head>
  <title>Blog - Eduardo Camay III</title>
  <meta name="description" content="Insights on cybersecurity, threat intelligence, and security best practices from an aspiring security professional.">
</svelte:head>

<!-- Hero Section -->
<Section background="secondary">
  <div class="blog-hero">
    <h1 class="heading-1">Security Insights</h1>
    <p class="hero-text">
      Exploring cybersecurity trends, threat analysis, and best practices
      for building secure digital infrastructure.
    </p>
  </div>
</Section>

<!-- Filters Section -->
<Section size="sm" background="primary">
  <div class="filters">
    <!-- Search -->
    <div class="search-wrapper">
      <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search articles..."
        class="input search-input"
      />
    </div>
    
    <!-- Category Pills -->
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
    
    {#if selectedCategory !== 'All' || searchQuery}
      <Button variant="ghost" size="sm" on:click={clearFilters}>
        Clear Filters
      </Button>
    {/if}
  </div>
  
  <div class="filter-results">
    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
  </div>
</Section>

<!-- Blog Posts Grid -->
<Section background="primary">
  {#if sortedPosts.length > 0}
    <div class="blog-grid">
      {#each sortedPosts as post, i}
        <a href="/blog/{post.slug}" class="blog-link">
          <Card hover animate>
            <article class="blog-card">
              {#if post.featured}
                <span class="featured-badge">Featured</span>
              {/if}
              
              <div class="blog-image">
                <img src={post.coverImage} alt={post.title} loading="lazy" />
                <div class="blog-category">{post.category}</div>
              </div>
              
              <div class="blog-content">
                <div class="blog-meta">
                  <time datetime={post.date}>{formatDate(post.date)}</time>
                  <span class="reading-time">{post.readingTime} min read</span>
                </div>
                
                <h2 class="blog-title">{post.title}</h2>
                <p class="blog-excerpt">{post.excerpt}</p>
                
                <div class="blog-tags">
                  {#each post.tags.slice(0, 3) as tag}
                    <span class="tag">{tag}</span>
                  {/each}
                  {#if post.tags.length > 3}
                    <span class="tag">+{post.tags.length - 3}</span>
                  {/if}
                </div>
                
                <div class="blog-footer">
                  <div class="author">
                    <img src={post.author.image} alt={post.author.name} class="author-image" />
                    <span class="author-name">{post.author.name}</span>
                  </div>
                  <span class="read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Card>
        </a>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      <h3 class="heading-3">No articles found</h3>
      <p class="text-muted">Try adjusting your search or filters</p>
      <Button variant="secondary" on:click={clearFilters}>Clear Filters</Button>
    </div>
  {/if}
</Section>

<!-- Newsletter CTA -->
<Section background="secondary">
  <div class="newsletter">
    <div class="newsletter-content">
      <h2 class="heading-2">Stay Updated</h2>
      <p class="newsletter-text">
        Get the latest cybersecurity insights and articles delivered to your inbox.
        Join the community of security professionals and enthusiasts.
      </p>
      <div class="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          class="input newsletter-input"
        />
        <Button variant="primary">Subscribe</Button>
      </div>
      <p class="newsletter-note">No spam, unsubscribe anytime.</p>
    </div>
  </div>
</Section>

<style>
  /* Hero */
  .blog-hero {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
  
  .hero-text {
    font-size: var(--text-xl);
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  /* Filters */
  .filters {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .search-wrapper {
    position: relative;
    max-width: 400px;
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
  
  .category-pills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  
  .category-pill {
    padding: var(--space-2) var(--space-4);
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    color: var(--text-secondary);
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-base);
  }
  
  .category-pill:hover {
    background-color: var(--surface-hover);
    border-color: var(--primary-600);
  }
  
  .category-pill.active {
    background-color: var(--primary-600);
    border-color: var(--primary-600);
    color: white;
  }
  
  .filter-results {
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-top: var(--space-2);
  }
  
  /* Blog Grid */
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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
  }
  
  .featured-badge {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    padding: var(--space-1) var(--space-3);
    background-color: var(--accent-600);
    color: white;
    font-size: var(--text-xs);
    font-weight: 600;
    border-radius: var(--radius-full);
    z-index: 2;
  }
  
  .blog-image {
    position: relative;
    width: calc(100% + 3rem);
    margin: -1.5rem -1.5rem 1.5rem;
    height: 200px;
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
  
  .blog-category {
    position: absolute;
    bottom: var(--space-4);
    left: var(--space-4);
    padding: var(--space-1) var(--space-3);
    background-color: var(--primary-600);
    color: white;
    font-size: var(--text-xs);
    font-weight: 500;
    border-radius: var(--radius-md);
  }
  
  .blog-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .blog-meta {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-bottom: var(--space-3);
  }
  
  .reading-time::before {
    content: '•';
    margin-right: var(--space-3);
  }
  
  .blog-title {
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-3);
    line-height: 1.3;
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
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    font-size: var(--text-xs);
    color: var(--text-secondary);
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
  }
  
  .author-name {
    font-size: var(--text-sm);
    font-weight: 500;
  }
  
  .read-more {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    color: var(--primary-400);
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
  
  /* Newsletter */
  .newsletter {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  .newsletter-content {
    padding: var(--space-8);
    background-color: var(--surface);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);
  }
  
  .newsletter-text {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    margin-bottom: var(--space-6);
    line-height: 1.6;
  }
  
  .newsletter-form {
    display: flex;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }
  
  .newsletter-input {
    flex: 1;
  }
  
  .newsletter-note {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: 1fr;
    }
    
    .blog-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-3);
    }
    
    .newsletter-form {
      flex-direction: column;
    }
    
    .newsletter-form :global(.btn) {
      width: 100%;
    }
  }
</style>
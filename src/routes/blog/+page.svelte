<!-- Blog Page: src/routes/blog/+page.svelte -->
<script>
  // @ts-nocheck

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Zero Trust Architecture: Implementation Guide",
      date: "April 15, 2025",
      category: "Network Security",
      excerpt: "A comprehensive guide to implementing Zero Trust Architecture in enterprise environments. Learn about the key principles and practical steps to enhance your security posture.",
      content: `
        <p>Zero Trust Architecture (ZTA) represents a paradigm shift in how organizations approach security. The traditional perimeter-based security model operates on the principle of "trust but verify," where entities inside the network are inherently trusted. In contrast, ZTA follows the principle of "never trust, always verify," requiring continuous validation regardless of where the request originates.</p>
        
        <h3>Core Principles of Zero Trust</h3>
        <p>The Zero Trust model is built on several foundational principles:</p>
        <ul>
          <li><strong>Verify explicitly:</strong> Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.</li>
          <li><strong>Use least privileged access:</strong> Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection to help secure both data and productivity.</li>
          <li><strong>Assume breach:</strong> Minimize blast radius for breaches and prevent lateral movement by segmenting access by network, user, devices, and application awareness. Verify all sessions are encrypted end to end. Use analytics to get visibility, drive threat detection, and improve defenses.</li>
        </ul>
        
        <h3>Implementation Strategies</h3>
        <p>Implementing Zero Trust requires a systematic approach:</p>
        <ol>
          <li><strong>Identify your protect surface:</strong> This includes critical data, applications, assets, and services (DAAS).</li>
          <li><strong>Map transaction flows:</strong> Understand how traffic moves across your network to determine how it should be protected.</li>
          <li><strong>Design a Zero Trust architecture:</strong> Starting with a next-generation firewall as a micro-perimeter around your protect surface.</li>
          <li><strong>Create Zero Trust policies:</strong> Determine who should and should not have access to resources within your protect surface.</li>
          <li><strong>Monitor and maintain:</strong> Continuously review logs and security analytics to improve your security posture.</li>
        </ol>
        
        <h3>Technologies Enabling Zero Trust</h3>
        <p>Several technologies are essential for implementing a robust Zero Trust model:</p>
        <ul>
          <li><strong>Strong Identity Authentication:</strong> Multi-factor authentication (MFA) and Identity and Access Management (IAM) solutions.</li>
          <li><strong>Devices:</strong> Device health and compliance checking.</li>
          <li><strong>Networks:</strong> Micro-segmentation and Software-Defined Perimeters (SDP).</li>
          <li><strong>Workloads:</strong> Containerization, microservices, and API security.</li>
          <li><strong>Data:</strong> Classification, encryption, and rights management.</li>
          <li><strong>Visibility and Analytics:</strong> Security Information and Event Management (SIEM) and User and Entity Behavior Analytics (UEBA).</li>
          <li><strong>Automation and Orchestration:</strong> Security Orchestration, Automation, and Response (SOAR) solutions.</li>
        </ul>
        
        <h3>Challenges and Considerations</h3>
        <p>While implementing Zero Trust, organizations often face several challenges:</p>
        <ul>
          <li><strong>Legacy Systems:</strong> Older systems may not support modern authentication methods or security controls.</li>
          <li><strong>User Experience:</strong> Balancing security with productivity and user convenience.</li>
          <li><strong>Organizational Culture:</strong> Shifting from a perimeter-focused security mindset to a data and identity-centric approach.</li>
          <li><strong>Technical Complexity:</strong> Integrating various security technologies into a cohesive framework.</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Zero Trust Architecture is not a single product or solution but a strategic approach to security that requires continuous improvement. By embracing the "never trust, always verify" principle and implementing appropriate controls around your critical assets, your organization can significantly enhance its security posture and reduce the risk of breaches in today's complex threat landscape.</p>
      `,
      author: "John Doe",
      authorImage: "/images/profile.jpg",
      coverImage: "/images/blog1.jpg",
      readingTime: "8 min read",
    },
    // ... other blog posts would be here ...
  ];
  
  // Current blog post for detailed view
  let currentPost = null;
  
  // Filter by category
  let categories = [...new Set(blogPosts.map(post => post.category))];
  let selectedCategory = "All";
  
  $: filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
    
  function filterByCategory(category) {
    selectedCategory = category;
  }
  
  function viewPost(post) {
    currentPost = post;
    window.scrollTo(0, 0);
  }
  
  function goBack() {
    currentPost = null;
  }

  // Calculate estimated reading time (if not already set)
  function getReadingTime(content) {
    const text = content.replace(/<[^>]*>?/gm, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Assuming 200 words per minute reading speed
    return `${minutes} min read`;
  }
</script>

<svelte:head>
  <title>{currentPost ? currentPost.title : 'Blog'} | CyberPortfolio</title>
</svelte:head>

{#if !currentPost}
  <!-- Blog post list view -->
  <div class="blog-header">
    <div class="container">
      <h1>Cybersecurity Insights</h1>
      <p>Expert analysis and guides on the latest cybersecurity trends, threats, and best practices</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <!-- Category filter -->
      <div class="category-filter">
        <button 
          class={selectedCategory === 'All' ? 'filter-btn active' : 'filter-btn'}
          on:click={() => filterByCategory('All')}
        >
          All
        </button>
        
        {#each categories as category}
          <button 
            class={selectedCategory === category ? 'filter-btn active' : 'filter-btn'}
            on:click={() => filterByCategory(category)}
          >
            {category}
          </button>
        {/each}
      </div>
      
      <!-- Blog posts grid -->
      <div class="blog-grid">
        {#each filteredPosts as post}
          <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <div class="blog-card" on:click={() => viewPost(post)} on:keydown={(e) => e.key === 'Enter' && viewPost(post)} tabindex="0" role="article">
            <div class="card-image">
              <img src={post.coverImage} alt={post.title} />
              <span class="blog-category-tag">{post.category}</span>
            </div>
            <div class="card-content">
              <div class="card-meta">
                <span class="post-date">{post.date}</span>
                <span class="reading-time">{post.readingTime || getReadingTime(post.content)}</span>
              </div>
              <h2 class="card-title">{post.title}</h2>
              <p class="card-excerpt">{post.excerpt}</p>
              <div class="author-row">
                <img src={post.authorImage} alt={post.author} class="author-avatar" />
                <span class="author-name">{post.author}</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      {#if filteredPosts.length === 0}
        <div class="empty-state">
          <h3>No posts in this category yet</h3>
          <button class="btn primary" on:click={() => filterByCategory('All')}>View All Posts</button>
        </div>
      {/if}
    </div>
  </section>
{:else}
  <!-- Single blog post view -->
  <section class="section">
    <div class="container">
      <div class="post-navigation">
        <button class="back-button" on:click={goBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Articles
        </button>
        <span class="post-category">{currentPost.category}</span>
      </div>
      
      <article class="blog-post">
        <h1 class="post-title">{currentPost.title}</h1>
        
        <div class="post-meta">
          <div class="author-info">
            <img src={currentPost.authorImage} alt={currentPost.author} class="author-avatar" />
            <div>
              <span class="author-name">{currentPost.author}</span>
              <span class="post-date">{currentPost.date}</span>
            </div>
          </div>
          <span class="reading-time">{currentPost.readingTime || getReadingTime(currentPost.content)}</span>
        </div>
        
        <div class="featured-image">
          <img src={currentPost.coverImage} alt={currentPost.title} />
        </div>
        
        <div class="post-content">
          {@html currentPost.content}
        </div>
        
        <div class="post-footer">
          <button class="btn primary" on:click={goBack}>Back to Articles</button>
          
          <div class="share-buttons">
            <span>Share:</span>
            <button class="share-btn" aria-label="Share on Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </button>
            <button class="share-btn" aria-label="Share on LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="related-posts">
          <h3>You might also like</h3>
          <div class="related-grid">
            {#each blogPosts.filter(post => post.id !== currentPost.id).slice(0, 2) as relatedPost}
              <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
              <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
              <div class="related-card" on:click={() => viewPost(relatedPost)} on:keydown={(e) => e.key === 'Enter' && viewPost(relatedPost)} tabindex="0" role="article">
                <img src={relatedPost.coverImage} alt={relatedPost.title} />
                <h4>{relatedPost.title}</h4>
                <span class="related-category">{relatedPost.category}</span>
              </div>
            {/each}
          </div>
        </div>
      </article>
    </div>
  </section>
{/if}

<style>
  /* Reset and Base Styles */
  h1, h2, h3, h4, p {
    margin: 0;
  }
  
  /* Blog Header */
  .blog-header {
    background-color: var(--dark-elevated);
    padding: 3rem 0;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .blog-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .blog-header p {
    max-width: 700px;
    margin: 0 auto;
    color: var(--text-secondary);
    font-size: 1.1rem;
  }
  
  /* Category Filter */
  .category-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }
  
  .filter-btn {
    background: none;
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 0.5rem 1.25rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .filter-btn:hover {
    background-color: var(--dark-surface);
  }
  
  .filter-btn.active {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
  }
  
  /* Blog Grid */
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }
  
  /* Blog Card */
  .blog-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 8px;
    background-color: var(--dark-surface);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    height: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .blog-card:focus {
    outline: 2px solid var(--primary);
  }
  
  .card-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .blog-card:hover .card-image img {
    transform: scale(1.05);
  }
  
  .blog-category-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--primary);
    color: white;
    font-size: 0.75rem;
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    font-weight: 500;
  }
  
  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .card-meta {
    display: flex;
    justify-content: space-between;
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
  
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }
  
  .card-excerpt {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    flex-grow: 1;
  }
  
  .author-row {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
  
  .author-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 0.75rem;
    object-fit: cover;
  }
  
  .author-name {
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  /* Empty State */
  .empty-state {
    text-align: center;
    padding: 4rem 0;
  }
  
  .empty-state h3 {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
  }
  
  /* Single Post View */
  .post-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  
  .back-button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: color 0.2s ease;
  }
  
  .back-button svg {
    margin-right: 0.5rem;
  }
  
  .back-button:hover {
    color: var(--primary);
  }
  
  .post-category {
    background-color: var(--primary);
    color: white;
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
    border-radius: 20px;
  }
  
  .blog-post {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .post-title {
    font-size: 2.5rem;
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }
  
  .post-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .author-info {
    display: flex;
    align-items: center;
  }
  
  .author-info div {
    display: flex;
    flex-direction: column;
  }
  
  .author-info .author-name {
    font-weight: 500;
  }
  
  .author-info .post-date {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }
  
  .reading-time {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
  
  .featured-image {
    margin-bottom: 2.5rem;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .featured-image img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
  
  .post-content {
    line-height: 1.8;
    font-size: 1.05rem;
  }
  
  /* Using :global() to target elements inserted via {@html ...} */
  .post-content :global(h3) {
    margin: 2rem 0 1rem;
    font-size: 1.5rem;
  }
  
  .post-content :global(p) {
    margin-bottom: 1.5rem;
  }
  
  .post-content :global(ul), .post-content :global(ol) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  .post-content :global(li) {
    margin-bottom: 0.5rem;
  }
  
  .post-content :global(strong) {
    color: var(--primary);
    font-weight: 600;
  }
  
  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
  }
  
  .share-buttons {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .share-buttons span {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
  
  .share-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--dark-elevated);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .share-btn:hover {
    background-color: var(--primary);
    color: white;
  }
  
  /* Related Posts */
  .related-posts {
    margin-top: 4rem;
  }
  
  .related-posts h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  
  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
  
  .related-card {
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--dark-surface);
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .related-card:hover {
    transform: translateY(-5px);
  }
  
  .related-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .related-card h4 {
    padding: 1rem 1rem 0.5rem;
    font-size: 1.1rem;
    line-height: 1.4;
  }
  
  .related-category {
    display: block;
    padding: 0 1rem 1rem;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }
  
  /* Buttons */
  .btn {
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
  }
  
  .btn.primary {
    background-color: var(--primary);
    color: white;
  }
  
  .btn.primary:hover {
    background-color: var(--primary-dark, #0056b3);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: 1fr;
    }
    
    .post-title {
      font-size: 2rem;
    }
    
    .post-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .post-footer {
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .related-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
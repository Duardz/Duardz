<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
// @ts-nocheck

  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import { getPostBySlug, getRelatedPosts, formatDate } from '$lib/data/blog.js';
  import { marked } from 'marked';
  
  // Get the current post
  $: post = getPostBySlug($page.params.slug);
  $: relatedPosts = post ? getRelatedPosts(post, 3) : [];
  
  // Convert markdown to HTML
  $: htmlContent = post ? marked(post.content) : '';
  
  // Progress bar
  let scrollProgress = 0;
  
  onMount(() => {
    const updateProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      scrollProgress = (winScroll / height) * 100;
    };
    
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  });
  
  // Share functions
  function shareOnTwitter() {
    const url = window.location.href;
    // @ts-ignore
    const text = `${post.title} by ${post.author.name}`;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
  }
  
  function shareOnLinkedIn() {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  }
  
  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  }
</script>

<svelte:head>
  {#if post}
    <title>{post.title} - DUARDZ</title>
    <meta name="description" content={post.excerpt}>
    <meta property="og:title" content={post.title}>
    <meta property="og:description" content={post.excerpt}>
    <meta property="og:image" content={post.coverImage}>
    <meta property="og:type" content="article">
    <meta name="twitter:card" content="summary_large_image">
  {:else}
    <title>Post Not Found - DUARDZ</title>
  {/if}
</svelte:head>

<!-- Progress Bar -->
<div class="progress-bar" style="width: {scrollProgress}%"></div>

{#if post}
  <!-- Hero Section -->
  <Section background="secondary">
    <div class="post-hero">
      <div class="post-meta">
        <span class="post-category">{post.category}</span>
        <time datetime={post.date}>{formatDate(post.date)}</time>
        <span class="reading-time">{post.readingTime} min read</span>
      </div>
      
      <h1 class="post-title">{post.title}</h1>
      <p class="post-excerpt">{post.excerpt}</p>
      
      <div class="post-author">
        <img src={post.author.image} alt={post.author.name} class="author-image" />
        <div class="author-info">
          <span class="author-name">{post.author.name}</span>
          <span class="author-role">Cybersecurity Enthusiast</span>
        </div>
      </div>
    </div>
  </Section>
  
  <!-- Cover Image -->
  <Section size="sm" background="primary">
    <div class="cover-image">
      <img src={post.coverImage} alt={post.title} />
    </div>
  </Section>
  
  <!-- Article Content -->
  <Section background="primary">
    <div class="article-container">
      <aside class="article-sidebar">
        <div class="sidebar-sticky">
          <div class="share-section">
            <h3>Share this article</h3>
            <div class="share-buttons">
              <button class="share-btn" on:click={shareOnTwitter} aria-label="Share on Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </button>
              <button class="share-btn" on:click={shareOnLinkedIn} aria-label="Share on LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                </svg>
              </button>
              <button class="share-btn" on:click={copyLink} aria-label="Copy link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="tags-section">
            <h3>Topics</h3>
            <div class="tag-list">
              {#each post.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          </div>
        </div>
      </aside>
      
      <article class="article-content">
        {@html htmlContent}
      </article>
    </div>
  </Section>
  
  <!-- Author Bio -->
  <Section background="secondary">
    <Card>
      <div class="author-bio">
        <img src={post.author.image} alt={post.author.name} class="bio-image" />
        <div class="bio-content">
          <h3>About the Author</h3>
          <h4>{post.author.name}</h4>
          <p>
            Aspiring cybersecurity professional with a passion for securing digital infrastructure. 
            Currently focused on penetration testing, network security, and helping organizations 
            build robust security practices.
          </p>
          <div class="bio-links">
            <Button href="/about" variant="secondary" size="sm">Learn More</Button>
            <Button href="/contact" variant="ghost" size="sm">Get in Touch</Button>
          </div>
        </div>
      </div>
    </Card>
  </Section>
  
  <!-- Related Posts -->
  {#if relatedPosts.length > 0}
    <Section background="primary">
      <div class="related-posts">
        <h2 class="heading-2">Related Articles</h2>
        <div class="related-grid">
          {#each relatedPosts as relatedPost}
            <a href="/blog/{relatedPost.slug}" class="related-link">
              <Card hover>
                <div class="related-card">
                  <img src={relatedPost.coverImage} alt={relatedPost.title} class="related-image" />
                  <div class="related-content">
                    <span class="related-category">{relatedPost.category}</span>
                    <h3 class="related-title">{relatedPost.title}</h3>
                    <time class="related-date">{formatDate(relatedPost.date)}</time>
                  </div>
                </div>
              </Card>
            </a>
          {/each}
        </div>
      </div>
    </Section>
  {/if}
  
{:else}
  <!-- 404 State -->
  <Section background="primary">
    <div class="not-found">
      <h1 class="heading-1">Article Not Found</h1>
      <p class="text-lead">The article you're looking for doesn't exist or has been moved.</p>
      <Button href="/blog" variant="primary">Back to Blog</Button>
    </div>
  </Section>
{/if}

<style>
  /* Progress Bar */
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-600), var(--accent-600));
    z-index: var(--z-tooltip);
    transition: width 0.1s ease;
  }
  
  /* Post Hero - Improved Responsive */
  .post-hero {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 0 var(--space-4); /* Added horizontal padding */
  }
  
  .post-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
    font-size: var(--text-sm);
    color: var(--text-muted);
    flex-wrap: wrap;
  }
  
  .post-category {
    padding: var(--space-1) var(--space-3);
    background-color: var(--primary-600);
    color: white;
    border-radius: var(--radius-full);
    font-weight: 500;
  }
  
  .reading-time::before {
    content: '•';
    margin-right: var(--space-2); /* Reduced margin */
  }
  
  .post-title {
    font-size: clamp(1.5rem, 5vw, 3rem); /* Better mobile scaling */
    line-height: 1.2;
    margin-bottom: var(--space-4);
    word-wrap: break-word; /* Prevent overflow */
  }
  
  .post-excerpt {
    font-size: clamp(1rem, 3vw, 1.25rem); /* Responsive font size */
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-6);
  }
  
  .post-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
  }
  
  .author-image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .author-info {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  .author-name {
    font-weight: 600;
  }
  
  .author-role {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }
  
  /* Cover Image - Responsive */
  .cover-image {
    max-width: 1000px;
    margin: 0 auto;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    padding: 0 var(--space-4); /* Added padding for mobile */
  }
  
  .cover-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  /* Article Layout - Major Responsive Improvements */
  .article-container {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: var(--space-8);
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--space-4); /* Added horizontal padding */
  }
  
  .article-sidebar {
    position: relative;
  }
  
  .sidebar-sticky {
    position: sticky;
    top: calc(4rem + var(--space-4));
  }
  
  .share-section,
  .tags-section {
    margin-bottom: var(--space-6);
  }
  
  .share-section h3,
  .tags-section h3 {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin-bottom: var(--space-3);
  }
  
  .share-buttons {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap; /* Allow wrapping on very small screens */
  }
  
  .share-btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all var(--transition-base);
  }
  
  .share-btn:hover {
    background-color: var(--primary-600);
    border-color: var(--primary-600);
    color: white;
    transform: translateY(-2px);
  }
  
  .tag-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .tag {
    padding: var(--space-2) var(--space-3);
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    word-wrap: break-word; /* Prevent overflow */
  }
  
  /* Article Content - Responsive Typography */
  .article-content {
    max-width: 700px;
    min-width: 0; /* Prevent flex overflow */
    word-wrap: break-word; /* Prevent long words from overflowing */
  }
  
  /* Article Typography - Improved Mobile */
  :global(.article-content h1) {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin: var(--space-6) 0 var(--space-4);
    word-wrap: break-word;
  }
  
  :global(.article-content h2) {
    font-size: clamp(1.25rem, 3.5vw, 1.75rem);
    margin: var(--space-6) 0 var(--space-4);
    color: var(--primary-300);
    word-wrap: break-word;
  }
  
  :global(.article-content h3) {
    font-size: clamp(1.125rem, 3vw, 1.5rem);
    margin: var(--space-4) 0 var(--space-3);
    word-wrap: break-word;
  }
  
  :global(.article-content p) {
    margin-bottom: var(--space-4);
    line-height: 1.8;
    color: var(--text-secondary);
    word-wrap: break-word;
  }
  
  :global(.article-content ul),
  :global(.article-content ol) {
    margin-bottom: var(--space-4);
    padding-left: var(--space-4); /* Reduced padding for mobile */
    color: var(--text-secondary);
  }
  
  :global(.article-content li) {
    margin-bottom: var(--space-2);
    line-height: 1.8;
    word-wrap: break-word;
  }
  
  :global(.article-content blockquote) {
    margin: var(--space-4) 0; /* Reduced margin */
    padding-left: var(--space-3); /* Reduced padding */
    border-left: 4px solid var(--primary-600);
    font-style: italic;
    color: var(--text-secondary);
    word-wrap: break-word;
  }
  
  :global(.article-content code) {
    background-color: var(--surface);
    padding: 0.2em 0.4em;
    border-radius: var(--radius-sm);
    font-family: var(--font-mono);
    font-size: 0.85em; /* Slightly smaller for mobile */
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  :global(.article-content pre) {
    background-color: var(--gray-900);
    padding: var(--space-3); /* Reduced padding */
    border-radius: var(--radius-md);
    overflow-x: auto;
    margin-bottom: var(--space-4);
    font-size: 0.85em; /* Smaller font for mobile readability */
  }
  
  :global(.article-content pre code) {
    background: none;
    padding: 0;
    color: var(--accent-400);
    font-size: inherit;
  }
  
  :global(.article-content a) {
    color: var(--primary-400);
    text-decoration: underline;
    word-wrap: break-word;
  }
  
  :global(.article-content a:hover) {
    color: var(--primary-300);
  }
  
  :global(.article-content img) {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-md);
    margin: var(--space-4) 0;
  }
  
  /* Author Bio Section - Enhanced Responsive Design */
  .author-bio {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    align-items: center; /* center image and text horizontally */
    justify-content: center; /* center vertically if needed */
    text-align: center; /* center text inside content */
    padding: var(--space-6);
  }

  
  .bio-image {
    width: 100px;
    height: 100px;
    align-self: center;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    border: 3px solid var(--border);
    transition: transform var(--transition-base);
  }
  
  .bio-image:hover {
    transform: scale(1.05);
  }
  
  .bio-content {
    flex: 1;
    min-width: 0; /* Prevents flex overflow */
  }
  
  .bio-content h3 {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin-bottom: var(--space-2);
    font-weight: 600;
  }
  
  .bio-content h4 {
    font-size: var(--text-xl);
    margin-bottom: var(--space-3);
    color: var(--text-primary);
    font-weight: 700;
  }
  
  .bio-content p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-5);
    font-size: var(--text-base);
  }
  
  .bio-links {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
    justify-content: center; 
    margin: 0 auto;
  }

  
  /* Related Posts - Responsive */
  .related-posts {
    text-align: center;
    padding: 0 var(--space-4);
  }
  
  .related-posts h2 {
    margin-bottom: var(--space-6); /* Reduced margin */
  }
  
  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Smaller min-width */
    gap: var(--space-4); /* Reduced gap */
  }
  
  .related-link {
    text-decoration: none;
    color: inherit;
  }
  
  .related-card {
    height: 100%;
  }
  
  .related-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: var(--radius-md);
    margin-bottom: var(--space-3);
  }
  
  .related-content {
    padding: 0 var(--space-2);
  }
  
  .related-category {
    font-size: var(--text-xs);
    color: var(--primary-400);
    font-weight: 500;
  }
  
  .related-title {
    font-size: var(--text-base); /* Smaller title */
    margin: var(--space-2) 0;
    line-height: 1.3;
    word-wrap: break-word;
  }
  
  .related-date {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }
  
  /* Not Found */
  .not-found {
    text-align: center;
    padding: var(--space-8) var(--space-4); /* Added horizontal padding */
  }
  
  .not-found p {
    margin-bottom: var(--space-6);
  }
  
  /* Responsive Breakpoints - Enhanced */
  
  /* Large tablets and small desktops */
  @media (max-width: 1024px) {
    .article-container {
      grid-template-columns: 1fr;
      gap: var(--space-4); /* Reduced gap */
      padding: 0 var(--space-3);
    }
    
    .article-sidebar {
      order: 2;
    }
    
    .sidebar-sticky {
      position: relative;
      top: 0;
      display: flex;
      gap: var(--space-6);
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .share-section,
    .tags-section {
      margin-bottom: 0;
      flex: 1;
      min-width: 200px;
    }
    
    /* Author Bio - Large tablets */
    .author-bio {
      padding: var(--space-5);
      gap: var(--space-5);
    }
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    .post-hero {
      padding: 0 var(--space-3);
    }
    
    .post-meta {
      font-size: var(--text-xs);
      gap: var(--space-2);
    }
    
    .post-meta .reading-time::before {
      margin-right: var(--space-1);
    }
    
    .cover-image {
      padding: 0 var(--space-3);
    }
    
    .article-container {
      padding: 0 var(--space-2);
      gap: var(--space-3);
    }
    
    .sidebar-sticky {
      flex-direction: column;
      gap: var(--space-4);
    }
    
    .tag-list {
      flex-direction: row;
      flex-wrap: wrap;
    }
    
    .related-posts {
      padding: 0 var(--space-2);
    }
    
    .related-grid {
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
    
    /* Better code block handling on mobile */
    :global(.article-content pre) {
      padding: var(--space-2);
      font-size: 0.8em;
      margin-left: calc(-1 * var(--space-2));
      margin-right: calc(-1 * var(--space-2));
    }
    
    /* Author Bio - Tablets */
    .author-bio {
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: var(--space-4);
      padding: var(--space-4);
    }
    
    .bio-image {
      width: 120px;
      height: 120px;
      margin-bottom: var(--space-2);
    }
    
    .bio-content {
      max-width: 100%;
      text-align: center;
    }
    
    .bio-content h4 {
      font-size: var(--text-lg);
    }
    
    .bio-content p {
      font-size: var(--text-sm);
      max-width: 400px;
      margin: 0 auto var(--space-4);
    }
    
    .bio-links {
      justify-content: center;
      width: 100%;
      max-width: 300px;
    }
  }
  
  /* Small mobile phones */
  @media (max-width: 480px) {
    .post-hero {
      padding: 0 var(--space-2);
    }
    
    .post-meta {
      flex-direction: column;
      gap: var(--space-1);
      align-items: center;
    }
    
    .post-meta .reading-time::before {
      content: '';
      margin: 0;
    }
    
    .cover-image {
      padding: 0 var(--space-2);
    }
    
    .article-container {
      padding: 0 var(--space-1);
    }
    
    .article-content {
      font-size: var(--text-sm);
    }
    
    /* Stack share buttons vertically on very small screens */
    .share-buttons {
      flex-direction: column;
      gap: var(--space-1);
    }
    
    .share-btn {
      width: 100%;
      max-width: 200px;
      height: 44px; /* Larger touch target */
    }
    
    .related-posts {
      padding: 0 var(--space-1);
    }
    
    /* Ultra-mobile typography adjustments */
    :global(.article-content h1) {
      font-size: 1.5rem;
      margin: var(--space-4) 0 var(--space-3);
    }
    
    :global(.article-content h2) {
      font-size: 1.25rem;
      margin: var(--space-4) 0 var(--space-3);
    }
    
    :global(.article-content h3) {
      font-size: 1.125rem;
      margin: var(--space-3) 0 var(--space-2);
    }
    
    :global(.article-content ul),
    :global(.article-content ol) {
      padding-left: var(--space-3);
    }
    
    :global(.article-content blockquote) {
      margin: var(--space-3) 0;
      padding-left: var(--space-2);
      font-size: var(--text-sm);
    }
    
    /* Author Bio - Mobile phones */
    .author-bio {
      padding: var(--space-3);
      gap: var(--space-3);
    }
    
    .bio-image {
      width: 100px;
      height: 100px;
    }
    
    .bio-content h3 {
      font-size: var(--text-xs);
    }
    
    .bio-content h4 {
      font-size: var(--text-base);
      margin-bottom: var(--space-2);
    }
    
    .bio-content p {
      font-size: var(--text-xs);
      line-height: 1.6;
      max-width: 280px;
      margin: 0 auto var(--space-3);
    }
    
    .bio-links {
      flex-direction: column;
      justify-content: center; 
      gap: var(--space-2);
      width: 100%;
      max-width: 240px;
    }
    
    .bio-links :global(.btn) {
      width: 100%;
      min-height: 44px;
      font-size: var(--text-sm);
      padding: var(--space-3) var(--space-4);
    }
  }
  
  /* Extra small screens */
  @media (max-width: 320px) {
    .post-title {
      font-size: 1.5rem;
    }
    
    .post-excerpt {
      font-size: 0.9rem;
    }
    
    .article-content {
      font-size: 0.85rem;
    }
    
    .share-section h3,
    .tags-section h3 {
      font-size: 0.75rem;
    }
    
    .tag {
      font-size: 0.75rem;
      padding: var(--space-1) var(--space-2);
    }
    
    /* Author Bio - Very small screens */
    .author-bio {
      padding: var(--space-2);
    }
    
    .bio-image {
      width: 80px;
      height: 80px;
    }
    
    .bio-content p {
      max-width: 240px;
    }
    
    .bio-links {
      max-width: 200px;
    }
    
    .bio-links :global(.btn) {
      font-size: var(--text-xs);
      padding: var(--space-2) var(--space-3);
    }
  }
</style>
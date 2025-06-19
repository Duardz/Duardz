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
  
  // Progress bar and scroll tracking
  let scrollProgress = 0;
  let readingProgress = 0;
  
  // Link copy notification
  let linkCopied = false;
  
  onMount(() => {
    const updateProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      scrollProgress = (winScroll / height) * 100;
      
      // Calculate reading progress based on article content
      const articleElement = document.querySelector('.article-content');
      if (articleElement) {
        const articleTop = articleElement.offsetTop;
        const articleHeight = articleElement.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (winScroll > articleTop - windowHeight) {
          const progressInArticle = Math.min(
            100,
            Math.max(0, ((winScroll + windowHeight - articleTop) / articleHeight) * 100)
          );
          readingProgress = progressInArticle;
        }
      }
    };
    
    window.addEventListener('scroll', updateProgress);
    updateProgress();
    
    return () => window.removeEventListener('scroll', updateProgress);
  });
  
  // Share functions
  
  function shareOnLinkedIn() {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  }
  
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      linkCopied = true;
      setTimeout(() => {
        linkCopied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  }
</script>

<svelte:head>
  {#if post}
    <title>{post.title} - DUARDZ | Cybersecurity Insights</title>
    <meta name="description" content={post.excerpt}>
    <meta property="og:title" content={post.title}>
    <meta property="og:description" content={post.excerpt}>
    <meta property="og:image" content={post.coverImage}>
    <meta property="og:type" content="article">
  {:else}
    <title>Security Article Not Found - DUARDZ</title>
  {/if}
</svelte:head>

<!-- Enhanced Progress Bar -->
<div class="progress-container">
  <div class="progress-bar" style="width: {scrollProgress}%"></div>
  <div class="reading-progress" style="width: {readingProgress}%"></div>
</div>

{#if post}
  <!-- Hero Section -->
  <Section size="lg" background="primary">
    <div class="post-hero">
      <!-- Animated Background -->
      <div class="hero-background">
        <div class="security-grid"></div>
        <div class="threat-indicators">
          <div class="indicator indicator-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div class="indicator indicator-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div class="hero-content">
        <!-- Security Classification -->
        <div class="classification-banner">
          <div class="classification-level">
            <div class="level-indicator active"></div>
            <span>THREAT INTELLIGENCE</span>
          </div>
          <div class="classification-id">
            ID: {post.slug.toUpperCase()}
          </div>
        </div>
        
        <!-- Post Meta -->
        <div class="post-meta">
          <div class="meta-item category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span class="category-tag">{post.category}</span>
          </div>
          <div class="meta-item date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <time datetime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div class="meta-item reading">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <span>{post.readingTime} min analysis</span>
          </div>
        </div>
        
        <h1 class="post-title">{post.title}</h1>
        <p class="post-excerpt">{post.excerpt}</p>
        
        <!-- Author & Analysis Status -->
        <div class="post-author-section">
          <div class="author-info">
            <img src={post.author.image} alt={post.author.name} class="author-avatar" />
            <div class="author-details">
              <span class="author-name">{post.author.name}</span>
              <span class="author-role">Security Analyst</span>
            </div>
          </div>
          <div class="analysis-status">
            <div class="status-indicator verified"></div>
            <span>Analysis Verified</span>
          </div>
        </div>
      </div>
    </div>
  </Section>
  
  <!-- Cover Image with Overlay -->
  <Section size="sm" background="secondary">
    <div class="cover-image-container">
      <div class="cover-image">
        <img src={post.coverImage} alt={post.title} />
        <div class="image-overlay">
          <div class="overlay-content">
            <div class="threat-level">
              <span class="threat-indicator medium"></span>
              <span>Analysis Level: {post.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
  
  <!-- Article Content -->
  <Section background="primary">
    <div class="article-container">
      <!-- Enhanced Sidebar -->
      <aside class="article-sidebar">
        <div class="sidebar-sticky">
          <!-- Reading Progress -->
          <div class="reading-tracker">
            <div class="tracker-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Reading Progress</span>
            </div>
            <div class="progress-ring">
              <div class="progress-circle" style="--progress: {readingProgress}%"></div>
              <span class="progress-text">{Math.round(readingProgress)}%</span>
            </div>
          </div>
          
          <!-- Enhanced Share Section -->
          <div class="share-section">
            <h3>Share Intelligence</h3>
            <div class="share-buttons">
              <button class="share-btn linkedin" on:click={shareOnLinkedIn} aria-label="Share on LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                </svg>
                <span>LinkedIn</span>
              </button>
              <button class="share-btn copy" on:click={copyLink} aria-label="Copy link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                <span>{linkCopied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
          
          <!-- Security Tags -->
          <div class="tags-section">
            <h3>Threat Tags</h3>
            <div class="tag-list">
              {#each post.tags as tag}
                <span class="security-tag">{tag}</span>
              {/each}
            </div>
          </div>
        </div>
      </aside>
      
      <!-- Enhanced Article Content -->
      <article class="article-content">
        <div class="content-wrapper">
          {@html htmlContent}
        </div>
      </article>
    </div>
  </Section>
  
  <!-- Enhanced Author Bio -->
  <Section background="secondary">
    <Card>
      <div class="author-bio">
        <div class="bio-header">
          <img src={post.author.image} alt={post.author.name} class="bio-avatar" />
          <div class="bio-info">
            <div class="bio-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Security Analyst
            </div>
            <h3>About the Analyst</h3>
            <h4>{post.author.name}</h4>
          </div>
        </div>
        
        <div class="bio-content">
          <p>
            Cybersecurity professional specializing in threat intelligence, vulnerability assessment, 
            and penetration testing. Passionate about sharing knowledge to strengthen digital defenses 
            and building secure, resilient systems for the future.
          </p>
          
          <div class="bio-stats">
            <div class="stat">
              <div class="stat-number">3+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat">
              <div class="stat-number">15+</div>
              <div class="stat-label">Security Articles</div>
            </div>
            <div class="stat">
              <div class="stat-number">∞</div>
              <div class="stat-label">Learning</div>
            </div>
          </div>
          
          <div class="bio-actions">
            <Button href="/about" variant="secondary" size="sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              View Profile
            </Button>
            <Button href="/contact" variant="ghost" size="sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Contact Analyst
            </Button>
          </div>
        </div>
      </div>
    </Card>
  </Section>
  
  <!-- Enhanced Related Posts -->
  {#if relatedPosts.length > 0}
    <Section background="primary">
      <div class="related-posts">
        <div class="section-header">
          <div class="section-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Related Intelligence
          </div>
          <h2 class="heading-2">Similar Threat Analysis</h2>
          <p class="text-secondary">
            Explore related cybersecurity insights and threat intelligence reports
          </p>
        </div>
        
        <div class="related-grid">
          {#each relatedPosts as relatedPost}
            <a href="/blog/{relatedPost.slug}" class="related-link">
              <Card hover animate>
                <div class="related-card">
                  <div class="related-image">
                    <img src={relatedPost.coverImage} alt={relatedPost.title} loading="lazy" />
                    <div class="related-overlay">
                      <span class="related-category">{relatedPost.category}</span>
                    </div>
                  </div>
                  <div class="related-content">
                    <h3 class="related-title">{relatedPost.title}</h3>
                    <div class="related-meta">
                      <time class="related-date">{formatDate(relatedPost.date)}</time>
                      <span class="related-reading">{relatedPost.readingTime} min</span>
                    </div>
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
  <!-- Enhanced 404 State -->
  <Section size="lg" background="primary">
    <div class="not-found">
      <div class="error-icon">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
        </svg>
      </div>
      <h1 class="error-title">404 - Intelligence Not Found</h1>
      <p class="error-description">
        The security article you're looking for has been classified or moved to a secure location.
      </p>
      <div class="error-actions">
        <Button href="/blog" variant="primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Return to Security Hub
        </Button>
        <Button href="/" variant="secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          Home Base
        </Button>
      </div>
    </div>
  </Section>
{/if}

<style>
  /* Enhanced Progress Bar */
  .progress-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    z-index: var(--z-tooltip);
    background: rgba(0, 0, 0, 0.2);
  }
  
  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--gradient-primary);
    transition: width 0.1s ease;
  }
  
  .reading-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--gradient-secondary);
    transition: width 0.2s ease;
    opacity: 0.8;
  }
  
  /* Hero Section */
  .post-hero {
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
  
  .security-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.06) 1px, transparent 1px);
    background-size: 30px 30px;
    animation: security-scan 25s linear infinite;
  }
  
  @keyframes security-scan {
    0% { transform: translate(0, 0); }
    100% { transform: translate(30px, 30px); }
  }
  
  .threat-indicators {
    position: absolute;
    inset: 0;
  }
  
  .indicator {
    position: absolute;
    color: var(--neon-cyan);
    opacity: 0.4;
    animation: threat-pulse 4s ease-in-out infinite;
  }
  
  .indicator-1 {
    top: 25%;
    left: 15%;
    animation-delay: 0s;
  }
  
  .indicator-2 {
    bottom: 30%;
    right: 20%;
    animation-delay: 2s;
  }
  
  @keyframes threat-pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.2); }
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  /* Classification Banner */
  .classification-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3) var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-6);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
  }
  
  .classification-level {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--neon-green);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .level-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  
  .level-indicator.active {
    background: var(--neon-green);
    animation: pulse 2s ease-in-out infinite;
    box-shadow: 0 0 8px var(--neon-green);
  }
  
  .classification-id {
    color: var(--text-muted);
    font-weight: 500;
  }
  
  /* Post Meta */
  .post-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-6);
    margin-bottom: var(--space-6);
    flex-wrap: wrap;
  }
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    font-family: var(--font-mono);
  }
  
  .category-tag {
    padding: var(--space-1) var(--space-3);
    background: var(--gradient-primary);
    color: var(--bg-primary);
    border-radius: var(--radius-full);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .post-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--space-6);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .post-excerpt {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-8);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Author Section */
  .post-author-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .author-info {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }
  
  .author-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border-glow);
  }
  
  .author-details {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  .author-name {
    font-weight: 600;
    color: var(--text-primary);
  }
  
  .author-role {
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
  
  .analysis-status {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--neon-green);
    font-weight: 500;
  }
  
  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  
  .status-indicator.verified {
    background: var(--neon-green);
    animation: pulse 2s ease-in-out infinite;
  }
  
  /* Cover Image */
  .cover-image-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .cover-image {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-glow-lg);
  }
  
  .cover-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
    display: flex;
    align-items: flex-end;
    padding: var(--space-6);
    opacity: 0;
    transition: opacity var(--transition-base);
  }
  
  .cover-image:hover .image-overlay {
    opacity: 1;
  }
  
  .overlay-content {
    width: 100%;
  }
  
  .threat-level {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-primary);
    font-size: var(--text-sm);
    font-weight: 500;
  }
  
  .threat-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  
  .threat-indicator.medium {
    background: var(--cyber-orange);
    animation: pulse 2s ease-in-out infinite;
  }
  
  /* Article Layout */
  .article-container {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: var(--space-8);
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .article-sidebar {
    position: relative;
  }
  
  .sidebar-sticky {
    position: sticky;
    top: calc(4rem + var(--space-4));
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }
  
  /* Reading Tracker */
  .reading-tracker {
    padding: var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    text-align: center;
  }
  
  .tracker-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  .progress-ring {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
  
  .progress-circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(
      var(--neon-cyan) 0deg,
      var(--neon-cyan) calc(var(--progress) * 3.6deg),
      var(--border) calc(var(--progress) * 3.6deg),
      var(--border) 360deg
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .progress-circle::before {
    content: '';
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--bg-primary);
  }
  
  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--neon-cyan);
  }
  
  /* Enhanced Share Section */
  .share-section {
    padding: var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
  }
  
  .share-section h3 {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
    margin-bottom: var(--space-4);
    font-weight: 600;
  }
  
  .share-buttons {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .share-btn {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all var(--transition-base);
    font-size: var(--text-sm);
    font-weight: 500;
  }
  
  .share-btn:hover {
    background: var(--surface-hover);
    border-color: var(--border-glow);
    transform: translateX(4px);
  }
  
  .share-btn.linkedin:hover {
    border-color: #0077B5;
    color: #0077B5;
  }
  
  .share-btn.copy:hover {
    border-color: var(--neon-green);
    color: var(--neon-green);
  }
  
  /* Security Tags */
  .tags-section {
    padding: var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
  }
  
  .tags-section h3 {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
    margin-bottom: var(--space-4);
    font-weight: 600;
  }
  
  .tag-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .security-tag {
    padding: var(--space-2) var(--space-3);
    background: var(--surface);
    border: 1px solid var(--border-glow);
    border-radius: var(--radius-md);
    font-size: var(--text-sm);
    color: var(--neon-cyan);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all var(--transition-base);
  }
  
  .security-tag:hover {
    background: var(--neon-cyan);
    color: var(--bg-primary);
  }
  
  /* Article Content */
  .article-content {
    max-width: 800px;
    min-width: 0;
  }
  
  .content-wrapper {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-xl);
    padding: var(--space-8);
    box-shadow: var(--shadow-lg);
  }
  
  /* Enhanced Article Typography */
  :global(.content-wrapper h1) {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin: var(--space-8) 0 var(--space-4);
    color: var(--text-primary);
    font-weight: 600;
    position: relative;
    padding-left: var(--space-4);
  }
  
  :global(.content-wrapper h1::before) {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
  }
  
  :global(.content-wrapper h2) {
    font-size: clamp(1.25rem, 3.5vw, 1.75rem);
    margin: var(--space-6) 0 var(--space-4);
    color: var(--neon-cyan);
    font-weight: 600;
  }
  
  :global(.content-wrapper h3) {
    font-size: clamp(1.125rem, 3vw, 1.5rem);
    margin: var(--space-4) 0 var(--space-3);
    color: var(--text-primary);
    font-weight: 600;
  }
  
  :global(.content-wrapper p) {
    margin-bottom: var(--space-4);
    line-height: 1.8;
    color: var(--text-secondary);
  }
  
  :global(.content-wrapper ul),
  :global(.content-wrapper ol) {
    margin-bottom: var(--space-4);
    padding-left: var(--space-6);
    color: var(--text-secondary);
  }
  
  :global(.content-wrapper li) {
    margin-bottom: var(--space-2);
    line-height: 1.8;
  }
  
  :global(.content-wrapper blockquote) {
    margin: var(--space-6) 0;
    padding: var(--space-4) var(--space-6);
    background: var(--bg-secondary);
    border-left: 4px solid var(--neon-cyan);
    border-radius: var(--radius-md);
    font-style: italic;
    color: var(--text-secondary);
    position: relative;
  }
  
  :global(.content-wrapper blockquote::before) {
    content: '"';
    position: absolute;
    top: var(--space-2);
    left: var(--space-4);
    font-size: 3rem;
    color: var(--neon-cyan);
    opacity: 0.3;
  }
  
  :global(.content-wrapper code) {
    background: var(--bg-secondary);
    color: var(--neon-green);
    padding: 0.2em 0.4em;
    border-radius: var(--radius-sm);
    font-family: var(--font-mono);
    font-size: 0.9em;
    border: 1px solid var(--border);
  }
  
  :global(.content-wrapper pre) {
    background: var(--bg-secondary);
    border: 1px solid var(--border-glow);
    padding: var(--space-4);
    border-radius: var(--radius-lg);
    overflow-x: auto;
    margin: var(--space-6) 0;
    box-shadow: var(--shadow-lg);
  }
  
  :global(.content-wrapper pre code) {
    background: none;
    border: none;
    padding: 0;
    color: var(--neon-cyan);
    font-size: 0.9em;
  }
  
  :global(.content-wrapper a) {
    color: var(--neon-cyan);
    text-decoration: underline;
    transition: color var(--transition-base);
  }
  
  :global(.content-wrapper a:hover) {
    color: var(--neon-purple);
  }
  
  :global(.content-wrapper img) {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    margin: var(--space-6) 0;
    box-shadow: var(--shadow-lg);
  }
  
  /* Enhanced Author Bio */
  .author-bio {
    padding: var(--space-8);
  }
  
  .bio-header {
    display: flex;
    align-items: center;
    gap: var(--space-6);
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--border);
  }
  
  .bio-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--border-glow);
    box-shadow: var(--shadow-glow);
  }
  
  .bio-info {
    flex: 1;
  }
  
  .bio-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-1) var(--space-3);
    background: var(--gradient-primary);
    color: var(--bg-primary);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--space-3);
  }
  
  .bio-info h3 {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-muted);
    margin-bottom: var(--space-2);
    font-weight: 600;
  }
  
  .bio-info h4 {
    font-size: var(--text-2xl);
    margin-bottom: var(--space-2);
    color: var(--text-primary);
    font-weight: 700;
  }
  
  .bio-content p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-6);
    font-size: var(--text-base);
  }
  
  .bio-stats {
    display: flex;
    gap: var(--space-8);
    margin-bottom: var(--space-6);
  }
  
  .stat {
    text-align: center;
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
  
  .bio-actions {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }
  
  /* Section Components */
  .section-header {
    text-align: center;
    margin-bottom: var(--space-8);
  }
  
  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    color: var(--text-secondary);
    font-size: var(--text-sm);
    font-weight: 500;
    margin-bottom: var(--space-4);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  /* Enhanced Related Posts */
  .related-posts {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-6);
  }
  
  .related-link {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
  }
  
  .related-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .related-image {
    position: relative;
    width: calc(100% + 3rem);
    margin: -1.5rem -1.5rem 1.5rem;
    height: 180px;
    overflow: hidden;
  }
  
  .related-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }
  
  :global(.card:hover) .related-image img {
    transform: scale(1.05);
  }
  
  .related-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
    display: flex;
    align-items: flex-end;
    padding: var(--space-4);
    opacity: 0;
    transition: opacity var(--transition-base);
  }
  
  .related-link:hover .related-overlay {
    opacity: 1;
  }
  
  .related-category {
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
  
  .related-content {
    flex: 1;
    padding: 0 var(--space-2);
  }
  
  .related-title {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-3);
    line-height: 1.3;
    color: var(--text-primary);
  }
  
  .related-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--text-sm);
    color: var(--text-muted);
    font-family: var(--font-mono);
  }
  
  /* Enhanced 404 State */
  .not-found {
    text-align: center;
    padding: var(--space-12) var(--space-4);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .error-icon {
    margin: 0 auto var(--space-6);
    color: var(--neon-cyan);
    opacity: 0.6;
  }
  
  .error-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: var(--space-4);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .error-description {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-8);
  }
  
  .error-actions {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .article-container {
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }
    
    .article-sidebar {
      order: 2;
    }
    
    .sidebar-sticky {
      position: relative;
      top: 0;
      flex-direction: row;
      gap: var(--space-4);
      overflow-x: auto;
      padding-bottom: var(--space-4);
    }
    
    .reading-tracker,
    .share-section,
    .tags-section {
      flex-shrink: 0;
      min-width: 200px;
    }
    
    .bio-header {
      flex-direction: column;
      text-align: center;
    }
    
    .bio-stats {
      justify-content: center;
    }
  }
  
  @media (max-width: 768px) {
    .post-hero {
      min-height: 60vh;
      padding: var(--space-6) 0;
    }
    
    .classification-banner {
      flex-direction: column;
      gap: var(--space-2);
      text-align: center;
    }
    
    .post-meta {
      flex-direction: column;
      gap: var(--space-2);
    }
    
    .post-author-section {
      flex-direction: column;
      gap: var(--space-4);
      text-align: center;
    }
    
    .content-wrapper {
      padding: var(--space-6);
    }
    
    .sidebar-sticky {
      flex-direction: column;
    }
    
    .share-buttons {
      flex-direction: row;
      flex-wrap: wrap;
    }
    
    .share-btn {
      flex: 1;
      min-width: 120px;
    }
    
    .bio-stats {
      gap: var(--space-4);
    }
    
    .bio-actions {
      flex-direction: column;
    }
    
    .related-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .post-title {
      font-size: clamp(1.5rem, 6vw, 2.5rem);
    }
    
    .content-wrapper {
      padding: var(--space-4);
    }
    
    .bio-header {
      gap: var(--space-4);
    }
    
    .bio-avatar {
      width: 100px;
      height: 100px;
    }
    
    .bio-stats {
      flex-direction: column;
      gap: var(--space-3);
    }
    
    .error-actions {
      flex-direction: column;
    }
  }
</style>
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

  // Whiskers the cat functionality
  // @ts-ignore
  let catElement;
  let isAnimating = false;
  let currentMessage = '';
  let showSpeechBubble = false;
  let catMood = 'happy'; // happy, sleepy, excited, thinking

  const catMessages = [
    { text: "Keep calm and code on! 💻", mood: 'happy' },
    { text: "Need a break? I'm here to cheer you up! 😸", mood: 'happy' },
    { text: "Did you know cats are expert debuggers? 🐛", mood: 'excited' },
    { text: "Purr-fect code comes from practice! ✨", mood: 'happy' },
    { text: "Time for a coffee break? ☕", mood: 'sleepy' },
    { text: "I spot a bug in your code... just kidding! 😹", mood: 'excited' },
    { text: "Remember to git commit your work! 🔄", mood: 'thinking' },
    { text: "Meow-nificent coding skills! 🌟", mood: 'excited' },
    { text: "404: Treats not found 🍪", mood: 'thinking' },
    { text: "Console.log('Hello human!') 👋", mood: 'happy' },
    { text: "Coding is better with a cat by your side! 🐱", mood: 'happy' },
    { text: "Have you tried turning it off and on again? 🔌", mood: 'thinking' },
    { text: "Purr-haps you need a code review? 📝", mood: 'thinking' },
    { text: "*yawns* Late night coding session? 🌙", mood: 'sleepy' },
    { text: "My favorite framework? Scratch.js! 😸", mood: 'excited' }
  ];

  function handleCatClick() {
    if (isAnimating) return;
    
    isAnimating = true;
    const messageObj = catMessages[Math.floor(Math.random() * catMessages.length)];
    currentMessage = messageObj.text;
    catMood = messageObj.mood;
    showSpeechBubble = true;

    // Add animation class
    // @ts-ignore
    if (catElement) {
      catElement.classList.add('bounce');
      setTimeout(() => {
        // @ts-ignore
        catElement?.classList.remove('bounce');
      }, 600);
    }

    // Play meow sound
    playMeowSound();

    // Hide speech bubble after 3 seconds
    setTimeout(() => {
      showSpeechBubble = false;
      isAnimating = false;
      catMood = 'happy';
    }, 3000);
  }

  function playMeowSound() {
    try {
      // @ts-ignore
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create a more realistic meow sound
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.4);
    } catch (error) {
      console.log('Audio not supported:', error);
    }
  }

  onMount(() => {
    // Random idle animations
    const idleInterval = setInterval(() => {
      // @ts-ignore
      if (!isAnimating && catElement) {
        const randomAction = Math.random();
        if (randomAction < 0.2) {
          // Blink
          catElement.classList.add('blink');
          // @ts-ignore
          setTimeout(() => catElement?.classList.remove('blink'), 300);
        } else if (randomAction < 0.4) {
          // Tail wag
          catElement.classList.add('tail-wag');
          // @ts-ignore
          setTimeout(() => catElement?.classList.remove('tail-wag'), 1000);
        } else if (randomAction < 0.5) {
          // Ear twitch
          catElement.classList.add('ear-twitch');
          // @ts-ignore
          setTimeout(() => catElement?.classList.remove('ear-twitch'), 500);
        }
      }
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(idleInterval);
  });
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

<!-- Whiskers the Coding Cat Section -->
<Section background="secondary">
  <div class="whiskers-section">
    <div class="whiskers-content">
      <h2 class="heading-2">Meet Whiskers, My Coding Companion! 🐱</h2>
      <p class="whiskers-text">
        Click on Whiskers to get some coding wisdom and see what mood they're in!
      </p>
      
      <div class="cat-container">
        <!-- Speech Bubble -->
        {#if showSpeechBubble}
          <div class="speech-bubble" class:thinking={catMood === 'thinking'}>
            {currentMessage}
            <div class="speech-tail"></div>
          </div>
        {/if}
        
        <!-- Whiskers the Cat -->
        <div 
          class="cat {catMood}"
          bind:this={catElement}
          on:click={handleCatClick}
          on:keydown={(e) => e.key === 'Enter' && handleCatClick()}
          role="button"
          tabindex="0"
          aria-label="Click to interact with Whiskers the coding cat"
        >
          <!-- Cat SVG -->
          <svg width="120" height="100" viewBox="0 0 120 100" class="cat-svg">
            <!-- Shadow -->
            <ellipse cx="60" cy="95" rx="30" ry="5" fill="rgba(0,0,0,0.2)" class="cat-shadow"/>
            
            <!-- Tail -->
            <path d="M 85 75 Q 95 65 105 70 Q 110 75 105 80 Q 95 85 85 75" 
                  fill="#FF6B35" stroke="#E74C3C" stroke-width="1" class="cat-tail"/>
            
            <!-- Body -->
            <ellipse cx="60" cy="70" rx="25" ry="20" fill="#FF6B35" class="cat-body"/>
            
            <!-- Body stripes -->
            <path d="M 40 65 Q 60 62 80 65" stroke="#E74C3C" stroke-width="2" fill="none" opacity="0.5"/>
            <path d="M 42 72 Q 60 69 78 72" stroke="#E74C3C" stroke-width="2" fill="none" opacity="0.5"/>
            
            <!-- Paws -->
            <ellipse cx="48" cy="88" rx="7" ry="5" fill="#FF6B35" class="cat-paw-left"/>
            <ellipse cx="72" cy="88" rx="7" ry="5" fill="#FF6B35" class="cat-paw-right"/>
            <circle cx="45" cy="88" r="2" fill="#E74C3C" opacity="0.5"/>
            <circle cx="48" cy="90" r="2" fill="#E74C3C" opacity="0.5"/>
            <circle cx="51" cy="88" r="2" fill="#E74C3C" opacity="0.5"/>
            <circle cx="69" cy="88" r="2" fill="#E74C3C" opacity="0.5"/>
            <circle cx="72" cy="90" r="2" fill="#E74C3C" opacity="0.5"/>
            <circle cx="75" cy="88" r="2" fill="#E74C3C" opacity="0.5"/>
            
            <!-- Head -->
            <circle cx="60" cy="40" r="20" fill="#FF6B35" class="cat-head"/>
            
            <!-- Head stripes -->
            <path d="M 45 35 Q 60 32 75 35" stroke="#E74C3C" stroke-width="2" fill="none" opacity="0.5"/>
            
            <!-- Ears -->
            <path d="M 40 25 L 45 35 L 35 35 Z" fill="#FF6B35" class="cat-ear-left"/>
            <path d="M 80 25 L 85 35 L 75 35 Z" fill="#FF6B35" class="cat-ear-right"/>
            <path d="M 41 28 L 44 33 L 38 33 Z" fill="#FFB6A3" class="cat-ear-inner-left"/>
            <path d="M 79 28 L 82 33 L 76 33 Z" fill="#FFB6A3" class="cat-ear-inner-right"/>
            
            <!-- Eyes -->
            <g class="cat-eyes">
              <ellipse cx="52" cy="38" rx="4" ry="5" fill="#2C3E50" class="cat-eye-left"/>
              <ellipse cx="68" cy="38" rx="4" ry="5" fill="#2C3E50" class="cat-eye-right"/>
              <ellipse cx="53" cy="37" rx="2" ry="3" fill="white" opacity="0.8"/>
              <ellipse cx="69" cy="37" rx="2" ry="3" fill="white" opacity="0.8"/>
              <circle cx="52" cy="38" r="2" fill="#1a1a1a" class="cat-pupil-left"/>
              <circle cx="68" cy="38" r="2" fill="#1a1a1a" class="cat-pupil-right"/>
            </g>
            
            <!-- Nose -->
            <path d="M 60 42 L 57 45 L 63 45 Z" fill="#E74C3C" stroke="#C0392B" stroke-width="0.5"/>
            
            <!-- Mouth -->
            <path d="M 60 45 Q 56 47 52 45" stroke="#2C3E50" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <path d="M 60 45 Q 64 47 68 45" stroke="#2C3E50" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            
            <!-- Whiskers -->
            <line x1="30" y1="38" x2="45" y2="37" stroke="#2C3E50" stroke-width="1" class="whisker whisker-1"/>
            <line x1="30" y1="42" x2="45" y2="41" stroke="#2C3E50" stroke-width="1" class="whisker whisker-2"/>
            <line x1="30" y1="46" x2="45" y2="45" stroke="#2C3E50" stroke-width="1" class="whisker whisker-3"/>
            <line x1="75" y1="37" x2="90" y2="38" stroke="#2C3E50" stroke-width="1" class="whisker whisker-4"/>
            <line x1="75" y1="41" x2="90" y2="42" stroke="#2C3E50" stroke-width="1" class="whisker whisker-5"/>
            <line x1="75" y1="45" x2="90" y2="46" stroke="#2C3E50" stroke-width="1" class="whisker whisker-6"/>
            
            <!-- Expression elements -->
            <g class="cat-expression">
              <!-- Sleepy z's (hidden by default) -->
              <text x="85" y="30" fill="#2C3E50" font-size="12" font-weight="bold" opacity="0" class="sleepy-z z1">Z</text>
              <text x="90" y="25" fill="#2C3E50" font-size="10" font-weight="bold" opacity="0" class="sleepy-z z2">z</text>
              <text x="95" y="20" fill="#2C3E50" font-size="8" font-weight="bold" opacity="0" class="sleepy-z z3">z</text>
              
              <!-- Excited stars (hidden by default) -->
              <text x="35" y="25" fill="#FFD700" font-size="14" opacity="0" class="excited-star star1">✨</text>
              <text x="80" y="25" fill="#FFD700" font-size="14" opacity="0" class="excited-star star2">✨</text>
              
              <!-- Thinking dots (hidden by default) -->
              <circle cx="85" cy="20" r="2" fill="#2C3E50" opacity="0" class="thinking-dot dot1"/>
              <circle cx="90" cy="15" r="3" fill="#2C3E50" opacity="0" class="thinking-dot dot2"/>
              <circle cx="95" cy="10" r="4" fill="#2C3E50" opacity="0" class="thinking-dot dot3"/>
            </g>
          </svg>
          
          <!-- Laptop -->
          <div class="laptop">
            <div class="laptop-screen">
              <div class="code-lines">
                <div class="code-line code-line-1"></div>
                <div class="code-line code-line-2"></div>
                <div class="code-line code-line-3"></div>
              </div>
            </div>
            <div class="laptop-base">
              <div class="laptop-logo"></div>
            </div>
          </div>
        </div>
        
        <p class="cat-instruction">
          Click me for coding wisdom! 🖱️
        </p>
      </div>
    </div>
  </div>
</Section>

<style>
  /* Previous styles remain the same for blog sections... */
  
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
  
  /* Whiskers the Coding Cat Styles */
  .whiskers-section {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    padding: 0 var(--space-4);
  }
  
  .whiskers-content {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: var(--radius-xl);
    padding: var(--space-8);
    color: white;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .whiskers-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath d='M10 0l10 10-10 10L0 10z'/%3E%3C%2Fg%3E%3C%2Fsvg%3E") repeat;
    pointer-events: none;
  }
  
  .whiskers-content h2,
  .whiskers-text {
    position: relative;
    z-index: 1;
  }
  
  .whiskers-text {
    font-size: var(--text-lg);
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: var(--space-6);
    line-height: 1.6;
  }
  
  .cat-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
  }
  
  .cat {
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    user-select: none;
  }
  
  .cat:hover {
    transform: scale(1.05);
  }
  
  .cat:active {
    transform: scale(0.95);
  }
  
  .cat.bounce {
    animation: bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(-5deg); }
    50% { transform: translateY(-15px) rotate(0deg); }
    75% { transform: translateY(-10px) rotate(5deg); }
  }
  
  .cat-svg {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    transition: all 0.3s ease;
  }
  
  .cat-shadow {
    transition: all 0.3s ease;
  }
  
  .cat:hover .cat-shadow {
    transform: scale(1.1);
  }
  
  /* Cat animations */
  .cat.blink .cat-eye-left,
  .cat.blink .cat-eye-right {
    animation: blink 0.3s ease-in-out;
  }
  
  @keyframes blink {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.1); }
  }
  
  .cat.tail-wag .cat-tail {
    animation: tailWag 1s ease-in-out;
    transform-origin: 85px 75px;
  }
  
  @keyframes tailWag {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(15deg); }
    75% { transform: rotate(-15deg); }
  }
  
  .cat.ear-twitch .cat-ear-left {
    animation: earTwitchLeft 0.5s ease-in-out;
    transform-origin: 40px 30px;
  }
  
  .cat.ear-twitch .cat-ear-right {
    animation: earTwitchRight 0.5s ease-in-out;
    transform-origin: 80px 30px;
  }
  
  @keyframes earTwitchLeft {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-10deg); }
  }
  
  @keyframes earTwitchRight {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(10deg); }
  }
  
  /* Whiskers animation */
  .cat:hover .whisker {
    animation: whiskerTwitch 0.5s ease-in-out;
  }
  
  .whisker-1, .whisker-4 { transform-origin: right center; }
  .whisker-2, .whisker-5 { transform-origin: right center; animation-delay: 0.1s; }
  .whisker-3, .whisker-6 { transform-origin: right center; animation-delay: 0.2s; }
  
  @keyframes whiskerTwitch {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(3deg); }
  }
  
  /* Mood-based animations */
  .cat.sleepy .cat-eye-left,
  .cat.sleepy .cat-eye-right {
    transform: scaleY(0.3);
  }
  
  .cat.sleepy .sleepy-z {
    animation: floatUp 2s ease-in-out infinite;
  }
  
  .cat.sleepy .z1 { animation-delay: 0s; }
  .cat.sleepy .z2 { animation-delay: 0.3s; }
  .cat.sleepy .z3 { animation-delay: 0.6s; }
  
  @keyframes floatUp {
    0% { 
      opacity: 0;
      transform: translate(0, 0);
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% { 
      opacity: 0;
      transform: translate(10px, -20px);
    }
  }
  
  .cat.excited .excited-star {
    animation: sparkle 0.8s ease-in-out;
  }
  
  .cat.excited .star1 { animation-delay: 0s; }
  .cat.excited .star2 { animation-delay: 0.2s; }
  
  @keyframes sparkle {
    0%, 100% { 
      opacity: 0;
      transform: scale(0) rotate(0deg);
    }
    50% { 
      opacity: 1;
      transform: scale(1) rotate(180deg);
    }
  }
  
  .cat.excited .cat-tail {
    animation: excitedTailWag 0.3s ease-in-out infinite;
  }
  
  @keyframes excitedTailWag {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }
  
  .cat.thinking .thinking-dot {
    animation: thinkingDots 1.5s ease-in-out infinite;
  }
  
  .cat.thinking .dot1 { animation-delay: 0s; }
  .cat.thinking .dot2 { animation-delay: 0.2s; }
  .cat.thinking .dot3 { animation-delay: 0.4s; }
  
  @keyframes thinkingDots {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
  
  .cat.thinking .cat-head {
    animation: headTilt 2s ease-in-out infinite;
    transform-origin: center center;
  }
  
  @keyframes headTilt {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-5deg); }
    75% { transform: rotate(5deg); }
  }
  
  /* Laptop */
  .laptop {
    margin-top: var(--space-3);
    position: relative;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
  
  .laptop-screen {
    width: 60px;
    height: 40px;
    background: #2C3E50;
    border-radius: 4px 4px 0 0;
    border: 2px solid #34495E;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%);
  }
  
  .laptop-screen::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #1a1a1a;
    border-radius: 2px;
  }
  
  .laptop-base {
    width: 70px;
    height: 5px;
    background: linear-gradient(180deg, #95A5A6 0%, #7F8C8D 100%);
    border-radius: 0 0 8px 8px;
    margin: 0 auto;
    position: relative;
  }
  
  .laptop-base::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: #7F8C8D;
    border-radius: 0 0 4px 4px;
  }
  
  .laptop-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #BDC3C7;
    border-radius: 50%;
  }
  
  .code-lines {
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: relative;
    z-index: 1;
  }
  
  .code-line {
    height: 2px;
    border-radius: 1px;
    position: relative;
  }
  
  .code-line-1 {
    width: 80%;
    background: #27AE60;
    animation: typing1 3s infinite;
  }
  
  .code-line-2 {
    width: 60%;
    background: #3498DB;
    animation: typing2 3s infinite;
  }
  
  .code-line-3 {
    width: 90%;
    background: #E74C3C;
    animation: typing3 3s infinite;
  }
  
  @keyframes typing1 {
    0%, 100% { opacity: 0.3; width: 20%; }
    50% { opacity: 1; width: 80%; }
  }
  
  @keyframes typing2 {
    0%, 100% { opacity: 0.3; width: 30%; }
    50% { opacity: 1; width: 60%; }
  }
  
  @keyframes typing3 {
    0%, 100% { opacity: 0.3; width: 40%; }
    50% { opacity: 1; width: 90%; }
  }
  
  /* Speech Bubble */
  .speech-bubble {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    color: #2C3E50; /* Dark text color */
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-lg);
    font-size: var(--text-sm);
    font-weight: 500;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: popIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 10;
    max-width: 250px;
    white-space: normal;
    text-align: center;
    line-height: 1.4;
  }
  
  .speech-bubble.thinking {
    font-style: italic;
  }
  
  .speech-tail {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
  }
  
  @keyframes popIn {
    0% {
      opacity: 0;
      transform: translateX(-50%) scale(0.8) translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) scale(1) translateY(0);
    }
  }
  
  .cat-instruction {
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.8);
    margin-top: var(--space-2);
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
  
  /* Accessibility improvements */
  .cat:focus {
    outline: 2px solid rgba(255, 255, 255, 0.8);
    outline-offset: 4px;
    border-radius: var(--radius-lg);
  }
  
  .cat:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.8);
    outline-offset: 4px;
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
    
    .whiskers-section {
      padding: 0 var(--space-3);
    }
    
    .whiskers-content {
      padding: var(--space-6);
    }
    
    .cat-svg {
      width: 100px;
      height: 83px;
    }
    
    .laptop-screen {
      width: 50px;
      height: 33px;
    }
    
    .laptop-base {
      width: 58px;
    }
    
    .speech-bubble {
      max-width: 200px;
      font-size: var(--text-xs);
      padding: var(--space-2) var(--space-3);
    }
  }
  
  @media (max-width: 480px) {
    .whiskers-content {
      padding: var(--space-4);
    }
    
    .whiskers-text {
      font-size: var(--text-base);
    }
    
    .cat-svg {
      width: 90px;
      height: 75px;
    }
    
    .laptop-screen {
      width: 45px;
      height: 30px;
    }
    
    .laptop-base {
      width: 52px;
    }
    
    .speech-bubble {
      max-width: 180px;
      bottom: 110%;
    }
    
    .cat-instruction {
      font-size: var(--text-xs);
    }
  }
  
  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    .cat,
    .cat-svg,
    .speech-bubble,
    .code-line,
    .cat-instruction {
      animation: none !important;
      transition: none !important;
    }
    
    .cat:hover {
      transform: none;
    }
    
    .cat.blink .cat-eye-left,
    .cat.blink .cat-eye-right,
    .cat.tail-wag .cat-tail,
    .cat.ear-twitch .cat-ear-left,
    .cat.ear-twitch .cat-ear-right,
    .cat:hover .whisker,
    .cat.sleepy .sleepy-z,
    .cat.excited .excited-star,
    .cat.excited .cat-tail,
    .cat.thinking .thinking-dot,
    .cat.thinking .cat-head {
      animation: none;
    }
  }
</style>
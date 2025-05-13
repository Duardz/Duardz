<!-- Blog Page: src/routes/blog/+page.svelte (COMPLETE VERSION - PART 2) -->
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
      coverImage: "/images/blog1.jpg"
    },
    // ... other blog posts would be here ...
  ];
  
  // Current blog post for detailed view
  // @ts-ignore
  let currentPost = null;
  
  // Filter by category
  let categories = [...new Set(blogPosts.map(post => post.category))];
  let selectedCategory = "All";
  
  $: filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
    
  // @ts-ignore
  function filterByCategory(category) {
    selectedCategory = category;
  }
  
  // @ts-ignore
  function viewPost(post) {
    currentPost = post;
    window.scrollTo(0, 0);
  }
  
  function goBack() {
    currentPost = null;
  }
</script>

<svelte:head>
  <title>{currentPost ? currentPost.title : 'Blog'} | CyberPortfolio</title>
</svelte:head>

{#if !currentPost}
  <!-- Blog post list view -->
  <section class="section">
    <div class="container">
      <h1>Blog</h1>
      <p style="margin-bottom: 2rem;">Insights, analysis, and guides on various cybersecurity topics. Stay informed about the latest trends, threats, and best practices in the cybersecurity landscape.</p>
      
      <!-- Category filter -->
      <div style="margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <button 
          class="btn btn-outline" 
          style={selectedCategory === 'All' ? 'background-color: var(--primary); color: white;' : ''}
          on:click={() => filterByCategory('All')}
        >
          All
        </button>
        
        {#each categories as category}
          <button 
            class="btn btn-outline" 
            style={selectedCategory === category ? 'background-color: var(--primary); color: white;' : ''}
            on:click={() => filterByCategory(category)}
          >
            {category}
          </button>
        {/each}
      </div>
      
      <!-- Blog posts grid -->
      <div class="grid grid-2">
        {#each filteredPosts as post}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <div class="card blog-card" on:click={() => viewPost(post)}>
            <div class="card-content">
              <img src={post.coverImage} alt={post.title} style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;" />
              <h3 class="card-title">{post.title}</h3>
              <div class="blog-meta">
                <span>{post.date}</span>
                <span class="blog-category">{post.category}</span>
              </div>
              <p>{post.excerpt}</p>
              <button class="btn" on:click|stopPropagation={() => viewPost(post)}>Read More</button>
            </div>
          </div>
        {/each}
      </div>
      
      {#if filteredPosts.length === 0}
        <div style="text-align: center; padding: 3rem 0;">
          <h3>No posts in this category yet.</h3>
          <button class="btn" style="margin-top: 1rem;" on:click={() => filterByCategory('All')}>View All Posts</button>
        </div>
      {/if}
    </div>
  </section>
{:else}
  <!-- Single blog post view -->
  <section class="section">
    <div class="container">
      <button class="btn btn-outline" style="margin-bottom: 2rem;" on:click={goBack}>
        <span style="display: inline-flex; align-items: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Blog
        </span>
      </button>
      
      <img src={currentPost.coverImage} alt={currentPost.title} style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 4px; margin-bottom: 2rem;" />
      
      <div class="blog-meta" style="margin-bottom: 1rem;">
        <span style="font-size: 1rem; color: var(--text-secondary);">{currentPost.date}</span>
        <span class="blog-category">{currentPost.category}</span>
      </div>
      
      <h1>{currentPost.title}</h1>
      
      <div class="author-info" style="display: flex; align-items: center; margin: 2rem 0; padding: 1rem; background-color: var(--dark-surface); border-radius: 4px;">
        <img src={currentPost.authorImage} alt={currentPost.author} style="width: 60px; height: 60px; border-radius: 50%; margin-right: 1rem;" />
        <div>
          <h4 style="margin-bottom: 0.25rem;">{currentPost.author}</h4>
          <p style="margin: 0; font-size: 0.9rem;">Cybersecurity Professional</p>
        </div>
      </div>
      
      <div class="blog-content">
        {@html currentPost.content}
      </div>
      
      <div style="margin-top: 3rem; text-align: center;">
        <button class="btn" on:click={goBack}>Back to Blog</button>
      </div>
    </div>
  </section>
{/if}

<section class="section" style="background-color: var(--dark-elevated); padding: 4rem 0;">
  <div class="container" style="text-align: center;">
    <h2>Stay Updated</h2>
    <p style="max-width: 700px; margin: 0 auto 2rem auto;">Subscribe to my newsletter to receive the latest updates on cybersecurity trends, threats, and best practices directly in your inbox.</p>
    
    <div style="display: flex; max-width: 500px; margin: 0 auto;">
      <input type="email" placeholder="Enter your email" style="flex: 1; padding: 0.75rem; background-color: var(--dark-surface); border: 1px solid var(--border-color); border-radius: 4px 0 0 4px; color: var(--text-primary);" />
      <button class="btn" style="border-radius: 0 4px 4px 0;">Subscribe</button>
    </div>
    <p style="font-size: 0.8rem; margin-top: 1rem; color: var(--text-secondary);">I respect your privacy. Your information will not be shared.</p>
  </div>
</section>
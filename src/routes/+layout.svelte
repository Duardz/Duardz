<!-- Layout Component: src/routes/+layout.svelte -->
<script>
  import { page } from '$app/stores';
  import '../app.css';
  import { onMount } from 'svelte';
  
  let isMobileMenuOpen = false;
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };
  
  onMount(() => {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      const mobileMenu = document.querySelector('.nav-links');
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      
      // @ts-ignore
      if (isMobileMenuOpen && mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        isMobileMenuOpen = false;
      }
    });
  });
</script>

<header class="navbar">
  <div class="container navbar-inner">
    <a href="/" class="logo">
      <span class="logo-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </span>
      <span>DUARDZ</span>
    </a>
    
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="mobile-menu-btn" on:click={toggleMobileMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
    
    <nav class:active={isMobileMenuOpen} class="nav-links">
      <a href="/" class="nav-link" class:active={$page.url.pathname === '/'}>Home</a>
      <a href="/about" class="nav-link" class:active={$page.url.pathname === '/about'}>About</a>
      <a href="/certificates" class="nav-link" class:active={$page.url.pathname === '/certificates'}>Certificates</a>
      <a href="/projects" class="nav-link" class:active={$page.url.pathname === '/projects'}>Projects</a>
      <a href="/blog" class="nav-link" class:active={$page.url.pathname === '/blog'}>Blog</a>
      <a href="/contact" class="nav-link" class:active={$page.url.pathname === '/contact'}>Contact</a>
    </nav>
  </div>
</header>

<main>
  <slot />
</main>

<footer class="footer">
  <div class="container footer-content">
    <p class="footer-text">© {new Date().getFullYear()} Duardz. All rights reserved.</p>
    <ul class="social-links">
      <li>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </li>
      <li>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </li>
      <li>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</footer>

<!-- Matrix background decoration -->
<div class="matrix-bg">
  <!-- This would be implemented with a simple canvas animation in a separate component -->
</div>
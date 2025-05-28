<!-- lib/components/layout/Header.svelte -->
<script>
// @ts-nocheck

  import { page } from '$app/stores';
  import Button from '$lib/components/ui/Button.svelte';
  
  export let isMenuOpen = false;
  export let scrolled = false;
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="header" class:scrolled>
  <nav class="nav container">
    <a href="/" class="logo">
      <svg class="logo-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
      <span class="logo-text">Eduardo</span>
    </a>
    
    <!-- Desktop Navigation -->
    <ul class="nav-list hide-mobile">
      {#each navItems as item}
        <li>
          <a 
            href={item.href} 
            class="nav-link"
            class:active={$page.url.pathname === item.href}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
    
    <div class="nav-actions hide-mobile">
      <Button href="/contact" size="sm">
        Get In Touch
      </Button>
    </div>
    
    <!-- Mobile Menu Button -->
    <button 
      class="menu-toggle show-mobile"
      on:click={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        {#if isMenuOpen}
          <path d="M18 6L6 18M6 6l12 12"/>
        {:else}
          <path d="M3 12h18M3 6h18M3 18h18"/>
        {/if}
      </svg>
    </button>
  </nav>
  
  <!-- Mobile Navigation -->
  <div class="mobile-nav" class:open={isMenuOpen}>
    <ul class="mobile-nav-list">
      {#each navItems as item}
        <li>
          <a 
            href={item.href} 
            class="mobile-nav-link"
            class:active={$page.url.pathname === item.href}
            on:click={() => isMenuOpen = false}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
    <div class="mobile-nav-actions">
      <Button href="/contact" variant="primary" size="lg">
        Get In Touch
      </Button>
    </div>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(3, 7, 18, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid transparent;
    z-index: var(--z-sticky);
    transition: all var(--transition-base);
  }
  
  .header.scrolled {
    background-color: rgba(3, 7, 18, 0.95);
    border-bottom-color: var(--border);
  }
  
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-primary);
    font-weight: 700;
    font-size: var(--text-xl);
    transition: color var(--transition-base);
  }
  
  .logo:hover {
    color: var(--primary-400);
  }
  
  .logo-icon {
    color: var(--primary-400);
  }
  
  .nav-list {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-link {
    padding: var(--space-2) var(--space-3);
    color: var(--text-secondary);
    font-weight: 500;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }
  
  .nav-link:hover {
    color: var(--text-primary);
    background-color: var(--surface);
  }
  
  .nav-link.active {
    color: var(--primary-400);
  }
  
  .nav-actions {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }
  
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }
  
  .menu-toggle:hover {
    background-color: var(--surface);
  }
  
  /* Mobile Navigation */
  .mobile-nav {
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-secondary);
    transform: translateX(100%);
    transition: transform var(--transition-base);
    overflow-y: auto;
    z-index: var(--z-fixed);
  }
  
  .mobile-nav.open {
    transform: translateX(0);
  }
  
  .mobile-nav-list {
    list-style: none;
    padding: var(--space-4);
    margin: 0;
  }
  
  .mobile-nav-link {
    display: block;
    padding: var(--space-4);
    color: var(--text-primary);
    font-size: var(--text-lg);
    font-weight: 500;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
  }
  
  .mobile-nav-link:hover {
    background-color: var(--surface);
  }
  
  .mobile-nav-link.active {
    color: var(--primary-400);
    background-color: var(--surface);
  }
  
  .mobile-nav-actions {
    padding: var(--space-4);
    border-top: 1px solid var(--border);
  }
  
  /* Responsive utilities */
  @media (max-width: 768px) {
    .hide-mobile {
      display: none !important;
    }
  }
  
  @media (min-width: 769px) {
    .show-mobile {
      display: none !important;
    }
    
    .mobile-nav {
      display: none;
    }
  }
</style>
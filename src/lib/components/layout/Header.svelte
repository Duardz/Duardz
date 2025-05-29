<script>
// @ts-nocheck
  import { page } from '$app/stores';
  import Button from '$lib/components/ui/Button.svelte';

  export let scrolled = false;
  let isMenuOpen = false;

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

  // Close the mobile menu when a route is clicked
  $: $page.url.pathname, isMenuOpen = false;
</script>

<header class="header" class:scrolled>
  <nav class="nav container">
    <a href="/" class="logo">
      <svg class="logo-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
      <span class="logo-text">Eduardo</span>
    </a>

    <!-- Desktop nav -->
    <ul class="nav-list hide-mobile">
      {#each navItems as item}
        <li>
          <a href={item.href} class="nav-link" class:active={$page.url.pathname === item.href}>
            {item.label}
          </a>
        </li>
      {/each}
    </ul>

    <div class="nav-actions hide-mobile">
      <Button href="/contact" size="sm">Get In Touch</Button>
    </div>

    <!-- Hamburger -->
    <button
      class="menu-toggle show-mobile"
      on:click={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        {#if isMenuOpen}
          <path d="M18 6L6 18M6 6l12 12" />
        {:else}
          <path d="M3 12h18M3 6h18M3 18h18" />
        {/if}
      </svg>
    </button>
  </nav>

  <!-- Mobile Nav -->
  <div class="mobile-nav" class:open={isMenuOpen}>
    <div class="mobile-nav-panel">
      <ul class="mobile-nav-list">
        {#each navItems as item}
          <li>
            <a 
              href={item.href}
              class="mobile-nav-link"
              class:active={$page.url.pathname === item.href}
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
    z-index: 100;
    transition: all 0.3s ease;
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
    gap: 0.5rem;
    color: var(--text-primary);
    font-weight: 700;
    font-size: 1.25rem;
  }

  .logo-icon {
    color: var(--primary-400);
  }

  .nav-list {
    display: flex;
    gap: 1rem;
    list-style: none;
  }

  .nav-link {
    padding: 0.5rem 0.75rem;
    color: var(--text-secondary);
    border-radius: 0.375rem;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--primary-400);
  }

  .menu-toggle {
    background: none;
    border: none;
    padding: 0.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    color: var(--text-primary);
  }

  .menu-toggle:hover {
    background-color: var(--surface);
  }

  /* Mobile nav */
  .mobile-nav {
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 90;
    display: none;
  }

  .mobile-nav.open {
    display: block;
    transform: translateX(0);
  }

  .mobile-nav-panel {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80%;
    height: fit-content;
    max-width: 300px;
    background-color: #111827;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .mobile-nav-list {
    padding: 1rem;
    list-style: none;
    text-align: left;
    background-color: var(--surface);
  }

  .mobile-nav-link {
    display: block;
    text-align: left;
    padding: 1rem;
    color: var(--text-primary);
    font-size: 1.125rem;
    border-radius: 0.375rem;
  }

  .mobile-nav-link.active,
  .mobile-nav-link:hover {
    background-color: var(--surface);
    color: var(--primary-400);
  }

  .mobile-nav-actions {
    padding: 1rem;
    border-top: 1px solid var(--border);
  }

  /* Responsive helpers */
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
      display: none !important;
    }
  }
</style>

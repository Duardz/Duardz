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
      <div class="logo-icon-wrapper">
        <svg class="logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <div class="logo-glow"></div>
      </div>
      <span class="logo-text">
        <span class="logo-letter logo-d">D</span>
        <span class="logo-letter logo-u">U</span>
        <span class="logo-letter logo-a">A</span>
        <span class="logo-letter logo-r">R</span>
        <span class="logo-letter logo-d2">D</span>
        <span class="logo-letter logo-z">Z</span>
      </span>
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

  /* Enhanced Logo Styles */
  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-primary);
    font-weight: 700;
    font-size: 1.5rem;
    transition: all var(--transition-base);
    text-decoration: none;
  }

  .logo:hover {
    transform: scale(1.05);
  }

  .logo-icon-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary-600), var(--accent-600));
    border-radius: 8px;
    transition: all var(--transition-base);
  }

  .logo:hover .logo-icon-wrapper {
    background: linear-gradient(135deg, var(--primary-400), var(--accent-400));
    box-shadow: 0 0 20px var(--primary-400);
  }

  .logo-icon {
    color: white;
    z-index: 2;
    position: relative;
  }

  .logo-glow {
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, var(--primary-400), var(--accent-400));
    border-radius: 10px;
    opacity: 0;
    z-index: -1;
    transition: opacity var(--transition-base);
  }

  .logo:hover .logo-glow {
    opacity: 0.6;
    animation: logo-pulse 2s ease-in-out infinite;
  }

  .logo-text {
    font-family: var(--font-mono);
    font-weight: 800;
    letter-spacing: 2px;
    display: flex;
    gap: 1px;
  }

  .logo-letter {
    display: inline-block;
    transition: all var(--transition-base);
    position: relative;
  }

  /* Individual letter effects */
  .logo-d {
    color: var(--primary-400);
  }

  .logo-u {
    color: var(--accent-400);
  }

  .logo-a {
    color: var(--primary-300);
  }

  .logo-r {
    color: var(--accent-300);
  }

  .logo-d2 {
    color: var(--primary-400);
  }

  .logo-z {
    color: var(--accent-400);
    font-weight: 900;
  }

  /* Hover effects for letters */
  .logo:hover .logo-letter {
    animation: letter-glow 0.6s ease-in-out;
  }

  .logo:hover .logo-d {
    animation-delay: 0s;
  }

  .logo:hover .logo-u {
    animation-delay: 0.1s;
  }

  .logo:hover .logo-a {
    animation-delay: 0.2s;
  }

  .logo:hover .logo-r {
    animation-delay: 0.3s;
  }

  .logo:hover .logo-d2 {
    animation-delay: 0.4s;
  }

  .logo:hover .logo-z {
    animation-delay: 0.5s;
  }

  @keyframes logo-pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  @keyframes letter-glow {
    0%, 100% {
      text-shadow: none;
      transform: translateY(0);
    }
    50% {
      text-shadow: 0 0 10px currentColor;
      transform: translateY(-2px);
    }
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
    transition: all var(--transition-base);
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--primary-400);
    background-color: rgba(79, 70, 229, 0.1);
  }

  .menu-toggle {
    background: none;
    border: none;
    padding: 0.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    color: var(--text-primary);
    transition: all var(--transition-base);
  }

  .menu-toggle:hover {
    background-color: var(--surface);
    color: var(--primary-400);
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
    border-left: 1px solid var(--border);
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
    transition: all var(--transition-base);
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

    .logo {
      font-size: 1.25rem;
    }

    .logo-icon-wrapper {
      width: 36px;
      height: 36px;
    }

    .logo-text {
      letter-spacing: 1px;
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